---
title: Fixing the ERR_TOO_MANY_REDIRECTS error with Wordpress
created: 2020-05-09
updated: 2021-07-12
description: Every Wordpress developer sooner or later faces the ERR_TOO_MANY_REDIRECTS problem. Here is how to fix it.
tags: PHP, Wordpress, Reverse-Proxy, Error
cover_image: /img/writing/covers/wordpress-too-many-redirects.png
--canonical_plattform: dev.to
--canonical_url: https://dev.to/codinglukas/vue-js-pattern-for-async-requests-using-renderless-components-3gd
---

Every Wordpress developer sooner or later faces the ERR_TOO_MANY_REDIRECTS problem. You navigate to the correct URL but instead of the Wordpress page you are greeted with an error like this (or a similar depending on the browser):

<figure class="max-w-lg mx-auto mb-4">
  <a href="/img/writing/too-many-redirects/chrome-error.jpg">
    <img
      class="rounded inline-block shadow"
      src="/img/writing/too-many-redirects/chrome-error.jpg"
      alt="Chrome browser with redirect error"
    />
  </a>
  <figcaption>Redirect Error</figcaption>
</figure>

# The Problem

## Let's diagnose

Basically, a miscommunication is happening between your browser and Wordpress that goes something like this:

<figure class="max-w-3xl mx-auto mb-4">
  <a href="/img/writing/too-many-redirects/client-wp-chat.png">
    <img
      class="rounded inline-block"
      src="/img/writing/too-many-redirects/client-wp-chat.png"
      alt="Simplified chat between browser and web server"
    />
  </a>
</figure>

You can see this unfold in the network tab of your developer console. In Chrome, hit <kbd>⌘</kbd> + <kbd>alt</kbd> + <kbd>I</kbd> (<kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> on Windows) to open the dev tools panel. Go to the "Network" tab, make sure "Preserve log" and "Disable cache" are checked, and then reload the page.

<figure class="mb-4">
  <a href="/img/writing/too-many-redirects/dev-console-redirects.jpg">
    <img
      class="rounded inline-block shadow"
      src="/img/writing/too-many-redirects/dev-console-redirects.jpg"
      alt="Developer Tools network tab with redirects"
    />
  </a>
</figure>

You will see that your browser requests the page as instructed but gets a response with status 301 which stands for "permanent redirect" telling your browser that the page you are looking for is actually somewhere else. Let's open one of the entries in the list and check for the `location` response header.

<figure class="mb-4">
  <a href="/img/writing/too-many-redirects/dev-console-redirects-details.jpg">
    <img
      class="rounded inline-block shadow"
      src="/img/writing/too-many-redirects/dev-console-redirects-details.jpg"
      alt="Developer Tools network tab showing details about a single redirect"
    />
  </a>
</figure>

You can see that the `location: http://localhost:8081` here is identical to the `Request URL: http://localhost:8081`. Essentially the browser is asking for `http://localhost:8081` but the server is not responding with the page but telling the browser to look in another location. So the browser doesn't know any better than to ask for the page in this "other" location, which is really the same URL all along. This is called a redirect loop. Eventually, your browser gets tired and gives up with a `TOO_MANY_REDIRECTS` error.

_Note that `http://localhost:8081` is a development server on my local computer which I use to reproduce the problem. In your case, it may be `https://phaserbeam-computers.com` or so._{.text-neutral-600}

## So why does the server give this response?

In 9 out of 10 cases this problem is caused by a reverse proxy. A reverse proxy is a server that sits in between your browser and Wordpress. This may have a variety of reasons, in my case, it is a webpack dev server, in your case, your hoster may use Nginx as a webserver for its ease and speed but reverse proxy the request to an Apache server so Wordpress can make use of the familiar `.htaccess` file and the `mod_rewrite` module.

Whatever the setup, in reality, the above conversation looks more like this:

<figure class="max-w-3xl mx-auto mb-4">
  <a href="/img/writing/too-many-redirects/client-proxy-wp-chat.png">
    <img
      class="rounded inline-block"
      src="/img/writing/too-many-redirects/client-proxy-wp-chat.png"
      alt="Simplified chat between browser and webserver with proxy in between"
    />
  </a>
</figure>

By asking for `https://example.com` your browser is actually talking to a middleman (the reverse proxy) who then, in turn, asks for the server with Wordpress at another location. Wordpress usually deals with this very well except if the middleman changes the port, then Wordpress seems to panic.

Log in to your webserver via SSH or FTP and add the following lines to your `wp-config.php` file somewhere above the `/* That's all, stop editing! Happy publishing. */` line:

```php
print_r($_SERVER);
die();
```

With these two lines, we instruct the server to print the `$_SERVER` variable and then stop any further execution. When you now reload the page you should see some gibberish on the screen that looks like this:

_Note: without the `die();` the server continues execution of Wordpress' PHP files and the gibberish we want to see gets drowned by other stuff. By using it we only get the variable dumped on the screen._{.text-neutral-600}

```text
Array
(
    [HTTP_X_FORWARDED_HOST] => example.com
    [HTTP_X_FORWARDED_PROTO] => https
    [HTTP_X_FORWARDED_PORT] => 443
    [HTTP_X_FORWARDED_FOR] => 93.184.216.34
    ...
    [HTTP_HOST] => localhost:8000
    [REQUEST_SCHEME] => http
    [SERVER_PORT] => 8000
    [SERVER_ADDR] => 127.0.0.1
    ...
)
```

In this fictional case, the example.com wordpress site sits behind a reverse proxy. Originally the browser asked for `https://example.com` on port `443` (the default port for `https` is `443` and for `http` is `80`). But the reverse proxy forwards the request to some internal server on `localhost` with port `8000`.

Wordpress usually ignores the discrepancy between `example.com` and `localhost` but it gets really worked up on the port `8000`. See, if Wordpress wants to serve its page securely over HTTPS, something every modern page should do, it will expect `https` as request scheme and `443` as the port. But it got `http` and `8000`. Thus it thinks the browser did a request for `http://example.com` and will respond with a "301 Moved Permanently" to `https://example.com` (note the `s` in `https`).

But for your browser, this is exactly the same URL he just asked for.

# The Solution

We must tell Wordpress the facts of the original browser request before the reverse proxy middleman messed things up for us.

Fortunately, with the `HTTP_X_FORWARDED` headers, the reverse proxy is kind enough to tell Wordpress what the browser originally asked for. We can look for these headers and then clear things up for Wordpress.

If you have the common problem that you get the redirect error because you want to use the secure HTTPS instead of the insecure HTTP, then add these lines to your `wp-config.php`:

```php
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
  $_SERVER['HTTPS'] = 'on';
}
```
_Note: The `wp-config.php` should be in your Wordpress root directory. Add the PHP snipped somewhere above the `/* That's all, stop editing! Happy publishing. */` line_{.text-neutral-600}

If, however, you are like me and get the error because you are using a webpack dev server or some other more complex setup, this snipped should do the trick:

```php
if (isset($_SERVER['HTTP_X_FORWARDED_HOST']) && isset($_SERVER['HTTP_X_FORWARDED_PORT'])) {
  $_SERVER['HTTP_HOST'] = $_SERVER["HTTP_X_FORWARDED_HOST"];
  $_SERVER['SERVER_PORT'] = $_SERVER["HTTP_X_FORWARDED_PORT"];
}
```

In any case, it is important to specify exactly at what URL Wordpress is available. You can do this inside the Wordpress settings, but I usually prefer to add these two lines to my `wp-config.php`:

```php
define('WP_SITEURL', 'https://example.com');
define('WP_HOME',    'https://example.com');
```

When you debug and test solutions regarding 301 permanent redirects make sure to clear your browser cache or keep the developer tools open with the "Network" tab and "Disable cache" checked.

And with that, you should be good to go.

# Your Solution doesn't work for me

Then your problem is not a reverse proxy or you have an additional misunderstanding within Wordpress. I have seen cases where the redirect loop alternated between `https://example.com/` and `https://example.com`.

Check your plugins and your `.htaccess` file. To troubleshoot I usually deactivate all plugins and if the error goes away reactivate them one by one until the troublemaker is found.

Read the [Let's diagnose](#lets-diagnose) part and check the networks tab of your developer tools to see precisely which redirects the server responds with. Among the response headers, there is also a `Server` entry that often helps to identify which part of your web server is responsible for the redirect. For example, it may be your "Yoast" plugin.

---
layout: ../../layouts/Article.astro
title: 404 Error Page and Redirect with Nuxt
created: 2020-09-27
description: How to create a custom 404 Error Page with Nuxt and perform 404 redirects from other pages programmatically
tags: js, vuejs, nuxt
cover_image: /img/writing/covers/404-error-page-and-redirect-with-nuxt.jpg
---

404 Error pages are very easy with Nuxt, but it took me long enough to find a how-to that I decided to write my own.

## Custom 404 Error Page

The default Nuxt error page, that you probably have seen already, looks like this.

![Nuxt default error page](/img/writing/nuxt-default-error-page.jpg)

To write your custom error page simply create the file `layouts/error.vue`. Here is an example:

```html
<template>
  <section>
    <h1>404 Page not Found</h1>
  </section>
</template>
```

Use the documentation of [error pages](https://nuxtjs.org/guide/views#error-page) and the source code of the [default error page](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/components/nuxt-error.vue) as reference.

## 404 Redirect

The above works nicely for routes that don't exist, but sometimes we want to redirect to the 404 page from another page programmatically.

On this very site Vue checks if the `404-error-page-and-redirect-with-nuxt.md` file exists to display the article. If no markdown file is found the user is redirected to the 404 page.

To achieve this I import the `error` function in my `asyncData` hook. If the server cannot find the file it forwards to the 404 page with `error({ statusCode: 404 })`.

```js
export default {
  \\ ...
  async asyncData ({ params, error }) {
    try {
      return await require(`~/writing/${params.slug}.md`)
    } catch (e) {
      error({ statusCode: 404, message: 'Article not found' })
    }
  },
  \\ ...
}
```

Use the documentation for [Handling Errors](https://nuxtjs.org/guide/async-data#handling-errors) in `asyncData` as reference.

---
title: 'August 2021: Learning marketing'
created: 2021-09-07
description: 
tags: Monthly Update
cover_image: /img/writing/covers/monthly-update-2021-08.jpg TODO!!!!
twitter_card: summary
---

Fittingly, in the very month I decide to use for marketing is also my most sucessful month on twitter. Among other things, the amazing [@arvidkahl](https://twitter.com/arvidkahl) followed me 😃

## Learning how to write a landing page

Last month I figured out that most of my customers found me on Google. So I decided to create another landing page targeted at studios to increase my SEO surface. For the main landing page of [stagetimer.io](https://stagetimer.io) I just went with my gut feeling. This time I wanted to learn first what sections I should write and why.

I found two guides that helped me learn the basics:
- [An illustrated landing page guide](https://marketingexamples.com/conversion/landing-page-guide) by Marketing Examples
- Julian's [amazing free handbook for growing a startup](https://www.julian.com/guide/growth/landing-pages) contains a chapter on landing pages

I wrote a detailed breakdown on Twitter of the why's and how's of each section.

The final outcome can be found here: https://stagetimer.io/for-studios/

<blockquote class="twitter-tweet" data-theme="light" data-chrome="noheader"><p lang="en" dir="ltr">How did I write my landing page?<br>A step by step breakdown 👇 <a href="https://t.co/Sd8kTZ4SSY">pic.twitter.com/Sd8kTZ4SSY</a></p>&mdash; Lukas Hermann (@_lhermann) <a href="https://twitter.com/_lhermann/status/1428025421199720455?ref_src=twsrc%5Etfw">August 18, 2021</a></blockquote>

## Love and hate for Astro

While creating the landing page it became apparent that I needed to find a way to pre-render the site into static pages. stagetimer.io currently is a Single Page Application. When a user enters the site they have to download a large javascript file before anything is visible in the browser. This limitation includes meta tags.

Fortunately the Google crawler can interpret javascript and waits for the site to load. But it still penalizes the performance hit form needing javascript for ... well everything.

Other crawlers are not so obliging. Twitter doesn't wait for javascript to execute before reading meta tags. So with my SPA I am limited to a single set of meta tags for all routes ... not good.

This led me, after some back and forth, to migrate all static pages to a static site generator. I chose [Astro](https://astro.build/).

I love Astro. It's a fresh project, has a great community and development is coming along great. It provides a great templating engine, understands Markdown out of the box and even handles Vue components! How amazing is that?

At the same time I also hate Astro a little. Beeing so early in development means I spend more time bug hunting than actually advancing the project.

So in true engineer fassion I managed to make the month of marketing all about coding 😅. On the upside, all content pages will now have a great performance and SEO score. And it's now easier for me to add new content and pages. In the end, it was a necessary step.

After all, the reason I do this side hustle is to learn the craft. My next project will be better than this one, until I reach 10k MMR 🥳

## Stats

Stagetimer <strong class="text-green-600">↗</strong> €135 MMR


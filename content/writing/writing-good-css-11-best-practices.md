---
title: 'Writing good CSS: 11 Best Practices'
created: 2020-10-10
description: Lessons learned from over 10 years of writing CSS. The 11 most important CSS principles I would like to have taught myself as a beginner.
tags: css, best-practice
cover_image: /img/writing/covers/writing-good-css-11-best-practices.jpg
---

## Introduction

Through my years of using CSS, I have found some principles to stand the proof of time while others did cause me many headaches in the long run. I want to share with you the those that stood the test of time. If you have some good advice that is absent from this list please let me know, I am as much willing to learn as to share.

CSS is curious in that it is very easy to learn but near impossible to master.

_Note: The advice in this article is concerned with the developer experience of CSS, and not with design, performance, or accessibility (though these are important). The following points will especially be of value to you if you need to maintain and extend your CSS codebase over longer periods._

## Contents

1. [Keep specificity low](#1-keep-specificity-low)
2. [`#id` selectors are evil](#2-id-selectors-are-evil)
3. [Treat `!important` like raw eggs](#3-treat-important-like-raw-eggs)
4. [Avoid chaining (or nesting) of selectors](#4-avoid-chaining-or-nesting-of-selectors)
5. [Don't combine element and class selectors](#5-dont-combine-element-and-class-selectors)
6. [Organize your code by increasing specificity](#6-organize-your-code-by-increasing-specificity)
7. [Use few properties per class](#7-use-few-properties-per-class)
8. [Don't worry about sorting your properties](#8-dont-worry-about-sorting-your-properties)
9. [Follow a naming convention like BEM](#9-follow-a-naming-convention-like-bem)
10. [Avoid using shorthands if possible](#10-avoid-using-shorthands-if-possible)
11. [Keep presentation (CSS), semantics (HTML) and behavior (JS) separate](#11-keep-presentation-css-semantics-html-and-behavior-js-separate)

## 1. Keep specificity low

It is really important to understand CSS specificity first, [here is an excellent article](https://dev.to/emmawedekind/css-specificity-1kca). In essence, whenever you want to overwrite styles applied by one selector, you need to exceed or at least match its specificity.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: specificity of first selector is too high
    </p>

```css
#main .nav li {
  color: white;
}

.nav li.is-active {
  color: red; /* dominated by #main */
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: using as few selectors as possible
    </p>

```css
.nav-item {
  color: white;
}

.nav-item.is-active {
  color: red;
}
```

  </div>
</div>

To avoid the specificity wars, you want to avoid adding selectors that are not necessary. Instead of `.nav ul li` use only `.nav li` or better just `.nav-item`. Points 2. - 6. of this article are hands-on practices to help you to keep your specificity low.

## 2. `#id` selectors are evil

Id selectors have the highest specificity. This means whenever you use one, you are forced to use it again every time you want to modify the element's style. This might work well when you write your code in the first place but causes a headache whenever you want to extend it. I recommend generally avoiding `#id` selectors in your stylesheet.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: forced to use the #footer selector repeatedly
    </p>

```css
#footer .box {
  background-color: #333;
}

#footer .box:hover {
  background-color: #444;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: avoid using #id selectors in you stylesheet
    </p>

```css
.box {
  background-color: #333;
}

.box:hover {
  background-color: #444;
}
```

  </div>
</div>

_Further Reading: This article of Harry Roberts shows how you can [use ids without increasing specificity](https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/#low-specificity-ids)_

## 3. Treat `!important` like raw eggs

`!important` is the ace of spades of CSS, it is the ultimate trump card, and it should be treated as such. If you use it to escape the frustration of dealing with specificity which has gotten out of hand, then you are using it wrong. Use it sparingly, with selectors that have a very narrow scope and where you are certain that you want it to overpower all other styles.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: using !important to deal with specificity frustration
    </p>

```css
#header .nav ul li a {
  border-bottom: 2px solid transparent;
}

.nav a:hover {
  border-bottom-color: black !important;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: calculated use with narrow scope
    </p>

```css
.text-center {
  text-align: center !important;
}
```

  </div>
</div>

_Note: If you want to customize a CSS framework like Bootstrap that sometimes uses selectors with high specificity you may not have a choice_

## 4. Avoid chaining (or nesting) of selectors

Especially with pre-processors like Sass, it is very easy to nest selectors which, when compiled to actual CSS, will be chained like this: `.a .b .c .d { ... }`

This might seem attractive because it helps you to write very specific CSS, but it also leads to bloated CSS. Let's say you have a `.list` class which is used inside `.header` and also inside `.footer`.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: selectors are unnecessarily chained
    </p>

```css
.list {
  list-style: none;
  margin: 0;
}

.list .list-item {
  display: inline-block;
}

.header .list .list-item {
  margin-right: 1em;
}

.footer .list .list-item {
  font-weight: bold;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: using as few selectors as possible
    </p>

```css
.list {
  list-style: none;
  margin: 0;
}

.list-item {
  display: inline-block;
}

.list--spaced .list-item {
  margin-right: 1em;
}

.list--bold .list-item {
  font-weight: bold;
}
```

  </div>
</div>

There are two problems with this:

1. To style the `.list-item`, the `.list` has to be carried along to match specificity.
2. After a while you may be afraid to touch `.list .list-item` for fear that you break the `.list-item` in `.header` or `.footer` and have to undo it. You will probably end up writing any changes in `.header .list .list-item` or `.footer .list .list-item` directly, thus bloating your CSS and making it harder to keep a good overview.

The solution is not to use chaining/nesting with `.header` and `.footer` but to add modifier classes which can be used in connection with the `.list` class instead. Now you can write an element like this inside your `.footer`:

```html
<ul class="list list--bold">
  <li class="list-item">&copy; Lukas Hermann</li>
</ul>
```

Not only does this reduce specificity (why use `.list .list-item` if you can just use `.list-item`), it only introduces higher specificity where we want it: when using a modifier.

A note concerning this specific example: In the case of lists it is probably easier to use `.list li` (and `.list--bold li` respectively) to save yourself some classes in your HTML markup, but I wanted to make an example which is easy to understand.

_Note: This principle lies at the heart of naming conventions like BEM which will be addressed more specifically below._

## 5. Don't combine element and class selectors

When you start writing CSS it seems intuitive to keep your classes very specific. We all have been burned by the cascading nature of CSS and it can be upsetting if you make a change in your CSS intended for one small part of your site only to discover that you messed up the design of five other places.

With this background, it makes sense to write selectors like `div.card a.link` because we want to make sure that **only** anchor tags with `.link` inside a div with `.card` will receive this styling. But doing this is like fighting windmills, but CSS features are not our enemy. As a rule, don't combine element and class selectors, ever! If you want to modify the styling of an element in a particular place, use a modifier class instead.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: mixing element and class selectors
    </p>

```css
a.link {
  color: blue;
}

div.card a.link {
  color: green;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: using a modifier class instead
    </p>

```css
.link {
  color: blue;
}

.link--green {
  color: green;
}
```

  </div>
</div>

The advantages of modifier classes:

- The purpose of the modification is easy to understand
- It's easy to change or remove
- It's easy to find all the places in your code where this modifier is used by doing a simple search for `link--green` in your whole project

_Note: A probable exception to this role might be a `.btn` component. If you want to make sure that an anchor tag `a.btn` looks identical to a button tag `button.btn` because these two elements behave a little different in browsers. But even then you may just as well add all the necessary styling to `.btn`._

## 6. Organize your code by increasing specificity

If two selectors have the same specificity, the latter will be used. Therefore, to play to the strengths of the CSS specificity feature, it makes sense to organize your CSS file by increasing specificity. Put your resets and element selectors first, your normal classes afterward, and finish with your utility classes like `.text-center` or `.nowrap` where you can then safely use `!important`.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: unordered styles makes it easy to miss overwrites
    </p>

```css
.text-center {
  text-align: center !important;
}

.btn {
  background-color: green;
}

a {
  color: blue;
}

.btn {
  /* overwrites green */
  background-color: red;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: ordering your styles roughly by specificity
    </p>

```css
/* Elements */
a {
  color: blue;
}

/* Components */
.btn {
  background-color: green;
}

.box {
  border-radius: 3px;
  box-shadow: 0px 3px 8px black;
}

/* Utilities */
.text-center {
  text-align: center !important;
}
```

  </div>
</div>

The advantages of ordering styles roughly by specificity:

- You will always overwrite less important styles with more important ones
- You have a rough guideline for where your things go inside your CSS file

_Note: This principle was introduced as ITCSS by [Harry Robers](https://csswizardry.com). It is a really useful CSS methodology to handle large-scale products. Here is the [article introducing ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528). Harry even created a [course on Skillshare](https://csswizardry.com/2018/11/itcss-and-skillshare/) just recently._

## 7. Use few properties per class

As a general rule, the more properties a class has, the less likely you are going to reuse it. Simply because of the fear that some of the many properties will not fit your other use case and you have to undo them, thus you might even end up writing another class with very similar properties.

A good way to know if your classes are too bloated:

1. Simply observing yourself how many resets (like `margin: 0;`) you are writing to undo other classes properties
2. If you feel uncomfortable about reusing classes or if feel bad about adding another property to a class, it's a sign this class is too bloated

Classes become bloated because many different concerns (aesthetics, spacing, typography) are packed together. A great way to improve this, even without dropping any properties, is to simply break it up into its different concerns.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: bloated, properties of different concerns are mixed
    </p>

```css
.card {
  border-radius: 3px;
  box-shadow: 0 5px 10px black;
  padding: 2rem 1rem;
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 2rem;
}
```
<small>_Note: The bloated example is not overly bloated yet, but I think it brings the point across._</small>

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: fewer properties keeps classes reusable
    </p>

```css
.card {
  border-radius: 3px,
  box-shadow: 0 5px 10px black;
  padding: 2rem 1rem;
}

.spacer {
  margin-bottom: 2rem;
}

.text-small {
  font-size: 14px;
  line-height: 1.3;
}
```

  </div>
</div>

In the good example, the `.card` class only contains the properties which specifically define its aesthetics. The aspects of spacing and typography are outsourced into their own classes. Having broken up the class like this you can easily see how to reuse each of those classes and even extend them and add more classes like `.spacer-large` or `.text-tiny` which will be very useful.

Yes, this means that you have to add more classes in your HTML like so `<div class="card spacer text-small">`, and that's okay. It is much more comfortable, especially in the long run, to use such classes.

Some classes need a lot of properties, for example, a `.button` class has to unset many user agent (browser) styles for both, the `<button>` and the `<a>` tag. Therefore this rule should not be followed religiously for every case.

_Tipp: Most CSS frameworks come equipped with a good set of reusable utility classes, [watch](https://tailwindcss.com/docs/spacing/) [out](https://getbootstrap.com/docs/4.3/utilities/spacing/) [for](https://foundation.zurb.com/sites/docs/prototyping-utilities.html#margin-helpers) [them](https://getuikit.com/docs/margin) and use them!_

## 8. Don't worry about sorting your properties

This one is a bit opinionated. Brad Frost did a survey on twitter how people order their CSS properties:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Having fun debating different clustering of CSS properties. How do you do it? Alphabetical? Clustered by type (box model, positioning, typography, etc)? Train wreck?</p>&mdash; Brad Frost (@brad_frost) <a href="https://twitter.com/brad_frost/status/1092790155700781056?ref_src=twsrc%5Etfw">February 5, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Most people answered that they are grouping properties by some common traits like positioning, display, or color. Some may be OCD about it and sort it alphabetically. Personally, I have tried these different methods and haven't found any of them particularly useful in the long run. I basically always do scrambled egg ... or how Brad Frost put it, "train wreck".

If your classes have many properties some sorting rules usually become imperative to maintain an overview. But if you keep your classes slim, [like suggested in point 7](#7-use-few-properties-per-class), it is really not necessary. Simply abide by some simple rules (like layout first, aesthetics last), and don't worry too much about the order otherwise.

## 9. Follow a naming convention like BEM

Some of the code examples in this article are using the BEM naming convention. I found it to be very helpful and recommend it wholeheartedly. It's easy to learn! Quickly head to [this small introduction with good code examples of the BEM naming convention](http://getbem.com/naming/) to get the idea.

Here are two points I struggled with at the beginning with BEM.

### Don't nest elements

If you have a title within a header within a card, only "nest" maximum one level deep like so:

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Nesting BEM selector produces ugly classes
    </p>

```css
.card {}
.card__header {}
.card__header__title {}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Nesting BEM only one level deep is better
    </p>

```css
.card {}
.card__header {}
.card__title {}
```

  </div>
</div>

### It's best to use modifiers only on root elements

Modifiers on children can be used, but they make it hard to remember which child has which modifier. If possible, apply the modifier to the root element, this will keep your HTML markup and your CSS cleaner and therefore easier to see which modifiers are used or available.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Using BEM modifiers on children get's messy
    </p>

```css
.card__header--large { padding: 2em; }
.card__content--large { padding: 0 2em; }
.card__footer--large { padding: 2em; }
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Restricting BEM modifiers to root elements is cleaner
    </p>

```css
.card--large .card__header { padding: 2em; }
.card--large .card__content { padding: 0 2em; }
.card--large .card__footer { padding: 2em; }
```

  </div>
</div>

## 10. Avoid using shorthands if possible

When defining a background color it is very common to just use shorthands like `background: gray;`. It is important to know, however, that this shorthand reset's all other background properties, like `background-position` and so on, to `initial`. Similar case with other shorthands like `border` and `margin`.

This causes problems only in the rarest of cases, but if it does, it will be very hard to debug. It is therefore best practice to **only change as little as necessary**. Be safe and use `background-color` etc., the prevented headache is worth the extra characters.

<div class="flex justify-around flex-wrap md:flex-nowrap">
  <div class="w-full md:w-1/2">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Using shorthands can have unintended side effects
    </p>

```css
.card {
  background: lightgray;
  border: 0;
  margin: 0 2rem;
}
```

  </div>
  <div class="w-full md:w-1/2 md:pl-3">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Using verbose properties helps prevent side effects
    </p>

```css
.card {
  background-color: lightgray;
  border-width: 0;
  margin-left: 2rem;
  margin-right: 2rem;
}
```

  </div>
</div>

_Further reading: Harry Roberts makes a great case for this in [CSS Shorthand Syntax Considered an Anti-Pattern](https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/)_

## 11. Keep presentation (CSS), semantics (HTML) and behavior (JS) separate

I often see styling tied to ids or elements (like `#nav` or `.nav ul li`), or javascript behavior tied to a class (like `document.getElementsByClassName(".nav")`). However, if you do this you rob yourself of the flexibility to keep presentation (CSS), semantics (HTML), and behavior (JS) separate. You want to be able to style something as a button, regardless if it is an `<a>`, `<button>` or `<div>` (note that the latter is not good for accessibility). Or if you create a navbar, you want to be able to use `<li>`-tags or `<div>`-tags depending on the necessary semantics, without losing your styling or have to change the CSS.

To achieve this use ids for javascript (as originally intended), or better, `data`-attributes like so: `document.querySelectorAll('[data-nav]');` and don't mingle the `button` element selector with your styles. This gives you the freedom to change either semantics, presentation, or behavior independently without having to worry about the other two.

<div class="flex justify-around flex-wrap">
  <div class="w-full">
    <p class="bg-red-200 rounded text-red-700 text-center italic">
      Bad: mixing presentation and behavior
    </p>

```html
<button class="btn btn-login">Login</button>

<script>
  const el = document.getElementsByClassName('.btn-login');
  el.addEventListener('click', function (event) { ... }, false);
</script>

<style>
  .btn-login {
    color: white;
    background-color: green;
  }
</style>
```

  </div>
  <div class="w-full">
    <p class="bg-green-200 rounded text-green-700 text-center italic">
      Good: presentation and behavior are kept separate
    </p>

```html
<button class="btn btn-green" data-login>Login</button>

<script>
  const el = document.querySelectorAll('[data-login]');
  el.addEventListener('click', function (event) { ... }, false);
</script>

<style>
  .btn-green {
    color: white;
    background-color: green;
  }
</style>
```

  </div>
</div>

_Exception: There are reasons to use element selectors for styling. For example, if you intentionally set global presets, like a reset or change the default link color. But be careful not to set presets that you find yourself overwriting all the time._

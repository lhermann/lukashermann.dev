---
title: 'Vue.js Pattern for Async Requests: Using Renderless Components'
published: true
created: 2019-08-04
updated: 2020-02-15
description: Using a Vue Renderless Component to handle async requests to abstract the HTTP request logic and make it reusable.
tags: js, vuejs, async, axios
cover_image: /img/writing/covers/vuejs-async-renderless-component.png
canonical_plattform: dev.to
--canonical_url: https://dev.to/codinglukas/vue-js-pattern-for-async-requests-using-renderless-components-3gd
---

Most Vue apps need asynchronous HTTP requests, and there are many ways to realize them: in the `mounted()` lifecycle hook, in a method triggered by a button, within the store (when using [vuex](https://vuex.vuejs.org/)) or in the `asyncData()` and `fetch()` methods (with [Nuxt](https://nuxtjs.org/)).

While a simple request is straightforward with axios, we usually want to cover at least two additional states:

1. Show something to the user while the request is pending
2. Handle errors gracefully

Handling these states adds additional code and can quickly lead to code-duplication when having to implement many different requests.

# Contents

1. [Origin of the Idea](#origin-of-the-idea)
2. [HTTP requests: A typical example](#http-request-in-vue-components-a-typical-example)
3. [The Async Renderless Component](#the-async-renderless-component)
   - [Why not a mixin or directive?](#why-a-renderless-component-and-not-a-mixin-or-directive)
   - [An applied example](#an-applied-example)

To cut right to the meat, jump to [The Async Renderless Component](#the-async-renderless-component).

**Note:** Axios is used to make HTTP requests in this example, but it works just as well with any other library for AJAX requests. Also, this example uses this fantastic free Dog API: [https://dog.ceo/dog-api/]() 🐶.

# Origin of the Idea

The idea is not my own, but borrowed from Vue.js creator Evan You [@youyuxi](https://twitter.com/youyuxi) who voiced it secondarily while talking about Advanced Vue Components with Adam Whatan on the [Full Stack Radio](http://www.fullstackradio.com/) Podcast during [Episode 81](http://www.fullstackradio.com/81).

# HTTP request in Vue Components: A typical example

Let's start with a minimal example to request a random dog image. The `mounted()` hook contains the axios call, which populates the `image` variable.

```javascript
Vue.component('example', {
  el: '#example',
  data() {
    return {
      image: null,
    }
  },
  mounted() {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(function(response) {
        this.image = response.data
      })
  },
})
```

Simple enough. However, we want to show a loading animation and handle request errors. So, in addition to the `image` variable `pending: false` and `error: null` are added. The `mounted()` hook then looks as follows:

```javascript
Vue.component("example", {
  [...]
  mounted() {
    this.pending = true;
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(function(response) { this.image = response.data })
      .catch(function(error) { this.error = error })
      .finally(function () { this.pending = false });
  }
});
```

Now a loading indicator can be shown for `pending === true` and a basic error message can be displayed if `error !== null`. It's simple, but it can get tedious to implement this pending/success/error behavior repeatedly. Besides, if the request contains parameters that can be changed by the user, e.g., filters or sorting options, then the request has to move to a method that has to be called, whenever the parameters change, to reload the data.

One easy and effective way to abstract away this simple behavior and make it reusable is ...

# The Async Renderless Component

This component makes use of the incredibly versatile [Scoped Slot feature](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots). A slot is any piece of HTML that can be passed to a component, telling the component: "Here, render this somewhere." With scoped slots, the component which receives the HTML snipped answers: "Awesome. I put your HTML right there. And here is some data you can use with your snipped if you like".

The Async Renderless component is just such a component that receives a snippet of HTML, a URL, and parameters and answers: "Hey look, I am requesting this data for you, here is `data`, `pending` and `error` for you to use."

The Async Renderless Component in full:

```javascript
Vue.component('async', {
  props: {
    url: { type: String, default: '', required: true },
    params: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      pending: true,
      error: false,
      data: null,
    }
  },
  watch: {
    url() {
      this.requestData()
    },
    params: {
      handler() {
        this.requestData()
      },
      deep: true,
    },
  },
  mounted() {
    this.requestData()
  },
  methods: {
    async requestData() {
      this.pending = true
      try {
        const { data } = await axios.get(this.url, { params: this.params })
        this.data = data
        this.error = false
      } catch (e) {
        this.data = null
        this.error = e
      }
      this.pending = false
    },
  },
  render() {
    return this.$scopedSlots.default({
      pending: this.pending,
      error: this.error,
      data: this.data,
    })
  },
})
```

_**Note:** I am using some javascript magic here: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)._

The "renderless" happens in the `render()` tag. Instead of an HTML tag, these components only render the HTML snippet it receives in its slot as scoped slot, passing three data points to it: `pending`, `error`, and `data`.

The `watch` functions make sure that the data is reloaded whenever either `url` or `params` change.

We use the async component inside our template like this:

```html
<async url="https://dog.ceo/api/breed/husky/images">
  <template v-slot:default="{ pending, error, data }">
    <div v-if="pedning">Loading ...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>{{ data }}</div>
  </template>
</async>
```

## Why a renderless component and not a mixin or directive?

Components are not the only way to reuse code in Vue; another way is to use a [Mixin](https://vuejs.org/v2/guide/mixins.html) or a [Custom Directive](https://vuejs.org/v2/guide/custom-directive.html). Both are elegant ways to solve this problem. Renderless components utilizing scoped slots are operating the way Vue wants to work, it can be imported when needed just like you are used to with any other component. Thus it's a very understandable way to reuse code as opposed to mixins or directives, which don't have to be included separately. In the end, it comes down to preference.

## An applied example

I constantly find myself implementing lists when working with APIs, which usually feature things like pagination, filters, sorting, and search. So I decided to put together a "real-life" example which renders a simple list of dog images with a straightforward filter option for some different breeds (and a wrong API call to see the error state):

<iframe height="600" style="width: 100%;" scrolling="no" title="Vue.js: Renderless Async Component" src="https://codepen.io/lhermann/embed/jgGxyQ?height=600&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lhermann/pen/jgGxyQ'>Vue.js: Renderless Async Component</a> by Lukas Hermann
  (<a href='https://codepen.io/lhermann'>@lhermann</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Whenever you click one of the filter buttons, the URL, which is passed to the async component, updates with the appropriate breed. The async component takes care of the HTTP request. The parent component doesn't need HTTP request logic anymore, we have separation of concerns and freed our minds, and the universe is in harmony 😄.

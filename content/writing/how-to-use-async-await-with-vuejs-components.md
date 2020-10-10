---
title: How to use Async/Await with Vue.js Components
published: true
created: 2020-09-21
description: Code examples for the usage of async/await with Vue.js single file components
tags: js, vuejs, async, await, nuxt
cover_image: /img/writing/covers/how-to-use-async-await-with-vuejs-components.jpg
---

In the beginning, it can be confusing to handle Vue's opinionated single file templates and how to use the javascript functions you know and love. But fear not, it is very easy.


# The Created Hook

The created hook is a [lifecycle hook](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram), a method that is called when the template is created for the first time, but before it is mounted.

We can simply declare the `created ()` method as `async` and perform our asynchronous actions inside. In this example, we are loading a list of users.

_Don't forget to handle the `null` state of users until the data is available. Use `v-if="users"` in your template or better, add a loading animation_{.text-gray-600}

```js
export default {
  data () {
    return {
      users: null,
    }
  },
  async created () {
    const response = await fetch("https://reqres.in/api/users")
    const { data: users } = await response.json()
    this.users = users
  },
}
```
Content of Vue Single File Component's `<script>` tag{.text-sm .text-center}


# The Mounted Hook

The mounted hook is almost identical to the created hook but fires after the component was mounted (added to the DOM). The created hook is generally preferred for API calls.

Just like above, we can simply make the `mounted ()` method async.

```js
export default {
  data () {
    return {
      users: null,
    }
  },
  async mounted () {
    const response = await fetch("https://reqres.in/api/users")
    const { data: users } = await response.json()
    this.users = users
  },
}
```
Content of Vue Single File Component's `<script>` tag{.text-sm .text-center}


# Methods

Vue allows any method to be an async method. Here is an example with data requested per click on a button.

```html
<button @click="loadUsers">Load Users</button>
<div v-if="users">{{ users }}</div>
```
Content of Vue Single File Component's `<template>` tag{.text-sm .text-center}

```js
export default {
  data () {
    return {
      users: null,
    }
  },
  methods: {
    async loadUsers () {
      const response = await fetch("https://reqres.in/api/users")
      const { data: users } = await response.json()
      this.users = users
    }
  },
}
```
Content of Vue Single File Component's `<script>` tag{.text-sm .text-center}


# Computed Properties

Computed properties are the exception, Vue does not allow them to be async. There are ways to get around this restriction like the [vue-async-computed](https://www.npmjs.com/package/vue-async-computed) plugin, but this is not a good practice.

If you need an async computed property, then you probably made an architectural mistake in your component. With some experience, it becomes natural to handle computed properties as purely synchronous functions. All async operations should be done in methods.

If you still find yourself needing an async computed property then try using a watcher instead.


# Watchers

[Watchers](https://vuejs.org/v2/guide/computed.html#Watchers) can perform async operations when they detect changes in the data. Therefore watchers can cause computed properties to update with asynchronously.

Here is an example where the computed prop returns a count of users. The watcher reloads the user list as soon as the `userRoles` filter changes.

```js
export default {
  data () {
    return {
      userRoles: ['admin'],
      users: [...],
    }
  },
  watch: {
    async userRoles (newRoles) {
      const query = JSON.stringify(newRoles)
      const response = await fetch(`https://reqres.in/api/users?roles=${query}`)
      const { data: users } = await response.json()
      this.users = users
    }
  },
  computed: {
    userCount () {
      return this.users.length
    }
  },
}
```
Content of Vue Single File Component's `<script>` tag{.text-sm .text-center}


# Nuxt & asyncData

[Nuxt](https://nuxtjs.org/) is a framework on top of Vue that makes the development of server-side rendered applications easier.

Nuxt has a special method called `asyncData ()` that is called before the component is created. This allows the server to pre-render the component before sending it to the client and it allows the client to pre-fetch data before the new component is shown to the user. This is especially interesting with page-level components where data can be fetched before the user even clicks on the next link creating the experience, similar to a mobile app, of instant page navigation.

_Be aware that `asyncData ()` doesn't have access to the component's instance and `this` context, therefore the data must be returned instead._

```js
export default {
  async asyncData () {
    const response = await fetch("https://reqres.in/api/users");
    const { data: users } = await response.json();
    return { users }
  },
  data () {
    return {
      users: null,
    }
  },
}
```
Content of Vue Single File Component's `<script>` tag{.text-sm .text-center}

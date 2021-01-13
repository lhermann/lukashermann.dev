---
title: 'Using socket.io with Vue and Vuex'
created: 2012-01-13
description: A how-to guide for using socket.io with Vue components and inside the Vuex store with examples.
tags: JS, Websockets, Vue, Vuex
cover_image: /img/writing/covers/socketio-with-vue-and-vuex.jpg
---

When building [stagetimer.io](https://stagetimer.io/) I decided to use WebSockets to push updates to all connected devices. The app is built on top of [Vue](https://vuejs.org/) using [Vuex](https://vuex.vuejs.org/) for state management. For WebSockets, I am using the popular and easy to use [socket.io](https://socket.io/) library.

# Contents

1. [The desired Result](#the-desired-result)
2. [Existing Plugins](#existing-plugins)
3. [Instantiating the Socket](#instantiating-the-socket)
4. [Using the Socket with Vue](#using-the-socket-with-vue)
5. [Using the Socket with Vuex](#using-the-socket-with-vuex)

# The desired Result

I want to use socket.io inside Vue components as well as in the Vuex store. It must also reuse the same socket connection in both cases.

Inside Vue components I want to have access to the socket instance through `this.$socket` and use it to listen to and emit messages like this:

```js
export default {
  created () {
    this.$socket.on('message', this.receiveMessage)
  },
  destroyed () {
    this.$socket.removeAllListeners('message')
  }
  methods: {
    sendMessage (payload) {
      this.$socket.emit('message', payload)
    },
    receiveMessage (payload) {
      console.log('received a message', payload)
    },
  }
}
```

Inside the Vuex store I want to do the same, except that a received event should translate into a store action like so:

```js
return new Vuex.Store({
  state: { ... },
  getters: { ... },
  mutations: { ... },
  actions: {
    sendMessage (context, payload) {
      this.$socket.emit('message', payload)
    },
    receiveMessage ({ commit }, payload) {
      commit('doSomethingWithMessage', payload)
    },
  },
})
```

# Existing Plugins

There is no lack of socket.io plugins for Vue. [vue-socket.io](https://www.npmjs.com/package/vue-socket.io) looks like a good solution. However, I try to avoid 3rd party dependencies if I can easily implement their function myself, as in the case of socket.io.

# Instantiating the Socket

To reuse the socket I need to pass the same instance to Vue and the Vuex store. Basically, I want to import the same instance in two different files, kind of like a singleton. Fortunately, the &raquo;JavaScript specification guarantees that [I will] receive the same module instance&laquo; if I import the same path twice [(Source)](https://dmitripavlutin.com/javascript-module-import-twice/). This means I can create a simple `socket.js` file that exports an instance of socket.io.


```js
// socket.js
import io from 'socket.io-client'
const socket = io('http://localhost:3000')
export default socket
```

# Using the Socket with Vue

Now I can import the socket.io instance into the default `main.js` file where Vue gets instantiated. To have `this.$socket` available in my Vue single file components I can simply inject the socket into the prototype of Vue.

```js
// main.js
import Vue from 'vue'
import socket from './socket'

Vue.prototype.$socket = socket

new Vue({...})
```

# Using the Socket with Vuex

With Vuex it's not quite so simple. I need to write a little plugin to have `this.$socket` available inside store functions. Additionally, I have to define a mapping between socket events and the store actions they should trigger.

Here is the plugin code:

```js
// websocketStorePlugin.js
export default function createWebSocketPlugin (socket) {
  return store => {
    store.$socket = socket
    socket.on('message', payload => store.dispatch('receiveMessage', payload))
  }
}
```

Instead of mapping socket events with store actions explicitly, I could also just map every event to a store action of the same name. But in my actual app, I like to keep it specific and I also like to use store modules.

I then import this plugin into my main store file, usually `store.js` or `store/index.js`. The `createWebSocketPlugin` method is called with the socket.io instance and passed to the store as a plugin.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import createWebSocketPlugin from './websocketStorePlugin'
import socket from '../socket'

Vue.use(Vuex)
const websocketPlugin = createWebSocketPlugin(socket)
export default new Vuex.Store({
  // ...
  plugins: [websocketPlugin],
})
```

And yeah, that's it!

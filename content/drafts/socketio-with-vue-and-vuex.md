---
title: 'Using socket.io with Vue and Vuex'
created:
description:
tags: JS, Websockets, Vue, Vuex
cover_image:
---

When building [stagetimer.io](https://stagetimer.io/) I decided to use websockets to push updates to all connected devices. The app is built on top of [Vue](https://vuejs.org/) using [Vuex](https://vuex.vuejs.org/) for state management. For websockets I am using the popular and easy to use [socket.io](https://socket.io/) library.

# The desired result

I wanted to use socket.io both inside Vue components as well as in the Vuex store. It must also reuse the same socket connection for both.

Inside Vue components I wanted to listen to and emit messages like this:

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

Inside the Vuex store it should look as follows:

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



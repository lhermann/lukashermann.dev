---
title: 'Debouncing User Input with Vue: Delay the input event until the user stops typing'
created: 2021-01-24
description: Persisting user input to the server without the need for "Submit" or "Save" buttons but as the user types. So-called "debouncing" can achieve this by waiting until the user stopped typing before sending the HTTP request to the server.
tags: HTML, JS, Vue
cover_image: /img/writing/covers/debouncing-user-input.jpg
---

Sometimes I want to persist user input to the server without the need for "Submit" or "Save" buttons. The user types into the text field and the app takes care of everything else without any further necessary action.

So-called "debouncing" can achieve this by waiting until the user stopped typing before sending the HTTP request to the server. This article shows how I achieved this with a handy custom Vue component.

## The Problem

I was working on my app [stagetimer.io](https://stagetimer.io/). It allows multiple participants to connect with their devices to view the same countdown timer. Each user can enter their name into a field so the controller can see who is connected. The app saves the name as it is typed, but the server can also update it. This posed two problems:

1. Every keystroke fires an `input` event. Therefore it is necessary to debounce this event, that is, wait until the user stopped typing before saving it to the server, so it doesn't trigger too many HTTP requests.
2. A server response can also update the text of the input field. But while the user is typing it is relevant to prevent updating the value so the user doesn't experience "jumping" of the text.

## The Solution

This Vue component solves both problems. It is designed to be used as a drop-in replacement for the native `<input>` tag.

First, here is the component in full. Underneath I explain what each part does and how it works.

```html
<template>
  <input
    :type="type"
    :value="internalValue"
    @input="updateInternalValue"
  />
</template>

<script>
import _debounce from 'lodash/debounce'

export default {
  props: {
    value: String,
    type: { type: String, default: 'text' },
  },
  data () {
    return {
      internalValue: this.value,
      touched: false,
    }
  },
  watch: {
    value (value) {
      if (!this.touched) this.internalValue = value
    },
  },
  methods: {
    updateInternalValue (event) {
      this.touched = true
      this.updateValue(event.target.value)
    },
    updateValue: _debounce(function (value) {
      this.touched = false
      this.$emit('input', value)
      this.$emit('update:value', value)
    }, 600),
  },
}
</script>
```

### <template> (lines 2-6)

`<input>` is the only HTML element inside the template. I use a copy of the passed `value` prop, called `internalValue`, for reasons explained later. The `type` prop is just a passthrough, more can be added as required.

I am not using `v-model` to keep track of user input with the `touched` variable, see line 31.

### Props (lines 13-16)

Besides the mandatory `value` prop I am giving default values to all others. This way I can safely omit them when using the component.

### Data (lines 17-22)

I could use `value` directly and pass it to the input element, but this can lead to a race condition. If the app sends the value to the server it is common for it to respond with the same value causing an app update. Had the user continued typing, this update would reset the value removing the last typed characters. Therefore I added a decoupled `internalValue` to keep track of user input with the `touched` variable.

### Watcher (lines 23-27)

Here I am watching the `value` prop for changes and update the `internalValue` only if the user hasn't touched the input, implying he hasn't typed anything else in the meantime.

### updateInternalValue() Method (lines 29-32)

Every keystroke triggers this method. With `touched = true` I can keep track of it. It then calls the `updateValue()` method with that magic debouncing mechanic.

### updateValue() Method (lines 33-37)

This method is the heart of the entire component. It uses [lodash's debounce method](https://lodash.com/docs/4#debounce). `updateValue()` can be called multiple times with the same parameters and only executes the callback function the delay of 600 ms has passed after the last call.

It is essential to use an anonymous function here, not an arrow function, to preserve Vue's `this` context.

I set `touched = false` once the callback is executed, signifying that at this time the value is passed to the parent component. Changes to the `value` prop can now be updated safely to my `internalValue` until the user starts typing again.

Afterward, I emit two events. The `input` event enables the use of `v-model` with this component, and the `update:value` event ensures that [Vue's two-way binding](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier) `value.sync` also works.

_**Note:** This guide is for Vue version 2. It should also work for version 3, but I haven't tested it yet. If it breaks please let me know so I can improve this article._

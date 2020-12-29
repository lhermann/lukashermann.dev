---
title: 'Why the iPhone Timer App displays a Fake Time'
published: true
created: 2020-12-22
description: While building a timer app I came across a peculiarity with displaying time and found out that the iPhone timer addresses it by showing you a fake time.
tags: ios, js, project
cover_image: /img/writing/covers/why-the-iphone-timer-displays-fake-time.jpg
---

While building my event timer app called [stagetimer.io](https://stagetimer.io) I came across a peculiarity with displaying time found out that the iPhone timer addresses it by showing us a fake time. By definition, a countdown shows how much time is left. So if the countdown says 5s we assume there are 5 seconds left. But that's not the whole truth.

# TL;DR

The iPhone countdown timer doesn't strictly display the correct time but adds 500ms, or half a second, to the remaining time. It does this to make the reading of time more intuitive for humans. The alarm at the end of the countdown is not affected by this 500ms inaccuracy.

# Countdowns are tricky

Javascript likes to use milliseconds when dealing with time, 1000ms equals 1s. Here is an example of a 5s countdown that starts at 5000ms and uses the [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) function to deduct 10ms every 10ms, simple enough. Milliseconds are converted to seconds by dividing by 1000 and rounding down like so: `Math.floor(milliseconds / 1000)`

<div class="text-center">
  <figure data-gifpause onclick="gifpause_toggle(event)">
    <img
      class="rounded"
      src="/img/writing/5s-timer-seconds.gif"
      data-still="/img/writing/5s-timer-seconds.png"
      alt="5s countdown timer showing only seconds"
    />
  </figure>
</div>

The timer jumps to 4s right when hitting start and once the timer switches to 0s there are still 1s to go. This makes a lot of sense when counting up, for example, 10:00 is displayed during the first minute of 10 AM, not 10:01, always rounding down. But for a countdown timer, this is counterintuitive. It is easier to understand if the timer has a fractional seconds display.

<div class="text-center">
  <figure data-gifpause onclick="gifpause_toggle(event)">
    <img
      class="rounded"
      src="/img/writing/5s-timer-seconds-fractions.gif"
      data-still="/img/writing/5s-timer-seconds-fractions.png"
      alt="5s countdown timer showing seconds and its fractions"
    />
  </figure>
</div>

Now the timer displays 0.9s seconds instead of 0s to show clearly that there is still time left on the clock. However, I didn't want to show fractional seconds for my timer.

# Checking how the iPhone does it

Now I was curious how my iPhone solves this conundrum. So I set my iPhone timer to 5s:

<div class="text-center">
  <figure data-gifpause onclick="gifpause_toggle(event)">
    <img
      class="rounded"
      src="/img/writing/5s-timer-iphone.gif"
      data-still="/img/writing/5s-timer-iphone.png"
      alt="5s countdown timer on the iPhone"
    />
  </figure>
</div>

After I click "Start" the iPhone timer shows 5s, not 4s like in the example above. But it switches to 4s before a full second expired. It then counts proper seconds until it reaches 0s which, again, is not a full second. And if you tap "Pause" just after it jumped to 0s it will promptly jump back to 1s to show you that there is, in fact, still some time left on the countdown.

I figured that the good folks at Apple add an extra fake 500ms to the actual time to start that countdown display at 5s instead of 4s. The timer ends and the phone beeps if the actual time hits 0s and the "fake" time hits 500ms. So they faced the same problem I did and came up with a practical solution. After all, if you start a 5s countdown, it should start at 5s right? For illustration, here is my simple timer doing the same trick.

<div class="text-center">
  <figure data-gifpause onclick="gifpause_toggle(event)">
    <img
      class="rounded"
      src="/img/writing/5s-timer-fake-seconds.gif"
      data-still="/img/writing/5s-timer-fake-seconds.png"
      alt="5s countdown timer showing fake seconds"
    />
  </figure>
</div>

So there you have it, the iPhone timer is technically lying a little bit to you.

# Edit: About rounding time

Some have pointed out that the problem could be simply solved by rounding to the nearest integer or rounding up instead of rounding down.

Suppose we have `5459543ms` that we want to bring into the traditional form `HH:mm:ss`. We need to devide this number and apply some modular arithmatic to get hours, minutes and seconds. Here is the formula with the respective results:

```js
time = 5459543
seconds = (time / 1000) % 60 // 1.517
minutes = (time / 60000) % 60 // 30.992
hours = (time / 3600000) % 24 // 59.543
```

Rounding down will give us the correct time `01:30:59` while rounding up or to the nearest integer would result in `02:31:60`. We could also round `time` to full seconds first and divide afterwards:

```js
timeInSeconds = Math.ceil(5459543 / 1000)
seconds = timeInSeconds % 60 // 0
minutes = (timeInSeconds / 60) % 60 // 31
hours = (timeInSeconds / 3600) % 24 // 1.516
```

This kind of works, giving us a better display for a countdown timer if we round down the hour (or do more fancy calculations which is not the point of this article). Hence adding 500ms before displaying the time may be the simpler solution the iOS developer chose to solve the problem.

### References:

- [The code from the animations in this article](https://codepen.io/lhermann/pen/wvzPxXj)

---
title: 'Why the iPhone Timer App displays a Fake Time'
published: true
created: 2020-12-22
description:
tags:
cover_image:
---

# TL;DR

The iPhone countdown timer doesn't strictly display the correct time but adds 500ms or half a second to the display of the remaining time. It does this to make the reading of time more intuitive for humans. The alarm at the end of the countdown is not affected by this 500ms inaccuracy.

# Countdowns are tricky

While building my event timer app called [stagetimer.io](https://stagetimer.io) I came across an anomaly with displaying time. By definition, a countdown shows how much time is left. So if the coundown says 5s you asume there are 5 seconds left. But that's not the whole truth.

Javascript likes to use milliseconds when dealing with time, 1000ms equals 1s. Here is an example of a 5s countdown that starts at 5000ms and uses the [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) function to deduct 10ms every 10ms, simple enough. Milliseconds are converted to seconds by dividing by 1000 and rounding down like so: `Math.floor(milliseconds / 1000)`

![5s countdown timer showing only seconds](/img/writing/5s-timer-seconds.gif){.mx-auto .rounded}

The timer jumps to 4s right when hitting start and once the timer switches to 0s there is actually still 1s to go. This makes a lot of sense when counting up, for example we display 10:00 during the first minute of 10AM, not 10:01, we always round down. But for a countdown timer this is counterintuitive. It is easier to understand if the timer has a fractional seconds display.

![5s countdown timer showing seconds and its fractions](/img/writing/5s-timer-seconds-fractions.gif){.mx-auto .rounded}

Now the timer displays 0.9s seconds instead of 0s to show clearly that there is still time left on the clock. However, I didn't want to show fractional seconds for my timer.

# Checking how the iPhone does it

So now I was curious how my iPhone solves this conundrum. So I set my iPhone timer to 5s:

![5s countdown timer on the iPhone](/img/writing/5s-timer-iphone.gif){.mx-auto .rounded}

After I click "Start" the iPhone timer shows 5s, not 4s as in the example above. But it switches to 4s before a full second expired. It then counts proper seconds until it reaches 0s which, again, is not a full second. And if you tap "Pause" just after it jumped to 0s it will promply jump back to 1s to show you that there is, in fact, still some time left on the countdown.

I figured that the good folks at Apple actually add an extra fake 500ms to the real time to start that countdown display at 5s instead of 4s. The timer ends and the phone beeps if the real time hits 0s and the "fake" time hits 500ms. So they faced the same problem I did and came up with a practical solution. After all, if you start a 5s countdown, it should start at 5s right? For illustration, here is my simple timer doing the same trick.

![5s countdown timer showing fake seconds](/img/writing/5s-timer-fake-seconds.gif){.mx-auto .rounded}

So there you have it, the iPhone timer is technically lying to you.

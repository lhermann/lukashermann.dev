<template>
  <div class="wrapper">
    <section class="flex flex-wrap">
      <div class="md:pr-12 md:w-2/3">
        <h1 class="text-5xl leading-tight font-semibold mb-6">
          Hi, I'm Lukas Hermann
        </h1>
        <p class="text-xl mb-6">
          I'm a <strong>Front-End Developer</strong> who loves working with
          <strong>Vue.js</strong> and <strong>User Interface Design</strong>.
        </p>
        <ul class="flex text-2xl text-gray-600">
          <li class="mr-3 hover:text-orange-600">
            <a href="https://twitter.com/codinglukas">
              <twitter-icon />
            </a>
          </li>
          <li class="mr-3 hover:text-orange-600">
            <a href="https://github.com/lhermann">
              <github-icon />
            </a>
          </li>
          <li class="mr-3 hover:text-orange-600">
            <a href="https://www.linkedin.com/in/lukas-hermann/">
              <linkedin-icon />
            </a>
          </li>
          <li class="mr-3 hover:text-orange-600">
            <a href="https://dev.to/lhermann">
              <devto-icon />
            </a>
          </li>
          <li class="mr-3 hover:text-orange-600">
            <a href="mailto:lukas@tentmaker.dev">
              <mail-icon />
            </a>
          </li>
        </ul>
      </div>
      <div class="max-w-full md:w-1/3 mt-8 md:mt-0 flex-shrink-0">
        <img
          class="rounded-lg shadow-lg"
          src="/img/lukas-portrait-300.jpg"
          alt="Portrait of me, Lukas Hermann"
          srcset="
            /img/lukas-portrait-1200.jpg 1200w,
            /img/lukas-portrait-600.jpg   600w,
            /img/lukas-portrait-300.jpg   300w
          "
        />
      </div>
    </section>
  </div>
</template>

<script>
import TwitterIcon from '~/components/icons/Twitter'
import GithubIcon from '~/components/icons/Github'
import LinkedinIcon from '~/components/icons/LinkedIn'
import DevtoIcon from '~/components/icons/DevTo'
import MailIcon from '~/components/icons/Mail'

export default {
  components: { TwitterIcon, GithubIcon, LinkedinIcon, DevtoIcon, MailIcon }
}
</script>

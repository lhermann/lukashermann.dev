<template>
  <section class="wrapper">
    <div class="flex flex-wrap mb-16">
      <div class="md:pr-12 md:w-2/3">
        <h1 class="text-5xl leading-tight font-semibold mb-6">
          Hi, I'm Lukas Hermann
        </h1>
        <p class="text-xl mb-6">
          I'm a <strong>Maker</strong> and <strong>Front-End Engineer</strong> who loves working with
          <strong>Vue.js</strong> and <strong>User Interface Design</strong>.
        </p>
        <ul class="flex text-gray-600">
          <li class="mb-3 mr-3">
            <a href="https://twitter.com/_lhermann" class="hover:text-orange-600">
              <TwitterIcon class="text-2xl inline-block align-top" />
              <!-- @_lhermann -->
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a href="https://github.com/lhermann" class="hover:text-orange-600">
              <GithubIcon class="text-2xl inline-block align-top" />
              <!-- github.com/lhermann -->
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a href="https://www.linkedin.com/in/lukas-hermann/" class="hover:text-orange-600">
              <LinkedinIcon class="text-2xl inline-block align-top" />
              <!-- Lukas Hermann -->
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a href="https://dev.to/lhermann" class="hover:text-orange-600">
              <DevtoIcon class="text-2xl inline-block align-top" />
              <!-- dev.to/lhermann -->
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a
              v-email-obfuscate="'x.f'"
              class="mail hover:text-orange-600"
              href="mailto:Lukas%20Hermann<hx.fey@lukasherx.fmann.dev>?subject=Hey%20Lukas"
            >
              <MailIcon class="text-2xl inline-block align-top" />
              h<b>x.f</b>ey@<i>luk</i>asher<b>tty</b>mann.dev
            </a>
          </li>
        </ul>
      </div>
      <div class="max-w-full md:w-1/3 mt-8 md:mt-0 flex-shrink-0">
        <img
          class="rounded-lg shadow-md"
          src="/img/lukas-portrait-300.jpg"
          alt="Portrait of me, Lukas Hermann"
          srcset="
            /img/lukas-portrait-1200.jpg 1200w,
            /img/lukas-portrait-600.jpg   600w,
            /img/lukas-portrait-300.jpg   300w
          "
        />
      </div>
    </div>

    <hr class="border-t border-gray-400 mb-16" />

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/4 mb-8 md:pr-8">
        <img
          class="rounded shadow-md"
          src="/img/katutubo-300.jpg"
          alt="Katutubo, native of the Philippines"
          srcset="
            /img/katutubo-1200.jpg 1200w,
            /img/katutubo-600.jpg   600w,
            /img/katutubo-300.jpg   300w,
            /img/katutubo-150.jpg   150w
          "
        />
      </div>
      <div class="w-full md:w-3/4">
        <h2 class="text-lg font-semibold">Why Tentmaker?</h2>
        <p class="text-gray-600">
          The concept derived from the apostle Paul who used to earn his living
          with his trade, tent making, while ministering in different cities in
          Asia Minor. Similarly, my wife and I are supporting several social
          projects in foreign countries financially, actively in person and with
          counsel, while earning a living with my trade, programming.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import DevtoIcon from '~/assets/icons/devto.svg?inline'
import MailIcon from '~/assets/icons/mail.svg?inline'

export default {
  components: { TwitterIcon, GithubIcon, LinkedinIcon, DevtoIcon, MailIcon },
  head() {
    return {
      link: [{ rel: 'canonical', href: 'https://lukashermann.dev' }],
    }
  },
}
</script>

<style scoped>
.mail > b {
  visibility: hidden;
  font-size: 0px;
}
.mail > i {
  font-style: normal;
}
</style>

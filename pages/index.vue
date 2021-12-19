<template>
  <section class="wrapper">
    <div class="flex flex-wrap mb-16">
      <div class="md:pr-12 md:w-2/3">
        <h1 class="text-5xl leading-tight font-semibold mb-6">
          Hi, I'm Lukas Hermann
        </h1>
        <p class="text-xl mb-6">
          I'm a <strong>Maker</strong> and <strong>Full Stack Developer</strong> who loves working with the <strong>Frontend</strong>, <strong>Vue.js</strong> and <strong>User Interface Design</strong>.
        </p>
        <ul class="flex text-gray-600 mb-12">
          <li class="mb-3 mr-3">
            <a
              href="https://twitter.com/_lhermann"
              title="Twitter"
              class="hover:text-amber-600"
              rel="noopener"
            >
              <TwitterIcon class="text-2xl inline-block align-top" />
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a
              href="https://github.com/lhermann"
              title="Github"
              class="hover:text-amber-600"
              rel="noopener"
            >
              <GithubIcon class="text-2xl inline-block align-top" />
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a
              href="https://www.linkedin.com/in/lukas-hermann/"
              title="Linkedin"
              class="hover:text-amber-600"
              rel="noopener"
            >
              <LinkedinIcon class="text-2xl inline-block align-top" />
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a
              href="https://dev.to/lhermann"
              title="dev.to"
              class="hover:text-amber-600"
              rel="noopener"
            >
              <DevtoIcon class="text-2xl inline-block align-top" />
            </a>
          </li>
          <li class="mb-3 mr-3">
            <a
              v-email-obfuscate="'x.f'"
              class="mail hover:text-amber-600"
              href="mailto:Lukas%20Hermann<hx.fey@lukasherx.fmann.dev>?subject=Hey%20Lukas"
            >
              <MailIcon class="text-2xl inline-block align-top" />
              h<b>x.f</b>ey@<i>luk</i>asher<b>tty</b>mann.dev
            </a>
          </li>
        </ul>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-2">Monthly Updates</h2>
          <ArticleList :articles="monthlyUpdates" />
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-2">Articles</h2>
          <ArticleList :articles="regularArticles" />
        </section>
      </div>

      <div class="max-w-full md:w-1/3 mt-8 md:mt-0 flex-shrink-0">
        <div class="aspect-w-2 aspect-h-3">
          <img
            class="rounded-lg shadow-md"
            src="/img/lukas-portrait-300.jpg"
            alt="Portrait of me, Lukas Hermann"
            srcset="
              /img/lukas-portrait-600.jpg   600w,
              /img/lukas-portrait-300.jpg   300w
            "
          />
        </div>

        <section class="mt-10">
          <h2 class="text-2xl font-semibold mb-3">Timeline</h2>
          <Timeline />
        </section>
      </div>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-2">Testimonials</h2>
      <div class="space-y-4 text-xl">
        <blockquote class="font-light">
          Thank you for being always so insightful and willing to challenge the status quo!
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/rsrubkowski/" class="link">Radek Srubkowski</a></span>
        </blockquote>
        <blockquote class="font-light">
          We will miss your question-asking skills and your multi-tasking capacity.
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/tatiana-messiant/" class="link">Tatiana Messiant</a></span>
        </blockquote>
        <blockquote class="font-light">
          Really amazing skills you have when asking questions!
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/dr-daniel-michaelis/" class="link">Dr. Daniel Michaelis</a></span>
        </blockquote>
        <blockquote class="font-light">
          Good job keeping the housekeeping backlog under control and iterating on the process of handling these tasks.
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/mgoria/" class="link">Marcel Goria</a></span>
        </blockquote>
        <blockquote class="font-light">
          Love your your storytelling talent.
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/franziska-franz-91465436/" class="link">Franziska Franz</a></span>
        </blockquote>
        <blockquote class="font-light">
          Amazing facilitation of the retrospective, thank you!
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/vsevolod-tkach-271348162/" class="link">Vsevolod Tkach</a></span>
        </blockquote>
        <blockquote class="font-light">
          You always challenge yourself, me, the company, and everyone you work with.
          <br><span class="text-sm">– <a href="https://www.linkedin.com/in/tatiana-messiant/" class="link">Tatiana Messiant</a></span>
        </blockquote>
      </div>
    </section>

    <!-- <hr class="border-t border-gray-300 mb-16" /> -->

    <!-- <div class="flex flex-wrap">
      <div class="w-full md:w-1/4 mb-8 md:pr-8">
        <div class="aspect-w-1 aspect-h-1">
          <img
            class="rounded shadow-md"
            src="/img/katutubo-300.jpg"
            alt="Katutubo, native of the Philippines"
            srcset="
              /img/katutubo-600.jpg   600w,
              /img/katutubo-300.jpg   300w,
              /img/katutubo-150.jpg   150w
            "
          />
        </div>
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
    </div> -->
  </section>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'
import Timeline from '../components/Timeline.vue'
import getArticles from '../utils/getArticles.js'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import DevtoIcon from '~/assets/icons/devto.svg?inline'
import MailIcon from '~/assets/icons/mail.svg?inline'

export default {
  components: {
    ArticleList,
    Timeline,
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    DevtoIcon,
    MailIcon,
  },
  // asyncData () {
  //   getArticles()
  //   // const articles = require.context('~/content/writing/', true, /\.md$/)
  //   // console.log(articles)
  //   // console.log(require, require.context)
  // },
  asyncData: () => ({
    articles: getArticles(),
  }),
  head: () => ({
    link: [{ rel: 'canonical', href: 'https://lukashermann.dev' }],
  }),
  computed: {
    monthlyUpdates () {
      return this.articles.filter(item => item.tags.includes('Monthly Update'))
    },
    regularArticles () {
      return this.articles.filter(item => !item.tags.includes('Monthly Update'))
    },
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

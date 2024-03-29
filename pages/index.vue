<template>
  <div class="wrapper space-y-16">
    <!-- Hero Section -->
    <section class="flex items-center flex-wrap justify-center md:flex-nowrap md:justify-start">
      <div class="flex-auto text-center md:text-left md:pr-12">
        <h1 class="text-5xl leading-tight font-semibold mb-8">
          Hi, I'm Lukas
        </h1>
        <p class="text-xl mb-4">
          I bootstrap a profitable business and <a class="link" href="https://twitter.com/_lhermann" rel="noopener">tweet</a> about it. Building great <nuxt-link class="link" to="/work/">products</nuxt-link> is something I love doing.
        </p>
        <p class="text-xl mb-8">
          In the process <a class="link" href="https://twitter.com/_lhermann/status/1506665241458921476?s=20&t=gtIL_nOik50hIOkEsB6Cng" rel="noopener">I'm going to get rich</a> or fail trying 😄
        </p>
        <ul class="flex justify-center md:justify-start text-gray-600">
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
          <li class="mb-3 mr-3 truncate">
            <a
              v-email-obfuscate="'x.f'"
              class="mail hover:text-amber-600"
              href="mailto:Lukas%20Hermann<hx.fey@lukasherx.fmann.dev>?subject=Hey%20Lukas"
            >
              <MailIcon class="text-2xl inline-block align-top" />
              <span class="hidden md:inline">
                h<b>x.f</b>ey@<i>luk</i>asher<b>tty</b>mann.dev
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex-none w-64 mt-8 md:mt-0">
        <img
          class="rounded-lg shadow-md"
          src="/img/lukas-portrait-300.jpg"
          alt="Portrait of me, Lukas Hermann"
          srcset="/img/lukas-portrait-600.jpg 600w, /img/lukas-portrait-300.jpg 300w"
          width="600"
          height="900"
        />
      </div>
    </section>

    <!-- Article/Timeline Section -->
    <section class="flex flex-wrap md:flex-nowrap md:space-x-12">
      <div class="flex-auto w-full md: w-auto space-y-12">
        <!-- <section>
          <h2 class="text-2xl font-semibold mb-3">Monthly Updates</h2>
          <ArticleList :articles="monthlyUpdates" />
        </section> -->

        <section>
          <h2 class="text-2xl font-semibold mb-3">Articles</h2>
          <ArticleList :articles="regularArticles" />
        </section>
      </div>
      <div class="md:flex-none w-full md:w-64 mt-16 md:mt-0">
        <section>
          <h2 class="text-2xl font-semibold mb-3">Timeline</h2>
          <Timeline />
        </section>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section>
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
  </div>
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
    // monthlyUpdates () {
    //   return this.articles.filter(item => item.tags.includes('Monthly Update'))
    // },
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

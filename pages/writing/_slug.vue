<template>
  <article
    class="wrapper"
    :lang="attributes.lang || 'en'"
  >
    <header v-if="attributes" class="mb-12">
      <h1
        v-if="attributes.title"
        class="text-6xl font-semibold leading-tight break-words mb-4 md:mb-2"
      >
        {{ attributes.title }}
      </h1>
      <div class="flex flex-wrap items-center -ml-2">
        <TmIdentity class="p-2" />
        <div v-if="attributes.created" class="p-2">
          <time class="text-gray-500" :datetime="attributes.created">
            {{ formatDate(attributes.created) }}
          </time>
        </div>
        <div v-if="attributes.updated" class="text-gray-500 p-2">
          Updated on
          <time :datetime="attributes.updated">
            {{ formatDate(attributes.updated) }}
          </time>
        </div>
        <div v-if="attributes.tags" class="p-2">
          <TmTags class="test" :tags="attributes.tags" />
        </div>
      </div>
    </header>

    <div
      class="markdown"
      v-html="html"
    ></div>

    <footer class="max-w-xl text-center my-24 mx-auto">
      <p class="text-5xl mb-3">Liked this article?</p>
      <a
        class="text-xl text-blue-600 hover:underline"
        href="https://twitter.com/_lhermann"
      >Follow me on Twitter for more</a>
    </footer>
  </article>
</template>

<script>
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import TmIdentity from '~/components/TmIdentity'
import TmTags from '~/components/TmTags'
import { parseTwitterWidget } from '~/utils/twitterScript.js'

export default {
  components: {
    TmIdentity,
    TmTags,
  },
  async asyncData ({ params, error }) {
    try {
      if (params.slug.endsWith('-draft')) {
        const file = params.slug.replace(/-draft$/, '') + '.md'
        return await require(`~/content/drafts/${file}`)
      } else {
        return await require(`~/content/writing/${params.slug}.md`)
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Article not found' })
    }
  },
  head () {
    const image = process.env.host + this.attributes?.cover_image
    return {
      title: this.attributes?.title,
      meta: [
        // Add these Twitter Card specific tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@_lhermann' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@_lhermann' },

        // Your existing meta tags...
        { hid: 'author', name: 'author', content: 'Lukas Hermann' },
        { hid: 'description', name: 'description', content: this.attributes?.description },
        { hid: 'publish_date', name: 'publish_date', property: 'og:publish_date', content: this.attributes?.created },
        { hid: 'article:published_time', name: 'article:published_time', content: this.attributes?.created },
        { hid: 'twitter:title', name: 'twitter:title', content: this.attributes?.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.attributes?.description },
        { hid: 'twitter:image', name: 'twitter:image', content: image },

        // Keep your existing OG tags as fallbacks
        { hid: 'og:title', property: 'og:title', content: this.attributes?.title },
        { hid: 'og:description', property: 'og:description', content: this.attributes?.description },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:url', property: 'og:url', content: this.canonical },
      ],
      link: [
        { rel: 'canonical', href: this.canonical },
      ],
      htmlAttrs: {
        lang: this.attributes?.lang || 'en',
      },
    }
  },
  computed: {
    canonical () {
      return this.attributes?.canonical_url || process.env.host + this.$route.path
    },
  },
  async mounted () {
    if (this.html.includes('twitter-tweet')) await parseTwitterWidget()
  },
  methods: {
    formatDate(date) {
      return date ? format(parseISO(date), 'MMMM d, y') : date
    },
  },
}
</script>

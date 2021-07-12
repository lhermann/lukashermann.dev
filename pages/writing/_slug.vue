<template>
  <article class="wrapper">
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

    <div class="markdown" v-html="html"></div>

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
        {
          hid: 'description',
          name: 'description',
          content: this.attributes?.description,
        },
        { name: 'article:published_time', content: this.attributes?.created },
        { name: 'og:title', content: this.attributes?.title },
        { name: 'og:description', content: this.attributes?.description },
        { name: 'og:image', content: image },
        { name: 'og:url', content: this.canonical },
        { name: 'twitter:title', content: this.attributes?.title },
        { name: 'twitter:description', content: this.attributes?.description },
        { name: 'twitter:image', content: image },
        {
          name: 'twitter:card',
          content: this.attributes?.twitter_card || 'summary_large_image',
        },
      ],
      link: [
        { rel: 'canonical', href: this.canonical },
      ],
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

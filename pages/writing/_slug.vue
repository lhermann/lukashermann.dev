<template>
  <article class="wrapper">
    <header v-if="attributes" class="mb-12">
      <h1 v-if="attributes.title" class="text-4xl font-semibold leading-tight mb-4 md:mb-2">
        {{ attributes.title }}
      </h1>
      <div class="flex flex-wrap items-center">
        <TmIdentity class="mr-5" />
        <div v-if="attributes.created" class="mr-5">
          <time class="text-gray-500" :datetime="attributes.created">
            {{ formatDate(attributes.created) }}
          </time>
        </div>
        <div v-if="attributes.updated" class="mr-5 text-gray-500">
          Updated on
          <time :datetime="attributes.updated">
            {{ formatDate(attributes.updated) }}
          </time>
        </div>
        <div v-if="attributes.tags">
          <TmTags class="test" :tags="attributes.tags" />
        </div>
      </div>
    </header>

    <div class="markdown" v-html="html"></div>

    <footer class="max-w-xl text-center my-24 mx-auto">
      <p class="text-3xl font-semibold">I would love to hear from you if you liked it or have any questions</p>
      <a
        class="text-blue-600 underline"
        href="https://twitter.com/_lhermann"
      >Twitter</a>
    </footer>
  </article>
</template>

<script>
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import TmIdentity from '~/components/TmIdentity'
import TmTags from '~/components/TmTags'

export default {
  components: {
    TmIdentity,
    TmTags,
  },
  async asyncData ({ params }) {
    try {
      return await require(`~/content/writing/${params.slug}.md`)
    } catch (error) {
      const draft = await require(`~/content/drafts/${params.slug}.md`)
      if (draft) return draft
      else return { attributes: {}, meta: '', html: '' }
    }
  },
  methods: {
    formatDate(date) {
      return date ? format(parseISO(date), 'MMMM d, y') : date
    },
  },
  head () {
    const canonical = this.attributes?.canonical_url || process.env.host + this.$route.path
    const image = process.env.host + this.attributes?.cover_image
    return {
      title: this.attributes?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes?.description,
        },
        { name: 'og:title', content: this.attributes?.title },
        { name: 'og:description', content: this.attributes?.description },
        { name: 'og:image', content: image },
        { name: 'og:url', content: canonical },
        { name: 'twitter:title', content: this.attributes?.title },
        { name: 'twitter:description', content: this.attributes?.description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'canonical',
          href: canonical,
        },
      ],
    }
  },
}
</script>

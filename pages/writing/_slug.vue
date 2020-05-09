<template>
  <article class="wrapper">
    <header v-if="attributes" class="mb-12">
      <h1 v-if="attributes.title" class="text-4xl font-semibold">
        {{ attributes.title }}
      </h1>
      <div class="flex items-center">
        <TmIdentity />
        <template v-if="attributes.created">
          <span class="text-gray-400 mx-2">&middot;</span>
          <time class="text-gray-500" :datetime="attributes.created">
            {{ formatDate(attributes.created) }}
          </time>
        </template>
        <template v-if="attributes.updated">
          <span class="text-gray-400 mx-2">&middot;</span>
          <div class="text-gray-500">
            Updated on
            <time :datetime="attributes.updated">
              {{ formatDate(attributes.updated) }}
            </time>
          </div>
        </template>
        <template v-if="attributes.tags">
          <span class="text-gray-400 mx-2">&middot;</span>
          <TmTags class="test" :tags="attributes.tags" />
        </template>
      </div>
    </header>

    <div class="markdown" v-html="html"></div>
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
      return { attributes: {}, meta: '', html: '' }
    }
  },
  methods: {
    formatDate(date) {
      return date ? format(parseISO(date), 'MMMM d, y') : date
    },
  },
  head () {
    const canonical = this.attributes?.canonical_url || process.env.host + this.$route.path
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
        { name: 'og:image', content: this.attributes?.cover_image },
        { name: 'og:url', content: canonical },
        { name: 'twitter:title', content: this.attributes?.title },
        { name: 'twitter:description', content: this.attributes?.description },
        { name: 'twitter:image', content: this.attributes?.cover_image },
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

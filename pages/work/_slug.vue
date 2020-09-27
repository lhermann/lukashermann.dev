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
          <div class="text-gray-500">{{ formatDate(attributes.created) }}</div>
        </template>
        <template v-if="attributes.updated">
          <span class="text-gray-400 mx-2">&middot;</span>
          <div class="text-gray-500">
            Updated on {{ formatDate(attributes.updated) }}
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
  async asyncData({ params, error }) {
    try {
      return await require(`~/content/work/${params.slug}.md`)
    } catch (e) {
      error({ statusCode: 404, message: 'Artcile not found' })
    }
  },
  methods: {
    formatDate(date) {
      return date ? format(parseISO(date), 'MMMM d, y') : date
    },
  },
}
</script>

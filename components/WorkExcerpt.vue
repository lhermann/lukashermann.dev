<template>
  <article class="flex">
    <div class="w-1/4">
      <img
        v-if="attr.thumbnail"
        class="rounded shadow"
        :src="attr.thumbnail"
      />
    </div>
    <div class="w-2/4 pl-8">
      <h2 class="text-4xl font-semibold text-white mb-3">
        {{ attr.title }}
      </h2>
      <TmTags
        v-if="attr.tags"
        class="mb-3"
        :tags="attr.tags"
        tag-class="border border-violet-200 text-violet-200"
        ghost
      />
      <p class="content text-violet-100 mb-3" v-html="data.html"></p>
      <p>
        <nuxt-link
          class="inline-block rounded text-lg font-semibold bg-violet-800 hover:bg-purple-800 text-violet-100 hover:text-white px-4 py-2 shadow transition"
          :to="attr.read_more_link"
        >
          Read More
        </nuxt-link>
      </p>
    </div>
  </article>
</template>

<script>
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import TmTags from '~/components/TmTags'

export default {
  components: {
    TmTags,
  },
  props: {
    data: { type: Object, required: true },
    type: { type: String, default: 'writing' },
  },
  computed: {
    attr() {
      return this.data ? this.data.attributes : {}
    },
    // url() {
    //   if (!this.data) return ''
    //   const filename = this.data.meta.resourcePath
    //     .split('/')
    //     .pop()
    //     .replace('.md', '')
    //   return this.attr.canonical_url || `/${this.type}/${filename}/`
    // },
    created() {
      return this.attr.created
        ? format(parseISO(this.attr.created), 'MMMM d, y')
        : ''
    },
  },
}
</script>

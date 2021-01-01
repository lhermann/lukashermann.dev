<template>
  <component
    :is="attr.canonical_url ? 'a' : 'nuxt-link'"
    class="flex"
    :to="url"
    :href="url"
  >
    <div>
      <img
        v-if="attr.cover_image"
        class="rounded shadow"
        :src="attr.cover_image"
      />
    </div>
  </component>
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
    url() {
      if (!this.data) return ''
      const filename = this.data.meta.resourcePath
        .split('/')
        .pop()
        .replace('.md', '')
      return this.attr.canonical_url || `/${this.type}/${filename}/`
    },
    created() {
      return this.attr.created
        ? format(parseISO(this.attr.created), 'MMMM d, y')
        : ''
    },
  },
}
</script>

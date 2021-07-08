<template>
  <component
    :is="attr.canonical_url ? 'a' : 'nuxt-link'"
    class="excerpt block transition-transform duration-300 text-white"
    :to="url"
    :href="url"
  >
    <article class="flex flex-wrap">
      <div class="w-full">
        <time
          v-if="created"
          class="text-black"
          :datetime="attr.created"
          :title="created"
        >
          {{ created }}
        </time>
      </div>
      <div class="w-full md:w-1/3">
        <h2 class="title text-2xl font-semibold leading-tight my-1">
          {{ attr.title }}
        </h2>
      </div>
      <div class="w-full md:w-2/3 pl-0 md:pl-12">
        <p class="mb-2">
          {{ attr.description }}
        </p>
        <p
          v-if="attr.canonical_plattform"
          class="text-sm text-black mb-2"
        >
          Originally published on: <strong>{{ attr.canonical_plattform }}</strong>
        </p>
        <TmTags
          v-if="attr.tags"
          :tags="attr.tags"
          tag-class="border border-orange-200 text-orange-200"
        />
      </div>
    </article>
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
    draft: Boolean,
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
        .replace('.md', this.draft ? '-draft' : '')
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

<style scoped>
.image {
  @apply relative rounded shadow bg-white w-full;
  @apply transition-shadow duration-300;
  padding-top: 50%;
}

.content {
  @apply relative rounded shadow-lg bg-white mx-4 px-4 py-2 z-10;
  @apply transition-all duration-300;
  margin-top: -1em;
}

.tag {
  @apply inline text-sm bg-yellow-400 text-yellow-900 py-0 px-1 rounded;
}

.excerpt:hover {
  /*@apply transform translate-y-px;*/
}

.excerpt:hover .image {
  @apply shadow-sm;
}

.excerpt:hover .image > img {
  opacity: 0.8;
}
.excerpt:hover .content {
  @apply shadow-md transform translate-y-px;
}

.excerpt:hover .title {
  @apply underline;
}
</style>

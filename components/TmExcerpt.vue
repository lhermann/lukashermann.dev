<template>
  <component
    :is="attr.canonical_url ? 'a' : 'nuxt-link'"
    class="excerpt block transition-transform duration-300"
    :to="url"
    :href="url"
  >
    <div class="image">
      <img
        v-if="attr.cover_image"
        class="absolute top-0 rounded transition-opacity duration-300"
        :src="attr.cover_image"
      />
    </div>
    <div class="content">
      <time
        v-if="created"
        class="font-semibold text-blue-600"
        :datetime="attr.created"
        :title="created"
      >
        {{ created }}
      </time>
      <h1 class="title text-lg font-semibold leading-tight my-1">
        {{ attr.title }}
      </h1>
      <TmTags :tags="attr.tags" />
      <p
        v-if="attr.canonical_plattform"
        class="text-sm text-gray-500 text-right mt-2"
      >
        Originally published on: <strong>{{ attr.canonical_plattform }}</strong>
      </p>
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
    post: { type: Object, required: true },
  },
  computed: {
    attr() {
      return this.post.attributes || {}
    },
    url() {
      const filename = this.post.meta.resourcePath
        .split('/')
        .pop()
        .replace('.md', '')
      return this.attr.canonical_url || `/writing/${filename}`
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
  padding-top: 42%;
}

.content {
  @apply relative rounded shadow-lg bg-white mx-4 px-4 py-2 z-10;
  @apply transition-shadow duration-300;
  margin-top: -2em;
}

.tag {
  @apply inline text-sm bg-yellow-400 text-yellow-900 py-0 px-1 rounded;
}

.excerpt:hover {
  @apply transform translate-y-px;
}

.excerpt:hover .image {
  @apply shadow-sm;
}

.excerpt:hover .image > img {
  opacity: 0.8;
}
.excerpt:hover .content {
  @apply shadow-md transform;
}

.excerpt:hover .title {
  @apply underline;
}
</style>

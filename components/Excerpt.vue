<template>
  <component
    :is="attr.canonical_url ? 'a' : 'nuxt-link'"
    class="excerpt"
    :to="url"
    :href="url"
  >
    <div class="image">
      <img
        v-if="attr.cover_image"
        class="absolute top-0 rounded"
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
      <h1 class="text-lg font-semibold leading-tight my-1">
        {{ post.attributes.title }}
      </h1>
      <ul v-if="attr.tags">
        <li v-for="tag in attr.tags.split(',')" :key="tag" class="tag mr-1">
          #{{ tag }}
        </li>
      </ul>
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

export default {
  props: {
    post: { type: Object, default: () => ({}) },
  },
  computed: {
    attr() {
      return this.post.attributes || {}
    },
    url() {
      // return `/writing/${this.post.slug}`
      return this.attr.canonical_url || `/writing/${this.post.slug}`
    },
    created() {
      return this.attr.created
        ? format(parseISO(this.attr.created), 'd MMMM y')
        : ''
    },
  },
}
</script>

<style scoped>
.image {
  @apply relative rounded shadow bg-yellow-500 w-full;
  padding-top: 42%;
}

.image img {
  transition: opacity 0.3s;
}

.content {
  @apply relative rounded shadow-lg bg-white mx-4 px-4 py-2 z-10;
  margin-top: -2em;
  transition: box-shadow 0.3s;
}

.tag {
  @apply inline text-sm bg-yellow-400 text-yellow-900 py-0 px-1 rounded;
}

.excerpt:hover .image img {
  opacity: 0.9;
}
.excerpt:hover .content {
  @apply shadow-md;
}
</style>

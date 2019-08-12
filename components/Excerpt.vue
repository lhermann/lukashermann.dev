<template>
  <nuxt-link class="excerpt" :to="`/writing/${post.slug}`">
    <div class="image">
      <img
        v-if="attr.cover_image"
        class="absolute top-0 rounded"
        :src="attr.cover_image"
      />
    </div>
    <div class="content">
      <h1 class="text-lg font-semibold">{{ post.attributes.title }}</h1>
      <ul v-if="attr.tags">
        <li v-for="tag in attr.tags.split(',')" :key="tag" class="tag mr-1">
          #{{ tag }}
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: () => ({}) }
  },
  computed: {
    attr() {
      return this.post.attributes || {}
    }
  }
}
</script>

<style scoped>
.image {
  @apply relative rounded shadow bg-gray-700 w-full;
  padding-top: 42%;
}

.image img {
  opacity: 0.95;
  transition: opacity 0.3s;
}

.content {
  @apply relative rounded shadow-lg bg-white mx-4 p-4 z-10;
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

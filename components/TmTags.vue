<template>
  <ul>
    <li
      v-for="(tag, i) in tagArray"
      :key="tag"
      class="inline text-sm bg-yellow-400 text-yellow-900 py-0 px-1 rounded"
      :class="{ 'mr-1': i < tagCount - 1 }"
      v-text="`#${tag}`"
    />
  </ul>
</template>

<script>
export default {
  props: {
    tags: { type: String, required: true },
  },
  computed: {
    tagArray() {
      return this.tags.split(',').map(tag => tag.trim())
    },
    tagCount() {
      return this.tagArray.length
    },
  },
}
</script>

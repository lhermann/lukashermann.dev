<template>
  <ul class="flex flex-wrap">
    <li
      v-for="(tag, i) in tagArray"
      :key="tag"
      class="text-sm py-0 px-1 rounded"
      :class="[tagClass, { 'mr-1': i < tagCount - 1 }]"
      v-text="`${tag}`"
    />
  </ul>
</template>

<script>
export default {
  props: {
    tags: { type: String, required: true },
    tagClass: { type: String, default: 'bg-amber-300 text-amber-900' },
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

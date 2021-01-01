<template>
  <ul>
    <li
      v-for="(tag, i) in tagArray"
      :key="tag"
      class="inline text-sm py-0 px-1 rounded"
      :class="{
        'mr-1': i < tagCount - 1,
        'border border-orange-200 text-orange-200': ghost,
        'bg-amber-300 text-amber-900': !ghost,
      }"
      v-text="`#${tag}`"
    />
  </ul>
</template>

<script>
export default {
  props: {
    tags: { type: String, required: true },
    ghost: Boolean,
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

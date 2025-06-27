<template>
  <article class="md:flex items-center gap-8 space-y-8 md:space-y-0">
    <div class="flex-none" style="width: 224px;">
      <div class="aspect-w-1 aspect-h-1">
        <img
          class="rounded shadow"
          :src="attr.thumbnail"
          :srcset="`${attr.thumbnail} 600w, ${attr.thumbnail2x} 1200w`"
        />
      </div>
    </div>
    <div class="flex-1">
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
      <div class="text-violet-100 mb-3" v-html="data.html"></div>
      <p>
        <nuxt-link
          v-if="attr.read_more_link"
          class="btn text-lg font-semibold px-4 py-2 shadow mr-2"
          :to="attr.read_more_link"
        >
          Read More
        </nuxt-link>
        <a
          v-if="attr.visit_link"
          class="btn text-lg font-semibold px-4 py-2 shadow mr-2"
          :href="attr.visit_link"
          target="_blank"
          rel="noopener"
        >
          Visit
        </a>
      </p>
      <div class="animate"></div>
    </div>
  </article>
</template>

<script>
import TmTags from '~/components/TmTags'

export default {
  components: {
    TmTags,
  },
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    attr() {
      return this.data ? this.data.attributes : {}
    },
  },
}
</script>

<style scoped>
.btn {
  @apply relative z-0 text-white overflow-hidden;
  @apply inline-block rounded;
}
.btn::before {
  content: "";
  z-index: -1;
  width: 200%;
  @apply absolute top-0 left-0 h-full;
  @apply bg-gradient-to-br from-fuchsia-500 to-purple-700;
  @apply text-white transition-transform duration-300;
}
.btn:hover::before {
  transform: translateX(-50%);
}
</style>

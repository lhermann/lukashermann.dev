<template>
  <ul class="space-y-4">
    <li
      v-for="article in articles"
      :key="article.slug"
      class="flex items-baseline"
    >
      <time
        class="flex-shrink-0 w-24 text-gray-400"
        :datetime="article.attributes.created"
      >
        {{ formattedDate(article.attributes.created) }}
      </time>
      <nuxt-link
        class="text-xl font-semibold leading-tight"
        :to="article.url"
      >
        <span class="link border-gray-400 hover:border-amber-500">
          {{ article.attributes.title }}
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

export default {
  props: {
    articles: { type: Array, default: () => [] },
  },
  methods: {
    formattedDate (date) {
      return date ? format(parseISO(date), 'MMM d, y') : ''
    },
  },
}
</script>

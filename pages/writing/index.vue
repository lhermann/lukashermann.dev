<template>
  <section class="wrapper">
    <header class="mb-12 py-8">
      <h1 class="text-6xl font-semibold text-orange-200">
        Articles
      </h1>
    </header>

    <ul>
      <li v-for="article in articles" :key="article.slug" class="mb-10">
        <ArticleExcerpt :article="article" />
      </li>
    </ul>
  </section>
</template>

<script>
import ArticleExcerpt from '~/components/ArticleExcerpt'
import getArticles from '~/utils/getArticles.js'

export default {
  components: { ArticleExcerpt },
  layout: 'orange',
  asyncData: () => ({
    articles: getArticles(),
  }),
  head: () => ({
    title: 'Writing',
    meta: [
      { hid: 'twitter:title', name: 'twitter:title', content: 'Writing' },
      { hid: 'og:title', property: 'og:title', content: 'Writing' },
    ],
  }),
}
</script>

<style scoped>
.body {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
</style>

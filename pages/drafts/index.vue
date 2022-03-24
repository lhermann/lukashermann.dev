<template>
  <section class="wrapper">
    <header class="mb-12 py-8">
      <h1 class="text-6xl font-semibold text-orange-200">
        Drafts
      </h1>
    </header>

    <ul>
      <li v-for="article in articles" :key="article.slug" class="mb-10">
        <ArticleExcerpt :article="article" draft />
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
    articles: getArticles({ drafts: true }),
  }),
  head: () => ({
    title: 'Drafts',
    meta: [
      { name: 'twitter:title', content: 'Drafts' },
      { property: 'og:title', content: 'Drafts' },
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

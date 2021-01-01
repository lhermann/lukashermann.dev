<template>
  <section class="wrapper">
    <header class="mb-12 py-8">
      <h1 class="text-6xl font-semibold text-orange-200">
        Articles
      </h1>
    </header>

    <ul>
      <li v-for="article in articles" :key="article.slug" class="mb-8">
        <ArticleExcerpt :data="article" />
      </li>
    </ul>
  </section>
</template>

<script>
import uslug from 'uslug'
import compareDesc from 'date-fns/compareDesc'
import parseISO from 'date-fns/parseISO'
import ArticleExcerpt from '~/components/ArticleExcerpt'

export default {
  components: { ArticleExcerpt },
  layout: 'orange',
  asyncData() {
    const articles = require.context('~/content/writing/', true, /\.md$/)
      .keys()
      .map(file => {
        const article = require(`~/content/writing/${file.replace('./', '')}`)
        article.slug = uslug(article.attributes.title)
        return article
      })
      .sort((a, b) => compareDesc(
        parseISO(a.attributes.created),
        parseISO(b.attributes.created),
      ))
    return { articles }
  },
}
</script>

<style scoped>
.body {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
</style>

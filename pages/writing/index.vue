<template>
  <section class="wrapper">
    <header class="mb-12">
      <h1 class="text-6xl font-semibold text-gray-400">
        Articles
      </h1>
    </header>

    <ul>
      <li v-for="post in posts" :key="post.slug" class="mb-8">
        <ArticleExcerpt :data="post" />
      </li>
    </ul>
  </section>
</template>

<script>
import uslug from 'uslug'
import ArticleExcerpt from '~/components/ArticleExcerpt'

export default {
  layout: 'gray',
  components: { ArticleExcerpt },
  asyncData() {
    const posts = require
      .context('~/content/writing/', true, /\.md$/)
      .keys()
      .map(file => {
        const post = require(`~/content/writing/${file.replace('./', '')}`)
        post.slug = uslug(post.attributes.title)
        return post
      })
    return { posts }
  },
}
</script>

<style scoped>
.body {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
</style>

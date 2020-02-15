<template>
  <section class="wrapper">
    <header class="mb-8">
      <h1 class="text-2xl font-semibold text-gray-600">
        Articles
      </h1>
    </header>

    <ul class="body flex flex-wrap">
      <li v-for="post in posts" :key="post.slug" class="p-2 w-full md:w-1/2">
        <TmExcerpt type="writing" :data="post" />
      </li>
    </ul>
  </section>
</template>

<script>
import uslug from 'uslug'
import TmExcerpt from '~/components/TmExcerpt'

export default {
  layout: 'gray',
  components: { TmExcerpt },
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

<template>
  <section class="wrapper">
    <header class="mb-8">
      <h1 class="text-2xl font-semibold text-gray-600">
        Articles
      </h1>
    </header>

    <ul class="body flex flex-wrap">
      <li v-for="post in posts" :key="post.slug" class="p-2 w-full md:w-1/2">
        <excerpt :post="post" />
      </li>
    </ul>
  </section>
</template>

<script>
import Excerpt from '~/components/Excerpt'

export default {
  layout: 'gray',
  components: { Excerpt },
  asyncData() {
    const posts = require
      .context('~/content/writing/', true, /\.md$/)
      .keys()
      .map(file => require(`~/content/writing/${file.replace('./', '')}`))
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

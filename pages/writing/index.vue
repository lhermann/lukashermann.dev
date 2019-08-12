<template>
  <section class="wrapper">
    <header>
      <h1 class="text-2xl font-semibold text-gray-600">
        Articles I wrote
      </h1>
    </header>

    <ul class="flex flex-wrap">
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
    if (process.server) {
      const fs = require('fs')
      const posts = fs
        .readdirSync('content/writing/')
        .map(file =>
          Object.assign(
            { slug: file.replace('.md', '') },
            require(`~/content/writing/${file}`)
          )
        )
      return { posts }
    }
  }
}
</script>

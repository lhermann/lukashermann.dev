<template>
  <article class="wrapper">
    <header class="mb-12">
      <h1 v-if="attributes.title" class="text-4xl font-semibold">
        {{ attributes.title }}
      </h1>
    </header>

    <div class="content" v-html="html"></div>
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      const post = await require(`~/content/writing/${params.slug}.md`)
      return post
    } catch (error) {
      return { body: '', html: '', attributes: {} }
    }
  },
}
</script>

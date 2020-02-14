<template>
  <article class="wrapper">
    <header>
      <h1 v-if="attributes.title">{{ attributes.title }}</h1>
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

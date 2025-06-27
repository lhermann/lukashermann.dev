<template>
  <section class="wrapper text-center markdown pt-6">
    <h1 v-if="statusCode === 404" class="text-4xl font-semibold">
      404 🤔
    </h1>
    <h1 v-else class="text-4xl font-semibold">An error occurred 🤔</h1>
    <p>Seems like you found an invalid link.</p>
    <p>Here you can find my <a href="/writing">articles</a> and <a href="/">bio</a>.</p>
  </section>
</template>

<script>
export default {
  layout: 'gray',
  props: {
    error: { type: Object, required: true },
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error && this.error.message
    },
  },
}
</script>

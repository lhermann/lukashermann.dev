<template>
  <section class="wrapper">
    <header class="mb-8">
      <h1 class="text-2xl font-semibold text-gray-600">
        My Project and Work Portfolio
      </h1>
    </header>

    <ul class="body flex flex-wrap">
      <li
        v-for="project in projects"
        :key="project.slug"
        class="p-2 w-full md:w-1/2"
      >
        <WorkExcerpt type="work" :data="project" />
      </li>
    </ul>
  </section>
</template>

<script>
import WorkExcerpt from '~/components/WorkExcerpt'

export default {
  layout: 'gray',
  components: { WorkExcerpt },
  asyncData() {
    const projects = require
      .context('~/content/work/', true, /\.md$/)
      .keys()
      .map(file => require(`~/content/work/${file.replace('./', '')}`))
    return { projects }
  },
}
</script>

<style scoped>
.body {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
</style>

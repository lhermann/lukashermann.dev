<template>
  <section class="wrapper">
    <header class="mb-12 py-8">
      <h1 class="text-6xl font-semibold text-violet-200">
        Projects and Work Portfolio
      </h1>
    </header>

    <ul class="body flex flex-wrap">
      <li
        v-for="project in projects"
        :key="project.slug"
      >
        <WorkExcerpt :data="project" />
      </li>
    </ul>
  </section>
</template>

<script>
import WorkExcerpt from '~/components/WorkExcerpt'

export default {
  components: { WorkExcerpt },
  layout: 'purple',
  asyncData() {
    const projects = require
      .context('~/content/work/', true, /\.md$/)
      .keys()
      .map(file => require(`~/content/work/${file.replace('./', '')}`))
    return { projects }
  },
}
</script>

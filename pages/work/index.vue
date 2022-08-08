<template>
  <section class="wrapper">
    <header class="mb-12 py-8">
      <h1 class="text-6xl font-semibold text-violet-300">
        Projects and Work Portfolio
      </h1>
    </header>

    <section>
      <h2 class="flex items-center space-x-3 my-8">
        <span class="text-3xl font-semibold text-violet-300">
          Current
        </span>
        <span class="flex-grow bg-violet-300 h-1" />
      </h2>
      <ul class="body flex flex-wrap">
        <li
          v-for="project in activeProjects"
          :key="project.slug"
          class="mb-12"
        >
          <WorkExcerpt :data="project" />
        </li>
      </ul>
    </section>

    <section>
      <h2 class="flex items-center space-x-3 my-8">
        <span class="text-3xl font-semibold text-violet-300">
          Past
        </span>
        <span class="flex-grow bg-violet-300 h-1" />
      </h2>
      <ul class="body flex flex-wrap">
        <li
          v-for="project in inactiveProjects"
          :key="project.slug"
          class="mb-12"
        >
          <WorkExcerpt :data="project" />
        </li>
      </ul>
    </section>
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
      .sort((a, b) => new Date(b.attributes.created) - new Date(a.attributes.created))
    return { projects }
  },
  head: () => ({
    title: 'Work',
    meta: [
      { hid: 'twitter:title', name: 'twitter:title', content: 'Work' },
      { hid: 'og:title', property: 'og:title', content: 'Work' },
    ],
  }),
  computed: {
    activeProjects () {
      return this.projects.filter(item => item.attributes.active)
    },
    inactiveProjects () {
      return this.projects.filter(item => !item.attributes.active)
    },
  },
}
</script>

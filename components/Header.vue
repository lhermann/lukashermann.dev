<template>
  <header class="wrapper flex items-center py-4">
    <nuxt-link to="/" class="hover:text-amber-600 w-6" title="Lukas Hermann">
      <LhLogo />
    </nuxt-link>
    <div class="flex-grow"></div>
    <nuxt-link to="/" class="h-link" exact>Bio</nuxt-link>
    <nuxt-link to="/work/" class="h-link">Work</nuxt-link>
    <nuxt-link to="/writing/" class="h-link">Writing</nuxt-link>
    <nuxt-link v-if="development" to="/drafts/" class="h-link">Drafts</nuxt-link>
  </header>
</template>

<script>
import LhLogo from '~/components/LhLogo'

export default {
  components: {
    LhLogo,
  },
  computed: {
    development () {
      return process.env.NODE_ENV === 'development'
    },
  },
}
</script>

<style scoped>
.h-link {
  @apply relative text-lg font-semibold px-1 mx-2;
}

.h-link:after {
  content: '';
  @apply block absolute border-b-2 border-amber-500;
  width: 0;
  left: 50%;
  transition: width 0.3s, left 0.3s;
}

.h-link.nuxt-link-active:after,
.h-link:hover:after {
  width: calc(100% + 0.2em);
  left: -0.1em;
}
</style>

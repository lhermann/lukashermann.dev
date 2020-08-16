<template>
  <header class="wrapper flex items-center py-4">
    <nuxt-link to="/">
      <TmLogo />
    </nuxt-link>
    <div class="flex-grow"></div>
    <nuxt-link to="/" class="link" exact>Bio</nuxt-link>
    <!-- <nuxt-link to="/work" class="link">Work</nuxt-link> -->
    <nuxt-link to="/writing" class="link">Writing</nuxt-link>
  </header>
</template>

<script>
import TmLogo from '~/components/TmLogo'

export default {
  components: { TmLogo },
}
</script>

<style scoped>
.link {
  @apply relative text-lg font-semibold px-1 mx-2;
}

.link:after {
  content: '';
  @apply block absolute border-b-2 border-orange-500;
  width: 0;
  left: 50%;
  transition: width 0.3s, left 0.3s;
}

.link.nuxt-link-active:after,
.link:hover:after {
  width: calc(100% + 0.2em);
  left: -0.1em;
}
</style>

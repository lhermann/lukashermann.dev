<template>
  <div class="pb-16">
    <site-header class="mb-16" />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header'

export default {
  components: { SiteHeader }
}
</script>

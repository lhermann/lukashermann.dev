<template>
  <div>
    <site-header class="mb-16" />
    <nuxt />
    <hr class="border-t border-gray-300 mt-24 mb-0" />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header'
import SiteFooter from '~/components/Footer'

export default {
  components: { SiteHeader, SiteFooter },
}
</script>

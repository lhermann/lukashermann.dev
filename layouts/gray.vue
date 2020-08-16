<template>
  <div>
    <site-header />
    <hr class="border-t border-gray-400 m-0" />
    <div class="bg-gray-100 pb-24">
      <nuxt />
    </div>
    <hr class="border-t border-gray-400 m-0" />
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

<template>
  <div>
    <site-header />
    <!-- <hr class="border-t border-amber-300 m-0" /> -->
    <div class="bg-gradient-to-br from-violet-500 to-indigo-600 pb-24">
      <nuxt />
    </div>
    <!-- <hr class="border-t border-amber-300 m-0" /> -->
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

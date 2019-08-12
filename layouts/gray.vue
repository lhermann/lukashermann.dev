<template>
  <div>
    <site-header />
    <hr class="border-t border-gray-300 m-0" />
    <div class="bg-gray-200 py-16">
      <nuxt />
    </div>
    <hr class="border-t border-gray-300 m-0" />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header'
import SiteFooter from '~/components/Footer'

export default {
  components: { SiteHeader, SiteFooter }
}
</script>

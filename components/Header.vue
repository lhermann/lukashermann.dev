<template>
  <header class="wrapper flex py-4">
    <nuxt-link to="/">
      <logo />
    </nuxt-link>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: { Logo }
}
</script>

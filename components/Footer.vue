<template functional>
  <footer class="wrapper py-6 text-gray-700">
    <p class="text-center">
      <strong>&copy; Lukas Hermann</strong>
      &middot; tentmaker.dev OÜ &middot; Sepapaja 6 &middot; Tallinn 15551
      &middot; Estonia &middot; VAT ID: EE102199259
    </p>
    <p class="text-center mt-2">
      Powered by <a href="https://nuxtjs.org">Nuxt</a>, <a href="https://vuejs.org">Vue.js</a>, <a href="https://tailwindcss.com">Tailwindcss</a> and <a href="https://www.netlify.com">Netlify</a>
    </p>
  </footer>
</template>

<style scoped>
a {
  border-bottom: 1px dotted currentcolor;
}
a:hover {
  @apply border-solid border-orange-500;
}
</style>

<template functional>
  <footer class="wrapper py-6 text-gray-700">
    <p class="text-center">
      <strong>&copy; Lukas Hermann</strong>
      &middot; Brenzstrasse 6 &middot; 74405 Gaildorf
      &middot; Germany
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
  @apply border-solid border-amber-500;
}
</style>

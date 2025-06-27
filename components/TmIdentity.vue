<template>
  <div class="flex items-center" :class="[data.class, data.staticClass]">
    <img
      class="h-8 w-8 rounded-full mr-3"
      src="/img/lukas-thumbnail-150.jpg"
      alt="Portrait of me, Lukas Hermann"
      srcset="
        /img/lukas-thumbnail-600.jpg 600w,
        /img/lukas-thumbnail-300.jpg 300w
      "
    />
    <a href="/">Lukas Hermann</a>
  </div>
</template>

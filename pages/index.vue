<template>
  <div class="wrapper">
    <section class="flex">
      <div class="md:mr-12 md:w-2/3">
        <h1 class="text-5xl leading-tight font-semibold mb-6">
          Hi, I'm Lukas Hermann
        </h1>
        <p class="text-xl">
          I'm a <strong>Front-End Developer</strong> who loves working with
          <strong>Vue.js</strong> and <strong>User Interface Design</strong>.
        </p>
        <p></p>
      </div>
      <div class="md:w-1/3 flex-shrink-0">
        <img
          class="rounded-lg shadow-lg"
          src="/img/lukas-portrait-300.jpg"
          alt="Portrait of me, Lukas Hermann"
          srcset="
            /img/lukas-portrait-1200.jpg 1200w,
            /img/lukas-portrait-600.jpg   600w,
            /img/lukas-portrait-300.jpg   300w
          "
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

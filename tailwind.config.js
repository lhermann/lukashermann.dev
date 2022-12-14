// tailwind.config.js
const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  mode: 'jit',
  important: true,
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.stone,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
}

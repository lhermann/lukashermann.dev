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
    './layouts/**/*.vue',
    './components/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
  ],
  purge: [
    './layouts/**/*.vue',
    './components/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}

// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      // blue: colors.blue,
      // orange: colors.amber,
      // yellow: colors.yellow,
      // lime: colors.lime,
      // purple: colors.violet,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {},
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

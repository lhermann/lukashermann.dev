// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  important: true,
  theme: {
    extend: {},
  },
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

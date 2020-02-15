module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    curly: ['warn', 'multi-line'],
  },
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'no-console': 'warn',
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    curly: ['warn', 'multi-line'],
    camelcase: 0,
  },
  ignorePatterns: [
    '**/*.md',
  ],
}

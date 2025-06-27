import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  // Base JavaScript recommended rules
  pluginJs.configs.recommended,
  
  // Vue recommended configuration
  ...pluginVue.configs['flat/recommended'],

  // Main configuration
  {
    name: 'nuxt/main',
    files: ['**/*.{js,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Vue-specific rules
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      
      // JavaScript rules
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'comma-dangle': ['warn', 'always-multiline'],
      'space-before-function-paren': 'off',
      'arrow-parens': 'off',
      'curly': ['warn', 'multi-line'],
      'camelcase': 'off',
    },
  },

  // Global ignore patterns
  {
    name: 'nuxt/ignore',
    ignores: [
      '**/*.md',
      'node_modules/**',
      'dist/**',
      '.nuxt/**',
      '.output/**',
    ],
  },
]

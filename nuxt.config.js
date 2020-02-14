import path from 'path'
import glob from 'glob'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'tentmaker.dev – Front-End Developer & UI Designer',
    // all titles will be injected into this template
    titleTemplate: '%s | tentmaker.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileColor', content: '#e88823' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e88823' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
  ],
  /*
   * Generate Dynamic Routes
   */
  generate: {
    routes: getDynamicPaths('content/'),
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
}

function getDynamicPaths(contentDir) {
  return glob
    .sync(`${contentDir}**/*.md`)
    .map(file => file.replace(contentDir, '').replace('.md', ''))
}

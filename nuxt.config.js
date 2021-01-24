import path from 'path'
import glob from 'glob'
import Mode from 'frontmatter-markdown-loader/mode'
import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItEmoji from 'markdown-it-emoji'
import markdownItHljs from './plugins/markdownItHljs'
import uslug from 'uslug'
const CONTENT_DIR = 'content/'

require('dotenv').config()

export default {
  env: {
    host: process.env.VUE_APP_HOST || 'http://localhost:3000',
  },
  router: {
    trailingSlash: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Lukas Hermann – Front-End Developer & UI Designer',
    // all titles will be injected into this template
    // titleTemplate: '%s | Lukas Hermann',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileColor', content: '#E29449' },
      { name: 'theme-color', content: '#E29449' },
      { name: 'theme-color', content: '#E29449' },
      { name: 'twitter:site', content: '@_lhermann' },
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
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#E29449' },
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
  css: [
    '~/assets/css/tailwind.css',
    'highlight.js/styles/gruvbox-dark.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/email-obfuscate.js',
    { src: '@/plugins/gif-pause.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/sitemap',
  ],
  /*
   * Generate Dynamic Routes
   */
  generate: {
    routes: getDynamicRoutes(),
    fallback: '404.html',
  },
  sitemap: {
    hostname: process.env.VUE_APP_HOST || 'http://localhost:3000',
    trailingSlash: true,
  },
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    },
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
        options: {
          mode: [Mode.HTML, Mode.META],
          markdownIt: markdownIt({
            html: true,
            typographer: true,
            linkify: true,
            highlight: markdownItHljs,
          })
            .use(markdownItAnchor, {
              permalink: true,
              permalinkBefore: true,
              slugify: s => uslug(s),
            })
            .use(markdownItAttrs)
            .use(markdownItEmoji),
        },
      })
    },
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
      env: {
        test: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  },
}

function getDynamicRoutes () {
  // get routes
  const work = pathToRoute(CONTENT_DIR, 'work/*.md')
  const writing = pathToRoute(CONTENT_DIR, 'writing/*.md')

  // return list
  return [...work, ...writing]
}

function pathToRoute (base, globStr) {
  return glob
    .sync(base + globStr)
    .map(file => file.replace(base, '').replace('.md', '/'))
}

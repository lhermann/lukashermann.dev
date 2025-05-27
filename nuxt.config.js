import path from 'path'
import glob from 'glob'
import Mode from 'frontmatter-markdown-loader/mode'
import uslug from 'uslug'
import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItEmoji from 'markdown-it-emoji'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItImaginations from 'markdown-it-imagination'
import markdownItLinkAttributes from 'markdown-it-link-attributes'
import markdownItHljs from './plugins/markdown-it-hljs'
const CONTENT_DIR = 'content/'

require('dotenv').config()

const metaDescription = 'I bootstrap a profitable business and tweet about it. Building great products is something I love doing.'
const metaImage = 'https://lukashermann.dev/lukashermann-meta-img.jpg'

export default {
  env: {
    host: process.env.NUXT_ENV_HOST || 'https://lukashermann.dev',
  },
  router: {
    trailingSlash: true,
  },
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Lukas Hermann – Bootstraping a profitable business',
    // all titles will be injected into this template
    // titleTemplate: '%s | Lukas Hermann',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaDescription },
      { name: 'msapplication-TileColor', content: '#E29449' },
      { name: 'theme-color', content: '#E29449' },
      { name: 'theme-color', content: '#E29449' },
      { name: 'twitter:site', content: '@_lhermann' },
      { hid: 'twitter:image', name: 'twitter:image', content: metaImage },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Hi, I\'m Lukas' },
      { hid: 'twitter:description', name: 'twitter:description', content: metaDescription },
      { hid: 'og:title', property: 'og:title', content: 'Hi, I\'m Lukas' },
      { hid: 'og:description', property: 'og:description', content: metaDescription },
      { hid: 'og:image', property: 'og:image', content: metaImage },
      { hid: 'og:url', property: 'og:url', content: 'https://lukashermann.dev' },
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
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap' },
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
    '@/assets/css/tailwind.css',
    'highlight.js/styles/base16/gruvbox-dark-hard.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/email-obfuscate.js',
    { src: '@/plugins/gif-pause.js', mode: 'client' },
  ],

  /**
   * Modules for dev and build
   * https://go.nuxtjs.dev/config-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/sitemap',
  ],

  /**
   * Modules
   * https://go.nuxtjs.dev/config-modules
   */
  modules: [
  ],

  /*
   * Generate Dynamic Routes
   */
  generate: {
    routes: getDynamicRoutes(),
    fallback: '404.html',
  },
  sitemap: {
    hostname: process.env.NUXT_ENV_HOST || 'https://lukashermann.dev',
    trailingSlash: true,
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    loaders: {
      vue: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
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
              permalink: markdownItAnchor.permalink.ariaHidden({
                placement: 'before',
              }),
              slugify: s => uslug(s),
            })
            .use(markdownItAttrs)
            .use(markdownItLinkAttributes, {
              attrs: { rel: 'noopener' },
            })
            .use(markdownItEmoji)
            .use(markdownItFootnote)
            .use(markdownItImaginations),
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

  // tailwindcss: {
  //   viewer: false,
  // },
}

function getDynamicRoutes () {
  // get routes
  // const work = pathToRoute(CONTENT_DIR, 'work/*.md')
  const work = []
  const writing = pathToRoute(CONTENT_DIR, 'writing/*.md')

  // return list
  return [...work, ...writing]
}

function pathToRoute (base, globStr) {
  return glob
    .sync(base + globStr)
    .map(file => file.replace(base, '').replace('.md', '/'))
}

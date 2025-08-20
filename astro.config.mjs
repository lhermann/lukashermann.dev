// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkCaptions from 'remark-captions'

// https://astro.build/config
export default defineConfig({
  site: 'https://lukashermann.dev',

  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    remarkPlugins: [
      remarkCaptions,
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }],
      rehypeSlug, // Required for rehypeAutolinkHeadings
      [rehypeAutolinkHeadings, {
        properties: {
          className: ['header-anchor'],
          ariaLabel: 'Link to this section',
          ariaHidden: true,
          tabIndex: -1,
        },
        content: {
          type: 'text',
          value: '#',
        }
      }],
    ],

    // Markdown syntax highlighting
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
});

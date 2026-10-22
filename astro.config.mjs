// @ts-check
import { defineConfig } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import tailwindcss from '@tailwindcss/vite'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkCaptions from 'remark-captions'

// https://astro.build/config
export default defineConfig({
  site: 'https://lukashermann.dev',

  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    processor: unified({
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
    }),

    // Markdown syntax highlighting
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
});

import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET (context) {
  function formatUrl (path = '/') {
    const url = new URL(path, context.site)
    return url.href
  }

  return rss({
    // RSS feed metadata
    title: 'Lukas Hermann',
    description: 'Latest articles by Lukas Hermann',
    site: context.site, // Use the main site URL, not /writing

    // Generate RSS items from all markdown/mdx files in pages/writing/
    items: await pagesGlobToRssItems(
      import.meta.glob('./writing/**/*.{md,mdx}')
    ),

    // Enhanced custom XML data based on A Smart Bear's feed
    customData: `
      <language>en-us</language>
      <copyright>© ${new Date().getFullYear()} Lukas Hermann</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro -- astro.build</generator>
      <atom:link href="${formatUrl('/rss.xml')}" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom"/>
      <image>
        <url>${formatUrl('/lukashermann-meta-2.jpg')}</url>
        <title>Lukas Hermann</title>
        <link>${context.site}</link>
      </image>
    `,

    // Add XML namespaces for enhanced functionality
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      media: 'http://search.yahoo.com/mrss/',
      content: 'http://purl.org/rss/1.0/modules/content/',
    },

    // Optional: Remove trailing slashes if your site config has trailingSlash: "never"
    // trailingSlash: false,

    // Optional: Add a stylesheet for better browser viewing
    // stylesheet: '/rss/styles.xsl',
  })
}

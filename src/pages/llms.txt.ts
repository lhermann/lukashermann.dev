import type { APIRoute } from 'astro'

// /llms.txt — plain-text site index following the llms.txt convention
// (https://llmstxt.org/) so LLM crawlers and agents can discover content,
// especially the full talk transcripts available as raw markdown.

const articles = import.meta.glob('./writing/*.md', { eager: true }) as Record<string, any>
const talks = import.meta.glob('./talks/*.md', { eager: true }) as Record<string, any>
const transcripts = import.meta.glob('../transcripts/*.md', { eager: true }) as Record<string, any>

const slugOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '')
const byDateDesc = (key: string) => (a: any, b: any) =>
  new Date(b.mod.frontmatter[key]).getTime() - new Date(a.mod.frontmatter[key]).getTime()

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href

  const articleEntries = Object.entries(articles)
    .map(([path, mod]) => ({ slug: slugOf(path), mod }))
    .sort(byDateDesc('created'))
    .map(({ slug, mod }) => {
      const { title, description } = mod.frontmatter
      return `- [${title}](${url(`/writing/${slug}/`)})${description ? `: ${description}` : ''}`
    })

  const transcriptSlugs = new Set(Object.keys(transcripts).map(slugOf))

  const talkEntries = Object.entries(talks)
    .map(([path, mod]) => ({ slug: slugOf(path), mod }))
    .sort(byDateDesc('date'))
    .map(({ slug, mod }) => {
      const { title, host, date, language } = mod.frontmatter
      const lines = [`- [${title}](${url(`/talks/${slug}/`)}): ${host}, ${date}${language === 'de' ? ', in German' : ''}`]
      if (transcriptSlugs.has(slug)) {
        lines.push(`  - Full transcript: [HTML](${url(`/talks/${slug}/transcript/`)}) | [Markdown](${url(`/talks/${slug}/transcript.md`)})`)
      }
      return lines.join('\n')
    })

  const body = `# Lukas Hermann

> Personal website of Lukas Hermann — software developer and bootstrapped SaaS founder of [stagetimer.io](https://stagetimer.io/). Contains articles on bootstrapping, SaaS, and web development, plus podcast interviews and talks with full transcripts.

Full transcripts of all talks and interviews are available both as HTML pages and as raw Markdown (append \`transcript.md\` to a talk URL). They are archival copies that remain available even if the original episode goes offline.

## Writing

${articleEntries.join('\n')}

## Talks & Interviews

${talkEntries.join('\n')}

## Optional

- [RSS feed](${url('/rss.xml')}): latest articles
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

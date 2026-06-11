import type { APIRoute } from 'astro'

// Raw markdown endpoint: /talks/<slug>/transcript.md
// Serves the transcript source file verbatim (including frontmatter) so
// LLMs and scripts can fetch it without parsing HTML.
const transcripts = import.meta.glob('../../../transcripts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export function getStaticPaths() {
  return Object.entries(transcripts).map(([path, raw]) => ({
    params: { slug: path.split('/').pop()!.replace(/\.md$/, '') },
    props: { raw },
  }))
}

export const GET: APIRoute = ({ props }) => {
  return new Response(props.raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

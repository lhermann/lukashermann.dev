export interface Article {
  frontmatter: {
      title: string
    created: string
    updated?: string
    description?: string
    tags?: string[]
    cover_image?: string
    lang?: string
    canonical_plattform?: string
  }
  url: string
  file: string
  rawContent: () => string
  compiledContent: () => string
}

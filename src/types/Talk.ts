export interface Talk {
  frontmatter: {
    title: string
    date: string
    image: string
    link: string
    host: string
    tags?: string[]
    language: 'en' | 'de'
  }
  url: string
  file: string
  rawContent: () => string
  compiledContent: () => string
}

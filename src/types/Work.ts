export interface Work {
  frontmatter: {
    title: string
    tags: string
    thumbnail: string
    thumbnail2x: string
    visit_link?: string
    read_more_link?: string
    active: boolean
  }
  url: string
  file: string
  rawContent: () => string
  compiledContent: () => string
}

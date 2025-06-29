export interface ArticleFrontmatter {
  title: string
  created: string
  updated?: string
  description?: string
  tags?: string[]
  cover_image?: string
  lang?: string
}

export interface Article {
  frontmatter: ArticleFrontmatter
  url: string
  file: string
}

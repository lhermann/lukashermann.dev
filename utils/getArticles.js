import uslug from 'uslug'
import compareDesc from 'date-fns/compareDesc'
import parseISO from 'date-fns/parseISO'

export default function getArticles ({ drafts = false } = {}) {
  let articles = []
  if (drafts) articles = require.context('../content/drafts/', true, /\.md$/)
  else articles = require.context('../content/writing/', true, /\.md$/)

  return articles.keys()
    .map(file => {
      const path = drafts ? 'drafts' : 'writing'
      const article = require(`../content/${path}/${file.replace('./', '')}`)
      article.slug = uslug(article.attributes.title)
      article.tags = article.attributes.tags.split(', ')
      article.url = _getUrl(article, drafts)
      return article
    })
    .sort((a, b) => compareDesc(
      parseISO(a.attributes.created),
      parseISO(b.attributes.created),
    ))
}

function _getUrl (article, draft = false) {
  // const root = draft ? 'drafts' : 'writing'
  const filename = article.meta.resourcePath.split('/').pop().replace('.md', draft ? '-draft' : '')
  return `/writing/${filename}/`
}

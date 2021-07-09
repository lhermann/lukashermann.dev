import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import _last from 'lodash/last'

hljs.addPlugin({
  'after:highlight': (result) => {
    const lines = result.value.split('\n')
    if (!_last(lines)) lines.pop() // if last line is empty
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('<span class="hljs-line-number"')) continue
      lines[i] = `<span class="hljs-line-number" data-line-number="${i + 1}"></span>` + lines[i]
    }
    result.value = lines.join('\n')
  },
})

export default (str, language) => {
  const code =
    language && hljs.getLanguage(language)
      ? hljs.highlight(str, { language }).value
      : markdownIt().utils.escapeHtml(str)
  return `<pre class="hljs"><code>${code}</code></pre>`
}

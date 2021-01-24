import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import _padStart from 'lodash/padStart'
import _last from 'lodash/last'

hljs.addPlugin({
  'after:highlight': (result) => {
    const lines = result.value.split('\n')
    if (!_last(lines)) lines.pop() // if last line is empty
    const genNumber = (i) => {
      const length = String(lines.length).length
      return _padStart(String(i), length)
    }
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('<span class="hljs-line-number">')) continue
      lines[i] = `<span class="hljs-line-number">${genNumber(i + 1)}</span>` + lines[i]
    }
    result.value = lines.join('\n')
  },
})

export default (str, lang) => {
  const code =
    lang && hljs.getLanguage(lang)
      ? hljs.highlight(lang, str).value
      : markdownIt().utils.escapeHtml(str)
  return `<pre class="hljs"><code>${code}</code></pre>`
}

export function formatDate (date: Date | string, lang = 'en') {
  if (!date) return date
  return new Date(date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

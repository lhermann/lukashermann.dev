export function formatDate (date: Date | string) {
  if (!date) return date
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

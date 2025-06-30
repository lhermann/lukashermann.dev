export function generateDescription (rawContent: string): string {
  if (!rawContent) return ''

  // Remove markdown syntax and HTML tags
  const cleanContent = rawContent
    .replace(/#{1,6}\s+/g, '') // Remove markdown headers
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1') // Remove bold/italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()

  if (cleanContent.length <= 158) {
    return cleanContent
  }

  // Find the best cut point between 120-158 characters
  let cutPoint = 158
  for (let i = 158; i >= 120; i--) {
    if (cleanContent[i] === ' ') {
      cutPoint = i
      break
    }
  }

  // If no good cut point found, just cut at 155 to leave room for ellipsis
  if (cutPoint === 158) {
    cutPoint = 155
  }

  return cleanContent.substring(0, cutPoint).trim() + '...'
}

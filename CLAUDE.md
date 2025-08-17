# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start development server at localhost:4321
npm run build      # Build for production to ./dist/
npm run preview    # Preview production build locally

# Package management
npm install        # Install dependencies
```

## Architecture

This is an Astro-based personal website and blog with the following key architectural decisions:

### Tech Stack
- **Astro 5.10** - Static site generator with zero-JS by default
- **TypeScript** - Strict mode enabled for type safety
- **Tailwind CSS 4.x** - Utility-first styling via Vite plugin
- **Markdown** - Content management with frontmatter metadata

### Content Architecture
The site uses file-based routing with Markdown content:
- `/src/pages/writing/` - Blog articles with frontmatter (title, created, description, tags, cover_image)
- `/src/pages/talks/` - Conference talks and presentations
- `/src/pages/work/` - Portfolio items and company showcases
- Content is dynamically loaded using `import.meta.glob()` and sorted by date

### Component Structure
- **Astro components** (.astro) are the primary building blocks
- Layouts follow hierarchy: BaseHead > Layout > specific page layouts
- Reusable components in `/src/components/` include email obfuscation, article lists, and timeline
- TypeScript interfaces in `/src/types/` define content structure

### Styling Approach
- Tailwind CSS utilities for most styling
- Custom `.markdown` class for article content styling
- Component-scoped styles where needed
- Mobile-first responsive design

### SEO & Performance
- Comprehensive meta tags (OpenGraph, Twitter Cards, Schema.org) in BaseHead component
- RSS feed generated at `/rss.xml` from writing content
- Image optimization with multiple sizes via srcset
- External links handled with security attributes (noopener, noreferrer)

### Deployment
- Static site deployed to Netlify
- Custom redirects in `/public/_redirects` for legacy domains and clean URLs
- Security redirects for common attack paths

## Key Patterns

1. **Adding new content**: Create Markdown files in appropriate `/src/pages/` subdirectory with required frontmatter
2. **Component imports**: Use Astro's component syntax with proper TypeScript types
3. **Global styles**: Edit `/src/styles/global.css` for site-wide changes
4. **Type safety**: Define interfaces in `/src/types/` for any new content types
5. **RSS updates**: Automatic inclusion via glob pattern in `/src/pages/rss.xml.js`
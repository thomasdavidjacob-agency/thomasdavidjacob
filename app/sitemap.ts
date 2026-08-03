import type { MetadataRoute } from 'next'
import { posts } from '../lib/blog'

const BASE_URL = 'https://thomasdavidjacob.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static top-level pages.
  const staticPaths: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/ai-systems', priority: 0.8 },
    { path: '/our-seo-process', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/faq', priority: 0.6 },
    { path: '/blog', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }))

  // One entry per blog post, generated from the posts array so new posts are
  // included automatically. lastModified uses each post's publish date.
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const parsed = new Date(post.date)
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: Number.isNaN(parsed.getTime()) ? now : parsed,
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  })

  return [...staticEntries, ...postEntries]
}

import { getPublishedPosts } from '@/lib/notion'

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const posts = await getPublishedPosts()

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}

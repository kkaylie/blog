import { getPublishedPosts } from '@/lib/notion'

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-domain.com' // TODO

  const posts = await getPublishedPosts()

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updatedDate),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}

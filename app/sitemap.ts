import { getClient } from '@/lib/ApolloClient'
import {
  GetPostsListDocument,
  type GetPostsListQuery,
} from '@/lib/graphql/generated/graphql'

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const { data } = await getClient().query<GetPostsListQuery>({
    query: GetPostsListDocument,
  })

  const posts = data?.posts || []

  const postUrls = posts.map((post) => {
    const lastModified = post.published_date

    return {
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: lastModified ? new Date(+lastModified) : new Date(),
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}

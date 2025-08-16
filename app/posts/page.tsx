import { query } from '@/lib/ApolloClient'
import { GetPostsListDocument } from '@/lib/graphql/generated/graphql'
import type { GetPostsListQuery } from '@/lib/graphql/generated/graphql'
import { formatPostDataForList } from '@/lib/post'

import { ArticleListItem } from '../components/ArticleListItem'

export const revalidate = 60

export default async function PostsList() {
  const { data } = await query<GetPostsListQuery>({
    query: GetPostsListDocument,
  })

  return data.posts?.map((post) => {
    const postData = formatPostDataForList(post)
    return <ArticleListItem key={post.slug} post={postData} />
  })
}

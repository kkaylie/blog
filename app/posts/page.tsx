import { getPublishedPosts } from '@/lib/notion'

import { ArticleListItem } from '../components/ArticleListItem'

export const revalidate = 60

export default async function PostsList() {
  const posts = await getPublishedPosts()
  return posts.map((post) => <ArticleListItem key={post.slug} post={post} />)
}

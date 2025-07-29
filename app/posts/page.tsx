import { getPublishedPosts } from '@/lib/notion'

import { ArticleListItem } from '../components/ArticleListItem'

export default async function PostsList() {
  const posts = await getPublishedPosts()
  return posts.map((post) => <ArticleListItem key={post.slug} post={post} />)
}

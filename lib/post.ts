import type { BlogPost, PostContent } from '@/types/post'

import type {
  PostFragmentFragment,
  PostContentFragmentFragment,
} from './graphql/generated/graphql'

export function formatPostDataForList(
  postData: PostFragmentFragment,
): BlogPost {
  return {
    id: postData.id,
    slug: postData.slug,
    publishedDate: postData.published_date,
    title: postData.title,
    summary: postData.summary,
    tags: postData.tags,
    isPinned: postData.is_pinned,
  }
}

export function formatPostDataForDetail(
  postData: PostContentFragmentFragment,
): PostContent {
  return {
    id: postData.id,
    slug: postData.slug,
    publishedDate: postData.published_date,
    title: postData.title,
    summary: postData.summary,
    tags: postData.tags,
    isPinned: postData.is_pinned,
    markdown: postData.markdown,
  }
}

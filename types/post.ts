import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export type PagePropertyValue = PageObjectResponse['properties'][string]

export interface BlogPost {
  id: string
  title: string
  slug: string
  publishedDate: string
  summary: string
  tags: string[]
  isPinned: boolean
}

export interface PostContent extends BlogPost {
  markdown: string
}

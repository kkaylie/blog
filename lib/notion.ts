import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

import { pageToPost } from './notionHelpers'

import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})
const n2m = new NotionToMarkdown({ notionClient: notion })

const databaseId = process.env.NOTION_DATABASE_ID!

/**
 * Fetches a list of all published posts for the homepage.
 * @return An array of BlogPost objects representing the published posts.
 */
export const getPublishedPosts = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'PublishedDate',
        direction: 'descending',
      },
    ],
  })

  const posts = response.results
    .filter((page): page is PageObjectResponse => page.object === 'page')
    .map(pageToPost)
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) {
        return -1
      }
      if (!a.isPinned && b.isPinned) {
        return 1
      }
      return 0
    })
  return posts
}

/**
 * Fetches a single post's content based on its slug.
 * @param slug The slug of the post to fetch.
 * @returns An object containing the post's metadata and its content blocks.
 */
export const getPostBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  })

  if (response.results.length === 0) {
    console.error(`No post found with slug: ${slug}`)
    return null
  }
  const page = response.results[0] as PageObjectResponse

  if (!page) {
    console.error(`No page found for slug: ${slug}`)
    return
  }
  const post = pageToPost(page)

  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const mdString = n2m.toMarkdownString(mdBlocks).parent

  return {
    markdown: mdString,
    description: post.summary,
    ...post,
  }
}

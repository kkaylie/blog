import { Client } from '@notionhq/client'

import { getPropertyValue, pageToPost } from './notionHelpers'

import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

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
    return null
  }
  const page = response.results[0] as PageObjectResponse

  const blockResponse = await notion.blocks.children.list({
    block_id: page.id,
  })

  return {
    title: getPropertyValue(page.properties.Title),
    publishedDate: getPropertyValue(page.properties.PublishedDate),
    content: blockResponse.results,
  }
}

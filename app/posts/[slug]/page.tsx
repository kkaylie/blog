import { getPostBySlug } from '@/lib/notion'
import type { BlockObjectResponse } from '@notionhq/client'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function PostContent({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  console.log('Post Content:', post)
  if (!post) {
    return notFound()
  }
  return (
    <div className="h-full w-full py-4 px-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.publishedDate}</p>
      <div className="mt-4">
        {post.content
          .filter((block): block is BlockObjectResponse => 'type' in block)
          .map((block) => (
            <div key={block.id}>
              {block.type === 'paragraph' && (
                <p>
                  {block.paragraph.rich_text
                    .map((text) => text.plain_text)
                    .join('')}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

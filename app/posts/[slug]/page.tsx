import React from 'react'

import { notFound } from 'next/navigation'

import ReactMarkdown from 'react-markdown'
import RehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

import { CodeBlock } from '@/app/components/CodeBlock'
import { getPostBySlug } from '@/lib/notion'

export default async function PostContent({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  console.log('Post Content:', post)
  if (!post) {
    return notFound()
  }
  const date = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return (
    <article className="prose-pre:pt-10 container mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-4xl leading-tight font-bold">{post.title}</h1>
        <p className="text-muted-foreground mt-2">Published on {date}</p>
      </header>

      <hr className="my-4" />

      <div className="prose prose-zinc dark:prose-invert prose-a:text-blue-600 prose-a:hover:text-blue-500 max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[RehypePrismPlus, { ignoreMissing: true }]]}
          components={{
            pre: CodeBlock,
            a: ({ node, ...props }) => <a {...props} className="break-all" />,
          }}
        >
          {post.markdown}
        </ReactMarkdown>
      </div>
    </article>
  )
}

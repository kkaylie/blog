import React from 'react'

import { notFound } from 'next/navigation'

import ReactMarkdown from 'react-markdown'
import RehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

import { CodeBlock } from '@/app/components/CodeBlock'
import { getPostBySlug } from '@/lib/notion'

import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const { title, description, publishedDate } = post || {}

  if (!title) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title,
    description,
    // social media metadata
    // openGraph: {
    //   title,
    //   description,
    //   type: 'article',
    //   publishedTime: publishedDate,
    //   url: `https://your-domain.com/posts/${slug}`,
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    // },
  }
}

export default async function PostContent({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const date = new Date(post.publishedDate as string).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  )
  return (
    <article className="prose-pre:pt-10 container mx-auto max-w-3xl px-4 py-4 md:py-6 lg:py-8">
      <header className="mb-2 md:mb-4">
        <h1 className="text-2xl leading-tight font-bold md:text-4xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Published on {date}
        </p>
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

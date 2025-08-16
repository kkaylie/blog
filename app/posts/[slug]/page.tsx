import React from 'react'

import { notFound } from 'next/navigation'

import ReactMarkdown from 'react-markdown'
import RehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

import { CodeBlock } from '@/app/components/CodeBlock'
import { CodeSpan } from '@/app/components/CodeSpan'
import { query } from '@/lib/ApolloClient'
import {
  GetPostBySlugDocument,
  GetPostBySlugQuery,
} from '@/lib/graphql/generated/graphql'
import { formatPostDataForDetail } from '@/lib/post'

import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: { slug },
  })
  if (!data.post) {
    return { title: 'Post Not Found' }
  }
  const post = formatPostDataForDetail(data.post)
  const { title, summary: description, publishedDate } = post || {}

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

  const { data } = await query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: { slug },
  })
  if (!data.post) {
    return notFound()
  }
  const post = formatPostDataForDetail(data.post)

  const date = new Date(+post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
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
            code: CodeSpan,
            a: ({ node, ...props }) => <a {...props} className="break-all" />,
          }}
        >
          {post.markdown}
        </ReactMarkdown>
      </div>
    </article>
  )
}

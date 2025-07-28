import React from 'react'

// import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { getPublishedPosts } from '@/lib/notion'

import { PostCard } from '../components/PostCard'

export default async function PostsList() {
  const posts = await getPublishedPosts()
  return (
    <div className="h-full w-full px-4 py-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.slug}`}>
          <PostCard
            className="mb-4"
            key={post.id}
            title={post.title}
            content={post.summary}
            description={`Published on ${post.publishedDate}`}
            // action={<Button variant="link">Read More</Button>}
            // footer={`Posted on ${new Date().toLocaleDateString()}`}
          />
        </Link>
      ))}
    </div>
  )
}

import React from 'react'
// import { Button } from '@/components/ui/button'
import { PostCard } from '../components/PostCard'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/notion'

export default async function PostsList() {
  const posts = await getPublishedPosts()
  return (
    <div className="h-full w-full py-4 px-4">
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

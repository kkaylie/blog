import React from 'react'
// import { Button } from '@/components/ui/button'
import { PostCard } from '../components/PostCard'
import Link from 'next/link'

export default function PostsList() {
  const list = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' }
    // Add more posts as needed
  ]
  return (
    <div className="h-full w-full py-4 px-4">
      {list.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <PostCard
            className="mb-4"
            key={post.id}
            title={post.title}
            content={post.content}
            description={`Description for ${post.title}`}
            // action={<Button variant="link">Read More</Button>}
            // footer={`Posted on ${new Date().toLocaleDateString()}`}
          />
        </Link>
      ))}
    </div>
  )
}

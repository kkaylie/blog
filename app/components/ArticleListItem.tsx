import Link from 'next/link'

import { Pin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

interface ArticleListItemProps {
  post: {
    slug: string
    publishedDate: string
    title: string
    summary: string
    tags?: string[]
    isPinned?: boolean
  }
}

export function ArticleListItem({ post }: ArticleListItemProps) {
  return (
    <article className="relative border-b border-gray-200 p-4 dark:border-gray-700">
      {post.isPinned && (
        <div className="absolute top-4 right-4 text-[var(--primary)]">
          <Pin size={16} />
        </div>
      )}
      <Link href={`/posts/${post.slug}`} className="group block">
        <p className="text-xs tracking-wider text-[var(--muted-foreground)] uppercase">
          {new Date(post.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h2 className="text-1xl mt-2 font-bold text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--primary)] md:text-2xl">
          {post.title}
        </h2>
        <p className="mt-2 text-base text-[var(--muted-foreground)]">
          {post.summary}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
}

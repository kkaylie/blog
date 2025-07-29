import Link from 'next/link'

interface ArticleListItemProps {
  post: {
    slug: string
    publishedDate: string
    title: string
    summary: string
  }
}

export function ArticleListItem({ post }: ArticleListItemProps) {
  return (
    <article className="border-b border-gray-200 p-4 dark:border-gray-700">
      <Link href={`/posts/${post.slug}`} className="group block">
        <p className="text-xs tracking-wider text-[var(--muted-foreground)] uppercase">
          {new Date(post.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--primary)]">
          {post.title}
        </h2>
        <p className="mt-2 text-base text-[var(--muted-foreground)]">
          {post.summary}
        </p>
      </Link>
    </article>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Posts - Kaylee's Blog",
  description: 'All posts related to the blog',
}

export default function PageContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

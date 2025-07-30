import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about the blog and me',
}

export default function PageContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

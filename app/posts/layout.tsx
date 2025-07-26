import { Metadata } from 'next'
import React from 'react'
import styles from './layout.module.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'All posts related to the blog'
}

export default function PageContentLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={cn('w-full min-h-screen', styles['page-container'])}>
      <section
        className={cn(
          'w-7/12 mx-auto shadow-md min-h-screen',
          styles['page-content']
        )}
      >
        {children}
      </section>
    </div>
  )
}

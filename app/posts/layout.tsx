import React from 'react'

import { Metadata } from 'next'

import { cn } from '@/lib/utils'

import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'All posts related to the blog',
}

export default function PageContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={cn('min-h-screen w-full', styles['page-container'])}>
      <section
        className={cn(
          'mx-auto min-h-screen w-7/12 shadow-md',
          styles['page-content'],
        )}
      >
        {children}
      </section>
    </div>
  )
}

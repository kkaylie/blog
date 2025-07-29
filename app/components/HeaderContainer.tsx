'use client'

import { usePathname } from 'next/navigation'

import { ContentNav } from './ContentNav'
import { Hero } from './Hero'
import { SiteHeader } from './SiteBar'

export default function HeaderContainer() {
  const pathname = usePathname()
  const isDeepPath = pathname.split('/').filter(Boolean).length > 1
  return (
    <div className="w-full px-4 shadow-md">
      <div className="mx-auto lg:w-7/12">
        <SiteHeader />
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            isDeepPath ? 'max-h-0 opacity-0' : 'max-h-100 opacity-100'
          }`}
        >
          <Hero />
        </div>

        <ContentNav />
      </div>
    </div>
  )
}

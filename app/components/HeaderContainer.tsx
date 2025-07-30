'use client'

import { ContentNav } from './ContentNav'
import { Hero } from './Hero'
import { SiteHeader } from './SiteBar'

export default function HeaderContainer() {
  return (
    <div className="w-full bg-[url('/cute-duck-cover.jpeg')] bg-cover bg-center shadow-md">
      <div className="mx-auto bg-white/20 px-4 pt-4 backdrop-blur-sm lg:w-7/12">
        <SiteHeader />
        <Hero />

        <ContentNav />
      </div>
    </div>
  )
}

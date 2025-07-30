'use client'

import { usePathname } from 'next/navigation'

export function Hero() {
  const pathname = usePathname()
  const isDeepPath = pathname.split('/').filter(Boolean).length > 1
  return (
    <div
      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
        isDeepPath ? 'max-h-0 opacity-0' : 'max-h-100 opacity-100'
      }`}
    >
      <section className="animate-in fade-in slide-in-from-top-8 mx-auto max-w-2xl duration-500 sm:py-4 md:py-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] text-shadow-2xs text-shadow-white md:text-5xl">
          Rubber Duck Blog by KK.
        </h1>
        <p className="text-md mt-4 hidden text-[var(--muted-foreground)] text-shadow-2xs text-shadow-white sm:block md:text-lg">
          Hi, I&#39;m Kaylee (KK)! I&#39;m a front-end engineer who focused on
          engineering stable and efficient frontend systems. I write about code,
          debugging, and the craft of engineering in a way even ducks might
          understand.
        </p>
      </section>
    </div>
  )
}

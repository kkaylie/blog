import Image from 'next/image'
import Link from 'next/link'

// import { Rss, Send } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-2xl py-2 sm:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/my-avatar.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full border border-[var(--border)] shadow-sm"
          />
          <div>
            <p className="md:text-md text-sm font-semibold text-[var(--foreground)] text-shadow-2xs text-shadow-white">
              Kaylee L.
            </p>
            <p className="hidden text-sm text-[var(--muted-foreground)] text-shadow-2xs text-shadow-white sm:block">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Social Links */}
        {/* <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
            <Send size={18} />
          </a>
          <a href="#" aria-label="RSS" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
            <Rss size={18} />
          </a>
          <span className="text-sm text-[var(--muted-foreground)]">Last</span>
        </div> */}
      </div>
    </header>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { id: 'home', name: 'HOME', href: '/' },
  { id: 'blog', name: 'BLOG', href: '/posts' },
  { id: 'projects', name: 'PROJECTS', href: '/projects' },
  { id: 'about', name: 'ABOUT', href: '/about' },
]

export function ContentNav() {
  const pathname = usePathname()
  return (
    <nav className="pt-5 pb-4">
      <ul className="-mb-px flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === item.href
              : pathname.startsWith(item.href)

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`group relative py-3 transition-colors duration-300 hover:text-[var(--foreground)] ${
                  isActive ? 'text-[var(--foreground)]' : '' // 7. 如果是激活状态，则设置高亮文字颜色
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full transform bg-[var(--foreground)] transition-transform duration-300 ease-in-out ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

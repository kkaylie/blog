import React from 'react'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export default function NavigationBar() {
  return (
    <div
      className={cn(
        'sticky top-0 mx-auto w-full bg-white px-1 py-2 shadow-md',
        'bg-[var(--background)]', // 使用页面底色
        'text-[var(--foreground)]', // 使用默认文字颜色
        'border-[var(--border)]', // 使用系统定义的边框颜色
      )}
    >
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/posts">Posts</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

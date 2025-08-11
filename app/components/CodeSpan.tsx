import { HTMLAttributes } from 'react'

export function CodeSpan({
  children,
  ...props
}: { children?: React.ReactNode } & HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-md border bg-gray-100 px-1 py-0.5 text-sm text-red-400 before:content-none after:content-none"
      {...props}
    >
      {children}
    </code>
  )
}

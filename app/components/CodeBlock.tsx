'use client'

import { useState, useRef } from 'react'

import { Copy, Check } from 'lucide-react'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode
}

export const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null)
  const [isCopied, setIsCopied] = useState(false)

  // The `className` is passed down from rehype-prism-plus, e.g., "language-js"
  const lang = props.className?.replace('language-', '') || 'code'

  const handleCopy = async () => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector('code')
      if (codeElement) {
        await navigator.clipboard.writeText(codeElement.innerText)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    }
  }

  return (
    <div className="group relative">
      <div className="absolute top-0 right-0 flex w-full items-center justify-between gap-2 px-4 py-3 text-xs text-white/70">
        <span>{lang}</span>
        <button
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-1 rounded-md p-1 transition-colors hover:bg-white/20"
          aria-label="Copy code"
        >
          <span>Copy</span>
          {isCopied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  )
}

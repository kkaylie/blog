import HeaderContainer from './components/HeaderContainer'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: "%s | KK's Blog",
    default: "KK's Blog",
  },
  description:
    'A personal blog by Kaylee L. exploring frontend development, design, and technology.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <HeaderContainer />
        <main className="min-h-screen w-full">
          <div className="mx-auto h-full max-w-2xl lg:w-7/12">{children}</div>
        </main>
        <footer className="border-t border-[var(--border)] py-6 text-center text-sm text-[var(--muted-foreground)]">
          <p>
            &copy; {new Date().getFullYear()} Kaylee L.. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}

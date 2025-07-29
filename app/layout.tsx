import HeaderContainer from './components/HeaderContainer'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: "Kaylee's Blog",
  description: 'A personal blog by Kaylee L.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-[var(--background)] text-[var(--foreground)]`}>
        <HeaderContainer />
        <main className="min-h-screen w-full">
          <div className="mx-auto min-h-screen w-7/12 py-4">{children}</div>
        </main>
        <footer className="mt-12 border-t border-[var(--border)] py-6 text-center text-sm text-[var(--muted-foreground)]">
          <p>
            &copy; {new Date().getFullYear()} Kaylee L.. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}

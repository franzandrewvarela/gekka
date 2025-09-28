import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gekka Fashion Portfolio',
  description: 'A retro Mac-inspired fashion portfolio with interactive chess board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="retro-background">
        {children}
      </body>
    </html>
  )
}

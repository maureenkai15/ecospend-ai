import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoSpend AI — Smart Finance, Greener Planet',
  description: 'Track spending, reduce your carbon footprint, and get AI-powered financial coaching.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

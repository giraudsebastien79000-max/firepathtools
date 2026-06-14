import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'FirePath Tools - Free FIRE and Financial Independence Calculators',
    template: '%s | FirePath Tools',
  },
  description: 'Free calculators to plan your path to financial independence. FIRE number, compound interest, savings rate, budget planner, Coast FIRE and more. No signup required.',
  keywords: ['FIRE calculator', 'financial independence', 'early retirement', 'compound interest', 'savings rate', 'budget planner'],
  other: {
    'impact-site-verification': '5696e88d-d92b-43f5-811a-0343750eb985',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9852461988676680" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="mt-auto py-6 text-center text-sm text-gray-500 border-t border-gray-200">
          <p>© {new Date().getFullYear()} FirePath Tools. For informational purposes only. Not financial advice.</p>
          <p className="mt-2">
            <a href="/disclaimer" className="underline hover:text-gray-700">Disclaimer &amp; Affiliate Disclosure</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
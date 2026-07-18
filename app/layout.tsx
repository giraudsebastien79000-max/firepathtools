import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
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
    'p:domain_verify': '6f2cdaa406a2f426df20b0a6d08da9c3',
    'fo-verify': '5bff0ca3-d245-4b8e-bc4d-9acbfbd437ee',
  },
}

export const viewport: Viewport = {
  themeColor: '#030712',
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
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path
                  d="M12 2c1.5 3.5-1 5-1 7 0 1.1.9 2 2 2s2-.9 2-2c2 2 3 4.2 3 6.5 0 3.6-2.9 6.5-6.5 6.5S5 19.1 5 15.5C5 10.5 9.5 7.5 12 2z"
                  fill="#f97316"
                />
                <path
                  d="M12 12c.8 1.8-.5 2.6-.5 3.6 0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6c.9 1.1 1.3 2.1 1.3 3.1 0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3c0-2.5 1.8-4.5 2.6-6.7z"
                  fill="#fdba74"
                />
              </svg>
              <span className="font-bold text-white group-hover:text-orange-400 transition-colors">
                FirePath Tools
              </span>
            </Link>
            <nav className="flex items-center gap-5 text-sm">
              <Link href="/tools" className="text-gray-300 hover:text-orange-400 transition-colors">
                Calculators
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                Blog
              </Link>
              <Link
                href="/global-fire-map"
                className="hidden sm:inline text-gray-300 hover:text-orange-400 transition-colors"
              >
                FIRE Map
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-auto py-6 text-center text-sm text-gray-500 border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} FirePath Tools. For informational purposes only. Not financial advice.</p>
          <p className="mt-2">
            <a href="/disclaimer" className="underline hover:text-gray-300">Disclaimer &amp; Affiliate Disclosure</a>
          </p>
        </footer>
      </body>
    </html>
  )
}

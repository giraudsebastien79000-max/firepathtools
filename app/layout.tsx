import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

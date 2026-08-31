import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'That page does not exist. Find our free FIRE calculators, the global FIRE map, and the blog here.',
  robots: { index: false, follow: true },
}

const destinations = [
  {
    href: '/tools/fire-number',
    label: 'FIRE Number Calculator',
    blurb: 'How much you need to retire early.',
  },
  {
    href: '/tools/time-to-fire',
    label: 'Time to FIRE Calculator',
    blurb: 'How many years until you get there.',
  },
  {
    href: '/global-fire-map',
    label: 'Global FIRE Map',
    blurb: 'Where in the world your number is already enough.',
  },
  {
    href: '/tools/savings-rate',
    label: 'Savings Rate Calculator',
    blurb: 'The single number that moves your timeline most.',
  },
]

export default function NotFound() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-20">
      <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
        404
      </p>

      <h1 className="text-4xl font-bold text-white mb-4">
        That page does not exist
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed mb-10">
        The link may be out of date, or the address may have a typo in it. Nothing is
        broken on your end. Here is where most people are heading.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 mb-12">
        {destinations.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-orange-500 transition-colors"
          >
            <span className="block text-white font-semibold mb-1">{d.label}</span>
            <span className="block text-gray-400 text-sm">{d.blurb}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        <Link
          href="/tools"
          className="inline-block bg-orange-500 hover:bg-orange-600 font-semibold px-6 py-3 rounded-xl transition-colors"
          style={{ color: '#ffffff' }}
        >
          All calculators
        </Link>
        <Link
          href="/blog"
          className="inline-block bg-gray-800 hover:bg-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-700 transition-colors"
          style={{ color: '#ffffff' }}
        >
          Read the blog
        </Link>
        <Link
          href="/"
          className="inline-block bg-gray-800 hover:bg-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-700 transition-colors"
          style={{ color: '#ffffff' }}
        >
          Home
        </Link>
      </div>

      <p className="text-sm text-gray-400">
        If you followed a link from this site and landed here, that is our mistake and
        we would like to know.{' '}
        <a
          href="mailto:contact@firepathtools.com"
          className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
        >
          contact@firepathtools.com
        </a>
      </p>
    </main>
  )
}

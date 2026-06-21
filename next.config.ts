import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/blog/fire-number', destination: '/blog/what-is-a-fire-number', permanent: true },
      { source: '/blog/4-percent-rule', destination: '/blog/what-is-the-4-percent-rule', permanent: true },
      { source: '/blog/savings-rate', destination: '/blog/what-is-savings-rate', permanent: true },
      { source: '/blog/coast-fire', destination: '/blog/what-is-coast-fire', permanent: true },
      { source: '/blog/compound-interest', destination: '/blog/what-is-compound-interest', permanent: true },
      { source: '/blog/safe-withdrawal-rate', destination: '/blog/what-is-a-safe-withdrawal-rate', permanent: true },
      { source: '/blog/25x-rule', destination: '/blog/what-is-the-25x-rule', permanent: true },
      { source: '/blog/barista-fire', destination: '/blog/what-is-barista-fire', permanent: true },
      { source: '/blog/index-funds', destination: '/blog/what-is-an-index-fund', permanent: true },
      { source: '/blog/fire-movement', destination: '/blog/what-is-the-fire-movement', permanent: true },
      { source: '/blog/lean-fire', destination: '/blog/what-is-lean-fire', permanent: true },
      { source: '/blog/fat-fire', destination: '/blog/what-is-fat-fire', permanent: true },
    ]
  },
}

export default nextConfig
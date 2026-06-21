import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /calculators/ -> /tools/
      { source: '/calculators/budget-planner', destination: '/tools/budget-planner', permanent: true },
      { source: '/calculators/coast-fire', destination: '/tools/coast-fire', permanent: true },
      { source: '/calculators/compound-interest', destination: '/tools/compound-interest', permanent: true },
      { source: '/calculators/debt-payoff', destination: '/tools/debt-payoff', permanent: true },
      { source: '/calculators/emergency-fund', destination: '/tools/emergency-fund', permanent: true },
      { source: '/calculators/fire-number', destination: '/tools/fire-number', permanent: true },
      { source: '/calculators/fire-progress', destination: '/tools/fire-progress', permanent: true },
      { source: '/calculators/four-percent-rule', destination: '/tools/four-percent-rule', permanent: true },
      { source: '/calculators/freelance-rate', destination: '/tools/freelance-rate', permanent: true },
      { source: '/calculators/inflation', destination: '/tools/inflation', permanent: true },
      { source: '/calculators/investment-fees', destination: '/tools/investment-fees', permanent: true },
      { source: '/calculators/latte-factor', destination: '/tools/latte-factor', permanent: true },
      { source: '/calculators/net-worth', destination: '/tools/net-worth', permanent: true },
      { source: '/calculators/retirement-age', destination: '/tools/retirement-age', permanent: true },
      { source: '/calculators/roth-vs-traditional', destination: '/tools/roth-vs-traditional', permanent: true },
      { source: '/calculators/savings-rate', destination: '/tools/savings-rate', permanent: true },
      // /blog/ short slugs -> full slugs
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
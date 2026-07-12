import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.firepathtools.com'

  const tools = [
    'fire-number',
    'coast-fire',
    'savings-rate',
    'compound-interest',
    'retirement-age',
    'emergency-fund',
    'freelance-rate',
    'debt-payoff',
    'net-worth',
    'four-percent-rule',
    'roth-vs-traditional',
    'investment-fees',
    'inflation',
    'latte-factor',
    'fire-progress',
    'budget-planner',
    'safe-withdrawal-rate',
    'sequence-of-returns',
    'can-i-retire-early',
    'coast-fire-age',
    'drawdown-calculator',
    'fire-gap',
    'freedom-date',
    'time-to-fire',
  ]

  const blogs = [
    'what-is-a-fire-number',
    'what-is-the-4-percent-rule',
    'what-is-savings-rate',
    'what-is-coast-fire',
    'what-is-compound-interest',
    'what-is-a-safe-withdrawal-rate',
    'what-is-the-25x-rule',
    'what-is-barista-fire',
    'what-is-an-index-fund',
    'what-is-the-fire-movement',
    'what-is-lean-fire',
    'what-is-fat-fire',
    'fire-number-billionaires',
    'how-long-to-reach-fire',
    'sequence-of-returns-risk',
    'one-number-that-matters-more-than-fire-number',
    'how-to-start-fire-by-age',
    'retire-in-portugal',
    'retire-in-thailand',
    'retire-in-spain',
    'retire-in-france',
    'coast-fire-vs-barista-fire',
    'cost-of-waiting-one-year-to-invest',
    'fat-fire-vs-lean-fire',
    'fire-after-40',
    'middle-class-fire',
    'what-delays-fire-the-most',
    'what-reddit-says-about-coast-fire',
    'what-reddit-says-about-lean-fire',
  ]


  const calculators = [
    'fire-by-country-calculator',
    'fire-canada-calculator',
    'fire-uk-calculator',
    'retire-at-40-calculator',
    'retire-at-45-calculator',
    'retire-at-50-calculator',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: baseUrl + '/global-fire-map',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...calculators.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: baseUrl + '/disclaimer',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}

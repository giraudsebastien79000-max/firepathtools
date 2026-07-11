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

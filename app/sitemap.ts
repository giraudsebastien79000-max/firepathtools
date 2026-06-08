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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
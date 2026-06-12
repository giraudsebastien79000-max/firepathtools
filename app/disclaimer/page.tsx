import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | FirePath Tools',
  description: 'Legal disclaimer and affiliate disclosure for FirePath Tools.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>Disclaimer</h1>
      <h2>Not Financial Advice</h2>
      <p>FirePath Tools is not a licensed financial advisor. All content, calculators, and tools on this site are for informational and educational purposes only. Nothing on this site constitutes financial, investment, legal, or tax advice. Always consult a qualified financial advisor before making any financial decisions.</p>
      <h2>Affiliate Disclosure</h2>
      <p>This post contains affiliate links. If you click and sign up, we may earn a commission — at no extra cost to you. This helps keep FirePath free.</p>
      <p>FirePath Tools may earn commissions from affiliate links on this site. We only recommend tools and services we believe are genuinely useful for your financial independence journey. Affiliate relationships never influence our content or calculator results.</p>
      <h2>Accuracy of Information</h2>
      <p>We make every effort to ensure the information on this site is accurate and up to date. However, financial rules, tax laws, and market conditions change. We cannot guarantee the accuracy or completeness of any information provided. Use all content at your own risk.</p>
      <h2>Investment Risk</h2>
      <p>All investments involve risk, including the possible loss of principal. Past performance is not indicative of future results. The projections shown in our calculators are for illustrative purposes only and are not guaranteed.</p>
      <h2>Contact</h2>
      <p>If you have any questions about this disclaimer, please contact us at the email address listed on our site.</p>
      <p><small>Last updated: June 2026</small></p>
    </article>
  )
}
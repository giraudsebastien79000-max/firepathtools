import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a FIRE Number - A Beginners Guide | FirePath Tools',
  description: 'Learn what a FIRE number is, how to calculate yours using the 25x rule, and why knowing this single number changes everything about saving for financial independence.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>What Is a FIRE Number? A Beginner Guide to Financial Independence</h1>
      <p><strong>Your FIRE number is the amount of money you need invested to never work again.</strong></p>
      <p>It sounds almost too easy to be true. But yeah - that is really it.</p>
      <h2>The Simple Formula</h2>
      <p>Your FIRE number = Annual expenses x 25</p>
      <p>If you spend $40,000 per year, your FIRE number is $1,000,000.</p>
      <h2>A Real Example</h2>
      <p>Marcus is 33. Annual expenses: $44,000/year. FIRE number: $1,100,000. Current savings: $32,800.</p>
      <h2>The Real Value of Knowing Your Number</h2>
      <p>For years, I spent without thinking about tomorrow. Until I saw people around me still grinding in their 60s and 70s with no way out. That is when it hit me.</p>
      <p><a href="/tools/fire-number">Calculate your FIRE number</a></p>
      <hr />
      <p><em>Written by the FirePath Team. Not financial advisors - just regular people who got tired of working without a plan.</em></p>
      <p><small>The 4% Rule originates from the Trinity Study (1998). It is a guideline, not a guarantee.</small></p>
    </article>
  )
}
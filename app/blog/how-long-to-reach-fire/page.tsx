import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Long Does It Actually Take to Reach FIRE? (By Savings Rate)',
  description:
    'Your savings rate — not your salary — is the single number that controls how fast you reach financial independence. See exactly how many years it takes at every savings rate, with real math.',
  openGraph: {
    title: 'How Long Does It Actually Take to Reach FIRE? (By Savings Rate)',
    description:
      'Your savings rate — not your salary — is the single number that controls how fast you reach financial independence.',
    url: 'https://firepathtools.com/blog/how-long-to-reach-fire',
    siteName: 'FirePathTools',
    type: 'article',
  },
}

export default function HowLongToReachFire() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
          FIRE Fundamentals
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          How Long Does It <em>Actually</em> Take to Reach FIRE?
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Most people think salary determines how fast they reach financial independence.
          It doesn't. Your <strong className="text-white">savings rate</strong> does —
          and the math behind it is both simple and shocking.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Updated June 2026 · 7 min read
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-800" />
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Imagine two people. One earns $200,000 a year and spends $180,000. The other earns
          $60,000 and spends $30,000. Who reaches financial independence first?
        </p>
        <p>
          The second person. By a lot. They're saving 50% of their income — and at that rate,
          they'll be financially independent in roughly 17 years, regardless of what they earn.
          The first person, saving just 10%, is looking at 40+ years before they can stop
          depending on a paycheck.
        </p>
        <p>
          This is the core insight of the FIRE movement, and it's the thing most personal finance
          advice gets completely backwards.
        </p>
      </section>

      {/* Why savings rate is the key */}
      <section className="max-w-3xl mx-auto px-6 pb-10 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">Why your savings rate controls everything</h2>
        <p>
          Your savings rate does two things at once that turbocharge your path to financial
          independence:
        </p>
        <ul className="list-none space-y-3 pl-0">
          <li className="flex gap-3">
            <span className="text-orange-400 font-bold mt-1">→</span>
            <span>It <strong className="text-white">reduces</strong> the amount you need to retire (lower expenses = smaller FIRE number)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-400 font-bold mt-1">→</span>
            <span>It <strong className="text-white">accelerates</strong> how fast you accumulate that number (more money invested each month)</span>
          </li>
        </ul>
        <p>
          Both levers move in your favor simultaneously. That's why even a modest increase in
          savings rate — say, from 20% to 30% — can shave years off your timeline, not months.
        </p>
        <p>
          Your salary matters only insofar as it affects your savings rate. A surgeon spending
          every dollar they earn is no closer to FIRE than a teacher who saves aggressively.
        </p>
      </section>

      {/* The table */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Years to FIRE by savings rate
        </h2>
        <p className="text-gray-400 mb-6 text-base">
          Assumes a 7% real annual return on investments and starting from $0. Based on
          the 4% rule (25x annual expenses as your FIRE number).
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-900 text-gray-400 text-left">
                <th className="px-5 py-4 font-semibold">Savings Rate</th>
                <th className="px-5 py-4 font-semibold">Years to FIRE</th>
                <th className="px-5 py-4 font-semibold hidden md:table-cell">What that means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { rate: '5%',  years: '66 years', note: 'Never really retire early', highlight: false },
                { rate: '10%', years: '51 years', note: 'Traditional retirement timeline', highlight: false },
                { rate: '15%', years: '43 years', note: 'Slightly better than average', highlight: false },
                { rate: '20%', years: '37 years', note: 'Retire in your early 60s', highlight: false },
                { rate: '25%', years: '32 years', note: 'Retire around 55 (start at 23)', highlight: false },
                { rate: '30%', years: '28 years', note: 'The threshold where it gets interesting', highlight: true },
                { rate: '40%', years: '22 years', note: 'Retire in your mid-40s', highlight: true },
                { rate: '50%', years: '17 years', note: 'Classic FIRE target', highlight: true },
                { rate: '60%', years: '12.5 years', note: 'Retire before 40 if you start at 25', highlight: true },
                { rate: '70%', years: '8.5 years', note: 'Lean FIRE territory', highlight: true },
                { rate: '75%', years: '7 years',   note: 'Extreme frugality, extreme freedom', highlight: true },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight
                    ? 'bg-orange-950/30 text-white'
                    : 'bg-gray-950 text-gray-300'}
                >
                  <td className="px-5 py-4 font-bold text-orange-400">{row.rate}</td>
                  <td className="px-5 py-4 font-semibold">{row.years}</td>
                  <td className="px-5 py-4 text-gray-400 hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500 italic">
          Numbers are illustrative — use our{' '}
          <Link href="/tools/fire-number" className="text-orange-400 underline underline-offset-2">
            FIRE calculator
          </Link>{' '}
          for your specific situation.
        </p>
      </section>

      {/* The inflection point */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">The inflection point nobody talks about</h2>
        <p>
          Look at the table again. Going from 5% to 10% savings rate saves you 15 years.
          Going from 10% to 20% saves another 14. But notice what happens above 30%:
          every additional 10 percentage points starts removing 4-6 years from your timeline.
        </p>
        <p>
          There's a compounding effect on the compounding. The more aggressively you save,
          the faster the math works in your favor — because you're simultaneously shrinking
          your target and accelerating your progress toward it.
        </p>
        <p>
          The uncomfortable implication: the difference between a 20% saver and a 50% saver
          isn't discipline. It's usually one or two major spending decisions — housing, car,
          lifestyle choices that were locked in years ago and feel permanent.
        </p>
      </section>

      {/* Callout box */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-8">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The key insight
          </p>
          <p className="text-white text-xl font-semibold leading-snug mb-4">
            "A person saving 50% of their income will reach financial independence in 17 years —
            whether they earn $30,000 or $300,000."
          </p>
          <p className="text-gray-400 text-base">
            FIRE is a ratio problem, not an income problem. The finish line scales with your
            expenses, not your salary. This is why high earners can be decades away from
            financial independence, while modest earners living below their means can get
            there surprisingly fast.
          </p>
        </div>
      </section>

      {/* What affects the timeline */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">What else affects the timeline?</h2>
        <p>
          The table above uses 7% real returns and a 4% withdrawal rate — the most commonly
          cited assumptions in the FIRE community. Here's how changing them shifts the picture:
        </p>

        <div className="space-y-4">
          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold">Investment returns</p>
            <p className="text-gray-400">
              At 5% real returns instead of 7%, add roughly 3-5 years to every timeline.
              At 9%, subtract 2-3 years. The difference between aggressive and conservative
              return assumptions is real but smaller than most people expect.
            </p>
          </div>
          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold">Starting balance</p>
            <p className="text-gray-400">
              If you already have 2-3 years of expenses invested, you can shave 2-4 years off
              your timeline. The earlier you start, the more compounding does the heavy lifting
              in the final stretch.
            </p>
          </div>
          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold">Withdrawal rate</p>
            <p className="text-gray-400">
              Using a 3.5% withdrawal rate instead of 4% means you need 28.5x your expenses
              instead of 25x. That adds roughly 1-3 years depending on your savings rate.
              Many early retirees choose this more conservative number for longer retirements.
            </p>
          </div>
          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold">Inflation</p>
            <p className="text-gray-400">
              All numbers in this article use real (inflation-adjusted) returns, meaning
              the timelines already account for inflation eating into your portfolio's purchasing
              power over time.
            </p>
          </div>
        </div>
      </section>

      {/* Coast FIRE */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">
          You don't have to go all the way to stop the clock
        </h2>
        <p>
          One of the most underrated concepts in the FIRE world is{' '}
          <Link href="/blog/coast-fire" className="text-orange-400 underline underline-offset-2">
            Coast FIRE
          </Link>
          : the point where you've saved enough that — even if you stop contributing entirely —
          your existing investments will compound to a full retirement number by traditional
          retirement age.
        </p>
        <p>
          For someone planning to retire at 65 with $1M, Coast FIRE at age 35 might only
          require $250,000 already invested. After that point, they could switch to a
          lower-paying job they actually enjoy, work part-time, or take years off —
          because the math is already done. Compounding handles the rest.
        </p>
        <p>
          This is why the FIRE timeline table above is both more achievable and more flexible
          than it looks at first glance. Full financial independence is one destination —
          but there are meaningful milestones along the way that change your options long
          before you hit the final number.
        </p>
      </section>

      {/* How to increase savings rate */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">
          How to actually increase your savings rate
        </h2>
        <p>
          Most FIRE advice focuses on cutting lattes and cooking at home. That's not where
          the real leverage is. Three categories account for the majority of most household budgets:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {[
            { category: 'Housing', impact: 'Highest', tip: 'House hacking, relocating to a lower cost area, or delaying an upgrade can move your savings rate by 10-20 percentage points alone.' },
            { category: 'Transportation', impact: 'High', tip: 'Owning one fewer car, buying used, or eliminating a car payment can free up $500-$1,000/month in savings.' },
            { category: 'Food', impact: 'Medium', tip: 'Restaurant spending is the most elastic budget item. Cutting it in half typically moves savings rate by 3-5 percentage points.' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <p className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-1">{item.category}</p>
              <p className="text-gray-500 text-xs mb-3">Impact: {item.impact}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
        <p>
          The other lever is income. Every raise, promotion, or side income stream that
          you don't immediately spend increases your savings rate without any lifestyle
          sacrifice. This is why the FIRE community talks so much about avoiding lifestyle
          inflation — not because spending is bad, but because unchecked lifestyle creep
          is the most common reason people save 20% when they could be saving 40%.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-900/20 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Find your own timeline
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            The table above shows the general picture. Our free FIRE calculator lets you
            plug in your actual numbers — savings, expenses, existing investments — and
            see exactly when you could reach financial independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/fire-number"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Calculate My FIRE Number
            </Link>
            <Link
              href="/tools/savings-rate"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Calculate My Savings Rate
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-bold text-white mb-6">Related articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'What Is the 4% Rule?', href: '/blog/4-percent-rule', desc: 'The research behind the most cited number in early retirement planning.' },
            { title: 'Coast FIRE Explained', href: '/blog/coast-fire', desc: 'The milestone that changes your options long before full financial independence.' },
            { title: 'What Is a Safe Withdrawal Rate?', href: '/blog/safe-withdrawal-rate', desc: 'How much you can actually spend each year without running out of money.' },
            { title: 'Savings Rate: Why It Matters More Than Your Salary', href: '/blog/savings-rate', desc: 'A deeper look at the single most powerful variable in your FIRE timeline.' },
          ].map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="block bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-5 transition-colors group"
            >
              <p className="text-white font-semibold group-hover:text-orange-400 transition-colors mb-1">
                {article.title}
              </p>
              <p className="text-gray-400 text-sm">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Happens to Your FIRE Plan When the Market Crashes the Day You Retire?',
  description:
    'Sequence of returns risk is the biggest threat to early retirement that most FIRE calculators ignore. Here is what it is, why it matters, and how to protect against it.',
  openGraph: {
    title: 'What Happens to Your FIRE Plan When the Market Crashes the Day You Retire?',
    description:
      'Sequence of returns risk is the biggest threat to early retirement that most FIRE calculators ignore.',
    url: 'https://firepathtools.com/blog/sequence-of-returns-risk',
    siteName: 'FirePathTools',
    type: 'article',
  },
}

export default function SequenceOfReturnsRisk() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
          FIRE Risk
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          What Happens to Your FIRE Plan When the Market Crashes the Day You Retire?
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          You saved for 20 years. You hit your number. You quit your job.
          Then the market drops 40%. This scenario has a name — and it's the risk
          most FIRE calculators quietly sweep under the rug.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Updated June 2026 · 8 min read
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-800" />
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Imagine two people who both retire with $1,000,000 and withdraw $40,000 a year
          (the classic 4% rule). They get identical average returns over 30 years — exactly
          the same number, averaged out. One of them runs out of money at year 22.
          The other still has $800,000 left at year 30.
        </p>
        <p>
          Same portfolio. Same withdrawal rate. Same average return. Completely different outcomes.
        </p>
        <p>
          The only difference: when the bad years happened.
        </p>
        <p>
          This is sequence of returns risk — and it's the most underestimated threat
          to early retirement.
        </p>
      </section>

      {/* What it is */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">What sequence of returns risk actually means</h2>
        <p>
          When you're accumulating wealth — saving and investing during your working years —
          the order of market returns doesn't matter much. A bad year early, a good year late,
          or the reverse: over a long horizon, the math averages out. Compounding is forgiving
          when you're adding money, not taking it out.
        </p>
        <p>
          The moment you start withdrawing, everything changes.
        </p>
        <p>
          In withdrawal mode, a market crash early in retirement forces you to sell shares
          at depressed prices to cover living expenses. Those shares are gone. When the market
          recovers, you're recovering with a smaller base — and the compounding that was
          supposed to carry you through 40 years of retirement is permanently impaired.
        </p>
        <p>
          A crash late in retirement, by contrast, matters far less. By then, you've had
          decades of good returns. Your portfolio is larger, more resilient, and you have
          fewer years of withdrawals ahead of you.
        </p>
      </section>

      {/* The scenario table */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Same returns, different order — radically different outcomes
        </h2>
        <p className="text-gray-300 mb-6 text-base">
          Two retirees. Both start with $1,000,000. Both withdraw $40,000/year.
          Both average 6% annual returns over 30 years. The only difference is timing.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-900 text-gray-300 text-left">
                <th className="px-5 py-4 font-semibold">Years</th>
                <th className="px-5 py-4 font-semibold text-red-400">Bad Luck Retiree</th>
                <th className="px-5 py-4 font-semibold text-green-400">Good Luck Retiree</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              <tr className="bg-gray-950">
                <td className="px-5 py-4">Year 1-3</td>
                <td className="px-5 py-4 text-red-400">Market -30%, -20%, -15%</td>
                <td className="px-5 py-4 text-green-400">Market +20%, +18%, +15%</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="px-5 py-4">Years 4-27</td>
                <td className="px-5 py-4">Strong recovery, avg +10%/yr</td>
                <td className="px-5 py-4">Moderate returns, avg +5%/yr</td>
              </tr>
              <tr className="bg-gray-950">
                <td className="px-5 py-4">Year 28-30</td>
                <td className="px-5 py-4 text-green-400">Market booms</td>
                <td className="px-5 py-4 text-red-400">Market crashes -30%</td>
              </tr>
              <tr className="bg-orange-950/30">
                <td className="px-5 py-4 font-bold text-white">Portfolio at year 30</td>
                <td className="px-5 py-4 font-bold text-red-400">$0 (depleted at yr 22)</td>
                <td className="px-5 py-4 font-bold text-green-400">~$800,000 remaining</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          Illustrative example. Real outcomes depend on specific return sequences and withdrawal adjustments.
        </p>
      </section>

      {/* Why FIRE makes it worse */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">Why early retirement makes this risk worse</h2>
        <p>
          The 4% rule was originally derived from research studying 30-year retirement horizons.
          If you retire at 65, a 30-year retirement gets you to 95 — reasonable.
        </p>
        <p>
          If you retire at 40, you're potentially looking at a 50-year retirement. The same
          research that supports the 4% rule for 30 years shows meaningful failure rates
          at 40 and 50 years — especially when a significant market downturn hits in the
          first decade.
        </p>
        <p>
          The math compounds. More years of withdrawals means more exposure to sequence risk.
          An early retiree who hits a 2008-style crash in year two of retirement is in a
          far more precarious position than a traditional retiree facing the same event.
        </p>
      </section>

      {/* Callout */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-8">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The core problem
          </p>
          <p className="text-white text-xl font-semibold leading-snug mb-4">
            "Most FIRE calculators show you average returns. Markets don't deliver average returns —
            they deliver a specific sequence of good years and bad years, and the order matters enormously."
          </p>
          <p className="text-gray-300 text-base">
            This is why the FIRE community increasingly talks about 3.5% or 3.25% withdrawal rates
            for early retirees — to build in a buffer against a bad sequence at the start.
          </p>
        </div>
      </section>

      {/* How to protect against it */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">How to protect your retirement against sequence risk</h2>
        <p>
          The FIRE community has developed several practical strategies. None of them eliminate
          sequence risk entirely — but each meaningfully reduces the damage a bad early sequence
          can do.
        </p>

        <div className="space-y-6 mt-4">
          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold text-lg mb-2">1. Use a lower withdrawal rate</p>
            <p className="text-gray-300">
              Dropping from 4% to 3.5% withdrawal rate increases your required portfolio by
              roughly $125,000 per $10,000 of annual spending — but dramatically improves
              survival rates over 40-50 year retirements. Many early retirees target 3.25-3.5%
              specifically to buffer against sequence risk.
            </p>
          </div>

          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold text-lg mb-2">2. Build a cash buffer</p>
            <p className="text-gray-300">
              Holding 1-3 years of living expenses in cash or short-term bonds means you don't
              have to sell equities during a crash. You live off the buffer while the market
              recovers, avoiding the forced selling that makes sequence risk so destructive.
              This is sometimes called a "cash bucket" or "bond tent" strategy.
            </p>
          </div>

          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold text-lg mb-2">3. Flexible spending</p>
            <p className="text-gray-300">
              The 4% rule assumes you withdraw a fixed inflation-adjusted amount every year
              regardless of market conditions. In practice, early retirees who can reduce
              spending by 10-20% during a down market significantly improve their portfolio
              survival odds. This flexibility is one of the biggest underrated assets in
              early retirement planning.
            </p>
          </div>

          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold text-lg mb-2">4. Keep some earned income</p>
            <p className="text-gray-300">
              Barista FIRE, part-time consulting, or any small income stream during the first
              5-10 years of retirement can dramatically reduce sequence risk exposure. Even
              covering 20-30% of expenses with earned income in the early years takes enormous
              pressure off a portfolio during its most vulnerable window.
            </p>
          </div>

          <div className="border-l-2 border-orange-500 pl-5">
            <p className="text-white font-semibold text-lg mb-2">5. One more year</p>
            <p className="text-gray-300">
              Counterintuitively, working one or two extra years beyond your FIRE number does
              more than just add to the portfolio. It reduces the withdrawal period, gives you
              more buffer above the minimum, and means a crash immediately post-retirement
              hits a larger base. Many FIRE practitioners call this the highest-ROI decision
              available once you're close to the finish line.
            </p>
          </div>
        </div>
      </section>

      {/* The good news */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">The good news about sequence risk</h2>
        <p>
          Sequence of returns risk sounds alarming — and it should get your attention.
          But it's also one of the most manageable risks in retirement planning precisely
          because it's predictable in structure, even if not in timing.
        </p>
        <p>
          You know the vulnerable window exists: roughly the first 5-10 years of retirement.
          You can design your strategy around it in advance. A cash buffer, a slightly
          lower withdrawal rate, and a willingness to flex spending are often enough to
          survive even a severe early sequence.
        </p>
        <p>
          The retirees who get hurt by sequence risk are usually those who planned rigidly —
          assuming average returns would arrive on schedule, with no buffer for the reality
          that markets move in lumpy, unpredictable sequences rather than smooth averages.
        </p>
        <p>
          Build the buffer. Stay flexible. The math works over long time horizons —
          sequence risk is the main reason it sometimes doesn't in the short term.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-900/20 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Check your withdrawal rate
          </h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Use our safe withdrawal rate calculator to model different scenarios —
            including what happens if the market drops in your first years of retirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/safe-withdrawal-rate"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Safe Withdrawal Rate Calculator
            </Link>
            <Link
              href="/tools/fire-number"
              className="inline-block bg-slate-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Calculate My FIRE Number
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-bold text-white mb-6">Related articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'What Is a Safe Withdrawal Rate?', href: '/blog/safe-withdrawal-rate', desc: 'How much you can actually spend each year without running out of money.' },
            { title: 'What Is the 4% Rule?', href: '/blog/4-percent-rule', desc: 'The research behind the most cited number in early retirement planning.' },
            { title: 'Barista FIRE Explained', href: '/blog/barista-fire', desc: 'How part-time income can protect your portfolio during the vulnerable early years.' },
            { title: 'How Long Does It Actually Take to Reach FIRE?', href: '/blog/how-long-to-reach-fire', desc: 'The savings rate table that shows exactly when you can retire.' },
          ].map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="block bg-gray-900 hover:bg-slate-800 border border-gray-800 rounded-xl p-5 transition-colors group"
            >
              <p className="text-white font-semibold group-hover:text-orange-400 transition-colors mb-1">
                {article.title}
              </p>
              <p className="text-gray-300 text-sm">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}

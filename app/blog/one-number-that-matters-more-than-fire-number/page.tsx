import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The One Number That Matters More Than Your FIRE Number',
  description:
    'Everyone obsesses over their FIRE number. But there is a single metric that controls how fast you get there — and most people never track it.',
  openGraph: {
    title: 'The One Number That Matters More Than Your FIRE Number',
    description:
      'Everyone obsesses over their FIRE number. But there is a single metric that controls how fast you get there — and most people never track it.',
    url: 'https://firepathtools.com/blog/one-number-that-matters-more-than-fire-number',
    siteName: 'FirePathTools',
    type: 'article',
  },
}

export default function OneNumberThatMatters() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
          FIRE Strategy
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          The One Number That Matters More Than Your FIRE Number
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Most people in the FIRE community know their number — $800k, $1.2M, $2M.
          They track it obsessively. But that number is just a destination.
          There's a different metric that actually controls how fast you arrive.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Updated June 2026 · 6 min read
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-800" />
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Picture two people, both targeting a $1,000,000 FIRE number.
        </p>
        <p>
          Person A earns $150,000 a year. They know their number. They check their
          portfolio every week. They have a spreadsheet. They're on every FIRE subreddit.
          Their savings rate: 15%.
        </p>
        <p>
          Person B earns $55,000. No spreadsheet. Rarely checks the subreddits.
          Their savings rate: 50%.
        </p>
        <p>
          Person A will reach $1M in roughly 37 years. Person B — earning less than
          half as much — will get there in 17. Person B will be financially independent
          while Person A is still checking their portfolio on a Monday morning,
          two decades later.
        </p>
        <p>
          The number that made the difference wasn't the FIRE number. It was the savings rate.
        </p>
      </section>

      {/* The reveal */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The number
          </p>
          <p className="text-white text-3xl font-extrabold mb-4">
            Your savings rate.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Not your portfolio balance. Not your FIRE number. Not your net worth.
            Your savings rate — the percentage of your take-home income you actually
            invest each month — is the single variable with the most control over
            when you reach financial independence.
          </p>
        </div>
      </section>

      {/* Why the FIRE number is overrated */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">Why your FIRE number is overrated</h2>
        <p>
          Your FIRE number is a useful target. But it has a problem: it creates the illusion
          that financial independence is primarily a wealth problem — that if you just had
          enough money, you'd be free.
        </p>
        <p>
          In reality, your FIRE number is entirely derived from your spending. Spend $40,000
          a year and your number is $1M. Spend $60,000 and it's $1.5M. The number isn't
          fixed — it moves every time your lifestyle does.
        </p>
        <p>
          This matters because people who focus obsessively on hitting a specific portfolio
          number often miss the more powerful lever: reducing the number itself by spending less,
          while simultaneously saving more. Both sides of that equation are controlled by
          the same variable — your savings rate.
        </p>
      </section>

      {/* The double effect */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">The double effect nobody visualizes</h2>
        <p>
          Here's the thing about savings rate that most people don't fully internalize:
          it works on both sides of the equation at once.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <p className="text-orange-400 font-bold text-lg mb-2">Side 1 — Lower target</p>
            <p className="text-gray-300 text-base leading-relaxed">
              When you spend less, your annual expenses drop. A lower expense number means
              a smaller FIRE number. Every $10,000 less you spend per year removes
              $250,000 from the finish line.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <p className="text-orange-400 font-bold text-lg mb-2">Side 2 — Faster progress</p>
            <p className="text-gray-300 text-base leading-relaxed">
              When you save more, you invest more each month. More invested means compounding
              works harder. Your portfolio grows faster — toward a target that's also shrinking.
            </p>
          </div>
        </div>

        <p>
          This is why savings rate improvements feel exponential. You're not just adding
          to one side — you're compressing the finish line while accelerating toward it.
          No other single financial decision does both simultaneously.
        </p>
      </section>

      {/* Comparison table */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Same income, different outcomes
        </h2>
        <p className="text-gray-400 mb-6 text-base">
          Two people earning $70,000/year. Same investment returns (7% real). Completely
          different timelines — determined entirely by savings rate.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-900 text-gray-400 text-left">
                <th className="px-5 py-4 font-semibold">Savings Rate</th>
                <th className="px-5 py-4 font-semibold">Annual Spend</th>
                <th className="px-5 py-4 font-semibold">FIRE Number</th>
                <th className="px-5 py-4 font-semibold">Years to FIRE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { rate: '10%', spend: '$63,000', fire: '$1,575,000', years: '51 yrs', highlight: false },
                { rate: '20%', spend: '$56,000', fire: '$1,400,000', years: '37 yrs', highlight: false },
                { rate: '30%', spend: '$49,000', fire: '$1,225,000', years: '28 yrs', highlight: false },
                { rate: '40%', spend: '$42,000', fire: '$1,050,000', years: '22 yrs', highlight: true },
                { rate: '50%', spend: '$35,000', fire: '$875,000',   years: '17 yrs', highlight: true },
                { rate: '60%', spend: '$28,000', fire: '$700,000',   years: '12.5 yrs', highlight: true },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight ? 'bg-orange-950/30 text-white' : 'bg-gray-950 text-gray-300'}
                >
                  <td className="px-5 py-4 font-bold text-orange-400">{row.rate}</td>
                  <td className="px-5 py-4">{row.spend}</td>
                  <td className="px-5 py-4">{row.fire}</td>
                  <td className="px-5 py-4 font-semibold">{row.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          Going from 10% to 50% savings rate cuts the timeline by 34 years — not by earning
          more, but by redirecting what's already coming in.
        </p>
      </section>

      {/* Why people don't track it */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">Why most people track the wrong number</h2>
        <p>
          Portfolio balance is satisfying to watch. It goes up (and occasionally down) in
          real time. It's concrete. It feels like a scoreboard.
        </p>
        <p>
          Savings rate is less exciting to look at. It doesn't move dramatically week to
          week. It requires knowing your actual take-home income and your actual spending —
          which most people would rather not look at too closely.
        </p>
        <p>
          But here's the practical difference: your portfolio balance is mostly outside
          your control. Markets go where they go. Your savings rate is almost entirely
          within your control. It's the one input in the FIRE equation you can actually move.
        </p>
        <p>
          Tracking your portfolio without tracking your savings rate is like watching
          the scoreboard without ever looking at the play.
        </p>
      </section>

      {/* Callout */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-8">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The reframe
          </p>
          <p className="text-white text-xl font-semibold leading-snug mb-4">
            "Your FIRE number tells you where you're going. Your savings rate tells you how fast
            you're actually moving."
          </p>
          <p className="text-gray-400 text-base">
            One is a destination. The other is the engine. If you only track one of them,
            track the engine.
          </p>
        </div>
      </section>

      {/* What actually moves the savings rate */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">What actually moves the needle</h2>
        <p>
          Small changes don't move savings rate much. Cutting a $15 subscription gets
          you nowhere meaningful. The research on household spending consistently shows
          that three categories dominate everything else:
        </p>

        <div className="space-y-4 my-4">
          {[
            {
              label: '1. Housing',
              body: 'For most people, housing is 30-40% of take-home income. Downsizing, house hacking, or relocating to a lower-cost area can move your savings rate by 10-20 percentage points in a single decision.',
            },
            {
              label: '2. Transportation',
              body: 'A car payment plus insurance plus maintenance can easily run $800-$1,200/month. Eliminating one vehicle or buying used outright can add 10-15% to your savings rate immediately.',
            },
            {
              label: '3. Income increases you don\'t spend',
              body: 'Every raise or side income you absorb into lifestyle resets your savings rate back down. Every one you invest goes directly into compounding. This is why lifestyle inflation is the silent killer of savings rate.',
            },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-orange-500 pl-5">
              <p className="text-white font-semibold mb-1">{item.label}</p>
              <p className="text-gray-400">{item.body}</p>
            </div>
          ))}
        </div>

        <p>
          Optimizing food, subscriptions, and entertainment matters at the margin. But if
          your housing and transportation costs are high, no amount of latte skipping
          will move your savings rate into FIRE territory.
        </p>
      </section>

      {/* How to calculate yours */}
      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">How to calculate your savings rate right now</h2>
        <p>
          The formula is simple:
        </p>
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center my-4">
          <p className="text-white text-xl font-mono font-bold">
            Savings Rate = (Monthly Savings / Monthly Take-Home) x 100
          </p>
        </div>
        <p>
          Include all invested money: 401(k) contributions, IRA contributions, brokerage
          account transfers, HSA contributions. Exclude debt repayment beyond minimum
          payments if the debt carries a low interest rate — though many FIRE practitioners
          count aggressive debt paydown as saving.
        </p>
        <p>
          If you don't know your number off the top of your head, that's the first thing
          to fix. You can't optimize what you're not measuring.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-900/20 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Calculate your savings rate
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Find out exactly where you stand — and how many years each percentage point
            of improvement saves you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/savings-rate"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Calculate My Savings Rate
            </Link>
            <Link
              href="/tools/fire-number"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
            { title: 'How Long Does It Actually Take to Reach FIRE?', href: '/blog/how-long-to-reach-fire', desc: 'The full savings rate timeline table — from 5% to 75%.' },
            { title: 'What Is the FIRE Number?', href: '/blog/fire-number', desc: 'How to calculate the portfolio size you need to retire early.' },
            { title: 'What Is the 4% Rule?', href: '/blog/4-percent-rule', desc: 'The research behind the most cited number in early retirement.' },
            { title: 'Lean FIRE vs Fat FIRE', href: '/blog/lean-fire', desc: 'How your lifestyle target shapes your savings rate requirements.' },
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

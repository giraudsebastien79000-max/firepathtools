import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Coast FIRE vs Barista FIRE: What Is the Difference?",
  description: "Coast FIRE and Barista FIRE are two popular middle-ground strategies between full-time work and early retirement. Learn the key differences, pros, cons, and which one is right for you.",
}

export default function CoastVsBaristaPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">

        <div className="mb-10">
          <Link href="/blog" className="text-orange-400 text-sm hover:underline">← Back to Blog</Link>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
            <span>June 27, 2026</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span className="text-orange-400">FIRE Strategy</span>
          </div>
          <h1 className="text-4xl font-bold mt-4 mb-4">Coast FIRE vs Barista FIRE: What Is the Difference?</h1>
          <p className="text-gray-300 text-lg leading-relaxed">Both Coast FIRE and Barista FIRE offer a middle path between grinding full-time and full early retirement. But they work very differently — and choosing the wrong one can derail your financial independence timeline.</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-orange-400">Quick Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-2">Coast FIRE</p>
                <p className="text-gray-300">You have already saved enough that your portfolio will grow to your FIRE number on its own — without any new contributions. You can stop investing and work just enough to cover living expenses.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Barista FIRE</p>
                <p className="text-gray-300">You have a partially funded portfolio that covers most of your expenses, but you work part-time — often for benefits like healthcare — to cover the gap without drawing down your investments.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">What Is Coast FIRE?</h2>
          <p className="text-gray-300 leading-relaxed">Coast FIRE is reached when your current investment portfolio is large enough that, left alone to compound at a historical rate of return (typically 7% real), it will grow to your full FIRE number by traditional retirement age (usually 60-65) — without you ever adding another dollar.</p>
          <p className="text-gray-300 leading-relaxed">Once you hit your Coast FIRE number, you have effectively "pre-funded" your retirement. The compounding does the rest of the work. At that point, you only need to earn enough to cover your current living expenses — no more mandatory savings. This unlocks an enormous amount of career flexibility: you can downshift to a lower-paying but more meaningful job, go part-time, take a sabbatical, or move somewhere with a lower cost of living.</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-orange-400 mb-3">Coast FIRE Formula</h3>
            <p className="text-gray-300 text-sm mb-3">Coast FIRE Number = FIRE Number / (1 + r)^n</p>
            <p className="text-gray-300 text-sm">Where r = annual return rate and n = years until traditional retirement age.</p>
            <p className="text-gray-300 text-sm mt-2">Example: FIRE number of $1,000,000, 30 years to retirement, 7% return → Coast number = $1,000,000 / (1.07)^30 = $131,367</p>
          </div>

          <p className="text-gray-300 leading-relaxed">The key insight is that Coast FIRE can be reached much earlier than full FIRE because you only need a fraction of your final target. Someone who needs $1,000,000 to fully retire might only need $130,000-$200,000 to coast there — depending on their timeline. This makes Coast FIRE an achievable milestone in your early 30s for many disciplined savers.</p>

          <h2 className="text-2xl font-bold">What Is Barista FIRE?</h2>
          <p className="text-gray-300 leading-relaxed">Barista FIRE gets its name from the idea of leaving a high-stress career and taking a part-time job — like a barista at a coffee shop — that provides just enough income and, crucially, employer-sponsored health insurance. The portfolio covers the bulk of living expenses, and the part-time income fills the gap.</p>
          <p className="text-gray-300 leading-relaxed">Unlike Coast FIRE, Barista FIRE does not require that your portfolio be fully self-sufficient. Instead, your investments partially cover your expenses, and you supplement with earned income. The portfolio is typically already being drawn down (partially), but more slowly than it would be in full retirement — preserving it for the long term.</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-orange-400 mb-3">Barista FIRE Example</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Annual expenses: $48,000</p>
              <p>Portfolio withdrawal (3%): $30,000/year from $1,000,000 portfolio</p>
              <p>Part-time income needed: $18,000/year (~$9/hour, 40 weeks)</p>
              <p>Result: Portfolio grows slowly or stays flat. Healthcare covered by employer.</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">Barista FIRE is especially popular in the United States where healthcare costs are a major barrier to full early retirement. A part-time job at companies like Starbucks, Trader Joe's, or REI — all known for offering benefits to part-time workers — can provide health insurance that would otherwise cost $500-$1,500/month on the open market.</p>

          <h2 className="text-2xl font-bold">Coast FIRE vs Barista FIRE: Key Differences</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-3 pr-4 text-gray-300 font-medium">Factor</th>
                  <th className="text-left py-3 pr-4 text-orange-400 font-medium">Coast FIRE</th>
                  <th className="text-left py-3 text-orange-400 font-medium">Barista FIRE</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Portfolio status</td>
                  <td className="py-3 pr-4 text-white">Self-funding — no new contributions needed</td>
                  <td className="py-3 text-white">Partially funded — small withdrawals or flat growth</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Work required</td>
                  <td className="py-3 pr-4 text-white">Only to cover living expenses</td>
                  <td className="py-3 text-white">Part-time, often for benefits + income gap</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Healthcare</td>
                  <td className="py-3 pr-4 text-white">Must self-fund (ACA, etc.)</td>
                  <td className="py-3 text-white">Often covered by employer</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Portfolio requirement</td>
                  <td className="py-3 pr-4 text-white">Lower (coast number only)</td>
                  <td className="py-3 text-white">Higher (near-full FIRE number)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Timeline to achieve</td>
                  <td className="py-3 pr-4 text-white">Earlier (smaller target)</td>
                  <td className="py-3 text-white">Later (larger portfolio needed)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-300">Full FIRE timeline</td>
                  <td className="py-3 pr-4 text-white">Traditional retirement age (60-65)</td>
                  <td className="py-3 text-white">Flexible — can transition when ready</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-300">Best for</td>
                  <td className="py-3 pr-4 text-white">Career flexibility, younger savers</td>
                  <td className="py-3 text-white">Healthcare needs, near-retirement savers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold">Which One Should You Choose?</h2>
          <p className="text-gray-300 leading-relaxed">The right choice depends on where you are in your FIRE journey, your age, and your healthcare situation.</p>

          <h3 className="text-xl font-semibold">Choose Coast FIRE if:</h3>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You are in your 20s or 30s and want career flexibility now, before fully funding retirement</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You have hit a meaningful savings milestone and want to reduce financial pressure</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You are okay waiting until 60-65 for full financial independence</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You live outside the US or have healthcare covered another way</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You want to pursue passion projects, entrepreneurship, or travel without the pressure of mandatory saving</li>
          </ul>

          <h3 className="text-xl font-semibold">Choose Barista FIRE if:</h3>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You are in the US and healthcare costs are a major barrier to full retirement</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>Your portfolio is near your FIRE number but not quite there</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You want to leave your main career but are not ready to stop working entirely</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You enjoy low-stakes work and the social connection it provides</li>
            <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">→</span>You want sequence of returns risk protection in the early years of retirement</li>
          </ul>

          <h2 className="text-2xl font-bold">Can You Do Both?</h2>
          <p className="text-gray-300 leading-relaxed">Yes — and many people do. A common progression in the FIRE community looks like this: hit Coast FIRE in your early 30s → downshift to lower-stress work → accumulate toward full FIRE → transition to Barista FIRE as you approach your number → eventually stop working altogether when the portfolio is fully self-sufficient.</p>
          <p className="text-gray-300 leading-relaxed">Coast FIRE and Barista FIRE are not competing strategies — they are milestones on the same path. Coast FIRE tells you your portfolio is safe. Barista FIRE tells you your income needs are mostly covered. Full FIRE means both are true simultaneously.</p>

          <h2 className="text-2xl font-bold">The Sequence of Returns Risk Factor</h2>
          <p className="text-gray-300 leading-relaxed">One underappreciated benefit of both Coast and Barista FIRE is protection against sequence of returns risk — the danger that a major market crash in the first years of retirement permanently damages your portfolio. If you are working even part-time during a downturn, you reduce or eliminate withdrawals during the worst period, giving your portfolio time to recover. This makes both strategies significantly safer than full retirement at your exact FIRE number.</p>

          <div className="mt-12 space-y-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Coast FIRE the same as semi-retirement?","acceptedAnswer":{"@type":"Answer","text":"Not exactly. Semi-retirement usually means reducing work hours while still saving. Coast FIRE specifically means you have stopped mandatory saving - your portfolio will reach your FIRE number through compounding alone. You still work, but only to cover current expenses."}},{"@type":"Question","name":"How much do I need for Coast FIRE?","acceptedAnswer":{"@type":"Answer","text":"It depends on your FIRE number and how many years until traditional retirement. Use our Coast FIRE calculator to find your exact number based on your age, target retirement age, and expected return rate."}},{"@type":"Question","name":"Does Barista FIRE mean working at a coffee shop?","acceptedAnswer":{"@type":"Answer","text":"Not literally - the name comes from Starbucks being one of the first major companies known for offering benefits to part-time workers. Barista FIRE means any part-time work that covers income gaps and/or provides benefits. Many Barista FIRE practitioners work in retail, consulting, freelancing, or passion projects."}},{"@type":"Question","name":"Which has a higher portfolio requirement - Coast or Barista FIRE?","acceptedAnswer":{"@type":"Answer","text":"Barista FIRE typically requires a much larger portfolio because you are partially drawing it down to cover expenses. Coast FIRE can be achieved with a much smaller portfolio because you are not touching it - just letting it compound over decades."}},{"@type":"Question","name":"What is the difference between Barista FIRE and Lean FIRE?","acceptedAnswer":{"@type":"Answer","text":"Lean FIRE means fully retiring on a very small portfolio by keeping expenses extremely low (typically under $25,000/year). Barista FIRE means partially retiring with a larger portfolio supplemented by part-time income. Lean FIRE is full retirement; Barista FIRE involves continued work."}}]}`}} />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is Coast FIRE the same as semi-retirement?</h4>
                <p className="text-gray-300 text-sm">Not exactly. Semi-retirement usually means reducing work hours while still saving. Coast FIRE specifically means you have stopped mandatory saving — your portfolio will reach your FIRE number through compounding alone. You still work, but only to cover current expenses.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much do I need for Coast FIRE?</h4>
                <p className="text-gray-300 text-sm">It depends on your FIRE number and how many years until traditional retirement. Use our Coast FIRE calculator to find your exact number based on your age, target retirement age, and expected return rate.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Does Barista FIRE mean working at a coffee shop?</h4>
                <p className="text-gray-300 text-sm">Not literally — the name comes from Starbucks being one of the first major companies known for offering benefits to part-time workers. Barista FIRE means any part-time work that covers income gaps and/or provides benefits. Many Barista FIRE practitioners work in retail, consulting, freelancing, or passion projects.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Which has a higher portfolio requirement — Coast or Barista FIRE?</h4>
                <p className="text-gray-300 text-sm">Barista FIRE typically requires a much larger portfolio because you are partially drawing it down to cover expenses. Coast FIRE can be achieved with a much smaller portfolio because you are not touching it — just letting it compound over decades.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the difference between Barista FIRE and Lean FIRE?</h4>
                <p className="text-gray-300 text-sm">Lean FIRE means fully retiring on a very small portfolio by keeping expenses extremely low (typically under $25,000/year). Barista FIRE means partially retiring with a larger portfolio supplemented by part-time income. Lean FIRE is full retirement; Barista FIRE involves continued work.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Calculate Your Numbers</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/savings-rate" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Savings Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/safe-withdrawal-rate" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Safe Withdrawal Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/retire-at-40-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 40 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

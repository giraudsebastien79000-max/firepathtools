import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fat FIRE vs Lean FIRE: What Is the Difference?",
  description: "Fat FIRE and Lean FIRE are two opposite ends of the financial independence spectrum. Learn the key differences, how much you need for each, and which one fits your life.",
}

export default function FatFireVsLeanFirePage() {
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
          <h1 className="text-4xl font-bold mt-4 mb-4">Fat FIRE vs Lean FIRE: What Is the Difference?</h1>
          <p className="text-gray-400 text-lg leading-relaxed">Fat FIRE and Lean FIRE sit at opposite ends of the financial independence spectrum. One requires a large portfolio and offers maximum lifestyle freedom. The other requires far less money but demands permanent frugality. Here is how to decide which one is right for you.</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-orange-400">Quick Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-2">Lean FIRE</p>
                <p className="text-gray-400">Retire early on a minimal budget — typically under $40,000/year. Requires a smaller portfolio ($500k-$1M) but demands permanent frugality and leaves little margin for unexpected expenses.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Fat FIRE</p>
                <p className="text-gray-400">Retire early with a comfortable or luxurious lifestyle — typically $100,000+/year. Requires a large portfolio ($2.5M+) but offers maximum lifestyle freedom and financial security.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">What Is Lean FIRE?</h2>
          <p className="text-gray-400 leading-relaxed">Lean FIRE means reaching financial independence on a very frugal budget. The typical Lean FIRE threshold is annual spending under $40,000 for an individual or couple — though many Lean FIRE practitioners live on $25,000-$30,000 per year. At the 4% rule, this translates to a portfolio of $625,000-$1,000,000.</p>
          <p className="text-gray-400 leading-relaxed">Lean FIRE is attractive because it is achievable much faster than standard FIRE or Fat FIRE. Someone earning a median income can reach Lean FIRE in 10-15 years with a high savings rate, compared to 20-30 years for Fat FIRE. The trade-off is a lifestyle with very little discretionary spending — no business class flights, no luxury travel, no expensive hobbies, and very little buffer for unexpected costs like medical emergencies or home repairs.</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-orange-400 mb-3">Lean FIRE Numbers</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-400">Annual spending</div><div className="text-white">Under $40,000</div>
              <div className="text-gray-400">Portfolio needed (4% rule)</div><div className="text-white">$500k — $1,000,000</div>
              <div className="text-gray-400">Typical timeline</div><div className="text-white">8-15 years (high savings rate)</div>
              <div className="text-gray-400">Lifestyle</div><div className="text-white">Frugal, minimal discretionary spending</div>
              <div className="text-gray-400">Risk level</div><div className="text-white">Higher — little margin for error</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">What Is Fat FIRE?</h2>
          <p className="text-gray-400 leading-relaxed">Fat FIRE means reaching financial independence with enough wealth to maintain a comfortable or even luxurious lifestyle indefinitely. There is no official threshold, but Fat FIRE is generally considered annual spending above $100,000 — meaning a portfolio of $2,500,000 or more at the 4% rule.</p>
          <p className="text-gray-400 leading-relaxed">Fat FIRE practitioners are typically high earners — tech workers, doctors, lawyers, entrepreneurs — who have both the income to save aggressively and the desire to maintain their current lifestyle in retirement. The appeal is simple: you can retire early AND keep traveling business class, eating at nice restaurants, and pursuing expensive hobbies. The trade-off is a much longer accumulation phase — often 20-30 years — or very high income required to compress the timeline.</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-orange-400 mb-3">Fat FIRE Numbers</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-400">Annual spending</div><div className="text-white">$100,000+</div>
              <div className="text-gray-400">Portfolio needed (4% rule)</div><div className="text-white">$2,500,000+</div>
              <div className="text-gray-400">Typical timeline</div><div className="text-white">15-30 years (high income required)</div>
              <div className="text-gray-400">Lifestyle</div><div className="text-white">Comfortable to luxurious</div>
              <div className="text-gray-400">Risk level</div><div className="text-white">Lower — large buffer for expenses</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">Fat FIRE vs Lean FIRE: Full Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 pr-4 text-gray-400 font-medium">Factor</th>
                  <th className="text-left py-3 pr-4 text-blue-400 font-medium">Lean FIRE</th>
                  <th className="text-left py-3 text-orange-400 font-medium">Fat FIRE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Annual spending</td>
                  <td className="py-3 pr-4 text-white">Under $40k</td>
                  <td className="py-3 text-white">$100k+</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Portfolio needed</td>
                  <td className="py-3 pr-4 text-white">$500k — $1M</td>
                  <td className="py-3 text-white">$2.5M+</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Timeline (median income)</td>
                  <td className="py-3 pr-4 text-white">8-15 years</td>
                  <td className="py-3 text-white">20-30 years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Income required</td>
                  <td className="py-3 pr-4 text-white">Any income with high savings rate</td>
                  <td className="py-3 text-white">High income typically required</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Lifestyle flexibility</td>
                  <td className="py-3 pr-4 text-white">Very limited</td>
                  <td className="py-3 text-white">High</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Risk of running out</td>
                  <td className="py-3 pr-4 text-white">Higher</td>
                  <td className="py-3 text-white">Lower</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 text-gray-400">Healthcare buffer</td>
                  <td className="py-3 pr-4 text-white">Minimal</td>
                  <td className="py-3 text-white">Comfortable</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-400">Best for</td>
                  <td className="py-3 pr-4 text-white">Frugal minimalists, low COL areas</td>
                  <td className="py-3 text-white">High earners, lifestyle maintainers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold">What About Regular FIRE and Chubby FIRE?</h2>
          <p className="text-gray-400 leading-relaxed">Lean FIRE and Fat FIRE are the extremes. Between them sit two other common categories. Regular FIRE (sometimes called just "FIRE") typically means $40,000-$80,000/year in retirement spending and a portfolio of $1,000,000-$2,000,000. This is the most common FIRE target and what most r/financialindependence discussions revolve around.</p>
          <p className="text-gray-400 leading-relaxed">Chubby FIRE sits between regular FIRE and Fat FIRE — typically $80,000-$150,000/year and a portfolio of $2,000,000-$4,000,000. Chubby FIRE is popular among dual-income professional couples who want comfort and security without requiring the extreme income of true Fat FIRE.</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-orange-400 mb-4">The Full FIRE Spectrum</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-blue-400 font-medium">Lean FIRE</span>
                <span className="text-gray-400">Under $40k/year → Portfolio under $1M</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-white font-medium">Regular FIRE</span>
                <span className="text-gray-400">$40k-$80k/year → $1M-$2M portfolio</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-yellow-400 font-medium">Chubby FIRE</span>
                <span className="text-gray-400">$80k-$150k/year → $2M-$4M portfolio</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-400 font-medium">Fat FIRE</span>
                <span className="text-gray-400">$150k+/year → $4M+ portfolio</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">The Hidden Risk of Lean FIRE</h2>
          <p className="text-gray-400 leading-relaxed">Lean FIRE carries risks that are easy to underestimate. Living on $30,000/year sounds manageable until an unexpected medical bill, a car breakdown, or a home repair eats three months of your budget. At a 4% withdrawal rate on $750,000, your annual income is $30,000 — and you have almost no buffer for anything beyond planned expenses.</p>
          <p className="text-gray-400 leading-relaxed">Sequence of returns risk is also more dangerous for Lean FIRE practitioners. A 30% portfolio drop in year two of retirement cuts $750,000 to $525,000 — and suddenly your 4% withdrawal rate is effectively 5.7%. Many Lean FIRE practitioners plan to do some part-time work (Barista FIRE) during market downturns to avoid drawing down the portfolio at depressed prices.</p>

          <h2 className="text-2xl font-bold">Who Is Fat FIRE Right For?</h2>
          <p className="text-gray-400 leading-relaxed">Fat FIRE makes the most sense for high earners who do not want to dramatically change their lifestyle in retirement, people with significant fixed expenses (large homes, children's education, expensive hobbies), those who want maximum security and flexibility, and anyone planning to live in a high cost-of-living area in retirement.</p>
          <p className="text-gray-400 leading-relaxed">Fat FIRE is also significantly more forgiving of market volatility, unexpected expenses, and lifestyle inflation in retirement. With $3,000,000+ in a portfolio, a 30% market crash is painful but not catastrophic — you still have $2,100,000 and a manageable withdrawal rate.</p>

          <h2 className="text-2xl font-bold">Who Is Lean FIRE Right For?</h2>
          <p className="text-gray-400 leading-relaxed">Lean FIRE makes the most sense for people who genuinely prefer minimal lifestyles (not just pretend to for financial reasons), those willing to live in low cost-of-living areas or abroad, people with geographic flexibility who can move to optimize cost of living, and those who plan to supplement with some part-time income or who have other income sources (rental income, partner's income, etc.).</p>
          <p className="text-gray-400 leading-relaxed">The key question to ask yourself: if your portfolio dropped 30% the year after you retired, would you be comfortable cutting spending significantly or returning to part-time work? If yes, Lean FIRE may work for you. If no, you probably need a larger buffer — Regular FIRE or above.</p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much do you need for Lean FIRE?</h4>
                <p className="text-gray-400 text-sm">Lean FIRE typically requires $500,000-$1,000,000 depending on your annual spending. At the 4% rule, $750,000 supports $30,000/year and $1,000,000 supports $40,000/year. Many Lean FIRE practitioners also plan for some part-time income to reduce portfolio stress.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much do you need for Fat FIRE?</h4>
                <p className="text-gray-400 text-sm">Fat FIRE generally requires $2,500,000-$5,000,000 or more depending on your lifestyle. At the 4% rule, $2,500,000 supports $100,000/year and $5,000,000 supports $200,000/year. Many Fat FIRE practitioners use a more conservative 3% withdrawal rate for extra security.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is Lean FIRE too risky?</h4>
                <p className="text-gray-400 text-sm">It carries more risk than higher FIRE numbers, but it is not inherently too risky. The key risk factors are healthcare costs (especially in the US), sequence of returns risk in early retirement, and lifestyle creep. Many Lean FIRE practitioners mitigate these by maintaining some part-time income, living in low-cost areas, or keeping a flexible spending approach.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the difference between Lean FIRE and Barista FIRE?</h4>
                <p className="text-gray-400 text-sm">Lean FIRE means fully retired on a minimal budget with no earned income. Barista FIRE means semi-retired with a small portfolio supplemented by part-time work — often specifically for healthcare benefits. Some Lean FIRE practitioners effectively become Barista FIRE practitioners during market downturns.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Can I start with Lean FIRE and upgrade to Fat FIRE later?</h4>
                <p className="text-gray-400 text-sm">Yes — this is actually a common progression. Some people reach Lean FIRE early, retire or semi-retire, and then continue building their portfolio through part-time work or passive income until they reach Fat FIRE numbers. Others use Lean FIRE as a bridge to give themselves more time and freedom while their portfolio grows.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Calculate Your FIRE Number</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/fire-gap" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Gap Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/savings-rate" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Savings Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/safe-withdrawal-rate" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Safe Withdrawal Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/blog/coast-fire-vs-barista-fire" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE vs Barista FIRE</span>
                <span className="text-orange-400">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
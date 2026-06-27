"use client"
import { useState } from "react"
import Link from "next/link"

type Result = {
  fireNumber: number
  projected: number
  gap: number
  onTrack: boolean
  extraMonthly: number
  yearsToRetire: number
}

export default function RetireAt40Calculator() {
  const [currentAge, setCurrentAge] = useState(25)
  const [currentSavings, setCurrentSavings] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(40000)
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState("")

  const targetAge = 40
  const withdrawalRate = 0.04

  function calculate() {
    setError("")
    if (currentAge >= 40) {
      setError("This calculator is designed for people under 40. Try our Retire at 45 or Retire at 50 calculator.")
      return
    }
    const fireNumber = annualExpenses / withdrawalRate
    const yearsToRetire = targetAge - currentAge
    const monthlyRate = annualReturn / 100 / 12
    const months = yearsToRetire * 12
    let projected = currentSavings
    for (let i = 0; i < months; i++) {
      projected = projected * (1 + monthlyRate) + monthlyContribution
    }
    const gap = fireNumber - projected
    const onTrack = projected >= fireNumber
    let extraMonthly = 0
    if (gap > 0) {
      if (monthlyRate === 0) {
        extraMonthly = gap / months
      } else {
        extraMonthly = (gap * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
      }
    }
    setResult({ fireNumber, projected, gap, onTrack, extraMonthly, yearsToRetire })
    setCalculated(true)
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">

        <div className="mb-10">
          <Link href="/tools" className="text-orange-400 text-sm hover:underline">← Back to Calculators</Link>
          <h1 className="text-4xl font-bold mt-4 mb-3">Retire at 40 Calculator</h1>
          <p className="text-gray-300 text-lg">Find out exactly how much you need to retire at 40 — and whether you are on track to get there.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Current Age</label>
            <input type="number" value={currentAge} min={18} max={39}
              onChange={e => setCurrentAge(Number(e.target.value))}
              className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Current Savings ($)</label>
            <input type="number" value={currentSavings} min={0}
              onChange={e => setCurrentSavings(Number(e.target.value))}
              className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} min={0}
              onChange={e => setMonthlyContribution(Number(e.target.value))}
              className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Expected Annual Return (%)</label>
            <input type="number" value={annualReturn} min={0} max={20}
              onChange={e => setAnnualReturn(Number(e.target.value))}
              className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Annual Expenses in Retirement ($)</label>
            <input type="number" value={annualExpenses} min={0}
              onChange={e => setAnnualExpenses(Number(e.target.value))}
              className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-700 rounded-xl p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Calculate My Retire at 40 Number
          </button>
        </div>

        {calculated && result && (
          <div className="mt-8 bg-gray-900 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Your Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">FIRE Number</p>
                <p className="text-2xl font-bold text-orange-400">${result.fireNumber.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">Projected at 40</p>
                <p className="text-2xl font-bold text-white">${result.projected.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-red-900/40 border border-red-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to retire at 40!</p>
              ) : (
                <div>
                  <p className="text-red-400 font-semibold text-lg mb-2">You need ${Math.abs(result.gap).toLocaleString("en-US", { maximumFractionDigits: 0 })} more</p>
                  <p className="text-gray-300 text-sm">Save an extra ${result.extraMonthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}/month to reach your goal</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">How to Retire at 40: The Complete Guide</h2>
          <p className="text-gray-300 leading-relaxed">Retiring at 40 is one of the most ambitious goals in the FIRE movement — Financial Independence, Retire Early. It requires aggressive saving, smart investing, and a clear plan starting in your 20s. This calculator gives you the exact number you need and tells you whether your current savings rate will get you there.</p>

          <h3 className="text-xl font-semibold">What Is the FIRE Number for Retiring at 40?</h3>
          <p className="text-gray-300 leading-relaxed">Your FIRE number is the total portfolio value you need to safely withdraw from indefinitely. Based on the 4% rule — backed by the Trinity Study — you need 25 times your annual expenses. If you spend $40,000 per year, your target is $1,000,000. If you spend $60,000, you need $1,500,000.</p>
          <p className="text-gray-300 leading-relaxed">The 4% rule states that you can withdraw 4% of your portfolio annually, adjusted for inflation, and have a very high probability of your money lasting 30+ years. For a 40-year retirement horizon (retiring at 40 and living to 80+), many FIRE experts recommend a slightly more conservative 3.5% withdrawal rate — meaning 28x your expenses.</p>

          <h3 className="text-xl font-semibold">What Savings Rate Do You Need?</h3>
          <p className="text-gray-300 leading-relaxed">The math is straightforward but demanding. To retire at 40 starting from zero at age 20, assuming 7% annual returns, you need to save approximately 50-60% of your take-home income. Most people pursuing this goal combine a high income with very low lifestyle inflation — living on $30,000-$40,000 while earning $80,000-$150,000+.</p>

          <div className="bg-gray-900 rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold text-orange-400">Quick Reference: Savings Rate vs Years to FIRE</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-300">10% savings rate</div><div className="text-white">~43 years</div>
              <div className="text-gray-300">25% savings rate</div><div className="text-white">~32 years</div>
              <div className="text-gray-300">40% savings rate</div><div className="text-white">~22 years</div>
              <div className="text-gray-300">50% savings rate</div><div className="text-white">~17 years</div>
              <div className="text-gray-300">60% savings rate</div><div className="text-white">~12 years</div>
              <div className="text-gray-300">70% savings rate</div><div className="text-white">~9 years</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold">Is Retiring at 40 Realistic?</h3>
          <p className="text-gray-300 leading-relaxed">Yes — but it requires either a high income, very low expenses, or both. The people who successfully retire at 40 typically share a few traits: they started investing early (teens or early 20s), they kept lifestyle inflation low despite income growth, they invested primarily in low-cost index funds like VTSAX or VTI, and they maximized tax-advantaged accounts like 401(k), Roth IRA, and HSA.</p>
          <p className="text-gray-300 leading-relaxed">It is also worth noting that many people who "retire" at 40 do not stop working entirely. Barista FIRE (part-time work covering basic expenses) and Coast FIRE (portfolio large enough to grow to full FIRE without new contributions) are popular middle-ground strategies.</p>

          <h3 className="text-xl font-semibold">The Roth Conversion Ladder: Accessing Retirement Funds Early</h3>
          <p className="text-gray-300 leading-relaxed">One major challenge of retiring at 40 is accessing money in tax-advantaged accounts without paying the 10% early withdrawal penalty. The Roth conversion ladder is the standard solution: you convert traditional 401(k) or IRA funds to a Roth IRA each year, wait 5 years, and withdraw penalty-free. This requires having 5 years of living expenses in taxable brokerage accounts to bridge the gap.</p>

          <h3 className="text-xl font-semibold">Sequence of Returns Risk at 40</h3>
          <p className="text-gray-300 leading-relaxed">Retiring at 40 means a potentially 50-60 year retirement — far longer than the Trinity Study modeled. Sequence of returns risk (a major market crash in the first years of retirement) is a serious concern. Strategies to mitigate this include keeping 1-2 years of expenses in cash, a bond tent during the early retirement years, and flexible spending (reducing withdrawals during downturns).</p>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Can you retire at 40 with $1 million?</h4>
                <p className="text-gray-300 text-sm">Yes, if your annual expenses are $40,000 or less. The 4% rule allows you to withdraw $40,000 per year from a $1,000,000 portfolio. However, given the length of a potential 50-year retirement, many advisors suggest targeting $1.25M-$1.5M for extra safety margin.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much do I need to save per month to retire at 40?</h4>
                <p className="text-gray-300 text-sm">It depends on your starting age and expenses. A 25-year-old starting from zero targeting $1,000,000 at 40 needs to save approximately $3,500/month at 7% annual returns. Use the calculator above to get your personalized number.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What investments should I use to retire at 40?</h4>
                <p className="text-gray-300 text-sm">Most FIRE practitioners use low-cost index funds: VTSAX or VTI for US stocks, VXUS for international diversification, and BND for bonds as retirement approaches. The goal is maximum diversification at minimum cost — expense ratios below 0.1%.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What happens to healthcare if I retire at 40?</h4>
                <p className="text-gray-300 text-sm">Healthcare is one of the biggest challenges for early retirees in the US. Options include ACA marketplace plans (often subsidized at low income levels), a health-sharing ministry, or part-time work with benefits. Budget $500-$1,500/month for a family depending on your situation.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is the 4% rule safe for a 50-year retirement?</h4>
                <p className="text-gray-300 text-sm">Historical data suggests yes, but with less certainty than for 30 years. Many early retirees use a 3.5% or 3.25% withdrawal rate for longer horizons, or plan to earn some income in early retirement to reduce portfolio pressure.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/retire-at-45-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 45 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/retire-at-50-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 50 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
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
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
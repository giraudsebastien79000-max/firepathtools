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

export default function RetireAt45Calculator() {
  const [currentAge, setCurrentAge] = useState(28)
  const [currentSavings, setCurrentSavings] = useState(15000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(45000)
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState("")

  const targetAge = 45
  const withdrawalRate = 0.04

  function calculate() {
    setError("")
    if (currentAge >= 45) {
      setError("This calculator is designed for people under 45. Try our Retire at 50 calculator.")
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
          <h1 className="text-4xl font-bold mt-4 mb-3">Retire at 45 Calculator</h1>
          <p className="text-gray-300 text-lg">Find out exactly how much you need to retire at 45 — and whether you are on track to get there.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Current Age</label>
            <input type="number" value={currentAge} min={18} max={44}
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
            Calculate My Retire at 45 Number
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
                <p className="text-gray-300 text-sm">Projected at 45</p>
                <p className="text-2xl font-bold text-white">${result.projected.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-red-900/40 border border-red-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to retire at 45!</p>
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
          <h2 className="text-3xl font-bold">How to Retire at 45: The Complete Guide</h2>
          <p className="text-gray-300 leading-relaxed">Retiring at 45 is one of the most popular FIRE targets — ambitious enough to be exciting, realistic enough to be achievable for a wide range of income levels. With 20-25 years of working life, you have more room than the retire-at-40 crowd, but you still need a serious savings rate and a long-term investment strategy.</p>

          <h3 className="text-xl font-semibold">What Is the FIRE Number for Retiring at 45?</h3>
          <p className="text-gray-300 leading-relaxed">Using the 4% rule, your FIRE number is 25x your annual expenses. Spending $45,000 per year means a target of $1,125,000. Spending $60,000 means $1,500,000. For a 45-year retirement horizon, some FIRE planners use a 3.5% withdrawal rate (28x expenses) for additional safety margin.</p>

          <h3 className="text-xl font-semibold">What Savings Rate Do You Need to Retire at 45?</h3>
          <p className="text-gray-300 leading-relaxed">Starting at age 25 with nothing, targeting $1,000,000 by 45, at 7% annual returns, you need to save roughly $2,100/month. That is approximately a 35-45% savings rate for most earners — demanding but far more achievable than retiring at 40. The key is starting early and staying consistent through market downturns.</p>

          <div className="bg-gray-900 rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold text-orange-400">Retire at 45: Key Milestones by Age</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-300">Age 25</div><div className="text-white">Start investing, maximize 401(k) match</div>
              <div className="text-gray-300">Age 30</div><div className="text-white">Target $100k-$150k saved</div>
              <div className="text-gray-300">Age 35</div><div className="text-white">Target $300k-$400k saved</div>
              <div className="text-gray-300">Age 40</div><div className="text-white">Target $600k-$800k saved</div>
              <div className="text-gray-300">Age 45</div><div className="text-white">FIRE number reached — retire!</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold">Retiring at 45 vs Retiring at 40</h3>
          <p className="text-gray-300 leading-relaxed">The extra 5 years make a significant difference. At 7% annual returns, money roughly doubles every 10 years. Starting at 25, by 45 you have 20 years of compounding versus 15 years for the age-40 target. This means you need roughly 40% less in monthly contributions to reach the same portfolio value — making it accessible to a much wider group of people.</p>

          <h3 className="text-xl font-semibold">Tax Strategy for Early Retirement at 45</h3>
          <p className="text-gray-300 leading-relaxed">At 45, you still face the challenge of accessing tax-advantaged retirement accounts before the standard age of 59½. The Roth conversion ladder (converting traditional IRA funds to Roth, then withdrawing after 5 years) is the most common strategy. Rule 72(t) SEPP (Substantially Equal Periodic Payments) is another option, though less flexible. Having a substantial taxable brokerage account bridges the gap in early years.</p>

          <h3 className="text-xl font-semibold">Healthcare Planning When Retiring at 45</h3>
          <p className="text-gray-300 leading-relaxed">Healthcare is typically the largest unexpected expense for early retirees in the US. At 45, you have 20 years before Medicare eligibility at 65. Options include ACA marketplace plans (income-based subsidies can be significant at low withdrawal levels), COBRA from your last employer (expensive but temporary), or part-time work with benefits. Budget $6,000-$18,000 per year for a family.</p>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much do I need to retire at 45?</h4>
                <p className="text-gray-300 text-sm">Using the 4% rule, you need 25x your annual expenses. If you spend $50,000/year, your target is $1,250,000. For a longer retirement horizon, many people target 28x expenses ($1,400,000 for $50k/year spending) as a safety buffer.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Can I retire at 45 with $2 million?</h4>
                <p className="text-gray-300 text-sm">Yes — $2,000,000 supports $80,000/year in spending at the 4% rule. This is a comfortable retirement in most US cities and an excellent income in lower cost-of-living areas or abroad. With a 3.5% withdrawal rate for safety, $2M supports $70,000/year.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the best investment strategy to retire at 45?</h4>
                <p className="text-gray-300 text-sm">The FIRE community consensus is simple: maximize contributions to tax-advantaged accounts (401k, Roth IRA, HSA), then invest the rest in a taxable brokerage. Use low-cost index funds — total market (VTI/VTSAX) and international (VXUS) — with expense ratios under 0.1%. Avoid market timing and stay invested through downturns.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is retiring at 45 too early?</h4>
                <p className="text-gray-300 text-sm">Not financially — the math works if you hit your number. The bigger question is purpose and identity. Many people who retire at 45 find that they want structure, social connection, or a sense of contribution. Barista FIRE (part-time meaningful work) or passion projects solve this while also reducing portfolio withdrawal pressure.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How does Social Security factor in when retiring at 45?</h4>
                <p className="text-gray-300 text-sm">If you retire at 45 with minimal additional earned income, your Social Security benefit will be reduced compared to working until 62 or 67. However, many early retirees plan conservatively and treat any Social Security income as a bonus. Check your Social Security statement at ssa.gov to see your projected benefit.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/retire-at-40-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 40 Calculator</span>
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
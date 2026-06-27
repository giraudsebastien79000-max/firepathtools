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

export default function RetireAt50Calculator() {
  const [currentAge, setCurrentAge] = useState(32)
  const [currentSavings, setCurrentSavings] = useState(20000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(50000)
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState("")

  const targetAge = 50
  const withdrawalRate = 0.04

  function calculate() {
    setError("")
    if (currentAge >= 50) {
      setError("This calculator is designed for people under 50. Try our FIRE Number or Retirement Age calculator.")
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
          <h1 className="text-4xl font-bold mt-4 mb-3">Retire at 50 Calculator</h1>
          <p className="text-gray-400 text-lg">Find out exactly how much you need to retire at 50 — and whether you are on track to get there.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Age</label>
            <input type="number" value={currentAge} min={18} max={49}
              onChange={e => setCurrentAge(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Savings ($)</label>
            <input type="number" value={currentSavings} min={0}
              onChange={e => setCurrentSavings(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} min={0}
              onChange={e => setMonthlyContribution(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Expected Annual Return (%)</label>
            <input type="number" value={annualReturn} min={0} max={20}
              onChange={e => setAnnualReturn(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Annual Expenses in Retirement ($)</label>
            <input type="number" value={annualExpenses} min={0}
              onChange={e => setAnnualExpenses(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-700 rounded-xl p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Calculate My Retire at 50 Number
          </button>
        </div>

        {calculated && result && (
          <div className="mt-8 bg-gray-900 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Your Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">FIRE Number</p>
                <p className="text-2xl font-bold text-orange-400">${result.fireNumber.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Projected at 50</p>
                <p className="text-2xl font-bold text-white">${result.projected.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-red-900/40 border border-red-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to retire at 50!</p>
              ) : (
                <div>
                  <p className="text-red-400 font-semibold text-lg mb-2">You need ${Math.abs(result.gap).toLocaleString("en-US", { maximumFractionDigits: 0 })} more</p>
                  <p className="text-gray-400 text-sm">Save an extra ${result.extraMonthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}/month to reach your goal</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">How to Retire at 50: The Complete Guide</h2>
          <p className="text-gray-400 leading-relaxed">Retiring at 50 is the most achievable early retirement target for most people — and still gives you decades of freedom before traditional retirement age. With 25-30 years of working life, compound interest does heavy lifting, and a moderate savings rate of 25-35% can get you there.</p>

          <h3 className="text-xl font-semibold">What Is the FIRE Number for Retiring at 50?</h3>
          <p className="text-gray-400 leading-relaxed">Using the 4% rule, you need 25x your annual expenses. Spending $50,000/year means a target of $1,250,000. Spending $70,000/year means $1,750,000. Because a retirement starting at 50 could last 40+ years, many financial planners recommend targeting 3.5% withdrawal rate — meaning 28-30x your annual expenses for extra security.</p>

          <h3 className="text-xl font-semibold">What Savings Rate Gets You to 50?</h3>
          <p className="text-gray-400 leading-relaxed">Starting at 25 with nothing, targeting $1,250,000 by 50, at 7% annual returns, you need to save roughly $1,600/month — about a 25-30% savings rate for median earners. This is ambitious but genuinely achievable without extreme frugality. The key advantage over retiring at 40 or 45 is that you have 25 years of compounding working for you.</p>

          <div className="bg-gray-900 rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold text-orange-400">Retire at 50: Savings Milestones</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-400">Age 25</div><div className="text-white">Start — maximize employer 401(k) match</div>
              <div className="text-gray-400">Age 30</div><div className="text-white">Target $80k-$120k saved</div>
              <div className="text-gray-400">Age 35</div><div className="text-white">Target $200k-$300k saved</div>
              <div className="text-gray-400">Age 40</div><div className="text-white">Target $400k-$600k saved</div>
              <div className="text-gray-400">Age 45</div><div className="text-white">Target $700k-$950k saved</div>
              <div className="text-gray-400">Age 50</div><div className="text-white">FIRE number reached — retire!</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold">The Rule of 55: A Key Advantage for Age-50 Retirees</h3>
          <p className="text-gray-400 leading-relaxed">One major advantage of retiring at 50 versus 40 or 45 is the Rule of 55. If you leave your job in or after the year you turn 55, you can withdraw from your current employer 401(k) without the 10% early withdrawal penalty. This gives you penalty-free access to a major account much sooner than the Roth conversion ladder requires. Combined with a taxable brokerage and Roth IRA contributions, this makes age 50 a particularly tax-efficient retirement target.</p>

          <h3 className="text-xl font-semibold">Catch-Up Contributions After 50</h3>
          <p className="text-gray-400 leading-relaxed">If you are currently in your 40s planning for a 50 retirement, note that the IRS allows catch-up contributions starting at age 50: an extra $7,500 to your 401(k) and an extra $1,000 to your IRA annually (2024 figures). This accelerates the final push to your FIRE number significantly.</p>

          <h3 className="text-xl font-semibold">Healthcare: The 15-Year Bridge to Medicare</h3>
          <p className="text-gray-400 leading-relaxed">Retiring at 50 means 15 years before Medicare at 65. Healthcare costs are the most significant planning variable for early retirees in the US. ACA marketplace plans with income-based subsidies are the most common solution — at low withdrawal rates, your effective income can be low enough to qualify for significant subsidies. Budget $500-$1,200/month per person conservatively, and consider this a core part of your FIRE number planning.</p>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much money do I need to retire at 50?</h4>
                <p className="text-gray-400 text-sm">Using the 4% rule, you need 25x your annual expenses. For $50,000/year spending, that is $1,250,000. For $60,000/year, you need $1,500,000. Many people planning a 40-year retirement target 28x expenses for extra safety, meaning $1,400,000 for $50k spending.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Can I retire at 50 with $1 million?</h4>
                <p className="text-gray-400 text-sm">Yes, if your annual spending is $40,000 or less. At the 4% rule, $1,000,000 supports $40,000/year. This is very comfortable in low cost-of-living areas and many countries outside the US. If you spend more, you need a larger portfolio or plan to earn some income in early retirement.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the difference between retiring at 50 vs 65?</h4>
                <p className="text-gray-400 text-sm">Retiring at 50 gives you 15 extra years of freedom — potentially the best years of your health and energy. The tradeoff is a larger required portfolio (40-year vs 25-year retirement), no access to Medicare until 65, no Social Security until 62 at earliest, and more years of investment risk to manage.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is 50 too old to start planning for early retirement?</h4>
                <p className="text-gray-400 text-sm">If you are already 45-49, retiring at 50 may be very tight unless you have significant savings. However, even aggressive saving in your late 40s can dramatically improve your retirement timeline. Use our calculator to see your realistic target date based on your current situation.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How does retiring at 50 affect Social Security?</h4>
                <p className="text-gray-400 text-sm">Retiring at 50 with no further earned income means your Social Security benefit will be lower than if you worked until 62 or 67. However, you can still claim at 62 (reduced benefit) or 67 (full benefit) or 70 (maximum benefit). Most FIRE planners treat Social Security as a bonus and do not rely on it in their core calculations.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/retire-at-40-calculator" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 40 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/retire-at-45-calculator" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 45 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
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
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
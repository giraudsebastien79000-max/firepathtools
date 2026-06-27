"use client"
import { useState } from "react"
import Link from "next/link"

type Result = {
  fireNumber: number
  currentProjected: number
  gap: number
  yearsAtCurrent: number
  scenarioExpenses: number
  scenarioSavings: number
  scenarioReturn: number
  yearsExpenses: number
  yearsSavings: number
  yearsReturn: number
}

export default function FireGapCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [currentSavings, setCurrentSavings] = useState(25000)
  const [monthlyIncome, setMonthlyIncome] = useState(5000)
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState("")

  const SWR = 0.04

  function projectYears(savings: number, monthly: number, rate: number, target: number): number {
    const monthlyRate = rate / 100 / 12
    let portfolio = savings
    let months = 0
    while (portfolio < target && months < 1200) {
      portfolio = portfolio * (1 + monthlyRate) + monthly
      months++
    }
    return months < 1200 ? Math.round(months / 12) : 999
  }

  function calculate() {
    setError("")
    const monthlySavings = monthlyIncome - monthlyExpenses
    if (monthlySavings <= 0) {
      setError("Your expenses exceed your income. You need a positive savings amount to reach FIRE.")
      return
    }
    if (monthlyIncome <= 0 || annualReturn < 0) {
      setError("Please enter valid values.")
      return
    }
    const fireNumber = (monthlyExpenses * 12) / SWR
    const yearsAtCurrent = projectYears(currentSavings, monthlySavings, annualReturn, fireNumber)
    const currentProjected = (() => {
      const monthlyRate = annualReturn / 100 / 12
      let p = currentSavings
      for (let i = 0; i < yearsAtCurrent * 12; i++) {
        p = p * (1 + monthlyRate) + monthlySavings
      }
      return p
    })()
    const gap = Math.max(0, fireNumber - currentProjected)

    // Scenario 1: reduce expenses by $300/month
    const newExpenses = monthlyExpenses - 300
    const newFireNumber1 = (newExpenses * 12) / SWR
    const yearsExpenses = projectYears(currentSavings, monthlyIncome - newExpenses, annualReturn, newFireNumber1)

    // Scenario 2: increase savings by $300/month
    const yearsSavings = projectYears(currentSavings, monthlySavings + 300, annualReturn, fireNumber)

    // Scenario 3: increase return by 1%
    const yearsReturn = projectYears(currentSavings, monthlySavings, annualReturn + 1, fireNumber)

    setResult({
      fireNumber,
      currentProjected,
      gap,
      yearsAtCurrent,
      scenarioExpenses: yearsAtCurrent - yearsExpenses,
      scenarioSavings: yearsAtCurrent - yearsSavings,
      scenarioReturn: yearsAtCurrent - yearsReturn,
      yearsExpenses,
      yearsSavings,
      yearsReturn,
    })
  }

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US")

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">

        <div className="mb-10">
          <Link href="/tools" className="text-orange-400 text-sm hover:underline">← Back to Calculators</Link>
          <h1 className="text-4xl font-bold mt-4 mb-3">FIRE Gap Calculator</h1>
          <p className="text-gray-300 text-lg">Find out exactly how far you are from financial independence — and which lever closes the gap fastest.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Current Age</label>
              <input type="number" value={currentAge} min={18} max={70}
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
              <label className="block text-sm text-gray-300 mb-2">Monthly Income ($)</label>
              <input type="number" value={monthlyIncome} min={0}
                onChange={e => setMonthlyIncome(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Monthly Expenses ($)</label>
              <input type="number" value={monthlyExpenses} min={0}
                onChange={e => setMonthlyExpenses(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Expected Annual Return (%)</label>
              <input type="number" value={annualReturn} min={0} max={20}
                onChange={e => setAnnualReturn(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-700 rounded-xl p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Calculate My FIRE Gap
          </button>
        </div>

        {result && (
          <div className="mt-8 space-y-6">

            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Your FIRE Gap</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">FIRE Number</p>
                  <p className="text-2xl font-bold text-orange-400">{fmt(result.fireNumber)}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">Years to FIRE</p>
                  <p className="text-2xl font-bold text-white">{result.yearsAtCurrent === 999 ? "100+" : result.yearsAtCurrent} yrs</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">FIRE Age</p>
                  <p className="text-2xl font-bold text-white">{result.yearsAtCurrent === 999 ? "—" : currentAge + result.yearsAtCurrent}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">Current Gap</p>
                  <p className={`text-2xl font-bold ${result.gap === 0 ? "text-green-400" : "text-red-400"}`}>
                    {result.gap === 0 ? "On track!" : fmt(result.gap)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-2">Which Lever Closes Your Gap Fastest?</h2>
              <p className="text-gray-300 text-sm mb-6">See how small changes today dramatically change your FIRE timeline.</p>
              <div className="space-y-4">

                <div className="bg-slate-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-white">Reduce expenses by $300/month</p>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${result.scenarioExpenses > 0 ? "bg-green-900/50 text-green-400" : "bg-gray-700 text-gray-300"}`}>
                      {result.scenarioExpenses > 0 ? `-${result.scenarioExpenses} years` : "No change"}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">New FIRE timeline: {result.yearsExpenses === 999 ? "100+" : result.yearsExpenses} years → FIRE at {result.yearsExpenses === 999 ? "—" : currentAge + result.yearsExpenses}</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-white">Save $300/month more</p>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${result.scenarioSavings > 0 ? "bg-green-900/50 text-green-400" : "bg-gray-700 text-gray-300"}`}>
                      {result.scenarioSavings > 0 ? `-${result.scenarioSavings} years` : "No change"}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">New FIRE timeline: {result.yearsSavings === 999 ? "100+" : result.yearsSavings} years → FIRE at {result.yearsSavings === 999 ? "—" : currentAge + result.yearsSavings}</p>
                </div>

                <div className="bg-slate-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-white">Increase return by 1%</p>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${result.scenarioReturn > 0 ? "bg-green-900/50 text-green-400" : "bg-gray-700 text-gray-300"}`}>
                      {result.scenarioReturn > 0 ? `-${result.scenarioReturn} years` : "No change"}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">New FIRE timeline: {result.yearsReturn === 999 ? "100+" : result.yearsReturn} years → FIRE at {result.yearsReturn === 999 ? "—" : currentAge + result.yearsReturn}</p>
                </div>

              </div>
            </div>

          </div>
        )}

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">What Is the FIRE Gap?</h2>
          <p className="text-gray-300 leading-relaxed">Your FIRE gap is the difference between where your portfolio will be at your current savings rate and the amount you actually need to retire early. Most people know their FIRE number — but very few know their FIRE gap, or which single change would close it fastest.</p>

          <h3 className="text-xl font-semibold">The Three Levers That Close the Gap</h3>
          <p className="text-gray-300 leading-relaxed">Every FIRE gap comes down to three variables: how much you spend (which determines your FIRE number), how much you save (which determines how fast your portfolio grows), and what return you earn (which determines compounding power). The calculator above shows you exactly how much each lever moves your timeline — because the answer is different for everyone.</p>

          <h3 className="text-xl font-semibold">Why Expenses Are the Most Powerful Lever</h3>
          <p className="text-gray-300 leading-relaxed">Reducing expenses does something double: it increases your monthly savings AND lowers your FIRE number simultaneously. Spending $300 less per month does not just add $300 to your portfolio — it also reduces your FIRE target by $90,000 (at the 4% rule). This double effect makes expense reduction the single most powerful lever in the FIRE equation, especially in the early years.</p>

          <h3 className="text-xl font-semibold">The Cost of Waiting</h3>
          <p className="text-gray-300 leading-relaxed">One year of delay at age 25 can cost you $100,000-$200,000 in final portfolio value due to lost compounding time. The FIRE gap is not just about money — it is about time. Every month you close the gap is a month added back to your free life. Use this calculator regularly to track your progress and identify which changes to make first.</p>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/savings-rate" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Savings Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/time-to-fire" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Time to FIRE Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
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
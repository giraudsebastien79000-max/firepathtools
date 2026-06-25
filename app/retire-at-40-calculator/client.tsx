"use client"
import { useState } from "react"
import Link from "next/link"

export default function RetireAt40Calculator() {
  const [currentAge, setCurrentAge] = useState(25)
  const [currentSavings, setCurrentSavings] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(40000)
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<any>(null)

  const targetAge = 40
  const withdrawalRate = 0.04

  function calculate() {
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
    const extraMonthly = gap > 0 ? (gap * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1) : 0
    setResult({ fireNumber, projected, gap, onTrack, extraMonthly, yearsToRetire })
    setCalculated(true)
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <Link href="/tools" className="text-orange-400 text-sm hover:underline">Back to Calculators</Link>
          <h1 className="text-4xl font-bold mt-4 mb-3">Retire at 40 Calculator</h1>
          <p className="text-gray-400 text-lg">Find out exactly how much you need to retire at 40 and whether you are on track.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Age</label>
            <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Savings ($)</label>
            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Expected Annual Return (%)</label>
            <input type="number" value={annualReturn} onChange={e => setAnnualReturn(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Annual Expenses in Retirement ($)</label>
            <input type="number" value={annualExpenses} onChange={e => setAnnualExpenses(Number(e.target.value))}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none" />
          </div>
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Calculate
          </button>
        </div>

        {calculated && result && (
          <div className="mt-8 bg-gray-900 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Your Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">FIRE Number</p>
                <p className="text-2xl font-bold text-orange-400">${result.fireNumber.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Projected at 40</p>
                <p className="text-2xl font-bold text-white">${result.projected.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-red-900/40 border border-red-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to retire at 40!</p>
              ) : (
                <div>
                  <p className="text-red-400 font-semibold text-lg mb-2">You need ${Math.abs(result.gap).toLocaleString("en-US", {maximumFractionDigits: 0})} more</p>
                  <p className="text-gray-400 text-sm">Save an extra ${result.extraMonthly.toLocaleString("en-US", {maximumFractionDigits: 0})}/month to reach your goal</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">How to Retire at 40</h2>
          <p className="text-gray-400">Retiring at 40 is one of the most ambitious FIRE goals. With roughly 15-20 years of working life, you need an aggressive savings rate typically above 50% of your income. The 4% rule means your portfolio must be 25x your annual expenses.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Key Numbers for Retiring at 40</h3>
          <p className="text-gray-400">If you spend $40,000 per year, your FIRE number is $1,000,000. Spend $60,000? You need $1,500,000. The math is simple but the execution requires consistent investing in low-cost index funds over your entire 20s and 30s.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Is Retiring at 40 Realistic?</h3>
          <p className="text-gray-400">Yes, for those with high incomes or low expenses. The key levers are your savings rate, investment returns, and annual expenses in retirement. Use this calculator to find your exact number and monthly contribution required.</p>
        </div>
      </div>
    </main>
  )
}
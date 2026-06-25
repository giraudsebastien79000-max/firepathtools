"use client"
import { useState } from "react"
import Link from "next/link"

export default function RetireAt45Calculator() {
  const [currentAge, setCurrentAge] = useState(28)
  const [currentSavings, setCurrentSavings] = useState(15000)
  const [monthlyContribution, setMonthlyContribution] = useState(1500)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(45000)
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<any>(null)

  const targetAge = 45
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
          <h1 className="text-4xl font-bold mt-4 mb-3">Retire at 45 Calculator</h1>
          <p className="text-gray-400 text-lg">Find out exactly how much you need to retire at 45 and whether you are on track.</p>
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
                <p className="text-gray-400 text-sm">Projected at 45</p>
                <p className="text-2xl font-bold text-white">${result.projected.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-red-900/40 border border-red-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to retire at 45!</p>
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
          <h2 className="text-2xl font-bold mb-4">How to Retire at 45</h2>
          <p className="text-gray-400">Retiring at 45 gives you a few extra years compared to the extreme FIRE goal of 40, but still requires a savings rate well above average. Most people targeting 45 need to save 40-50% of their income consistently throughout their 30s.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Key Numbers for Retiring at 45</h3>
          <p className="text-gray-400">Using the 4% rule, retiring on $45,000 per year requires $1,125,000. On $60,000 per year you need $1,500,000. Starting early and investing in index funds is the most reliable path to hitting these numbers by 45.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Is Retiring at 45 Realistic?</h3>
          <p className="text-gray-400">More achievable than 40, especially for dual-income households or those in high-paying fields. The extra 5 years of compounding makes a significant difference. Use this calculator to find your personal FIRE number and monthly savings target.</p>
        </div>
      </div>
    </main>
  )
}
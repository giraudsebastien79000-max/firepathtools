"use client"

import { useState } from "react"
import Link from "next/link"

export default function FireCanadaClient() {
  const [annualExpenses, setAnnualExpenses] = useState("")
  const [currentSavings, setCurrentSavings] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [annualReturn, setAnnualReturn] = useState("7")
  const [result, setResult] = useState<{ fireNumber: number; yearsToFire: number; monthsExtra: number; gap: number } | null>(null)

  function calculate() {
    const expenses = parseFloat(annualExpenses)
    const savings = parseFloat(currentSavings) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const rate = parseFloat(annualReturn) / 100
    if (!expenses || expenses <= 0) return
    const fireNumber = expenses / 0.04
    const gap = fireNumber - savings
    if (gap <= 0) { setResult({ fireNumber, yearsToFire: 0, monthsExtra: 0, gap: 0 }); return }
    if (monthly <= 0) { setResult({ fireNumber, yearsToFire: 999, monthsExtra: 0, gap }); return }
    const monthlyRate = rate / 12
    const months = monthlyRate === 0 ? gap / monthly : Math.log(1 + (gap * monthlyRate) / monthly) / Math.log(1 + monthlyRate)
    const years = Math.floor(months / 12)
    const monthsExtra = Math.round(months % 12)
    setResult({ fireNumber, yearsToFire: years, monthsExtra, gap })
  }

  function fmt(n: number) {
    return "CA" + String.fromCharCode(36) + Math.round(n).toLocaleString("en-CA")
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FIRE Calculator Canada</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Calculate your Financial Independence number in Canadian dollars. Built for Canadians with RRSP, TFSA, and CPP in mind.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your FIRE Numbers</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Annual Expenses (CAD)</label>
                <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(e.target.value)} placeholder="e.g. 48000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Current Savings (CAD)</label>
                <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="e.g. 85000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Monthly Contribution (CAD)</label>
                <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g. 2000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Annual Return: <span className="text-red-600 font-semibold">{annualReturn}%</span></label>
                <input type="range" min="3" max="12" step="0.5" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} className="w-full accent-red-600" />
              </div>
              <button onClick={calculate} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Calculate My FIRE Number</button>
            </div>
            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-red-600 rounded-xl p-6 text-center">
                  <p className="text-sm text-red-100 font-medium uppercase tracking-wide mb-1">Your FIRE Number</p>
                  <p className="text-4xl font-bold text-white">{fmt(result.fireNumber)}</p>
                  <p className="text-sm text-red-100 mt-1">Based on 4% Safe Withdrawal Rate</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-700">
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Gap to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Done!" : fmt(result.gap)}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-700">
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Time to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Now!" : result.yearsToFire === 999 ? "Add contributions" : result.yearsToFire + "y " + result.monthsExtra + "m"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{color:"#111827"}}>More FIRE Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/tools/fire-number" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">FIRE Number</Link>
            <Link href="/tools/coast-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Coast FIRE</Link>
            <Link href="/tools/safe-withdrawal-rate" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Safe Withdrawal Rate</Link>
            <Link href="/tools/time-to-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Time to FIRE</Link>
            <Link href="/fire-uk-calculator" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">FIRE UK</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
"use client";
import { useState } from "react";

export default function SavingsRateClient() {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [result, setResult] = useState<{ rate: string; savings: number; years: number | null } | null>(null)
  const [error, setError] = useState("")

  const calculate = () => {
    setError("")
    const inc = parseFloat(income)
    const exp = parseFloat(expenses)
    if (isNaN(inc) || isNaN(exp) || inc <= 0) {
      setError("Please enter valid income and expense amounts.")
      return
    }
    if (exp >= inc) {
      setError("Your expenses are equal to or greater than your income. Savings rate is 0%.")
      setResult({ rate: "0.0", savings: 0, years: null })
      return
    }
    const savings = inc - exp
    const rate = (savings / inc) * 100
    let years: number | null = null
    if (rate > 0) {
      years = Math.round(Math.log(25) / Math.log(1 + (savings / exp)))
    }
    setResult({ rate: rate.toFixed(1), savings, years })
  }

  const getMessage = (rate: number) => {
    if (rate < 10) return { text: "You are barely saving. Small changes make a big difference.", color: "text-red-400" }
    if (rate < 25) return { text: "Decent start, but there is room to grow.", color: "text-yellow-400" }
    if (rate < 50) return { text: "Strong savings rate. You are on a solid FIRE path.", color: "text-orange-400" }
    return { text: "Exceptional. You are on the fast track to financial independence.", color: "text-green-400" }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Savings Rate Calculator</h1>
          <p className="text-gray-400">Find out what percentage of your income you are saving — and how it affects your path to FIRE.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Income ($)</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 5000"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Expenses ($)</label>
            <input type="number" value={expenses} onChange={e => setExpenses(e.target.value)} placeholder="e.g. 3500"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">
            Calculate My Savings Rate
          </button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-400 text-sm mb-1">Your Savings Rate</p>
                <p className="text-6xl font-bold text-orange-400">{result.rate}%</p>
                {parseFloat(result.rate) > 0 && (
                  <p className={`text-sm mt-3 ${getMessage(parseFloat(result.rate)).color}`}>
                    {getMessage(parseFloat(result.rate)).text}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-white">${result.savings.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Years to FIRE</p>
                  <p className="text-2xl font-bold text-white">{result.years ? result.years : "--"}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  )
}
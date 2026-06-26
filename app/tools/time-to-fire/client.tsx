"use client"

import { useState } from "react"

export default function TimeToFireClient() {
  const [age, setAge] = useState(30)
  const [income, setIncome] = useState(70000)
  const [expenses, setExpenses] = useState(40000)
  const [savings, setSavings] = useState(25000)
  const [returnRate, setReturnRate] = useState(7)
  const [result, setResult] = useState<null | { years: number; fireAge: number; fireNumber: number; monthlySavings: number }>(null)

  const calculate = () => {
    const annualSavings = income - expenses
    const fireNumber = expenses * 25
    const r = returnRate / 100

    if (annualSavings <= 0) {
      setResult({ years: -1, fireAge: -1, fireNumber, monthlySavings: 0 })
      return
    }

    let portfolio = savings
    let years = 0
    while (portfolio < fireNumber && years < 100) {
      portfolio = portfolio * (1 + r) + annualSavings
      years++
    }

    setResult({
      years,
      fireAge: age + years,
      fireNumber,
      monthlySavings: Math.round(annualSavings / 12),
    })
  }

  const fmt = (n: number) =>
    n >= 1000000
      ? "$" + (n / 1000000).toFixed(2) + "M"
      : "$" + n.toLocaleString()

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Age</label>
            <input type="number" value={age} onChange={e => setAge(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Annual Income (after tax)</label>
            <input type="number" value={income} onChange={e => setIncome(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Annual Expenses</label>
            <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Savings / Portfolio</label>
            <input type="number" value={savings} onChange={e => setSavings(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-400 mb-2">Expected Annual Return: {returnRate}%</label>
            <input type="range" min={3} max={12} step={0.5} value={returnRate} onChange={e => setReturnRate(Number(e.target.value))}
              className="w-full accent-orange-500" />
            <div className="flex justify-between text-xs text-gray-500 mt-1"><span>3%</span><span>12%</span></div>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full bg-orange-500 hover:bg-orange-400 font-bold py-4 rounded-xl transition-colors text-white text-lg">
          Calculate My Time to FIRE
        </button>

        {result && (
          <div className="mt-6 space-y-4">
            {result.years === -1 ? (
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 text-center">
                <p className="text-red-400 font-semibold">Your expenses exceed your income.</p>
                <p className="text-gray-400 text-sm mt-2">Increase income or reduce expenses to reach FIRE.</p>
              </div>
            ) : (
              <>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
                  <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">Time to FIRE</p>
                  <p className="text-white text-5xl font-extrabold">{result.years} <span className="text-2xl">years</span></p>
                  <p className="text-gray-400 mt-2">You will reach FIRE at age <span className="text-white font-bold">{result.fireAge}</span></p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-xl p-5 text-center">
                    <p className="text-gray-400 text-sm mb-1">FIRE Number</p>
                    <p className="text-white text-xl font-bold">{fmt(result.fireNumber)}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-5 text-center">
                    <p className="text-gray-400 text-sm mb-1">Monthly Savings</p>
                    <p className="text-white text-xl font-bold">{fmt(result.monthlySavings)}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-5 text-center">
                    <p className="text-gray-400 text-sm mb-1">Savings Rate</p>
                    <p className="text-white text-xl font-bold">{Math.round(((income - expenses) / income) * 100)}%</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
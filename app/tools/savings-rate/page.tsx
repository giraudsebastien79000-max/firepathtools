import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savings Rate Calculator",
  description: "Calculate your savings rate and see how it impacts your path to FIRE. Your savings rate is your most powerful lever for financial independence.",
};

"use client";
import { useState } from "react";

export default function SavingsRate() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const inc = parseFloat(income);
    const exp = parseFloat(expenses);
    const savings = inc - exp;
    const rate = (savings / inc) * 100;
    const yearsToFIRE = Math.log(25 / (savings / inc)) / Math.log(1.07) + (savings / inc < 1 ? 0 : 0);
    let years;
    if (rate <= 0) { years = null; }
    else { years = Math.log(25) / Math.log(1 + (savings / exp)); }
    setResult({ rate: rate.toFixed(1), savings, years: years ? Math.round(years) : null });
  };

  const getMessage = (rate) => {
    if (rate < 10) return { text: "You're barely saving. Small changes make a big difference.", color: "text-red-400" };
    if (rate < 25) return { text: "decent start, but there is room to grow.", color: "text-yellow-400" };
    if (rate < 50) return { text: "Strong savings rate. You are on a solid FIRE path.", color: "text-orange-400" };
    return { text: "Exceptional. You are on the fast track to financial independence.", color: "text-green-400" };
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Savings Rate Calculator</h1>
          <p className="text-gray-400 text-base">Your savings rate is the single most powerful lever for reaching financial independence.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Take-Home Income ($)</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 5000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Expenses ($)</label>
            <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder="e.g. 3500" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Savings Rate</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-400 text-sm mb-1">Your Savings Rate</p>
                <p className="text-6xl font-bold text-orange-400">{result.rate}%</p>
                {result.rate > 0 && (
                  <p className={`text-sm mt-3 ${getMessage(parseFloat(result.rate)).color}`}>{getMessage(parseFloat(result.rate)).text}</p>
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
  );
}
"use client";
import { useState } from "react";

export default function LatteFactorClient() {
  const [daily, setDaily] = useState("");
  const [years, setYears] = useState("30");
  const [returnRate, setReturnRate] = useState("7");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const d = parseFloat(daily);
    const y = parseFloat(years);
    const r = parseFloat(returnRate) / 100 / 12;
    const n = y * 12;
    const monthly = d * 30;
    const invested = monthly * ((Math.pow(1 + r, n) - 1) / r);
    const totalSpent = monthly * n;
    setResult({ monthly, invested, totalSpent, daily: d });
  };

  const examples = [
    { label: "Daily coffee", amount: 5 },
    { label: "Daily lunch out", amount: 15 },
    { label: "Daily takeout", amount: 25 },
    { label: "Daily subscriptions", amount: 10 },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Latte Factor Calculator</h1>
          <p className="text-gray-400 text-base">Small daily expenses compound into massive wealth over time. See what your habits really cost.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">Quick examples</label>
            <div className="grid grid-cols-2 gap-2">
              {examples.map((ex) => (
                <button key={ex.label} onClick={() => setDaily(String(ex.amount))} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-300 text-left transition-colors">
                  {ex.label} <span className="text-orange-400 font-bold">${ex.amount}/day</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Daily Expense Amount ($)</label>
            <input type="number" value={daily} onChange={(e) => setDaily(e.target.value)} placeholder="e.g. 5" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Years</label>
              <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="30" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Return (%)</label>
              <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate True Cost</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-400 text-sm mb-1">If invested instead over {years} years</p>
                <p className="text-5xl font-bold text-orange-400">${result.invested.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Spent</p>
                  <p className="text-xl font-bold text-red-400">${result.totalSpent.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Monthly Cost</p>
                  <p className="text-xl font-bold text-white">${result.monthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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
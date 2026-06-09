export const metadata: Metadata = {
  title: "Inflation Calculator",
  description: "See how inflation erodes your purchasing power over time. Calculate the real value of money across different time periods.",
};

"use client";
import { useState } from "react";

export default function InflationCalculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("20");
  const [inflationRate, setInflationRate] = useState("3");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(amount);
    const y = parseFloat(years);
    const r = parseFloat(inflationRate) / 100;
    const futureValue = a * Math.pow(1 + r, y);
    const purchasingPower = a / Math.pow(1 + r, y);
    const loss = a - purchasingPower;
    setResult({ futureValue, purchasingPower, loss, lossPct: (loss / a * 100).toFixed(1) });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Inflation Calculator</h1>
          <p className="text-gray-400 text-base">See how inflation erodes your purchasing power over time -- and why investing beats holding cash.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Amount Today ($)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 100000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Years</label>
              <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="20" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Inflation Rate (%)</label>
              <input type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} placeholder="3" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">US avg: ~3% historically.</p>
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate Inflation Impact</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-5 border border-orange-400/30 text-center">
                  <p className="text-gray-400 text-xs mb-1">Cost in {years} years</p>
                  <p className="text-2xl font-bold text-orange-400">${result.futureValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                  <p className="text-gray-500 text-xs mt-1">To buy the same things</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-5 border border-red-400/30 text-center">
                  <p className="text-gray-400 text-xs mb-1">Purchasing power lost</p>
                  <p className="text-2xl font-bold text-red-400">{result.lossPct}%</p>
                  <p className="text-gray-500 text-xs mt-1">${result.loss.toLocaleString("en-US", { maximumFractionDigits: 0 })} gone</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
                <p className="text-gray-400 text-xs mb-2">Your ${parseFloat(amount).toLocaleString("en-US", { maximumFractionDigits: 0 })} today will only buy...</p>
                <p className="text-4xl font-bold text-white">${result.purchasingPower.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                <p className="text-gray-500 text-xs mt-2">worth of goods in {years} years if kept as cash.</p>
              </div>
              <p className="text-gray-500 text-xs text-center">This is why keeping large amounts in cash long-term destroys wealth. Invest to beat inflation.</p>
            </div>
          )}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";


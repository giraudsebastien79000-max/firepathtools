import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4% Rule Calculator",
  description: "Calculate how much your portfolio can safely generate each year. Based on the proven 4% safe withdrawal rate for early retirement.",
};

"use client";
import { useState } from "react";

export default function FourPercentRule() {
  const [portfolio, setPortfolio] = useState("");
  const [customRate, setCustomRate] = useState("4");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const p = parseFloat(portfolio);
    const r = parseFloat(customRate) / 100;
    const annual = p * r;
    const monthly = annual / 12;
    const at3 = p * 0.03;
    const at4 = p * 0.04;
    const at5 = p * 0.05;
    setResult({ annual, monthly, at3, at4, at5, rate: customRate });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">4% Rule Calculator</h1>
          <p className="text-gray-400 text-base">The 4% rule is the gold standard of retirement planning. Find out how much your portfolio can safely generate.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio Value ($)</label>
            <input type="number" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} placeholder="e.g. 1000000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Withdrawal Rate (%)</label>
            <input type="number" value={customRate} onChange={(e) => setCustomRate(e.target.value)} placeholder="4" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            <p className="text-xs text-gray-500 mt-1">The original Trinity Study found 4% safe over 30 years. Many FIRE followers use 3-3.5% for longer horizons.</p>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate Safe Withdrawal</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-400 text-sm mb-1">Annual Withdrawal at {result.rate}%</p>
                <p className="text-5xl font-bold text-orange-400">${result.annual.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                <p className="text-gray-400 text-sm mt-2">${result.monthly.toLocaleString("en-US", { maximumFractionDigits: 0 })} per month</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <p className="text-gray-400 text-xs mb-3 uppercase tracking-widest">Withdrawal Rate Comparison</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">3% (Ultra-conservative)</span>
                    <span className="text-white font-bold">${result.at3.toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 text-sm font-semibold">4% (Standard)</span>
                    <span className="text-orange-400 font-bold">${result.at4.toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">5% (Aggressive)</span>
                    <span className="text-white font-bold">${result.at5.toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr</span>
                  </div>
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
"use client";
import { useState } from "react";

export default function CompoundInterestClient() {
  const [principal, setPrincipal] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("20");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const p = parseFloat(principal) || 0;
    const m = parseFloat(monthly) || 0;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const futureValue = r !== 0 ? p * Math.pow(1 + r, n) + m * ((Math.pow(1 + r, n) - 1) / r) : p + m * n;
    const totalContributions = p + m * n;
    const totalInterest = futureValue - totalContributions;
    setResult({ futureValue, totalContributions, totalInterest });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Compound Interest Calculator</h1>
          <p className="text-gray-300 text-base">See how your money grows over time with the power of compound interest.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Initial Investment ($)</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 10000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="e.g. 500" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Return (%)</label>
              <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="7" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">7% historical average.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Years</label>
              <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="20" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate Growth</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-300 text-sm mb-1">Final Portfolio Value</p>
                <p className="text-5xl font-bold text-orange-400">${result.futureValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Total Contributed</p>
                  <p className="text-xl font-bold text-white">${result.totalContributions.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Interest Earned</p>
                  <p className="text-xl font-bold text-green-400">${result.totalInterest.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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
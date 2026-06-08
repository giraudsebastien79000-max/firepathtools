"use client";
import { useState } from "react";

export default function InvestmentFees() {
  const [principal, setPrincipal] = useState("");
  const [monthly, setMonthly] = useState("");
  const [years, setYears] = useState("30");
  const [returnRate, setReturnRate] = useState("7");
  const [feeRate, setFeeRate] = useState("1");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const p = parseFloat(principal) || 0;
    const m = parseFloat(monthly) || 0;
    const y = parseFloat(years);
    const r = parseFloat(returnRate) / 100 / 12;
    const f = (parseFloat(returnRate) - parseFloat(feeRate)) / 100 / 12;
    const n = y * 12;
    const withoutFees = p * Math.pow(1+r,n) + m * ((Math.pow(1+r,n)-1)/r);
    const withFees = p * Math.pow(1+f,n) + m * ((Math.pow(1+f,n)-1)/f);
    const feeCost = withoutFees - withFees;
    const feePct = (feeCost / withoutFees) * 100;
    setResult({ withoutFees, withFees, feeCost, feePct });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Investment Fee Calculator</h1>
          <p className="text-gray-400 text-base">See exactly how much fees are silently stealing from your retirement portfolio.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Initial Investment ($)</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 50000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="e.g. 500" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Years</label>
              <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="30" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Return (%)</label>
              <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Fee (%)</label>
              <input type="number" value={feeRate} onChange={(e) => setFeeRate(e.target.value)} placeholder="1" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">Avg mutual fund: 1%</p>
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate Fee Impact</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-red-900/20 rounded-xl p-6 text-center border border-red-400/30">
                <p className="text-gray-400 text-sm mb-1">Total Lost to Fees</p>
                <p className="text-5xl font-bold text-red-400">${result.feeCost.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                <p className="text-gray-400 text-sm mt-2">That is {result.feePct.toFixed(1)}% of your potential wealth gone.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Without Fees</p>
                  <p className="text-xl font-bold text-green-400">${result.withoutFees.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">With {feeRate}% Fee</p>
                  <p className="text-xl font-bold text-white">${result.withFees.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center">This is why index funds with 0.03-0.10% fees beat actively managed funds long-term.</p>
            </div>
          )}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}
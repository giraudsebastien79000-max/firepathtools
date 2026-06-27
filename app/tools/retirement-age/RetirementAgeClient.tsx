"use client";
import { useState } from "react";

export default function RetirementAgeClient() {
  const [currentAge, setCurrentAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [rate, setRate] = useState("7");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const age = parseFloat(currentAge);
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const target = parseFloat(targetAmount);
    const r = parseFloat(rate) / 100 / 12;
    let months = 0;
    let balance = savings;
    while (balance < target && months < 1200) {
      balance = balance * (1 + r) + monthly;
      months++;
    }
    const retirementAge = age + months / 12;
    const totalContributed = savings + monthly * months;
    const interestEarned = target - totalContributed;
    setResult({ retirementAge: retirementAge.toFixed(1), years: (months / 12).toFixed(1), totalContributed, interestEarned: Math.max(0, interestEarned) });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Retirement Age Calculator</h1>
          <p className="text-gray-300 text-base">Find out exactly what age you can retire based on your savings and contributions.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Age</label>
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g. 30" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Savings ($)</label>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="e.g. 50000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g. 1000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Target FIRE Number ($)</label>
            <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="e.g. 1000000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Expected Annual Return (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="7" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Retirement Age</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-300 text-sm mb-1">You can retire at age</p>
                <p className="text-6xl font-bold text-orange-400">{result.retirementAge}</p>
                <p className="text-gray-300 text-sm mt-2">That is in {result.years} years</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Total Contributed</p>
                  <p className="text-xl font-bold text-white">${result.totalContributed.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Growth from Returns</p>
                  <p className="text-xl font-bold text-green-400">${result.interestEarned.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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
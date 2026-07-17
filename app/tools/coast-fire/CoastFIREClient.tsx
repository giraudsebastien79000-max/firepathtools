"use client";
import { useState } from "react";

export default function CoastFIREClient() {
  const [currentSavings, setCurrentSavings] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("65");
  const [returnRate, setReturnRate] = useState("7");
  const [inflationRate, setInflationRate] = useState("3");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [withdrawalRate, setWithdrawalRate] = useState("4");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const savings = parseFloat(currentSavings);
    const age = parseFloat(currentAge);
    const retAge = parseFloat(retirementAge);
    const rate = parseFloat(returnRate) / 100;
    const inf = parseFloat(inflationRate) / 100;
    const realRate = (1 + rate) / (1 + inf) - 1;
    const expenses = parseFloat(monthlyExpenses) * 12;
    const wr = parseFloat(withdrawalRate) / 100;
    const yearsToGrow = retAge - age;
    const fireNumber = expenses / wr;
    const coastNumber = fireNumber / Math.pow(1 + realRate, yearsToGrow);
    const projectedValue = savings * Math.pow(1 + realRate, yearsToGrow);
    setResult({ coastNumber, projectedValue, alreadyCoasted: savings >= coastNumber });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Coast FIRE Calculator</h1>
          <p className="text-gray-300 text-base">Find out if you can stop saving and let your investments grow to retirement on their own.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Savings ($)</label>
            <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="e.g. 80000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Age</label>
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g. 35" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Retirement Age</label>
              <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} placeholder="65" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Expenses ($)</label>
            <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} placeholder="e.g. 3000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Return (%)</label>
              <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">7% is the historical average.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Withdrawal Rate (%)</label>
              <input type="number" value={withdrawalRate} onChange={(e) => setWithdrawalRate(e.target.value)} placeholder="4" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">4% rule standard.</p></div><div><label className="block text-sm font-medium text-gray-300 mb-2">Inflation (%)</label><input type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} placeholder="3" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" /><p className="text-xs text-gray-500 mt-1">Results are in today&apos;s dollars.</p>
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Coast FIRE Number</button>
          {result !== null && (
            <div className="space-y-4">
              <div className={`rounded-xl p-6 text-center border ${result.alreadyCoasted ? "bg-green-900/30 border-green-400/30" : "bg-slate-800 border-orange-400/30"}`}>
                <p className="text-gray-300 text-sm mb-1">Your Coast FIRE Number</p>
                <p className="text-5xl font-bold text-orange-400">${result.coastNumber.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                {result.alreadyCoasted ? (
                  <p className="text-green-400 font-semibold mt-3">You have already reached Coast FIRE!</p>
                ) : (
                  <p className="text-gray-300 text-sm mt-3">You need ${(result.coastNumber - parseFloat(currentSavings)).toLocaleString("en-US", { maximumFractionDigits: 0 })} more to reach Coast FIRE.</p>
                )}
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-600">
                <p className="text-gray-300 text-xs mb-1">Projected value at retirement in today&apos;s dollars (no more contributions)</p>
                <p className="text-2xl font-bold text-white">${result.projectedValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}
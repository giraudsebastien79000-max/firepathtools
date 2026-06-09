"use client";
import { useState } from "react";

export default function EmergencyFundClient() {
  const [monthly, setMonthly] = useState("");
  const [months, setMonths] = useState("6");
  const [current, setCurrent] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const m = parseFloat(monthly);
    const mo = parseFloat(months);
    const cur = parseFloat(current) || 0;
    const target = m * mo;
    const gap = Math.max(0, target - cur);
    const pct = Math.min(100, (cur / target) * 100);
    setResult({ target, gap, pct: pct.toFixed(0), funded: cur >= target });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Emergency Fund Calculator</h1>
          <p className="text-gray-400 text-base">Find out exactly how much you need in your emergency fund before investing.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Expenses ($)</label>
            <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="e.g. 3000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Months of Coverage</label>
            <select value={months} onChange={(e) => setMonths(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-400">
              <option value="3">3 months (minimum)</option>
              <option value="6">6 months (recommended)</option>
              <option value="9">9 months (conservative)</option>
              <option value="12">12 months (very conservative)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Most FIRE experts recommend 6 months.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Emergency Savings ($)</label>
            <input type="number" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="e.g. 5000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Emergency Fund</button>
          {result !== null && (
            <div className="space-y-4">
              <div className={`rounded-xl p-6 text-center border ${result.funded ? "bg-green-900/30 border-green-400/30" : "bg-gray-800 border-orange-400/30"}`}>
                <p className="text-gray-400 text-sm mb-1">Target Emergency Fund</p>
                <p className="text-5xl font-bold text-orange-400">${result.target.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                {result.funded ? (
                  <p className="text-green-400 font-semibold mt-3">You are fully funded. Time to invest!</p>
                ) : (
                  <p className="text-gray-400 text-sm mt-3">You still need ${result.gap.toLocaleString("en-US", { maximumFractionDigits: 0 })} to reach your goal.</p>
                )}
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-orange-400 font-bold">{result.pct}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full transition-all" style={{width: result.pct + "%"}}></div>
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
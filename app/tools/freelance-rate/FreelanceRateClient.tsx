"use client";
import { useState } from "react";

export default function FreelanceRateClient() {
  const [salary, setSalary] = useState("");
  const [weeks, setWeeks] = useState("48");
  const [hours, setHours] = useState("40");
  const [buffer, setBuffer] = useState("30");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const s = parseFloat(salary);
    const w = parseFloat(weeks);
    const h = parseFloat(hours);
    const b = parseFloat(buffer) / 100;
    const billableHours = w * h;
    const baseRate = s / billableHours;
    const finalRate = baseRate * (1 + b);
    const daily = finalRate * h;
    const monthly = (s * (1 + b)) / 12;
    setResult({ baseRate, finalRate, daily, monthly, billableHours });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Freelance Hourly Rate Calculator</h1>
          <p className="text-gray-300 text-base">Calculate the minimum hourly rate you need to charge to hit your income goals.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Target Annual Income ($)</label>
            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 80000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Billable Weeks/Year</label>
              <input type="number" value={weeks} onChange={(e) => setWeeks(e.target.value)} placeholder="48" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">48 weeks = 4 weeks off.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Billable Hours/Week</label>
              <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="40" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Business Expenses Buffer (%)</label>
            <input type="number" value={buffer} onChange={(e) => setBuffer(e.target.value)} placeholder="30" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            <p className="text-xs text-gray-500 mt-1">Covers taxes, tools, insurance, downtime. 30% is a safe minimum.</p>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Rate</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-300 text-sm mb-1">Minimum Hourly Rate</p>
                <p className="text-6xl font-bold text-orange-400">${result.finalRate.toFixed(0)}<span className="text-2xl text-gray-300">/hr</span></p>
                <p className="text-gray-500 text-xs mt-2">Base rate ${result.baseRate.toFixed(0)}/hr + {buffer}% buffer</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Daily Rate</p>
                  <p className="text-lg font-bold text-white">${result.daily.toFixed(0)}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Monthly</p>
                  <p className="text-lg font-bold text-white">${result.monthly.toFixed(0)}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-600 text-center">
                  <p className="text-gray-300 text-xs mb-1">Billable Hrs</p>
                  <p className="text-lg font-bold text-white">{result.billableHours}</p>
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
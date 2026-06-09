"use client";
import { useState } from "react";

export default function BudgetPlannerClient() {
  const [income, setIncome] = useState("");
  const [needs, setNeeds] = useState(0);
  const [wants, setWants] = useState(0);
  const [savings, setSavings] = useState(0);
  const [needsAlt, setNeedsAlt] = useState(0);
  const [wantsAlt, setWantsAlt] = useState(0);
  const [savingsAlt, setSavingsAlt] = useState(0);
  const [done, setDone] = useState(false);

  const calculate = () => {
    const i = parseFloat(income);
    setNeeds(i * 0.50);
    setWants(i * 0.30);
    setSavings(i * 0.20);
    setNeedsAlt(i * 0.60);
    setWantsAlt(i * 0.20);
    setSavingsAlt(i * 0.20);
    setDone(true);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Budget Planner</h1>
          <p className="text-gray-400 text-base">The 50/30/20 rule is the simplest framework to build wealth. See your ideal budget in seconds.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Take-Home Income ($)</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 5000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Build My Budget</button>
          {done && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-5 border border-orange-400/30">
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">50/30/20 Rule</p>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">50% Needs</span><span className="text-white font-bold">{needs.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">30% Wants</span><span className="text-white font-bold">{wants.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">20% Savings</span><span className="text-orange-400 font-bold">{savings.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">60/20/20 FIRE Aggressive</p>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">60% Needs</span><span className="text-white font-bold">{needsAlt.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">20% Wants</span><span className="text-white font-bold">{wantsAlt.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
                  <div className="flex justify-between"><span className="text-gray-300 text-sm">20% Savings</span><span className="text-orange-400 font-bold">{savingsAlt.toLocaleString("en-US",{maximumFractionDigits:0})}</span></div>
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

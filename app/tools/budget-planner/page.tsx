"use client";
import { useState } from "react";

interface BudgetResult {
  needs: number;
  wants: number;
  savings: number;
  needsAlt: number;
  wantsAlt: number;
  savingsAlt: number;
}

export default function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState<BudgetResult | null>(null);

  const calculate = () => {
    const i = parseFloat(income);
    setResult({
      needs: i * 0.50,
      wants: i * 0.30,
      savings: i * 0.20,
      needsAlt: i * 0.60,
      wantsAlt: i * 0.20,
      savingsAlt: i * 0.20,
    });
  };

  const Bar = ({ pct, color }: { pct: number; color: string }) => (
    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
      <div className={`${color} h-2 rounded-full`} style={{width: pct + "%"}}></div>
    </div>
  );

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
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-5 border border-orange-400/30">
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">50/30/20 Rule</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">50% Needs (rent, food, bills)</span>
                      <span className="text-white font-bold">${result.needs.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={50} color="bg-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">30% Wants (dining, hobbies)</span>
                      <span className="text-white font-bold">${result.wants.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={30} color="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">20% Savings & Investing</span>
                      <span className="text-orange-400 font-bold">${result.savings.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={20} color="bg-orange-500" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">60/20/20 Rule (FIRE aggressive)</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">60% Needs</span>
                      <span className="text-white font-bold">${result.needsAlt.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={60} color="bg-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">20% Wants</span>
                      <span className="text-white font-bold">${result.wantsAlt.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={20} color="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">20% Savings & Investing</span>
                      <span className="text-orange-400 font-bold">${result.savingsAlt.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <Bar pct={20} color="bg-orange-500" />
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
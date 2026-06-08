"use client";
import { useState } from "react";

export default function FIREProgress() {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("");
  const [monthly, setMonthly] = useState("");
  const [returnRate, setReturnRate] = useState("7");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const cur = parseFloat(current);
    const tgt = parseFloat(target);
    const m = parseFloat(monthly);
    const r = parseFloat(returnRate) / 100 / 12;
    const pct = (cur / tgt) * 100;
    let months = 0;
    let balance = cur;
    while (balance < tgt && months < 1200) {
      balance = balance * (1 + r) + m;
      months++;
    }
    const years = (months / 12).toFixed(1);
    const milestone25 = tgt * 0.25;
    const milestone50 = tgt * 0.50;
    const milestone75 = tgt * 0.75;
    setResult({ pct: Math.min(100, pct).toFixed(1), months, years, milestone25, milestone50, milestone75, reached25: cur >= milestone25, reached50: cur >= milestone50, reached75: cur >= milestone75, done: cur >= tgt });
  };

  const MilestoneRow = ({ label, amount, reached }) => (
    <div className={`flex justify-between items-center p-3 rounded-xl border ${reached ? "bg-green-900/20 border-green-400/30" : "bg-gray-800 border-gray-700"}`}>
      <span className={`text-sm ${reached ? "text-green-400" : "text-gray-400"}`}>{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-sm">${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
        {reached && <span className="text-green-400 text-xs font-bold">DONE</span>}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">FIRE Progress Tracker</h1>
          <p className="text-gray-400 text-base">Track exactly where you are on your path to financial independence.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Portfolio ($)</label>
            <input type="number" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="e.g. 150000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">FIRE Number ($)</label>
            <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="e.g. 1000000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            <p className="text-xs text-gray-500 mt-1">Not sure? Use our FIRE Number Calculator.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Contribution ($)</label>
              <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="e.g. 2000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Return (%)</label>
              <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Track My FIRE Progress</button>
          {result !== null && (
            <div className="space-y-4">
              <div className={`rounded-xl p-6 text-center border ${result.done ? "bg-green-900/30 border-green-400/30" : "bg-gray-800 border-orange-400/30"}`}>
                <p className="text-gray-400 text-sm mb-1">FIRE Progress</p>
                <p className="text-6xl font-bold text-orange-400">{result.pct}%</p>
                {!result.done && <p className="text-gray-400 text-sm mt-2">FIRE in {result.years} years ({result.months} months)</p>}
                {result.done && <p className="text-green-400 font-semibold mt-2">You have reached FIRE!</p>}
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Overall Progress</span>
                  <span className="text-orange-400 font-bold">{result.pct}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-orange-500 h-4 rounded-full transition-all" style={{width: result.pct + "%"}}></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-widest">Milestones</p>
                <MilestoneRow label="25% - Getting started" amount={result.milestone25} reached={result.reached25} />
                <MilestoneRow label="50% - Halfway there" amount={result.milestone50} reached={result.reached50} />
                <MilestoneRow label="75% - Almost free" amount={result.milestone75} reached={result.reached75} />
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}
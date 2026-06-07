"use client";
import { useState } from "react";

export default function Home() {
  const [expenses, setExpenses] = useState("");
  const [rate, setRate] = useState("7");
  const [withdrawalRate, setWithdrawalRate] = useState("4");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const monthlyExpenses = parseFloat(expenses);
    const annualExpenses = monthlyExpenses * 12;
    const wr = parseFloat(withdrawalRate) / 100;
    const fireNumber = annualExpenses / wr;
    setResult(fireNumber);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">FIRE Number Calculator</h1>
          <p className="text-gray-400 text-base">Find out exactly how much you need to retire early and never work again.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Expenses ($)</label>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="e.g. 3000"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Safe Withdrawal Rate (%)</label>
            <input
              type="number"
              value={withdrawalRate}
              onChange={(e) => setWithdrawalRate(e.target.value)}
              placeholder="4"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
            />
            <p className="text-xs text-gray-500 mt-1">The 4% rule is the most widely used standard.</p>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            Calculate My FIRE Number
          </button>

          {result !== null && (
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
              <p className="text-gray-400 text-sm mb-1">Your FIRE Number</p>
              <p className="text-5xl font-bold text-orange-400">
                ${result.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
              <p className="text-gray-400 text-sm mt-3">
                Once you reach this amount invested, you can live off your returns forever.
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          firepathtools.com — Free financial independence tools
        </p>
      </div>
    </main>
  );
}
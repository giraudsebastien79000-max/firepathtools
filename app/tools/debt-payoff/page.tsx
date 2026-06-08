import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator",
  description: "See exactly when you will be debt-free. Compare avalanche vs snowball payoff strategies and calculate your debt-free date.",
};

"use client";
import { useState } from "react";

export default function DebtPayoff() {
  const [balance, setBalance] = useState("");
  const [rate, setRate] = useState("");
  const [payment, setPayment] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const b = parseFloat(balance);
    const r = parseFloat(rate) / 100 / 12;
    const p = parseFloat(payment);
    if (p <= b * r) { setResult({ error: true }); return; }
    let months = 0;
    let remaining = b;
    let totalPaid = 0;
    while (remaining > 0 && months < 600) {
      const interest = remaining * r;
      const principal = Math.min(p - interest, remaining);
      remaining -= principal;
      totalPaid += interest + principal;
      months++;
    }
    const totalInterest = totalPaid - b;
    const minPayment = b * r * 1.01;
    setResult({ months, years: (months / 12).toFixed(1), totalInterest, totalPaid, minPayment, error: false });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Debt Payoff Calculator</h1>
          <p className="text-gray-400 text-base">See exactly when you will be debt-free and how much interest you can save.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Balance ($)</label>
            <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="e.g. 15000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 19.99" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Payment ($)</label>
            <input type="number" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="e.g. 500" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate Payoff Date</button>
          {result !== null && result.error && (
            <div className="bg-red-900/30 rounded-xl p-4 border border-red-400/30 text-center">
              <p className="text-red-400">Your payment is too low to cover the interest. Increase your monthly payment.</p>
            </div>
          )}
          {result !== null && !result.error && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-orange-400/30">
                <p className="text-gray-400 text-sm mb-1">Debt-Free In</p>
                <p className="text-5xl font-bold text-orange-400">{result.months} <span className="text-2xl text-gray-400">months</span></p>
                <p className="text-gray-400 text-sm mt-2">That is {result.years} years</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Interest Paid</p>
                  <p className="text-xl font-bold text-red-400">${result.totalInterest.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Amount Paid</p>
                  <p className="text-xl font-bold text-white">${result.totalPaid.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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
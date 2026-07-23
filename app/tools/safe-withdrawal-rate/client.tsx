"use client";
import { useState } from "react";
import Link from "next/link";

export default function SafeWithdrawalRateClient() {
  const [portfolio, setPortfolio] = useState(1000000);
  const [annualSpend, setAnnualSpend] = useState(40000);
  const [returnRate, setReturnRate] = useState(5);

  const withdrawalRate = portfolio > 0 ? (annualSpend / portfolio) * 100 : 0;
  const realReturn = returnRate / 100;
  let years = 0;
  if (realReturn <= 0) {
    years = portfolio / annualSpend;
  } else {
    years = annualSpend <= portfolio * realReturn ? Infinity : Math.log(annualSpend / (annualSpend - portfolio * realReturn)) / Math.log(1 + realReturn);
  }

  const isSafe = years >= 30;
  const isOk = years >= 20 && years < 30;

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/tools" className="text-orange-400 text-sm hover:underline">← All Tools</Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">Safe Withdrawal Rate Calculator</h1>
        <p className="text-gray-300 mb-10">Find out how long your portfolio will last and whether your withdrawal rate is sustainable.</p>
        <div className="space-y-6 bg-gray-900 rounded-2xl p-6 mb-8">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Portfolio Size ($)</label>
            <input type="number" value={portfolio} onChange={e => setPortfolio(Number(e.target.value))} className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Annual Spending ($)</label>
            <input type="number" value={annualSpend} onChange={e => setAnnualSpend(Number(e.target.value))} className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Expected Annual Return (%, after inflation)</label>
            <input type="number" value={returnRate} onChange={e => setReturnRate(Number(e.target.value))} className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <p className="text-xs text-gray-400 mt-1">Results are in today's dollars.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 mb-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Your Withdrawal Rate</span>
            <span className={`text-2xl font-bold ${isSafe ? "text-green-400" : isOk ? "text-yellow-400" : "text-red-400"}`}>{withdrawalRate.toFixed(2)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Portfolio Lasts</span>
            <span className="text-2xl font-bold text-orange-400">{years > 100 ? "100+ years" : `${Math.round(years)} years`}</span>
          </div>
          <div className={`rounded-xl p-4 mt-2 ${isSafe ? "bg-green-900/30 border border-green-700" : isOk ? "bg-yellow-900/30 border border-yellow-700" : "bg-red-900/30 border border-red-700"}`}>
            <p className={`text-sm font-medium ${isSafe ? "text-green-400" : isOk ? "text-yellow-400" : "text-red-400"}`}>
              {isSafe ? "Safe - historically sustainable over 30+ years" : isOk ? "Borderline - consider reducing spending slightly" : "High risk - portfolio may run out prematurely"}
            </p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 text-sm text-gray-300 space-y-2">
          <p className="font-medium text-white">How it works</p>
          <p>The 4% rule comes from the Trinity Study, which found that a 4% withdrawal rate survived 95%+ of 30-year retirement periods historically.</p>
          <p>This calculator assumes the same return every single year. Markets do not work that way, and a bad run of returns in the first years of retirement can drain a portfolio that looks safe here.</p>
          <div className="pt-2">
            <Link href="/blog/what-is-a-safe-withdrawal-rate" className="text-orange-400 hover:underline">Read: What Is a Safe Withdrawal Rate?</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

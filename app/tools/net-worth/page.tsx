export const metadata: Metadata = {
  title: "Net Worth Calculator",
  description: "Calculate your real financial score in 60 seconds. Track assets minus liabilities to measure your true financial progress.",
};

"use client";
import { useState } from "react";

export default function NetWorth() {
  const [cash, setCash] = useState("");
  const [investments, setInvestments] = useState("");
  const [realEstate, setRealEstate] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [otherAssets, setOtherAssets] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [carLoans, setCarLoans] = useState("");
  const [creditCards, setCreditCards] = useState("");
  const [studentLoans, setStudentLoans] = useState("");
  const [otherDebts, setOtherDebts] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const assets = (parseFloat(cash)||0) + (parseFloat(investments)||0) + (parseFloat(realEstate)||0) + (parseFloat(vehicles)||0) + (parseFloat(otherAssets)||0);
    const liabilities = (parseFloat(mortgage)||0) + (parseFloat(carLoans)||0) + (parseFloat(creditCards)||0) + (parseFloat(studentLoans)||0) + (parseFloat(otherDebts)||0);
    const netWorth = assets - liabilities;
    setResult({ assets, liabilities, netWorth });
  };

  const inputClass = "w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400";

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Net Worth Calculator</h1>
          <p className="text-gray-400 text-base">Your net worth is your real financial score. Calculate it in 60 seconds.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <h2 className="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-widest">Assets</h2>
            <div className="space-y-3">
              <div><label className="block text-sm text-gray-300 mb-1">Cash & Savings ($)</label><input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Investments & Retirement ($)</label><input type="number" value={investments} onChange={(e) => setInvestments(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Real Estate Value ($)</label><input type="number" value={realEstate} onChange={(e) => setRealEstate(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Vehicles ($)</label><input type="number" value={vehicles} onChange={(e) => setVehicles(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Other Assets ($)</label><input type="number" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} placeholder="0" className={inputClass} /></div>
            </div>
          </div>
          <div>
            <h2 className="text-red-400 font-semibold mb-4 uppercase text-sm tracking-widest">Liabilities</h2>
            <div className="space-y-3">
              <div><label className="block text-sm text-gray-300 mb-1">Mortgage Balance ($)</label><input type="number" value={mortgage} onChange={(e) => setMortgage(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Car Loans ($)</label><input type="number" value={carLoans} onChange={(e) => setCarLoans(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Credit Card Debt ($)</label><input type="number" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Student Loans ($)</label><input type="number" value={studentLoans} onChange={(e) => setStudentLoans(e.target.value)} placeholder="0" className={inputClass} /></div>
              <div><label className="block text-sm text-gray-300 mb-1">Other Debts ($)</label><input type="number" value={otherDebts} onChange={(e) => setOtherDebts(e.target.value)} placeholder="0" className={inputClass} /></div>
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Calculate My Net Worth</button>
          {result !== null && (
            <div className="space-y-4">
              <div className={`rounded-xl p-6 text-center border ${result.netWorth >= 0 ? "bg-gray-800 border-orange-400/30" : "bg-red-900/20 border-red-400/30"}`}>
                <p className="text-gray-400 text-sm mb-1">Your Net Worth</p>
                <p className={`text-5xl font-bold ${result.netWorth >= 0 ? "text-orange-400" : "text-red-400"}`}>${result.netWorth.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Assets</p>
                  <p className="text-xl font-bold text-green-400">${result.assets.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Liabilities</p>
                  <p className="text-xl font-bold text-red-400">${result.liabilities.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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

import type { Metadata } from "next";


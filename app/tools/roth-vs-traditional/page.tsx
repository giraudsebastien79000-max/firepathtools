"use client";
import { useState } from "react";

export default function RothVsTraditional() {
  const [contribution, setContribution] = useState("7000");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("65");
  const [taxNow, setTaxNow] = useState("");
  const [taxRetirement, setTaxRetirement] = useState("");
  const [returnRate, setReturnRate] = useState("7");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const c = parseFloat(contribution);
    const years = parseFloat(retirementAge) - parseFloat(currentAge);
    const r = parseFloat(returnRate) / 100;
    const tNow = parseFloat(taxNow) / 100;
    const tRet = parseFloat(taxRetirement) / 100;
    const growth = Math.pow(1 + r, years);
    const rothValue = c * growth;
    const rothAfterTax = rothValue;
    const tradContrib = c / (1 - tNow);
    const tradValue = tradContrib * growth;
    const tradAfterTax = tradValue * (1 - tRet);
    const winner = rothAfterTax > tradAfterTax ? "Roth IRA" : "Traditional IRA";
    const diff = Math.abs(rothAfterTax - tradAfterTax);
    setResult({ rothValue, rothAfterTax, tradValue, tradAfterTax, winner, diff, years });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Roth IRA vs Traditional IRA</h1>
          <p className="text-gray-400 text-base">Find out which retirement account wins for your specific tax situation.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Annual Contribution ($)</label>
            <input type="number" value={contribution} onChange={(e) => setContribution(e.target.value)} placeholder="7000" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            <p className="text-xs text-gray-500 mt-1">2024 IRA limit: $7,000 ($8,000 if age 50+).</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Age</label>
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g. 35" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Retirement Age</label>
              <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} placeholder="65" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tax Rate Now (%)</label>
              <input type="number" value={taxNow} onChange={(e) => setTaxNow(e.target.value)} placeholder="e.g. 22" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tax Rate in Retirement (%)</label>
              <input type="number" value={taxRetirement} onChange={(e) => setTaxRetirement(e.target.value)} placeholder="e.g. 15" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Expected Annual Return (%)</label>
            <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">Compare Accounts</button>
          {result !== null && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-4 border border-orange-400/30 text-center">
                <p className="text-gray-400 text-sm mb-1">Winner for your situation</p>
                <p className="text-3xl font-bold text-orange-400">{result.winner}</p>
                <p className="text-gray-400 text-sm mt-1">by ${result.diff.toLocaleString("en-US", { maximumFractionDigits: 0 })} after tax over {result.years} years</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-orange-400 text-xs font-semibold mb-2">ROTH IRA</p>
                  <p className="text-gray-400 text-xs mb-1">Balance at retirement</p>
                  <p className="text-lg font-bold text-white">${result.rothValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                  <p className="text-gray-400 text-xs mt-2 mb-1">After-tax value</p>
                  <p className="text-lg font-bold text-green-400">${result.rothAfterTax.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                  <p className="text-blue-400 text-xs font-semibold mb-2">TRADITIONAL IRA</p>
                  <p className="text-gray-400 text-xs mb-1">Balance at retirement</p>
                  <p className="text-lg font-bold text-white">${result.tradValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
                  <p className="text-gray-400 text-xs mt-2 mb-1">After-tax value</p>
                  <p className="text-lg font-bold text-green-400">${result.tradAfterTax.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
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
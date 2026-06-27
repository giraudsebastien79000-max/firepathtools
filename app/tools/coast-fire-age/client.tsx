"use client";
import { useState } from "react";

export default function CoastFireAgeClient() {
  const [currentAge, setCurrentAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [fireNumber, setFireNumber] = useState("");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [retirementAge, setRetirementAge] = useState("65");
  const [result, setResult] = useState<null | { coastAge: number; coastNumber: number; yearsToCoast: number }>(null);

  const calculate = () => {
    const age = parseFloat(currentAge);
    const savings = parseFloat(currentSavings);
    const fire = parseFloat(fireNumber);
    const r = parseFloat(annualReturn) / 100;
    const retire = parseFloat(retirementAge);
    if (!age || !savings || !fire || !r || !retire) return;
    if (savings >= fire) {
      setResult({ coastAge: age, coastNumber: fire, yearsToCoast: 0 });
      return;
    }
    const yearsNeeded = Math.log(fire / savings) / Math.log(1 + r);
    const coastAge = retire - yearsNeeded;
    const yearsToCoast = Math.max(0, coastAge - age);
    const coastNumber = fire / Math.pow(1 + r, retire - Math.max(coastAge, age));
    setResult({
      coastAge: Math.round(coastAge * 10) / 10,
      coastNumber: Math.round(coastNumber),
      yearsToCoast: Math.round(yearsToCoast * 10) / 10,
    });
  };

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Coast FIRE Age Calculator</h1>
        <p className="text-gray-300 mb-8">Find out at what age you can stop actively saving and let compound interest do the rest.</p>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-6 space-y-5">
          <div>
            <label className="text-gray-300 font-medium block mb-1">Current Age</label>
            <input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)}
              placeholder="e.g. 30" className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Current Savings / Investments ($)</label>
            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(e.target.value)}
              placeholder="e.g. 80000" className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Your FIRE Number ($)</label>
            <input type="number" value={fireNumber} onChange={e => setFireNumber(e.target.value)}
              placeholder="e.g. 1000000" className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Expected Annual Return (%)</label>
            <input type="number" value={annualReturn} onChange={e => setAnnualReturn(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Target Retirement Age</label>
            <input type="number" value={retirementAge} onChange={e => setRetirementAge(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
            Calculate My Coast FIRE Age
          </button>
        </div>
        {result && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Your Results</h2>
            {result.yearsToCoast === 0 ? (
              <div className="bg-green-950 border border-green-700 rounded-xl p-4 text-center">
                <p className="text-green-300 text-lg font-semibold">You have already reached Coast FIRE!</p>
                <p className="text-gray-300 text-sm mt-1">Your savings will grow to your FIRE number by retirement without additional contributions.</p>
              </div>
            ) : (
              <>
                <div className="bg-orange-950 border border-orange-700 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">You reach Coast FIRE at age</p>
                  <p className="text-5xl font-bold text-orange-400">{result.coastAge}</p>
                  <p className="text-gray-300 text-sm mt-1">That is in {result.yearsToCoast} years</p>
                </div>
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">Coast FIRE number today</p>
                  <p className="text-2xl font-bold text-white">{fmt(result.coastNumber)}</p>
                  <p className="text-gray-400 text-sm mt-1">Once you hit this, you can stop contributing</p>
                </div>
              </>
            )}
            <p className="text-gray-400 text-xs text-center mt-4">Assumes {annualReturn}% average annual return. For educational purposes only.</p>
          </div>
        )}
        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">What is Coast FIRE Age?</h2>
          <p>Coast FIRE Age is the age at which your invested assets are large enough that even without any additional contributions they will grow to your full FIRE number by your target retirement age.</p>
          <p>Once you reach your Coast FIRE age, you only need to cover your living expenses. You no longer need to save for retirement.</p>
          <h2 className="text-2xl font-bold text-white">How is it calculated?</h2>
          <p>The formula works backwards from your FIRE number using compound interest:</p>
          <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 font-mono text-sm text-orange-300">
            Coast FIRE Number = FIRE Number / (1 + r)^(years to retirement)
          </div>
          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            <div><p className="font-semibold text-white">What if my Coast FIRE age is in the past?</p><p className="text-gray-300 mt-1">You have already coasted. Your savings will compound to your FIRE number by retirement without new contributions.</p></div>
            <div><p className="font-semibold text-white">What return rate should I use?</p><p className="text-gray-300 mt-1">Most FIRE calculators use 7% inflation-adjusted. Conservative planners use 5 to 6%.</p></div>
            <div><p className="font-semibold text-white">Does Coast FIRE mean I can stop working?</p><p className="text-gray-300 mt-1">No. It means you can stop saving for retirement, but you still need income for daily expenses. Many people switch to lower-stress jobs at this point.</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
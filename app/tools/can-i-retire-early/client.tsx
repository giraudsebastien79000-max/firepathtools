"use client";
import { useState } from "react";

export default function CanIRetireEarlyClient() {
  const [currentAge, setCurrentAge] = useState("");
  const [targetAge, setTargetAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [annualSavings, setAnnualSavings] = useState("");
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [swr, setSwr] = useState("4");
  const [result, setResult] = useState<null | {
    canRetire: boolean;
    projectedSavings: number;
    fireNumber: number;
    gap: number;
    actualRetireAge: number;
  }>(null);

  const calculate = () => {
    const age = parseFloat(currentAge);
    const target = parseFloat(targetAge);
    const savings = parseFloat(currentSavings);
    const annual = parseFloat(annualSavings);
    const expenses = parseFloat(annualExpenses);
    const r = parseFloat(annualReturn) / 100;
    const swrRate = parseFloat(swr) / 100;
    if (!age || !target || !savings || !annual || !expenses || !r || !swrRate) return;

    const fireNumber = expenses / swrRate;
    const years = target - age;

    let projected = savings;
    for (let i = 0; i < years; i++) {
      projected = projected * (1 + r) + annual;
    }

    const canRetire = projected >= fireNumber;
    const gap = fireNumber - projected;

    let actualRetireAge = target;
    if (!canRetire) {
      let s = savings;
      let a = age;
      while (s < fireNumber && a < 80) {
        s = s * (1 + r) + annual;
        a++;
      }
      actualRetireAge = a;
    }

    setResult({ canRetire, projectedSavings: Math.round(projected), fireNumber: Math.round(fireNumber), gap: Math.round(Math.abs(gap)), actualRetireAge });
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Can I Retire Early Calculator</h1>
        <p className="text-gray-300 mb-8">Enter your numbers and find out if early retirement is within reach.</p>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 font-medium block mb-1">Current Age</label>
              <input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} placeholder="e.g. 35"
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="text-gray-300 font-medium block mb-1">Target Retirement Age</label>
              <input type="number" value={targetAge} onChange={e => setTargetAge(e.target.value)} placeholder="e.g. 50"
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            </div>
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Current Savings / Investments ($)</label>
            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(e.target.value)} placeholder="e.g. 200000"
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Annual Savings / Contributions ($)</label>
            <input type="number" value={annualSavings} onChange={e => setAnnualSavings(e.target.value)} placeholder="e.g. 30000"
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Annual Expenses in Retirement ($)</label>
            <input type="number" value={annualExpenses} onChange={e => setAnnualExpenses(e.target.value)} placeholder="e.g. 40000"
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 font-medium block mb-1">Expected Return (%)</label>
              <input type="number" value={annualReturn} onChange={e => setAnnualReturn(e.target.value)}
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="text-gray-300 font-medium block mb-1">Withdrawal Rate (%)</label>
              <input type="number" value={swr} onChange={e => setSwr(e.target.value)}
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
            </div>
          </div>
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
            Check My FIRE Readiness
          </button>
        </div>

        {result && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Your Results</h2>
            {result.canRetire ? (
              <div className="bg-green-950 border border-green-700 rounded-xl p-4 text-center">
                <p className="text-green-300 text-2xl font-bold">Yes, you can retire early!</p>
                <p className="text-gray-300 text-sm mt-1">Your projected savings exceed your FIRE number at your target age.</p>
              </div>
            ) : (
              <div className="bg-red-950 border border-red-800 rounded-xl p-4 text-center">
                <p className="text-red-300 text-2xl font-bold">Not quite yet</p>
                <p className="text-gray-300 text-sm mt-1">At your current pace, you can retire at age <span className="text-orange-400 font-bold">{result.actualRetireAge}</span></p>
              </div>
            )}
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 flex justify-between items-center">
                <span className="text-gray-300">Projected savings at {targetAge}</span>
                <span className="text-white font-bold">{fmt(result.projectedSavings)}</span>
              </div>
              <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 flex justify-between items-center">
                <span className="text-gray-300">Your FIRE number</span>
                <span className="text-white font-bold">{fmt(result.fireNumber)}</span>
              </div>
              {!result.canRetire && (
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-gray-300">Gap to close</span>
                  <span className="text-red-400 font-bold">{fmt(result.gap)}</span>
                </div>
              )}
              {result.canRetire && (
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-gray-300">Surplus above FIRE number</span>
                  <span className="text-green-400 font-bold">{fmt(result.gap)}</span>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-xs text-center mt-2">Assumes {annualReturn}% return. For educational purposes only.</p>
          </div>
        )}

        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">How does this calculator work?</h2>
          <p>This tool projects your investment portfolio forward year by year, adding your annual contributions and applying compound growth. It then compares the result to your FIRE number — your expenses divided by your safe withdrawal rate.</p>
          <h2 className="text-2xl font-bold text-white">What is a safe withdrawal rate?</h2>
          <p>The 4% rule is the most common benchmark. It suggests that withdrawing 4% of your portfolio per year gives a high probability of lasting 30+ years. More conservative planners use 3 to 3.5% for longer retirements.</p>
          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            <div><p className="font-semibold text-white">What return rate should I use?</p><p className="text-gray-300 mt-1">7% is the inflation-adjusted historical average for a diversified US stock portfolio. Use 5 to 6% if you want to be conservative.</p></div>
            <div><p className="font-semibold text-white">Should I include Social Security or pension?</p><p className="text-gray-300 mt-1">If you expect income from Social Security or a pension, reduce your annual expenses by that amount before entering it in the calculator.</p></div>
            <div><p className="font-semibold text-white">What if I plan to work part-time in retirement?</p><p className="text-gray-300 mt-1">This is Barista FIRE or Coast FIRE territory. Reduce your annual expenses by the part-time income you expect and recalculate.</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
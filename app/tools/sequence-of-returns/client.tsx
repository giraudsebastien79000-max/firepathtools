"use client";
import { useState } from "react";

type Scenario = { age: number; good: number; bad: number };

export default function SequenceOfReturnsClient() {
  const [portfolio, setPortfolio] = useState("1000000");
  const [withdrawal, setWithdrawal] = useState("40000");
  const [years, setYears] = useState("30");
  const [result, setResult] = useState<null | { scenarios: Scenario[]; goodFinal: number; badFinal: number; goodSurvived: boolean; badSurvived: boolean }>(null);

  const goodReturns = [0.15, 0.12, 0.18, 0.10, 0.08, 0.14, 0.06, 0.11, 0.09, 0.13, -0.05, -0.10, 0.07, 0.12, 0.09, 0.08, 0.10, 0.06, 0.11, 0.07, 0.08, 0.09, 0.06, 0.07, 0.08, 0.05, 0.07, 0.06, 0.08, 0.07];
  const badReturns = [...goodReturns].reverse();

  const calculate = () => {
    const p = parseFloat(portfolio);
    const w = parseFloat(withdrawal);
    const y = parseInt(years);
    if (!p || !w || !y) return;

    const scenarios: Scenario[] = [];
    let good = p;
    let bad = p;

    for (let i = 0; i < y; i++) {
      good = Math.max(0, good * (1 + (goodReturns[i % goodReturns.length])) - w);
      bad = Math.max(0, bad * (1 + (badReturns[i % badReturns.length])) - w);
      scenarios.push({ age: i + 1, good: Math.round(good), bad: Math.round(bad) });
    }

    setResult({
      scenarios,
      goodFinal: Math.round(good),
      badFinal: Math.round(bad),
      goodSurvived: good > 0,
      badSurvived: bad > 0,
    });
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Sequence of Returns Risk Calculator</h1>
        <p className="text-gray-300 mb-8">See how the timing of market crashes affects your portfolio — even with the same average return.</p>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-6 space-y-5">
          <div>
            <label className="text-gray-300 font-medium block mb-1">Starting Portfolio Value ($)</label>
            <input type="number" value={portfolio} onChange={e => setPortfolio(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Annual Withdrawal ($)</label>
            <input type="number" value={withdrawal} onChange={e => setWithdrawal(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Retirement Duration (years)</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
          </div>
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
            Simulate Sequence Risk
          </button>
        </div>

        {result && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-2xl p-5 border text-center ${result.goodSurvived ? "bg-green-950 border-green-700" : "bg-red-950 border-red-800"}`}>
                <p className="text-gray-300 text-sm mb-1">Good sequence final value</p>
                <p className="text-2xl font-bold text-white">{fmt(result.goodFinal)}</p>
                <p className={`text-sm mt-1 font-medium ${result.goodSurvived ? "text-green-400" : "text-red-400"}`}>
                  {result.goodSurvived ? "Portfolio survived" : "Portfolio depleted"}
                </p>
              </div>
              <div className={`rounded-2xl p-5 border text-center ${result.badSurvived ? "bg-green-950 border-green-700" : "bg-red-950 border-red-800"}`}>
                <p className="text-gray-300 text-sm mb-1">Bad sequence final value</p>
                <p className="text-2xl font-bold text-white">{fmt(result.badFinal)}</p>
                <p className={`text-sm mt-1 font-medium ${result.badSurvived ? "text-green-400" : "text-red-400"}`}>
                  {result.badSurvived ? "Portfolio survived" : "Portfolio depleted"}
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              <h2 className="text-lg font-bold text-white mb-3">Year-by-Year Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-slate-600">
                      <th className="text-left py-2 pr-4">Year</th>
                      <th className="text-right py-2 pr-4 text-green-400">Good Sequence</th>
                      <th className="text-right py-2 text-red-400">Bad Sequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.scenarios.filter((_, i) => i % 5 === 4 || i === 0 || i === result.scenarios.length - 1).map(s => (
                      <tr key={s.age} className="border-b border-slate-700">
                        <td className="py-2 pr-4 text-gray-300">Year {s.age}</td>
                        <td className="py-2 pr-4 text-right text-white">{fmt(s.good)}</td>
                        <td className="py-2 text-right text-white">{fmt(s.bad)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-orange-950 border border-orange-700 rounded-2xl p-4">
              <p className="text-orange-300 font-semibold">Same average return. Wildly different outcomes.</p>
              <p className="text-gray-300 text-sm mt-1">The difference between the two scenarios is {fmt(Math.abs(result.goodFinal - result.badFinal))}. This is sequence of returns risk.</p>
            </div>
          </div>
        )}

        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">What is Sequence of Returns Risk?</h2>
          <p>Sequence of returns risk is the danger that the timing of market downturns will permanently damage your retirement portfolio. Two retirees with identical average returns can end up with vastly different outcomes depending on when crashes occur.</p>
          <p>If the market crashes in your first few years of retirement while you are withdrawing, you sell shares at low prices to cover expenses. This permanently reduces the number of shares that can recover when markets rebound.</p>

          <h2 className="text-2xl font-bold text-white">How to protect against it</h2>
          <p>Common strategies include keeping 1 to 2 years of expenses in cash, using a flexible withdrawal strategy (spend less in down years), diversifying into bonds early in retirement, and considering a bucket strategy to segment short and long-term assets.</p>

          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            <div><p className="font-semibold text-white">Why does the order of returns matter?</p><p className="text-gray-300 mt-1">When you are withdrawing money, bad early returns force you to sell more shares to meet the same withdrawal amount. Those shares cannot recover when markets bounce back.</p></div>
            <div><p className="font-semibold text-white">Does this affect the accumulation phase?</p><p className="text-gray-300 mt-1">Much less so. During accumulation you are buying shares, so crashes let you buy more at lower prices. The risk is primarily in the withdrawal phase.</p></div>
            <div><p className="font-semibold text-white">What withdrawal rate reduces this risk?</p><p className="text-gray-300 mt-1">Lower withdrawal rates like 3 to 3.5% provide significantly more buffer against bad sequence risk than the standard 4% rule.</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
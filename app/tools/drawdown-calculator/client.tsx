"use client";
import { useState } from "react";

type Row = { year: number; startBalance: number; withdrawal: number; growth: number; endBalance: number };

export default function DrawdownClient() {
  const [portfolio, setPortfolio] = useState("1000000");
  const [withdrawal, setWithdrawal] = useState("40000");
  const [returnRate, setReturnRate] = useState("7");
  const [inflation, setInflation] = useState("3");
  const [result, setResult] = useState<null | { rows: Row[]; depleted: boolean; depletedYear: number | null; finalBalance: number }>(null);

  const calculate = () => {
    const p = parseFloat(portfolio);
    const w = parseFloat(withdrawal);
    const r = parseFloat(returnRate) / 100;
    const inf = parseFloat(inflation) / 100;
    if (!p || !w || !r) return;

    const rows: Row[] = [];
    let balance = p;
    let annualWithdrawal = w;
    let depleted = false;
    let depletedYear: number | null = null;

    for (let year = 1; year <= 50; year++) {
      if (balance <= 0) break;
      const startBalance = balance;
      const growth = balance * r;
      const endBalance = Math.max(0, startBalance + growth - annualWithdrawal);
      rows.push({
        year,
        startBalance: Math.round(startBalance),
        withdrawal: Math.round(annualWithdrawal),
        growth: Math.round(growth),
        endBalance: Math.round(endBalance),
      });
      if (endBalance === 0 && !depleted) {
        depleted = true;
        depletedYear = year;
      }
      balance = endBalance;
      annualWithdrawal = annualWithdrawal * (1 + inf);
    }

    setResult({ rows, depleted, depletedYear, finalBalance: Math.round(balance) });
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Drawdown Calculator</h1>
        <p className="text-gray-300 mb-8">Find out how long your retirement portfolio will last — year by year.</p>

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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 font-medium block mb-1">Expected Return (%)</label>
              <input type="number" value={returnRate} onChange={e => setReturnRate(e.target.value)}
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="text-gray-300 font-medium block mb-1">Inflation Rate (%)</label>
              <input type="number" value={inflation} onChange={e => setInflation(e.target.value)}
                className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
            </div>
          </div>
          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
            Calculate Drawdown
          </button>
        </div>

        {result && (
          <div className="space-y-6">
            <div className={`rounded-2xl p-5 border text-center ${result.depleted ? "bg-red-950 border-red-800" : "bg-green-950 border-green-700"}`}>
              {result.depleted ? (
                <>
                  <p className="text-red-300 text-xl font-bold">Portfolio depleted in year {result.depletedYear}</p>
                  <p className="text-gray-300 text-sm mt-1">At this withdrawal rate, your money runs out. Consider reducing withdrawals or increasing returns.</p>
                </>
              ) : (
                <>
                  <p className="text-green-300 text-xl font-bold">Portfolio survives 50+ years</p>
                  <p className="text-gray-300 text-sm mt-1">Projected balance after 50 years: <span className="text-white font-bold">{fmt(result.finalBalance)}</span></p>
                </>
              )}
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              <h2 className="text-lg font-bold text-white mb-3">Year-by-Year Drawdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-slate-600">
                      <th className="text-left py-2 pr-3">Year</th>
                      <th className="text-right py-2 pr-3">Start Balance</th>
                      <th className="text-right py-2 pr-3">Withdrawal</th>
                      <th className="text-right py-2 pr-3">Growth</th>
                      <th className="text-right py-2">End Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows.filter((_, i) => i % 5 === 0 || i === result.rows.length - 1).map(r => (
                      <tr key={r.year} className="border-b border-slate-700">
                        <td className="py-2 pr-3 text-gray-300">Year {r.year}</td>
                        <td className="py-2 pr-3 text-right text-white">{fmt(r.startBalance)}</td>
                        <td className="py-2 pr-3 text-right text-red-400">-{fmt(r.withdrawal)}</td>
                        <td className="py-2 pr-3 text-right text-green-400">+{fmt(r.growth)}</td>
                        <td className="py-2 text-right text-white font-medium">{fmt(r.endBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">What is a drawdown calculator?</h2>
          <p>A drawdown calculator shows you how your retirement portfolio shrinks over time as you make regular withdrawals. It accounts for investment growth and inflation to give you a realistic picture of how long your money will last.</p>
          <h2 className="text-2xl font-bold text-white">Why does inflation matter?</h2>
          <p>Inflation increases your cost of living each year. A fixed withdrawal of $40,000 today will need to be $53,000 in 10 years at 3% inflation just to maintain the same purchasing power. This calculator adjusts your withdrawal upward each year to reflect this.</p>
          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            <div><p className="font-semibold text-white">What return rate should I use?</p><p className="text-gray-300 mt-1">7% is the inflation-adjusted historical average for US equities. If you are already accounting for inflation in your withdrawal, use a nominal return of around 10% instead.</p></div>
            <div><p className="font-semibold text-white">My portfolio depletes — what can I do?</p><p className="text-gray-300 mt-1">Reduce your annual withdrawal, increase your starting balance, or lower your expected inflation rate. Even a 10% reduction in withdrawals can add many years to your portfolio.</p></div>
            <div><p className="font-semibold text-white">How is this different from the 4% rule?</p><p className="text-gray-300 mt-1">The 4% rule is a guideline. This calculator lets you stress-test any combination of withdrawal rate, return, and inflation specific to your situation.</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
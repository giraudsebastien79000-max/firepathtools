"use client";
import { useState } from "react";

const FIRE_TYPES = [
  {
    key: "lean",
    label: "Lean FIRE",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-900/20",
    desc: "Frugal lifestyle, under $40k/year",
    multiplier: 1,
  },
  {
    key: "regular",
    label: "Regular FIRE",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-900/20",
    desc: "Comfortable lifestyle, your actual expenses",
    multiplier: 1,
  },
  {
    key: "fat",
    label: "Fat FIRE",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-900/20",
    desc: "Luxurious lifestyle, 2x your expenses",
    multiplier: 2,
  },
  {
    key: "barista",
    label: "Barista FIRE",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-900/20",
    desc: "Semi-retired with part-time income ($15k/year)",
    multiplier: 1,
    partTime: 15000,
  },
];

export default function FIRENumberClient() {
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [returnRate, setReturnRate] = useState("7");
  const [inflationRate, setInflationRate] = useState("3");
  const [currentAge, setCurrentAge] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const expenses = parseFloat(annualExpenses);
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(returnRate) / 100;
    const inf = parseFloat(inflationRate) / 100;
    const age = parseFloat(currentAge) || 30;
    const realReturn = (1 + r) / (1 + inf) - 1;
    const rMonthly = realReturn / 12;

    const fireTypes = FIRE_TYPES.map((type) => {
      let adjExpenses = expenses * type.multiplier;
      if (type.partTime) adjExpenses = Math.max(0, adjExpenses - type.partTime);

      const fireAt3 = adjExpenses / 0.03;
      const fireAt35 = adjExpenses / 0.035;
      const fireAt4 = adjExpenses / 0.04;

      let monthsTo4 = 0;
      let balance = savings;
      while (balance < fireAt4 && monthsTo4 < 1200) {
        balance = balance * (1 + rMonthly) + monthly;
        monthsTo4++;
      }
      const yearsTo4 = (monthsTo4 / 12).toFixed(1);
      const retirementAge = (age + monthsTo4 / 12).toFixed(1);
      const progress = Math.min(100, (savings / fireAt4) * 100);

      return {
        ...type,
        adjExpenses,
        fireAt3,
        fireAt35,
        fireAt4,
        yearsTo4,
        retirementAge,
        progress: progress.toFixed(1),
        reached: savings >= fireAt4,
      };
    });

    setResult({ fireTypes, expenses, savings, monthly, age });
  };

  const fmt = (n) =>
    n >= 1000000
      ? "$" + (n / 1000000).toFixed(2) + "M"
      : "$" + Math.round(n).toLocaleString("en-US");

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            FirePath Tools
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">FIRE Number Calculator</h1>
          <p className="text-gray-400 text-base">
            Find your exact number for Lean, Regular, Fat, and Barista FIRE.
            See your timeline, inflation-adjusted target, and retirement age.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800 mb-8">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Annual Expenses in Retirement ($)
              </label>
              <input
                type="number"
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(e.target.value)}
                placeholder="e.g. 50000"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
              />
              <p className="text-xs text-gray-500 mt-1">
                How much do you plan to spend per year in retirement?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Savings ($)
                </label>
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(e.target.value)}
                  placeholder="e.g. 50000"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Monthly Contribution ($)
                </label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  placeholder="e.g. 1500"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Age
                </label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  placeholder="30"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Annual Return (%)
                </label>
                <input
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  placeholder="7"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Inflation (%)
                </label>
                <input
                  type="number"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                  placeholder="3"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            Calculate My FIRE Numbers
          </button>
        </div>

        {result !== null && (
          <div className="space-y-4">
            <p className="text-gray-400 text-xs uppercase tracking-widest text-center mb-6">
              Your FIRE Numbers — 4 Scenarios
            </p>

            {result.fireTypes.map((type) => (
              <div
                key={type.key}
                className={`rounded-2xl p-6 border ${type.border} ${type.bg}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className={`text-lg font-bold ${type.color}`}>
                      {type.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{type.desc}</p>
                  </div>
                  {type.reached ? (
                    <span className="text-green-400 text-xs font-bold bg-green-900/30 px-3 py-1 rounded-full">
                      REACHED
                    </span>
                  ) : (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gray-800 ${type.color}`}>
                      Age {type.retirementAge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-900/50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs mb-1">3% rule</p>
                    <p className="text-white font-bold text-sm">
                      {fmt(type.fireAt3)}
                    </p>
                  </div>
                  <div className={`rounded-xl p-3 text-center border ${type.border} bg-gray-900/80`}>
                    <p className={`text-xs mb-1 ${type.color}`}>4% rule</p>
                    <p className={`font-bold ${type.color}`}>
                      {fmt(type.fireAt4)}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs mb-1">5% rule</p>
                    <p className="text-white font-bold text-sm">
                      {fmt(type.fireAt35)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Progress toward 4% target</span>
                    <span className={`font-bold ${type.color}`}>
                      {type.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        type.key === "lean"
                          ? "bg-blue-400"
                          : type.key === "regular"
                          ? "bg-orange-400"
                          : type.key === "fat"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                      style={{ width: type.progress + "%" }}
                    ></div>
                  </div>
                </div>

                {!type.reached && (
                  <p className="text-gray-500 text-xs mt-3 text-right">
                    {type.yearsTo4} years away
                  </p>
                )}
              </div>
            ))}

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mt-6">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">
                How to read these numbers
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <p>
                  <span className="text-white font-semibold">3% rule</span> —
                  Ultra-conservative. Your portfolio lasts 40+ years.
                </p>
                <p>
                  <span className="text-white font-semibold">4% rule</span> —
                  Standard FIRE. Based on the Trinity Study (30-year horizon).
                </p>
                <p>
                  <span className="text-white font-semibold">5% rule</span> —
                  Aggressive. Works better for shorter retirements.
                </p>
                <p>
                  <span className="text-white font-semibold">Barista FIRE</span> —
                  Assumes $15,000/year from part-time work, reducing your needed
                  portfolio.
                </p>
                <p className="text-gray-500 pt-1">
                  Returns are inflation-adjusted using your {inflationRate}%
                  inflation rate and {returnRate}% nominal return (real return:{" "}
                  {(
                    ((1 + parseFloat(returnRate) / 100) /
                      (1 + parseFloat(inflationRate) / 100) -
                      1) *
                    100
                  ).toFixed(1)}
                  %).
                </p>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-gray-600 text-xs mt-8">
          firepathtools.com -- Free financial independence tools
        </p>
      </div>
    </main>
  );
}

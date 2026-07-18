"use client";
import { useState } from "react";

export default function CoastFireAgeClient() {
  const [currentAge, setCurrentAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [fireNumber, setFireNumber] = useState("");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [retirementAge, setRetirementAge] = useState("65");
  const [result, setResult] = useState<null | {
    coastAge: number | null;
    coastNumber: number;
    yearsToCoast: number | null;
    savingsAtCoast: number | null;
    gap: number;
    alreadyCoasted: boolean;
    reachable: boolean;
  }>(null);

  const calculate = () => {
    const age = parseFloat(currentAge);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlyContribution) || 0;
    const fire = parseFloat(fireNumber);
    const r = parseFloat(annualReturn) / 100;
    const retire = parseFloat(retirementAge);

    if (!age || !savings || !fire || !r || !retire) return;
    if (retire <= age) return;

    // Coast FIRE number needed today: the amount that grows to the FIRE
    // number by retirement with no further contributions.
    const coastNumberToday = fire / Math.pow(1 + r, retire - age);
    const alreadyCoasted = savings >= coastNumberToday;

    if (alreadyCoasted) {
      setResult({
        coastAge: age,
        coastNumber: Math.round(coastNumberToday),
        yearsToCoast: 0,
        savingsAtCoast: Math.round(savings),
        gap: 0,
        alreadyCoasted: true,
        reachable: true,
      });
      return;
    }

    // Project forward month by month. The Coast FIRE target rises each month
    // (fewer years left to compound); savings rise from returns + contributions.
    // Coast FIRE age = first month where savings catch the moving target.
    const monthlyRate = Math.pow(1 + r, 1 / 12) - 1;
    const totalMonths = Math.round((retire - age) * 12);
    let balance = savings;
    let coastAge: number | null = null;
    let savingsAtCoast: number | null = null;

    for (let m = 1; m <= totalMonths; m++) {
      balance = balance * (1 + monthlyRate) + monthly;
      const ageAtM = age + m / 12;
      const targetAtM = fire / Math.pow(1 + r, retire - ageAtM);
      if (balance >= targetAtM) {
        coastAge = Math.round(ageAtM * 10) / 10;
        savingsAtCoast = Math.round(balance);
        break;
      }
    }

    setResult({
      coastAge,
      coastNumber: Math.round(coastNumberToday),
      yearsToCoast: coastAge === null ? null : Math.round((coastAge - age) * 10) / 10,
      savingsAtCoast,
      gap: Math.round(coastNumberToday - savings),
      alreadyCoasted: false,
      reachable: coastAge !== null,
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
            <label className="text-gray-300 font-medium block mb-1">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(e.target.value)}
              placeholder="e.g. 1000" className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            <p className="text-gray-400 text-xs mt-1">How much you invest each month until you reach Coast FIRE.</p>
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Your FIRE Number ($)</label>
            <input type="number" value={fireNumber} onChange={e => setFireNumber(e.target.value)}
              placeholder="e.g. 1000000" className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="text-gray-300 font-medium block mb-1">Expected Annual Return (%, after inflation)</label>
            <input type="number" value={annualReturn} onChange={e => setAnnualReturn(e.target.value)}
              className="w-full bg-gray-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500" />
            <p className="text-gray-400 text-xs mt-1">Use a real return. 7% is the common inflation-adjusted default.</p>
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
            {result.alreadyCoasted ? (
              <>
                <div className="bg-green-950 border border-green-700 rounded-xl p-4 text-center">
                  <p className="text-green-300 text-lg font-semibold">You have already reached Coast FIRE!</p>
                  <p className="text-gray-300 text-sm mt-1">Your savings will grow to your FIRE number by retirement without additional contributions.</p>
                </div>
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">Coast FIRE number needed today</p>
                  <p className="text-2xl font-bold text-white">{fmt(result.coastNumber)}</p>
                  <p className="text-gray-400 text-sm mt-1">You are already above this line.</p>
                </div>
              </>
            ) : result.reachable ? (
              <>
                <div className="bg-orange-950 border border-orange-700 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">You reach Coast FIRE at age</p>
                  <p className="text-5xl font-bold text-orange-400">{result.coastAge}</p>
                  <p className="text-gray-300 text-sm mt-1">That is in {result.yearsToCoast} years, at your current contribution rate</p>
                </div>
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">Your balance at that point</p>
                  <p className="text-2xl font-bold text-white">{result.savingsAtCoast !== null ? fmt(result.savingsAtCoast) : "-"}</p>
                  <p className="text-gray-400 text-sm mt-1">From then on you can stop contributing and still hit your FIRE number by {retirementAge}.</p>
                </div>
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">Coast FIRE number needed today</p>
                  <p className="text-2xl font-bold text-white">{fmt(result.coastNumber)}</p>
                  <p className="text-gray-400 text-sm mt-1">You are {fmt(result.gap)} short of coasting right now.</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-orange-950 border border-orange-700 rounded-xl p-4 text-center">
                  <p className="text-orange-300 text-lg font-semibold">Not reachable at your current contribution rate</p>
                  <p className="text-gray-300 text-sm mt-1">At this pace you never get ahead of the Coast FIRE line before age {retirementAge}. Increase your monthly contribution, push back your target retirement age, or lower your FIRE number.</p>
                </div>
                <div className="bg-gray-900 border border-slate-600 rounded-xl p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">Coast FIRE number needed today</p>
                  <p className="text-2xl font-bold text-white">{fmt(result.coastNumber)}</p>
                  <p className="text-gray-400 text-sm mt-1">You are {fmt(result.gap)} short of coasting right now.</p>
                </div>
              </>
            )}
            <p className="text-gray-400 text-xs text-center mt-4">Assumes {annualReturn}% average annual return after inflation. Results are in today&apos;s dollars. For educational purposes only.</p>
          </div>
        )}
        <div className="mt-10 space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">What is Coast FIRE Age?</h2>
          <p>Coast FIRE Age is the age at which your invested assets are large enough that even without any additional contributions they will grow to your full FIRE number by your target retirement age.</p>
          <p>Once you reach your Coast FIRE age, you only need to cover your living expenses. You no longer need to save for retirement.</p>
          <h2 className="text-2xl font-bold text-white">How is it calculated?</h2>
          <p>Your Coast FIRE number is what you would need invested today for compound growth alone to carry you to your FIRE number:</p>
          <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 font-mono text-sm text-orange-300">
            Coast FIRE Number = FIRE Number / (1 + r)^(years to retirement)
          </div>
          <p>That number rises every year, because each year leaves less time to compound. The calculator projects your balance forward month by month with your contributions, and reports the first age at which your balance overtakes that rising line.</p>
          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            <div><p className="font-semibold text-white">Why does the Coast FIRE number go up over time?</p><p className="text-gray-300 mt-1">Because compound growth needs time. At 35 with retirement at 65 you have 30 years of growth ahead. At 45 you only have 20, so you need a bigger starting balance to end up at the same place.</p></div>
            <div><p className="font-semibold text-white">What return rate should I use?</p><p className="text-gray-300 mt-1">Use a real return, meaning after inflation. 7% is the common default. Conservative planners use 5 to 6%. Do not enter a nominal return like 10%, or the result will overstate what you actually have in today&apos;s money.</p></div>
            <div><p className="font-semibold text-white">What if it says not reachable?</p><p className="text-gray-300 mt-1">Your contributions are growing your balance more slowly than the Coast FIRE line is rising. You can still reach your FIRE number by retirement, but you would have to keep contributing the whole way rather than coasting.</p></div>
            <div><p className="font-semibold text-white">Does Coast FIRE mean I can stop working?</p><p className="text-gray-300 mt-1">No. It means you can stop saving for retirement, but you still need income for daily expenses. Many people switch to lower-stress jobs at this point.</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}

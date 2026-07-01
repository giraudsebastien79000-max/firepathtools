"use client";
import { useState, useRef } from "react";

export default function FreedomDateClient() {
  const [currentAge, setCurrentAge] = useState("30");
  const [currentSavings, setCurrentSavings] = useState("20000");
  const [monthlyContribution, setMonthlyContribution] = useState("1000");
  const [annualExpenses, setAnnualExpenses] = useState("40000");
  const [returnRate, setReturnRate] = useState("7");
  const [withdrawalRate, setWithdrawalRate] = useState("4");
  const [result, setResult] = useState<null | {
    freedomDate: Date;
    ageAtFreedom: number;
    yearsAway: number;
    monthsAway: number;
    fireNumber: number;
  }>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const calculate = () => {
    const age = parseFloat(currentAge);
    const savings = parseFloat(currentSavings);
    const contribution = parseFloat(monthlyContribution);
    const expenses = parseFloat(annualExpenses);
    const rate = parseFloat(returnRate) / 100;
    const wr = parseFloat(withdrawalRate) / 100;

    const fireNumber = expenses / wr;
    const monthlyRate = rate / 12;

    let balance = savings;
    let months = 0;
    const maxMonths = 100 * 12;

    if (balance >= fireNumber) {
      setResult({
        freedomDate: new Date(),
        ageAtFreedom: age,
        yearsAway: 0,
        monthsAway: 0,
        fireNumber,
      });
      return;
    }

    while (balance < fireNumber && months < maxMonths) {
      balance = balance * (1 + monthlyRate) + contribution;
      months++;
    }

    const freedomDate = new Date();
    freedomDate.setMonth(freedomDate.getMonth() + months);

    const yearsAway = Math.floor(months / 12);
    const monthsAway = months % 12;
    const ageAtFreedom = age + months / 12;

    setResult({
      freedomDate,
      ageAtFreedom,
      yearsAway,
      monthsAway,
      fireNumber,
    });
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#030712",
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = "my-freedom-date.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-4xl font-bold mt-2 mb-3">Freedom Date Calculator</h1>
          <p className="text-gray-300 text-base">Find the exact date you can stop working, not just a number, a moment in time.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Age</label>
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g. 30" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Savings ($)</label>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="e.g. 20000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g. 1000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Annual Expenses in Retirement ($)</label>
            <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(e.target.value)} placeholder="e.g. 40000" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Return (%)</label>
              <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="7" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">7% is the historical average.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Withdrawal Rate (%)</label>
              <input type="number" value={withdrawalRate} onChange={(e) => setWithdrawalRate(e.target.value)} placeholder="4" className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400" />
              <p className="text-xs text-gray-500 mt-1">4% rule standard.</p>
            </div>
          </div>

          <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-colors">
            Find My Freedom Date
          </button>
        </div>

        {result && (
          <div style={{ marginTop: "32px" }}>
            <div ref={cardRef} style={{ background: "#0b1120", borderRadius: "16px", padding: "40px", textAlign: "center", border: "1px solid rgba(251,146,60,0.3)" }}>
              <p style={{ color: "#fb923c", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Your Freedom Date</p>
              <p style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
                {result.yearsAway === 0 ? "You are already there!" : formatDate(result.freedomDate)}
              </p>
              {result.yearsAway > 0 && (
                <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "24px" }}>
                  {result.yearsAway}y {result.monthsAway}m from now, at age {Math.round(result.ageAtFreedom)}
                </p>
              )}
              <div style={{ borderTop: "1px solid #374151", paddingTop: "16px", marginTop: "16px" }}>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>FIRE Number</p>
                <p style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>${result.fireNumber.toLocaleString("en-US", { maximumFractionDigits: 0 })}</p>
              </div>
              <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "24px" }}>firepathtools.com</p>
            </div>

            <button onClick={downloadCard} disabled={downloading} className="w-full mt-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50">
              {downloading ? "Preparing image..." : "Download and Share My Freedom Date"}
            </button>
          </div>
        )}

        <p className="text-center text-gray-600 text-xs mt-8">firepathtools.com, Free financial independence tools</p>
      </div>
    </main>
  );
}
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All FIRE Calculators | FirePath Tools",
  description: "Every free calculator on FirePath Tools. No signup. No ads. Just tools that work.",
};

export default function HubPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold tracking-widest text-orange-500 uppercase">FirePath Tools</p>
        <h1 className="mt-2 text-center text-4xl font-bold text-white">All FIRE Calculators</h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">Every free calculator on FirePath Tools. No signup. No ads. Just tools that work.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/tools/budget-planner" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Budget Planner</span></Link>
        <Link href="/tools/can-i-retire-early" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Can I Retire Early</span></Link>
        <Link href="/tools/coast-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Coast FIRE</span></Link>
        <Link href="/tools/coast-fire-age" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Coast FIRE Age</span></Link>
        <Link href="/tools/compound-interest" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Compound Interest</span></Link>
        <Link href="/tools/debt-payoff" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Debt Payoff</span></Link>
        <Link href="/tools/drawdown-calculator" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Drawdown Calculator</span></Link>
        <Link href="/tools/emergency-fund" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Emergency Fund</span></Link>
        <Link href="/tools/fire-gap" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">FIRE Gap</span></Link>
        <Link href="/tools/fire-number" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">FIRE Number</span></Link>
        <Link href="/tools/fire-progress" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">FIRE Progress</span></Link>
        <Link href="/tools/four-percent-rule" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Four Percent Rule</span></Link>
        <Link href="/tools/freedom-date" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Freedom Date</span></Link>
        <Link href="/tools/freelance-rate" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Freelance Rate</span></Link>
        <Link href="/tools/inflation" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Inflation</span></Link>
        <Link href="/tools/investment-fees" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Investment Fees</span></Link>
        <Link href="/tools/latte-factor" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Latte Factor</span></Link>
        <Link href="/tools/net-worth" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Net Worth</span></Link>
        <Link href="/tools/retirement-age" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Retirement Age</span></Link>
        <Link href="/tools/roth-vs-traditional" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Roth vs Traditional</span></Link>
        <Link href="/tools/safe-withdrawal-rate" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Safe Withdrawal Rate</span></Link>
        <Link href="/tools/savings-rate" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Savings Rate</span></Link>
        <Link href="/tools/sequence-of-returns" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Sequence of Returns</span></Link>
        <Link href="/tools/time-to-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Time to FIRE</span></Link>
        </div>
        <p className="mt-12 text-center text-sm text-slate-500">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}
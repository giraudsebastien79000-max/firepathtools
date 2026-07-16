import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIRE Blog and Guides | FirePath Tools",
  description: "Guides, country retirement breakdowns, and FIRE concepts explained with real numbers.",
};

export default function HubPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold tracking-widest text-orange-500 uppercase">FirePath Tools</p>
        <h1 className="mt-2 text-center text-4xl font-bold text-white">FIRE Blog and Guides</h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">Guides, country retirement breakdowns, and FIRE concepts explained with real numbers.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/blog/coast-fire-vs-barista-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Coast FIRE vs Barista FIRE</span></Link>
        <Link href="/blog/cost-of-waiting-one-year-to-invest" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Cost of Waiting One Year to Invest</span></Link>
        <Link href="/blog/fat-fire-vs-lean-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Fat FIRE vs Lean FIRE</span></Link>
        <Link href="/blog/fire-after-40" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">FIRE After 40</span></Link>
        <Link href="/blog/fire-number-billionaires" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">FIRE Number Billionaires</span></Link>
        <Link href="/blog/how-long-to-reach-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">How Long to Reach FIRE</span></Link>
        <Link href="/blog/how-to-start-fire-by-age" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">How to Start FIRE By Age</span></Link>
        <Link href="/blog/middle-class-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Middle Class FIRE</span></Link>
        <Link href="/blog/one-number-that-matters-more-than-fire-number" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">One Number That Matters More Than FIRE Number</span></Link>
        <Link href="/blog/retire-in-france" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Retire in France</span></Link>
        <Link href="/blog/retire-in-portugal" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Retire in Portugal</span></Link>
        <Link href="/blog/retire-in-spain" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Retire in Spain</span></Link>
        <Link href="/blog/retire-in-thailand" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Retire in Thailand</span></Link>
        <Link href="/blog/sequence-of-returns-risk" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">Sequence of Returns Risk</span></Link>
        <Link href="/blog/what-delays-fire-the-most" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Delays FIRE the Most</span></Link>
        <Link href="/blog/what-is-a-fire-number" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is A FIRE Number</span></Link>
        <Link href="/blog/what-is-an-index-fund" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is An Index Fund</span></Link>
        <Link href="/blog/what-is-a-safe-withdrawal-rate" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is A Safe Withdrawal Rate</span></Link>
        <Link href="/blog/what-is-barista-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Barista FIRE</span></Link>
        <Link href="/blog/what-is-coast-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Coast FIRE</span></Link>
        <Link href="/blog/what-is-compound-interest" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Compound Interest</span></Link>
        <Link href="/blog/what-is-fat-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Fat FIRE</span></Link>
        <Link href="/blog/what-is-lean-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Lean FIRE</span></Link>
        <Link href="/blog/what-is-savings-rate" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is Savings Rate</span></Link>
        <Link href="/blog/what-is-the-25x-rule" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is the 25x Rule</span></Link>
        <Link href="/blog/what-is-the-4-percent-rule" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is the 4 Percent Rule</span></Link>
        <Link href="/blog/what-is-the-fire-movement" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Is the FIRE Movement</span></Link>
        <Link href="/blog/what-reddit-says-about-coast-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Reddit Says About Coast FIRE</span></Link>
        <Link href="/blog/what-reddit-says-about-lean-fire" className="block rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-orange-500 transition-colors"><span className="font-semibold text-white">What Reddit Says About Lean FIRE</span></Link>
        </div>
        <p className="mt-12 text-center text-sm text-slate-500">firepathtools.com -- Free financial independence tools</p>
      </div>
    </main>
  );
}
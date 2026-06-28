import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Reddit Says About Lean FIRE | Real Community Insights",
  description: "We analyzed hundreds of Reddit threads about Lean FIRE. Here is what r/leanfire and r/financialindependence actually think — the debates, the numbers, and the warnings.",
};

export default function WhatRedditSaysAboutLeanFire() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">Community Insights</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">What Reddit Says About Lean FIRE</h1>
          <p className="text-gray-300 text-lg">We dug through hundreds of threads on r/leanfire, r/financialindependence, and r/Fire to find out what real people think about Lean FIRE — the number debates, the lifestyle realities, and the warnings nobody talks about.</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-8">
          <p className="text-gray-300 text-sm">Quick navigation: <a href="#what-is" className="text-orange-400 hover:underline">What is Lean FIRE</a> · <a href="#numbers" className="text-orange-400 hover:underline">The numbers debate</a> · <a href="#lifestyle" className="text-orange-400 hover:underline">Lifestyle realities</a> · <a href="#warnings" className="text-orange-400 hover:underline">Warnings</a> · <a href="#calculator" className="text-orange-400 hover:underline">Calculate yours</a></p>
        </div>

        <section id="what-is" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Reddit thinks Lean FIRE actually means</h2>
          <p className="text-gray-300 mb-4">The most common definition on r/leanfire is retiring on less than $40,000 per year in expenses, usually with a portfolio under $1 million. But the community is quick to point out that the dollar amount is less important than the ratio: spending well below the median and having a portfolio that covers it at a 3.5-4% withdrawal rate.</p>
          <p className="text-gray-300 mb-4">The unofficial threshold that comes up most often is $25,000-$40,000 per year for a single person in a low cost of living area. Anything above $40,000 starts getting labeled regular FIRE or even Chubby FIRE by the community.</p>
          <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-xl p-4 my-5">
            <p className="text-gray-300 italic text-sm">"lean fire is not about being poor. its about having figured out that most spending above a certain level doesnt actually make you happier"</p>
            <p className="text-gray-400 text-xs mt-2">paraphrased from r/leanfire</p>
          </div>
          <p className="text-gray-300">This distinction matters on Reddit. Lean FIRE is not about deprivation — it is about optimization. The most upvoted posts consistently frame it as a conscious lifestyle choice, not a financial constraint.</p>
        </section>

        <section id="numbers" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The Lean FIRE numbers debate on Reddit</h2>

          <h3 className="text-xl font-semibold text-white mb-3">What withdrawal rate should Lean FIRE use?</h3>
          <p className="text-gray-300 mb-4">This is the most debated topic on r/leanfire. The standard 4% rule gets challenged constantly. The argument: Lean FIRE typically means early retirement (40s or younger), which means 40-50 year portfolios, not the 30 years the Trinity Study was based on. Many Lean FIRE Redditors use 3.5% or even 3.25% as their target.</p>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The 3.5% camp</p>
              <p className="text-gray-300 text-sm">Most active on r/leanfire. Argument: 4% has failure scenarios over 40+ years. 3.5% gives meaningful extra margin without requiring much more capital. At $30k spending, the difference is $857k vs $750k — worth it for the safety.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The 4% defenders</p>
              <p className="text-gray-300 text-sm">Counterargument: Lean FIRE practitioners are typically frugal and adaptable. If markets tank, they can pick up part-time work more easily than someone with a $100k lifestyle. Flexibility is the real safety valve, not a lower SWR.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The variable withdrawal crowd</p>
              <p className="text-gray-300 text-sm">A vocal minority argues that fixed withdrawal rates are the wrong framework entirely. Spend less in bad years, more in good years. This guardrails approach gets significant support in longer threads.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">The geography argument</h3>
          <p className="text-gray-300 mb-4">Location dominates the Lean FIRE number discussion. $30k in rural Tennessee or rural Portugal is a comfortable life. $30k in San Francisco or London is borderline impossible. The most practical advice on r/leanfire: your Lean FIRE number is meaningless without a geographic anchor.</p>
          <p className="text-gray-300">Geoarbitrage comes up constantly — retiring to Mexico, Southeast Asia, Eastern Europe, or Portugal to make a lower number work. r/leanfire has significant overlap with expat and digital nomad communities for this reason.</p>
        </section>

        <section id="lifestyle" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Lean FIRE life actually looks like on Reddit</h2>
          <p className="text-gray-300 mb-4">The most engaged posts on r/leanfire are lifestyle check-ins from people 1-5 years into Lean FIRE. The patterns are consistent.</p>
          <div className="space-y-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">Time is the biggest gain</p>
              <p className="text-gray-300 text-sm">Almost every post-FIRE update on r/leanfire mentions time as the primary benefit. Not luxury, not travel — just the ability to do what they want when they want. Walking, reading, cooking, hiking, volunteering come up constantly.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">Most people end up earning something</p>
              <p className="text-gray-300 text-sm">A recurring theme: people who Lean FIRE end up doing some paid work anyway. Not because they have to, but because they find something they enjoy that happens to pay. Freelancing, consulting, seasonal work, small online income. This blurs into Barista FIRE territory.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">Social friction is real</p>
              <p className="text-gray-300 text-sm">A surprisingly common topic: the social awkwardness of Lean FIRE. Friends and family who earn more struggle to understand. Activities get declined because of cost. Redditors describe learning to be selective about who they talk to about their finances.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The identity shift</p>
              <p className="text-gray-300 text-sm">Many posts describe struggling with identity after leaving work. Without a job title, how do you explain what you do? The r/leanfire community actively discusses this — building identity around activities, relationships, and projects rather than career.</p>
            </div>
          </div>
        </section>        <section id="warnings" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Warnings Reddit wishes more Lean FIRE people knew</h2>
          <div className="space-y-4">
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Healthcare is the number one killer of Lean FIRE plans</p>
              <p className="text-gray-300 text-sm">More than any other topic, US Redditors flag healthcare as the factor that makes or breaks Lean FIRE. A single serious illness can wipe out years of careful saving. The ACA marketplace helps but premiums and deductibles can consume a large portion of a $30-40k budget. Many Lean FIRE Redditors specifically chose countries with public healthcare for this reason.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Inflation hits harder at lower spending levels</p>
              <p className="text-gray-300 text-sm">When your budget is $30k, a 10% inflation spike hurts more than it does on a $100k budget where discretionary spending provides a cushion. Lean FIRE Redditors who retired in 2020-2021 found their budgets stress-tested quickly. The ones who survived had geographic flexibility or some income buffer.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">One big expense can derail everything</p>
              <p className="text-gray-300 text-sm">Car replacement, dental work, home repair, a family emergency. At $30k per year there is very little slack. The most upvoted practical advice: keep a larger-than-normal cash buffer (2-3 years of expenses, not 6 months) and treat unexpected costs as a separate category from regular spending.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Lifestyle creep is a two-way risk</p>
              <p className="text-gray-300 text-sm">Several threads document people who Lean FIREd, found it too restrictive, and returned to work — not because the math failed, but because the lifestyle did not match expectations. The warning: be very honest with yourself about what you actually spend and need before pulling the trigger.</p>
            </div>
          </div>
        </section>

        <section id="calculator" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Calculate your Lean FIRE number</h2>
          <p className="text-gray-300 mb-4">Based on what r/leanfire actually uses: take your annual expenses, divide by 0.035 for a conservative 3.5% SWR, or by 0.04 for the standard 4% rule. The calculator below lets you stress-test both scenarios.</p>
          <a href="/tools/fire-number" style={{display:"inline-block",backgroundColor:"#f97316",color:"#ffffff",fontWeight:"bold",padding:"12px 24px",borderRadius:"12px",textDecoration:"none"}}>
            Use the FIRE Number Calculator
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The bottom line from Reddit</h2>
          <p className="text-gray-300 mb-4">Lean FIRE has a passionate and pragmatic community on Reddit. The consensus is that it works — but it requires three things beyond the math.</p>
          <div className="space-y-3">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">1.</span>
              <p className="text-gray-300">A realistic budget based on actual spending, not aspirational spending — ideally tested for 1-2 years before pulling the trigger.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <p className="text-gray-300">A plan for healthcare, especially if you are in the US and retiring before Medicare eligibility at 65.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <p className="text-gray-300">Geographic and income flexibility — the ability to spend less in bad years or pick up occasional work without it feeling like failure.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-bold text-white mb-2">Related calculators</h3>
          <div className="space-y-2">
            <a href="/tools/fire-number" className="block text-orange-400 hover:underline">FIRE Number Calculator</a>
            <a href="/tools/safe-withdrawal-rate" className="block text-orange-400 hover:underline">Safe Withdrawal Rate Calculator</a>
            <a href="/tools/can-i-retire-early" className="block text-orange-400 hover:underline">Can I Retire Early Calculator</a>
            <a href="/tools/drawdown-calculator" className="block text-orange-400 hover:underline">Drawdown Calculator</a>
          </div>
        </div>

      </div>
    </main>
  );
}
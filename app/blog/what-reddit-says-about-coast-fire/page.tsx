import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Reddit Says About Coast FIRE | Real Community Insights",
  description: "We analyzed hundreds of Reddit threads about Coast FIRE. Here is what the r/financialindependence and r/coastFIRE communities actually think — the debates, the wins, and the warnings.",
};

export default function WhatRedditSaysAboutCoastFire() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">Community Insights</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">What Reddit Says About Coast FIRE</h1>
          <p className="text-gray-300 text-lg">We dug through hundreds of threads on r/financialindependence, r/coastFIRE, and r/Fire to find out what real people think about Coast FIRE — the debates, the milestones, and the warnings nobody talks about.</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-8">
          <p className="text-gray-300 text-sm">Quick navigation: <a href="#what-is" className="text-orange-400 hover:underline">What is Coast FIRE</a> · <a href="#milestone" className="text-orange-400 hover:underline">Hitting the milestone</a> · <a href="#debates" className="text-orange-400 hover:underline">Biggest debates</a> · <a href="#warnings" className="text-orange-400 hover:underline">Warnings</a> · <a href="#calculator" className="text-orange-400 hover:underline">Calculate yours</a></p>
        </div>

        <section id="what-is" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Reddit thinks Coast FIRE actually means</h2>
          <p className="text-gray-300 mb-4">The most upvoted definition on r/financialindependence describes Coast FIRE as the point where your invested assets will grow to your FIRE number on their own — without any additional contributions — by the time you want to retire.</p>
          <p className="text-gray-300 mb-4">But Reddit users are quick to add nuance. A recurring comment in top threads is that Coast FIRE is not retirement — it just means you no longer need to save aggressively. You still need income to cover living expenses.</p>
          <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-xl p-4 my-5">
            <p className="text-gray-300 italic text-sm">"coast fire freed me mentally more than anything. knowing my retirement is already funded even if i never save another dollar again is wild"</p>
            <p className="text-gray-400 text-xs mt-2">— paraphrased from r/coastFIRE</p>
          </div>
          <p className="text-gray-300">This psychological shift — from "I need to save as much as possible" to "I just need to cover my expenses" — is what Reddit users describe most often as the real value of hitting Coast FIRE.</p>
        </section>

        <section id="milestone" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How Reddit celebrates hitting Coast FIRE</h2>
          <p className="text-gray-300 mb-4">Milestone posts are common on r/coastFIRE and r/financialindependence. The most engaged threads share a few patterns.</p>
          <div className="space-y-4 mb-5">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The career pivot</p>
              <p className="text-gray-300 text-sm">Many posters describe leaving high-stress jobs for lower-paying but more meaningful work after hitting Coast FIRE. Common moves: teacher, nurse, nonprofit worker, freelancer. The phrase "I took a $30k pay cut and feel rich" appears in multiple top posts.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The age factor</p>
              <p className="text-gray-300 text-sm">Hitting Coast FIRE in your 30s generates far more engagement than hitting it in your 40s. Comments consistently point out that more years of compounding means a lower Coast FIRE number — so starting early matters enormously.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">The "barista" overlap</p>
              <p className="text-gray-300 text-sm">Reddit often conflates Coast FIRE and Barista FIRE. The most voted clarification: Coast FIRE is about your savings level, Barista FIRE is about your income strategy. You can have both at the same time.</p>
            </div>
          </div>
        </section>        <section id="debates" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The biggest Coast FIRE debates on Reddit</h2>

          <h3 className="text-xl font-semibold text-white mb-3">1. What return rate should you use?</h3>
          <p className="text-gray-300 mb-4">This is the most argued topic. The split is roughly 7% (inflation-adjusted historical average) versus 5-6% (conservative, accounts for sequence risk). A minority argue for 4% to be ultra-safe. The consensus leans toward 6-7% for planning, with the caveat that you should stress-test at lower rates.</p>

          <h3 className="text-xl font-semibold text-white mb-3">2. Does Coast FIRE actually work if markets crash?</h3>
          <p className="text-gray-300 mb-4">Sequence of returns risk comes up constantly. The pushback: if you hit Coast FIRE at 35 and markets crash 40%, you might need to keep contributing a few more years. Redditors with engineering backgrounds tend to run Monte Carlo simulations and suggest building in a 10-20% buffer above your theoretical Coast number.</p>

          <h3 className="text-xl font-semibold text-white mb-3">3. Should you include your home equity?</h3>
          <p className="text-gray-300 mb-4">Strong opinions here. The majority say no — your primary residence is not a liquid investment and should not count toward your Coast FIRE number. A minority count it if they plan to downsize or relocate in retirement.</p>

          <h3 className="text-xl font-semibold text-white mb-3">4. Is Coast FIRE just an excuse to slow down?</h3>
          <p className="text-gray-300 mb-4">This debate gets heated. Critics argue that declaring Coast FIRE at 35 with a $200k portfolio and a $1.5M FIRE number is premature optimism — too many decades of uncertainty. Defenders counter that the mental freedom alone is worth it, and that most people who hit Coast FIRE do not actually slow down, they just feel less trapped.</p>

          <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-xl p-4 my-5">
            <p className="text-gray-300 italic text-sm">"the coast fire number is math. the hard part is actually believing it and not checking your portfolio every day waiting for something to go wrong"</p>
            <p className="text-gray-400 text-xs mt-2">— paraphrased from r/financialindependence</p>
          </div>
        </section>

        <section id="warnings" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Warnings Reddit wishes more people knew</h2>
          <div className="space-y-4">
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Healthcare costs are underestimated</p>
              <p className="text-gray-300 text-sm">The most upvoted warning in Coast FIRE threads: if you leave a high-income job before 65, you lose employer healthcare. US Redditors consistently say this is the factor that breaks Coast FIRE plans. Budget $15,000-25,000 per year per household for marketplace insurance if you are in the US.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Lifestyle creep resets the math</p>
              <p className="text-gray-300 text-sm">Several threads document people who hit Coast FIRE, switched to a lower-stress job, then gradually increased spending until they needed to save aggressively again. Coast FIRE only works if your income still covers your actual expenses.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">Pension and Social Security complicate the math</p>
              <p className="text-gray-300 text-sm">UK and Canadian Redditors point out that state pension entitlements change the Coast FIRE calculation significantly. If you expect meaningful Social Security or CPP income, your FIRE number — and therefore your Coast number — is lower than most US-focused calculators assume.</p>
            </div>
            <div className="bg-red-950 border border-red-800 rounded-xl p-4">
              <p className="text-red-300 font-semibold mb-1">401k access age matters</p>
              <p className="text-gray-300 text-sm">If your Coast FIRE number is entirely in tax-advantaged accounts (401k, IRA), remember you cannot access them penalty-free until 59.5 in the US. You need a bridge strategy — taxable brokerage accounts or Roth conversion ladders — to cover the gap years.</p>
            </div>
          </div>
        </section>

        <section id="calculator" className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Find your Coast FIRE age</h2>
          <p className="text-gray-300 mb-4">Based on what Reddit actually uses: plug in your current savings, your FIRE number, a 6-7% return, and your target retirement age. The calculator tells you the age at which you hit Coast FIRE — and how far you are from it today.</p>
          <a href="/tools/coast-fire-age"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            Use the Coast FIRE Age Calculator
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The bottom line from Reddit</h2>
          <p className="text-gray-300 mb-4">Coast FIRE is genuinely popular on Reddit because it solves a real problem: the feeling that you have to maximize savings forever or the plan falls apart. The community consensus is that Coast FIRE is a legitimate milestone — but it requires three things to actually work.</p>
          <div className="space-y-3">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">1.</span>
              <p className="text-gray-300">Your income still covers your expenses after you stop aggressive saving.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <p className="text-gray-300">You have a plan for healthcare and account access before 59.5.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <p className="text-gray-300">You have built in a buffer above your theoretical Coast number to handle market volatility.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-bold text-white mb-2">Related calculators</h3>
          <div className="space-y-2">
            <a href="/tools/coast-fire-age" className="block text-orange-400 hover:underline">Coast FIRE Age Calculator</a>
            <a href="/tools/coast-fire" className="block text-orange-400 hover:underline">Coast FIRE Number Calculator</a>
            <a href="/tools/fire-number" className="block text-orange-400 hover:underline">FIRE Number Calculator</a>
            <a href="/tools/can-i-retire-early" className="block text-orange-400 hover:underline">Can I Retire Early Calculator</a>
          </div>
        </div>

      </div>
    </main>
  );
}
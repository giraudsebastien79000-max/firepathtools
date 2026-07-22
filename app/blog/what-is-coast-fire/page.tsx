import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Coast FIRE? How to Stop Saving and Let Your Money Work | FirePath Tools',
  description: 'Coast FIRE explained simply. What it is, how to calculate your Coast number, and why it changes everything about how you think about work and money.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>What Is Coast FIRE? How to Stop Saving and Let Your Money Do the Work</h1>
      <p><strong>Coast FIRE is the point where you have saved enough that compound interest alone will grow your portfolio to your full retirement number — without you ever contributing another dollar.</strong></p>
      <p>You are still working — but here is the thing: your retirement is already taken care of.</p>
      <h2>The Difference Between FIRE and Coast FIRE</h2>
      <p>Regular FIRE means accumulating enough to live off your investments entirely — typically 25x your annual expenses. It requires aggressive saving, often for a decade or more.</p>
      <p>Coast FIRE is different. You front-load the savings early, hit a specific number, then stop. From that point, compound interest handles the rest while you work just enough to cover your current living expenses.</p>
      <p>Same destination. Completely different journey.</p>
      <h2>Why It Changes Everything</h2>
      <p>A 30-year-old who invests $150,000 today and never contributes another dollar will have roughly $1,600,000 by age 65 — assuming a 7% average annual return. They did not save that $1,450,000 difference. Time did.</p>
      <h2>A Real Example</h2>
      <p>David is 34. He works in project management and wants to retire at 62 with $1,200,000.</p>
      <p>Coast Number = $1,200,000 divided by (1.07)^28 = roughly $183,000</p>
      <p>If David has $183,000 invested today and never adds another dollar, compound interest will grow it to $1,200,000 by age 62. He still needs to work — but only to cover his current expenses. The retirement savings problem is already solved.</p>
      <h2>What Happens After You Hit Coast FIRE</h2>
      <p>Once you reach your Coast number, your relationship with work changes completely. You are no longer working to build wealth — you are working to live. That is a fundamentally different position.</p>
      <p>Some people stay in their current job but negotiate fewer hours. Some switch to lower-stress work they actually enjoy. Some start a business they had been putting off for years.</p>
      <p>I know people who hit their Coast number in their mid-30s and kept working full-time — not because they had to, but because the pressure was gone. Turns out most of the stress at work was not the work itself. It was the feeling of being trapped.</p>
      <p>Coast FIRE removes the trap. What you do after that is up to you.</p>
      <h2>How to Calculate Your Coast FIRE Number</h2>
      <p>You need three things: your target retirement number (annual expenses x 25), your expected annual return (typically 6-7%), and years until your target retirement age.</p>
      <p><strong>Formula:</strong> Coast Number = Retirement Target divided by (1 + return)^years</p>
      <p><strong>Example:</strong> $1,000,000 divided by (1.07)^30 = $131,367</p>
      <p>That is the number you need invested today to coast to $1,000,000 by retirement — with zero additional contributions.</p>
      <h2>Coast FIRE vs Regular FIRE</h2>
      <p><strong>Choose regular FIRE if:</strong> you want to stop working entirely before 50, you are willing to live frugally for 10-15 years, financial independence is your primary goal.</p>
      <p><strong>Choose Coast FIRE if:</strong> you want financial security without extreme sacrifice, you are okay working — just not being forced to, you want to enjoy your 30s and 40s, not just survive them.</p>
      <p>Neither is wrong. It just depends on the life you want to live right now.</p>
      <p>If you are weighing your options, it also helps to see how <a href="/blog/coast-fire-vs-barista-fire" className="text-orange-400 hover:underline">Coast FIRE compares to Barista FIRE</a>, since the two are often confused.</p>
      <h2>The One Thing That Trips People Up</h2>
      <p>The front-loading part is real. You need to save aggressively early — often in your 20s and early 30s — to hit your Coast number while you still have enough years for compound interest to do its job.</p>
      <p>Wait until 45 to start and the math gets much harder. The window is not infinite.</p>
      <p>The earlier you start, the faster you get there. Put $150 a month away at 24, keep it for 38 years at 11% return — you end up with over $1,000,000. Same $150. Just time. Now imagine what happens if you invest $300 a month instead — you get there in half the time.</p>
      <h2>FAQ</h2>
      <p><strong>Can I contribute after hitting my Coast FIRE number?</strong> Yes — every extra dollar just means retiring earlier or with more cushion.</p>
      <p><strong>What if the market underperforms?</strong> Check your numbers every 2-3 years. Coast FIRE uses conservative assumptions but nothing is guaranteed.</p>
      <p><strong>Does Coast FIRE work if I start late?</strong> It works at any age — but the later you start, the higher your Coast number will be.</p>
      <p><strong>Is Coast FIRE the same as Barista FIRE?</strong> Similar concept, different focus. Coast FIRE is about the math. Barista FIRE is about the lifestyle — working part-time while investments grow.</p>
      <h2>Find Your Coast FIRE Number</h2>
      <p>Plug in your numbers and see exactly where you stand.</p>
      <p><a href="/tools/coast-fire">Use the FirePath Coast FIRE Calculator</a></p>
      <hr />
      <p><em>Written by the FirePath Team. Not financial advisors — just regular people figuring out how to make work optional.</em></p>
      <p><small>All projections assume consistent average returns and are for illustrative purposes only. Actual investment returns vary. Consult a financial advisor for personalized advice.</small></p>
    </article>
  )
}
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Barista FIRE? Work Less, Retire Earlier | FirePath Tools',
  description: 'Barista FIRE means having enough invested that a small part-time income covers the rest. You stop the grind before your portfolio is fully funded. Here is how it works.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>What Is Barista FIRE? Work Less, Retire Earlier</h1>

      <p><strong>Barista FIRE is when your investments cover most of your expenses, and a small part-time job covers the rest. You stop the full-time grind before your portfolio is completely funded.</strong></p>

      <p>The name comes from the idea of working a relaxed part-time job — like a barista at a coffee shop — just enough to cover the gap. Not because you have to. Because it lets you stop the career you burned out on years earlier than full FIRE would allow.</p>

      <h2>Why People Choose Barista FIRE</h2>

      <p>Full FIRE requires a large portfolio. If you spend $50,000 per year, you need $1,250,000 saved before you can stop working entirely. That can take another 5 to 10 years depending on where you are.</p>

      <p>Barista FIRE cuts that wait. If a part-time job brings in $15,000 per year, your portfolio only needs to cover $35,000. That brings your number down to $875,000. For a lot of people, that is the difference between leaving at 42 or leaving at 48.</p>

      <p>Six years is not nothing.</p>

      <h2>How the Numbers Work</h2>

      <table>
        <thead>
          <tr>
            <th>Annual Spending</th>
            <th>Part-Time Income</th>
            <th>Portfolio Needed (25x gap)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$40,000</td><td>$10,000</td><td>$750,000</td></tr>
          <tr><td>$40,000</td><td>$15,000</td><td>$625,000</td></tr>
          <tr><td>$50,000</td><td>$15,000</td><td>$875,000</td></tr>
          <tr><td>$60,000</td><td>$20,000</td><td>$1,000,000</td></tr>
        </tbody>
      </table>

      <p>The part-time income does not need to be from a coffee shop. Freelance work, consulting a few days a month, seasonal work, tutoring — anything that brings in reliable income without consuming your life counts.</p>

      <h2>The Healthcare Angle</h2>

      <p>In the US, this is where Barista FIRE gets its name from more than just the vibe. Starbucks offers health insurance to part-time employees working 20 hours per week. For Americans without employer coverage, that alone can be worth $10,000 to $20,000 per year in avoided costs.</p>

      <p>Outside the US this matters less — most countries have public healthcare. But the principle still applies. A part-time job with benefits can dramatically change the math.</p>

      <h2>Barista FIRE vs Coast FIRE</h2>

      <p>These two get confused a lot. They are different things.</p>

      <p>For a full side-by-side breakdown, see our guide on <a href="/blog/coast-fire-vs-barista-fire" className="text-orange-400 hover:underline">Coast FIRE vs Barista FIRE</a>.</p>

      <p>Coast FIRE means your portfolio is large enough that you never need to add another dollar — it will grow to your full FIRE number on its own. You still need to cover 100% of your expenses through work or other income.</p>

      <p>Barista FIRE means your portfolio is already covering most of your expenses. You just need a small top-up from part-time work. You are partially retired right now.</p>

      <p>Coast FIRE is a milestone on the way. Barista FIRE is a destination some people choose to stay at permanently.</p>

      <h2>Is Barista FIRE Really Retirement?</h2>

      <p>Depends who you ask. Some people in the FIRE community are strict about this — if you are still working, you have not retired. Others see it differently.</p>

      <p>Working 15 hours a week doing something you actually enjoy is not the same as working 50 hours a week in a job that is draining you. If you left a high-stress career to work part-time on your own terms, most people would call that a pretty good life.</p>

      <p>The label matters less than the reality. The question is whether the life you are living is the one you want.</p>

      <h2>The Risks to Know About</h2>

      <p>The part-time income is not guaranteed. If you get sick, if the job disappears, if something changes — your portfolio suddenly has to cover everything. At $625,000 covering $40,000 per year that is a 6.4% withdrawal rate. That is aggressive. Markets could make that very uncomfortable very fast.</p>

      <p>This is why most people who choose Barista FIRE build in some buffer. Either a slightly larger portfolio, a flexible spending plan, or both.</p>

      <p>The other risk is lifestyle creep. Part-time work has a way of slowly becoming more hours, more responsibility, more stress. Worth being intentional about what you agreed to when you took the job.</p>

      <h2>Who Barista FIRE Works Best For</h2>

      <p>People who are burned out on their career but not on working entirely. People who want to keep some structure in their week. People who have skills they can monetize part-time without it taking over their life. People with a long runway who want to stop the full-time grind now rather than in six years.</p>

      <p>It is not for everyone. Some people would rather wait and have the full number. But for a lot of people it is the option nobody told them existed.</p>

      <hr />

      <p><a href="/tools/fire-number">Calculate your full FIRE number and your Barista FIRE number side by side.</a></p>
      <p><a href="/blog/what-is-coast-fire">Understand how Coast FIRE fits into the picture.</a></p>
      <p><a href="/blog/what-is-the-25x-rule">See how the 25x rule applies to your Barista FIRE target.</a></p>

      <hr />

      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a plan.</em></p>
      <p><small>All calculations use 25x as the portfolio multiplier. Individual results depend on spending, income sources, and market conditions.</small></p>
    </article>
  )
}
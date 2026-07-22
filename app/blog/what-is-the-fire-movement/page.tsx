import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is the FIRE Movement? Financial Independence Explained | FirePath Tools',
  description: 'FIRE stands for Financial Independence Retire Early. It is not about being rich. It is about having enough invested that work becomes a choice. Here is how it works.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>What Is the FIRE Movement? Financial Independence Explained</h1>

      <p><strong>FIRE stands for Financial Independence Retire Early. The idea is simple — save and invest aggressively enough that your portfolio generates enough income to cover your expenses forever. At that point, work becomes optional.</strong></p>

      <p>Not optional because you are rich. Optional because your money works hard enough that you do not have to.</p>

      <h2>Where Did FIRE Come From?</h2>

      <p>The modern FIRE movement traces back to a 1992 book called Your Money or Your Life by Vicki Robin and Joe Dominguez. The core idea was that every purchase costs not just money but hours of your life — and that most people never stop to do that math.</p>

      <p>It gained serious momentum in the 2010s through blogs, forums, and people publicly documenting how they left their careers in their 30s and 40s. Mr. Money Mustache, Early Retirement Extreme, and dozens of others showed that this was not a theoretical concept. Real people were doing it on ordinary salaries.</p>

      <p>Today it is a global movement. People in the US, UK, Australia, Canada, Europe — everywhere — are working toward the same goal using the same basic framework.</p>
      <p>If you are in the UK, you can <a href="/fire-uk-calculator" className="text-orange-400 hover:underline">calculate your FIRE number with UK-specific assumptions</a>.</p>

      <h2>How FIRE Actually Works</h2>

      <p>The math behind FIRE is not complicated. You need a portfolio large enough that you can withdraw from it each year without it running out. Based on decades of historical market data, that threshold is roughly 25 times your annual spending.</p>

      <p>Spend $40,000 per year. You need $1,000,000 invested. Withdraw 4% per year. History suggests that portfolio survives 30 years or more in almost every market scenario ever recorded.</p>

      <p>That is it. Everything else in FIRE — the strategies, the debates, the different versions — is built around that core calculation.</p>

      <h2>The Three Numbers That Matter</h2>

      <p>To know where you stand, you need three numbers.</p>

      <p><strong>Your annual spending.</strong> Not what you think you spend. What you actually spend. Pull your bank statements and add it up. Most people are surprised.</p>

      <p><strong>Your FIRE number.</strong> Multiply your annual spending by 25. That is your target portfolio size.</p>

      <p><strong>Your savings rate.</strong> The percentage of your income you save and invest each month. This single number determines how fast you get there more than almost anything else.</p>

      <table>
        <thead>
          <tr>
            <th>Savings Rate</th>
            <th>Years to FIRE (approx)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10%</td><td>~40 years</td></tr>
          <tr><td>25%</td><td>~32 years</td></tr>
          <tr><td>50%</td><td>~17 years</td></tr>
          <tr><td>70%</td><td>~8 years</td></tr>
        </tbody>
      </table>

      <p>The leverage is real. Going from a 10% savings rate to a 50% savings rate does not just save you more money — it cuts your working years in half.</p>

      <h2>The Different Types of FIRE</h2>

      <p>FIRE is not one-size-fits-all. Over time the community has developed several variations depending on how much you need and how you want to live.</p>

      <p><strong>Lean FIRE</strong> — reaching financial independence on a minimal budget. Lower spending means a smaller portfolio needed. You get there faster but with less cushion.</p>

      <p><strong>Fat FIRE</strong> — financial independence with a comfortable or even generous lifestyle. Higher spending, larger portfolio required, longer to get there. More freedom once you arrive.</p>

      <p><strong>Barista FIRE</strong> — your investments cover most of your expenses and a small part-time job covers the rest. You leave your full-time career early without needing a fully funded portfolio. A middle ground a lot of people find attractive.</p>

      <p><strong>Coast FIRE</strong> — your portfolio is large enough that compound interest will grow it to your full FIRE number on its own, without another dollar of contributions. You still need income to cover expenses, but the finish line is already locked in.</p>

      <h2>What FIRE Is Not</h2>

      <p>It is not about never working again. Most people who reach FIRE still do things. They just do things they want to do rather than things they have to do. Some consult, some freelance, some start businesses, some volunteer. The difference is the paycheck is no longer the point.</p>

      <p>It is not only for high earners. The math works on any income if the savings rate is high enough. A teacher saving 50% of a modest salary will reach FIRE faster than an executive saving 5% of a large one.</p>

      <p>And it is not extreme frugality. Some people in the FIRE community live very lean. Others travel, eat well, and spend freely — they just spend intentionally, on things that actually matter to them.</p>

      <h2>The Role of Index Funds</h2>

      <p>Almost everyone pursuing FIRE invests in low-cost index funds. Not because they are exciting — they are not — but because they work. Broad market index funds have outperformed the majority of actively managed funds over any long period you care to measure.</p>

      <p>Low fees. No stock picking. No fund manager taking a cut. Just the market, compounding over time.</p>

      <p>That compounding is what makes FIRE possible. The longer your money is invested, the more the returns on your returns start to dwarf your original contributions. Time is the ingredient most people underestimate.</p>

      <h2>Is FIRE Realistic?</h2>

      <p>For some people yes, for others the timeline is longer than they would like. Cost of living, family obligations, income level — all of it affects how fast you can get there.</p>

      <p>But the framework is useful even if full early retirement is not your goal. Understanding your FIRE number tells you how far you are from work being optional. Understanding your savings rate tells you how fast you are moving. Most people find that just knowing those two numbers changes how they think about money.</p>

      <p>You do not have to retire at 35 for FIRE to be worth understanding.</p>

      <hr />

      <p><a href="/blog/what-is-a-fire-number">Calculate your FIRE number — the portfolio size you are working toward.</a></p>
      <p><a href="/blog/what-is-savings-rate">Understand how your savings rate determines how fast you reach FIRE.</a></p>
      <p><a href="/blog/what-is-the-4-percent-rule">Learn about the 4% rule that underpins the entire FIRE framework.</a></p>
      <p><a href="/blog/what-is-coast-fire">Explore Coast FIRE — one of the most popular variations.</a></p>
      <p><a href="/blog/what-is-barista-fire">See how Barista FIRE lets you leave full-time work earlier.</a></p>
      <p><a href="/blog/what-is-an-index-fund">Understand why index funds are the investment of choice for FIRE.</a></p>

      <hr />

      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a plan.</em></p>
      <p><small>FIRE projections are based on historical market data and the Trinity Study (1998). Results vary based on market conditions, spending, and individual circumstances.</small></p>
    </article>
  )
}
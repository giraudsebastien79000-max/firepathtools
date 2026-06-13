import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Safe Withdrawal Rate? The Key to Making Your Money Last | FirePath Tools',
  description: 'A safe withdrawal rate tells you how much you can spend each year in retirement without running out of money. Learn what it is, how it works, and why 4% is just the starting point.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>What Is a Safe Withdrawal Rate? The Key to Making Your Money Last</h1>

      <p><strong>A safe withdrawal rate is the percentage of your portfolio you can withdraw each year in retirement without running out of money over a 30-year period.</strong></p>

      <p>Most people have heard of the 4% rule. The safe withdrawal rate is the concept behind it. Understanding the difference between the two changes how you plan for FIRE.</p>

      <h2>The Basic Idea</h2>

      <p>If you retire with $1,000,000 and withdraw 4% per year, that is $40,000 in your first year. The safe withdrawal rate is the percentage — 4% — that research suggests you can sustain without depleting your portfolio over a long retirement.</p>

      <p>The goal is simple: your portfolio needs to last as long as you do.</p>

      <h2>Where Does the 4% Come From?</h2>

      <p>The 4% rule comes from the Trinity Study, a 1998 research paper by three professors at Trinity University. They tested different withdrawal rates against historical market data going back decades.</p>

      <p>Their conclusion: a 4% withdrawal rate from a diversified portfolio of stocks and bonds succeeded in nearly all historical 30-year periods. Your money survived market crashes, recessions, and inflation — and in most cases, you ended up with more than you started with.</p>

      <p>That is where 4% comes from. Not a guess. Historical data.</p>

      <h2>Is 4% Always Safe?</h2>

      <p>4% is a guideline, not a guarantee. Several factors affect what your personal safe withdrawal rate should be.</p>

      <h3>Retirement Length</h3>
      <p>The Trinity Study tested 30-year retirements. If you retire at 40 and live to 90, you need your money to last 50 years. A lower withdrawal rate — closer to 3% or 3.5% — gives you a larger margin of safety for a longer retirement.</p>

      <h3>Portfolio Allocation</h3>
      <p>A portfolio of 100% stocks has historically performed better over long periods but comes with more volatility. A mix of stocks and bonds smooths the ride but may grow more slowly. Your allocation affects how much you can safely withdraw.</p>

      <h3>Sequence of Returns Risk</h3>
      <p>This is the biggest risk most people overlook. If markets crash in the first few years of your retirement and you are still withdrawing, you sell shares at low prices. Those shares never recover for you. A bad sequence of returns early in retirement can derail even a well-funded portfolio.</p>

      <h3>Flexibility</h3>
      <p>People who can reduce spending during market downturns can safely use a higher withdrawal rate. If you can cut discretionary expenses by 20% in a bad year, your portfolio has much more room to recover.</p>

      <h2>Safe Withdrawal Rate by Retirement Length</h2>

      <table>
        <thead>
          <tr>
            <th>Retirement Length</th>
            <th>Suggested Withdrawal Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>30 years</td><td>4.0%</td></tr>
          <tr><td>40 years</td><td>3.5%</td></tr>
          <tr><td>50+ years</td><td>3.0% to 3.25%</td></tr>
        </tbody>
      </table>

      <p>These are starting points based on historical research. Your actual number depends on your spending flexibility, portfolio mix, and other income sources like rental income or part-time work.</p>

      <h2>How to Calculate Your Safe Withdrawal Amount</h2>

      <p>Multiply your portfolio by your chosen withdrawal rate.</p>

      <p>Portfolio x Withdrawal Rate = Annual Spending</p>

      <p>Examples at different rates:</p>

      <table>
        <thead>
          <tr>
            <th>Portfolio</th>
            <th>3% Rate</th>
            <th>4% Rate</th>
            <th>5% Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$500,000</td><td>$15,000</td><td>$20,000</td><td>$25,000</td></tr>
          <tr><td>$1,000,000</td><td>$30,000</td><td>$40,000</td><td>$50,000</td></tr>
          <tr><td>$2,000,000</td><td>$60,000</td><td>$80,000</td><td>$100,000</td></tr>
        </tbody>
      </table>

      <p>A 5% rate is considered aggressive. It has failed in a meaningful percentage of historical scenarios. Most FIRE planners aim for 3.5% to 4% as their target.</p>

      <h2>Safe Withdrawal Rate and Your FIRE Number</h2>

      <p>Your FIRE number and your safe withdrawal rate are two sides of the same calculation.</p>

      <p>If you plan to spend $40,000 per year and use a 4% withdrawal rate, your FIRE number is $1,000,000. If you use a 3% rate for a longer retirement, your FIRE number becomes $1,333,000 for the same spending level.</p>

      <p>Choosing a more conservative withdrawal rate means working longer or saving more. Choosing a more aggressive rate means retiring sooner but with more risk.</p>

      <h2>What the Research Says Now</h2>

      <p>More recent research has updated the Trinity Study findings. Some researchers now suggest that given current market valuations and lower expected bond returns, a 3.3% to 3.5% withdrawal rate may be more appropriate for long retirements.</p>

      <p>Others argue that with spending flexibility and other income sources, 4% remains a solid target for most people.</p>

      <p>The honest answer: no one knows the future. The safe withdrawal rate is a tool for planning, not a promise.</p>

      <h2>Practical Strategies to Make Your Money Last</h2>

      <h3>The Guardrails Approach</h3>
      <p>Increase withdrawals slightly when your portfolio grows. Reduce them when it drops. This flexibility significantly improves your portfolio survival rate compared to rigid fixed withdrawals.</p>

      <h3>The Bucket Strategy</h3>
      <p>Keep 1 to 2 years of spending in cash. Keep 3 to 7 years in bonds. Keep the rest in stocks. When markets drop, draw from cash and bonds. Give your stocks time to recover.</p>

      <h3>Part-Time Income</h3>
      <p>Even small amounts of income in early retirement dramatically reduce pressure on your portfolio. Earning $10,000 to $15,000 per year in the first decade of retirement can make a 4% rate far safer than the numbers suggest.</p>

      <hr />

      <p><a href="/tools/fire-number">Calculate your FIRE number based on your target withdrawal rate.</a></p>
      <p><a href="/blog/what-is-the-4-percent-rule">Read our full guide to the 4% rule and where it comes from.</a></p>

      <hr />

      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a plan.</em></p>
      <p><small>The Trinity Study is the primary source for the 4% rule. All withdrawal rate scenarios are based on historical data and do not guarantee future results.</small></p>
    </article>
  )
}
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is the 25x Rule? The Simplest Way to Find Your FIRE Number | FirePath Tools',
  description: 'The 25x rule is the fastest way to calculate how much you need to retire. Multiply your annual spending by 25. That is your number. Here is why it works.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>What Is the 25x Rule? The Simplest Way to Find Your FIRE Number</h1>

      <p><strong>Take your annual spending. Multiply by 25. That is how much you need to retire.</strong></p>

      <p>That is the 25x rule. It sounds almost too simple. But it is backed by decades of market research and it is the number most FIRE planners start with.</p>

      <h2>Where Does 25x Come From?</h2>

      <p>It comes from the 4% rule. If you can safely withdraw 4% of your portfolio each year without running out of money, then you need 25 times your annual spending saved up. The math is straightforward: 1 divided by 0.04 equals 25.</p>

      <p>The 4% rule itself comes from the Trinity Study, a 1998 research paper that tested withdrawal rates against historical market data. A 4% withdrawal rate survived almost every 30-year period in history, including crashes, recessions, and periods of high inflation.</p>

      <p>25x is just the other side of that equation.</p>

      <h2>How to Calculate Your 25x Number</h2>

      <p>Step one: figure out what you actually spend in a year. Not what you think you spend. Look at your bank statements.</p>

      <p>Step two: multiply by 25.</p>

      <table>
        <thead>
          <tr>
            <th>Annual Spending</th>
            <th>25x Number</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$25,000</td><td>$625,000</td></tr>
          <tr><td>$40,000</td><td>$1,000,000</td></tr>
          <tr><td>$60,000</td><td>$1,500,000</td></tr>
          <tr><td>$80,000</td><td>$2,000,000</td></tr>
          <tr><td>$100,000</td><td>$2,500,000</td></tr>
        </tbody>
      </table>

      <p>Most people are surprised by how much their number changes when they look at their actual spending versus what they assumed.</p>

      <h2>What the 25x Rule Does Not Tell You</h2>

      <p>It assumes a 30-year retirement. If you retire at 35 and live to 90, that is 55 years. The 4% rule was not tested on 55-year retirements. For longer retirements, many people use 30x instead — which corresponds to a 3.3% withdrawal rate.</p>

      <p>It also assumes your spending stays roughly the same. In reality most people spend more in early retirement when they are healthy and active, and less later on. Some account for this, some do not.</p>

      <p>And it does not include Social Security, pensions, rental income, or any other income source. If you will receive $15,000 per year from Social Security, you only need your portfolio to cover the rest. That changes the number significantly.</p>

      <h2>25x vs 30x — Which Should You Use?</h2>

      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Withdrawal Rate</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>25x</td><td>4%</td><td>Retiring at 55-65, standard 30-year horizon</td></tr>
          <tr><td>28x</td><td>3.5%</td><td>Retiring at 45-55, longer horizon</td></tr>
          <tr><td>30x</td><td>3.3%</td><td>Retiring at 35-45, very long horizon</td></tr>
          <tr><td>33x</td><td>3%</td><td>Maximum caution, retiring very early</td></tr>
        </tbody>
      </table>

      <p>Most people in the FIRE community use 25x as a starting point and adjust from there based on their situation.</p>

      <h2>A Real Example</h2>

      <p>Say you spend $3,500 per month. That is $42,000 per year. Your 25x number is $1,050,000.</p>

      <p>But you plan to retire at 40 and want extra margin. You use 30x instead. Now your number is $1,260,000.</p>

      <p>You also expect $800 per month in rental income eventually. That covers $9,600 per year of your spending. Now your portfolio only needs to cover $32,400 per year. At 25x that is $810,000.</p>

      <p>Same person. Same lifestyle. Three different numbers depending on the assumptions. That is why the 25x rule is a starting point, not the final answer.</p>

      <h2>Why the 25x Rule Is Still Useful Despite Its Limits</h2>

      <p>Because it gives you a target. Before you know your 25x number, retirement feels abstract. Once you know it, everything changes. You know how far you are, how long it will take, and what levers you can pull to get there faster.</p>

      <p>Spending less reduces your number. Earning more lets you save faster. Both at the same time is how most people reach FIRE in under a decade.</p>

      <p>The 25x rule does not need to be perfect to be useful. It just needs to be close enough to aim at.</p>

      <hr />

      <p><a href="/tools/fire-number">Use our FIRE Number Calculator to find your exact 25x number.</a></p>
      <p><a href="/blog/what-is-the-4-percent-rule">Understand the 4% rule that the 25x rule is built on.</a></p>
      <p><a href="/blog/what-is-a-safe-withdrawal-rate">Learn how safe withdrawal rates affect your retirement timeline.</a></p>

      <hr />

      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a plan.</em></p>
      <p><small>The 25x rule is based on the Trinity Study (1998). It is a planning guideline, not a guarantee of future results.</small></p>
    </article>
  )
}
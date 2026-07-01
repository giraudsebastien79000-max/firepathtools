import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is an Index Fund? The Investment Behind Most FIRE Portfolios | FirePath Tools',
  description: 'An index fund tracks the market instead of trying to beat it. Lower fees, less stress, better results for most investors. Here is what you need to know.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>What Is an Index Fund? The Investment Behind Most FIRE Portfolios</h1>

      <p><strong>An index fund is a fund that tracks a market index — like the S&P 500 or the global stock market — instead of trying to pick winning stocks.</strong></p>

      <p>You are not betting on one company. You are buying a small piece of hundreds or thousands of companies at once. When the market goes up, your fund goes up. When it goes down, your fund goes down. No guessing, no stock picking, no fund manager making decisions on your behalf.</p>

      <p>Most people in the FIRE community build their entire portfolio around index funds. There is a reason for that.</p>

      <h2>Active Funds vs Index Funds</h2>

      <p>An active fund has a manager whose job is to pick stocks and beat the market. They research companies, make calls, trade frequently. For this you pay fees — typically 1% to 2% per year of your total investment.</p>

      <p>An index fund has no manager making decisions. It just follows the index automatically. The fees reflect that — typically 0.03% to 0.20% per year.</p>

      <p>That difference sounds small. Over 30 years it is not.</p>

      <table>
        <thead>
          <tr>
            <th>Starting Amount</th>
            <th>Annual Return</th>
            <th>Fee</th>
            <th>After 30 Years</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$10,000</td><td>7%</td><td>0.10% (index)</td><td>$74,500</td></tr>
          <tr><td>$10,000</td><td>7%</td><td>1.50% (active)</td><td>$54,300</td></tr>
        </tbody>
      </table>

      <p>Same money. Same market return. The fee difference costs you $20,000 on a $10,000 investment over 30 years. On a $100,000 investment that is $200,000 gone to fees.</p>

      <h2>Do Active Funds Beat Index Funds?</h2>

      <p>Most do not. Over any 15-year period, roughly 85% to 90% of actively managed funds underperform their benchmark index after fees.</p>

      <p>That is not a knock on fund managers. Markets are efficient. Thousands of professionals are all looking at the same information. It is genuinely hard to consistently find an edge. And even when a fund outperforms for a few years, picking which one will outperform in advance is nearly impossible.</p>

      <p>The few that do beat the market over long periods are nearly impossible to identify ahead of time. You only know in hindsight.</p>

      <h2>What Index Do They Track?</h2>

      <p>Different funds track different indexes. The most common ones you will come across:</p>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>What It Covers</th>
            <th>Where It Trades</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S&P 500</td><td>500 largest US companies</td><td>US</td></tr>
          <tr><td>FTSE All-World</td><td>Global stocks, 4000+ companies</td><td>Global</td></tr>
          <tr><td>MSCI World</td><td>Developed markets globally</td><td>Global</td></tr>
          <tr><td>FTSE 100</td><td>100 largest UK companies</td><td>UK</td></tr>
          <tr><td>ASX 200</td><td>200 largest Australian companies</td><td>Australia</td></tr>
        </tbody>
      </table>

      <p>Most FIRE investors outside the US use a global index like FTSE All-World or MSCI World rather than just the S&P 500. You get US exposure plus the rest of the world. Less risk concentrated in one country.</p>

      <h2>ETF vs Index Fund — What Is the Difference?</h2>

      <p>An ETF (Exchange Traded Fund) is an index fund that trades on a stock exchange like a share. You buy it through a broker, the price changes throughout the day.</p>

      <p>A traditional index fund is bought directly from the fund provider at end-of-day prices.</p>

      <p>In practice the difference is small for long-term investors. ETFs are slightly more flexible and often have lower minimum investments. Most people in the FIRE community use ETFs.</p>

      <h2>Popular Index Funds by Country</h2>

      <p><strong>US:</strong> Vanguard Total Stock Market (VTI), Fidelity ZERO funds, iShares Core S&P 500 (IVV)</p>
      <p><strong>UK:</strong> Vanguard FTSE All-World UCITS ETF (VWRP), iShares Core MSCI World UCITS ETF</p>
      <p><strong>Canada:</strong> Vanguard FTSE Canada All Cap (VCN), iShares Core S&P/TSX Capped Composite</p>
      <p><strong>Australia:</strong> Vanguard Australian Shares ETF (VAS), BetaShares Australia 200 ETF (A200)</p>

      <p>The fund names look complicated. The underlying idea is always the same — buy the whole market, pay as little as possible in fees, leave it alone.</p>

      <h2>Why Index Funds Work So Well for FIRE</h2>

      <p>FIRE is built on compound interest over long periods. Index funds are built for exactly that. Low fees mean more of your money compounds. Diversification means one bad company does not derail your portfolio. Automatic tracking means no decisions to second-guess yourself on at 2am when markets drop.</p>

      <p>The strategy is boring. That is the point. You saw what happened with the person who saved every month and never checked — that only works if what you are invested in does not require constant attention.</p>

      <p>Index funds are what lets you not check.</p>

      <hr />

      <p><a href="/blog/what-is-compound-interest">See how compound interest turns index fund returns into real wealth over time.</a></p>
      <p><a href="/blog/what-is-a-safe-withdrawal-rate">Learn what withdrawal rate to use once your index fund portfolio is large enough.</a></p>
      <p><a href="/tools/fire-number">Calculate how much you need in index funds to reach financial independence.</a></p>

      <hr />

      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a plan.</em></p>
      <p><small>Past performance does not guarantee future results. All fee comparisons are illustrative and based on typical industry ranges.</small></p>
    </article>
  )
}
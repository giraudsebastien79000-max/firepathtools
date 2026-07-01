import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is the 4% Rule? The Simple Math Behind Early Retirement | FirePath Tools',
  description: 'The 4% Rule explained simply. Where it comes from, how to use it, what it gets wrong, and why it still matters for anyone planning financial independence.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-invert">
      <h1>What Is the 4% Rule? The Simple Math Behind Early Retirement</h1>
      <p><strong>The 4% Rule says you can withdraw 4% of your investments every year and never run out of money.</strong></p>
      <p>It sounds almost too good to be true. But this is not a theory someone made up — it comes from decades of real market data.</p>
      <h2>Where It Comes From</h2>
      <p>In 1998, three finance professors — Cooley, Hubbard, and Walz — ran the numbers on historical stock and bond returns going back to 1926. Their question was simple: what withdrawal rate lets a retiree survive any 30-year period in market history, including crashes, recessions, and everything in between?</p>
      <p>Nobody reads academic papers for fun — but this one got around fast, and the reason is pretty obvious.</p>
      <p>The answer was 4%.</p>
      <h2>The Math in Plain English</h2>
      <p>If you have $1,000,000 invested, 4% of that is $40,000. You can spend $40,000 per year without ever touching the original million — because your investments grow faster than you withdraw.</p>
      <p>Flip it around: if you know how much you spend per year, multiply by 25. That is your FIRE number.</p>
      <ul>
        <li>Spend $30,000/year → need $750,000</li>
        <li>Spend $50,000/year → need $1,250,000</li>
        <li>Spend $80,000/year → need $2,000,000</li>
      </ul>
      <h2>A Real Example</h2>
      <p>James is 38. He works in logistics and spends about $42,000 a year. He has $89,000 saved. His FIRE number: $42,000 x 25 = $1,050,000. At his current savings rate, he is roughly 18 years away. But if he increases his monthly contributions by $400, that drops to 14 years. He retires at 52 instead of 56.</p>
      <p>That is when someday stops being a dream and becomes a deadline you are actually looking forward to.</p>
      <h2>What the 4% Rule Gets Right</h2>
      <p>It is based on the worst periods in market history — not average years. The Trinity Study tested scenarios that included the Great Depression, the 1970s stagflation, and the dot-com crash. Simple enough to actually use. You do not need a financial advisor or a spreadsheet with 47 tabs.</p>
      <h2>What the 4% Rule Gets Wrong</h2>
      <p><strong>It was designed for 30-year retirements.</strong> If you retire at 40 and live to 90, you are looking at a 50-year retirement. Many FIRE researchers now suggest 3.5% for longer timelines.</p>
      <p><strong>It does not adjust for your life.</strong> Kids, health issues, a major move — your expenses change. Recalculate every year.</p>
      <p><strong>It assumes you stay invested.</strong> If you panic-sell during a crash, the math breaks.</p>
      <h2>The Part Nobody Talks About</h2>
      <p>Most people who reach their FIRE number do not actually stop working completely. They shift — fewer hours, different work, things they actually want to do.</p>
      <p>Most people do not actually want to stop working — they just want the possibility to choose.</p>
      <p>I spent years working without knowing what the finish line looked like. When I finally ran the numbers, I realized I was not as far as I thought — but I was also moving in no particular direction. Knowing the target changed how I thought about every financial decision after that.</p>
      <p>That is when someday stops being a dream and becomes a deadline you are actually looking forward to.</p>
      <h2>FAQ</h2>
      <p><strong>Is the 4% Rule still valid in 2026?</strong> Mostly yes. Some researchers suggest 3.5% to 3.8% is more conservative. For most people doing rough planning, 4% remains a solid starting point.</p>
      <p><strong>Does the 4% Rule work in any country?</strong> It was built on US market data. If you are investing outside the US, a slightly lower rate adds safety.</p>
      <p><strong>What if I have a pension or Social Security?</strong> Subtract that income from your annual expenses first. Your portfolio only needs to cover the difference.</p>
      <p><strong>Can I use the 4% Rule with index funds?</strong> Yes — it was designed with a mix of stocks and bonds in mind.</p>
      <h2>Try It Yourself</h2>
      <p>Honestly, just plug in what you spend and see where you stand. That is it.</p>
      <p><a href="/tools/fire-number">Use the FirePath FIRE Number Calculator</a></p>
      <hr />
      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without knowing the finish line.</em></p>
      <p><small>The 4% Rule originates from the Trinity Study (Cooley, Hubbard and Walz, 1998). It is a guideline, not a guarantee. Consult a financial advisor for personalized advice.</small></p>
    </article>
  )
}
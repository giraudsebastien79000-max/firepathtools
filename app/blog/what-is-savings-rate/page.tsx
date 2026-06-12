import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Savings Rate and Why It Matters | FirePath Tools',
  description: 'Your savings rate is the most important number in your financial life. Here is what it is, how to calculate yours, and why it matters more than your salary.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>What Is a Savings Rate — And Why It Matters More Than Your Salary</h1>
      <p><strong>Your savings rate is the percentage of your income you keep instead of spend.</strong></p>
      <p>If you earn $4,000 a month and save $800, your savings rate is 20%. That is probably the single most important number in your financial life — more than your salary, more than your investment returns, more than anything else.</p>
      <h2>Why Your Savings Rate Beats Everything Else</h2>
      <p>Someone earning $100,000 and saving 10% will take longer to reach financial independence than someone earning $60,000 and saving 40%. The gap between what you earn and what you spend is what builds wealth. Not the top line — the gap.</p>
      <h2>The Real Numbers</h2>
      <ul>
        <li>Save 10% → roughly 43 years</li>
        <li>Save 20% → roughly 37 years</li>
        <li>Save 30% → roughly 28 years</li>
        <li>Save 40% → roughly 22 years</li>
        <li>Save 50% → roughly 17 years</li>
        <li>Save 60% → roughly 12 years</li>
        <li>Save 70% → roughly 8 years</li>
      </ul>
      <p>Look at the jump between 10% and 50%. That is 26 years of your life.</p>
      <h2>A Real Example</h2>
      <p>Maria is 31. She earns $55,000 a year after tax.</p>
      <p><strong>Scenario A — 15% savings rate:</strong> She saves $687/month. Financial independence around age 74.</p>
      <p><strong>Scenario B — 35% savings rate:</strong> She saves $1,603/month. Financial independence around age 55.</p>
      <p>Same salary. Same person. 19 years difference. The only thing that changed was the gap.</p>
      <h2>How to Calculate Yours</h2>
      <p>Savings Rate = (Amount Saved divided by Take-Home Income) x 100</p>
      <p>If you take home $3,500/month and save $700: 700 divided by 3,500 = 0.20 — 20% savings rate.</p>
      <h2>The Honest Truth About Savings Rates</h2>
      <p>I used to think I was doing fine because I was not going into debt. Turns out, breaking even is not building anything. I was working full-time and my financial situation at 40 looked almost identical to what it was at 32.</p>
      <p>When I actually calculated my savings rate — really calculated it, not just guessed — it was 7%. Seven percent. I thought it was closer to 20.</p>
      <p>I could not believe it. I genuinely thought I had been doing well — turns out I had not even scratched the surface.</p>
      <h2>What Is a Good Savings Rate?</h2>
      <ul>
        <li><strong>10-15%</strong> — traditional advice. You will retire around the standard age.</li>
        <li><strong>20-30%</strong> — solid. You are building real momentum.</li>
        <li><strong>40-50%</strong> — FIRE territory. You are shortening your working years significantly.</li>
        <li><strong>50%+</strong> — aggressive but possible. Requires lifestyle intentionality.</li>
      </ul>
      <h2>The Relationship Between Savings Rate and FIRE Number</h2>
      <p>If you spend less, your FIRE number is smaller. If you save more, you reach it faster. These two forces work together — and a simple 5% bump in your savings rate can buy back years you did not expect to get.</p>
      <h2>FAQ</h2>
      <p><strong>Should I include employer 401k matching?</strong> Yes. That is your money. Include it.</p>
      <p><strong>What if I have irregular income?</strong> Calculate it over 12 months. Total saved divided by total take-home income for the year.</p>
      <p><strong>Is paying off debt the same as saving?</strong> Paying off high-interest debt is often better than investing. Either way, it moves your net worth in the right direction.</p>
      <p><strong>What is a realistic savings rate for someone just starting out?</strong> Start at 10% — no matter what. Then every year, bump it up by 1% when you get a raise or drop an expense. Do that for a few years and you will feel the difference without even having to look at the numbers.</p>
      <h2>See What Your Savings Rate Means for Your Timeline</h2>
      <p>Honestly, plug in what you earn and what you save — it takes two minutes and the result might surprise you.</p>
      <p><a href="/tools/savings-rate">Use the FirePath Savings Rate Calculator</a></p>
      <hr />
      <p><em>Written by the FirePath Team. Not financial advisors — just regular people who got tired of working without a clear finish line.</em></p>
      <p><small>All projections assume a 7% average annual return and are for illustrative purposes only. Consult a financial advisor for personalized advice.</small></p>
    </article>
  )
}
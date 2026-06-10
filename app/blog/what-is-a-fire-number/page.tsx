import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a FIRE Number? A Beginner''s Guide | FirePath Tools',
  description: 'Learn what a FIRE number is, how to calculate yours using the 25x rule, and why knowing this single number changes everything about saving for financial independence.',
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1>What Is a FIRE Number? A Beginner''s Guide to Financial Independence</h1>
      <p><strong>Your FIRE number is the amount of money you need invested to never work again.</strong></p>
      <p>It sounds almost too easy to be true. But yeah — that''s really it. And once you hit it, your investments generate enough income to cover your expenses — forever.</p>
      <h2>The Simple Formula Behind It</h2>
      <p>Your FIRE number = <strong>Annual expenses x 25</strong></p>
      <p>That''s the whole math. If you spend ,000 per year, your FIRE number is ,000,000. If you spend ,000, it''s ,500,000.</p>
      <p>Why 25? Because of the <strong>4% Rule</strong> — a principle from a 1998 study (the Trinity Study) showing that if you withdraw 4% of your portfolio per year, your money lasts at least 30 years — even through market crashes. 25 is simply the inverse of 4%.</p>
      <h2>A Real Example</h2>
      <p>Meet Marcus. He''s 33, living in a mid-size American city, and his annual expenses look like this:</p>
      <ul>
        <li>Rent: ,000</li>
        <li>Food: ,200</li>
        <li>Transport: ,400</li>
        <li>Health insurance: ,800</li>
        <li>Everything else: ,600</li>
        <li><strong>Total: ,000/year</strong></li>
      </ul>
      <p>Marcus''s FIRE number: <strong>\,000 x 25 = \,100,000</strong></p>
      <p>He currently has \,800 invested. Gap to close: \,067,200. Big? Yes. Impossible? No — but it requires a plan, not just hope.</p>
      <h2>Why Your Expenses Matter More Than Your Income</h2>
      <p>Here''s the insight most people miss: <strong>your FIRE number is determined by your spending, not your salary.</strong></p>
      <p>Someone earning \,000 but spending \,000 needs \,500,000 to retire. Someone earning \,000 but spending \,000 needs only \,000. The path to financial independence isn''t always about earning more — it''s about the gap between what you earn and what you spend.</p>
      <h2>The 3 Types of FIRE</h2>
      <h3>Lean FIRE</h3>
      <p>Living very frugally — annual expenses under \,000. Your number is smaller but your lifestyle is tight. Works best if you''re minimalist by nature.</p>
      <h3>Regular FIRE</h3>
      <p>The middle ground. Annual expenses around \,000–\,000. This is what most FIRE calculators assume.</p>
      <h3>Fat FIRE</h3>
      <p>Financial independence without sacrificing comfort. Expenses over \,000/year. Requires \+ but you don''t have to cut anything.</p>
      <h2>What the FIRE Number Doesn''t Tell You</h2>
      <p>Your FIRE number is a powerful starting point — but it has limits:</p>
      <ul>
        <li><strong>It assumes your expenses stay the same.</strong> Kids, health issues, inflation — life changes. Build in a margin of safety.</li>
        <li><strong>The 4% rule covers 30 years.</strong> If you plan to retire before 45, use x28 or x30 instead — your retirement could last 50+ years.</li>
        <li><strong>It doesn''t account for Social Security or pensions.</strong> If you expect \,000/year from Social Security, your required withdrawal drops.</li>
        <li><strong>It''s a snapshot, not a sentence.</strong> Recalculate every year.</li>
      </ul>
      <h2>How to Calculate Yours Right Now</h2>
      <p>Honestly, just type in your numbers and you get your answer straight away. That''s it.</p>
      <p><a href='/tools/fire-number-calculator'>Use the FirePath FIRE Number Calculator</a> — plug in your annual expenses and it shows your target, your gap, and how long it''ll take to get there.</p>
      <h2>The Real Value of Knowing Your Number</h2>
      <p>For years, I spent without thinking about tomorrow. Living in the moment felt natural — until I started seeing people around me still grinding well into their 60s and 70s, with no way out. People who had worked their whole lives and still couldn''t stop. That''s when it hit me: if I didn''t do something now, I''d end up in the same place.</p>
      <p>Knowing my FIRE number was the first time saving actually meant something. Not save more — but save this specific amount, for this specific reason.</p>
      <p>Your number might feel big right now. That''s okay. The point isn''t to panic — it''s to stop drifting and start moving in a direction that actually leads somewhere.</p>
      <h2>Frequently Asked Questions</h2>
      <h3>Is \ million really enough to retire on?</h3>
      <p>It depends entirely on your expenses. If you spend \,000/year, \ gives you exactly the 4% withdrawal rate. There''s no universal answer — that''s why your personal number matters more than any round figure.</p>
      <h3>What if the stock market crashes right after I retire?</h3>
      <p>This is called sequence of returns risk and it''s real. That''s why many people use 25x as a minimum and aim for 28x or 30x for extra safety margin.</p>
      <h3>Do I need to completely stop working to use the FIRE number?</h3>
      <p>No. Many people reach their FIRE number and still work — just on their own terms. The goal is freedom, not necessarily doing nothing.</p>
      <h3>What counts as annual expenses?</h3>
      <p>Everything you actually spend in a year. Be honest. Most people underestimate by 15–20%.</p>
      <h3>How long does it take to reach a FIRE number?</h3>
      <p>Save 10% of your income: roughly 40+ years. Save 40%: closer to 22 years. Save 60%: under 15 years.</p>
      <h2>Next Steps</h2>
      <ul>
        <li><a href='/tools/fire-number-calculator'>Calculate your FIRE number</a></li>
        <li><a href='/tools/savings-rate-calculator'>See how your savings rate affects your timeline</a></li>
        <li><a href='/tools/compound-interest-calculator'>Model compound growth toward your target</a></li>
      </ul>
      <hr />
      <p><em>Written by the FirePath Team. We''re not financial advisors — just regular people who got tired of working without a plan. FirePath was built to give everyone access to the tools that actually help you figure out where you stand.</em></p>
      <p><small>The 4% Rule originates from the Trinity Study (Cooley, Hubbard and Walz, 1998). It is a guideline, not a guarantee. Consult a financial advisor for personalized advice.</small></p>
    </article>
  )
}
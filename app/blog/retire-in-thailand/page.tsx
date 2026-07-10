import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Retire in Thailand: The Complete FIRE Guide (2026)',
 description:
 'How much you actually need to retire in Thailand in 2026: THB 800,000 or THB 65,000/month for the retirement visa, USD 1,200-2,500/month to live well, plus the under-50 visa routes and the new tax rules.',
 openGraph: {
 title: 'Retire in Thailand: The Complete FIRE Guide (2026)',
 description:
 'How much you actually need to retire in Thailand in 2026: THB 800,000 or THB 65,000/month for the retirement visa, USD 1,200-2,500/month to live well, plus the under-50 visa routes and the new tax rules.',
 url: 'https://firepathtools.com/blog/retire-in-thailand',
 siteName: 'FirePathTools',
 type: 'article',
 },
}

const faqItems = [
 {
 question: 'How much money do you need to retire in Thailand?',
 answer:
 'The retirement visa requires THB 800,000 (~USD 22,000) in a Thai bank or THB 65,000/month (~USD 1,800) in income. A realistic comfortable budget is USD 1,200-2,500/month depending on location. At a 4% withdrawal rate, that translates to a portfolio of roughly USD 360,000-750,000.',
 },
 {
 question: 'What is the Thailand retirement visa requirement in 2026?',
 answer:
 'Minimum age 50, plus either THB 800,000 held in a Thai bank account (with a 2-month seasoning period) or THB 65,000/month in verifiable income. The O-A version applied for from abroad also requires Thai-recognized health insurance. The visa is renewed annually and does not permit work.',
 },
 {
 question: 'Can you retire in Thailand before age 50?',
 answer:
 'Yes, via three main routes: the DTV visa (5 years, around THB 500,000 in savings, aimed at remote workers, no age requirement), the Thailand Privilege membership (roughly THB 650,000 entry tier, no age or income requirement), or the LTR Wealthy Pensioner visa (10 years, but requires USD 80,000/year in passive income and age 50+).',
 },
 {
 question: 'Do retirees pay tax in Thailand?',
 answer:
 'If you spend 180+ days per year in Thailand, you are a tax resident. Since 2024, foreign income remitted into Thailand is taxable at progressive rates of 5-35%. Pre-2024 savings remain exempt if documented. A draft rule may exempt income remitted in the year earned or the following year, but it is not yet law. LTR visa holders get remitted foreign income exempted.',
 },
 {
 question: 'Where is the cheapest place to retire in Thailand?',
 answer:
 'Chiang Mai and other northern cities offer the best value: around USD 1,000-1,600/month for a comfortable single-person budget including rent, versus USD 1,500-2,500 in Bangkok and USD 1,800-3,000 on the islands.',
 },
 {
 question: 'Is health insurance required to retire in Thailand?',
 answer:
 'For the O-A visa applied for from abroad, yes: Thai-recognized coverage with at least THB 40,000 outpatient and THB 400,000 inpatient. The in-country Non-O route does not mandate insurance, but going uninsured is risky - premiums rise steeply after 65, so locking in coverage early matters.',
 },
]

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqItems.map((item) => ({
 '@type': 'Question',
 name: item.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: item.answer,
 },
 })),
}

export default function RetireInThailand() {
 return (
 <main className="min-h-screen bg-gray-950 text-gray-100">

 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* Hero */}
 <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
 Retire in Thailand
 </p>
 <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
 Retire in Thailand: The Complete FIRE Guide
 </h1>

 {/* Quick answer (AEO) */}
 <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">
 Quick answer
 </p>
 <p className="text-lg text-gray-200 leading-relaxed">
 To retire in Thailand in 2026, the standard retirement visa (age 50+) requires THB
 800,000 (~USD 22,000) in a Thai bank or THB 65,000/month (~USD 1,800) in income. A
 comfortable budget is USD 1,200-2,500/month, which at a 4% withdrawal rate means a
 portfolio of roughly USD 360,000-750,000.
 </p>
 </div>

 <p className="text-xl text-gray-300 leading-relaxed">
 Thailand is the original FIRE geo-arbitrage destination: world-class food, warm
 weather, excellent private healthcare, and a cost of living that lets a mid-six-figure
 portfolio do what a seven-figure one does back home. But the rules changed more in the
 last two years than in the previous ten - on visas and especially on tax - so the math
 deserves a fresh look.
 </p>
 <p className="mt-4 text-sm text-gray-500">
 Updated July 2026 - 9 min read
 </p>
 </section>

 {/* Divider */}
 <div className="max-w-3xl mx-auto px-6">
 <div className="border-t border-gray-800" />
 </div>

 {/* At a glance table (AEO) */}
 <section className="max-w-3xl mx-auto px-6 py-12">
 <h2 className="text-2xl font-bold text-white mb-4">Thailand FIRE at a glance (2026)</h2>
 <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
 <table className="w-full text-left">
 <thead>
 <tr className="border-b border-gray-800">
 <th className="p-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Item</th>
 <th className="p-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Number</th>
 </tr>
 </thead>
 <tbody className="text-gray-300">
 <tr className="border-b border-gray-800">
 <td className="p-4">Retirement visa financial proof (age 50+)</td>
 <td className="p-4 text-white font-semibold">THB 800,000 in bank or THB 65,000/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Under-50 route: DTV visa (5 years)</td>
 <td className="p-4 text-white font-semibold">~THB 500,000 in savings</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - Chiang Mai / north</td>
 <td className="p-4 text-white font-semibold">USD 1,000-1,600/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - Bangkok</td>
 <td className="p-4 text-white font-semibold">USD 1,500-2,500/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - Phuket / islands</td>
 <td className="p-4 text-white font-semibold">USD 1,800-3,000/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Income tax on remitted foreign income (residents)</td>
 <td className="p-4 text-white font-semibold">5% to 35% progressive</td>
 </tr>
 <tr>
 <td className="p-4">Tax residency threshold</td>
 <td className="p-4 text-white font-semibold">180+ days/year</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-500">
 Planning ranges for a single person, rent included. THB figures converted at roughly
 THB 36 = USD 1; exchange rates move, so re-check before committing.
 </p>
 </section>

 {/* Try it yourself (AEO) */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
 <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
 Try it yourself
 </p>
 <p className="text-white text-2xl font-extrabold mb-4">
 Run your own Thailand numbers in 60 seconds.
 </p>
 <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Plug a Thailand budget from the table above into your own withdrawal rate and see
 exactly what portfolio you need - and how many years away it is.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 href="/fire-by-country-calculator"
 className="inline-block bg-orange-500 hover:bg-orange-400 font-bold px-6 py-3 rounded-lg transition-colors text-center"
 style={{ color: "#ffffff" }}
 >
 FIRE by Country Calculator
 </Link>
 <Link
 href="/tools/fire-number"
 className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
 >
 FIRE Number Calculator
 </Link>
 </div>
 </div>
 </section>

 {/* FAQ (AEO) */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-6">Retire in Thailand: FAQ</h2>
 <div className="space-y-6">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
 <p className="text-white font-semibold text-lg mb-2">{item.question}</p>
 <p className="text-gray-300 leading-relaxed">{item.answer}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Why Thailand */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Why FIRE savers keep landing on Thailand</h2>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside mb-4">
 <li>
 <span className="text-white font-semibold">The cost-of-living gap is still real.</span>{' '}
 A budget that buys a tight retirement in a mid-size US or UK city buys a genuinely
 comfortable one in most of Thailand - housing, food, and services all run at a
 fraction of Western prices.
 </li>
 <li>
 <span className="text-white font-semibold">Private healthcare is excellent and affordable.</span>{' '}
 Bangkok and Chiang Mai hospitals serve international patients at prices that make
 self-paying viable - a major line item that geo-arbitrage genuinely shrinks.
 </li>
 <li>
 <span className="text-white font-semibold">There is now a visa for almost every profile.</span>{' '}
 Six long-stay pathways exist in 2026, from the classic retirement visa to options
 with no age requirement at all - which matters for FIRE savers retiring at 35 or 40.
 </li>
 </ul>
 <p className="text-lg text-gray-300 leading-relaxed">
 The trade-off: Thailand&apos;s famous tax simplicity is gone. Since 2024, money you bring
 into the country as a tax resident can be taxable, and the rules are still settling.
 The lifestyle math still works - but it now requires actual tax planning, not just a
 plane ticket.
 </p>
 </section>

 {/* Visa routes */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">The visa routes, by age and profile</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 <span className="text-white font-semibold">50 or older:</span> the classic retirement
 route. Apply in-country (Non-O) after depositing THB 800,000 in a Thai bank and letting
 it season for 2 months, or from abroad (O-A) with the same financial proof plus
 mandatory health insurance. Renewal is annual, the deposit must stay largely intact,
 and no work is permitted. Leaving Thailand without a re-entry permit cancels the visa -
 a detail that catches people every year.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 <span className="text-white font-semibold">Under 50 (most FIRE readers):</span> the DTV
 visa is the pragmatic option - around THB 500,000 in savings, 5-year validity with
 180-day entries, designed for remote workers and long-stay visitors. If you still have
 any location-independent income, you fit its intent. The Thailand Privilege membership
 (from roughly THB 650,000) buys long-stay rights with no age, income, or deposit
 requirements - expensive, but it converts a visa problem into a known one-time cost.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 <span className="text-white font-semibold">High earners:</span> the LTR Wealthy
 Pensioner visa offers 10 years and a full tax exemption on remitted foreign income, but
 requires USD 80,000/year in passive income and age 50+ - a high bar that mostly suits
 FatFIRE profiles.
 </p>
 </section>

 {/* Tax section */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">The tax question (and why old Thailand advice is now wrong)</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 For decades, the playbook was simple: earn abroad, wait until the next calendar year,
 remit tax-free. That loophole closed in January 2024. Now, if you spend 180+ days per
 year in Thailand, foreign income you bring into the country - bank transfers, ATM
 withdrawals, even card spending - is assessable at progressive rates of 5% to 35%.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Three things soften the blow. Savings earned before 2024 remain exempt if you can
 document them - keeping pre-2024 money in a separate account is the cleanest approach.
 Thailand has double-taxation treaties with 60+ countries, which often shield specific
 income types like certain government pensions. And a draft rule under review would
 exempt income remitted in the year it is earned or the following year - a partial
 return to the old regime - but as of mid-2026 it is not yet law, so do not plan around
 it.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 The practical takeaway: your effective Thai tax bill depends heavily on how and when
 you move money, not just how much you spend. Run your plan past a Thai-competent
 cross-border tax advisor before committing - the difference between a clean remittance
 strategy and a careless one can be several percentage points of your annual budget.
 </p>
 </section>

 {/* Cities */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Where FIRE expats actually settle</h2>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside">
 <li>
 <span className="text-white font-semibold">Chiang Mai</span> - the FIRE classic:
 lowest costs of the major hubs, a huge expat and remote-work community, good
 hospitals. The burning-season air quality (roughly February to April) is the honest
 downside.
 </li>
 <li>
 <span className="text-white font-semibold">Bangkok</span> - world-class food,
 healthcare, and flight connections at a still-reasonable cost; the step up in budget
 buys a very large step up in convenience.
 </li>
 <li>
 <span className="text-white font-semibold">Phuket, Koh Samui, and the islands</span>{' '}
 - the beach-lifestyle premium: expect Bangkok-level or higher costs, especially for
 housing in the in-demand areas.
 </li>
 <li>
 <span className="text-white font-semibold">Hua Hin and Pattaya</span> - established
 retiree hubs with mid-range costs, strong services, and large existing expat
 communities.
 </li>
 </ul>
 </section>

 {/* Sanity check */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">A simple way to sanity-check your number</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Budget from realistic spending, not the visa minimum - THB 65,000/month is a legal
 threshold, not a lifestyle plan. Then stress-test two Thailand-specific variables:
 currency risk (your portfolio is in USD, GBP, or EUR; your spending is in baht - a 10%
 baht strengthening is a 10% budget cut) and the tax drag from the remittance rules
 above.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 A reasonable rule of thumb: take your target Thailand budget, add 10-15% as a currency
 and tax buffer, and size your FIRE number from that figure. If the plan only works
 without the buffer, it is not a plan - it is a bet on exchange rates.
 </p>
 </section>

 {/* Practical steps */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Practical next steps</h2>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside">
 <li>Decide your <span className="text-white font-semibold">visa route by age and income profile</span> first - it determines everything else, including your tax exposure.</li>
 <li>If using the bank-deposit route, plan for the <span className="text-white font-semibold">2-month seasoning period</span> - the THB 800,000 must sit in a Thai account before you can apply.</li>
 <li>Keep <span className="text-white font-semibold">pre-2024 savings in a clearly separate account</span> with statements - it is the difference between tax-free and taxable remittances.</li>
 <li>Buy a <span className="text-white font-semibold">re-entry permit before any trip abroad</span> - leaving without one cancels a retirement extension.</li>
 <li>Lock in <span className="text-white font-semibold">health insurance before 60-65</span> - premiums roughly triple between 55 and 65, and waiting prices many retirees out.</li>
 </ul>
 <p className="mt-8 text-sm text-gray-500 italic">
 This article is for general information only and isn&apos;t personalized visa, tax, or
 financial advice. Immigration and tax rules change; confirm current requirements with a
 licensed advisor before making a move.
 </p>
 </section>

 {/* Related */}
 <section className="max-w-3xl mx-auto px-6 pb-20">
 <h3 className="text-xl font-bold text-white mb-6">Related articles</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {[
 { title: 'Retire in Portugal: The Complete FIRE Guide', href: '/blog/retire-in-portugal', desc: 'The D7 visa, real budgets by region, and the post-NHR tax picture.' },
              { title: 'Retire in Spain: The Complete FIRE Guide', href: '/blog/retire-in-spain', desc: 'The non-lucrative visa, wealth tax by region, and budgets city by city.' },
 { title: 'How Long Does It Actually Take to Reach FIRE?', href: '/blog/how-long-to-reach-fire', desc: 'The full savings rate timeline table - from 5% to 75%.' },
 { title: 'What Is the FIRE Number?', href: '/blog/what-is-a-fire-number', desc: 'How to calculate the portfolio size you need to retire early.' },
 { title: 'What Is the 4% Rule?', href: '/blog/what-is-the-4-percent-rule', desc: 'The research behind the most cited number in early retirement.' },
 ].map((article, i) => (
 <Link
 key={i}
 href={article.href}
 className="block bg-gray-900 hover:bg-slate-800 border border-gray-800 rounded-xl p-5 transition-colors group"
 >
 <p className="text-white font-semibold group-hover:text-orange-400 transition-colors mb-1">
 {article.title}
 </p>
 <p className="text-gray-300 text-sm">{article.desc}</p>
 </Link>
 ))}
 </div>
 </section>

 </main>
 )
}
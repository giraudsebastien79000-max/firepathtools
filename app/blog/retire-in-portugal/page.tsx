import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Retire in Portugal: The Complete FIRE Guide (2026)',
 description:
 'How much you actually need to retire in Portugal in 2026: EUR920/month for the D7 visa, EUR1,300-EUR2,600/month for a comfortable life, plus taxes, cities, and next steps.',
 openGraph: {
 title: 'Retire in Portugal: The Complete FIRE Guide (2026)',
 description:
 'How much you actually need to retire in Portugal in 2026: EUR920/month for the D7 visa, EUR1,300-EUR2,600/month for a comfortable life, plus taxes, cities, and next steps.',
 url: 'https://firepathtools.com/blog/retire-in-portugal',
 siteName: 'FirePathTools',
 type: 'article',
 },
}

const faqItems = [
 {
 question: 'How much money do you need to retire in Portugal?',
 answer:
 'The legal minimum is EUR920/month in passive income for the D7 visa, but a realistic comfortable budget is EUR1,300-EUR2,600/month depending on region. At a 4% withdrawal rate, that translates to a portfolio of roughly EUR390,000-EUR780,000.',
 },
 {
 question: 'What is the D7 visa income requirement in 2026?',
 answer:
 'EUR920/month in passive income (pensions, dividends, rental income, or investment withdrawals) for a single applicant, rising 50% for a spouse and 30% per dependent. You also need savings and secured housing before applying.',
 },
 {
 question: 'Does Portugal still offer the NHR tax regime?',
 answer:
 'No. The old NHR regime closed to new applicants in 2024. Its replacement (IFICI) targets professionals in specific innovation sectors and generally does not apply to retirees. Most new D7 holders pay standard progressive income tax of roughly 13% to 48%.',
 },
 {
 question: 'Where is the cheapest place to retire in Portugal?',
 answer:
 'Inland cities like Braga, Coimbra, and Viseu offer the best value: around EUR1,300-EUR1,800/month for a single person including rent, versus EUR1,800-EUR2,600+ in Lisbon.',
 },
 {
 question: 'Can Americans retire in Portugal?',
 answer:
 'Yes, most commonly via the D7 visa. US citizens must still file US taxes regardless of residency, though the Foreign Tax Credit and other provisions can offset much of the double-taxation risk. A cross-border tax advisor is strongly recommended.',
 },
 {
 question: 'How long until permanent residency or citizenship in Portugal?',
 answer:
 'Permanent residency is possible after 5 years of legal residence. Citizenship now requires 10 years under rules that took effect in 2026 (7 years for EU/CPLP nationals).',
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

export default function RetireInPortugal() {
 return (
 <main className="min-h-screen bg-gray-950 text-gray-100">

 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* Hero */}
 <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
 Retire in Portugal
 </p>
 <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
 Retire in Portugal: The Complete FIRE Guide
 </h1>

 {/* Quick answer (AEO) */}
 <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">
 Quick answer
 </p>
 <p className="text-lg text-gray-200 leading-relaxed">
 To retire in Portugal in 2026, you need at least EUR920/month in proven passive
 income for the D7 visa. A realistic comfortable budget is EUR1,300-EUR2,600/month
 depending on region, which at a 4% withdrawal rate means a portfolio of roughly
 EUR390,000-EUR780,000.
 </p>
 </div>

 <p className="text-xl text-gray-300 leading-relaxed">
 Portugal shows up on almost every &quot;best places to retire&quot; list, and for FIRE savers
 specifically, it solves a problem few other countries do: it lets a modest US, UK,
 Canadian, or Australian nest egg stretch into a genuinely comfortable, low-stress life
 in Western Europe.
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
 <h2 className="text-2xl font-bold text-white mb-4">Portugal FIRE at a glance (2026)</h2>
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
 <td className="p-4">D7 visa minimum passive income (single)</td>
 <td className="p-4 text-white font-semibold">EUR920/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - inland town (Braga, Coimbra, Viseu)</td>
 <td className="p-4 text-white font-semibold">EUR1,300-EUR1,800/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - Porto or Algarve town</td>
 <td className="p-4 text-white font-semibold">EUR1,500-EUR2,200/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Comfortable budget - Lisbon</td>
 <td className="p-4 text-white font-semibold">EUR1,800-EUR2,600+/month</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Income tax (standard progressive, post-NHR)</td>
 <td className="p-4 text-white font-semibold">~13% to 48%</td>
 </tr>
 <tr className="border-b border-gray-800">
 <td className="p-4">Permanent residency</td>
 <td className="p-4 text-white font-semibold">After 5 years</td>
 </tr>
 <tr>
 <td className="p-4">Citizenship (2026 rules)</td>
 <td className="p-4 text-white font-semibold">10 years (7 for EU/CPLP)</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-500">
 Planning ranges for a single person, rent included. Couples typically add 30-50%, not
 double.
 </p>
 </section>

 {/* Try it yourself (AEO) */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
 <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
 Try it yourself
 </p>
 <p className="text-white text-2xl font-extrabold mb-4">
 Run your own Portugal numbers in 60 seconds.
 </p>
 <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Plug a Portugal budget from the table above into your own withdrawal rate and see
 exactly what portfolio you need - and how many years away it is.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 href="/fire-by-country-calculator"
 className="inline-block bg-orange-500 hover:bg-orange-400 font-bold px-6 py-3 rounded-lg transition-colors text-center" style={{ color: "#ffffff" }}
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
 <h2 className="text-2xl font-bold text-white mb-6">Retire in Portugal: FAQ</h2>
 <div className="space-y-6">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
 <p className="text-white font-semibold text-lg mb-2">{item.question}</p>
 <p className="text-gray-300 leading-relaxed">{item.answer}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Why Portugal */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Why FIRE savers keep landing on Portugal</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Three things make Portugal different from most &quot;retire abroad&quot; destinations:
 </p>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside mb-4">
 <li>
 <span className="text-white font-semibold">Overall living costs remain meaningfully lower</span> than
 the US, UK, or Canada - commonly cited as roughly 30% lower than the US once rent is
 included, with groceries and dining out even cheaper by comparison.
 </li>
 <li>
 <span className="text-white font-semibold">A visa built for passive income, not employment.</span>{' '}
 Portugal&apos;s D7 visa is designed specifically for people living off pensions,
 dividends, rental income, or investment withdrawals - which describes most FIRE
 portfolios.
 </li>
 <li>
 <span className="text-white font-semibold">A genuinely high quality of life.</span>{' '}
 Safety rankings,
 healthcare access, and climate consistently score well, which matters more once
 &quot;retirement&quot; isn&apos;t a two-week vacation anymore.
 </li>
 </ul>
 <p className="text-lg text-gray-300 leading-relaxed">
 The trade-off: Portugal isn&apos;t the bargain it was a decade ago. Lisbon and Porto rents
 have climbed sharply, and the tax perks that made Portugal famous among early retirees
 have narrowed. Both details change the math, so it&apos;s worth planning around current
 numbers rather than outdated blog posts.
 </p>
 </section>

 {/* Cost detail */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">What it actually costs, month to month</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Rough breakdown outside rent: groceries around EUR250-EUR350/month, private supplemental
 healthcare EUR30-EUR100/month, utilities and internet around EUR150-EUR200/month combined.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 Two numbers matter most for a FIRE plan. Rent is the swing factor - a one-bedroom
 outside Lisbon&apos;s center can run EUR1,000-EUR1,150/month, while the same apartment in an
 inland city might be EUR600-EUR900. And Portugal&apos;s D7 visa only requires proving
 EUR920/month in passive income (as of 2026) - far below what it actually costs to live
 comfortably. The visa threshold is a legal minimum, not a livable budget.
 </p>
 </section>

 {/* D7 visa callout */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
 <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
 The visa
 </p>
 <p className="text-white text-3xl font-extrabold mb-4">
 The D7 visa, in plain terms.
 </p>
 <p className="text-gray-300 text-lg leading-relaxed">
 Minimum passive income: EUR920/month for a single applicant (~EUR11,040/year), rising 50%
 for a spouse and 30% per dependent. You&apos;ll need savings and secured housing before
 applying. Initial permit: 2 years, renewable for 3 more. Permanent residency after 5
 years; citizenship now requires 10 years under rules that took effect in 2026 (7 years
 for EU/CPLP nationals).
 </p>
 </div>
 </section>

 {/* Full D7 section */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">The D7 visa: the route most FIRE retirees use</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 The D7 (sometimes called the &quot;passive income visa&quot; or &quot;retirement visa&quot;) is the standard
 path for non-EU citizens living off pensions, dividends, rental income, or investment
 withdrawals - with no requirement to work or invest in the local economy.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 You&apos;ll need to spend the bulk of the year in Portugal to maintain the permit, which
 triggers Portuguese tax residency - an important distinction from Portugal&apos;s Golden
 Visa, which requires far less physical presence but a much larger investment. If your
 FIRE income comes from active freelance or remote work rather than passive sources, the
 D8 digital nomad visa is the better fit - higher income threshold, but no &quot;passive
 income&quot; requirement.
 </p>
 </section>

 {/* Tax section */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">The tax question (and why &quot;NHR&quot; isn&apos;t what it used to be)</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Portugal&apos;s old Non-Habitual Resident (NHR) regime - the one responsible for a lot of
 the &quot;move to Portugal, pay almost no tax&quot; advice still floating around online -
 effectively closed to new applicants back in 2024. It&apos;s been replaced by a narrower
 regime (IFICI) aimed at qualified professionals in specific innovation sectors, and it
 generally doesn&apos;t apply to retirees living off pensions or investment income.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 In practice, most new D7 visa holders are taxed under Portugal&apos;s standard progressive
 income tax system, with rates running from roughly 13% to 48% depending on income level.
 This is the single most-changed variable for anyone planning a Portugal FIRE move based
 on older articles - run your numbers assuming standard taxation, not the old NHR perks,
 and confirm with a cross-border tax professional before you commit.
 </p>
 </section>

 {/* Cities */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Where FIRE expats actually settle</h2>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside">
 <li>
 <span className="text-white font-semibold">Braga, Coimbra, Viseu</span> - the best
 value-for-quality combination: lower costs, solid infrastructure, and a growing expat
 community, without Lisbon&apos;s price pressure.
 </li>
 <li>
 <span className="text-white font-semibold">Porto</span> - a step up in cost from the
 inland cities but still meaningfully cheaper than Lisbon, with strong healthcare and
 transit.
 </li>
 <li>
 <span className="text-white font-semibold">The Algarve</span> (Lagos, Tavira, Faro) -
 popular for the coastal lifestyle and English-speaking expat density, though prices in
 the most in-demand towns now rival parts of Porto.
 </li>
 <li>
 <span className="text-white font-semibold">Lisbon</span> - the most expensive option,
 but still cheaper than most major US or UK cities, with the best access to
 international flights and services.
 </li>
 </ul>
 </section>

 {/* Sanity check */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">A simple way to sanity-check your number</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Before assuming Portugal &quot;solves&quot; your FIRE number, run it both ways: take your target
 monthly spend at home and see what it becomes at a realistic Portugal budget for your
 preferred region (using the ranges above, not the D7 visa minimum), then compare that to
 what your current portfolio can safely support at your withdrawal rate of choice.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 Because the cost difference between an inland city and Lisbon can be 30-40%, the region
 you choose functionally changes your FIRE number more than most portfolio decisions
 will.
 </p>
 </section>

 {/* Practical steps */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">Practical next steps</h2>
 <ul className="space-y-3 text-lg text-gray-300 leading-relaxed list-disc list-inside">
 <li>Get your <span className="text-white font-semibold">NIF</span> (Portuguese tax number) early - you need it before opening a bank account or signing a lease.</li>
 <li>Budget for <span className="text-white font-semibold">3-4 months of living expenses plus deposit money</span> before you arrive; many landlords ask for 2-3 months&apos; rent upfront.</li>
 <li>Confirm your <span className="text-white font-semibold">US tax filing obligations don&apos;t disappear</span> just because you&apos;ve moved - American citizens file regardless of residency, though the Foreign Earned Income Exclusion and Foreign Tax Credit can offset much of it.</li>
 <li>Talk to a <span className="text-white font-semibold">cross-border tax advisor before</span> applying, not after - the NHR-to-IFICI change has caught out a lot of people relying on outdated guides.</li>
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
 { title: 'How Long Does It Actually Take to Reach FIRE?', href: '/blog/how-long-to-reach-fire', desc: 'The full savings rate timeline table - from 5% to 75%.' },
 { title: 'What Is the FIRE Number?', href: '/blog/what-is-a-fire-number', desc: 'How to calculate the portfolio size you need to retire early.' },
 { title: 'What Is the 4% Rule?', href: '/blog/what-is-the-4-percent-rule', desc: 'The research behind the most cited number in early retirement.' },
 { title: 'Lean FIRE vs Fat FIRE', href: '/blog/what-is-lean-fire', desc: 'How your lifestyle target shapes your savings rate requirements.' },
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
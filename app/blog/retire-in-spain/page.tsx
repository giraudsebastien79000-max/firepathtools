import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Retire in Spain: The Complete FIRE Guide (2026)",
  description:
    "How to retire in Spain in 2026: non-lucrative visa income requirements (EUR 2,400/month), the tax picture for foreign retirees, wealth tax by region, and real budgets city by city.",
}

const faqs = [
  {
    q: "How much money do you need to retire in Spain?",
    a: "For the non-lucrative visa, Spain requires passive income of EUR 2,400/month (EUR 28,800/year) for a single applicant in 2026, plus EUR 600/month per dependent. For a comfortable lifestyle, budget EUR 1,600-2,800/month depending on the city. At a 4% withdrawal rate, that means a portfolio of roughly USD 600,000.",
  },
  {
    q: "Is the Spain visa income requirement going up in 2026?",
    a: "No. The threshold is tied to Spain's IPREM index, which is updated through the national budget - and Spain entered 2026 without an approved budget, so the requirement stays frozen at 2025 levels. A future budget deal could change it mid-year, so applicants should keep a margin above the minimum.",
  },
  {
    q: "Can I work remotely on a non-lucrative visa?",
    a: "No. The NLV requires purely passive income - pensions, dividends, rental income. If your income comes from remote work or freelancing, Spain's digital nomad visa is the appropriate route instead, with different thresholds and a more favorable tax regime.",
  },
  {
    q: "How are American retirees taxed in Spain?",
    a: "Spend more than 183 days a year in Spain and you become a Spanish tax resident, taxed on worldwide income at progressive rates of 19-47%. The US-Spain tax treaty prevents most double taxation, but two traps remain: Spain does not recognize Roth IRAs as tax-free, and residents must declare foreign assets above EUR 50,000 (Modelo 720).",
  },
  {
    q: "Does Spain have a wealth tax?",
    a: "Yes, but it varies by region. Several autonomous communities levy a wealth tax on worldwide assets above a threshold, while Madrid effectively cancels it through a 100% rebate. Where you settle in Spain is a financial decision, not just a lifestyle one.",
  },
  {
    q: "Is Spain cheaper than Portugal for retirees?",
    a: "They are close. Spain's comfortable budgets run EUR 1,600-2,800/month versus EUR 1,500-2,500 in Portugal, but Spain's visa threshold (EUR 2,400/month) is much higher than Portugal's D7 (about EUR 920/month). Portugal is easier to qualify for; Spain offers more large-city options at mid-range budgets.",
  },
]

const cities = [
  { name: "Granada", budget: "EUR 1,600 - 1,800" },
  { name: "Alicante", budget: "EUR 1,700 - 1,900" },
  { name: "Seville", budget: "EUR 1,800 - 2,000" },
  { name: "Valencia", budget: "EUR 1,900 - 2,200" },
  { name: "Malaga", budget: "EUR 2,000 - 2,300" },
  { name: "Madrid", budget: "EUR 2,400 - 2,700" },
  { name: "Barcelona", budget: "EUR 2,500 - 2,800" },
]

const visaRows = [
  { item: "Minimum passive income (single)", value: "EUR 2,400/month (EUR 28,800/year)" },
  { item: "Per additional dependent", value: "EUR 600/month (EUR 7,200/year)" },
  { item: "Income accepted", value: "Pensions, dividends, rental income, Social Security - no remote work" },
  { item: "Initial permit", value: "1 year, then renewals in 2-year blocks (double the annual amount)" },
  { item: "Health insurance", value: "Private Spanish policy, no co-payments" },
  { item: "Tax residency trigger", value: "183+ days/year - worldwide income taxed at 19-47%" },
  { item: "Permanent residency / citizenship", value: "After 5 years / after 10 years" },
]

export default function RetireInSpainPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <main className="bg-gray-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Country Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Retire in Spain: The Complete FIRE Guide
        </h1>
        <p className="text-gray-400 text-sm mb-8">Updated July 2026</p>

        {/* Quick answer */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">
            Quick answer
          </p>
          <p className="text-gray-200 leading-relaxed">
            To retire in Spain in 2026, you need passive income of at least EUR
            2,400/month (about USD 2,600) for the non-lucrative visa - a threshold
            frozen this year because Spain has no approved national budget. A
            comfortable single-person budget runs EUR 1,600-2,600/month depending
            on the city, rent included.
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">
          Spain is the most popular retirement destination in Europe by volume,
          and for good reason: 300+ days of sun on the southern coast,
          world-class healthcare, high-speed rail connecting every major city,
          and established expat communities from Alicante to Malaga. Since April
          2025, when Spain suspended its Golden Visa program, the non-lucrative
          visa has become the main residency route for retirees - and it rewards
          passive income, not real estate purchases.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This guide covers the visa math, the tax picture that catches most
          foreigners off guard, and what life actually costs city by city.
        </p>
      </section>

      {/* Visa table */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Non-Lucrative Visa at a glance (2026)
        </h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[480px]">
            <tbody className="text-gray-300">
              {visaRows.map((r) => (
                <tr key={r.item} className="border-b border-gray-800 last:border-0">
                  <td className="p-3 font-semibold text-white">{r.item}</td>
                  <td className="p-3">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Section 1 */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          The Non-Lucrative Visa: the retirement route to Spain
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The NLV is a one-year residence permit for non-EU citizens who can
          support themselves without working in Spain. The 2026 requirement is
          passive income of EUR 2,400/month (400% of the Spanish IPREM index)
          for the main applicant, plus EUR 600/month per dependent. Accepted
          sources include pensions, Social Security, dividends, rental income
          and documented savings. What is not accepted: any income from work -
          including remote work for a foreign employer. Consulates have
          tightened checks on this since the Golden Visa suspension pushed more
          applicants toward the NLV.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          One quirk works in your favor this year: the IPREM is updated through
          the Spanish national budget, and Spain entered 2026 without one, so
          the threshold is frozen at its 2025 level. Apply with a comfortable
          margin anyway - consulates reject borderline files, and a mid-year
          budget deal could move the goalposts.
        </p>
        <p className="text-gray-300 leading-relaxed">
          After the first year, renewals come in two-year blocks, each requiring
          proof of double the annual amount. Five years of continuous residence
          opens permanent residency; ten years, citizenship. If your income
          comes from remote work rather than passive sources, look at the
          Spanish digital nomad visa instead - different thresholds, and a more
          favorable tax regime for employees.
        </p>
      </section>

      {/* Section 2 */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          The tax picture: where Spain gets expensive
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The visa is the easy part. Spend more than 183 days a year in Spain
          and you become a Spanish tax resident, taxed on your worldwide income
          at progressive rates of roughly 19-47% depending on income level and
          region. For Americans, US citizenship-based taxation means filing in
          both countries forever, with the US-Spain treaty and foreign tax
          credits preventing most - not all - double taxation.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Three specifics deserve attention before you commit. First, Spain does
          not recognize the Roth IRA wrapper: withdrawals the IRS treats as
          tax-free can be taxable income in Spain, which alone can reshape a
          withdrawal strategy. Second, several regions levy a wealth tax on
          worldwide assets above a threshold - but Madrid neutralizes it with a
          100% rebate, and other regions apply their own rules, so your choice
          of city is a tax decision. Third, residents must file Modelo 720, an
          informational declaration of foreign assets above EUR 50,000; it costs
          nothing but carries real penalties if ignored.
        </p>
        <p className="text-gray-300 leading-relaxed">
          None of this makes Spain a bad deal - it makes Spain a deal that needs
          an hour with a cross-border tax advisor before it needs a real estate
          agent.
        </p>
      </section>

      {/* Section 3 : cities */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What it costs, city by city
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Comfortable single-person budgets, rent included, based on the same
          planning ranges used across our country guides. Couples typically add
          40-50%, not 100% - housing is shared.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto mb-4">
          <table className="w-full text-left text-sm min-w-[380px]">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-3 font-semibold uppercase tracking-wide text-gray-400">City</th>
                <th className="p-3 font-semibold uppercase tracking-wide text-gray-400 text-right">
                  Monthly budget (single, rent included)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {cities.map((c) => (
                <tr key={c.name} className="border-b border-gray-800 last:border-0">
                  <td className="p-3 font-semibold text-white">{c.name}</td>
                  <td className="p-3 text-right">{c.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Granada and Alicante deliver the lowest costs with full city
          amenities. Valencia is the sweet spot for most: a genuine big city,
          beach included, at 20-25% below Madrid prices. Barcelona and Madrid
          are premium options - worth it if big-city energy is the point of
          your retirement, avoidable if it is not.
        </p>
      </section>

      {/* Try it yourself */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-2">Try it yourself</h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            See how Spain compares to 31 other countries for your own numbers,
            or work out the exact portfolio you need.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/global-fire-map"
              className="bg-orange-600 hover:bg-orange-500 font-semibold px-6 py-3 rounded-lg"
              style={{ color: "#ffffff" }}
            >
              Try the Global FIRE Map
            </Link>
            <Link
              href="/tools/fire-number"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 font-semibold px-6 py-3 rounded-lg"
              style={{ color: "#ffffff" }}
            >
              FIRE Number Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Retire in Spain: FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">{f.q}</h3>
              <p className="text-gray-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Go deeper</h2>
        <div className="space-y-4">
          <Link href="/blog/retire-in-portugal" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">
            <h3 className="text-lg font-bold text-white mb-1">
              Retire in Portugal: The Complete FIRE Guide
            </h3>
            <p className="text-gray-400 text-sm">
              The D7 visa, real budgets by region, and the post-NHR tax picture.
            </p>
          </Link>
          <Link href="/blog/retire-in-thailand" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">
            <h3 className="text-lg font-bold text-white mb-1">
              Retire in Thailand: The Complete FIRE Guide
            </h3>
            <p className="text-gray-400 text-sm">
              Visa routes by age, real budgets, and the new remittance tax rules.
            </p>
          </Link>
          <Link href="/blog/retire-in-france" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">
              <h3 className="text-lg font-bold text-white mb-1">
                Retire in France: The Complete FIRE Guide
              </h3>
              <p className="text-gray-400 text-sm">
                The visitor visa, the US-France tax treaty advantage, and budgets city by city.
              </p>
            </Link>
            <Link href="/blog/what-is-a-fire-number" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">
            <h3 className="text-lg font-bold text-white mb-1">
              What Is a FIRE Number?
            </h3>
            <p className="text-gray-400 text-sm">
              How to calculate the portfolio size you need to retire early.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
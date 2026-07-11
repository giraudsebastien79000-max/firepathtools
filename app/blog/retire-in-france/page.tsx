import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Retire in France: The Complete FIRE Guide (2026)",
  description:
    "How to retire in France in 2026: long-stay visa income requirement (EUR 1,478/month since June 2026), the US tax treaty advantage for American retirees, and real budgets city by city.",
}

const faqs = [
  {
    q: "How much money do you need to retire in France?",
    a: "For the long-stay visitor visa, consulates benchmark your income against the French minimum wage - EUR 1,478/month net since June 1, 2026 - per person, with couples typically expected to show about 1.5x combined. For a comfortable lifestyle, budget EUR 1,800-2,500/month outside Paris. At a 4% withdrawal rate, that means a portfolio of roughly USD 650,000-700,000.",
  },
  {
    q: "Did the France visa income requirement change in 2026?",
    a: "Yes, twice. The French minimum wage (SMIC) was revalued on January 1 and again on June 1, 2026, when an inflation trigger pushed it up 2.41%. The current benchmark is EUR 1,477.93 net/month - many guides still quote the January figure of EUR 1,443. Consulates assess files against the figure in effect when you apply.",
  },
  {
    q: "Do American retirees pay French tax on Social Security, 401(k) or IRA withdrawals?",
    a: "No. Under the 1994 US-France tax treaty, US Social Security, 401(k) and IRA distributions are taxable only in the United States. France requires you to declare them, but grants a credit equal to its own tax, so the French bill on those streams is zero. Watch two details: the declared amounts can raise the rate applied to any French-source income you have, and French social charges on investment income sit largely outside the treaty.",
  },
  {
    q: "Can I work remotely on the French visitor visa?",
    a: "It is a grey area. The visa requires you to sign a statement that you will not carry out professional activity in France, and remote work for a foreign employer is not explicitly authorized. Consulates routinely see it in applications, but treatment varies. If your income is active rather than passive, get current advice before relying on this route.",
  },
  {
    q: "Is France cheaper than Spain for retirees?",
    a: "Living costs are comparable outside the capitals - EUR 1,800-2,500/month in France versus EUR 1,600-2,800 in Spain. The visa bar is much lower in France (EUR 1,478/month versus EUR 2,400 for Spain's NLV). For Americans the bigger gap is tax: Spain taxes worldwide income at 19-47% and does not recognize Roth IRAs, while France leaves US retirement income to the US.",
  },
  {
    q: "How does French healthcare work for foreign retirees?",
    a: "Private health insurance covering France is mandatory for the visa and your first year. After three months of legal residence you can register for PUMa, the state system, which covers most costs for a modest income-based contribution. Most residents add a private top-up (mutuelle) of roughly EUR 50-150/month. Quality is among the best in the world, including outside big cities.",
  },
]

const cities = [
  { name: "Pau", budget: "EUR 1,600 - 1,800" },
  { name: "Montpellier", budget: "EUR 1,800 - 2,000" },
  { name: "Toulouse", budget: "EUR 1,800 - 2,100" },
  { name: "Bordeaux", budget: "EUR 2,000 - 2,300" },
  { name: "Lyon", budget: "EUR 2,000 - 2,300" },
  { name: "Nice", budget: "EUR 2,200 - 2,500" },
  { name: "Paris", budget: "EUR 2,700 - 3,200" },
]

const visaRows = [
  { item: "Income benchmark (single)", value: "EUR 1,478/month net (French minimum wage, June 2026)" },
  { item: "Couples", value: "Roughly 1.5x combined - consular discretion applies" },
  { item: "Income accepted", value: "Pensions, Social Security, IRA/401(k) distributions, dividends, rental income - no French employment" },
  { item: "Initial permit", value: "1 year (VLS-TS), renewable annually at the prefecture" },
  { item: "Health insurance", value: "Private policy covering France, mandatory the first year" },
  { item: "Tax residency trigger", value: "183+ days/year - worldwide income declared, the treaty decides what France taxes" },
  { item: "Permanent residency / citizenship", value: "10-year card after 5 years / naturalization possible after 5 years (French language test)" },
]

export default function RetireInFrancePage() {
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
          Retire in France: The Complete FIRE Guide
        </h1>
        <p className="text-gray-400 text-sm mb-8">Updated July 2026</p>

        {/* Quick answer */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">
            Quick answer
          </p>
          <p className="text-gray-200 leading-relaxed">
            To retire in France in 2026, you need stable passive income of at least EUR
            1,478/month for the long-stay visitor visa - a benchmark that rose on June 1,
            2026, though many guides still quote the old figure. Budget EUR
            1,800-2,500/month for a comfortable single life outside Paris. For Americans,
            US retirement income is taxed only in the US.
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">
          France rarely tops retire-abroad lists, and that is a math error. The
          headline reputation - high taxes, Paris prices - hides a visa bar that is
          nearly 40% below Spain's, world-class healthcare in every mid-size city,
          high-speed rail across the country, and a 1994 tax treaty that quietly
          makes France one of the most tax-friendly destinations in Western Europe
          for American retirees.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This guide covers the visa math, the treaty clause most people miss, and
          what life actually costs city by city.
        </p>
      </section>

      {/* Visa table */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Long-Stay Visitor Visa at a glance (2026)
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
          The visitor visa: the retirement route to France
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          France has no visa labeled retirement. The route retirees use is the
          long-stay visitor visa (VLS-TS visiteur), a one-year permit for non-EU
          citizens who can support themselves without working in France. The law
          asks for resources not below the French minimum wage, and consulates
          apply that benchmark to your documented monthly income: EUR 1,477.93 net
          since June 1, 2026. Accepted sources include pensions, Social Security,
          IRA and 401(k) distributions, dividends and rental income. What is not
          accepted: any plan to take French employment.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Timing detail worth knowing: the minimum wage was revalued twice in 2026
          - on January 1 and again on June 1, when an inflation trigger added
          2.41% mid-year. A surprising number of guides, including law firm
          pages, still quote the January figure of EUR 1,443. Consulates use the
          figure in effect on the day you file, and borderline dossiers get
          rejected, so build a margin: files showing 1.5x the benchmark are
          noticeably stronger, and 2x effectively removes income as a concern.
        </p>
        <p className="text-gray-300 leading-relaxed">
          After the first year, you renew annually at your local prefecture as a
          carte de sejour visiteur. Five years of continuous residence opens the
          10-year resident card; naturalization is possible from the same
          five-year mark if you pass a French language test. If your income comes
          from remote work rather than passive sources, note that the visitor visa
          requires a signed statement that you will not work in France - a grey
          area that consulates treat unevenly.
        </p>
      </section>

      {/* Section 2 */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          The tax clause that changes everything for Americans
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Here is the part almost nobody expects. France, the country with a
          reputation for taxing everything, is arguably the best tax deal in
          Western Europe for a US retiree - because of Article 18 of the 1994
          US-France treaty. US Social Security, 401(k) and IRA distributions are
          taxable only in the United States. France makes you declare them, then
          grants a credit equal to its own tax, so the French bill on those
          streams is zero. The treaty even recognizes Roth IRAs - a sharp
          contrast with Spain, which taxes Roth withdrawals as ordinary income.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Three caveats keep this honest. First, declared US income raises the
          effective rate France applies to any French-source income you have -
          rent from a French flat, for example. Second, French social charges of
          up to 17.2% on investment income sit largely outside the treaty and can
          apply to non-US-source gains. Third, US obligations never stop:
          citizenship-based taxation means filing every year, plus FBAR for
          foreign accounts over USD 10,000, while France requires its own
          declaration of foreign accounts.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For non-Americans the picture is standard: 183+ days a year makes you a
          French tax resident, taxed on worldwide income at progressive rates of
          0-45%, with foreign pensions treated as ordinary income under whichever
          treaty applies. France is a reasonable but unremarkable deal for a
          British or Canadian retiree. For an American drawing Social Security and
          a 401(k), it is close to unbeatable - and worth an hour with a
          cross-border tax advisor to structure properly.
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
          Pau and the southwest deliver the lowest costs with real city amenities
          and the Pyrenees next door. Montpellier and Toulouse are the sweet spot
          for most: genuine big-city life, sun, and budgets 25-30% below Paris.
          Bordeaux and Lyon are premium regional capitals - superb food and TGV
          links, at a price. Nice buys the Mediterranean at a discount to
          equivalent Spanish or Italian coast towns. Paris is the splurge option:
          worth it if the capital is the point of your retirement, avoidable if
          it is not.
        </p>
      </section>

      {/* Try it yourself */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-2">Try it yourself</h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            See how France compares to 31 other countries for your own numbers,
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
          Retire in France: FAQ
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
          <Link href="/blog/retire-in-spain" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">
            <h3 className="text-lg font-bold text-white mb-1">
              Retire in Spain: The Complete FIRE Guide
            </h3>
            <p className="text-gray-400 text-sm">
              The non-lucrative visa, the frozen 2026 threshold, and real budgets city by city.
            </p>
          </Link>
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
        </div>
      </section>
    </main>
  )
}
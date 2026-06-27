import type { Metadata } from "next"
import FireCanadaClient from "./client"

export const metadata: Metadata = {
  title: "FIRE Calculator Canada - Financial Independence in CAD | FirePathTools",
  description: "Calculate your FIRE number in Canadian dollars. Tailored for Canadians with RRSP, TFSA, and CPP context. Find out when you can retire early.",
  alternates: { canonical: "https://www.firepathtools.com/fire-canada-calculator" },
}

export default function FireCanadaPage() {
  return <FireCanadaClient />
}
            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-red-600 font-medium uppercase tracking-wide mb-1">Your FIRE Number</p>
                  <p className="text-4xl font-bold text-red-700">{fmt(result.fireNumber)}</p>
                  <p className="text-sm text-gray-500 mt-1">Based on 4% Safe Withdrawal Rate</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Gap to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "You're there!" : fmt(result.gap)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Now!" : result.yearsToFire === 999 ? "Add contributions" : result.yearsToFire + "y " + result.monthsExtra + "m"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FIRE in Canada: What You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">RRSP vs TFSA</h3>
              <p className="text-sm text-gray-600">Max out your TFSA first for flexibility — withdrawals are tax-free and do not affect OAS or GIS. RRSP is powerful for high earners deferring income, but plan for tax on withdrawal.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">CPP and OAS</h3>
              <p className="text-sm text-gray-600">Early retirees often stop CPP contributions early. Factor in a reduced CPP benefit at 65. OAS starts at 65 — do not count on it before then. These can reduce your FIRE number significantly in later decades.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">The 4% Rule in Canada</h3>
              <p className="text-sm text-gray-600">The 4% rule was tested on US data. For Canadian portfolios with XEQT or VGRO, most planners still use 3.5-4%. We use 4% here as a baseline — consider 3.5% for extra safety.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare Advantage</h3>
              <p className="text-sm text-gray-600">Provincial healthcare means you do not need to budget for US-style health insurance in retirement. A major cost removed from your FIRE number calculation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What is the FIRE number in Canada?</h3>
              <p className="text-gray-600 text-sm">Your FIRE number is Annual Expenses divided by 0.04. If you spend CA$50,000/year, your FIRE number is CA$1,250,000.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Should I include CPP in my FIRE calculation?</h3>
              <p className="text-gray-600 text-sm">If you retire early, CPP will not be available for years. Calculate FIRE without CPP, treat it as a bonus that reduces your withdrawal rate in your 60s.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Which accounts count toward my FIRE portfolio?</h3>
              <p className="text-gray-600 text-sm">All of them — RRSP, TFSA, FHSA, and non-registered accounts. TFSA withdrawals are tax-free; RRSP withdrawals are taxed as income.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What return rate should I use?</h3>
              <p className="text-gray-600 text-sm">Most Canadian FIRE planners use 5-7% nominal. ETFs like XEQT, VGRO, or VEQT are common choices. We default to 7% — adjust down for conservative projections.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">More FIRE Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/tools/fire-number" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">FIRE Number</Link>
            <Link href="/tools/coast-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Coast FIRE</Link>
            <Link href="/tools/safe-withdrawal-rate" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Safe Withdrawal Rate</Link>
            <Link href="/tools/savings-rate" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Savings Rate</Link>
            <Link href="/tools/time-to-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">Time to FIRE</Link>
            <Link href="/fire-uk-calculator" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white transition-colors text-center">FIRE UK</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
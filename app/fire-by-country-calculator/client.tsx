"use client"

import { useState } from "react"
import Link from "next/link"

const countries = [
  { name: "Portugal", flag: "🇵🇹", currency: "EUR", symbol: "€", monthlyCost: 1800, swr: 3.5, highlight: "NHR tax regime, warm climate, EU healthcare", color: "green" },
  { name: "Spain", flag: "🇪🇸", currency: "EUR", symbol: "€", monthlyCost: 2000, swr: 3.5, highlight: "Beckham Law for expats, great weather, high quality of life", color: "red" },
  { name: "Thailand", flag: "🇹🇭", currency: "THB", symbol: "฿", monthlyCost: 43000, swr: 4.0, highlight: "Very low cost of living, excellent healthcare, warm year-round", color: "blue" },
  { name: "France", flag: "🇫🇷", currency: "EUR", symbol: "€", monthlyCost: 2500, swr: 3.5, highlight: "World-class healthcare, culture, but higher taxes", color: "indigo" },
  { name: "Mexico", flag: "🇲🇽", currency: "MXN", symbol: "MX" + String.fromCharCode(36), monthlyCost: 26000, swr: 4.0, highlight: "Low cost, close to US, growing expat communities", color: "orange" },
  { name: "Italy", flag: "🇮🇹", currency: "EUR", symbol: "€", monthlyCost: 2200, swr: 3.5, highlight: "7% flat tax for foreign retirees in southern regions", color: "green" },
  { name: "Colombia", flag: "🇨🇴", currency: "COP", symbol: "COP", monthlyCost: 4400000, swr: 4.0, highlight: "Ultra low cost, eternal spring climate in Medellin", color: "yellow" },
  { name: "Japan", flag: "🇯🇵", currency: "JPY", symbol: "¥", monthlyCost: 300000, swr: 3.5, highlight: "Safe, unique culture, excellent public transport", color: "red" },
]

const usdRates: Record<string, number> = {
  EUR: 1.08, THB: 0.028, MXN: 0.058, COP: 0.00025, JPY: 0.0067,
}

export default function FireByCountryClient() {
  const [selected, setSelected] = useState(countries[0])
  const [customExpenses, setCustomExpenses] = useState("")
  const [currentSavings, setCurrentSavings] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [result, setResult] = useState<{ fireNumber: number; fireNumberUSD: number; gap: number; yearsToFire: number; monthsExtra: number } | null>(null)

  function calculate() {
    const expenses = parseFloat(customExpenses) || selected.monthlyCost * 12
    const savings = parseFloat(currentSavings) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const fireNumber = expenses / (selected.swr / 100)
    const usdRate = usdRates[selected.currency] || 1
    const fireNumberUSD = selected.currency === "USD" ? fireNumber : fireNumber * usdRate
    const gap = fireNumberUSD - savings
    const rate = 0.07 / 12
    let yearsToFire = 0
    let monthsExtra = 0
    if (gap > 0 && monthly > 0) {
      const months = Math.log(1 + (gap * rate) / monthly) / Math.log(1 + rate)
      yearsToFire = Math.floor(months / 12)
      monthsExtra = Math.round(months % 12)
    }
    setResult({ fireNumber, fireNumberUSD, gap: Math.max(0, gap), yearsToFire, monthsExtra })
  }

  function fmt(n: number, symbol: string) {
    return symbol + Math.round(n).toLocaleString("en-US")
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FIRE by Country Calculator</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">How much do you need to retire early in Portugal, Thailand, Spain, and more? Compare FIRE numbers across countries.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4" style={{color:"#111827"}}>Choose Your Country</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {countries.map((c) => (
              <button key={c.name} onClick={() => { setSelected(c); setResult(null) }}
                className={"rounded-xl p-3 text-center border-2 transition-all " + (selected.name === c.name ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white hover:border-orange-300")}>
                <div className="text-xs font-bold text-orange-500 mb-1">{c.name.substring(0,2).toUpperCase()}</div>
                <div className="text-sm font-semibold" style={{color:"#111827"}}>{c.name}</div>
                <div className="text-xs" style={{color:"#6B7280"}}>{c.symbol}{c.monthlyCost.toLocaleString()}/mo</div>
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-base font-bold text-white bg-orange-500 px-3 py-2 rounded-lg">{selected.name.substring(0,2).toUpperCase()}</span>
              <div>
                <h2 className="text-xl font-bold" style={{color:"#111827"}}>Retire in {selected.name}</h2>
                <p className="text-sm" style={{color:"#6B7280"}}>{selected.highlight}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Annual Expenses in {selected.name} ({selected.symbol})</label>
                <p className="text-xs mb-2" style={{color:"#374151"}}>Default: {selected.symbol}{(selected.monthlyCost * 12).toLocaleString()}/yr — adjust to your lifestyle</p>
                <input type="number" value={customExpenses} onChange={(e) => setCustomExpenses(e.target.value)}
                  placeholder={"e.g. " + (selected.monthlyCost * 12)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Current Portfolio (USD)</label>
                <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)}
                  placeholder="e.g. 150000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{color:"#111827"}}>Monthly Savings (USD)</label>
                <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)}
                  placeholder="e.g. 3000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Calculate My FIRE Number for {selected.name}
              </button>
            </div>

            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-orange-500 rounded-xl p-6 text-center">
                  <p className="text-sm text-orange-100 font-medium uppercase tracking-wide mb-1">FIRE Number in {selected.name}</p>
                  <p className="text-4xl font-bold text-white">{fmt(result.fireNumber, selected.symbol)}</p>
                  <p className="text-sm text-orange-100 mt-1">≈ {fmt(result.fireNumberUSD, "$")} USD · {selected.swr}% SWR</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4 text-center border border-slate-600">
                    <p className="text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Gap to FIRE</p>
                    <p className="text-2xl font-bold text-white">{result.gap <= 0 ? "You are there!" : fmt(result.gap, "$")}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 text-center border border-slate-600">
                    <p className="text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Time to FIRE</p>
                    <p className="text-2xl font-bold text-white">{result.gap <= 0 ? "Now!" : result.yearsToFire + "y " + result.monthsExtra + "m"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{color:"#111827"}}>Country Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 font-semibold" style={{color:"#111827"}}>Country</th>
                  <th className="text-right py-3 font-semibold" style={{color:"#111827"}}>Monthly Cost</th>
                  <th className="text-right py-3 font-semibold" style={{color:"#111827"}}>SWR</th>
                  <th className="text-right py-3 font-semibold" style={{color:"#111827"}}>FIRE Number (USD)</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => {
                  const annualCost = c.monthlyCost * 12
                  const fireLocal = annualCost / (c.swr / 100)
                  const usdRate = usdRates[c.currency] || 1
                  const fireUSD = c.currency === "EUR" ? fireLocal * usdRate : c.currency === "USD" ? fireLocal : fireLocal * usdRate
                  return (
                    <tr key={c.name} className={"border-b border-gray-100 " + (selected.name === c.name ? "bg-orange-50" : "")}>
                      <td className="py-3 font-medium" style={{color:"#111827"}}>{c.flag} {c.name}</td>
                      <td className="py-3 text-right" style={{color:"#374151"}}>{c.symbol}{c.monthlyCost.toLocaleString()}</td>
                      <td className="py-3 text-right" style={{color:"#374151"}}>{c.swr}%</td>
                      <td className="py-3 text-right font-semibold" style={{color:"#111827"}}>{fmt(fireUSD, "$")}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why is the FIRE number different by country?","acceptedAnswer":{"@type":"Answer","text":"Your FIRE number depends on your annual spending. Living in Thailand at 43,000 THB per month requires a much smaller portfolio than living in France at 2,500 EUR per month. The safe withdrawal rate also varies - we use 3.5% for higher-cost countries and 4% for lower-cost ones."}},{"@type":"Question","name":"Should I keep my investments in USD?","acceptedAnswer":{"@type":"Answer","text":"Most FIRE expats keep their portfolio in USD or EUR and convert as needed. This protects against local currency devaluation. The FIRE number shown in local currency is for reference - your actual portfolio will likely remain in your home currency."}},{"@type":"Question","name":"What about healthcare abroad?","acceptedAnswer":{"@type":"Answer","text":"EU countries offer public healthcare access for residents. In Thailand, private insurance runs 100-200 USD per month. Always factor in healthcare costs when calculating your budget abroad."}}]}`}} />
          <h2 className="text-2xl font-bold mb-8" style={{color:"#111827"}}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2" style={{color:"#111827"}}>Why is the FIRE number different by country?</h3>
              <p className="text-sm" style={{color:"#374151"}}>Your FIRE number depends on your annual spending. Living in Thailand at 43,000 THB per month requires a much smaller portfolio than living in France at 2,500 EUR per month. The safe withdrawal rate also varies — we use 3.5% for higher-cost countries and 4% for lower-cost ones.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{color:"#111827"}}>Should I keep my investments in USD?</h3>
              <p className="text-sm" style={{color:"#374151"}}>Most FIRE expats keep their portfolio in USD or EUR and convert as needed. This protects against local currency devaluation. The FIRE number shown in local currency is for reference — your actual portfolio will likely remain in your home currency.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{color:"#111827"}}>What about healthcare abroad?</h3>
              <p className="text-sm" style={{color:"#374151"}}>EU countries offer public healthcare access for residents. In Thailand, private insurance runs 100-200 USD per month. Always factor in healthcare costs when calculating your budget abroad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{color:"#111827"}}>More FIRE Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/tools/fire-number" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">FIRE Number</Link>
            <Link href="/fire-canada-calculator" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">FIRE Canada</Link>
            <Link href="/fire-uk-calculator" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">FIRE UK</Link>
            <Link href="/tools/safe-withdrawal-rate" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">Safe Withdrawal Rate</Link>
            <Link href="/tools/coast-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">Coast FIRE</Link>
            <Link href="/tools/time-to-fire" className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition-colors text-center">Time to FIRE</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

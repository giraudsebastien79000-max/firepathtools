"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Country = {
  code: string
  name: string
  region: string
  cost: number
  href?: string
}

// Monthly comfortable budget, single person, rent included, in USD.
// code = CSS class of the country in public/world.svg (ISO alpha-2 lowercase, UK = gb).
const countries: Country[] = [
  { code: "ca", name: "Canada", region: "Americas", cost: 2800 },
  { code: "us", name: "United States", region: "Americas", cost: 3500 },
  { code: "mx", name: "Mexico", region: "Americas", cost: 1500 },
  { code: "cr", name: "Costa Rica", region: "Americas", cost: 1800 },
  { code: "co", name: "Colombia", region: "Americas", cost: 1200 },
  { code: "br", name: "Brazil", region: "Americas", cost: 1400 },
  { code: "ar", name: "Argentina", region: "Americas", cost: 1300 },
  { code: "gb", name: "United Kingdom", region: "Europe", cost: 2800 },
  { code: "nl", name: "Netherlands", region: "Europe", cost: 2800 },
  { code: "de", name: "Germany", region: "Europe", cost: 2600 },
  { code: "pl", name: "Poland", region: "Europe", cost: 1500 },
  { code: "fr", name: "France", region: "Europe", cost: 2500 },
  { code: "hr", name: "Croatia", region: "Europe", cost: 1700 },
  { code: "ge", name: "Georgia", region: "Europe", cost: 1100 },
  { code: "pt", name: "Portugal", region: "Europe", cost: 1800, href: "/blog/retire-in-portugal" },
  { code: "es", name: "Spain", region: "Europe", cost: 2000 },
  { code: "it", name: "Italy", region: "Europe", cost: 2200 },
  { code: "gr", name: "Greece", region: "Europe", cost: 1700 },
  { code: "tr", name: "Turkey", region: "Europe", cost: 1300 },
  { code: "ma", name: "Morocco", region: "Africa & ME", cost: 1200 },
  { code: "ae", name: "UAE (Dubai)", region: "Africa & ME", cost: 2800 },
  { code: "za", name: "South Africa", region: "Africa & ME", cost: 1400 },
  { code: "in", name: "India", region: "Asia", cost: 900 },
  { code: "th", name: "Thailand", region: "Asia", cost: 1500, href: "/blog/retire-in-thailand" },
  { code: "vn", name: "Vietnam", region: "Asia", cost: 1100 },
  { code: "my", name: "Malaysia", region: "Asia", cost: 1300 },
  { code: "ph", name: "Philippines", region: "Asia", cost: 1200 },
  { code: "id", name: "Indonesia (Bali)", region: "Asia", cost: 1400 },
  { code: "kr", name: "South Korea", region: "Asia", cost: 1900 },
  { code: "jp", name: "Japan", region: "Asia", cost: 2000 },
  { code: "au", name: "Australia", region: "Oceania", cost: 2900 },
  { code: "nz", name: "New Zealand", region: "Oceania", cost: 2700 },
]

const codesSet = new Set(countries.map((c) => c.code))

const SWR = 0.04
const ANNUAL_RETURN = 0.07

function fireNumberFor(cost: number) {
  return (cost * 12) / SWR
}

function yearsToFI(fire: number, portfolio: number, monthly: number) {
  const gap = fire - portfolio
  if (gap <= 0) return 0
  if (monthly <= 0) return Infinity
  const r = ANNUAL_RETURN / 12
  const months = Math.log(1 + (gap * r) / monthly) / Math.log(1 + r)
  return months / 12
}

function fmtUSD(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US")
}

function fmtYears(y: number) {
  if (y === 0) return "Now"
  if (!isFinite(y)) return "-"
  if (y < 1) return Math.round(y * 12) + "mo"
  return y.toFixed(1) + "y"
}

function flagOf(code: string) {
  const cc = code.toUpperCase()
  return String.fromCodePoint(
    0x1f1e6 + cc.charCodeAt(0) - 65,
    0x1f1e6 + cc.charCodeAt(1) - 65
  )
}

export default function GlobalFireMapClient() {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)
  const [portfolio, setPortfolio] = useState("")
  const [savings, setSavings] = useState("")
  const [home, setHome] = useState("")
  const [hasResult, setHasResult] = useState(false)
  const [selectedCode, setSelectedCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [sortKey, setSortKey] = useState<"name" | "cost" | "years">("cost")
  const [sortAsc, setSortAsc] = useState(true)

  useEffect(() => {
    fetch("/world.svg")
      .then((r) => r.text())
      .then((t) => setSvgMarkup(t.substring(t.indexOf("<svg"))))
      .catch(() => setSvgMarkup(null))
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const p = params.get("p")
    const s = params.get("s")
    const h = params.get("h")
    if (p !== null) {
      setPortfolio(p)
      setSavings(s || "")
      if (h && codesSet.has(h)) setHome(h)
      setHasResult(true)
    }
  }, [])

  const pNum = parseFloat(portfolio) || 0
  const sNum = parseFloat(savings) || 0

  function statusOf(c: Country): "now" | "soon" | "later" {
    const fire = fireNumberFor(c.cost)
    if (pNum >= fire) return "now"
    if (yearsToFI(fire, pNum, sNum) <= 5) return "soon"
    return "later"
  }

  function reveal() {
    setHasResult(true)
    const params = new URLSearchParams()
    if (portfolio) params.set("p", portfolio)
    if (savings) params.set("s", savings)
    if (home) params.set("h", home)
    const qs = params.toString()
    window.history.replaceState(null, "", qs ? "?" + qs : window.location.pathname)
  }

  function share() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  function onMapClick(e: React.MouseEvent) {
    const target = (e.target as Element).closest(".land")
    if (!target) return
    const classes = (target.getAttribute("class") || "").split(/\s+/)
    const code = classes.find((k) => codesSet.has(k))
    if (code) setSelectedCode(code)
  }

  const greenCountries = hasResult
    ? countries.filter((c) => statusOf(c) === "now").sort((a, b) => a.cost - b.cost)
    : []
  const fiNowCount = greenCountries.length
  const selected = countries.find((c) => c.code === selectedCode) || null
  const homeCountry = countries.find((c) => c.code === home) || null

  // Best move: cheapest country where user is already FI (excluding home);
  // fallback: cheapest country overall.
  let bestMove: Country | null = null
  if (hasResult && homeCountry) {
    const pool = greenCountries.filter((c) => c.code !== homeCountry.code)
    if (pool.length > 0) {
      bestMove = pool[0]
    } else {
      const cheapest = [...countries]
        .filter((c) => c.code !== homeCountry.code)
        .sort((a, b) => a.cost - b.cost)[0]
      bestMove = cheapest
    }
  }

  const interactiveSel = countries.map((c) => "#fireMap svg .land." + c.code).join(",")
  let css =
    "#fireMap svg{width:100%;height:auto;display:block}" +
    "#fireMap svg .ocean{fill:transparent}" +
    "#fireMap svg .land{fill:#202c42;stroke:#0b1220;stroke-width:0.5}#fireMap svg .lake{fill:#0d1526}#fireMap svg [class*='circle']{display:none}" +
    interactiveSel + "{cursor:pointer}" +
    interactiveSel.split(",").map((s) => s + ":hover").join(",") + "{opacity:0.82}"
  for (const c of countries) {
    let fill = "#475569"
    if (hasResult) {
      const st = statusOf(c)
      fill = st === "now" ? "#16a34a" : st === "soon" ? "#ea580c" : "#334155"
    }
    css += "#fireMap svg .land." + c.code + "{fill:" + fill + "}"
  }
  if (selectedCode) {
    css += "#fireMap svg .land." + selectedCode + "{stroke:#f97316;stroke-width:2.5}"
  }

  const sorted = [...countries].sort((a, b) => {
    let cmp = 0
    if (sortKey === "name") cmp = a.name.localeCompare(b.name)
    if (sortKey === "cost") cmp = a.cost - b.cost
    if (sortKey === "years") {
      const ya = yearsToFI(fireNumberFor(a.cost), pNum, sNum)
      const yb = yearsToFI(fireNumberFor(b.cost), pNum, sNum)
      cmp = ya - yb
    }
    return sortAsc ? cmp : -cmp
  })

  function toggleSort(key: "name" | "cost" | "years") {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(true)
    }
  }

  const cheapest5 = [...countries].sort((a, b) => a.cost - b.cost).slice(0, 5)
  const expensive5 = [...countries].sort((a, b) => b.cost - a.cost).slice(0, 5)

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Inputs */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <div>
              <label className="block text-sm font-bold text-white mb-1">Current Portfolio (USD)</label>
              <input
                type="number"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="e.g. 250000"
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-1">Monthly Savings (USD)</label>
              <input
                type="number"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
                placeholder="e.g. 1500"
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-1">Where do you live now? (optional)</label>
              <select
                value={home}
                onChange={(e) => setHome(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select a country</option>
                {[...countries].sort((a, b) => a.name.localeCompare(b.name)).map((c) => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reveal}
              className="flex-1 bg-orange-500 hover:bg-orange-400 font-bold py-3 px-6 rounded-lg transition-colors"
              style={{ color: "#ffffff" }}
            >
              Reveal My FIRE Map
            </button>
            {hasResult && (
              <button
                onClick={share}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-700"
              >
                {copied ? "Link copied!" : "Share my map"}
              </button>
            )}
          </div>
          {hasResult && (
            <p className="mt-4 text-center text-lg text-gray-200">
              You are already financially independent in{" "}
              <span className="text-orange-400 font-extrabold">{fiNowCount}</span> of{" "}
              {countries.length} countries.
            </p>
          )}
        </div>
      </section>

      {/* Legend */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <div className="flex flex-wrap gap-5 text-sm text-gray-300">
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded" style={{ background: "#16a34a" }}></span>
            FI now
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded" style={{ background: "#ea580c" }}></span>
            FI within 5 years
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded" style={{ background: "#334155" }}></span>
            More than 5 years
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded" style={{ background: "#475569" }}></span>
            Tracked country (run your numbers)
          </span>
        </div>
      </section>

      {/* World map */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-2 md:p-4">
          {svgMarkup ? (
            <div id="fireMap" onClick={onMapClick} dangerouslySetInnerHTML={{ __html: svgMarkup }} />
          ) : (
            <div className="h-64 flex items-center justify-center text-gray-500">
              Loading world map...
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Tap a highlighted country for details. {countries.length} countries are tracked; the
          rest of the world stays dark for now.
        </p>
      </section>

      {/* You can stop working today */}
      {hasResult && fiNowCount > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-6">
          <div className="bg-gray-900 border-l-4 border-green-600 rounded-r-2xl p-8">
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Freedom, today
            </p>
            <p className="text-white text-2xl font-extrabold mb-4">
              You can stop working today in:
            </p>
            <div className="flex flex-wrap gap-3">
              {greenCountries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSelectedCode(c.code)}
                  className="bg-gray-950 border border-gray-800 hover:border-green-600 rounded-lg px-4 py-2 text-gray-200 transition-colors"
                >
                  <span className="mr-2">{flagOf(c.code)}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Your best move */}
      {hasResult && homeCountry && bestMove && (
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Your best move
            </p>
            {statusOf(homeCountry) === "now" ? (
              <p className="text-gray-200 text-lg leading-relaxed">
                You are already financially independent at home in {homeCountry.name}
                {" "}{flagOf(homeCountry.code)}. Moving is a choice, not a requirement - but{" "}
                {bestMove.name} would still cut your FIRE number by{" "}
                <span className="text-white font-bold">
                  {fmtUSD(fireNumberFor(homeCountry.cost) - fireNumberFor(bestMove.cost))}
                </span>.
              </p>
            ) : (
              <div>
                <p className="text-white text-2xl font-extrabold mb-3">
                  Moving from {homeCountry.name} to {bestMove.name} {flagOf(bestMove.code)}
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  would reduce your FIRE number by{" "}
                  <span className="text-orange-400 font-extrabold">
                    {fmtUSD(fireNumberFor(homeCountry.cost) - fireNumberFor(bestMove.cost))}
                  </span>
                  {isFinite(yearsToFI(fireNumberFor(homeCountry.cost), pNum, sNum)) &&
                    yearsToFI(fireNumberFor(homeCountry.cost), pNum, sNum) >
                      yearsToFI(fireNumberFor(bestMove.cost), pNum, sNum) && (
                    <>
                      {" "}and make you financially independent{" "}
                      <span className="text-orange-400 font-extrabold">
                        {(
                          yearsToFI(fireNumberFor(homeCountry.cost), pNum, sNum) -
                          yearsToFI(fireNumberFor(bestMove.cost), pNum, sNum)
                        ).toFixed(1)}{" "}
                        years sooner
                      </span>
                    </>
                  )}
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Detail panel */}
      {selected && (
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <div className="bg-gray-900 border-l-4 border-orange-500 rounded-r-2xl p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-1">
                  {selected.region}
                </p>
                <p className="text-white text-3xl font-extrabold">
                  {flagOf(selected.code)} {selected.name}
                </p>
              </div>
              <button
                onClick={() => setSelectedCode(null)}
                className="text-gray-500 hover:text-white text-sm"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Monthly budget</p>
                <p className="text-xl font-bold text-white">{fmtUSD(selected.cost)}</p>
              </div>
              <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">FIRE number (4% SWR)</p>
                <p className="text-xl font-bold text-white">{fmtUSD(fireNumberFor(selected.cost))}</p>
              </div>
              <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Your time to FI</p>
                <p className="text-xl font-bold text-white">
                  {hasResult ? fmtYears(yearsToFI(fireNumberFor(selected.cost), pNum, sNum)) : "-"}
                </p>
              </div>
            </div>
            {hasResult && pNum < fireNumberFor(selected.cost) && (
              <p className="text-gray-300 mb-4">
                Gap to FIRE in {selected.name}:{" "}
                <span className="text-white font-semibold">
                  {fmtUSD(fireNumberFor(selected.cost) - pNum)}
                </span>
              </p>
            )}
            {selected.href && (
              <Link
                href={selected.href}
                className="inline-block bg-orange-500 hover:bg-orange-400 font-bold px-6 py-3 rounded-lg transition-colors"
                style={{ color: "#ffffff" }}
              >
                Read the full Retire in {selected.name.split(" ")[0]} guide
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Top 5 lists (static, SEO) */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Top 5 cheapest FIRE countries</h2>
            <ol className="space-y-2 text-gray-300">
              {cheapest5.map((c, i) => (
                <li key={c.code} className="flex items-baseline justify-between gap-2">
                  <span>
                    <span className="text-gray-500 mr-2">{i + 1}.</span>
                    {flagOf(c.code)} {c.name}
                  </span>
                  <span className="text-white font-semibold whitespace-nowrap">
                    {fmtUSD(fireNumberFor(c.cost))}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Most expensive</h2>
            <ol className="space-y-2 text-gray-300">
              {expensive5.map((c, i) => (
                <li key={c.code} className="flex items-baseline justify-between gap-2">
                  <span>
                    <span className="text-gray-500 mr-2">{i + 1}.</span>
                    {flagOf(c.code)} {c.name}
                  </span>
                  <span className="text-white font-semibold whitespace-nowrap">
                    {fmtUSD(fireNumberFor(c.cost))}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-4">All {countries.length} countries, sortable</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-3">
                  <button onClick={() => toggleSort("name")} className="font-semibold uppercase tracking-wide text-gray-400 hover:text-white">
                    Country
                  </button>
                </th>
                <th className="p-3 text-right">
                  <button onClick={() => toggleSort("cost")} className="font-semibold uppercase tracking-wide text-gray-400 hover:text-white">
                    Monthly budget
                  </button>
                </th>
                <th className="p-3 text-right">
                  <span className="font-semibold uppercase tracking-wide text-gray-400">FIRE number</span>
                </th>
                <th className="p-3 text-right">
                  <button onClick={() => toggleSort("years")} className="font-semibold uppercase tracking-wide text-gray-400 hover:text-white">
                    Your time to FI
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {sorted.map((c) => (
                <tr
                  key={c.code}
                  onClick={() => setSelectedCode(c.code)}
                  className={"border-b border-gray-800 cursor-pointer hover:bg-gray-800 " + (selectedCode === c.code ? "bg-gray-800" : "")}
                >
                  <td className="p-3 font-medium text-white">{flagOf(c.code)} {c.name}</td>
                  <td className="p-3 text-right">{fmtUSD(c.cost)}/mo</td>
                  <td className="p-3 text-right font-semibold text-white">{fmtUSD(fireNumberFor(c.cost))}</td>
                  <td className="p-3 text-right">
                    {hasResult ? fmtYears(yearsToFI(fireNumberFor(c.cost), pNum, sNum)) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
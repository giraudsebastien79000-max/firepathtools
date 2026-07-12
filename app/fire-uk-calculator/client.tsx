"use client"
import { useState } from "react"
import Link from "next/link"

type Result = {
  fireNumber: number
  yearsToFire: number
  fireAge: number
  monthlyNeeded: number
  onTrack: boolean
  projected: number
}

export default function FireUKCalculator() {
  const [age, setAge] = useState(30)
  const [savings, setSavings] = useState(20000)
  const [monthlyContribution, setMonthlyContribution] = useState(800)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(25000)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState("")

  const SWR = 0.035

  function calculate() {
    setError("")
    if (annualExpenses <= 0 || annualReturn < 0) {
      setError("Please enter valid values.")
      return
    }
    const fireNumber = annualExpenses / SWR
    const monthlyRate = annualReturn / 100 / 12
    let portfolio = savings
    let months = 0
    while (portfolio < fireNumber && months < 1200) {
      portfolio = portfolio * (1 + monthlyRate) + monthlyContribution
      months++
    }
    const yearsToFire = Math.round(months / 12)
    const fireAge = age + yearsToFire
    let monthlyNeeded = 0
    if (portfolio < fireNumber) {
      monthlyNeeded = monthlyRate === 0
        ? fireNumber / 1200
        : (fireNumber * monthlyRate) / (Math.pow(1 + monthlyRate, 1200) - 1)
    }
    setResult({
      fireNumber,
      yearsToFire,
      fireAge,
      monthlyNeeded,
      onTrack: portfolio >= fireNumber,
      projected: portfolio,
    })
  }

  const fmt = (n: number) =>
    "£" + Math.round(n).toLocaleString("en-GB")

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">

        <div className="mb-10">
          <Link href="/tools" className="text-orange-400 text-sm hover:underline">← Back to Calculators</Link>
          <h1 className="text-4xl font-bold mt-4 mb-3">FIRE UK Calculator</h1>
          <p className="text-gray-300 text-lg">Calculate your Financial Independence number in pounds and find out how many years until you can retire early in the UK.</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/50 rounded-lg px-3 py-1.5">
            <span className="text-blue-400 text-sm">🇬🇧 Uses 3.5% Safe Withdrawal Rate — common for UK FIRE investors</span>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Current Age</label>
              <input type="number" value={age} min={18} max={70}
                onChange={e => setAge(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Current Savings (£)</label>
              <input type="number" value={savings} min={0}
                onChange={e => setSavings(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Monthly Contributions (£)</label>
              <input type="number" value={monthlyContribution} min={0}
                onChange={e => setMonthlyContribution(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Expected Annual Return (%)</label>
              <input type="number" value={annualReturn} min={0} max={20}
                onChange={e => setAnnualReturn(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Annual Expenses in Retirement (£)</label>
              <input type="number" value={annualExpenses} min={0}
                onChange={e => setAnnualExpenses(Number(e.target.value))}
                className="w-full bg-slate-800 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-orange-500 focus:outline-none" />
            </div>
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-700 rounded-xl p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button onClick={calculate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Calculate My UK FIRE Number
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-gray-900 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Your Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">FIRE Number</p>
                <p className="text-2xl font-bold text-orange-400">{fmt(result.fireNumber)}</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">Years to FIRE</p>
                <p className="text-2xl font-bold text-white">{result.yearsToFire} years</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">FIRE Age</p>
                <p className="text-2xl font-bold text-white">{result.fireAge}</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm">Withdrawal Rate</p>
                <p className="text-2xl font-bold text-blue-400">3.5%</p>
              </div>
            </div>
            <div className={`rounded-xl p-6 ${result.onTrack ? "bg-green-900/40 border border-green-700" : "bg-orange-900/40 border border-orange-700"}`}>
              {result.onTrack ? (
                <p className="text-green-400 font-semibold text-lg">You are on track to reach FIRE!</p>
              ) : (
                <p className="text-orange-400 font-semibold text-lg">Keep going — you will reach FIRE in {result.yearsToFire} years at your current savings rate.</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">FIRE in the UK: Complete Guide</h2>
          <p className="text-gray-300 leading-relaxed">The FIRE movement — Financial Independence, Retire Early — has a growing and active community in the UK. While the core principles are the same as in the US (save aggressively, invest in index funds, live off your portfolio), there are important UK-specific factors: the tax-efficient ISA wrapper, the Self-Invested Personal Pension (SIPP), the State Pension, and a withdrawal rate that many UK FIRE investors set at 3.5% rather than 4%.</p>

          <h3 className="text-xl font-semibold">Why UK FIRE Investors Use a 3.5% Withdrawal Rate</h3>
          <p className="text-gray-300 leading-relaxed">The 4% rule is based on US market data going back to 1926. UK market returns have historically been slightly lower and more volatile. A 3.5% safe withdrawal rate (SWR) is commonly used by UK FIRE practitioners to account for this, as well as the longer retirement horizons that come with retiring in your 30s, 40s, or 50s. At 3.5%, your FIRE number is approximately 28.6x your annual expenses.</p>

          <h3 className="text-xl font-semibold">How Much Do You Need to Retire Early in the UK?</h3>
          <p className="text-gray-300 leading-relaxed">At a 3.5% withdrawal rate, the formula is simple: FIRE Number = Annual Expenses × 28.6. If you spend £25,000 per year, your target is £715,000. If you spend £30,000, you need £857,000. If you spend £40,000, your target is £1,143,000. Use the calculator above to get your personalised number based on your current age, savings, and contributions.</p>

          <div className="bg-gray-900 rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold text-orange-400">UK FIRE Numbers by Annual Spending</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-300">£20,000/year</div><div className="text-white">£571,000 needed</div>
              <div className="text-gray-300">£25,000/year</div><div className="text-white">£714,000 needed</div>
              <div className="text-gray-300">£30,000/year</div><div className="text-white">£857,000 needed</div>
              <div className="text-gray-300">£40,000/year</div><div className="text-white">£1,143,000 needed</div>
              <div className="text-gray-300">£50,000/year</div><div className="text-white">£1,429,000 needed</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold">ISAs and SIPPs: The UK Tax Advantage</h3>
          <p className="text-gray-300 leading-relaxed">UK investors have access to two powerful tax-efficient wrappers that US investors do not. The Stocks and Shares ISA allows you to invest up to £20,000 per year with all growth and withdrawals completely tax-free — with no minimum access age. The Self-Invested Personal Pension (SIPP) offers tax relief on contributions (up to 45% for higher rate taxpayers) but locks funds until age 57 (rising from 55 in 2028). Most UK FIRE strategies combine both: ISA for the bridge between early retirement and pension access age, SIPP for long-term tax-free growth.</p>

          <h3 className="text-xl font-semibold">The State Pension as a FIRE Bonus</h3>
          <p className="text-gray-300 leading-relaxed">The full new State Pension is currently £11,502 per year (2024/25). For UK FIRE practitioners, this is often treated as a bonus rather than a core planning assumption — since it only kicks in at 66 (rising to 67 by 2028). If you retire at 45 and receive State Pension at 67, that is 22 years of full portfolio withdrawal followed by a significant income reduction from your drawdown needs. Many FIRE plans model a reduced withdrawal rate after State Pension age begins.</p>

          <div className="mt-12 space-y-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the FIRE movement in the UK?","acceptedAnswer":{"@type":"Answer","text":"FIRE stands for Financial Independence, Retire Early. In the UK, it typically involves saving 40-60% of your income, investing in low-cost index funds inside ISAs and SIPPs, and building a portfolio large enough to live off indefinitely. The UK has an active FIRE community on Reddit (r/FIREUK) and multiple dedicated blogs and podcasts."}},{"@type":"Question","name":"How much money do I need to retire early in the UK?","acceptedAnswer":{"@type":"Answer","text":"Using a 3.5% withdrawal rate, you need approximately 28.6x your annual expenses. For \u00A325,000/year spending, that is around \u00A3714,000. For \u00A335,000/year, around \u00A31,000,000. Use the calculator above to get your personalised number."}},{"@type":"Question","name":"Should I use a 4% or 3.5% withdrawal rate in the UK?","acceptedAnswer":{"@type":"Answer","text":"Most UK FIRE practitioners use 3.5% as a more conservative baseline, given that UK market returns have historically been slightly lower than US returns, and early retirement means a longer drawdown period. If you plan to include State Pension income later, or have other income sources, 4% may be appropriate for your situation."}},{"@type":"Question","name":"What is the best investment account for FIRE in the UK?","acceptedAnswer":{"@type":"Answer","text":"The Stocks and Shares ISA is the first choice for most UK FIRE investors - tax-free growth and withdrawals with no minimum age. Once your ISA allowance is used (\u00A320,000/year), a SIPP gives additional tax relief on contributions. Global index funds like Vanguard LifeStrategy or FTSE All-World trackers are the most commonly recommended investments."}},{"@type":"Question","name":"Does the State Pension count towards my FIRE number?","acceptedAnswer":{"@type":"Answer","text":"It can reduce how much you need. If you retire at 50 and will receive \u00A311,502/year State Pension from age 67, you only need your portfolio to cover the gap of 17 years at full spending, then a reduced amount after. Many FIRE calculators ignore State Pension for conservatism, but it is a meaningful benefit for UK early retirees."}}]}`}} />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the FIRE movement in the UK?</h4>
                <p className="text-gray-300 text-sm">FIRE stands for Financial Independence, Retire Early. In the UK, it typically involves saving 40-60% of your income, investing in low-cost index funds inside ISAs and SIPPs, and building a portfolio large enough to live off indefinitely. The UK has an active FIRE community on Reddit (r/FIREUK) and multiple dedicated blogs and podcasts.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">How much money do I need to retire early in the UK?</h4>
                <p className="text-gray-300 text-sm">Using a 3.5% withdrawal rate, you need approximately 28.6x your annual expenses. For £25,000/year spending, that is around £714,000. For £35,000/year, around £1,000,000. Use the calculator above to get your personalised number.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Should I use a 4% or 3.5% withdrawal rate in the UK?</h4>
                <p className="text-gray-300 text-sm">Most UK FIRE practitioners use 3.5% as a more conservative baseline, given that UK market returns have historically been slightly lower than US returns, and early retirement means a longer drawdown period. If you plan to include State Pension income later, or have other income sources, 4% may be appropriate for your situation.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">What is the best investment account for FIRE in the UK?</h4>
                <p className="text-gray-300 text-sm">The Stocks and Shares ISA is the first choice for most UK FIRE investors — tax-free growth and withdrawals with no minimum age. Once your ISA allowance is used (£20,000/year), a SIPP gives additional tax relief on contributions. Global index funds like Vanguard LifeStrategy or FTSE All-World trackers are the most commonly recommended investments.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Does the State Pension count towards my FIRE number?</h4>
                <p className="text-gray-300 text-sm">It can reduce how much you need. If you retire at 50 and will receive £11,502/year State Pension from age 67, you only need your portfolio to cover the gap of 17 years at full spending, then a reduced amount after. Many FIRE calculators ignore State Pension for conservatism, but it is a meaningful benefit for UK early retirees.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/tools/fire-number" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">FIRE Number Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/retire-at-40-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 40 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/retire-at-45-calculator" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Retire at 45 Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/coast-fire" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Coast FIRE Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link href="/tools/safe-withdrawal-rate" className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <span className="text-white">Safe Withdrawal Rate Calculator</span>
                <span className="text-orange-400">→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

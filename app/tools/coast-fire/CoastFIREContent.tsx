import Link from "next/link";

export default function CoastFIREContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-300 leading-relaxed">
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What Is Coast FIRE?</h2>
        <p className="mb-4">
          Coast FIRE is the point at which your invested portfolio is already large enough
          that, left completely alone, compound growth will carry it to your full FIRE number
          by traditional retirement age. You never have to contribute another dollar to
          retirement savings again.
        </p>
        <p className="mb-4">
          That does not mean you stop working. It means you stop <em>saving</em>. From that
          moment, you only need to earn enough to cover your current living expenses, because
          your future is already funded. Everything above that line is yours to spend, and
          every career decision stops being a financial decision.
        </p>
        <p>
          This is what makes Coast FIRE the most reachable milestone in the FIRE movement.
          Full financial independence can take twenty years of aggressive saving. Coast FIRE
          often arrives in your early thirties, and it changes your life immediately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">The Coast FIRE Formula</h2>
        <p className="mb-4">
          Coast FIRE works backwards from the number you will eventually need, then discounts
          it by the years of compounding you have left:
        </p>
        <div className="bg-gray-900 border border-slate-800 rounded-xl p-5 mb-4 font-mono text-sm text-orange-300">
          Coast FIRE Number = FIRE Number / (1 + r)<sup>n</sup>
        </div>
        <ul className="space-y-2 mb-4">
          <li>
            <strong className="text-white">FIRE Number</strong> — your annual retirement
            spending divided by your withdrawal rate. At a 4% rate, that is your spending
            multiplied by 25.
          </li>
          <li>
            <strong className="text-white">r</strong> — your expected annual return after
            inflation. This calculator defaults to 7%, the rough long-run real return of a
            broad stock market index.
          </li>
          <li>
            <strong className="text-white">n</strong> — the number of years between your
            current age and your target retirement age.
          </li>
        </ul>
        <p>
          The exponent is what does the heavy lifting. Every extra year of compounding shrinks
          the amount you need today, which is why reaching Coast FIRE early is worth so much
          more than reaching it late.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">A Worked Example</h2>
        <p className="mb-4">
          Take someone aged 32 who expects to spend $40,000 a year in retirement and plans to
          stop working at 65.
        </p>
        <div className="bg-gray-900 border border-slate-800 rounded-xl p-5 mb-4 space-y-2 text-sm">
          <p>
            <span className="text-gray-400">Annual retirement spending:</span>{" "}
            <span className="text-white font-semibold">$40,000</span>
          </p>
          <p>
            <span className="text-gray-400">FIRE number (4% rule):</span>{" "}
            <span className="text-white font-semibold">$40,000 &times; 25 = $1,000,000</span>
          </p>
          <p>
            <span className="text-gray-400">Years of compounding (65 &minus; 32):</span>{" "}
            <span className="text-white font-semibold">33</span>
          </p>
          <p>
            <span className="text-gray-400">Real return assumption:</span>{" "}
            <span className="text-white font-semibold">7%</span>
          </p>
          <p className="pt-2 border-t border-slate-800">
            <span className="text-gray-400">Coast FIRE number:</span>{" "}
            <span className="text-orange-300 font-semibold">
              $1,000,000 / (1.07)<sup>33</sup> &asymp; $105,000
            </span>
          </p>
        </div>
        <p>
          Roughly $105,000 invested today, never touched again, grows to a million by 65. That
          is the entire idea. Someone who needs a million to retire fully needs about a tenth
          of it to stop saving for retirement altogether — provided they leave it alone for
          three decades.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">When Coast FIRE Does Not Work</h2>
        <p className="mb-4">
          Coast FIRE is an elegant idea with real failure modes. It is worth knowing them
          before you rearrange your career around the number.
        </p>
        <ul className="space-y-3">
          <li>
            <strong className="text-white">You touch the money.</strong> The entire model
            assumes the portfolio compounds undisturbed for decades. A withdrawal at year
            eight does not just remove that amount, it removes everything that amount would
            have become. Coast FIRE and a thin emergency fund are a dangerous combination.
          </li>
          <li>
            <strong className="text-white">Your spending grows.</strong> The number is
            anchored to the annual spending you assumed today. Children, a larger home, or a
            move to a more expensive city can raise your real FIRE number substantially, and
            your coast number with it.
          </li>
          <li>
            <strong className="text-white">Returns disappoint.</strong> A 7% real return is a
            long-run average, not a promise. A prolonged period of lower returns means
            arriving at 65 short of the target, with no contributions made in between to
            cushion it.
          </li>
          <li>
            <strong className="text-white">You want to retire early.</strong> Coast FIRE
            funds a <em>traditional</em> retirement age. If your goal is to stop working at
            50, coasting will not get you there — you need to keep contributing.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What This Calculator Assumes</h2>
        <p className="mb-4">
          Every projection rests on assumptions. These are ours, stated plainly so you can
          judge the output for yourself.
        </p>
        <ul className="space-y-2 mb-4">
          <li>Returns are constant and compound annually. Real markets do neither.</li>
          <li>
            The return you enter is <strong className="text-white">after inflation</strong>,
            so the resulting figure is in today&apos;s purchasing power.
          </li>
          <li>
            No investment fees, platform costs, or taxes are deducted. Fees in particular
            compound against you over thirty years — see our{" "}
            <Link href="/tools/investment-fees" className="text-orange-400 hover:text-orange-300">
              investment fee calculator
            </Link>{" "}
            for how much they cost.
          </li>
          <li>No further contributions are made after today.</li>
          <li>
            Your retirement spending stays flat in real terms for the whole period.
          </li>
        </ul>
        <p className="text-sm text-gray-400">
          This is an educational projection, not financial advice, and past returns do not
          predict future ones. Treat the output as a direction of travel rather than a
          guarantee.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Does reaching Coast FIRE mean I can quit my job?
            </h3>
            <p>
              No. It means you can stop saving for retirement. You still need income to cover
              today&apos;s living costs. What changes is that the income requirement drops to
              your actual expenses, which opens up lower-paid, part-time, or more interesting
              work that was previously unaffordable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              What return rate should I use?
            </h3>
            <p>
              7% after inflation is a common planning figure for a stock-heavy portfolio, based
              on long-run historical averages. More conservative planners use 5% or 6%. Run the
              calculator at several rates — if the answer changes your decision, the plan is
              too fragile.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              How is this different from Barista FIRE?
            </h3>
            <p>
              Coast FIRE means your portfolio is fully self-funding and you never draw on it
              before retirement. Barista FIRE means you draw on a partially funded portfolio
              while working part-time to cover the gap, often for the health benefits. We
              compare both in detail in{" "}
              <Link
                href="/blog/coast-fire-vs-barista-fire"
                className="text-orange-400 hover:text-orange-300"
              >
                Coast FIRE vs Barista FIRE
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Should I include my house in the calculation?
            </h3>
            <p>
              Only invested assets belong in this number. A primary residence does not generate
              withdrawable income, so counting it inflates your position. Include retirement
              accounts and taxable brokerage holdings; leave out your home and your emergency
              fund.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              What happens if I keep investing after hitting Coast FIRE?
            </h3>
            <p>
              You move toward full FIRE and an earlier retirement date. Coast FIRE is a floor,
              not a ceiling — many people hit it, downshift to less demanding work, and keep
              contributing at a reduced rate. Use our{" "}
              <Link href="/tools/time-to-fire" className="text-orange-400 hover:text-orange-300">
                time to FIRE calculator
              </Link>{" "}
              to see how much earlier that gets you there.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/tools/fire-number"
            className="block bg-gray-900 border border-slate-800 rounded-xl p-4 hover:border-orange-500 transition-colors"
          >
            <span className="text-white font-semibold">FIRE Number Calculator</span>
            <span className="block text-sm text-gray-400 mt-1">
              Work out the target this page discounts from.
            </span>
          </Link>
          <Link
            href="/tools/coast-fire-age"
            className="block bg-gray-900 border border-slate-800 rounded-xl p-4 hover:border-orange-500 transition-colors"
          >
            <span className="text-white font-semibold">Coast FIRE Age Calculator</span>
            <span className="block text-sm text-gray-400 mt-1">
              Find the age you will reach coast status.
            </span>
          </Link>
          <Link
            href="/tools/savings-rate"
            className="block bg-gray-900 border border-slate-800 rounded-xl p-4 hover:border-orange-500 transition-colors"
          >
            <span className="text-white font-semibold">Savings Rate Calculator</span>
            <span className="block text-sm text-gray-400 mt-1">
              The lever that gets you to coast fastest.
            </span>
          </Link>
          <Link
            href="/tools/compound-interest"
            className="block bg-gray-900 border border-slate-800 rounded-xl p-4 hover:border-orange-500 transition-colors"
          >
            <span className="text-white font-semibold">Compound Interest Calculator</span>
            <span className="block text-sm text-gray-400 mt-1">
              See the growth this whole idea depends on.
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

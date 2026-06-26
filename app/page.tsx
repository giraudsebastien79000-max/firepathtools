import Link from "next/link";

const tools = [
  { href: "/tools/time-to-fire", title: "Time to FIRE Calculator", desc: "How many years until you reach financial independence?", tag: "FIRE" },
  { href: "/tools/fire-number", title: "FIRE Number Calculator", desc: "How much do you need to retire early?", tag: "FIRE" },
  { href: "/tools/coast-fire", title: "Coast FIRE Calculator", desc: "Can you stop saving and coast to retirement?", tag: "FIRE" },
  { href: "/tools/fire-progress", title: "FIRE Progress Tracker", desc: "Track exactly where you are on your FIRE journey.", tag: "FIRE" },
  { href: "/tools/four-percent-rule", title: "4% Rule Calculator", desc: "How much can your portfolio safely generate?", tag: "FIRE" },
  { href: "/tools/savings-rate", title: "Savings Rate Calculator", desc: "Your most powerful lever for financial independence.", tag: "Savings" },
  { href: "/tools/compound-interest", title: "Compound Interest Calculator", desc: "See how your money grows over time.", tag: "Investing" },
  { href: "/tools/investment-fees", title: "Investment Fee Calculator", desc: "See how fees silently destroy your wealth.", tag: "Investing" },
  { href: "/tools/roth-vs-traditional", title: "Roth IRA vs Traditional IRA", desc: "Which retirement account wins for your situation?", tag: "Investing" },
  { href: "/tools/retirement-age", title: "Retirement Age Calculator", desc: "What age can you retire based on your savings?", tag: "Retirement" },
  { href: "/tools/net-worth", title: "Net Worth Calculator", desc: "Your real financial score. Calculate it in 60 seconds.", tag: "Wealth" },
  { href: "/tools/emergency-fund", title: "Emergency Fund Calculator", desc: "How much do you need before you start investing?", tag: "Savings" },
  { href: "/tools/debt-payoff", title: "Debt Payoff Calculator", desc: "See exactly when you will be debt-free.", tag: "Debt" },
  { href: "/tools/budget-planner", title: "Budget Planner (50/30/20)", desc: "Build your ideal budget in seconds.", tag: "Budgeting" },
  { href: "/tools/inflation", title: "Inflation Calculator", desc: "See how inflation erodes your purchasing power.", tag: "Investing" },
  { href: "/tools/latte-factor", title: "Latte Factor Calculator", desc: "What do your daily habits really cost over 30 years?", tag: "Budgeting" },
  { href: "/tools/freelance-rate", title: "Freelance Hourly Rate Calculator", desc: "The minimum rate you need to charge to hit your goals.", tag: "Freelance" },
  { href: "/tools/safe-withdrawal-rate", title: "Safe Withdrawal Rate Calculator", desc: "Find your ideal withdrawal rate for early retirement.", tag: "FIRE" },
];

const tagColors: Record<string, string> = {
  FIRE: "bg-orange-500/20 text-orange-400",
  Savings: "bg-blue-500/20 text-blue-400",
  Investing: "bg-green-500/20 text-green-400",
  Retirement: "bg-purple-500/20 text-purple-400",
  Wealth: "bg-yellow-500/20 text-yellow-400",
  Debt: "bg-red-500/20 text-red-400",
  Budgeting: "bg-teal-500/20 text-teal-400",
  Freelance: "bg-pink-500/20 text-pink-400",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">FirePath Tools</span>
          <h1 className="text-5xl font-bold mt-3 mb-4">Free Financial Independence Tools</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">18 free calculators to plan your path to FIRE. No signup. No ads. Just tools that work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-orange-400/50 hover:bg-gray-800 transition-all group">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">{tool.title}</h2>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ml-2 shrink-0 ${tagColors[tool.tag]}`}>{tool.tag}</span>
              </div>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-16">firepathtools.com -- Free financial independence calculators for the FIRE community</p>
      </div>
    </main>
  );
}

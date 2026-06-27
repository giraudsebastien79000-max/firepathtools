import type { Metadata } from "next"
import TimeToFireClient from "./client"

export const metadata: Metadata = {
  title: "Time to FIRE Calculator | How Many Years to Financial Independence",
  description: "Enter your income, expenses, and savings to find out exactly how many years until you reach financial independence and retire early.",
  openGraph: {
    title: "Time to FIRE Calculator | How Many Years to Financial Independence",
    description: "Enter your income, expenses, and savings to find out exactly how many years until you reach financial independence and retire early.",
    url: "https://firepathtools.com/tools/time-to-fire",
    siteName: "FirePathTools",
    type: "website",
  },
}

export default function TimeToFirePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">FIRE Calculator</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          Time to FIRE Calculator
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          How many years until you reach financial independence? Enter your numbers and find out exactly when you can retire early.
        </p>
      </section>

      <TimeToFireClient />

      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-5 text-gray-300 leading-relaxed text-lg">
        <h2 className="text-2xl font-bold text-white">How does this calculator work?</h2>
        <p>
          This calculator uses your annual income, expenses, and current savings to project how long it will take to reach your FIRE number — the portfolio size that lets you retire early using the 4% rule.
        </p>
        <p>
          Your FIRE number is 25x your annual expenses. The calculator then models year-by-year portfolio growth at your chosen return rate until your portfolio covers that target.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">What is the most important variable?</h2>
        <p>
          Your savings rate. Not your income, not your investment returns — your savings rate is the single variable with the most impact on when you reach FIRE. Going from a 20% to a 40% savings rate can cut your timeline by 15 years.
        </p>
      </section>

    </main>
  )
}
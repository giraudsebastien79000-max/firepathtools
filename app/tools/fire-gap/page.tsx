import type { Metadata } from "next"
import FireGapCalculator from "./client"

export const metadata: Metadata = {
  title: "FIRE Gap Calculator | How Far Are You From Financial Independence?",
  description: "Calculate your FIRE gap — the exact distance between your current savings and financial independence. See which lever closes the gap fastest: expenses, savings, or returns.",
}

export default function Page() {
  return <FireGapCalculator />
}
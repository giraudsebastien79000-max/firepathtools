import type { Metadata } from "next"
import RetireAt50Calculator from "./client"

export const metadata: Metadata = {
  title: "Retire at 50 Calculator | How Much Do You Need?",
  description: "Calculate exactly how much money you need to retire at 50. See your FIRE number, projected savings, and monthly contribution required for financial independence by 50.",
}

export default function Page() {
  return <RetireAt50Calculator />
}
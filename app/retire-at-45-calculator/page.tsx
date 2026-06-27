import type { Metadata } from "next"
import RetireAt45Calculator from "./client"

export const metadata: Metadata = {
  title: "Retire at 45 Calculator | How Much Do You Need?",
  description: "Calculate exactly how much money you need to retire at 45. See your FIRE number, projected savings, and monthly contribution required for financial independence by 45.",
}

export default function Page() {
  return <RetireAt45Calculator />
}
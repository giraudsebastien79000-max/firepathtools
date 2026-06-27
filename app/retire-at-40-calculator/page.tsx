import type { Metadata } from "next"
import RetireAt40Calculator from "./client"

export const metadata: Metadata = {
  title: "Retire at 40 Calculator | Can You Retire Early?",
  description: "Calculate exactly how much money you need to retire at 40. See if you are on track and what monthly savings you need to reach financial independence by 40.",
}

export default function Page() {
  return <RetireAt40Calculator />
}
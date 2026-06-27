import type { Metadata } from "next"
import FireUKCalculator from "./client"

export const metadata: Metadata = {
  title: "FIRE UK Calculator | Financial Independence Retire Early UK",
  description: "Calculate your FIRE number in pounds. Find out how much you need to retire early in the UK using a 3.5% withdrawal rate, ISA and SIPP strategy.",
}

export default function Page() {
  return <FireUKCalculator />
}
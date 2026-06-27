import type { Metadata } from "next"
import FireByCountryClient from "./client"

export const metadata: Metadata = {
  title: "FIRE by Country Calculator — Retire Abroad Cost by Country | FirePathTools",
  description: "Calculate your FIRE number for Portugal, Spain, Thailand, France, Mexico, Italy and more. See how much you need to retire early in each country.",
  alternates: { canonical: "https://www.firepathtools.com/fire-by-country-calculator" },
}

export default function FireByCountryPage() {
  return <FireByCountryClient />
}
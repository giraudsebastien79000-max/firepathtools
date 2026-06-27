import type { Metadata } from "next"
import FireCanadaClient from "./client"

export const metadata: Metadata = {
  title: "FIRE Calculator Canada - Financial Independence in CAD | FirePathTools",
  description: "Calculate your FIRE number in Canadian dollars. Tailored for Canadians with RRSP, TFSA, and CPP context. Find out when you can retire early.",
  alternates: { canonical: "https://www.firepathtools.com/fire-canada-calculator" },
}

export default function FireCanadaPage() {
  return <FireCanadaClient />
}
import type { Metadata } from "next";
import SavingsRateClient from "./SavingsRateClient";

export const metadata: Metadata = {
  title: "Savings Rate Calculator | Free Tool - FirePath Tools",
  description: "Your savings rate is your most powerful lever for financial independence. Calculate yours and see exactly how it affects your FIRE date. Free, no signup.",
};

export default function Page() {
  return <SavingsRateClient />;
}
import type { Metadata } from "next";
import SavingsRateClient from "./SavingsRateClient";

export const metadata: Metadata = {
  title: "Savings Rate Calculator",
  description: "Calculate your savings rate and see how it impacts your path to FIRE. Your savings rate is your most powerful lever for financial independence.",
};

export default function Page() {
  return <SavingsRateClient />;
}
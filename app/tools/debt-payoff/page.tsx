import type { Metadata } from "next";
import DebtPayoffClient from "./DebtPayoffClient";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator | Free Tool - FirePath Tools",
  description: "See exactly when you will be debt-free. Compare avalanche vs snowball methods and calculate your payoff date with a month-by-month plan. Free, no signup.",
};

export default function Page() {
  return <DebtPayoffClient />;
}
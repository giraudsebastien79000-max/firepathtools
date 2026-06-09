import type { Metadata } from "next";
import DebtPayoffClient from "./DebtPayoffClient";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator",
  description: "See exactly when you will be debt-free. Compare avalanche vs snowball payoff strategies and calculate your debt-free date.",
};

export default function Page() {
  return <DebtPayoffClient />;
}
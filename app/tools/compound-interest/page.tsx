import type { Metadata } from "next";
import CompoundInterestClient from "./CompoundInterestClient";

export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description: "See how your money grows over time with compound interest. Calculate future investment value with different rates and contribution amounts.",
};

export default function Page() {
  return <CompoundInterestClient />;
}
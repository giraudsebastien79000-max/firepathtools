import type { Metadata } from "next";
import InvestmentFeesClient from "./InvestmentFeesClient";

export const metadata: Metadata = {
  title: "Investment Fee Calculator",
  description: "See how fees silently destroy your wealth over time. Calculate the true long-term cost of high expense ratios.",
};

export default function Page() {
  return <InvestmentFeesClient />;
}
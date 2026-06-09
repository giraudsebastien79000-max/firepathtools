import type { Metadata } from "next";
import InvestmentFeesClient from "./InvestmentFeesClient";

export const metadata: Metadata = {
  title: "Investment Fee Calculator | Free Tool - FirePath Tools",
  description: "See how fees silently destroy your wealth over time. Calculate the true cost of high expense ratios and how much you lose to fees over 10, 20, 30 years. Free, no signup.",
};

export default function Page() {
  return <InvestmentFeesClient />;
}
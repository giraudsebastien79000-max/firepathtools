import type { Metadata } from "next";
import CompoundInterestClient from "./CompoundInterestClient";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | Free Tool - FirePath Tools",
  description: "See exactly how your money grows over time. Calculate compound interest with monthly contributions, inflation adjustment, and a year-by-year breakdown. Free, no signup.",
};

export default function Page() {
  return <CompoundInterestClient />;
}
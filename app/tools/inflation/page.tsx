import type { Metadata } from "next";
import InflationClient from "./InflationClient";

export const metadata: Metadata = {
  title: "Inflation Calculator | Free Tool - FirePath Tools",
  description: "See how inflation erodes your purchasing power over time. Calculate the real value of your money and plan your retirement income accordingly. Free, no signup.",
};

export default function Page() {
  return <InflationClient />;
}
import type { Metadata } from "next";
import InflationClient from "./InflationClient";

export const metadata: Metadata = {
  title: "Inflation Calculator",
  description: "See how inflation erodes your purchasing power over time. Calculate the real value of money across different time periods.",
};

export default function Page() {
  return <InflationClient />;
}
import type { Metadata } from "next";
import NetWorthClient from "./NetWorthClient";

export const metadata: Metadata = {
  title: "Net Worth Calculator | Free Tool - FirePath Tools",
  description: "Calculate your real financial score in 60 seconds. Track assets, liabilities, and see your net worth trend over time. The starting point of every FIRE journey. Free, no signup.",
};

export default function Page() {
  return <NetWorthClient />;
}
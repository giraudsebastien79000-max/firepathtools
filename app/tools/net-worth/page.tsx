import type { Metadata } from "next";
import NetWorthClient from "./NetWorthClient";

export const metadata: Metadata = {
  title: "Net Worth Calculator",
  description: "Calculate your real financial score in 60 seconds. Track assets minus liabilities to measure your true financial progress.",
};

export default function Page() {
  return <NetWorthClient />;
}
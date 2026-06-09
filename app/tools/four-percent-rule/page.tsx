import type { Metadata } from "next";
import FourPercentRuleClient from "./FourPercentRuleClient";

export const metadata: Metadata = {
  title: "4% Rule Calculator | Free Tool - FirePath Tools",
  description: "How much can your portfolio safely generate each year? Calculate your safe withdrawal rate based on the Trinity Study. Free, no signup.",
};

export default function Page() {
  return <FourPercentRuleClient />;
}
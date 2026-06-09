import type { Metadata } from "next";
import FourPercentRuleClient from "./FourPercentRuleClient";

export const metadata: Metadata = {
  title: "4% Rule Calculator",
  description: "Calculate how much your portfolio can safely generate each year. Based on the proven 4% safe withdrawal rate for early retirement.",
};

export default function Page() {
  return <FourPercentRuleClient />;
}
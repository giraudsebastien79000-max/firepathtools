import type { Metadata } from "next";
import RothVsTraditionalClient from "./RothVsTraditionalClient";

export const metadata: Metadata = {
  title: "Roth IRA vs Traditional IRA Calculator",
  description: "Find out which retirement account wins for your situation. Compare Roth vs Traditional IRA based on your tax bracket and timeline.",
};

export default function Page() {
  return <RothVsTraditionalClient />;
}
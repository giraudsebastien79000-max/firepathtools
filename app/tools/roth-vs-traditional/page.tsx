import type { Metadata } from "next";
import RothVsTraditionalClient from "./RothVsTraditionalClient";

export const metadata: Metadata = {
  title: "Roth IRA vs Traditional IRA Calculator | Free Tool - FirePath Tools",
  description: "Which retirement account wins for your situation? Compare Roth vs Traditional IRA based on your tax rate now and in retirement. See the difference over 30 years. Free, no signup.",
};

export default function Page() {
  return <RothVsTraditionalClient />;
}
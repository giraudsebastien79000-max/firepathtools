import type { Metadata } from "next";
import RetirementAgeClient from "./RetirementAgeClient";

export const metadata: Metadata = {
  title: "Retirement Age Calculator | Free Tool - FirePath Tools",
  description: "What age can you retire based on your current savings and contributions? Calculate your exact retirement date and see what changes get you there faster. Free, no signup.",
};

export default function Page() {
  return <RetirementAgeClient />;
}
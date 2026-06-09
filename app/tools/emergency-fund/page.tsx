import type { Metadata } from "next";
import EmergencyFundClient from "./EmergencyFundClient";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator | Free Tool - FirePath Tools",
  description: "How much do you need before you start investing? Calculate your ideal emergency fund based on your expenses, job security, and risk profile. Free, no signup.",
};

export default function Page() {
  return <EmergencyFundClient />;
}
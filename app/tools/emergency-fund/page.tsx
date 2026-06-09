import type { Metadata } from "next";
import EmergencyFundClient from "./EmergencyFundClient";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator",
  description: "Calculate how much you need in your emergency fund before you start investing. Based on your monthly expenses and risk tolerance.",
};

export default function Page() {
  return <EmergencyFundClient />;
}
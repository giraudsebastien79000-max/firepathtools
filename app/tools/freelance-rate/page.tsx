import type { Metadata } from "next";
import FreelanceRateClient from "./FreelanceRateClient";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator | Free Tool - FirePath Tools",
  description: "What hourly rate do you need to charge to hit your income goals? Calculate your minimum freelance rate based on expenses, taxes, and billable hours. Free, no signup.",
};

export default function Page() {
  return <FreelanceRateClient />;
}
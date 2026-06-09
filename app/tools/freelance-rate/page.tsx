import type { Metadata } from "next";
import FreelanceRateClient from "./FreelanceRateClient";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator",
  description: "Calculate the minimum hourly rate you need to charge to hit your financial goals. Includes taxes, expenses, and savings targets.",
};

export default function Page() {
  return <FreelanceRateClient />;
}
import type { Metadata } from "next";
import SafeWithdrawalRateClient from "./client";

export const metadata: Metadata = {
  title: "Safe Withdrawal Rate Calculator | FirePathTools",
  description: "Calculate how long your portfolio will last based on your withdrawal rate.",
};

export default function SafeWithdrawalRatePage() {
  return <SafeWithdrawalRateClient />;
}
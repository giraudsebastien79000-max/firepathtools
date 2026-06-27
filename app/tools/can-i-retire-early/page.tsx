import { Metadata } from "next";
import CanIRetireEarlyClient from "./client";

export const metadata: Metadata = {
  title: "Can I Retire Early Calculator | FIRE Readiness Check",
  description: "Find out if you can retire early based on your savings, expenses, and investment returns. Instant FIRE readiness calculator.",
};

export default function CanIRetireEarlyPage() {
  return <CanIRetireEarlyClient />;
}
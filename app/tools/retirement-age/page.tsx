import type { Metadata } from "next";
import RetirementAgeClient from "./RetirementAgeClient";

export const metadata: Metadata = {
  title: "Retirement Age Calculator",
  description: "Find out what age you can retire based on your current savings rate and investment returns. Plan your path to financial freedom.",
};

export default function Page() {
  return <RetirementAgeClient />;
}
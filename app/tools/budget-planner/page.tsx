import type { Metadata } from "next";
import BudgetPlannerClient from "./BudgetPlannerClient";

export const metadata: Metadata = {
  title: "Budget Planner (50/30/20) | Free Tool - FirePath Tools",
  description: "Build your ideal budget in seconds using the 50/30/20 rule. Split your income into needs, wants, and savings to accelerate your path to financial independence. Free, no signup.",
};

export default function Page() {
  return <BudgetPlannerClient />;
}
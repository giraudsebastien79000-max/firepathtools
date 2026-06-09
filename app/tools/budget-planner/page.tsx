import type { Metadata } from "next";
import BudgetPlannerClient from "./BudgetPlannerClient";

export const metadata: Metadata = {
  title: "Budget Planner 50/30/20",
  description: "Build your ideal budget in seconds using the 50/30/20 rule. See exactly how to split your income between needs, wants, and savings.",
};

export default function Page() {
  return <BudgetPlannerClient />;
}

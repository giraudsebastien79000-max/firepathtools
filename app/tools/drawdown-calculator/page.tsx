import { Metadata } from "next";
import DrawdownClient from "./client";

export const metadata: Metadata = {
  title: "Drawdown Calculator | How Long Will My Money Last?",
  description: "Calculate how long your retirement portfolio will last based on your withdrawal rate, investment returns, and starting balance. Free FIRE drawdown calculator.",
};

export default function DrawdownPage() {
  return <DrawdownClient />;
}
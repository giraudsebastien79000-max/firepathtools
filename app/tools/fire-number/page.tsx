import type { Metadata } from "next";
import FIRENumberClient from "./FIRENumberClient";

export const metadata: Metadata = {
  title: "FIRE Number Calculator | How Much Do You Need to Retire Early?",
  description: "Calculate your exact FIRE number for Lean, Regular, Fat, and Barista FIRE. See your retirement timeline, inflation-adjusted target, and years to financial independence.",
};

export default function Page() {
  return <FIRENumberClient />;
}

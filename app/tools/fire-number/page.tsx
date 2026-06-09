import type { Metadata } from "next";
import FIRENumberClient from "./FIRENumberClient";

export const metadata: Metadata = {
  title: "FIRE Number Calculator | Free Tool - FirePath Tools",
  description: "How much do you need to retire early? Calculate your Lean, Regular, Fat, and Barista FIRE numbers with inflation-adjusted targets and retirement age estimates. Free, no signup.",
};

export default function Page() {
  return <FIRENumberClient />;
}
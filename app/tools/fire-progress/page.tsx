import type { Metadata } from "next";
import FIREProgressClient from "./FIREProgressClient";

export const metadata: Metadata = {
  title: "FIRE Progress Tracker | Free Tool - FirePath Tools",
  description: "Track exactly where you are on your FIRE journey. See your progress percentage, years remaining, and what it takes to retire early. Free, no signup.",
};

export default function Page() {
  return <FIREProgressClient />;
}
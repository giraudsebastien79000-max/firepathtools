import type { Metadata } from "next";
import FIREProgressClient from "./FIREProgressClient";

export const metadata: Metadata = {
  title: "FIRE Progress Tracker",
  description: "Track exactly where you are on your FIRE journey. See your financial independence percentage and projected retirement date.",
};

export default function Page() {
  return <FIREProgressClient />;
}
import type { Metadata } from "next";
import CoastFIREClient from "./CoastFIREClient";

export const metadata: Metadata = {
  title: "Coast FIRE Calculator | Free Tool - FirePath Tools",
  description: "Find out if you can stop saving and coast to retirement. Calculate your exact Coast FIRE number based on your savings, age, and target retirement date. Free, no signup.",
};

export default function Page() {
  return <CoastFIREClient />;
}
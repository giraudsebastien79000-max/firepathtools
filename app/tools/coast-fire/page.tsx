import type { Metadata } from "next";
import CoastFIREClient from "./CoastFIREClient";

export const metadata: Metadata = {
  title: "Coast FIRE Calculator",
  description: "Find out if you can stop saving and coast to retirement. Calculate your Coast FIRE number based on your current savings and target retirement age.",
};

export default function Page() {
  return <CoastFIREClient />;
}
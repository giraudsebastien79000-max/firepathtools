import type { Metadata } from "next";
import FireLiveClient from "./FireLiveClient";

export const metadata: Metadata = {
  title: "Watch Yourself Reach FIRE | Interactive - FirePath Tools",
  description:
    "Drag the sliders and watch your net worth climb to your FIRE number in today's dollars. See the exact age you could reach financial independence. Free, no signup.",
};

export default function Page() {
  return <FireLiveClient />;
}

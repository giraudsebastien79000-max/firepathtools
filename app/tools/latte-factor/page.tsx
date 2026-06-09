import type { Metadata } from "next";
import LatteFactorClient from "./LatteFactorClient";

export const metadata: Metadata = {
  title: "Latte Factor Calculator | Free Tool - FirePath Tools",
  description: "What do your daily habits really cost over 30 years? Calculate how small daily expenses compound into thousands and how cutting them accelerates your FIRE date. Free, no signup.",
};

export default function Page() {
  return <LatteFactorClient />;
}
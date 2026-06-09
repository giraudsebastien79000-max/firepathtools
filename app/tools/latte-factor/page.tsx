import type { Metadata } from "next";
import LatteFactorClient from "./LatteFactorClient";

export const metadata: Metadata = {
  title: "Latte Factor Calculator",
  description: "See what your daily spending habits really cost over 30 years. Calculate the investment opportunity cost of small daily expenses.",
};

export default function Page() {
  return <LatteFactorClient />;
}
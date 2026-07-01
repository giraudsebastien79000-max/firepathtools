import type { Metadata } from "next";
import FreedomDateClient from "./FreedomDateClient";

export const metadata: Metadata = {
  title: "Freedom Date Calculator: The Exact Day You Reach FIRE | FirePath Tools",
  description: "Find the exact date you can stop working. Enter your savings, contributions, and expenses to calculate your Freedom Date, free and shareable.",
  alternates: { canonical: "https://www.firepathtools.com/tools/freedom-date" },
};

export default function FreedomDatePage() {
  return <FreedomDateClient />;
}
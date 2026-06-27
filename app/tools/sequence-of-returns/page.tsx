import { Metadata } from "next";
import SequenceOfReturnsClient from "./client";

export const metadata: Metadata = {
  title: "Sequence of Returns Risk Calculator | FIRE Portfolio Simulator",
  description: "See how the order of market returns affects your retirement portfolio. Simulate good vs bad sequence of returns risk with this free FIRE calculator.",
};

export default function SequenceOfReturnsPage() {
  return <SequenceOfReturnsClient />;
}
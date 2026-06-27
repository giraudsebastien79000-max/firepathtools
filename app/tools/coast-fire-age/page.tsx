import { Metadata } from "next";
import CoastFireAgeClient from "./client";

export const metadata: Metadata = {
  title: "Coast FIRE Age Calculator | When Can You Stop Saving?",
  description: "Find out at what age you reach your Coast FIRE number and can stop actively saving for retirement. Free calculator with instant results.",
};

export default function CoastFireAgePage() {
  return <CoastFireAgeClient />;
}
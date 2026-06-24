import type { Metadata } from "next";
import FireNumberWidgetClient from "./client";

export const metadata: Metadata = {
  title: "FIRE Number Calculator Widget | FirePathTools",
  description: "Free embeddable FIRE Number calculator for your blog or website.",
};

export default function FireNumberWidgetPage() {
  return <FireNumberWidgetClient />;
}
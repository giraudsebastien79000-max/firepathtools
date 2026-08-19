import type { Metadata } from "next";
import FreedomWatchClient from "./FreedomWatchClient";

export const metadata: Metadata = {
  title: "The Freedom Watch | Interactive FIRE Age - FirePath Tools",
  description:
    "A live watch that shows the exact age you could be financially free. Wind it up and watch the hands settle on your freedom age, years left and FIRE number, in today's dollars. Free, no signup.",
};

export default function Page() {
  return <FreedomWatchClient />;
}

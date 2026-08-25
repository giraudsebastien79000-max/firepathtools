import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | FirePath Tools",
  description:
    "Who builds FirePath Tools and why. Free FIRE calculators with no accounts, no signups, and documented assumptions.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">About FirePath Tools</h1>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p className="text-lg text-slate-200">
          FirePath Tools is a collection of free calculators for people working toward
          financial independence. No accounts, no signups, no data collection. You open a
          tool, enter your numbers, and get an answer.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Why it exists</h2>
        <p>
          Most FIRE calculators fall into one of two camps. Either they are spreadsheets you
          have to download and open in Excel, or they are polished planning platforms that
          cost money and require you to create an account and connect your finances. There
          was room for something in between: instant, browser-based, and free.
        </p>
        <p>
          The site started as a personal project. Working out my own path to financial
          independence meant running the same calculations over and over, and the tools
          available were either too basic or too heavy. So I built the ones I wanted, then
          kept building.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Who writes this</h2>
        <p>
          FirePath Tools is written and maintained by Sebastian Cole, a pen name. I am not a
          financial advisor, I hold no financial certification, and nothing on this site is
          personalised advice. I am someone working toward financial independence who
          happens to build things, writing about the arithmetic openly so you can check it
          yourself.
        </p>
        <p>
          That is the whole basis on which you should trust anything here: not credentials,
          but shown work. Every calculator assumption is documented on our{" "}
          <Link
            href="/methodology"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            Methodology page
          </Link>
          .
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What the site does not do</h2>
        <p>
          No portfolio tracking. No bank connections. No account features. No premium tier
          holding back the useful calculations. The tools are free because the site is funded
          by advertising and by affiliate links to services we would recommend anyway,
          disclosed on every page where they appear.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What is coming</h2>
        <p>
          More country coverage, better decumulation modelling, and continued auditing of
          every existing calculator against its stated assumptions.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Get in touch</h2>
        <p>
          Questions, corrections, or a bug to report:{" "}
          <a
            href="mailto:contact@firepathtools.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            contact@firepathtools.com
          </a>
          . Corrections are especially welcome. If a number is wrong, I want to know.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | FirePath Tools",
  description:
    "Reach FirePath Tools for corrections, press enquiries, and calculator suggestions.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">Contact</h1>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p className="text-lg text-slate-200">
          The fastest way to reach FirePath Tools is by email:{" "}
          <a
            href="mailto:contact@firepathtools.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            contact@firepathtools.com
          </a>
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Corrections</h2>
        <p>
          If you spot a calculation that looks wrong, tell us. Include the calculator name
          and the inputs you used and we will check it. Errors get fixed and the change is
          noted on the Methodology page.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Press and media</h2>
        <p>
          Happy to answer questions about financial independence arithmetic, savings rate
          mathematics, or the cost of retiring early in different countries. Data from our
          Global FIRE Map is available on request.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Suggestions</h2>
        <p>
          Missing a calculator you would use? Tell us which one and why.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What we cannot do</h2>
        <p>
          We cannot give personalised financial advice, review your portfolio, or tell you
          whether a specific investment is right for you. For that, speak to a qualified
          advisor in your country.
        </p>

        <p className="pt-4 text-sm text-slate-400">Typical response time: a few days.</p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | FirePath Tools",
  description:
    "Terms governing the use of FirePath Tools calculators and articles. Educational models, not financial advice.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">Terms of Use</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: 24 August 2026</p>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p>
          By using firepathtools.com you agree to these terms. If you do not agree, please do
          not use the site.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What this site is</h2>
        <p>
          FirePath Tools provides free financial calculators and educational articles about
          financial independence and early retirement. The tools are illustrative models.
          They are not financial, investment, tax, or legal advice, and they are not a
          substitute for advice from a qualified professional who knows your situation.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">No guarantees</h2>
        <p>
          Calculator results depend entirely on the assumptions you enter and on the
          assumptions built into each model. Real markets do not deliver steady returns, tax
          rules change, and inflation varies. We make reasonable efforts to keep figures and
          methods accurate and current, but we make no warranty that the site or its results
          are accurate, complete, or suitable for your circumstances. You use the site at
          your own risk.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any loss or damage
          arising from your use of, or reliance on, this site or its calculators, including
          financial loss resulting from decisions made using these tools.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Intellectual property</h2>
        <p>
          The calculators, text, design, and code on this site are our property or used under
          licence. You may link to the site freely and quote short passages with attribution.
          You may not copy, republish, or redistribute substantial portions without written
          permission.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">
          External links and affiliate relationships
        </h2>
        <p>
          The site links to third-party websites and may include affiliate links. We are not
          responsible for the content, accuracy, or practices of external sites. See our{" "}
          <Link href="/disclaimer" className="text-orange-400 underline underline-offset-2">
            Disclaimer
          </Link>{" "}
          for details of our affiliate relationships.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Changes</h2>
        <p>
          We may modify the site or these terms at any time. Continued use after changes
          means you accept the revised terms.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Governing law</h2>
        <p>
          These terms are governed by French law. Any dispute falls under the jurisdiction of
          the competent French courts.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Contact</h2>
        <p>
          <a
            href="mailto:contact@firepathtools.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            contact@firepathtools.com
          </a>
        </p>
      </div>
    </main>
  );
}

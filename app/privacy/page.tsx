import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FirePath Tools",
  description:
    "How FirePath Tools handles data. No accounts, no signups, no financial information collected. Calculator inputs never leave your browser.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: 24 August 2026</p>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p>
          FirePath Tools is operated by Sebastien Giraud, based in France. This policy
          explains what data we collect when you visit firepathtools.com, why we collect it,
          and what rights you have over it.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">The short version</h2>
        <p>
          FirePath Tools has no user accounts, no login, and no newsletter. We never ask for
          your name, your email, or any financial information. Everything you type into a
          calculator stays in your browser and is never sent to us or stored on our servers.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What we do collect</h2>
        <p>
          <strong className="text-white">Analytics.</strong> We use Vercel Analytics to
          understand which pages are visited and how visitors find the site. This includes
          approximate location at country level, the pages you view, the site or search
          engine that referred you, and general device and browser information. We use this
          to decide what to build next.
        </p>
        <p>
          <strong className="text-white">Advertising.</strong> We display ads through Google
          AdSense. Google and its partners use cookies to serve ads based on your prior
          visits to this and other websites. You can opt out of personalised advertising at
          any time through{" "}
          <a
            href="https://adssettings.google.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or, for participating networks, at{" "}
          <a
            href="https://www.aboutads.info/choices"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info/choices
          </a>
          .
        </p>
        <p>
          <strong className="text-white">Hosting.</strong> The site is hosted by Vercel,
          which processes standard server logs including IP addresses for security and
          reliability purposes.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">What we never collect</h2>
        <p>
          We do not collect your name, email address, phone number, postal address, income,
          net worth, account balances, or any other financial detail. Calculator inputs are
          processed entirely in your browser and are never transmitted to us.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Legal basis</h2>
        <p>
          Where the GDPR applies, we rely on your consent for analytics and advertising
          cookies, and on legitimate interest for the basic server logs necessary to operate
          and secure the site.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Your rights</h2>
        <p>
          If you are in the European Economic Area or the United Kingdom, you have the right
          to access, correct, or delete personal data we hold about you, to object to or
          restrict processing, to data portability, and to lodge a complaint with your
          national supervisory authority (in France, the CNIL). Because we do not operate
          user accounts, in most cases we hold no data that can identify you personally.
        </p>
        <p>
          If you are a California resident, you have the right to know what personal
          information is collected and to opt out of its sale. We do not sell personal
          information.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:contact@firepathtools.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            contact@firepathtools.com
          </a>
          .
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Cookies</h2>
        <p>
          Cookies on this site come from Google AdSense and from our analytics provider. You
          can block or delete cookies through your browser settings. The calculators will
          continue to work normally.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Children</h2>
        <p>
          This site is not directed at children under 16 and we do not knowingly collect
          data from them.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Changes</h2>
        <p>
          We may update this policy. The date at the top of this page reflects the most
          recent change.
        </p>

        <h2 className="pt-6 text-2xl font-semibold text-white">Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a
            href="mailto:contact@firepathtools.com"
            className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
          >
            contact@firepathtools.com
          </a>
        </p>

        <p className="pt-8 text-sm text-slate-400">
          See also our{" "}
          <Link href="/terms" className="text-orange-400 underline underline-offset-2">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/disclaimer" className="text-orange-400 underline underline-offset-2">
            Disclaimer
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

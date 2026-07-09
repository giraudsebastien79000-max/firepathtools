import type { Metadata } from 'next'
import Link from 'next/link'
import GlobalFireMapClient from './client'

export const metadata: Metadata = {
 title: 'Global FIRE Map: Where Are You Already Financially Independent? | FirePathTools',
 description:
 'Enter your portfolio and savings, and see the world map light up: countries where you are already financially independent, close to it, or still far. 32 countries, one map.',
 alternates: { canonical: 'https://www.firepathtools.com/global-fire-map' },
 openGraph: {
 title: 'Global FIRE Map: Where Are You Already Financially Independent?',
 description:
 'Enter your portfolio and savings, and see the world map light up: countries where you are already financially independent, close to it, or still far.',
 url: 'https://firepathtools.com/global-fire-map',
 siteName: 'FirePathTools',
 type: 'website',
 },
}

const faqItems = [
 {
 question: 'What is the Global FIRE Map?',
 answer:
 'An interactive tool that compares your portfolio against the cost of financial independence in 32 countries at once. Enter your current portfolio and monthly savings, and the map colors each country: green if you are already financially independent there, orange if you are within 5 years, gray if you are further away.',
 },
 {
 question: 'How is the FIRE number per country calculated?',
 answer:
 'Each country has a comfortable monthly budget for a single person including rent, based on FirePathTools research. The FIRE number is 25x that annual budget (a 4% safe withdrawal rate). Time to FI assumes your savings grow at 7% per year. For example, Portugal at USD 1,800/month gives a FIRE number of USD 540,000.',
 },
 {
 question: 'Which country has the lowest FIRE number?',
 answer:
 'Among the 32 countries mapped, India has the lowest at roughly USD 270,000 (USD 900/month budget), followed by Georgia and Vietnam at around USD 330,000. At the other end, the United States requires roughly USD 1,050,000 at USD 3,500/month.',
 },
 {
 question: 'Are these budgets guaranteed?',
 answer:
 'No - they are planning ranges for a comfortable single-person lifestyle, rent included. Your actual number depends on your lifestyle, city, and household size. Visa requirements and local taxes also matter: see our detailed country guides for Portugal and Thailand for the full picture.',
 },
]

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqItems.map((item) => ({
 '@type': 'Question',
 name: item.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: item.answer,
 },
 })),
}

export default function GlobalFireMapPage() {
 return (
 <main className="min-h-screen bg-gray-950 text-gray-100">

 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* Hero */}
 <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
 Interactive tool
 </p>
 <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
 Global FIRE Map
 </h1>

 {/* Quick answer (AEO) */}
 <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
 <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">
 Quick answer
 </p>
 <p className="text-lg text-gray-200 leading-relaxed">
 Across the 32 countries on this map, financial independence for a single person costs
 between roughly USD 270,000 (India) and USD 1,050,000 (United States) at a 4%
 withdrawal rate. Enter your portfolio below and see where you are already free.
 </p>
 </div>

 <p className="text-xl text-gray-300 leading-relaxed">
 Your FIRE number is not one number - it is a different number in every country. This
 map shows all of them at once, colored by how close you are.
 </p>
 </section>

 <GlobalFireMapClient />

 {/* Methodology */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-4">How the numbers work</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-4">
 Each country carries a comfortable monthly budget for a single person, rent included,
 in USD - the same planning ranges used in our detailed country guides. The FIRE number
 is 25x the annual budget (a 4% safe withdrawal rate), and your time to FI assumes your
 monthly savings compound at 7% per year.
 </p>
 <p className="text-lg text-gray-300 leading-relaxed">
 Budgets are deliberately realistic rather than minimal: the goal is a life you would
 actually want, not survival mode. Visa rules and local taxes change the picture in
 some countries - the detail panel links to our full guides where they exist.
 </p>
 </section>

 {/* FAQ */}
 <section className="max-w-3xl mx-auto px-6 pb-12">
 <h2 className="text-2xl font-bold text-white mb-6">Global FIRE Map: FAQ</h2>
 <div className="space-y-6">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
 <p className="text-white font-semibold text-lg mb-2">{item.question}</p>
 <p className="text-gray-300 leading-relaxed">{item.answer}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Related */}
 <section className="max-w-3xl mx-auto px-6 pb-20">
 <h3 className="text-xl font-bold text-white mb-6">Go deeper</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {[
 { title: 'Retire in Portugal: The Complete FIRE Guide', href: '/blog/retire-in-portugal', desc: 'The D7 visa, real budgets by region, and the post-NHR tax picture.' },
 { title: 'Retire in Thailand: The Complete FIRE Guide', href: '/blog/retire-in-thailand', desc: 'Visa routes by age, real budgets, and the new remittance tax rules.' },
 { title: 'FIRE by Country Calculator', href: '/fire-by-country-calculator', desc: 'A focused calculator for a single destination at a time.' },
 { title: 'What Is the FIRE Number?', href: '/blog/what-is-a-fire-number', desc: 'How to calculate the portfolio size you need to retire early.' },
 ].map((article, i) => (
 <Link
 key={i}
 href={article.href}
 className="block bg-gray-900 hover:bg-slate-800 border border-gray-800 rounded-xl p-5 transition-colors group"
 >
 <p className="text-white font-semibold group-hover:text-orange-400 transition-colors mb-1">
 {article.title}
 </p>
 <p className="text-gray-300 text-sm">{article.desc}</p>
 </Link>
 ))}
 </div>
 </section>

 </main>
 )
}
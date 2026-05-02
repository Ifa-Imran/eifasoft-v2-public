import { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { FAQ } from '@/types';

export const metadata: Metadata = {
  title: 'Best MLM Software Comparison 2026 | EifaSoft vs Competitors',
  description:
    'Compare top MLM software in India: EifaSoft vs Epixel vs Infinite MLM vs LetsCMS. See pricing, features, and why 500+ businesses choose EifaSoft for their network marketing software needs.',
  keywords: [
    'MLM software comparison',
    'best MLM software India',
    'EifaSoft vs Epixel',
    'EifaSoft vs Infinite MLM',
    'network marketing software comparison',
    'MLM software price comparison',
    'binary MLM software comparison',
    'best direct selling software India',
    'top MLM software 2026',
    'affordable MLM software',
  ],
  alternates: {
    canonical: 'https://eifasoft.com/mlm-software-comparison',
  },
};

const comparisonFAQs: FAQ[] = [
  {
    question: 'Which is the best MLM software in India for 2026?',
    answer:
      'EifaSoft is rated as the best MLM software in India for 2026, offering 29+ compensation plans, blockchain integration, AI-powered analytics, and complete India compliance (GST, TDS). Unlike competitors, EifaSoft provides end-to-end solutions with mobile apps included in all packages.',
  },
  {
    question: 'How does EifaSoft compare to Epixel MLM Software?',
    answer:
      'While Epixel is a good international option at $999+, EifaSoft offers similar features with India-specific advantages: GST compliance built-in, regional language support (Hindi), UPI/Razorpay integration, and dedicated Indian support team. EifaSoft also offers blockchain MLM which Epixel lacks.',
  },
  {
    question: 'Is EifaSoft more expensive than Infinite MLM Software?',
    answer:
      'EifaSoft\'s starting price of ₹49,999 is highly competitive compared to international alternatives. Our all-inclusive packages include mobile apps, payment gateway integration, and 1-year support - features that cost $700+ extra with competitors. Best value for money!',
  },
  {
    question: 'Does EifaSoft offer a free demo?',
    answer:
      'Yes! EifaSoft offers a completely free demo and consultation worth ₹10,000. You can see the full software in action, test all features, and get a customized quote based on your requirements. Book your free demo today!',
  },
  {
    question: 'What makes EifaSoft unique compared to other MLM software providers?',
    answer:
      'EifaSoft is the only Indian MLM software company offering: Smart Contract MLM on blockchain, AI-powered predictive analytics, 29+ compensation plans, complete India compliance, regional language support, and end-to-end services from development to marketing.',
  },
  {
    question: 'Can I migrate from another MLM software to EifaSoft?',
    answer:
      'Absolutely! We offer free migration assistance for businesses moving from competitors like Epixel, Infinite MLM, or any other platform. Our team handles data migration, member transfer, and ensures zero downtime during transition.',
  },
];

const competitors = [
  {
    name: 'EifaSoft',
    logo: '🏆',
    highlight: true,
    pricing: '₹49,999+',
    pricingNote: 'All-inclusive package',
    founded: '2012',
    location: 'Moradabad, India',
    plans: '29+',
    mobileApps: '✅ Included',
    blockchain: '✅ Smart Contracts',
    aiAnalytics: '✅ Predictive AI',
    gstCompliance: '✅ Full',
    support: '24/7 Dedicated',
    languages: 'Hindi, English, Regional',
    paymentGateways: 'Razorpay, PayU, UPI, 10+',
    freeDemo: '✅ Yes',
    rating: 4.9,
    reviews: 150,
  },
  {
    name: 'Epixel MLM',
    logo: '🔵',
    highlight: false,
    pricing: '$999+ (~₹83,000)',
    pricingNote: 'Add-ons extra',
    founded: '2012',
    location: 'Kerala, India',
    plans: '25+',
    mobileApps: '💰 Extra cost',
    blockchain: '❌ Not available',
    aiAnalytics: '❌ Basic only',
    gstCompliance: '⚠️ Basic',
    support: 'Email support',
    languages: 'English only',
    paymentGateways: 'International only',
    freeDemo: '✅ Yes',
    rating: 4.5,
    reviews: 89,
  },
  {
    name: 'Infinite MLM',
    logo: '🟢',
    highlight: false,
    pricing: '$699+ (~₹58,000)',
    pricingNote: 'Per plan, add-ons extra',
    founded: '2012',
    location: 'Kochi, India',
    plans: '12',
    mobileApps: '💰 $400-500 extra',
    blockchain: '❌ Not available',
    aiAnalytics: '❌ Not available',
    gstCompliance: '❌ Manual',
    support: 'Ticket system',
    languages: '💰 $150 extra',
    paymentGateways: '💰 $400 extra',
    freeDemo: '✅ Yes',
    rating: 4.3,
    reviews: 67,
  },
  {
    name: 'LetsCMS',
    logo: '🟡',
    highlight: false,
    pricing: '$200+ (~₹17,000)',
    pricingNote: 'Limited features',
    founded: '2008',
    location: 'Ahmedabad',
    plans: '5',
    mobileApps: '❌ Not available',
    blockchain: '❌ Not available',
    aiAnalytics: '❌ Not available',
    gstCompliance: '❌ Not available',
    support: 'Limited',
    languages: 'English only',
    paymentGateways: '2-3 options',
    freeDemo: '⚠️ Limited',
    rating: 3.8,
    reviews: 23,
  },
];

const features = [
  { name: 'Compensation Plans', key: 'plans' },
  { name: 'Mobile Apps (iOS+Android)', key: 'mobileApps' },
  { name: 'Blockchain/Smart Contract', key: 'blockchain' },
  { name: 'AI Analytics', key: 'aiAnalytics' },
  { name: 'GST Compliance', key: 'gstCompliance' },
  { name: 'Customer Support', key: 'support' },
  { name: 'Language Support', key: 'languages' },
  { name: 'Payment Gateways', key: 'paymentGateways' },
  { name: 'Free Demo', key: 'freeDemo' },
];

function generateComparisonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best MLM Software Comparison 2026',
    description: 'Compare top MLM software providers in India',
    itemListElement: competitors.map((competitor, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: competitor.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: competitor.rating,
          reviewCount: competitor.reviews,
          bestRating: 5,
          worstRating: 1,
        },
      },
    })),
  };
}

export default function MLMComparisonPage() {
  return (
    <>
      <SchemaMarkup
        data={[
          generateOrganizationSchema(),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'MLM Software Comparison', url: '/mlm-software-comparison' },
          ]),
          generateFAQSchema(comparisonFAQs),
          generateComparisonSchema(),
        ]}
      />

      <Hero
        subtitle="2026 MLM Software Comparison Guide"
        title="Best MLM Software in India - Complete Feature & Price Comparison"
        description="Compare EifaSoft vs Epixel vs Infinite MLM vs LetsCMS. See features, pricing, and find the perfect network marketing software for your direct selling business."
        ctaPrimary={{ text: '🎯 Get Free Demo', href: '#contact' }}
        ctaSecondary={{ text: 'View Comparison', href: '#comparison' }}
        gradient="purple"
      />

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">29+</div>
              <div className="text-sm text-gray-600">MLM Plans</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">4.9★</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why You Need the Right MLM Software for Your Network Marketing Business
            </h2>
            <p className="text-gray-600 text-lg">
              Choosing the wrong MLM software can cost you lakhs in lost commissions, 
              frustrated distributors, and compliance issues. Use our unbiased comparison 
              to make the right decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="font-bold text-lg mb-2">Hidden Costs</h3>
              <p className="text-gray-600">
                Many providers advertise low prices but charge extra for mobile apps, 
                payment gateways, and essential features.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2">Compliance Risks</h3>
              <p className="text-gray-600">
                Non-compliant software can lead to GST penalties and legal issues. 
                Ensure your provider understands Indian regulations.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">Scalability</h3>
              <p className="text-gray-600">
                Budget software often fails when your network grows. Choose a platform 
                that scales with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              MLM Software Comparison Table - Top Network Marketing Software 2026
            </h2>
            <p className="text-gray-600">
              Side-by-side comparison of India&apos;s top MLM software providers
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`py-4 px-6 text-center ${
                        c.highlight ? 'bg-blue-600' : ''
                      }`}
                    >
                      <div className="text-2xl mb-1">{c.logo}</div>
                      <div className="font-bold">{c.name}</div>
                      {c.highlight && (
                        <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full">
                          RECOMMENDED
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing Row */}
                <tr className="border-b bg-blue-50">
                  <td className="py-4 px-6 font-semibold">Pricing</td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`py-4 px-6 text-center ${
                        c.highlight ? 'bg-blue-100' : ''
                      }`}
                    >
                      <div className="font-bold text-lg">{c.pricing}</div>
                      <div className="text-xs text-gray-500">{c.pricingNote}</div>
                    </td>
                  ))}
                </tr>

                {/* Rating Row */}
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Rating</td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`py-4 px-6 text-center ${
                        c.highlight ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-bold">{c.rating}</span>
                        <span className="text-gray-400 text-sm">
                          ({c.reviews})
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Feature Rows */}
                {features.map((feature, idx) => (
                  <tr key={feature.key} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-4 px-6 font-semibold">{feature.name}</td>
                    {competitors.map((c) => (
                      <td
                        key={c.name}
                        className={`py-4 px-6 text-center ${
                          c.highlight ? (idx % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50') : ''
                        }`}
                      >
                        {c[feature.key as keyof typeof c]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {competitors.map((c) => (
              <div
                key={c.name}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  c.highlight ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div
                  className={`py-4 px-6 ${
                    c.highlight ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{c.logo}</span>
                      <div>
                        <div className="font-bold text-lg">{c.name}</div>
                        <div className="text-sm opacity-80">{c.location}</div>
                      </div>
                    </div>
                    {c.highlight && (
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        #1 CHOICE
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">Price</span>
                    <span className="font-bold text-blue-600">{c.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rating</span>
                    <span>
                      ★ {c.rating} ({c.reviews} reviews)
                    </span>
                  </div>
                  {features.map((f) => (
                    <div key={f.key} className="flex justify-between items-center">
                      <span className="text-gray-600">{f.name}</span>
                      <span>{c[f.key as keyof typeof c]}</span>
                    </div>
                  ))}
                </div>
                {c.highlight && (
                  <div className="px-6 pb-6">
                    <Link
                      href="#contact"
                      className="block w-full py-3 bg-blue-600 text-white text-center font-bold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Free Demo →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EifaSoft Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why 500+ Businesses Choose EifaSoft
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="font-bold mb-2">Blockchain MLM</h3>
                <p className="text-sm opacity-90">
                  Only provider with smart contract integration
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold mb-2">AI Analytics</h3>
                <p className="text-sm opacity-90">
                  Predictive insights for growth
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl mb-3">🇮🇳</div>
                <h3 className="font-bold mb-2">India-First</h3>
                <p className="text-sm opacity-90">
                  GST, TDS, UPI - all built-in
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold mb-2">Apps Included</h3>
                <p className="text-sm opacity-90">
                  iOS & Android at no extra cost
                </p>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors text-lg"
            >
              🎯 Book Your Free Demo Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              True MLM Software Cost Comparison - All Features Included
            </h2>
            <p className="text-gray-600">
              See the real cost including all essential features
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">What You Get</th>
                    <th className="py-3 px-4 text-center">Infinite MLM</th>
                    <th className="py-3 px-4 text-center bg-blue-600">EifaSoft</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">Base Software (Binary)</td>
                    <td className="py-3 px-4 text-center">$700 (₹58,000)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Android App</td>
                    <td className="py-3 px-4 text-center">$400 (₹33,000)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">iOS App</td>
                    <td className="py-3 px-4 text-center">$500 (₹42,000)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Payment Gateway</td>
                    <td className="py-3 px-4 text-center">$400 (₹33,000)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Multi-language</td>
                    <td className="py-3 px-4 text-center">$150 (₹12,500)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Replicating Websites</td>
                    <td className="py-3 px-4 text-center">$250 (₹21,000)</td>
                    <td className="py-3 px-4 text-center bg-blue-50 font-bold">Included ✅</td>
                  </tr>
                  <tr className="bg-gray-200 font-bold">
                    <td className="py-4 px-4">TOTAL COST</td>
                    <td className="py-4 px-4 text-center text-red-600">₹1,99,500+</td>
                    <td className="py-4 px-4 text-center bg-blue-100 text-green-600">₹49,999</td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="py-3 px-4 font-bold text-yellow-800" colSpan={2}>
                      🎉 YOUR SAVINGS with EifaSoft
                    </td>
                    <td className="py-3 px-4 text-center text-green-700 font-bold text-xl">
                      ₹1,49,501 (75% OFF!)
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 px-4 font-semibold" colSpan={2}>
                      Extra with EifaSoft (No Extra Cost)
                    </td>
                    <td className="py-3 px-4 text-center text-green-600 font-bold">
                      GST, AI Analytics, Blockchain option
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              * Prices based on publicly available information. Contact vendors for exact quotes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={comparisonFAQs} />

      {/* Explore MLM Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore All MLM Compensation Plan Software
            </h2>
            <p className="text-gray-600">Compare features across different MLM plan types</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {[
              { name: 'Binary Plan MLM', href: '/binary-plan-mlm-software' },
              { name: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software' },
              { name: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software' },
              { name: 'Generation Plan MLM', href: '/generation-plan-mlm-software' },
              { name: 'Board Plan MLM', href: '/board-plan-mlm-software' },
              { name: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software' },
              { name: 'Smart Contract MLM', href: '/smart-contract-mlm-software' },
              { name: 'Cryptocurrency MLM', href: '/cryptocurrency-mlm-software' },
              { name: 'Single Leg MLM', href: '/single-leg-plan-mlm-software' },
              { name: 'Party Plan MLM', href: '/party-plan-mlm-software' },
              { name: 'Gift Plan MLM', href: '/gift-plan-mlm-software' },
              { name: 'ROI Plan MLM', href: '/roi-plan-mlm-software' }
            ].map((plan, idx) => (
              <Link
                key={idx}
                href={plan.href}
                className="bg-white p-4 rounded-lg text-center border border-purple-200 hover:shadow-lg hover:border-purple-400 transition-all"
              >
                <span className="text-purple-700 font-semibold">{plan.name}</span>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/mlm-software" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-purple-100">All-in-one solution</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Pricing</h3>
              <p className="text-green-100">Transparent pricing</p>
            </Link>
            <Link href="/mlm-software-developer" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hire MLM Developers</h3>
              <p className="text-blue-100">Custom development</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Your Free MLM Software Demo
              </h2>
              <p className="text-gray-300">
                See EifaSoft in action! Our experts will show you how our MLM software 
                can transform your business. No obligations, completely free.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

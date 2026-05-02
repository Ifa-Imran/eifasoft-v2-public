import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Binary Plan MLM Software | Best Binary MLM Software Development Company | EifaSoft',
    description: 'Best Binary Plan MLM Software with left-right leg structure, automatic spillover system, pair matching commission, leg balancing, and automated commission calculations. Most popular network marketing compensation plan. Affordable binary MLM software starting ₹1,00,000. Mobile apps, e-wallet, genealogy tree included.',
    canonical: '/binary-plan-mlm-software',
    keywords: [
      'binary plan MLM software',
      'binary MLM software',
      'binary compensation plan',
      'binary compensation plan software',
      'binary network marketing software',
      'binary tree MLM software',
      'left-right binary plan',
      'spillover binary MLM',
      'spillover binary MLM software',
      'pair matching system',
      'pair matching commission',
      'binary MLM development',
      'binary tree MLM',
      'binary capping system',
      'binary MLM app',
      'best binary MLM software',
      'affordable binary MLM software',
      'binary MLM commission calculator',
      'binary plan software india',
      'two-leg MLM software',
      'custom binary MLM development',
      'binary plan development company',
      'binary plan software price',
      'MLM binary dashboard',
      'binary plan demo',
      'binary leg balancing software',
      'binary MLM calculator',
      'binary MLM software with source code',
      'binary MLM mobile app',
      'binary MLM e-wallet',
      'binary genealogy tree',
      'binary commission tracking software',
      'binary plan MLM software India',
      'best binary compensation plan software',
      'binary MLM software free demo',
      'binary MLM software price'
    ],
  });
}

export default function BinaryPlanMLMSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'Binary Plan MLM Software Development',
    'Professional Binary Plan MLM software with two-leg structure, spillover system, pair matching commission, and comprehensive genealogy tree. Most popular and profitable MLM compensation plan.',
    'https://www.eifasoft.com/binary-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Binary Plan MLM Software',
    'Complete Binary MLM software with left-right leg structure and automated commission calculations',
    '100000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Binary MLM Software',
    description: 'Specialized Binary Plan MLM software with two-leg structure, automatic spillover, pair matching commission system, genealogy tree, and real-time analytics for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '100000',
    rating: 4.9,
    reviewCount: 120,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
    'article p:first-of-type',
  ]);

  const faqs = [
    {
      question: 'What is Binary Plan in MLM and how does it work?',
      answer: 'Binary Plan is the most popular MLM compensation plan where each member recruits only two direct downlines, creating a left leg and a right leg. As the network grows, members below the second level "spillover" into the downline of existing members. Commissions are calculated based on pairs matched between the left and right legs. For example, if you have 10 members on the left and 15 on the right, you earn commission on 10 pairs, and the remaining 5 members carry forward to the next cycle. This spillover feature makes Binary Plans highly attractive for team building.',
    },
    {
      question: 'What are the advantages of Binary Plan MLM Software?',
      answer: 'Binary Plan offers multiple advantages: 1) Simple structure - easy to explain and understand for new members, 2) Spillover benefit - upline members help build your downline automatically, 3) Team cooperation - encourages teamwork as everyone benefits from group efforts, 4) Unlimited depth - no limit on how deep your network can grow, 5) Fast growth - with only 2 legs, the network expands rapidly, 6) Balanced earning - commissions based on weaker leg prevents one-sided growth, 7) Motivation - spillover keeps members motivated to recruit. It&apos;s the most profitable plan for both the company and distributors.',
    },
    {
      question: 'How are commissions calculated in Binary Plan?',
      answer: 'Binary Plan commissions are calculated using pair matching between left and right legs. Common commission types include: 1) Pair Commission - fixed amount per matched pair (e.g., ₹500 per pair), 2) Percentage Commission - percentage of weaker leg sales volume (e.g., 10% of weaker leg), 3) Capping - maximum earning limit per day/week (e.g., max 10 pairs per day), 4) Flush Out - excess members from stronger leg carry forward or are flushed, 5) Sponsor Bonus - direct referral bonus, 6) Matching Bonus - bonus on downline earnings. Our software supports all commission structures with real-time calculations.',
    },
    {
      question: 'What is spillover in Binary Plan MLM?',
      answer: 'Spillover is a unique feature of Binary Plans where new members recruited by your upline "spill over" into your downline when their two direct positions are filled. For example, if your sponsor recruits a third member, that member automatically becomes part of your downline. This creates passive team building without your direct effort. Spillover motivates upline members to keep recruiting as it benefits their entire downline. Our software manages spillover placement automatically based on customizable rules like left-to-right, right-to-left, or balanced placement.',
    },
    {
      question: 'What is the cost of Binary Plan MLM Software?',
      answer: 'Our Binary Plan MLM Software pricing starts from ₹1,00,000 for basic features (up to 1,000 members, standard commission engine, e-wallet, admin panel). Advanced packages with mobile apps, e-commerce integration, and unlimited members range from ₹2,50,000 to ₹5,00,000. Enterprise solutions with blockchain, multi-currency, and custom features cost ₹5,00,000+. Price includes source code, installation, training, and 6-12 months support. We offer installment plans and customized pricing based on your specific requirements.',
    },
    {
      question: 'Can I customize the Binary Plan MLM Software according to my business rules?',
      answer: 'Absolutely! Our Binary Plan software is fully customizable. You can configure: 1) Commission rates and calculation methods, 2) Capping limits and payout cycles, 3) Spillover placement rules, 4) Leg balancing requirements, 5) Joining packages and pricing, 6) Rank advancement criteria, 7) Bonus and incentive structures, 8) Branding (logo, colors, domain), 9) Custom fields and modules, 10) Integration with payment gateways, SMS, email. We provide both web-based configuration and code-level customization for unique requirements.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'MLM Software', url: 'https://www.eifasoft.com/mlm-software-development-company' },
    { name: 'Binary Plan', url: 'https://www.eifasoft.com/binary-plan-mlm-software' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Binary Plan MLM Software - Best Two-Leg Network Marketing Solution"
        subtitle="Most Popular MLM Compensation Plan | Automatic Spillover | Pair Matching Commissions"
        description="Launch your Binary MLM network with powerful two-leg structure software. Automated spillover system, pair matching commissions, balanced growth algorithm, and real-time genealogy tree. Perfect for fast network growth. Starting ₹1,00,000."
        gradient="purple"
      />

      {/* What is Binary Plan - Definition for AI Overviews */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Binary Plan MLM?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Binary Plan MLM</strong> is a network marketing compensation structure where each distributor can have only two direct downlines, creating a left leg and a right leg. When a member recruits more than two people, additional recruits &quot;spill over&quot; into the downline of existing members. Commissions are calculated based on matched pairs between the left and right legs. Binary Plan is the most popular MLM compensation plan worldwide due to its simplicity, spillover benefits, and potential for rapid team growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways for AI Extraction */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Two-leg structure (left + right) for balanced growth
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Automatic spillover places excess members automatically
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pricing starts at ₹1,00,000 for Basic Binary
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pair matching, percentage, and capped commission types
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Most popular MLM plan worldwide
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Unlimited depth with no level restrictions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Binary Plan Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Binary Plan MLM Works</h2>
              <p className="text-lg text-gray-600">
                Simple yet powerful two-leg network structure for exponential growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Binary Tree Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Two Legs Only</p>
                      <p className="text-gray-600 text-sm">Each member can have maximum 2 direct downlines - left leg and right leg</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Spillover Placement</p>
                      <p className="text-gray-600 text-sm">Third and subsequent recruits automatically place below existing members</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">3</span>
                    <div>
                      <p className="font-semibold">Unlimited Depth</p>
                      <p className="text-gray-600 text-sm">Network can grow infinitely deep with no level restrictions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">4</span>
                    <div>
                      <p className="font-semibold">Pair Matching</p>
                      <p className="text-gray-600 text-sm">Earn commissions when left and right legs are balanced and form pairs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-bold">YOU</div>
                  </div>
                  <div className="flex justify-center gap-16 mb-4">
                    <div>
                      <div className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm mb-2">Left Leg</div>
                      <div className="text-xs text-gray-600">Member A</div>
                    </div>
                    <div>
                      <div className="bg-green-500 text-white px-3 py-2 rounded-full text-sm mb-2">Right Leg</div>
                      <div className="text-xs text-gray-600">Member B</div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-8">
                    <div className="text-xs">
                      <div className="bg-blue-300 text-blue-900 px-2 py-1 rounded mb-1">C</div>
                      <div className="bg-blue-300 text-blue-900 px-2 py-1 rounded">D</div>
                    </div>
                    <div className="text-xs">
                      <div className="bg-green-300 text-green-900 px-2 py-1 rounded mb-1">E</div>
                      <div className="bg-green-300 text-green-900 px-2 py-1 rounded">F</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">Spillover places new members automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Binary Plan Software Features</h2>
            <p className="text-lg text-gray-600">
              Comprehensive features to manage your binary MLM network effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: 'Automatic Spillover',
                description: 'Smart placement algorithm automatically positions new members in left or right leg based on configurable rules',
                icon: '🔄',
              },
              {
                feature: 'Pair Matching Commission',
                description: 'Real-time calculation of commissions based on matched pairs between left and right legs',
                icon: '💰',
              },
              {
                feature: 'Genealogy Tree',
                description: 'Visual binary tree showing complete network structure with left-right balance indicators',
                icon: '🌳',
              },
              {
                feature: 'Capping & Carry Forward',
                description: 'Daily/weekly earning limits with automatic carry forward of excess pairs to next cycle',
                icon: '📊',
              },
              {
                feature: 'Leg Balancing',
                description: 'Commission on weaker leg ensures members focus on balanced team building',
                icon: '⚖️',
              },
              {
                feature: 'Sponsor Bonus',
                description: 'Direct referral bonus for recruiting new members into your network',
                icon: '🎁',
              },
              {
                feature: 'Matching Bonus',
                description: 'Earn percentage of commissions earned by your direct downline members',
                icon: '🎯',
              },
              {
                feature: 'E-Wallet System',
                description: 'Integrated wallet for commission deposits, withdrawals, and fund management',
                icon: '💳',
              },
              {
                feature: 'Real-time Reports',
                description: 'Detailed reports on pairs, commissions, team volume, and network growth analytics',
                icon: '📈',
              },
            ].map((item) => (
              <div key={item.feature} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.feature}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Binary Plan Commission Types</h2>
            <p className="text-lg text-gray-600">
              Multiple commission structures to maximize distributor earnings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                type: 'Pair Commission',
                description: 'Fixed commission amount for each matched pair between left and right legs',
                example: 'Example: ₹500 per pair. If 10 pairs match, earn ₹5,000',
                formula: 'Commission = Number of Pairs × Fixed Amount',
              },
              {
                type: 'Percentage Commission',
                description: 'Percentage of business volume from the weaker leg',
                example: 'Example: 10% of weaker leg. If left = ₹1L, right = ₹2L, earn ₹10,000',
                formula: 'Commission = Min(Left, Right) × Percentage',
              },
              {
                type: 'Capped Commission',
                description: 'Daily or weekly maximum earning limit with carry forward',
                example: 'Example: Max 10 pairs/day. Extra pairs carry to next day',
                formula: 'Daily Cap = Maximum Pairs × Pair Value',
              },
              {
                type: 'Sponsor Bonus',
                description: 'Direct referral bonus for personally recruited members',
                example: 'Example: ₹2,000 for each direct recruit',
                formula: 'Bonus = Direct Recruits × Fixed Amount',
              },
            ].map((commission) => (
              <div key={commission.type} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-100">
                <h3 className="text-xl font-bold mb-3 text-purple-700">{commission.type}</h3>
                <p className="text-gray-700 mb-3">{commission.description}</p>
                <div className="bg-white p-3 rounded mb-2">
                  <p className="text-sm text-gray-600 italic">{commission.example}</p>
                </div>
                <div className="bg-purple-700 text-white p-2 rounded text-sm font-mono">
                  {commission.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Admin Control Panel Features</h2>
            <p className="text-lg text-gray-600">
              Complete control over your binary MLM network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Member management (add, edit, activate, deactivate)',
              'Commission configuration (rates, caps, bonuses)',
              'Genealogy tree visualization with filters',
              'Payment processing (payouts, withdrawals)',
              'E-wallet management and fund transfers',
              'Joining package configuration',
              'Placement rule customization',
              'Rank and achievement management',
              'Email & SMS template management',
              'Sales and revenue reports',
              'Payout history and pending requests',
              'Tax and TDS management',
            ].map((feature) => (
              <div key={feature} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <span className="text-purple-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Binary Plan MLM Software Pricing</h2>
            <p className="text-lg text-gray-600">
              Affordable packages for startups to enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Binary',
                price: '₹1,00,000',
                features: [
                  'Up to 1,000 members',
                  'Binary tree structure',
                  'Pair matching commission',
                  'Basic admin panel',
                  'E-wallet integration',
                  'Genealogy tree',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
              },
              {
                name: 'Advanced Binary',
                price: '₹2,50,000',
                features: [
                  'Up to 10,000 members',
                  'All commission types',
                  'Advanced admin panel',
                  'Mobile responsive',
                  'E-commerce integration',
                  'Replicated websites',
                  '12 months support',
                  'Priority support',
                  'Free updates 1 year',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Binary',
                price: 'Custom',
                features: [
                  'Unlimited members',
                  'Mobile apps (iOS/Android)',
                  'Multi-currency support',
                  'Blockchain integration',
                  'Custom features',
                  'Dedicated server',
                  'Lifetime support',
                  'White-label solution',
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-purple-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Related MLM Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Other MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare Binary Plan with other MLM software solutions to find the best fit for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
            {[
              { name: 'Spillover Binary Plan', href: '/spillover-binary-plan-mlm-software', desc: 'Auto-fill binary' },
              { name: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Forced matrix' },
              { name: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width' },
              { name: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Generational bonus' },
              { name: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix' },
              { name: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Custom combinations' },
              { name: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-based' },
              { name: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Home-based selling' }
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-purple-700 font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/mlm-software" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-purple-100">All-in-one solution</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Pricing</h3>
              <p className="text-green-100">Transparent pricing</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Compare MLM Software</h3>
              <p className="text-blue-100">Feature comparison</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your Binary MLM Network Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your binary network marketing business with our proven software solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/mlm-software-price"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Binary Plan MLM Software</h2>
              <p className="text-lg text-gray-600">
                Fill the form and our MLM experts will contact you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

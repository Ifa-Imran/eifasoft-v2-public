import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Gift Plan MLM Software | Gift Exchange MLM Software | EifaSoft',
    description: 'Best Gift Plan MLM Software with gift exchange system, member-to-member gifting, and reward tracking. Powerful gift MLM software starting ₹2,00,000.',
    canonical: '/gift-plan-mlm-software',
    keywords: ['gift plan MLM software', 'gift exchange MLM', 'gift MLM software', 'member to member gifting', 'gift reward system', 'MLM gift plan', 'peer to peer gifting MLM', 'gift tracking software', 'MLM donation software', 'gift plan india', 'gift exchange MLM development', 'gifting MLM app', 'gift box MLM software', 'gift reward MLM india', 'gift plan moradabad', 'automated gifting MLM', 'gift cycle MLM', 'gift based network marketing', 'peer gifting software', 'gift plan development company', 'gift exchange platform MLM', 'gifting network marketing'],
  });
}

export default function GiftPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Gift Plan MLM Software Development',
    'Comprehensive gift plan MLM software with member-to-member gift exchange, automated gift matching, reward tracking, and compliance management.',
    '/gift-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Gift Plan MLM Software',
    'Complete gift plan MLM software solution with gift exchange system, automated matching, gift tracking, and member dashboard.',
    '2,00,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Gift Plan MLM Software',
    description: 'Specialized Gift Plan MLM software with member-to-member gift exchange, automated gift matching, reward tracking, and compliance management.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '200000',
    rating: 4.7,
    reviewCount: 62,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Gift Plan in MLM?',
      answer: 'Gift Plan is an MLM compensation structure where members give gifts directly to other members in exchange for receiving gifts from new members joining below them. Also known as peer-to-peer gifting or member-to-member exchange, this plan operates without direct company involvement in gift transactions. Members typically give gifts (cash, products, or vouchers) to their upline or sponsors and receive gifts from their downline.'
    },
    {
      question: 'How does Gift Plan MLM work?',
      answer: 'In Gift Plan MLM, when you join, you give a gift to a designated member (usually your sponsor or a member higher in the structure). As you recruit new members, they give gifts to you. The system tracks gift giving and receiving, matches donors with recipients, manages gift levels (e.g., Level 1: ₹1,000 gift, Level 2: ₹5,000 gift), and ensures fair distribution. Some plans use multiple gift levels where members advance by giving and receiving specified gifts.'
    },
    {
      question: 'Is Gift Plan MLM legal?',
      answer: 'Gift Plan legality depends on implementation and local regulations. Legal gift plans: have genuine product/service offerings, don\'t guarantee returns, clearly disclose all terms, don\'t require ongoing purchases. Illegal schemes: promise guaranteed returns, require continuous recruitment to profit, lack real products/services, misrepresent as "gifts" to avoid regulations. Our software includes compliance features and disclaimers, but legal consultation is essential.'
    },
    {
      question: 'What are the different types of Gift Plans?',
      answer: 'Common gift plan types include: 1) Single Level Gift Plan (one-time gift exchange), 2) Multi-Level Gift Plan (gifts at multiple levels as you advance), 3) Cycler Gift Plan (gifts rotate through cycles, re-entry after completion), 4) Matrix Gift Plan (gift exchange within a fixed matrix structure), 5) Board Gift Plan (gifts given when board positions fill). Each type has different gift amounts, recipient rules, and advancement criteria.'
    },
    {
      question: 'How are gifts tracked in the software?',
      answer: 'Our Gift Plan MLM Software tracks: gift sent (who gave, to whom, amount, date, proof of payment), gift received (who from, amount, date, verification status), pending gifts (awaiting fulfillment), gift history (complete transaction log), matching algorithm (automatic donor-recipient pairing), verification system (upload payment proof, admin approval), notifications (alerts for pending gifts, received gifts).'
    },
    {
      question: 'What is the gift matching system?',
      answer: 'The gift matching system automatically pairs gift donors with recipients based on: joining order (FIFO - First In First Out), sponsor tree position, matrix placement, board position, or custom rules. When a new member joins and gives a gift, the system identifies the qualified recipient, sends notifications to both parties, tracks gift transfer, verifies completion, and advances members to next level upon verification.'
    },
    {
      question: 'Can members give gifts in cash or products?',
      answer: 'Gift plans can support multiple gift types: Cash gifts (bank transfer, UPI, cash), Product gifts (physical products, e-vouchers, gift cards), Service vouchers, Cryptocurrency, Points/credits. Our software allows configuration of accepted gift types, minimum/maximum amounts, verification requirements, and proof of transfer submission for each type.'
    },
    {
      question: 'What features does your Gift Plan MLM software include?',
      answer: 'Features include: automated gift matching engine, member-to-member gift tracking, proof of payment upload system, gift verification and approval workflow, multiple gift levels configuration, gift history and reporting, automated notifications (email/SMS), genealogy tree with gift status, member dashboard showing pending/completed gifts, admin panel for monitoring and verification, compliance management tools.'
    },
    {
      question: 'How do you handle non-payment of gifts?',
      answer: 'Our software includes non-payment protection: automated reminders to members with pending gifts, escalation to admin after X days, temporary account suspension for non-compliance, dispute resolution system, payment deadline tracking, manual intervention options for admins, refund/replacement policies configuration, member rating system based on gift fulfillment history.'
    },
    {
      question: 'What is the pricing for Gift Plan MLM software?',
      answer: 'Gift Plan MLM software starts at ₹2,00,000 for basic features (up to 1000 members, single gift level, basic matching, verification system). Advanced package at ₹4,00,000 includes unlimited members, multiple gift levels, advanced matching algorithms, mobile apps. Enterprise solutions with custom gift types, compliance features, legal documentation, and integrations available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Gift Plan MLM Software', url: '/gift-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Gift Plan MLM Software Development"
        subtitle="Powerful gift exchange MLM software with automated matching, gift tracking, and member-to-member transfer system"
        description="Build your gift-based MLM business with secure gift exchange software"
        gradient="purple"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-pink-900 mb-3">What is Gift Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Gift Plan MLM Software</strong> is a specialized compensation platform for member-to-member gift exchange network marketing. When members join, they give gifts to designated members and receive gifts from new members joining below them. The software automates gift matching, tracks all gift transactions, verifies payment proofs, and ensures fair distribution according to plan rules. This peer-to-peer model operates without direct company involvement in gift transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-pink-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">P2P Gift Exchange</p>
                  <p className="text-sm text-gray-600">Member-to-member transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Automated Matching</p>
                  <p className="text-sm text-gray-600">Smart donor-recipient pairing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Level Gifts</p>
                  <p className="text-sm text-gray-600">Progressive gift level advancement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹2,00,000</p>
                  <p className="text-sm text-gray-600">Complete gift tracking platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Gift Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Gift Plan MLM Software is a specialized compensation system where members participate in <strong>peer-to-peer gift exchange</strong>. When a member joins, they give a gift to a designated member (typically their sponsor or someone higher in the structure), and as they recruit new members, they receive gifts from those joining below them.
              </p>
              <p>
                This plan operates on the principle of <strong>member-to-member transactions</strong> rather than company-to-member payments. Gifts can be cash, products, vouchers, or other items of value. The software automates the matching process, tracks all gift transactions, verifies payment proofs, and ensures fair distribution according to the plan rules.
              </p>
              <p>
                Our Gift Plan MLM Software provides automated gift matching, real-time tracking, verification workflows, compliance management, and comprehensive reporting to manage gift-based MLM businesses efficiently and transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Gift Plan Works */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Gift Plan Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-pink-700 text-center">Multi-Level Gift Exchange Process</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                  <div className="flex items-start">
                    <div className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">New Member Joins & Gives Gift</h4>
                      <p className="text-gray-700 text-sm mb-2">Member A joins and gives Level 1 gift (₹1,000) to their sponsor Member B as per plan rules.</p>
                      <div className="bg-white p-3 rounded text-xs">
                        <p><strong>Gift Details:</strong> ₹1,000 via UPI/Bank Transfer</p>
                        <p><strong>Recipient:</strong> Sponsor (Member B)</p>
                        <p><strong>Proof:</strong> Upload transaction screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">System Matches & Notifies</h4>
                      <p className="text-gray-700 text-sm mb-2">Software automatically identifies recipient, sends notification to both parties with payment details.</p>
                      <div className="bg-white p-3 rounded text-xs">
                        <p><strong>To Member A:</strong> &quot;Give ₹1,000 gift to Member B (UPI: member-b@upi)&quot;</p>
                        <p><strong>To Member B:</strong> &quot;Expect ₹1,000 gift from Member A&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Gift Transfer & Verification</h4>
                      <p className="text-gray-700 text-sm mb-2">Member A sends gift, uploads proof, Member B verifies receipt, admin approves transaction.</p>
                      <div className="bg-white p-3 rounded text-xs grid grid-cols-3 gap-2">
                        <div>
                          <p className="font-semibold text-green-700">Sent</p>
                          <p>Upload proof</p>
                        </div>
                        <div>
                          <p className="font-semibold text-blue-700">Verified</p>
                          <p>Recipient confirms</p>
                        </div>
                        <div>
                          <p className="font-semibold text-purple-700">Approved</p>
                          <p>Admin validates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Member Receives Gifts & Advances</h4>
                      <p className="text-gray-700 text-sm mb-2">As Member A recruits 2 members, they receive 2 × ₹1,000 = ₹2,000 in gifts. Can advance to Level 2.</p>
                      <div className="bg-white p-3 rounded text-xs">
                        <p><strong>Gifts Received:</strong> ₹2,000 (from 2 recruits)</p>
                        <p><strong>Net Earning:</strong> ₹2,000 - ₹1,000 (given) = ₹1,000 profit</p>
                        <p><strong>Status:</strong> Qualified for Level 2 (₹5,000 gift level)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Levels Example */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-pink-700 text-center">Multi-Level Gift Structure</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { level: 'Level 1', gift: '₹1,000', receive: '₹2,000', recruits: '2 members', net: '₹1,000' },
                  { level: 'Level 2', gift: '₹5,000', receive: '₹10,000', recruits: '2 members', net: '₹5,000' },
                  { level: 'Level 3', gift: '₹10,000', receive: '₹20,000', recruits: '2 members', net: '₹10,000' },
                  { level: 'Level 4', gift: '₹25,000', receive: '₹50,000', recruits: '2 members', net: '₹25,000' },
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg border-2 border-pink-200">
                    <div className="text-center">
                      <div className="bg-pink-600 text-white px-3 py-1 rounded-full font-bold text-sm mb-3">{item.level}</div>
                      <div className="space-y-2 text-xs">
                        <div className="bg-white p-2 rounded">
                          <p className="text-gray-600">Give</p>
                          <p className="font-bold text-red-600">{item.gift}</p>
                        </div>
                        <div className="bg-white p-2 rounded">
                          <p className="text-gray-600">Receive</p>
                          <p className="font-bold text-green-600">{item.receive}</p>
                        </div>
                        <div className="bg-white p-2 rounded">
                          <p className="text-gray-600">From</p>
                          <p className="font-semibold">{item.recruits}</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded border border-green-300">
                          <p className="text-gray-600">Net Profit</p>
                          <p className="font-bold text-green-700 text-base">{item.net}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Total Potential:</strong> Progress through all 4 levels = ₹1,000 + ₹5,000 + ₹10,000 + ₹25,000 = <strong className="text-green-700 text-lg">₹41,000 net profit</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Gift Plan Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Automated Gift Matching',
                description: 'Intelligent matching algorithm pairs gift donors with recipients based on joining order, sponsor tree, or custom rules. Real-time notifications.',
                icon: '🎯'
              },
              {
                title: 'Gift Tracking System',
                description: 'Complete gift transaction history. Track pending, sent, received, and verified gifts. Member dashboard shows all gift activities.',
                icon: '📊'
              },
              {
                title: 'Proof Upload & Verification',
                description: 'Members upload payment proof (screenshots, receipts). Recipients verify receipt. Admin approval workflow for final validation.',
                icon: '✅'
              },
              {
                title: 'Multi-Level Gift Configuration',
                description: 'Configure unlimited gift levels with different amounts. Set advancement criteria, required recruits, and gift values for each level.',
                icon: '🎁'
              },
              {
                title: 'Payment Method Flexibility',
                description: 'Support multiple gift types: cash (UPI, bank transfer), products, vouchers, cryptocurrency. Configure accepted methods per level.',
                icon: '💳'
              },
              {
                title: 'Automated Notifications',
                description: 'Email/SMS alerts for: new gift to give, gift received, verification pending, approval status, level advancement, reminders.',
                icon: '🔔'
              },
              {
                title: 'Compliance Management',
                description: 'Built-in disclaimers, terms & conditions, legal notices. No guarantee of returns. Clear disclosure of peer-to-peer nature.',
                icon: '⚖️'
              },
              {
                title: 'Non-Payment Protection',
                description: 'Automated reminders for pending gifts, escalation system, account suspension for non-compliance, dispute resolution tools.',
                icon: '🛡️'
              },
              {
                title: 'Genealogy Tree',
                description: 'Visual tree showing gift flow, member positions, gift status (pending/completed), and downline gift expectations.',
                icon: '🌳'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Matching Algorithms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Gift Matching Algorithms</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sponsor-Based Matching',
                  description: 'New members give gifts to their direct sponsor. Simple and straightforward.',
                  example: 'Member A sponsors Member B → Member B gives gift to Member A',
                  color: 'blue'
                },
                {
                  title: 'FIFO (First In First Out)',
                  description: 'First member at a level receives gifts first, then next in line. Fair queue system.',
                  example: 'Members in order: A, B, C. New member D gives gift to A (first in queue)',
                  color: 'green'
                },
                {
                  title: 'Matrix-Based Matching',
                  description: 'Gifts flow based on matrix position. When matrix fills, gifts go to members in completed positions.',
                  example: '2×2 matrix: Position fills → Member receives 4 gifts, advances to next matrix',
                  color: 'purple'
                },
                {
                  title: 'Board-Based Matching',
                  description: 'Gifts distributed when board positions complete. Board splits create multiple gift recipients.',
                  example: '3×3 board: 9 positions fill → Center member receives 9 gifts, board splits',
                  color: 'pink'
                }
              ].map((algo, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${algo.color}-500`}>
                  <h3 className={`text-xl font-bold mb-3 text-${algo.color}-700`}>{algo.title}</h3>
                  <p className="text-gray-700 mb-3">{algo.description}</p>
                  <div className={`bg-${algo.color}-50 p-3 rounded text-sm`}>
                    <p className="font-semibold text-gray-800">Example:</p>
                    <p className="text-gray-600">{algo.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Gift Plan Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Gift Plan',
                price: '₹2,00,000',
                features: [
                  'Up to 1,000 members',
                  'Single gift level',
                  'Sponsor-based matching',
                  'Basic gift tracking',
                  'Proof upload system',
                  'Member dashboard',
                  'Admin panel',
                  'Email notifications',
                  'Basic reports',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Gift Plan',
                price: '₹4,00,000',
                features: [
                  'Unlimited members',
                  'Multiple gift levels (up to 10)',
                  'Advanced matching (FIFO/Matrix/Board)',
                  'Complete gift tracking',
                  'Verification workflow',
                  'Mobile app included',
                  'SMS + Email alerts',
                  'Genealogy tree',
                  'Advanced analytics',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Gift Plan',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Unlimited gift levels',
                  'Custom matching algorithms',
                  'Multi-currency support',
                  'Cryptocurrency integration',
                  'Compliance documentation',
                  'Legal disclaimer templates',
                  'White-label solution',
                  'Dedicated server',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-pink-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-pink-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-pink-600 text-white hover:bg-pink-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4">⚠️</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Compliance & Important Disclaimer</h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
                    <p>
                      <strong>Gift Plans require careful legal consideration.</strong> Our software includes compliance features, but you must consult with legal experts in your jurisdiction before launching.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                      <p className="font-semibold mb-2">Required Disclosures:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>No guarantee of gift receipt or returns</li>
                        <li>Clear peer-to-peer nature (not company-paid commissions)</li>
                        <li>Voluntary participation statement</li>
                        <li>Risk disclosure (gifts depend on new member recruitment)</li>
                        <li>No investment promise language</li>
                        <li>Compliance with local MLM/direct selling regulations</li>
                      </ul>
                    </div>
                    <p className="text-sm">
                      Our software includes customizable legal disclaimer templates, terms & conditions generators, and compliance management tools to help you meet regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Compare different MLM structures to find the best fit for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width single-level commissions' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Rank-based generational bonuses' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with position advancement' },
              { title: 'Helping Plan MLM', href: '/helping-plan-mlm-software', desc: 'Community-based mutual aid system' },
              { title: 'Donation Plan MLM', href: '/donation-plan-mlm-software', desc: 'Peer-to-peer donation tracking' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-purple-100">
                <h3 className="text-purple-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 rounded-lg text-center hover:from-pink-700 hover:to-rose-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-rose-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right MLM platform</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactForm />
    </>
  );
}

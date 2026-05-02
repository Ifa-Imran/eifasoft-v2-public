import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Helping Plan MLM Software | Mutual Help MLM Software | EifaSoft',
    description: 'Best Helping Plan MLM Software with peer-to-peer help exchange, mutual aid system, and community support. Powerful helping MLM software starting ₹2,50,000.',
    canonical: '/helping-plan-mlm-software',
    keywords: ['helping plan MLM software', 'mutual help MLM', 'helping MLM software', 'peer to peer help', 'mutual aid software', 'community help MLM', 'donation help plan', 'help exchange software', 'crowdfunding MLM', 'mutual help platform MLM', 'helping plan india', 'helping software development company', 'crowd helping software', 'mutual help plan moradabad', 'helping MLM app', 'community fund MLM', 'peer to peer helping platform', 'sharing economy MLM software', 'donation based network marketing', 'P2P help MLM', 'help pool MLM software', 'charity MLM software india'],
  });
}

export default function HelpingPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Helping Plan MLM Software Development',
    'Comprehensive helping plan MLM software with peer-to-peer help exchange, mutual aid tracking, automated matching, and community support management.',
    '/helping-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Helping Plan MLM Software',
    'Complete helping plan MLM software solution with help exchange system, member-to-member aid, automated matching, and tracking dashboard.',
    '2,50,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Helping Plan MLM Software',
    description: 'Specialized Helping Plan MLM software with peer-to-peer help exchange, mutual aid tracking, automated matching, and community support management.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '250000',
    rating: 4.6,
    reviewCount: 58,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Helping Plan in MLM?',
      answer: 'Helping Plan (also called Mutual Help Plan or Peer-to-Peer Help Plan) is an MLM structure where members provide financial help directly to other members in the network. When you join, you provide help to a designated member, and as new members join below you, they provide help to you. The system operates on mutual aid principles with member-to-member transactions, creating a community-based support network.'
    },
    {
      question: 'How does Helping Plan differ from Gift Plan?',
      answer: 'While similar, Helping Plan emphasizes "help" or "mutual aid" rather than "gifts." Key differences: Helping Plan often frames transactions as community support or assistance, may have philanthropic or social mission, uses language like "provide help" vs "give gift," sometimes includes charity or social cause elements. Functionally, both involve peer-to-peer transfers, but Helping Plans often emphasize the community/mutual benefit aspect more strongly.'
    },
    {
      question: 'What are the different types of Helping Plans?',
      answer: 'Common helping plan structures: 1) Linear Helping Plan (help flows in linear sequence through members), 2) Matrix Helping Plan (help exchange within matrix structure, spillover benefits), 3) Binary Helping Plan (help from left/right legs, matching concept), 4) Cycler Helping Plan (help cycles, re-entry after completion), 5) Stage-Based Helping Plan (progressive stages with increasing help amounts). Each type has different help amounts, matching rules, and advancement criteria.'
    },
    {
      question: 'Is Helping Plan MLM legal?',
      answer: 'Helping Plan legality varies by jurisdiction and implementation. Legal considerations: Must not promise guaranteed returns or profits, Should have clear peer-to-peer nature disclosure, Requires voluntary participation statements, Must comply with local MLM/direct selling laws, Should avoid pyramid scheme characteristics (reliance solely on recruitment). Our software includes compliance features, but legal consultation is essential before launching.'
    },
    {
      question: 'How does the help matching system work?',
      answer: 'The help matching system automatically pairs help providers with recipients based on: joining sequence (FIFO), sponsor tree position, matrix placement, stage/level criteria, or custom algorithms. When a member joins and provides help, the system identifies qualified recipient, sends payment details to provider, notifies recipient of expected help, tracks transfer and verification, advances members upon confirmation.'
    },
    {
      question: 'What help amounts are typical in Helping Plans?',
      answer: 'Help amounts vary widely by plan structure. Common examples: Entry Level: ₹500-₹2,000, Stage 1: ₹5,000-₹10,000, Stage 2: ₹15,000-₹25,000, Stage 3: ₹50,000-₹1,00,000, Premium Stages: ₹2,00,000+. Multi-stage plans typically require members to provide smaller help amounts first, then receive larger help from multiple members, creating potential for multiplication.'
    },
    {
      question: 'How is help tracked and verified?',
      answer: 'Our software tracks: Help provided (who, to whom, amount, date, payment proof), Help received (from whom, amount, verification status), Pending help (awaiting fulfillment), Help history (complete transaction log), Payment proofs (upload screenshots, receipts), Verification workflow (recipient confirms, admin approves), Automated reminders for pending help, Dispute resolution system for non-payment issues.'
    },
    {
      question: 'What features does your Helping Plan MLM software include?',
      answer: 'Key features include: automated help matching engine, member-to-member help tracking, payment proof upload and verification, multi-stage help configuration, help request and fulfillment system, genealogy tree with help status, automated email/SMS notifications, admin monitoring dashboard, compliance disclaimer management, non-payment protection tools, comprehensive reporting and analytics, mobile-responsive member portal.'
    },
    {
      question: 'How do you handle members who don\'t provide help?',
      answer: 'Non-payment protection includes: automated reminder system (email/SMS at intervals), escalation to admin after X days, temporary account suspension for non-compliance, permanent blocking for repeat offenders, dispute resolution mechanism, refund/replacement policies, member rating system based on help fulfillment, manual intervention by admin, community reporting features. The goal is to maintain trust and ensure fair participation.'
    },
    {
      question: 'What is the pricing for Helping Plan MLM software?',
      answer: 'Helping Plan MLM software starts at ₹2,50,000 for basic features (up to 2000 members, single stage, sponsor-based matching, verification system). Advanced package at ₹5,00,000 includes unlimited members, multi-stage structure (up to 10 stages), advanced matching algorithms, mobile apps, SMS integration. Enterprise solutions with custom features, compliance documentation, legal templates, and integrations available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Helping Plan MLM Software', url: '/helping-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Helping Plan MLM Software Development"
        subtitle="Powerful mutual help MLM software with peer-to-peer help exchange, automated matching, and community support tracking"
        description="Build your community-based MLM business with secure help exchange software"
        gradient="green"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">What is Helping Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Helping Plan MLM Software</strong> is a community-focused compensation platform where members participate in peer-to-peer mutual help exchange. Members provide financial help to others in the network and receive help from new members joining below them. The software automates help matching, tracks all transactions, manages verification workflows, and provides comprehensive reporting for transparent mutual aid operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Mutual Help System</p>
                  <p className="text-sm text-gray-600">Community-based P2P support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Stage Progression</p>
                  <p className="text-sm text-gray-600">Up to 10 help stages supported</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Automated Matching</p>
                  <p className="text-sm text-gray-600">Smart provider-recipient pairing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹2,50,000</p>
                  <p className="text-sm text-gray-600">Full tracking with mobile apps</p>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Helping Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Helping Plan MLM Software is a community-focused compensation system where members participate in <strong>peer-to-peer mutual help exchange</strong>. Members provide financial help to others in the network and receive help from new members joining below them, creating a cycle of mutual support and assistance.
              </p>
              <p>
                Unlike traditional MLM where companies pay commissions, Helping Plans operate on <strong>member-to-member transactions</strong>. When you join, you provide help (typically a cash amount) to a designated member, and as you recruit or as the network grows, you receive help from multiple members. The plan often emphasizes community benefit, mutual aid, and collective progress.
              </p>
              <p>
                Our Helping Plan MLM Software automates the help matching process, tracks all transactions, manages verification workflows, sends automated notifications, and provides comprehensive reporting to ensure transparency and fairness in the mutual help ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Helping Plan Works */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Helping Plan Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-green-700 text-center">Stage-Based Mutual Help Process</h3>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {/* Stage 1 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold mb-3">Stage 1</div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Provide Help</p>
                        <p className="font-bold text-red-600 text-lg">₹5,000</p>
                        <p className="text-xs text-gray-500">To 1 member</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Receive Help</p>
                        <p className="font-bold text-green-600 text-lg">₹10,000</p>
                        <p className="text-xs text-gray-500">From 2 members</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded border border-green-400">
                        <p className="text-xs text-gray-600">Net Gain</p>
                        <p className="font-bold text-green-700">₹5,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-300">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold mb-3">Stage 2</div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Provide Help</p>
                        <p className="font-bold text-red-600 text-lg">₹15,000</p>
                        <p className="text-xs text-gray-500">To 1 member</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Receive Help</p>
                        <p className="font-bold text-green-600 text-lg">₹30,000</p>
                        <p className="text-xs text-gray-500">From 2 members</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded border border-blue-400">
                        <p className="text-xs text-gray-600">Net Gain</p>
                        <p className="font-bold text-blue-700">₹15,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300">
                  <div className="text-center">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold mb-3">Stage 3</div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Provide Help</p>
                        <p className="font-bold text-red-600 text-lg">₹50,000</p>
                        <p className="text-xs text-gray-500">To 1 member</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Receive Help</p>
                        <p className="font-bold text-green-600 text-lg">₹1,00,000</p>
                        <p className="text-xs text-gray-500">From 2 members</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded border border-purple-400">
                        <p className="text-xs text-gray-600">Net Gain</p>
                        <p className="font-bold text-purple-700">₹50,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-300">
                  <div className="text-center">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold mb-3">Stage 4</div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Provide Help</p>
                        <p className="font-bold text-red-600 text-lg">₹2,00,000</p>
                        <p className="text-xs text-gray-500">To 1 member</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Receive Help</p>
                        <p className="font-bold text-green-600 text-lg">₹4,00,000</p>
                        <p className="text-xs text-gray-500">From 2 members</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-2 rounded border border-orange-400">
                        <p className="text-xs text-gray-600">Net Gain</p>
                        <p className="font-bold text-orange-700">₹2,00,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-400">
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-2">Total Potential Across All Stages:</p>
                  <p className="text-3xl font-bold text-gray-900">₹5,000 + ₹15,000 + ₹50,000 + ₹2,00,000 = <span className="text-green-700">₹2,70,000</span></p>
                  <p className="text-xs text-gray-600 mt-2">Progression through complete stage cycle</p>
                </div>
              </div>
            </div>

            {/* Help Flow Visualization */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-green-700 text-center">Member-to-Member Help Flow</h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">You Join</div>
                        <div className="flex-1 border-t-2 border-dashed border-green-400"></div>
                        <div className="bg-red-100 border-2 border-red-400 px-4 py-2 rounded font-semibold text-red-700">Provide ₹5,000</div>
                        <div className="flex-1 border-t-2 border-dashed border-red-400"></div>
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">To Sponsor</div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center">Step 1: Provide initial help to your sponsor or designated member</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg">You (Active Member)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">Member A</div>
                        <span className="text-green-600 font-bold">→ ₹5,000</span>
                      </div>
                      <p className="text-xs text-gray-600">Provides help to you</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">Member B</div>
                        <span className="text-green-600 font-bold">→ ₹5,000</span>
                      </div>
                      <p className="text-xs text-gray-600">Provides help to you</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded text-center border border-green-400">
                    <p className="font-bold text-green-700 text-lg">Total Help Received: ₹10,000</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">Step 2: Receive help from 2 members who join after you</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">Stage Complete</div>
                    <div className="text-2xl">🎉</div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-lg border-2 border-green-400">
                      <p className="font-bold text-green-700 text-lg">Profit: ₹5,000</p>
                      <p className="text-xs text-gray-600">Advance to Stage 2</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-center">Step 3: Complete stage, earn profit, qualify for next stage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Helping Plan Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Automated Help Matching',
                description: 'Intelligent algorithm matches help providers with recipients based on stage, joining order, sponsor tree, or custom rules. Real-time matching.',
                icon: '🎯'
              },
              {
                title: 'Multi-Stage Configuration',
                description: 'Create unlimited help stages with different amounts. Configure provide/receive ratios, advancement criteria, and stage requirements.',
                icon: '📊'
              },
              {
                title: 'Help Tracking Dashboard',
                description: 'Complete visibility of help provided, help received, pending help, verification status, and stage progress for each member.',
                icon: '📈'
              },
              {
                title: 'Payment Proof System',
                description: 'Members upload payment screenshots, receipts, or transaction IDs. Recipients verify receipt. Admin approves before stage completion.',
                icon: '✅'
              },
              {
                title: 'Member-to-Member Transfers',
                description: 'Direct peer-to-peer help exchange. System provides payment details (UPI, bank account) of recipient. No company involvement in transfers.',
                icon: '💸'
              },
              {
                title: 'Automated Notifications',
                description: 'Email/SMS alerts for: help to provide, help received, verification needed, stage completion, advancement, payment reminders.',
                icon: '🔔'
              },
              {
                title: 'Genealogy Tree',
                description: 'Visual representation of help network. See who provided help to you, who you helped, downline help expectations, stage positions.',
                icon: '🌳'
              },
              {
                title: 'Non-Payment Protection',
                description: 'Automated reminders for pending help, escalation workflow, account suspension for non-compliance, dispute resolution, refund policies.',
                icon: '🛡️'
              },
              {
                title: 'Compliance Management',
                description: 'Built-in legal disclaimers, voluntary participation statements, no guarantee disclosures, peer-to-peer nature clarification, risk warnings.',
                icon: '⚖️'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Helping Plan Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Helping Plan',
                price: '₹2,50,000',
                features: [
                  'Up to 2,000 members',
                  'Single help stage',
                  'Sponsor-based matching',
                  'Help tracking system',
                  'Payment proof upload',
                  'Member dashboard',
                  'Admin panel',
                  'Email notifications',
                  'Basic reports',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Helping Plan',
                price: '₹5,00,000',
                features: [
                  'Unlimited members',
                  'Multi-stage structure (up to 10)',
                  'Advanced matching algorithms',
                  'Complete help tracking',
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
                name: 'Enterprise Helping Plan',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Unlimited help stages',
                  'Custom matching rules',
                  'Multi-currency support',
                  'Compliance documentation',
                  'Legal templates',
                  'White-label solution',
                  'API integrations',
                  'Dedicated server',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-green-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">{plan.price}</div>
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
                      ? 'bg-green-600 text-white hover:bg-green-700' 
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
              { title: 'Donation Plan MLM', href: '/donation-plan-mlm-software', desc: 'Peer-to-peer donation tracking' },
              { title: 'Gift Plan MLM', href: '/gift-plan-mlm-software', desc: 'Member-to-member gift exchange' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-green-100">
                <h3 className="text-green-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg text-center hover:from-emerald-700 hover:to-teal-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-green-700 transition-all">
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

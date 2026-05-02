import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software Development Company | Best Network Marketing Software Company India | EifaSoft',
    description: 'Leading MLM software development company in India with 15+ years experience. Custom multi-level marketing solutions with Binary, Matrix, Unilevel, Generation, Board, and 20+ compensation plans. Mobile apps, e-wallet, blockchain integration. Starting at ₹1,00,000. 500+ successful deployments.',
    canonical: '/mlm-software-development-company',
    keywords: [
      'MLM software development',
      'MLM software development company',
      'MLM software development company India',
      'multi-level marketing software',
      'network marketing software company',
      'binary MLM software',
      'matrix plan software',
      'unilevel MLM',
      'network marketing software',
      'MLM software company India',
      'custom MLM software',
      'direct selling software',
      'referral marketing software',
      'downline management software',
      'commission management MLM',
      'MLM business software',
      'binary plan software india',
      'hybrid MLM software',
      'MLM mobile app',
      'MLM mobile app development',
      'MLM payment gateway',
      'blockchain MLM software',
      'crypto MLM software',
      'smart contract MLM software',
      'MLM software price india',
      'affordable MLM software',
      'cheap MLM software',
      'best MLM software company',
      'top MLM software developers India',
      'MLM e-wallet software',
      'MLM genealogy tree software',
      'cloud MLM software',
      'SaaS MLM software',
      'white label MLM software',
      'MLM software with source code',
      'enterprise MLM software solutions',
      'scalable MLM software',
      'MLM commission calculation software',
      'MLM software free demo',
      'generation plan MLM software',
      'board plan MLM software',
      'party plan MLM software',
      'stair step MLM software'
    ],
  });
}

const faqs = [
  {
    question: 'What MLM compensation plans do you support?',
    answer: 'We support 20+ MLM plans including Binary, Matrix, Unilevel, Board, Hybrid, Generation, Party Plan, Gift Plan, Helping Plan, Stair-Step, Spillover Binary, Repurchase, Investment, ROI, Donation, Autopool, and custom hybrid plans tailored to your business needs.',
  },
  {
    question: 'How long does it take to develop MLM software?',
    answer: 'Standard MLM software takes 10-16 weeks depending on features and customization. Simple binary plans can be delivered in 8-10 weeks, while complex custom solutions may take 16-24 weeks including testing and deployment.',
  },
  {
    question: 'What is the cost of MLM software development?',
    answer: 'Basic MLM software starts at ₹1,00,000 for single plan implementation. Multi-plan solutions range from ₹2,50,000-₹5,00,000, and enterprise custom solutions start from ₹7,00,000+. Pricing depends on features, plans, and customization requirements.',
  },
  {
    question: 'Do you provide mobile apps for MLM software?',
    answer: 'Yes, we develop native iOS and Android apps, as well as cross-platform solutions using React Native or Flutter. Mobile apps include member dashboard, genealogy tree, e-wallet, notifications, and all key MLM features.',
  },
  {
    question: 'Is the MLM software compliant with Indian regulations?',
    answer: 'Yes, our MLM software is designed to comply with Indian Direct Selling Guidelines 2016 and includes features for proper documentation, transparent compensation disclosure, and regulatory reporting.',
  },
  {
    question: 'What kind of support and maintenance do you provide?',
    answer: 'We offer comprehensive support including bug fixes, security updates, feature enhancements, server maintenance, data backup, and 24/7 technical support. Annual maintenance contracts start from ₹50,000.',
  },
];

export default function MLMSoftwareDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'MLM Software Development Services',
    'Professional multi-level marketing software development with 20+ compensation plans, mobile apps, e-wallet, and complete business management features.'
  );

  const productSchema = generateProductSchema(
    'MLM Software Development Package',
    'Complete MLM software solution with compensation plan, member management, e-wallet, genealogy tree, and admin panel',
    '100000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft MLM Software',
    description: 'Enterprise-grade multi-level marketing software with 20+ compensation plans, genealogy tree, e-wallet, mobile apps, and real-time analytics for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '100000',
    rating: 4.9,
    reviewCount: 150,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
    'article p:first-of-type',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software Development', url: '/mlm-software-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="MLM Software Development That Scales Your Network"
        subtitle="20+ Compensation Plans"
        description="Build powerful, compliant MLM platforms with advanced features. Binary, Matrix, Unilevel, and custom plans tailored to your business."
        ctaPrimary={{ text: 'Get Free Demo', href: '/contact' }}
        ctaSecondary={{ text: 'View Plans', href: '#plans' }}
        gradient="green"
      />

      {/* What is MLM Software - Definition for AI Overviews */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is MLM Software?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>MLM Software (Multi-Level Marketing Software)</strong> is a specialized business management platform designed for network marketing and direct selling companies. It automates member registration, commission calculations, genealogy tree management, e-wallet operations, and payout processing. MLM software supports various compensation plans including Binary, Matrix, Unilevel, Board, and Generation plans, enabling businesses to manage complex distributor networks efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways for AI Extraction */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  20+ MLM compensation plans supported (Binary, Matrix, Unilevel, etc.)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pricing starts at ₹1,00,000 for startups
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  10-16 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Includes iOS & Android mobile apps
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  500+ successful MLM projects delivered
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Compliant with Indian Direct Selling Guidelines 2016
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MLM Plans Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular MLM Compensation Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from proven compensation plans or create a custom hybrid plan that fits your business model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="plans">
            {[
              {
                icon: '🔀',
                title: 'Binary Plan',
                description: 'Two-leg structure with spillover and balanced commission distribution. Most popular MLM plan worldwide.',
                features: ['Spillover Support', 'Pair Matching', 'Capping System', 'Fast Growth'],
                href: '/binary-plan-mlm-software',
              },
              {
                icon: '📊',
                title: 'Matrix Plan',
                description: 'Fixed-width and depth structure (e.g., 3×7, 5×5) with forced matrix spillover benefits.',
                features: ['Width × Depth Control', 'Forced Spillover', 'Level Bonuses', 'Team Building'],
                href: '/matrix-plan-mlm-software',
              },
              {
                icon: '📈',
                title: 'Unilevel Plan',
                description: 'Unlimited width single-leg structure with depth-based commission distribution.',
                features: ['Unlimited Width', 'Deep Level Earnings', 'Simple Structure', 'Easy Management'],
                href: '/unilevel-plan-mlm-software',
              },
              {
                icon: '🎯',
                title: 'Board Plan',
                description: 'Board-based cycler system with re-entry and split board mechanics for fast earnings.',
                features: ['Board Cycling', 'Re-entry System', 'Split Boards', 'Quick Returns'],
                href: '/board-plan-mlm-software',
              },
              {
                icon: '🔄',
                title: 'Generation Plan',
                description: 'Generation-based depth tracking with rank advancement and leadership bonuses.',
                features: ['Generation Tracking', 'Rank System', 'Leadership Pool', 'Breakaway'],
                href: '/generation-plan-mlm-software',
              },
              {
                icon: '💎',
                title: 'Hybrid Plan',
                description: 'Combination of multiple plans (Binary + Unilevel, Matrix + Board) for maximum flexibility.',
                features: ['Multi-Plan Benefits', 'Custom Logic', 'Flexible Commissions', 'Unique Business Model'],
                href: '/hybrid-plan-mlm-software',
              },
              {
                icon: '🌏',
                title: 'Australian X-Up Plan',
                description: 'Powerful pass-up system where X number of sales pass up to your sponsor for team growth.',
                features: ['Pass-Up System', 'Team Building', 'Fast Track Bonuses', 'Global Success'],
                href: '/australian-x-up-plan-mlm-software',
              },
              {
                icon: '🔄',
                title: 'Autopool Plan',
                description: 'Automated pool-based cycling system with equal distribution and fair rotation mechanics.',
                features: ['Auto Cycling', 'Equal Distribution', 'Pool Rotation', 'Fair Earnings'],
                href: '/autopool-plan-mlm-software',
              },
              {
                icon: '₿',
                title: 'Bitcoin MLM',
                description: 'Cryptocurrency-based MLM platform with Bitcoin integration and blockchain transparency.',
                features: ['Bitcoin Payments', 'Blockchain Ledger', 'Crypto Wallet', 'Secure Transactions'],
                href: '/bitcoin-mlm-software',
              },
              {
                icon: '🪙',
                title: 'Cryptocurrency MLM',
                description: 'Multi-cryptocurrency MLM system supporting Bitcoin, Ethereum, and altcoin payments.',
                features: ['Multi-Crypto Support', 'Smart Contracts', 'DeFi Integration', 'Token Rewards'],
                href: '/cryptocurrency-mlm-software',
              },
              {
                icon: '❤️',
                title: 'Donation Plan',
                description: 'Peer-to-peer donation-based system with direct member-to-member fund transfers.',
                features: ['P2P Donations', 'Direct Transfer', 'No Admin Pool', 'Community Building'],
                href: '/donation-plan-mlm-software',
              },
              {
                icon: '🛒',
                title: 'E-Commerce Plan',
                description: 'Product-based MLM with integrated e-commerce, shopping cart, and inventory management.',
                features: ['Product Catalog', 'Shopping Cart', 'Inventory System', 'Retail Commissions'],
                href: '/e-commerce-plan-mlm-software',
              },
              {
                icon: '🎁',
                title: 'Gift Plan',
                description: 'Gift exchange MLM system with automated matching and peer-to-peer gift delivery.',
                features: ['Gift Exchange', 'Auto Matching', 'Level Advancement', 'Community Rewards'],
                href: '/gift-plan-mlm-software',
              },
              {
                icon: '🤝',
                title: 'Helping Plan',
                description: 'Mutual help community platform with direct member support and contribution tracking.',
                features: ['Mutual Support', 'Direct Help', 'Transparency', 'Community Growth'],
                href: '/helping-plan-mlm-software',
              },
              {
                icon: '💹',
                title: 'Investment Plan',
                description: 'Investment-based MLM with portfolio management, ROI tracking, and profit distribution.',
                features: ['Investment Tracking', 'ROI Calculator', 'Profit Distribution', 'Portfolio Management'],
                href: '/investment-plan-mlm-software',
              },
              {
                icon: '📱',
                title: 'Mobile Recharge Plan',
                description: 'Telecom recharge MLM system with multi-operator support and instant commission processing.',
                features: ['Multi-Operator', 'Instant Recharge', 'Commission Tracking', 'Utility Payments'],
                href: '/mobile-recharge-plan-mlm-software',
              },
              {
                icon: '∞',
                title: 'Mobious Loop Plan',
                description: 'Infinite loop cycling system with continuous re-entry and perpetual earning opportunities.',
                features: ['Infinite Cycling', 'Re-entry System', 'Loop Mechanics', 'Continuous Earnings'],
                href: '/mobious-loop-mlm-software',
              },
              {
                icon: '🎉',
                title: 'Party Plan',
                description: 'Social selling MLM with party hosting, event management, and direct sales commission.',
                features: ['Party Hosting', 'Event Calendar', 'Direct Sales', 'Host Rewards'],
                href: '/party-plan-mlm-software',
              },
              {
                icon: '🏠',
                title: 'Real Estate MLM',
                description: 'Property investment MLM with real estate portfolio management and rental income tracking.',
                features: ['Property Listings', 'Investment Tracking', 'Rental Income', 'Commission System'],
                href: '/real-estate-mlm-software',
              },
              {
                icon: '🔁',
                title: 'Repurchase Plan',
                description: 'Product repurchase MLM with subscription model and recurring commission structure.',
                features: ['Auto Repurchase', 'Subscription Model', 'Recurring Commissions', 'Loyalty Rewards'],
                href: '/repurchase-plan-mlm-software',
              },
              {
                icon: '💰',
                title: 'ROI Plan',
                description: 'Return on investment MLM with daily/weekly ROI payouts and compound interest options.',
                features: ['Daily ROI', 'Compound Interest', 'Investment Tiers', 'Auto Withdrawal'],
                href: '/roi-plan-mlm-software',
              },
              {
                icon: '🚀',
                title: 'Single Leg Plan',
                description: 'Linear single-leg structure with unlimited downline and depth-based commissions.',
                features: ['Single Line', 'Unlimited Depth', 'Linear Growth', 'Simple Structure'],
                href: '/single-leg-mlm-software',
              },
              {
                icon: '⛓️',
                title: 'Smart Contract MLM',
                description: 'Decentralized MLM powered by blockchain smart contracts with trustless automation.',
                features: ['Smart Contracts', 'Decentralized', 'Transparent', 'Automated Payouts'],
                href: '/smart-contract-mlm-software',
              },
              {
                icon: '💧',
                title: 'Spillover Binary',
                description: 'Enhanced binary plan with automatic spillover placement and balanced team building.',
                features: ['Auto Spillover', 'Balanced Placement', 'Team Support', 'Weak Leg Bonus'],
                href: '/spillover-binary-mlm-software',
              },
              {
                icon: '📶',
                title: 'Stair Step Plan',
                description: 'Rank-based MLM with progressive stair-step advancement and breakaway bonuses.',
                features: ['Rank Advancement', 'Progressive Tiers', 'Breakaway Bonus', 'Leadership Pool'],
                href: '/stair-step-mlm-software',
              },
              {
                icon: '⚡',
                title: 'Tron MLM',
                description: 'TRON blockchain-based MLM with TRX payments and smart contract automation.',
                features: ['TRX Payments', 'TRON Blockchain', 'Smart Contracts', 'Fast Transactions'],
                href: '/tron-mlm-software',
              },
              {
                icon: '🤝',
                title: '50-50 Crowdfunding',
                description: 'Balanced crowdfunding MLM with 50-50 profit sharing and community funding pools.',
                features: ['50-50 Split', 'Crowdfunding Pools', 'Equal Distribution', 'Community Support'],
                href: '/50-50-crowdfunding-mlm-software',
              },
              {
                icon: '🪣',
                title: 'Bucket Help Plan',
                description: 'Bucket-based donation system with level advancement and peer-to-peer assistance.',
                features: ['Bucket System', 'Level Progress', 'Direct Donations', 'Community Help'],
                href: '/bucket-help-plan-mlm-software',
              },
              {
                icon: '💵',
                title: 'Affordable MLM Software',
                description: 'Budget-friendly MLM solution with essential features for startups and small businesses.',
                features: ['Low Cost', 'Essential Features', 'Scalable', 'Quick Setup'],
                href: '/cheap-affordable-mlm-software',
              },
            ].map((plan, index) => (
              <Link key={index} href={plan.href}>
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 h-full hover:border-green-500 cursor-pointer group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}  
          </div>
        </div>
      </section>

      {/* MLM Tools & Calculators */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free MLM Tools & Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan your MLM business with our free interactive tools and calculators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/mlm-plan-comparison">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-transparent hover:border-blue-500 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Plan Comparison
                </h3>
                <p className="text-gray-600 mb-4">
                  Compare up to 4 MLM plans side-by-side with detailed feature analysis, pros/cons, and pricing.
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                  Try Now - It&apos;s Free
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/mlm-pricing-calculator">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-transparent hover:border-purple-500 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Pricing Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant pricing for your MLM software based on features, member capacity, and support level.
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                  Calculate Price Now
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/mlm-roi-estimator">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-transparent hover:border-green-500 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  ROI Estimator
                </h3>
                <p className="text-gray-600 mb-4">
                  Project your return on investment with member growth, revenue forecasts, and break-even analysis.
                </p>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700">
                  Estimate ROI
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive MLM Software Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful multi-level marketing business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👥', title: 'Member Management', description: 'Complete member profiles, KYC, document verification' },
              { icon: '🌳', title: 'Genealogy Tree', description: 'Visual network tree with zoom, search, and filtering' },
              { icon: '💰', title: 'E-Wallet System', description: 'Multi-currency wallet with secure transactions' },
              { icon: '💳', title: 'Payment Gateway', description: 'Integration with Razorpay, PayU, Stripe, crypto' },
              { icon: '📱', title: 'Mobile Apps', description: 'iOS & Android apps with full functionality' },
              { icon: '📊', title: 'Analytics Dashboard', description: 'Real-time reports, charts, and business insights' },
              { icon: '🎁', title: 'E-Commerce Integration', description: 'Product catalog, shopping cart, order management' },
              { icon: '🔐', title: 'Security Features', description: 'Two-factor auth, encryption, fraud detection' },
              { icon: '📧', title: 'Email & SMS', description: 'Automated notifications and marketing campaigns' },
              { icon: '🏆', title: 'Rank & Rewards', description: 'Achievement tracking, badges, incentive system' },
              { icon: '📝', title: 'KYC & Compliance', description: 'Document verification, regulatory compliance' },
              { icon: '🌐', title: 'Multi-Language', description: 'Support for 20+ languages and currencies' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EifaSoft for MLM Software?
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              10+ years of experience delivering MLM solutions to 500+ clients across India and worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Fast Deployment', description: 'Go live in 10-12 weeks with proven templates' },
              { icon: '🔧', title: 'Customizable', description: '100% customizable to match your business model' },
              { icon: '📈', title: 'Scalable', description: 'Handle 100K+ members with cloud infrastructure' },
              { icon: '🛡️', title: 'Secure & Compliant', description: 'Bank-level security and regulatory compliance' },
              { icon: '💡', title: 'Expert Team', description: '50+ MLM software specialists and consultants' },
              { icon: '🎯', title: 'Success Rate', description: '95% client satisfaction with proven track record' },
              { icon: '🔄', title: 'Free Updates', description: 'Regular feature updates and security patches' },
              { icon: '☎️', title: '24/7 Support', description: 'Round-the-clock technical and business support' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built with modern, scalable technologies for performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Bootstrap'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PHP/Laravel', 'Python', 'Java', 'MySQL', 'MongoDB'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Flutter', 'Swift/iOS', 'Kotlin/Android', 'Ionic'].map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Redis'].map((tech) => (
                  <span key={tech} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent MLM Software Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a package that fits your business size and growth plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹1,00,000',
                description: 'Perfect for startups and small networks',
                features: [
                  'Single MLM Plan',
                  'Up to 1,000 members',
                  'Web admin panel',
                  'Member dashboard',
                  'E-wallet system',
                  'Payment gateway',
                  'Basic reports',
                  '3 months support',
                ],
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '₹3,50,000',
                description: 'Ideal for growing MLM businesses',
                features: [
                  'Multi-plan support',
                  'Up to 50,000 members',
                  'iOS & Android apps',
                  'E-commerce integration',
                  'Advanced analytics',
                  'Multi-currency wallet',
                  'SMS & Email automation',
                  'KYC & compliance',
                  '12 months support',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale operations',
                features: [
                  'Unlimited members',
                  'Custom MLM plans',
                  'White-label solution',
                  'Blockchain integration',
                  'AI-powered analytics',
                  'Dedicated servers',
                  'Custom integrations',
                  'Dedicated account manager',
                  'Lifetime support',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-green-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.highlighted ? 'text-green-200' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Launch Your MLM Business?
              </h2>
              <p className="text-lg text-gray-600">
                Get a free consultation and custom demo of our MLM software.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

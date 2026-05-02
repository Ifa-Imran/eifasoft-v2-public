import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Stair Step Plan MLM Software | Best Breakaway MLM Software | Rank Advancement | EifaSoft',
    description: 'Best Stair Step Plan MLM Software with breakaway system, rank advancement, progressive tiers, breakaway bonus, leadership pool, and achievement level software. Powerful stair step breakaway MLM software starting ₹3,50,000. Mobile apps included.',
    canonical: '/stair-step-plan-mlm-software',
    keywords: [
      'stair step plan MLM software',
      'stair step MLM software',
      'breakaway plan software',
      'breakaway MLM software',
      'stair step breakaway MLM',
      'stair step breakaway plan',
      'rank advancement MLM',
      'progressive MLM software',
      'breakaway compensation plan',
      'stair step MLM system',
      'multi-level breakaway',
      'traditional MLM software',
      'stair step plan india',
      'rank advancement MLM development',
      'performance based MLM',
      'stair step commission calculator',
      'breakaway plan india',
      'stair step MLM development company',
      'traditional direct selling software',
      'MLM rank promotion system',
      'stair step override bonus',
      'breakaway leadership MLM',
      'commission breakaway system',
      'stair step MLM app',
      'achievement level software',
      'progressive tiers MLM',
      'breakaway bonus MLM',
      'leadership pool MLM',
      'stair step e-wallet',
      'stair step software price',
      'best stair step MLM software'
    ],
  });
}

export default function StairStepPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Stair Step Plan MLM Software Development',
    'Comprehensive stair step breakaway MLM software with rank advancement, breakaway tracking, progressive commissions, and leadership rewards.',
    '/stair-step-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Stair Step Plan MLM Software',
    'Complete stair step MLM software solution with breakaway management, rank tracking, commission tiers, and performance-based rewards.',
    '3,50,000'
  );

  const faqs = [
    {
      question: 'What is Stair Step Breakaway Plan in MLM?',
      answer: 'Stair Step Breakaway Plan (also called Breakaway or Stairstep Plan) is one of the oldest and most traditional MLM compensation structures. Distributors progress through ranks like climbing stairs (Associate, Manager, Director, Executive, etc.) based on personal and group sales volume. When a distributor reaches a certain rank (e.g., Director), they "break away" from their upline\'s group and become an independent leg. The original upline then earns override commissions from the breakaway group. Famous companies like Amway, Nu Skin, and Herbalife use variations of this plan.'
    },
    {
      question: 'How does the breakaway system work?',
      answer: 'Breakaway occurs when a downline member achieves a qualifying rank. Example: You are a Director with several Managers in your team. When Manager A achieves Director rank (same as you or the breakaway rank), they "break away" and become independent. Before breakaway, you earned commissions on all their sales. After breakaway, you earn reduced override commissions (e.g., 3-5%) on their entire group volume. Manager A now builds their own organization and earns full commissions from their team. This encourages leadership development and rewards both personal achievement and team building.'
    },
    {
      question: 'What are the different ranks in Stair Step Plan?',
      answer: 'Typical rank structure (varies by company): 1) Associate/Distributor (entry level, personal sales), 2) Senior Associate (₹25,000 monthly sales), 3) Manager (₹50,000 monthly sales + 2 personally sponsored), 4) Senior Manager (₹1,00,000 sales + 3 personally sponsored), 5) Director (₹2,00,000 sales + 2 Managers), 6) Executive Director (₹5,00,000 sales + 3 Directors), 7) Presidential Director (₹10,00,000 sales + 5 Directors), 8) Diamond/Crown (₹25,00,000+ sales + multiple Executive Directors). Each rank unlocks higher commission percentages and override bonuses.'
    },
    {
      question: 'How are commissions calculated in Stair Step Plan?',
      answer: 'Commissions are rank-based with progressive percentages: Associate earns 20% on personal sales, Manager earns 25% on personal + 5% on Associate downline, Director earns 30% on personal + 10% on Manager downline + 5% on Associate downline, Executive Director earns 35% on personal + 15% on Director downline (before breakaway) + 5% override on breakaway Directors. After breakaway, override commissions typically range from 3-7% on the entire breakaway group volume. Our software automatically calculates complex multi-tier commissions based on rank and breakaway status.'
    },
    {
      question: 'What is the difference between Stair Step and Unilevel Plan?',
      answer: 'Key differences: Rank Advancement - Stair Step: Rank-based commissions increase as you progress. Unilevel: Fixed level percentages regardless of rank. Breakaway - Stair Step: Leaders break away and become independent. Unilevel: No breakaway, everyone stays in sponsor\'s downline. Commission Structure - Stair Step: Progressive percentages by rank (20% to 35%+). Unilevel: Fixed level percentages (e.g., 5% L1, 3% L2). Depth - Stair Step: Unlimited depth with override commissions. Unilevel: Limited depth (typically 5-10 levels). Complexity - Stair Step: More complex, requires rank maintenance. Unilevel: Simpler structure.'
    },
    {
      question: 'What are override commissions?',
      answer: 'Override commissions are bonuses earned from breakaway groups. When your downline member breaks away (achieves qualifying rank), you no longer earn full commissions from their sales. Instead, you earn a smaller "override" percentage (typically 3-7%) on their entire group volume. Example: Director A has a breakaway Director B. Director B\'s group generates ₹10,00,000 monthly volume. Director A earns 5% override = ₹50,000 from Director B\'s entire organization. This creates passive income from leadership development.'
    },
    {
      question: 'What are the advantages of Stair Step Plan?',
      answer: 'Advantages include: Proven model - used by largest MLM companies worldwide, High earning potential - unlimited depth and override income, Leadership rewards - encourages developing independent leaders, Prestige and recognition - clear rank progression and titles, Scalability - works for small and large organizations, Flexibility - can be customized with bonuses and incentives, Motivation - rank advancement provides clear goals, Long-term residual income - override commissions from multiple breakaway groups.'
    },
    {
      question: 'What features does your Stair Step MLM software include?',
      answer: 'Comprehensive features: Rank advancement tracking and automation, Breakaway detection and management, Multi-tier commission engine (personal, group, override), Rank qualification monitoring (sales volume, personally sponsored, team rank requirements), Progressive commission calculation based on rank, Override commission processing for breakaway groups, Rank maintenance tracking (monthly/quarterly requirements), Leadership bonus pools, Performance dashboards showing progress to next rank, Genealogy tree with rank visualization, Automated rank promotions and notifications, Commission reports by rank and breakaway status.'
    },
    {
      question: 'How do you maintain rank in Stair Step Plan?',
      answer: 'Rank maintenance requirements typically include: Monthly personal sales volume (e.g., Director needs ₹50,000 personal sales), Group sales volume (e.g., ₹2,00,000 from entire team), Active personally sponsored distributors (e.g., maintain 3 active frontline), Downline rank requirements (e.g., 2 Managers in organization), Consecutive months of qualification (some plans require 3/6 months). Failure to maintain results in rank reduction or loss of override commissions. Our software tracks all requirements and sends alerts before rank expiration.'
    },
    {
      question: 'What is the pricing for Stair Step Plan MLM software?',
      answer: 'Stair Step Plan MLM software starts at ₹3,50,000 for basic features (up to 10,000 distributors, 8 rank levels, breakaway tracking, commission calculation, rank advancement, basic reports). Advanced package at ₹7,00,000 includes unlimited distributors, 12+ rank levels, advanced breakaway management, override compression, mobile apps, leadership pools, advanced analytics. Enterprise solutions with custom rank structures, international multi-currency support, complex override rules, API integrations, white-label options available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Stair Step Plan MLM Software', url: '/stair-step-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Stair Step Breakaway Plan MLM Software"
        subtitle="Powerful traditional MLM software with rank advancement, breakaway management, and progressive commission structure"
        description="Build your MLM business with proven stair step breakaway compensation software"
        gradient="purple"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Stair Step Breakaway MLM Plan?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Stair Step Breakaway Plan is the <strong>oldest and most traditional MLM compensation structure</strong>, used by industry giants like Amway, Nu Skin, Herbalife, and Mary Kay. Distributors progress through a series of ranks (like climbing stairs) based on personal and team performance. Each rank unlocks higher commission percentages and bonuses.
              </p>
              <p>
                The unique <strong>&quot;breakaway&quot; feature</strong> occurs when a downline member achieves a qualifying rank (typically the same rank as their upline or a designated breakaway rank). They then &quot;break away&quot; from their sponsor&apos;s group and become an independent organization. The upline continues to earn smaller override commissions from the breakaway group&apos;s total volume.
              </p>
              <p>
                Our Stair Step Plan MLM Software automates rank tracking, detects breakaway conditions, calculates complex multi-tier commissions, manages rank maintenance requirements, processes override payments, and provides comprehensive performance dashboards for both distributors and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rank Progression */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Stair Step Rank Progression</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4">
                {[
                  { rank: 'Associate', volume: '₹25,000', commission: '20%', requirements: 'Personal sales only', color: 'gray', icon: '👤' },
                  { rank: 'Senior Associate', volume: '₹50,000', commission: '22%', requirements: '₹50K sales', color: 'blue', icon: '⭐' },
                  { rank: 'Manager', volume: '₹1,00,000', commission: '25%', requirements: '₹1L sales + 2 sponsored', color: 'green', icon: '📊' },
                  { rank: 'Senior Manager', volume: '₹2,00,000', commission: '28%', requirements: '₹2L sales + 3 sponsored', color: 'teal', icon: '📈' },
                  { rank: 'Director', volume: '₹5,00,000', commission: '30%', requirements: '₹5L sales + 2 Managers', color: 'orange', icon: '🎯', breakaway: true },
                  { rank: 'Executive Director', volume: '₹10,00,000', commission: '33%', requirements: '₹10L sales + 3 Directors', color: 'purple', icon: '👑' },
                  { rank: 'Presidential', volume: '₹25,00,000', commission: '35%', requirements: '₹25L sales + 5 Directors', color: 'pink', icon: '💎' },
                  { rank: 'Diamond', volume: '₹50,00,000+', commission: '40%', requirements: '₹50L+ sales + Multiple Executives', color: 'yellow', icon: '💰' },
                ].map((rank, index) => (
                  <div key={index} className={`relative ${rank.breakaway ? 'ring-4 ring-orange-300' : ''}`}>
                    <div className={`bg-gradient-to-r from-${rank.color}-50 to-${rank.color}-100 p-6 rounded-lg border-2 border-${rank.color}-300 shadow-md hover:shadow-lg transition-shadow`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="text-4xl">{rank.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">{rank.rank}</h3>
                              {rank.breakaway && (
                                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                  BREAKAWAY RANK
                                </span>
                              )}
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Monthly Volume</p>
                                <p className="font-bold text-gray-900">{rank.volume}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Commission Rate</p>
                                <p className={`font-bold text-${rank.color}-700 text-lg`}>{rank.commission}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Requirements</p>
                                <p className="font-semibold text-gray-800">{rank.requirements}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < 7 && (
                          <div className="ml-4 text-3xl text-gray-400">↓</div>
                        )}
                      </div>
                    </div>
                    {rank.breakaway && (
                      <div className="absolute -right-2 -bottom-2 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        Members at this rank break away!
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakaway Mechanism */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Breakaway Works</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before Breakaway */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-6 border-2 border-blue-300">
                <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">Before Breakaway</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold mb-4">
                      You (Director)
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Your Team:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Manager A</span>
                        <span className="text-blue-600">₹1,00,000 volume</span>
                      </div>
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Manager B (approaching Director)</span>
                        <span className="text-orange-600 font-bold">₹4,50,000 volume</span>
                      </div>
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Senior Associate C</span>
                        <span className="text-blue-600">₹75,000 volume</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between font-bold">
                        <span>Total Group Volume:</span>
                        <span className="text-green-600 text-lg">₹6,25,000</span>
                      </div>
                      <div className="flex justify-between mt-2 text-sm">
                        <span>Your Commission (30%):</span>
                        <span className="text-green-700 font-bold">₹1,87,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Breakaway */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg p-6 border-2 border-orange-300">
                <h3 className="text-xl font-bold mb-4 text-orange-700 text-center">After Breakaway</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-bold mb-4">
                      You (Director)
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Manager B → Director B (Breakaway!):</p>
                    <div className="bg-orange-100 p-3 rounded-lg mb-3 border-2 border-orange-400">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">Director B (Independent)</span>
                        <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">BREAKAWAY</span>
                      </div>
                      <p className="text-sm text-gray-700">Their group: ₹4,50,000 volume</p>
                      <p className="text-sm text-orange-700 font-semibold mt-1">You earn 5% override = ₹22,500</p>
                    </div>
                    
                    <p className="font-semibold text-gray-800 mb-2 mt-4">Your Remaining Team:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Manager A</span>
                        <span className="text-blue-600">₹1,00,000</span>
                      </div>
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Senior Associate C</span>
                        <span className="text-blue-600">₹75,000</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Personal group (30%):</span>
                          <span className="text-green-600">₹52,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Override from Director B (5%):</span>
                          <span className="text-orange-600">₹22,500</span>
                        </div>
                        <div className="flex justify-between font-bold text-base border-t pt-2">
                          <span>Total Earnings:</span>
                          <span className="text-green-700">₹75,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-900 mb-3">💡 Breakaway Benefits</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>For You:</strong> Lower percentage (5%) but passive income from Director B&apos;s entire organization. As they grow to ₹50L, your override becomes ₹2.5L. Multiple breakaways multiply this!</p>
                <p><strong>For Director B:</strong> Full control and higher commission (30%) on their own team. They can now develop their own breakaway leaders.</p>
                <p><strong>For Company:</strong> Encourages leadership development. Leaders are motivated to mentor others to breakaway status.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Stair Step Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Rank Advancement Automation',
                description: 'Automatic rank promotion when qualifications met. Track personal sales, group volume, sponsored count, downline ranks in real-time.',
                icon: '📈'
              },
              {
                title: 'Breakaway Detection',
                description: 'Automatically identifies when downline achieves breakaway rank. Restructures genealogy, recalculates commissions, creates independent leg.',
                icon: '🔍'
              },
              {
                title: 'Multi-Tier Commission Engine',
                description: 'Complex commission calculation: personal commissions, group commissions, override commissions. Rank-based percentages automatically applied.',
                icon: '💰'
              },
              {
                title: 'Rank Maintenance Tracking',
                description: 'Monitor monthly qualification requirements. Alert members before rank expiration. Automatic rank reduction if not maintained.',
                icon: '⏰'
              },
              {
                title: 'Override Commission Processing',
                description: 'Calculate override percentages from all breakaway groups. Track multiple breakaway generations. Compression when breakaway becomes inactive.',
                icon: '🔄'
              },
              {
                title: 'Performance Dashboards',
                description: 'Show progress to next rank, sales needed, team requirements. Visual rank ladder, breakaway tracking, earnings projection.',
                icon: '📊'
              },
              {
                title: 'Leadership Bonus Pools',
                description: 'Configure rank-based bonus pools. Distribute company profits among top performers. Monthly/quarterly leadership rewards.',
                icon: '🏆'
              },
              {
                title: 'Genealogy with Ranks',
                description: 'Visual tree showing all members with rank badges. Highlight breakaway members, track team ranks, identify promotion candidates.',
                icon: '🌳'
              },
              {
                title: 'Advanced Reporting',
                description: 'Rank distribution reports, breakaway analysis, commission breakdown by type, rank progression history, team performance metrics.',
                icon: '📑'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Stair Step Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Stair Step',
                price: '₹3,50,000',
                features: [
                  'Up to 10,000 distributors',
                  '8 rank levels',
                  'Breakaway tracking',
                  'Rank advancement',
                  'Commission calculation',
                  'Member dashboard',
                  'Admin panel',
                  'Basic reports',
                  'Email notifications',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Stair Step',
                price: '₹7,00,000',
                features: [
                  'Unlimited distributors',
                  '12+ rank levels',
                  'Advanced breakaway management',
                  'Override compression',
                  'Rank maintenance tracking',
                  'Mobile apps',
                  'Leadership pools',
                  'Advanced genealogy',
                  'Custom rank structures',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Stair Step',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Unlimited ranks',
                  'Complex override rules',
                  'Multi-currency support',
                  'International compliance',
                  'API integrations',
                  'White-label solution',
                  'Dedicated server',
                  'Priority support',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-purple-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{plan.price}</div>
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-powered MLM' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactForm />
    </>
  );
}

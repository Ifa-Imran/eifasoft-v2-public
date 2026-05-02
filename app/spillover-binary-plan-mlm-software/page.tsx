import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Spillover Binary Plan MLM Software | Auto-Fill Binary MLM Software | EifaSoft',
    description: 'Best Spillover Binary Plan MLM Software with automatic member placement, spillover benefits, power leg, profit leg, and balanced team growth. Auto spillover system with real-time genealogy tree. Powerful spillover binary software starting ₹3,00,000. Free demo available.',
    canonical: '/spillover-binary-plan-mlm-software',
    keywords: [
      'spillover binary plan MLM software',
      'spillover binary MLM software',
      'auto-fill binary MLM',
      'spillover binary software',
      'automatic placement binary',
      'binary spillover system',
      'forced matrix binary',
      'auto-placement MLM software',
      'spillover MLM plan',
      'binary tree spillover',
      'power leg MLM',
      'profit leg binary',
      'auto spillover system',
      'spillover income MLM',
      'spillover binary india',
      'two leg spillover MLM',
      'spillover MLM app',
      'spillover MLM development company',
      'binary spillover calculator',
      'weak leg spillover MLM',
      'automatic placement MLM india',
      'spillover compensation plan',
      'spillover binary MLM software price',
      'best spillover binary software',
      'binary spillover commission',
      'auto balanced placement',
      'spillover genealogy tree',
      'binary spillover e-wallet'
    ],
  });
}

export default function SpilloverBinaryPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Spillover Binary Plan MLM Software Development',
    'Comprehensive spillover binary MLM software with automatic placement, spillover tracking, balanced growth algorithm, and team building automation.',
    '/spillover-binary-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Spillover Binary Plan MLM Software',
    'Complete spillover binary MLM software solution with auto-fill placement, spillover benefits, matching bonuses, and intelligent tree balancing.',
    '3,00,000'
  );

  const faqs = [
    {
      question: 'What is Spillover Binary Plan in MLM?',
      answer: 'Spillover Binary Plan is a variation of traditional Binary Plan where upline members\' recruits automatically "spill over" into their downline\'s binary trees. When your sponsor recruits more than 2 members (the binary limit), the extra members are placed in your left or right leg, even though you didn\'t personally recruit them. This creates passive team building - you benefit from your entire upline\'s recruitment efforts. It\'s also called Auto-Fill Binary or Forced Placement Binary because the system automatically places members in the best available position.'
    },
    {
      question: 'How does spillover placement work?',
      answer: 'Spillover operates through automatic placement rules: 1) You join and get 2 positions (left and right), 2) You sponsor Member A (placed on your left), 3) You sponsor Member B (placed on your right), 4) You sponsor Member C (your positions are full, so Member C spills over to Member A or B\'s downline), 5) Your upline sponsors Member D (if their positions are full, Member D may spill to you). The system uses algorithms (left-preferred, right-preferred, balanced, or weaker leg filling) to decide spillover placement. This creates viral growth throughout the organization.'
    },
    {
      question: 'What are the different spillover placement strategies?',
      answer: 'Common spillover strategies: 1) Left Leg First: All spillovers go to left leg until filled, then right. Creates deep left leg. 2) Right Leg First: Opposite of left leg first. 3) Balanced Filling: System places spillovers to keep left and right legs balanced. Ideal for matching bonuses. 4) Weaker Leg Priority: Spillovers go to leg with less volume/members. Helps balance teams. 5) Board Filling: Fills level by level (Level 1, then Level 2, etc.) before going deeper. 6) Custom Rules: Members can choose their preferred spillover direction. Our software supports all strategies with easy configuration.'
    },
    {
      question: 'What is the difference between Spillover Binary and Regular Binary?',
      answer: 'Key differences: Placement - Regular Binary: You choose where to place your recruits (left or right). Spillover Binary: System automatically places excess members. Team Building - Regular Binary: Requires strategic placement decisions. Spillover Binary: Automatic placement, less strategy needed. Spillover Benefits - Regular Binary: Limited or no spillover. Spillover Binary: Maximum spillover from entire upline. Passive Growth - Regular Binary: Growth depends on your direct recruitment. Spillover Binary: You grow even without recruiting (from upline spillover). Complexity - Regular Binary: More control, more complex. Spillover Binary: Simpler for new members.'
    },
    {
      question: 'How are commissions calculated in Spillover Binary?',
      answer: 'Commission structures in Spillover Binary typically include: 1) Pair/Matching Bonus: Earn when left and right legs each have 1:1 pairs (e.g., ₹500 per pair). 2) Percentage of Weaker Leg: 10% commission on smaller leg\'s volume (same as regular binary). 3) Spillover Bonus: Special bonus for members placed in your tree via spillover (e.g., ₹100 per spillover member). 4) Capping: Daily/weekly earning limits (e.g., max ₹50,000 per week). 5) Rank Bonuses: Higher ranks earn higher pair values or percentages. The automatic placement maximizes earning potential from both personal and spillover growth.'
    },
    {
      question: 'What are the advantages of Spillover Binary Plan?',
      answer: 'Advantages include: Easy for beginners - no complex placement decisions needed, Maximum teamwork - entire upline contributes to your growth, Passive income potential - earn from spillover members you didn\'t recruit, Viral growth - spillover creates exponential expansion, Reduced pressure - less recruitment burden on individuals, Fair distribution - spillover ensures everyone benefits, Team unity - shared success from collective efforts, Quick growth - automatic placement accelerates team building, Motivation - seeing your team grow from spillover encourages continued participation.'
    },
    {
      question: 'What are spillover notifications and alerts?',
      answer: 'Spillover notifications keep members informed: New Spillover Member Alert: "3 members added to your left leg from upline spillover!", Spillover Source: Shows which upline sponsored the spillover members, Earning Impact: "Spillover added ₹1,500 to your weekly earnings", Balance Alerts: "Your right leg needs 5 more members to balance", Pair Formation: "Spillover created 2 new pairs! You earned ₹1,000", Spillover Chain: Visual representation showing spillover path from sponsor to you. Our software sends real-time email/SMS/app notifications for all spillover activities.'
    },
    {
      question: 'What features does your Spillover Binary MLM software include?',
      answer: 'Comprehensive features: Automatic spillover placement engine with multiple strategies, Intelligent tree balancing algorithm, Spillover tracking and source attribution, Real-time spillover notifications (email/SMS/app), Binary genealogy with spillover visualization, Pair matching and bonus calculation, Weaker leg commission calculation, Spillover bonus management, Capping and daily limits, Rank advancement based on spillover growth, Member dashboard showing spillover statistics, Spillover chain genealogy (who spawned which spillover), Admin controls for placement rules, Advanced reporting and analytics.'
    },
    {
      question: 'Can spillover placement be controlled or customized?',
      answer: 'Yes, spillover can be customized in multiple ways: Member Preference: Allow members to set preferred spillover direction (left/right/balanced), Sponsor Control: Sponsors can choose where their spillover goes, Smart Placement: AI-based placement to maximize member earnings, Team Balancing: Automatic balancing to help members qualify for bonuses, VIP Placement: Priority placement for premium members, Regional Grouping: Keep spillover within geographic regions, Time-Based Rules: Different rules for different periods, Manual Override: Admin can manually adjust spillover placement when needed. Our software provides flexible configuration options.'
    },
    {
      question: 'What is the pricing for Spillover Binary Plan MLM software?',
      answer: 'Spillover Binary Plan MLM software starts at ₹3,00,000 for basic features (up to 10,000 members, automatic spillover placement, 2 placement strategies, spillover tracking, pair matching, basic notifications, member dashboard, admin panel). Advanced package at ₹6,00,000 includes unlimited members, 5+ placement strategies, intelligent balancing, advanced spillover analytics, mobile apps, custom placement rules, spillover bonus pools. Enterprise solutions with AI-based placement optimization, multi-currency support, custom algorithms, API integrations, white-label options available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Spillover Binary Plan MLM Software', url: '/spillover-binary-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Spillover Binary Plan MLM Software - Auto-Fill Network Marketing Solution"
        subtitle="Automatic Member Placement | Intelligent Spillover System | Passive Team Building"
        description="Build your binary MLM business with advanced spillover automation software. Intelligent auto-placement, team balancing algorithms, spillover tracking, and automated growth features. Starting ₹3,00,000."
        gradient="green"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Spillover Binary Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Spillover Binary Plan MLM Software is an advanced variation of the traditional Binary Plan where <strong>automatic member placement</strong> and <strong>spillover from upline</strong> create passive team building opportunities. When your sponsor or upline members recruit more than 2 people (the binary tree limit), the extra members automatically &quot;spill over&quot; into your downline tree.
              </p>
              <p>
                This creates a <strong>powerful viral growth effect</strong> - you benefit from the entire upline&apos;s recruitment efforts, not just your own. The system intelligently places spillover members using placement algorithms (balanced, left-first, right-first, or weaker leg) to maximize everyone&apos;s earnings and team growth.
              </p>
              <p>
                Our Spillover Binary MLM Software automates the entire spillover process, tracks spillover sources, manages intelligent placement strategies, calculates spillover bonuses, sends real-time notifications, and provides comprehensive spillover analytics to help members understand their passive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Spillover Works */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Spillover Binary Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-green-700 text-center">Spillover Placement Visualization</h3>
              
              <div className="space-y-8">
                {/* Initial State */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Step 1: Initial Binary Tree Structure</h4>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold">Sponsor (Your Upline)</div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold mb-2">Member 1</div>
                        <p className="text-xs text-gray-600">Left Position (Filled)</p>
                      </div>
                      <div className="text-center">
                        <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold mb-2">YOU</div>
                        <p className="text-xs text-gray-600">Right Position (Filled)</p>
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-600 mt-4">Both sponsor positions are filled. Next recruit will spillover!</p>
                  </div>
                </div>

                {/* Spillover Occurs */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Step 2: Spillover Happens (Member 3 Joins)</h4>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-300">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold">Sponsor</div>
                      <p className="text-sm text-orange-700 font-semibold mt-2">↓ Recruits Member 3 (positions full, spillover activated!)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold mb-4">Member 1</div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="inline-block bg-orange-400 text-white px-3 py-1 rounded font-bold text-sm animate-pulse">
                            Member 3 (SPILLOVER)
                          </div>
                          <p className="text-xs text-gray-600 mt-2">Placed in Member 1&apos;s left leg via spillover</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold mb-4">YOU</div>
                        <div className="bg-white p-4 rounded-lg shadow border-2 border-dashed border-gray-300">
                          <p className="text-sm text-gray-500">Empty - Awaiting spillover</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Spillover */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Step 3: Continued Spillover (You Benefit!)</h4>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-400">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold">Sponsor</div>
                      <p className="text-sm text-green-700 font-semibold mt-2">↓ Recruits Members 4 & 5 (spillover continues!)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold mb-2">Member 1</div>
                        <div className="text-xs text-gray-600 mb-2">(Tree filled)</div>
                      </div>
                      <div className="text-center">
                        <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold mb-4">YOU ✨</div>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded-lg shadow border-2 border-green-400">
                            <div className="inline-block bg-green-400 text-white px-3 py-1 rounded font-bold text-sm">Member 4 (SPILLOVER)</div>
                            <p className="text-xs text-gray-600 mt-1">Left leg via spillover!</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow border-2 border-green-400">
                            <div className="inline-block bg-green-400 text-white px-3 py-1 rounded font-bold text-sm">Member 5 (SPILLOVER)</div>
                            <p className="text-xs text-gray-600 mt-1">Right leg via spillover!</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg border border-green-500">
                          <p className="text-sm font-bold text-green-700">🎉 You earned from spillover without recruiting!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement Strategies */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Spillover Placement Strategies</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Balanced Filling', description: 'System places spillover to keep left and right legs balanced in size/volume', icon: '⚖️' },
                    { name: 'Left Leg First', description: 'All spillovers go to left leg first, then right. Creates deep left structure', icon: '⬅️' },
                    { name: 'Right Leg First', description: 'All spillovers go to right leg first, then left. Creates deep right structure', icon: '➡️' },
                    { name: 'Weaker Leg Priority', description: 'Spillovers placed in leg with less volume to help balance for matching bonus', icon: '🎯' },
                  ].map((strategy, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start">
                        <div className="text-2xl mr-3">{strategy.icon}</div>
                        <div>
                          <p className="font-bold text-gray-900">{strategy.name}</p>
                          <p className="text-sm text-gray-600">{strategy.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-700">Spillover Earnings Example</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Your Activity</h4>
                    <p className="text-sm text-gray-700">You personally recruited: 2 members</p>
                    <p className="text-sm text-green-600 font-bold">Your direct earnings: ₹2,000</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Spillover Benefit</h4>
                    <p className="text-sm text-gray-700">Spillover members from upline: 8 members</p>
                    <p className="text-sm text-blue-600 font-bold">Spillover bonus: ₹800 (₹100 each)</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Pairs Formed</h4>
                    <p className="text-sm text-gray-700">Left leg: 5 members, Right leg: 5 members</p>
                    <p className="text-sm text-purple-600 font-bold">Pair bonus: ₹2,500 (5 pairs × ₹500)</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-500">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total Weekly Income:</span>
                      <span className="text-green-700 font-bold text-2xl">₹5,300</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">80% from spillover and team building!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Spillover Binary Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Automatic Spillover Engine',
                description: 'Intelligent algorithm automatically places spillover members in optimal positions. Supports multiple placement strategies configurable by admin.',
                icon: '🤖'
              },
              {
                title: 'Spillover Source Tracking',
                description: 'Track which upline member spawned each spillover. Visual spillover chain showing complete path from original sponsor to you.',
                icon: '📍'
              },
              {
                title: 'Real-Time Notifications',
                description: 'Instant alerts when spillover members join your tree. Email/SMS/app push notifications with earnings impact details.',
                icon: '🔔'
              },
              {
                title: 'Intelligent Tree Balancing',
                description: 'AI-based balancing to maximize pair formation. Automatic placement to weaker leg to help members earn more matching bonuses.',
                icon: '⚖️'
              },
              {
                title: 'Spillover Bonus System',
                description: 'Special bonuses for spillover members (e.g., ₹100 per spillover). Configurable spillover rewards to encourage upline recruitment.',
                icon: '💰'
              },
              {
                title: 'Pair Matching Automation',
                description: 'Automatic pair detection and bonus calculation. Spillover members count toward pair formation, maximizing passive earnings.',
                icon: '🔗'
              },
              {
                title: 'Spillover Analytics',
                description: 'Detailed reports on spillover sources, spillover earnings breakdown, spillover vs personal recruitment metrics.',
                icon: '📊'
              },
              {
                title: 'Customizable Placement Rules',
                description: 'Configure global spillover rules, allow member preferences (left/right/balanced), sponsor override options.',
                icon: '⚙️'
              },
              {
                title: 'Genealogy Visualization',
                description: 'Color-coded trees showing personal recruits vs spillover members. Interactive tree with spillover path highlighting.',
                icon: '🌳'
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Spillover Binary Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Spillover Binary',
                price: '₹3,00,000',
                features: [
                  'Up to 10,000 members',
                  'Automatic spillover placement',
                  '2 placement strategies',
                  'Spillover tracking',
                  'Pair matching bonus',
                  'Basic notifications',
                  'Member dashboard',
                  'Admin panel',
                  'Basic reports',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Spillover Binary',
                price: '₹6,00,000',
                features: [
                  'Unlimited members',
                  '5+ placement strategies',
                  'Intelligent balancing',
                  'Spillover source tracking',
                  'Spillover bonus pool',
                  'Advanced analytics',
                  'Mobile apps',
                  'Custom placement rules',
                  'Real-time notifications',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Spillover Binary',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'AI-based placement',
                  'Custom algorithms',
                  'Multi-currency support',
                  'API integrations',
                  'White-label solution',
                  'Dedicated server',
                  'Priority support',
                  'Custom features',
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

      <FAQSection faqs={faqs} />

      {/* Related MLM Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Explore More MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare Spillover Binary with other MLM software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
            {[
              { name: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Standard two-leg' },
              { name: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Forced matrix' },
              { name: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width' },
              { name: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Generational bonus' },
              { name: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix' },
              { name: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Custom combinations' },
              { name: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-based' },
              { name: 'Autopool Plan MLM', href: '/autopool-plan-mlm-software', desc: 'Auto-placement pool' }
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-green-700 font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/mlm-software" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-green-100">All-in-one solution</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Pricing</h3>
              <p className="text-blue-100">Transparent pricing</p>
            </Link>
            <Link href="/mlm-software-developer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hire MLM Developers</h3>
              <p className="text-purple-100">Custom development</p>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Generation Plan MLM Software | Best Generational MLM Software Development | EifaSoft',
    description: 'Best Generation Plan MLM Software with unlimited depth tracking, generational commissions, gap commission, leadership bonuses, and rank system. Generation-based depth tracking with breakaway options. Powerful generational MLM software starting ₹2,50,000. Mobile apps included.',
    canonical: '/generation-plan-mlm-software',
    keywords: [
      'generation plan MLM software',
      'generation MLM software',
      'generational MLM software',
      'generation plan software',
      'generational compensation plan',
      'generation MLM system',
      'MLM generation plan',
      'depth-based MLM software',
      'leadership bonus MLM',
      'generational commission software',
      'generation plan india',
      'generational override bonus',
      'royalty bonus MLM',
      'generation MLM app',
      'custom generational MLM development',
      'leadership generation MLM',
      'breakaway generation plan',
      'generational compression MLM',
      'generation plan development company',
      'multi-generation MLM',
      'generation plan commission calculator',
      'senior leader MLM software',
      'gap commission software',
      'generation bonus MLM software',
      'generation tracking software',
      'rank system MLM',
      'leadership pool MLM',
      'generation MLM e-wallet',
      'generation MLM genealogy',
      'generation plan software price',
      'best generation MLM software'
    ],
  });
}

export default function GenerationPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Generation Plan MLM Software Development',
    'Comprehensive generation plan MLM software with unlimited depth tracking, generational commissions, leadership bonuses, and rank achievement system.',
    '/generation-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Generation Plan MLM Software',
    'Complete generation plan MLM software solution with generational structure, depth-based commissions, leadership tracking, and advanced analytics.',
    '2,50,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Generation Plan MLM Software',
    description: 'Specialized Generation Plan MLM software with unlimited depth tracking, generational commissions, leadership bonuses, and rank achievement system for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '250000',
    rating: 4.8,
    reviewCount: 92,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Generation Plan in MLM?',
      answer: 'Generation Plan is an MLM compensation structure where commissions are paid based on generations (groups of leaders) rather than levels. A generation starts with a qualified leader and includes all distributors below them until the next qualified leader. This plan rewards leadership development and allows unlimited depth earnings.'
    },
    {
      question: 'How is Generation Plan different from Unilevel Plan?',
      answer: 'Unilevel Plan pays commissions on fixed levels (1-10 levels typically), while Generation Plan pays based on generations of leaders. In Generation Plan, you can earn from unlimited depth as long as you maintain qualification. If you sponsor 5 leaders, you earn from all 5 generations regardless of how deep they go.'
    },
    {
      question: 'What are the qualification criteria for generation commissions?',
      answer: 'Typical qualification criteria include: maintaining personal sales volume (e.g., ₹10,000/month), achieving team sales targets, maintaining active status, sponsoring minimum distributors (e.g., 3-5 personally sponsored), and achieving specific rank requirements. Each company sets their own qualification rules.'
    },
    {
      question: 'How many generations can I earn from?',
      answer: 'Most generation plans allow 3-7 generations of commission, though some offer unlimited generations for top ranks. Common structures: Bronze rank (3 generations), Silver rank (4 generations), Gold rank (5 generations), Platinum rank (6 generations), Diamond rank (7+ generations). Higher ranks unlock more generation depth.'
    },
    {
      question: 'What is compression in Generation Plan?',
      answer: 'Compression occurs when a non-qualified distributor is "skipped" and their generation is compressed up to the next qualified upline. For example, if Gen 1 is qualified, Gen 2 is not qualified, and Gen 3 is qualified, Gen 2\'s volume compresses to Gen 1, making Gen 3 become Gen 2 for commission purposes.'
    },
    {
      question: 'What are leadership bonuses in Generation Plan?',
      answer: 'Leadership bonuses are extra rewards for developing qualified leaders in your organization. Examples: ₹10,000 for each new qualified leader, ₹50,000 for promoting someone to next rank, monthly pool bonus distributed among top leaders, car/travel bonuses for achieving specific leadership targets.'
    },
    {
      question: 'Can Generation Plan be combined with other MLM plans?',
      answer: 'Yes, Generation Plan is often combined with other plans in hybrid structures. Common combinations: Unilevel + Generation (levels for fast start, generations for depth), Binary + Generation (binary for team building, generations for leadership), Matrix + Generation (matrix for spillover, generations for leadership development).'
    },
    {
      question: 'What features does your Generation Plan MLM software include?',
      answer: 'Our software includes: real-time generation tracking, automatic compression calculation, leadership qualification tracking, rank advancement system, generational commission engine, unlimited depth genealogy tree, leadership bonus automation, generation breakage prevention, mobile-responsive dashboard, and comprehensive analytics.'
    },
    {
      question: 'How is generation breakage handled?',
      answer: 'Generation breakage occurs when a qualified leader leaves a generation gap. Our software handles this through: automatic re-calculation of generation structure, compression to next qualified upline, notification to affected members, historical tracking of changes, rollover provisions (if configured), and detailed breakage reports for transparency.'
    },
    {
      question: 'What is the pricing for Generation Plan MLM software?',
      answer: 'Our Generation Plan MLM software starts at ₹2,50,000 for basic features (up to 1000 members, 5 generations, basic compression). Advanced package at ₹5,00,000 includes unlimited members, 7+ generations, advanced compression, leadership pools. Enterprise solutions with custom features, integrations, and mobile apps available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Generation Plan MLM Software', url: '/generation-plan-mlm-software' }
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />

      <Hero
        title="Generation Plan MLM Software"
        subtitle="Leadership-Based Depth Compensation"
        description="Build your generation MLM network with powerful leadership tracking software. Unlimited depth earnings, generational commissions, rank advancement, and leadership bonuses."
        gradient="blue"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is Generation Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Generation Plan MLM Software</strong> is a network marketing system where commissions are paid based on generations (groups of leaders) rather than fixed levels. A generation starts with a qualified leader and includes all distributors below until the next qualified leader. This plan rewards leadership development and allows unlimited depth earnings, making it ideal for companies focused on building strong leadership teams.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📈</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Unlimited Depth Earnings</p>
                  <p className="text-sm text-gray-600">Earn from entire generations, not just levels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Leadership Rewards</p>
                  <p className="text-sm text-gray-600">Bonuses for developing qualified leaders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rank Advancement</p>
                  <p className="text-sm text-gray-600">Progressive tiers unlock more generations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Auto Compression</p>
                  <p className="text-sm text-gray-600">Skip non-qualified members automatically</p>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Generation Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Generation Plan MLM Software is a sophisticated compensation system where commissions are calculated based on <strong>generations of leaders</strong> rather than fixed levels. A generation begins with a qualified leader and includes all distributors in their downline until the next qualified leader is reached.
              </p>
              <p>
                This plan is ideal for companies that want to reward <strong>leadership development</strong> and allow top performers to earn from <strong>unlimited depth</strong>. Unlike traditional level-based plans that cap earnings at 5-10 levels, generation plans enable qualified distributors to earn from their entire organization, regardless of depth.
              </p>
              <p>
                Our Generation Plan MLM Software provides real-time generation tracking, automatic compression calculations, leadership qualification monitoring, and comprehensive analytics to manage complex generational structures efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Generation Plan Works */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Generation Plan Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Understanding Generations</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg">YOU (Qualified Leader)</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Generation 1 */}
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                      <div className="font-bold text-blue-700 mb-2 text-center">GENERATION 1</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Distributor A</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor B</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor C</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                          <span>Leader 1</span>
                          <span className="text-green-600">✓ Qualified</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t text-center">
                        <p className="text-xs text-gray-600">Ends at first qualified leader</p>
                      </div>
                    </div>

                    {/* Generation 2 */}
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <div className="font-bold text-green-700 mb-2 text-center">GENERATION 2</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Under Leader 1</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor D</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor E</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                          <span>Leader 2</span>
                          <span className="text-green-600">✓ Qualified</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t text-center">
                        <p className="text-xs text-gray-600">Starts from Leader 1</p>
                      </div>
                    </div>

                    {/* Generation 3 */}
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                      <div className="font-bold text-purple-700 mb-2 text-center">GENERATION 3</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Under Leader 2</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor F</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Distributor G</span>
                          <span className="text-gray-500">Not Qualified</span>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                          <span>Leader 3</span>
                          <span className="text-green-600">✓ Qualified</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t text-center">
                        <p className="text-xs text-gray-600">Starts from Leader 2</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm"><strong>Key Point:</strong> You earn commissions from all sales in Gen 1, Gen 2, and Gen 3 (if qualified for 3 generations). Each generation includes all distributors until the next qualified leader.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Commission Example</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Generation 1</span>
                      <span className="text-blue-600 font-bold">8%</span>
                    </div>
                    <p className="text-sm text-gray-600">Total Gen 1 Sales: ₹5,00,000</p>
                    <p className="text-sm font-bold text-green-600">Commission: ₹40,000</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Generation 2</span>
                      <span className="text-blue-600 font-bold">6%</span>
                    </div>
                    <p className="text-sm text-gray-600">Total Gen 2 Sales: ₹8,00,000</p>
                    <p className="text-sm font-bold text-green-600">Commission: ₹48,000</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Generation 3</span>
                      <span className="text-blue-600 font-bold">4%</span>
                    </div>
                    <p className="text-sm text-gray-600">Total Gen 3 Sales: ₹12,00,000</p>
                    <p className="text-sm font-bold text-green-600">Commission: ₹48,000</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-400">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total Monthly Income</span>
                      <span className="text-green-700 font-bold text-2xl">₹1,36,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Rank-Based Generations</h3>
                <div className="space-y-3">
                  {[
                    { rank: 'Bronze', generations: '3 Generations', bonus: 'None' },
                    { rank: 'Silver', generations: '4 Generations', bonus: '₹10,000/month' },
                    { rank: 'Gold', generations: '5 Generations', bonus: '₹25,000/month' },
                    { rank: 'Platinum', generations: '6 Generations', bonus: '₹50,000/month' },
                    { rank: 'Diamond', generations: '7 Generations', bonus: '₹1,00,000/month' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-gray-900">{item.rank}</p>
                          <p className="text-sm text-blue-600">{item.generations}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Leadership Bonus</p>
                          <p className="text-sm font-bold text-green-600">{item.bonus}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Generation Plan Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Real-Time Generation Tracking',
                description: 'Automatically identifies and tracks generations based on qualification status. Visual genealogy tree shows generation boundaries in real-time.',
                icon: '📊'
              },
              {
                title: 'Automatic Compression',
                description: 'When non-qualified distributors exist, system automatically compresses generations upward to next qualified member.',
                icon: '🔄'
              },
              {
                title: 'Leadership Qualification',
                description: 'Set custom qualification criteria: personal volume, team sales, rank requirements, active status, sponsor count.',
                icon: '🏆'
              },
              {
                title: 'Unlimited Depth',
                description: 'Earn from unlimited depth as long as you maintain qualification. No artificial level caps on earnings.',
                icon: '∞'
              },
              {
                title: 'Leadership Bonuses',
                description: 'Automated bonuses for developing new leaders, rank advancements, pool distributions, and achievement rewards.',
                icon: '💰'
              },
              {
                title: 'Rank Advancement System',
                description: 'Progressive rank structure with increasing generation depth. Automatic rank upgrades based on performance criteria.',
                icon: '⬆️'
              },
              {
                title: 'Breakage Protection',
                description: 'Handles generation breakage when leaders leave. Re-calculates structure, compresses gaps, maintains commission integrity.',
                icon: '🛡️'
              },
              {
                title: 'Commission Engine',
                description: 'Powerful calculation engine processes complex generation commissions in real-time. Handles compression, breakage, rollovers.',
                icon: '⚙️'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Detailed reports on generation performance, leadership development, compression analytics, qualification tracking.',
                icon: '📈'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compression Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Understanding Compression</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-700">Without Compression (Lost Commissions)</h3>
                  <div className="bg-red-50 p-6 rounded-lg space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span>You (Qualified)</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                        <span>Member A (Not Qualified)</span>
                        <span className="text-red-600">✗</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white rounded">
                          <span>Leader 1 (Qualified)</span>
                          <span className="text-green-600">✓</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-100 p-3 rounded mt-4">
                      <p className="text-red-800 font-semibold">Problem: Member A&apos;s volume is lost because they&apos;re not qualified!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-700">With Compression (Maximum Earnings)</h3>
                  <div className="bg-green-50 p-6 rounded-lg space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-white rounded">
                      <span>You (Qualified)</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-yellow-100 rounded border-2 border-yellow-400">
                        <span>Member A (Compressed Up)</span>
                        <span className="text-blue-600">↑</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white rounded">
                          <span>Leader 1 (Still Gen 1)</span>
                          <span className="text-green-600">✓</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 p-3 rounded mt-4">
                      <p className="text-green-800 font-semibold">Solution: Member A&apos;s volume compresses to you! Leader 1 stays in Gen 1.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Compression Benefits:</strong> Ensures no volume is wasted, rewards qualified members, encourages qualification, maximizes upline earnings, maintains fairness in compensation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Generation Plan Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Generation',
                price: '₹2,50,000',
                features: [
                  'Up to 1,000 members',
                  '5 generation depth tracking',
                  'Basic compression logic',
                  'Qualification tracking',
                  'Commission calculation',
                  'Member dashboard',
                  'Admin panel',
                  'Basic reports',
                  'Email notifications',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Generation',
                price: '₹5,00,000',
                features: [
                  'Unlimited members',
                  '7+ generation depth',
                  'Advanced compression',
                  'Leadership bonus pools',
                  'Rank advancement system',
                  'Real-time genealogy',
                  'Mobile app included',
                  'Advanced analytics',
                  'E-wallet integration',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Generation',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Unlimited generations',
                  'Custom compression rules',
                  'Multi-currency support',
                  'API integrations',
                  'White-label solution',
                  'Custom features',
                  'Dedicated server',
                  'Priority support',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
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

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Generation Plan?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Unlimited Earning Potential',
                  description: 'Earn from unlimited depth without artificial level caps. As long as you maintain qualification, your income potential is truly unlimited.'
                },
                {
                  title: 'Rewards Leadership',
                  description: 'Specifically designed to reward leaders who develop other leaders. The more qualified leaders you create, the more generations you earn from.'
                },
                {
                  title: 'Fair Compression',
                  description: 'Compression ensures no volume is wasted. Non-qualified members\' volume compresses up to the next qualified member, maximizing earnings.'
                },
                {
                  title: 'Scalable Structure',
                  description: 'Works for small startups and large enterprises. Add more generation depth as your top performers advance in rank.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-blue-700">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-powered MLM' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-blue-100">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
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
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Single Leg Plan MLM Software | Monoline MLM Software | EifaSoft',
    description: 'Best Single Leg Plan MLM Software with monoline structure, sequential placement, and spillover benefits. Powerful single line MLM software starting ₹2,00,000.',
    canonical: '/single-leg-plan-mlm-software',
    keywords: ['single leg plan MLM software', 'monoline MLM software', 'single line MLM', 'linear MLM software', 'single leg compensation plan', 'monoline plan software', 'sequential MLM software', 'single queue MLM', 'linear compensation MLM', 'single leg MLM india', 'monoline network marketing software', 'single leg plan development', 'MLM queue software', 'FIFO MLM software', 'cycler MLM software', 'spillover MLM single leg', 'single leg MLM app', 'single leg MLM moradabad', 'linear plan network marketing', 'single line MLM development company', 'monoline plan india', 'affordable single leg MLM software'],
  });
}

export default function SingleLegPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Single Leg Plan MLM Software Development',
    'Comprehensive single leg plan MLM software with monoline structure, sequential member placement, automatic spillover, and linear commission tracking.',
  );

  const productSchema = generateProductSchema(
    'Single Leg Plan MLM Software',
    'Complete single leg MLM software solution with linear placement, spillover system, level-based commissions, and automatic queue management.',
    '2,00,000'
  );

  const faqs = [
    {
      question: 'What is Single Leg Plan in MLM?',
      answer: 'Single Leg Plan (also called Monoline or Linear Plan) is an MLM compensation structure where all members are placed in a single line or queue, one after another. Unlike Binary (2 legs) or Matrix (multiple width), Single Leg has no width limitation - it\'s just one continuous line. Members are placed sequentially in joining order (FIFO - First In First Out), creating a simple, linear downline structure. Everyone benefits from spillover as all new members join below existing members in sequence.'
    },
    {
      question: 'How does Single Leg Plan work?',
      answer: 'In Single Leg Plan, when you join, you are placed at the end of the single queue. All members who join after you are placed below you in sequence, regardless of who sponsors them. Commissions are earned from a certain number of levels below you (e.g., 10-20 levels). Example: You join as Member #100. Next person joins as #101 (directly below you), then #102, #103, etc. You earn commissions from all these members based on level-wise percentage or fixed amounts. This creates massive spillover benefits for early joiners.'
    },
    {
      question: 'What is the difference between Single Leg and Unilevel Plan?',
      answer: 'Key differences: Placement - Single Leg: All members in one sequential line regardless of sponsor. Unilevel: Members placed directly under their sponsor in unlimited width. Spillover - Single Leg: Maximum spillover, everyone gets members below them. Unilevel: Spillover only within sponsor\'s team. Depth - Single Leg: Can have unlimited depth in single line. Unilevel: Depth limited (5-10 levels typically). Team Building - Single Leg: No team building needed, automatic placement. Unilevel: Active recruitment and team building required.'
    },
    {
      question: 'What are the advantages of Single Leg Plan?',
      answer: 'Advantages include: Simple structure - easiest MLM plan to understand, Maximum spillover - everyone benefits from all new joiners, No placement decisions - automatic sequential placement, Fair distribution - FIFO ensures fairness, Passive income potential - earn from members you didn\'t personally recruit, Low entry barrier - minimal recruitment pressure, Suitable for beginners - no complex team building, Viral growth potential - linear growth benefits all early members.'
    },
    {
      question: 'What are the disadvantages of Single Leg Plan?',
      answer: 'Disadvantages include: Early joiner advantage - first members benefit most, Late joiners wait longer - members far down the queue wait for deep levels, Limited motivation - no direct sponsorship rewards in pure single leg, Sustainability concerns - depends heavily on continuous new member influx, No team building rewards - unlike binary or matrix plans, Regulatory scrutiny - simple structure can attract regulatory attention, Compression issues - inactive members can break commission flow, Requires large member base - needs continuous growth to sustain payouts.'
    },
    {
      question: 'How are commissions calculated in Single Leg Plan?',
      answer: 'Common commission structures: 1) Level-based percentage: Level 1 (5%), Level 2 (4%), Level 3 (3%), continuing down. 2) Fixed amount per level: ₹100 from each member in first 10 levels. 3) Rank-based levels: Bronze gets 5 levels, Silver gets 10 levels, Gold gets 20 levels. 4) Cycler system: Every 10 members = 1 cycle complete, earn ₹5,000 per cycle. Our software supports all commission models with automatic calculation.'
    },
    {
      question: 'What is a cycler bonus in Single Leg Plan?',
      answer: 'A cycler bonus rewards members for completing cycles in the single leg. Example: Bronze Cycler = 10 members below you = ₹5,000 bonus, Silver Cycler = 50 members = ₹30,000 bonus, Gold Cycler = 100 members = ₹75,000 bonus, Platinum Cycler = 500 members = ₹5,00,000 bonus. After completing a cycle, member can re-enter at the end of queue or advance to higher cycler level. This creates recurring income opportunities and encourages long-term participation.'
    },
    {
      question: 'What features does your Single Leg Plan MLM software include?',
      answer: 'Key features: Sequential placement engine (automatic FIFO queue), Single line genealogy tree visualization, Level-based commission calculation, Cycler bonus system, Member position tracking (queue number), Automatic spillover distribution, Compression for inactive members, Rank advancement system, Re-entry management for cyclers, Real-time queue monitoring, Member dashboard with position and earnings, Admin panel with queue management, Payment gateway integration, E-wallet system, Comprehensive reports and analytics.'
    },
    {
      question: 'Can Single Leg Plan be combined with other plans?',
      answer: 'Yes, Single Leg is often combined with other plans in hybrid structures: 1) Single Leg + Binary: Linear spillover + team building rewards, 2) Single Leg + Unilevel: Sequential placement + direct sponsorship bonuses, 3) Single Leg + Matrix: Linear queue + forced matrix structure, 4) Single Leg + Product Sales: Monoline placement + retail profit commissions. Hybrid combinations leverage single leg\'s spillover benefits while adding recruitment incentives from other plans.'
    },
    {
      question: 'What is the pricing for Single Leg Plan MLM software?',
      answer: 'Single Leg Plan MLM software starts at ₹2,00,000 for basic features (up to 5000 members, sequential placement, 10-level commissions, basic cycler system, member dashboard, admin panel). Advanced package at ₹4,00,000 includes unlimited members, 20+ level depth, advanced cycler bonuses, re-entry management, mobile apps, compression features. Enterprise solutions with custom features, hybrid plan combinations, API integrations, white-label options available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Single Leg Plan MLM Software', url: '/single-leg-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Single Leg Plan MLM Software Development"
        subtitle="Powerful monoline MLM software with sequential placement, automatic spillover, and linear commission structure"
        description="Build your single-line MLM business with simple yet effective monoline software"
        gradient="blue"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Single Leg Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Single Leg Plan MLM Software (also known as <strong>Monoline or Linear Plan</strong>) is the simplest MLM compensation structure where all members are placed in a <strong>single sequential line or queue</strong>. Unlike Binary plans with two legs or Matrix plans with multiple positions, Single Leg has just one continuous line where members join one after another.
              </p>
              <p>
                The key advantage is <strong>maximum spillover benefits</strong> - when anyone joins the system (regardless of who sponsors them), they are placed at the end of the queue, benefiting all members above them. This creates a fair, FIFO (First In First Out) structure where earlier members automatically have more people below them without any recruitment effort.
              </p>
              <p>
                Our Single Leg Plan MLM Software automates the sequential placement process, tracks member positions in the queue, calculates level-based commissions, manages cycler bonuses, handles re-entry for completed cycles, and provides comprehensive genealogy visualization of the single line structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Single Leg Works */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Single Leg Plan Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-blue-700 text-center">Sequential Placement Structure</h3>
              
              <div className="space-y-6">
                {/* Visual Single Line */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                  <div className="space-y-4">
                    {[
                      { position: '#1', name: 'First Member', earnings: 'Earns from all below', color: 'purple' },
                      { position: '#2', name: 'Second Member', earnings: 'Earns from #3 onwards', color: 'blue' },
                      { position: '#3', name: 'Third Member', earnings: 'Earns from #4 onwards', color: 'green' },
                      { position: '#4', name: 'Fourth Member', earnings: 'Earns from #5 onwards', color: 'orange' },
                      { position: '#5', name: 'You Join Here', earnings: 'Earn from all below you', color: 'pink', highlight: true },
                      { position: '#6', name: 'New Member', earnings: 'You earn from this member', color: 'teal' },
                      { position: '#7', name: 'New Member', earnings: 'You earn from this member', color: 'teal' },
                      { position: '#8', name: 'New Member', earnings: 'You earn from this member', color: 'teal' },
                    ].map((member, index) => (
                      <div key={index} className={`flex items-center ${member.highlight ? 'scale-105' : ''}`}>
                        <div className={`${member.highlight ? 'bg-gradient-to-r from-yellow-400 to-orange-400 ring-4 ring-yellow-300' : 'bg-white'} border-2 border-${member.color}-300 rounded-lg p-4 flex-1 shadow-md`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`bg-${member.color}-600 text-white px-4 py-2 rounded-full font-bold min-w-[60px] text-center`}>
                                {member.position}
                              </div>
                              <div>
                                <p className={`font-bold ${member.highlight ? 'text-gray-900 text-lg' : 'text-gray-800'}`}>
                                  {member.name}
                                  {member.highlight && <span className="ml-2 text-orange-600">← YOU</span>}
                                </p>
                                <p className="text-sm text-gray-600">{member.earnings}</p>
                              </div>
                            </div>
                            {index < 7 && (
                              <div className="text-2xl text-gray-400">↓</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-4 text-center">
                        <p className="text-gray-600 font-semibold">... Continues Infinitely ...</p>
                        <p className="text-sm text-gray-500">All new members join at the end of queue</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-3">Key Concept: Everyone Benefits from Spillover</h4>
                  <p className="text-gray-700 text-sm">
                    In Single Leg Plan, when Member #100 joins (sponsored by anyone), they are placed at position #100 in the queue. 
                    This means Member #1 has 99 people below them, Member #5 (you) has 95 people below you. 
                    ALL members above #100 earn commissions from Member #100&apos;s purchases or contributions, regardless of who sponsored them!
                  </p>
                </div>
              </div>
            </div>

            {/* Commission Structure */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Level-Based Commissions</h3>
                <div className="space-y-3">
                  {[
                    { level: 'Level 1', members: '1 member', commission: '10%', example: '₹1,000 on ₹10,000' },
                    { level: 'Level 2-3', members: '2 members', commission: '8%', example: '₹1,600 total' },
                    { level: 'Level 4-5', members: '2 members', commission: '6%', example: '₹1,200 total' },
                    { level: 'Level 6-10', members: '5 members', commission: '4%', example: '₹2,000 total' },
                    { level: 'Level 11-20', members: '10 members', commission: '2%', example: '₹2,000 total' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-900">{item.level}</span>
                        <span className="text-blue-600 font-bold">{item.commission}</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Members: {item.members}</p>
                        <p className="text-green-600 font-semibold">Example: {item.example}</p>
                      </div>
                    </div>
                  ))}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total Potential (20 levels)</span>
                      <span className="text-green-700 font-bold text-xl">₹7,800</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-700">Cycler Bonus System</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Bronze Cycler', members: '10 members', bonus: '₹5,000', color: 'orange' },
                    { name: 'Silver Cycler', members: '50 members', bonus: '₹30,000', color: 'gray' },
                    { name: 'Gold Cycler', members: '100 members', bonus: '₹75,000', color: 'yellow' },
                    { name: 'Platinum Cycler', members: '500 members', bonus: '₹5,00,000', color: 'blue' },
                  ].map((cycler, index) => (
                    <div key={index} className={`bg-gradient-to-r from-${cycler.color}-50 to-${cycler.color}-100 p-4 rounded-lg border-2 border-${cycler.color}-300`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`bg-${cycler.color}-600 text-white px-3 py-1 rounded-full font-bold text-sm`}>
                          {cycler.name}
                        </div>
                        <div className="text-green-700 font-bold text-lg">{cycler.bonus}</div>
                      </div>
                      <p className="text-sm text-gray-600">Complete when {cycler.members} join below you</p>
                    </div>
                  ))}
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-300">
                    <p className="text-sm text-gray-700">
                      <strong>Re-Entry:</strong> After completing a cycle, you can re-enter at the end of the queue to earn again, creating recurring income!
                    </p>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Single Leg Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Sequential Placement Engine',
                description: 'Automatic FIFO queue management. Members placed sequentially in joining order. No manual placement decisions required.',
                icon: '📊'
              },
              {
                title: 'Single Line Genealogy',
                description: 'Visual representation of entire single leg. See your position, members above and below, queue number, earnings from each level.',
                icon: '📈'
              },
              {
                title: 'Level-Based Commissions',
                description: 'Configure unlimited levels with custom percentages or fixed amounts. Automatic calculation from each level member.',
                icon: '💰'
              },
              {
                title: 'Cycler Bonus System',
                description: 'Multiple cycler levels (Bronze, Silver, Gold, Platinum). Automatic detection and bonus payout when cycles complete.',
                icon: '🔄'
              },
              {
                title: 'Re-Entry Management',
                description: 'After completing cycles, members can re-enter queue. Automatic re-positioning, recurring earning potential.',
                icon: '♻️'
              },
              {
                title: 'Position Tracking',
                description: 'Real-time queue position display. Show member number, people above/below, estimated earning timeline.',
                icon: '🎯'
              },
              {
                title: 'Compression Feature',
                description: 'Inactive members automatically compressed out. Active members move up, ensuring commission flow continuity.',
                icon: '⚙️'
              },
              {
                title: 'Rank Advancement',
                description: 'Progressive ranks based on downline count. Higher ranks unlock more commission levels and bonuses.',
                icon: '🏆'
              },
              {
                title: 'Spillover Notifications',
                description: 'Email/SMS alerts when new members join below you. Real-time earnings updates, cycle completion alerts.',
                icon: '🔔'
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Single Leg Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Single Leg',
                price: '₹2,00,000',
                features: [
                  'Up to 5,000 members',
                  'Sequential placement',
                  '10 commission levels',
                  'Basic cycler system',
                  'Member dashboard',
                  'Position tracking',
                  'Admin panel',
                  'Email notifications',
                  'Basic reports',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Single Leg',
                price: '₹4,00,000',
                features: [
                  'Unlimited members',
                  'Automatic placement',
                  '20+ commission levels',
                  'Advanced cycler bonuses',
                  'Re-entry management',
                  'Compression feature',
                  'Mobile apps',
                  'Single line genealogy',
                  'Advanced analytics',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Single Leg',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Unlimited levels',
                  'Custom cycler structures',
                  'Hybrid plan combination',
                  'Multi-currency support',
                  'API integrations',
                  'White-label solution',
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
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Autopool Plan', href: '/autopool-plan-mlm-software', desc: 'Automatic pooling cycler system' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Find the right compensation structure</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactForm serviceName="Single Leg Plan MLM" />
    </>
  );
}

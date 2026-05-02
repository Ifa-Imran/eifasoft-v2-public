import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Board Plan MLM Software | Best Revolving Matrix MLM Software | Cycler MLM | EifaSoft',
    description: 'Best Board Plan MLM Software with revolving matrix structure, board completion bonuses, board cycling, re-entry system, and split board mechanics. Quick returns with cycler system. Powerful board MLM software starting ₹2,00,000. Free demo available.',
    canonical: '/board-plan-mlm-software',
    keywords: [
      'board plan MLM software',
      'board MLM software',
      'revolving matrix MLM',
      'revolving matrix software',
      'cycler MLM plan',
      'cycling matrix MLM',
      'board completion bonus',
      'matrix board plan',
      'board MLM compensation plan',
      'MLM board software development',
      'board plan MLM india',
      '2x2 board MLM',
      '3x3 board plan',
      'board split MLM software',
      'cycler board MLM',
      'gift board MLM software',
      'board completion cycler',
      'board MLM app development',
      'board plan commission calculator',
      'multiple board MLM system',
      'board re-entry MLM',
      're-entry system MLM',
      'split boards MLM',
      'revolving board plan india',
      'board plan development company',
      'affordable board MLM software',
      'quick returns MLM',
      'board MLM e-wallet',
      'board plan software price',
      'best board MLM software'
    ],
  });
}

export default function BoardPlanMLMSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'Board Plan MLM Software Development',
    'Professional Board Plan MLM software with revolving matrix boards, automatic board splitting, re-entry system, and completion bonuses for unlimited growth potential.',
    'https://www.eifasoft.com/board-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Board Plan MLM Software',
    'Complete Board MLM software with cycler system and revolving matrix structure',
    '2,00,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Board Plan MLM Software',
    description: 'Specialized Board Plan MLM software with revolving matrix boards, automatic board splitting, re-entry system, and completion bonuses for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '200000',
    rating: 4.8,
    reviewCount: 85,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Board Plan in MLM and how does it work?',
      answer: 'Board Plan (also called Revolving Matrix or Cycler Plan) is an MLM structure where members fill limited positions on a "board" or matrix (typically 2x2, 3x3, or 2x3). When all positions are filled, the board "cycles" - the top member exits with a bonus, splits into multiple new boards, or moves to a higher board level. New members continue filling lower boards, creating a revolving cycle. For example, in a 2x2 board: you need 2 direct members, they each recruit 2 (total 6 positions), board completes, you earn a completion bonus and either re-enter at bottom or move to next level board.',
    },
    {
      question: 'What are the advantages of Board Plan MLM Software?',
      answer: 'Board Plan offers unique benefits: 1) Small team focus - only need to fill a few positions to cycle, 2) Fast completion - smaller boards fill quickly creating momentum, 3) Re-entry opportunity - members can rejoin multiple times for unlimited earnings, 4) Spillover benefit - upline members help fill your board, 5) Clear goals - visual board makes progress easy to track, 6) Multiple income streams - earn from board completions and re-entries, 7) Scalability - can operate multiple boards simultaneously. It creates excitement with frequent completions and provides multiple earning cycles.',
    },
    {
      question: 'How do board completions and cycling work?',
      answer: 'Board cycling works in stages: 1) Member joins and enters a board at Level 1, 2) They fill their positions (e.g., 2 direct + 4 indirect in 2x2), 3) When all 6 positions filled, board "completes", 4) Top member (you) receives completion bonus (e.g., ₹10,000), 5) Board splits - you re-enter 2-4 new boards OR move to Level 2 board, 6) Process repeats at higher levels with bigger bonuses. Some plans allow unlimited re-entries, others have level limits. Our software handles automatic board creation, member placement, completion detection, and bonus payouts.',
    },
    {
      question: 'What board sizes and structures are supported?',
      answer: 'Our Board Plan software supports multiple configurations: 1) 2x2 Board - 6 total positions (2+4), most popular for fast cycles, 2) 3x3 Board - 12 total positions (3+9), balanced structure, 3) 2x3 Board - 14 total positions (2+4+8), deeper board, 4) Custom sizes - any width x depth combination. You can implement: Single-level boards (cycle and re-enter same level), Multi-level boards (Level 1→2→3 progression), Hybrid boards (different sizes per level), Multiple simultaneous boards. Fully configurable board dimensions and cycling rules.',
    },
    {
      question: 'What is the cost of Board Plan MLM Software?',
      answer: 'Board Plan MLM Software starts from ₹2,00,000 for basic features with single board type, up to 5,000 members, automatic cycling, and completion bonuses. Advanced packages (₹4,00,000 - ₹7,00,000) include multiple board levels, unlimited re-entries, mobile apps, and 25,000+ members. Enterprise solutions with custom board structures, blockchain integration, and unlimited members cost ₹7,00,000+. All packages include source code, board visualization, automatic placement, completion tracking, bonus calculations, installation, training, and 6-12 months support.',
    },
    {
      question: 'Can members participate in multiple boards simultaneously?',
      answer: 'Yes! Our Board Plan software supports: 1) Multiple Position Purchase - members can buy multiple board positions at once, 2) Re-entry System - after completing a board, automatically enter new boards, 3) Level Stacking - participate in multiple board levels (1, 2, 3) simultaneously, 4) Fast Track - purchase positions at higher levels directly, 5) Board Transfer - move positions between boards, 6) Team Boards - join boards with team members. The software tracks all positions, manages multiple board memberships, calculates separate bonuses for each board, and provides a dashboard showing all active boards and their fill status.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'MLM Software', url: 'https://www.eifasoft.com/mlm-software-development-company' },
    { name: 'Board Plan', url: 'https://www.eifasoft.com/board-plan-mlm-software' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Board Plan MLM Software"
        subtitle="Revolving Matrix Cycler System"
        description="Launch your Board MLM network with powerful cycler software. Automatic board filling, completion bonuses, re-entry system, and unlimited earning potential. Perfect for creating viral growth momentum."
        gradient="purple"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Board Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Board Plan MLM Software</strong> is a specialized network marketing system based on revolving matrix boards (also called cycler plans). Members fill limited positions on a board (typically 2x2, 3x3). When all positions are filled, the board &quot;cycles&quot; - the top member exits with a bonus and re-enters or moves to a higher board level. This creates continuous cycling opportunities and viral growth momentum for MLM businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Revolving Matrix Boards</p>
                  <p className="text-sm text-gray-600">2x2, 3x3, or custom board configurations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Auto Board Splitting</p>
                  <p className="text-sm text-gray-600">Automatic board creation and member placement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Re-entry System</p>
                  <p className="text-sm text-gray-600">Unlimited earning cycles with re-entry</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Completion Bonuses</p>
                  <p className="text-sm text-gray-600">Instant payouts on board completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Board Plan Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Board Plan MLM Works</h2>
              <p className="text-lg text-gray-600">
                Small boards that cycle and create unlimited earning opportunities
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">2x2 Board Example (6 Positions)</h3>
              <div className="max-w-md mx-auto">
                <div className="text-center mb-4">
                  <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-bold">YOU</div>
                  <p className="text-sm text-gray-600 mt-2">Board Owner (Position 1)</p>
                </div>
                <div className="flex justify-center gap-8 mb-4">
                  <div className="text-center">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full mb-1">A</div>
                    <p className="text-xs text-gray-600">Level 1</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full mb-1">B</div>
                    <p className="text-xs text-gray-600">Level 1</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mb-6">
                  <div className="bg-green-400 text-white px-3 py-2 rounded-full text-xs">C</div>
                  <div className="bg-green-400 text-white px-3 py-2 rounded-full text-xs">D</div>
                  <div className="bg-green-400 text-white px-3 py-2 rounded-full text-xs">E</div>
                  <div className="bg-green-400 text-white px-3 py-2 rounded-full text-xs">F</div>
                </div>
                <div className="bg-yellow-100 border-2 border-yellow-500 p-4 rounded-lg text-center">
                  <p className="font-bold text-yellow-800">Board Complete! 🎉</p>
                  <p className="text-sm text-yellow-700 mt-1">You earn completion bonus & cycle out</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Join Board', desc: 'Enter Level 1 board with joining fee' },
                { step: '2', title: 'Fill Positions', desc: '6 positions fill with your team' },
                { step: '3', title: 'Board Cycles', desc: 'Get completion bonus when full' },
                { step: '4', title: 'Re-Enter', desc: 'Split into new boards or move up' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Board Configurations</h2>
            <p className="text-lg text-gray-600">
              Multiple board sizes for different business models
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: '2x2 Board',
                positions: 6,
                structure: '2 direct + 4 level 2',
                cycleTime: 'Fast (days)',
                bonus: '₹5,000 - ₹10,000',
                bestFor: 'Quick cycles, momentum building',
              },
              {
                name: '3x3 Board',
                positions: 12,
                structure: '3 direct + 9 level 2',
                cycleTime: 'Medium (weeks)',
                bonus: '₹15,000 - ₹30,000',
                bestFor: 'Balanced growth, stable income',
              },
              {
                name: '2x3 Board',
                positions: 14,
                structure: '2 + 4 + 8 levels',
                cycleTime: 'Slower (weeks-months)',
                bonus: '₹25,000 - ₹50,000',
                bestFor: 'Higher payouts, committed teams',
              },
            ].map((board) => (
              <div key={board.name} className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-100">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">{board.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Positions:</span>
                    <span className="font-semibold">{board.positions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Structure:</span>
                    <span className="font-semibold">{board.structure}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cycle Time:</span>
                    <span className="font-semibold">{board.cycleTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bonus:</span>
                    <span className="font-semibold text-green-600">{board.bonus}</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Best For:</p>
                  <p className="text-sm text-gray-700">{board.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Board Plan Software Features</h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage board-based MLM
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: 'Auto Board Creation', description: 'Automatic new board generation on completion', icon: '🔄' },
              { feature: 'Smart Placement', description: 'Intelligent member placement to fill boards efficiently', icon: '🎯' },
              { feature: 'Board Visualization', description: 'Visual representation of all active boards', icon: '📊' },
              { feature: 'Completion Tracking', description: 'Real-time monitoring of board fill status', icon: '✅' },
              { feature: 'Re-Entry System', description: 'Automatic re-entry into new boards after cycling', icon: '♻️' },
              { feature: 'Level Progression', description: 'Move from Level 1 to higher boards automatically', icon: '⬆️' },
              { feature: 'Multiple Boards', description: 'Members can participate in multiple boards simultaneously', icon: '🎲' },
              { feature: 'Bonus Calculator', description: 'Automatic calculation of completion bonuses', icon: '💰' },
              { feature: 'Board History', description: 'Complete history of all board cycles and earnings', icon: '📜' },
            ].map((item) => (
              <div key={item.feature} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.feature}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Board Plan MLM Software Pricing</h2>
            <p className="text-lg text-gray-600">
              Powerful cycler software for all business sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Board',
                price: '₹2,00,000',
                features: [
                  'Single board type (2x2 or 3x3)',
                  'Up to 5,000 members',
                  'Auto board creation',
                  'Completion bonuses',
                  'Basic re-entry',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
              },
              {
                name: 'Advanced Board',
                price: '₹4,00,000',
                features: [
                  'Multiple board levels',
                  'Up to 25,000 members',
                  'Unlimited re-entries',
                  'Mobile responsive',
                  'Advanced analytics',
                  'Custom board sizes',
                  '12 months support',
                  'Priority support',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Board',
                price: 'Custom',
                features: [
                  'Unlimited members',
                  'Mobile apps (iOS/Android)',
                  'Blockchain integration',
                  'Multi-currency support',
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
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your Board MLM Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create viral momentum with fast-cycling boards and unlimited re-entries
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Board Plan MLM Software</h2>
              <p className="text-lg text-gray-600">
                Contact us for a customized board MLM solution
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

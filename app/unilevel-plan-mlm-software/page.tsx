import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Unilevel Plan MLM Software | Best Unilevel MLM Software Development | EifaSoft',
    description: 'Best Unilevel Plan MLM Software with unlimited width structure, multi-level depth commissions, deep level earnings, and simple compensation plan. Easy to understand network marketing software. Affordable unilevel MLM software starting ₹1,20,000. Mobile apps, e-wallet, genealogy tree included.',
    canonical: '/unilevel-plan-mlm-software',
    keywords: [
      'unilevel plan MLM software',
      'unilevel MLM software',
      'unilevel compensation plan',
      'unilevel network marketing software',
      'unilevel MLM development',
      'unlimited width MLM software',
      'unilevel plan commission',
      'unilevel MLM app',
      'best unilevel MLM software',
      'unilevel plan india',
      'custom unilevel MLM development',
      '10 level MLM software',
      'direct selling unilevel plan',
      'leadership bonus unilevel MLM',
      'recruiting commission system',
      'multi level unilevel software',
      'unilevel MLM platform india',
      'flat commission MLM',
      'unilevel plan software price',
      'unlimited downline MLM',
      'unilevel plan development company',
      'deep level earnings MLM',
      'unlimited width MLM',
      'unilevel genealogy tree',
      'unilevel MLM e-wallet',
      'unilevel commission calculation',
      'simple MLM structure',
      'unilevel MLM mobile app',
      'unilevel MLM software with source code',
      'affordable unilevel MLM software',
      'unilevel MLM free demo',
      'network hierarchy software',
      'unilevel MLM software India'
    ],
  });
}

export default function UnilevelPlanMLMSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'Unilevel Plan MLM Software Development',
    'Professional Unilevel Plan MLM software with unlimited width, multi-level depth commissions, simple structure, and easy-to-understand compensation plan.',
    'https://www.eifasoft.com/unilevel-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Unilevel Plan MLM Software',
    'Complete Unilevel MLM software with unlimited frontline and multi-level commission system',
    '120000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Unilevel MLM Software',
    description: 'Specialized Unilevel Plan MLM software with unlimited width, multi-level depth commissions, simple structure, and easy-to-understand compensation calculations for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '120000',
    rating: 4.8,
    reviewCount: 95,
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
      question: 'What is Unilevel Plan in MLM and how does it work?',
      answer: 'Unilevel Plan is the simplest MLM compensation structure where each member can sponsor unlimited direct frontline members (unlimited width). All sponsored members are placed on the first level directly under the sponsor, creating a horizontal expansion. Commission is earned from multiple levels deep (typically 5-10 levels), with each level having a specific commission percentage. For example, you might earn 10% from Level 1, 8% from Level 2, 6% from Level 3, and so on. There is no spillover - everyone you sponsor stays in your frontline.',
    },
    {
      question: 'What are the advantages of Unilevel Plan MLM Software?',
      answer: 'Unilevel Plan offers unique benefits: 1) Simplest structure - easiest to explain to new members, 2) Unlimited width - no limit on frontline recruits, 3) No spillover complexity - you keep all your direct recruits, 4) Predictable commissions - clear percentage per level, 5) Scalability - can grow as wide as you can recruit, 6) Transparency - easy to track and understand earnings, 7) Lower maintenance - simple compensation calculations. It\'s perfect for product-based MLM companies and beginners in network marketing.',
    },
    {
      question: 'How are commissions calculated in Unilevel Plan?',
      answer: 'Unilevel Plan uses straightforward level-based percentage commissions. Typical structure: Level 1 (10%), Level 2 (8%), Level 3 (6%), Level 4 (4%), Level 5 (2%), with some plans extending to 10+ levels. Commission is calculated on sales volume or joining fees of members at each level. For example, if Level 1 does ₹1,00,000 in sales, you earn ₹10,000. Additionally, some plans include: Sponsor bonus (direct referral), Rank achievement bonus, Fast start bonus, and Matching bonus on downline earnings.',
    },
    {
      question: 'What is the difference between Unilevel and Binary Plan?',
      answer: 'Key differences: 1) Width - Unilevel has unlimited width, Binary has only 2 legs, 2) Spillover - Unilevel has no spillover, Binary has automatic spillover, 3) Commissions - Unilevel uses level percentages, Binary uses pair matching, 4) Complexity - Unilevel is simpler, Binary is more complex, 5) Team building - Unilevel rewards personal recruiting, Binary rewards team balancing, 6) Growth pattern - Unilevel grows wide then deep, Binary grows in balanced legs. Choose Unilevel for simplicity and product sales, Binary for team building and spillover benefits.',
    },
    {
      question: 'What is the cost of Unilevel Plan MLM Software?',
      answer: 'Unilevel Plan MLM Software starts from ₹1,20,000 for basic features with 5-level commissions, up to 5,000 members, admin panel, and e-wallet. Advanced packages (₹2,50,000 - ₹5,00,000) include unlimited levels, mobile apps, e-commerce integration, and up to 50,000 members. Enterprise solutions with custom features, blockchain, multi-currency, and unlimited members cost ₹5,00,000+. All packages include source code, installation, training, and 6-12 months support with flexible payment options.',
    },
    {
      question: 'Can I customize commission levels and percentages in Unilevel software?',
      answer: 'Yes, absolutely! Our Unilevel software is fully customizable: 1) Set any number of levels (5 to unlimited), 2) Configure commission percentage for each level independently, 3) Set different rates for product sales vs joining fees, 4) Add custom bonuses (sponsor, rank, matching), 5) Configure payout frequency (daily, weekly, monthly), 6) Set minimum payout thresholds, 7) Add caps on daily/monthly earnings, 8) Create multiple compensation tiers, 9) Custom rank advancement criteria. You have complete control via admin panel or source code.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'MLM Software', url: 'https://www.eifasoft.com/mlm-software-development-company' },
    { name: 'Unilevel Plan', url: 'https://www.eifasoft.com/unilevel-plan-mlm-software' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Unilevel Plan MLM Software"
        subtitle="Simplest MLM Compensation Structure"
        description="Launch your Unilevel MLM network with unlimited width and straightforward multi-level commissions. Easy to understand, easy to explain, and perfect for product-based network marketing businesses."
        gradient="green"
      />

      {/* What is Unilevel Plan - Definition for AI Overviews */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Unilevel Plan MLM?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Unilevel Plan MLM</strong> is the simplest network marketing compensation structure where each distributor can sponsor unlimited direct frontline members. Unlike Binary or Matrix plans, there is no width restriction - every member you recruit stays directly under you in your first level. Commissions are earned from multiple levels deep (typically 5-10 levels) with each level having a specific percentage. Unilevel is ideal for product-based MLM companies due to its simplicity and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways for AI Extraction */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Unlimited width - no limit on frontline recruits
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Simplest MLM structure to understand and explain
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pricing starts at ₹1,20,000 for Basic Unilevel
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Level-based commissions (5-10+ levels typical)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  No spillover - all recruits stay in your frontline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Best for product-based MLM businesses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Unilevel Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Unilevel Plan Works</h2>
              <p className="text-lg text-gray-600">
                Unlimited width with multi-level depth - the simplest MLM structure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Unilevel Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Unlimited Width</p>
                      <p className="text-gray-600 text-sm">Sponsor as many frontline members as you want - no restrictions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Multi-Level Depth</p>
                      <p className="text-gray-600 text-sm">Earn commissions from 5 to unlimited levels deep</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">3</span>
                    <div>
                      <p className="font-semibold">No Spillover</p>
                      <p className="text-gray-600 text-sm">Everyone you recruit stays in your frontline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">4</span>
                    <div>
                      <p className="font-semibold">Level Commissions</p>
                      <p className="text-gray-600 text-sm">Fixed percentage commission for each level</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold">YOU</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Level 1 (Unlimited)</div>
                  <div className="flex justify-center gap-2 mb-4 flex-wrap">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">A</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">B</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">C</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">D</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">E</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">...</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Level 2</div>
                  <div className="flex justify-center gap-1 mb-4">
                    <div className="bg-green-400 text-white px-1 py-1 rounded text-xs">1</div>
                    <div className="bg-green-400 text-white px-1 py-1 rounded text-xs">2</div>
                    <div className="bg-green-400 text-white px-1 py-1 rounded text-xs">3</div>
                    <div className="bg-green-400 text-white px-1 py-1 rounded text-xs">...</div>
                  </div>
                  <p className="text-xs text-gray-600 italic">+ Levels 3, 4, 5... continue below</p>
                  <p className="text-xs font-bold text-green-600 mt-2">No width limit!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unilevel Commission Structure</h2>
            <p className="text-lg text-gray-600">
              Straightforward level-based commissions
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Typical Commission Breakdown</h3>
            <div className="space-y-4">
              {[
                { level: 'Level 1', percentage: '10%', example: '₹10,000 on ₹1,00,000 sales' },
                { level: 'Level 2', percentage: '8%', example: '₹8,000 on ₹1,00,000 sales' },
                { level: 'Level 3', percentage: '6%', example: '₹6,000 on ₹1,00,000 sales' },
                { level: 'Level 4', percentage: '4%', example: '₹4,000 on ₹1,00,000 sales' },
                { level: 'Level 5', percentage: '2%', example: '₹2,000 on ₹1,00,000 sales' },
              ].map((item, index) => (
                <div key={item.level} className={`flex items-center justify-between p-4 rounded-lg ${
                  index === 0 ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      index === 0 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
                    } font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold">{item.level}</p>
                      <p className="text-sm text-gray-600">{item.example}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{item.percentage}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm italic">
              Commission percentages are fully customizable in our software
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unilevel Software Features</h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage a unilevel MLM business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: 'Unlimited Frontline', description: 'No restrictions on number of direct recruits', icon: '∞' },
              { feature: 'Multi-Level Commissions', description: 'Configurable percentage for each level', icon: '💰' },
              { feature: 'Genealogy Tree', description: 'Visual representation of entire downline structure', icon: '🌳' },
              { feature: 'Level Management', description: 'Add unlimited levels with custom percentages', icon: '📊' },
              { feature: 'Sponsor Bonus', description: 'Direct referral bonuses for recruiting', icon: '🎁' },
              { feature: 'Rank Achievements', description: 'Automatic rank progression based on sales/recruits', icon: '🏆' },
              { feature: 'E-Wallet System', description: 'Integrated wallet for commissions and payouts', icon: '💳' },
              { feature: 'Product Management', description: 'Catalog for product-based MLM companies', icon: '📦' },
              { feature: 'Real-Time Reports', description: 'Detailed analytics on sales and team performance', icon: '📈' },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unilevel Plan Pricing</h2>
            <p className="text-lg text-gray-600">
              Affordable packages for startups to enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Unilevel',
                price: '₹1,20,000',
                features: [
                  '5-level commissions',
                  'Up to 5,000 members',
                  'Basic admin panel',
                  'E-wallet integration',
                  'Genealogy tree',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
              },
              {
                name: 'Advanced Unilevel',
                price: '₹2,50,000',
                features: [
                  'Unlimited levels',
                  'Up to 25,000 members',
                  'Advanced admin features',
                  'E-commerce integration',
                  'Mobile responsive',
                  'Product catalog',
                  '12 months support',
                  'Free updates',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Unilevel',
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
                  plan.popular ? 'ring-2 ring-green-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{plan.price}</div>
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
                      ? 'bg-green-600 text-white hover:bg-green-700'
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your Unilevel MLM Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with the simplest MLM structure - easy to explain, easy to manage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/mlm-software-price"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Pricing
            </Link>
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
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-powered MLM' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Unilevel MLM Software</h2>
              <p className="text-lg text-gray-600">
                Contact us for a customized unilevel solution
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

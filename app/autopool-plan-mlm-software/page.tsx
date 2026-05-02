import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Autopool MLM Software | Auto Pool Plan MLM Software Development | EifaSoft',
    description: 'Autopool MLM software with automatic member pooling, cycler tracking, and commission automation. Perfect for forced matrix. Custom development starts ₹4,50,000. Free demo available.',
    canonical: '/autopool-plan-mlm-software',
    keywords: [
      'autopool mlm software',
      'auto pool mlm plan',
      'cycler mlm software',
      'autopool plan development',
      'pool mlm software',
      'cycler plan mlm',
      'automatic pooling mlm',
      'autopool mlm development',
      'autopool mlm india',
      'forced matrix autopool',
      'autopool compensation plan',
      'mlm pool software india',
      'automatic mlm pool',
      'autopool plan app',
      'autopool mlm moradabad',
      'pool cycling mlm software',
      'autopool network marketing',
      'mlm autopool platform',
      'custom autopool mlm',
      'autopool plan price india',
      'autopool development company',
      'mlm cycler pool software'
    ],
  });
}

export default function AutopoolPlanMLMSoftware() {
  const serviceSchema = generateServiceSchema(
    'Autopool Plan MLM Software Development',
    'Professional Autopool MLM software with automatic member pooling, cycler tracking, commission automation, and multi-level pool management for network marketing businesses.',
    '/autopool-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Autopool Plan MLM Software',
    'Complete Autopool MLM software with automatic pooling, cycler system, and multi-level commission tracking',
    '450000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Autopool MLM Software',
    description: 'Specialized Autopool Plan MLM software with automatic member pooling, cycler tracking, pool splitting, and commission automation for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '450000',
    rating: 4.8,
    reviewCount: 72,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Autopool MLM Plan?',
      answer: 'Autopool (also called Auto Pool or Cycler Plan) is an automated MLM compensation structure where members are placed in sequential pools that cycle automatically. When a pool fills up (e.g., 2, 3, or 5 members), it cycles and splits into new pools. Members earn from pool completions and automatic re-entries. Unlike traditional Matrix plans where you choose positions, Autopool places everyone automatically in the next available slot.'
    },
    {
      question: 'How does Autopool MLM plan work?',
      answer: 'Member joins and enters Pool Level 1 (e.g., $100 entry). System automatically places them in next available slot. When pool fills (e.g., 2×2 = 6 members or 3×1 = 3 members), pool cycles. On cycling: Pool creator earns commission (e.g., $200-500), automatically re-enters higher level pool (e.g., Level 2 for $200), spillover members join new pools. Process repeats across multiple levels (typically 5-15 levels). Each level has higher entry fee and higher payout.'
    },
    {
      question: 'What are common Autopool structures?',
      answer: 'Popular structures: 2×1 (2 members fill pool, quick cycling), 2×2 (6 members total, moderate cycling), 3×1 (3 members, fast turnover), 3×3 (12 members, slower but higher rewards), 2×3 (14 members, balanced approach). Example 2×2: You at top, 2 direct (fill = cycle), each brings 2 (4 total) = 6 members pool complete. You earn commission, re-enter Level 2 automatically.'
    },
    {
      question: 'What are the benefits of Autopool MLM plan?',
      answer: 'Key advantages include: Automatic placement (no choosing positions), Maximum spillover benefit (everyone helps everyone), Simple to explain and understand, Fast cycling in early levels, Forced matrix creates teamwork, Re-entry keeps members engaged, Multiple income streams from different levels, No leg balancing required, Passive team building, and Attractive for members who don&apos;t actively recruit.'
    },
    {
      question: 'What are the challenges of Autopool plans?',
      answer: 'Challenges include: Requires continuous recruitment to sustain, Can slow down at higher levels (harder to fill pools), Early members have advantage, May be perceived as pyramid if no products, Spillover creates dependency mindset, Complexity increases with multiple pools, Admin fee structure must be carefully balanced, Risk of system stagnation if recruitment slows, and Requires strong retention strategies.'
    },
    {
      question: 'How much does Autopool MLM software cost?',
      answer: 'Autopool MLM software development at EifaSoft starts from ₹4,50,000 for basic features including automatic pooling, cycler tracking, commission calculation, and multi-level pool management. Advanced features like spillover visualization, mobile apps, payment integration, and e-commerce can cost ₹7,00,000 to ₹15,00,000. Pricing varies based on number of levels, pool structures, and customization requirements.'
    },
    {
      question: 'What features should Autopool MLM software have?',
      answer: 'Essential features: Automatic member placement in pools, Pool cycling automation, Multi-level pool management (typically 5-15 levels), Commission calculation on pool completion, Auto re-entry to higher levels, Pool fill status tracking, Spillover visualization, Position tracking across levels, Payout management, E-wallet integration, Pool genealogy view, Waiting list management, Admin fee calculation, and Performance analytics.'
    },
    {
      question: 'Can Autopool be combined with product sales?',
      answer: 'Yes, Autopool can be product-based to ensure legal compliance. Common approaches: Entry package includes products (health, beauty, digital), Monthly auto-ship requirement for pool eligibility, E-commerce integration for product purchases, Product value = pool entry fee, Commission on product sales + pool cycling bonuses. Product-based Autopool is more sustainable and legally safer than pure cash pooling.'
    },
    {
      question: 'How long does Autopool MLM software development take?',
      answer: 'Basic Autopool MLM software takes 6-8 weeks including automatic pooling logic, cycler tracking, multi-level management, and commission calculation. Complex systems with advanced spillover algorithms, mobile apps, e-commerce integration, multiple pool structures, and custom features can take 10-16 weeks. We use agile development with regular testing to ensure pool cycling works flawlessly.'
    },
    {
      question: 'Does EifaSoft provide pool cycling simulation tools?',
      answer: 'Yes, we provide comprehensive testing and simulation including: Pool cycling simulator for testing before launch, Test accounts at different levels, Spillover flow visualization, Performance metrics (cycling speed, member retention), Load testing for high-volume scenarios, Admin tools for monitoring pool health, and Training on managing pool dynamics. We ensure your Autopool operates smoothly from day one.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Autopool MLM Software', url: '/autopool-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Autopool MLM Software"
        subtitle="Automated Pool & Cycler Plan Development"
        description="Launch your Autopool MLM business with intelligent automatic pooling, cycler tracking, and spillover management. Viral growth opportunity starting ₹4,50,000."
        gradient="blue"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is Autopool MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Autopool MLM Software</strong> is a network marketing platform with automatic member pooling and cycler system. Members are placed in sequential pools that cycle automatically when filled (2x2, 3x3, etc.). On pool completion, members earn commissions and automatically re-enter higher-level pools, creating continuous cycling opportunities and passive income potential.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🔄</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Automatic Pooling</p>
                  <p className="text-sm text-gray-600">Members placed automatically in next slot</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pool Cycling</p>
                  <p className="text-sm text-gray-600">Auto commissions on pool completion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Level Re-entry</p>
                  <p className="text-sm text-gray-600">Auto advance to higher pool levels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maximum Spillover</p>
                  <p className="text-sm text-gray-600">Everyone helps everyone grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Autopool MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Autopool (Cycler) MLM Plan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatic pooling system where members cycle through levels earning commissions on pool completions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Autopool Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Join Pool Level 1</h4>
                    <p className="text-gray-600">Member pays entry fee (e.g., ₹5,000) and auto-placed in pool</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pool Fills Up</h4>
                    <p className="text-gray-600">System auto-adds members until pool complete (e.g., 6 members for 2×2)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pool Cycles</h4>
                    <p className="text-gray-600">Pool completes, creator earns commission (e.g., ₹10,000)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Auto Re-entry</h4>
                    <p className="text-gray-600">Automatically enters Level 2 pool (₹10,000 entry, ₹30,000 payout)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: 2×2 Autopool Structure</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <div className="font-semibold text-gray-900 mb-2">You (Pool Creator)</div>
                  <div className="text-sm text-gray-600">Entry: ₹5,000</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pl-4">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <div className="text-sm font-semibold">Member 1</div>
                    <div className="text-xs text-gray-600">₹5,000</div>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <div className="text-sm font-semibold">Member 2</div>
                    <div className="text-xs text-gray-600">₹5,000</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 pl-8">
                  <div className="bg-white p-2 rounded border-l-4 border-blue-400 text-xs">
                    <div className="font-semibold">M3</div>
                  </div>
                  <div className="bg-white p-2 rounded border-l-4 border-blue-400 text-xs">
                    <div className="font-semibold">M4</div>
                  </div>
                  <div className="bg-white p-2 rounded border-l-4 border-blue-400 text-xs">
                    <div className="font-semibold">M5</div>
                  </div>
                  <div className="bg-white p-2 rounded border-l-4 border-blue-400 text-xs">
                    <div className="font-semibold">M6</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg">
                  <div className="font-semibold mb-1">✓ Pool Complete!</div>
                  <div className="text-sm">You earn: ₹10,000</div>
                  <div className="text-sm">Auto re-enter: Level 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Structures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Autopool Structures
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right pool matrix for your business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">2×1</div>
                <div className="text-sm text-gray-600">Fast Cycling</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2 members fill pool</li>
                <li>• Quick turnover</li>
                <li>• Smaller payouts</li>
                <li>• Best for: Viral growth</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-200 ring-2 ring-blue-500">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">2×2</div>
                <div className="text-sm text-blue-600 font-semibold">Most Popular</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 6 members total</li>
                <li>• Balanced cycling</li>
                <li>• Moderate payouts</li>
                <li>• Best for: Most businesses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600 mb-2">3×1</div>
                <div className="text-sm text-gray-600">Moderate Speed</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3 members fill pool</li>
                <li>• Medium cycling</li>
                <li>• Good payouts</li>
                <li>• Best for: Growth focus</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">3×3</div>
                <div className="text-sm text-gray-600">High Rewards</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 12 members total</li>
                <li>• Slower cycling</li>
                <li>• Large payouts</li>
                <li>• Best for: Premium</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autopool Income Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Multiple earning streams from pool cycling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pool Cycling Bonus</h3>
              <p className="text-gray-600 mb-3">Earn when your pool completes</p>
              <div className="text-sm text-blue-600 font-semibold">₹5K-50K per pool cycle</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Re-entry Income</h3>
              <p className="text-gray-600 mb-3">Earn from automatic higher level re-entry</p>
              <div className="text-sm text-green-600 font-semibold">Exponential growth potential</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spillover Bonus</h3>
              <p className="text-gray-600 mb-3">Benefit from team members&apos; recruiting</p>
              <div className="text-sm text-purple-600 font-semibold">Passive pool filling</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Referral</h3>
              <p className="text-gray-600 mb-3">Commission on personally referred members</p>
              <div className="text-sm text-orange-600 font-semibold">₹500-2,000 per referral</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Level Advancement</h3>
              <p className="text-gray-600 mb-3">Higher levels = bigger pool payouts</p>
              <div className="text-sm text-yellow-600 font-semibold">Up to ₹10L+ at top levels</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Bonuses</h3>
              <p className="text-gray-600 mb-3">Extra rewards for top performers</p>
              <div className="text-sm text-teal-600 font-semibold">₹25K-2L achievements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autopool MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced automation for seamless pool management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pool Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Automatic member placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Pool cycling automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-level pool management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Spillover visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Pool fill status tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Auto re-entry system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payout management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Pool cycling simulator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Pool genealogy tree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Admin dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autopool MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing for automated pooling systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹4,50,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Autopool placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Pool cycling automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">5 pool levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Member portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹7,50,000</div>
              <p className="text-blue-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>10-15 pool levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹12,00,000+</div>
              <p className="text-gray-600 mb-6">Full customization</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Unlimited pool levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">12 months support</span>
                </li>
              </ul>
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
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Single Leg Plan', href: '/single-leg-plan-mlm-software', desc: 'Monoline spillover structure' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-blue-100">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Find the right compensation structure</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Autopool MLM" />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobious Loop MLM Software | Infinite Loop Plan | Cycler MLM Platform | EifaSoft',
    description: 'Best Mobious Loop MLM Software with infinite cycler system, continuous re-entry, automatic loop rotation, progressive payouts. Build sustainable loop-based network marketing platform.',
    canonical: '/mobious-loop-mlm-software',
    keywords: [
      'mobious loop mlm software',
      'infinite loop mlm',
      'cycler loop plan',
      'mobious loop plan',
      'continuous loop mlm',
      'loop rotation software',
      'infinite cycler mlm',
      'loop mlm platform',
      'mobious plan software',
      'recurring loop mlm',
      'loop compensation plan',
      'mobious cycler software',
      'infinite loop network marketing',
      'loop mlm automation',
      'mobious loop mlm india',
      'loop mlm development',
      'custom mobious loop mlm',
      'mobious mlm moradabad',
      'loop mlm company india',
      'mobious loop mlm app',
      'cycler mlm development company',
      'loop based mlm software'
    ],
  });
}

export default function MobiousLoopMLMPage() {
  const faqs = [
    {
      question: 'What is Mobious Loop MLM Software?',
      answer: 'Mobious Loop MLM Software is an innovative infinite cycler plan where members progress through continuous loops (circles or levels) that repeat indefinitely. Unlike traditional plans with fixed levels, Mobious Loop creates a never-ending progression: members enter Loop 1 → cycle through to earn payout → automatically re-enter Loop 1 while also entering Loop 2 → cycle again for higher payout → continue to Loop 3, 4, 5... infinitely. Each loop has progressively higher entry fees and payouts, creating sustainable recurring income through continuous cycling and re-entry.'
    },
    {
      question: 'How does the infinite loop cycling work?',
      answer: 'The cycling mechanism works as follows: Member joins Loop 1 (₹1,000 entry), recruits required members (e.g., 2 referrals), loop fills and cycles, member receives payout (₹2,000), and automatically re-enters Loop 1 (free/discounted) while simultaneously entering Loop 2 (₹2,000 entry). This process repeats infinitely: members can be active in multiple loops simultaneously (Loop 1, 2, 3, 4...), earn from each loop&apos;s cycling, and continuously re-enter lower loops while progressing to higher loops. The Mobious (infinity symbol ∞) represents endless earning potential through perpetual cycling.'
    },
    {
      question: 'What are the typical loop structures and payouts?',
      answer: 'Common Mobious Loop structure: Loop 1 (₹1,000 entry, 2 referrals, ₹2,000 payout, 2×1 matrix), Loop 2 (₹2,000 entry, 4 referrals, ₹8,000 payout, 2×2 matrix), Loop 3 (₹5,000 entry, 8 referrals, ₹40,000 payout, 2×3 matrix), Loop 4 (₹10,000 entry, 16 referrals, ₹1,60,000 payout, 2×4 matrix), Loop 5+ (increasing progression). Members earn from multiple loops simultaneously: active in Loops 1-3 simultaneously, earning ₹2K + ₹8K + ₹40K = ₹50K per complete cycle across all loops. Re-entry keeps members perpetually cycling.'
    },
    {
      question: 'How is Mobious Loop different from regular Cycler or Board plans?',
      answer: 'Key differences: 1) Infinite Progression (no endpoint vs fixed levels in cyclers), 2) Simultaneous Multi-Loop (active in multiple loops at once vs single position), 3) Automatic Re-Entry (free/discounted re-entry to lower loops vs manual), 4) Upward & Circular Movement (progress up AND cycle back down), 5) Perpetual Income (never-ending earning potential vs limited cycles). Example: Regular cycler has 5 boards, you cycle through once and done. Mobious Loop has infinite loops (1, 2, 3, 4...), you cycle through, re-enter, and keep earning indefinitely.'
    },
    {
      question: 'What happens when a member completes a loop cycle?',
      answer: 'Upon loop completion, the system automatically: 1) Distributes payout to member (e.g., ₹2,000 from Loop 1), 2) Re-enters member into same loop (Loop 1) free or at discounted rate, 3) Promotes member to next higher loop (Loop 2) if qualified, 4) Sends SMS/Email notification of cycling and earnings, 5) Updates dashboard with new loop positions, 6) Adds member to queue in new loops. Members maintain positions in multiple loops simultaneously, creating multiple income streams. Example: After cycling Loop 1, you now have positions in both Loop 1 (re-entered) and Loop 2 (newly entered).'
    },
    {
      question: 'Can members skip loops or enter higher loops directly?',
      answer: 'The software supports flexible loop entry strategies: Sequential Entry (must complete Loop 1 before Loop 2 access—traditional), Fast Track Entry (pay combined fees to enter multiple loops simultaneously—accelerated), Direct Loop Entry (enter any loop directly if qualified—premium), and Sponsored Loop Entry (sponsor pays for member&apos;s higher loop entry—team building). Most Mobious Loop plans use sequential entry to ensure sustainable growth, but premium members can &ldquo;buy into&rdquo; higher loops for faster progression. Admin configures loop entry rules and qualification requirements.'
    },
    {
      question: 'What are the advantages and sustainability concerns?',
      answer: 'Advantages: Unlimited earning potential (infinite loops), Multiple simultaneous income streams (active in 5+ loops), Automatic re-entry (passive cycling), Progressive payouts (higher loops = bigger earnings), Long-term member retention (never-ending progression). Sustainability Concerns: Requires constant new member recruitment, Higher loops need exponentially more recruits, Potential for saturation at upper loops, Regulatory scrutiny (infinite earnings claims), Member fatigue from continuous recruitment. Works best with: Product attachment (digital courses, memberships), Realistic earning disclosures, Capped maximum loops (e.g., Loop 10 max), and Strong community engagement.'
    },
    {
      question: 'How does the Mobious Loop software handle spillover?',
      answer: 'Spillover management is critical in Mobious Loop plans: Forced Matrix Spillover (2×2, 3×3 structures with automatic placement), Sponsor Spillover (overflow from upline fills your positions), Cross-Loop Spillover (spillover from Loop 1 helps fill Loop 2 positions), Global Pool Spillover (unplaced members fill next available position globally), and Weighted Spillover (active members receive more spillover). The software tracks: spillover source (which upline), spillover count (how many received), loop-specific spillover allocation, and spillover earnings contribution. Dashboard shows spillover metrics to demonstrate passive team building benefits.'
    },
    {
      question: 'What features does Mobious Loop MLM Software include?',
      answer: 'Comprehensive features: Infinite loop generation and management, Automatic cycling and re-entry logic, Multi-loop position tracking (simultaneous loops), Progressive payout calculation engine, Forced matrix with spillover automation, Loop completion notifications (SMS/Email), Member dashboard with loop status (e.g., Loop 1: 1/2 filled, Loop 2: 3/4 filled), Re-entry history and earnings log, Admin controls for loop configuration (entry fees, payout amounts, matrix size), Payment gateway integration, Genealogy tree with multi-loop visualization, Rank advancement system, Fast-track loop entry options, and Mobile app support.'
    },
    {
      question: 'What is the cost for Mobious Loop MLM Software?',
      answer: 'Mobious Loop MLM Software starts at ₹3,50,000 with 3-4 weeks development (basic 5-loop system, automatic cycling, member dashboard). Advanced systems with unlimited loops, mobile apps, and advanced spillover cost ₹7,00,000+ (5-6 weeks). Enterprise solutions with blockchain transparency, crypto integration, and white-label branding start at ₹14,00,000+ (6-8 weeks). All packages include loop engine, cycling automation, re-entry system, payment gateway, admin panel, training, and 1-year support.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Mobious Loop MLM Software Development',
    'Comprehensive Mobious Loop MLM software with infinite cycler system, automatic loop rotation, multi-loop tracking, progressive payouts, and continuous re-entry automation for sustainable network marketing.'
  );

  const productSchema = generateProductSchema(
    'Mobious Loop MLM Software',
    'Advanced infinite loop MLM platform with automatic cycling, simultaneous multi-loop positions, spillover management, progressive earnings, and perpetual re-entry for loop-based network marketing.',
    '350000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Mobious Loop MLM Software', url: '/mobious-loop-mlm-software' }
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Mobious Loop MLM Software',
    description: 'Advanced infinite loop MLM platform with automatic cycling, simultaneous multi-loop positions, spillover management, progressive earnings, and perpetual re-entry for loop-based network marketing.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '350000',
    rating: 4.5,
    reviewCount: 58,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Mobious Loop MLM Software Development"
        subtitle="Infinite Cycler System | Continuous Re-Entry | Progressive Loop Payouts"
        description="Build your infinite loop MLM business with cutting-edge Mobious Loop software. Automate cycling, multi-loop tracking, spillover distribution, perpetual re-entry, and progressive earnings for never-ending network marketing success."
        gradient="purple"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Mobious Loop MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Mobious Loop MLM Software</strong> is an innovative infinite cycler platform where members progress through never-ending loops that repeat continuously. Members cycle through Loop 1, automatically re-enter Loop 1 while entering Loop 2, then Loop 3, 4, 5... infinitely. Named after the Möbius strip (∞ infinity symbol), it represents endless progression with members active in multiple loops simultaneously, earning from each loop&apos;s cycling.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Infinite Loops</p>
                  <p className="text-sm text-gray-600">Progress through Loop 1, 2, 3... infinitely</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Auto Re-Entry</p>
                  <p className="text-sm text-gray-600">Cycle and re-enter same loop automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Progressive Payouts</p>
                  <p className="text-sm text-gray-600">Earn ₹2K to ₹3L+ per loop cycle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,50,000</p>
                  <p className="text-sm text-gray-600">Advanced with unlimited loops at ₹7,00,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Mobious Loop MLM?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Mobious Loop MLM</strong> is a revolutionary <strong>infinite cycler plan</strong> where members progress through <strong>never-ending loops</strong> (also called circles or cycles) that repeat continuously. Unlike traditional MLM plans with fixed levels, the Mobious Loop creates perpetual earning opportunities: members cycle through Loop 1, automatically re-enter Loop 1 while entering Loop 2, then Loop 3, 4, 5... infinitely. The name &ldquo;Mobious&rdquo; refers to the <strong>Möbius strip (∞ infinity symbol)</strong>—representing endless progression and recurring income.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="text-4xl mb-3">∞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Infinite Loops</h3>
                <p className="text-gray-700">Progress through Loop 1 → 2 → 3 → 4... infinitely. No endpoint, continuous earning potential.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Auto Re-Entry</h3>
                <p className="text-gray-700">Cycle through loop, receive payout, automatically re-enter same loop + progress to next loop.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Progressive Payouts</h3>
                <p className="text-gray-700">Loop 1: ₹2K → Loop 2: ₹8K → Loop 3: ₹40K → Loop 4: ₹1.6L+. Exponential growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobious Loop Structure & Earnings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Progressive Loop Progression (2×N Matrix)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <th className="px-6 py-3 text-left">Loop Level</th>
                    <th className="px-6 py-3 text-left">Entry Fee</th>
                    <th className="px-6 py-3 text-left">Matrix</th>
                    <th className="px-6 py-3 text-left">Referrals Needed</th>
                    <th className="px-6 py-3 text-left">Cycle Payout</th>
                    <th className="px-6 py-3 text-left">Net Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">Loop 1</td>
                    <td className="px-6 py-4">₹1,000</td>
                    <td className="px-6 py-4">2×1</td>
                    <td className="px-6 py-4">2 members</td>
                    <td className="px-6 py-4 text-purple-600 font-semibold">₹2,000</td>
                    <td className="px-6 py-4 text-green-600">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">Loop 2</td>
                    <td className="px-6 py-4">₹2,000</td>
                    <td className="px-6 py-4">2×2</td>
                    <td className="px-6 py-4">6 members</td>
                    <td className="px-6 py-4 text-purple-600 font-semibold">₹12,000</td>
                    <td className="px-6 py-4 text-green-600">₹10,000</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">Loop 3</td>
                    <td className="px-6 py-4">₹5,000</td>
                    <td className="px-6 py-4">2×3</td>
                    <td className="px-6 py-4">14 members</td>
                    <td className="px-6 py-4 text-purple-600 font-semibold">₹70,000</td>
                    <td className="px-6 py-4 text-green-600">₹65,000</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">Loop 4</td>
                    <td className="px-6 py-4">₹10,000</td>
                    <td className="px-6 py-4">2×4</td>
                    <td className="px-6 py-4">30 members</td>
                    <td className="px-6 py-4 text-purple-600 font-semibold">₹3,00,000</td>
                    <td className="px-6 py-4 text-green-600">₹2,90,000</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <td className="px-6 py-4 font-bold text-lg">Total (Single Cycle All Loops)</td>
                    <td className="px-6 py-4 font-bold">₹18,000 investment</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 font-bold text-xl text-purple-600">₹3,84,000</td>
                    <td className="px-6 py-4 font-bold text-xl text-green-600">₹3,66,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              *Example structure. Loops continue infinitely (Loop 5, 6, 7...). Members re-enter lower loops continuously.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Mobious Loop Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">∞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infinite Loop Engine</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Unlimited loop generation</li>
                <li>✓ Progressive entry fees & payouts</li>
                <li>✓ Configurable matrix sizes (2×N)</li>
                <li>✓ Loop completion detection</li>
                <li>✓ Automatic loop progression</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Re-Entry System</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Automatic same-loop re-entry</li>
                <li>✓ Simultaneous multi-loop positions</li>
                <li>✓ Free/discounted re-entry options</li>
                <li>✓ Re-entry history tracking</li>
                <li>✓ Loop position management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Loop Dashboard</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Active loops status (e.g., Loop 1: 1/2)</li>
                <li>✓ Earnings per loop breakdown</li>
                <li>✓ Cycle completion forecasts</li>
                <li>✓ Total earnings across loops</li>
                <li>✓ Loop fill progress bars</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobious Loop MLM Pricing</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Basic Loop MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹3,50,000</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>5-loop system</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Auto cycling & re-entry</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Member dashboard</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Payment gateway</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>1-year support</span></li>
              </ul>
              <div className="text-sm text-gray-600">Delivery: 3-4 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl p-8 transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Advanced Loop MLM</h3>
              <div className="text-4xl font-bold mb-6">₹7,00,000</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Everything in Basic +</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Unlimited loops</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Advanced spillover logic</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Mobile app (iOS/Android)</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Fast-track entry</span></li>
              </ul>
              <div className="text-sm">Delivery: 5-6 weeks</div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise Loop MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹14,00,000+</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Everything in Advanced +</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Blockchain transparency</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Crypto integration</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>White-label solution</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Dedicated team</span></li>
              </ul>
              <div className="text-sm text-gray-600">Delivery: 6-8 weeks</div>
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
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Cycling board compensation' },
              { title: 'Autopool MLM', href: '/autopool-plan-mlm-software', desc: 'Auto-filling pool structure' },
              { title: 'Australian X-Up', href: '/australian-x-up-plan-mlm-software', desc: 'Pass-up compensation system' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'Donation Plan', href: '/donation-plan-mlm-software', desc: 'Peer-to-peer donation system' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combined compensation structure' },
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
              <p className="text-sm opacity-90">Transparent pricing for all budgets</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-rose-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right solution for you</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch Your Mobious Loop MLM Platform
            </h2>
            <p className="text-xl text-gray-600">
              Get expert consultation for your infinite loop MLM business
            </p>
          </div>
          <ContactForm serviceName="Mobious Loop MLM" />
        </div>
      </section>
    </>
  );
}

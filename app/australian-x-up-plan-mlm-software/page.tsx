import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Australian X-Up Plan MLM Software | 1-Up, 2-Up MLM Software | EifaSoft',
    description: 'Best Australian X-Up Plan MLM Software with 1-Up, 2-Up, 3-Up pass-up compensation. Automate upline pass-up commissions, mentor rewards, team building, and sponsor override bonuses with advanced X-Up MLM technology.',
    canonical: '/australian-x-up-plan-mlm-software',
    keywords: [
      'australian x-up plan mlm software',
      'x-up mlm software',
      '1-up mlm plan',
      '2-up mlm plan',
      'pass-up mlm software',
      'australian plan mlm',
      'x-up compensation plan',
      'mentor reward mlm',
      'pass-up commission software',
      'x-up network marketing',
      'upline pass-up mlm',
      '3-up mlm software',
      'australian mlm platform',
      'x-up plan automation',
      'australian x-up mlm india',
      'x-up mlm development',
      'custom x-up mlm software',
      'x-up mlm moradabad',
      'australian plan mlm company india',
      'x-up mlm app',
      'pass-up mlm development company',
      'australian mlm software developer'
    ],
  });
}

export default function AustralianXUpPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Australian X-Up Plan MLM Software Development',
    'Professional Australian X-Up MLM software with pass-up compensation system (1-Up, 2-Up, 3-Up), mentor rewards, and automated pass-up tracking for network marketing businesses.',
    '/australian-x-up-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Australian X-Up Plan MLM Software',
    'Complete X-Up MLM software with automatic pass-up tracking, mentor rewards, and multi-level override bonuses',
    '300000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Australian X-Up MLM Software',
    description: 'Specialized Australian X-Up Plan MLM software with pass-up compensation system, automatic referral tracking, mentor rewards, and multi-level override bonuses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '300000',
    rating: 4.7,
    reviewCount: 68,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Australian X-Up Plan MLM Software?',
      answer: 'Australian X-Up Plan MLM Software is a unique pass-up compensation system where members &ldquo;pass up&rdquo; their first X number of direct referrals to their upline sponsor or mentor. In a 1-Up plan, the first referral passes to upline; in a 2-Up plan, the first two referrals pass up; in a 3-Up plan, three referrals pass up. After passing the required referrals, members keep all subsequent referrals and earn direct commissions. This creates a mentor-based system that rewards upline leaders while encouraging deep personal recruitment.'
    },
    {
      question: 'How does the X-Up pass-up system work?',
      answer: 'The pass-up mechanism works as follows: When Member A joins under Sponsor B, Member A must first pass their first X referrals to Sponsor B. For example, in a 2-Up plan: Member A&apos;s first referral (Member C) passes to Sponsor B, Member A&apos;s second referral (Member D) also passes to Sponsor B, and from the third referral onwards (Member E, F, G...), Member A keeps all commissions and builds their own team. This ensures sponsors are rewarded for mentoring and supporting new members through the pass-up phase.'
    },
    {
      question: 'What are the different types of X-Up plans?',
      answer: 'Common X-Up variations include: 1-Up Plan (pass first referral to sponsor—simplest model, quick qualification), 2-Up Plan (pass first two referrals—most popular, balanced rewards), 3-Up Plan (pass first three referrals—higher commitment, bigger sponsor rewards), Australian 2-Up (classic Australian model with product sales), and Hybrid X-Up (combines pass-up with binary/unilevel for dual income streams). Each can be customized with product packages, qualification requirements, and override bonuses for advanced ranks.'
    },
    {
      question: 'How do members earn in the Australian X-Up Plan?',
      answer: 'Members earn through multiple income streams: 1) Direct Referral Commissions (from referrals kept after pass-up phase—typically 50-100% of package value), 2) Pass-Up Commissions (receiving passed-up members from downline who completed their pass-ups), 3) Override Bonuses (earning 10-30% on team volume at leadership ranks), 4) Infinity Bonuses (earning from entire downline depth after qualifying), 5) Matching Bonuses (10-20% matching on direct referrals&apos; earnings). Example: On a ₹10,000 product package, direct commission could be ₹5,000-10,000.'
    },
    {
      question: 'Why is it called the Australian Plan?',
      answer: 'The plan is named &ldquo;Australian&rdquo; because it gained significant popularity in Australia and New Zealand in the 1980s-1990s, particularly in direct sales companies selling household products, wellness items, and educational materials. The original Australian 2-Up model required members to pass their first two sales to their sponsor before earning commissions themselves. This created strong mentor-student relationships and incentivized sponsors to actively train new members. The model has since been adapted globally with digital products and modern compensation structures.'
    },
    {
      question: 'What happens if a member quits during the pass-up phase?',
      answer: 'If a member quits or becomes inactive before completing their pass-up requirements (e.g., before referring 2 people in a 2-Up plan), their existing passed-up referrals remain with the upline sponsor—they don&apos;t get refunded or reversed. Any referrals the quitting member had recruited (but not yet passed up) typically remain in their position, and if they reactivate, they continue from where they left off. Some companies implement &ldquo;grace periods&rdquo; (30-90 days) where inactive members can resume without restarting the pass-up count.'
    },
    {
      question: 'Can the X-Up plan be combined with other compensation structures?',
      answer: 'Yes! Hybrid X-Up plans are increasingly popular: X-Up + Binary (pass-up direct sales while building binary team for residual income), X-Up + Unilevel (pass-up on frontline, keep multi-level commissions), X-Up + Matrix (pass-up positions within forced matrix structure), X-Up + Stair Step (pass-up qualifications for rank advancement). Our software supports all hybrid combinations, allowing customizable pass-up rules per income stream. For example, pass-up could apply only to direct sales commissions while keeping team building bonuses.'
    },
    {
      question: 'What are the advantages and disadvantages of X-Up plans?',
      answer: 'Advantages: Strong sponsor-member relationships (sponsors help members succeed), High-value direct commissions (50-100% on sales), Motivates deep personal recruitment, Simplifies team structure (mostly direct referrals), Rewards top performers heavily. Disadvantages: New members work for free initially (pass-up phase demotivating), High dropout during pass-up period, Perceived unfairness (upline gets free members), Challenging to explain to prospects, Sustainability concerns (depends on constant new recruitment). Works best with high-ticket products/services where commissions justify pass-up phase.'
    },
    {
      question: 'What features does Australian X-Up Plan MLM Software include?',
      answer: 'Comprehensive features include: Automatic pass-up tracking and assignment, Customizable X-Up rules (1-Up/2-Up/3-Up), Member qualification status dashboard, Pass-up completion notifications, Direct commission automation (post pass-up), Override bonus calculation (multi-level), Infinity bonus tracking, Mentor-mentee relationship mapping, Re-entry and restart logic, Product package management, Payment gateway integration, Genealogy tree with pass-up visualization, Rank advancement system, Admin controls for pass-up configuration, and Detailed commission reports by income type.'
    },
    {
      question: 'What is the cost and timeline for Australian X-Up Plan MLM Software?',
      answer: 'Basic Australian X-Up Plan MLM Software starts at ₹3,00,000 with 3-4 weeks development time. Advanced systems with hybrid compensation (X-Up + Binary/Unilevel), mobile apps, and e-commerce integration cost ₹6,00,000+ (5-6 weeks). Enterprise solutions with custom pass-up logic, white-label branding, and multi-tier override structures start at ₹12,00,000+ (6-8 weeks). All packages include pass-up automation engine, member & admin dashboards, payment integration, training, and 1-year support.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Australian X-Up Plan MLM Software', url: '/australian-x-up-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Australian X-Up Plan MLM Software Development"
        subtitle="1-Up, 2-Up, 3-Up Pass-Up Compensation | Mentor-Based Network Marketing Platform"
        description="Build your X-Up MLM business with intelligent pass-up automation. Track sponsor rewards, automate upline commissions, manage member qualifications, and scale your mentor-driven network marketing with proven Australian plan technology."
        gradient="purple"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Australian X-Up Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Australian X-Up Plan MLM Software</strong> is a network marketing platform based on the pass-up compensation system where members pass their first X referrals to their upline sponsor. In a 1-Up plan, the first referral passes up; in a 2-Up plan, the first two pass up. After qualification, members keep all subsequent referrals and earn direct commissions. This creates strong mentor-mentee relationships and rewards sponsors for training new members.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">🌏</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pass-Up System</p>
                  <p className="text-sm text-gray-600">1-Up, 2-Up, or 3-Up referral pass-up options</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mentor Rewards</p>
                  <p className="text-sm text-gray-600">Sponsors receive passed-up members and commissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Auto Qualification Tracking</p>
                  <p className="text-sm text-gray-600">System tracks pass-up completion automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">High-Ticket Ideal</p>
                  <p className="text-sm text-gray-600">Best for products ₹10,000-₹1,00,000+</p>
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
              What is Australian X-Up Plan MLM?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Australian X-Up Plan MLM</strong> is a unique <strong>pass-up compensation system</strong> where members &ldquo;pass up&rdquo; their first <strong>X number of direct referrals</strong> to their upline sponsor or mentor. In a <strong>1-Up plan</strong>, you pass your first referral to your sponsor. In a <strong>2-Up plan</strong> (the most popular variant), you pass your first two referrals upline. After completing the pass-up requirement, you keep all subsequent referrals and earn <strong>100% direct commissions</strong> on their purchases and team volume.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              This model creates a powerful <strong>mentor-student relationship</strong> where upline sponsors are incentivized to actively train and support new members through the pass-up phase, knowing they&apos;ll receive those initial referrals. Once qualified, members can build unlimited downline teams and receive passed-up members from their own recruits—creating exponential growth potential. The Australian X-Up Plan is particularly effective for <strong>high-ticket products</strong> (₹10,000-₹1,00,000+) where individual sale commissions justify the pass-up investment.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="text-4xl mb-3">⬆️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pass-Up System</h3>
                <p className="text-gray-700">Pass your first 1, 2, or 3 referrals to sponsor. After qualification, keep 100% of all future referrals.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mentor Rewards</h3>
                <p className="text-gray-700">Sponsors actively train members, knowing they&apos;ll receive passed-up referrals and override bonuses.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Commissions</h3>
                <p className="text-gray-700">Earn 50-100% direct commissions on qualified referrals plus override bonuses on team volume.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Australian 2-Up Plan Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step breakdown of the 2-Up pass-up compensation system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-600 mb-3">Step 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join & Qualify</h3>
              <p className="text-gray-700">
                Purchase product package (₹10,000). Join under Sponsor A. Enter pass-up phase. Need 2 referrals to qualify.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-3">Step 2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pass-Up Referrals</h3>
              <p className="text-gray-700">
                1st referral → passes to Sponsor A. 2nd referral → also passes to Sponsor A. You earn nothing yet (pass-up phase).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-3">Step 3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Become Qualified</h3>
              <p className="text-gray-700">
                3rd referral onwards → YOU keep! Earn 100% direct commission (₹5,000-10,000 per sale). Build unlimited team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-600">
              <div className="text-3xl font-bold text-orange-600 mb-3">Step 4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Pass-Ups</h3>
              <p className="text-gray-700">
                Your qualified referrals pass THEIR first 2 to YOU. Exponential growth. Earn overrides on team volume.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Australian 2-Up Plan Income Example</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <th className="px-6 py-3 text-left">Referral #</th>
                    <th className="px-6 py-3 text-left">Pass-Up Status</th>
                    <th className="px-6 py-3 text-left">You Earn</th>
                    <th className="px-6 py-3 text-left">Sponsor Earns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">1st Referral</td>
                    <td className="px-6 py-4">❌ Passes to Sponsor</td>
                    <td className="px-6 py-4 text-red-600">₹0</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-medium">2nd Referral</td>
                    <td className="px-6 py-4">❌ Passes to Sponsor</td>
                    <td className="px-6 py-4 text-red-600">₹0</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-medium">3rd Referral</td>
                    <td className="px-6 py-4">✅ You Keep (Qualified!)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                    <td className="px-6 py-4 text-gray-400">₹0</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-medium">4th Referral</td>
                    <td className="px-6 py-4">✅ You Keep</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                    <td className="px-6 py-4 text-gray-400">₹0</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-medium">5th Referral</td>
                    <td className="px-6 py-4">✅ You Keep</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                    <td className="px-6 py-4 text-gray-400">₹0</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="px-6 py-4 font-medium">Pass-Ups from Your 3 Qualified Members</td>
                    <td className="px-6 py-4">✅ You Receive (6 pass-ups)</td>
                    <td className="px-6 py-4 text-purple-600 font-semibold">₹60,000</td>
                    <td className="px-6 py-4 text-gray-400">₹0</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <td className="px-6 py-4 font-bold text-lg">Total Earnings (5 Personal + 6 Pass-Ups)</td>
                    <td className="px-6 py-4 font-bold"></td>
                    <td className="px-6 py-4 font-bold text-xl text-green-600">₹90,000</td>
                    <td className="px-6 py-4 font-bold text-xl text-gray-600">₹20,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              *Based on ₹10,000 product package with 100% direct commission. Actual commissions vary by company structure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced X-Up Plan Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⬆️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatic Pass-Up Engine</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Configurable X-Up rules (1-Up/2-Up/3-Up)</li>
                <li>✓ Automatic upline assignment</li>
                <li>✓ Pass-up completion tracking</li>
                <li>✓ Qualification status dashboard</li>
                <li>✓ Real-time pass-up notifications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commission Automation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Direct commission calculation (50-100%)</li>
                <li>✓ Override bonus distribution (5-30%)</li>
                <li>✓ Infinity bonus tracking</li>
                <li>✓ Matching bonus (10-20%)</li>
                <li>✓ Rank-based compensation tiers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Genealogy & Tracking</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Visual pass-up tree structure</li>
                <li>✓ Mentor-mentee relationship mapping</li>
                <li>✓ Qualified vs unqualified members</li>
                <li>✓ Pass-up history logs</li>
                <li>✓ Team volume analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Plan Support</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ X-Up + Binary combination</li>
                <li>✓ X-Up + Unilevel hybrid</li>
                <li>✓ X-Up + Matrix integration</li>
                <li>✓ Custom dual compensation logic</li>
                <li>✓ Separate income stream tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Management</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Multiple product packages</li>
                <li>✓ Digital & physical products</li>
                <li>✓ Package-specific pass-up rules</li>
                <li>✓ Subscription & one-time products</li>
                <li>✓ Inventory tracking (physical goods)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member Dashboard</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Pass-up progress tracker (1/2 completed)</li>
                <li>✓ Earnings by income type</li>
                <li>✓ Received pass-ups counter</li>
                <li>✓ Qualification status badge</li>
                <li>✓ Referral link & marketing tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Australian X-Up Plan MLM Software Pricing
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Affordable X-Up MLM solutions for pass-up compensation businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">Basic X-Up MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹3,00,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>1-Up or 2-Up pass-up system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Automatic pass-up tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Direct commission automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Member & admin dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>1-year support & updates</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">Delivery: 3-4 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl p-8 transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">RECOMMENDED</div>
              <h3 className="text-2xl font-bold mb-2">Advanced X-Up MLM</h3>
              <div className="text-4xl font-bold mb-6">₹6,00,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Everything in Basic +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>3-Up plan support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Hybrid X-Up + Binary/Unilevel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Mobile app (iOS & Android)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Override & infinity bonuses</span>
                </li>
              </ul>
              <div className="text-sm">Delivery: 5-6 weeks</div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">Enterprise X-Up MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹12,00,000+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Everything in Advanced +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Custom pass-up logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multi-tier compensation plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Advanced genealogy tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>White-label customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Dedicated support team</span>
                </li>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited frontline recruitment' },
              { title: 'Mobious Loop MLM', href: '/mobious-loop-mlm-software', desc: 'Infinite cycler loop system' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Cycling board compensation' },
              { title: 'Stair Step MLM', href: '/stair-step-plan-mlm-software', desc: 'Progressive rank advancement' },
              { title: 'Generation Plan', href: '/generation-plan-mlm-software', desc: 'Generation-based commissions' },
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
              Launch Your Australian X-Up MLM Platform
            </h2>
            <p className="text-xl text-gray-600">
              Get expert consultation and custom quote for your X-Up pass-up MLM business
            </p>
          </div>
          <ContactForm serviceName="Australian X-Up Plan MLM" />
        </div>
      </section>
    </>
  );
}

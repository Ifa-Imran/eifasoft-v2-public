import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: '50-50 Crowdfunding MLM Software | Peer-to-Peer Donation MLM | EifaSoft',
    description: 'Best 50-50 Crowdfunding MLM Software with peer-to-peer donation, automatic fund splitting, member matching, dual income streams. Build sustainable crowdfunding network marketing platform.',
    canonical: '/50-50-crowdfunding-mlm-software',
    keywords: [
      '50-50 crowdfunding mlm software',
      '50-50 donation mlm',
      'peer to peer crowdfunding mlm',
      '50-50 split mlm software',
      'crowdfunding donation plan',
      '50-50 network marketing',
      'dual income crowdfunding',
      'peer to peer donation mlm',
      '50-50 mlm platform',
      'crowdfunding mlm system',
      '50-50 help plan',
      'split donation mlm',
      'crowdfunding compensation',
      '50-50 mlm automation',
      '50-50 mlm india',
      'crowdfunding mlm moradabad',
      '50-50 mlm development',
      'custom 50-50 mlm software',
      'peer donation mlm platform',
      '50-50 mlm app',
      'crowdfunding mlm company india',
      '50-50 plan mlm software'
    ],
  });
}

export default function FiftyFiftyCrowdfundingMLMPage() {
  const faqs = [
    {
      question: 'What is 50-50 Crowdfunding MLM Software?',
      answer: '50-50 Crowdfunding MLM Software is a peer-to-peer donation model where members donate funds that are automatically split 50-50 between two recipients: 50% goes to the direct upline sponsor, and 50% goes to a senior upline member (typically sponsor&apos;s sponsor or pool leader). This creates dual income streams where members receive donations from both their direct referrals and from downline members multiple levels deep. The 50-50 split ensures fair distribution and encourages team building while maintaining sustainability.'
    },
    {
      question: 'How does the 50-50 donation split work?',
      answer: 'When Member C joins under Member B (who is under Member A) with a ₹10,000 donation: ₹5,000 (50%) goes to direct sponsor Member B, and ₹5,000 (50%) goes to senior upline Member A. As Member C builds their team, they receive: 50% from their direct referrals&apos; donations (Level 1 income), and 50% from their downline&apos;s downline (Level 2-3 income). This dual-stream structure means members earn from both immediate recruits and extended team growth, creating powerful exponential earning potential.'
    },
    {
      question: 'What are the income streams in 50-50 Crowdfunding?',
      answer: 'Members earn through: 1) Direct Donation Income (50% of direct referrals&apos; donations—e.g., ₹5,000 from ₹10,000 donation), 2) Senior Income (50% of downline members&apos; donations—received from your team&apos;s recruits), 3) Re-Entry Income (members can re-enter multiple times to cycle), 4) Matching Bonuses (earn 5-10% matching on team member donations), 5) Leadership Pool (top earners share monthly pool). Example: With 2 direct referrals and 4 second-level members, monthly income = (2 × ₹5,000) + (4 × ₹5,000) = ₹30,000.'
    },
    {
      question: 'How is 50-50 Crowdfunding different from regular donation plans?',
      answer: 'Key differences: 1) Dual Recipients (50-50 split vs 100% to single upline), 2) Balanced Distribution (both sponsor and senior benefit vs sponsor-only), 3) Deeper Incentive (earn from levels 2-3 vs just level 1), 4) Faster Qualifications (smaller individual donations due to 50% splits), 5) Multiple Income Points (receive from various downline positions). This structure creates sustainability because donations are spread across multiple recipients rather than concentrated, reducing pyramid characteristics while maintaining growth potential.'
    },
    {
      question: 'What happens if there&apos;s no senior upline for the 50% split?',
      answer: 'The software handles orphaned 50% splits through configurable rules: Admin Pool (company receives 50% until member qualifies upline), Sponsor Receives 100% (temporarily until upline structure forms), Company Reserve (held for future rewards/bonuses), Re-distribution (split among active members), or Charity Allocation (donated per company policy). Most commonly, the admin pool method is used where the company holds funds that are later distributed as bonuses to top performers or rank achievers.'
    },
    {
      question: 'Can members make multiple donations (re-entry)?',
      answer: 'Yes! 50-50 Crowdfunding typically allows unlimited re-entry, meaning members can donate multiple times to create additional income positions. For example: Member makes initial ₹10,000 donation (Position 1), then re-enters with another ₹10,000 (Position 2). Each position generates separate income streams. Re-entry benefits: Accelerated earnings (multiple positions receiving 50% splits), Faster team growth, Increased leadership rank, and Higher pool share eligibility. Dashboard tracks all active positions and forecasts cumulative earnings.'
    },
    {
      question: 'What are the legal considerations for 50-50 Crowdfunding MLM?',
      answer: 'Critical legal requirements: 1) Must have legitimate product/service (not pure money donation), 2) Transparent disclosure of risks and T&C, 3) KYC/AML compliance for all members, 4) Avoid Ponzi/pyramid scheme characteristics, 5) Sustainable payout structure (not all members can profit equally), 6) Tax compliance (donations may be taxable income), 7) Consumer protection laws adherence. IMPORTANT: Pure donation-based models face high regulatory scrutiny. We strongly recommend attaching digital products, training courses, or memberships to each donation and consulting legal experts before launch.'
    },
    {
      question: 'How does member matching work in 50-50 Crowdfunding?',
      answer: 'The software uses intelligent matching algorithms: FIFO Matching (first donor matched with first available recipient), Sponsor-Based Matching (donations flow through sponsor lineage), Geographic Matching (match members by region for local trust), Random Pool Matching (members enter pool, matched automatically), and Forced Matrix Matching (2×2 or 3×3 structure with spillover). Each donation is instantly matched, funds transferred, and both parties notified via SMS/Email. Unmatched donations are queued with estimated match time displayed on dashboard.'
    },
    {
      question: 'What features does 50-50 Crowdfunding MLM Software include?',
      answer: 'Comprehensive features: Automatic 50-50 fund splitting engine, Real-time donation matching, Member genealogy with dual income tracking, Re-entry and multi-position management, Payment gateway integration (UPI, Bank, Wallet), Donation receipt generation, SMS/Email donation notifications, Withdrawal request system with admin approval, KYC/document verification, Dashboard with earnings forecast (dual streams), Admin controls for split configuration, Transaction audit logs, Referral link generator, and Mobile-responsive interface. Optional: Mobile app, cryptocurrency integration, blockchain transparency.'
    },
    {
      question: 'What is the cost for 50-50 Crowdfunding MLM Software?',
      answer: 'Basic 50-50 Crowdfunding MLM Software starts at ₹3,50,000 with 3-4 weeks development. Advanced systems with re-entry, mobile apps, and payment gateway cost ₹6,50,000+ (5-6 weeks). Enterprise solutions with blockchain transparency, crypto payments, and white-label branding start at ₹12,00,000+ (6-8 weeks). All packages include 50-50 split automation, matching engine, member & admin dashboards, payment integration, compliance tools, training, and 1-year support.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    '50-50 Crowdfunding MLM Software Development',
    'Comprehensive 50-50 crowdfunding MLM software with automatic fund splitting, peer-to-peer donation matching, dual income streams, member re-entry, and transparent crowdfunding network marketing automation.'
  );

  const productSchema = generateProductSchema(
    '50-50 Crowdfunding MLM Software',
    'Advanced peer-to-peer crowdfunding platform with 50-50 donation split automation, dual recipient matching, multi-position re-entry, and intelligent donation distribution for sustainable network marketing.',
    '350000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: '50-50 Crowdfunding MLM Software', url: '/50-50-crowdfunding-mlm-software' }
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft 50-50 Crowdfunding MLM Software',
    description: 'Advanced 50-50 crowdfunding MLM platform with automatic fund splitting, peer-to-peer donation matching, dual income streams, and transparent crowdfunding network marketing automation.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '350000',
    rating: 4.5,
    reviewCount: 68,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="50-50 Crowdfunding MLM Software Development"
        subtitle="Peer-to-Peer Donation | Dual Income Streams | Automatic 50-50 Split"
        description="Launch your crowdfunding MLM with intelligent 50-50 donation splitting. Automate peer-to-peer matching, dual income tracking, member re-entry, and transparent fund distribution for sustainable network marketing success."
        gradient="blue"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is 50-50 Crowdfunding MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>50-50 Crowdfunding MLM Software</strong> is a peer-to-peer donation platform where member contributions are automatically split 50-50 between two recipients: 50% to the direct sponsor and 50% to a senior upline member. This dual-recipient structure creates two powerful income streams—members receive donations from both direct referrals and extended downline teams, enabling faster earnings and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Automatic 50-50 Split</p>
                  <p className="text-sm text-gray-600">Funds divided between sponsor and senior upline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Dual Income Streams</p>
                  <p className="text-sm text-gray-600">Earn from Level 1 and Level 2+ donations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Re-Entry System</p>
                  <p className="text-sm text-gray-600">Multiple positions for accelerated earnings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,50,000</p>
                  <p className="text-sm text-gray-600">Advanced with mobile app at ₹6,50,000</p>
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
              What is 50-50 Crowdfunding MLM?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>50-50 Crowdfunding MLM</strong> is a unique <strong>peer-to-peer donation model</strong> where member contributions are automatically split <strong>50-50</strong> between two recipients: <strong>50% to the direct sponsor</strong> (your immediate upline) and <strong>50% to a senior upline member</strong> (typically your sponsor&apos;s sponsor or pool leader). This dual-recipient structure creates two powerful income streams where members receive donations from both their direct referrals AND from their extended downline team.
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How the 50-50 Split Works:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Scenario:</strong> Member C joins under Member B (who is under Member A) with ₹10,000 donation</p>
                <p>💰 <strong>₹5,000 (50%)</strong> → Goes to Member B (Direct Sponsor)</p>
                <p>💰 <strong>₹5,000 (50%)</strong> → Goes to Member A (Senior Upline)</p>
                <p className="pt-2 text-sm"><em>Result: Both Member B and Member A benefit, creating incentive for deep team building and support.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dual Income Stream Example
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Earnings Potential (₹10,000 Donation)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <th className="px-6 py-3 text-left">Income Source</th>
                    <th className="px-6 py-3 text-left">Members</th>
                    <th className="px-6 py-3 text-left">You Receive</th>
                    <th className="px-6 py-3 text-left">Total Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-medium">Direct Donations (50% from Level 1)</td>
                    <td className="px-6 py-4">2 direct referrals</td>
                    <td className="px-6 py-4">₹5,000 each</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹10,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-medium">Senior Income (50% from Level 2)</td>
                    <td className="px-6 py-4">4 level-2 members</td>
                    <td className="px-6 py-4">₹5,000 each</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹20,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-medium">Extended Team (50% from Level 3)</td>
                    <td className="px-6 py-4">8 level-3 members</td>
                    <td className="px-6 py-4">₹5,000 each</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹40,000</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <td className="px-6 py-4 font-bold text-lg">Total Monthly Income</td>
                    <td className="px-6 py-4 font-bold">14 team members</td>
                    <td className="px-6 py-4 font-bold"></td>
                    <td className="px-6 py-4 font-bold text-xl text-green-600">₹70,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              *Example based on ₹10,000 donation with 2-4-8 team structure. Actual earnings depend on team growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced 50-50 Crowdfunding Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatic 50-50 Split</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Real-time fund splitting (50-50)</li>
                <li>✓ Dual recipient assignment</li>
                <li>✓ Instant fund transfer</li>
                <li>✓ Transparent split logs</li>
                <li>✓ Configurable split ratios</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Re-Entry System</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Unlimited re-entry positions</li>
                <li>✓ Multi-position tracking</li>
                <li>✓ Cumulative earnings dashboard</li>
                <li>✓ Position-based income reports</li>
                <li>✓ Re-entry notifications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member Matching</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ FIFO matching algorithm</li>
                <li>✓ Sponsor-based pairing</li>
                <li>✓ Geographic matching option</li>
                <li>✓ Match queue management</li>
                <li>✓ Instant match notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-red-50 to-orange-50 border-y-4 border-red-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Warning - Crowdfunding MLM High Risk</h3>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-red-600">50-50 Crowdfunding MLM carries SIGNIFICANT legal and regulatory risk.</strong> Pure donation-based models can be classified as illegal money circulation schemes, Ponzi structures, or pyramid schemes in many jurisdictions. Regulatory authorities worldwide scrutinize crowdfunding MLMs heavily due to sustainability concerns and investor protection laws.
          </p>
          <p className="text-gray-700">
            <strong>Critical Requirements:</strong> Attach legitimate digital products, training courses, or memberships to each donation (not pure money transfer). Implement comprehensive KYC/AML verification. Provide transparent risk disclosure in T&C. Avoid guaranteeing returns or profits. Ensure tax compliance for all donations received. Consult legal experts specializing in MLM and crowdfunding regulations before launching. We provide technology only—legal compliance is your responsibility.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">50-50 Crowdfunding MLM Pricing</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Basic 50-50 MLM</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹3,50,000</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>50-50 split automation</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Member matching engine</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Payment gateway</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Dashboard & reports</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>1-year support</span></li>
              </ul>
              <div className="text-sm text-gray-600">Delivery: 3-4 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl shadow-2xl p-8 transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">BEST VALUE</div>
              <h3 className="text-2xl font-bold mb-2">Advanced 50-50 MLM</h3>
              <div className="text-4xl font-bold mb-6">₹6,50,000</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Everything in Basic +</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Multi-position re-entry</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Mobile app (iOS/Android)</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Advanced analytics</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>WhatsApp integration</span></li>
              </ul>
              <div className="text-sm">Delivery: 5-6 weeks</div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise 50-50 MLM</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹12,00,000+</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Everything in Advanced +</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Blockchain transparency</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Crypto payment support</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>White-label branding</span></li>
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
              { title: 'Donation Plan MLM', href: '/donation-plan-mlm-software', desc: 'Peer-to-peer donation system' },
              { title: 'Helping Plan MLM', href: '/helping-plan-mlm-software', desc: 'Community helping network' },
              { title: 'Gift Plan MLM', href: '/gift-plan-mlm-software', desc: 'Gift-based MLM compensation' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'ROI Plan MLM', href: '/roi-plan-mlm-software', desc: 'Return on investment model' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combined compensation structure' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-6 rounded-lg text-center hover:from-cyan-700 hover:to-teal-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all budgets</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-blue-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right solution for you</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch Your 50-50 Crowdfunding Platform
            </h2>
            <p className="text-xl text-gray-600">
              Get expert consultation for your crowdfunding MLM project
            </p>
          </div>
          <ContactForm serviceName="50-50 Crowdfunding MLM" />
        </div>
      </section>
    </>
  );
}

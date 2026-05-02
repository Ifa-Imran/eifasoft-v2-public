import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Real Estate MLM Software | Property MLM Software | Real Estate Network Marketing | EifaSoft',
    description: 'Best Real Estate MLM Software for property network marketing. Automate property listings, commission tracking, team building, lead management, and investment tracking with advanced real estate MLM platform.',
    canonical: '/real-estate-mlm-software',
    keywords: [
      'real estate mlm software',
      'property mlm software',
      'real estate network marketing',
      'property investment mlm',
      'real estate mlm platform',
      'property referral software',
      'real estate commission tracking',
      'property mlm system',
      'real estate downline software',
      'property dealer mlm',
      'real estate binary plan',
      'property matrix plan mlm',
      'real estate lead management',
      'property mlm compensation'
    ],
  });
}

export default function RealEstateMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Real Estate MLM Software Development',
    'Comprehensive real estate MLM software with property listing management, commission tracking, agent network building, lead CRM, and automated referral compensation.',
    '/real-estate-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Real Estate MLM Software',
    'Complete Real Estate MLM platform with property listings and commission tracking',
    '400000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Real Estate MLM Software',
    description: 'Specialized Real Estate MLM software with property listing management, commission tracking, agent network building, lead CRM, and automated referral compensation for property network marketing.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '400000',
    rating: 4.7,
    reviewCount: 56,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Real Estate MLM Software?',
      answer: 'Real Estate MLM Software is a specialized network marketing platform designed for property businesses. It enables real estate companies to manage property listings, track referral commissions, build agent networks, manage leads, and automate commission calculations for property sales and rentals. The software combines traditional MLM compensation structures with real estate-specific features like property CRM, virtual tours, document management, and investment tracking.'
    },
    {
      question: 'How do commissions work in Real Estate MLM?',
      answer: 'Real Estate MLM commissions are typically structured in multiple tiers: 1) Direct Referral Bonus (2-5% of property value or fixed amount per sale), 2) Level Commissions (0.5-2% across 5-10 levels), 3) Override Bonuses for team leaders (1-3% of team sales), 4) Rental Income Sharing (5-10% of monthly rental commissions), 5) Investment Pool Bonuses. For example, on a ₹50 lakh property sale, a direct referrer might earn ₹1 lakh (2%), with upline members earning ₹25,000-50,000 across levels.'
    },
    {
      question: 'What features are included in Real Estate MLM Software?',
      answer: 'Key features include: Property listing management with photos/videos, CRM for leads and clients, Commission calculation engine for sales/rentals, Team genealogy and downline tracking, Document management (agreements, KYC), Payment gateway integration, SMS/Email automation for follow-ups, Mobile app for agents, Virtual property tours, Investment tracking dashboard, Reporting and analytics, Admin controls for approvals, and Integration with property portals.'
    },
    {
      question: 'Can the software handle both property sales and rentals?',
      answer: 'Yes! The software supports dual commission structures: For Property Sales - one-time commission on transaction value (e.g., 2-5% of sale price distributed across network levels). For Property Rentals - recurring monthly commissions on rental income (e.g., 10% of first year rent or 5% ongoing monthly). The system automatically tracks both types, calculates appropriate commissions, and manages payout schedules for each property type.'
    },
    {
      question: 'How does lead management work in Real Estate MLM?',
      answer: 'Comprehensive lead management includes: Lead capture from website, portals, referrals; Automatic assignment to agents based on location/specialization; Lead status tracking (Hot/Warm/Cold); Follow-up reminders and automation; Site visit scheduling and tracking; Lead conversion tracking; Lead source analytics; Duplicate lead detection; Lead nurturing campaigns via SMS/Email; and Lead transfer between agents. All leads are tracked to ensure proper commission attribution.'
    },
    {
      question: 'What MLM compensation plans are suitable for real estate?',
      answer: 'Popular plans for real estate include: Binary Plan (balanced team building, good for large networks), Unilevel Plan (unlimited width, suitable for broker networks), Matrix Plan (controlled growth, 3×10 or 5×7 structures), Hybrid Plans (combining binary + unilevel for flexibility), and Stair Step Breakaway (rewarding high performers with breakaway teams). Real estate typically uses lower commission percentages (1-5%) due to high transaction values.'
    },
    {
      question: 'Is the software suitable for real estate investment MLM?',
      answer: 'Absolutely! The software supports real estate investment MLM with features like: Investment pool management (members pool funds for property purchases), ROI distribution tracking (monthly/quarterly returns), Fractional ownership management, Investment maturity tracking, Capital appreciation calculations, Rental yield distribution, Exit strategy management, Investment performance dashboards, and Compliance reporting. Ideal for crowdfunding real estate models with MLM referral incentives.'
    },
    {
      question: 'How does the software integrate with property portals?',
      answer: 'The software can integrate with major Indian property portals like MagicBricks, 99acres, Housing.com, and CommonFloor through APIs. Features include: Automatic property listing sync, Lead capture from portals, Enquiry management, Response time tracking, Portal performance analytics, and Multi-portal posting from single dashboard. This ensures your MLM network&apos;s properties get maximum visibility while maintaining centralized lead tracking.'
    },
    {
      question: 'What legal compliance features are included?',
      answer: 'Critical compliance features include: RERA registration tracking and verification, KYC/AML document collection and validation, Agreement/contract generation and storage, Stamp duty and registration tracking, TDS calculation and reporting, Commission disclosure documentation, Audit trail for all transactions, Data privacy compliance (consent management), and Regulatory reporting tools. These features help maintain legal compliance in real estate network marketing operations.'
    },
    {
      question: 'What is the cost and timeline for Real Estate MLM Software?',
      answer: 'Basic Real Estate MLM Software starts at ₹4,00,000 with 4-5 weeks development time. Advanced systems with property CRM, mobile apps, and portal integration cost ₹8,00,000+ (6-8 weeks). Enterprise solutions with investment tracking, virtual tours, custom integrations, and white-label branding start at ₹15,00,000+ (8-12 weeks). All packages include property listing module, commission engine, admin panel, training, and 1-year support.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Real Estate MLM Software', url: '/real-estate-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Real Estate MLM Software Development"
        subtitle="Property Network Marketing Platform | Automate Sales, Rentals & Commissions"
        description="Transform your real estate business with powerful MLM software. Manage property listings, track agent commissions, build referral networks, automate lead distribution, and scale your property business with intelligent network marketing technology."
        gradient="green"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">What is Real Estate MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Real Estate MLM Software</strong> is a specialized network marketing platform designed for property businesses. It combines MLM compensation structures with real estate features including property listing management, lead CRM, commission automation, agent network building, and investment tracking. Members earn commissions on property sales, rentals, and referrals while building hierarchical agent teams.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Property Management</p>
                  <p className="text-sm text-gray-600">Listings, virtual tours, CRM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Commission Automation</p>
                  <p className="text-sm text-gray-600">Sales & rental tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Agent Network Building</p>
                  <p className="text-sm text-gray-600">Multi-level team tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹4,00,000</p>
                  <p className="text-sm text-gray-600">Complete property MLM platform</p>
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
              What is Real Estate MLM Software?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Real Estate MLM Software</strong> is a specialized network marketing platform designed specifically for the property industry. It combines traditional MLM compensation structures with powerful real estate features including <strong>property listing management</strong>, <strong>lead CRM</strong>, <strong>commission automation</strong>, and <strong>agent network building</strong>. This software enables real estate companies, builders, and property consultants to leverage the power of network marketing to expand their reach and sales.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Unlike generic MLM software, Real Estate MLM platforms include industry-specific features like <strong>property showcase galleries</strong>, <strong>virtual tours</strong>, <strong>investment tracking</strong>, <strong>rental income distribution</strong>, <strong>RERA compliance tools</strong>, and <strong>integration with property portals</strong> (MagicBricks, 99acres, Housing.com). Members earn commissions not just on direct property sales, but also through team building, rental referrals, and ongoing investment returns—creating multiple income streams within a single platform.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Management</h3>
                <p className="text-gray-700">Manage unlimited property listings with photos, videos, virtual tours, pricing, and availability status.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commission Automation</h3>
                <p className="text-gray-700">Automatic calculation and distribution of commissions for property sales, rentals, and investment returns.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Network</h3>
                <p className="text-gray-700">Build and manage hierarchical agent networks with team genealogy, performance tracking, and rank advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Real Estate MLM Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn commissions through property sales, rentals, team building, and investment referrals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-3">Step 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agent Registration</h3>
              <p className="text-gray-700">
                Join as agent/member. Complete KYC verification. Get unique referral code. Access property dashboard and training materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-3">Step 2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Promotion</h3>
              <p className="text-gray-700">
                Share property listings with clients. Schedule site visits. Generate leads through network. Upload client requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-600 mb-3">Step 3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Team</h3>
              <p className="text-gray-700">
                Recruit new agents. Train downline members. Build referral network. Earn override bonuses on team sales and rentals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-600">
              <div className="text-3xl font-bold text-orange-600 mb-3">Step 4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Commissions</h3>
              <p className="text-gray-700">
                Receive direct sale commission. Get level commissions. Earn rental income share. Track earnings in real-time dashboard.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real Estate MLM Commission Example (Property Sale)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <th className="px-6 py-3 text-left">Income Type</th>
                    <th className="px-6 py-3 text-left">Commission Rate</th>
                    <th className="px-6 py-3 text-left">Example Earnings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-green-50">
                    <td className="px-6 py-4 font-medium">Direct Sale Commission</td>
                    <td className="px-6 py-4">2% of property value</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹1,00,000 (on ₹50L property)</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-6 py-4 font-medium">Level Commissions (5 Levels)</td>
                    <td className="px-6 py-4">1%, 0.75%, 0.5%, 0.25%, 0.25%</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹1,37,500 (team sales)</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-6 py-4 font-medium">Team Override Bonus</td>
                    <td className="px-6 py-4">1% of team volume</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹50,000 (on ₹50L team sales)</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-6 py-4 font-medium">Rental Income Share (Ongoing)</td>
                    <td className="px-6 py-4">5% of monthly rent</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹1,500/month (on ₹30K rent)</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <td className="px-6 py-4 font-bold text-lg">Total Potential (First Sale)</td>
                    <td className="px-6 py-4 font-bold"></td>
                    <td className="px-6 py-4 font-bold text-xl text-green-600">₹2,87,500+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              *Based on ₹50 lakh property sale. Actual commissions vary by company policy and compensation plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Real Estate MLM Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Listing Module</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Unlimited property listings (sale/rent)</li>
                <li>✓ Photo galleries & virtual tours</li>
                <li>✓ Property categories & filters</li>
                <li>✓ Location mapping (Google Maps)</li>
                <li>✓ Amenities and specifications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead & CRM Management</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Lead capture & assignment</li>
                <li>✓ Follow-up automation (SMS/Email)</li>
                <li>✓ Site visit scheduling</li>
                <li>✓ Lead status tracking (Hot/Warm/Cold)</li>
                <li>✓ Client database management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commission Engine</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Automatic commission calculation</li>
                <li>✓ Multi-level distribution (5-10 levels)</li>
                <li>✓ Sale & rental commission tracking</li>
                <li>✓ Override bonuses for leaders</li>
                <li>✓ Real-time commission reports</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Genealogy</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Visual team tree structure</li>
                <li>✓ Downline performance tracking</li>
                <li>✓ Rank advancement system</li>
                <li>✓ Team volume analytics</li>
                <li>✓ Sponsor & upline information</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Management</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ KYC document collection</li>
                <li>✓ Agreement generation & storage</li>
                <li>✓ Digital signatures (eSign)</li>
                <li>✓ Property documents repository</li>
                <li>✓ RERA registration tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App & Integrations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ iOS & Android agent apps</li>
                <li>✓ Property portal integration (99acres)</li>
                <li>✓ Payment gateway integration</li>
                <li>✓ WhatsApp messaging automation</li>
                <li>✓ Google Maps & geolocation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Estate MLM Software Pricing
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Affordable property MLM solutions tailored for real estate businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">Basic Real Estate MLM</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">₹4,00,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Property listing module (100 listings)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Binary/Unilevel compensation plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Lead management CRM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Commission automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Agent & admin dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>1-year support & updates</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">Delivery: 4-5 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl shadow-2xl p-8 transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Advanced Real Estate MLM</h3>
              <div className="text-4xl font-bold mb-6">₹8,00,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Everything in Basic +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Unlimited property listings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Virtual tours & 360° images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Mobile app (iOS & Android)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Property portal integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Investment tracking module</span>
                </li>
              </ul>
              <div className="text-sm">Delivery: 6-8 weeks</div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">Enterprise Real Estate MLM</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">₹15,00,000+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Everything in Advanced +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Custom compensation plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multi-branch management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>RERA compliance tools</span>
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
              <div className="text-sm text-gray-600">Delivery: 8-12 weeks</div>
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
              { title: 'E-Commerce MLM', href: '/e-commerce-plan-mlm-software', desc: 'Online store with MLM integration' },
              { title: 'Mobile Recharge MLM', href: '/mobile-recharge-plan-mlm-software', desc: 'Telecom services MLM platform' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'ROI Plan MLM', href: '/roi-plan-mlm-software', desc: 'Return on investment model' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combined compensation structure' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg text-center hover:from-emerald-700 hover:to-teal-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all budgets</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-green-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right solution for you</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch Your Real Estate MLM Platform
            </h2>
            <p className="text-xl text-gray-600">
              Get a free consultation and custom quote for your property MLM business
            </p>
          </div>
          <ContactForm serviceName="Real Estate MLM Software" />
        </div>
      </section>
    </>
  );
}

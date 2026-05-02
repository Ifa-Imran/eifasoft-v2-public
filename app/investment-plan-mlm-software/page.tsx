import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Investment Plan MLM Software | ROI MLM Software Development | EifaSoft',
    description: 'Investment Plan MLM software with portfolio tracking, ROI calculation, and automated profit distribution. Custom development starts ₹5,00,000. Legal compliance included.',
    canonical: '/investment-plan-mlm-software',
    keywords: [
      'investment plan mlm software',
      'investment mlm software',
      'roi mlm plan',
      'investment mlm development',
      'profit sharing mlm',
      'portfolio mlm software',
      'investment network marketing',
      'mlm investment platform',
      'investment mlm india',
      'roi based mlm software',
      'mlm profit distribution software',
      'investment plan mlm app',
      'automated investment mlm',
      'investment mlm moradabad',
      'passive income mlm software',
      'fixed return mlm software',
      'investment compensation plan',
      'mlm portfolio tracker',
      'investment mlm development company',
      'custom investment mlm software',
      'investment plan mlm price india',
      'financial mlm software india'
    ],
  });
}

export default function InvestmentPlanMLMSoftware() {
  const serviceSchema = generateServiceSchema(
    'Investment Plan MLM Software Development',
    'Professional Investment Plan MLM software with portfolio tracking, ROI calculation, automated profit distribution, and investment compliance management.',
    '/investment-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Investment Plan MLM Software',
    'Complete Investment Plan MLM platform with ROI engine and portfolio tracking',
    '500000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Investment Plan MLM Software',
    description: 'Specialized Investment Plan MLM software with portfolio tracking, ROI calculation, automated profit distribution, and investment compliance management for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '500000',
    rating: 4.5,
    reviewCount: 42,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Investment Plan MLM?',
      answer: 'Investment Plan MLM is a compensation structure where members invest money into a fund or business venture and earn returns (ROI - Return on Investment) along with MLM commissions for recruiting other investors. Members typically earn: Fixed ROI on their investment (e.g., 10% monthly), Referral commissions for bringing new investors, Level commissions from downline investments, and Matching bonuses based on network performance.'
    },
    {
      question: 'How does Investment MLM plan work?',
      answer: 'Members join by making an investment (e.g., ₹10,000 to ₹5,00,000). The company uses investments for business activities (trading, real estate, etc.) and distributes profits. Members earn: Daily/weekly/monthly ROI (returns on investment), Direct referral bonus (5-10% of investment amount), Level commissions (1-5% from downline investments up to 5-10 levels), Rank achievement bonuses, and Principal amount returned after contract period. Network growth increases total earnings.'
    },
    {
      question: 'Is Investment Plan MLM legal in India?',
      answer: 'Investment MLM plans operate in a legal grey area in India and require EXTREME CAUTION. To be legal, they must: Have genuine business operations (not Ponzi/pyramid scheme), Not promise guaranteed returns (violates SEBI regulations), Comply with RBI guidelines for fund collection, Register with appropriate authorities (RoC, SEBI if applicable), Follow Prize Chits and Money Circulation Schemes (Banning) Act, 1978, Ensure no mandatory investment for joining MLM, and Provide clear risk disclosures. Consult legal experts before launching. Many investment MLMs have been banned in India.'
    },
    {
      question: 'What are the risks of Investment MLM plans?',
      answer: 'CRITICAL RISKS: High legal risk (many banned as Ponzi schemes), Unsustainable model if no genuine business backing, Regulatory action by SEBI, RBI, or police, Loss of investor capital if company fails, Reputation damage for promoters and members, Criminal liability under Money Circulation Act, Difficulty in attracting investors after initial phase, and Market saturation leading to collapse. Only proceed with strong legal foundation and genuine business model.'
    },
    {
      question: 'What is the difference between Investment MLM and Ponzi scheme?',
      answer: 'LEGAL Investment MLM: Has genuine business generating profits (trading, real estate), ROI comes from actual business profits, Focus on both investment returns AND product/service sales, Transparent operations and audited accounts, Registered with authorities. ILLEGAL Ponzi Scheme: No real business, uses new investor money to pay old investors, Promises guaranteed/unrealistic returns, Recruitment-focused with no real products, Eventually collapses when new investors stop joining. Always ensure genuine business operations exist.'
    },
    {
      question: 'How much does Investment Plan MLM software cost?',
      answer: 'Investment Plan MLM software development at EifaSoft starts from ₹5,00,000 for basic features including investment tracking, ROI calculation, commission engine, and investor portal. Advanced features like portfolio management, trading integration, risk analytics, KYC/AML compliance, and mobile apps can cost ₹8,00,000 to ₹20,00,000. Legal compliance setup and documentation are additional (₹2-5 lakhs). Price reflects complexity and regulatory requirements.'
    },
    {
      question: 'What features should Investment MLM software have?',
      answer: 'Essential features: Investment package management, ROI calculation engine (daily/weekly/monthly), Automated profit distribution, Investment history & portfolio tracking, Referral commission automation, Multi-level commission calculation, KYC/AML verification, Risk disclosure & agreements, Withdrawal management with limits, Investment maturity tracking, Rank progression system, Performance analytics, Payment gateway integration, and Admin controls for ROI adjustment based on actual business performance.'
    },
    {
      question: 'What investment packages are typically offered?',
      answer: 'Common package structures: Starter: ₹10,000-25,000 (8-10% monthly ROI, 6-12 month contract), Silver: ₹50,000-1,00,000 (10-12% monthly ROI, 12 month contract), Gold: ₹2,00,000-5,00,000 (12-15% monthly ROI, 18 month contract), Platinum: ₹10,00,000+ (15-20% monthly ROI, 24 month contract). Higher investment = higher returns and better MLM position. CAUTION: Unrealistic ROI promises indicate potential fraud.'
    },
    {
      question: 'How long does Investment MLM software development take?',
      answer: 'Basic Investment MLM software takes 8-10 weeks including investment tracking, ROI engine, commission calculation, and compliance features. Complex systems with portfolio management, trading integration, advanced analytics, mobile apps, and regulatory compliance can take 12-18 weeks. Legal compliance documentation and setup require additional 2-3 weeks. We ensure thorough testing of ROI calculations and fund tracking.'
    },
    {
      question: 'Does EifaSoft provide legal consultation for Investment MLM?',
      answer: 'While we develop the software, we STRONGLY RECOMMEND hiring specialized legal counsel for Investment MLM plans. We can provide: Software compliance features (KYC, AML, audit trails), Documentation templates for terms & conditions, Risk disclosure integration, Regulatory reporting capabilities, and Connections to MLM legal experts in India. However, final legal compliance is your responsibility. We advise AGAINST launching without proper legal clearance due to high regulatory risks in India.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Investment Plan MLM Software', url: '/investment-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Investment Plan MLM Software"
        subtitle="ROI & Portfolio Management Platform"
        description="Launch investment-based MLM with advanced ROI tracking, automated profit distribution, and compliance features. Expert development starting ₹5,00,000."
        gradient="orange"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-3">What is Investment Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Investment Plan MLM Software</strong> is a specialized platform for investment-based network marketing where members invest money into a fund or business venture and earn returns (ROI) along with MLM commissions for recruiting other investors. The software includes portfolio tracking, ROI calculation, automated profit distribution, investment maturity management, and comprehensive compliance features for regulatory adherence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">ROI Calculation Engine</p>
                  <p className="text-sm text-gray-600">Daily/weekly/monthly distribution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Portfolio Management</p>
                  <p className="text-sm text-gray-600">Investment tracking & analytics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Compliance Features</p>
                  <p className="text-sm text-gray-600">KYC/AML verification system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹5,00,000</p>
                  <p className="text-sm text-gray-600">Premium compliance platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Warning */}
      <section className="py-8 bg-red-50 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-red-900">⚠️ LEGAL COMPLIANCE NOTICE</h3>
              <p className="mt-2 text-red-800">
                Investment MLM plans carry <strong>HIGH LEGAL RISK</strong> in India. Many have been banned as Ponzi schemes under the Prize Chits and Money Circulation Schemes (Banning) Act, 1978. <strong>Mandatory requirements:</strong> Genuine business operations generating real profits, No guaranteed return promises, SEBI/RBI compliance for fund collection, Proper registration and licenses, Clear risk disclosures to investors, and Legal expert consultation before launch. EifaSoft provides software only - legal compliance is customer&apos;s responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Investment MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Investment Plan MLM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine investment returns with network marketing commissions (requires genuine business backing)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works (Legal Model)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Member Investment</h4>
                    <p className="text-gray-600">Member invests in business venture (e.g., ₹1,00,000)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Operations</h4>
                    <p className="text-gray-600">Company invests in REAL business (trading, real estate, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Profit Distribution</h4>
                    <p className="text-gray-600">Actual business profits distributed as ROI (no guarantees)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">MLM Commissions</h4>
                    <p className="text-gray-600">Earn from referring new investors (transparent structure)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Investment Returns</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="text-sm text-gray-600 mb-1">Initial Investment</div>
                  <div className="text-2xl font-bold text-gray-900">₹1,00,000</div>
                  <div className="text-sm text-gray-600">12-month contract</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-gray-600 mb-1">Monthly ROI (if business profits)</div>
                  <div className="text-xl font-bold text-green-600">₹8,000 - ₹12,000</div>
                  <div className="text-sm text-gray-600">8-12% based on performance</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="text-sm text-gray-600 mb-1">Referral Commission (3 investors)</div>
                  <div className="text-xl font-bold text-blue-600">₹15,000 - ₹30,000</div>
                  <div className="text-sm text-gray-600">5-10% of referred investments</div>
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-lg">
                  <div className="text-sm mb-1">Total Potential Earnings (12 months)</div>
                  <div className="text-2xl font-bold">₹1,11,000 - ₹1,74,000</div>
                  <div className="text-xs opacity-90">⚠️ Subject to actual business performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment MLM Income Types
            </h2>
            <p className="text-xl text-gray-600">
              Multiple earning streams from investment and network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ROI (Return on Investment)</h3>
              <p className="text-gray-600 mb-3">Profit share from business operations</p>
              <div className="text-sm text-orange-600 font-semibold">8-15% monthly (performance-based)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Referral Bonus</h3>
              <p className="text-gray-600 mb-3">Commission on personally referred investors</p>
              <div className="text-sm text-blue-600 font-semibold">5-10% of investment amount</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Level Commission</h3>
              <p className="text-gray-600 mb-3">Earn from downline investments (multi-level)</p>
              <div className="text-sm text-green-600 font-semibold">1-5% per level (5-10 levels)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Matching Bonus</h3>
              <p className="text-gray-600 mb-3">Percentage of direct referral earnings</p>
              <div className="text-sm text-purple-600 font-semibold">10-20% matching bonus</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">Bonuses for reaching investment milestones</p>
              <div className="text-sm text-pink-600 font-semibold">₹25K - ₹5L per rank</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Pool</h3>
              <p className="text-gray-600 mb-3">Share of company profit pool</p>
              <div className="text-sm text-indigo-600 font-semibold">For top performers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample Investment Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible investment tiers (customize based on your business model)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-2xl font-bold text-gray-900 mb-3">₹25,000</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 8% monthly ROI*</li>
                <li>• 6-month contract</li>
                <li>• 5% referral bonus</li>
                <li>• Basic support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Silver</h3>
              <div className="text-2xl font-bold text-blue-600 mb-3">₹1,00,000</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 10% monthly ROI*</li>
                <li>• 12-month contract</li>
                <li>• 7% referral bonus</li>
                <li>• Priority support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">Gold</h3>
              <div className="text-2xl font-bold text-orange-600 mb-3">₹5,00,000</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 12% monthly ROI*</li>
                <li>• 18-month contract</li>
                <li>• 10% referral bonus</li>
                <li>• VIP support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200">
              <h3 className="font-bold text-gray-900 mb-2">Platinum</h3>
              <div className="text-2xl font-bold text-purple-600 mb-3">₹25,00,000</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 15% monthly ROI*</li>
                <li>• 24-month contract</li>
                <li>• 12% referral bonus</li>
                <li>• Dedicated manager</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-red-600 mt-6">
            * ROI subject to actual business performance. No guaranteed returns. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive platform for investment-based MLM
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Investment package management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI calculation engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated profit distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Portfolio tracking & analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Investment maturity management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">KYC/AML verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Risk disclosure agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Audit trail & reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Document management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Regulatory reporting tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">MLM Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-level commission engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Referral tracking system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Genealogy tree visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance analytics</span>
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
              Investment MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Premium pricing for high-compliance platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹5,00,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Investment tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic KYC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Investor portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹10,00,000</div>
              <p className="text-orange-100 mb-6">Recommended</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Advanced compliance (KYC/AML)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Portfolio management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹18,00,000+</div>
              <p className="text-gray-600 mb-6">Full compliance</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Trading platform integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics & AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Legal documentation support</span>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width single-level commissions' },
              { title: 'ROI Plan MLM', href: '/roi-plan-mlm-software', desc: 'Return on investment platform' },
              { title: 'Repurchase Plan MLM', href: '/repurchase-plan-mlm-software', desc: 'Recurring commission system' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with position advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
              { title: 'Cryptocurrency MLM', href: '/cryptocurrency-mlm-software', desc: 'Blockchain-powered MLM platform' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-orange-100">
                <h3 className="text-orange-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-lg text-center hover:from-orange-700 hover:to-amber-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-6 rounded-lg text-center hover:from-amber-700 hover:to-yellow-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6 rounded-lg text-center hover:from-yellow-700 hover:to-orange-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right MLM platform</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Investment Plan MLM" />
    </>
  );
}

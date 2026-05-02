import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'ROI Plan MLM Software | Return on Investment MLM Software Development | EifaSoft',
    description: 'ROI Plan MLM software with automated return calculation, profit distribution, and portfolio management. Custom development starts ₹5,50,000. Legal compliance consultation included.',
    canonical: '/roi-plan-mlm-software',
    keywords: [
      'roi plan mlm software',
      'roi mlm software',
      'return on investment mlm',
      'profit sharing mlm software',
      'roi mlm development',
      'investment return mlm',
      'roi based mlm plan',
      'mlm roi calculator',
      'roi mlm india',
      'roi plan mlm development',
      'custom roi mlm software',
      'roi mlm moradabad',
      'passive income roi mlm',
      'roi based network marketing',
      'profit distribution mlm',
      'roi mlm platform',
      'automated roi distribution',
      'daily roi mlm software',
      'roi mlm app',
      'weekly roi mlm',
      'monthly roi mlm software',
      'roi network marketing software'
    ]
  });
}

export default function ROIPlanMLMSoftware() {
  const faqs = [
    {
      question: 'What is ROI Plan MLM?',
      answer: 'ROI (Return on Investment) Plan MLM is a compensation structure where members invest money and earn fixed or variable returns over a specific period, along with MLM commissions for recruiting other investors. Members typically earn: Daily/weekly/monthly ROI (e.g., 1-3% daily or 10-30% monthly), Referral bonuses for bringing new investors, Level commissions from downline investments, and Matching bonuses from team performance.'
    },
    {
      question: 'How does ROI MLM plan work?',
      answer: 'Members join by investing a specific amount (e.g., ₹10,000 to ₹10,00,000). The company promises returns based on business activities (trading, mining, staking, etc.). Typical structure: Investment packages with different ROI rates, Daily/weekly/monthly profit distribution, Contract period (30-365 days), Principal returned at maturity or reinvested, MLM commissions on top of ROI. Members earn both from their investment returns and network building.'
    },
    {
      question: 'Is ROI Plan MLM legal in India?',
      answer: 'CRITICAL WARNING: ROI MLM plans carry EXTREMELY HIGH legal risk in India. To operate legally: Must have genuine profit-generating business (not Ponzi scheme), Cannot promise GUARANTEED returns (violates SEBI regulations), Must comply with RBI guidelines for public fund collection, Cannot use new investor money to pay old investors, Must register with RoC and obtain necessary licenses, Requires clear risk disclosure, Must follow Prize Chits and Money Circulation Schemes (Banning) Act, 1978. Many ROI MLMs have been shut down by authorities. MANDATORY legal consultation required.'
    },
    {
      question: 'What are the risks of ROI MLM plans?',
      answer: 'SEVERE RISKS: Very high probability of being classified as Ponzi/pyramid scheme, Criminal liability under Money Circulation Act, SEBI/RBI/Police action and company shutdown, Loss of all investor funds if business fails, Reputation damage and social consequences, Difficulty sustaining high ROI promises long-term, Market saturation leading to collapse, Negative media coverage affecting recruitment. ONLY proceed with: Genuine business generating real profits, Conservative ROI promises, Strong legal foundation, Full transparency and audited accounts.'
    },
    {
      question: 'What is the difference between legitimate ROI MLM and Ponzi scheme?',
      answer: 'LEGITIMATE ROI MLM: Real business operations (verified trading, mining, staking), ROI varies based on actual performance, Realistic returns (5-15% annually), Transparent operations with audited accounts, Registered with authorities, Focus on products/services + investment. PONZI SCHEME: No real business or fake operations, Uses new money to pay old investors, Unrealistic guaranteed returns (2-3% daily = 700%+ annual), Opaque operations, no audits, Unregistered or fraudulent registration, Pure recruitment focus. Most "ROI MLMs" fall into Ponzi category.'
    },
    {
      question: 'How much does ROI Plan MLM software cost?',
      answer: 'ROI Plan MLM software development at EifaSoft starts from ₹5,50,000 for basic features including ROI calculation engine, investment tracking, automated distribution, and compliance features. Advanced features like trading platform integration, crypto wallet, smart contracts, advanced analytics, and mobile apps can cost ₹9,00,000 to ₹25,00,000. Legal compliance setup is additional ₹3-7 lakhs. Higher cost reflects regulatory complexity and risk mitigation features.'
    },
    {
      question: 'What ROI rates are sustainable for MLM businesses?',
      answer: 'REALISTIC ROI expectations: Conservative: 0.5-1% daily (15-30% monthly, 180-365% annual) - VERY DIFFICULT to sustain, Moderate: 5-10% monthly (60-120% annual) - Requires exceptional business performance, Sustainable: 1-2% monthly (12-24% annual) - Realistic for genuine businesses. WARNING: Promises of 2-3% daily (60-90% monthly, 700-1000%+ annual) are IMPOSSIBLE to sustain and indicate fraud. Real businesses rarely generate such returns consistently.'
    },
    {
      question: 'What features should ROI MLM software have?',
      answer: 'Essential features: Investment package management, ROI calculation engine (daily/weekly/monthly), Automated profit distribution, Investment maturity tracking, Principal withdrawal management, Referral commission automation, Multi-level commission calculation, Portfolio tracking & analytics, Risk disclosure system, KYC/AML compliance, Withdrawal limits & controls, ROI adjustment tools (based on actual performance), Transaction audit trail, Payment gateway integration, and Admin dashboard with profit/loss tracking.'
    },
    {
      question: 'How long does ROI MLM software development take?',
      answer: 'Basic ROI MLM software takes 8-12 weeks including investment tracking, ROI engine, commission calculation, and basic compliance. Complex systems with trading integration, crypto features, smart contracts, advanced analytics, mobile apps, and full compliance can take 14-20 weeks. Legal documentation and compliance setup require additional 3-4 weeks. We include thorough testing of ROI calculations and failsafe mechanisms for unsustainable scenarios.'
    },
    {
      question: 'Does EifaSoft provide legal support for ROI MLM?',
      answer: 'We provide software development ONLY, not legal services. However, we: Include compliance features (KYC, AML, audit trails, risk disclosures), Provide document templates for terms & conditions, Build reporting tools for regulatory compliance, Can connect you with MLM legal experts in India, Advise on software-level risk mitigation. CRITICAL: We STRONGLY RECOMMEND against launching ROI MLM without: Independent legal opinion from MLM attorneys, Genuine business operations generating real profits, Conservative ROI promises, Full regulatory compliance. We cannot guarantee legal safety.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'ROI Plan MLM Software Development',
    'Custom ROI Plan MLM software with automated return calculation, profit distribution, portfolio tracking, and comprehensive compliance features for investment-based network marketing.'
  );

  const productSchema = generateProductSchema(
    'ROI Plan MLM Software',
    'Secure ROI MLM platform with investment tracking, automated ROI distribution, commission engine, KYC/AML compliance, risk management, and investor portal. Includes analytics and mobile app.',
    '550000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft ROI Plan MLM Software',
    description: 'Specialized ROI Plan MLM software with automated return calculation, profit distribution, portfolio tracking, and comprehensive compliance features for investment-based network marketing.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '550000',
    rating: 4.5,
    reviewCount: 52,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'ROI Plan MLM Software', url: '/roi-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="ROI Plan MLM Software"
        subtitle="Return on Investment MLM Platform"
        description="Build ROI-based MLM with advanced profit distribution, portfolio tracking, and compliance features. Expert development with legal guidance starting ₹5,50,000."
        gradient="purple"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is ROI Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>ROI Plan MLM Software</strong> is a specialized platform for investment-based network marketing where members invest money and earn returns (Return on Investment) along with MLM commissions for recruiting other investors. The software features ROI calculation engines, portfolio management, automated profit distribution, investment maturity tracking, and compliance tools for regulatory adherence.
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
                  <p className="font-semibold text-gray-900">ROI Calculation Engine</p>
                  <p className="text-sm text-gray-600">Daily/weekly/monthly distribution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Portfolio Management</p>
                  <p className="text-sm text-gray-600">Investment tracking & maturity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Compliance Features</p>
                  <p className="text-sm text-gray-600">KYC/AML verification included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹5,50,000</p>
                  <p className="text-sm text-gray-600">Premium compliance platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Legal Warning */}
      <section className="py-10 bg-gradient-to-r from-red-600 to-red-700 border-t-4 border-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4 text-white">
              <h3 className="text-2xl font-bold mb-3">⚠️ CRITICAL LEGAL WARNING - EXTREMELY HIGH RISK</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>ROI MLM plans have VERY HIGH probability of being classified as illegal Ponzi/pyramid schemes in India.</strong> Hundreds of such companies have been shut down by authorities, with promoters facing criminal charges.
              </p>
              <div className="bg-red-800 bg-opacity-50 p-4 rounded-lg">
                <p className="font-bold mb-2">MANDATORY REQUIREMENTS TO AVOID LEGAL ACTION:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Genuine profit-generating business (verified trading, mining, or business operations)</li>
                  <li>NO guaranteed return promises (violates SEBI regulations)</li>
                  <li>Conservative ROI rates (1-2% monthly MAX for sustainability)</li>
                  <li>Full transparency with regular audited financial statements</li>
                  <li>Proper registration (RoC, SEBI if applicable) and licenses</li>
                  <li>Clear risk disclosures to all investors</li>
                  <li>Independent legal opinion from MLM/securities attorneys</li>
                </ul>
                <p className="mt-3 text-sm font-bold">EifaSoft provides software ONLY. Legal compliance is entirely your responsibility. We STRONGLY advise against launching without comprehensive legal clearance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ROI MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is ROI Plan MLM? (Legal Model)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn returns from REAL business profits combined with network marketing commissions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Legal ROI MLM Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment in Business</h4>
                    <p className="text-gray-600">Member invests in genuine business venture (e.g., ₹50,000)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real Business Operations</h4>
                    <p className="text-gray-600">Company conducts VERIFIED business (trading, crypto staking, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Profit Distribution</h4>
                    <p className="text-gray-600">Actual profits distributed as ROI (NOT guaranteed, varies)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Network Commissions</h4>
                    <p className="text-gray-600">Earn MLM bonuses for referring new investors (transparent)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Key Difference:</strong> Legal ROI MLM has REAL, VERIFIABLE business operations. Ponzi schemes use new investor money to pay old investors with NO real business.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Sustainable vs Unsustainable ROI</h3>
              <div className="space-y-4">
                <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
                  <div className="font-bold text-green-900 mb-1">✓ SUSTAINABLE (Realistic)</div>
                  <div className="text-sm text-green-800">1-2% monthly (12-24% annual)</div>
                  <div className="text-xs text-green-700">Based on genuine business performance</div>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded">
                  <div className="font-bold text-yellow-900 mb-1">⚠️ RISKY (Very Difficult)</div>
                  <div className="text-sm text-yellow-800">5-10% monthly (60-120% annual)</div>
                  <div className="text-xs text-yellow-700">Requires exceptional business results</div>
                </div>
                <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
                  <div className="font-bold text-red-900 mb-1">✗ UNSUSTAINABLE (Ponzi Alert)</div>
                  <div className="text-sm text-red-800">2-3% daily (700-1000%+ annual)</div>
                  <div className="text-xs text-red-700">IMPOSSIBLE - Indicates fraud/scheme</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600 bg-white p-3 rounded">
                <strong>Reality Check:</strong> Even the best hedge funds struggle to achieve 30% annual returns consistently. Claims of 50%+ monthly are mathematical impossibilities for legitimate businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI MLM Income Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Dual income streams from investment returns and network building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ROI (Return on Investment)</h3>
              <p className="text-gray-600 mb-3">Profit share from actual business performance</p>
              <div className="text-sm text-purple-600 font-semibold">1-10% monthly (performance-based)*</div>
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
              <p className="text-gray-600 mb-3">Earn from downline member investments</p>
              <div className="text-sm text-green-600 font-semibold">1-5% per level (5-10 levels)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Re-investment Bonus</h3>
              <p className="text-gray-600 mb-3">Extra commission for reinvesting profits</p>
              <div className="text-sm text-orange-600 font-semibold">2-5% on reinvestment amount</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">Bonuses for reaching investment milestones</p>
              <div className="text-sm text-pink-600 font-semibold">₹25K - ₹10L per rank</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Matching Bonus</h3>
              <p className="text-gray-600 mb-3">Percentage of direct referral earnings</p>
              <div className="text-sm text-indigo-600 font-semibold">10-25% matching bonus</div>
            </div>
          </div>
          <p className="text-center text-sm text-red-600 mt-6">* ROI not guaranteed. Subject to actual business performance and market conditions.</p>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced platform with compliance and risk management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced ROI calculation engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Daily/weekly/monthly distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Investment package management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Maturity tracking & alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI adjustment tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Portfolio analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">KYC/AML verification system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Risk disclosure management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Complete audit trail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Document management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Regulatory reporting tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Investor agreements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-level commission engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Withdrawal management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Premium pricing for high-compliance platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹5,50,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI calculation engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Investment tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic compliance</span>
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

            <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹11,00,000</div>
              <p className="text-purple-100 mb-6">Recommended</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Advanced KYC/AML</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Portfolio management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹20,00,000+</div>
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
                  <span className="text-gray-700">Smart contract integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Legal documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">12 months support</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">+ Legal compliance consultation: ₹3-7 lakhs additional</p>
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
              { title: 'Investment Plan MLM', href: '/investment-plan-mlm-software', desc: 'Portfolio & investment tracking' },
              { title: 'Repurchase Plan MLM', href: '/repurchase-plan-mlm-software', desc: 'Recurring commission system' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Rank-based generational bonuses' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with position advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
              { title: 'Cryptocurrency MLM', href: '/cryptocurrency-mlm-software', desc: 'Blockchain-powered MLM platform' },
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
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-rose-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right MLM platform</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="ROI Plan MLM" />
    </>
  );
}

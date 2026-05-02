import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobile Recharge MLM Software | Recharge MLM Plan Software Development | EifaSoft',
    description: 'Mobile Recharge MLM software with multi-operator API integration, instant recharge processing, and commission automation. Perfect for telecom MLM. Custom development starts ₹4,00,000.',
    canonical: '/mobile-recharge-plan-mlm-software',
    keywords: [
      'mobile recharge mlm software',
      'recharge mlm plan',
      'telecom mlm software',
      'mobile recharge mlm',
      'recharge business mlm',
      'mlm recharge software',
      'prepaid recharge mlm',
      'dth recharge mlm software',
      'mobile recharge mlm india',
      'recharge plan mlm app',
      'bill payment mlm software',
      'telecom network marketing',
      'mobile recharge mlm moradabad',
      'recharge mlm development company',
      'multi-operator recharge mlm',
      'utility mlm software',
      'recharge mlm compensation plan',
      'mlm recharge platform india',
      'custom recharge mlm software',
      'recharge mlm software price',
      'telecom mlm plan india',
      'mobile services mlm software'
    ],
  });
}

export default function MobileRechargePlanMLMSoftware() {
  const serviceSchema = generateServiceSchema(
    'Mobile Recharge Plan MLM Software Development',
    'Professional Mobile Recharge MLM software with multi-operator API integration, instant recharge processing, and commission automation for telecom MLM businesses.',
    '/mobile-recharge-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Mobile Recharge Plan MLM Software',
    'Complete Mobile Recharge MLM platform with multi-operator API integration',
    '400000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Mobile Recharge MLM Software',
    description: 'Specialized Mobile Recharge MLM software with multi-operator API integration, instant recharge processing, and commission automation for telecom network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '400000',
    rating: 4.7,
    reviewCount: 88,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Mobile Recharge MLM Plan?',
      answer: 'Mobile Recharge MLM Plan is a network marketing compensation structure that rewards distributors for mobile prepaid recharge, DTH recharge, and bill payment services. Distributors earn commissions on their own recharges and the recharges done by their downline members. It combines MLM with essential utility services, creating recurring business opportunities.'
    },
    {
      question: 'How does Mobile Recharge MLM work?',
      answer: 'Distributors sign up and get access to a recharge portal supporting all major mobile operators (Airtel, Jio, Vi, BSNL) and DTH services (Tata Sky, Dish TV, etc.). When they or their customers do recharges through the portal, they earn commissions. Additionally, they earn from downline member recharges based on MLM plan (Binary, Unilevel, Matrix). Commissions typically range from ₹2-10 per recharge depending on plan.'
    },
    {
      question: 'What services can be offered in Recharge MLM?',
      answer: 'Common services include: Mobile prepaid recharge (all operators), Postpaid bill payment, DTH/Cable TV recharge (Tata Sky, Dish TV, Airtel Digital, etc.), Data card recharge, Electricity bill payment, Gas bill payment, Water bill payment, Insurance premium payment, Education fee payment, and Landline bill payment. Multi-service offerings increase revenue potential.'
    },
    {
      question: 'What are the benefits of Mobile Recharge MLM business?',
      answer: 'Key benefits include: Evergreen business (everyone needs mobile recharge), Low investment requirement, No inventory needed, Instant commission payouts, Recurring customer base, Easy to explain and promote, Works in rural and urban areas, Multiple revenue streams (recharge + MLM commissions), Can be combined with e-commerce, and High repeat transaction rate.'
    },
    {
      question: 'How much commission can distributors earn per recharge?',
      answer: 'Commission structure varies by plan: Direct recharge commission: ₹2-5 per ₹100 recharge (2-5%), Level commissions: ₹1-3 per recharge from downline (1-3%), DTH recharge: ₹3-8 per recharge, Bill payments: ₹5-15 per transaction, Monthly income potential: ₹10K-1L+ depending on network size and activity. API providers offer different commission slabs.'
    },
    {
      question: 'How much does Mobile Recharge MLM software cost?',
      answer: 'Mobile Recharge MLM software development at EifaSoft starts from ₹4,00,000 for basic features including multi-operator API integration, recharge processing, and basic MLM compensation. Advanced features like mobile apps, wallet system, bill payment integration, and custom MLM plans can cost ₹6,00,000 to ₹15,00,000. API integration costs are additional (₹20K-50K/year).'
    },
    {
      question: 'What API integrations are needed for Recharge MLM?',
      answer: 'Essential API integrations: Recharge APIs (Cyrus, PaySprint, Eko, Instantpay for prepaid/DTH recharge), Payment Gateway (Razorpay, Paytm, PhonePe for wallet deposits), SMS Gateway (for transaction alerts), Bank Transfer API (for commission payouts), KYC API (Aadhaar verification), and BBPS API (for bill payments). We handle all API integrations and maintenance.'
    },
    {
      question: 'Is Mobile Recharge MLM legal in India?',
      answer: 'Yes, Mobile Recharge MLM is legal in India if it complies with regulations: Must have genuine recharge services (not pyramid scheme), Follow Consumer Protection (Direct Selling) Rules, 2021, No mandatory purchase requirements for joining, Transparent commission structure, Proper GST registration and compliance, Valid telecom service provider agreements, and KYC compliance for high-value transactions. Focus should be on services, not just recruitment.'
    },
    {
      question: 'How long does Recharge MLM software development take?',
      answer: 'Basic Mobile Recharge MLM software takes 6-8 weeks including API integrations, recharge portal, commission engine, and basic MLM features. Complex systems with mobile apps, wallet system, bill payments, advanced MLM plans, and multi-level admin panel can take 10-16 weeks. API testing and compliance setup require additional 1-2 weeks.'
    },
    {
      question: 'What support does EifaSoft provide after deployment?',
      answer: 'We provide comprehensive support including: API integration and maintenance, Transaction monitoring and troubleshooting, Server setup and management, Admin training (3-5 days), Distributor training materials, Technical support (email, phone, remote), Regular software updates, API downtime handling, Commission calculation verification, and optional AMC (₹60K-1.5L/year) for ongoing support and feature updates.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Mobile Recharge MLM Software', url: '/mobile-recharge-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Mobile Recharge MLM Software"
        subtitle="Telecom & Utility Services MLM Platform"
        description="Launch your Mobile Recharge MLM business with multi-operator support, instant processing, and automated commissions. Evergreen business opportunity starting ₹4,00,000."
        gradient="green"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">What is Mobile Recharge MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Mobile Recharge MLM Software</strong> is a network marketing platform for telecom and utility services. Distributors earn commissions on mobile prepaid recharge, DTH recharge, and bill payment services. The platform supports all major operators (Airtel, Jio, Vi, BSNL) and services (DTH, electricity, gas bills), combining MLM compensation with essential utility services for recurring business opportunities.
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
                  <p className="font-semibold text-gray-900">Multi-Operator Support</p>
                  <p className="text-sm text-gray-600">Airtel, Jio, Vi, BSNL + DTH</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Instant Commissions</p>
                  <p className="text-sm text-gray-600">₹2-5 per recharge transaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Evergreen Business</p>
                  <p className="text-sm text-gray-600">Everyone needs mobile recharge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹4,00,000</p>
                  <p className="text-sm text-gray-600">Complete telecom MLM platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mobile Recharge MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Mobile Recharge MLM Plan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine essential telecom services with network marketing - an evergreen business opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Join as Distributor</h4>
                    <p className="text-gray-600">Sign up, get access to recharge portal with all operators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Do Recharges</h4>
                    <p className="text-gray-600">Recharge mobiles, DTH, pay bills for yourself and customers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Earn Commissions</h4>
                    <p className="text-gray-600">Get instant commission on every recharge transaction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Build Network</h4>
                    <p className="text-gray-600">Recruit distributors, earn from their recharge transactions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Services Offered</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-semibold text-sm text-gray-900">Mobile Prepaid</div>
                  <div className="text-xs text-gray-600">All Operators</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">📺</div>
                  <div className="font-semibold text-sm text-gray-900">DTH Recharge</div>
                  <div className="text-xs text-gray-600">Tata Sky, Dish TV</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <div className="font-semibold text-sm text-gray-900">Electricity Bills</div>
                  <div className="text-xs text-gray-600">All Boards</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">💳</div>
                  <div className="font-semibold text-sm text-gray-900">Bill Payments</div>
                  <div className="text-xs text-gray-600">Gas, Water, etc.</div>
                </div>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Example Daily Earnings</div>
                <div className="text-2xl font-bold text-green-600">₹500-2,000</div>
                <div className="text-xs text-gray-600">From 50-100 recharges per day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Income Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Multiple revenue streams from recharge business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Recharge Commission</h3>
              <p className="text-gray-600 mb-3">Earn on every recharge you process</p>
              <div className="text-sm text-green-600 font-semibold">₹2-5 per ₹100 recharge</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Network Commission</h3>
              <p className="text-gray-600 mb-3">Earn from downline recharge transactions</p>
              <div className="text-sm text-blue-600 font-semibold">₹1-3 per transaction (5 levels)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📺</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DTH Commission</h3>
              <p className="text-gray-600 mb-3">Higher commission on DTH recharges</p>
              <div className="text-sm text-purple-600 font-semibold">₹3-8 per DTH recharge</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bill Payment Commission</h3>
              <p className="text-gray-600 mb-3">Earn from utility bill payments</p>
              <div className="text-sm text-orange-600 font-semibold">₹5-15 per bill payment</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Target Bonus</h3>
              <p className="text-gray-600 mb-3">Extra bonus for monthly volume targets</p>
              <div className="text-sm text-pink-600 font-semibold">₹5K-50K monthly bonus</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">Rewards for building active network</p>
              <div className="text-sm text-indigo-600 font-semibold">₹10K-2L rank bonuses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Services & Operators
            </h2>
            <p className="text-xl text-gray-600">
              Complete multi-operator and multi-service platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Mobile Operators</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Airtel</li>
                <li>✓ Jio</li>
                <li>✓ Vi (Vodafone Idea)</li>
                <li>✓ BSNL</li>
                <li>✓ MTNL</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">DTH Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Tata Sky</li>
                <li>✓ Dish TV</li>
                <li>✓ Airtel Digital TV</li>
                <li>✓ Sun Direct</li>
                <li>✓ Videocon D2H</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Bill Payments</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Electricity Bills</li>
                <li>✓ Gas Bills</li>
                <li>✓ Water Bills</li>
                <li>✓ Landline Bills</li>
                <li>✓ Broadband Bills</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Insurance Premium</li>
                <li>✓ Education Fees</li>
                <li>✓ Credit Card Bills</li>
                <li>✓ Loan EMI</li>
                <li>✓ Municipal Taxes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile Recharge MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Complete solution for telecom MLM business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recharge Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-operator API integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Instant recharge processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">DTH & bill payment support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Transaction history & reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Failed transaction handling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">MLM Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-plan support (Binary/Unilevel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Network genealogy tree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">SMS & email notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">KYC verification</span>
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
              Mobile Recharge MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing for telecom MLM platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹4,00,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-operator recharge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic MLM plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Distributor portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹7,00,000</div>
              <p className="text-green-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>DTH & bill payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>E-wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹12,00,000+</div>
              <p className="text-gray-600 mb-6">Full-featured</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom API integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited frontline recruitment' },
              { title: 'E-Commerce MLM', href: '/e-commerce-plan-mlm-software', desc: 'Online store with MLM integration' },
              { title: 'Real Estate MLM', href: '/real-estate-mlm-software', desc: 'Property network marketing' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'Repurchase MLM', href: '/repurchase-plan-mlm-software', desc: 'Product repurchase commissions' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combined compensation structure' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-green-100">
                <h3 className="text-green-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-teal-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all budgets</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-cyan-600 to-green-600 text-white p-6 rounded-lg text-center hover:from-cyan-700 hover:to-green-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right solution for you</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Mobile Recharge MLM" />
    </>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software Development Company in Moradabad | Network Marketing Software | EifaSoft',
    description: 'Leading MLM software development company in Moradabad offering Binary, Matrix, Unilevel MLM software. 15+ years experience, 200+ MLM projects delivered. Custom network marketing software starting ₹3,00,000.',
    canonical: '/mlm-software-development-company-moradabad',
    keywords: [
      'mlm software development company moradabad',
      'mlm software moradabad',
      'network marketing software moradabad',
      'binary plan mlm software moradabad',
      'matrix mlm software moradabad',
      'direct selling software moradabad',
      'mlm company moradabad',
      'mlm software development moradabad',
      'unilevel mlm software moradabad',
      'hybrid mlm software moradabad',
      'mlm app development moradabad',
      'custom mlm software moradabad',
      'affordable mlm software moradabad',
      'best mlm software moradabad',
      'mlm software company up',
      'brass industry mlm moradabad',
      'mlm software rampur',
      'mlm software amroha',
      'network marketing app moradabad',
      'mlm portal moradabad',
      'commission software moradabad',
      'genealogy tree mlm moradabad'
    ]
  });
}

export default function MLMSoftwareMoradabad() {
  const faqs = [
    {
      question: 'Why choose EifaSoft for MLM software development in Moradabad?',
      answer: 'EifaSoft is Moradabad&apos;s trusted MLM software development company with 15+ years of experience and 200+ MLM projects delivered across India. We specialize in Binary, Matrix, Unilevel, Board, Generation, and hybrid MLM plans. Our Moradabad team provides: Custom MLM software tailored to your compensation plan, Mobile apps (Android/iOS), E-commerce integration, Payment gateway setup, E-wallet system, Genealogy tree, Commission automation, and Dedicated support. We understand MLM business requirements and deliver scalable, secure solutions for Moradabad entrepreneurs.'
    },
    {
      question: 'What MLM software plans do you develop in Moradabad?',
      answer: 'We develop all major MLM compensation plans for Moradabad clients: Binary Plan - Left/right leg structure with matching bonus, Matrix Plan - Fixed width matrix (2×2, 3×3, 4×4), Unilevel Plan - Unlimited width, level commissions, Board Plan - Revolving board with re-entry, Generation Plan - Depth-based generations, Hybrid Plans - Combination of multiple plans, Stair Step/Breakaway - Performance-based ranks, Single Leg - Linear placement with spillover, Repurchase Plan - Recurring product purchases, and Custom Plans - Tailored to your unique requirements. All plans include commission calculation, genealogy, e-wallet, and reporting.'
    },
    {
      question: 'How much does MLM software cost in Moradabad?',
      answer: 'MLM software pricing in Moradabad: Basic Binary/Matrix: ₹3,00,000 - ₹5,00,000 (includes web portal, admin panel, member dashboard, commission engine), Advanced MLM Software: ₹5,00,000 - ₹10,00,000 (includes mobile apps, e-commerce, payment gateway, e-wallet, advanced reports), Enterprise MLM Solution: ₹10,00,000+ (includes multiple plans, API integration, white-label, dedicated server, ongoing support). Pricing depends on MLM plan complexity, features required, user capacity, and customization needs. Free consultation and detailed quotation for Moradabad clients.'
    },
    {
      question: 'Do you provide MLM mobile apps for Moradabad businesses?',
      answer: 'Yes! We develop MLM mobile apps for both Android and iOS: Features - Member login/registration, Genealogy tree view, Downline tracking, Commission/income reports, E-wallet management, Product purchase, Referral link sharing, Push notifications, Live support chat. Benefits for Moradabad MLM companies - Members can manage business from mobile, Easy team building through app sharing, Real-time notifications for new joiners, Better member engagement, Professional brand image. Mobile app development starts at ₹2,00,000 additional to web MLM software. Available on Google Play Store and Apple App Store.'
    },
    {
      question: 'Is MLM software legal in Moradabad/India?',
      answer: 'MLM software itself is legal, but the business model must comply with Indian laws: Legal Requirements - Follow Consumer Protection (Direct Selling) Rules, 2021, Sell genuine products (not pyramid scheme), No joining fees without products, Transparent compensation plan, Clear terms & conditions, GST registration and compliance. Our Moradabad MLM software includes - Legal disclaimer templates, Terms & conditions generator, KYC verification, GST invoicing, Transaction audit trail. We recommend consulting legal experts for MLM business compliance. Our software provides tools for legal operation, but business legality is your responsibility.'
    },
    {
      question: 'What features are included in your MLM software?',
      answer: 'Comprehensive MLM software features for Moradabad clients: Core - Multi-plan support, Automated commission calculation, Real-time genealogy tree, Member registration/KYC, Rank progression system; Financial - E-wallet system, Payment gateway integration, Income/payout management, TDS calculation, Invoice generation; Products - E-commerce integration, Product catalog, Order management, Inventory tracking; Reports - Commission reports, Downline reports, Sales reports, Payout reports, Tax reports; Admin - Complete admin dashboard, Member management, Payout approval, Settings configuration, Support ticketing. All features customizable based on Moradabad client requirements.'
    },
    {
      question: 'How long does it take to develop MLM software in Moradabad?',
      answer: 'MLM software development timeline in Moradabad: Basic MLM Software (Binary/Matrix): 6-8 weeks - Plan analysis, Design, Development, Testing, Deployment; Advanced MLM Software (with apps): 10-14 weeks - Web portal, Mobile apps (Android/iOS), E-commerce integration, Testing; Enterprise MLM Solution: 4-6 months - Multiple plans, Custom features, Integration, Comprehensive testing. We follow agile methodology with 2-week sprints and regular demonstrations. Our Moradabad team provides weekly progress updates. Faster delivery possible for urgent projects with dedicated resources and additional charges.'
    },
    {
      question: 'Do you provide MLM software demos in Moradabad?',
      answer: 'Yes! Free MLM software demo for Moradabad clients: What we show - Live demo of Binary/Matrix/Unilevel plans, Member registration process, Commission calculation, Genealogy tree, Admin panel features, Mobile app demo, E-commerce integration, Report samples. Demo Process - Free consultation at your Moradabad office, Understand your MLM plan requirements, Show relevant software demo, Discuss customization needs, Provide quotation. We also offer - Free trial account on demo server, Remote demo via video call, On-site demo at our Moradabad office. Contact us to schedule your free MLM software demo today!'
    },
    {
      question: 'Do you provide support after MLM software deployment?',
      answer: 'Comprehensive post-deployment support for Moradabad MLM companies: Included Free Support (3-6 months) - Bug fixes, Minor changes, Technical support, Server management; Ongoing Support (AMC) starting ₹50,000/year - Software updates, Feature enhancements, Commission plan changes, Member support, Server maintenance, Backup management, Security updates; Emergency Support - 24/7 critical issue resolution, Data recovery, Performance optimization. Training - Admin training (2-3 days), Member training materials, Video tutorials. Our Moradabad support team ensures your MLM business runs smoothly without technical interruptions.'
    },
    {
      question: 'Can you customize MLM software for my unique plan?',
      answer: 'Absolutely! We specialize in custom MLM software development for Moradabad clients with unique compensation plans: What we customize - Commission structure (custom percentages, levels, caps), Matching bonus logic, Rank progression rules, Product purchase requirements, Joining process, E-wallet rules, Payout conditions, Bonus calculations. Examples - Hybrid plans (Binary + Unilevel), Industry-specific plans (for Moradabad brass/textile sector), Regional language support (Hindi, English), Custom reports and analytics. Process - Detailed plan documentation, Logic development, Testing with sample scenarios, Client approval before deployment. Our Moradabad team has experience with 50+ unique MLM compensation structures.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'MLM Software Development Company Moradabad',
    'Professional MLM software development services in Moradabad including Binary, Matrix, Unilevel MLM software with mobile apps, e-commerce integration, and complete network marketing solutions. 15+ years experience, 200+ MLM projects delivered.',
    'Moradabad'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Moradabad'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8386,
      longitude: 78.7733,
    },
    areaServed: [
      { '@type': 'City', name: 'Moradabad' },
      { '@type': 'City', name: 'Amroha' },
      { '@type': 'City', name: 'Sambhal' },
      { '@type': 'City', name: 'Rampur' },
      { '@type': 'City', name: 'Hapur' },
      { '@type': 'City', name: 'Meerut' },
    ],
  };

  const productSchema = generateProductSchema(
    'MLM Software Moradabad',
    'Custom MLM software for Moradabad network marketing businesses including Binary plan, Matrix plan, commission automation, genealogy tree, e-wallet, and mobile apps. Starting from ₹3,00,000 with free demo.',
    '300000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'MLM Software Company Moradabad', url: '/mlm-software-development-company-moradabad' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="MLM Software Development Company in Moradabad"
        subtitle="Custom Network Marketing Software Solutions"
        description="Leading MLM software company in Moradabad with 15+ years experience. Binary, Matrix, Unilevel MLM software with mobile apps, e-commerce, and payment integration. 200+ successful MLM projects delivered. Free demo available!"
        gradient="purple"
      />

      {/* MLM Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MLM Software Plans We Develop in Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              All major compensation plans with full customization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Binary Plan MLM</h3>
              <p className="text-gray-600 mb-4">Left/right leg structure with matching bonus and spillover</p>
              <div className="text-sm text-purple-600 font-semibold">Starting ₹3,00,000</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Matrix Plan MLM</h3>
              <p className="text-gray-600 mb-4">Fixed width matrix (2×2, 3×3) with level commissions</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹3,50,000</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unilevel Plan MLM</h3>
              <p className="text-gray-600 mb-4">Unlimited width with multiple level commissions</p>
              <div className="text-sm text-green-600 font-semibold">Starting ₹3,00,000</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Board Plan MLM</h3>
              <p className="text-gray-600 mb-4">Revolving board with automatic re-entry and cycler</p>
              <div className="text-sm text-orange-600 font-semibold">Starting ₹4,00,000</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Plan MLM</h3>
              <p className="text-gray-600 mb-4">Combination of Binary + Unilevel or other plans</p>
              <div className="text-sm text-teal-600 font-semibold">Starting ₹5,00,000</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom MLM Plan</h3>
              <p className="text-gray-600 mb-4">Tailored compensation plan for your unique requirements</p>
              <div className="text-sm text-yellow-600 font-semibold">Custom Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to run a successful MLM business in Moradabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core MLM Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-plan support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated commissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time genealogy tree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Member registration/KYC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression system</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Payout management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">TDS calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">GST invoicing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">SMS/Email notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Moradabad Businesses Choose EifaSoft?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">15+</div>
              <h3 className="font-bold text-gray-900 mb-2">Years in MLM</h3>
              <p className="text-gray-600 text-sm">specialized experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">200+</div>
              <h3 className="font-bold text-gray-900 mb-2">MLM Projects</h3>
              <p className="text-gray-600 text-sm">successfully delivered</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">24/7</div>
              <h3 className="font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">for Moradabad clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">100%</div>
              <h3 className="font-bold text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">to your MLM plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MLM Software Pricing for Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with flexible payment options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic MLM</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹3,00,000</div>
              <p className="text-gray-600 mb-6">Perfect for startups</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Binary or Matrix plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Web portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Admin panel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3-month support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional MLM</h3>
              <div className="text-3xl font-bold mb-4">₹6,00,000</div>
              <p className="text-purple-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>6-month support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise MLM</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹12,00,000+</div>
              <p className="text-gray-600 mb-6">For large networks</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multiple MLM plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Dedicated server</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">12-month support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Coverage Across Moradabad</h2>
          <p className="text-lg text-gray-600">Serving MLM businesses in every part of Moradabad and nearby UP cities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Moradabad Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Civil Lines</li>
              <li>• Katghar</li>
              <li>• Meerabad</li>
              <li>• Majhola</li>
              <li>• Delhi Road</li>
              <li>• Rampur Road</li>
              <li>• Kanth Road</li>
              <li>• Pakbara</li>
              <li>• Mughalpura</li>
              <li>• Sambhal Road</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby UP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Amroha</li>
              <li>• Sambhal</li>
              <li>• Rampur</li>
              <li>• Hapur</li>
              <li>• Meerut</li>
              <li>• Bulandshahr</li>
              <li>• Muzaffarnagar</li>
              <li>• Bijnor</li>
              <li>• Bareilly</li>
              <li>• Ghaziabad</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site demos in Moradabad</li>
              <li>• Remote project management</li>
              <li>• WhatsApp project updates</li>
              <li>• Post-launch MLM support</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'MLM Software Moradabad', 'Binary Plan MLM Moradabad', 'Network Marketing Software Moradabad',
            'MLM App Moradabad', 'Brass Industry MLM Moradabad', 'Hybrid MLM Moradabad',
            'MLM Software Amroha', 'MLM Software Rampur', 'Custom MLM Software UP',
            'Direct Selling Software Moradabad', 'MLM Portal Moradabad', 'Commission Software Moradabad'
          ].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Free MLM Software Demo</h2>
            <p className="text-xl text-gray-600">Let&apos;s discuss your MLM software requirements in Moradabad</p>
          </div>
          <ContactForm serviceName="MLM Software Development" cityName="Moradabad" />
        </div>
      </section>
    </>
  );
}

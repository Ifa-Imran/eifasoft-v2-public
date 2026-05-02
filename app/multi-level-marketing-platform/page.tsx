import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Multi-Level Marketing Platform | Best MLM Platform Software | Network Marketing Platform | EifaSoft',
    description: 'Best Multi-Level Marketing Platform with 29+ compensation plans, e-commerce integration, mobile apps, payment gateway, e-wallet, and complete business automation. Cloud MLM, SaaS MLM, and enterprise solutions. Build your network marketing business with our comprehensive MLM platform.',
    canonical: '/multi-level-marketing-platform',
    keywords: [
      'multi level marketing platform',
      'mlm platform software',
      'network marketing platform',
      'mlm business platform',
      'mlm software platform',
      'best mlm platform',
      'mlm platform india',
      'network marketing software',
      'mlm cloud platform',
      'cloud mlm software',
      'mlm saas platform',
      'saas mlm software',
      'mlm platform features',
      'mlm technology platform',
      'enterprise mlm platform',
      'mlm platform development',
      'web-based mlm software',
      'scalable mlm software',
      'customizable mlm platform',
      'mlm platform with mobile app',
      'mlm platform with e-commerce',
      'mlm platform with e-wallet',
      'mlm platform with payment gateway',
      'multi-currency mlm platform',
      'multi-language mlm platform',
      'best mlm platform 2026',
      'mlm platform price',
      'mlm platform free demo'
    ],
  });
}

export default function MultiLevelMarketingPlatformPage() {
  const faqs = [
    {
      question: 'What is a Multi-Level Marketing Platform?',
      answer: 'A Multi-Level Marketing Platform is a comprehensive software solution that enables businesses to manage and automate their entire network marketing operations. It includes compensation plan automation (Binary, Matrix, Unilevel, etc.), member management, commission calculations, genealogy tracking, e-commerce integration, payment processing, and analytics—all in a unified platform. Modern MLM platforms are cloud-based, mobile-friendly, and support multiple business models from direct selling to cryptocurrency MLM.'
    },
    {
      question: 'What compensation plans are supported in the MLM Platform?',
      answer: 'Our MLM Platform supports 29+ compensation plans including: Binary Plan, Matrix Plan, Unilevel Plan, Board Plan, Generation Plan, Hybrid Plans, Stair Step Breakaway, X-Up Plans, Gift Plan, Helping Plan, Party Plan, E-commerce Plan, Repurchase Plan, Investment Plan, ROI Plan, Donation Plan, Autopool Plan, Smart Contract MLM, Cryptocurrency MLM, Real Estate MLM, and more. You can implement a single plan or combine multiple plans for hybrid compensation structures.'
    },
    {
      question: 'Is the MLM Platform cloud-based or on-premise?',
      answer: 'We offer both deployment options: Cloud-Based SaaS Platform (hosted on AWS/Google Cloud, automatic updates, scalable infrastructure, pay-as-you-grow pricing, 99.9% uptime guarantee, accessible from anywhere) and On-Premise Installation (deployed on your servers, complete data control, one-time license fee, customizable infrastructure, ideal for compliance-sensitive businesses). Most clients prefer cloud-based for lower upfront costs and automatic maintenance.'
    },
    {
      question: 'Does the platform include e-commerce functionality?',
      answer: 'Yes! Our MLM Platform includes comprehensive e-commerce features: Product catalog management (unlimited products with variants), Shopping cart and checkout, Payment gateway integration (Razorpay, PayU, Stripe, PayPal), Inventory management and tracking, Order processing and fulfillment, Subscription products and auto-ship, Digital product delivery, Multi-currency support, Tax calculation, Discount codes and promotions, and Commission tracking on product sales. Perfect for direct selling and e-commerce MLM businesses.'
    },
    {
      question: 'Is mobile app included in the MLM Platform?',
      answer: 'Yes, mobile apps are included in Advanced and Enterprise packages: Native iOS app (App Store ready), Native Android app (Google Play ready), Features include: member dashboard, genealogy tree, earnings tracking, e-commerce shopping, referral link sharing, notifications, team management, and withdrawal requests. Apps are white-labeled with your branding. Basic package includes mobile-responsive web interface; native apps available as add-on or included in higher tiers.'
    },
    {
      question: 'How does commission calculation work in the platform?',
      answer: 'The platform features an intelligent commission engine that automatically: Calculates commissions based on your compensation plan rules, Processes multiple income types simultaneously (direct, level, matching, pool), Handles complex scenarios (rank qualifications, capping, compression), Distributes commissions in real-time or scheduled batches, Tracks holdbacks and deductions (taxes, fees), Supports multiple currencies and cryptocurrencies, Generates commission statements and tax reports, and Maintains complete audit trail. Admins can configure all commission rules without coding.'
    },
    {
      question: 'What payment gateways are integrated?',
      answer: 'The platform integrates with major payment gateways: India (Razorpay, PayU, Instamojo, CCAvenue, Paytm), International (Stripe, PayPal, Square, Authorize.net), Cryptocurrency (Bitcoin, Ethereum, USDT wallets, Coinbase Commerce), Bank Transfer (NEFT/RTGS/IMPS automation), E-wallets (Internal wallet system for commissions), and UPI (UPI payment links and QR codes). Multiple gateways can be active simultaneously with automatic routing based on transaction type or member preference.'
    },
    {
      question: 'Can the platform handle international MLM operations?',
      answer: 'Absolutely! The platform is built for global MLM businesses with: Multi-language support (English, Hindi, Spanish, French, Chinese + custom languages), Multi-currency handling (150+ currencies with real-time exchange rates), Country-specific tax compliance (GST, VAT, Sales Tax calculations), International payment methods (region-specific gateways), Time zone management (automatic conversion for all users), Localized content and branding per country, Compliance with international data privacy laws (GDPR, CCPA), and Distributed hosting (CDN for fast global access).'
    },
    {
      question: 'What security features are included?',
      answer: 'Enterprise-grade security features: SSL/TLS encryption (256-bit), Two-factor authentication (2FA) for all accounts, Role-based access control (granular permissions), Data encryption at rest and in transit, Regular security audits and penetration testing, DDoS protection and firewall, Automated backups (daily, weekly, monthly), SOC 2 Type II compliance (enterprise tier), Activity logging and audit trails, IP whitelisting/blacklisting, Withdrawal approval workflows, and KYC/AML verification modules. Your member data and financial transactions are protected with bank-level security.'
    },
    {
      question: 'What is the pricing for the MLM Platform?',
      answer: 'We offer flexible pricing models: SaaS Subscription (₹25,000-₹1,00,000/month based on members and features, includes hosting, updates, support), One-Time License (₹5,00,000-₹25,00,000+ based on features and customization, you own the software), Custom Enterprise Pricing (volume discounts for 10,000+ members, dedicated infrastructure, white-label options). All plans include core features, training, and support. Free demo and consultation available. Pricing depends on: compensation plan complexity, number of members, custom features, deployment type (cloud/on-premise), and mobile app requirements.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Multi-Level Marketing Platform Development',
    'Comprehensive MLM platform with 29+ compensation plans, e-commerce, mobile apps, payment gateway integration, and advanced network marketing automation for global MLM businesses.',
    'multi-level-marketing-platform'
  );

  const productSchema = generateProductSchema(
    'Multi-Level Marketing Platform',
    'Enterprise-grade network marketing platform with cloud hosting, mobile apps, e-commerce integration, automated commissions, multi-currency support, and comprehensive MLM business management.',
    '500000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Multi-Level Marketing Platform', url: '/multi-level-marketing-platform' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Multi-Level Marketing Platform"
        subtitle="Complete MLM Business Solution | 29+ Plans | Mobile Apps | E-Commerce"
        description="Launch and scale your network marketing business with our comprehensive MLM platform. Cloud-based, mobile-ready, with 29+ compensation plans, e-commerce integration, payment gateways, and enterprise-grade features for global MLM success."
        gradient="blue"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our MLM Platform?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">29+ MLM Plans</h3>
              <p className="text-gray-700">Binary, Matrix, Unilevel, Hybrid, Blockchain, and all popular compensation structures</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-700">Native iOS & Android apps with full MLM functionality and white-label branding</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Built-In</h3>
              <p className="text-gray-700">Full shopping cart, product catalog, payment processing, and commission tracking</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud-Based SaaS</h3>
              <p className="text-gray-700">99.9% uptime, auto-scaling, automatic updates, accessible from anywhere globally</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Platform Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Compensation Engine', items: ['29+ MLM plans', 'Automated calculations', 'Real-time commissions', 'Multi-tier bonuses', 'Rank advancement'] },
              { icon: '👥', title: 'Member Management', items: ['Unlimited members', 'KYC verification', 'Profile management', 'Team genealogy', 'Activity tracking'] },
              { icon: '🛍️', title: 'E-Commerce System', items: ['Product catalog', 'Shopping cart', 'Order management', 'Inventory tracking', 'Auto-ship subscriptions'] },
              { icon: '💳', title: 'Payment Processing', items: ['Multiple gateways', 'Crypto payments', 'E-wallet system', 'Auto-withdrawals', 'Commission payouts'] },
              { icon: '📊', title: 'Analytics & Reports', items: ['Real-time dashboard', 'Sales analytics', 'Team performance', 'Commission reports', 'Custom reports'] },
              { icon: '🌍', title: 'Global Features', items: ['Multi-language', 'Multi-currency', 'Tax compliance', 'International shipping', 'CDN hosting'] },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported MLM Compensation Plans
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Binary Plan', 'Matrix Plan', 'Unilevel Plan', 'Board Plan',
              'Generation Plan', 'Hybrid Plan', 'Stair Step', 'X-Up Plan',
              'Gift Plan', 'Helping Plan', 'Party Plan', 'Single Leg',
              'Spillover Binary', 'Repurchase Plan', 'Mobile Recharge', 'Investment Plan',
              'ROI Plan', 'Donation Plan', 'Autopool Plan', 'Smart Contract',
              'Cryptocurrency', 'Tron MLM', 'Bitcoin MLM', 'Real Estate',
              'Bucket Help', 'Australian X-Up', '50-50 Crowdfunding', 'Mobious Loop'
            ].map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg text-center border border-blue-200 hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-semibold">✓ {plan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MLM Platform Pricing</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">SaaS Subscription</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">₹25K-1L/month</div>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Cloud hosting included</li>
                <li>✓ Automatic updates</li>
                <li>✓ 500-10,000 members</li>
                <li>✓ All core features</li>
                <li>✓ 24/7 support</li>
              </ul>
              <p className="text-xs text-gray-600">Pay-as-you-grow model</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-2xl transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">One-Time License</h3>
              <div className="text-3xl font-bold mb-4">₹5L-25L+</div>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Own the software</li>
                <li>✓ Unlimited members</li>
                <li>✓ Source code access</li>
                <li>✓ Custom branding</li>
                <li>✓ 1-year free support</li>
              </ul>
              <p className="text-xs">One-time investment</p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Enterprise Custom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Contact Us</div>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Dedicated infrastructure</li>
                <li>✓ Custom features</li>
                <li>✓ White-label platform</li>
                <li>✓ API integrations</li>
                <li>✓ Dedicated support team</li>
              </ul>
              <p className="text-xs text-gray-600">Tailored solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Choose the right MLM plan for your business model</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited frontline recruitment' },
              { title: 'E-Commerce MLM', href: '/e-commerce-plan-mlm-software', desc: 'Online store with MLM integration' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'Generation Plan', href: '/generation-plan-mlm-software', desc: 'Generation-based commissions' },
              { title: 'Cryptocurrency MLM', href: '/cryptocurrency-mlm-software', desc: 'Crypto-based network marketing' },
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
            <Link href="/multi-level-marketing-app" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-blue-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Mobile App</h3>
              <p className="text-sm opacity-90">iOS & Android native applications</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your MLM Platform Today
            </h2>
            <p className="text-xl text-gray-600">
              Free demo, consultation, and custom quote for your network marketing business
            </p>
          </div>
          <ContactForm serviceName="Multi-Level Marketing Platform" />
        </div>
      </section>
    </>
  );
}

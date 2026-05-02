import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software | Best Network Marketing Software | Direct Selling Software 2026 | EifaSoft',
    description: 'Best MLM Software for network marketing with 29+ compensation plans including Binary, Matrix, Unilevel. Features mobile apps, e-commerce integration, e-wallet, payment gateway, genealogy tree. Trusted by 500+ MLM companies. Start your MLM business with affordable direct selling software starting ₹2,50,000.',
    canonical: '/mlm-software',
    keywords: [
      'mlm software',
      'network marketing software',
      'direct selling software',
      'multi level marketing software',
      'mlm software india',
      'best mlm software',
      'best mlm software 2026',
      'mlm software company',
      'mlm software development',
      'mlm software development company',
      'mlm business software',
      'network marketing platform',
      'mlm software price',
      'mlm software cost',
      'affordable mlm software',
      'cheap mlm software',
      'mlm software free demo',
      'mlm compensation software',
      'mlm commission calculation software',
      'mlm crm software',
      'multilevel marketing software',
      'mlm e-wallet software',
      'mlm genealogy tree software',
      'mlm mobile app development',
      'cloud mlm software',
      'saas mlm software',
      'white label mlm software',
      'custom mlm software development',
      'mlm software with source code',
      'binary mlm software',
      'matrix mlm software',
      'unilevel mlm software',
      'mlm back office software',
      'mlm payment gateway integration',
      'mlm software provider',
      'top mlm software',
      'mlm software reviews'
    ],
  });
}

export default function MLMSoftwarePage() {
  const faqs = [
    {
      question: 'What is MLM Software?',
      answer: 'MLM Software (Multi-Level Marketing Software) is a comprehensive business management system designed specifically for network marketing companies. It automates distributor enrollment, commission calculations, genealogy tracking, product ordering, payment processing, and reporting. The software supports various compensation plans (Binary, Matrix, Unilevel, etc.) and includes features like e-commerce integration, mobile apps, replicated websites, and CRM tools essential for running successful MLM operations.'
    },
    {
      question: 'Which is the best MLM software in India?',
      answer: 'EifaSoft offers the best MLM software in India with 15+ years of experience, 500+ successful MLM deployments, and comprehensive features including: 29+ compensation plans, GST compliance, Indian payment gateways (Razorpay, PayU, UPI), multi-language support (Hindi, English, regional languages), mobile apps, e-commerce integration, and dedicated India-based support. Our clients include leading Indian MLM companies in health & wellness, FMCG, and digital products sectors. We offer both cloud SaaS and on-premise deployment options with competitive pricing starting at ₹2,50,000.'
    },
    {
      question: 'How much does MLM software cost?',
      answer: 'MLM software pricing varies based on features and deployment: Basic Package (₹2,50,000-5,00,000 for single compensation plan, up to 5,000 members, web-based), Advanced Package (₹5,00,000-10,00,000 for multiple plans, mobile apps, e-commerce, unlimited members), Enterprise Package (₹10,00,000-25,00,000+ for custom features, blockchain, dedicated infrastructure), and SaaS Subscription (₹15,000-75,000/month based on member count). Factors affecting price: compensation plan complexity, number of members, mobile apps, custom features, deployment type (cloud/on-premise), and integration requirements.'
    },
    {
      question: 'Is free MLM software available?',
      answer: 'While free MLM software exists, it comes with significant limitations: Limited features (basic plans only), No customer support, Security vulnerabilities, No scalability (member limits), Hidden costs (add-ons, upgrades), No customization, Poor performance, and Compliance issues. We recommend: Free demo/trial of professional software (available from EifaSoft), Open-source MLM solutions (requires technical expertise to customize), or Affordable entry-level packages (₹2,50,000 with full features). Investing in quality MLM software is crucial for business credibility, member trust, and long-term success.'
    },
    {
      question: 'What features should good MLM software have?',
      answer: 'Essential MLM software features include: Compensation Plans (multiple plan support with hybrid options), Member Management (registration, KYC, profiles, genealogy tree), Commission Engine (automated calculation, real-time processing, multiple income types), E-Commerce (product catalog, shopping cart, order management, inventory), Payment Integration (gateways, e-wallet, cryptocurrency, auto-withdrawals), Reporting & Analytics (dashboards, sales reports, team performance, financial statements), Mobile Apps (iOS/Android with full functionality), Replicated Websites (custom member sites with referral tracking), CRM Tools (lead management, email/SMS campaigns), Security (SSL, 2FA, data encryption), and Multi-Language/Currency Support.'
    },
    {
      question: 'Can MLM software be customized?',
      answer: 'Yes! Our MLM software is highly customizable: Compensation Plan Customization (create unique hybrid plans, custom commission rules, special bonuses), Branding (logo, colors, themes, white-label options), Workflows (custom member onboarding, approval processes, rank qualification rules), Integrations (third-party APIs, payment gateways, shipping providers, CRM systems), Reports (custom report templates, data exports, dashboards), User Interface (layout modifications, feature placement, menu customization), and Business Logic (country-specific tax rules, product configurations, promotion mechanics). We offer both template-based customization and full custom development based on your budget and requirements.'
    },
    {
      question: 'How long does MLM software development take?',
      answer: 'Development timeline depends on complexity: Basic MLM Software (2-4 weeks for standard plans like Binary/Matrix, minimal customization), Advanced MLM Software (4-8 weeks for multiple plans, e-commerce, mobile apps, moderate customization), Enterprise MLM Software (8-16 weeks for complex hybrid plans, blockchain integration, extensive custom features), and Custom MLM Platform (16+ weeks for fully bespoke solutions with unique business logic). Timeline includes: requirement analysis (1 week), design & development (main duration), testing & QA (1-2 weeks), deployment & training (1 week). We follow agile methodology with regular demos and feedback cycles.'
    },
    {
      question: 'Is MLM software legal in India?',
      answer: 'Yes, MLM software is legal in India, but the business model must comply with regulations: Legal Requirements - Follow Consumer Protection (Direct Selling) Rules 2021, Avoid prize chits and money circulation schemes (Prize Chits and Money Circulation Schemes (Banning) Act, 1978), Ensure genuine product/service offering (not just membership fees), Maintain GST compliance and proper accounting, Register as per Companies Act or Partnership Act. Software must support: KYC/identity verification, Income disclosure statements, Transparent compensation plan documentation, Refund/return policy implementation, and Compliance reporting. EifaSoft ensures all software features align with Indian direct selling regulations and can be configured for legal compliance.'
    },
    {
      question: 'Can MLM software integrate with e-commerce?',
      answer: 'Absolutely! E-commerce integration is a core feature: Product Management (unlimited products with variants, categories, attributes, digital/physical products), Shopping Experience (responsive cart, wishlists, product search, reviews/ratings), Order Processing (automatic order creation, invoice generation, fulfillment tracking, shipping integration), Commission Tracking (commission on product sales, auto-ship bonuses, repeat purchase rewards), Inventory Management (stock tracking, low-stock alerts, supplier management), Payment Processing (integrated gateways, COD, EMI options), and Subscription/Auto-Ship (recurring orders, subscription management, auto-renewal). Perfect for direct selling companies selling health products, cosmetics, FMCG, or digital courses through MLM model.'
    },
    {
      question: 'What support and training is provided with MLM software?',
      answer: 'Comprehensive support and training included: Initial Training (admin panel training, compensation plan setup, member management, reporting), User Documentation (detailed manuals, video tutorials, FAQs), Technical Support (email/phone/chat support, 24/7 availability for enterprise tier, dedicated account manager), Ongoing Support (bug fixes, security updates, minor enhancements, performance optimization), Training Sessions (periodic refresher training, new feature training, best practices workshops), Developer Support (API documentation, integration assistance, technical consulting), and Community (user forums, knowledge base, webinars). First-year support typically included; extended support plans available at ₹50,000-2,00,000/year based on service level.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'MLM Software Development',
    'Comprehensive MLM and network marketing software with 29+ compensation plans, e-commerce, mobile apps, payment integration, and complete direct selling business automation.',
    'mlm-software'
  );

  const productSchema = generateProductSchema(
    'MLM Software',
    'Professional network marketing software solution with Binary, Matrix, Unilevel plans, mobile apps, e-commerce integration, automated commissions, and enterprise features for MLM businesses.',
    '250000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Best MLM Software Development Company in India"
        subtitle="#1 Network Marketing Software | 29+ Compensation Plans | Mobile Apps | E-Commerce Integration"
        description="Launch your MLM business with India&apos;s best network marketing software. Complete direct selling solution with Binary, Matrix, Unilevel plans, mobile apps, e-commerce, e-wallet, payment gateway, and enterprise features. Trusted by 500+ MLM companies worldwide."
        gradient="purple"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft MLM Software Development?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-700">500+ successful MLM implementations across India and globally</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">29+ MLM Plans</h3>
              <p className="text-gray-700">All popular compensation plans + custom hybrid structures</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Apps Included</h3>
              <p className="text-gray-700">Native iOS & Android apps with full MLM functionality</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-700">Bank-grade security, SSL encryption, regular audits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Network Marketing Software Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Compensation Plans',
                icon: '💎',
                features: ['Binary Plan', 'Matrix Plan', 'Unilevel Plan', 'Hybrid Plans', 'Custom Plans']
              },
              {
                title: 'Member Management',
                icon: '👥',
                features: ['Registration & KYC', 'Profile Management', 'Genealogy Tree', 'Rank System', 'Team Analytics']
              },
              {
                title: 'E-Commerce System',
                icon: '🛒',
                features: ['Product Catalog', 'Shopping Cart', 'Order Processing', 'Inventory Management', 'Auto-Ship']
              },
              {
                title: 'Payment Integration',
                icon: '💳',
                features: ['Multiple Gateways', 'E-Wallet System', 'Crypto Payments', 'Auto Withdrawals', 'Commission Payout']
              },
              {
                title: 'Reports & Analytics',
                icon: '📊',
                features: ['Real-Time Dashboard', 'Sales Reports', 'Commission Reports', 'Team Performance', 'Custom Reports']
              },
              {
                title: 'Mobile Apps',
                icon: '📱',
                features: ['iOS App', 'Android App', 'White-Label Branding', 'Push Notifications', 'Full Functionality']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>{feature}</span>
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
              Popular MLM Compensation Plan Software
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop software for all major MLM compensation structures for your direct selling business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Binary Plan', url: '/binary-plan-mlm-software' },
              { name: 'Matrix Plan', url: '/matrix-plan-mlm-software' },
              { name: 'Unilevel Plan', url: '/unilevel-plan-mlm-software' },
              { name: 'Board Plan', url: '/board-plan-mlm-software' },
              { name: 'Generation Plan', url: '/generation-plan-mlm-software' },
              { name: 'Hybrid Plan', url: '/hybrid-plan-mlm-software' },
              { name: 'Stair Step Plan', url: '/stair-step-plan-mlm-software' },
              { name: 'Australian X-Up', url: '/australian-x-up-plan-mlm-software' },
              { name: 'Gift Plan', url: '/gift-plan-mlm-software' },
              { name: 'Party Plan', url: '/party-plan-mlm-software' },
              { name: 'Single Leg Plan', url: '/single-leg-plan-mlm-software' },
              { name: 'Donation Plan', url: '/donation-plan-mlm-software' },
              { name: 'ROI Plan', url: '/roi-plan-mlm-software' },
              { name: 'Investment Plan', url: '/investment-plan-mlm-software' },
              { name: 'Smart Contract MLM', url: '/smart-contract-mlm-software' }
            ].map((plan, idx) => (
              <Link
                key={idx}
                href={plan.url}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg text-center border border-purple-200 hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="text-purple-700 font-semibold">{plan.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/mlm-software-price"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              View All 29+ Plans →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MLM Software Pricing & Packages</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Basic MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">₹2,50,000</div>
              <ul className="space-y-3 mb-6">
                <li>✓ 1 Compensation Plan</li>
                <li>✓ Up to 5,000 members</li>
                <li>✓ Web-based system</li>
                <li>✓ Payment gateway</li>
                <li>✓ 1-year support</li>
              </ul>
              <p className="text-sm text-gray-600">Perfect for startups</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Advanced MLM</h3>
              <div className="text-4xl font-bold mb-4">₹7,00,000</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Multiple Plans</li>
                <li>✓ Unlimited members</li>
                <li>✓ Mobile Apps (iOS/Android)</li>
                <li>✓ E-commerce integration</li>
                <li>✓ Lifetime updates</li>
              </ul>
              <p className="text-sm">Best value package</p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Enterprise MLM</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">₹15,00,000+</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Custom Features</li>
                <li>✓ Blockchain Integration</li>
                <li>✓ White-label Platform</li>
                <li>✓ Dedicated Infrastructure</li>
                <li>✓ Priority Support</li>
              </ul>
              <p className="text-sm text-gray-600">For large enterprises</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* Additional MLM Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More MLM Software Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link href="/cryptocurrency-mlm-software" className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">₿</div>
              <h3 className="font-bold text-gray-900 mb-1">Cryptocurrency MLM</h3>
              <p className="text-sm text-gray-600">Bitcoin, Ethereum, USDT integration</p>
            </Link>
            <Link href="/smart-contract-mlm-software" className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">⛓️</div>
              <h3 className="font-bold text-gray-900 mb-1">Smart Contract MLM</h3>
              <p className="text-sm text-gray-600">Decentralized blockchain MLM</p>
            </Link>
            <Link href="/tron-mlm-software" className="bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-xl border border-red-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">🔺</div>
              <h3 className="font-bold text-gray-900 mb-1">TRON MLM Software</h3>
              <p className="text-sm text-gray-600">TRC-20 token based MLM</p>
            </Link>
            <Link href="/bitcoin-mlm-software" className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">🪙</div>
              <h3 className="font-bold text-gray-900 mb-1">Bitcoin MLM Software</h3>
              <p className="text-sm text-gray-600">BTC payment integration</p>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-developer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hire MLM Developers</h3>
              <p className="text-purple-100">Dedicated development team</p>
            </Link>
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">About EifaSoft</h3>
              <p className="text-blue-100">15+ years MLM expertise</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Comparison</h3>
              <p className="text-green-100">Compare top MLM platforms</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your MLM Business with Best Network Marketing Software
            </h2>
            <p className="text-xl text-gray-600">
              Free demo, consultation, and custom quote for your direct selling MLM business
            </p>
          </div>
          <ContactForm serviceName="MLM Software" />
        </div>
      </section>
    </>
  );
}

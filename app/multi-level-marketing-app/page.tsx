import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Multi-Level Marketing App | Best MLM Mobile App Development | Network Marketing App | EifaSoft',
    description: 'Best Multi-Level Marketing App development with iOS & Android native apps. Full MLM functionality including e-commerce, real-time commissions, genealogy tree, e-wallet, push notifications, and white-label branding. Cross-platform MLM app with Flutter and React Native. Starting ₹2,00,000.',
    canonical: '/multi-level-marketing-app',
    keywords: [
      'multi level marketing app',
      'mlm mobile app',
      'mlm mobile app development',
      'android MLM app',
      'iOS MLM app',
      'mlm app for iPhone',
      'network marketing app',
      'mlm app development',
      'mlm android app',
      'mlm ios app',
      'mlm app india',
      'network marketing mobile app',
      'direct selling app',
      'mlm app features',
      'mlm app cost',
      'mlm app developer',
      'mlm business app',
      'mlm smartphone app',
      'cross-platform MLM app',
      'flutter MLM app',
      'react native MLM app',
      'mlm mobile application',
      'white-label MLM app',
      'mlm app with e-wallet',
      'mlm genealogy app',
      'mlm commission tracking app',
      'mlm app push notifications',
      'network marketing app india',
      'best mlm mobile app',
      'mlm app price'
    ],
  });
}

export default function MultiLevelMarketingAppPage() {
  const faqs = [
    {
      question: 'What is a Multi-Level Marketing App?',
      answer: 'A Multi-Level Marketing App is a mobile application (iOS and Android) that enables MLM distributors to manage their network marketing business on-the-go. It includes features like member dashboard, genealogy tree visualization, real-time commission tracking, product shopping, team management, referral link sharing, earnings reports, withdrawal requests, notifications, and training materials—all accessible from a smartphone. Modern MLM apps support offline mode, biometric authentication, and are white-labeled with your company branding.'
    },
    {
      question: 'Why do MLM companies need mobile apps?',
      answer: 'Mobile apps are essential for MLM success because: 80% of MLM distributors use smartphones for business activities, Instant access to business data increases engagement by 3x, Push notifications drive 50% higher conversion rates, Mobile sharing makes referrals 5x easier (WhatsApp, social media), Real-time commission tracking motivates distributors, On-the-go product ordering increases sales by 40%, Apps provide professional image and competitive advantage, Offline functionality enables work anywhere anytime, Biometric login enhances security, and Apps reduce reliance on desktop, making MLM accessible to mobile-first users in emerging markets like India.'
    },
    {
      question: 'What features are included in MLM mobile apps?',
      answer: 'Comprehensive MLM app features: Dashboard (earnings, team stats, notifications, quick actions), Genealogy Tree (interactive tree view, downline search, sponsor info, team performance), Commission Tracking (real-time earnings, income breakdown, commission history, withdrawal status), E-Commerce (product catalog, shopping cart, order history, wishlist, secure checkout), Referral System (unique referral link, QR code sharing, social media integration, invite tracking), Team Management (view downline, performance metrics, rank tracking, team communication), Reports (sales reports, team reports, financial statements, downloadable PDFs), and Notifications (push alerts for sales, commissions, team activity, company announcements).'
    },
    {
      question: 'Do you develop both iOS and Android apps?',
      answer: 'Yes! We develop native apps for both platforms: iOS App (Swift/Objective-C, optimized for iPhone/iPad, App Store submission ready, supports iOS 13+, Face ID/Touch ID integration, Apple Pay support), Android App (Kotlin/Java, supports Android 7.0+, Google Play Store ready, fingerprint authentication, Google Pay integration, optimized for all screen sizes), and Cross-Platform Option (React Native or Flutter for faster development, single codebase for both platforms, 30-40% cost savings, slightly lower performance than native). We recommend native apps for best performance and user experience, especially for large MLM companies with 10,000+ members.'
    },
    {
      question: 'Can the MLM app work offline?',
      answer: 'Yes, our MLM apps include offline functionality: Offline Features (view dashboard data, browse genealogy tree cached locally, access training materials/documents, view product catalog with images, read commission history), Sync When Online (automatic data sync when internet restored, queue actions for later sync like orders/referrals, conflict resolution for simultaneous edits, progress indicators during sync). However, real-time features require connectivity: live commission updates, payment processing, real-time team notifications, and fresh product inventory. Offline mode is especially valuable for distributors in areas with poor connectivity or when traveling.'
    },
    {
      question: 'Is white-label branding available for MLM apps?',
      answer: 'Absolutely! Complete white-label branding included: App Branding (your company logo, custom color scheme, branded splash screen, custom app name, company-specific UI elements), App Store Presence (published under YOUR developer account, your company name as publisher, custom app description/screenshots, your support email/website), In-App Branding (branded emails/notifications, custom product catalog design, company-specific training content, branded PDF reports), and Custom Domain (deep linking with your domain, branded referral links, custom API endpoints). Members see YOUR brand throughout—no mention of EifaSoft or third-party attribution.'
    },
    {
      question: 'How much does MLM app development cost?',
      answer: 'MLM mobile app development pricing: Basic MLM App (₹2,50,000-4,00,000 for one platform—iOS OR Android, standard features, 3-4 months development), Dual Platform Apps (₹4,50,000-7,00,000 for both iOS AND Android native apps, full feature set, 4-6 months development), Cross-Platform App (₹3,00,000-5,00,000 for React Native/Flutter, both platforms with single codebase, faster development 2-3 months), and Enterprise Custom App (₹8,00,000+ for advanced features like AR product demos, blockchain integration, AI chatbots, custom animations). Costs include: development, testing, App Store/Play Store submission, 1-year maintenance. Ongoing updates: ₹50,000-1,50,000/year.'
    },
    {
      question: 'How long does MLM app development take?',
      answer: 'Development timeline varies by scope: Basic MLM App (3-4 months for single platform with standard features), Dual Platform Native Apps (4-6 months for both iOS and Android with complete MLM functionality), Cross-Platform App (2-3 months for React Native/Flutter solution), and Enterprise App (6-12 months for complex custom features and integrations). Timeline breakdown: Requirement analysis & design (2-3 weeks), UI/UX design & approval (2-3 weeks), Development & coding (main duration), Testing & QA (3-4 weeks), App Store submission & approval (1-2 weeks), and Post-launch support (ongoing). We follow agile methodology with bi-weekly demos and feedback incorporation.'
    },
    {
      question: 'Will you handle App Store and Play Store submission?',
      answer: 'Yes! Complete app store submission service included: iOS App Store (create/setup Apple Developer account ($99/year—paid by you), prepare app metadata (description, screenshots, keywords), upload app binary and assets, handle App Review process, address reviewer feedback/rejections, publish to App Store), Google Play Store (create/setup Google Play Console ($25 one-time—paid by you), prepare store listing with optimized content, upload APK/App Bundle, configure in-app purchases/subscriptions, pass Play Store review, publish to Play Store), and Post-Launch (monitor reviews and ratings, submit app updates, handle policy compliance issues, optimize store presence for downloads). We guide you through the entire process and handle technical aspects.'
    },
    {
      question: 'What post-launch support is provided for MLM apps?',
      answer: 'Comprehensive post-launch support includes: Bug Fixes (free bug fixes for first year, priority issue resolution, crash monitoring and fixes, performance optimization), App Updates (OS compatibility updates—iOS/Android new versions, security patches, minor feature enhancements, UI/UX improvements), Technical Support (email/phone/chat support, developer assistance for integrations, API troubleshooting, server-side updates), App Store Management (app version updates submission, respond to store reviews, compliance with policy changes, analytics and reporting), and Training (admin training for app configuration, user documentation, video tutorials, best practices workshops). Extended support contracts available at ₹75,000-2,00,000/year based on service level.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Multi-Level Marketing App Development',
    'Professional MLM mobile app development with iOS & Android native apps, complete network marketing functionality, white-label branding, e-commerce, real-time commissions, and App Store deployment.',
    'multi-level-marketing-app'
  );

  const productSchema = generateProductSchema(
    'Multi-Level Marketing App',
    'Native iOS and Android MLM mobile application with full network marketing features, genealogy tree, e-commerce shopping, commission tracking, team management, and white-label branding.',
    '400000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Multi-Level Marketing App', url: '/multi-level-marketing-app' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Multi-Level Marketing App Development"
        subtitle="Native iOS & Android Apps | White-Label Branding | Full MLM Functionality"
        description="Empower your MLM distributors with professional mobile apps. Native iOS & Android development, real-time commissions, genealogy tree, e-commerce, push notifications, and complete white-label branding for your network marketing business."
        gradient="green"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Your MLM Business Needs Mobile Apps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">80%</h3>
              <p className="text-gray-700">of MLM distributors use smartphones for business daily</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3x</h3>
              <p className="text-gray-700">higher engagement with mobile app vs web</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
              <p className="text-gray-700">higher conversion with push notifications</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5x</h3>
              <p className="text-gray-700">easier referral sharing on mobile</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete MLM App Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Dashboard',
                features: ['Real-time earnings', 'Team statistics', 'Sales metrics', 'Notifications', 'Quick actions']
              },
              {
                icon: '🌳',
                title: 'Genealogy Tree',
                features: ['Interactive tree view', 'Downline search', 'Team performance', 'Sponsor details', 'Zoom & navigate']
              },
              {
                icon: '💰',
                title: 'Commission Tracking',
                features: ['Live earnings', 'Income breakdown', 'Payout history', 'Withdrawal requests', 'Commission calculator']
              },
              {
                icon: '🛍️',
                title: 'E-Commerce',
                features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'Order tracking', 'Wishlist']
              },
              {
                icon: '🔗',
                title: 'Referral System',
                features: ['Unique referral link', 'QR code sharing', 'Social media share', 'Invite tracking', 'Referral rewards']
              },
              {
                icon: '📱',
                title: 'Mobile Features',
                features: ['Biometric login', 'Push notifications', 'Offline mode', 'Camera integration', 'Location services']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
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
              Native vs Cross-Platform MLM Apps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Native Apps (Recommended)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">✓ Advantages:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Best performance & speed</li>
                    <li>• Platform-specific UI/UX</li>
                    <li>• Full access to device features</li>
                    <li>• Better App Store approval</li>
                    <li>• Offline functionality superior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Technology:</h4>
                  <p className="text-gray-700">iOS: Swift | Android: Kotlin</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cost:</h4>
                  <p className="text-gray-700 text-xl font-bold text-blue-600">₹4,50,000-7,00,000</p>
                  <p className="text-sm text-gray-600">Both iOS & Android</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Platform Apps</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">✓ Advantages:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Single codebase for both platforms</li>
                    <li>• 30-40% cost savings</li>
                    <li>• Faster development time</li>
                    <li>• Easier maintenance</li>
                    <li>• Good for MVP/startups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Technology:</h4>
                  <p className="text-gray-700">React Native or Flutter</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cost:</h4>
                  <p className="text-gray-700 text-xl font-bold text-green-600">₹3,00,000-5,00,000</p>
                  <p className="text-sm text-gray-600">Both platforms included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MLM App Development Pricing</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Single Platform</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">₹3,00,000</div>
              <ul className="space-y-3 mb-6">
                <li>✓ iOS OR Android (choose one)</li>
                <li>✓ All MLM features</li>
                <li>✓ White-label branding</li>
                <li>✓ App Store submission</li>
                <li>✓ 1-year support</li>
              </ul>
              <p className="text-sm text-gray-600">3-4 months delivery</p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-2xl transform scale-105 border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">RECOMMENDED</div>
              <h3 className="text-2xl font-bold mb-2">Both Platforms</h3>
              <div className="text-4xl font-bold mb-4">₹5,50,000</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Native iOS & Android</li>
                <li>✓ Complete MLM functionality</li>
                <li>✓ E-commerce integration</li>
                <li>✓ Push notifications</li>
                <li>✓ Offline mode</li>
                <li>✓ Lifetime updates</li>
              </ul>
              <p className="text-sm">4-6 months delivery</p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Enterprise Custom</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">₹10,00,000+</div>
              <ul className="space-y-3 mb-6">
                <li>✓ Advanced features (AR, AI)</li>
                <li>✓ Blockchain integration</li>
                <li>✓ Custom animations</li>
                <li>✓ Third-party integrations</li>
                <li>✓ Dedicated support</li>
              </ul>
              <p className="text-sm text-gray-600">6-12 months delivery</p>
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
              { title: 'Mobile Recharge MLM', href: '/mobile-recharge-plan-mlm-software', desc: 'Telecom services MLM platform' },
              { title: 'Generation Plan', href: '/generation-plan-mlm-software', desc: 'Generation-based commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Cycling board compensation' },
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
            <Link href="/multi-level-marketing-platform" className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-6 rounded-lg text-center hover:from-teal-700 hover:to-green-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Platform</h3>
              <p className="text-sm opacity-90">Complete MLM business solution</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your MLM Mobile App Today
            </h2>
            <p className="text-xl text-gray-600">
              Free consultation, app demo, and custom quote for your network marketing business
            </p>
          </div>
          <ContactForm serviceName="Multi-Level Marketing App" />
        </div>
      </section>
    </>
  );
}

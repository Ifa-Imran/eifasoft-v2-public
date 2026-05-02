import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobile App Development Company | iOS & Android Apps | EifaSoft',
    description: 'Professional mobile app development services for iOS and Android. Native and cross-platform apps with beautiful UI/UX, starting at ₹50,000. Transform your idea into reality.',
    canonical: '/mobile-app-development-company',
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'cross-platform apps', 'React Native', 'Flutter apps', 'mobile application development company', 'native app development', 'hybrid app development', 'mobile app development india', 'custom mobile app development', 'enterprise mobile app', 'startup app development', 'mobile app development company india', 'app development cost india', 'iOS Android app india', 'mobile app UI UX design', 'mobile backend development', 'app store optimization', 'push notification app', 'ecommerce mobile app', 'mobile app maintenance'],
  });
}

const faqs = [
  {
    question: 'What platforms do you develop mobile apps for?',
    answer: 'We develop mobile applications for all major platforms: iOS (iPhone, iPad, Apple Watch, Apple TV) using Swift and SwiftUI; Android (phones, tablets, Wear OS, Android Auto) using Kotlin and Jetpack Compose; Cross-platform solutions using React Native (Facebook) and Flutter (Google) for cost-effective development on both iOS and Android from a single codebase; Progressive Web Apps (PWA) that work across all devices with app-like features; and Hybrid apps using Ionic/Cordova for web-to-mobile conversion.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Mobile app development timelines vary by complexity: Simple informational apps (6-8 weeks, ₹50K-₹1.5L); Business apps with user authentication, API integration, basic features (8-12 weeks, ₹1.5L-₹3L); E-commerce apps with payment gateway, product catalog, cart (10-14 weeks, ₹2L-₹5L); On-demand service apps like Uber/food delivery (12-16 weeks, ₹3L-₹7L); Social networking apps with chat, feeds, notifications (14-20 weeks, ₹4L-₹10L); Enterprise apps with complex integrations, workflows, reporting (16-24+ weeks, ₹5L-₹15L+). Timeline includes discovery, design, development, testing, and app store deployment. We follow Agile methodology with 2-week sprints and regular demos.',
  },
  {
    question: 'What is the cost of mobile app development?',
    answer: 'Transparent mobile app development pricing in India: Basic Apps (₹50,000-₹1,50,000): Simple UI, 5-10 screens, basic features, single platform. Business Apps (₹1,50,000-₹3,00,000): Custom UI/UX, user auth, API integration, push notifications, admin panel, single or cross-platform. E-commerce Apps (₹2,00,000-₹5,00,000): Product catalog, shopping cart, payment gateway, order tracking, inventory management, customer accounts. On-Demand Apps (₹3,00,000-₹7,00,000): GPS tracking, real-time updates, payment integration, driver/customer panels, analytics. Social Networking Apps (₹4,00,000-₹10,00,000): User profiles, news feed, chat/messaging, media sharing, notifications, moderation tools. Enterprise Apps (₹5,00,000-₹15,00,000+): Complex integrations (ERP/CRM), multi-role access, offline sync, advanced security, scalability. Additional costs: Backend/API development (₹50K-₹2L), Third-party APIs (₹20K-₹1L each), Premium UI/UX design (+₹50K-₹1L), App Store developer accounts (Google Play: $25 one-time, Apple: $99/year). Ongoing maintenance: Typically 15-20% of development cost annually.',
  },
  {
    question: 'Do you provide app maintenance and updates?',
    answer: 'Yes! We offer comprehensive mobile app maintenance and support packages: Bug Fixes & Troubleshooting (critical issues resolved within 24-48 hours); OS Updates (iOS/Android version compatibility testing and updates); Feature Enhancements (adding new functionality based on user feedback); Security Patches (vulnerability fixes, SSL renewal, dependency updates); Performance Optimization (speed improvements, memory management, battery optimization); Server Monitoring (uptime tracking, database optimization, scaling); Backup Management (regular data backups, disaster recovery); Analytics Reporting (monthly usage reports, crash analytics, user behavior insights); Content Updates (text, images, videos, product listings); Technical Support (email, phone, Slack channels); App Store Compliance (guideline updates, review resubmission). Maintenance packages: Starter (₹5K/month, 10 hours, bug fixes only); Business (₹15K/month, 30 hours, minor enhancements); Enterprise (₹30K+/month, unlimited support, dedicated team). SLA guarantees available for enterprise clients.',
  },
  {
    question: 'Will you help with App Store and Play Store submission?',
    answer: 'Absolutely! We provide complete app store deployment services: Account Setup Assistance (Google Play Console: ₹2,000 one-time, Apple Developer Program: ₹8,500/year); App Store Optimization ASO (keyword research, title/subtitle optimization, description writing with keyword density); Visual Assets Creation (app icon design A/B testing, screenshots for all device sizes, feature graphic, preview videos); Metadata Optimization (category selection, tags, promotional text, keywords field); Compliance Review (privacy policy, terms of service, content guidelines, age ratings); Submission Process (build upload via TestFlight/Play Console, metadata entry, screenshot uploads); Review Response (addressing rejection reasons, resubmission, communication with Apple/Google teams); Post-Launch Support (monitoring reviews/ratings, responding to user feedback, update submissions). We ensure compliance with: Apple App Store Review Guidelines (privacy, security, content, monetization); Google Play Developer Policies (data safety, misinformation, spam); COPPA (childrens privacy); GDPR (EU data protection); HIPAA (healthcare apps, if applicable). Our apps have 95%+ first-time approval rate.',
  },
  {
    question: 'Can you integrate payment gateways in the app?',
    answer: 'Yes! We integrate all major Indian and international payment gateways with PCI-DSS compliance: Indian Payment Gateways: Razorpay (UPI, cards, net banking, wallets, EMI, subscriptions, international cards - integration from ₹25K); Paytm Payment Gateway (wallets, UPI, cards, BHIM - from ₹20K); PhonePe (growing UPI leader, zero MDR - from ₹20K); CCAvenue (200+ payment modes, multi-currency - from ₹35K); PayU (credit card focus, international payments - from ₹30K); Cashfree (instant settlements, UPI integration - from ₹20K); Instamojo (simple setup, digital products - from ₹15K); BillDesk (enterprise-grade, high volume - custom pricing). International Gateways: Stripe (developer-friendly, 135+ currencies, subscriptions - from ₹50K); PayPal (global recognition, buyer protection - from ₹40K); Square (POS integration, small businesses - from ₹45K); Braintree (PayPal-owned, scalable - from ₹50K); Adyen (enterprise, unified commerce - custom pricing). In-App Purchase Systems: RevenueCat (subscription management, cross-platform - from ₹30K + RevenueCat fees); Qonversion (analytics-driven monetization - from ₹35K); Adapty.io (open-source alternative - from ₹25K). Features Include: One-click payments, Saved cards, EMI options, COD verification, Refund/return automation, Split payments (marketplaces), Subscription billing with dunning, Invoice generation, Payment analytics dashboard. All integrations include: Secure tokenization, 3D Secure 2.0, Fraud detection, Transaction webhooks, Error handling, Receipt generation.',
  },
  {
    question: 'Do you provide App Store Optimization (ASO) services?',
    answer: 'Yes! We offer data-driven App Store Optimization to maximize your app\'s visibility and organic downloads: Keyword Research (using Sensor Tower, App Annie, Mobile Action - identifying high-volume, low-competition keywords); Title Optimization (primary keyword in 30 characters for iOS, 50 for Android); Subtitle/Short Description (secondary keywords, value proposition); Long Description (keyword-rich, benefit-focused, 4000 characters iOS, 4000 Android); Icon Design & A/B Testing (memorable, scalable, category-appropriate, conversion-focused); Screenshot Optimization (showcasing key features, benefit-driven captions, localized for top markets); Preview Video Creation (30-second app demo, feature highlights, call-to-action); Localization (translating metadata for 15+ languages - Hindi, Spanish, French, German, Japanese, Korean, Portuguese, Russian, Arabic, etc.); Review & Rating Strategy (in-app prompts at optimal moments, response templates for negative reviews); Conversion Rate Optimization (A/B testing via Google Play Experiments, Splitmetrics, StoreMaven); Competitor Analysis (benchmarking against top apps in your category); Indexing Improvement (ensuring app ranks for target keywords within 2-3 weeks); Update Strategy (regular updates signal activity, feature additions for re-engagement). Tools We Use: Sensor Tower ($200-500/month), App Annie/data.ai ($500-1000/month), Mobile Action ($150-400/month), TheTool ($69-199/month), Splitmetrics ($500-1500/test), StoreMaven ($1000-3000/test). Expected Results: 30-50% increase in organic impressions, 20-40% boost in conversion rate, 2-3x improvement in keyword rankings within 60-90 days. ASO Packages: Starter (₹25K/month, basic optimization, monthly reporting); Growth (₹50K/month, A/B testing, bi-weekly updates); Enterprise (₹1L+/month, full-service, dedicated ASO specialist).',
  },
  {
    question: 'What is the difference between Native, Cross-Platform, and Hybrid apps?',
    answer: 'Understanding app development approaches helps you choose the right technology:\n\n**Native Apps** (Swift for iOS, Kotlin for Android):\n✓ Pros: Best performance (100% device capability), Smoothest UX (platform-specific design), Full hardware access (camera, GPS, sensors, ARKit), Offline-first architecture, App Store preference (featured more often), Better security (platform-specific encryption).\n✗ Cons: Higher cost (separate codebases), Longer timeline (2x development), Larger team needed (iOS + Android developers).\nBest For: Premium consumer apps, AR/VR apps, Gaming, Performance-critical apps, Hardware-intensive features.\nInvestment: ₹3-8 lakhs per platform, 12-20 weeks.\n\n**Cross-Platform Apps** (React Native, Flutter):\n✓ Pros: Single codebase (80-95% code reuse), Faster development (30-40% quicker), Cost-effective (one team for both platforms), Near-native performance (90-98%), Hot reload (faster iterations), Growing ecosystem.\n✗ Cons: Slightly larger app size, Limited access to newest OS features (wait for community modules), Complex animations may lag.\nBest For: Startups/MVPs, Business apps, E-commerce, Social networks, Budget-conscious projects.\nInvestment: ₹2-5 lakhs, 8-14 weeks.\n\n**Hybrid Apps** (Ionic, Cordova, PhoneGap):\n✓ Pros: Web technologies (HTML/CSS/JS), Fastest development, Lowest cost, Easy maintenance.\n✗ Cons: Performance gaps (webview rendering), Limited native features, Not suitable for graphics-intensive apps.\nBest For: Simple informational apps, Prototypes, Internal business tools, Content-driven apps.\nInvestment: ₹1-3 lakhs, 6-10 weeks.\n\n**Our Recommendation**: Choose Native if budget allows and you need maximum performance. Choose React Native for startups wanting both platforms quickly. Choose Flutter for beautiful custom UIs and consistent cross-platform experience. Choose Hybrid for simple apps or tight budgets.',
  },
  {
    question: 'Do you develop apps with AI and Machine Learning features?',
    answer: 'Yes! We integrate cutting-edge AI/ML capabilities into mobile apps: Computer Vision: Image recognition (identify objects, scenes, brands), Facial recognition (user authentication, emotion detection, beauty filters), Object detection (retail shelf monitoring, security surveillance), OCR/Text extraction (scanning documents, license plates, business cards), Barcode/QR scanning (inventory, retail, ticketing), Augmented Reality filters (Snapchat/Instagram-style lenses). Natural Language Processing: Chatbots & Virtual Assistants (customer support, FAQs, task completion), Sentiment Analysis (review monitoring, brand perception), Text Classification (spam detection, content moderation), Language Translation (real-time multilingual support), Speech-to-Text (voice commands, transcription), Text-to-Speech (accessibility, audiobooks). Predictive Analytics: Recommendation Engines (products, content, matches based on behavior), Demand Forecasting (inventory planning, dynamic pricing), User Behavior Prediction (churn risk, lifetime value), Fraud Detection (anomaly identification, transaction monitoring), Personalization (customized feeds, offers, experiences). Tools & Frameworks: TensorFlow Lite (on-device ML), Core ML (iOS native ML), ML Kit (Android pre-built models), PyTorch Mobile (research-grade models), OpenCV (computer vision), Dialogflow/Rasa (conversational AI), Amazon Rekognition (cloud vision API), Google Cloud Vision (image analysis), Microsoft Azure Cognitive Services (comprehensive AI APIs). Use Cases: Healthcare (disease diagnosis from images, symptom checkers), Retail (visual search, virtual try-on, personalized shopping), Finance (credit scoring, fraud detection, robo-advisors), Real Estate (property valuation, image enhancement), Education (adaptive learning, automated grading), Manufacturing (quality control, predictive maintenance). Integration Cost: Basic AI features (₹50K-₹1.5L), Advanced ML models (₹1.5L-₹4L), Custom AI development (₹3L-₹10L+). Cloud API usage charges extra (typically ₹0.001-₹0.01 per API call).',
  },
  {
    question: 'Which industries do you build mobile apps for?',
    answer: 'We have domain expertise across 20+ industries:\n\n**Healthcare & Medical**: Telemedicine apps, Doctor consultation platforms, Medicine delivery, Health tracking (fitness, diet, chronic conditions), Hospital management, Patient records (HIPAA-compliant), Appointment scheduling, Lab test booking - Starting ₹2,00,000\n\n**FinTech & Banking**: Digital wallets, UPI payment apps, Stock trading/demat, Mutual fund investment, Cryptocurrency exchanges, Loan lending platforms, Insurance policy management, Expense tracking, Budget planners, Neobanking - Starting ₹3,00,000 (RBI/PCI-DSS compliant)\n\n**E-Commerce & Retail**: Shopping apps (fashion, electronics, groceries), Food delivery, Multi-vendor marketplaces, Grocery delivery, Restaurant ordering, Subscription boxes, Dropshipping stores, POS systems - Starting ₹1,50,000\n\n**Education & E-Learning**: LMS platforms, Online course apps, Exam preparation, Language learning, Tutoring/matching, School/college management, Student portals, Virtual classrooms, Quiz/testing apps - Starting ₹1,20,000\n\n**Travel & Hospitality**: Flight/hotel booking, Taxi/ride-sharing (Uber clones), Tour guides, Restaurant discovery & reservation, Event ticketing, Travel insurance, Itinerary planning - Starting ₹2,00,000\n\n**Real Estate**: Property listing portals, Virtual tours (360° views), CRM for brokers, Mortgage calculators, Rental management, PG/co-living apps, Construction project tracking - Starting ₹1,00,000\n\n**Logistics & Transportation**: Delivery tracking, Fleet management, Route optimization, Driver apps, Warehouse management, Supply chain visibility, Courier booking, Truck aggregation (Porter clones) - Starting ₹2,50,000\n\n**Social & Dating**: Social networks, Dating/matrimonial apps, Community platforms, Chat/messaging apps, Video calling, Content sharing (photo/video), Live streaming - Starting ₹2,50,000\n\n**Entertainment & Media**: Music/video streaming (Spotify/Netflix clones), News/magazine apps, Podcast platforms, OTT platforms, Gaming apps, Fantasy sports (Dream11 clones) - Starting ₹3,00,000\n\n**Food & Beverage**: Restaurant apps, Food delivery (Zomato/Swiggy clones), Recipe apps, Grocery delivery, Nutrition tracking, Meal planning, Cloud kitchen management - Starting ₹1,50,000\n\n**Automotive**: Service booking, Parts ecommerce, Car/bike rental (Revv clones), Fuel delivery, EV charging station locator, Dealer management, Test drive scheduling - Starting ₹1,00,000\n\n**Government & Civic**: UMANG-style citizen services, Tax filing (GST, income tax), Traffic challan payment, License/permit applications, Passport/visa services, Aadhaar/PAN linking, Utility bill payments - Starting ₹5,00,000\n\n**Other Industries**: Agriculture (crop advisory, mandi prices), Manufacturing (production tracking, quality control), Energy (solar monitoring, utility management), NGO/Nonprofit (donations, volunteer management), Sports/Fitness (workout tracking, fantasy leagues), Beauty/Wellness (salon booking, wellness tracking), Legal (case management, lawyer consultation), HR/Recruitment (job boards, applicant tracking), Events (ticketing, conference management), Photography/Videography (portfolio, booking)',
  }
];

export default function MobileAppDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'Mobile App Development Services',
    'Professional iOS, Android, and cross-platform mobile application development for businesses. Native and hybrid app solutions with beautiful UI/UX design.'
  );

  const productSchema = generateProductSchema(
    'Mobile App Development Package',
    'Complete mobile app development solution for iOS and Android with modern UI/UX design, API integration, and app store deployment',
    '₹50,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Mobile App Development Platform',
    description: 'Professional mobile application development platform for iOS and Android with native Swift/Kotlin, cross-platform React Native/Flutter, beautiful UI/UX design, and app store deployment.',
    applicationCategory: 'MobileApplication',
    operatingSystem: 'iOS, Android, Cross-platform',
    price: '50000',
    rating: 4.9,
    reviewCount: 142,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mobile App Development', url: '/mobile-app-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Mobile App Development That Transforms Ideas"
        subtitle="iOS & Android Excellence"
        description="Build powerful, scalable mobile applications that engage users and drive business growth. Native performance, beautiful design."
        ctaPrimary={{ text: 'Start Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'View Our Work', href: '/portfolio' }}
        gradient="purple"
      />

      {/* What is Mobile App Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Mobile App Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Mobile App Development</strong> is the process of creating software applications that run on mobile devices like smartphones and tablets. It involves native development using Swift for iOS and Kotlin for Android, or cross-platform frameworks like React Native and Flutter. Mobile apps enable businesses to provide services, engage customers, and streamline operations through features like push notifications, offline access, and device-specific capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Mobile app development starting at ₹50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  iOS (Swift), Android (Kotlin), React Native, Flutter
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Native and cross-platform solutions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-24 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  App Store & Play Store submission included
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Post-launch maintenance & support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Mobile App Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we build mobile apps that users love and businesses rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                title: 'iOS App Development',
                description: 'Native iOS apps built with Swift and SwiftUI for iPhone and iPad, optimized for performance and user experience.',
                features: ['Swift/SwiftUI', 'Core Data', 'Push Notifications', 'App Store Optimization'],
              },
              {
                icon: '🤖',
                title: 'Android App Development',
                description: 'Native Android apps using Kotlin and Jetpack Compose, supporting all Android devices and versions.',
                features: ['Kotlin/Compose', 'Material Design', 'Play Services', 'Multi-device Support'],
              },
              {
                icon: '⚡',
                title: 'React Native Apps',
                description: 'Cross-platform apps with single codebase for iOS and Android, faster development with native performance.',
                features: ['Single Codebase', 'Hot Reload', 'Native Modules', 'Cost Effective'],
              },
              {
                icon: '🦋',
                title: 'Flutter Development',
                description: 'Beautiful, fast cross-platform apps with expressive UI and native performance on all platforms.',
                features: ['Beautiful UI', 'Fast Performance', 'Hot Reload', 'Cross-platform'],
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'User-centered design creating intuitive, engaging mobile experiences that delight users.',
                features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
              },
              {
                icon: '🔗',
                title: 'API Integration',
                description: 'Seamless integration with backends, third-party services, payment gateways, and cloud platforms.',
                features: ['RESTful APIs', 'GraphQL', 'Real-time Sync', 'Offline Support'],
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EifaSoft for Mobile App Development?
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              We combine technical excellence with creative design to deliver mobile apps that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Fast Delivery', description: 'Agile development with regular updates and quick turnaround' },
              { icon: '💎', title: 'Premium Quality', description: 'Clean code, best practices, and rigorous testing' },
              { icon: '📊', title: 'Analytics Built-in', description: 'Track user behavior and app performance from day one' },
              { icon: '🔐', title: 'Secure & Compliant', description: 'Industry-standard security and data protection' },
              { icon: '🎯', title: 'User-Centric', description: 'Design focused on user experience and engagement' },
              { icon: '⚙️', title: 'Scalable Architecture', description: 'Built to handle growth and future enhancements' },
              { icon: '💬', title: 'Clear Communication', description: 'Regular updates and transparent project management' },
              { icon: '🛠️', title: 'Post-Launch Support', description: 'Ongoing maintenance and feature updates' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-purple-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Mobile Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use the latest frameworks and tools to build performant, scalable mobile applications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">iOS Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'ARKit'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Android Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Coroutines', 'Firebase'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Platform</h3>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Flutter', 'Expo', 'Dart', 'TypeScript', 'Redux'].map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Firebase', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL'].map((tech) => (
                  <span key={tech} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our App Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and on-time delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Strategy', description: 'We analyze your business goals, target audience, and create a detailed project roadmap with wireframes and specifications.' },
              { step: '02', title: 'UI/UX Design', description: 'Our designers create beautiful, intuitive interfaces with prototypes you can interact with before development begins.' },
              { step: '03', title: 'Development', description: 'Agile sprints with regular demos, building features incrementally with best coding practices and version control.' },
              { step: '04', title: 'Quality Assurance', description: 'Comprehensive testing including functional, performance, security, and user acceptance testing across devices.' },
              { step: '05', title: 'App Store Launch', description: 'We handle submission to App Store and Google Play, including metadata optimization and compliance reviews.' },
              { step: '06', title: 'Support & Growth', description: 'Post-launch monitoring, updates, feature enhancements, and analytics-driven improvements.' },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a package that fits your budget and requirements. All plans include app store deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter App',
                price: '₹50,000',
                description: 'Simple apps with basic features',
                features: [
                  'Single platform (iOS or Android)',
                  'Up to 10 screens',
                  'Basic UI/UX design',
                  'API integration',
                  'App store submission',
                  '2 months support',
                ],
                highlighted: false,
              },
              {
                name: 'Business App',
                price: '₹1,50,000',
                description: 'Feature-rich apps for businesses',
                features: [
                  'iOS & Android (Native or Cross-platform)',
                  'Up to 25 screens',
                  'Custom UI/UX design',
                  'Backend development',
                  'Payment integration',
                  'Push notifications',
                  'Admin panel',
                  '6 months support',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise App',
                price: 'Custom',
                description: 'Complex enterprise solutions',
                features: [
                  'iOS & Android native',
                  'Unlimited screens',
                  'Advanced features',
                  'Scalable backend',
                  'Third-party integrations',
                  'Analytics & reporting',
                  'Security features',
                  '12 months support',
                  'Dedicated team',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-purple-200' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-gray-600">
                Let&apos;s discuss your app idea and create something amazing together.
              </p>
            </div>
            <ContactForm serviceName="Mobile App Development" />
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'React Native Development Services India | Cross-Platform Mobile Apps | EifaSoft',
    description: 'Expert React Native development company in India. Cross-platform mobile apps for iOS & Android using React Native, Expo, Redux. Starting ₹1,50,000.',
    canonical: '/react-native-development-services',
    keywords: [
      // Core React Native Keywords
      'React Native development services',
      'React Native development company India',
      'hire React Native developers',
      'custom React Native development',
      'cross-platform mobile app development',
      'React Native iOS Android apps',
      
      // Frameworks & Libraries
      'React Native Expo',
      'React Native CLI',
      'React Native Redux',
      'React Navigation',
      'React Native TypeScript',
      'React Native JavaScript',
      
      // UI/UX
      'React Native UI components',
      'React Native animations',
      'React Native custom components',
      'responsive mobile design',
      'React Native Material Design',
      
      // Features
      'React Native push notifications',
      'React Native camera integration',
      'React Native maps location',
      'React Native payment gateway',
      'React Native offline mode',
      'React Native API integration',
      
      // Performance
      'React Native performance optimization',
      'React Native debugging',
      'React Native testing',
      'React Native hot reload',
      
      // Migration & Upgrades
      'React Native migration',
      'React Native upgrade',
      'native to React Native',
      'hybrid to React Native',
      
      // Industry Solutions
      'React Native e-commerce app',
      'React Native social media app',
      'React Native fintech app',
      'React Native healthcare app',
      'React Native delivery app',
      
      // App Store
      'React Native App Store deployment',
      'React Native Google Play deployment',
      'React Native app publishing',
      
      // Cost & Hiring
      'React Native development cost',
      'React Native developer rate India',
      'dedicated React Native developer',
      'affordable React Native development',
      
      // Location-Based
      'React Native developer Noida',
      'React Native company Delhi',
      'React Native services Bangalore',
      'React Native developer Mumbai',
      'React Native Hyderabad',
      'React Native Pune',
    ],
  });
}

const faqs = [
  {
    question: 'What is React Native and why choose it?',
    answer: 'React Native is a popular open-source framework developed by Facebook for building cross-platform mobile applications using JavaScript and React:\n\n**Key Benefits:**\n✓ Single codebase for iOS & Android\n✓ Near-native performance\n✓ Faster development (30-50% quicker than native)\n✓ Cost-effective (one team, one codebase)\n✓ Hot reloading for instant updates\n✓ Large developer community\n✓ Backed by Meta (Facebook)\n✓ Component-based architecture\n✓ Easy to find React Native developers\n\n**When to Choose React Native:**\n- Startups needing MVP quickly\n- Budget-conscious projects\n- Apps requiring both iOS & Android\n- Content-driven applications\n- E-commerce apps\n- Social networking apps\n- Enterprise internal tools\n\n**Performance:**\n- 90%+ code reusability across platforms\n- Native-like user experience\n- Access to native APIs (camera, GPS, contacts)\n- Smooth animations at 60 FPS\n\n**Companies Using React Native:**\nFacebook, Instagram, WhatsApp, Skype, Bloomberg, Walmart, Discord, Tesla',
  },
  {
    question: 'How much does React Native app development cost in India?',
    answer: 'React Native app development costs vary by complexity, features, and integrations:\n\n**Basic App** (₹1,50,000-₹3,00,000, 6-8 weeks)\n- Simple UI with 5-7 screens\n- Basic features (user auth, data display)\n- API integration (REST/GraphQL)\n- Single platform deployment\n- Standard UI components\n- Example: Business card app, simple utility\n\n**Professional App** (₹3,00,000-₹6,00,000, 8-14 weeks)\n- 10-15 screens with custom UI\n- Advanced features (push notifications, camera, maps)\n- Third-party integrations (payment, social media)\n- State management (Redux/MobX)\n- Offline support\n- Both iOS & Android\n- Example: E-commerce app, delivery tracking, social app\n\n**Enterprise App** (₹6,00,000-₹15,00,000+, 14-24 weeks)\n- Complex architecture\n- Real-time features (chat, live updates)\n- Multiple third-party integrations\n- Custom native modules\n- Backend development\n- Admin panel\n- Scalable infrastructure\n- Example: Marketplace, FinTech app, healthcare platform\n\n**By Complexity:**\n- Simple app: ₹1,50,000-₹3,50,000\n- Medium complexity: ₹3,50,000-₹8,00,000\n- Highly complex: ₹8,00,000-₹20,00,000+\n\n**Additional Costs:**\n- Backend/API development: ₹1,00,000-₹5,00,000\n- UI/UX design: ₹50,000-₹2,00,000\n- App Store/Play Store fees: $99/year (Apple), $25 one-time (Google)\n- Server hosting: ₹3,000-₹30,000/month\n- Maintenance (AMC): 15-20% of project cost/year',
  },
  {
    question: 'Do you provide Expo development services?',
    answer: 'Yes! We specialize in both Expo and bare React Native CLI development:\n\n**Expo Development** (Recommended for Most Projects):\n✓ Faster setup and development\n✓ Built-in native APIs (camera, location, notifications)\n✓ Over-the-air updates\n✓ EAS Build (cloud builds without Xcode/Android Studio)\n✓ EAS Submit (automated store deployment)\n✓ Great for prototypes and MVPs\n✓ Lower development cost (20-30% savings)\n✓ Managed workflow (no native code)\n\n**When to Use Expo:**\n- Startups building MVP\n- Apps without custom native modules\n- Rapid prototyping\n- Small to medium projects\n- Teams without native iOS/Android expertise\n\n**Bare React Native CLI:**\n✓ Full control over native code\n✓ Custom native modules integration\n✓ Better for complex requirements\n✓ Direct access to iOS/Android SDKs\n✓ No Expo limitations\n\n**When to Use Bare CLI:**\n- Apps requiring custom native functionality\n- Integration with proprietary SDKs\n- Performance-critical applications\n- Apps with AR/VR features\n- Background processing needs\n\n**Our Expo Services:**\n- Expo app development from scratch\n- Migration from Create React Native App (CRNA)\n- Expo to bare workflow migration\n- Custom native module integration in Expo\n- EAS Build & Submit setup\n- Over-the-air update implementation\n\n**Cost Comparison:**\n- Expo app: ₹1,50,000-₹6,00,000\n- Bare RN CLI: ₹2,00,000-₹8,00,000',
  },
  {
    question: 'Can you migrate our existing app to React Native?',
    answer: 'Yes! We specialize in app migration and modernization:\n\n**Migration Sources:**\n✓ Native iOS (Swift/Objective-C) → React Native\n✓ Native Android (Java/Kotlin) → React Native\n✓ Hybrid apps (Ionic/Cordova/PhoneGap) → React Native\n✓ Xamarin → React Native\n✓ Flutter → React Native\n✓ Old React Native versions → Latest version\n\n**Our Migration Process:**\n\n**Phase 1: Analysis (1-2 weeks)**\n- Current architecture review\n- Feature mapping\n- Code audit\n- Identify reusable components\n- Performance benchmarking\n\n**Phase 2: Planning (1 week)**\n- Migration strategy (big bang vs incremental)\n- Technology stack selection\n- Timeline estimation\n- Risk assessment\n\n**Phase 3: Development (4-12 weeks)**\n- Set up React Native environment\n- Build core components\n- Integrate APIs and services\n- Implement navigation\n- State management setup\n\n**Phase 4: Testing (2-3 weeks)**\n- Functional testing\n- Cross-platform testing (iOS & Android)\n- Performance testing\n- User acceptance testing\n\n**Phase 5: Deployment (1 week)**\n- App Store submission\n- Google Play deployment\n- Monitoring setup\n\n**Benefits of Migration:**\n- Single codebase maintenance\n- Reduced development costs (30-50%)\n- Faster feature development\n- Consistent UI across platforms\n- Larger talent pool\n\n**Cost:** ₹2,00,000-₹8,00,000 depending on app complexity',
  },
  {
    question: 'Do you integrate third-party services and APIs?',
    answer: 'Yes! We integrate 100+ third-party services and APIs:\n\n**Payment Gateways:**\n- Razorpay, Stripe, PayPal\n- Paytm, PhonePe, Google Pay\n- Apple Pay, Google Pay\n- In-app purchases (iOS & Android)\n\n**Maps & Location:**\n- Google Maps SDK\n- Mapbox\n- Location services (GPS, geofencing)\n- Navigation APIs\n\n**Push Notifications:**\n- Firebase Cloud Messaging (FCM)\n- OneSignal\n- Amazon SNS\n- Local notifications\n\n**Social Media:**\n- Facebook Login & SDK\n- Google Sign-In\n- Twitter API\n- Instagram sharing\n- LinkedIn integration\n\n**Analytics:**\n- Google Analytics\n- Firebase Analytics\n- Mixpanel\n- Amplitude\n- Clevertap\n\n**Communication:**\n- Twilio (SMS, voice, video)\n- SendGrid (email)\n- WhatsApp Business API\n- In-app chat (Stream, Sendbird)\n\n**Storage & Backend:**\n- AWS (S3, DynamoDB, Lambda)\n- Google Cloud Platform\n- Firebase (Firestore, Realtime DB)\n- Azure Mobile Apps\n\n**Authentication:**\n- OAuth 2.0\n- JWT tokens\n- Biometric authentication (Face ID, Touch ID, Fingerprint)\n- OTP verification\n\n**Other Integrations:**\n- Camera & photo library\n- Calendar integration\n- Contacts access\n- File upload/download\n- Barcode/QR scanning\n- Deep linking\n- Universal links\n\n**Any REST or GraphQL API:**\nIf it has proper documentation, we can integrate it!',
  },
  {
    question: 'What industries do you build React Native apps for?',
    answer: 'We have domain expertise across 20+ industries:\n\n**E-Commerce & Retail** (Starting ₹3,00,000)\n- Online shopping apps\n- Multi-vendor marketplaces\n- Product catalog & search\n- Shopping cart & checkout\n- Payment integration\n- Order tracking\n\n**FinTech** (Starting ₹5,00,000)\n- Digital wallets\n- Payment apps\n- Investment platforms\n- Loan management\n- Expense tracking\n- Cryptocurrency apps\n- RBI compliance\n\n**Healthcare** (Starting ₹4,00,000)\n- Telemedicine apps\n- Doctor appointment booking\n- Health tracking\n- Medicine delivery\n- Patient records management\n- HIPAA compliance\n\n**Education & E-Learning** (Starting ₹3,00,000)\n- Learning management apps\n- Online course platforms\n- Student-teacher portals\n- Quiz & assessment apps\n- Video streaming for education\n\n**Food & Restaurant** (Starting ₹2,50,000)\n- Food ordering apps\n- Restaurant discovery\n- Delivery tracking\n- Table reservation\n- Menu management\n\n**Travel & Hospitality** (Starting ₹3,50,000)\n- Flight/hotel booking\n- Travel itinerary management\n- Local guides\n- Booking management\n\n**Real Estate** (Starting ₹3,00,000)\n- Property listing apps\n- Virtual property tours\n- Agent connectivity\n- Mortgage calculators\n\n**Social Networking** (Starting ₹4,00,000)\n- Social media apps\n- Dating apps\n- Community platforms\n- Chat & messaging\n- Photo/video sharing\n\n**Logistics & Delivery** (Starting ₹4,00,000)\n- Package tracking\n- Route optimization\n- Fleet management\n- Proof of delivery\n\n**On-Demand Services** (Starting ₹3,00,000)\n- Home services\n- Beauty services\n- Repair services\n- Task marketplaces\n\nAnd many more: Fitness, Entertainment, News, Weather, Productivity, Gaming',
  },
  {
    question: 'Do you provide app maintenance and support?',
    answer: 'Yes! We offer comprehensive post-launch support and maintenance:\n\n**Maintenance Plans:**\n\n**Basic Support** (₹15,000-₹30,000/month)\n- Bug fixes (critical issues)\n- OS compatibility updates (iOS/Android)\n- Library/package updates\n- Performance monitoring\n- Email support\n- Monthly health check report\n\n**Standard Support** (₹30,000-₹60,000/month)\n- Everything in Basic +\n- Minor feature enhancements\n- Third-party API updates\n- Security patches\n- App Store/Play Store compliance\n- Priority support (24-48 hour response)\n- Quarterly strategy calls\n\n**Premium Support** (₹60,000-₹1,20,000/month)\n- Everything in Standard +\n- Major feature additions\n- Dedicated developer (part-time)\n- Performance optimization\n- Analytics & insights\n- A/B testing support\n- Weekly sync calls\n- SLA guarantee\n\n**What We Maintain:**\n✓ React Native framework updates\n✓ iOS/Android OS compatibility\n✓ Third-party library updates\n✓ API integration changes\n✓ Security patches\n✓ Performance optimization\n✓ UI/UX improvements\n✓ Feature enhancements\n\n**Additional Services:**\n- App monitoring (Crashlytics, Sentry)\n- User feedback analysis\n- Competitor analysis\n- Roadmap planning\n- Scaling consultations\n\n**Emergency Support:**\n- Critical bug fixes within 24 hours\n- Server downtime assistance\n- App Store rejection resolution\n- Security breach response\n\n**Flexible Engagement:**\n- Monthly retainer\n- Pay-per-hour (₹1,500-₹3,000/hour)\n- Quarterly contracts with discounts',
  },
];

export default function ReactNativeDevelopmentServices() {
  const services = [
    {
      icon: '📱',
      title: 'Custom React Native Development',
      description: 'Tailored cross-platform mobile apps built from ground up for your specific business needs',
      features: ['iOS & Android Apps', 'Reusable Components', 'Native Modules', 'Third-party Integration'],
    },
    {
      icon: '⚛️',
      title: 'React Native Expo Development',
      description: 'Rapid prototyping and development using Expo for faster time-to-market',
      features: ['Expo Go', 'Over-the-air Updates', 'Expo SDK Integration', 'EAS Build'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design & Implementation',
      description: 'Beautiful, intuitive interfaces with smooth animations and native feel',
      features: ['Custom UI Components', 'Animations', 'Material Design', 'Human Interface Guidelines'],
    },
    {
      icon: '🔄',
      title: 'React Native Migration & Upgrades',
      description: 'Upgrade legacy apps to latest React Native version or migrate from other frameworks',
      features: ['Hybrid to React Native', 'Version Upgrades', 'Performance Optimization', 'Code Refactoring'],
    },
    {
      icon: '🔌',
      title: 'Native Module Development',
      description: 'Custom native modules for platform-specific functionality not available in React Native',
      features: ['iOS Native Modules', 'Android Native Modules', 'Bridge Development', 'Performance Critical Features'],
    },
    {
      icon: '🚀',
      title: 'App Deployment & Publishing',
      description: 'End-to-end app store submission and ongoing maintenance support',
      features: ['App Store Submission', 'Google Play Publishing', 'ASO Support', 'Ongoing Maintenance'],
    },
  ];;

  const technologies = [
    { name: 'React Native', icon: '⚛️', category: 'Framework' },
    { name: 'Expo', icon: '📦', category: 'Development Platform' },
    { name: 'Redux', icon: '🔴', category: 'State Management' },
    { name: 'React Navigation', icon: '🧭', category: 'Navigation' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'JavaScript', icon: '📜', category: 'Language' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    { name: 'GraphQL', icon: '💎', category: 'API' },
    { name: 'REST API', icon: '🔌', category: 'API' },
    { name: 'Jest', icon: '🃏', category: 'Testing' },
    { name: 'Detox', icon: '🧪', category: 'E2E Testing' },
    { name: 'Fastlane', icon: '🚀', category: 'Deployment' },
    { name: 'Xcode', icon: '🍎', category: 'iOS IDE' },
    { name: 'Android Studio', icon: '🤖', category: 'Android IDE' },
  ];

  const apiFeatures = [
    {
      title: 'Documentation',
      items: ['Swagger/OpenAPI', 'Interactive API Explorer', 'Code Examples', 'Postman Collections'],
    },
    {
      title: 'Performance',
      items: ['Caching Layer', 'Database Optimization', 'Load Balancing', 'CDN Integration'],
    },
    {
      title: 'Monitoring',
      items: ['Real-time Analytics', 'Error Tracking', 'Performance Metrics', 'Uptime Monitoring'],
    },
    {
      title: 'Testing',
      items: ['Unit Testing', 'Integration Testing', 'Load Testing', 'Security Testing'],
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic React Native App',
      price: '₹1,50,000',
      duration: '6-8 weeks',
      features: [
        'Single Platform (iOS or Android)',
        '5-7 Screens',
        'Basic UI Components',
        'API Integration',
        'Push Notifications',
        '1 Month Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional React Native App',
      price: '₹3,00,000',
      duration: '8-12 weeks',
      features: [
        'Both Platforms (iOS & Android)',
        '10-15 Screens',
        'Custom UI Components',
        'Advanced Animations',
        'Payment Gateway Integration',
        'Firebase Integration',
        'Redux State Management',
        '3 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise React Native Solution',
      price: '₹6,00,000+',
      duration: '12-20 weeks',
      features: [
        'Cross-platform with Native Modules',
        'Unlimited Screens',
        'Complex Animations',
        'Native Module Development',
        'Offline Mode',
        'Real-time Features',
        'CI/CD Pipeline',
        'Performance Optimization',
        'App Store Publishing',
        '6 Months Support',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const process = [
    { step: 1, title: 'Discovery & Planning', desc: 'Understand your requirements and design API architecture' },
    { step: 2, title: 'API Design', desc: 'Create resource models, endpoints, and documentation specifications' },
    { step: 3, title: 'Development', desc: 'Build APIs with best practices and security standards' },
    { step: 4, title: 'Testing', desc: 'Comprehensive testing for functionality, performance, and security' },
    { step: 5, title: 'Documentation', desc: 'Complete API documentation with examples and integration guides' },
    { step: 6, title: 'Deployment', desc: 'Deploy to production with monitoring and scaling setup' },
  ];

  const serviceSchema = generateServiceSchema(
    'React Native Development Services',
    'Professional React Native development company in India offering cross-platform mobile apps for iOS and Android using React Native, Expo, Redux, TypeScript.'
  );

  const productSchema = generateProductSchema(
    'React Native App Development Package',
    'Complete cross-platform mobile app development solution with React Native framework, custom UI components, state management, API integration, and app store deployment.',
    '150000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft React Native Development Platform',
    description: 'Professional React Native development platform with Expo, Redux, React Navigation, custom UI components, native module support, and cross-platform deployment for iOS and Android.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'iOS, Android, Cross-platform',
    price: '150000',
    rating: 4.9,
    reviewCount: 78,
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
    { name: 'React Native Development Services', url: '/react-native-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="React Native Development Services"
        subtitle="Cross-Platform Mobile Apps for iOS & Android"
        description="Expert React Native development company in India. Build beautiful cross-platform mobile apps with React Native, Expo, Redux. Save 40% development cost. Starting ₹1,50,000."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="blue"
      />

      {/* What is React Native Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is React Native Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>React Native Development</strong> involves building cross-platform mobile applications using Facebook&apos;s React Native framework. It allows developers to write code once in JavaScript/TypeScript and deploy to both iOS and Android platforms. React Native uses native components instead of web views, providing near-native performance and user experience with 40% faster development time compared to building separate native apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  React Native development starting at ₹1,50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Cross-platform iOS & Android apps
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  Expo, Redux, TypeScript support
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  6-12 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  40% cost savings vs native apps
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  App Store & Google Play deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our React Native Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cross-platform mobile app solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">React Native Technologies We Use</h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools and frameworks for cross-platform mobile development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">React Native App Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">Streamlined workflow for quality React Native app delivery</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 last:border-l-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">React Native Development Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90">{plan.duration}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="React Native Development" />
        </div>
      </section>
    </main>
  );
}

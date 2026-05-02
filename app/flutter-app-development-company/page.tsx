import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Flutter App Development Company | Cross-Platform iOS Android Apps | EifaSoft',
    description: 'Expert Flutter app development for iOS, Android, Web & Desktop from single codebase. Beautiful UI, 60fps animations, native performance. Apps from ₹1,00,000. Get free quote!',
    canonical: '/flutter-app-development-company',
    keywords: [
      // Core Flutter Keywords (High Volume)
      'Flutter app development', 'Flutter development company', 'cross-platform app development',
      'Flutter iOS Android', 'Flutter mobile app', 'Dart development', 'Flutter UI design',
      'Flutter developer India', 'cross-platform mobile app', 'Flutter web app',
      
      // Technology-Specific Keywords
      'Flutter framework', 'Dart programming language', 'Flutter widgets', 'Material Design',
      'Cupertino widgets', 'Flutter hot reload', 'Flutter state management', 'Provider Flutter',
      'Riverpod', 'BLoC pattern', 'GetX Flutter', 'Flutter Firebase', 'Flutter API integration',
      
      // Platform Coverage
      'Flutter desktop app', 'Flutter Windows app', 'Flutter macOS app', 'Flutter Linux app',
      'Flutter multi-platform', 'Flutter all platforms', 'single codebase app',
      
      // Comparison Keywords
      'React Native alternative', 'Flutter vs React Native', 'Flutter vs Swift', 'Flutter vs Kotlin',
      'Flutter vs Xamarin', 'best cross-platform framework', 'Flutter advantages',
      
      // Industry-Specific
      'Flutter e-commerce app', 'Flutter business app', 'Flutter social media app',
      'Flutter food delivery app', 'Flutter taxi booking app', 'Flutter healthcare app',
      'Flutter fintech app', 'Flutter education app', 'Flutter enterprise app',
      
      // Feature-Specific
      'Flutter animation', 'Flutter performance optimization', 'Flutter custom widgets',
      'Flutter push notifications', 'Flutter offline mode', 'Flutter real-time sync',
      'Flutter payment gateway', 'Flutter authentication', 'Flutter security',
      
      // Cost & Hiring
      'Flutter app cost', 'Flutter app price', 'hire Flutter developer', 'dedicated Flutter developer',
      'Flutter development cost India', 'affordable Flutter development', 'Flutter app quotation',
      
      // Location-Based
      'Flutter app development India', 'Flutter developer Noida', 'Flutter development company Delhi',
      'Flutter app company Bangalore', 'Flutter developer Hyderabad', 'Flutter development Mumbai',
      
      // Long-tail Commercial
      'custom Flutter app development', 'enterprise Flutter solutions', 'Flutter MVP development',
      'Flutter prototype to production', 'Flutter app maintenance', 'Flutter app support',
      'migrate to Flutter', 'Flutter app modernization',
    ],
  });
}

const faqs = [
  {
    question: 'What platforms can Flutter apps run on?',
    answer: 'Flutter apps run natively on iOS (iPhone, iPad, Apple Watch), Android (phones, tablets, Wear OS), Web (Chrome, Safari, Firefox, Edge), and Desktop (Windows, macOS, Linux) — all from a single Dart codebase. This eliminates the need to maintain separate codebases for each platform, reducing development time and cost by up to 40-50%. Flutter compiles to native ARM or x86 code, ensuring optimal performance on all platforms.',
  },
  {
    question: 'How does Flutter compare to React Native?',
    answer: 'Flutter uses its own rendering engine (Skia/Impeller) for pixel-perfect UI across all platforms, while React Native uses native components. Flutter offers better performance consistency, smoother animations (60-120fps), faster hot reload, and consistent UI regardless of OS version.\n\n**Flutter Advantages:**\n✓ Better performance (compiles to native code)\n✓ Consistent UI across platforms\n✓ Faster development (hot reload is superior)\n✓ Rich pre-built widgets (Material + Cupertino)\n✓ Better documentation\n\n**React Native Advantages:**\n✓ Larger community\n✓ More third-party libraries\n✓ JavaScript knowledge (easier to find developers)\n\nBoth are excellent; Flutter is often preferred for UI-heavy apps, games, and when pixel-perfect consistency is critical.',
  },
  {
    question: 'How long does it take to build a Flutter app?',
    answer: 'Flutter app development timelines vary by complexity:\n\n**Basic Apps** (4-6 weeks, ₹1,00,000-₹2,00,000):\n- 5-10 screens\n- Simple UI/UX\n- Basic API integration\n- Local storage\n- Example: MVP, simple business card app\n\n**Business Apps** (8-12 weeks, ₹2,50,000-₹5,00,000):\n- 10-25 screens\n- Custom design\n- Backend API integration\n- State management\n- Payment gateway\n- Admin panel\n- Example: E-commerce, booking apps\n\n**Enterprise Apps** (16-24 weeks, ₹7,00,000+):\n- Unlimited screens\n- Complex features\n- Real-time sync\n- Offline mode\n- CI/CD pipeline\n- Security audit\n- Example: Enterprise solutions, social networks',
  },
  {
    question: 'What is the cost of Flutter app development?',
    answer: 'Flutter app development costs in India:\n\n**By Complexity:**\n- Basic App: ₹1,00,000 - ₹2,00,000\n- Business App: ₹2,50,000 - ₹5,00,000\n- Enterprise App: ₹7,00,000 - ₹20,00,000+\n\n**By Platform:**\n- Single Platform (iOS OR Android): Starting ₹1,00,000\n- Both Platforms (iOS + Android): Starting ₹1,50,000 (save 40%)\n- All Platforms (iOS + Android + Web + Desktop): Starting ₹2,00,000\n\n**By Engagement Model:**\n- Fixed Price: For well-defined requirements\n- Time & Material: ₹25,000-₹3,500/hour based on developer expertise\n- Dedicated Developer: ₹60,000-₹2,00,000/month\n\nThe single codebase approach means you get iOS + Android for roughly the same cost as one native platform.',
  },
  {
    question: 'Can Flutter apps access native device features?',
    answer: 'Yes! Flutter provides extensive plugin support through pub.dev for accessing native device features:\n\n**Hardware Access:**\n- Camera & Gallery\n- GPS & Location Services\n- Biometric Authentication (Fingerprint, Face ID)\n- Bluetooth & NFC\n- Sensors (Accelerometer, Gyroscope)\n- Push Notifications\n\n**Services & APIs:**\n- Payment Gateways (Razorpay, Stripe, Paytm)\n- Firebase (Auth, Database, Analytics, Cloud Messaging)\n- Social Media Login (Google, Facebook, Apple)\n- Maps & Navigation (Google Maps, Mapbox)\n- In-App Purchases\n\nFor unsupported features, Flutter\'s platform channels allow you to write custom native code in Kotlin/Swift and call it from Dart seamlessly.',
  },
  {
    question: 'Do you provide post-launch Flutter app maintenance?',
    answer: 'Yes! We offer comprehensive Flutter app maintenance and support packages:\n\n**Maintenance Services:**\n- Flutter SDK upgrades (quarterly)\n- Dart language updates\n- OS compatibility patches (iOS/Android updates)\n- Feature enhancements\n- Performance monitoring\n- Crash fixing & bug resolution\n- App store resubmissions\n- Security patches\n\n**Support Packages:**\n- Starter: ₹10,000/month (10 hours, email support)\n- Business: ₹25,000/month (25 hours, priority support)\n- Enterprise: ₹50,000+/month (unlimited, dedicated support)\n\nWe recommend quarterly maintenance to stay current with Flutter releases and OS updates. SLA guarantees available for enterprise clients.',
  },
  {
    question: 'Can I migrate my existing app to Flutter?',
    answer: 'Yes! We specialize in migrating apps from other platforms to Flutter:\n\n**Migration Sources:**\n- React Native → Flutter\n- Xamarin → Flutter\n- Ionic/Cordova → Flutter\n- Native (Swift/Kotlin) → Flutter\n- Flutter 1.x → Flutter 3.x (null safety migration)\n\n**Migration Process:**\n1. Code assessment & feasibility study\n2. UI/UX recreation with Flutter widgets\n3. Business logic rewrite in Dart\n4. API integration migration\n5. Data migration (if needed)\n6. Testing & quality assurance\n7. App store deployment\n\n**Benefits of Migration:**\n- 40-50% cost reduction\n- Better performance\n- Easier maintenance\n- Access to latest Flutter features\n\nTypical migration timeline: 6-12 weeks depending on complexity.',
  },
  {
    question: 'Do you develop Flutter apps with AI and ML features?',
    answer: 'Yes! We integrate cutting-edge AI/ML capabilities into Flutter apps:\n\n**AI/ML Features:**\n- Computer Vision (image recognition, OCR)\n- Natural Language Processing (chatbots, translation)\n- Predictive Analytics (recommendations, forecasting)\n- Voice Recognition (speech-to-text)\n- Personalization engines\n\n**Tools & Frameworks:**\n- TensorFlow Lite (on-device ML)\n- ML Kit (pre-built ML models)\n- Core ML (iOS integration)\n- PyTorch Mobile\n- Custom AI APIs (OpenAI GPT, Google AI)\n\n**Use Cases:**\n- Smart product recommendations\n- Image/text analysis\n- Chatbots & virtual assistants\n- Fraud detection\n- User behavior prediction\n\nStarting cost for AI-powered Flutter apps: ₹3,00,000+',
  },
  {
    question: 'Which industries do you build Flutter apps for?',
    answer: 'We have domain expertise across 20+ industries:\n\n**E-Commerce & Retail**: Shopping apps, multi-vendor marketplaces, food delivery... Starting ₹1,50,000\n\n**FinTech & Banking**: Digital wallets, UPI payment apps, stock trading... Starting ₹3,00,000 (RBI/PCI-DSS compliant)\n\n**Healthcare & Medical**: Telemedicine, doctor consultation, medicine delivery, fitness tracking... Starting ₹2,00,000\n\n**Education & E-Learning**: Online courses, LMS, tutoring platforms, quiz apps... Starting ₹1,50,000\n\n**Travel & Hospitality**: Booking engines, hotel reservation, travel guides... Starting ₹2,00,000\n\n**Real Estate**: Property listing, virtual tours, CRM... Starting ₹1,80,000\n\n**Food & Restaurant**: Food delivery, restaurant POS, table booking... Starting ₹1,50,000\n\n**Transportation & Logistics**: Taxi booking, fleet management, delivery tracking... Starting ₹2,50,000\n\n**Social Networking**: Chat apps, content sharing, live streaming... Starting ₹3,00,000\n\n**Entertainment & Media**: Streaming apps, news portals, gaming... Starting ₹2,50,000',
  },
];

export default function FlutterAppDevelopmentCompany() {
  const services = [
    {
      icon: '📱',
      title: 'Cross-Platform Development',
      description: 'Single codebase for iOS, Android, Web, and Desktop',
      features: ['iOS & Android Apps', 'Web Applications', 'Desktop Apps', 'Responsive UI'],
    },
    {
      icon: '🎨',
      title: 'Custom UI/UX Design',
      description: 'Beautiful, native-like interfaces with Flutter widgets',
      features: ['Material Design', 'Cupertino Widgets', 'Custom Animations', 'Responsive Layouts'],
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Seamless integration with REST APIs and backend services',
      features: ['REST API', 'GraphQL', 'Firebase', 'WebSocket'],
    },
    {
      icon: '💾',
      title: 'State Management',
      description: 'Efficient app state management with modern solutions',
      features: ['Provider', 'Riverpod', 'BLoC Pattern', 'GetX'],
    },
    {
      icon: '🔐',
      title: 'Authentication & Security',
      description: 'Secure user authentication and data protection',
      features: ['OAuth 2.0', 'JWT', 'Biometric Auth', 'Encryption'],
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Fast, smooth apps with optimized performance',
      features: ['Code Optimization', 'Lazy Loading', 'Caching', 'Image Optimization'],
    },
  ];

  const appTypes = [
    {
      type: 'E-Commerce Apps',
      icon: '🛒',
      examples: ['Shopping Apps', 'Product Catalogs', 'Payment Integration', 'Order Tracking'],
    },
    {
      type: 'Social Media Apps',
      icon: '💬',
      examples: ['Chat Applications', 'Social Networks', 'Content Sharing', 'Live Streaming'],
    },
    {
      type: 'Business Apps',
      icon: '💼',
      examples: ['CRM Systems', 'Inventory Management', 'HR Management', 'Analytics Dashboard'],
    },
    {
      type: 'On-Demand Apps',
      icon: '🚗',
      examples: ['Food Delivery', 'Taxi Booking', 'Service Marketplace', 'Healthcare Apps'],
    },
  ];

  const features = [
    { icon: '⚡', title: 'Fast Development', desc: 'Hot reload for instant updates' },
    { icon: '🎯', title: 'Native Performance', desc: '60fps smooth animations' },
    { icon: '📦', title: 'Rich Widgets', desc: 'Pre-built UI components' },
    { icon: '🌍', title: 'Cross-Platform', desc: 'One code, all platforms' },
    { icon: '🔧', title: 'Easy Maintenance', desc: 'Single codebase to manage' },
    { icon: '💰', title: 'Cost-Effective', desc: 'Save 40% on development' },
  ];

  const packages = [
    {
      name: 'Basic Flutter App',
      price: '₹1,50,000',
      duration: '6-8 weeks',
      features: [
        'iOS & Android Apps',
        'Up to 10 Screens',
        'Basic UI/UX Design',
        'API Integration',
        'Local Storage',
        'Push Notifications',
        '3 Months Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional App',
      price: '₹3,50,000',
      duration: '10-14 weeks',
      features: [
        'iOS, Android & Web',
        'Up to 25 Screens',
        'Custom UI/UX Design',
        'Advanced Features',
        'State Management',
        'Payment Gateway',
        'Admin Panel',
        'Analytics Integration',
        '6 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Solution',
      price: '₹7,00,000+',
      duration: '16-24 weeks',
      features: [
        'All Platforms',
        'Unlimited Screens',
        'Premium Design',
        'Complex Features',
        'Offline Mode',
        'Real-time Sync',
        'CI/CD Pipeline',
        'Security Audit',
        '12 Months Support',
        'Dedicated Team',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const techStack = [
    { category: 'Framework', tools: ['Flutter 3.x', 'Dart', 'Material Design', 'Cupertino'] },
    { category: 'State Management', tools: ['Provider', 'Riverpod', 'BLoC', 'GetX', 'Redux'] },
    { category: 'Backend', tools: ['Firebase', 'Node.js', 'Laravel', 'Django', 'Supabase'] },
    { category: 'Tools', tools: ['Android Studio', 'VS Code', 'Xcode', 'Git', 'Fastlane'] },
  ];

  const serviceSchema = generateServiceSchema(
    'Flutter App Development Services',
    'Professional Flutter app development for iOS, Android, Web, and Desktop from a single Dart codebase. Beautiful UI, native performance, and seamless cross-platform experience.'
  );

  const productSchema = generateProductSchema(
    'Flutter App Development Package',
    'Complete cross-platform Flutter app development for iOS, Android, Web and Desktop with custom UI/UX design, API integration, and app store deployment.',
    '100000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Flutter Development Platform',
    description: 'Professional Flutter app development platform for iOS, Android, Web, and Desktop from a single Dart codebase. Features hot reload, native performance, beautiful Material/Cupertino widgets, and 60fps animations.',
    applicationCategory: 'MobileApplication',
    operatingSystem: 'iOS, Android, Web, Windows, macOS, Linux',
    price: '100000',
    rating: 4.9,
    reviewCount: 98,
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
    { name: 'Flutter App Development', url: '/flutter-app-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="Flutter App Development Company"
        subtitle="Cross-Platform Excellence"
        description="Build beautiful, natively compiled applications for iOS, Android, Web & Desktop from a single codebase. Native performance, 60fps animations, faster delivery."
        ctaPrimary={{ text: 'Start Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'View Mobile Services', href: '/mobile-app-development-company' }}
        gradient="purple"
      />

      {/* What is Flutter Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-cyan-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Flutter Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Flutter Development</strong> is the process of building cross-platform applications using Google&apos;s Flutter framework and Dart programming language. A single codebase compiles to native code for iOS, Android, Web, Windows, macOS, and Linux. Flutter uses its own rendering engine (Skia/Impeller) for pixel-perfect UI, 60-120fps animations, and consistent appearance across all platforms without platform-specific code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Flutter app development starting at ₹1,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Single codebase for 6 platforms
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Hot reload for faster development
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  4-24 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  60-120fps smooth animations
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  40% cost savings vs native development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Flutter Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Flutter app development for all your business needs
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

      {/* App Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Flutter Apps We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.type}</h3>
                <ul className="space-y-3">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">▪</span>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Flutter?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flutter App Development Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
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
          <ContactForm serviceName="Flutter App Development" />
        </div>
      </section>
    </main>
  );
}

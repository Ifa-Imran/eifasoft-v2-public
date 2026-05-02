import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobile App Development Company in Agra | iOS Android Apps | EifaSoft',
    description: 'Top-rated mobile app development company in Agra, Uttar Pradesh. Build tourism apps, Taj Mahal guide apps, hotel booking apps, handicraft marketplace apps, and custom iOS & Android solutions. 500+ apps delivered. Starting ₹50,000. Free consultation!',
    canonical: '/agra-mobile-app-development-company',
    keywords: [
      'mobile app development company agra',
      'mobile app development agra',
      'ios app development agra',
      'android app development agra',
      'app developers agra uttar pradesh',
      'best mobile app company agra',
      'tourism app developer agra',
      'hotel booking app agra',
      'handicraft marketplace app agra',
      'taj mahal guide app development',
      'agra app development services',
      'react native developer agra',
      'flutter app development agra',
      'mobile app company agra up',
      'app development mathura',
      'app development firozabad',
      'app development aligarh',
      'app development bharatpur',
      'it company agra',
      'software company agra',
    ],
  });
}

const faqs = [
  {
    question: 'Why choose EifaSoft for mobile app development in Agra?',
    answer: 'EifaSoft has 15+ years of experience delivering mobile apps in Agra. We have built 500+ apps including tourism apps, hotel booking platforms, handicraft marketplace apps, and heritage site guide apps. We understand Agra market (tourism industry, handicrafts, hospitality), provide on-site consultations near Taj Mahal area, competitive pricing starting at ₹50,000, and dedicated support. Perfect for Agra hotels, tour operators, handicraft sellers, and tourism businesses.',
  },
  {
    question: 'Do you develop tourism and hotel booking apps for Agra businesses?',
    answer: 'Yes! Agra is a major tourist destination. We develop: Hotel Apps - Online booking engine, Room showcase, Rate management, Guest reviews, Multi-language support; Tourism Apps - Tour packages, Taj Mahal guide, Heritage sites, Monument tickets, Virtual tours; Travel Apps - Itinerary planning, Transportation booking, Local guides, Restaurant finder; Features - Offline mode, GPS navigation, Payment gateway, Multi-currency. Starting from ₹1,20,000.',
  },
  {
    question: 'Can you create e-commerce apps for Agra handicrafts and marble products?',
    answer: 'Absolutely! Agra is famous for handicrafts. We develop: Handicraft Apps - Product galleries (marble inlay, leather goods), Artisan profiles, Online ordering, International shipping; Marketplace Apps - Multi-vendor platforms, Secure payments, Seller dashboards, Review systems; Catalog Apps - High-quality product images, 360° views, Customization options, Bulk ordering; Features - Multi-language, Currency converter, Shipping calculator. Starting from ₹1,50,000.',
  },
  {
    question: 'What is the cost of mobile app development in Agra?',
    answer: 'Mobile app pricing in Agra: Basic App: ₹50,000 - ₹1,00,000, Tourism App: ₹1,20,000 - ₹3,00,000, Hotel Booking App: ₹1,50,000 - ₹4,00,000, E-Commerce/Handicraft App: ₹1,50,000 - ₹4,00,000, Enterprise App: ₹3,00,000+. All packages include iOS & Android, UI/UX design, API integration, app store deployment, and 3-month support.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Development timeline: Basic App: 6-8 weeks, Tourism App: 12-16 weeks, Enterprise App: 16-24 weeks. We provide weekly updates, milestone delivery, and on-site meetings in Agra. Rush delivery available for urgent Agra projects.',
  },
  {
    question: 'Do you provide app maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, OS updates, feature enhancements, security patches, performance optimization, and technical support.',
  },
  {
    question: 'Will you help with App Store and Play Store submission?',
    answer: 'Absolutely! We handle the complete app store submission process including account setup, metadata optimization, screenshots, description writing, and compliance with store guidelines.',
  },
  {
    question: 'Can you integrate payment gateways in the app?',
    answer: 'Yes, we integrate all major payment gateways including Razorpay, Paytm, PayU, Stripe, and custom payment solutions. We ensure PCI-DSS compliance and secure transaction handling.',
  },
];

export default function MobileAppDevelopmentAgraPage() {
  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Agra'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1767,
      longitude: 78.0081,
    },
    areaServed: [
      { '@type': 'City', name: 'Agra' },
      { '@type': 'City', name: 'Mathura' },
      { '@type': 'City', name: 'Firozabad' },
      { '@type': 'City', name: 'Aligarh' },
      { '@type': 'City', name: 'Bharatpur' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Mobile App Development Company Agra',
    'Professional iOS, Android, and cross-platform mobile app development in Agra. Tourism apps, hotel booking apps, handicraft marketplace solutions.',
    'Agra'
  );

  const productSchema = generateProductSchema(
    'Mobile App Development Package Agra',
    'Complete mobile app development for Agra businesses. Tourism apps, hotel booking platforms, handicraft e-commerce for iOS & Android',
    '50000'
  );

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mobile App Development', url: '/mobile-app-development-company' },
    { name: 'Agra Mobile App Development', url: '/agra-mobile-app-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Mobile App Development Company in Agra"
        subtitle="Tourism Apps | Hotel Booking | Handicraft Marketplace"
        description="Leading mobile app development in Agra. Tourism apps, hotel booking platforms, handicraft e-commerce. 500+ apps delivered. Taj city expertise!"
        ctaPrimary={{ text: 'Start Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'View Our Work', href: '/portfolio' }}
        gradient="purple"
      />

      {/* ── Stats Bar ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Apps Delivered' },
              { value: '15+', label: 'Years in Agra Market' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Expert Developers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-purple-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

      {/* ── Agra-Specific App Use Cases ───────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile Apps Built for Agra&apos;s Key Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agra&apos;s economy is powered by tourism, hospitality, handicrafts, and exports. Our apps are
              purpose-built for these sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏛️',
                title: 'Tourism & Heritage Apps',
                description: 'Taj Mahal guide apps, Agra Fort AR tours, monument ticketing, heritage site trail apps, and virtual tour experiences for domestic and international tourists.',
                tags: ['Taj Mahal Guide', 'Agra Fort Tour', 'Monument Tickets', 'Virtual Heritage'],
              },
              {
                icon: '🏨',
                title: 'Hotel & Hospitality Apps',
                description: 'Hotel booking apps for properties near Taj Mahal, Fatehabad Road, and Sikandra. Real-time room availability, upsell packages, concierge, and guest loyalty apps.',
                tags: ['Room Booking', 'Concierge', 'Loyalty Programs', 'Rate Management'],
              },
              {
                icon: '🎨',
                title: 'Handicraft & Marble Apps',
                description: 'E-commerce apps for Agra marble inlay, leather goods, and Petha sweet exporters. Multi-currency, international shipping, artisan profiles, and B2B wholesale ordering.',
                tags: ['Marble Inlay Shop', 'Leather Goods', 'International Export', 'Artisan Profiles'],
              },
              {
                icon: '🚌',
                title: 'Tour Operator Apps',
                description: 'Golden Triangle tour management apps covering Agra–Delhi–Jaipur. Package management, booking engines, driver tracking, and multi-language guide apps.',
                tags: ['Tour Packages', 'Driver Tracking', 'Multi-Language', 'Golden Triangle'],
              },
              {
                icon: '🛒',
                title: 'Retail & E-Commerce Apps',
                description: 'Shopping apps for Agra’s Sadar Bazaar, Sanjay Place, and Kamla Nagar retailers. Product catalogues, WhatsApp ordering, local delivery tracking, and loyalty rewards.',
                tags: ['Product Catalogue', 'WhatsApp Cart', 'Local Delivery', 'Loyalty Points'],
              },
              {
                icon: '🏫',
                title: 'Education & Coaching Apps',
                description: 'Learning apps for Agra’s coaching institutes, schools near Dayalbagh and Sikandra. Live classes, attendance, fee management, and parent communication portals.',
                tags: ['Live Classes', 'Attendance', 'Fee Management', 'Parent Portal'],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

      {/* ── GEO Coverage ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All Areas of Agra & Nearby Cities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              On-site consultations across Agra. Remote collaboration for all of Uttar Pradesh and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📍</span> Areas We Serve in Agra
              </h3>
              <ul className="space-y-2">
                {['Taj Ganj', 'Sadar Bazaar', 'Sikandra', 'Kamla Nagar', 'Sanjay Place', 'Dayalbagh', 'Fatehabad Road', 'Bodla', 'Agra Cantonment', 'Trans Yamuna'].map((area) => (
                  <li key={area} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🗺️</span> Nearby Cities
              </h3>
              <ul className="space-y-2">
                {['Mathura', 'Vrindavan', 'Firozabad', 'Hathras', 'Etawah', 'Aligarh', 'Bharatpur', 'Fatehpur Sikri', 'Mainpuri', 'Kasganj'].map((city) => (
                  <li key={city} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🤝</span> Service Delivery Options
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'On-site visits across Agra',
                  'Remote collaboration (Zoom)',
                  'Hindi & English support',
                  'WhatsApp project updates',
                  'Weekly progress demos',
                  'Post-launch training in Agra',
                  'Local requirement documentation',
                  'Same-day query response',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* GEO Chip Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['Mobile App Agra', 'App Development Mathura', 'App Development Firozabad', 'App Developer Aligarh', 'App Company Bharatpur', 'iOS App Agra', 'Android App Agra', 'Flutter Developer Agra', 'React Native Agra', 'Tourism App Agra UP', 'Hotel App Agra', 'Handicraft App Agra'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
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
                Get a Free Mobile App Quote in Agra
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your app idea — we respond within 2 business hours. On-site meetings available across Agra.
              </p>
            </div>
            <ContactForm serviceName="Mobile App Development" cityName="Agra" />
          </div>
        </div>
      </section>
    </main>
  );
}

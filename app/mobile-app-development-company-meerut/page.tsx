import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobile App Development Company Meerut | iOS & Android Apps | EifaSoft',
    description: 'Professional mobile app development company in Meerut offering iOS, Android, sports goods apps, manufacturing apps, industrial solutions. 500+ apps delivered. Sports capital expertise. Starting ₹50,000!',
    canonical: '/mobile-app-development-company-meerut',
    keywords: [
      'mobile app development meerut',
      'ios app development meerut',
      'android app meerut',
      'sports app meerut',
      'manufacturing app meerut',
      'meerut app developers',
      'react native app meerut',
      'flutter app development meerut',
      'cricket equipment app meerut',
      'b2b app meerut',
      'ecommerce app meerut',
      'business app meerut',
      'custom mobile app meerut',
      'affordable app development meerut',
      'best app developer meerut',
      'app development company meerut',
      'sports goods app meerut',
      'industrial app meerut',
      'inventory app meerut',
      'app development hapur',
      'scissors industry app meerut',
      'export app meerut'
    ],
  });
}

const faqs = [
  {
    question: 'Why choose EifaSoft for mobile app development in Meerut?',
    answer: 'EifaSoft has 15+ years of experience delivering mobile apps in Meerut. We have built 500+ apps including sports goods catalog apps, manufacturing inventory apps, B2B trading apps, and e-commerce solutions. We understand Meerut market (sports industry, scissors manufacturing, musical instruments), provide on-site consultations, competitive pricing starting at ₹50,000, and dedicated support. Perfect for Meerut sports manufacturers, industrial businesses, and traders.',
  },
  {
    question: 'Can you develop apps for the sports goods industry in Meerut?',
    answer: 'Yes! Meerut is famous for sports goods. We develop: Manufacturer Apps - Product catalogs (cricket bats, sports equipment), Wholesale ordering, B2B portals, Inventory management; Dealer Apps - Stock updates, Order tracking, Price lists, Customer CRM; E-Commerce Apps - Online sports stores, Payment gateway, Shipping integration, Product reviews; Features - High-quality product images, Specifications, Size charts, Bulk ordering. Starting from ₹1,20,000.',
  },
  {
    question: 'Do you create manufacturing and industrial apps for Meerut businesses?',
    answer: 'Absolutely! We specialize in: Manufacturing Apps - Production tracking, Quality control, Inventory management, Order processing; Industrial Apps - Equipment monitoring, Maintenance scheduling, Worker management, Safety compliance; B2B Apps - Supplier portals, Wholesale ordering, Invoice management, Payment tracking; Perfect for Meerut scissors industry, musical instruments, and manufacturing units. Starting from ₹1,00,000.',
  },
  {
    question: 'What is the cost of mobile app development in Meerut?',
    answer: 'Mobile app pricing in Meerut: Basic App: ₹50,000 - ₹1,00,000, Sports Catalog App: ₹1,20,000 - ₹3,00,000, Manufacturing App: ₹1,00,000 - ₹2,50,000, E-Commerce App: ₹1,50,000 - ₹4,00,000, Enterprise App: ₹3,00,000+. All packages include iOS & Android, UI/UX design, API integration, app store deployment, and 3-month support.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Development timeline: Basic App: 6-8 weeks, Sports Catalog App: 10-14 weeks, Manufacturing App: 12-16 weeks, Enterprise App: 16-24 weeks. We provide weekly updates, milestone delivery, on-site meetings in Meerut. Rush delivery available.',
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

export default function MobileAppDevelopmentMeerutPage() {
  const serviceSchema = generateServiceSchema(
    'Mobile App Development Company Meerut',
    'Professional iOS, Android, and cross-platform mobile app development in Meerut. Sports goods apps, manufacturing apps, industrial solutions.',
    'Meerut'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Meerut'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.9845,
      longitude: 77.7064,
    },
    areaServed: [
      { '@type': 'City', name: 'Meerut' },
      { '@type': 'City', name: 'Hapur' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Bulandshahr' },
      { '@type': 'City', name: 'Muzaffarnagar' },
      { '@type': 'City', name: 'Baghpat' },
    ],
  };

  const productSchema = generateProductSchema(
    'Mobile App Development Package Meerut',
    'Complete mobile app development for Meerut businesses. Sports goods catalog apps, manufacturing solutions, B2B trading apps for iOS & Android',
    '50000'
  );

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mobile App Development', url: '/mobile-app-development-company' },
    { name: 'Meerut Mobile App Development', url: '/mobile-app-development-company-meerut' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Mobile App Development Company in Meerut"
        subtitle="Sports Goods Apps | Manufacturing Apps | Industrial Solutions"
        description="Leading mobile app development in Meerut. Sports goods catalog apps, manufacturing solutions, industrial apps. 500+ apps delivered. Starting ₹50,000!"
        gradient="purple"
      />

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

      {/* Local Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Coverage Across Meerut</h2>
          <p className="text-lg text-gray-600">Serving sports goods manufacturers, industrial businesses and traders across Meerut and the Western UP region</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Meerut Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Pallavpuram</li>
              <li>• Shastri Nagar</li>
              <li>• Garh Road</li>
              <li>• Begum Bridge</li>
              <li>• Hapur Road</li>
              <li>• Partapur</li>
              <li>• Mawana Road</li>
              <li>• Cantonment</li>
              <li>• Civil Lines</li>
              <li>• Modipuram</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby UP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Hapur</li>
              <li>• Ghaziabad</li>
              <li>• Bulandshahr</li>
              <li>• Muzaffarnagar</li>
              <li>• Baghpat</li>
              <li>• Modinagar</li>
              <li>• Sahibabad</li>
              <li>• Noida</li>
              <li>• Greater Noida</li>
              <li>• Shamli</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site meetings in Meerut</li>
              <li>• Remote project management</li>
              <li>• WhatsApp project updates</li>
              <li>• Post-launch app support</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'Mobile App Meerut', 'Sports Goods App Meerut', 'Cricket Equipment App Meerut',
            'Manufacturing App Meerut', 'B2B Trading App Meerut', 'Android App Meerut',
            'iOS App Meerut', 'App Developer Pallavpuram', 'E-Commerce App Meerut',
            'React Native Meerut', 'Scissors Industry App Meerut', 'App Development Hapur'
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
            <ContactForm serviceName="Mobile App Development" cityName="Meerut" />
          </div>
        </div>
      </section>
    </main>
  );
}

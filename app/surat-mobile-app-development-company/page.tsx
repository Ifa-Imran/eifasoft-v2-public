import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Mobile App Development Company in Surat | Android & iOS Apps | EifaSoft',
    description: 'Top mobile app development company in Surat, Gujarat. Android, iOS, Flutter, React Native apps for diamond industry, textile traders, e-commerce, and enterprises. 500+ apps delivered. Starting ₹75,000. Free consultation!',
    canonical: '/surat-mobile-app-development-company',
    keywords: [
      'mobile app development company surat',
      'app development surat',
      'android app development surat',
      'ios app development surat',
      'flutter app development surat',
      'react native developer surat',
      'diamond industry app surat',
      'textile app surat',
      'ecommerce app surat',
      'business app surat',
      'app developer surat gujarat',
      'mobile app company surat',
      'startup app development surat',
      'custom app development surat',
      'on demand app surat',
      'logistics app surat',
      'b2b app surat',
      'app development varachha',
      'app development adajan',
      'mobile developer surat',
      'app development gujarat',
      'ios android app surat',
    ],
  });
}

export default function SuratMobileAppDevelopmentPage() {
  const services = [
    {
      icon: '📱',
      title: 'Android App Development',
      description: 'Native Android apps for Surat businesses using Kotlin and Java with Material Design',
      price: '₹75,000',
      features: ['Kotlin/Java development', 'Material Design UI', 'Google Play Store launch', 'Push notifications'],
    },
    {
      icon: '🍎',
      title: 'iOS App Development',
      description: 'Premium iPhone & iPad apps for Surat enterprises with App Store deployment',
      price: '₹85,000',
      features: ['Swift/SwiftUI', 'Apple App Store launch', 'iOS design guidelines', 'iCloud integration'],
    },
    {
      icon: '🔄',
      title: 'Cross-Platform Apps',
      description: 'Flutter and React Native apps — one codebase for Android & iOS, cost-effective for Surat SMEs',
      price: '₹1,25,000',
      features: ['Flutter & React Native', 'Single codebase', 'Both store launches', 'Faster time to market'],
    },
    {
      icon: '💎',
      title: 'Diamond & Textile Trade Apps',
      description: 'Specialized B2B and B2C apps for Surat\'s diamond, gem, and textile export businesses',
      price: '₹1,50,000',
      features: ['Diamond catalog apps', 'Textile order management', 'Export documentation', 'B2B buyer portals'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Apps',
      description: 'Complete shopping apps for Surat retailers, wholesalers, and online traders',
      price: '₹1,00,000',
      features: ['Product catalog', 'Payment gateway', 'Order tracking', 'Inventory management'],
    },
    {
      icon: '🏢',
      title: 'Enterprise Business Apps',
      description: 'CRM, ERP, field force, and logistics apps for large Surat businesses and industrial units',
      price: '₹3,00,000',
      features: ['CRM & ERP apps', 'Field force automation', 'Logistics tracking', 'Analytics dashboards'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Apps Delivered', value: '500+' },
    { label: 'Gujarat Clients', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '💎 Diamond & Gems Industry',
      description: 'Surat processes 90% of the world\'s diamonds. We build diamond catalog apps, inventory management, B2B buyer portals, and auction platforms for Surat\'s diamond traders.',
      features: ['Diamond catalog apps', 'B2B buyer portals', 'Inventory & valuation', 'Auction & bidding apps'],
    },
    {
      title: '🧵 Textile & Fashion Industry',
      description: 'Surat is India\'s textile hub. We develop order management apps, fabric catalog apps, and wholesale trading platforms for textile manufacturers and exporters.',
      features: ['Fabric catalog apps', 'Wholesale order apps', 'Production tracking', 'Export management'],
    },
    {
      title: '🏗️ Chemical & Petrochemical',
      description: 'Apps for Surat\'s chemical plants and Hazira industrial corridor — safety management, inventory, and supply chain mobile solutions.',
      features: ['Safety compliance apps', 'Inventory tracking', 'Supply chain apps', 'Plant management'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Shopping apps, multi-vendor marketplaces, and retail management apps for Surat\'s thriving retail and export-oriented businesses.',
      features: ['Shopping apps', 'Multi-vendor platforms', 'Payment integration', 'Delivery tracking'],
    },
    {
      title: '🚚 Logistics & Supply Chain',
      description: 'Fleet tracking, warehouse management, and last-mile delivery apps for Surat\'s logistics and transport businesses.',
      features: ['Fleet tracking apps', 'Warehouse management', 'Last-mile delivery', 'Route optimization'],
    },
    {
      title: '🏦 Finance & NBFC',
      description: 'Loan management apps, digital payment apps, and fintech solutions for Surat\'s NBFCs, cooperative banks, and financial services companies.',
      features: ['Loan management apps', 'Digital KYC', 'Payment wallets', 'Investment platforms'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for mobile app development in Surat?',
      answer: 'EifaSoft is a leading mobile app development company with 15+ years of experience and 500+ successful apps delivered. We have deep expertise in Surat\'s key industries — diamond, textile, chemical, and logistics. We offer: Local support in Surat, Competitive pricing starting ₹75,000, Gujarati & English communication, Fast delivery timelines, Post-launch maintenance. Our developers specialise in Android, iOS, Flutter, and React Native, ensuring top-quality apps for Gujarat businesses.',
    },
    {
      question: 'Do you develop apps for the diamond and textile industry in Surat?',
      answer: 'Yes! We specialise in apps for Surat\'s core industries: Diamond Apps — Diamond catalog, B2B buyer portal, Inventory & valuation, Auction/bidding platforms, Export documentation; Textile Apps — Fabric catalog, Wholesale order management, Production tracking, Sample management; Features — Gujarati language support, GST-ready invoicing, Multi-currency, Export compliance. Starting from ₹1,50,000.',
    },
    {
      question: 'How much does mobile app development cost in Surat?',
      answer: 'Mobile app development pricing in Surat: Single Platform (Android/iOS): ₹75,000–₹2,00,000, Cross-Platform (Flutter/React Native): ₹1,25,000–₹3,00,000, E-Commerce App: ₹1,00,000–₹4,00,000, Diamond/Textile Trade App: ₹1,50,000–₹6,00,000, Enterprise App: ₹3,00,000–₹15,00,000. All packages include UI/UX design, testing, and store launch. Flexible payment plans for Surat SMEs.',
    },
    {
      question: 'What platforms do you develop apps for in Surat?',
      answer: 'We develop for all platforms: Android — Native Kotlin/Java, Android 5.0+ support, Google Play Store; iOS — Native Swift/SwiftUI, iOS 14+, Apple App Store; Cross-Platform — Flutter (Google), React Native (Meta), Ionic; Progressive Web Apps (PWA) — Works on all devices via browser. We recommend the right platform based on your target audience and budget.',
    },
    {
      question: 'Do you develop B2B apps for Surat\'s export businesses?',
      answer: 'Yes! We specialise in B2B mobile apps for Surat exporters: Features — Multi-currency pricing, International shipping integration, Export documentation, GST & customs compliance, Multi-language (English, Gujarati, Hindi); Platforms — iOS + Android, web admin panel; Industries — Diamond, textile, chemical, handicraft export. B2B apps starting from ₹2,00,000.',
    },
    {
      question: 'Can you build apps with Gujarati language support?',
      answer: 'Absolutely! Multi-language app development: Languages — Gujarati, Hindi, English; Features — Unicode Gujarati font support, Language switcher, Localised content and date formats, Regional number formatting; Platform Support — Android and iOS both support Gujarati; Benefits — Better user adoption among local Surat traders. Multilingual support from ₹15,000 additional. Gujarati UI especially popular for retail and trading apps.',
    },
    {
      question: 'How long does it take to develop a mobile app in Surat?',
      answer: 'App development timelines: Basic App (5–8 screens): 4–6 weeks, Standard App (10–15 screens): 8–12 weeks, Diamond/Textile Trade App: 10–16 weeks, E-Commerce App: 8–12 weeks, Enterprise App: 16–24 weeks. We provide weekly progress updates, demo builds, and on-site meetings in Surat. Rush delivery available for time-sensitive projects.',
    },
    {
      question: 'Do you integrate payment gateways for Surat businesses?',
      answer: 'Yes! Complete payment integration: Payment Gateways — Razorpay, PayU, CCAvenue, Paytm, PhonePe, Google Pay; Features — UPI integration, Wallet support, EMI options, International payments (for exporters); Security — PCI-DSS compliant, SSL encryption, 3D Secure; GST — Automated GST invoicing, Tax reports. All major Indian payment gateways included. International payment (Stripe, PayPal) available for export businesses.',
    },
    {
      question: 'Do you provide app maintenance and support after launch?',
      answer: 'Yes, comprehensive post-launch support: Free Support — 3 months bug fixes and minor updates; AMC Plans — Starting ₹15,000/year for ongoing maintenance; Services — OS version updates, Security patches, Performance optimisation, New feature additions, App store updates; Response Time — 24-hour bug fix guarantee, 4-hour critical issue response. Dedicated account manager for Surat clients.',
    },
    {
      question: 'Which areas of Surat do you serve?',
      answer: 'We serve all areas of Surat: Ring Road, Varachha, Adajan, Katargam, Athwalines, City Light, Vesu, Pal, Udhna, Sachin GIDC. Nearby Gujarat cities — Navsari, Bardoli, Ankleshwar, Bharuch, Valsad. On-site consultations available across Surat with dedicated Gujarati-speaking account managers. Remote delivery across Gujarat and India.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Surat'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1702,
      longitude: 72.8311,
    },
    areaServed: [
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Navsari' },
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Bardoli' },
      { '@type': 'City', name: 'Ankleshwar' },
      { '@type': 'City', name: 'Valsad' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Mobile App Development Company Surat',
    'Professional mobile app development in Surat — Android, iOS, Flutter, React Native apps for diamond industry, textile traders, e-commerce, and enterprises.',
    'Surat'
  );

  const productSchema = generateProductSchema(
    'Mobile App Development Services Surat',
    'Custom Android and iOS app development for Surat businesses including diamond apps, textile trade apps, e-commerce, and enterprise solutions. Starting ₹75,000.',
    '75000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mobile App Development', url: '/mobile-app-development-company' },
    { name: 'Surat Mobile App Development', url: '/surat-mobile-app-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Mobile App Development Company in Surat"
        subtitle="Diamond Apps | Textile Apps | E-Commerce | Enterprise"
        description="Leading mobile app developers in Surat, Gujarat. Android, iOS, Flutter & React Native apps for diamond traders, textile exporters, e-commerce, and enterprises. 500+ apps delivered. Starting ₹75,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Development Services in Surat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete app solutions for Surat&apos;s diamond, textile, and business sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-600 mb-4">Starting {service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Surat?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Surat and Gujarat</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {whyChooseUs.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Specialised mobile apps for Surat&apos;s key sectors
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All Areas of Surat &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Surat. Remote delivery across Gujarat and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Surat</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Ring Road', 'Varachha', 'Adajan', 'Katargam', 'Athwalines', 'City Light', 'Vesu', 'Pal', 'Udhna', 'Sachin GIDC'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Gujarat Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Navsari', 'Bardoli', 'Ankleshwar', 'Bharuch', 'Valsad', 'Vyara', 'Mandvi', 'Kim', 'Tapi', 'Narmada'].map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{city}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🤝</span> Service Delivery</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'On-site consultation in Surat',
                  'Gujarati & English support',
                  'Remote development teams',
                  'Dedicated project managers',
                  '24/7 WhatsApp support',
                  'Training & documentation',
                  'Monthly AMC plans',
                  'Fast app store deployment',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GEO Chip Tags */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {[
              'Mobile App Development Surat', 'Diamond App Surat', 'Textile App Surat',
              'Flutter Developer Surat', 'Android App Surat', 'iOS App Surat',
              'E-Commerce App Surat', 'B2B App Surat Gujarat', 'App Developer Varachha',
              'Logistics App Surat', 'Startup App Surat', 'App Development Gujarat',
            ].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent App Development Pricing
              </h2>
              <p className="text-xl text-gray-600">Affordable packages for Surat businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Platform</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹75,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Android OR iOS</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>5–8 screens</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>API integration</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Store launch</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  BEST VALUE
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform</h3>
                <div className="text-4xl font-bold text-white mb-6">₹1,25,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Android + iOS</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>15 screens</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Backend & admin panel</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Both store launches</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>3 months support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise App</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹3,00,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Complex features</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited screens</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Advanced backend</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Third-party integrations</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Dedicated team</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Contact Form */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get a Free App Quote in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s build your mobile app in Surat
              </p>
            </div>
            <ContactForm serviceName="Mobile App Development" cityName="Surat" />
          </div>
        </section>
      </div>
    </>
  );
}

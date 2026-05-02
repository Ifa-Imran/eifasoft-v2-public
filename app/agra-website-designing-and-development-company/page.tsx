import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing and Development Company in Agra | Web Design Services | EifaSoft',
    description: 'Leading website designing and development company in Agra. Responsive web design, e-commerce websites, WordPress development for tourism, hospitality, and retail businesses. Starting ₹15,000. Free consultation!',
    canonical: '/agra-website-designing-and-development-company',
    keywords: [
      'website designing company agra',
      'web development agra',
      'website design agra',
      'web designing services agra',
      'agra website developers',
      'ecommerce website agra',
      'wordpress development agra',
      'hotel website design agra',
      'tourism website agra',
      'responsive web design agra',
      'website company agra',
      'web design services agra',
      'agra web designers',
      'website development company agra',
      'website designing company agra uttar pradesh',
      'handicraft ecommerce website agra',
      'leather goods website agra',
      'web design mathura',
      'web design firozabad',
      'web design aligarh',
      'website development bharatpur',
      'best web design company agra',
    ]
  });
}

export default function AgraWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏨',
      title: 'Hotel & Tourism Websites',
      description: 'Stunning websites for hotels, resorts, and tourism businesses',
      price: '₹35,000',
      features: ['Online booking system', 'Room/package showcase', 'Photo galleries', 'Multi-language support']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Websites',
      description: 'Complete online stores for handicrafts, marble, and leather products',
      price: '₹60,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory management', 'Order tracking']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly business websites for all devices',
      price: '₹15,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'Cross-browser compatible']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites with WordPress',
      price: '₹25,000',
      features: ['Custom themes', 'Plugin integration', 'Content management', 'Training included']
    },
    {
      icon: '🍽️',
      title: 'Restaurant Websites',
      description: 'Professional websites for restaurants and cafes',
      price: '₹20,000',
      features: ['Menu showcase', 'Online ordering', 'Table reservation', 'Location maps']
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals and company websites',
      price: '₹30,000',
      features: ['Company profile', 'Service pages', 'Contact forms', 'Blog section']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Tourism Projects', value: '100+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏨 Tourism & Hospitality',
      description: 'Specialized websites for Agra\'s booming tourism sector including hotels, travel agencies, and tour operators.',
      features: ['Online booking engines', 'Tour package showcases', 'Multi-currency support', 'Review integration']
    },
    {
      title: '🎨 Handicrafts & Marble',
      description: 'E-commerce solutions for Agra\'s famous marble and handicraft businesses to sell globally to tourists and wholesale buyers.',
      features: ['Product catalogs with images', 'Bulk order systems', 'Export-focused features', 'Artisan profiles']
    },
    {
      title: '🍽️ Restaurants & Retail',
      description: 'Digital presence for restaurants, cafes, and retail shops serving Agra\'s tourists and local customers.',
      features: ['Online menus', 'Order management', 'Store locators', 'Promotional campaigns']
    },
    {
      title: '👟 Leather Goods & Export',
      description: 'Professional websites for Agra\'s leather footwear and accessories exporters with B2B catalogues and wholesale inquiry systems.',
      features: ['B2B product catalogue', 'Wholesale inquiry forms', 'Export compliance pages', 'Multi-language support']
    },
    {
      title: '🏫 Education & Coaching',
      description: 'Websites and portals for Agra coaching institutes, schools, and colleges with student admission and fee payment features.',
      features: ['Online admission forms', 'Fee payment gateway', 'Course information', 'Student login portal']
    },
    {
      title: '🏗️ Real Estate & Builders',
      description: 'Property listing websites for Agra real estate agents, builders, and housing societies with virtual tours and lead capture.',
      features: ['Property listings', 'Virtual tour integration', 'Lead capture forms', 'EMI calculators']
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website design in Agra?',
      answer: 'EifaSoft is a leading website designing company serving Agra with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Agra\'s tourism, hospitality, handicraft, and retail businesses. Our expertise includes hotel booking websites, e-commerce platforms for marble and leather products, and SEO-optimized sites that attract tourists. We understand the Agra market and provide local support, competitive pricing, and websites that showcase your business to both domestic and international audiences.'
    },
    {
      question: 'Do you create hotel booking websites for Agra hotels and resorts?',
      answer: 'Yes! We specialize in hotel and resort websites for Agra\'s tourism industry. Our solutions include: Online Booking System (real-time availability, instant confirmation), Room Showcase (HD photos, 360° tours, detailed amenities), Multi-language Support (English, Hindi, and other international languages), Payment Gateway Integration (credit cards, UPI, international payments), Review Management (TripAdvisor, Google reviews), Package Deals (tour packages, special offers), Mobile-Responsive Design (perfect on all devices). Perfect for hotels near Taj Mahal, Agra Fort, and other tourist areas. Pricing starts at ₹35,000 with booking system integration.'
    },
    {
      question: 'Can you build e-commerce websites for Agra handicraft and marble businesses?',
      answer: 'Absolutely! Agra is famous for marble work, handicrafts, and leather goods. We create e-commerce websites that help you sell globally: Features include - Product Catalog (unlimited products with HD images), Bulk Order System (for wholesale buyers), Payment Gateway (domestic and international), Shipping Integration (domestic and export shipping), Multi-currency Support (USD, EUR, GBP, INR), Artisan Stories (showcase craftsmen), SEO Optimization (rank for "Agra marble" searches), Mobile Shopping (70% customers browse on mobile). Perfect for marble manufacturers, handicraft sellers, leather goods exporters. Pricing from ₹60,000 with full e-commerce functionality.'
    },
    {
      question: 'What is the cost of website designing in Agra?',
      answer: 'Website design pricing in Agra: Basic Business Website (5-7 pages): ₹15,000 - ₹30,000, Restaurant/Cafe Website: ₹20,000 - ₹40,000, WordPress Website: ₹25,000 - ₹50,000, Corporate Website (10-15 pages): ₹30,000 - ₹70,000, Hotel/Tourism Website: ₹35,000 - ₹1,50,000 (with booking system), E-Commerce Website: ₹60,000 - ₹2,00,000 (full online store). All packages include responsive design, basic SEO, contact forms, and 3-month free support. No hidden costs. Custom quotes available for large projects. Payment plans available for Agra businesses.'
    },
    {
      question: 'Do you provide SEO services to rank on Google for Agra tourism searches?',
      answer: 'Yes! SEO is crucial for Agra tourism businesses. Our SEO services include: Local SEO - Rank for "hotels near Taj Mahal", "Agra tour packages", "restaurants in Agra"; Google My Business optimization; Tourism Keywords - Target tourist searches, seasonal optimization (peak tourist seasons), location-based targeting; Content Marketing - Blog posts, travel guides, attraction information; Technical SEO - Fast loading, mobile optimization, schema markup; Link Building - Tourism directories, travel blogs, local citations. Basic SEO included with all websites. Advanced SEO campaigns from ₹10,000/month. Help your Agra business get discovered by tourists searching online!'
    },
    {
      question: 'Can you integrate online payment systems for international customers?',
      answer: 'Yes! We integrate payment gateways suitable for Agra\'s tourism and export businesses: Domestic Payments - Razorpay, PayU, Paytm, PhonePe, Google Pay, UPI; International Payments - Credit/Debit cards (Visa, MasterCard, Amex), PayPal integration, Stripe for global transactions, Multi-currency support; Features - Secure HTTPS/SSL, PCI DSS compliance, Refund management, Payment tracking, Invoice generation. Perfect for hotels accepting advance bookings from international tourists, handicraft exporters, and online stores. We handle complete setup and testing. Transaction fees vary by gateway (typically 2-3%).'
    },
    {
      question: 'Do all your websites work perfectly on mobile phones and tablets?',
      answer: 'Yes, 100% mobile responsive! This is critical for Agra tourism websites as 75%+ tourists search and book on smartphones. Our mobile-optimized websites: Display perfectly on all screen sizes (phones, tablets, desktops), Touch-friendly navigation, Fast loading on 3G/4G networks, Google mobile-first indexing compliant, Work across all browsers (Chrome, Safari, Firefox), Booking forms optimized for mobile, Click-to-call phone numbers, WhatsApp chat integration. We test on real mobile devices before delivery. Mobile optimization is included in all packages at no extra cost.'
    },
    {
      question: 'How long does it take to build a website in Agra?',
      answer: 'Website development timeline for Agra clients: Basic Business Website (5-7 pages): 1-2 weeks, Restaurant/Corporate Website (10-15 pages): 2-4 weeks, WordPress Website: 2-3 weeks, Hotel Website with Booking: 4-6 weeks, E-Commerce Website: 4-8 weeks, Custom Web Application: 2-4 months. Timeline depends on content readiness, design approvals, and feature complexity. We provide regular updates throughout development. Rush delivery available for urgent Agra projects (additional charges apply). Free timeline estimation during consultation. Most Agra hotel websites completed before peak tourist season.'
    },
    {
      question: 'Do you provide domain registration and hosting services?',
      answer: 'Yes, complete domain and hosting solutions: Domain Registration - .com, .in, .co.in domains (₹500-800/year), Premium domains available, Domain transfer assistance, Free WHOIS privacy; Web Hosting - Shared Hosting ₹2,000/year (suitable for small websites), VPS Hosting ₹6,000/year (for high-traffic tourism sites), Dedicated Server ₹15,000/month (for large e-commerce); Additional Services - Business Email (yourname@yourhotel.com), SSL Certificate (HTTPS security for online payments), Daily Automatic Backups, 99.9% Uptime Guarantee, India-based servers (faster for local users), Free technical support. We handle all setup and management.'
    },
    {
      question: 'Which areas of Agra do you serve?',
      answer: 'We serve all areas of Agra including: Taj Ganj (hotels, restaurants near Taj Mahal), Sadar Bazaar (retail shops, handicraft businesses), Sikandra (corporate offices, educational institutions), Agra Cantonment (government offices, defense establishments), Kamla Nagar (commercial businesses), Sanjay Place (shopping centers, restaurants), Dayalbagh (manufacturing units), Fatehabad Road (hotels, resorts), Nearby areas - Fatehpur Sikri, Mathura, Bharatpur. We provide on-site consultations in Agra or virtual meetings. Local support available for urgent issues. Serving Agra businesses with web solutions since 2008.'
    }
  ];

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
      { '@type': 'City', name: 'Etawah' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Agra',
    'Professional website design and development services in Agra including tourism websites, hotel booking systems, e-commerce for handicrafts, WordPress development, and responsive web design. Expert team serving Agra businesses.',
    'Agra'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Agra',
    'Custom website design for Agra tourism, hospitality, handicraft, and retail businesses. Mobile-responsive, SEO-optimized websites starting from ₹15,000 with booking and e-commerce features.',
    '35000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Agra Website Designing', url: '/agra-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing & Development Company in Agra"
        subtitle="Tourism, Hospitality & E-Commerce Web Solutions"
        description="Leading website design company in Agra specializing in hotel booking websites, tourism portals, and e-commerce for handicrafts. 500+ websites delivered. Mobile-responsive, SEO-optimized websites starting ₹15,000!"
        gradient="purple"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Agra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized web solutions for tourism, hospitality, and retail businesses
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft for Agra Businesses?</h2>
            <p className="text-xl text-purple-100">Trusted by tourism and retail businesses across Agra</p>
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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Website Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for a successful online presence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">📱 Mobile Optimized</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Responsive design</li>
              <li>✓ Touch-friendly</li>
              <li>✓ Fast loading</li>
              <li>✓ All devices</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔍 SEO Ready</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Google friendly</li>
              <li>✓ Meta optimization</li>
              <li>✓ Fast page speed</li>
              <li>✓ Schema markup</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🎨 Modern Design</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Professional look</li>
              <li>✓ Custom layouts</li>
              <li>✓ HD images</li>
              <li>✓ Brand colors</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔒 Secure & Fast</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ SSL certificate</li>
              <li>✓ Fast hosting</li>
              <li>✓ Daily backups</li>
              <li>✓ 99.9% uptime</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve in Agra
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for key Agra business sectors
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
            Serving All Areas of Agra &amp; Nearby Cities
          </h2>
          <p className="text-xl text-gray-600">
            On-site consultations across Agra. Remote delivery across UP and India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Agra</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Taj Ganj', 'Sadar Bazaar', 'Sikandra', 'Kamla Nagar', 'Sanjay Place', 'Dayalbagh', 'Fatehabad Road', 'Bodla', 'Agra Cantonment', 'Trans Yamuna Colony'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Mathura', 'Vrindavan', 'Firozabad', 'Hathras', 'Aligarh', 'Etawah', 'Bharatpur', 'Fatehpur Sikri', 'Mainpuri', 'Kasganj'].map((city) => (
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
                'On-site design consultation',
                'Remote development teams',
                'Dedicated project managers',
                '24/7 WhatsApp support',
                'Hindi & English communication',
                'Training & handover included',
                'Weekly progress reviews',
                'AMC & maintenance plans',
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
            'Web Design Agra', 'Website Development Mathura', 'Web Design Firozabad',
            'Website Company Agra UP', 'Hotel Website Agra', 'Tourism Website Agra',
            'Ecommerce Website Agra', 'WordPress Development Agra', 'Web Design Aligarh',
            'Handicraft Website Agra', 'Leather Goods Website Agra', 'Website Development Bharatpur',
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
              Transparent Pricing for Agra Businesses
            </h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Website</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>5-7 pages</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Contact form</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic SEO</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3 months support</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Website</h3>
              <div className="text-4xl font-bold text-white mb-6">₹45,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>10-15 pages</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Premium design</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>WordPress CMS</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Advanced SEO</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Blog section</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹90,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Inventory system</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Order tracking</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>12 months support</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Training included</span>
                </li>
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
              Get a Free Website Quote in Agra
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss your website project in Agra
            </p>
          </div>
          <ContactForm serviceName="Website Design & Development" cityName="Agra" />
        </div>
      </section>
    </div>
    </>
  );
}

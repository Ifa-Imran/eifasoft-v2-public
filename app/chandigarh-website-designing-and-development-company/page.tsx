import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Chandigarh | Web Development Punjab | EifaSoft',
    description: 'Top-rated website designing and development company in Chandigarh, Punjab. Responsive web design, e-commerce, WordPress, corporate portals for Tricity businesses. 500+ websites delivered. Serving Chandigarh, Mohali, Panchkula, Ambala & across Punjab. Starting ₹15,000. Free consultation!',
    canonical: '/chandigarh-website-designing-and-development-company',
    keywords: [
      'website designing company chandigarh',
      'web development chandigarh',
      'website design chandigarh',
      'web designing services chandigarh',
      'chandigarh web designers',
      'ecommerce website chandigarh',
      'wordpress development chandigarh',
      'responsive web design chandigarh',
      'website company chandigarh',
      'web design services chandigarh punjab',
      'corporate website chandigarh',
      'startup website chandigarh',
      'website designing company chandigarh punjab haryana',
      'best web design company chandigarh',
      'web design mohali',
      'web design panchkula',
      'web design ambala',
      'web design ludhiana',
      'website development tricity chandigarh',
      'it park website chandigarh',
      'seo website chandigarh',
      'website company tricity',
    ],
  });
}

export default function ChandigarhWebsiteDesigningPage() {
  const services = [
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Stunning, mobile-first websites for Chandigarh businesses across all industries',
      price: '₹15,000',
      features: ['Modern UI/UX', 'Mobile-first design', 'Brand-aligned visuals', 'Fast loading'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores for Punjab retail, agri-products, and industrial goods',
      price: '₹55,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory system', 'Order tracking'],
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites for businesses, blogs, and institutions',
      price: '₹22,000',
      features: ['Custom themes', 'Plugin setup', 'Content management', 'Training included'],
    },
    {
      icon: '💼',
      title: 'Corporate Websites',
      description: 'Professional portals for Chandigarh IT companies, startups, and enterprises',
      price: '₹30,000',
      features: ['Company profile', 'Service pages', 'Contact forms', 'Blog section'],
    },
    {
      icon: '🎓',
      title: 'Educational Websites',
      description: 'Portals for Chandigarh universities, colleges, and coaching institutes',
      price: '₹28,000',
      features: ['Admission forms', 'Student portal', 'Fee payment', 'Result publishing'],
    },
    {
      icon: '🏨',
      title: 'Hotel & Restaurant Websites',
      description: 'Hospitality websites for Chandigarh hotels, resorts, and restaurant chains',
      price: '₹25,000',
      features: ['Room booking', 'Menu showcase', 'Photo galleries', 'Review integration'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Tricity Clients', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🏢 IT & Tech Startups',
      description: 'High-performance corporate and product websites for Chandigarh IT Park and Mohali Phase 8 tech startups and SaaS companies.',
      features: ['Product landing pages', 'Developer blogs', 'Career portals', 'Investor pages'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Websites and portals for Chandigarh universities, colleges, and the city\'s prominent competitive-exam coaching institutes.',
      features: ['Online admissions', 'Course listings', 'Student portals', 'Fee payment'],
    },
    {
      title: '🏥 Healthcare & Clinics',
      description: 'Professional websites for Chandigarh hospitals, PGI-affiliated clinics, diagnostic centres, and wellness brands.',
      features: ['Doctor profiles', 'Online appointments', 'Service listings', 'Patient testimonials'],
    },
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'Corporate and export-facing websites for Chandigarh Industrial Area manufacturers, exporters, and B2B suppliers.',
      features: ['Product catalogue', 'B2B inquiry forms', 'Export certifications', 'Dealer locator'],
    },
    {
      title: '🏨 Hotels & Hospitality',
      description: 'Booking-enabled websites for Chandigarh hotels, resorts, restaurants, and wedding venues in the Tricity region.',
      features: ['Online booking', 'Room showcase', 'Menu & pricing', 'Gallery & reviews'],
    },
    {
      title: '🏗️ Real Estate & Builders',
      description: 'Property listing websites for Chandigarh and Mohali builders, real estate agents, and housing society projects.',
      features: ['Property listings', 'Virtual tours', 'Lead capture forms', 'EMI calculators'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Chandigarh?',
      answer: 'EifaSoft is a leading website designing company serving Chandigarh and the Tricity (Mohali, Panchkula) with 15+ years of experience and 500+ successful websites. We specialize in websites for IT startups in Chandigarh IT Park, educational institutions, healthcare providers, hotels, and manufacturing businesses. We offer local support, competitive pricing starting at ₹15,000, SEO-optimized websites, and fast delivery.',
    },
    {
      question: 'Do you serve businesses in Mohali and Panchkula as well?',
      answer: 'Yes! We serve the entire Tricity — Chandigarh, Mohali (SAS Nagar), and Panchkula — along with Zirakpur, Ambala, Ludhiana, and Jalandhar. On-site consultations available across the Tricity region. We have designed websites for IT startups in Mohali Phase 8, manufacturing units in Panchkula Industrial Area, and retail businesses across Chandigarh sectors.',
    },
    {
      question: 'Can you build e-commerce websites for Punjab businesses?',
      answer: 'Absolutely! We build complete e-commerce solutions for Punjab businesses including retail stores, agri-products, industrial goods, and handicrafts. Features include product catalogs, payment gateway integration (Razorpay, Paytm, Stripe), inventory management, GST billing, shipping integration, and mobile-responsive design. E-commerce websites start from ₹55,000 with full functionality.',
    },
    {
      question: 'What is the cost of website designing in Chandigarh?',
      answer: 'Website design pricing in Chandigarh: Basic Business Website (5-7 pages): ₹15,000–₹28,000; WordPress Website: ₹22,000–₹45,000; Educational Website: ₹28,000–₹80,000; Corporate Website (10-15 pages): ₹30,000–₹70,000; Hotel/Hospitality Website: ₹25,000–₹1,00,000; E-Commerce Website: ₹55,000–₹2,00,000. All packages include responsive design, basic SEO, contact forms, and 3-month free support.',
    },
    {
      question: 'Do you create websites for startups in Chandigarh IT Park and Mohali?',
      answer: 'Yes! We specialize in startup websites for Chandigarh IT Park, Mohali Phase 8, and Rajiv Gandhi IT Park. Our startup packages include product landing pages, SaaS product sites, developer blogs, career portals, investor-facing pages, and marketing websites — all SEO-optimized and performance-tuned. Startup packages from ₹30,000.',
    },
    {
      question: 'Do you provide SEO services to rank on Google for Chandigarh searches?',
      answer: 'Yes! Our SEO services include Local SEO for Chandigarh and Tricity, Google My Business optimization, on-page SEO (meta tags, schema markup, page speed), technical SEO (core web vitals, mobile optimization), content marketing, and link building. Basic SEO is included with all websites. Advanced SEO campaigns from ₹10,000/month to rank for competitive Chandigarh searches.',
    },
    {
      question: 'Are all websites fully mobile-responsive?',
      answer: 'Yes, 100% mobile-responsive! All our websites are built mobile-first and tested on real devices. This is critical for Chandigarh businesses where 75%+ users browse on smartphones. Features include responsive layouts, touch-friendly navigation, fast loading on 4G/5G, Google mobile-first indexing compliance, and WhatsApp chat integration.',
    },
    {
      question: 'How long does website development take in Chandigarh?',
      answer: 'Website development timelines: Basic website (5-7 pages): 1-2 weeks; WordPress website: 2-3 weeks; Corporate website (10-15 pages): 2-4 weeks; Educational website with portal: 4-6 weeks; E-Commerce website: 4-8 weeks; Custom web application: 2-4 months. Timeline depends on content readiness and design approvals. Rush delivery available for urgent projects.',
    },
    {
      question: 'Do you provide domain, hosting, and SSL for Chandigarh clients?',
      answer: 'Yes! Complete domain and hosting solutions: Domain registration (.com, .in, .co.in) from ₹500/year; Shared hosting from ₹2,000/year; VPS hosting from ₹6,000/year for high-traffic sites; SSL certificate (HTTPS security); business email setup; daily automatic backups; 99.9% uptime guarantee; India-based servers for fast loading. We handle all setup and ongoing management.',
    },
    {
      question: 'Which areas of Chandigarh do you serve?',
      answer: 'We serve all Chandigarh sectors including Sector 17, Sector 22, Sector 34, Sector 43, IT Park, Industrial Area Phase 1 & 2, Manimajra, and across the Tricity. We also serve Mohali (Phase 8, IT Hub), Panchkula, Zirakpur, Ambala, Ludhiana, Jalandhar, and Patiala. On-site consultations in Chandigarh and virtual meetings for outstation clients.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Chandigarh'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.7333,
      longitude: 76.7794,
    },
    areaServed: [
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'City', name: 'Panchkula' },
      { '@type': 'City', name: 'Zirakpur' },
      { '@type': 'City', name: 'Ambala' },
      { '@type': 'City', name: 'Ludhiana' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Chandigarh',
    'Professional website design and development in Chandigarh — responsive web design, e-commerce, WordPress, corporate portals, and educational websites for Tricity and Punjab businesses.',
    'Chandigarh'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Chandigarh',
    'Custom website design for Chandigarh IT startups, manufacturing, healthcare, education, and hospitality businesses. Mobile-responsive, SEO-optimized starting from ₹15,000.',
    '15000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Chandigarh Website Designing', url: '/chandigarh-website-designing-and-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Chandigarh"
        subtitle="Responsive Web Design | E-Commerce | WordPress | Corporate Portals"
        description="Leading website designing company in Chandigarh serving the Tricity — Chandigarh, Mohali & Panchkula. 500+ websites delivered. SEO-optimized, mobile-first websites starting ₹15,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Design Services in Chandigarh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete web solutions for Tricity businesses across Punjab &amp; Haryana
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Chandigarh?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across the Tricity and Punjab</p>
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

        {/* Website Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Website Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a high-performing online presence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">📱 Mobile Ready</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Responsive design</li>
                <li>✓ Touch-friendly</li>
                <li>✓ Fast on 4G/5G</li>
                <li>✓ All devices</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">🔍 SEO Optimized</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Google friendly</li>
                <li>✓ Meta optimization</li>
                <li>✓ Schema markup</li>
                <li>✓ Core web vitals</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">🎨 Modern Design</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Custom UI/UX</li>
                <li>✓ Brand colours</li>
                <li>✓ HD graphics</li>
                <li>✓ Animations</li>
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
                Industries We Serve in Chandigarh &amp; Tricity
              </h2>
              <p className="text-xl text-gray-600">
                Specialized websites for Punjab &amp; Haryana&apos;s key business sectors
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
              Serving All Areas of Chandigarh &amp; Tricity
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Tricity. Remote delivery across Punjab, Haryana &amp; India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Chandigarh</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Sector 17 (City Centre)', 'Sector 22', 'Sector 34', 'Sector 43', 'IT Park', 'Industrial Area Ph-1', 'Industrial Area Ph-2', 'Sector 8-C', 'Manimajra', 'Sector 26'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Mohali (SAS Nagar)', 'Panchkula', 'Zirakpur', 'Ambala', 'Ludhiana', 'Jalandhar', 'Patiala', 'Ropar', 'Fatehgarh Sahib', 'Morinda'].map((city) => (
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
                  'Hindi, Punjabi & English',
                  'Training & handover',
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
              'Web Design Chandigarh', 'Website Development Mohali', 'Web Design Panchkula',
              'Website Company Chandigarh Punjab', 'Startup Website Chandigarh', 'Ecommerce Website Chandigarh',
              'WordPress Development Chandigarh', 'Web Design Ambala', 'Web Design Ludhiana',
              'Corporate Website Chandigarh', 'SEO Website Chandigarh', 'Website Company Tricity',
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
                Transparent Pricing for Chandigarh Businesses
              </h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Website</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>5-7 pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Mobile responsive</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Contact form</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Basic SEO</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>3 months support</span></li>
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
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>10-15 pages</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>WordPress CMS</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Advanced SEO</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Blog section</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Training included</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹90,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited products</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Payment gateway</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Inventory system</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Order tracking</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>12 months support</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Training included</span></li>
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
                Get a Free Website Quote in Chandigarh
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your website project in Chandigarh
              </p>
            </div>
            <ContactForm serviceName="Website Design & Development" cityName="Chandigarh" />
          </div>
        </section>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Aligarh | Web Development Services | EifaSoft',
    description: 'Top-rated website designing company in Aligarh, Uttar Pradesh. Educational websites, e-commerce for lock manufacturers, WordPress, corporate portals, AMU affiliated institution websites. 500+ websites delivered. Serving Aligarh, Hathras, Mathura & across UP. Starting ₹15,000. Free consultation!',
    canonical: '/aligarh-website-designing-and-development-company',
    keywords: [
      'website designing company aligarh',
      'web design aligarh',
      'website development aligarh',
      'aligarh web designers',
      'ecommerce website aligarh',
      'wordpress development aligarh',
      'educational website aligarh',
      'amu website design',
      'aligarh business website',
      'responsive web design aligarh',
      'website company aligarh',
      'web development services aligarh',
      'website designing company aligarh uttar pradesh',
      'lock industry website aligarh',
      'educational portal aligarh',
      'web design hathras',
      'web design mathura',
      'web design agra',
      'website development kasganj',
      'best web design company aligarh',
      'school website aligarh',
      'coaching website aligarh',
    ]
  });
}

export default function AligarhWebsiteDesigningPage() {
  const services = [
    {
      icon: '🎓',
      title: 'Educational Websites',
      description: 'Comprehensive websites for schools, colleges, and coaching institutes',
      price: '₹25,000',
      features: ['Student portals', 'Online admissions', 'Result management', 'Faculty profiles']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Websites',
      description: 'Complete online stores for lock industry and local businesses',
      price: '₹55,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory system', 'Order tracking']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites for all business types',
      price: '₹15,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'All devices']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites with WordPress',
      price: '₹22,000',
      features: ['Custom themes', 'Plugin setup', 'Content management', 'Training included']
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for companies',
      price: '₹28,000',
      features: ['Company profile', 'Service showcase', 'Contact forms', 'Blog section']
    },
    {
      icon: '🏨',
      title: 'Institute Websites',
      description: 'Specialized websites for AMU affiliated institutions',
      price: '₹35,000',
      features: ['Course catalog', 'Faculty directory', 'Research publications', 'Alumni portal']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Educational Sites', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🎓 Education Sector',
      description: 'Specialized websites for Aligarh\'s renowned educational institutions including AMU affiliated schools, coaching centres, and universities.',
      features: ['Student information systems', 'Online examination portals', 'Library management', 'E-learning platforms']
    },
    {
      title: '🔒 Lock & Hardware Industry',
      description: 'E-commerce and B2B portals for Aligarh\'s famous lock manufacturing industry targeting dealers and exporters worldwide.',
      features: ['Product catalogs', 'Wholesale inquiry systems', 'Dealer portals', 'Export-focused websites']
    },
    {
      title: '🏪 Retail & Services',
      description: 'Digital presence for retail shops, coaching centres, and service businesses serving Aligarh\'s local and student population.',
      features: ['Online catalogs', 'Appointment booking', 'Service listings', 'Customer reviews']
    },
    {
      title: '🏥 Healthcare & Clinics',
      description: 'Professional websites for Aligarh hospitals, clinics, and diagnostic centres with appointment systems and doctor profiles.',
      features: ['Doctor profiles', 'Online appointments', 'Service listings', 'Patient testimonials']
    },
    {
      title: '🏗️ Real Estate & Builders',
      description: 'Property listing websites for Aligarh builders, real estate agents, and housing societies with lead capture and virtual tours.',
      features: ['Property listings', 'Virtual tour integration', 'Lead capture forms', 'EMI calculators']
    },
    {
      title: '🏭 Manufacturing & Export',
      description: 'Corporate and export-facing websites for Aligarh manufacturing units with B2B inquiry systems and export compliance pages.',
      features: ['Company profile', 'Product catalogue', 'B2B inquiry forms', 'Export certifications']
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Aligarh?',
      answer: 'EifaSoft is a leading website designing company serving Aligarh with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Aligarh\'s education sector, lock industry, and local businesses. Our expertise includes educational portals for AMU affiliated institutions, e-commerce platforms for lock manufacturers, and professional corporate websites. We understand the Aligarh market and provide local support, competitive pricing starting at ₹15,000, and websites that help your business grow online.'
    },
    {
      question: 'Do you create educational websites for schools and colleges in Aligarh?',
      answer: 'Yes! We specialize in educational website development for Aligarh institutions. Our solutions include: Student Information Systems (attendance, marks, reports), Online Admission Portals (application forms, document upload, fee payment), Faculty Management (profiles, timetables, assignments), E-Learning Platforms (video lectures, study material, quizzes), Result Publishing Systems, Parent-Teacher Communication Portals, Library Management, Alumni Networks. Perfect for schools, colleges, coaching institutes, and AMU affiliated institutions. Pricing starts at ₹25,000 with student/parent portals and mobile apps available.'
    },
    {
      question: 'Can you build e-commerce websites for Aligarh lock manufacturers?',
      answer: 'Absolutely! Aligarh is famous for lock manufacturing and we create specialized e-commerce solutions: Features include - Product Catalog (unlimited products with detailed specs), Wholesale Inquiry System (bulk order forms, price quotes), Dealer Portal (exclusive pricing, order tracking), B2B Marketplace Integration, Export Documentation Support, Multi-currency Pricing (USD, EUR for exports), Product Comparison Tools, Quality Certifications Display. Perfect for lock manufacturers, hardware dealers, and exporters. Mobile-responsive design ensures buyers worldwide can easily browse your products. Pricing from ₹55,000 with full e-commerce functionality.'
    },
    {
      question: 'What is the cost of website designing in Aligarh?',
      answer: 'Website design pricing in Aligarh: Basic Business Website (5-7 pages): ₹15,000 - ₹28,000, WordPress Website: ₹22,000 - ₹45,000, Educational Website (School/College): ₹25,000 - ₹80,000, Institute Website (with student portal): ₹35,000 - ₹1,20,000, E-Commerce Website (Lock industry): ₹55,000 - ₹1,80,000, Corporate Website (10-15 pages): ₹28,000 - ₹65,000. All packages include responsive design, basic SEO, contact forms, and 3-month free support. Custom quotes for AMU affiliated institutions and large educational portals. Payment plans available for Aligarh businesses.'
    },
    {
      question: 'Do you provide website hosting and domain services for Aligarh businesses?',
      answer: 'Yes, complete domain and hosting solutions: Domain Registration - .com, .in, .co.in, .edu.in (for educational institutions) domains starting ₹500/year, Premium domains available, Domain transfer assistance; Web Hosting - Shared Hosting ₹2,000/year (suitable for small websites), VPS Hosting ₹6,000/year (for educational portals with high traffic), Dedicated Server ₹15,000/month (for large institute websites); Educational Hosting - Special plans for schools/colleges with student data security, Daily backups, SSL certificates for secure data, 99.9% uptime guarantee. India-based servers ensure fast loading for Aligarh users. We handle all technical setup and provide ongoing support.'
    },
    {
      question: 'Can you integrate online admission and fee payment systems?',
      answer: 'Yes! We specialize in educational portal integrations: Online Admission System - Application forms with document upload, Entrance exam registration, Merit list publishing, Seat allocation, Admission confirmation; Fee Payment Integration - Payment gateway (UPI, cards, net banking), Fee structure management, Receipt generation, Installment tracking, Online fee collection reports, Refund management; Additional Features - SMS/Email notifications to parents, Automatic reminder systems, Scholarship management, Transport fee integration. Secure, PCI-DSS compliant payment processing. Perfect for schools, colleges, and coaching institutes in Aligarh. Integration starts at ₹20,000 additional.'
    },
    {
      question: 'Are all your websites mobile-friendly and responsive?',
      answer: 'Yes, 100% mobile responsive! This is critical for Aligarh businesses as 75%+ users browse on smartphones, especially students and parents. Our mobile-optimized websites: Display perfectly on all screen sizes (phones, tablets, desktops), Touch-friendly navigation and forms, Fast loading on 3G/4G networks, Google mobile-first indexing compliant, Work across all browsers (Chrome, Safari, Firefox), Mobile-optimized admission forms and payment pages, Click-to-call contact numbers, WhatsApp integration for quick queries. We test on real mobile devices before delivery. Mobile optimization included in all packages at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Aligarh?',
      answer: 'Website development timeline for Aligarh clients: Basic Business Website (5-7 pages): 1-2 weeks, Corporate Website (10-15 pages): 2-4 weeks, WordPress Website: 2-3 weeks, Educational Website (School): 4-6 weeks, Institute Website (with portals): 6-10 weeks, E-Commerce Website (Lock industry): 4-8 weeks, Custom Educational Portal: 2-4 months. Timeline depends on content readiness, design approvals, and feature complexity. We provide regular updates throughout development. Rush delivery available for urgent projects (additional charges apply). Free timeline estimation during consultation. Many Aligarh school websites completed before admission season.'
    },
    {
      question: 'Do you provide SEO services to rank on Google for Aligarh searches?',
      answer: 'Yes! SEO is crucial for Aligarh businesses to get discovered online. Our SEO services include: Local SEO - Rank for "schools in Aligarh", "lock manufacturers Aligarh", "coaching institutes near AMU"; Google My Business optimization; Educational Keywords - Target searches like "best school in Aligarh", "AMU affiliated colleges", "engineering coaching Aligarh"; Industry Keywords - "lock suppliers Aligarh", "hardware manufacturers", "wholesale locks"; Content Marketing - Blog posts, educational articles, industry news; Technical SEO - Fast loading, mobile optimization, schema markup, structured data; Link Building - Educational directories, business listings, local citations. Basic SEO included with all websites. Advanced SEO campaigns from ₹10,000/month with guaranteed ranking improvements.'
    },
    {
      question: 'Which areas of Aligarh do you serve?',
      answer: 'We serve all areas of Aligarh including: AMU Campus (educational institutions, faculty housing), Civil Lines (government offices, schools), Delhi Gate (commercial area, lock market), Quarsi (industrial area, manufacturing units), Sasni Gate (retail shops, businesses), Center Point (shopping centers, offices), Medical Road (hospitals, clinics, coaching centers), Railway Road (commercial establishments), Nearby areas - Khair, Atrauli, Iglas, Hathras. We provide on-site consultations in Aligarh or virtual meetings. Local support available for urgent issues. Dedicated account manager for each Aligarh client. Serving Aligarh businesses and educational institutions since 2008 with proven expertise in local market requirements.'
    }
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Aligarh'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.8974,
      longitude: 78.0880,
    },
    areaServed: [
      { '@type': 'City', name: 'Aligarh' },
      { '@type': 'City', name: 'Hathras' },
      { '@type': 'City', name: 'Mathura' },
      { '@type': 'City', name: 'Agra' },
      { '@type': 'City', name: 'Etah' },
      { '@type': 'City', name: 'Kasganj' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Aligarh',
    'Professional website design and development services in Aligarh including educational websites, e-commerce for lock industry, WordPress development, and responsive web design. Expert team serving Aligarh businesses and institutions.',
    'Aligarh'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Aligarh',
    'Custom website design for Aligarh educational institutions, lock manufacturers, and businesses. Mobile-responsive, SEO-optimized websites starting from ₹15,000 with student portals and e-commerce features.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Aligarh Website Designing', url: '/aligarh-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Aligarh"
        subtitle="Educational Portals | E-Commerce for Lock Industry | Professional Web Solutions"
        description="Leading website design company in Aligarh specializing in educational websites, e-commerce for lock manufacturers, and business portals. 500+ websites delivered. Serving AMU area and Aligarh businesses. Starting ₹15,000!"
        gradient="green"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Aligarh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for education, industry, and business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-green-600 mb-4">Starting {service.price}</div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft for Aligarh?</h2>
            <p className="text-xl text-green-100">Trusted by educational institutions and businesses across Aligarh</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
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
            <h3 className="font-bold text-gray-900 mb-4">📱 Mobile Ready</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Responsive design</li>
              <li>✓ All devices</li>
              <li>✓ Touch-friendly</li>
              <li>✓ Fast loading</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔍 SEO Optimized</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Google friendly</li>
              <li>✓ Meta tags</li>
              <li>✓ Fast speed</li>
              <li>✓ Schema markup</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🎨 Professional Design</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Modern UI</li>
              <li>✓ Custom layouts</li>
              <li>✓ Brand colors</li>
              <li>✓ HD images</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔒 Secure & Fast</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ SSL included</li>
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
              Industries We Serve in Aligarh
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for key Aligarh sectors
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
            Serving All Areas of Aligarh &amp; Nearby Cities
          </h2>
          <p className="text-xl text-gray-600">
            On-site consultations across Aligarh. Remote delivery across UP and India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Aligarh</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['AMU Campus', 'Civil Lines', 'Delhi Gate', 'Quarsi', 'Sasni Gate', 'Centre Point', 'Medical Road', 'Railway Road', 'Marris Road', 'GT Road Industrial Area'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Hathras', 'Mathura', 'Agra', 'Etah', 'Kasganj', 'Khair', 'Iglas', 'Atrauli', 'Sasni', 'Tappal'].map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{city}
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
            'Web Design Aligarh', 'Website Development Hathras', 'Web Design Mathura',
            'Website Company Aligarh UP', 'Educational Portal Aligarh', 'AMU Website Design',
            'Lock Industry Website Aligarh', 'School Website Aligarh', 'Web Design Agra',
            'Ecommerce Website Aligarh', 'Coaching Website Aligarh', 'Website Development Kasganj',
          ].map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
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
              Transparent Pricing for Aligarh Businesses
            </h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-green-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Website</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">₹15,000</div>
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
              <a href="#contact" className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Educational Website</h3>
              <div className="text-4xl font-bold text-white mb-6">₹40,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>10-15 pages</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Student portal</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Admission forms</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Result publishing</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Training included</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-green-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-green-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">₹85,000</div>
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
                  <span>Dealer portal</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>12 months support</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Export features</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
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
              Get a Free Website Quote in Aligarh
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss your website project in Aligarh
            </p>
          </div>
          <ContactForm serviceName="Website Design & Development" cityName="Aligarh" />
        </div>
      </section>
    </div>
    </>
  );
}

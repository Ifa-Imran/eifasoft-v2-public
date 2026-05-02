import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Rampur | Web Design & Development Services | EifaSoft',
    description: 'Professional website designing company in Rampur. Furniture & handicraft portals, e-commerce stores, corporate websites, WordPress development. 500+ websites. Starting ₹15,000. Free consultation!',
    canonical: '/website-designing-company-rampur',
    keywords: [
      'website designing company rampur',
      'web design rampur',
      'website development rampur',
      'web designing services rampur',
      'responsive website rampur',
      'ecommerce website rampur',
      'website designer rampur',
      'web development company rampur',
      'furniture website rampur',
      'wordpress website rampur',
      'corporate website rampur',
      'seo website rampur',
      'website redesign rampur',
      'landing page rampur',
      'business website rampur',
      'web design bareilly',
      'website designing moradabad nearby',
      'website company sambhal',
      'ecommerce store rampur',
      'school website rampur',
      'hospital website rampur',
      'web design uttar pradesh rampur',
    ],
  });
}

export default function WebsiteDesigningRampur() {
  const services = [
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites that display perfectly on all devices for Rampur businesses and institutions.',
      price: '₹15,000',
      features: ['Mobile-first design', 'SEO optimized', 'Fast loading speed', 'WhatsApp & lead forms'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Website',
      description: 'Full-featured online stores for Rampur retailers, furniture exporters, and local businesses with payment integration.',
      price: '₹50,000',
      features: ['Product catalog with zoom', 'Razorpay/PayU gateway', 'Inventory management', 'GST-compliant invoicing'],
    },
    {
      icon: '💼',
      title: 'Corporate Website',
      description: 'Professional company websites for Rampur businesses, trading firms, and service providers with modern UI/UX.',
      price: '₹28,000',
      features: ['Premium design', 'CMS integration', 'Multi-page layout', '6 months support'],
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites with custom themes and full staff training for Rampur clients.',
      price: '₹20,000',
      features: ['Custom WordPress theme', 'Plugin integration', 'Staff training', 'Content management'],
    },
    {
      icon: '🔄',
      title: 'Website Redesign',
      description: 'Modernize your outdated website with fresh design, faster speed, and better mobile experience.',
      price: '₹18,000',
      features: ['Modern UI refresh', 'Speed optimization', 'SEO improvement', 'Zero downtime migration'],
    },
    {
      icon: '⚡',
      title: 'Landing Page Design',
      description: 'High-converting single-page websites for product launches and lead generation for Rampur businesses.',
      price: '₹8,000',
      features: ['Conversion optimized', 'Analytics integration', 'Fast turnaround (3–5 days)', 'A/B testing ready'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'UP Clients', value: '200+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🪑 Furniture & Handicrafts',
      description: 'Rampur is known for its rattan, cane, and wooden furniture manufacturing. We build product catalog websites, B2B portals, and export inquiry platforms for Rampur\'s furniture industry.',
      features: ['Product catalog with specifications', 'Bulk order & inquiry systems', 'Dealer/distributor portals', 'Export-focused websites'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Websites for Rampur schools, colleges, coaching institutes, and the historic Rampur Raza Library — with admission portals, online fee payment, and digital resource listings.',
      features: ['Admission enquiry portals', 'Online fee payment', 'Course & faculty showcase', 'E-learning integration'],
    },
    {
      title: '🌾 Agriculture & Sugar Industry',
      description: 'Web solutions for Rampur\'s sugar mills, agricultural cooperatives, and farm produce businesses — including product listings, procurement portals, and farmer information sites.',
      features: ['Sugar mill company sites', 'Agricultural produce portals', 'Procurement inquiry systems', 'Farmer cooperative websites'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Professional websites for Rampur hospitals, clinics, nursing homes, and diagnostic centres with online appointment booking and doctor profile listings.',
      features: ['Online appointment booking', 'Doctor profiles & specialities', 'Service & facilities listings', 'Health blog & patient info'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores and retail management websites for Rampur traders, gift shops, and local businesses expanding their digital sales across Uttar Pradesh and India.',
      features: ['E-commerce platforms', 'POS & billing systems', 'Inventory management', 'WhatsApp catalogue integration'],
    },
    {
      title: '🏢 Government & NGOs',
      description: 'Websites for Rampur Municipal Corporation, government departments, public service organizations, and NGOs with citizen service portals and information management.',
      features: ['Citizen service portals', 'Online grievance systems', 'Document management', 'Event & announcement boards'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Rampur?',
      answer: 'EifaSoft is a leading website designing company serving Rampur with 15+ years of experience and 500+ websites delivered. We create mobile-responsive, SEO-optimized websites perfect for Rampur businesses including furniture manufacturers, retailers, educational institutions, and service providers. Our team understands the Rampur market and delivers professional websites at competitive pricing with local support, flexible payment options, and ongoing maintenance.',
    },
    {
      question: 'What website services do you provide in Rampur?',
      answer: 'Our comprehensive website services in Rampur include: Responsive Website Design (mobile-friendly), E-Commerce Website Development (online stores with payment gateway), Corporate Website Design (business portals), WordPress Development (easy CMS), Landing Page Design, Website Redesign & Modernization, Custom Web Development (React, Next.js), SEO-Friendly Web Design, Domain & Hosting, SSL Certificate, and Website Maintenance. We serve all Rampur areas including Civil Lines, Shahabad, Suar, Cantt, and surrounding regions.',
    },
    {
      question: 'How much does website designing cost in Rampur?',
      answer: 'Website designing prices in Rampur: Basic Website (5–7 pages) — ₹15,000 to ₹30,000; Business/Corporate (10–15 pages) — ₹28,000 to ₹70,000; E-Commerce Website — ₹50,000 to ₹2,00,000; WordPress Website — ₹20,000 to ₹75,000; Landing Page — ₹8,000 to ₹20,000. All packages include responsive design, basic SEO, contact forms, and 3 months free support. Transparent pricing with no hidden costs and flexible payment plans for Rampur clients.',
    },
    {
      question: 'Can you build websites for Rampur furniture and handicraft businesses?',
      answer: 'Absolutely! We specialize in websites for Rampur\'s furniture and handicraft industry. Our solutions include: Product catalog websites with detailed specifications and high-quality image galleries; B2B wholesale portals for domestic and international buyers; Export inquiry and quotation management systems; Dealer and distributor network portals; Multi-language support for international buyers; GST-compliant quotation generation. Starting from ₹20,000. Perfect for furniture manufacturers and exporters in Rampur.',
    },
    {
      question: 'Can you design e-commerce websites for Rampur shops and manufacturers?',
      answer: 'Yes! We create e-commerce websites for Rampur businesses: For Retailers — online stores with product catalog, shopping cart, and payment gateway (Razorpay, PayU); For Manufacturers — bulk order systems, dealer portals, and product specification pages; For Service Providers — booking systems, service catalogs, appointment scheduling. Features include: inventory management, GST billing, shipping integration, and mobile optimization. Starting from ₹50,000.',
    },
    {
      question: 'How long does it take to create a website in Rampur?',
      answer: 'Website development timelines: Basic Website (5–7 pages) — 1 to 2 weeks; Business Website (10–15 pages) — 2 to 4 weeks; E-Commerce Website — 4 to 8 weeks; WordPress Website — 2 to 3 weeks; Landing Page — 3 to 5 days. Timeline depends on content availability, design complexity, and feedback speed. We provide regular WhatsApp/email updates throughout the process. Rush delivery available for urgent Rampur projects.',
    },
    {
      question: 'Do you provide website hosting and domain registration for Rampur clients?',
      answer: 'Yes! Complete hosting and domain services: Domain registration (.com/.in/.co.in) from ₹500/year; Web Hosting — Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹12,000/year); Business email (yourname@yourcompany.com); SSL certificate; daily backups; 99.9% uptime guarantee; India-based servers for fast loading across UP. We handle all technical setup so you can focus on running your Rampur business.',
    },
    {
      question: 'Can you redesign our old website?',
      answer: 'Yes! Website redesign is popular among Rampur businesses wanting to modernize. What we do: Modern responsive design, mobile-friendly conversion, speed optimization, SEO improvement, updated visuals, security patches, and CMS upgrade. Process: Audit existing website, preserve SEO rankings, keep same domain with zero downtime, improve weak areas. Redesign starts from ₹15,000. Many Rampur businesses have seen significantly improved traffic and customer engagement after redesign.',
    },
    {
      question: 'Do you include SEO with website design in Rampur?',
      answer: 'Yes! All our Rampur websites include basic SEO. On-Page SEO: meta tags, keyword research for Rampur market, SEO-friendly URLs, image optimization, fast loading, mobile-first compliance, schema markup. Technical SEO: XML sitemap, robots.txt, HTTPS, structured data. Advanced SEO Services (optional): Google My Business, local Rampur SEO campaigns, monthly content marketing, and link building starting from ₹10,000/month.',
    },
    {
      question: 'Which areas of Rampur do you serve?',
      answer: 'We serve all areas of Rampur including Civil Lines, Shahabad, Suar, Kemri, Milak, Patthar Chatta, Topi Bazar, Cantt, Station Road, and Bilaspur Road. Beyond Rampur, we serve nearby cities: Moradabad, Bareilly, Sambhal, Amroha, Bijnor, Budaun, Pilibhit, and Shahjahanpur. We provide on-site consultations in Rampur and remote services across all of India. Contact us today for a free consultation!',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Rampur'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8093,
      longitude: 79.0251,
    },
    areaServed: [
      { '@type': 'City', name: 'Rampur' },
      { '@type': 'City', name: 'Moradabad' },
      { '@type': 'City', name: 'Bareilly' },
      { '@type': 'City', name: 'Sambhal' },
      { '@type': 'City', name: 'Amroha' },
      { '@type': 'City', name: 'Bijnor' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Rampur',
    'Professional website designing and development in Rampur — furniture industry portals, e-commerce stores, corporate websites, and WordPress. Mobile-friendly and SEO-optimized.',
    'Rampur'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Rampur',
    'Custom website design for Rampur businesses — furniture manufacturers, retailers, schools, hospitals. Responsive, SEO-optimized websites from ₹15,000.',
    '15000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Website Designing Company Rampur', url: '/website-designing-company-rampur' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Rampur"
        subtitle="Furniture Portals | E-Commerce | Corporate | WordPress"
        description="Leading website designing company in Rampur. B2B portals for furniture exporters, e-commerce stores, responsive corporate websites. 500+ websites delivered. Starting ₹15,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Design Services in Rampur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized web solutions for Rampur&apos;s businesses and institutions
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Rampur?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Rampur &amp; Western UP</p>
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
                Industries We Serve in Rampur
              </h2>
              <p className="text-xl text-gray-600">
                Sector-specific websites for Rampur&apos;s key industries
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
              Serving Rampur &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Rampur. Remote delivery across UP and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Rampur</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Civil Lines', 'Shahabad', 'Suar', 'Kemri', 'Milak', 'Patthar Chatta', 'Topi Bazar', 'Cantt', 'Station Road', 'Bilaspur Road'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby UP Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Moradabad', 'Bareilly', 'Sambhal', 'Amroha', 'Bijnor', 'Budaun', 'Pilibhit', 'Shahjahanpur', 'Chandausi', 'Milak'].map((city) => (
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
                  'On-site consultation in Rampur',
                  'Remote project management',
                  'Hindi & English communication',
                  'WhatsApp project updates',
                  'Free design mockups',
                  'Milestone-based delivery',
                  '3 months free maintenance',
                  'Staff training included',
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
              'Website Designing Rampur', 'E-Commerce Website Rampur', 'WordPress Website Rampur',
              'Web Design Rampur', 'Corporate Website Rampur', 'Website Company Rampur',
              'SEO Website Rampur', 'Furniture Website Rampur', 'Website Designing Moradabad',
              'Web Design Bareilly', 'Website Company Sambhal', 'Web Design Amroha',
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
                Website Design Pricing in Rampur
              </h2>
              <p className="text-xl text-gray-600">Transparent pricing with no hidden costs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>5–7 pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Mobile responsive</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Basic SEO setup</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Contact form & WhatsApp</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>3 months support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Package</h3>
                <div className="text-4xl font-bold text-white mb-6">₹45,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>10–15 pages</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Premium UI/UX design</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>CMS integration</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Advanced SEO</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹90,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited products</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Payment gateway</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Order management</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>B2B & retail modes</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>12 months support</span></li>
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
                Get Free Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your website project in Rampur
              </p>
            </div>
            <ContactForm serviceName="Website Designing" cityName="Rampur" />
          </div>
        </section>
      </div>
    </>
  );
}

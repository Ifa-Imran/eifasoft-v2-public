import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Moradabad | Web Design & Development | EifaSoft',
    description: 'Professional website designing company in Moradabad. Brass industry portals, e-commerce stores, corporate websites, WordPress development. 500+ websites. Mobile-friendly, SEO-optimized. Starting ₹15,000!',
    canonical: '/website-designing-company-moradabad',
    keywords: [
      'website designing company moradabad',
      'web design moradabad',
      'website development moradabad',
      'web designing services moradabad',
      'responsive website moradabad',
      'ecommerce website moradabad',
      'website designer moradabad',
      'web development company moradabad',
      'brass industry website moradabad',
      'textile website moradabad',
      'wordpress website moradabad',
      'corporate website moradabad',
      'seo website moradabad',
      'website redesign moradabad',
      'landing page moradabad',
      'website designing rampur',
      'web design amroha',
      'website company sambhal',
      'ecommerce website brass moradabad',
      'manufacturer website moradabad',
      'b2b website moradabad',
      'web design uttar pradesh moradabad',
    ],
  });
}

export default function WebsiteDesigningMoradabad() {
  const services = [
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites that look and perform perfectly on smartphones, tablets, and desktops for Moradabad businesses.',
      price: '₹15,000',
      features: ['Mobile-first design', 'SEO optimized', 'Fast loading speed', 'WhatsApp & lead forms'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Website',
      description: 'Full-featured online stores for Moradabad brass exporters, textile traders, and retailers with payment gateway integration.',
      price: '₹50,000',
      features: ['Product catalog with zoom', 'Razorpay/PayU gateway', 'Inventory management', 'GST-compliant invoicing'],
    },
    {
      icon: '🏢',
      title: 'Brass & Manufacturer Portal',
      description: 'B2B portals and product catalog websites for Moradabad\'s world-renowned brass and metal manufacturing industry.',
      price: '₹25,000',
      features: ['Bulk order inquiry', 'Product spec sheets', 'Dealer/distributor portal', 'Export inquiry management'],
    },
    {
      icon: '💼',
      title: 'Corporate Website',
      description: 'Professional company websites for Moradabad businesses, trading firms, and service providers with modern UI/UX.',
      price: '₹30,000',
      features: ['Premium design', 'CMS integration', 'Multi-page layout', '6 months support'],
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites using WordPress with custom themes and staff training for Moradabad clients.',
      price: '₹20,000',
      features: ['Custom WordPress theme', 'Plugin integration', 'Staff training', 'Content management'],
    },
    {
      icon: '⚡',
      title: 'Landing Page Design',
      description: 'High-converting single-page websites for product launches, campaigns, and lead generation for Moradabad businesses.',
      price: '₹8,000',
      features: ['Conversion optimized', 'A/B testing ready', 'Analytics integration', 'Fast turnaround (3–5 days)'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Moradabad Clients', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🔧 Brass & Metal Industry',
      description: 'Moradabad is the Brass City of India — world\'s largest exporter of brass handicrafts. We build B2B portals, product catalogs, and export inquiry websites for manufacturers and exporters.',
      features: ['Product catalogs with specifications', 'Bulk order & inquiry systems', 'Dealer/distributor portals', 'Export-focused multilingual websites'],
    },
    {
      title: '👔 Textile & Apparel',
      description: 'Online fabric catalogs, wholesale platforms, and B2B/B2C portals for Moradabad\'s active textile and apparel sector including garment exporters and cloth traders.',
      features: ['Online fabric catalogs', 'Wholesale order systems', 'Size/colour variant display', 'B2B & B2C platforms'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Websites for Moradabad schools, colleges, coaching institutes, and tuition centres with admission portals, online fee payment, and student management features.',
      features: ['Admission enquiry portals', 'Online fee payment', 'Course & faculty showcase', 'Student login dashboards'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Professional websites for Moradabad hospitals, clinics, nursing homes, and diagnostic centres with appointment booking and doctor profile listing.',
      features: ['Online appointment booking', 'Doctor profiles', 'Service listings', 'Health blog & patient info'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores and retail management websites for Moradabad traders, gift shops, home décor sellers, and local businesses expanding to digital sales channels.',
      features: ['E-commerce platforms', 'POS & billing systems', 'Inventory management', 'WhatsApp catalogue integration'],
    },
    {
      title: '🏗️ Manufacturing & Trading',
      description: 'Corporate websites and product brochure sites for Moradabad\'s manufacturing plants, trading companies, and import-export businesses looking to build credibility online.',
      features: ['Product brochure websites', 'Company profile portals', 'Inquiry & quote forms', 'ISO/certification showcase'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Moradabad?',
      answer: 'EifaSoft is Moradabad\'s trusted website designing company with 15+ years of experience and 500+ websites delivered. We specialize in responsive web design, brass industry portals, e-commerce stores, and corporate websites. Our Moradabad team combines creative design with technical expertise to deliver mobile-friendly, SEO-optimized websites. We understand the local market — from brass exporters in Majhola to textile traders in Galshaheed — and build sites that convert visitors into buyers.',
    },
    {
      question: 'What website designing services do you offer in Moradabad?',
      answer: 'Our comprehensive website services in Moradabad include: Responsive Website Design (mobile-friendly), E-Commerce Development (online stores with payment gateway), Brass & Manufacturer B2B Portals, Corporate Website Design, WordPress/CMS Development, Landing Page Design, Website Redesign & Modernization, UI/UX Design, SEO-Friendly Web Design, Website Maintenance & AMC, Domain & Hosting Setup, and SSL Certificate. We serve brass manufacturers, textile traders, retailers, schools, hospitals, and service providers across Moradabad.',
    },
    {
      question: 'How much does website designing cost in Moradabad?',
      answer: 'Website design pricing in Moradabad: Basic Website (5–7 pages) — ₹15,000 to ₹35,000; Business/Corporate (10–15 pages) — ₹30,000 to ₹75,000; Brass B2B Portal — ₹25,000 to ₹60,000; E-Commerce Website — ₹50,000 to ₹2,00,000; WordPress Website — ₹20,000 to ₹75,000; Landing Page — ₹8,000 to ₹20,000. We offer transparent quotations with no hidden costs, flexible payment plans, and a free initial consultation for all Moradabad businesses.',
    },
    {
      question: 'Can you design B2B portals for Moradabad brass manufacturers?',
      answer: 'Absolutely! We specialize in B2B websites for Moradabad\'s world-famous brass and handicraft industry. Our brass manufacturer portals include: Product catalogs with technical specifications and high-resolution images; Bulk order and inquiry management system; Dealer and distributor login portals; Export documentation and compliance information; Multi-language support (Hindi/English/Arabic for Gulf exporters); GST-compliant quotation and invoice generation. Starting from ₹25,000. Perfect for Industrial Area, Majhola, and MDA Colony manufacturers.',
    },
    {
      question: 'Can you build e-commerce websites for Moradabad businesses?',
      answer: 'Yes! We specialize in e-commerce for Moradabad businesses: For Brass & Metal Exporters — product catalogs, bulk order systems, and international buyer portals; For Textile Businesses — size/colour variants, wholesale pricing, and fabric catalogs; For Retailers — online stores with payment gateway and inventory management. Features include: Razorpay/PayU/CCAvenue payment gateways, shopping cart and checkout, order management, customer accounts, Shiprocket shipping integration, and GST billing. Starting from ₹50,000.',
    },
    {
      question: 'How long does it take to design a website in Moradabad?',
      answer: 'Website development timelines: Basic Website (5–7 pages) — 1 to 2 weeks; Business Website (10–15 pages) — 2 to 4 weeks; Brass B2B Portal — 3 to 5 weeks; E-Commerce Website — 4 to 8 weeks; WordPress Website — 2 to 3 weeks; Landing Page — 3 to 5 days. Timeline depends on content readiness and client feedback speed. Our Moradabad team uses agile methodology with regular WhatsApp/email updates. Rush delivery is available for urgent projects.',
    },
    {
      question: 'Do you provide SEO services with website design in Moradabad?',
      answer: 'Yes! All our websites include basic SEO. On-Page SEO: meta tags, keywords, URL structure, image optimization, schema markup, fast loading. Content Optimization: SEO-friendly content, keyword research for Moradabad and UP market, heading structure. Technical SEO: XML sitemap, robots.txt, HTTPS, structured data. Advanced SEO: Google My Business setup, local Moradabad SEO campaigns, content marketing, link building. Basic SEO is included free with all packages; advanced monthly SEO campaigns start from ₹10,000/month.',
    },
    {
      question: 'Do you provide website hosting and domain services in Moradabad?',
      answer: 'Yes! Complete hosting solutions for Moradabad clients: Domain registration (.com/.in/.co.in) from ₹500/year; Web Hosting — Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹12,000/year); Business email (yourname@yourcompany.com); SSL certificate (HTTPS security); Daily backups; 99.9% uptime guarantee; cPanel access; India-based servers for fast loading across Moradabad and UP. We handle all technical setup so you can focus on your business.',
    },
    {
      question: 'Can you redesign our existing website?',
      answer: 'Yes! Website redesign is one of our core services for Moradabad businesses. What we do: Modern design refresh, mobile-responsive conversion, speed optimization, SEO improvement, content restructuring, better UX, security updates, and CMS migration if needed. Process: Audit existing site, preserve SEO rankings, retain good content, improve weak areas, keep same domain with zero downtime. Many Moradabad brass and textile businesses have modernized their outdated websites, resulting in significantly better traffic and lead conversions. Redesign starts from ₹15,000.',
    },
    {
      question: 'Which areas of Moradabad do you serve?',
      answer: 'We serve all areas of Moradabad including Majhola, Galshaheed, Katghar, Civil Lines, Industrial Area, Kanth Road, Ramganga Vihar, Buddhi Vihar, Pakbara, and MDA Colony. Beyond Moradabad, we serve nearby cities: Rampur, Amroha, Sambhal, Bijnor, Bareilly, and other UP cities. We provide on-site consultations anywhere in Moradabad and remote services across all of India. Contact us for a free website design consultation today.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Moradabad'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8386,
      longitude: 78.7733,
    },
    areaServed: [
      { '@type': 'City', name: 'Moradabad' },
      { '@type': 'City', name: 'Rampur' },
      { '@type': 'City', name: 'Amroha' },
      { '@type': 'City', name: 'Sambhal' },
      { '@type': 'City', name: 'Bijnor' },
      { '@type': 'City', name: 'Bareilly' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Moradabad',
    'Professional website designing and development in Moradabad — brass industry portals, e-commerce stores, corporate websites, WordPress. Mobile-friendly and SEO-optimized.',
    'Moradabad'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Moradabad',
    'Custom website design for Moradabad businesses — brass manufacturers, textile traders, retailers. Responsive, SEO-optimized websites from ₹15,000.',
    '15000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Website Designing Company Moradabad', url: '/website-designing-company-moradabad' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Moradabad"
        subtitle="Brass Industry Portals | E-Commerce | Corporate | WordPress"
        description="Leading website designing company in Moradabad. B2B portals for brass exporters, e-commerce stores, responsive corporate websites. 500+ websites delivered. Starting ₹15,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Designing Services in Moradabad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized web solutions for Moradabad&apos;s brass, textile, and trading sectors
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Moradabad?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Moradabad &amp; Western UP</p>
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
                Industries We Serve in Moradabad
              </h2>
              <p className="text-xl text-gray-600">
                Sector-specific websites for Moradabad&apos;s key industries
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
              Serving Moradabad &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Moradabad. Remote delivery across UP and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Moradabad</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Majhola', 'Galshaheed', 'Katghar', 'Civil Lines', 'Industrial Area', 'Kanth Road', 'Ramganga Vihar', 'Buddhi Vihar', 'Pakbara', 'MDA Colony'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby UP Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Rampur', 'Amroha', 'Sambhal', 'Bijnor', 'Bareilly', 'Hapur', 'Meerut', 'Ghaziabad', 'Chandausi', 'Shahjahanpur'].map((city) => (
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
                  'On-site consultation in Moradabad',
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
              'Website Designing Moradabad', 'Brass Industry Website Moradabad', 'E-Commerce Website Moradabad',
              'Web Design Moradabad', 'WordPress Website Moradabad', 'Website Company Moradabad',
              'SEO Website Moradabad', 'Textile Website Moradabad', 'Website Designing Rampur',
              'Web Design Amroha', 'Website Company Sambhal', 'Web Design Bijnor',
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
                Website Design Pricing in Moradabad
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
                <div className="text-4xl font-bold text-white mb-6">₹50,000</div>
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
                <div className="text-4xl font-bold text-purple-600 mb-6">₹1,00,000</div>
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
                Let&apos;s discuss your website project in Moradabad
              </p>
            </div>
            <ContactForm serviceName="Website Designing" cityName="Moradabad" />
          </div>
        </section>
      </div>
    </>
  );
}

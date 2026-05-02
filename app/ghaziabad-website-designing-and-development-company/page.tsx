import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Ghaziabad | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Ghaziabad offering responsive web design, e-commerce websites, corporate portals, WordPress development. 500+ websites delivered. NCR expertise. Starting ₹14,000!',
    canonical: '/ghaziabad-website-designing-and-development-company',
    keywords: [
      'website designing company ghaziabad',
      'web design ghaziabad',
      'website development ghaziabad',
      'ghaziabad web designers',
      'ecommerce website ghaziabad',
      'wordpress development ghaziabad',
      'corporate website ghaziabad',
      'ncr website design',
      'responsive web design ghaziabad',
      'website company ghaziabad',
      'best website company ghaziabad',
      'affordable website ghaziabad',
      'manufacturing portal ghaziabad',
      'real estate website ghaziabad',
      'website design indirapuram',
      'web design vaishali ghaziabad',
      'website company noida ghaziabad',
      'seo website ghaziabad',
      'startup website ghaziabad',
      'b2b website ghaziabad',
      'website redesign ghaziabad',
      'ncr web development company'
    ]
  });
}

export default function GhaziabadWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for NCR companies',
      price: '₹25,000',
      features: ['Company profile', 'Service showcase', 'Team pages', 'Contact integration']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores with payment gateway',
      price: '₹48,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory', 'Order management']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites for all businesses',
      price: '₹14,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'Cross-browser']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites',
      price: '₹20,000',
      features: ['Custom themes', 'Plugin integration', 'Training', 'Content management']
    },
    {
      icon: '🏭',
      title: 'Manufacturing Portals',
      description: 'B2B websites for industrial units',
      price: '₹40,000',
      features: ['Product catalog', 'Inquiry forms', 'Dealer portal', 'Export features']
    },
    {
      icon: '🏘️',
      title: 'Real Estate Websites',
      description: 'Property portals for builders and agents',
      price: '₹35,000',
      features: ['Property listings', 'Search filters', 'Virtual tours', 'Lead capture']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'NCR Projects', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'Digital solutions for Ghaziabad\'s industrial sector including manufacturing units, metal industries, plastics, and engineering companies.',
      features: ['Product catalogs', 'B2B portals', 'Wholesale inquiry', 'Export documentation']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property portals and websites for builders, developers, and real estate agents in Ghaziabad and NCR region.',
      features: ['Property listings', 'Project showcases', 'Virtual tours', 'EMI calculators']
    },
    {
      title: '💼 Corporate & IT Services',
      description: 'Professional websites for IT companies, startups, and corporate offices in Ghaziabad and NCR.',
      features: ['Corporate portals', 'Service catalogs', 'Client testimonials', 'Career pages']
    },
    {
      title: '🏥 Healthcare & Clinics',
      description: 'Medical websites with appointment booking for hospitals, clinics, and diagnostic centres in Ghaziabad.',
      features: ['Doctor profiles', 'Appointment booking', 'Health blog', 'Patient portal']
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Websites for schools, coaching institutes, colleges, and online learning platforms across Ghaziabad.',
      features: ['Online admission', 'Fee payment', 'Student portal', 'Course listings']
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores and product showcases for retail shops, supermarkets, and local businesses in Ghaziabad.',
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'GST & billing']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Ghaziabad?',
      answer: 'EifaSoft is a leading website designing company serving Ghaziabad and NCR with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Ghaziabad\'s industrial sector, real estate businesses, corporate offices, and IT companies. Our expertise includes e-commerce platforms, manufacturing B2B portals, property websites, and professional corporate portals. We understand the NCR market dynamics, provide local support in Ghaziabad, competitive pricing starting at ₹14,000, and websites optimized for both local and national audiences.'
    },
    {
      question: 'Do you create real estate websites for Ghaziabad builders and property agents?',
      answer: 'Yes! We specialize in real estate website development: Property Portals - Property listing system, Advanced search filters, Property comparison tools, Featured listings; Virtual Tours - 360° property tours, Floor plan viewers, Gallery management; Lead Management - Inquiry forms, Callback requests, Site visit scheduling, CRM integration; Features - EMI calculator, Loan assistance info, Location maps, Nearby amenities. Perfect for Ghaziabad builders in Indirapuram, Vaishali, Vasundhara. Starting from ₹35,000.'
    },
    {
      question: 'What is the cost of website designing in Ghaziabad?',
      answer: 'Website design pricing in Ghaziabad: Basic Business Website: ₹14,000 - ₹25,000, Corporate Website: ₹25,000 - ₹55,000, WordPress Website: ₹20,000 - ₹45,000, Real Estate Portal: ₹35,000 - ₹1,20,000, E-Commerce Website: ₹48,000 - ₹1,50,000. All packages include responsive design, basic SEO, contact forms, and 3-month free support. Being in NCR, we offer competitive rates compared to Delhi while maintaining same quality standards.'
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Ghaziabad businesses?',
      answer: 'Yes! Comprehensive SEO: Local SEO - Rank for Ghaziabad searches; Google My Business - Verification, optimization, reviews; NCR Targeting - Compete with Delhi/Noida businesses; Industry Keywords - Manufacturing, real estate, corporate keywords; Content Marketing - Industry blogs, area guides; Technical SEO - Fast loading, mobile optimization. Basic SEO included. Advanced campaigns from ₹8,000/month.'
    },
    {
      question: 'Can you create multilingual websites for NCR audiences?',
      answer: 'Yes! Multilingual website development: Language Support - English, Hindi, regional languages; Features - Language switcher, Translated content, SEO-optimized translations; Benefits - Reach Hindi-speaking audience, Better engagement. Perfect for NCR businesses. Multilingual setup from ₹8,000 additional per language.'
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimized! Mobile Optimization - Responsive design, Touch-friendly navigation, Mobile-first indexing, Fast 4G/5G loading; Speed Optimization - Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance - Core Web Vitals optimized. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Ghaziabad?',
      answer: 'Website development timeline: Basic Website: 1-2 weeks, Corporate Website: 2-4 weeks, WordPress: 2-3 weeks, Real Estate Portal: 4-8 weeks, E-Commerce: 4-8 weeks. We provide weekly updates, milestone delivery, on-site meetings in Ghaziabad. Rush delivery available. Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting - Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services - Registration, transfer, email hosting; Maintenance - Monthly AMC from ₹3,000/month, Updates, backups, monitoring, 99.9% uptime; Support - Email/phone/WhatsApp support. India-based servers for fast NCR loading.'
    },
    {
      question: 'Which areas of Ghaziabad do you serve?',
      answer: 'We serve all areas: Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossings Republik, Raj Nagar Extension, Govindpuram, Sahibabad, Loni, Mohan Nagar, Nearby NCR - Noida, Greater Noida, Delhi East. We provide on-site consultations, local support, dedicated account manager. Serving Ghaziabad since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Ghaziabad',
    'Professional website design services in Ghaziabad including corporate websites, real estate portals, e-commerce, and WordPress development.',
    'Ghaziabad'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Ghaziabad'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6692,
      longitude: 77.4538,
    },
    areaServed: [
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Meerut' },
      { '@type': 'City', name: 'Faridabad' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Ghaziabad',
    'Custom website design for Ghaziabad businesses. Mobile-responsive, SEO-optimized websites starting from ₹14,000.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Ghaziabad Website Designing', url: '/ghaziabad-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Ghaziabad"
        subtitle="NCR's Trusted Web Development Partner"
        description="Leading website design company in Ghaziabad NCR. Corporate websites, real estate portals, e-commerce. 500+ websites delivered. Starting ₹14,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Ghaziabad
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for NCR businesses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">Starting {service.price}</div>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft?</h2>
            <p className="text-xl text-blue-100">Trusted by NCR businesses</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Businesses Across Ghaziabad &amp; NCR</h2>
          <p className="text-xl text-gray-600">Local presence with expert web design services</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Ghaziabad</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Vaishali',
                'Indirapuram',
                'Raj Nagar Extension',
                'Kaushambi',
                'Mohan Nagar',
                'Vasundhara',
                'Crossings Republik',
                'Sahibabad',
                'Loni',
                'Govindpuram',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities We Serve</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Noida',
                'Greater Noida',
                'Delhi',
                'Meerut',
                'Bulandshahr',
                'Hapur',
                'Baghpat',
                'Faridabad',
                'Gurugram',
                'Saharanpur',
              ].map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{city}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🚀</span> Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'On-site & Remote Meetings',
                'Hindi & English Communication',
                'Dedicated Project Manager',
                'Milestone-Based Delivery',
                'WhatsApp Project Updates',
                'Post-Launch SEO Support',
                'NCR Industry Expertise',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GEO Chip Tags */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {[
            'Website Company Ghaziabad',
            'Web Design Indirapuram',
            'Web Design Vaishali',
            'Manufacturing Portal NCR',
            'Real Estate Website Ghaziabad',
            'Corporate Website Ghaziabad',
            'E-Commerce Ghaziabad',
            'Website Design Noida',
            'WordPress Ghaziabad',
            'Startup Website NCR',
            'Affordable Website Ghaziabad',
            'SEO Website Ghaziabad',
          ].map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹14,000</div>
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
                  <span>Basic SEO</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Get Started</a>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Corporate</h3>
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
                  <span>CRM integration</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 font-semibold">Get Started</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹85,000</div>
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
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Free Consultation</h2>
            <p className="text-xl text-gray-600">Let&apos;s discuss your project</p>
          </div>
          <ContactForm serviceName="Website Design & Development" cityName="Ghaziabad" />
        </div>
      </section>
    </div>
    </>
  );
}

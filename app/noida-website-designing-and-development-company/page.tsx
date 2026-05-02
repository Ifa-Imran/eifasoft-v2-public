import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Noida | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Noida offering responsive web design, e-commerce websites, corporate portals, IT company websites. 500+ websites delivered. NCR expertise. Starting ₹14,000!',
    canonical: '/noida-website-designing-and-development-company',
    keywords: [
      'website designing company noida',
      'web design noida',
      'website development noida',
      'noida web designers',
      'ecommerce website noida',
      'wordpress development noida',
      'corporate website noida',
      'it company website noida',
      'startup website noida',
      'website company noida',
      'responsive website design noida',
      'website redesign noida',
      'seo website noida',
      'landing page noida',
      'real estate website noida',
      'saas website noida',
      'ui ux design noida',
      'affordable website noida',
      'best web designer noida',
      'website maintenance noida',
      'noida web development company',
      'sector 62 website design'
    ]
  });
}

export default function NoidaWebsiteDesigningPage() {
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
      title: '💻 IT & Technology',
      description: 'Digital solutions for Noida\'s IT companies, software firms, and technology startups in sectors 62, 63, 16.',
      features: ['Corporate portals', 'Service catalogs', 'Portfolio websites', 'Career pages']
    },
    {
      title: '🚀 Startups & SaaS',
      description: 'Innovative websites for Noida startups, SaaS companies, and tech entrepreneurs.',
      features: ['Landing pages', 'Product demos', 'Lead capture', 'Analytics integration']
    },
    {
      title: '🏢 Corporate & Enterprises',
      description: 'Professional websites for multinational corporations and enterprise businesses in Noida.',
      features: ['Enterprise portals', 'Intranets', 'Multi-location sites', 'Global presence']
    },
    {
      title: '🏠 Real Estate & Builders',
      description: 'Property listing websites, builder portfolios, and agent portals for Noida real estate businesses in Greater Noida and new residential sectors.',
      features: ['Property listings', 'Virtual tours', 'EMI calculators', 'Lead capture forms']
    },
    {
      title: '🛒 E-Commerce & Retail',
      description: 'Online stores, D2C platforms, and retail websites for Noida-based brands and businesses targeting NCR and pan-India customers.',
      features: ['D2C storefronts', 'Multi-vendor marketplaces', 'Inventory management', 'Payment gateways']
    },
    {
      title: '🏥 Healthcare & Education',
      description: 'Hospital websites, clinic portals, coaching institute sites, and school websites for Noida healthcare and education sector.',
      features: ['Doctor profiles', 'Online appointments', 'Course catalogs', 'Admission portals']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Noida?',
      answer: 'EifaSoft is a leading website designing company serving Noida and NCR with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Noida\'s IT sector, startups, corporate offices, and technology companies. Our expertise includes corporate portals, SaaS landing pages, e-commerce platforms, and professional websites optimized for the tech-savvy Noida audience. We provide local support in Noida, competitive pricing starting at ₹14,000, and fast turnaround times being part of NCR.'
    },
    {
      question: 'Do you create websites for IT companies and startups in Noida?',
      answer: 'Yes! We specialize in IT company and startup websites: Corporate Portals - Service catalogs, Technology showcase, Client testimonials, Case studies; Startup Websites - Product landing pages, Pitch decks, Investor pages, Beta signup forms; SaaS Platforms - Product demos, Pricing tables, Feature comparisons, Free trial CTAs; Features - Modern UI/UX, Responsive design, Fast loading, SEO optimized. Perfect for Noida IT companies in Sector 62, 63, 16, Film City. Starting from ₹18,000.'
    },
    {
      question: 'What is the cost of website designing in Noida?',
      answer: 'Website design pricing in Noida: Basic Website: ₹14,000 - ₹25,000, Corporate Website: ₹25,000 - ₹55,000, WordPress: ₹20,000 - ₹45,000, Startup Website: ₹18,000 - ₹50,000, E-Commerce: ₹48,000 - ₹1,50,000, SaaS Landing Page: ₹22,000 - ₹60,000. All packages include responsive design, basic SEO, and 3-month support. Being in the NCR tech hub, we understand startup budgets and offer flexible payment plans.',
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Noida businesses?',
      answer: 'Yes! Comprehensive SEO: Local SEO - Rank for Noida & NCR searches; Google My Business - Verification, optimization, reviews; NCR Targeting - Compete with Delhi/Gurugram businesses; Industry Keywords - IT, startup, corporate, e-commerce keywords; Content Marketing - Industry blogs, area guides; Technical SEO - Fast loading, mobile optimization. Basic SEO included. Advanced campaigns from ₹8,000/month.',
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
      question: 'How long does it take to create a website in Noida?',
      answer: 'Website development timeline: Basic Website: 1-2 weeks, Corporate Website: 2-4 weeks, WordPress: 2-3 weeks, Real Estate Portal: 4-8 weeks, E-Commerce: 4-8 weeks. We provide weekly updates, milestone delivery, on-site meetings in Noida. Rush delivery available. Free timeline estimation during consultation.',
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting - Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services - Registration, transfer, email hosting; Maintenance - Monthly AMC from ₹3,000/month, Updates, backups, monitoring, 99.9% uptime; Support - Email/phone/WhatsApp support. India-based servers for fast NCR loading.'
    },
    {
      question: 'Which areas of Noida do you serve?',
      answer: 'We serve all areas of Noida: Sector 62 (IT hub), Sector 63 (Software companies), Sector 16, Sector 18, Sector 58, Sector 128, Sector 132, Sector 135, Sector 144, Film City. Nearby NCR - Ghaziabad, Delhi, Faridabad, Gurugram, Greater Noida. We provide on-site consultations, local support, dedicated account manager. Serving Noida since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Noida',
    'Professional website design services in Noida including IT company websites, startup portals, e-commerce, and corporate websites.',
    'Noida'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Noida'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5355,
      longitude: 77.3910,
    },
    areaServed: [
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Delhi' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Noida',
    'Custom website design for Noida IT companies, startups, corporates. Mobile-responsive, SEO-optimized websites starting from ₹14,000.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Noida Website Designing', url: '/noida-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Noida"
        subtitle="IT Companies | Startups | Corporate Websites | NCR's Tech Hub"
        description="Leading website design company in Noida NCR. IT company websites, startup portals, corporate sites. 500+ websites. Serving Sector 62, 63, 16. Starting ₹14,000!"
        gradient="purple"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Noida
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for IT companies and startups</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Coverage Across Noida</h2>
          <p className="text-xl text-gray-600">Serving IT companies, startups and enterprises across Noida and the NCR region</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Noida Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sector 62 (IT hub)</li>
              <li>• Sector 63 (Software companies)</li>
              <li>• Sector 16 (Corporate offices)</li>
              <li>• Sector 18 (Commercial)</li>
              <li>• Sector 58</li>
              <li>• Sector 128</li>
              <li>• Sector 132</li>
              <li>• Sector 135</li>
              <li>• Sector 144</li>
              <li>• Film City (Sector 16A)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby NCR Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Greater Noida</li>
              <li>• Ghaziabad</li>
              <li>• Delhi</li>
              <li>• Faridabad</li>
              <li>• Gurugram</li>
              <li>• Meerut</li>
              <li>• Bulandshahr</li>
              <li>• Hapur</li>
              <li>• Agra</li>
              <li>• Mathura</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• IT company websites</li>
              <li>• Startup portals</li>
              <li>• Corporate sites</li>
              <li>• SEO services</li>
              <li>• On-site consultation in Noida</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'Website Design Noida', 'IT Company Website Noida', 'Startup Website Noida',
            'Corporate Website Noida', 'E-Commerce Website Noida', 'SEO Website Noida',
            'WordPress Noida', 'Web Design Sector 62', 'Landing Page Noida',
            'SaaS Website Noida', 'Real Estate Website Noida', 'Web Developer NCR'
          ].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
          <ContactForm serviceName="Website Designing" cityName="Noida" />
        </div>
      </section>
    </div>
    </>
  );
}

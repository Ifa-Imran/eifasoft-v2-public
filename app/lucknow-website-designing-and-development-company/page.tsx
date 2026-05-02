import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Lucknow | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Lucknow offering responsive web design, government portals, IT company websites, e-commerce development. 500+ websites delivered. UP capital expertise. Starting ₹14,000!',
    canonical: '/lucknow-website-designing-and-development-company',
    keywords: [
      'website designing company lucknow',
      'web design lucknow',
      'government website lucknow',
      'it company website lucknow',
      'e-commerce lucknow',
      'lucknow web designers',
      'best website company lucknow',
      'affordable website lucknow',
      'corporate website lucknow',
      'wordpress website lucknow',
      'responsive web design lucknow',
      'seo website lucknow',
      'education website lucknow',
      'startup website lucknow',
      'website design gomti nagar lucknow',
      'website company hazratganj lucknow',
      'hospital website lucknow',
      'real estate website lucknow',
      'e-governance portal lucknow',
      'website development kanpur lucknow',
      'up government website lucknow',
      'school website lucknow'
    ]
  });
}

export default function LucknowWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for UP government & corporates',
      price: '₹24,000',
      features: ['Company profile', 'Service showcase', 'Team pages', 'Contact integration']
    },
    {
      icon: '🏛️',
      title: 'Government Portals',
      description: 'E-governance & administrative websites',
      price: '₹35,000',
      features: ['Citizen services', 'Document management', 'Secure portals', 'Compliance']
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
      price: '₹15,000',
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
      icon: '💻',
      title: 'IT Company Websites',
      description: 'Professional websites for Lucknow IT sector',
      price: '₹26,000',
      features: ['Modern design', 'Service catalogs', 'Portfolio showcase', 'Career pages']
    },
    {
      icon: '📱',
      title: 'Startup Websites',
      description: 'Landing pages for startups & new ventures',
      price: '₹18,000',
      features: ['Modern UI/UX', 'Lead capture', 'Analytics', 'Social integration']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Government Projects', value: '75+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏛️ Government & PSU',
      description: 'E-governance websites for Lucknow government departments, administrative offices, and public sector undertakings.',
      features: ['Citizen portals', 'Document management', 'RTI portals', 'Tender management']
    },
    {
      title: '💻 IT & Software',
      description: 'Corporate websites for Lucknow IT companies, software firms, and technology startups in Gomti Nagar, Indira Nagar.',
      features: ['Service catalogs', 'Portfolio websites', 'Career pages', 'Client testimonials']
    },
    {
      title: '🎓 Education & E-Learning',
      description: 'Websites for Lucknow universities, schools, coaching institutes, and educational platforms.',
      features: ['Admission portals', 'Student management', 'Online courses', 'Result systems']
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Medical websites for hospitals, clinics, nursing homes, and diagnostic centres across Lucknow.',
      features: ['Doctor profiles', 'Appointment booking', 'Health blog', 'Patient portal']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property portals for builders, developers, and real estate agents across Lucknow and UP.',
      features: ['Property listings', 'Project showcases', 'Lead capture', 'EMI calculators']
    },
    {
      title: '🛍️ Retail & E-Commerce',
      description: 'Online stores and business websites for Lucknow retail chains, shops, and trading companies.',
      features: ['Product catalogs', 'Payment gateway', 'Inventory system', 'Order management']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Lucknow?',
      answer: 'EifaSoft is a leading website designing company serving Lucknow with 15+ years of experience and 500+ successful projects. We specialize in creating websites for UP government departments, IT companies, educational institutions, and corporate businesses. Our expertise includes e-governance portals, corporate websites, educational platforms, and e-commerce solutions. We understand Lucknow market as UP capital, provide local support in Gomti Nagar, Hazratganj, Indira Nagar, competitive pricing starting at ₹14,000, and websites optimized for government compliance and corporate standards.'
    },
    {
      question: 'Do you create government and e-governance websites for Lucknow?',
      answer: 'Yes! We specialize in government portals: E-Governance - Citizen service portals, Document management, RTI compliance, Tender management; Features - Secure authentication, Data encryption, Mobile accessibility, Multi-language (Hindi/English); Compliance - Government web standards, GIGW guidelines, Accessibility (WCAG); Experience - 75+ government projects delivered. Perfect for UP government departments. Starting from ₹35,000.'
    },
    {
      question: 'What is the cost of website designing in Lucknow?',
      answer: 'Website design pricing in Lucknow: Basic Website: ₹14,000 - ₹25,000, Corporate Website: ₹24,000 - ₹55,000, Government Portal: ₹35,000 - ₹1,50,000, E-Commerce: ₹45,000 - ₹1,30,000, WordPress: ₹18,000 - ₹40,000. All packages include responsive design, basic SEO, and 3-month support. Special pricing for government and educational institutions.'
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Lucknow businesses?',
      answer: 'Yes! Comprehensive SEO for Lucknow businesses: Local SEO — Rank for Lucknow & UP searches; Google My Business — Verification, optimization, and review management; UP Targeting — Compete with Kanpur, Allahabad, and other UP city businesses; Industry Keywords — Government, IT, education, healthcare, real estate keywords; Content Marketing — Industry blogs and area guides; Technical SEO — Fast loading, mobile optimization, Core Web Vitals. Basic SEO included. Advanced campaigns from ₹8,000/month.'
    },
    {
      question: 'Can you create multilingual websites for Lucknow & UP businesses?',
      answer: 'Yes! Multilingual website development for Lucknow businesses: Language Support — English, Hindi, Urdu, and regional languages; Features — Language switcher, translated content, SEO-optimized translations; Benefits — Reach Hindi and Urdu-speaking audiences across UP, better government compliance. Perfect for Lucknow government departments, educational institutions, and corporate businesses. Multilingual setup from ₹8,000 additional per language.'
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimized! Mobile Optimization - Responsive design, Touch-friendly navigation, Mobile-first indexing, Fast 4G/5G loading; Speed Optimization - Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance - Core Web Vitals optimized. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Lucknow?',
      answer: 'Website development timeline: Basic Website: 1-2 weeks, Corporate Website: 2-4 weeks, WordPress: 2-3 weeks, Real Estate Portal: 4-8 weeks, E-Commerce: 4-8 weeks. We provide weekly updates, milestone delivery, on-site meetings in Lucknow. Rush delivery available. Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting — Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services — Registration, transfer, email hosting; Maintenance — Monthly AMC from ₹3,000/month, updates, backups, monitoring, 99.9% uptime; Support — Email/phone/WhatsApp support. India-based servers optimized for fast loading across Lucknow & UP.'
    },
    {
      question: 'Which areas of Lucknow do you serve?',
      answer: 'We serve all Lucknow areas: Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Chowk, Vikas Nagar, Rajajipuram, Mahanagar, Jankipuram. Nearby UP cities — Kanpur, Barabanki, Unnao, Rae Bareli, Hardoi, Sitapur, Faizabad (Ayodhya), Lakhimpur Kheri, Sultanpur. We provide on-site consultations, local support, and a dedicated account manager. Serving UP capital since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Lucknow',
    'Professional website design services in Lucknow including government portals, corporate websites, IT company sites, and e-commerce development.',
    'Lucknow'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Lucknow'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Kanpur' },
      { '@type': 'City', name: 'Barabanki' },
      { '@type': 'City', name: 'Unnao' },
      { '@type': 'City', name: 'Rae Bareli' },
      { '@type': 'City', name: 'Ayodhya' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Lucknow',
    'Custom website design for Lucknow government, IT sector, education. Mobile-responsive, compliant websites starting from ₹14,000.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Lucknow Website Designing', url: '/lucknow-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Lucknow"
        subtitle="Government | IT Sector | Education | Corporate Websites"
        description="Leading website design company in Lucknow. E-governance portals, IT company websites, educational platforms. 500+ websites. Serving UP capital. Starting ₹14,000!"
        gradient="purple"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Lucknow
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for government, IT, and corporate sector</p>
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
            <p className="text-xl text-blue-100">Trusted by Lucknow government & businesses</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Coverage Across Lucknow</h2>
          <p className="text-lg text-gray-600">Serving businesses across Lucknow and nearby UP cities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Lucknow Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Gomti Nagar</li>
              <li>• Hazratganj</li>
              <li>• Indira Nagar</li>
              <li>• Aliganj</li>
              <li>• Alambagh</li>
              <li>• Chowk</li>
              <li>• Vikas Nagar</li>
              <li>• Rajajipuram</li>
              <li>• Mahanagar</li>
              <li>• Jankipuram</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby UP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Kanpur</li>
              <li>• Barabanki</li>
              <li>• Hardoi</li>
              <li>• Unnao</li>
              <li>• Rae Bareli</li>
              <li>• Sitapur</li>
              <li>• Faizabad (Ayodhya)</li>
              <li>• Lakhimpur Kheri</li>
              <li>• Sultanpur</li>
              <li>• Pratapgarh</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site meetings in Lucknow</li>
              <li>• Remote project management</li>
              <li>• WhatsApp project updates</li>
              <li>• Post-launch support</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'Web Design Lucknow', 'Government Portal Lucknow', 'IT Company Website Lucknow',
            'Education Website Lucknow', 'E-Commerce Lucknow', 'SEO Services Lucknow',
            'Website Gomti Nagar', 'Website Hazratganj', 'Corporate Website Lucknow',
            'WordPress Lucknow', 'Startup Website Lucknow', 'Web Design Kanpur'
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
          <ContactForm serviceName="Website Designing" cityName="Lucknow" />
        </div>
      </section>
    </div>
    </>
  );
}

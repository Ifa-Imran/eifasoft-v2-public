import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Kanpur | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Kanpur offering responsive web design, manufacturing websites, leather industry portals, textile websites, e-commerce. 500+ websites. Industrial city expertise. Starting ₹14,000!',
    canonical: '/kanpur-website-designing-and-development-company',
    keywords: [
      'website designing company kanpur',
      'web design kanpur',
      'manufacturing website kanpur',
      'leather industry website',
      'textile website kanpur',
      'kanpur web designers',
      'best website company kanpur',
      'affordable website kanpur',
      'corporate website kanpur',
      'ecommerce website kanpur',
      'wordpress website kanpur',
      'b2b website kanpur',
      'leather export website kanpur',
      'responsive web design kanpur',
      'seo website kanpur',
      'website design civil lines kanpur',
      'website company kakadeo kanpur',
      'startup website kanpur',
      'website development lucknow kanpur',
      'industrial website kanpur',
      'real estate website kanpur',
      'hospital website kanpur'
    ]
  });
}

export default function KanpurWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏭',
      title: 'Manufacturing Websites',
      description: 'Industrial websites for Kanpur manufacturers',
      price: '₹28,000',
      features: ['Product catalog', 'B2B portals', 'Inquiry forms', 'Export documentation']
    },
    {
      icon: '👔',
      title: 'Leather & Textile Websites',
      description: 'Specialized websites for leather and textile industry',
      price: '₹26,000',
      features: ['Product showcase', 'Wholesale inquiry', 'Export catalogs', 'Multi-language']
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for companies',
      price: '₹24,000',
      features: ['Company profile', 'Service showcase', 'Team pages', 'Contact integration']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores for retail businesses',
      price: '₹45,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory', 'Order management']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites for all businesses',
      price: '₹14,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'Mobile responsive']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites',
      price: '₹20,000',
      features: ['Custom themes', 'Plugin integration', 'Training', 'Content management']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Industrial Projects', value: '140+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'Websites for Kanpur manufacturing sector including leather tanneries, textile mills, and engineering units with B2B portals.',
      features: ['Product catalogs', 'B2B inquiry forms', 'Export documentation', 'Supplier portals']
    },
    {
      title: '👔 Leather & Textile',
      description: 'Specialized websites for Kanpur leather and textile industry with product showcases and wholesale inquiry systems.',
      features: ['Product galleries', 'Wholesale catalogs', 'Sample requests', 'Trade show integration']
    },
    {
      title: '🏪 Retail & Trading',
      description: 'E-commerce and business websites for Kanpur retail shops, trading companies, and distributors.',
      features: ['Online catalogs', 'Price lists', 'Dealer portals', 'Order management']
    },
    {
      title: '🏥 Healthcare & Clinics',
      description: 'Medical websites with appointment booking for hospitals, clinics, and diagnostic centres in Kanpur.',
      features: ['Doctor profiles', 'Appointment booking', 'Health blog', 'Patient portal']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property portals for builders, developers, and real estate agents operating across Kanpur and UP.',
      features: ['Property listings', 'Project showcases', 'Lead capture', 'EMI calculators']
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Websites for schools, coaching institutes, and colleges across Kanpur with student portals and admission forms.',
      features: ['Online admission', 'Fee payment', 'Student portal', 'Course listings']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Kanpur?',
      answer: 'EifaSoft is a leading website designing company serving Kanpur with 15+ years of experience and 500+ successful projects. We specialize in websites for Kanpur\'s leather & textile industry, manufacturing sector, corporate offices, and retail businesses. Our expertise includes B2B portals, leather export websites, manufacturing catalogs, e-commerce stores, and professional business sites. We understand the Kanpur industrial market, provide local support, competitive pricing starting at ₹14,000, and websites optimized for UP & national audiences.'
    },
    {
      question: 'Do you create B2B and export websites for Kanpur leather & textile businesses?',
      answer: 'Yes! We specialize in B2B and export websites for Kanpur\'s famous leather and textile industry: Product Showcases — High-quality product galleries, technical specifications, export catalogs; B2B Inquiry — Wholesale inquiry forms, sample request systems, RFQ portals; Export Features — Multi-language support, international shipping info, export documentation; Features — Mobile-responsive, SEO optimized, fast loading. Perfect for Kanpur leather tanneries, textile mills, and apparel exporters. Starting from ₹26,000.'
    },
    {
      question: 'What is the cost of website designing in Kanpur?',
      answer: 'Website design pricing in Kanpur: Basic Business Website: ₹14,000 – ₹22,000, Corporate Website: ₹24,000 – ₹50,000, Manufacturing/B2B Portal: ₹28,000 – ₹70,000, Leather/Textile Export Website: ₹26,000 – ₹65,000, E-Commerce: ₹45,000 – ₹1,40,000, WordPress: ₹20,000 – ₹42,000. All packages include responsive design, basic SEO, and 3-month support. Kanpur-competitive pricing with quality standards.'
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Kanpur businesses?',
      answer: 'Yes! Comprehensive SEO for Kanpur businesses: Local SEO — Rank for Kanpur & UP searches; Google My Business — Verification, optimization, and review management; Industry Keywords — Leather, textile, manufacturing, and corporate keywords; Content Marketing — Industry blogs and area guides; Technical SEO — Fast loading, mobile optimization, Core Web Vitals. Basic SEO included with every website. Advanced campaigns from ₹8,000/month.'
    },
    {
      question: 'Can you create multilingual websites for Kanpur export businesses?',
      answer: 'Yes! Multilingual website development for Kanpur exporters: Language Support — English, Hindi, Arabic, Chinese, and more; Features — Language switcher, translated content, SEO-optimized translations; Benefits — Reach global leather and textile buyers, better international engagement. Perfect for Kanpur leather exporters and textile manufacturers. Multilingual setup from ₹8,000 additional per language.'
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimized! Mobile Optimization - Responsive design, Touch-friendly navigation, Mobile-first indexing, Fast 4G/5G loading; Speed Optimization - Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance - Core Web Vitals optimized. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Kanpur?',
      answer: 'Website development timeline in Kanpur: Basic Website: 1–2 weeks, Corporate Website: 2–4 weeks, WordPress: 2–3 weeks, Manufacturing/B2B Portal: 3–6 weeks, E-Commerce: 4–8 weeks. We provide weekly updates, milestone-based delivery, and on-site meetings in Kanpur. Rush delivery available. Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting - Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services - Registration, transfer, email hosting; Maintenance - Monthly AMC from ₹3,000/month, Updates, backups, monitoring, 99.9% uptime; Support - Email/phone/WhatsApp support. India-based servers for fast NCR loading.'
    },
    {
      question: 'Which areas of Kanpur do you serve?',
      answer: 'We serve all Kanpur areas: Civil Lines, Kakadeo, Kidwai Nagar, Swaroop Nagar, Govind Nagar, Kalyanpur, Armapur, Panki, Fazalganj. Nearby UP cities — Lucknow, Unnao, Fatehpur, Rae Bareli, Jhansi, Banda. We provide on-site consultations, local support, and a dedicated account manager. Serving Kanpur since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Kanpur',
    'Professional website design for Kanpur manufacturing, leather industry, textile sector, and businesses.',
    'Kanpur'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Kanpur'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.4499,
      longitude: 80.3319,
    },
    areaServed: [
      { '@type': 'City', name: 'Kanpur' },
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Unnao' },
      { '@type': 'City', name: 'Fatehpur' },
      { '@type': 'City', name: 'Rae Bareli' },
      { '@type': 'City', name: 'Jhansi' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Kanpur',
    'Custom website design for Kanpur industries. Manufacturing, leather, textile websites starting from ₹14,000.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Kanpur Website Designing', url: '/kanpur-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Kanpur"
        subtitle="Manufacturing | Leather | Textile | Industrial Websites"
        description="Leading website design in Kanpur. Manufacturing portals, leather industry sites, textile websites. 500+ websites. Industrial expertise! Starting ₹14,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Kanpur
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for Kanpur industries &amp; businesses</p>
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
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Kanpur</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Coverage Across Kanpur</h2>
          <p className="text-lg text-gray-600">Serving businesses in every corner of Kanpur and nearby UP cities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Kanpur Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Civil Lines</li>
              <li>• Kakadeo</li>
              <li>• Kidwai Nagar</li>
              <li>• Swaroop Nagar</li>
              <li>• Govind Nagar</li>
              <li>• Kalyanpur</li>
              <li>• Armapur</li>
              <li>• Panki</li>
              <li>• Fazalganj</li>
              <li>• Parade Ground</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby UP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Lucknow</li>
              <li>• Unnao</li>
              <li>• Fatehpur</li>
              <li>• Rae Bareli</li>
              <li>• Banda</li>
              <li>• Hamirpur</li>
              <li>• Etawah</li>
              <li>• Mainpuri</li>
              <li>• Allahabad (Prayagraj)</li>
              <li>• Jhansi</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site meetings in Kanpur</li>
              <li>• Remote project management</li>
              <li>• WhatsApp project updates</li>
              <li>• Post-launch support</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'Web Design Kanpur', 'Manufacturing Website Kanpur', 'Leather Industry Website',
            'Textile Website Kanpur', 'B2B Portal Kanpur', 'Export Website Kanpur',
            'E-Commerce Kanpur', 'Corporate Website Kanpur', 'SEO Services Kanpur',
            'Website Civil Lines Kanpur', 'Website Kakadeo Kanpur', 'Web Design Lucknow'
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
          <ContactForm serviceName="Website Designing" cityName="Kanpur" />
        </div>
      </section>
    </div>
    </>
  );
}

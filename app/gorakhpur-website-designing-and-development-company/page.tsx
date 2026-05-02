import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Gorakhpur | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Gorakhpur offering responsive web design, e-commerce, educational websites, WordPress development. 500+ websites delivered. Eastern UP expertise. Starting ₹13,000!',
    canonical: '/gorakhpur-website-designing-and-development-company',
    keywords: [
      'website designing company gorakhpur',
      'web design gorakhpur',
      'website development gorakhpur',
      'gorakhpur web designers',
      'ecommerce website gorakhpur',
      'educational website gorakhpur',
      'hospital website gorakhpur',
      'gorakhpur business website',
      'best website company gorakhpur',
      'affordable website gorakhpur',
      'wordpress development gorakhpur',
      'school website gorakhpur',
      'college website gorakhpur',
      'website design eastern up',
      'web development eastern up',
      'responsive web design gorakhpur',
      'website company deoria kushinagar',
      'real estate website gorakhpur',
      'seo website gorakhpur',
      'startup website gorakhpur',
      'corporate website gorakhpur',
      'gorakhpur it company'
    ]
  });
}

export default function GorakhpurWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for NCR companies',
      price: '₹22,000',
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
      price: '₹13,000',
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
      icon: '🎓',
      title: 'Educational Websites',
      description: 'Websites for schools, colleges, coaching institutes',
      price: '₹28,000',
      features: ['Student portals', 'Online admissions', 'Result systems', 'Fee management']
    },
    {
      icon: '🏥',
      title: 'Hospital Websites',
      description: 'Healthcare portals for hospitals and clinics',
      price: '₹32,000',
      features: ['Appointment booking', 'Doctor profiles', 'Patient portal', 'Services catalog']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Eastern UP Projects', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🎓 Education Sector',
      description: 'Digital solutions for Gorakhpur\'s educational institutions, schools, colleges, and coaching centers including DDU Gorakhpur University area.',
      features: ['Student management', 'Online admissions', 'E-learning platforms', 'Result portals']
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Hospital websites and medical portals for Gorakhpur\'s healthcare sector including BRD Medical College and private clinics.',
      features: ['Appointment systems', 'Patient portals', 'Doctor profiles', 'Medical services']
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores and business websites for Gorakhpur\'s retail shops, trading businesses, and local markets.',
      features: ['Product catalogs', 'Online ordering', 'Inventory management', 'Payment gateway']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property portals and builder websites for real estate developers and housing projects in Gorakhpur and Eastern UP.',
      features: ['Property listings', 'Project showcases', 'Lead capture', 'EMI calculators']
    },
    {
      title: '💼 Corporate & Business Services',
      description: 'Professional websites for corporate offices, service companies, and NGOs operating in Gorakhpur and surrounding districts.',
      features: ['Company profile', 'Service catalog', 'Client testimonials', 'Career pages']
    },
    {
      title: '🌾 Agriculture & Food Processing',
      description: 'Digital presence for agri businesses, food processing units, and agricultural cooperatives across Gorakhpur and Eastern UP.',
      features: ['Product showcase', 'Wholesale inquiry', 'Farmer portals', 'Export documentation']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Gorakhpur?',
      answer: 'EifaSoft is a leading website designing company serving Gorakhpur and Eastern UP with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Gorakhpur\'s education sector, healthcare institutions, retail businesses, and service providers. Our expertise includes educational portals, hospital websites, e-commerce platforms, and professional business sites. We understand the Gorakhpur market, provide local support, competitive pricing starting at ₹13,000, and websites optimized for Eastern UP audiences.'
    },
    {
      question: 'Do you create educational websites for schools and colleges in Gorakhpur?',
      answer: 'Yes! We specialize in educational websites: School/College Portals - Student information systems, Online admission forms, Fee payment integration, Result publishing; E-Learning - Video lectures, Study material, Online tests, Assignment submission; Features - Parent portals, Attendance tracking, Library management, Alumni networks. Perfect for Gorakhpur institutions including areas near BRD Medical College, DDU Gorakhpur University. Starting from ₹28,000.'
    },
    {
      question: 'What is the cost of website designing in Gorakhpur?',
      answer: 'Website design pricing in Gorakhpur: Basic Website: ₹13,000 - ₹22,000, Educational Website: ₹28,000 - ₹75,000, Hospital Website: ₹32,000 - ₹90,000, E-Commerce: ₹45,000 - ₹1,40,000, WordPress: ₹18,000 - ₹42,000. All packages include responsive design, basic SEO, and 3-month support. Competitive Eastern UP pricing with quality standards.'
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Gorakhpur businesses?',
      answer: 'Yes! Comprehensive SEO services for Gorakhpur businesses: Local SEO — Rank for Gorakhpur & Eastern UP searches; Google My Business — Verification, optimization, and review management; Eastern UP Targeting — Compete with major city businesses online; Industry Keywords — Education, healthcare, retail, and real estate keywords; Content Marketing — Industry blogs and area guides; Technical SEO — Fast loading, mobile optimization. Basic SEO included with every website. Advanced campaigns from ₹8,000/month.'
    },
    {
      question: 'Can you create multilingual websites for Gorakhpur audiences?',
      answer: 'Yes! Multilingual website development for Gorakhpur: Language Support — English, Hindi, and regional languages; Features — Language switcher, translated content, SEO-optimized translations; Benefits — Reach Hindi-speaking audience across Eastern UP, better engagement with local customers. Perfect for Gorakhpur & Eastern UP businesses. Multilingual setup from ₹8,000 additional per language.'
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimized! Mobile Optimization - Responsive design, Touch-friendly navigation, Mobile-first indexing, Fast 4G/5G loading; Speed Optimization - Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance - Core Web Vitals optimized. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Gorakhpur?',
      answer: 'Website development timeline: Basic Website: 1–2 weeks, Corporate Website: 2–4 weeks, WordPress: 2–3 weeks, Educational Portal: 4–8 weeks, E-Commerce: 4–8 weeks. We provide weekly updates, milestone-based delivery, and on-site meetings in Gorakhpur. Rush delivery available. Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting - Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services - Registration, transfer, email hosting; Maintenance - Monthly AMC from ₹3,000/month, Updates, backups, monitoring, 99.9% uptime; Support - Email/phone/WhatsApp support. India-based servers for fast NCR loading.'
    },
    {
      question: 'Which areas of Gorakhpur do you serve?',
      answer: 'We serve all Gorakhpur areas: Rapti Nagar, Civil Lines, BRD Medical College area, DDU Gorakhpur University area, Golghar, Bank Road, Railway Road, Nearby Eastern UP - Deoria, Kushinagar, Maharajganj, Basti. We provide on-site consultations, local support, dedicated account manager. Serving Gorakhpur since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Gorakhpur',
    'Professional website design services in Gorakhpur including educational websites, hospital portals, e-commerce, and business websites.',
    'Gorakhpur'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Gorakhpur'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7606,
      longitude: 83.3732,
    },
    areaServed: [
      { '@type': 'City', name: 'Gorakhpur' },
      { '@type': 'City', name: 'Deoria' },
      { '@type': 'City', name: 'Kushinagar' },
      { '@type': 'City', name: 'Maharajganj' },
      { '@type': 'City', name: 'Basti' },
      { '@type': 'City', name: 'Varanasi' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Gorakhpur',
    'Custom website design for Gorakhpur educational institutions, hospitals, businesses. Mobile-responsive, SEO-optimized websites starting from ₹13,000.',
    '22000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Gorakhpur Website Designing', url: '/gorakhpur-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Gorakhpur"
        subtitle="Education | Healthcare | Business Websites | Eastern UP Expertise"
        description="Leading website design company in Gorakhpur. Educational portals, hospital websites, e-commerce. 500+ websites. Serving Gorakhpur and Eastern UP. Starting ₹13,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Gorakhpur
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for Eastern UP businesses</p>
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
            <p className="text-xl text-blue-100">Trusted by Gorakhpur businesses</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Businesses Across Gorakhpur &amp; Eastern UP</h2>
          <p className="text-xl text-gray-600">Local expertise with region-wide digital delivery</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Gorakhpur</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Rapti Nagar',
                'Civil Lines',
                'Golghar',
                'Bank Road',
                'Railway Road',
                'Taramandal',
                'Shahpur',
                'Medical College Road',
                'Shastri Chowk',
                'Betiahata',
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
                'Deoria',
                'Kushinagar',
                'Maharajganj',
                'Basti',
                'Sant Kabir Nagar',
                'Siddharthnagar',
                'Azamgarh',
                'Varanasi',
                'Faizabad (Ayodhya)',
                'Mau',
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
                'Eastern UP Industry Focus',
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
            'Website Company Gorakhpur',
            'Educational Website Gorakhpur',
            'Hospital Website Gorakhpur',
            'E-Commerce Gorakhpur',
            'Web Design Eastern UP',
            'School Website Gorakhpur',
            'Real Estate Website Gorakhpur',
            'Website Design Deoria',
            'Web Development Kushinagar',
            'Corporate Website Gorakhpur',
            'Affordable Website Gorakhpur',
            'SEO Website Eastern UP',
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
          <ContactForm serviceName="Website Design & Development" cityName="Gorakhpur" />
        </div>
      </section>
    </div>
    </>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Surat | Custom Software Gujarat | EifaSoft',
    description: 'Leading software development company in Surat, Gujarat. Custom ERP, CRM, diamond industry software, textile ERP, SaaS, cloud applications and enterprise solutions. 500+ projects. Starting ₹2,00,000. Free consultation!',
    canonical: '/surat-software-development-company',
    keywords: [
      'software development company surat',
      'software company surat',
      'custom software surat',
      'it company surat gujarat',
      'erp software surat',
      'crm software surat',
      'diamond industry software surat',
      'textile erp surat',
      'web application development surat',
      'enterprise software surat',
      'saas development surat',
      'cloud software surat',
      'ecommerce software surat',
      'startup software surat',
      'software developer surat',
      'inventory software surat',
      'billing software surat',
      'b2b software surat',
      'software development gujarat',
      'it services surat',
      'api development surat',
      'mlm software surat',
    ],
  });
}

export default function SuratSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Tailored ERP, CRM, HRM, and inventory systems for Surat\'s diamond, textile, and industrial businesses',
      price: '₹2,00,000',
      features: ['ERP & CRM systems', 'Inventory management', 'Billing & accounting', 'Custom workflows'],
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description: 'Large-scale B2B platforms, supply chain systems, and warehouse management for Surat industries',
      price: '₹5,00,000',
      features: ['ERP implementation', 'Supply chain systems', 'Warehouse management', 'B2B platforms'],
    },
    {
      icon: '☁️',
      title: 'Cloud Applications & SaaS',
      description: 'Scalable cloud-based software and SaaS products for Surat startups and growing businesses',
      price: '₹3,00,000',
      features: ['SaaS development', 'Cloud migration', 'AWS/Azure deployment', 'Multi-tenant systems'],
    },
    {
      icon: '📊',
      title: 'Business Intelligence & Analytics',
      description: 'Data-driven dashboards, reporting, and analytics tools for Surat business decision-making',
      price: '₹1,50,000',
      features: ['Analytics dashboards', 'Reporting tools', 'Data visualisation', 'KPI tracking'],
    },
    {
      icon: '🔗',
      title: 'API & Integration Services',
      description: 'Seamless integration of payment gateways, third-party APIs, and legacy system connectors',
      price: '₹75,000',
      features: ['Payment gateway APIs', 'Third-party integrations', 'Custom REST APIs', 'SMS/email services'],
    },
    {
      icon: '🛡️',
      title: 'Maintenance & Support',
      description: 'Ongoing software maintenance, security patches, and performance optimisation for Surat clients',
      price: '₹50,000/yr',
      features: ['Bug fixes & updates', 'Security patches', 'Performance tuning', 'AMC contracts'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Gujarat Clients', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '💎 Diamond & Gems Industry',
      description: 'Surat processes 90% of the world\'s diamonds. We build diamond trading software, inventory systems, B2B portals, export documentation, and auction platforms for the gems industry.',
      features: ['Diamond inventory systems', 'B2B trading portals', 'Export documentation', 'Auction platforms'],
    },
    {
      title: '🧵 Textile & Fashion Industry',
      description: 'Surat is India\'s textile capital. We develop order management systems, fabric ERP, weaving unit software, and wholesale trading platforms for textile manufacturers and exporters.',
      features: ['Textile ERP systems', 'Order management', 'Production planning', 'Wholesale portals'],
    },
    {
      title: '🏗️ Chemical & Petrochemical',
      description: 'Software for Surat\'s chemical plants and Hazira industrial corridor — safety management, batch processing, inventory, and compliance systems.',
      features: ['Batch processing software', 'Safety & compliance', 'Inventory management', 'Quality control'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'E-commerce platforms, POS systems, and retail management software for Surat\'s thriving retail sector and online traders.',
      features: ['E-commerce platforms', 'POS & billing systems', 'Inventory & GST', 'Multi-store management'],
    },
    {
      title: '🚢 Export & Logistics',
      description: 'Export documentation, freight management, logistics tracking, and customs compliance software for Surat\'s major export businesses.',
      features: ['Export documentation', 'Freight management', 'Customs compliance', 'Logistics tracking'],
    },
    {
      title: '🏦 Finance & NBFC',
      description: 'Loan management software, digital KYC, collection systems, and fintech solutions for Surat\'s NBFCs, cooperative banks, and financial services.',
      features: ['Loan management systems', 'Digital KYC software', 'Collection apps', 'Fintech platforms'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Surat?',
      answer: 'EifaSoft is a leading software development company with 15+ years of experience and 500+ successful projects. We have deep domain expertise in Surat\'s core industries — diamond, textile, chemical, and logistics. Advantages: Local Surat support team, Competitive pricing from ₹2,00,000, Gujarati & English communication, Agile delivery with weekly updates, Post-launch AMC plans. Our developers are specialists in ERP, CRM, SaaS, and enterprise software for Gujarat businesses.',
    },
    {
      question: 'Do you develop ERP software for diamond and textile industries in Surat?',
      answer: 'Yes! We are specialists in industry-specific ERP for Surat: Diamond ERP — Inventory management, B2B buyer portal, Export documentation, Auction/bidding, Grading & valuation; Textile ERP — Order management, Production planning, Fabric inventory, Weaving unit management, Wholesale billing; Features — GST-ready invoicing, Multi-currency, Export compliance, Gujarati language support. Starting from ₹3,00,000.',
    },
    {
      question: 'How much does custom software development cost in Surat?',
      answer: 'Software development pricing in Surat: Basic Business Software: ₹2,00,000–₹5,00,000, Web Application: ₹1,00,000–₹3,00,000, SaaS Product: ₹3,00,000–₹10,00,000, Enterprise ERP (Diamond/Textile): ₹5,00,000–₹20,00,000, Cloud Migration: ₹1,50,000–₹5,00,000, API Integration: ₹75,000–₹2,00,000. All include development, testing, deployment, and 3-month support. Flexible payment plans for Surat SMEs.',
    },
    {
      question: 'What technologies do you use for software development?',
      answer: 'We use modern, proven technologies: Frontend — React.js, Angular, Vue.js, Next.js; Backend — Node.js, Python/Django, Java/Spring Boot, .NET Core, PHP/Laravel; Mobile — Flutter, React Native, iOS (Swift), Android (Kotlin); Database — MySQL, PostgreSQL, MongoDB, Redis; Cloud — AWS, Azure, Google Cloud; DevOps — Docker, Kubernetes, CI/CD pipelines. We select the optimal stack for your project requirements and scalability needs.',
    },
    {
      question: 'Can you develop SaaS products for Surat startups?',
      answer: 'Absolutely! We are a preferred SaaS development partner for Surat startups: SaaS Features — Multi-tenant architecture, Subscription billing, User onboarding flows, Analytics dashboards, Admin panels; Infrastructure — Auto-scaling on AWS/Azure, 99.9% uptime SLA, CDN integration, Automated backups; Go-to-market — MVP in 8–12 weeks, Iterative releases, Investor demo builds. SaaS MVP starting from ₹3,00,000.',
    },
    {
      question: 'Do you provide export documentation and compliance software for Surat businesses?',
      answer: 'Yes! Surat is one of India\'s largest export hubs. We build: Export Software — Invoice & packing list generation, GST & customs documentation, DGFT compliance, Shipping integration (DHL, FedEx, BlueDart); Import Software — Import duty calculation, Customs clearance, BOE generation; Features — Multi-currency, FIRC tracking, Letter of credit management, Bank realization. Starting from ₹2,00,000.',
    },
    {
      question: 'Can you build software with Gujarati language support?',
      answer: 'Yes! Multilingual software development: Languages — Gujarati, Hindi, English; Features — Unicode Gujarati font support, Language switcher, Localised number & date formats, Regional content; Business Benefits — Better user adoption among local traders, Higher engagement, Reduced training time; Popular for retail billing, textile ERP, and cooperative society software. Gujarati language module from ₹20,000 additional.',
    },
    {
      question: 'What is the typical development timeline for custom software?',
      answer: 'Development timelines in Surat: Basic Web Application: 6–10 weeks, Custom Business Software: 10–16 weeks, Textile/Diamond ERP: 16–24 weeks, SaaS Product MVP: 8–12 weeks, Enterprise Integration: 12–20 weeks. We follow agile 2-week sprints with regular demos, milestone-based delivery, and weekly progress updates. On-site meetings available in Surat throughout the project.',
    },
    {
      question: 'Do you provide post-launch maintenance and support in Surat?',
      answer: 'Yes, comprehensive support services: Free Support — 3 months post-launch (bug fixes, minor changes); AMC Plans — Starting ₹50,000/year for ongoing maintenance; Services — Bug fixes, Security patches, Performance optimisation, Feature additions, Server management; Response Time — 4-hour response for critical issues, 24-hour for standard requests; Dedicated account manager for all Surat clients.',
    },
    {
      question: 'Which areas of Surat do you serve?',
      answer: 'We serve all areas of Surat: Ring Road, Varachha, Adajan, Katargam, Athwalines, City Light, Vesu, Pal, Udhna, Sachin GIDC. Nearby Gujarat cities — Navsari, Bardoli, Ankleshwar, Bharuch, Valsad. We provide on-site consultations, dedicated Gujarati-speaking account managers, and remote delivery across Gujarat and India. Serving Surat businesses since 2008.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Surat'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1702,
      longitude: 72.8311,
    },
    areaServed: [
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Navsari' },
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Bardoli' },
      { '@type': 'City', name: 'Ankleshwar' },
      { '@type': 'City', name: 'Valsad' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Surat',
    'Custom software development in Surat including ERP for diamond and textile industries, SaaS products, cloud applications, and enterprise solutions for Gujarat businesses.',
    'Surat'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Surat',
    'Professional software development for Surat businesses — diamond ERP, textile ERP, cloud SaaS, enterprise systems. 15+ years experience, 500+ projects. Starting ₹2,00,000.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Surat', url: '/surat-software-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Software Development Company in Surat"
        subtitle="Diamond ERP | Textile ERP | SaaS | Cloud | Enterprise"
        description="Leading software development company in Surat, Gujarat. Custom ERP for diamond & textile industries, SaaS products, cloud applications, and enterprise solutions. 500+ projects delivered. Starting ₹2,00,000!"
        gradient="blue"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Software Development Services in Surat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions for Surat&apos;s diamond, textile, and industrial businesses
            </p>
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

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Surat?</h2>
              <p className="text-xl text-blue-100">Trusted by 500+ businesses across Surat and Gujarat</p>
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

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies for robust, scalable software
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ React.js</li>
                <li>✓ Angular</li>
                <li>✓ Vue.js</li>
                <li>✓ Next.js</li>
                <li>✓ TypeScript</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Node.js</li>
                <li>✓ Python/Django</li>
                <li>✓ Java/Spring Boot</li>
                <li>✓ .NET Core</li>
                <li>✓ PHP/Laravel</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Mobile</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Flutter</li>
                <li>✓ React Native</li>
                <li>✓ iOS (Swift)</li>
                <li>✓ Android (Kotlin)</li>
                <li>✓ Ionic</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Database & Cloud</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ MySQL/PostgreSQL</li>
                <li>✓ MongoDB</li>
                <li>✓ AWS</li>
                <li>✓ Azure</li>
                <li>✓ Google Cloud</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Specialised software for Surat&apos;s key economic sectors
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
              Serving All Areas of Surat &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Surat. Remote delivery across Gujarat and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Surat</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Ring Road', 'Varachha', 'Adajan', 'Katargam', 'Athwalines', 'City Light', 'Vesu', 'Pal', 'Udhna', 'Sachin GIDC'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Gujarat Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Navsari', 'Bardoli', 'Ankleshwar', 'Bharuch', 'Valsad', 'Vyara', 'Mandvi', 'Kim', 'Tapi', 'Narmada'].map((city) => (
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
                  'On-site consultation in Surat',
                  'Gujarati & English support',
                  'Remote development teams',
                  'Dedicated project managers',
                  '24/7 technical support',
                  'Training & documentation',
                  'Maintenance & AMC plans',
                  'Source code handover',
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
              'Software Development Surat', 'ERP Software Surat', 'Diamond Industry Software Surat',
              'Textile ERP Surat', 'Custom Software Surat', 'SaaS Development Surat',
              'IT Company Surat Gujarat', 'Cloud Software Surat', 'API Development Surat',
              'Software Development Gujarat', 'E-Commerce Software Surat', 'Enterprise Software Surat',
            ].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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
                Transparent Pricing for Surat
              </h2>
              <p className="text-xl text-gray-600">Choose the package that fits your business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₹2,00,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Small business software</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Up to 5 modules</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>3 months support</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Source code included</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-xl transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Package</h3>
                <div className="text-4xl font-bold text-white mb-6">₹5,00,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Custom ERP/CRM</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Unlimited modules</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>API integrations</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Training included</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₹10,00,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Large-scale ERP/SaaS</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Advanced features</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>12 months support</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Dedicated team</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Priority support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
                Get Free Consultation in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your software project in Surat
              </p>
            </div>
            <ContactForm serviceName="Software Development" cityName="Surat" />
          </div>
        </section>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Chandigarh | Custom Software Punjab | EifaSoft',
    description: 'Top-rated software development company in Chandigarh, Punjab. Custom software, ERP, CRM, cloud solutions, AI & automation, SaaS products for Punjab & Haryana businesses. 500+ projects delivered. Serving Chandigarh, Mohali, Panchkula, Ambala & across North India. Starting ₹2,00,000. Free consultation!',
    canonical: '/chandigarh-software-development-company',
    keywords: [
      'software development company chandigarh',
      'software company chandigarh',
      'custom software development chandigarh',
      'software development chandigarh punjab',
      'it company chandigarh',
      'erp software chandigarh',
      'crm software chandigarh',
      'cloud software chandigarh',
      'saas development chandigarh',
      'ai software development chandigarh',
      'enterprise software chandigarh',
      'web application development chandigarh',
      'software developers chandigarh',
      'best software company chandigarh',
      'it services chandigarh punjab haryana',
      'software development mohali',
      'software development panchkula',
      'software development ambala',
      'software development ludhiana',
      'chandigarh software solutions',
      'startup software development chandigarh',
      'software company tricity chandigarh',
    ],
  });
}

export default function ChandigarhSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Bespoke, scalable software tailored to your business requirements in Punjab & Haryana',
      price: '₹2,00,000',
      features: ['Requirements analysis', 'Custom features', 'Scalable architecture', 'AMC support'],
    },
    {
      icon: '🏢',
      title: 'Enterprise ERP & CRM',
      description: 'Large-scale ERP and CRM systems for Chandigarh businesses and tricity enterprises',
      price: '₹3,00,000',
      features: ['ERP systems', 'Supply chain', 'Multi-location', 'Reporting & analytics'],
    },
    {
      icon: '☁️',
      title: 'Cloud & SaaS Solutions',
      description: 'Modern cloud-based applications and SaaS products built for scale',
      price: '₹2,50,000',
      features: ['SaaS products', 'AWS / Azure / GCP', 'Microservices', 'Auto-scaling'],
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Intelligent business automation using AI, ML, and process automation tools',
      price: '₹3,50,000',
      features: ['Process automation', 'AI integration', 'Chatbots', 'ML model development'],
    },
    {
      icon: '🔗',
      title: 'System Integration & APIs',
      description: 'Seamlessly connect your business systems and third-party platforms',
      price: '₹1,50,000',
      features: ['API development', 'Third-party APIs', 'Data migration', 'Legacy modernisation'],
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'High-performance web applications using modern frontend and backend frameworks',
      price: '₹1,50,000',
      features: ['React / Angular', 'RESTful APIs', 'Database design', 'Cloud deployment'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Tricity Clients', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🏢 IT & Tech Startups',
      description: 'Custom software and SaaS products for Chandigarh IT Park and Mohali IT hub startups — from MVP to full-scale enterprise systems.',
      features: ['MVP development', 'SaaS architecture', 'API-first design', 'Cloud deployment'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'ERP and portal software for Chandigarh universities, colleges, and the city\'s many competitive exam coaching institutes.',
      features: ['Student management', 'Online admissions', 'Fee management', 'Result portals'],
    },
    {
      title: '🏥 Healthcare & Pharma',
      description: 'Hospital management software for Chandigarh hospitals, PGI affiliated clinics, and pharmaceutical businesses across Punjab.',
      features: ['Patient records (EMR)', 'OPD & IPD', 'Billing & insurance', 'Pharmacy module'],
    },
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'ERP solutions for Chandigarh Industrial Area Phase 1 & 2 manufacturers — production, inventory, GST billing, and dealer management.',
      features: ['Production planning', 'Inventory control', 'GST billing', 'Dealer portals'],
    },
    {
      title: '🌾 Agriculture & Agri-Tech',
      description: 'Agri-tech software for Punjab\'s farming ecosystem — procurement, mandi tracking, supply chain, and farmer management platforms.',
      features: ['Procurement systems', 'Mandi price tracking', 'Supply chain', 'Farmer portal'],
    },
    {
      title: '🏗️ Real Estate & Construction',
      description: 'CRM and project management for Chandigarh and Mohali real estate developers, builders, and housing societies.',
      features: ['Lead & CRM', 'Project tracking', 'Payment schedules', 'Customer portal'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Chandigarh?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software in Chandigarh and the tricity (Mohali, Panchkula). We have 50+ expert developers, 500+ projects delivered, and 98% client satisfaction. We serve IT startups in Chandigarh IT Park, manufacturers in Industrial Area, healthcare providers, educational institutions, and agri-tech companies with specialized solutions.',
    },
    {
      question: 'What types of software do you develop in Chandigarh?',
      answer: 'We develop custom software, enterprise ERP/CRM, cloud-based SaaS products, AI & automation tools, web applications, mobile apps, system integrations, and industry-specific solutions for manufacturing, education, healthcare, and agri-tech sectors serving Punjab & Haryana businesses.',
    },
    {
      question: 'How much does custom software development cost in Chandigarh?',
      answer: 'Custom software development in Chandigarh starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, ERP/CRM at ₹3,00,000, cloud/SaaS products at ₹2,50,000, AI & automation at ₹3,50,000, and enterprise solutions from ₹8,00,000. Final cost depends on features, complexity, and integrations. We offer free consultation and detailed project estimates.',
    },
    {
      question: 'Do you develop SaaS and cloud-based software products in Chandigarh?',
      answer: 'Yes! We specialize in SaaS product development for Chandigarh and Mohali IT startups. Our solutions include multi-tenant SaaS architecture, cloud deployment on AWS/Azure/GCP, microservices, CI/CD pipelines, auto-scaling, and subscription billing systems. We help startups go from idea to production-ready SaaS products.',
    },
    {
      question: 'Can you develop AI and automation software for Punjab businesses?',
      answer: 'Absolutely! We develop AI-powered solutions including process automation (RPA), intelligent chatbots, document processing AI, ML models for predictive analytics, computer vision systems, and NLP-based tools. Our AI solutions help Punjab and Haryana businesses reduce manual effort and improve decision-making.',
    },
    {
      question: 'Do you serve businesses in Mohali and Panchkula as well?',
      answer: 'Yes! We serve the entire tricity — Chandigarh, Mohali (SAS Nagar), and Panchkula. We have clients in Chandigarh IT Park, Mohali Phase 8 IT hub, Panchkula Industrial Area, and across Ambala, Ludhiana, and Jalandhar. On-site consultations available across the tricity region.',
    },
    {
      question: 'Do you offer mobile app development in Chandigarh?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Mobile app development in Chandigarh starts at ₹2,50,000 and includes UI/UX design, development, testing, app store deployment, and ongoing maintenance.',
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project: Basic web applications take 2-3 months, custom software 3-6 months, SaaS products 4-8 months, mobile apps 3-4 months, and enterprise ERP 6-12 months. We provide detailed timelines during consultation with milestone-based delivery and weekly progress updates.',
    },
    {
      question: 'Do you provide post-launch support and maintenance in Chandigarh?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Chandigarh and tricity clients.',
    },
    {
      question: 'Can you integrate third-party APIs and legacy systems?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, Stripe, PayU), SMS/email APIs, ERP connectors (SAP, Tally, Zoho), government APIs (GST, GSTN, DigiLocker), and custom third-party integrations. We also modernize legacy systems using API wrappers and microservices architecture.',
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
      { '@type': 'City', name: 'Ambala' },
      { '@type': 'City', name: 'Ludhiana' },
      { '@type': 'City', name: 'Zirakpur' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Chandigarh',
    'Custom software, ERP, CRM, cloud SaaS, AI & automation, and web application development for Chandigarh and tricity businesses across Punjab and Haryana.',
    'Chandigarh'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Chandigarh',
    'Professional software development in Chandigarh for IT startups, manufacturing, healthcare, education, and agri-tech sectors. ERP, SaaS, and AI solutions.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Chandigarh', url: '/chandigarh-software-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Software Development Company in Chandigarh"
        subtitle="Custom Software | SaaS Products | AI & Automation | ERP Solutions"
        description="Leading software development company in Chandigarh (The City Beautiful). Custom software, enterprise ERP, cloud SaaS, AI automation. 500+ projects. Serving Tricity — Chandigarh, Mohali & Panchkula!"
        gradient="blue"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Software Development Services in Chandigarh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade software solutions for Punjab, Haryana & the Tricity region
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Chandigarh?</h2>
              <p className="text-xl text-blue-100">Trusted by 500+ businesses across the Tricity and Punjab</p>
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
              <h3 className="font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ AWS</li>
                <li>✓ Azure</li>
                <li>✓ Google Cloud</li>
                <li>✓ Docker / K8s</li>
                <li>✓ CI/CD Pipelines</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">AI & Data</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ TensorFlow / PyTorch</li>
                <li>✓ OpenAI APIs</li>
                <li>✓ LangChain</li>
                <li>✓ PostgreSQL / MongoDB</li>
                <li>✓ Elasticsearch</li>
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
                Specialized software solutions for Punjab &amp; Haryana&apos;s key sectors
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
              On-site consultations across Chandigarh, Mohali &amp; Panchkula. Remote delivery pan-India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Chandigarh</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Sector 17 (City Centre)', 'Sector 22', 'Sector 34', 'Sector 43', 'IT Park', 'Industrial Area Phase 1', 'Industrial Area Phase 2', 'Sector 8-C', 'Manimajra', 'Sector 26'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
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
                  'On-site consultation in Chandigarh',
                  'Remote development teams',
                  'Dedicated project managers',
                  '24/7 WhatsApp support',
                  'Hindi, Punjabi & English',
                  'Training & documentation',
                  'Weekly progress demos',
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
              'Software Company Chandigarh', 'Software Development Mohali', 'Software Development Panchkula',
              'IT Company Chandigarh Punjab', 'SaaS Development Chandigarh', 'ERP Software Chandigarh',
              'AI Software Chandigarh', 'Software Development Ambala', 'Software Development Ludhiana',
              'Cloud Software Chandigarh', 'Web App Development Chandigarh', 'Software Company Tricity',
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
                Transparent Pricing for Chandigarh
              </h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₹2,00,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Small business software</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Core features</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>3 months support</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Source code</span></li>
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
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Medium-scale software</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Advanced features</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>API integrations</span></li>
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
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Large-scale ERP / SaaS</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>AI / ML integration</span></li>
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
                Get a Free Software Quote in Chandigarh
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your software development project in Chandigarh
              </p>
            </div>
            <ContactForm serviceName="Software Development" cityName="Chandigarh" />
          </div>
        </section>
      </div>
    </>
  );
}

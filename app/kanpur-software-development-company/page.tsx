import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Kanpur | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Kanpur offering custom software, web applications, mobile apps, ERP, CRM solutions for leather, textile industries. 500+ projects delivered. Free consultation!',
    canonical: '/kanpur-software-development-company',
    keywords: [
      'software development company kanpur',
      'software company kanpur',
      'custom software development kanpur',
      'web application development kanpur',
      'mobile app development kanpur',
      'erp software kanpur',
      'leather industry software kanpur',
      'textile software kanpur',
      'manufacturing software kanpur',
      'best software company kanpur',
      'erp solutions kanpur',
      'crm software kanpur',
      'inventory software kanpur',
      'tannery software kanpur',
      'software development up kanpur',
      'startup software kanpur',
      'affordable software kanpur',
      'hospital software kanpur',
      'real estate software kanpur',
      'cloud software kanpur',
      'it company kanpur',
      'digital transformation kanpur'
    ]
  });
}

export default function SoftwareDevelopmentKanpurPage() {
  const services = [
    {
      icon: '💼',
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed for your business needs',
      price: '₹2,00,000',
      features: ['Requirements analysis', 'Custom architecture', 'Scalable solutions', 'Post-launch support']
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Robust and secure web applications with modern frameworks',
      price: '₹1,50,000',
      features: ['React/Angular/Vue.js', 'RESTful APIs', 'Database design', 'Cloud deployment']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: '₹2,50,000',
      features: ['iOS & Android', 'React Native/Flutter', 'App store deployment', 'Push notifications']
    },
    {
      icon: '🏢',
      title: 'ERP Software Solutions',
      description: 'Comprehensive enterprise resource planning systems',
      price: '₹5,00,000',
      features: ['Inventory management', 'HR & payroll', 'Accounting', 'CRM integration']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with payment integration',
      price: '₹1,00,000',
      features: ['Multi-vendor support', 'Payment gateway', 'Inventory tracking', 'Order management']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions & SaaS',
      description: 'Scalable cloud-based software and SaaS applications',
      price: '₹3,00,000',
      features: ['AWS/Azure deployment', 'Multi-tenant architecture', 'Auto-scaling', 'Data security']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Expert Developers', value: '50+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏭 Manufacturing & Leather',
      description: 'ERP and inventory management software for Kanpur\'s leather tanneries, textile mills, and manufacturing units.',
      features: ['Production management', 'Inventory tracking', 'Order processing', 'Export documentation']
    },
    {
      title: '👔 Textile & Apparel',
      description: 'Textile management software for Kanpur\'s textile industry with production tracking and quality control.',
      features: ['Production planning', 'Quality management', 'Warehouse management', 'B2B portals']
    },
    {
      title: '💼 Trading & Commerce',
      description: 'Business management software for trading companies, wholesalers, and retail businesses in Kanpur.',
      features: ['Billing software', 'Accounting systems', 'Stock management', 'GST compliance']
    },
    {
      title: '🏥 Healthcare & Pharma',
      description: 'Hospital management systems, clinic software, and pharma distribution ERP for healthcare businesses in Kanpur.',
      features: ['Patient management', 'Appointment booking', 'Billing & insurance', 'Pharma inventory']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property management and CRM software for builders, developers, and real estate agencies across Kanpur.',
      features: ['Project management', 'Lead tracking', 'Sales automation', 'Payment management']
    },
    {
      title: '🎓 Education & EdTech',
      description: 'School ERP, college management, and coaching institute software for educational institutions in Kanpur.',
      features: ['Student management', 'Online classes', 'Fee management', 'Exam & results portal']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Kanpur?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Kanpur. We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Kanpur including Civil Lines, Kakadeo, Kidwai Nagar with specialized solutions for leather, textile, and manufacturing industries.'
    },
    {
      question: 'What types of software do you develop in Kanpur?',
      answer: 'We develop custom software, web applications, mobile apps, ERP systems for manufacturing, leather industry software (tannery management), textile production software, inventory management, e-commerce platforms, billing & accounting software, and B2B portals tailored for Kanpur industries.'
    },
    {
      question: 'How much does custom software development cost in Kanpur?',
      answer: 'Custom software development in Kanpur starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, mobile apps at ₹2,50,000, leather/textile ERP at ₹3,00,000, and enterprise ERP systems from ₹5,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you develop leather and tannery management software for Kanpur?',
      answer: 'Yes! We specialize in leather and tannery management ERP for Kanpur’s renowned leather industry. Our solutions cover tannery operations, production tracking, chemical management, export documentation, inventory management, quality control, and GST billing starting from ₹3,00,000.'
    },
    {
      question: 'Can you develop textile management software for Kanpur mills?',
      answer: 'Absolutely! We specialize in textile production management software for Kanpur’s textile mills, fabric manufacturers, and apparel companies. Our solutions include yarn & fabric inventory, production planning, quality management, order tracking, B2B portals, and export documentation starting from ₹3,00,000.'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Kanpur?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Kanpur start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Kanpur?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Kanpur clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Software Development Company Kanpur',
    'Custom software development, ERP, web applications, mobile apps for Kanpur\'s leather, textile, and manufacturing industries.',
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
    'Custom Software Development Services Kanpur',
    'Professional software development in Kanpur for leather, textile, manufacturing industries. ERP, inventory, production management software.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Kanpur', url: '/kanpur-software-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Kanpur"
        subtitle="Leather & Textile Industry Software | Manufacturing ERP | Custom Solutions"
        description="Leading software development company in Kanpur. Custom software for leather, textile, manufacturing. 500+ projects. ERP, inventory, production management. Serving Kanpur industries!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Kanpur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions for Kanpur industries
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Kanpur?</h2>
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

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-gray-600">
            We use cutting-edge technologies for robust software development
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
              <li>✓ React Native</li>
              <li>✓ Flutter</li>
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
              Industries We Serve in Kanpur
            </h2>
            <p className="text-xl text-gray-600">
              Specialized software solutions for key sectors
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
            Serving Businesses Across Kanpur &amp; UP
          </h2>
          <p className="text-xl text-gray-600">
            Local presence with expert software development services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Kanpur</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Civil Lines',
                'Kakadeo',
                'Kidwai Nagar',
                'Swaroop Nagar',
                'Govind Nagar',
                'Kalyanpur',
                'Armapur',
                'Panki',
                'Fazalganj',
                'Naramau',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities We Serve</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Lucknow',
                'Unnao',
                'Fatehpur',
                'Rae Bareli',
                'Banda',
                'Hamirpur',
                'Etawah',
                'Mainpuri',
                'Allahabad (Prayagraj)',
                'Jhansi',
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
                'On-site & Remote Consultation',
                'Hindi & English Communication',
                'Dedicated Project Manager',
                'Milestone-Based Delivery',
                'WhatsApp Project Updates',
                'AMC & Post-Launch Support',
                'Leather & Textile Industry Focus',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GEO Chip Tags */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {[
            'Software Company Kanpur',
            'Leather ERP Kanpur',
            'Tannery Software Kanpur',
            'Textile Software Kanpur',
            'IT Company Kakadeo',
            'Software Company Civil Lines',
            'Manufacturing ERP Kanpur',
            'Web App Development Kanpur',
            'Mobile App Kanpur',
            'Hospital Software Kanpur',
            'Affordable Software Kanpur',
            'Digital Transformation Kanpur',
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
              Transparent Pricing for Kanpur
            </h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹2,00,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Small business software</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic features</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3 months support</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Source code</span>
                </li>
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
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Medium-scale software</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Advanced features</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>API integrations</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Training included</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹10,00,000+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Large-scale ERP/CRM</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited features</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>12 months support</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated team</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Priority support</span>
                </li>
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
              Get Free Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss your software development project in Kanpur
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Kanpur" />
        </div>
      </section>
    </div>
    </>
  );
}

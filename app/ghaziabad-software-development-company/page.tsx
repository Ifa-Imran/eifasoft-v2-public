import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Ghaziabad | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Ghaziabad offering custom software, ERP solutions, manufacturing software, NCR corporate applications. 500+ projects. NCR expertise. Starting ₹2,00,000!',
    canonical: '/ghaziabad-software-development-company',
    keywords: [
      'software development company ghaziabad',
      'software company ghaziabad',
      'erp software ghaziabad',
      'manufacturing software ghaziabad',
      'custom software ghaziabad',
      'ncr software company',
      'ghaziabad it company',
      'best software company ghaziabad',
      'software development ncr',
      'web application development ghaziabad',
      'mobile app development ghaziabad',
      'crm software ghaziabad',
      'erp solutions ghaziabad',
      'software company indirapuram',
      'software company vaishali ghaziabad',
      'it company ghaziabad ncr',
      'startup software ghaziabad',
      'software development noida ghaziabad',
      'affordable software development ghaziabad',
      'cloud software solutions ghaziabad',
      'digital transformation ghaziabad',
      'custom erp ghaziabad'
    ]
  });
}

export default function GhaziabadSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '🏭',
      title: 'Manufacturing ERP Software',
      description: 'Complete ERP solutions for Ghaziabad manufacturing units',
      price: '₹3,50,000',
      features: ['Production planning', 'Inventory management', 'Quality control', 'Supply chain']
    },
    {
      icon: '🏢',
      title: 'Corporate Software Solutions',
      description: 'Custom software for NCR corporate offices',
      price: '₹2,50,000',
      features: ['Process automation', 'Workflow management', 'Business intelligence', 'Integration']
    },
    {
      icon: '🏘️',
      title: 'Real Estate Management Software',
      description: 'Property management and CRM for builders',
      price: '₹3,00,000',
      features: ['Lead management', 'Inventory tracking', 'Payment tracking', 'Customer portal']
    },
    {
      icon: '💼',
      title: 'Custom Business Software',
      description: 'Tailored software solutions for your needs',
      price: '₹2,00,000',
      features: ['Requirements analysis', 'Custom features', 'Scalable architecture', 'Support']
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Modern web apps with latest frameworks',
      price: '₹1,50,000',
      features: ['React/Angular', 'RESTful APIs', 'Database design', 'Cloud deployment']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps',
      price: '₹2,50,000',
      features: ['iOS & Android', 'React Native/Flutter', 'App deployment', 'Push notifications']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'NCR Projects', value: '180+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'ERP and production management software for Ghaziabad manufacturing units including metal industries, plastics, and engineering units.',
      features: ['Production management', 'Quality assurance', 'Inventory optimization', 'Maintenance tracking']
    },
    {
      title: '🏢 Corporate & Enterprise',
      description: 'Business software for NCR corporate offices, MNCs, and service companies in Ghaziabad requiring automation and digital transformation.',
      features: ['Process automation', 'Document management', 'CRM/ERP integration', 'Business analytics']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property management software for Ghaziabad builders, real estate developers, and construction companies with project tracking.',
      features: ['Project management', 'Lead tracking', 'Sales automation', 'Payment management']
    },
    {
      title: '🏥 Healthcare & Pharma',
      description: 'Hospital management systems, clinic software, and pharma distribution ERP for healthcare businesses in Ghaziabad and NCR.',
      features: ['Patient management', 'Appointment booking', 'Billing & insurance', 'Pharma stock management']
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Point-of-sale, inventory, and e-commerce platforms for retail chains, supermarkets, and online sellers in Ghaziabad.',
      features: ['POS system', 'Inventory management', 'Online store', 'GST & billing']
    },
    {
      title: '🎓 Education & EdTech',
      description: 'School ERP, college management, and e-learning platforms for educational institutions and coaching centres in Ghaziabad.',
      features: ['Student management', 'Online classes', 'Fee management', 'Exam & results portal']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Ghaziabad?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Ghaziabad. We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Ghaziabad including manufacturing, corporate, and real estate sectors. NCR expertise meets modern technology!'
    },
    {
      question: 'What types of software do you develop in Ghaziabad?',
      answer: 'We develop custom software, ERP solutions, manufacturing software, NCR corporate applications, web applications, mobile apps tailored for Ghaziabad businesses and startups.'
    },
    {
      question: 'How much does custom software development cost in Ghaziabad?',
      answer: 'Custom software development in Ghaziabad starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, mobile apps at ₹2,50,000, ERP platforms at ₹3,50,000, and enterprise ERP systems from ₹5,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you develop ERP software for manufacturing units?',
      answer: 'Yes! We specialize in ERP software development for Ghaziabad manufacturing units. Our solutions include production planning, inventory management, quality control, and supply chain management starting from ₹3,50,000.'
    },
    {
      question: 'Can you develop custom software for NCR corporate offices?',
      answer: 'Absolutely! We specialize in developing custom software for NCR corporate offices in Ghaziabad. Our solutions include process automation, workflow management, business intelligence, and integration services starting from ₹2,50,000.'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Ghaziabad?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Ghaziabad start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance. Perfect for startups, IT companies, and enterprises.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Ghaziabad?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Ghaziabad clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Software Development Company Ghaziabad',
    'Custom software development, ERP solutions, manufacturing software, NCR corporate applications for Ghaziabad businesses.',
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
    'Custom Software Development Services Ghaziabad',
    'Professional software development in Ghaziabad for manufacturing, corporate, real estate. ERP, custom applications.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Ghaziabad', url: '/ghaziabad-software-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Ghaziabad"
        subtitle="Manufacturing ERP | Corporate Software | NCR Solutions"
        description="Leading software development in Ghaziabad. Manufacturing ERP, corporate software, real estate CRM. 500+ projects. NCR expertise! Starting ₹2,00,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Ghaziabad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions for Ghaziabad businesses
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Ghaziabad?</h2>
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Ghaziabad</p>
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
              Industries We Serve in Ghaziabad
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
            Serving Businesses Across Ghaziabad & NCR
          </h2>
          <p className="text-xl text-gray-600">
            Local presence with expert software development services
          </p>
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
                'Hindon',
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
                'Noida',
                'Greater Noida',
                'Delhi',
                'Meerut',
                'Bulandshahr',
                'Hapur',
                'Baghpat',
                'Faridabad',
                'Gurugram',
                'Sambhal',
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
                'NCR-Focused Industry Expertise',
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
            'Software Company Ghaziabad',
            'ERP Software Ghaziabad',
            'Manufacturing Software NCR',
            'IT Company Indirapuram',
            'Software Company Vaishali',
            'Custom Software Kaushambi',
            'Web App Development Ghaziabad',
            'Mobile App Ghaziabad',
            'Software Development Noida',
            'Corporate Software NCR',
            'Affordable ERP Ghaziabad',
            'Digital Transformation Ghaziabad',
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
              Transparent Pricing for Ghaziabad
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
              Let&apos;s discuss your software development project in Ghaziabad
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Ghaziabad" />
        </div>
      </section>
    </div>
    </>
  );
}

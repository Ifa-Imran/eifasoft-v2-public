import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Allahabad | Custom Software Solutions | EifaSoft',
    description: 'Top-rated software development company in Allahabad (Prayagraj), Uttar Pradesh. University ERP, educational software, tourism management, government solutions, healthcare & real estate software. 500+ projects delivered. Serving Allahabad, Prayagraj, Varanasi, Lucknow & across UP. Starting ₹2,00,000. Free consultation!',
    canonical: '/allahabad-software-development-company',
    keywords: [
      'software development company allahabad',
      'software company prayagraj',
      'software development prayagraj',
      'custom software development allahabad',
      'software development allahabad uttar pradesh',
      'it company allahabad up',
      'university erp allahabad',
      'university management software allahabad',
      'educational software allahabad',
      'educational erp prayagraj',
      'kumbh mela software allahabad',
      'tourism software allahabad',
      'government software allahabad',
      'erp software allahabad',
      'crm software allahabad',
      'web application development allahabad',
      'software developers allahabad',
      'best software company allahabad',
      'software development varanasi',
      'software development lucknow',
      'it services allahabad',
      'allahabad software solutions',
    ]
  });
}

export default function AllahabadSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '🎓',
      title: 'University Management System',
      description: 'Complete university ERP for higher education institutions',
      price: '₹3,50,000',
      features: ['Student management', 'Course management', 'Examination system', 'Research tracking']
    },
    {
      icon: '🏛️',
      title: 'Tourism Management Software',
      description: 'Tourism software for Allahabad religious and heritage tourism',
      price: '₹2,50,000',
      features: ['Tour packages', 'Booking engine', 'Pilgrim CRM', 'Payment gateway']
    },
    {
      icon: '🏢',
      title: 'Government & Public Sector Solutions',
      description: 'Custom software for government offices and PSUs',
      price: '₹3,00,000',
      features: ['Citizen services', 'Document management', 'Workflow automation', 'E-governance']
    },
    {
      icon: '📚',
      title: 'Educational ERP Software',
      description: 'Complete ERP systems for schools and colleges',
      price: '₹2,80,000',
      features: ['Student management', 'Admission system', 'Fee management', 'Parent portal']
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
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Education Projects', value: '200+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🎓 Education & Universities',
      description: 'University and educational ERP for Allahabad University, IIIT Allahabad, and affiliated colleges with complete academic management.',
      features: ['University ERP', 'Student management', 'Research tracking', 'Placement portals']
    },
    {
      title: '🏛️ Tourism & Heritage',
      description: 'Tourism management software for Allahabad tour operators, Kumbh Mela, Sangam, and religious tourism with booking systems.',
      features: ['Tour management', 'Booking engines', 'Kumbh Mela systems', 'Heritage tracking']
    },
    {
      title: '🏢 Government & PSU',
      description: 'Custom software for government offices, public sector units, and civic bodies with workflow automation and e-governance solutions.',
      features: ['E-governance', 'Citizen services', 'Document management', 'Workflow systems']
    },
    {
      title: '🏥 Healthcare & Hospitals',
      description: 'Hospital management and clinic software for Allahabad healthcare providers — patient records, OPD, IPD, billing, and pharmacy.',
      features: ['Patient records (EMR)', 'OPD & IPD management', 'Billing & insurance', 'Pharmacy module']
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'E-commerce platforms and retail management software for Allahabad traders, wholesalers, and small businesses going digital.',
      features: ['Online store', 'Inventory management', 'GST billing', 'Payment gateway']
    },
    {
      title: '🏗️ Real Estate & Construction',
      description: 'CRM and project management software for Allahabad real estate developers, builders, and housing societies with payment tracking.',
      features: ['Lead & CRM', 'Project tracking', 'Payment schedules', 'Customer portal']
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Allahabad?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Allahabad (Prayagraj). We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Allahabad including universities, government offices, tour operators, and heritage sites with specialized solutions. Sangam city meets modern technology!'
    },
    {
      question: 'What types of software do you develop in Allahabad?',
      answer: 'We develop custom software, university ERP systems (Allahabad University, IIIT Allahabad), educational software, tourism management systems (Kumbh Mela, Sangam), government solutions, web applications, and enterprise ERP tailored for Allahabad businesses and institutions.'
    },
    {
      question: 'How much does custom software development cost in Allahabad?',
      answer: 'Custom software development in Allahabad starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, educational ERP at ₹2,80,000, university management at ₹3,50,000, and government solutions from ₹3,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you develop university ERP software for Allahabad institutions?',
      answer: 'Yes! We specialize in university ERP software for Allahabad University, IIIT Allahabad, and colleges. Our solutions include student management, course management, examination systems, research tracking, placement portals, and alumni management starting from ₹3,50,000.'
    },
    {
      question: 'Can you develop tourism software for Kumbh Mela and Sangam tourism?',
      answer: 'Absolutely! We develop specialized tourism management software for Allahabad tour operators with tour package management, Kumbh Mela systems, pilgrim CRM, booking engines, and payment gateways starting from ₹2,50,000. Perfect for religious and heritage tourism!'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Allahabad?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Allahabad start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance. Perfect for educational apps and tourism solutions.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Allahabad?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Allahabad clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Allahabad'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.4358,
      longitude: 81.8463,
    },
    areaServed: [
      { '@type': 'City', name: 'Allahabad' },
      { '@type': 'City', name: 'Prayagraj' },
      { '@type': 'City', name: 'Pratapgarh' },
      { '@type': 'City', name: 'Kaushambi' },
      { '@type': 'City', name: 'Fatehpur' },
      { '@type': 'City', name: 'Raebareli' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Allahabad',
    'Custom software development, university ERP, educational software, tourism management, government solutions for Allahabad businesses.',
    'Allahabad'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Allahabad',
    'Professional software development in Allahabad for education, tourism, government. University ERP and heritage tourism solutions.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Allahabad', url: '/allahabad-software-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Allahabad"
        subtitle="University ERP | Educational Software | Tourism Solutions"
        description="Leading software development in Allahabad (Prayagraj). University ERP, educational software, tourism management, government solutions. 500+ projects. Sangam city expertise!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Allahabad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions for education, tourism, and government
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Allahabad?</h2>
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Allahabad</p>
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
              Industries We Serve in Allahabad
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
            Serving All Areas of Allahabad &amp; Nearby Cities
          </h2>
          <p className="text-xl text-gray-600">
            On-site consultations across Allahabad (Prayagraj). Remote delivery across UP and India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Allahabad</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Civil Lines', 'Georgetown', 'Sangam', 'Allahabad University', 'IIIT Campus', 'Katra', 'Naini', 'Allapur', 'Phaphamau', 'Jhunsi'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Pratapgarh', 'Kaushambi', 'Fatehpur', 'Raebareli', 'Varanasi', 'Lucknow', 'Mirzapur', 'Chitrakoot', 'Banda', 'Jaunpur'].map((city) => (
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
                'On-site consultation in Allahabad',
                'Remote development teams',
                'Dedicated project managers',
                '24/7 WhatsApp support',
                'Hindi & English communication',
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
            'Software Company Allahabad', 'Software Development Prayagraj', 'Software Development Varanasi',
            'IT Company Allahabad UP', 'University ERP Allahabad', 'Educational Software Allahabad',
            'Kumbh Mela Software', 'Government Software Allahabad', 'Software Development Lucknow',
            'ERP Software Prayagraj', 'Web App Development Allahabad', 'Tourism Software Allahabad',
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
              Transparent Pricing for Allahabad
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
              Get a Free Software Quote in Allahabad
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss your software development project in Allahabad
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Allahabad" />
        </div>
      </section>
    </div>
    </>
  );
}

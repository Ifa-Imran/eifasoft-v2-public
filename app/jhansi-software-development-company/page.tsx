import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Jhansi | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Jhansi offering custom software, manufacturing ERP, defense software, inventory management, web applications. 500+ projects delivered. Industrial solutions!',
    canonical: '/jhansi-software-development-company',
    keywords: [
      'software development company jhansi',
      'software company jhansi',
      'manufacturing software jhansi',
      'erp software jhansi',
      'defense software jhansi',
      'custom software jhansi',
      'jhansi it company',
      'best software company jhansi',
      'software development bundelkhand',
      'erp solutions jhansi',
      'web application development jhansi',
      'mobile app development jhansi',
      'crm software jhansi',
      'inventory software jhansi',
      'bundelkhand it company',
      'custom software bundelkhand',
      'startup software jhansi',
      'affordable software jhansi',
      'software company lalitpur',
      'digital transformation jhansi',
      'hospital software jhansi',
      'cloud software jhansi'
    ]
  });
}

export default function JhansiSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '🏭',
      title: 'Manufacturing ERP Software',
      description: 'Complete ERP solutions for Jhansi manufacturing units',
      price: '₹3,00,000',
      features: ['Production planning', 'Inventory management', 'Quality control', 'Supply chain']
    },
    {
      icon: '🛡️',
      title: 'Defense & Security Software',
      description: 'Specialized software for defense and security sectors',
      price: '₹5,00,000',
      features: ['Access control', 'Asset tracking', 'Secure communications', 'Compliance']
    },
    {
      icon: '💼',
      title: 'Custom Business Software',
      description: 'Tailored software solutions for your business needs',
      price: '₹2,00,000',
      features: ['Requirements analysis', 'Custom features', 'Scalable architecture', 'Support']
    },
    {
      icon: '📦',
      title: 'Inventory Management',
      description: 'Warehouse and inventory tracking systems',
      price: '₹1,50,000',
      features: ['Stock tracking', 'Barcode scanning', 'Reorder alerts', 'Multi-location']
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Robust web applications with modern frameworks',
      price: '₹1,50,000',
      features: ['React/Angular', 'RESTful APIs', 'Database design', 'Cloud deployment']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with payment integration',
      price: '₹1,00,000',
      features: ['Product catalog', 'Payment gateway', 'Order management', 'Admin panel']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Manufacturing Projects', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'ERP and production management software for Jhansi manufacturing sector including metal industries, textile, locks, and engineering units.',
      features: ['Production management', 'Quality control', 'Maintenance tracking', 'Supply chain automation']
    },
    {
      title: '🛡️ Defense & Security',
      description: 'Specialized software for defense establishments, security agencies, and military installations in Jhansi cantonment.',
      features: ['Secure systems', 'Asset management', 'Personnel tracking', 'Compliance management']
    },
    {
      title: '🏪 Retail & Trading',
      description: 'Point of Sale (POS) and retail management software for Jhansi local businesses, traders, and wholesale markets.',
      features: ['Billing systems', 'Inventory tracking', 'Customer management', 'Sales reporting']
    },
    {
      title: '🏥 Healthcare & Pharma',
      description: 'Hospital management systems, clinic software, and pharmacy management for healthcare businesses in Jhansi and Bundelkhand.',
      features: ['Patient management', 'Appointment booking', 'Billing & insurance', 'Pharma inventory']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property management and CRM software for builders, developers, and real estate agencies operating across Jhansi and Bundelkhand.',
      features: ['Project management', 'Lead tracking', 'Sales automation', 'Payment management']
    },
    {
      title: '🎓 Education & Coaching',
      description: 'School ERP, college management, and coaching institute software for educational institutions across Jhansi and Lalitpur.',
      features: ['Student management', 'Online classes', 'Fee management', 'Exam & results portal']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Jhansi?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Jhansi. We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Jhansi including Sipri Bazaar, Sadar Bazaar, Civil Lines, and Cantonment area with specialized solutions for manufacturing, defense, retail, healthcare, and educational institutions. Ancient city, modern technology!'
    },
    {
      question: 'What types of software do you develop in Jhansi?',
      answer: 'We develop custom software, manufacturing ERP, defense & security systems, inventory management software, web applications, mobile apps, hospital management software, school ERP, and e-commerce platforms tailored for Jhansi businesses across manufacturing, defense, retail, and healthcare sectors.'
    },
    {
      question: 'How much does custom software development cost in Jhansi?',
      answer: 'Custom software development in Jhansi starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, mobile apps at ₹2,50,000, temple management software at ₹1,50,000, and enterprise ERP systems from ₹5,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you develop ERP software for Jhansi manufacturing units?',
      answer: 'Yes! We specialize in ERP software for Jhansi manufacturing units — including metal industries, lock manufacturers, textile mills, and engineering companies. Our manufacturing ERP includes production planning, inventory management, quality control, supply chain management, and GST billing starting from ₹3,00,000.'
    },
    {
      question: 'Can you develop defense and security software for Jhansi?',
      answer: 'Yes! We develop specialized software for defense establishments and security agencies in Jhansi cantonment and surrounding areas. Our solutions include access control systems, asset tracking, personnel management, secure communications, compliance management, and records management starting from ₹5,00,000.'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Jhansi?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Jhansi start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance. Perfect for tourism apps, temple apps, and local businesses.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Jhansi?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Jhansi clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Software Development Company Jhansi',
    'Custom software development, tourism management systems, temple software, web applications for Jhansi\'s tourism and religious sectors.',
    'Jhansi'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Jhansi'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.4484,
      longitude: 78.5685,
    },
    areaServed: [
      { '@type': 'City', name: 'Jhansi' },
      { '@type': 'City', name: 'Lalitpur' },
      { '@type': 'City', name: 'Datia' },
      { '@type': 'City', name: 'Gwalior' },
      { '@type': 'City', name: 'Orchha' },
      { '@type': 'City', name: 'Banda' },
    ],
  };

  const productSchema = generateProductSchema(
    'Custom Software Development Services Jhansi',
    'Professional software development in Jhansi for tourism, temples, education. Hotel management, temple admin, custom applications.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Jhansi', url: '/jhansi-software-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Jhansi"
        subtitle="Tourism Software | Temple Management | Educational Systems | Ancient City, Modern Tech"
        description="Leading software development company in Jhansi. Tourism management, temple software, custom applications. 500+ projects. Serving Jhansi's religious & cultural heritage!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Jhansi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions for Jhansi tourism and heritage
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Jhansi?</h2>
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Jhansi</p>
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
              Industries We Serve in Jhansi
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
            Serving Businesses Across Jhansi &amp; Bundelkhand
          </h2>
          <p className="text-xl text-gray-600">
            Local presence with expert software development services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Jhansi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Sipri Bazaar',
                'Sadar Bazaar',
                'Civil Lines',
                'Cantonment',
                'Laxmibai Nagar',
                'Maharaj Pura',
                'Gwalior Road',
                'Datia Road',
                'Orchha Road',
                'Shivaji Nagar',
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
                'Lalitpur',
                'Datia',
                'Tikamgarh',
                'Gwalior',
                'Orchha',
                'Sagar',
                'Banda',
                'Hamirpur',
                'Mahoba',
                'Chhatarpur',
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
                'Bundelkhand Industry Expertise',
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
            'Software Company Jhansi',
            'Manufacturing ERP Jhansi',
            'Defense Software Jhansi',
            'IT Company Bundelkhand',
            'Software Company Sipri Bazaar',
            'ERP Solutions Jhansi',
            'Web App Development Jhansi',
            'Mobile App Jhansi',
            'Software Development Lalitpur',
            'Hospital Software Jhansi',
            'Affordable Software Bundelkhand',
            'Digital Transformation Jhansi',
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
              Transparent Pricing for Jhansi
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
              Let&apos;s discuss your software development project in Jhansi
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Jhansi" />
        </div>
      </section>
    </div>
    </>
  );
}

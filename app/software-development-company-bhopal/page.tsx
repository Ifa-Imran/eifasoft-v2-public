import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Bhopal | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Bhopal offering custom software, web applications, mobile apps, ERP, CRM solutions. 500+ projects delivered. Experienced developers. Free consultation!',
    canonical: '/software-development-company-bhopal',
    keywords: [
      'software development company bhopal',
      'software company bhopal',
      'custom software development bhopal',
      'web application development bhopal',
      'mobile app development bhopal',
      'erp software bhopal',
      'crm software bhopal',
      'ecommerce software bhopal',
      'mlm software bhopal',
      'software solutions bhopal',
      'it company bhopal',
      'bhopal software developers',
      'enterprise software bhopal',
      'saas development bhopal',
      'api development bhopal',
      'startup software bhopal',
      'government software bhopal',
      'school management software bhopal',
      'hospital management software bhopal',
      'software development mp nagar bhopal',
      'software company indore',
      'software development madhya pradesh',
    ]
  });
}

export default function SoftwareDevelopmentBhopalPage() {
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
      title: '🏛️ Government & Public Sector',
      description: 'E-governance solutions, citizen portals, and administrative systems for government departments and PSUs in Bhopal.',
      features: ['Citizen service portals', 'Document management', 'Online application systems', 'Data analytics dashboards'],
    },
    {
      title: '🎓 Education & E-Learning',
      description: 'Digital learning platforms, student management systems, and online examination software for Bhopal\'s educational institutions.',
      features: ['LMS development', 'Student portals', 'Online testing systems', 'Virtual classrooms'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Hospital management systems, telemedicine platforms, and healthcare apps for Bhopal\'s medical sector.',
      features: ['HMS/HIMS software', 'Appointment booking', 'Electronic health records', 'Telemedicine solutions'],
    },
    {
      title: '🏭 Manufacturing & Industrial',
      description: 'Production tracking, inventory management, and supply chain software for Bhopal\'s Govindpura industrial belt and MP manufacturing sector.',
      features: ['Production management', 'Inventory tracking', 'Supply chain software', 'Quality control systems'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores, multi-vendor marketplaces, and retail management software for Bhopal traders and businesses.',
      features: ['Multi-vendor platforms', 'Inventory & POS', 'Payment integration', 'Order management'],
    },
    {
      title: '🌐 Telecom & IT Services',
      description: 'Billing systems, CRM platforms, and service management software for telecom operators and IT service providers in MP.',
      features: ['Billing systems', 'CRM platforms', 'Ticketing systems', 'Network management'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Bhopal?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Bhopal. We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Bhopal including MP Nagar, Arera Colony, New Market, and Kolar with cutting-edge technology solutions.'
    },
    {
      question: 'What types of software do you develop in Bhopal?',
      answer: 'We develop custom software, web applications, mobile apps, ERP systems, CRM software, e-commerce platforms, MLM software, healthcare solutions, education management systems, government portals, and SaaS applications tailored for Bhopal businesses.'
    },
    {
      question: 'How much does custom software development cost in Bhopal?',
      answer: 'Custom software development in Bhopal starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, mobile apps at ₹2,50,000, and enterprise ERP systems from ₹5,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you provide software development services for government projects in Bhopal?',
      answer: 'Yes! We have extensive experience developing e-governance solutions, citizen portals, administrative systems, and document management platforms for government departments and PSUs in Bhopal. We follow government compliance standards and security protocols.'
    },
    {
      question: 'Can you develop ERP software for educational institutions in Bhopal?',
      answer: 'Absolutely! We specialize in developing comprehensive ERP systems for schools, colleges, and universities in Bhopal. Our solutions include student management, fee collection, attendance tracking, examination management, library management, and parent portals starting from ₹3,00,000.'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Bhopal?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Bhopal start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Bhopal?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Bhopal clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Bhopal'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.2599,
      longitude: 77.4126,
    },
    areaServed: [
      { '@type': 'City', name: 'Bhopal' },
      { '@type': 'City', name: 'Vidisha' },
      { '@type': 'City', name: 'Sehore' },
      { '@type': 'City', name: 'Indore' },
      { '@type': 'City', name: 'Jabalpur' },
      { '@type': 'City', name: 'Hoshangabad' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Bhopal',
    'Custom software development, web applications, mobile apps, ERP, CRM solutions in Bhopal. Expert developers serving businesses across Bhopal.',
    'Bhopal'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Bhopal',
    'Professional software development services in Bhopal including custom software, web apps, mobile apps, ERP systems. Starting from ₹2,00,000 with expert team.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Bhopal', url: '/software-development-company-bhopal' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Bhopal"
        subtitle="Custom Software Solutions | Web & Mobile Apps | ERP Systems"
        description="Leading software development company in Bhopal with 15+ years of experience. We deliver custom software, web applications, mobile apps, ERP, and cloud solutions for businesses across Bhopal."
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Bhopal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions tailored for Bhopal businesses
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Bhopal?</h2>
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Bhopal</p>
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
              Industries We Serve in Bhopal
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
            Serving Businesses Across Bhopal &amp; Nearby Cities
          </h2>
          <p className="text-xl text-gray-600">
            On-site consultations across Bhopal. Remote delivery across Madhya Pradesh and India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Bhopal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['MP Nagar', 'Arera Colony', 'New Market', 'Kolar', 'TT Nagar', 'Indrapuri', 'Bairagarh', 'Shahpura', 'Govindpura', 'Hoshangabad Road'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby MP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Vidisha', 'Sehore', 'Raisen', 'Hoshangabad (Narmadapuram)', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Rewa', 'Satna'].map((city) => (
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
                'On-site consultation in Bhopal',
                'Remote development teams',
                'Dedicated project managers',
                '24/7 technical support',
                'Training & documentation',
                'Maintenance & AMC plans',
                'Milestone-based delivery',
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
            'Software Development Bhopal', 'Custom Software Bhopal', 'ERP Software Bhopal',
            'Government Software Bhopal', 'School ERP Bhopal', 'Hospital Software Bhopal',
            'IT Company MP Nagar Bhopal', 'SaaS Development Bhopal', 'Mobile App Bhopal',
            'Software Company Indore', 'Software Development Madhya Pradesh', 'Web Development Bhopal',
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
              Transparent Pricing for Bhopal
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
              Let&apos;s discuss your software development project in Bhopal
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Bhopal" />
        </div>
      </section>
    </div>
    </>
  );
}

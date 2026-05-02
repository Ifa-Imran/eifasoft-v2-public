import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Patna | Custom Software Bihar | EifaSoft',
    description: 'Top-rated software development company in Patna, Bihar. Custom software, educational ERP, healthcare software, government solutions, e-commerce & CRM development. 500+ projects delivered. Serving Patna, Muzaffarpur, Gaya & across Bihar. Starting ₹2,00,000. Free consultation!',
    canonical: '/patna-software-development-company',
    keywords: [
      'software development company patna',
      'software company patna',
      'custom software development patna',
      'software development patna bihar',
      'it company patna bihar',
      'educational erp software patna',
      'school management software patna',
      'hospital management software patna',
      'healthcare software patna',
      'government software patna',
      'erp software patna',
      'crm software patna',
      'web application development patna',
      'software developers patna',
      'best software company patna',
      'software development muzaffarpur',
      'software development gaya',
      'software development nalanda',
      'it services patna',
      'patna software solutions',
      'bihar software development company',
      'software company bihar',
    ],
  });
}

export default function PatnaSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '🎓',
      title: 'Educational ERP Software',
      description: 'Complete ERP systems for schools, colleges, and coaching institutes across Bihar',
      price: '₹2,80,000',
      features: ['Student management', 'Admission system', 'Attendance tracking', 'Fee management'],
    },
    {
      icon: '🏥',
      title: 'Healthcare & Hospital Software',
      description: 'Hospital management systems for Patna hospitals, nursing homes, and clinics',
      price: '₹3,00,000',
      features: ['Patient records (EMR)', 'OPD & IPD management', 'Billing & insurance', 'Pharmacy module'],
    },
    {
      icon: '🏢',
      title: 'Government & Public Sector',
      description: 'E-governance and workflow software for Bihar government offices and PSUs',
      price: '₹3,50,000',
      features: ['Citizen services portal', 'Document management', 'Workflow automation', 'E-governance'],
    },
    {
      icon: '🏭',
      title: 'Manufacturing & Trading ERP',
      description: 'Custom ERP for manufacturing units, trading companies, and agri-businesses',
      price: '₹2,50,000',
      features: ['Order tracking', 'Warehouse management', 'GST billing', 'Dealer portal'],
    },
    {
      icon: '💼',
      title: 'Custom Business Software',
      description: 'Tailored software solutions for any Patna business requirement',
      price: '₹2,00,000',
      features: ['Requirements analysis', 'Custom features', 'Scalable architecture', 'AMC support'],
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Modern web applications using the latest frameworks and cloud tech',
      price: '₹1,50,000',
      features: ['React/Angular', 'RESTful APIs', 'Database design', 'Cloud deployment'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Bihar Clients', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🎓 Education & Coaching',
      description: 'Educational ERP for schools, colleges, and coaching institutes including IIT/UPSC coaching centres prominent in Patna.',
      features: ['Student management', 'Admission systems', 'Examination management', 'Fee collection'],
    },
    {
      title: '🏥 Healthcare & Hospitals',
      description: 'Hospital management software for Patna hospitals, nursing homes, diagnostic centres, and government medical facilities.',
      features: ['Patient records (EMR)', 'OPD & IPD', 'Billing & insurance', 'Pharmacy management'],
    },
    {
      title: '🏢 Government & PSU',
      description: 'E-governance and custom software for Bihar government departments, municipal bodies, and public sector undertakings.',
      features: ['E-governance portals', 'Citizen services', 'Document management', 'Workflow systems'],
    },
    {
      title: '🌾 Agriculture & Food Processing',
      description: 'Software for Bihar\'s agri-sector — crop management, procurement, food processing units, and supply chain tracking.',
      features: ['Crop management', 'Procurement systems', 'Supply chain', 'Mandi price tracking'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'E-commerce platforms and retail management software for Patna traders, wholesalers, and businesses going digital.',
      features: ['Online store', 'Inventory management', 'GST billing', 'Payment gateway'],
    },
    {
      title: '🏗️ Real Estate & Construction',
      description: 'CRM and project management software for Patna real estate developers, builders, and housing societies.',
      features: ['Lead & CRM', 'Project tracking', 'Payment schedules', 'Customer portal'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Patna?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Patna and Bihar. We have 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Patna including educational institutions, hospitals, government offices, agri-businesses, and trading companies with specialized software. Bihar\'s capital city meets modern technology!',
    },
    {
      question: 'What types of software do you develop in Patna?',
      answer: 'We develop custom software, educational ERP (school management, coaching institute software), healthcare software (hospital PMS, clinic management), government solutions (e-governance, citizen portals), manufacturing ERP, retail & e-commerce platforms, web applications, and CRM systems tailored for Patna and Bihar businesses.',
    },
    {
      question: 'How much does custom software development cost in Patna?',
      answer: 'Custom software development in Patna starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, educational ERP at ₹2,80,000, hospital management software at ₹3,00,000, government solutions from ₹3,50,000, and enterprise ERP from ₹8,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.',
    },
    {
      question: 'Do you develop educational ERP software for Patna schools and coaching institutes?',
      answer: 'Yes! Patna is famous for IIT/UPSC coaching institutes. We develop specialized ERP systems for coaching institutes, schools, and colleges in Patna with student management, batch management, fee collection, attendance, result management, online test portals, and parent dashboards starting from ₹2,80,000.',
    },
    {
      question: 'Can you develop hospital management software for Patna hospitals?',
      answer: 'Absolutely! We develop comprehensive hospital management software (HMS) for Patna hospitals and nursing homes with OPD/IPD management, patient records (EMR), billing, pharmacy management, laboratory information system (LIS), and insurance claim processing starting from ₹3,00,000.',
    },
    {
      question: 'Do you provide government software solutions in Bihar?',
      answer: 'Yes! We develop e-governance software, citizen service portals, document management systems, and workflow automation tools for Bihar government departments and municipal bodies. Our government solutions are NIC-compliant and meet Bihar government IT standards.',
    },
    {
      question: 'Do you offer mobile app development for iOS and Android in Patna?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Mobile app development in Patna starts at ₹2,50,000 and includes UI/UX design, development, testing, app store deployment, and maintenance. Perfect for educational apps, hospital apps, and business solutions.',
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP 6-12 months. We provide detailed timelines during consultation with milestone-based delivery and weekly progress updates.',
    },
    {
      question: 'Do you provide post-launch support and maintenance in Patna?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Patna and Bihar clients.',
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs (MSG91, Fast2SMS), email services, Google Maps, Bihar government APIs, GST APIs, and custom third-party integrations. We ensure secure and seamless integration for your software.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Patna'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.5941,
      longitude: 85.1376,
    },
    areaServed: [
      { '@type': 'City', name: 'Patna' },
      { '@type': 'City', name: 'Muzaffarpur' },
      { '@type': 'City', name: 'Gaya' },
      { '@type': 'City', name: 'Hajipur' },
      { '@type': 'City', name: 'Nalanda' },
      { '@type': 'City', name: 'Bhojpur' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Patna',
    'Custom software development, educational ERP, hospital management, government solutions, and enterprise software for Patna and Bihar businesses.',
    'Patna'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Patna',
    'Professional software development in Patna for education, healthcare, government, agriculture, and trading. ERP, CRM, and web application solutions.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Patna', url: '/patna-software-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Software Development Company in Patna"
        subtitle="Educational ERP | Healthcare Software | Government Solutions"
        description="Leading software development company in Patna, Bihar. Educational ERP, hospital management, government solutions, custom business software. 500+ projects delivered. Bihar expertise!"
        gradient="blue"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Software Development Services in Patna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions for education, healthcare, and government in Bihar
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Patna?</h2>
              <p className="text-xl text-blue-100">Trusted by 500+ businesses across Patna and Bihar</p>
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
                Industries We Serve in Patna
              </h2>
              <p className="text-xl text-gray-600">
                Specialized software solutions for Bihar&apos;s key sectors
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
              Serving All Areas of Patna &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Patna. Remote delivery across Bihar and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Patna</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Boring Road', 'Fraser Road', 'Rajendra Nagar', 'Kankarbagh', 'Bailey Road', 'Patna Sahib', 'Danapur', 'Phulwari Sharif', 'Patna City', 'Gardanibagh'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Hajipur', 'Muzaffarpur', 'Gaya', 'Nalanda', 'Bhojpur (Arrah)', 'Saran (Chapra)', 'Vaishali', 'Begusarai', 'Jehanabad', 'Nawada'].map((city) => (
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
                  'On-site consultation in Patna',
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
              'Software Company Patna', 'Software Development Bihar', 'Software Development Muzaffarpur',
              'IT Company Patna Bihar', 'Educational ERP Patna', 'Hospital Software Patna',
              'Government Software Bihar', 'Custom Software Patna', 'Software Development Gaya',
              'ERP Software Patna', 'Web App Development Patna', 'Coaching Software Patna',
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
                Transparent Pricing for Patna
              </h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">₹2,00,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Small business software</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Basic features</span></li>
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
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Large-scale ERP/CRM</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited features</span></li>
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
                Get a Free Software Quote in Patna
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your software development project in Patna
              </p>
            </div>
            <ContactForm serviceName="Software Development" cityName="Patna" />
          </div>
        </section>
      </div>
    </>
  );
}

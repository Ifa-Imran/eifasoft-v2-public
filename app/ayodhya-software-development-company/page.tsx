import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Ayodhya | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Ayodhya offering temple management software, tourism CRM, religious tourism platforms, donation portals. 500+ projects. Ram Janmabhoomi city expertise. Starting ₹2,00,000!',
    canonical: '/ayodhya-software-development-company',
    keywords: [
      'software development company ayodhya',
      'software company ayodhya',
      'temple software ayodhya',
      'tourism software ayodhya',
      'religious software',
      'custom software ayodhya',
      'ayodhya it company',
      'donation portal ayodhya',
      'hotel management software ayodhya',
      'ram mandir software',
      'pilgrimage software ayodhya',
      'trust management software',
      'web application development ayodhya',
      'mobile app development ayodhya',
      'crm software ayodhya',
      'erp software ayodhya',
      'religious trust software india',
      'temple donation software',
      'software development faizabad',
      'it services ayodhya uttar pradesh',
      'affordable software ayodhya',
      'startup software ayodhya'
    ]
  });
}

export default function AyodhyaSoftwareDevelopmentPage() {
  const services = [
    {
      icon: '🕉️',
      title: 'Temple Management Software',
      description: 'Complete temple management systems for religious institutions',
      price: '₹2,00,000',
      features: ['Donation management', 'Devotee database', 'Pooja booking', 'Accounting system']
    },
    {
      icon: '🛕',
      title: 'Tourism Management Software',
      description: 'Tourism management for Ayodhya religious tourism operators',
      price: '₹2,50,000',
      features: ['Tour packages', 'Booking engine', 'Pilgrim CRM', 'Payment gateway']
    },
    {
      icon: '🙏',
      title: 'Donation & Trust Management',
      description: 'Software for managing donations and religious trusts',
      price: '₹1,80,000',
      features: ['Online donations', 'Receipt generation', 'Trust accounting', 'Donor reports']
    },
    {
      icon: '🏨',
      title: 'Hotel Management Software (PMS)',
      description: 'Property management system for Ayodhya hotels',
      price: '₹3,00,000',
      features: ['Reservations', 'Front desk', 'Housekeeping', 'Revenue management']
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
    { label: 'Religious Projects', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🕉️ Religious & Temples',
      description: 'Temple management software for religious institutions, temples, and ashrams with donation management and devotee tracking.',
      features: ['Temple administration', 'Donation portals', 'Pooja booking', 'Trust management']
    },
    {
      title: '🛕 Tourism & Hospitality',
      description: 'Tourism management software for Ayodhya tour operators, travel agencies, and religious tourism businesses with booking systems.',
      features: ['Tour management', 'Booking engines', 'Pilgrim CRM', 'Package management']
    },
    {
      title: '🏨 Hotels & Guest Houses',
      description: 'Property management systems for Ayodhya hotels, dharamshalas, and guest houses with reservation and revenue management.',
      features: ['Front desk operations', 'Online booking', 'Revenue management', 'Guest services']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for software development in Ayodhya?',
      answer: 'EifaSoft has 15+ years of experience delivering custom software solutions in Ayodhya. We have a team of 50+ expert developers, 500+ successfully delivered projects, and 98% client satisfaction. We serve businesses across Ayodhya including Ram Janmabhoomi, temples, tour operators, and hospitality businesses with specialized solutions. Ram city meets modern technology!'
    },
    {
      question: 'What types of software do you develop in Ayodhya?',
      answer: 'We develop custom software, temple management systems (donation management, devotee tracking), tourism management software (tour booking, pilgrim CRM), web applications, hotel PMS, and trust management systems tailored for Ayodhya religious and tourism businesses.'
    },
    {
      question: 'How much does custom software development cost in Ayodhya?',
      answer: 'Custom software development in Ayodhya starts from ₹2,00,000 for basic applications. Web applications start at ₹1,50,000, temple management at ₹2,00,000, tourism software at ₹2,50,000, and hotel PMS from ₹3,00,000. Final cost depends on features, complexity, and integration requirements. We offer free consultation and detailed project estimates.'
    },
    {
      question: 'Which technologies do you use for software development?',
      answer: 'We use modern technologies including React.js, Angular, Vue.js, Node.js, Python, Java, .NET, PHP for web development; React Native, Flutter for mobile apps; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure for cloud deployment. We select the best tech stack based on your project requirements.'
    },
    {
      question: 'Do you develop temple management software for Ayodhya temples?',
      answer: 'Yes! We specialize in temple management software for Ayodhya temples and religious institutions. Our solutions include donation management, devotee database, pooja booking, receipt generation, trust accounting, and online donation portals starting from ₹2,00,000. Perfect for Ram Janmabhoomi and other temples!'
    },
    {
      question: 'Can you develop tourism management software for Ayodhya tour operators?',
      answer: 'Absolutely! We develop specialized tourism management software for Ayodhya tour operators with tour package management, booking engines, pilgrim CRM, payment gateways, guide management, and accounting starting from ₹2,50,000. Perfect for religious tourism!'
    },
    {
      question: 'Do you offer mobile app development for both iOS and Android in Ayodhya?',
      answer: 'Yes, we develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter. Our mobile app development services in Ayodhya start at ₹2,50,000 and include UI/UX design, development, testing, app store deployment, and maintenance. Perfect for temple apps and tourism solutions.'
    },
    {
      question: 'What is the typical timeline for custom software development?',
      answer: 'Development timeline varies by project complexity: Basic web applications take 2-3 months, custom software 3-6 months, mobile apps 3-4 months, and enterprise ERP systems 6-12 months. We provide detailed project timelines during the consultation phase with milestone-based delivery.'
    },
    {
      question: 'Do you provide post-launch support and maintenance in Ayodhya?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, feature enhancements, security patches, and technical assistance. We offer AMC (Annual Maintenance Contract) plans starting from ₹50,000/year with dedicated support for Ayodhya clients.'
    },
    {
      question: 'Can you integrate payment gateways and third-party APIs in custom software?',
      answer: 'Absolutely! We integrate all major payment gateways (Razorpay, PayU, CCAvenue, Paytm), SMS APIs, email services, social media APIs, Google Maps, analytics tools, and custom third-party integrations. We ensure secure and seamless API integration for your software.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Software Development Company Ayodhya',
    'Custom software development, temple management, tourism software, donation portals for Ayodhya religious businesses.',
    'Ayodhya'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Services Ayodhya',
    'Professional software development in Ayodhya for temples, tourism, hospitality. Temple management and religious tourism solutions.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development-company' },
    { name: 'Software Development Company Ayodhya', url: '/ayodhya-software-development-company' }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema('Ayodhya');

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Ayodhya"
        subtitle="Temple Management | Tourism Software | Religious Solutions"
        description="Leading software development in Ayodhya. Temple management, religious tourism software, donation portals, custom solutions. 500+ projects. Ram city expertise!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services in Ayodhya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions for religious and tourism sectors
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Ayodhya?</h2>
            <p className="text-xl text-blue-100">Trusted by 500+ businesses across Ayodhya</p>
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
              Industries We Serve in Ayodhya
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
            Serving Businesses Across Ayodhya
          </h2>
          <p className="text-xl text-gray-600">
            Local presence with expert software development services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Ayodhya Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ram Janmabhoomi</li>
              <li>• Hanuman Garhi</li>
              <li>• Kanak Bhawan</li>
              <li>• Ramkot</li>
              <li>• Guptar Ghat</li>
              <li>• Mani Parvat</li>
              <li>• Tulsi Smarak Bhawan</li>
              <li>• Nageshwarnath Temple</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Faizabad</li>
              <li>• Sultanpur</li>
              <li>• Ambedkar Nagar</li>
              <li>• Basti</li>
              <li>• Gonda</li>
              <li>• Lucknow</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Services Available</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site consultation</li>
              <li>• Remote development</li>
              <li>• Dedicated teams</li>
              <li>• 24/7 support</li>
              <li>• Training & documentation</li>
              <li>• Maintenance & updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Ayodhya
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
              Let&apos;s discuss your software development project in Ayodhya
            </p>
          </div>
          <ContactForm serviceName="Ayodhya Software Development" />
        </div>
      </section>
    </div>
    </>
  );
}

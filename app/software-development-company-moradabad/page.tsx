import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company in Moradabad | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company in Moradabad offering custom software, web applications, mobile apps, and enterprise solutions. 15+ years experience, 500+ projects delivered. Contact us today!',
    canonical: '/software-development-company-moradabad',
    keywords: [
      'software development company moradabad',
      'software company moradabad',
      'custom software development moradabad',
      'web application development moradabad',
      'mobile app development moradabad',
      'enterprise software moradabad',
      'it company moradabad',
      'software solutions moradabad',
      'erp software moradabad',
      'crm software moradabad',
      'mlm software moradabad',
      'ecommerce software moradabad',
      'brass industry software moradabad',
      'manufacturing software moradabad',
      'startup software moradabad',
      'saas development moradabad',
      'software development rampur',
      'school management software moradabad',
      'hospital management software moradabad',
      'inventory management software moradabad',
      'web development moradabad uttar pradesh',
    ]
  });
}

export default function SoftwareDevelopmentMoradabad() {
  const faqs = [
    {
      question: 'Why choose EifaSoft as your software development company in Moradabad?',
      answer: 'EifaSoft is Moradabad&apos;s leading software development company with 15+ years of experience and 500+ successful projects. We offer custom software solutions, web applications, mobile apps, MLM software, e-commerce platforms, and enterprise solutions. Our Moradabad team provides local support with global quality standards, competitive pricing, and dedicated project management. We understand the local business environment while delivering world-class technology solutions.'
    },
    {
      question: 'What software development services do you offer in Moradabad?',
      answer: 'Our Moradabad software development services include: Custom Software Development (ERP, CRM, HRM systems), Web Application Development (ReactJS, Angular, Next.js), Mobile App Development (iOS, Android, Flutter, React Native), MLM Software Development (Binary, Matrix, Unilevel plans), E-Commerce Development (Shopify, WooCommerce, Magento), Enterprise Software Solutions, Cloud-based Applications, API Development & Integration, Database Design & Management, and Software Maintenance & Support. We serve businesses across Moradabad and surrounding areas.'
    },
    {
      question: 'How much does custom software development cost in Moradabad?',
      answer: 'Software development costs in Moradabad vary based on complexity: Basic Web Application: ₹50,000 - ₹2,00,000, Custom Software (Small Business): ₹2,00,000 - ₹5,00,000, Mobile App Development: ₹1,50,000 - ₹8,00,000, MLM Software: ₹3,00,000 - ₹15,00,000, Enterprise Software: ₹10,00,000+. We offer competitive Moradabad pricing with flexible payment plans. Free consultation and detailed quotation provided after understanding your requirements.'
    },
    {
      question: 'Do you provide on-site software development services in Moradabad?',
      answer: 'Yes! We provide both on-site and remote software development services in Moradabad. Our Moradabad office is equipped with modern infrastructure and experienced developers. We offer: On-site client meetings and requirement gathering, Regular progress updates and demonstrations, On-premise deployment and installation, Training sessions at your Moradabad location, Dedicated support team, and Hybrid development model (on-site + remote). We serve clients across Moradabad including Majhola, Galshaheed, Katghar, Civil Lines, and industrial areas.'
    },
    {
      question: 'What technologies do you use for software development in Moradabad?',
      answer: 'We use cutting-edge technologies: Frontend - React, Angular, Vue.js, Next.js; Backend - Node.js, Python, PHP, .NET, Java; Mobile - Flutter, React Native, iOS (Swift), Android (Kotlin); Database - MySQL, PostgreSQL, MongoDB, Firebase; Cloud - AWS, Azure, Google Cloud; DevOps - Docker, Kubernetes, CI/CD. Our Moradabad development team stays updated with latest technology trends to deliver modern, scalable solutions.'
    },
    {
      question: 'How long does it take to develop custom software in Moradabad?',
      answer: 'Development timelines depend on project complexity: Simple Web Application: 4-8 weeks, Custom Business Software: 2-4 months, Mobile App (iOS/Android): 2-3 months, MLM Software: 2-4 months, Enterprise Solution: 4-12 months. We follow agile methodology with 2-week sprints, providing regular updates. Our Moradabad team ensures timely delivery without compromising quality. Free project timeline estimation provided during consultation.'
    },
    {
      question: 'Do you provide software maintenance and support in Moradabad?',
      answer: 'Yes, comprehensive maintenance and support services include: 3-6 months free support after deployment, Bug fixes and troubleshooting, Software updates and enhancements, Performance optimization, Security patches, Server maintenance, Database management, 24/7 technical support, Annual Maintenance Contract (AMC) options starting ₹25,000/year. Our Moradabad support team ensures your software runs smoothly with minimal downtime.'
    },
    {
      question: 'Can you help migrate our existing software to modern technology?',
      answer: 'Absolutely! We specialize in software modernization and migration for Moradabad businesses: Legacy system assessment and planning, Data migration with zero data loss, Technology stack upgrade (e.g., PHP to Node.js, desktop to cloud), Database migration, UI/UX redesign, Performance optimization, Gradual migration strategy to minimize disruption, Training for new system. Many Moradabad businesses have successfully modernized their software with our expert guidance.'
    },
    {
      question: 'Do you develop software for specific industries in Moradabad?',
      answer: 'Yes, we have expertise in industry-specific software for Moradabad&apos;s key sectors: Manufacturing - Inventory management, production tracking, quality control; Education - School/college management systems, e-learning platforms; Healthcare - Hospital management, patient records, appointment systems; Retail - POS systems, inventory, billing; Textiles/Brass Industry - Order management, production planning (Moradabad specialties); Real Estate - Property management, CRM; Logistics - Fleet management, tracking systems. We understand Moradabad&apos;s business landscape and deliver tailored solutions.'
    },
    {
      question: 'What is your software development process in Moradabad?',
      answer: 'Our proven development process: 1) Requirement Analysis - Free consultation at your Moradabad office, 2) Planning & Design - Wireframes, mockups, technical architecture, 3) Development - Agile sprints with regular demos, 4) Testing - Comprehensive QA, bug fixing, 5) Deployment - On-premise or cloud deployment, 6) Training - User training sessions in Moradabad, 7) Support - Ongoing maintenance and updates. We maintain transparent communication throughout with dedicated project manager assigned to each Moradabad client.'
    }
  ];

  const industries = [
    {
      title: '🔩 Brass & Metal Industry',
      description: 'Moradabad is India\'s "Brass City". We build order management, export documentation, production tracking, and B2B catalog systems for the brass and metal industry.',
      features: ['Export order management', 'Production tracking', 'Quality control', 'B2B catalog portals'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'School ERP, college management, coaching institute portals, and online examination systems for Moradabad\'s growing education sector.',
      features: ['School/college ERP', 'Admission management', 'Online exams', 'Fee management'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Hospital management systems, clinic software, and patient management platforms for Moradabad\'s healthcare providers.',
      features: ['HMS/HIMS software', 'Appointment booking', 'Electronic records', 'Billing & pharmacy'],
    },
    {
      title: '🏭 Manufacturing & Textiles',
      description: 'Production planning, inventory management, and supply chain software for Moradabad\'s manufacturing and textile businesses.',
      features: ['Production planning', 'Inventory management', 'Quality control', 'Supply chain'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores, multi-vendor marketplaces, and retail management software for Moradabad traders and exporters.',
      features: ['E-commerce stores', 'POS systems', 'Payment integration', 'Order management'],
    },
    {
      title: '🚚 Logistics & Trading',
      description: 'Fleet tracking, warehouse management, and trading software for Moradabad\'s logistics and trading businesses.',
      features: ['Fleet tracking', 'Warehouse management', 'Route optimization', 'Billing & invoicing'],
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Moradabad'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8386,
      longitude: 78.7733,
    },
    areaServed: [
      { '@type': 'City', name: 'Moradabad' },
      { '@type': 'City', name: 'Rampur' },
      { '@type': 'City', name: 'Sambhal' },
      { '@type': 'City', name: 'Amroha' },
      { '@type': 'City', name: 'Bijnor' },
      { '@type': 'City', name: 'Bareilly' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Software Development Company Moradabad',
    'Professional software development services in Moradabad including custom software, web applications, mobile apps, MLM software, and enterprise solutions. Expert team with 15+ years experience serving Moradabad businesses.',
    'Moradabad'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Moradabad',
    'Tailored software solutions for Moradabad businesses including web applications, mobile apps, enterprise software, and cloud-based systems. Starting from ₹2,00,000 with flexible payment options.',
    '200000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Development', url: '/software-development' },
    { name: 'Software Development Company Moradabad', url: '/software-development-company-moradabad' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Software Development Company in Moradabad"
        subtitle="Custom Software Solutions for Moradabad Businesses"
        description="Leading software development company in Moradabad with 15+ years experience. Custom software, web apps, mobile apps, MLM software, and enterprise solutions. Serving businesses across Moradabad and UP."
        gradient="blue"
      />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft in Moradabad?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted technology partner for custom software development in Moradabad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">15+</div>
              <h3 className="font-bold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600 text-sm">in software development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">500+</div>
              <h3 className="font-bold text-gray-900 mb-2">Projects Delivered</h3>
              <p className="text-gray-600 text-sm">successful implementations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">50+</div>
              <h3 className="font-bold text-gray-900 mb-2">Moradabad Clients</h3>
              <p className="text-gray-600 text-sm">local businesses served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">24/7</div>
              <h3 className="font-bold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600 text-sm">dedicated assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Software Development Services in Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">Tailored ERP, CRM, HRM systems for Moradabad businesses</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹2,00,000</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Application Development</h3>
              <p className="text-gray-600 mb-4">Modern, responsive web apps using React, Angular, Next.js</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹50,000</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">iOS, Android, Flutter apps for Moradabad market</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹1,50,000</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MLM Software Development</h3>
              <p className="text-gray-600 mb-4">Binary, Matrix, Unilevel MLM solutions</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹3,00,000</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-Commerce Development</h3>
              <p className="text-gray-600 mb-4">Online stores for Moradabad retailers and manufacturers</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹75,000</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">Large-scale software for Moradabad industries</p>
              <div className="text-sm text-blue-600 font-semibold">Starting ₹10,00,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use in Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technology stack for modern software solutions
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
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Node.js</li>
                <li>✓ Python</li>
                <li>✓ PHP</li>
                <li>✓ .NET Core</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Mobile</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Flutter</li>
                <li>✓ React Native</li>
                <li>✓ iOS (Swift)</li>
                <li>✓ Android (Kotlin)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Database</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ MySQL</li>
                <li>✓ PostgreSQL</li>
                <li>✓ MongoDB</li>
                <li>✓ Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve in Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              Specialised software for Moradabad&apos;s key sectors
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
            Serving Moradabad &amp; Nearby Cities
          </h2>
          <p className="text-xl text-gray-600">
            On-site consultations across Moradabad. Remote delivery across UP and India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Moradabad</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Majhola', 'Galshaheed', 'Katghar', 'Civil Lines', 'Industrial Area', 'Kanth Road', 'Ramganga Vihar', 'Buddhi Vihar', 'Pakbara', 'MDA Colony'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{area}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby UP Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Rampur', 'Sambhal', 'Amroha', 'Chandausi', 'Bijnor', 'Bareilly', 'Hapur', 'Meerut', 'Muzaffarnagar', 'Budaun'].map((city) => (
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
                'On-site consultation in Moradabad',
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
            'Software Development Moradabad', 'ERP Software Moradabad', 'Brass Industry Software Moradabad',
            'Custom Software Moradabad', 'MLM Software Moradabad', 'E-Commerce Moradabad',
            'IT Company Moradabad', 'Mobile App Moradabad', 'SaaS Development Moradabad',
            'Software Development Rampur', 'Manufacturing Software Moradabad', 'Web Development Moradabad',
          ].map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Free Consultation in Moradabad
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss your software development project
            </p>
          </div>
          <ContactForm serviceName="Software Development" cityName="Moradabad" />
        </div>
      </section>
    </>
  );
}

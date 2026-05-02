import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Patna | Web Development Bihar | EifaSoft',
    description: 'Top-rated website designing company in Patna, Bihar. School websites, hospital portals, coaching institute sites, government websites, e-commerce solutions. 500+ websites delivered. Starting ₹12,000. Free consultation!',
    canonical: '/patna-website-designing-and-development-company',
    keywords: [
      'website designing company patna',
      'web design patna',
      'website development patna',
      'patna web designers',
      'ecommerce website patna',
      'wordpress development patna',
      'corporate website patna',
      'school website patna',
      'hospital website patna',
      'coaching institute website patna',
      'government website patna',
      'responsive website patna',
      'website redesign patna',
      'seo website patna bihar',
      'landing page patna',
      'business website patna',
      'affordable website patna',
      'best web designer patna',
      'website maintenance patna',
      'web development company patna bihar',
      'website design muzaffarpur',
      'website design gaya',
    ],
  });
}

export default function PatnaWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏫',
      title: 'School & Coaching Institute Websites',
      description: 'Feature-rich websites for Patna coaching centres and schools with admission portals, result pages, and online fee payment',
      price: '₹18,000',
      features: ['Admission enquiry forms', 'Online fee payment', 'Result portal', 'Faculty profiles'],
    },
    {
      icon: '🏥',
      title: 'Hospital & Healthcare Websites',
      description: 'Professional hospital websites with online appointment booking, doctor profiles, and health blogs',
      price: '₹25,000',
      features: ['Online appointment booking', 'Doctor profiles', 'Service listings', 'Health blog'],
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business websites for Patna companies with modern UI and lead generation',
      price: '₹20,000',
      features: ['Company profile', 'Service showcase', 'Team pages', 'Contact integration'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores for Patna traders and retailers with payment gateway and inventory management',
      price: '₹45,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory', 'Order management'],
    },
    {
      icon: '🏛️',
      title: 'Government & NGO Websites',
      description: 'Compliant, accessible websites for Bihar government offices, departments, and NGOs',
      price: '₹30,000',
      features: ['GIGW compliance', 'Bilingual (Hindi/English)', 'Document downloads', 'RTI portal'],
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites for Patna businesses with training and content management',
      price: '₹15,000',
      features: ['Custom themes', 'Plugin integration', 'Training', 'Content management'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Bihar Clients', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🎓 Education & Coaching',
      description: 'Websites for IIT/UPSC coaching institutes, schools, and colleges in Patna — admission portals, online tests, results, and student dashboards.',
      features: ['Coaching institute portals', 'School management sites', 'Admission enquiry', 'Online test results'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Hospital websites, clinic portals, and nursing home sites for Patna healthcare providers with appointment booking and doctor listings.',
      features: ['Hospital portals', 'Online appointments', 'Doctor profiles', 'Health blogs'],
    },
    {
      title: '🏢 Government & Public Sector',
      description: 'GIGW-compliant, bilingual websites for Bihar government departments, municipal bodies, and public sector organisations.',
      features: ['Government portals', 'RTI & grievance', 'Bilingual (Hindi/English)', 'Scheme information'],
    },
    {
      title: '🌾 Agriculture & Food Processing',
      description: 'Websites for Bihar\'s agri-businesses, food processing units, mandi traders, and agri-export companies.',
      features: ['Product showcases', 'Dealer portals', 'Inquiry forms', 'Export-ready sites'],
    },
    {
      title: '🛒 Retail & Trading',
      description: 'E-commerce and retail websites for Patna traders, wholesalers, and businesses expanding their digital presence.',
      features: ['Online stores', 'Inventory management', 'GST invoicing', 'Payment gateways'],
    },
    {
      title: '🏗️ Real Estate & Construction',
      description: 'Property listing websites and builder portfolios for Patna real estate developers and housing societies.',
      features: ['Property listings', 'Virtual tours', 'EMI calculators', 'Lead capture'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Patna?',
      answer: 'EifaSoft is a leading website designing company in Patna with 15+ years of experience and 500+ successful projects across Bihar. We specialise in coaching institute websites, hospital portals, government sites, e-commerce platforms, and corporate websites. We provide local support in Patna, competitive pricing starting at ₹12,000, fast delivery, and Hindi & English communication for Bihar clients.',
    },
    {
      question: 'Do you create websites for coaching institutes and schools in Patna?',
      answer: 'Yes! Patna is famous for IIT/UPSC coaching centres. We build: Coaching Websites — Batch schedules, Faculty profiles, Result announcements, Online fee payment, Student login portal; School Websites — Admission forms, Attendance reports, Result portals, Parent communication; Features — Mobile responsive, Fast loading, SEO optimised. Starting from ₹18,000.',
    },
    {
      question: 'What is the cost of website designing in Patna?',
      answer: 'Website design pricing in Patna: Basic Website: ₹12,000–₹20,000, Coaching/School Website: ₹18,000–₹45,000, Hospital Website: ₹25,000–₹60,000, WordPress: ₹15,000–₹40,000, E-Commerce: ₹45,000–₹1,50,000, Government/NGO: ₹30,000–₹80,000. All packages include responsive design, basic SEO, and 3-month support. Flexible payment plans for Bihar businesses.',
    },
    {
      question: 'Can you build hospital and healthcare websites in Patna?',
      answer: 'Absolutely! We build professional healthcare websites for Patna hospitals, nursing homes, and clinics: Features — Online appointment booking, Doctor profiles, Department listings, Health blog, Ambulance contact; Advanced — Patient portal, Lab report downloads, Telemedicine integration, Insurance info. Starting from ₹25,000.',
    },
    {
      question: 'Do you create government and NGO websites in Bihar?',
      answer: 'Yes! We develop GIGW-compliant government websites for Bihar departments and NGO portals: Features — Bilingual (Hindi/English) content, RTI portal, Grievance redressal, Document downloads, Scheme information, News & updates; Compliance — Accessibility standards, NIC guidelines, WCAG compliance. Starting from ₹30,000.',
    },
    {
      question: 'Do you provide SEO services for Patna businesses?',
      answer: 'Yes! Comprehensive SEO for Patna: Local SEO — Rank for Patna & Bihar searches; Google My Business — Verification, optimisation, reviews; Bihar Targeting — Compete for local and state-wide keywords; Industry Keywords — Coaching, healthcare, government, e-commerce; Technical SEO — Fast loading, mobile optimisation, Core Web Vitals. Basic SEO included. Advanced campaigns from ₹8,000/month.',
    },
    {
      question: 'Can you create bilingual (Hindi & English) websites for Bihar audiences?',
      answer: 'Yes! Bilingual website development: Language Support — English and Hindi; Features — Language switcher, Translated content, Hindi-friendly fonts, SEO-optimised translations; Benefits — Reach wider Bihar audience, Better engagement, Higher conversions; Perfect for government, education, and healthcare sectors. Hindi setup from ₹5,000 additional.',
    },
    {
      question: 'Are your websites mobile-optimised and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimised! Mobile Optimisation — Responsive design, Touch-friendly navigation, Mobile-first indexing; Speed Optimisation — Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance — Core Web Vitals optimised, Fast 4G/5G loading. Especially important for Bihar\'s mobile-first internet users. Included at no extra cost.',
    },
    {
      question: 'How long does it take to create a website in Patna?',
      answer: 'Website development timeline: Basic Website: 1–2 weeks, Coaching/School Website: 2–4 weeks, Hospital Website: 3–5 weeks, WordPress: 2–3 weeks, E-Commerce: 4–8 weeks, Government Portal: 4–8 weeks. We provide weekly updates, milestone delivery, and on-site meetings in Patna. Rush delivery available.',
    },
    {
      question: 'Which areas of Patna do you serve?',
      answer: 'We serve all areas of Patna: Boring Road, Fraser Road, Rajendra Nagar, Kankarbagh, Bailey Road, Patna Sahib, Danapur, Phulwari Sharif, Patna City, Gardanibagh. Nearby Bihar — Hajipur, Muzaffarpur, Gaya, Nalanda, Bhojpur. We provide on-site consultations, local support, and dedicated account manager. Serving Patna since 2008.',
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
    'Website Designing Company Patna',
    'Professional website design services in Patna including coaching institute websites, hospital portals, government sites, e-commerce, and corporate websites.',
    'Patna'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Patna',
    'Custom website design for Patna coaching institutes, hospitals, government, and businesses. Mobile-responsive, SEO-optimised websites starting from ₹12,000.',
    '12000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Patna Website Designing', url: '/patna-website-designing-and-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Patna"
        subtitle="Coaching Institutes | Hospitals | Government | E-Commerce"
        description="Leading website design company in Patna, Bihar. Coaching institute sites, hospital portals, government websites, e-commerce. 500+ websites delivered. Starting ₹12,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Design Services in Patna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete web solutions for education, healthcare, and business in Bihar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-600 mb-4">Starting {service.price}</div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Patna?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Patna and Bihar</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {whyChooseUs.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </div>
              ))}
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
                Specialised website solutions for Bihar&apos;s key sectors
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
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Bihar Cities</h3>
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
                  'Hindi & English support',
                  '24/7 WhatsApp support',
                  'Dedicated project managers',
                  'Training & documentation',
                  'Monthly AMC plans',
                  'Fast turnaround delivery',
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
              'Website Design Patna', 'School Website Patna', 'Hospital Website Patna',
              'Coaching Institute Website Patna', 'Government Website Bihar', 'E-Commerce Website Patna',
              'WordPress Patna', 'Corporate Website Patna', 'SEO Website Patna',
              'Website Design Muzaffarpur', 'Website Design Gaya', 'Web Developer Bihar',
            ].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹12,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>5–7 pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Mobile responsive</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Basic SEO</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>3 months support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Package</h3>
                <div className="text-4xl font-bold text-white mb-6">₹35,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>10–15 pages</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Premium design</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>CRM integration</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Training included</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹80,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>E-Commerce ready</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Advanced SEO</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>12 months support</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Dedicated team</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
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
                Get a Free Website Quote in Patna
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your website project in Patna
              </p>
            </div>
            <ContactForm serviceName="Website Designing" cityName="Patna" />
          </div>
        </section>
      </div>
    </>
  );
}

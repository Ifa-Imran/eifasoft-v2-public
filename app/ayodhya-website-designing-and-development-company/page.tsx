import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Ayodhya | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Ayodhya offering responsive web design, tourism websites, hotel booking portals, temple websites. 500+ websites delivered. Religious tourism expertise. Starting ₹15,000!',
    canonical: '/ayodhya-website-designing-and-development-company',
    keywords: [
      'website designing company ayodhya',
      'web design ayodhya',
      'tourism website ayodhya',
      'hotel website ayodhya',
      'temple website ayodhya',
      'ayodhya web designers',
      'pilgrimage website ayodhya',
      'ram mandir website',
      'religious tourism website',
      'wordpress development ayodhya',
      'ecommerce website ayodhya',
      'travel agency website ayodhya',
      'dharmashala website ayodhya',
      'responsive web design ayodhya',
      'website design faizabad',
      'website designing company ayodhya uttar pradesh',
      'corporate website ayodhya',
      'donation website ayodhya',
      'affordable website ayodhya',
      'best web designer ayodhya',
      'online booking website ayodhya',
      'multilingual website ayodhya'
    ]
  });
}

export default function AyodhyaWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals for NCR companies',
      price: '₹22,000',
      features: ['Company profile', 'Service showcase', 'Team pages', 'Contact integration']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores with payment gateway',
      price: '₹48,000',
      features: ['Product catalog', 'Payment gateway', 'Inventory', 'Order management']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites for all businesses',
      price: '₹15,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'Cross-browser']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites',
      price: '₹20,000',
      features: ['Custom themes', 'Plugin integration', 'Training', 'Content management']
    },
    {
      icon: '🏛️',
      title: 'Tourism & Hotel Websites',
      description: 'Websites for hotels, travel agencies, tour operators',
      price: '₹30,000',
      features: ['Online booking', 'Room showcase', 'Tour packages', 'Multi-language']
    },
    {
      icon: '🛕',
      title: 'Temple & Religious Websites',
      description: 'Websites for temples, religious organizations',
      price: '₹20,000',
      features: ['Darshan timings', 'Donation portal', 'Event calendar', 'Photo gallery']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Tourism Projects', value: '90+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🏛️ Tourism & Hospitality',
      description: 'Specialized websites for Ayodhya\'s booming tourism sector including hotels, travel agencies, and tour operators.',
      features: ['Online booking systems', 'Multi-language support', 'Tour packages', 'Virtual tours']
    },
    {
      title: '🛕 Religious & Cultural',
      description: 'Websites for temples, religious organizations, and cultural institutions in Ayodhya.',
      features: ['Donation portals', 'Event management', 'Photo galleries', 'Virtual darshan']
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores and business websites for Gorakhpur\'s retail shops and trading businesses.',
      features: ['Product catalogs', 'Online ordering', 'Inventory management', 'Payment gateway']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Ghaziabad?',
      answer: 'EifaSoft is a leading website designing company serving Ayodhya with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Ayodhya\'s tourism sector, hotels, temples, and religious organizations. Our expertise includes hotel booking systems, temple websites with donation portals, travel agency sites, and tourist information portals. We understand Ayodhya\'s religious tourism market, provide local support, competitive pricing starting at ₹15,000, and websites optimized for pilgrims and tourists from across India and internationally.'
    },
    {
      question: 'Do you create hotel and tourism websites for Ayodhya businesses?',
      answer: 'Yes! We specialize in tourism websites: Hotel Portals - Online booking engine, Room showcase with photos, Rate management, Review integration; Travel Websites - Tour packages, Pilgrim services, Transportation booking, Guide services; Features - Multi-language (Hindi/English), Payment gateway, Mobile responsive, SEO for tourism keywords. Perfect for Ayodhya hotels near Ram Mandir, Hanuman Garhi. Starting from ₹30,000.'
    },
    {
      question: 'What is the cost of website designing in Ghaziabad?',
      answer: 'Website design pricing in Ayodhya: Basic Website: ₹15,000 - ₹25,000, Temple Website: ₹20,000 - ₹45,000, Hotel/Tourism: ₹30,000 - ₹1,10,000, E-Commerce: ₹45,000 - ₹1,30,000, WordPress: ₹18,000 - ₹40,000. All packages include responsive design, basic SEO, multi-language options, and 3-month support. Special pricing for religious organizations.'
    },
    {
      question: 'Can you integrate CRM and lead management systems?',
      answer: 'Yes! Complete CRM integration: Lead Capture - Multiple inquiry forms, WhatsApp integration, Live chat; CRM Integration - Zoho CRM, Salesforce, HubSpot, Custom CRM; Lead Management - Auto assignment, Email/SMS notifications, Lead tracking, Follow-up reminders; Analytics - Source tracking, Conversion tracking, ROI measurement. Perfect for real estate, manufacturing, and service businesses. CRM integration from ₹15,000 additional.'
    },
    {
      question: 'Do you provide SEO services for Ghaziabad businesses?',
      answer: 'Yes! Comprehensive SEO: Local SEO - Rank for Ghaziabad searches; Google My Business - Verification, optimization, reviews; NCR Targeting - Compete with Delhi/Noida businesses; Industry Keywords - Manufacturing, real estate, corporate keywords; Content Marketing - Industry blogs, area guides; Technical SEO - Fast loading, mobile optimization. Basic SEO included. Advanced campaigns from ₹8,000/month.'
    },
    {
      question: 'Can you create multilingual websites for NCR audiences?',
      answer: 'Yes! Multilingual website development: Language Support - English, Hindi, regional languages; Features - Language switcher, Translated content, SEO-optimized translations; Benefits - Reach Hindi-speaking audience, Better engagement. Perfect for NCR businesses. Multilingual setup from ₹8,000 additional per language.'
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes, 100% mobile responsive and speed optimized! Mobile Optimization - Responsive design, Touch-friendly navigation, Mobile-first indexing, Fast 4G/5G loading; Speed Optimization - Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance - Core Web Vitals optimized. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a website in Ghaziabad?',
      answer: 'Website development timeline: Basic Website: 1-2 weeks, Corporate Website: 2-4 weeks, WordPress: 2-3 weeks, Real Estate Portal: 4-8 weeks, E-Commerce: 4-8 weeks. We provide weekly updates, milestone delivery, on-site meetings in Ghaziabad. Rush delivery available. Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide hosting and maintenance services?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting - Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹10,000/year); Domain Services - Registration, transfer, email hosting; Maintenance - Monthly AMC from ₹3,000/month, Updates, backups, monitoring, 99.9% uptime; Support - Email/phone/WhatsApp support. India-based servers for fast NCR loading.'
    },
    {
      question: 'Which areas of Ghaziabad do you serve?',
      answer: 'We serve all Ayodhya areas: Ram Mandir area, Hanuman Garhi, Kanak Bhawan, Civil Lines, Faizabad Road, Railway Station area, Nearby - Faizabad, Sultanpur, Ambedkar Nagar, Barabanki. We provide on-site consultations, local support, dedicated account manager. Serving Ayodhya religious tourism sector since 2008.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Ayodhya',
    'Professional website design services in Ayodhya including tourism websites, hotel booking portals, temple websites, and business sites.',
    'Ayodhya'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Ayodhya',
    'Custom website design for Ayodhya tourism, hotels, temples. Mobile-responsive, multi-language websites starting from ₹15,000.',
    '25000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Ayodhya Website Designing', url: '/ayodhya-website-designing-and-development-company' }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema('Ayodhya');

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Ayodhya"
        subtitle="Tourism | Hotels | Temples | Religious Websites"
        description="Leading website design company in Ayodhya. Hotel booking systems, temple websites, tourism portals. 500+ websites. Serving Ayodhya pilgrims & tourists. Starting ₹15,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Ayodhya
          </h2>
          <p className="text-xl text-gray-600">Complete web solutions for tourism and religious organizations</p>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft?</h2>
            <p className="text-xl text-blue-100">Trusted by Ayodhya businesses</p>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Ayodhya Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ram Mandir area</li>
              <li>• Hanuman Garhi</li>
              <li>• Kanak Bhawan</li>
              <li>• Civil Lines</li>
              <li>• Faizabad Road</li>
              <li>• Railway Station area</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Faizabad</li>
              <li>• Sultanpur</li>
              <li>• Barabanki</li>
              <li>• Ambedkar Nagar</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Tourism websites</li>
              <li>• Hotel booking</li>
              <li>• Temple websites</li>
              <li>• SEO services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹14,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>5-7 pages</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic SEO</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Get Started</a>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Corporate</h3>
              <div className="text-4xl font-bold text-white mb-6">₹45,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>10-15 pages</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Premium design</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>CRM integration</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 font-semibold">Get Started</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹85,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Inventory system</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Free Consultation</h2>
            <p className="text-xl text-gray-600">Let&apos;s discuss your project</p>
          </div>
          <ContactForm serviceName="Ayodhya Website Development" />
        </div>
      </section>
    </div>
    </>
  );
}

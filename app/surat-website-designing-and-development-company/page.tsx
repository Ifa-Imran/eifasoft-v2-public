import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Surat | Web Development Gujarat | EifaSoft',
    description: 'Top-rated website designing company in Surat, Gujarat. Diamond & textile trade websites, e-commerce, corporate sites, B2B portals, multilingual (Gujarati/English) websites. 500+ websites delivered. Starting ₹12,000. Free consultation!',
    canonical: '/surat-website-designing-and-development-company',
    keywords: [
      'website designing company surat',
      'web design surat',
      'website development surat',
      'surat web designers',
      'ecommerce website surat',
      'wordpress development surat',
      'corporate website surat',
      'diamond industry website surat',
      'textile website surat',
      'responsive website surat',
      'website redesign surat',
      'seo website surat gujarat',
      'landing page surat',
      'business website surat',
      'affordable website surat',
      'best web designer surat',
      'website maintenance surat',
      'web development company surat gujarat',
      'website design varachha',
      'website design adajan',
      'website company gujarat',
      'b2b website surat',
    ],
  });
}

export default function SuratWebsiteDesigningPage() {
  const services = [
    {
      icon: '🎨',
      title: 'Custom Website Design',
      description: 'Unique, responsive website designs tailored to Surat businesses with brand-aligned UI/UX',
      price: '₹15,000',
      features: ['Mobile-first responsive design', 'Brand identity integration', 'UI/UX excellence', 'Basic SEO setup'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores for Surat\'s textile traders, diamond exporters, and retail businesses',
      price: '₹45,000',
      features: ['Product catalog management', 'Payment gateway integration', 'Inventory management', 'Order tracking'],
    },
    {
      icon: '💼',
      title: 'Corporate Websites',
      description: 'Professional business websites for Surat enterprises with CMS and lead generation',
      price: '₹20,000',
      features: ['Company profile pages', 'Service showcases', 'Lead capture forms', 'CMS integration'],
    },
    {
      icon: '💎',
      title: 'Diamond & Textile Trade Websites',
      description: 'Specialised B2B and B2C websites for Surat\'s diamond, gem, and textile export businesses',
      price: '₹30,000',
      features: ['Diamond/fabric catalogs', 'B2B buyer portals', 'Multi-currency pricing', 'Export documentation pages'],
    },
    {
      icon: '📱',
      title: 'Responsive & PWA Development',
      description: 'Mobile-optimised websites and Progressive Web Apps for Surat\'s mobile-first audience',
      price: '₹18,000',
      features: ['Cross-device compatibility', 'Touch-optimised UX', 'PWA support', 'App-like experience'],
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, security patches, and performance updates for Surat clients',
      price: '₹8,000/yr',
      features: ['Regular updates', 'Security patches', 'Bug fixes', 'Performance monitoring'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Gujarat Clients', value: '80+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '💎 Diamond & Gems Industry',
      description: 'Surat processes 90% of the world\'s diamonds. We build diamond dealer websites, B2B portals, gem catalog platforms, and export-ready sites for Surat\'s gems industry.',
      features: ['Diamond dealer websites', 'B2B gem portals', 'Gem catalog platforms', 'Export inquiry sites'],
    },
    {
      title: '🧵 Textile & Fashion Industry',
      description: 'Surat is India\'s textile capital. We create fabric catalog websites, wholesale portals, saree trader sites, and fashion e-commerce for textile manufacturers and exporters.',
      features: ['Fabric catalog websites', 'Wholesale portals', 'Saree trader sites', 'Fashion e-commerce'],
    },
    {
      title: '🏭 Manufacturing & Chemical',
      description: 'Professional websites for Surat\'s chemical plants, Hazira industrial companies, and manufacturing units seeking digital presence and B2B inquiry generation.',
      features: ['Company profile sites', 'Product brochure sites', 'B2B inquiry portals', 'Industrial websites'],
    },
    {
      title: '🏢 Real Estate & Builders',
      description: 'Property listing websites, builder portfolios, and housing society sites for Surat\'s booming real estate sector with virtual tours and lead capture.',
      features: ['Property listing sites', 'Builder portfolios', 'EMI calculators', 'Lead capture pages'],
    },
    {
      title: '🎓 Education & Coaching',
      description: 'School, college, and coaching institute websites for Surat\'s education sector with admission forms, fee payment, and student portals.',
      features: ['School/college sites', 'Admission portals', 'Online fee payment', 'Student dashboards'],
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Hospital websites, clinic portals, and doctor profiles for Surat healthcare providers with online appointment booking and health information.',
      features: ['Hospital websites', 'Online appointments', 'Doctor profiles', 'Health service pages'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Surat?',
      answer: 'EifaSoft is a top-rated website designing company in Surat with 15+ years of experience and 500+ websites delivered across Gujarat. We specialise in diamond industry websites, textile trade portals, e-commerce platforms, and corporate sites. Key advantages: Competitive pricing from ₹12,000, Gujarati & English communication, Local Surat support team, SEO-optimised websites, Fast delivery with weekly updates.',
    },
    {
      question: 'Do you create websites for diamond and textile businesses in Surat?',
      answer: 'Yes! We are specialists in Surat\'s core industries: Diamond Websites — Dealer profiles, B2B buyer portals, Gem catalogs with carat/cut/clarity specs, Export inquiry forms, Multi-currency pricing; Textile Websites — Fabric catalogs, Wholesale order portals, Saree collection showcases, Sample request forms; Features — Gujarati & English bilingual, GST invoicing, Export compliance pages, Mobile-optimised. Starting from ₹25,000.',
    },
    {
      question: 'What is the cost of website designing in Surat?',
      answer: 'Website design pricing in Surat: Basic Website: ₹12,000–₹20,000, Corporate Website: ₹20,000–₹45,000, Diamond/Textile Trade Site: ₹25,000–₹60,000, E-Commerce: ₹45,000–₹1,50,000, WordPress CMS: ₹15,000–₹40,000, B2B Portal: ₹50,000–₹2,00,000. All packages include responsive design, basic SEO, and 3-month support. Flexible payment plans for Surat SMEs and traders.',
    },
    {
      question: 'Can you build multilingual (Gujarati and English) websites?',
      answer: 'Yes! Bilingual website development for Surat: Languages — English and Gujarati; Features — Language switcher, Unicode Gujarati fonts, Translated content, Localised date/number formats; Benefits — Reach wider Surat & Gujarat audience, Better engagement with local traders, Higher conversions from Gujarati-speaking customers; Popular for textile dealers, diamond traders, and retail businesses. Gujarati language module from ₹8,000 additional.',
    },
    {
      question: 'Do you provide local SEO services for Surat businesses?',
      answer: 'Yes! Comprehensive local SEO for Surat: Local SEO — Rank for "Surat + your business" searches; Google My Business — Verification, optimisation, reviews management; Gujarat Targeting — Compete for Surat, Navsari, Bharuch, Gujarat-wide keywords; Industry SEO — Diamond, textile, chemical, real estate keywords; Technical SEO — Fast loading, mobile-first, Core Web Vitals. Basic SEO included free. Advanced local SEO campaigns from ₹6,000/month.',
    },
    {
      question: 'What types of e-commerce websites do you build in Surat?',
      answer: 'We build all types of e-commerce websites for Surat: B2C Stores — Retail shops, fashion/textile, jewellery, handloom; B2B Portals — Wholesale platforms, Diamond B2B, Fabric wholesale; Marketplaces — Multi-vendor platforms; Features — Razorpay/PayU/UPI integration, GST-ready invoicing, Inventory management, Order tracking, Multi-currency (for exporters); Platform — Custom, WooCommerce, Shopify. E-commerce from ₹45,000.',
    },
    {
      question: 'Can you build B2B export portals for Surat businesses?',
      answer: 'Yes! B2B export website features for Surat exporters: Catalogue Management — Product listings with specs, certifications, pricing; Buyer Registration — KYC, trade references, credit terms; Inquiry & Quote — RFQ system, bulk inquiry forms; Compliance — Export documentation pages, DGFT info, FIRC; Languages — English, Gujarati, optionally Chinese/Arabic for overseas buyers; Integrations — Trade portals (IndiaMart, Alibaba), payment gateways. B2B portals from ₹50,000.',
    },
    {
      question: 'Are your websites mobile-optimised and fast loading?',
      answer: 'Yes, 100% mobile-responsive and speed-optimised! Mobile Optimisation — Responsive design, Touch-friendly navigation, Mobile-first indexing ready; Speed Optimisation — Image compression, CDN integration, Browser caching, Google PageSpeed 90+; Performance — Core Web Vitals optimised, Fast 4G/5G loading; Especially critical for Surat\'s mobile-first traders and young entrepreneurs. Mobile optimisation included at no extra cost in all packages.',
    },
    {
      question: 'How long does it take to create a website in Surat?',
      answer: 'Website development timelines for Surat: Basic Website: 1–2 weeks, Corporate Website: 2–3 weeks, Diamond/Textile Trade Site: 3–5 weeks, E-Commerce: 4–8 weeks, B2B Portal: 6–10 weeks, WordPress CMS: 2–3 weeks. We provide weekly progress updates, milestone delivery, and on-site meetings in Surat. Rush delivery available for time-sensitive launches.',
    },
    {
      question: 'Which areas of Surat do you serve?',
      answer: 'We serve all areas of Surat: Ring Road, Varachha, Adajan, Katargam, Athwalines, City Light, Vesu, Pal, Udhna, Sachin GIDC. Nearby Gujarat — Navsari, Bardoli, Ankleshwar, Bharuch, Valsad. We provide on-site consultations, Gujarati-speaking account managers, and dedicated project support. Serving Surat businesses since 2008.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Surat'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1702,
      longitude: 72.8311,
    },
    areaServed: [
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Navsari' },
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Bardoli' },
      { '@type': 'City', name: 'Ankleshwar' },
      { '@type': 'City', name: 'Valsad' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Surat',
    'Professional website designing services in Surat including diamond & textile trade websites, e-commerce, corporate sites, B2B portals, and multilingual websites for Gujarat businesses.',
    'Surat'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Surat',
    'Custom website design for Surat businesses — diamond dealer sites, textile portals, e-commerce, corporate websites. Mobile-responsive, SEO-optimised. Starting ₹12,000.',
    '12000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Surat Website Designing', url: '/surat-website-designing-and-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Surat"
        subtitle="Diamond & Textile Sites | E-Commerce | B2B Portals | Gujarati/English"
        description="Leading website designing company in Surat, Gujarat. Diamond dealer sites, textile portals, e-commerce, corporate websites. 500+ websites delivered. Starting ₹12,000!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Design Services in Surat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete web solutions for Surat&apos;s diamond, textile, and business sectors
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Surat?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Surat and Gujarat</p>
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
                Industries We Serve in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Specialised websites for Surat&apos;s key economic sectors
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
              Serving All Areas of Surat &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Surat. Remote delivery across Gujarat and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Surat</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Ring Road', 'Varachha', 'Adajan', 'Katargam', 'Athwalines', 'City Light', 'Vesu', 'Pal', 'Udhna', 'Sachin GIDC'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby Gujarat Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Navsari', 'Bardoli', 'Ankleshwar', 'Bharuch', 'Valsad', 'Vyara', 'Mandvi', 'Kim', 'Tapi', 'Narmada'].map((city) => (
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
                  'On-site consultation in Surat',
                  'Gujarati & English support',
                  'Remote development teams',
                  'Dedicated project managers',
                  '24/7 WhatsApp support',
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
              'Website Design Surat', 'Diamond Website Surat', 'Textile Website Surat',
              'E-Commerce Website Surat', 'Corporate Website Surat', 'WordPress Surat',
              'B2B Website Surat', 'SEO Website Surat', 'Website Design Varachha',
              'Website Design Adajan', 'Web Developer Gujarat', 'Website Company Surat Gujarat',
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
                Affordable Website Packages for Surat
              </h2>
              <p className="text-xl text-gray-600">Transparent pricing — no hidden costs</p>
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
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>CMS integration</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Advanced SEO</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>1 year free hosting</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Priority support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹75,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>E-Commerce ready</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Custom features</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Dedicated manager</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>12 months support</span></li>
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
                Get a Free Website Quote in Surat
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s build your website in Surat
              </p>
            </div>
            <ContactForm serviceName="Website Designing" cityName="Surat" />
          </div>
        </section>
      </div>
    </>
  );
}

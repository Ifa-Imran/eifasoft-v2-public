import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Varanasi | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Varanasi offering tourism websites, hotel booking portals, temple websites, Banarasi silk e-commerce, and heritage site portals. 500+ websites. Starting ₹15,000!',
    canonical: '/varanasi-website-designing-and-development-company',
    keywords: [
      'website designing company varanasi',
      'web design varanasi',
      'tourism website varanasi',
      'hotel website varanasi',
      'temple website varanasi',
      'heritage website varanasi',
      'varanasi web designers',
      'ecommerce website varanasi',
      'silk website varanasi',
      'banarasi silk online store',
      'website designing banaras',
      'web development varanasi',
      'wordpress website varanasi',
      'responsive website varanasi',
      'seo services varanasi',
      'website company kashi',
      'bhu website design',
      'website designing jaunpur',
      'website designing mirzapur',
      'corporate website varanasi',
      'web design uttar pradesh varanasi',
      'website maintenance varanasi',
    ],
  });
}

export default function VaranasiWebsiteDesigningPage() {
  const services = [
    {
      icon: '🏛️',
      title: 'Tourism & Hotel Websites',
      description: 'Booking portals for Varanasi hotels, guest houses, and travel agencies along the Ganges ghats.',
      price: '₹32,000',
      features: ['Online room booking', 'Tour package showcase', 'Multi-language (Hindi/English)', 'Payment gateway integration'],
    },
    {
      icon: '🛕',
      title: 'Temple & Religious Websites',
      description: 'Websites for Kashi Vishwanath, Sankat Mochan, dharamshalas, and religious trusts with donation portals.',
      price: '₹22,000',
      features: ['Darshan timings & booking', 'Donation portal', 'Event calendar', 'Photo & video gallery'],
    },
    {
      icon: '🧵',
      title: 'Silk & Crafts E-Commerce',
      description: 'Online stores for Banarasi silk sarees, brocades, handloom fabrics, and traditional handicrafts.',
      price: '₹45,000',
      features: ['Product catalog with zoom', 'Payment gateway (Razorpay/PayU)', 'Shipping integration', 'Multi-currency & B2B portals'],
    },
    {
      icon: '🎓',
      title: 'University & Education Sites',
      description: 'Websites for BHU, Sanskrit University, colleges, schools, and coaching institutes in Varanasi.',
      price: '₹28,000',
      features: ['Admission portals', 'Student login & dashboards', 'Course catalog', 'Examination results'],
    },
    {
      icon: '🎨',
      title: 'Corporate & Responsive Sites',
      description: 'Modern, fast-loading responsive websites for Varanasi businesses, NGOs, and startups.',
      price: '₹18,000',
      features: ['Modern UI/UX design', 'SEO optimized', 'Core Web Vitals ready', 'WhatsApp & lead forms'],
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites with custom themes and full training for Varanasi clients.',
      price: '₹15,000',
      features: ['Custom WordPress themes', 'Plugin integration', 'Staff training included', 'Easy content management'],
    },
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Tourism Projects', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const industries = [
    {
      title: '🏛️ Tourism & Hospitality',
      description: 'Websites for Varanasi\'s thriving tourism sector — hotels, guest houses near ghats, boat operators, and travel agencies serving pilgrims from across India.',
      features: ['Hotel booking systems', 'Ghat tour packages', 'Multi-language support', 'TripAdvisor/Google Reviews integration'],
    },
    {
      title: '🛕 Religious & Spiritual',
      description: 'Temple management websites for Kashi Vishwanath, Sankat Mochan, ashrams, dharamshalas, and religious trusts managing donations and events.',
      features: ['Online donation portals', 'Darshan booking', 'Puja & event schedules', 'Trust/charity accounting'],
    },
    {
      title: '🧵 Silk & Handicrafts',
      description: 'Varanasi is the home of Banarasi silk — world-renowned for its brocades. We build B2B export portals, retail stores, and weaver marketplaces.',
      features: ['Silk saree product catalog', 'B2B wholesale portals', 'Export inquiry management', 'Weaver brand identity sites'],
    },
    {
      title: '🎓 Education & Universities',
      description: 'Websites for BHU, Sampurnanand Sanskrit University, private colleges, schools, and coaching institutes serving Varanasi\'s large student population.',
      features: ['Admission management portals', 'Online fee payment', 'E-learning integration', 'Digital library catalogues'],
    },
    {
      title: '🛒 Retail & E-Commerce',
      description: 'Online stores for Varanasi traders, silk exporters, brass artisans, and local businesses expanding their digital footprint nationally and globally.',
      features: ['E-commerce platforms', 'POS & billing systems', 'GST-compliant invoicing', 'WhatsApp catalogue integration'],
    },
    {
      title: '🏛️ Government & NGOs',
      description: 'E-governance portals and citizen service websites for Varanasi Municipal Corporation, UP government departments, heritage conservation bodies, and NGOs.',
      features: ['Citizen service portals', 'Online grievance systems', 'Document management', 'Heritage conservation sites'],
    },
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Varanasi?',
      answer: 'EifaSoft is a leading website designing company in Varanasi with 15+ years of experience and 500+ successfully delivered projects. We specialize in Varanasi\'s unique sectors — tourism, hotels, temples, Banarasi silk e-commerce, and educational institutions. Our team understands the local market, the pilgrim and tourist audience, and the need for Hindi-English bilingual websites. We offer competitive pricing starting at ₹15,000, local on-site consultations, and dedicated post-launch support for Varanasi clients.',
    },
    {
      question: 'Do you create hotel and tourism websites for Varanasi businesses?',
      answer: 'Yes! We specialize in tourism websites for Varanasi\'s hospitality sector. Hotel Portals: Online booking engine, room showcase with photos, rate management, review integration. Travel Websites: Ghat boat tour packages, pilgrimage packages, transportation booking, guide service pages. Features: Multi-language (Hindi/English), Razorpay/PayU payment gateway, mobile responsive, SEO optimized for tourism keywords. Perfect for hotels near Assi Ghat, Dashashwamedh, Godowlia. Starting from ₹32,000.',
    },
    {
      question: 'What is the cost of website designing in Varanasi?',
      answer: 'Website design pricing in Varanasi: Basic Corporate Website — ₹15,000 to ₹25,000; Temple/Religious Website — ₹20,000 to ₹45,000; Hotel/Tourism Booking Portal — ₹30,000 to ₹1,10,000; Banarasi Silk E-Commerce Store — ₹45,000 to ₹1,30,000; WordPress CMS Website — ₹15,000 to ₹35,000. All packages include responsive design, basic SEO, Hindi/English support, and 3 months of free maintenance. Special discounted pricing for temples and religious trusts.',
    },
    {
      question: 'Can you create e-commerce websites for Banarasi silk and crafts businesses?',
      answer: 'Absolutely! We specialize in e-commerce for Varanasi\'s world-famous Banarasi silk and handicraft industry. Our stores include: Product catalog with zoom and fabric detail views; B2B wholesale portal for domestic and international buyers; Razorpay/PayU/CCAvenue payment gateways with multi-currency; Shipping integration (Shiprocket, Delhivery); GST-compliant invoicing; WhatsApp catalogue and inquiry management. We help Varanasi weavers and silk traders sell online nationally and globally. Starting from ₹45,000.',
    },
    {
      question: 'Do you create temple and religious websites in Varanasi?',
      answer: 'Yes! We have extensive experience building websites for Varanasi\'s religious institutions. Our temple websites include: Darshan timing schedules and online booking; Online donation portal with receipt generation; Puja booking and event calendars; Photo and video gallery for festivals; Trust management and accounts module; Multi-language (Hindi/Sanskrit/English) support. We have built websites for several temples in Godowlia, BHU area, and along the ghats. Starting from ₹22,000.',
    },
    {
      question: 'Can you create Hindi and multilingual websites for Varanasi businesses?',
      answer: 'Yes! We build fully bilingual Hindi-English websites and can add additional regional languages. Our multilingual solutions include: Hindi/English language switcher; SEO-optimized Hindi content for local search rankings; Unicode-compliant Hindi fonts (Devanagari); Translated pages for pilgrims and tourists from across India; Japanese/Chinese language pages for international Buddhist pilgrims visiting Sarnath. Multilingual setup from ₹8,000 additional per language.',
    },
    {
      question: 'Are your websites mobile-optimized and fast loading?',
      answer: 'Yes — 100% mobile responsive and speed optimized! Mobile Optimization: Responsive design, touch-friendly navigation, mobile-first indexing, fast 4G/5G loading. Speed Optimization: Image compression, CDN integration, browser caching, Google PageSpeed 90+. Performance: Core Web Vitals optimized, schema markup for rich results. This is especially important for Varanasi where tourists and pilgrims browse on mobile while visiting ghats and temples. Mobile optimization is included in all packages at no extra cost.',
    },
    {
      question: 'How long does it take to build a website in Varanasi?',
      answer: 'Development timeline: Basic Corporate/Temple Website — 1 to 2 weeks; WordPress CMS Website — 2 to 3 weeks; Hotel Booking Portal — 3 to 5 weeks; Banarasi Silk E-Commerce Store — 4 to 8 weeks; University/Educational Portal — 4 to 8 weeks. We provide weekly progress updates, milestone-based delivery, and on-site meetings at your Varanasi office or shop. Rush delivery is available for urgent requirements. Free timeline estimation during initial consultation.',
    },
    {
      question: 'Do you provide website hosting and maintenance in Varanasi?',
      answer: 'Yes! Complete hosting and maintenance: Web Hosting — Shared (₹2,000/year), VPS (₹6,000/year), Cloud (₹12,000/year); Domain Services — .com/.in registration, transfer, business email hosting; Maintenance AMC — Monthly from ₹3,000/month, quarterly updates, security patches, backups, 99.9% uptime; Support — Email/phone/WhatsApp support with fast response for Varanasi clients. India-based servers for fast loading across UP and Eastern India.',
    },
    {
      question: 'Which areas of Varanasi do you serve?',
      answer: 'We serve all areas of Varanasi including Godowlia, Assi Ghat, Dashashwamedh, BHU Campus area, Lanka, Rathyatra, Sigra, Nadesar, Cantt, and Mahmoorganj. Beyond Varanasi, we serve nearby cities: Mirzapur, Chandauli, Ghazipur, Jaunpur, Prayagraj, Azamgarh, Bhadohi, and Robertsganj. We provide on-site consultations anywhere in Varanasi and remote services across UP and all of India. Contact us for a free website consultation today.',
    },
  ];

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Varanasi'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.3176,
      longitude: 82.9739,
    },
    areaServed: [
      { '@type': 'City', name: 'Varanasi' },
      { '@type': 'City', name: 'Mirzapur' },
      { '@type': 'City', name: 'Jaunpur' },
      { '@type': 'City', name: 'Chandauli' },
      { '@type': 'City', name: 'Ghazipur' },
      { '@type': 'City', name: 'Prayagraj' },
    ],
  };

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Varanasi',
    'Professional website design for Varanasi tourism, hotels, temples, Banarasi silk e-commerce, and educational institutions. Mobile-responsive, multi-language websites.',
    'Varanasi'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Varanasi',
    'Custom website design for Varanasi tourism, hotels, temples, Banarasi silk. Starting from ₹15,000.',
    '15000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Varanasi Website Designing', url: '/varanasi-website-designing-and-development-company' },
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="Website Designing Company in Varanasi"
        subtitle="Tourism | Hotels | Temples | Banarasi Silk E-Commerce | Heritage Sites"
        description="Leading website designing company in Varanasi. Hotel booking portals, temple donation websites, Banarasi silk online stores, university portals. 500+ websites. Ancient city expertise!"
        gradient="purple"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Design Services in Varanasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized web solutions for Varanasi&apos;s tourism, religious, and heritage sectors
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Varanasi?</h2>
              <p className="text-xl text-purple-100">Trusted by 500+ businesses across Varanasi &amp; Eastern UP</p>
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
                Industries We Serve in Varanasi
              </h2>
              <p className="text-xl text-gray-600">
                Sector-specific websites built for Varanasi&apos;s unique economy and heritage
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
              Serving Varanasi &amp; Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              On-site consultations across Varanasi. Remote delivery across UP and India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>📍</span> Areas in Varanasi</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Godowlia', 'Assi Ghat', 'Dashashwamedh', 'BHU Campus', 'Lanka', 'Rathyatra', 'Sigra', 'Nadesar', 'Cantt', 'Mahmoorganj'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🗺️</span> Nearby UP Cities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Mirzapur', 'Chandauli', 'Ghazipur', 'Jaunpur', 'Prayagraj', 'Azamgarh', 'Bhadohi', 'Robertsganj', 'Mau', 'Ballia'].map((city) => (
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
                  'On-site consultation in Varanasi',
                  'Remote project management',
                  'Hindi & English communication',
                  'WhatsApp project updates',
                  'Free design mockups',
                  'Milestone-based delivery',
                  '3 months free maintenance',
                  'Staff training included',
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
              'Website Designing Varanasi', 'Temple Website Varanasi', 'Tourism Website Varanasi',
              'Hotel Website Varanasi', 'Silk E-Commerce Varanasi', 'Web Design Banaras',
              'Website Company Varanasi', 'Education Website BHU', 'SEO Services Varanasi',
              'Website Designing Jaunpur', 'Web Design Mirzapur', 'Website Company Kashi',
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
                Transparent Pricing for Varanasi
              </h2>
              <p className="text-xl text-gray-600">Affordable website packages for every business size</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>5–7 pages</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Mobile responsive</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Basic SEO setup</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Contact form & WhatsApp</span></li>
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
                <h3 className="text-2xl font-bold text-white mb-4">Corporate Package</h3>
                <div className="text-4xl font-bold text-white mb-6">₹35,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>10–15 pages</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Premium UI/UX design</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>Hindi/English bilingual</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>CRM & lead management</span></li>
                  <li className="flex items-start text-white"><span className="text-yellow-300 mr-2">✓</span><span>6 months support</span></li>
                </ul>
                <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹55,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Unlimited products</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Payment gateway</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>Shipping integration</span></li>
                  <li className="flex items-start text-gray-600"><span className="text-green-500 mr-2">✓</span><span>B2B & retail modes</span></li>
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
                Get Free Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Let&apos;s discuss your website project in Varanasi
              </p>
            </div>
            <ContactForm serviceName="Website Designing" cityName="Varanasi" />
          </div>
        </section>
      </div>
    </>
  );
}

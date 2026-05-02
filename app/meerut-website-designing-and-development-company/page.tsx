import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Meerut | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Meerut offering responsive web design, e-commerce websites, sports goods portals, WordPress development. 500+ websites delivered. Starting ₹15,000!',
    canonical: '/meerut-website-designing-and-development-company',
    keywords: [
      'website designing company meerut',
      'web design meerut',
      'website development meerut',
      'meerut web designers',
      'ecommerce website meerut',
      'wordpress development meerut',
      'sports goods website meerut',
      'meerut business website',
      'responsive web design meerut',
      'website company meerut',
      'sports equipment export meerut',
      'b2b portal meerut',
      'manufacturing website meerut',
      'best web designer meerut',
      'website company shastri nagar meerut',
      'cricket equipment website meerut',
      'corporate website meerut',
      'affordable website meerut',
      'hospital website meerut',
      'real estate website meerut',
      'seo services meerut',
      'education website meerut'
    ]
  });
}

export default function MeerutWebsiteDesigningPage() {
  const services = [
    {
      icon: '⚽',
      title: 'Sports Goods E-Commerce',
      description: 'Specialized websites for Meerut\'s sports equipment industry',
      price: '₹55,000',
      features: ['Product catalog', 'Bulk orders', 'Export features', 'Multi-currency']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores with payment gateway',
      price: '₹50,000',
      features: ['Unlimited products', 'Payment integration', 'Inventory', 'Order tracking']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly business websites',
      price: '₹15,000',
      features: ['Modern design', 'SEO optimized', 'Fast loading', 'All devices']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites',
      price: '₹23,000',
      features: ['Custom themes', 'Plugins', 'Training', 'Content management']
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals',
      price: '₹28,000',
      features: ['Company profile', 'Services', 'Portfolio', 'Contact forms']
    },
    {
      icon: '🏭',
      title: 'Manufacturing Portals',
      description: 'B2B websites for manufacturers',
      price: '₹45,000',
      features: ['Product showcase', 'Inquiry forms', 'Dealer login', 'Catalogs']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Sports Sites', value: '70+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '⚽ Sports Goods Industry',
      description: 'E-commerce and export-focused websites for Meerut\'s world-famous sports equipment manufacturers.',
      features: ['Product catalogs', 'B2B portals', 'Export documentation', 'Quality certifications']
    },
    {
      title: '🏭 Manufacturing & Trading',
      description: 'Business websites for scissors, musical instruments, and general manufacturing units.',
      features: ['Company profiles', 'Product specifications', 'Wholesale inquiry', 'Dealer portals']
    },
    {
      title: '🎓 Education & Coaching',
      description: 'Digital presence for universities, schools, coaching institutes, and educational platforms in Meerut.',
      features: ['Institute websites', 'Online admissions', 'Student portals', 'Result systems']
    },
    {
      title: '🏥 Healthcare & Medical',
      description: 'Medical websites for hospitals, clinics, nursing homes, and diagnostic centres across Meerut.',
      features: ['Doctor profiles', 'Appointment booking', 'Health blog', 'Patient portal']
    },
    {
      title: '🏘️ Real Estate & Construction',
      description: 'Property portals for builders, developers, and real estate agents operating across Meerut and NCR.',
      features: ['Property listings', 'Project showcases', 'Lead capture', 'EMI calculators']
    },
    {
      title: '🛍️ Retail & E-Commerce',
      description: 'Online stores and business websites for Meerut retail shops, trading companies, and distributors.',
      features: ['Product catalogs', 'Payment gateway', 'Inventory system', 'Order management']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Meerut?',
      answer: 'EifaSoft is a leading website designing company serving Meerut with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Meerut\'s sports goods industry, manufacturing sector, and local businesses. Our expertise includes e-commerce platforms for sports equipment exporters, B2B portals for manufacturers, and professional corporate websites. We understand Meerut\'s industrial landscape, provide local support, competitive pricing starting at ₹15,000, and websites optimized for both domestic and international markets.'
    },
    {
      question: 'Do you create e-commerce websites for Meerut sports goods manufacturers?',
      answer: 'Yes! We specialize in sports goods e-commerce: Product Categories - Cricket equipment, football gear, hockey sticks, badminton rackets, sports apparel, fitness equipment; Export Features - Multi-currency support (USD, EUR, GBP), International shipping integration, Export documentation, Quality certifications display (ISO, BIS); B2B Functionality - Bulk order inquiry forms, Wholesale pricing tiers, Dealer registration, MOQ (Minimum Order Quantity) management, Custom product requests; Product Features - High-quality image galleries, Size charts, Material specifications, Usage videos, Product comparisons. Perfect for Meerut sports manufacturers wanting to expand globally. Mobile-responsive design ensures international buyers can easily browse catalogs. Starting from ₹55,000 with payment gateway and shipping integration.'
    },
    {
      question: 'What is the cost of website designing in Meerut?',
      answer: 'Website design pricing in Meerut: Basic Business Website (5-7 pages): ₹15,000 - ₹28,000, Corporate Website (10-15 pages): ₹28,000 - ₹60,000, WordPress Website: ₹23,000 - ₹48,000, Manufacturing B2B Portal: ₹45,000 - ₹1,20,000, Sports Goods E-Commerce: ₹55,000 - ₹2,00,000 (with export features), Retail E-Commerce: ₹50,000 - ₹1,50,000, Educational Website: ₹30,000 - ₹80,000. All packages include responsive design, basic SEO, contact forms, and 3-month free support. Custom sports equipment configurators from ₹30,000 additional. Payment plans available for Meerut businesses.'
    },
    {
      question: 'Can you integrate international payment gateways for export businesses?',
      answer: 'Yes! Complete international e-commerce setup: Payment Gateways - Domestic: Razorpay, PayU, CCAvenue, Paytm (UPI, cards, wallets), International: PayPal (200+ countries), Stripe (135+ currencies), 2Checkout, Authorize.net; Multi-Currency - Automatic currency conversion, Display prices in USD/EUR/GBP/INR, Real-time exchange rates, Currency selector; Export Features - International shipping calculators, Custom/duty information, Export invoice generation, Shipping partner integration (FedEx, DHL, UPS), Track & trace functionality; Security - PCI DSS compliance, SSL encryption, Fraud detection, Secure checkout. Perfect for Meerut sports goods exporters selling globally. Setup and testing included in e-commerce packages.'
    },
    {
      question: 'Do you provide SEO services to rank on Google for sports equipment searches?',
      answer: 'Yes! SEO crucial for Meerut sports manufacturers: Local SEO - Rank for "sports goods manufacturers Meerut", "cricket equipment Meerut", "sports exporters India"; Product Keywords - Target searches like "cricket bat manufacturer", "football manufacturer India", "badminton rackets wholesale"; Export SEO - International keywords "sports goods supplier India", "cricket equipment exporter", "wholesale sports goods"; Google My Business - Factory location, business verification, reviews, product photos; Content Marketing - Blog posts (sports trends, equipment guides), Product descriptions (keyword-rich), Usage tutorials, Industry news; Technical SEO - Fast loading (critical for e-commerce), Mobile optimization, Schema markup for products, Structured data for reviews; Link Building - Sports industry directories, B2B marketplaces, trade portals, export directories. Basic SEO included. Advanced campaigns from ₹10,000/month with international targeting.'
    },
    {
      question: 'Can you create product configurators for custom sports equipment?',
      answer: 'Yes! Interactive product customization tools: Cricket Bat Configurator - Wood type selection (English willow, Kashmir willow), Weight preference, Handle type, Grip selection, Custom branding/logo, Real-time price calculation; General Configurator - Size/dimension selection, Color/design options, Material choices, Quantity discounts, Bulk order calculator, Custom specifications input; Features - Visual preview of selections, Add to cart with customizations, Quote generation for bulk orders, Save configurations for later, Share custom design; Mobile Responsive - Works on all devices, Touch-friendly interface, Fast loading. Perfect for sports manufacturers offering customization. Configurator development from ₹30,000 additional depending on complexity. Increases customer engagement and order values significantly.'
    },
    {
      question: 'Are your websites optimized for both desktop and mobile devices?',
      answer: 'Yes, 100% mobile responsive! Critical for Meerut exporters as international buyers often browse on mobile: Mobile Optimization - Responsive design for all screen sizes, Touch-friendly navigation, Mobile-optimized product galleries, Swipe-enabled image carousels, Fast loading on all networks (3G/4G/5G), Mobile checkout optimization; Performance - Image compression and lazy loading, CDN integration (fast loading globally), Browser caching, Minified code, PageSpeed score 90+; Cross-Browser - Works on Chrome, Safari, Firefox, Edge, Mobile browsers (iOS/Android); International Focus - Fast loading in USA, Europe, Middle East markets, Multi-language ready, Currency display optimization. We test on real devices before delivery. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a sports goods e-commerce website?',
      answer: 'Timeline for Meerut sports websites: Basic Business Website (5-7 pages): 1-2 weeks, Corporate Website (10-15 pages): 2-4 weeks, WordPress Website: 2-3 weeks, Manufacturing Portal: 4-6 weeks, Sports E-Commerce (100-500 products): 6-10 weeks, Export Portal with Multi-currency: 8-12 weeks, Custom Configurator Website: 3-4 months. Timeline factors: Product photography completion, Product specifications readiness, Design approval speed, Integration complexity (payment/shipping), Customization requirements. We provide: Weekly progress updates, Milestone-based delivery, Testing with real transactions, Training for your team, Post-launch support. Rush delivery available (25% additional charges). Free timeline estimation during consultation.'
    },
    {
      question: 'Do you provide product photography for sports equipment?',
      answer: 'Yes! Professional sports product photography: Studio Photography - High-resolution product images, Multiple angles (all sides), White background for e-commerce, Detail close-ups (stitching, materials, logos), Action shots with models; On-Location - Factory tour photography, Manufacturing process shots, Quality control documentation, Team/facility photos; Video Production - Product demonstration videos, 360° rotation videos, Usage/how-to guides, Manufacturing capability videos; Specialized - Sports equipment in action, Lifestyle shots (players using), Size comparison shots, Packaging photography; Editing - Background removal, Color correction, Watermark/logo addition, Batch processing for multiple products. Photography packages: Basic (₹300/product), Premium (₹800/product with lifestyle shots), Bulk discounts for 100+ products. Optional: On-site photography at your Meerut factory.'
    },
    {
      question: 'Which areas of Meerut do you serve?',
      answer: 'We serve all areas of Meerut including: Shastri Nagar (sports goods manufacturing hub), Begum Bridge (commercial area), Sadar Bazaar (retail center), Ganga Nagar (residential/commercial), Pallavpuram (industrial area), Meerut Cantonment (commercial), Kankrakhera (manufacturing units), Brahmpuri (sports goods factories), Nearby areas - Sardhana, Mawana, Baghpat, Muzaffarnagar, Hapur. We provide: On-site consultations in Meerut, Factory visits for product photography, Local technical support, Dedicated account manager for each client. Serving Meerut\'s sports goods industry since 2008 with deep understanding of: Manufacturing processes, Export requirements, International quality standards, B2B marketplace dynamics, Global sports equipment trends. Available for in-person meetings at your factory or virtual consultations.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Meerut',
    'Professional website design and development services in Meerut including sports goods e-commerce, manufacturing B2B portals, WordPress development, and responsive web design.',
    'Meerut'
  );

  const localBusinessSchema = {
    ...generateLocalBusinessSchema('Meerut'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.9845,
      longitude: 77.7064,
    },
    areaServed: [
      { '@type': 'City', name: 'Meerut' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Baghpat' },
      { '@type': 'City', name: 'Muzaffarnagar' },
      { '@type': 'City', name: 'Hapur' },
      { '@type': 'City', name: 'Noida' },
    ],
  };

  const productSchema = generateProductSchema(
    'Website Design Services Meerut',
    'Custom website design for Meerut sports goods manufacturers, exporters, and businesses. Mobile-responsive, SEO-optimized websites with multi-currency and export features starting from ₹15,000.',
    '28000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Meerut Website Designing', url: '/meerut-website-designing-and-development-company' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Meerut"
        subtitle="Sports Goods E-Commerce | Export Portals | Manufacturing Websites"
        description="Leading website design company in Meerut specializing in sports equipment e-commerce, export-focused portals, and B2B manufacturing websites. 500+ websites delivered. Serving Meerut exporters. Starting ₹15,000!"
        gradient="purple"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Meerut
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for sports industry and exporters
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft for Meerut?</h2>
            <p className="text-xl text-purple-100">Trusted by sports goods exporters and manufacturers</p>
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

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Website Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything your export business needs
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🌍 Export Ready</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Multi-currency</li>
              <li>✓ Global shipping</li>
              <li>✓ Multi-language</li>
              <li>✓ International payments</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔍 SEO Optimized</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Google ranking</li>
              <li>✓ International SEO</li>
              <li>✓ Fast loading</li>
              <li>✓ Product schema</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">📱 Mobile Perfect</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Responsive design</li>
              <li>✓ Touch-friendly</li>
              <li>✓ Fast mobile load</li>
              <li>✓ All devices</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔒 Secure & Fast</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ SSL security</li>
              <li>✓ Global CDN</li>
              <li>✓ Daily backups</li>
              <li>✓ 99.9% uptime</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve in Meerut
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for key Meerut sectors
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
            Serving Businesses Across Meerut
          </h2>
          <p className="text-xl text-gray-600">
            Local expertise with global reach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Meerut Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Shastri Nagar</li>
              <li>• Begum Bridge</li>
              <li>• Sadar Bazaar</li>
              <li>• Ganga Nagar</li>
              <li>• Pallavpuram</li>
              <li>• Meerut Cantt</li>
              <li>• Kankrakhera</li>
              <li>• Brahmpuri</li>
              <li>• Shobhit Nagar</li>
              <li>• Lisari Gate</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sardhana</li>
              <li>• Mawana</li>
              <li>• Baghpat</li>
              <li>• Muzaffarnagar</li>
              <li>• Hapur</li>
              <li>• Ghaziabad</li>
              <li>• Bulandshahr</li>
              <li>• Modinagar</li>
              <li>• Moradabad</li>
              <li>• Amroha</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• On-site meetings in Meerut</li>
              <li>• Factory visits for product shoots</li>
              <li>• Remote project management</li>
              <li>• WhatsApp project updates</li>
              <li>• Dedicated account manager</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            'Web Design Meerut', 'Sports Goods Website Meerut', 'Export Portal Meerut',
            'Manufacturing Website Meerut', 'E-Commerce Meerut', 'B2B Portal Meerut',
            'SEO Meerut', 'Website Shastri Nagar', 'Cricket Equipment Website',
            'Corporate Website Meerut', 'WordPress Meerut', 'Web Design Ghaziabad'
          ].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Meerut
            </h2>
            <p className="text-xl text-gray-600">Choose the package for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Website</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
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
                  <span>Contact form</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic SEO</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3 months support</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                BEST FOR EXPORTS
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Export E-Commerce</h3>
              <div className="text-4xl font-bold text-white mb-6">₹80,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Multi-currency</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>International payments</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Global shipping</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>12 months support</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>International SEO</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium B2B</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹1,25,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in Export</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dealer portal</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Product configurator</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bulk pricing engine</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Premium support</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Product photography</span>
                </li>
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
              Let&apos;s discuss your website project in Meerut
            </p>
          </div>
          <ContactForm serviceName="Website Designing" cityName="Meerut" />
        </div>
      </section>
    </div>
    </>
  );
}

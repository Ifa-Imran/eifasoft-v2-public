import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing Company in Bareilly | Web Development Services | EifaSoft',
    description: 'Professional website designing company in Bareilly offering responsive web design, e-commerce websites, furniture industry portals, WordPress development. 500+ websites delivered. Starting ₹14,000!',
    canonical: '/bareilly-website-designing-and-development-company',
    keywords: [
      'website designing company bareilly',
      'web design bareilly',
      'website development bareilly',
      'bareilly web designers',
      'ecommerce website bareilly',
      'wordpress development bareilly',
      'furniture website bareilly',
      'bareilly business website',
      'responsive web design bareilly',
      'website company bareilly',
      'furniture ecommerce bareilly',
      'b2b portal bareilly',
      'manufacturing website bareilly',
      'best web designer bareilly',
      'affordable website bareilly',
      'website design rohilkhand',
      'web design pilibhit',
      'website company budaun',
      'website designing company bareilly uttar pradesh',
      'seo website bareilly',
      'corporate website bareilly',
      'online store bareilly'
    ]
  });
}

export default function BareillWebsiteDesigningPage() {
  const services = [
    {
      icon: '🪑',
      title: 'Furniture Industry Websites',
      description: 'Specialized e-commerce for Bareilly\'s furniture manufacturers',
      price: '₹50,000',
      features: ['Product showcase', 'Bulk orders', 'Dealer portal', 'Export features']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Complete online stores with payment integration',
      price: '₹52,000',
      features: ['Unlimited products', 'Payment gateway', 'Inventory', 'Order tracking']
    },
    {
      icon: '🎨',
      title: 'Responsive Web Design',
      description: 'Mobile-friendly websites for all businesses',
      price: '₹14,000',
      features: ['Modern design', 'SEO ready', 'Fast loading', 'All devices']
    },
    {
      icon: '📝',
      title: 'WordPress Development',
      description: 'Easy-to-manage CMS websites',
      price: '₹20,000',
      features: ['Custom themes', 'Plugins', 'Training', 'Content management']
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional business portals',
      price: '₹26,000',
      features: ['Company profile', 'Services', 'Portfolio', 'Contact forms']
    },
    {
      icon: '🏪',
      title: 'Retail Websites',
      description: 'Digital presence for shops and showrooms',
      price: '₹18,000',
      features: ['Product catalog', 'Store locator', 'Testimonials', 'Gallery']
    }
  ];

  const whyChooseUs = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Websites Delivered', value: '500+' },
    { label: 'Furniture Sites', value: '60+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const industries = [
    {
      title: '🪑 Furniture Manufacturing',
      description: 'E-commerce and B2B portals for Bareilly\'s renowned furniture industry with product catalogs and export features.',
      features: ['3D product views', 'Customization options', 'Bulk inquiry forms', 'Wholesale pricing']
    },
    {
      title: '🏭 Manufacturing & Trading',
      description: 'Business websites for manufacturing units and trading companies in Bareilly\'s industrial areas.',
      features: ['Product catalogs', 'B2B portals', 'Inquiry systems', 'Company profiles']
    },
    {
      title: '🏪 Retail & Services',
      description: 'Digital solutions for retail shops, healthcare providers, and service businesses across Bareilly.',
      features: ['Online catalogs', 'Appointment booking', 'Service listings', 'Review systems']
    }
  ];

  const faqs = [
    {
      question: 'Why choose EifaSoft for website designing in Bareilly?',
      answer: 'EifaSoft is a leading website designing company serving Bareilly with 15+ years of experience and 500+ successful projects. We specialize in creating websites for Bareilly\'s furniture industry, manufacturing sector, and retail businesses. Our expertise includes e-commerce platforms for furniture manufacturers, B2B portals for trading companies, and professional corporate websites. We understand the Bareilly market, provide local support, competitive pricing starting at ₹14,000, and websites that help your business reach customers across India and globally.'
    },
    {
      question: 'Do you create e-commerce websites for Bareilly furniture manufacturers?',
      answer: 'Yes! We specialize in furniture industry e-commerce: Product Showcase - High-quality images, 360° views, multiple angles, zoom functionality; Customization Tools - Wood type selection, color options, size customization, design variations; B2B Features - Bulk order inquiry, dealer registration, wholesale pricing, MOQ management; Export Support - Multi-currency (USD, EUR), international shipping, export documentation; Product Categories - Living room, bedroom, office, custom furniture; Features - Product comparison, wishlist, AR preview (optional), dimension specifications. Perfect for Bareilly furniture manufacturers wanting to expand sales beyond local markets. Mobile-responsive design ensures buyers can browse catalogs on any device. Starting from ₹50,000.'
    },
    {
      question: 'What is the cost of website designing in Bareilly?',
      answer: 'Website design pricing in Bareilly: Basic Business Website (5-7 pages): ₹14,000 - ₹26,000, Retail Website (Product showcase): ₹18,000 - ₹40,000, WordPress Website: ₹20,000 - ₹45,000, Corporate Website (10-15 pages): ₹26,000 - ₹60,000, Furniture E-Commerce: ₹50,000 - ₹1,80,000, Manufacturing B2B Portal: ₹45,000 - ₹1,20,000. All packages include responsive design, basic SEO, contact forms, and 3-month free support. Custom furniture websites with AR/3D preview start at ₹80,000. Payment plans available for Bareilly businesses.'
    },
    {
      question: 'Can you integrate 3D product visualization for furniture websites?',
      answer: 'Yes! We offer advanced product visualization: 3D Product Models - Interactive 360° rotation, multiple viewing angles, zoom in/out, material texture display; Augmented Reality (AR) - View furniture in your room using phone camera (iOS/Android), realistic size preview, try before you buy experience; Customization Preview - Real-time color changes, wood finish options, fabric selection, dimension adjustments; High-Quality Images - Professional photography setup, multiple angle shots, detail close-ups, lifestyle images; Video Integration - Product assembly videos, usage demonstrations, factory tour videos. These features significantly increase customer engagement and reduce product returns. 3D visualization from ₹30,000 additional, AR features from ₹50,000.'
    },
    {
      question: 'Do you provide SEO services to rank on Google for furniture searches?',
      answer: 'Yes! SEO is crucial for Bareilly furniture businesses: Local SEO - Rank for "furniture manufacturers Bareilly", "wooden furniture Bareilly", "furniture shops near me"; Product Keywords - Target searches like "sofa set Bareilly", "bedroom furniture", "office furniture manufacturers"; Industry-Specific - "wholesale furniture dealers", "furniture export India", "custom furniture makers"; Google My Business - Store location, business hours, reviews, photos; Content Marketing - Blog posts, furniture care tips, design trends, wood types guide; Technical SEO - Fast loading, mobile optimization, schema markup for products, structured data; Link Building - Furniture directories, industry portals, local citations. Basic SEO included with all websites. Advanced campaigns from ₹8,000/month with guaranteed ranking improvements for high-value keywords.'
    },
    {
      question: 'Can you integrate payment gateways and shipping for online furniture sales?',
      answer: 'Yes! Complete e-commerce integration: Payment Gateways - Razorpay, PayU, Paytm, PhonePe (domestic), Credit/Debit cards, UPI, Net banking, EMI options (for high-value furniture), PayPal/Stripe (for international sales); Shipping Integration - Local delivery management, Courier partner integration (Delhivery, BlueDart), Shipping cost calculator, Pin code serviceability check, White-glove delivery option, Installation service booking; Order Management - Order tracking, Invoice generation, Inventory sync, Return/exchange management, Customer notifications (SMS/Email). Secure payment processing with PCI-DSS compliance. Perfect for furniture businesses wanting to sell online with professional checkout experience. Payment gateway setup included in e-commerce packages.'
    },
    {
      question: 'Are all your websites mobile-responsive and fast loading?',
      answer: 'Yes, 100% mobile responsive and optimized! Critical for furniture websites as 70%+ customers browse on phones: Mobile Features - Responsive design for all screen sizes, Touch-friendly navigation, Swipe gallery for product images, Mobile-optimized checkout, Click-to-call buttons, WhatsApp inquiry integration; Performance Optimization - Image compression (fast load even with furniture photos), Lazy loading (images load as you scroll), CDN integration (fast loading across India), Browser caching, Minified code; Speed Targets - Load time under 3 seconds, Google PageSpeed score 90+, Core Web Vitals optimized. We test on real devices before delivery. Mobile optimization included at no extra cost.'
    },
    {
      question: 'How long does it take to create a furniture e-commerce website?',
      answer: 'Timeline for Bareilly furniture websites: Basic Business Website (5-7 pages): 1-2 weeks, Retail Website (Product catalog): 2-3 weeks, WordPress Website: 2-3 weeks, Corporate Website (10-15 pages): 2-4 weeks, Furniture E-Commerce (100-500 products): 6-10 weeks, B2B Portal with Dealer Login: 8-12 weeks, Custom with 3D/AR Features: 3-4 months. Timeline depends on: Product photography completion, Content and specifications readiness, Design approval speed, Integration complexity. We provide: Regular progress updates (weekly), Milestone-based delivery, Testing before launch, Training for your team. Rush delivery available (additional charges apply). Free timeline estimation with project scope during consultation.'
    },
    {
      question: 'Do you provide product photography services for furniture?',
      answer: 'Yes! Professional product photography for furniture: Studio Photography - High-resolution images, Multiple angles (front, side, top, detail shots), White background/lifestyle settings, Color-accurate shots; On-Site Photography - Visit your showroom/factory in Bareilly, Photograph furniture in natural setting, Lifestyle shots with models, Factory tour videos; 3D Rendering - Computer-generated furniture images, Customization previews, Virtual staging; Image Editing - Background removal, Color correction, Shadow/reflection effects, Dimension overlays; Video Production - Product demonstration videos, 360° spin videos, Usage/assembly guides. Photography packages from ₹500/product (basic) to ₹2,000/product (premium with lifestyle shots). Bulk discounts for 50+ products.'
    },
    {
      question: 'Which areas of Bareilly do you serve?',
      answer: 'We serve all areas of Bareilly including: Civil Lines (commercial hub, offices), Subhash Nagar (residential, retail), Izatnagar (industrial area, manufacturing), CB Ganj (furniture market, showrooms), Nawabganj (commercial center), Pilibhit Bypass (industrial units), Parsakhera (furniture manufacturing), Railway Road (commercial area), Nearby areas - Budaun, Pilibhit, Shahjahanpur, Rampur. We provide: On-site consultations in Bareilly, Factory/showroom visits for product photography, Local technical support, Dedicated account manager. Serving Bareilly\'s furniture industry and businesses since 2008 with deep understanding of local manufacturing processes, export requirements, and market dynamics. Available for in-person meetings or virtual consultations.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Website Designing Company Bareilly',
    'Professional website design and development services in Bareilly including furniture industry e-commerce, manufacturing B2B portals, WordPress development, and responsive web design.',
    'Bareilly'
  );

  const productSchema = generateProductSchema(
    'Website Design Services Bareilly',
    'Custom website design for Bareilly furniture manufacturers, retailers, and businesses. Mobile-responsive, SEO-optimized websites with 3D product visualization starting from ₹14,000.',
    '26000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Design', url: '/website-designing-and-development-company' },
    { name: 'Bareilly Website Designing', url: '/bareilly-website-designing-and-development-company' }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema('Bareilly');

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />
      
      <Hero
        title="Website Designing Company in Bareilly"
        subtitle="Furniture E-Commerce | Manufacturing Portals | Professional Web Solutions"
        description="Leading website design company in Bareilly specializing in furniture industry e-commerce, B2B portals, and business websites. 500+ websites delivered. Serving Bareilly manufacturers and retailers. Starting ₹14,000!"
        gradient="blue"
      />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Design Services in Bareilly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for furniture industry and local businesses
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft for Bareilly?</h2>
            <p className="text-xl text-blue-100">Trusted by furniture manufacturers and businesses</p>
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

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Website Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything your furniture business needs online
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">📱 Mobile Optimized</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Responsive layout</li>
              <li>✓ Touch navigation</li>
              <li>✓ Fast mobile load</li>
              <li>✓ Swipe galleries</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔍 SEO Ready</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Google optimized</li>
              <li>✓ Product schema</li>
              <li>✓ Fast page speed</li>
              <li>✓ Local SEO</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🎨 Professional Design</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Modern UI</li>
              <li>✓ HD product images</li>
              <li>✓ Custom branding</li>
              <li>✓ Gallery layouts</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">🔒 Secure & Fast</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ SSL security</li>
              <li>✓ Fast hosting</li>
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
              Industries We Serve in Bareilly
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for key Bareilly sectors
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
            Serving Businesses Across Bareilly
          </h2>
          <p className="text-xl text-gray-600">
            Local presence with expert website services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Bareilly Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Civil Lines</li>
              <li>• Subhash Nagar</li>
              <li>• Izatnagar</li>
              <li>• CB Ganj</li>
              <li>• Nawabganj</li>
              <li>• Pilibhit Bypass</li>
              <li>• Parsakhera</li>
              <li>• Railway Road</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Budaun</li>
              <li>• Pilibhit</li>
              <li>• Shahjahanpur</li>
              <li>• Rampur</li>
              <li>• Moradabad</li>
              <li>• Badaun</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Website design</li>
              <li>• Furniture e-commerce</li>
              <li>• B2B portals</li>
              <li>• Product photography</li>
              <li>• SEO services</li>
              <li>• Maintenance & support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Bareilly
            </h2>
            <p className="text-xl text-gray-600">Choose the package that fits your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Website</h3>
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
              <a href="#contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                BEST FOR FURNITURE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">E-Commerce Website</h3>
              <div className="text-4xl font-bold text-white mb-6">₹75,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Product catalog</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Dealer portal</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>12 months support</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>SEO optimization</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium + 3D</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹1,20,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in E-Commerce</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3D product views</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AR visualization</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Customization tools</span>
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
              Let&apos;s discuss your website project in Bareilly
            </p>
          </div>
          <ContactForm serviceName="Bareilly Website Development" />
        </div>
      </section>
    </div>
    </>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing & Development Company in Dehradun | Uttarakhand Web Design',
    description: 'Top website designing and development company in Dehradun. Custom web design, e-commerce, tourism portals & corporate websites for Uttarakhand businesses. Serving Haridwar, Rishikesh & Roorkee.',
    keywords: [
      'website designing company dehradun',
      'web development company dehradun',
      'website development dehradun',
      'web design dehradun',
      'dehradun website company',
      'uttarakhand website designing company',
      'website design uttarakhand',
      'tourism website development dehradun',
      'e-commerce website dehradun',
      'responsive web design dehradun',
      'best website company dehradun',
      'affordable website dehradun',
      'website design haridwar',
      'web development rishikesh',
      'website company roorkee',
      'dehradun digital marketing',
      'website maintenance dehradun',
      'custom web design dehradun',
      'school website dehradun',
      'hotel website development dehradun',
      'seo website dehradun',
      'startup website dehradun',
    ],
    canonical: '/dehradun-website-designing-and-development-company',
  });
}

const localBusinessSchema = {
  ...generateLocalBusinessSchema('Dehradun'),
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.3165,
    longitude: 78.0322,
  },
  areaServed: [
    { '@type': 'City', name: 'Dehradun' },
    { '@type': 'City', name: 'Haridwar' },
    { '@type': 'City', name: 'Rishikesh' },
    { '@type': 'City', name: 'Mussoorie' },
    { '@type': 'City', name: 'Roorkee' },
    { '@type': 'City', name: 'Haldwani' },
  ],
};

const serviceSchema = generateServiceSchema(
  'Website Designing & Development in Dehradun',
  'Professional website designing and development services in Dehradun for tourism, education, e-commerce, and corporate businesses across Uttarakhand.',
  'Dehradun'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Website Designing Dehradun', url: '/dehradun-website-designing-and-development-company' },
]);

const faqs = [
  {
    question: 'How much does a website cost in Dehradun?',
    answer: 'Website development in Dehradun starts at ₹15,000 for a basic 5-page site. Business websites range from ₹30,000–₹60,000, and full e-commerce portals cost ₹60,000–₹1,50,000+ depending on features and integrations.',
  },
  {
    question: 'Do you build tourism and hotel websites in Dehradun?',
    answer: 'Yes, we specialize in tourism and hospitality websites for Dehradun, Mussoorie, Rishikesh, and Haridwar. Our tourism sites include online booking systems, gallery, reviews, multi-language support, and WhatsApp integration.',
  },
  {
    question: 'Can you create school and coaching institute websites?',
    answer: 'Absolutely. We develop websites for schools, colleges, and coaching institutes in Dehradun with student portals, online admission forms, fee payment integration, result publishing, and live class scheduling features.',
  },
  {
    question: 'Do you offer SEO services with website development in Dehradun?',
    answer: 'Yes, every website we build comes with on-page SEO optimization. We also offer ongoing SEO services to help Dehradun businesses rank higher for local searches on Google.',
  },
  {
    question: 'How long does it take to build a website in Dehradun?',
    answer: 'A basic website takes 5–7 days. Business websites take 10–15 days, and complex e-commerce or custom portals take 3–6 weeks. We maintain clear timelines and milestone-based delivery.',
  },
  {
    question: 'Do you serve clients in Haridwar and Rishikesh?',
    answer: 'Yes, we serve businesses across the Uttarakhand region including Haridwar, Rishikesh, Mussoorie, Roorkee, Haldwani, and Nainital. We work remotely and deliver projects on time across all cities.',
  },
  {
    question: 'What technologies do you use for web development in Dehradun?',
    answer: 'We use modern technologies including React, Next.js, Node.js, PHP/Laravel, WordPress, and Shopify based on client requirements. All our websites are mobile-responsive, fast-loading, and SEO-friendly.',
  },
  {
    question: 'Do you provide website maintenance and support in Dehradun?',
    answer: 'Yes, we offer comprehensive website maintenance packages including content updates, security patches, backups, performance optimization, and 24/7 support for businesses across Uttarakhand.',
  },
  {
    question: 'Can you redesign an existing website for a Dehradun business?',
    answer: 'Yes, we offer complete website redesign services. We assess your current website, propose an improved design, and rebuild it with better performance, modern UI, and stronger SEO.',
  },
  {
    question: 'Do you build e-commerce websites for Dehradun businesses?',
    answer: 'Yes, we build custom e-commerce websites with product catalogs, shopping carts, payment gateway integration (Razorpay, PayU), order management, and mobile apps for retail businesses in Dehradun.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function DehradunWebsiteDesigning() {
  const services = [
    {
      icon: '🏔️',
      title: 'Tourism & Hotel Websites',
      description: 'Booking-ready websites for hotels, resorts & travel agencies in Uttarakhand',
      features: ['Online Booking System', 'Gallery & Reviews', 'Multi-language Support', 'WhatsApp Integration'],
      price: 'From ₹25,000',
    },
    {
      icon: '🎓',
      title: 'Education & Coaching Portals',
      description: 'Feature-rich websites for schools, colleges & institutes in Dehradun',
      features: ['Student & Parent Portal', 'Online Admission', 'Fee Payment', 'Result Publishing'],
      price: 'From ₹20,000',
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Custom online stores for retail & local businesses',
      features: ['Product Catalog', 'Cart & Checkout', 'Payment Gateway', 'Order Management'],
      price: 'From ₹40,000',
    },
    {
      icon: '💼',
      title: 'Corporate & Business Websites',
      description: 'Professional business websites for Dehradun companies',
      features: ['Company Profile', 'Services & Portfolio', 'Lead Generation', 'SEO Optimized'],
      price: 'From ₹15,000',
    },
    {
      icon: '🏥',
      title: 'Healthcare & Clinic Websites',
      description: 'Medical websites with appointment booking for Dehradun clinics',
      features: ['Appointment Booking', 'Doctor Profiles', 'Health Blog', 'WhatsApp Alerts'],
      price: 'From ₹18,000',
    },
    {
      icon: '🔧',
      title: 'Website Redesign & Maintenance',
      description: 'Upgrade & maintain existing websites for ongoing success',
      features: ['Modern UI Redesign', 'Speed Optimization', 'Security Updates', '24/7 Support'],
      price: 'From ₹10,000',
    },
  ];

  const industries = [
    { icon: '🏔️', name: 'Tourism & Hospitality', desc: 'Hotels, resorts, travel agencies, adventure camps & trekking companies' },
    { icon: '🎓', name: 'Education & Coaching', desc: 'Schools, colleges, coaching institutes & online learning platforms' },
    { icon: '🏥', name: 'Healthcare & Wellness', desc: 'Hospitals, clinics, Ayurveda centers & wellness retreats' },
    { icon: '💻', name: 'IT & Technology', desc: 'Software companies, IT startups & digital agencies in Dehradun' },
    { icon: '🏗️', name: 'Real Estate & Construction', desc: 'Builders, developers & real estate agencies in Uttarakhand' },
    { icon: '🛡️', name: 'Government & Defence', desc: 'Government portals, defence-related services & public sector organizations' },
  ];

  return (
    <>
      <SchemaMarkup data={[serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema]} />
      <main>
        <Hero
          title="Website Designing & Development Company in Dehradun"
          subtitle="Responsive Web Design | Tourism Portals | E-Commerce | Corporate Websites"
          description="Professional website designing and development company in Dehradun. Serving tourism, education, healthcare & corporate businesses across Uttarakhand. Starting ₹15,000!"
          gradient="purple"
        />

        {/* Stats Bar */}
        <section className="bg-white border-b border-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '200+', label: 'Websites Delivered' },
                { number: '8+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Design Services in Dehradun</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From tourism portals to e-commerce stores — we build websites that drive results for Uttarakhand businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                  <p className="text-purple-600 font-semibold text-sm mb-4">{service.price}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <span className="text-purple-500 mr-2">✓</span>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EifaSoft in Dehradun?</h2>
              <p className="text-xl text-gray-600">Trusted by 200+ businesses across Uttarakhand</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎨', title: 'Custom Designs', desc: 'Pixel-perfect websites tailored to your brand identity and business goals' },
                { icon: '📱', title: 'Mobile-First', desc: 'All websites are fully responsive and optimized for every device and screen size' },
                { icon: '⚡', title: 'Fast & Secure', desc: 'High-performance hosting, SSL certificates, and regular security updates included' },
                { icon: '🔍', title: 'SEO-Ready', desc: 'Built-in on-page SEO, Google Analytics, and Search Console integration from day one' },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Features Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Website We Build Includes</h2>
              <p className="text-xl text-gray-600">Comprehensive features to give your Dehradun business a competitive edge</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  heading: 'Design & UX',
                  items: ['Custom UI Design', 'Mobile Responsive', 'Brand Guidelines', 'User-Friendly Navigation', 'Attractive Animations'],
                },
                {
                  heading: 'Performance',
                  items: ['Fast Page Speed', 'Image Optimization', 'CDN Integration', 'Lazy Loading', 'Core Web Vitals'],
                },
                {
                  heading: 'SEO & Marketing',
                  items: ['On-Page SEO', 'Meta Tags & Schema', 'Google Analytics', 'Sitemap & Robots.txt', 'Local SEO Setup'],
                },
                {
                  heading: 'Security & Support',
                  items: ['SSL Certificate', 'Regular Backups', 'Uptime Monitoring', 'Content Updates', '24/7 Support'],
                },
              ].map((col) => (
                <div key={col.heading} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-purple-700 mb-4 text-lg border-b border-purple-100 pb-2">{col.heading}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve in Dehradun</h2>
              <p className="text-xl text-gray-600">Domain expertise across Uttarakhand&apos;s key business sectors</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry.name} className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-100">
                  <span className="text-3xl flex-shrink-0">{industry.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                    <p className="text-sm text-gray-600">{industry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Development Packages — Dehradun</h2>
              <p className="text-xl text-gray-600">Transparent pricing for every business size and budget</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-500 text-sm mb-4">For individuals & small businesses</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹15,000</div>
                <ul className="space-y-3 mb-8 text-sm">
                  {['Up to 5 Pages', 'Mobile Responsive', 'Contact Form', 'Basic On-Page SEO', 'WhatsApp Button', '1 Month Support'].map((f) => (
                    <li key={f} className="flex items-start gap-2"><span className="text-green-500">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-violet-600 text-white rounded-xl p-8 shadow-xl transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-purple-200 text-sm mb-4">For growing businesses</p>
                <div className="text-4xl font-bold mb-6">₹35,000</div>
                <ul className="space-y-3 mb-8 text-sm">
                  {['Up to 15 Pages', 'CMS / Blog Integration', 'Advanced SEO', 'Google Analytics', 'Speed Optimization', 'Free Hosting 1 Year', '3 Months Support'].map((f) => (
                    <li key={f} className="flex items-start gap-2"><span className="text-yellow-300">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-gray-500 text-sm mb-4">For e-commerce & enterprises</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">₹70,000+</div>
                <ul className="space-y-3 mb-8 text-sm">
                  {['Unlimited Pages', 'E-Commerce / Booking', 'Custom Integrations', 'Payment Gateway', 'Advanced Analytics', 'Priority Support 1 Year'].map((f) => (
                    <li key={f} className="flex items-start gap-2"><span className="text-green-500">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GEO Coverage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Businesses Across Uttarakhand</h2>
              <p className="text-xl text-gray-600">Local expertise with pan-Uttarakhand delivery</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>📍</span> Areas in Dehradun
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Rajpur Road',
                    'Paltan Bazaar',
                    'Haridwar Road',
                    'Ballupur',
                    'Clement Town',
                    'Mussoorie Road',
                    'Patel Nagar',
                    'Race Course',
                    'Raipur Road',
                    'Sahaspur',
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🗺️</span> Nearby Cities We Serve
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Haridwar',
                    'Rishikesh',
                    'Mussoorie',
                    'Roorkee',
                    'Haldwani',
                    'Nainital',
                    'Saharanpur',
                    'Meerut',
                    'Ambala',
                    'Chandigarh',
                  ].map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{city}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🚀</span> Service Delivery
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'On-site & Remote Support',
                    'Hindi & English Communication',
                    'WhatsApp Project Updates',
                    'Dedicated Project Manager',
                    'Milestone-Based Delivery',
                    'Post-Launch Handover Training',
                    'Uttarakhand-Focused SEO',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* GEO Chip Tags */}
            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {[
                'Website Company Dehradun',
                'Web Design Uttarakhand',
                'Tourism Website Dehradun',
                'Hotel Website Dehradun',
                'School Website Dehradun',
                'E-Commerce Dehradun',
                'Web Design Haridwar',
                'Web Development Rishikesh',
                'Website Company Roorkee',
                'Startup Website Dehradun',
                'Affordable Website Uttarakhand',
                'SEO Website Dehradun',
              ].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Website Built in Dehradun</h2>
              <p className="text-xl text-gray-600">Talk to our Uttarakhand web design experts today — free consultation available</p>
            </div>
            <ContactForm serviceName="Website Design & Development" cityName="Dehradun" />
          </div>
        </section>
      </main>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software Provider | Best Network Marketing Software Company India | EifaSoft',
    description: 'Leading MLM Software Provider in India with 15+ years experience. Trusted by 500+ companies. Complete network marketing solutions with 29+ plans, mobile apps, e-commerce, e-wallet, and 24/7 support. Best MLM software company for startups and enterprise.',
    canonical: '/mlm-software-provider',
    keywords: [
      'mlm software provider',
      'network marketing software provider',
      'mlm software company',
      'best mlm software provider',
      'mlm software provider india',
      'top mlm software company',
      'mlm solution provider',
      'direct selling software provider',
      'mlm technology provider',
      'mlm software vendor',
      'mlm platform provider',
      'network marketing solutions',
      'mlm software services',
      'mlm software supplier',
      'best mlm software company',
      'top mlm software developers India',
      'mlm software development company India',
      'mlm software company in Delhi',
      'mlm software provider Bangalore',
      'network marketing software Mumbai',
      'mlm software company Hyderabad',
      'direct selling software Chennai',
      'mlm software company Kolkata',
      'mlm software company Lucknow',
      'mlm software company Noida',
      'trusted mlm software company',
      'reliable mlm platform',
      'enterprise mlm software solutions'
    ],
  });
}

export default function MLMSoftwareProviderPage() {
  const faqs = [
    {
      question: 'What does an MLM Software Provider do?',
      answer: 'An MLM Software Provider offers end-to-end network marketing technology solutions including: Software development (custom MLM platforms with compensation plans), Implementation & deployment (cloud hosting or on-premise setup), Training & onboarding (admin and distributor training), Technical support (24/7 assistance, bug fixes, updates), Maintenance & updates (security patches, feature enhancements), Integration services (payment gateways, third-party APIs), Customization (branding, workflows, business rules), and Consulting (compensation plan design, business strategy). A reliable provider acts as a long-term technology partner for MLM companies.'
    },
    {
      question: 'Why choose EifaSoft as your MLM Software Provider?',
      answer: 'EifaSoft stands out as the top MLM software provider with: 15+ years of MLM industry experience, 500+ successful implementations across India and globally, 29+ compensation plans expertise (all major structures), 99.9% uptime guarantee with enterprise-grade infrastructure, ISO certified & secure development practices, Dedicated account managers for personalized support, Transparent pricing with no hidden costs, Proven track record with leading Indian MLM companies, In-house development team (no outsourcing), Flexible deployment options (SaaS, on-premise, hybrid), and Comprehensive training and documentation. Our clients trust us for reliable, scalable, and compliant MLM solutions.'
    },
    {
      question: 'What MLM compensation plans does EifaSoft provide?',
      answer: 'We provide all 29+ major MLM compensation plans: Traditional Plans (Binary, Matrix, Unilevel, Board, Generation, Stair Step Breakaway), Modern Plans (Hybrid, Australian X-Up, Party Plan, Gift Plan, Helping Plan), E-Commerce Plans (E-commerce MLM, Repurchase Plan, Mobile Recharge, Auto-ship), Investment Plans (ROI Plan, Investment Plan, Donation Plan, Autopool), Blockchain Plans (Smart Contract MLM, Cryptocurrency MLM, Bitcoin MLM, Tron MLM), and Specialized Plans (Real Estate MLM, Bucket Help, 50-50 Crowdfunding, Mobious Loop, Spillover Binary, Single Leg). Plus custom hybrid combinations tailored to your business model.'
    },
    {
      question: 'Do you provide cloud-based or on-premise MLM solutions?',
      answer: 'We offer both deployment options: Cloud-Based SaaS (Hosted on AWS/Google Cloud, automatic scaling and updates, pay-as-you-grow pricing starting ₹25,000/month, 99.9% uptime SLA, accessible from anywhere, no infrastructure investment needed, faster deployment 2-4 weeks) and On-Premise Installation (Deployed on your servers, complete data control and ownership, one-time license fee starting ₹5,00,000, full customization freedom, ideal for compliance-sensitive businesses, dedicated infrastructure, deployment timeline 4-8 weeks). We also offer Hybrid solutions combining cloud and on-premise for specific use cases. Our team helps choose the best option based on your budget, scale, and requirements.'
    },
    {
      question: 'What support do you provide as an MLM Software Provider?',
      answer: 'Comprehensive support included: Implementation Support (software setup and configuration, data migration from old systems, compensation plan configuration, payment gateway integration, training for admins and users), Technical Support (24/7 email/phone/chat support, dedicated account manager, priority bug resolution, performance optimization, server monitoring), Maintenance & Updates (regular security patches, OS/platform compatibility updates, minor feature enhancements, database optimization, backup management), Training (initial onboarding sessions, video tutorials and documentation, periodic refresher training, webinars on best practices), and Consulting (compensation plan optimization, business growth strategies, compliance guidance, market insights). Support contracts start at ₹50,000/year for Basic to ₹2,00,000/year for Enterprise 24/7 support.'
    },
    {
      question: 'How long does it take to implement MLM software?',
      answer: 'Implementation timeline varies by complexity: Standard MLM Software (2-4 weeks for cloud SaaS with pre-built plans like Binary/Matrix, basic customization, standard integrations), Custom MLM Software (4-8 weeks for moderate customization, multiple compensation plans, e-commerce integration, mobile apps, custom branding), Enterprise MLM Platform (8-16 weeks for complex hybrid plans, blockchain integration, extensive custom features, multi-country deployment), and Complete Custom Solution (16+ weeks for fully bespoke platforms with unique business logic). Timeline includes: requirement gathering (1 week), design & development, testing & QA (2-3 weeks), deployment & training (1 week), and go-live support. We follow agile methodology with weekly progress updates.'
    },
    {
      question: 'Do you provide MLM software for international markets?',
      answer: 'Yes! We specialize in global MLM solutions with: Multi-Language Support (English, Hindi, Spanish, French, Chinese, Arabic + custom languages), Multi-Currency Handling (150+ currencies with real-time exchange rates, automatic conversion), International Payment Gateways (Stripe, PayPal, regional processors, cryptocurrency payments), Tax Compliance (GST India, VAT Europe, Sales Tax US, country-specific regulations), Time Zone Management (automatic conversion for all users), Localized Content (region-specific branding, culturally adapted UI/UX), Data Compliance (GDPR Europe, CCPA US, Indian data laws), and Global Hosting (CDN for fast access worldwide, distributed servers). We have successfully deployed MLM platforms in USA, UK, UAE, Singapore, Malaysia, and 20+ countries.'
    },
    {
      question: 'What is the cost of MLM software from EifaSoft?',
      answer: 'Transparent pricing with no hidden costs: SaaS Subscription (₹25,000-₹1,00,000/month based on active members and features, includes hosting, support, updates), One-Time License (₹2,50,000-₹25,00,000+ based on compensation plan complexity, features, and customization, you own the software forever), Mobile Apps Add-On (₹3,00,000-₹7,00,000 for native iOS & Android apps), Annual Maintenance (₹50,000-₹2,00,000/year for ongoing support, updates, and enhancements), and Custom Development (₹5,000-₹15,000/hour for specialized features, integrations, and consulting). Free demo, consultation, and detailed quote available. We offer flexible payment terms including installments for licensed software.'
    },
    {
      question: 'Is EifaSoft&apos;s MLM software legal and compliant?',
      answer: 'Yes, our software is designed for legal MLM compliance: India Compliance (follows Consumer Protection Direct Selling Rules 2021, GST-compliant invoicing and reports, avoids prize chits and money circulation schemes, supports product-based MLM models), International Standards (GDPR data privacy compliance, PCI-DSS for payment security, SOC 2 Type II certification available, anti-money laundering controls), Legal Safeguards (transparent compensation plan documentation, income disclosure statements, distributor agreements management, refund/return policy support, audit trail for all transactions), and Documentation (detailed terms of service templates, legal compliance checklists, consultation with MLM legal experts available). Note: Software legality depends on your business model—we recommend legal consultation for business structure, not just technology.'
    },
    {
      question: 'Can EifaSoft migrate data from our existing MLM software?',
      answer: 'Yes! We provide complete data migration services: Migration Scope (member/distributor data with genealogy, transaction history and commission records, product catalog and orders, payment and payout history, documents and KYC records), Migration Process (data audit and mapping, test migration to staging environment, data validation and integrity checks, production migration with minimal downtime, post-migration verification), Supported Sources (migrate from any MLM platform—custom, Epixel, ARM MLM, Infinite MLM, others, CSV/Excel imports, database migration SQL/MySQL/PostgreSQL, API-based migration), and Timeline (small databases <10K members: 1-2 weeks, medium databases 10K-100K members: 2-4 weeks, large databases 100K+ members: 4-8 weeks). Migration services typically cost ₹50,000-₹3,00,000 based on complexity and data volume.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'MLM Software Provider Services',
    'Leading MLM software provider offering complete network marketing solutions with 29+ compensation plans, cloud/on-premise deployment, mobile apps, 24/7 support, and global compliance.',
    'mlm-software-provider'
  );

  const productSchema = generateProductSchema(
    'MLM Software Provider Services',
    'Enterprise MLM software provider delivering network marketing platforms, compensation plan automation, mobile apps, e-commerce integration, and comprehensive technical support.',
    '250000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'MLM Software Provider', url: '/mlm-software-provider' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Best MLM Software Provider in India - Network Marketing Solutions"
        subtitle="15+ Years Experience | 500+ Successful Deployments | 24/7 Enterprise Support"
        description="India&apos;s most trusted MLM software provider and network marketing solution company. Complete direct selling solutions with 29+ compensation plans, cloud/on-premise deployment, mobile apps, e-commerce, and enterprise-grade support. Partner with EifaSoft for MLM success."
        gradient="blue"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft as Your Trusted MLM Software Provider?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Years</h3>
              <p className="text-gray-700">MLM industry expertise since 2008</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+ Clients</h3>
              <p className="text-gray-700">Successful implementations globally</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9% Uptime</h3>
              <p className="text-gray-700">Enterprise-grade infrastructure</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-700">Secure development practices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete MLM Software Provider Services & Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Software Development',
                services: ['Custom MLM platforms', '29+ compensation plans', 'E-commerce integration', 'Mobile apps (iOS/Android)', 'Blockchain solutions']
              },
              {
                icon: '☁️',
                title: 'Cloud & Hosting',
                services: ['AWS/Google Cloud hosting', '99.9% uptime SLA', 'Auto-scaling infrastructure', 'CDN for global access', 'Daily backups']
              },
              {
                icon: '🎓',
                title: 'Training & Onboarding',
                services: ['Admin panel training', 'Distributor onboarding', 'Video tutorials', 'Documentation', 'Webinars & workshops']
              },
              {
                icon: '🔧',
                title: 'Technical Support',
                services: ['24/7 support available', 'Dedicated account manager', 'Bug resolution', 'Performance optimization', 'Priority assistance']
              },
              {
                icon: '🔄',
                title: 'Maintenance & Updates',
                services: ['Security patches', 'Feature enhancements', 'OS compatibility', 'Database optimization', 'Regular updates']
              },
              {
                icon: '🤝',
                title: 'Consulting Services',
                services: ['Compensation plan design', 'Business strategy', 'Compliance guidance', 'Market analysis', 'Growth optimization']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Network Marketing Software Solutions & Deployment Options
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud SaaS Solution</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Hosted on enterprise cloud (AWS/GCP)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>No infrastructure investment needed</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Automatic updates & scaling</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Pay-as-you-grow pricing</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Faster deployment (2-4 weeks)</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600">₹25K-1L/month</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Premise License</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span>Deployed on your servers</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span>Complete data control</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span>Full source code access</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span>One-time licensing fee</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span>Unlimited customization</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-green-600">₹5L-25L+ one-time</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading MLM Companies</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              500+ successful deployments across health & wellness, FMCG, education, and digital products sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">MLM Companies Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">29+</div>
              <p className="text-blue-100">Compensation Plans</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* Explore MLM Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MLM Compensation Plans We Provide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a leading MLM software provider, we offer all major compensation plan types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Forced matrix' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Generational bonus' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Custom combinations' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-based' },
              { title: 'Cryptocurrency MLM', href: '/cryptocurrency-mlm-software', desc: 'Crypto payments' }
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-blue-100">All-in-one network marketing solution</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Pricing</h3>
              <p className="text-green-100">Transparent pricing plans</p>
            </Link>
            <Link href="/mlm-software-developer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hire MLM Developers</h3>
              <p className="text-purple-100">Dedicated development team</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner with India&apos;s Best MLM Software Provider Today
            </h2>
            <p className="text-xl text-gray-600">
              Free demo, consultation, and custom quote for your MLM business
            </p>
          </div>
          <ContactForm serviceName="MLM Software Provider" />
        </div>
      </section>
    </>
  );
}

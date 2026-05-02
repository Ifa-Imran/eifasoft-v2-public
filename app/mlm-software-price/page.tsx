import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software Price 2026 | MLM Software Cost & Pricing Plans | Affordable | EifaSoft',
    description: 'Compare MLM software prices and pricing plans for 2026. Affordable MLM software starting from ₹1,00,000. Get detailed pricing for Binary, Matrix, Unilevel, Generation, Board, and all 29+ MLM compensation plans. Free demo available.',
    canonical: '/mlm-software-price',
    keywords: [
      'MLM software price',
      'MLM software pricing',
      'MLM software cost',
      'MLM software cost in India',
      'affordable MLM software',
      'cheap MLM software',
      'low cost MLM software',
      'MLM software pricing plans',
      'MLM software monthly subscription',
      'one-time purchase MLM software',
      'MLM software packages',
      'network marketing software price',
      'MLM software price india',
      'binary plan MLM software price',
      'matrix MLM software cost',
      'unilevel MLM software price',
      'MLM software rates',
      'custom MLM software pricing',
      'MLM software quote',
      'MLM software budget',
      'budget MLM software',
      'low cost MLM software india',
      'MLM software price comparison',
      'best price MLM software india',
      'MLM software cost 2026',
      'MLM development charges',
      'MLM software free trial',
      'MLM software demo',
      'enterprise MLM software price',
      'starter MLM software price',
      'professional MLM software price'
    ],
  });
}

export default function MLMSoftwarePricePage() {
  const serviceSchema = generateServiceSchema(
    'MLM Software Pricing & Plans',
    'Transparent and affordable MLM software pricing for all compensation plans. Get the best value for Binary, Matrix, Unilevel, Board, and other MLM plans with flexible pricing options.',
  );

  const productSchema = generateProductSchema(
    'MLM Software Solution',
    'Complete MLM software with customizable compensation plans and pricing',
    '1,00,000'
  );

  const faqs = [
    {
      question: 'What is the average cost of MLM software?',
      answer: 'MLM software costs vary based on features and complexity. Basic MLM software with standard features starts from ₹1,00,000 to ₹3,00,000. Advanced MLM software with custom features, mobile apps, and e-commerce integration ranges from ₹3,50,000 to ₹10,00,000. Enterprise-level MLM software with blockchain, AI, and multi-currency support can cost ₹10,00,000+. The exact price depends on your compensation plan, number of users, customization needs, and additional features.',
    },
    {
      question: 'What factors affect MLM software pricing?',
      answer: 'Several factors influence MLM software pricing: 1) Compensation plan complexity (Binary is simpler than Matrix or Hybrid), 2) Number of features (e-wallet, e-commerce, replicated websites), 3) User capacity and scalability requirements, 4) Mobile app development (iOS & Android), 5) Customization and branding needs, 6) Integration requirements (payment gateways, SMS, email), 7) Ongoing support and maintenance, 8) Hosting infrastructure and server costs, 9) Security features and compliance requirements.',
    },
    {
      question: 'Do you offer monthly payment plans for MLM software?',
      answer: 'Yes, we offer flexible payment options including: 1) One-time payment with lifetime license, 2) Installment plans (3-6 months EMI options), 3) Subscription-based pricing (monthly/yearly), 4) SaaS model with monthly fees based on active users, 5) White-label licensing options. We also provide separate pricing for maintenance, hosting, and support. Contact us to discuss a payment plan that fits your budget and business model.',
    },
    {
      question: 'What is included in the MLM software price?',
      answer: 'Our MLM software pricing typically includes: 1) Complete source code with chosen compensation plan, 2) Admin panel with full control features, 3) User dashboard and member area, 4) E-wallet and payment gateway integration, 5) Commission calculation engine, 6) Genealogy tree visualization, 7) Reports and analytics dashboard, 8) Email and SMS notification system, 9) Initial setup and installation, 10) Training and documentation, 11) 6-12 months technical support. Mobile apps, advanced customizations, and ongoing maintenance may have additional costs.',
    },
    {
      question: 'How does your MLM software pricing compare to competitors?',
      answer: 'Our MLM software offers the best value in the market. While competitors charge ₹5,00,000+ for basic features, we provide feature-rich solutions starting from ₹1,00,000. We offer transparent pricing with no hidden costs, lifetime ownership options, and comprehensive support. Unlike subscription-only models that cost ₹50,000-₹1,00,000 per month indefinitely, our one-time payment option saves you significant money long-term. We also provide customization flexibility that many competitors charge extra for.',
    },
    {
      question: 'Can I get a custom quote for my specific MLM business needs?',
      answer: 'Absolutely! Every MLM business is unique, and we provide personalized quotes based on your requirements. Share your compensation plan, expected user base, required features, integration needs, and budget, and we&apos;ll create a custom proposal. We offer free consultation to understand your business model and recommend the most cost-effective solution. Contact us via phone, email, or the contact form, and our MLM experts will provide a detailed quote within 24 hours.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development-company' },
    { name: 'MLM Software Price', url: '/mlm-software-price' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="MLM Software Price 2026 - Affordable Network Marketing Software Cost"
        subtitle="Transparent Pricing | No Hidden Costs | Best Value MLM Software in India"
        description="Compare MLM software pricing plans for 2026. Get the best value direct selling software with flexible payment options. Launch your network marketing business with affordable packages starting ₹1,00,000."
        gradient="green"
      />

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Affordable MLM Software Pricing Packages 2026</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your MLM business size and growth plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Package',
                price: '₹1,00,000',
                duration: 'One-time payment',
                features: [
                  'Single compensation plan',
                  'Up to 1,000 members',
                  'Admin & user dashboard',
                  'E-wallet integration',
                  'Commission engine',
                  'Genealogy tree',
                  'Basic reports',
                  'Email notifications',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
                bestFor: 'Startups & Small Teams',
              },
              {
                name: 'Professional Package',
                price: '₹3,50,000',
                duration: 'One-time payment',
                features: [
                  'Multiple compensation plans',
                  'Up to 10,000 members',
                  'Advanced admin panel',
                  'E-commerce integration',
                  'Replicated websites',
                  'Mobile-responsive design',
                  'Advanced reports & analytics',
                  'SMS & email automation',
                  'Payment gateway integration',
                  '12 months support',
                  'Free updates for 1 year',
                  'Source code included',
                ],
                popular: true,
                bestFor: 'Growing MLM Businesses',
              },
              {
                name: 'Enterprise Package',
                price: 'Custom',
                duration: 'Contact for quote',
                features: [
                  'Unlimited members',
                  'All compensation plans',
                  'Mobile apps (iOS & Android)',
                  'Multi-currency support',
                  'Blockchain integration',
                  'AI-powered analytics',
                  'Custom branding',
                  'Multi-language support',
                  'Dedicated server setup',
                  '24/7 priority support',
                  'Lifetime updates',
                  'White-label solution',
                ],
                popular: false,
                bestFor: 'Enterprise & International MLM',
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-green-600 relative transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.duration}</p>
                  <p className="text-sm text-gray-500 mt-2 italic">{plan.bestFor}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan-Specific Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MLM Software Cost by Compensation Plan Type</h2>
            <p className="text-lg text-gray-600">
              Different MLM plans have different pricing based on complexity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { plan: 'Binary Plan MLM Software', price: '₹1,00,000 - ₹3,00,000', complexity: 'Low', url: '/binary-plan-mlm-software' },
                { plan: 'Matrix Plan MLM Software', price: '₹1,50,000 - ₹4,00,000', complexity: 'Medium', url: '/matrix-plan-mlm-software' },
                { plan: 'Unilevel Plan MLM Software', price: '₹1,20,000 - ₹3,50,000', complexity: 'Low', url: '/unilevel-plan-mlm-software' },
                { plan: 'Board Plan MLM Software', price: '₹2,00,000 - ₹5,00,000', complexity: 'High', url: '/board-plan-mlm-software' },
                { plan: 'Generation Plan MLM Software', price: '₹2,50,000 - ₹6,00,000', complexity: 'High', url: '/generation-plan-mlm-software' },
                { plan: 'Hybrid Plan MLM Software', price: '₹3,00,000 - ₹8,00,000', complexity: 'Very High', url: '/hybrid-plan-mlm-software' },
                { plan: 'E-Commerce MLM Software', price: '₹2,50,000 - ₹7,00,000', complexity: 'High', url: '/e-commerce-plan-mlm-software' },
                { plan: 'Cryptocurrency MLM Software', price: '₹5,00,000 - ₹15,00,000', complexity: 'Very High', url: '/cryptocurrency-mlm-software' },
                              { plan: 'Smart Contract MLM Software', price: '₹6,00,000 - ₹18,00,000', complexity: 'Very High', url: '/smart-contract-mlm-software' },
                              { plan: 'Single Leg MLM Software', price: '₹1,00,000 - ₹2,50,000', complexity: 'Low', url: '/single-leg-plan-mlm-software' },
                              { plan: 'Donation Plan MLM Software', price: '₹1,50,000 - ₹4,00,000', complexity: 'Medium', url: '/donation-plan-mlm-software' },
                              { plan: 'ROI Plan MLM Software', price: '₹2,00,000 - ₹5,00,000', complexity: 'High', url: '/roi-plan-mlm-software' },
              ].map((item) => (
                <Link
                  key={item.plan}
                  href={item.url}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex justify-between items-center group"
                >
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {item.plan}
                    </h3>
                    <p className="text-2xl font-bold text-green-600">{item.price}</p>
                    <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                      item.complexity === 'Low' ? 'bg-green-100 text-green-700' :
                      item.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      item.complexity === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.complexity} Complexity
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What&apos;s Included in Our Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: 'Software Features',
                items: ['Complete source code', 'Admin panel', 'User dashboard', 'Commission engine', 'E-wallet system', 'Genealogy tree', 'Reports & analytics', 'Payment integration'],
              },
              {
                category: 'Implementation',
                items: ['Installation & setup', 'Server configuration', 'Database setup', 'Domain & hosting guidance', 'Initial testing', 'Documentation', 'Admin training', 'Go-live support'],
              },
              {
                category: 'Support & Updates',
                items: ['Technical support (6-12 months)', 'Bug fixes', 'Security patches', 'Email & phone support', 'Remote assistance', 'Software updates', 'Video tutorials', 'Knowledge base access'],
              },
            ].map((section) => (
              <div key={section.category} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-700">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Optional Add-ons & Additional Costs</h2>
              <p className="text-lg text-gray-600">
                Enhance your MLM software with premium features
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {[
                  { addon: 'Mobile Apps (iOS & Android)', price: '₹2,00,000 - ₹5,00,000', description: 'Native mobile apps for members to manage their business on-the-go' },
                  { addon: 'E-Commerce Integration', price: '₹1,50,000 - ₹3,00,000', description: 'Full-featured online store with product catalog and shopping cart' },
                  { addon: 'Replicated Websites', price: '₹50,000 - ₹1,50,000', description: 'Personal websites for each distributor with unique URLs' },
                  { addon: 'Multi-Currency Support', price: '₹75,000 - ₹2,00,000', description: 'Support multiple currencies with real-time exchange rates' },
                  { addon: 'Blockchain Integration', price: '₹3,00,000 - ₹10,00,000', description: 'Smart contract-based MLM with cryptocurrency payments' },
                  { addon: 'Custom Integrations', price: 'Variable', description: 'CRM, ERP, accounting software, third-party APIs' },
                  { addon: 'Dedicated Hosting', price: '₹25,000 - ₹1,00,000/month', description: 'High-performance dedicated servers with managed services' },
                  { addon: 'Extended Support', price: '₹50,000 - ₹2,00,000/year', description: 'Priority support, dedicated account manager, SLA guarantees' },
                ].map((item) => (
                  <div key={item.addon} className="flex justify-between items-start pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex-grow pr-6">
                      <h3 className="font-bold text-lg mb-1">{item.addon}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-green-600 whitespace-nowrap">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Payment Options</h2>
              <p className="text-lg text-gray-600">
                Choose a payment plan that works for your budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  option: 'One-Time Payment',
                  icon: '💰',
                  benefits: ['Lifetime ownership', 'No recurring fees', 'Full source code', 'Best value long-term', 'Pay once, use forever'],
                },
                {
                  option: 'Installment Plan',
                  icon: '📅',
                  benefits: ['Split into 3-6 monthly payments', 'No interest charges', 'Start with 30-40% down payment', 'Easy on cash flow', 'Same features as one-time'],
                },
                {
                  option: 'SaaS Subscription',
                  icon: '🔄',
                  benefits: ['Monthly/yearly billing', 'Lower upfront cost', 'Includes hosting & support', 'Automatic updates', 'Scale as you grow'],
                },
                {
                  option: 'Custom Financing',
                  icon: '🤝',
                  benefits: ['Tailored to your budget', 'Revenue-sharing options', 'Equity partnerships', 'Flexible terms', 'Negotiable arrangements'],
                },
              ].map((plan) => (
                <div key={plan.option} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-2 border-green-100">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{plan.option}</h3>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore More MLM Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore All MLM Software Solutions</h2>
            <p className="text-lg text-gray-600">
              Discover our complete range of network marketing software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {[
              { name: 'Binary Plan MLM', href: '/binary-plan-mlm-software' },
              { name: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software' },
              { name: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software' },
              { name: 'Generation Plan MLM', href: '/generation-plan-mlm-software' },
              { name: 'Board Plan MLM', href: '/board-plan-mlm-software' },
              { name: 'Party Plan MLM', href: '/party-plan-mlm-software' },
              { name: 'Stair Step Plan MLM', href: '/stair-step-plan-mlm-software' },
              { name: 'Australian X-Up Plan', href: '/australian-x-up-plan-mlm-software' },
              { name: 'Gift Plan MLM', href: '/gift-plan-mlm-software' },
              { name: 'Helping Plan MLM', href: '/helping-plan-mlm-software' },
              { name: 'Investment Plan MLM', href: '/investment-plan-mlm-software' },
              { name: 'Bitcoin MLM', href: '/bitcoin-mlm-software' }
            ].map((plan, idx) => (
              <Link
                key={idx}
                href={plan.href}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg text-center border border-green-200 hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="text-green-700 font-semibold">{plan.name}</span>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/mlm-software" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-green-100">All-in-one solution</p>
            </Link>
            <Link href="/mlm-software-developer" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hire MLM Developer</h3>
              <p className="text-blue-100">Custom development team</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Compare MLM Software</h3>
              <p className="text-purple-100">EifaSoft vs competitors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Best MLM Software Price Quote for Your Business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every MLM business is unique. Let us create a personalized pricing proposal for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
            </Link>
            <Link
              href="/mlm-software-development-company"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View All MLM Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Detailed Pricing</h2>
              <p className="text-lg text-gray-600">
                Share your requirements and get a detailed quote within 24 hours
              </p>
            </div>
            <ContactForm serviceName="MLM Software Price" />
          </div>
        </div>
      </section>
    </main>
  );
}

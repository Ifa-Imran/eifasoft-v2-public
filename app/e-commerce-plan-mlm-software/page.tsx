import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'E-Commerce Plan MLM Software | Best Online Store MLM Software | Product MLM | EifaSoft',
    description: 'Best E-Commerce Plan MLM Software with integrated online store, product catalog, shopping cart, inventory management, order processing, retail commissions, and auto-ship feature. Complete e-commerce MLM solution starting ₹2,50,000. Mobile apps included.',
    canonical: '/e-commerce-plan-mlm-software',
    keywords: [
      'e-commerce MLM software',
      'MLM e-commerce software',
      'online store MLM software',
      'e-commerce plan MLM',
      'MLM e-commerce integration',
      'product-based MLM software',
      'shopping cart MLM',
      'MLM shopping cart',
      'e-commerce compensation plan',
      'product based network marketing',
      'MLM ecommerce platform',
      'direct selling online store',
      'ecommerce MLM india',
      'product MLM development',
      'MLM product catalog software',
      'product management MLM',
      'MLM shop software',
      'e-commerce MLM app',
      'automated MLM store',
      'MLM product commission',
      'online shopping network marketing',
      'MLM ecommerce development company',
      'product selling MLM software',
      'MLM store platform india',
      'inventory management MLM',
      'order management system MLM',
      'MLM marketplace software',
      'repurchase plan software',
      'auto-ship MLM',
      'retail commissions MLM',
      'e-commerce MLM software price'
    ],
  });
}

export default function ECommercePlanMLMSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'E-Commerce Plan MLM Software Development',
    'Professional E-Commerce MLM software with integrated online store, product management, shopping cart, payment gateway, and multi-level marketing compensation plan.',
  );

  const productSchema = generateProductSchema(
    'E-Commerce MLM Software',
    'Complete e-commerce MLM platform with online store and network marketing features',
    '2,50,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft E-Commerce MLM Software',
    description: 'Professional E-Commerce MLM software with integrated online store, product catalog, shopping cart, payment gateway, and multi-level marketing compensation plan.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '250000',
    rating: 4.8,
    reviewCount: 112,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is E-Commerce Plan MLM and how does it work?',
      answer: 'E-Commerce Plan MLM combines online retail with network marketing. It includes a full-featured e-commerce store where distributors can purchase products and earn commissions on their sales and their downline\'s sales. Members get replicated websites to sell products, earn retail profit margins, MLM commissions on team purchases, and bonuses on total team volume. It works like a traditional MLM but with products sold through an online store instead of physical distribution.',
    },
    {
      question: 'What are the key features of E-Commerce MLM Software?',
      answer: 'Key features include: 1) Complete online store with product catalog and shopping cart, 2) Replicated websites for each distributor, 3) Multi-level commission on product purchases, 4) Inventory management system, 5) Multiple payment gateway integration, 6) Order tracking and management, 7) Retail profit + MLM commissions, 8) Customer vs Distributor accounts, 9) Shipping and tax calculation, 10) Product reviews and ratings, 11) Promotional tools and coupons, 12) Genealogy tree showing purchase volumes.',
    },
    {
      question: 'How are commissions calculated in E-Commerce MLM?',
      answer: 'E-Commerce MLM uses multiple commission types: 1) Retail Profit - difference between wholesale and retail price (20-40%), 2) Level Commissions - percentage of downline purchases at each level (5-15% per level), 3) Binary/Unilevel Bonus - based on team volume, 4) Fast Start Bonus - bonus on first orders from new recruits, 5) Rank Achievement Bonus - rewards for hitting sales targets, 6) Matching Bonus - percentage of direct recruit earnings. Commissions are calculated on Business Volume (BV) or Point Value (PV) of products purchased.',
    },
    {
      question: 'What is the difference between customer and distributor accounts?',
      answer: 'Customer accounts are for retail buyers who purchase products at retail price without joining MLM. They don\'t earn commissions or have downlines. Distributor accounts are for MLM members who purchase at wholesale price, earn retail profit when selling to customers, earn MLM commissions on team purchases, get replicated websites, and can recruit downlines. Distributors typically pay a joining fee and may have monthly purchase requirements to stay active and earn commissions.',
    },
    {
      question: 'What is the cost of E-Commerce Plan MLM Software?',
      answer: 'E-Commerce MLM Software starts from ₹2,50,000 for basic features with product catalog (up to 100 products), shopping cart, payment gateway, unilevel/binary plan, and up to 5,000 members. Advanced packages (₹4,00,000 - ₹8,00,000) include unlimited products, mobile apps, advanced inventory, multiple currencies, and replicated websites. Enterprise solutions with custom features, multi-vendor support, and blockchain integration cost ₹8,00,000+. Includes installation, training, and 6-12 months support.',
    },
    {
      question: 'Can I integrate this with existing e-commerce platforms like WooCommerce or Shopify?',
      answer: 'Yes! Our E-Commerce MLM software can integrate with popular platforms: 1) WooCommerce - full integration with WordPress, 2) Shopify - API-based integration for product sync, 3) Magento - custom module for MLM features, 4) Custom platforms - API integration available. We can also build a standalone solution if preferred. Integration allows you to keep your existing store and add MLM functionality, or we can build a complete new e-commerce MLM platform from scratch with all features included.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development-company' },
    { name: 'E-Commerce Plan', url: '/e-commerce-plan-mlm-software' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="E-Commerce Plan MLM Software"
        subtitle="Online Store Meets Network Marketing"
        description="Launch your product-based MLM business with a complete e-commerce platform. Integrated online store, replicated websites, shopping cart, and multi-level compensation plan in one powerful solution."
        gradient="orange"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-3">What is E-Commerce Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>E-Commerce Plan MLM Software</strong> is a comprehensive platform that combines online retail with network marketing compensation. It features a full-featured e-commerce store where distributors can purchase products and earn commissions on their sales and their downline&apos;s sales. Members get replicated websites to sell products, earn retail profit margins, MLM commissions on team purchases, and bonuses on total team volume—all managed through a unified platform.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Integrated E-Commerce</p>
                  <p className="text-sm text-gray-600">Online store + MLM compensation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Replicated Websites</p>
                  <p className="text-sm text-gray-600">Personal storefronts for distributors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Multiple Revenue Streams</p>
                  <p className="text-sm text-gray-600">Retail profit + MLM commissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹2,50,000</p>
                  <p className="text-sm text-gray-600">Complete solution with mobile apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How E-Commerce MLM Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How E-Commerce MLM Works</h2>
              <p className="text-lg text-gray-600">
                Sell products online while building a network marketing team
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">For Customers</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span className="text-gray-700">Browse products in online catalog</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span className="text-gray-700">Add to cart and checkout</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span className="text-gray-700">Pay retail price for products</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span className="text-gray-700">Track orders and delivery</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span className="text-gray-700">Option to join as distributor</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">For Distributors</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Purchase at wholesale price</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Get replicated website to sell</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Earn retail profit margin</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Get MLM commissions on team sales</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">Recruit and build downline</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h4 className="font-bold text-lg mb-2">Revenue Streams for Distributors</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-700">Retail Profit</p>
                  <p className="text-gray-600">Sell at retail, keep the difference</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">MLM Commissions</p>
                  <p className="text-gray-600">Team purchases generate bonuses</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">Rank Bonuses</p>
                  <p className="text-gray-600">Achieve targets, earn rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete E-Commerce Features</h2>
            <p className="text-lg text-gray-600">
              Everything you need to run a successful online MLM store
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: 'Product Catalog', description: 'Unlimited products with images, descriptions, variants, and pricing', icon: '📦' },
              { feature: 'Shopping Cart', description: 'Full-featured cart with quantity updates and checkout', icon: '🛒' },
              { feature: 'Payment Gateway', description: 'Multiple payment options - cards, UPI, wallets, COD', icon: '💳' },
              { feature: 'Replicated Websites', description: 'Each distributor gets personalized storefront URL', icon: '🌐' },
              { feature: 'Inventory Management', description: 'Track stock levels, low stock alerts, auto-reorder', icon: '📊' },
              { feature: 'Order Management', description: 'Process, track, and fulfill orders efficiently', icon: '📋' },
              { feature: 'Shipping Integration', description: 'Calculate shipping costs, print labels, track delivery', icon: '🚚' },
              { feature: 'Product Reviews', description: 'Customer ratings and reviews for social proof', icon: '⭐' },
              { feature: 'Coupons & Discounts', description: 'Create promotional codes and special offers', icon: '🎁' },
              { feature: 'Multi-Currency', description: 'Support international sales with currency conversion', icon: '💱' },
              { feature: 'Tax Calculation', description: 'Automatic tax calculation based on location', icon: '🧾' },
              { feature: 'Mobile Responsive', description: 'Works perfectly on all devices and screen sizes', icon: '📱' },
            ].map((item) => (
              <div key={item.feature} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.feature}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MLM Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrated MLM Features</h2>
            <p className="text-lg text-gray-600">
              Powerful network marketing tools built into your e-commerce platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                feature: 'Flexible Compensation Plans',
                description: 'Support for Binary, Unilevel, Matrix, or Hybrid plans with e-commerce integration',
                benefits: ['Product volume tracking', 'Retail vs wholesale pricing', 'Autoship & subscriptions', 'Rank qualifications'],
              },
              {
                feature: 'Commission Automation',
                description: 'Automatic calculation and payout of all commission types based on purchases',
                benefits: ['Level commissions', 'Matching bonuses', 'Rank achievement bonuses', 'Fast start bonuses'],
              },
              {
                feature: 'Genealogy & Reports',
                description: 'Visual tree showing team structure with purchase volumes and performance',
                benefits: ['Team purchase history', 'Commission breakdown', 'Sales analytics', 'Rank progression tracking'],
              },
              {
                feature: 'Replicated Website System',
                description: 'Personal storefront for each distributor with unique URL and branding',
                benefits: ['Custom domain support', 'Personalized product showcase', 'Integrated checkout', 'Lead capture forms'],
              },
            ].map((item) => (
              <div key={item.feature} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-100">
                <h3 className="text-xl font-bold mb-2 text-orange-700">{item.feature}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm">
                      <span className="text-orange-600 mr-2">•</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">E-Commerce MLM Software Pricing</h2>
            <p className="text-lg text-gray-600">
              Complete solutions for online MLM businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter E-Commerce',
                price: '₹2,50,000',
                features: [
                  'Up to 100 products',
                  '5,000 members capacity',
                  'Basic online store',
                  'One compensation plan',
                  'Payment gateway integration',
                  'Basic inventory management',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
              },
              {
                name: 'Professional Store',
                price: '₹4,50,000',
                features: [
                  'Unlimited products',
                  '25,000 members capacity',
                  'Advanced store features',
                  'Multiple MLM plans',
                  'Replicated websites',
                  'Mobile apps (iOS/Android)',
                  'Advanced inventory',
                  '12 months support',
                  'Priority support',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Platform',
                price: 'Custom',
                features: [
                  'Unlimited everything',
                  'Multi-vendor support',
                  'Custom integrations',
                  'Blockchain payments',
                  'AI recommendations',
                  'Multi-currency/language',
                  'Dedicated server',
                  'Lifetime support',
                  'White-label solution',
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-orange-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-orange-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Compare different MLM structures to find the best fit for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited frontline recruitment' },
              { title: 'Mobile Recharge MLM', href: '/mobile-recharge-plan-mlm-software', desc: 'Telecom services MLM platform' },
              { title: 'Real Estate MLM', href: '/real-estate-mlm-software', desc: 'Property network marketing' },
              { title: 'Investment MLM', href: '/investment-plan-mlm-software', desc: 'Investment pool distribution' },
              { title: 'Repurchase MLM', href: '/repurchase-plan-mlm-software', desc: 'Product repurchase commissions' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combined compensation structure' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-orange-100">
                <h3 className="text-orange-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg text-center hover:from-orange-700 hover:to-red-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-red-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all budgets</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-pink-600 to-orange-600 text-white p-6 rounded-lg text-center hover:from-pink-700 hover:to-orange-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right solution for you</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your E-Commerce MLM Business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Combine the power of online retail with network marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/mlm-software-price"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get E-Commerce MLM Software</h2>
              <p className="text-lg text-gray-600">
                Contact us for a customized e-commerce MLM solution
              </p>
            </div>
            <ContactForm serviceName="E-Commerce Plan MLM" />
          </div>
        </div>
      </section>
    </main>
  );
}

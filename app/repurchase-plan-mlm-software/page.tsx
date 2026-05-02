import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Repurchase Plan MLM Software | MLM Repurchase Software Development | EifaSoft',
    description: 'Repurchase Plan MLM software with automated repurchase tracking, recurring commission system, and product subscription management. Custom development starts ₹3,50,000. Free demo available.',
    canonical: '/repurchase-plan-mlm-software',
    keywords: [
      'repurchase plan mlm software',
      'repurchase mlm software',
      'mlm repurchase plan',
      'recurring purchase mlm',
      'subscription mlm software',
      'repurchase mlm development',
      'product repurchase mlm',
      'autoship mlm software',
      'repurchase mlm india',
      'mlm recurring income software',
      'autoship network marketing',
      'product subscription mlm',
      'repurchase plan mlm app',
      'repurchase mlm moradabad',
      'mlm autoship platform',
      'monthly repurchase mlm',
      'repurchase compensation plan',
      'passive income mlm repurchase',
      'repurchase mlm development company',
      'custom repurchase mlm software',
      'repurchase plan mlm price india',
      'mlm product subscription software'
    ],
  });
}

export default function RepurchasePlanMLMSoftware() {
  const faqs = [
    {
      question: 'What is Repurchase Plan MLM?',
      answer: 'Repurchase Plan MLM is a compensation structure that rewards distributors for their ongoing product purchases and the purchases of their downline members. Unlike one-time purchase commissions, repurchase plans incentivize continuous product consumption through recurring commissions, encouraging customer retention and creating sustainable passive income streams.'
    },
    {
      question: 'How does the Repurchase MLM plan work?',
      answer: 'Distributors earn commissions every time they or their downline members make a product repurchase. For example, if your downline purchases ₹10,000 worth of products monthly, you earn a percentage (e.g., 5-10%) each month. The plan typically combines with other compensation structures like Binary or Unilevel, adding repurchase bonuses on top of regular commissions. Autoship subscriptions automate the repurchase process.'
    },
    {
      question: 'What are the benefits of Repurchase MLM plan?',
      answer: 'Key benefits include: Sustainable recurring income (monthly passive earnings), encourages product consumption and loyalty, higher customer lifetime value, reduces dependency on constant recruitment, creates predictable revenue streams for distributors, incentivizes quality products (people must want to repurchase), and works well with consumable products (health, beauty, nutrition).'
    },
    {
      question: 'What types of products work best with Repurchase plans?',
      answer: 'Consumable products work best: Health supplements and vitamins (monthly supply), beauty and skincare products (recurring use), nutrition shakes and protein powders, cleaning products and household items, personal care products, coffee and tea subscriptions, essential oils, weight management products. Products that customers naturally need to reorder monthly or quarterly are ideal.'
    },
    {
      question: 'What is the difference between Repurchase and Autoship?',
      answer: 'Autoship is a feature within Repurchase plans. Repurchase refers to any repeat purchase (manual or automatic). Autoship is automated recurring delivery where customers set up subscriptions (e.g., monthly protein powder delivery). Autoship ensures consistent repurchases without requiring distributors to manually reorder. Many Repurchase plans offer bonuses specifically for Autoship customers to encourage subscription sign-ups.'
    },
    {
      question: 'How much does Repurchase Plan MLM software cost?',
      answer: 'Repurchase Plan MLM software development at EifaSoft starts from ₹3,50,000 for basic features including repurchase tracking, commission calculation, and product management. Advanced features like autoship automation, subscription billing, payment gateway integration, and mobile apps can cost ₹5,50,000 to ₹12,00,000. Pricing depends on complexity and customization requirements.'
    },
    {
      question: 'What features should Repurchase MLM software have?',
      answer: 'Essential features include: Repurchase tracking and reporting, autoship/subscription management, recurring commission calculation, product catalog with repurchase cycles, payment gateway integration, subscription billing automation, repurchase notifications and reminders, downline repurchase tracking, multi-level repurchase commissions, e-wallet for recurring payouts, inventory management, and customer retention analytics.'
    },
    {
      question: 'Can Repurchase plan be combined with other MLM plans?',
      answer: 'Yes, Repurchase is typically combined with other compensation plans. Common combinations: Repurchase + Binary (binary matching + repurchase bonuses), Repurchase + Unilevel (level commissions + repurchase on all levels), Repurchase + Matrix (matrix positions + monthly repurchase from matrix members). Hybrid models maximize earnings from both recruitment and product consumption.'
    },
    {
      question: 'How long does Repurchase MLM software development take?',
      answer: 'Basic Repurchase MLM software takes 5-7 weeks including repurchase tracking, commission engine, and product management. Complex systems with autoship automation, subscription billing, payment integration, e-commerce, and mobile apps can take 8-14 weeks. We use agile development with regular demos to ensure repurchase logic and autoship features work perfectly.'
    },
    {
      question: 'Does EifaSoft provide payment gateway integration for subscriptions?',
      answer: 'Yes, we integrate subscription-compatible payment gateways including: Razorpay Subscriptions (automated recurring billing), Stripe Subscriptions (international payments), PayU Money (Indian market), Instamojo (subscription support), CCAvenue (recurring payments), and custom payment solutions. We handle subscription creation, billing cycles, failed payment retry logic, and automated renewal notifications.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Repurchase Plan MLM Software Development',
    'Custom Repurchase Plan MLM software with autoship automation, recurring commission system, subscription management, and product repurchase tracking for sustainable passive income.'
  );

  const productSchema = generateProductSchema(
    'Repurchase Plan MLM Software',
    'Cloud-based Repurchase MLM software with automated subscription billing, repurchase tracking, recurring commissions, and customer retention tools. Includes e-commerce and mobile app.',
    '350000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Repurchase Plan MLM Software',
    description: 'Specialized Repurchase Plan MLM software with autoship automation, recurring commission system, subscription management, and product repurchase tracking for sustainable passive income.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '350000',
    rating: 4.7,
    reviewCount: 78,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Repurchase Plan MLM Software', url: '/repurchase-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Repurchase Plan MLM Software"
        subtitle="Recurring Commission & Autoship Automation"
        description="Build sustainable recurring income with Repurchase MLM software. Autoship automation, subscription billing, and product repurchase tracking starting ₹3,50,000."
        gradient="blue"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is Repurchase Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Repurchase Plan MLM Software</strong> is a specialized platform for network marketing businesses focused on recurring product purchases. It rewards distributors for ongoing product repurchases through their network with automated autoship subscriptions, recurring commission calculations, and customer retention tracking. This creates sustainable passive income streams from loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Autoship Automation</p>
                  <p className="text-sm text-gray-600">Scheduled recurring orders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Recurring Commissions</p>
                  <p className="text-sm text-gray-600">5-10% on every repurchase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Subscription Billing</p>
                  <p className="text-sm text-gray-600">Payment gateway integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,50,000</p>
                  <p className="text-sm text-gray-600">Complete autoship platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Repurchase MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Repurchase Plan MLM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn recurring commissions from ongoing product purchases - creating sustainable passive income streams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Repurchase Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Initial Purchase</h4>
                    <p className="text-gray-600">Customer/distributor makes first product purchase</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Repurchase Cycle</h4>
                    <p className="text-gray-600">Customer reorders products monthly/quarterly (manual or autoship)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Recurring Commission</h4>
                    <p className="text-gray-600">Upline earns commission on every repurchase (not just first sale)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Passive Income</h4>
                    <p className="text-gray-600">Build residual income as customers continue repurchasing monthly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Monthly Repurchase Income</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Month 1 (Initial)</div>
                  <div className="font-semibold text-gray-900">5 customers × ₹5,000 = ₹25,000</div>
                  <div className="text-sm text-blue-600">Your commission: ₹2,500 (10%)</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Month 2 (Repurchase)</div>
                  <div className="font-semibold text-gray-900">5 customers × ₹5,000 = ₹25,000</div>
                  <div className="text-sm text-blue-600">Your commission: ₹2,500 (10%)</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Month 3 (Repurchase)</div>
                  <div className="font-semibold text-gray-900">5 customers × ₹5,000 = ₹25,000</div>
                  <div className="text-sm text-blue-600">Your commission: ₹2,500 (10%)</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
                  <div className="text-sm mb-1">12-Month Recurring Income</div>
                  <div className="text-2xl font-bold">₹30,000</div>
                  <div className="text-sm opacity-90">From just 5 loyal customers!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Repurchase Plan Income Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to earn recurring income
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Repurchase Commission</h3>
              <p className="text-gray-600 mb-3">Earn on every product repurchase from your customers</p>
              <div className="text-sm text-blue-600 font-semibold">5-10% on each repurchase</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Autoship Bonus</h3>
              <p className="text-gray-600 mb-3">Extra commission for customers on autoship subscriptions</p>
              <div className="text-sm text-green-600 font-semibold">Additional 2-5% bonus</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Downline Repurchase</h3>
              <p className="text-gray-600 mb-3">Earn from downline member repurchases (multi-level)</p>
              <div className="text-sm text-purple-600 font-semibold">1-5% per level (5 levels)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Sales</h3>
              <p className="text-gray-600 mb-3">One-time commission on initial customer purchase</p>
              <div className="text-sm text-orange-600 font-semibold">10-20% on first order</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Volume Bonus</h3>
              <p className="text-gray-600 mb-3">Bonuses for reaching monthly repurchase volume targets</p>
              <div className="text-sm text-pink-600 font-semibold">₹5K-50K monthly</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retention Bonus</h3>
              <p className="text-gray-600 mb-3">Rewards for customer retention milestones</p>
              <div className="text-sm text-indigo-600 font-semibold">₹1K per 6-month retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoship Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autoship Automation Features
            </h2>
            <p className="text-xl text-gray-600">
              Automated subscription management for seamless recurring revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-2xl mb-3">⏰</div>
              <h3 className="font-bold text-gray-900 mb-2">Scheduled Orders</h3>
              <p className="text-sm text-gray-600">Automatic recurring orders (weekly, monthly, quarterly)</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="text-2xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Auto Billing</h3>
              <p className="text-sm text-gray-600">Automated payment processing and invoice generation</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-2xl mb-3">🔔</div>
              <h3 className="font-bold text-gray-900 mb-2">Smart Reminders</h3>
              <p className="text-sm text-gray-600">Email/SMS notifications before next shipment</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Easy Management</h3>
              <p className="text-sm text-gray-600">Customers can pause, skip, or modify subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Repurchase MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Complete solution for managing recurring purchases and subscriptions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Repurchase tracking & analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Autoship/subscription management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Recurring commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Product catalog with cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Customer retention reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-Commerce Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Subscription billing system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Inventory management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Order tracking & shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Failed payment retry logic</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Repurchase notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet for payouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Customer portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Analytics dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Repurchase MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable pricing for recurring revenue systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹3,50,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Repurchase tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic autoship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Product catalog</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹5,50,000</div>
              <p className="text-blue-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Advanced autoship automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹9,00,000+</div>
              <p className="text-gray-600 mb-6">Full-featured</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom subscription logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">12 months support</span>
                </li>
              </ul>
            </div>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width single-level commissions' },
              { title: 'Investment Plan MLM', href: '/investment-plan-mlm-software', desc: 'Portfolio & investment tracking' },
              { title: 'ROI Plan MLM', href: '/roi-plan-mlm-software', desc: 'Return on investment platform' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with position advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
              { title: 'E-Commerce MLM', href: '/e-commerce-plan-mlm-software', desc: 'Product-based MLM platform' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-blue-100">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-indigo-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-blue-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right MLM platform</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Repurchase Plan MLM" />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Stair Step MLM Software | Breakaway MLM Plan Software Development | EifaSoft',
    description: 'Stair Step (Breakaway) MLM software with rank progression, commission breakaway, and performance-based rewards. Custom development starts ₹4,00,000. Free demo available.',
    canonical: '/stair-step-mlm-software',
    keywords: [
      'stair step mlm software',
      'breakaway mlm software',
      'stair step breakaway plan',
      'rank progression mlm',
      'breakaway commission mlm',
      'stair step mlm plan',
      'breakaway mlm development',
      'rank based mlm software',
      'stair step mlm india',
      'breakaway plan network marketing',
      'rank advancement mlm software',
      'leadership breakaway mlm',
      'stair step compensation plan',
      'mlm rank progression software',
      'stair step mlm app',
      'stair step mlm moradabad',
      'breakaway mlm platform india',
      'performance mlm software',
      'traditional mlm plan software',
      'stair step mlm development company',
      'custom breakaway mlm software',
      'stair step plan price india'
    ],
  });
}

export default function StairStepMLMSoftware() {
  const faqs = [
    {
      question: 'What is Stair Step Breakaway MLM Plan?',
      answer: 'Stair Step Breakaway MLM plan is a performance-based compensation structure where distributors climb through ranks based on sales volume. When distributors reach specific ranks, they "break away" from their upline and receive higher commission rates. It rewards individual and team performance while maintaining generational bonuses for upline leaders.'
    },
    {
      question: 'How does the Stair Step breakaway system work?',
      answer: 'Distributors start at entry level and progress through ranks (e.g., Distributor → Supervisor → Manager → Director → Executive). Each rank requires specific sales targets. When a distributor reaches Manager or above, they break away from their sponsor and build independent teams. The original sponsor earns override/generational bonuses from the breakaway team at reduced rates.'
    },
    {
      question: 'What are typical ranks in Stair Step MLM plan?',
      answer: 'Common rank structure: Level 1: Distributor (₹50K/month sales), Level 2: Supervisor (₹1.5L/month + 2 active recruits), Level 3: Manager (₹3L/month + 5 active), Level 4: Director (₹6L/month + 10 active + 2 Managers), Level 5: Executive (₹12L/month + 20 active + 5 Directors). Each company customizes ranks and requirements based on their products and market.'
    },
    {
      question: 'What are the advantages of Stair Step MLM plan?',
      answer: 'Key advantages include: Encourages individual performance and leadership, unlimited earning potential at higher ranks, attractive for ambitious entrepreneurs, breakaway creates independence, sustainable for long-term businesses, proven model used by traditional MLM companies, clear progression path motivates distributors, and rewards both sales and team building.'
    },
    {
      question: 'What are the challenges of Stair Step MLM plan?',
      answer: 'Challenges include: Complex rank qualification rules, can be difficult to explain to new recruits, breakaway reduces upline income (potential conflict), requires consistent high sales volume, rank compression risk (downline surpassing upline), slower initial growth compared to binary plans, and requires strong training and support system.'
    },
    {
      question: 'How much does Stair Step MLM software cost?',
      answer: 'Stair Step MLM software development at EifaSoft starts from ₹4,00,000 for basic features including rank progression, breakaway logic, commission calculation, and genealogy tracking. Advanced features like mobile app, e-commerce integration, and custom rank structures can cost ₹6,00,000 to ₹15,00,000. Pricing varies based on complexity and customization requirements.'
    },
    {
      question: 'What features should Stair Step MLM software have?',
      answer: 'Essential features include: Automated rank calculation based on sales/recruits, breakaway logic and tracking, multi-level commission engine, generational bonus calculation, sales volume tracking (personal and team), rank compression handling, genealogy tree with rank display, performance reports, qualification period tracking, and re-qualification management for maintaining ranks.'
    },
    {
      question: 'Can Stair Step plan include product sales?',
      answer: 'Yes, Stair Step plan is ideal for product-based MLM businesses. It works excellently with e-commerce integration where sales volume determines rank progression. Features include: product catalog, inventory management, order tracking, autoship/subscription management, point value (PV/BV) calculation, retail vs wholesale pricing, and customer referral tracking. Many traditional MLM companies use this model.'
    },
    {
      question: 'How long does it take to develop Stair Step MLM software?',
      answer: 'Basic Stair Step MLM software development takes 6-8 weeks including rank progression logic, breakaway algorithm, commission engine, and dashboards. Complex systems with e-commerce, mobile apps, custom rank structures, and advanced analytics can take 10-14 weeks. We use agile methodology with iterative development and regular client reviews.'
    },
    {
      question: 'Does EifaSoft provide training for Stair Step MLM software?',
      answer: 'Yes, we provide comprehensive training including: Administrator training (3-5 days) for system management, commission setup, and reports; Distributor training materials (videos and guides) for using member portal; Technical documentation for developers; Live training sessions via video call; On-site training (optional, additional cost); and ongoing support via email, phone, and remote assistance.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Stair Step MLM Software Development',
    'Custom Stair Step Breakaway MLM software development with rank progression, breakaway logic, and performance-based commission automation. Complete solution for traditional MLM businesses.'
  );

  const productSchema = generateProductSchema(
    'Stair Step MLM Software',
    'Cloud-based Stair Step MLM software with automated rank calculation, breakaway tracking, and generational bonus management. Includes e-commerce and mobile app.',
    '400000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Stair Step MLM Software', url: '/stair-step-mlm-software' }
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Stair Step MLM Software',
    description: 'Professional Stair Step Breakaway MLM software with rank progression, breakaway logic, generational bonuses, and performance-based commission automation for network marketing.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '400000',
    rating: 4.6,
    reviewCount: 72,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Stair Step MLM Software"
        subtitle="Breakaway MLM Plan Development"
        description="Launch your Stair Step Breakaway MLM business with powerful rank-based software. Automated breakaway logic, performance tracking, and commission automation starting ₹4,00,000."
        gradient="purple"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Stair Step MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Stair Step MLM Software</strong> (also known as Breakaway MLM Software) is a performance-based network marketing platform where distributors climb through ranks based on sales volume and team building. When distributors reach specific ranks, they &quot;break away&quot; from their upline to build independent organizations while the original sponsor earns generational override bonuses. This proven model rewards leadership and sustained performance.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Rank Progression</p>
                  <p className="text-sm text-gray-600">Climb from Distributor to Executive level</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Breakaway System</p>
                  <p className="text-sm text-gray-600">Build independent teams at higher ranks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Generational Overrides</p>
                  <p className="text-sm text-gray-600">Earn from breakaway team performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹4,00,000</p>
                  <p className="text-sm text-gray-600">Business package with e-commerce at ₹7,00,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Stair Step MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Stair Step Breakaway MLM Plan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance-based compensation structure where distributors climb ranks and break away to build independent organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Breakaway Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Start at Entry Level</h4>
                    <p className="text-gray-600">Join as Distributor, earn basic commission on sales</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Climb Through Ranks</h4>
                    <p className="text-gray-600">Meet sales targets and recruitment goals to advance ranks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Break Away</h4>
                    <p className="text-gray-600">Reach Manager rank, break from sponsor, build independent team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Earn Overrides</h4>
                    <p className="text-gray-600">Original sponsor earns generational bonuses from breakaway team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Rank Progression</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-300">
                  <div className="font-semibold text-gray-900">Level 1: Distributor</div>
                  <div className="text-sm text-gray-600">₹50K/month sales | 20% commission</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-300">
                  <div className="font-semibold text-gray-900">Level 2: Supervisor</div>
                  <div className="text-sm text-gray-600">₹1.5L/month + 2 active | 25% commission</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="font-semibold text-gray-900">Level 3: Manager ⚡ Breakaway</div>
                  <div className="text-sm text-gray-600">₹3L/month + 5 active | 30% commission</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="font-semibold text-gray-900">Level 4: Director</div>
                  <div className="text-sm text-gray-600">₹6L/month + 2 Managers | 35% + overrides</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-700">
                  <div className="font-semibold text-gray-900">Level 5: Executive</div>
                  <div className="text-sm text-gray-600">₹12L/month + 5 Directors | 40% + overrides</div>
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
              Stair Step Income Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Multiple earning streams based on performance and rank
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retail Profit</h3>
              <p className="text-gray-600 mb-3">Earn difference between wholesale and retail price</p>
              <div className="text-sm text-purple-600 font-semibold">Example: 20-40% margin on products</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Commission</h3>
              <p className="text-gray-600 mb-3">Commission on personal sales volume</p>
              <div className="text-sm text-blue-600 font-semibold">20-40% based on rank</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Bonus</h3>
              <p className="text-gray-600 mb-3">Earn on non-breakaway downline sales</p>
              <div className="text-sm text-green-600 font-semibold">5-15% on team volume</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Generational Override</h3>
              <p className="text-gray-600 mb-3">Earn from breakaway teams (multiple generations)</p>
              <div className="text-sm text-orange-600 font-semibold">1st: 5%, 2nd: 3%, 3rd: 2%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">5</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">One-time bonuses for reaching new ranks</p>
              <div className="text-sm text-pink-600 font-semibold">₹10K - ₹5L per rank</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">6</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Pool</h3>
              <p className="text-gray-600 mb-3">Share of company profit pool for top leaders</p>
              <div className="text-sm text-indigo-600 font-semibold">Directors and above</div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stair Step MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced features for managing breakaway compensation plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Breakaway logic engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Sales volume tracking (PV/BV)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-tier commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Generational override tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank compression handling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Product catalog management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Autoship/subscription</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Inventory tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Customer management</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Genealogy tree with ranks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Re-qualification management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-currency support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom rank configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stair Step MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for breakaway MLM software development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹4,00,000</div>
              <p className="text-gray-600 mb-6">Essential features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Breakaway automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Member dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-3xl font-bold mb-4">₹7,00,000</div>
              <p className="text-purple-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹12,00,000+</div>
              <p className="text-gray-600 mb-6">Full-featured</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom rank structures</span>
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

      {/* Why Choose EifaSoft */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft for Stair Step MLM Software?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">15+</div>
              <h3 className="font-bold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">in MLM software development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">500+</div>
              <h3 className="font-bold text-gray-900 mb-2">Projects Delivered</h3>
              <p className="text-gray-600">successful MLM deployments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">24/7</div>
              <h3 className="font-bold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600">technical assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">100%</div>
              <h3 className="font-bold text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-600">tailored to your needs</p>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-powered MLM' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-purple-100">
                <h3 className="text-purple-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Stair Step MLM" />
    </>
  );
}

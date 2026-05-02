import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Single Leg MLM Software | Monoline MLM Plan Software Development | EifaSoft',
    description: 'Single Leg (Monoline) MLM software with linear placement, automatic spillover, and fast growth. Perfect for viral marketing campaigns. Custom development starts ₹3,50,000. Free demo available.',
    canonical: '/single-leg-mlm-software',
    keywords: [
      'single leg mlm software',
      'monoline mlm software',
      'linear mlm plan',
      'single line mlm software',
      'monoline compensation plan',
      'linear placement mlm',
      'single leg mlm plan',
      'monoline mlm development',
      'single leg mlm india',
      'monoline network marketing',
      'single queue mlm software',
      'single leg spillover mlm',
      'monoline mlm platform',
      'viral mlm software',
      'single leg mlm app',
      'single leg mlm moradabad',
      'mlm linear plan india',
      'single leg compensation software',
      'monoline plan development company',
      'affordable single leg mlm',
      'single leg mlm software price',
      'custom single leg mlm'
    ],
  });
}

export default function SingleLegMLMSoftware() {
  const faqs = [
    {
      question: 'What is Single Leg (Monoline) MLM Plan?',
      answer: 'Single Leg or Monoline MLM plan is a linear compensation structure where all members are placed in a single line, one after another. New members automatically join at the end of the line, creating a "first come, first served" system. Everyone benefits from spillover regardless of who recruited them.'
    },
    {
      question: 'How does the Single Leg MLM compensation work?',
      answer: 'Distributors earn commissions based on their position in the single line. Common income types include: Direct Referral Bonus (for personally recruited members), Level Commissions (from members placed below you in the line), Matching Bonus (percentage of downline earnings), and Rank Achievement Bonuses. The further down the line you are from the top, the more members are placed below you through spillover.'
    },
    {
      question: 'What are the advantages of Single Leg MLM plan?',
      answer: 'Key advantages include: Maximum spillover benefit (everyone placed below you regardless of sponsor), simple structure (easy to understand and explain), viral growth potential (motivates quick joining), no balancing required (unlike binary plans), encourages teamwork (everyone benefits from growth), and attractive for new members (guaranteed spillover placement).'
    },
    {
      question: 'What are the risks of Single Leg MLM plan?',
      answer: 'Challenges include: Early members have massive advantage, late joiners may feel disadvantaged, requires continuous recruitment to sustain, can be perceived as pyramid scheme if not product-focused, spillover benefit decreases as line grows longer, and requires strong retention strategies to prevent dropout.'
    },
    {
      question: 'How much does Single Leg MLM software cost?',
      answer: 'Single Leg MLM software development at EifaSoft starts from ₹3,50,000 for basic features including automated linear placement, commission calculation, spillover tracking, and member dashboard. Advanced features like mobile app, payment gateway integration, and e-commerce can cost ₹5,00,000 to ₹12,00,000. We offer flexible pricing based on your requirements.'
    },
    {
      question: 'What features should Single Leg MLM software have?',
      answer: 'Essential features include: Automatic linear placement system, real-time spillover notifications, position tracking in the line, multi-level commission calculation, referral bonus automation, rank progression tracking, member genealogy view (linear tree), payout management, e-wallet integration, mobile responsive dashboard, and detailed earning reports.'
    },
    {
      question: 'Can Single Leg plan be combined with other MLM plans?',
      answer: 'Yes, Single Leg can be combined with other plans in a hybrid model. Common combinations include Single Leg + Binary (spillover from monoline feeds binary team), Single Leg + Unilevel (linear placement with level commissions), or Single Leg + Matrix (limited width monoline). Hybrid plans leverage benefits of multiple structures.'
    },
    {
      question: 'How long does it take to develop Single Leg MLM software?',
      answer: 'Basic Single Leg MLM software development takes 4-6 weeks including linear placement algorithm, commission engine, and member portal. Complex systems with mobile apps, payment integration, e-commerce, and advanced features can take 8-12 weeks. We follow agile methodology with regular updates and demos throughout development.'
    },
    {
      question: 'Is Single Leg MLM plan legal in India?',
      answer: 'Single Leg MLM plan is legal in India if it complies with Consumer Protection (Direct Selling) Rules, 2021 and Prize Chits and Money Circulation Schemes (Banning) Act, 1978. The business must focus on genuine product sales (not just recruitment), avoid entry fees without products, provide clear terms, and ensure no pyramid scheme characteristics. Legal consultation is recommended.'
    },
    {
      question: 'Does EifaSoft provide support after Single Leg MLM software deployment?',
      answer: 'Yes, we provide comprehensive post-deployment support including 3-6 months free technical support, bug fixes and updates, server maintenance assistance, training for administrators, documentation and user guides, and optional Annual Maintenance Contract (AMC) starting ₹50,000/year for ongoing support, updates, and feature enhancements.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Single Leg MLM Software Development',
    'Custom Single Leg (Monoline) MLM software development with linear placement, automatic spillover tracking, and commission automation. Complete solution for viral marketing campaigns.'
  );

  const productSchema = generateProductSchema(
    'Single Leg MLM Software',
    'Cloud-based Single Leg MLM software with automated linear placement, spillover notifications, and real-time commission calculation. Includes mobile app and payment integration.',
    '350000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Single Leg MLM Software', url: '/single-leg-mlm-software' }
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Single Leg MLM Software',
    description: 'Professional Single Leg (Monoline) MLM software with linear placement, automatic spillover tracking, position counter, and commission automation for viral network marketing campaigns.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '350000',
    rating: 4.6,
    reviewCount: 78,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Single Leg MLM Software"
        subtitle="Monoline MLM Plan Development"
        description="Launch your Single Leg (Monoline) MLM business with powerful linear placement software. Automatic spillover, viral growth tracking, and commission automation starting ₹3,50,000."
        gradient="blue"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is Single Leg MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Single Leg MLM Software</strong> (also known as Monoline MLM Software) is a linear network marketing platform where all members are placed in a single vertical line, one after another. New members automatically join at the end of the line, creating maximum spillover benefit—everyone above in the line benefits from every new member added. This &quot;first come, first served&quot; structure encourages quick joining and team collaboration.
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
                  <p className="font-semibold text-gray-900">Linear Placement</p>
                  <p className="text-sm text-gray-600">All members in single vertical line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Maximum Spillover</p>
                  <p className="text-sm text-gray-600">Everyone benefits from new members</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Simple Structure</p>
                  <p className="text-sm text-gray-600">Easy to understand and explain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,50,000</p>
                  <p className="text-sm text-gray-600">Professional with mobile app at ₹5,50,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Single Leg MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Single Leg (Monoline) MLM Plan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Single Leg or Monoline MLM plan places all distributors in a single linear line, creating maximum spillover benefit for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Structure</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Linear Placement</h4>
                    <p className="text-gray-600">All members placed in single vertical line, one after another</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Automatic Spillover</h4>
                    <p className="text-gray-600">New members automatically benefit everyone above in the line</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">First Come Advantage</h4>
                    <p className="text-gray-600">Earlier joiners benefit from all subsequent member additions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team Motivation</h4>
                    <p className="text-gray-600">Everyone works together as growth benefits the entire line</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Single Leg Structure</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">Member 1 (Founder)</div>
                <div className="pl-4">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">↓ Member 2</div>
                </div>
                <div className="pl-8">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-400">↓ Member 3</div>
                </div>
                <div className="pl-12">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-300">↓ Member 4</div>
                </div>
                <div className="pl-16">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-200">↓ Member 5</div>
                </div>
                <div className="pl-20">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-100">↓ ... continues</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                All members placed in single line, each benefits from everyone below
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Single Leg Income Types
            </h2>
            <p className="text-xl text-gray-600">
              Multiple earning opportunities in the monoline structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Referral</h3>
              <p className="text-gray-600 mb-3">Earn commission on personally recruited members</p>
              <div className="text-sm text-blue-600 font-semibold">Typical: ₹500 - ₹5,000 per referral</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Level Commission</h3>
              <p className="text-gray-600 mb-3">Earn from members placed below you in line</p>
              <div className="text-sm text-green-600 font-semibold">Example: 5% Level 1-5, 3% Level 6-10</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spillover Bonus</h3>
              <p className="text-gray-600 mb-3">Special bonus when downline reaches milestones</p>
              <div className="text-sm text-purple-600 font-semibold">Example: ₹1,000 per 100 spillovers</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">Bonuses for reaching position milestones</p>
              <div className="text-sm text-orange-600 font-semibold">Example: ₹50K at position 1000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Single Leg MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features for managing monoline MLM business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Automatic linear placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time spillover tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Position counter in line</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-level commission engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Member genealogy view</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Spillover notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Rank progression system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payout management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Detailed earning reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Admin dashboard</span>
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
              Single Leg MLM Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹3,50,000</div>
              <p className="text-gray-600 mb-6">Perfect for startups</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Linear placement system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Commission automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Member dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic reports</span>
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
              <p className="text-blue-100 mb-6">Most popular choice</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹8,50,000+</div>
              <p className="text-gray-600 mb-6">For large businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Dedicated support</span>
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Autopool Plan', href: '/autopool-plan-mlm-software', desc: 'Automatic pooling cycler system' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Find the right compensation structure</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Single Leg MLM" />
    </>
  );
}

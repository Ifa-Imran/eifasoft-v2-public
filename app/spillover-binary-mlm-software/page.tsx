import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Spillover Binary MLM Software | Binary MLM Plan with Spillover | EifaSoft',
    description: 'Spillover Binary MLM software with advanced spillover distribution, team balancing, and automated placement. Perfect for viral growth. Custom development starts ₹3,00,000. Free demo available.',
    canonical: '/spillover-binary-mlm-software',
    keywords: [
      'spillover binary mlm software',
      'binary mlm with spillover',
      'spillover mlm plan',
      'binary spillover software',
      'automatic placement mlm',
      'spillover binary plan',
      'binary mlm spillover logic',
      'team spillover mlm',
      'spillover binary mlm india',
      'auto spillover mlm software',
      'binary plan spillover development',
      'spillover network marketing',
      'smart spillover mlm',
      'binary mlm spillover app',
      'spillover binary mlm moradabad',
      'mlm spillover system',
      'viral spillover mlm software',
      'spillover binary plan price',
      'spillover mlm development company',
      'advanced spillover mlm',
      'spillover binary compensation plan',
      'custom spillover mlm software'
    ],
  });
}

export default function SpilloverBinaryMLMSoftware() {
  const faqs = [
    {
      question: 'What is Spillover Binary MLM Plan?',
      answer: 'Spillover Binary MLM plan is a variation of the traditional Binary plan where excess recruits from upline members automatically "spill over" into downline positions. When a member recruits more than 2 people, the additional recruits are placed under their existing downline members, creating a spillover effect that benefits the entire team. This encourages teamwork and helps new members build their teams faster.'
    },
    {
      question: 'How does spillover work in Binary MLM?',
      answer: 'In spillover binary, when you recruit your 3rd member (after filling left and right positions), that member is automatically placed under one of your existing downline members based on spillover rules. Common placement strategies: fill weaker leg first, alternate between legs, or place in power leg. The spillover continues down multiple levels, helping new and less active members benefit from upline efforts.'
    },
    {
      question: 'What are spillover placement strategies?',
      answer: 'Common strategies include: 1) Weaker Leg Fill - place spillover in the leg with fewer members to maintain balance, 2) Power Leg Fill - place all spillover in one leg to maximize matching bonus, 3) Alternate Placement - alternate between left and right for balanced growth, 4) First Available - place in the first empty position from top to bottom. Companies can customize spillover logic based on compensation plan design.'
    },
    {
      question: 'What are the benefits of spillover in Binary MLM?',
      answer: 'Key benefits include: Helps new members build teams quickly without recruiting, encourages upline to recruit more (benefits everyone), creates strong team unity and cooperation, reduces pressure on weak recruiters, faster network growth through viral effect, motivates active members to keep recruiting, and provides passive team building for members focused on sales rather than recruitment.'
    },
    {
      question: 'What are the challenges of spillover Binary plan?',
      answer: 'Challenges include: Can create dependency on upline (reduced personal effort), spillover placement disputes if not transparent, members may expect spillover without working, power leg can become too large (harder to balance), requires sophisticated software for fair distribution, and potential confusion about who gets credit for recruits. Clear spillover rules and transparency are essential.'
    },
    {
      question: 'How much does Spillover Binary MLM software cost?',
      answer: 'Spillover Binary MLM software development at EifaSoft starts from ₹3,00,000 for basic features including spillover logic, binary tree, commission calculation, and member dashboard. Advanced features like intelligent spillover algorithms, mobile app, and e-commerce integration can cost ₹5,00,000 to ₹10,00,000. Pricing depends on spillover complexity and custom requirements.'
    },
    {
      question: 'What features should Spillover Binary software have?',
      answer: 'Essential features include: Configurable spillover placement rules (weaker leg, power leg, alternate), real-time spillover notifications, binary tree visualization showing spillover path, spillover tracking and reports, team balancing automation, matching bonus calculation with spillover, spillover credit tracking (who brought the member), genealogy view with spillover indicators, and admin controls for spillover settings.'
    },
    {
      question: 'Can spillover be limited or controlled?',
      answer: 'Yes, companies can implement spillover limits like: Maximum spillover depth (e.g., only 5 levels deep), spillover caps per member (max 10 spillovers), qualification requirements (must be active to receive spillover), spillover expiry (spillover only for first 90 days), or purchase requirements (must maintain monthly purchase). These controls prevent abuse and encourage personal effort while maintaining spillover benefits.'
    },
    {
      question: 'How long does Spillover Binary software development take?',
      answer: 'Basic Spillover Binary MLM software takes 4-6 weeks including spillover logic, binary tree, and commission calculation. Complex systems with advanced spillover algorithms, mobile apps, e-commerce integration, and custom rules can take 8-12 weeks. We use agile development with regular demos to ensure spillover logic works exactly as designed. Testing phase is critical for spillover accuracy.'
    },
    {
      question: 'Does EifaSoft provide spillover testing and simulation?',
      answer: 'Yes, we provide comprehensive testing including: Spillover simulation tools to test placement logic before launch, test accounts with various scenarios, spillover report verification, edge case testing (simultaneous registrations, deep spillovers), performance testing (spillover calculation speed), and training on monitoring spillover distribution. We ensure spillover works fairly and transparently for all members.'
    }
  ];

  const serviceSchema = generateServiceSchema(
    'Spillover Binary MLM Software Development',
    'Custom Spillover Binary MLM software with intelligent spillover distribution, automated placement, and team balancing. Complete solution for viral network marketing growth.'
  );

  const productSchema = generateProductSchema(
    'Spillover Binary MLM Software',
    'Cloud-based Spillover Binary MLM software with configurable spillover rules, real-time notifications, and advanced team tracking. Includes mobile app and payment integration.',
    '300000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Spillover Binary MLM Software', url: '/spillover-binary-mlm-software' }
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Spillover Binary MLM Software',
    description: 'Advanced Spillover Binary MLM software with intelligent spillover distribution, automatic placement, team balancing, and viral growth tracking for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '300000',
    rating: 4.7,
    reviewCount: 85,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Spillover Binary MLM Software"
        subtitle="Binary MLM with Smart Spillover Distribution"
        description="Launch your Spillover Binary MLM business with intelligent spillover automation. Real-time placement, team balancing, and viral growth tracking starting ₹3,00,000."
        gradient="green"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">What is Spillover Binary MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Spillover Binary MLM Software</strong> is a specialized network marketing platform that implements the binary compensation structure with automatic spillover placement. When a member recruits more than 2 people (exceeding the binary structure&apos;s two-leg limit), excess recruits automatically &quot;spill over&quot; into downline positions. This creates team-wide benefits where upline recruiting efforts help build downline teams, encouraging collaboration and faster network growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Automatic Spillover</p>
                  <p className="text-sm text-gray-600">Excess recruits auto-place in downline positions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Team Collaboration</p>
                  <p className="text-sm text-gray-600">Upline efforts benefit entire downline team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Smart Placement Rules</p>
                  <p className="text-sm text-gray-600">Weaker leg, power leg, or alternate strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,00,000</p>
                  <p className="text-sm text-gray-600">Professional package with mobile app at ₹5,00,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spillover Binary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Spillover Binary MLM Plan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Binary compensation structure with automatic spillover placement that benefits the entire team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Spillover Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Binary Structure</h4>
                    <p className="text-gray-600">Each member can have max 2 direct downline (left & right leg)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Excess Recruits</h4>
                    <p className="text-gray-600">3rd, 4th, 5th... recruits automatically spillover to downline</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Smart Placement</h4>
                    <p className="text-gray-600">System places spillover based on rules (weaker leg, power leg, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team Benefit</h4>
                    <p className="text-gray-600">Downline members receive spillover from upline recruiting efforts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Spillover Placement</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded border-l-4 border-green-600">
                  <div className="font-semibold">You (John)</div>
                  <div className="text-gray-600">Recruited: Alice, Bob, Charlie, David</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pl-4">
                  <div className="bg-white p-3 rounded border-l-4 border-green-500">
                    <div className="font-semibold">Left Leg</div>
                    <div className="text-gray-600">Alice (your recruit)</div>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-green-500">
                    <div className="font-semibold">Right Leg</div>
                    <div className="text-gray-600">Bob (your recruit)</div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <div className="font-semibold">⚡ Spillover</div>
                  <div className="text-gray-600">Charlie → Placed under Alice (weaker leg)</div>
                  <div className="text-gray-600">David → Placed under Bob (balancing)</div>
                </div>
                <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
                  ✓ Alice & Bob benefit from your spillover without recruiting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spillover Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spillover Placement Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right spillover logic for your compensation plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weaker Leg Fill</h3>
              <p className="text-gray-600 mb-3">Place spillover in leg with fewer members</p>
              <div className="text-sm text-green-600 font-semibold">Best for: Balanced growth</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">💪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Power Leg Fill</h3>
              <p className="text-gray-600 mb-3">Place all spillover in designated power leg</p>
              <div className="text-sm text-blue-600 font-semibold">Best for: Maximizing bonuses</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">↔️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Alternate</h3>
              <p className="text-gray-600 mb-3">Alternate spillover between left and right</p>
              <div className="text-sm text-purple-600 font-semibold">Best for: Fairness</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">First Available</h3>
              <p className="text-gray-600 mb-3">Fill first empty position from top-down</p>
              <div className="text-sm text-orange-600 font-semibold">Best for: Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spillover Binary Income Types
            </h2>
            <p className="text-xl text-gray-600">
              Earn from direct efforts and team spillover
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Referral Bonus</h3>
              <p className="text-gray-600 mb-3">Earn commission on personally recruited members</p>
              <div className="text-sm text-green-600 font-semibold">Typical: ₹500 - ₹2,000 per recruit</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Binary Matching Bonus</h3>
              <p className="text-gray-600 mb-3">Earn percentage of weaker leg sales (including spillover)</p>
              <div className="text-sm text-blue-600 font-semibold">Example: 10% of weaker leg volume</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spillover Bonus</h3>
              <p className="text-gray-600 mb-3">Special bonus for spillover members in your team</p>
              <div className="text-sm text-purple-600 font-semibold">Example: ₹100 per spillover received</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rank Achievement</h3>
              <p className="text-gray-600 mb-3">Bonuses for reaching team milestones with spillover</p>
              <div className="text-sm text-orange-600 font-semibold">Example: ₹25K at 100 team members</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Matching Bonus</h3>
              <p className="text-gray-600 mb-3">Earn percentage of direct referral earnings</p>
              <div className="text-sm text-teal-600 font-semibold">Example: 5-10% of level 1 earnings</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Pool</h3>
              <p className="text-gray-600 mb-3">Share company profit pool based on spillover team size</p>
              <div className="text-sm text-yellow-600 font-semibold">For top performers only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spillover Binary Software Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced spillover automation and tracking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spillover Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Configurable spillover rules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Real-time spillover notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Spillover path visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Spillover credit tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Team balancing automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Binary tree with spillover indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Matching bonus calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Leg volume tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">E-wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Payout management</span>
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
                  <span className="text-gray-700">Spillover simulation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Analytics & reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-language support</span>
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
              Spillover Binary Software Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable pricing with powerful spillover automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹3,00,000</div>
              <p className="text-gray-600 mb-6">Essential spillover features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Basic spillover logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Binary tree visualization</span>
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

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹5,00,000</div>
              <p className="text-green-100 mb-6">Most popular</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>Advanced spillover rules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹8,00,000+</div>
              <p className="text-gray-600 mb-6">Full customization</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom spillover algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Dedicated support team</span>
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Spillover Binary MLM" />
    </>
  );
}

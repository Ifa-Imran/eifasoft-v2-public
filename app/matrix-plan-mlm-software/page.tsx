import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Matrix Plan MLM Software | Best Forced Matrix MLM Software Development | EifaSoft',
    description: 'Best Matrix Plan MLM Software with customizable forced matrix structure (3x5, 2x12, 4x7, 5x5). Forced matrix compensation plan with automatic spillover, level commissions, team building, and automated commission calculations. Starting ₹1,50,000. Mobile apps and e-wallet included.',
    canonical: '/matrix-plan-mlm-software',
    keywords: [
      'matrix plan MLM software',
      'matrix MLM software',
      'forced matrix MLM',
      'forced matrix MLM software',
      'matrix compensation plan',
      'matrix MLM software development',
      '3x3 matrix MLM software',
      '3x5 matrix plan',
      '2x12 matrix software',
      '4x7 matrix MLM software',
      '5x5 matrix software',
      '5x7 matrix software',
      'matrix network marketing software',
      'matrix plan commission',
      'matrix MLM app',
      'affordable matrix MLM software',
      'best matrix MLM software',
      'custom matrix MLM development',
      'matrix MLM india',
      'matrix level commission',
      'cycler matrix MLM',
      'cycling matrix MLM',
      'matrix compensation calculator',
      'matrix plan software price',
      'forced matrix india',
      'matrix plan development company',
      'revolving matrix software',
      'width x depth control',
      'forced spillover MLM',
      'matrix genealogy tree',
      'matrix MLM e-wallet',
      'matrix MLM mobile app',
      'matrix MLM software with source code',
      'board MLM compensation plan',
      'matrix MLM free demo'
    ],
  });
}

export default function MatrixPlanMLMSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'Matrix Plan MLM Software Development',
    'Professional Matrix Plan MLM software with forced matrix structure, customizable width and depth, spillover system, and multi-level commission calculations.',
    'https://www.eifasoft.com/matrix-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Matrix Plan MLM Software',
    'Complete Matrix MLM software with customizable matrix dimensions and commission structure',
    '150000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Matrix MLM Software',
    description: 'Specialized Matrix Plan MLM software with forced matrix structure, customizable dimensions (3x5, 2x12, 4x7), automatic spillover, level-based commissions, and team building features.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '150000',
    rating: 4.8,
    reviewCount: 85,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
    'article p:first-of-type',
  ]);

  const faqs = [
    {
      question: 'What is Matrix Plan in MLM and how does it work?',
      answer: 'Matrix Plan (also called Forced Matrix) is an MLM compensation structure with a fixed width and depth, such as 3x5 (3 wide, 5 levels deep) or 2x12. Each member can sponsor a limited number of direct recruits (width), and the network extends to a specific number of levels (depth). When your frontline positions are filled, new recruits "spillover" to lower levels automatically. For example, in a 3x5 matrix, you can have 3 direct members, and the network extends 5 levels deep, accommodating up to 363 total members in your downline.',
    },
    {
      question: 'What are the advantages of Matrix Plan MLM Software?',
      answer: 'Matrix Plan offers unique benefits: 1) Limited width encourages teamwork and spillover, 2) Automatic spillover helps everyone build their downline, 3) Fixed structure is easy to understand and explain, 4) Depth limit keeps the organization manageable, 5) Faster filling of positions compared to unlimited-width plans, 6) Guaranteed spillover benefits for early joiners, 7) Compressed network creates stronger team bonds. It combines the spillover advantage of Binary with the multi-level earning potential of Unilevel.',
    },
    {
      question: 'How are commissions calculated in Matrix Plan?',
      answer: 'Matrix Plan typically uses level-based commissions. Common structures include: 1) Level Commission - fixed percentage for each level (e.g., Level 1: 10%, Level 2: 8%, Level 3: 6%), 2) Matching Bonus - percentage of downline earnings, 3) Rank Achievement Bonus - rewards for filling matrix levels, 4) Sponsor Bonus - direct referral bonus, 5) Fast Start Bonus - bonus for quick recruiting. Our software supports all commission types with real-time calculations and allows you to customize percentages for each matrix level.',
    },
    {
      question: 'What matrix dimensions can I configure (3x5, 2x12, etc.)?',
      answer: 'Our Matrix Plan software is fully flexible and supports any matrix configuration: Popular options include 2x2, 2x12, 3x5, 3x7, 3x9, 4x7, 5x5, and more. You can customize both width (number of frontline positions) and depth (number of levels). The software automatically calculates total positions, spillover rules, and commission structures based on your chosen matrix. You can even run multiple matrix types simultaneously for different products or membership levels.',
    },
    {
      question: 'What is the cost of Matrix Plan MLM Software?',
      answer: 'Matrix Plan MLM Software pricing starts from ₹1,50,000 for basic features with standard matrix configurations, up to 5,000 members, and essential commission calculations. Advanced packages (₹3,00,000 - ₹6,00,000) include mobile apps, multiple matrix support, e-commerce integration, and unlimited members. Enterprise solutions with blockchain, AI analytics, and custom features cost ₹6,00,000+. All packages include source code, installation, training, and 6-12 months support with flexible payment options available.',
    },
    {
      question: 'Can I customize the Matrix Plan software for my business needs?',
      answer: 'Absolutely! Our Matrix Plan software is 100% customizable: 1) Matrix dimensions (width x depth), 2) Commission rates per level, 3) Spillover rules and placement logic, 4) Joining packages and pricing, 5) Rank advancement criteria, 6) Bonus structures and incentives, 7) Branding (logo, colors, domain), 8) Custom fields and reports, 9) Integration with payment gateways, SMS, email, 10) Multi-language and multi-currency support. We provide both configuration tools and source code access for complete flexibility.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'MLM Software', url: 'https://www.eifasoft.com/mlm-software-development-company' },
    { name: 'Matrix Plan', url: 'https://www.eifasoft.com/matrix-plan-mlm-software' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Matrix Plan MLM Software - Best Forced Matrix Network Marketing Solution"
        subtitle="Forced Matrix Compensation Plan | 3x5, 2x12, 4x7 Configurations | Automatic Spillover"
        description="Launch your Matrix MLM network with powerful forced matrix software. Customizable matrix dimensions (3x5, 2x12, 4x7), automatic spillover, multi-level commissions, and team building features. Starting ₹1,50,000."
        gradient="blue"
      />

      {/* What is Matrix Plan - Definition for AI Overviews */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Matrix Plan MLM?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Matrix Plan MLM</strong> (also known as Forced Matrix) is a network marketing compensation structure with a fixed width and depth, such as 3x5 or 2x12. Each distributor can only sponsor a limited number of frontline members (width), creating a structured network. When frontline positions are filled, new recruits automatically &quot;spill over&quot; into lower levels. This creates a team-building environment where upline members help fill downline positions, making Matrix Plan popular for community-focused MLM businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways for AI Extraction */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Fixed width x depth structure (e.g., 3x5, 2x12, 4x7)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Automatic spillover fills downline positions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pricing starts at ₹1,50,000 for Basic Matrix
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Level-based commissions with customizable rates
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Supports multiple matrix configurations
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Re-entry system for continuous earnings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Matrix Plan Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Matrix Plan MLM Works</h2>
              <p className="text-lg text-gray-600">
                Fixed width and depth structure with automatic spillover for team building
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Matrix Structure (3x5 Example)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Width = 3</p>
                      <p className="text-gray-600 text-sm">Maximum 3 direct frontline members per person</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Depth = 5</p>
                      <p className="text-gray-600 text-sm">Network extends to 5 levels deep</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">3</span>
                    <div>
                      <p className="font-semibold">Forced Spillover</p>
                      <p className="text-gray-600 text-sm">4th recruit automatically goes to next available position below</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">4</span>
                    <div>
                      <p className="font-semibold">Total Positions</p>
                      <p className="text-gray-600 text-sm">Up to 363 members in complete 3x5 matrix</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">YOU</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Level 1 (3 positions)</div>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">A</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">B</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">C</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Level 2 (9 positions)</div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">1</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">2</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">3</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">4</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">5</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">6</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">7</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">8</div>
                    <div className="bg-blue-400 text-white px-1 py-1 rounded text-xs">9</div>
                  </div>
                  <p className="text-xs text-gray-600 italic mt-4">+ Levels 3, 4, 5 continue below...</p>
                  <p className="text-xs font-bold text-blue-600 mt-2">Total: 363 positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Matrix Configurations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Matrix Configurations</h2>
            <p className="text-lg text-gray-600">
              Choose the matrix structure that fits your business model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                matrix: '3x5 Matrix',
                width: 3,
                depth: 5,
                totalPositions: 363,
                description: 'Balanced structure with moderate width and good depth for sustainable growth',
                bestFor: 'Most MLM businesses, product-based companies',
              },
              {
                matrix: '2x12 Matrix',
                width: 2,
                depth: 12,
                totalPositions: 4095,
                description: 'Narrow width with deep levels, creates strong spillover benefits',
                bestFor: 'Service-based MLM, high-ticket products',
              },
              {
                matrix: '4x7 Matrix',
                width: 4,
                depth: 7,
                totalPositions: 5461,
                description: 'Wider structure allowing more direct recruits with good depth',
                bestFor: 'Large teams, fast-growing networks',
              },
            ].map((config) => (
              <div key={config.matrix} className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{config.matrix}</h3>
                <div className="mb-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Width:</span> {config.width} positions</p>
                  <p className="text-sm"><span className="font-semibold">Depth:</span> {config.depth} levels</p>
                  <p className="text-sm"><span className="font-semibold">Total:</span> {config.totalPositions.toLocaleString()} positions</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{config.description}</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-600">Best For:</p>
                  <p className="text-sm text-gray-700">{config.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Matrix Plan Software Features</h2>
            <p className="text-lg text-gray-600">
              Comprehensive features for managing your matrix MLM network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: 'Flexible Matrix Configuration', description: 'Set any width x depth combination (2x2 to 10x20+)', icon: '⚙️' },
              { feature: 'Automatic Spillover', description: 'Smart placement when frontline positions are filled', icon: '🔄' },
              { feature: 'Level-Based Commissions', description: 'Different commission rates for each matrix level', icon: '💰' },
              { feature: 'Matrix Visualization', description: 'Visual tree showing complete matrix structure', icon: '🌳' },
              { feature: 'Position Tracking', description: 'Track filled and empty positions in real-time', icon: '📊' },
              { feature: 'Rank Advancement', description: 'Automatic rank progression based on matrix completion', icon: '🏆' },
              { feature: 'Matching Bonus', description: 'Earn from downline member commissions', icon: '🎯' },
              { feature: 'Re-Entry System', description: 'Members can re-enter after matrix completion', icon: '🔁' },
              { feature: 'Compressed Reporting', description: 'Detailed reports on matrix status and earnings', icon: '📈' },
            ].map((item) => (
              <div key={item.feature} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.feature}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Matrix Plan MLM Software Pricing</h2>
            <p className="text-lg text-gray-600">
              Affordable packages for all matrix configurations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Matrix',
                price: '₹1,50,000',
                features: [
                  'Single matrix configuration',
                  'Up to 5,000 members',
                  'Level commissions (up to 5 levels)',
                  'Basic admin panel',
                  'E-wallet integration',
                  'Matrix visualization',
                  '6 months support',
                  'Source code included',
                ],
                popular: false,
              },
              {
                name: 'Advanced Matrix',
                price: '₹3,00,000',
                features: [
                  'Multiple matrix types',
                  'Up to 25,000 members',
                  'Unlimited level commissions',
                  'Advanced admin features',
                  'Mobile responsive',
                  'E-commerce integration',
                  'Re-entry system',
                  '12 months support',
                  'Free updates',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Matrix',
                price: 'Custom',
                features: [
                  'Unlimited members',
                  'Custom matrix dimensions',
                  'Mobile apps (iOS/Android)',
                  'Multi-currency support',
                  'Blockchain integration',
                  'AI analytics',
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
                  plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</div>
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Related MLM Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Other MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare Matrix Plan with other MLM software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
            {[
              { name: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure' },
              { name: 'Spillover Binary MLM', href: '/spillover-binary-plan-mlm-software', desc: 'Auto-fill binary' },
              { name: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width' },
              { name: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Generational bonus' },
              { name: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix' },
              { name: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Custom combinations' },
              { name: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Home-based selling' },
              { name: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-based' }
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/mlm-software" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Complete MLM Software</h3>
              <p className="text-blue-100">All-in-one solution</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">MLM Software Pricing</h3>
              <p className="text-green-100">Transparent pricing</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Compare MLM Software</h3>
              <p className="text-purple-100">Feature comparison</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your Matrix MLM Network Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Build a powerful forced matrix network with our proven software solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/mlm-software-price"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Matrix Plan MLM Software</h2>
              <p className="text-lg text-gray-600">
                Contact us for a customized matrix MLM solution
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

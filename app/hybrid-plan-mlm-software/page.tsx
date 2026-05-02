import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Hybrid Plan MLM Software | Best Multi-Plan MLM Software | Custom MLM Plan | EifaSoft',
    description: 'Best Hybrid Plan MLM Software combining Binary, Unilevel, Matrix, and Generation plans. Custom MLM plan software with mixed compensation plan, multi-plan benefits, and flexible commissions. Unique business model support. Starting ₹3,00,000.',
    canonical: '/hybrid-plan-mlm-software',
    keywords: [
      'hybrid plan MLM software',
      'hybrid MLM software',
      'custom MLM plan software',
      'mixed compensation plan',
      'multi-plan MLM software',
      'combined compensation plan',
      'binary unilevel hybrid',
      'matrix generation hybrid',
      'flexible MLM software',
      'dual compensation MLM',
      'hybrid compensation plan',
      'hybrid compensation structure',
      'custom hybrid MLM development',
      'hybrid MLM india',
      'hybrid compensation calculator',
      'binary matrix hybrid MLM',
      'unilevel generation hybrid',
      'flexible compensation plan software',
      'mixed plan MLM software',
      'hybrid MLM app',
      'dual leg MLM software',
      'hybrid MLM development company',
      'best hybrid MLM software',
      'innovative MLM compensation plan',
      'multi-plan benefits',
      'custom logic MLM',
      'flexible commissions MLM',
      'unique business model MLM',
      'hybrid plan software price',
      'hybrid MLM e-wallet',
      'customizable MLM platform'
    ],
  });
}

export default function HybridPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Hybrid Plan MLM Software Development',
    'Comprehensive hybrid plan MLM software combining multiple compensation structures like Binary + Unilevel, Matrix + Generation for maximum flexibility and earnings.',
    '/hybrid-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Hybrid Plan MLM Software',
    'Complete hybrid MLM software solution with multi-plan integration, flexible commission structures, and unified tracking system.',
    '3,00,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Hybrid Plan MLM Software',
    description: 'Advanced Hybrid Plan MLM software combining multiple compensation structures (Binary + Unilevel, Matrix + Generation) for maximum flexibility and earnings potential.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '300000',
    rating: 4.9,
    reviewCount: 78,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Hybrid Plan in MLM?',
      answer: 'Hybrid Plan is an MLM compensation structure that combines two or more traditional MLM plans into a single unified system. Common combinations include Binary + Unilevel, Matrix + Generation, Binary + Matrix, or even three-way hybrids. This approach allows companies to leverage the strengths of multiple plans while minimizing individual weaknesses.'
    },
    {
      question: 'What are the most popular hybrid combinations?',
      answer: 'Popular hybrid combinations: 1) Binary + Unilevel (fast start binary income + residual unilevel depth), 2) Matrix + Generation (structured matrix spillover + leadership generation bonuses), 3) Binary + Matrix (team building + forced matrix spillover), 4) Unilevel + Generation (simple levels + leadership rewards), 5) Binary + Unilevel + Generation (comprehensive three-way hybrid).'
    },
    {
      question: 'How does Binary + Unilevel hybrid work?',
      answer: 'In Binary + Unilevel hybrid, distributors build two separate structures: Binary tree for team building (left/right legs with matching bonuses), and Unilevel tree for direct sponsorship (unlimited frontline with level commissions). You earn binary bonuses from balanced team growth AND unilevel commissions from direct recruits and their downlines, maximizing both team and personal recruitment efforts.'
    },
    {
      question: 'What are the advantages of Hybrid Plan?',
      answer: 'Advantages include: maximum earning potential from multiple income streams, balanced compensation for different activities (recruiting, team building, leadership), appeals to diverse distributor preferences, reduces plan weaknesses by combining strengths, flexible customization for company needs, competitive advantage in recruitment, scalable for growth, and comprehensive reward system.'
    },
    {
      question: 'Is Hybrid Plan more complex to manage?',
      answer: 'While hybrid plans involve more calculation logic, modern MLM software handles the complexity automatically. Our Hybrid Plan Software manages multiple commission engines simultaneously, provides unified dashboards showing all income streams, automates calculations across all plans, and offers clear reporting. Distributors see a simple, consolidated view of their total earnings.'
    },
    {
      question: 'Can I customize which plans to combine?',
      answer: 'Yes, absolutely! Our Hybrid Plan MLM Software supports any combination: Binary + Unilevel, Binary + Matrix, Matrix + Generation, Unilevel + Generation, Binary + Board, E-Commerce + any plan, or even three-plan combinations. We can implement your specific hybrid structure with custom commission rates, qualification criteria, and payout rules.'
    },
    {
      question: 'How are commissions calculated in Hybrid Plan?',
      answer: 'Each component plan operates independently with its own calculation engine. For example, in Binary + Unilevel: Binary commissions calculate based on weaker leg volume (e.g., 10% on weaker leg), Unilevel commissions calculate on level-based percentages (e.g., 5% Level 1, 3% Level 2), both commissions are calculated simultaneously and paid together. Total earnings = Binary income + Unilevel income + bonuses.'
    },
    {
      question: 'What features does your Hybrid Plan MLM software include?',
      answer: 'Features include: multi-plan commission engines, unified member dashboard, separate genealogy trees for each plan, consolidated earnings reports, flexible plan configuration, rank advancement system, bonus pool management, e-wallet with multi-currency, mobile apps (iOS/Android), real-time commission calculation, comprehensive admin panel, and advanced analytics.'
    },
    {
      question: 'How do rank qualifications work in Hybrid Plans?',
      answer: 'Rank qualifications can be based on combined performance across all plans. Example: Bronze rank requires ₹50,000 personal sales + 100 binary BV points + 5 personally sponsored distributors. Each rank unlocks higher commission percentages, more generation depth, leadership bonuses, and special rewards. The hybrid structure allows for balanced qualification criteria.'
    },
    {
      question: 'What is the pricing for Hybrid Plan MLM software?',
      answer: 'Hybrid Plan MLM software starts at ₹3,00,000 for basic two-plan combination (up to 2000 members, standard features). Advanced package at ₹6,00,000 includes three-plan hybrid, unlimited members, mobile apps, advanced features. Enterprise solutions with custom plan combinations, integrations, white-label, and dedicated support available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Hybrid Plan MLM Software', url: '/hybrid-plan-mlm-software' }
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />

      <Hero
        title="Hybrid Plan MLM Software"
        subtitle="Multi-Plan Compensation System"
        description="Combine Binary, Unilevel, Matrix, and Generation plans into one powerful system. Maximum flexibility, multiple income streams, and unified tracking for your MLM business."
        gradient="purple"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Hybrid Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Hybrid Plan MLM Software</strong> is a network marketing system that combines two or more traditional MLM compensation plans into a unified platform. Common combinations include Binary + Unilevel, Matrix + Generation, or even three-way hybrids. This approach leverages the strengths of multiple plans while minimizing individual weaknesses, providing diverse income opportunities for distributors.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">🔀</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Multiple Income Streams</p>
                  <p className="text-sm text-gray-600">Binary + Unilevel + Generation combined</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Unified Dashboard</p>
                  <p className="text-sm text-gray-600">Single view for all plan earnings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flexible Combinations</p>
                  <p className="text-sm text-gray-600">Customize which plans to combine</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maximum Earning Potential</p>
                  <p className="text-sm text-gray-600">Best of all plan worlds combined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Hybrid Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Hybrid Plan MLM Software is an advanced compensation system that <strong>combines two or more traditional MLM plans</strong> into a single unified platform. Instead of choosing between Binary, Unilevel, Matrix, or Generation plans, hybrid systems allow you to leverage the <strong>strengths of multiple plans simultaneously</strong>.
              </p>
              <p>
                The most popular hybrid combination is <strong>Binary + Unilevel</strong>, where distributors earn fast-start binary bonuses from team building while also collecting residual unilevel commissions from direct sponsorship depth. Other effective combinations include Matrix + Generation for structured growth with leadership rewards, or comprehensive three-way hybrids.
              </p>
              <p>
                Our Hybrid Plan MLM Software provides seamless multi-plan integration, separate commission engines for each plan, unified member dashboards, consolidated reporting, and flexible configuration to match your specific business model and compensation strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Hybrid Combinations */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Popular Hybrid Plan Combinations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Binary + Unilevel */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-700">Binary + Unilevel</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Binary Component</h4>
                    <p className="text-sm text-gray-700">Team building with left/right legs, matching bonuses, spillover benefits. Fast-start income from balanced growth.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 10% on weaker leg volume</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">Unilevel Component</h4>
                    <p className="text-sm text-gray-700">Direct sponsorship rewards, unlimited frontline width, level-based commissions. Residual income from depth.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 5% L1, 3% L2, 2% L3-L7</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800">💡 Perfect For: Companies wanting team building + personal recruitment rewards</p>
                </div>
              </div>

              {/* Matrix + Generation */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-indigo-700">Matrix + Generation</h3>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">LEADERSHIP</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">Matrix Component</h4>
                    <p className="text-sm text-gray-700">Forced matrix structure (e.g., 3x7), automatic spillover, limited width. Passive income from upline efforts.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 3x7 matrix = 3,279 positions</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700 mb-2">Generation Component</h4>
                    <p className="text-sm text-gray-700">Leadership-based generations, compression, unlimited depth for qualified members. Big earner rewards.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 3-7 generations based on rank</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800">💡 Perfect For: Companies rewarding both team growth + leadership development</p>
                </div>
              </div>

              {/* Binary + Matrix */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-700">Binary + Matrix</h3>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">TEAM BUILDING</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Binary Component</h4>
                    <p className="text-sm text-gray-700">2-leg structure for strategic placement, matching bonuses, unlimited depth earning potential.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 10% matching bonus on weaker leg</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-bold text-cyan-700 mb-2">Matrix Component</h4>
                    <p className="text-sm text-gray-700">Forced matrix (e.g., 2x12) for spillover benefits, cycler bonuses, structured team building.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 2x12 matrix = 4,095 positions</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800">💡 Perfect For: Maximum spillover benefits and team building automation</p>
                </div>
              </div>

              {/* Unilevel + Generation */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-green-700">Unilevel + Generation</h3>
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">SIMPLIFIED</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">Unilevel Component</h4>
                    <p className="text-sm text-gray-700">Simple, unlimited width structure, level-based commissions (1-7 levels), easy to understand.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 10% L1, 8% L2, 6% L3, etc.</p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-700 mb-2">Generation Component</h4>
                    <p className="text-sm text-gray-700">Additional generational bonuses for leadership development, compression for qualified members.</p>
                    <p className="text-xs text-gray-600 mt-2"><strong>Example:</strong> 3-5 generations for top ranks</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800">💡 Perfect For: Simple structure with leadership rewards for top performers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hybrid Plan Works - Binary + Unilevel Example */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Binary + Unilevel Hybrid Works</h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Binary Tree */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">Binary Tree Structure</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold">YOU</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="bg-blue-400 text-white px-3 py-2 rounded font-semibold">Left Leg</div>
                        <div className="mt-2 text-xs space-y-1">
                          <div className="bg-gray-100 p-2 rounded">Member A</div>
                          <div className="bg-gray-100 p-2 rounded">Member B</div>
                          <div className="bg-gray-100 p-2 rounded">Member C</div>
                        </div>
                        <div className="mt-2 text-sm font-bold text-blue-600">BV: 5,000</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-400 text-white px-3 py-2 rounded font-semibold">Right Leg</div>
                        <div className="mt-2 text-xs space-y-1">
                          <div className="bg-gray-100 p-2 rounded">Member D</div>
                          <div className="bg-gray-100 p-2 rounded">Member E</div>
                        </div>
                        <div className="mt-2 text-sm font-bold text-purple-600">BV: 3,000</div>
                      </div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg text-center">
                      <p className="text-sm font-semibold text-blue-800">Binary Commission: 10% × 3,000 (weaker leg)</p>
                      <p className="text-lg font-bold text-blue-900">= ₹300</p>
                    </div>
                  </div>
                </div>

                {/* Unilevel Tree */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-green-700 text-center">Unilevel Tree Structure</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold">YOU</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs font-semibold">Level 1 (5 direct sponsors)</p>
                        <div className="grid grid-cols-5 gap-1 mt-1">
                          <div className="bg-green-200 p-1 text-xs text-center">A</div>
                          <div className="bg-green-200 p-1 text-xs text-center">B</div>
                          <div className="bg-green-200 p-1 text-xs text-center">C</div>
                          <div className="bg-green-200 p-1 text-xs text-center">D</div>
                          <div className="bg-green-200 p-1 text-xs text-center">E</div>
                        </div>
                        <p className="text-xs mt-1">Sales: ₹50,000 | 5% = <strong className="text-green-700">₹2,500</strong></p>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs font-semibold">Level 2</p>
                        <p className="text-xs">Sales: ₹80,000 | 3% = <strong className="text-green-700">₹2,400</strong></p>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs font-semibold">Level 3-5</p>
                        <p className="text-xs">Sales: ₹1,20,000 | 2% = <strong className="text-green-700">₹2,400</strong></p>
                      </div>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg text-center">
                      <p className="text-sm font-semibold text-green-800">Unilevel Commission Total</p>
                      <p className="text-lg font-bold text-green-900">= ₹7,300</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-400">
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-2">Total Monthly Income from Hybrid Plan:</p>
                  <p className="text-3xl font-bold text-gray-900">₹300 (Binary) + ₹7,300 (Unilevel) = <span className="text-green-700">₹7,600</span></p>
                  <p className="text-xs text-gray-600 mt-2">Plus leadership bonuses, rank bonuses, and pool distributions!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Hybrid Plan Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Multi-Plan Commission Engines',
                description: 'Separate calculation engines for each plan component. Simultaneous processing of Binary, Unilevel, Matrix, Generation commissions.',
                icon: '⚙️'
              },
              {
                title: 'Unified Member Dashboard',
                description: 'Single dashboard showing all income streams. Consolidated view of Binary earnings, Unilevel commissions, bonuses, total income.',
                icon: '📊'
              },
              {
                title: 'Multiple Genealogy Trees',
                description: 'Separate tree views for each plan. Visual Binary tree, Unilevel tree, Matrix tree - all linked to same member database.',
                icon: '🌳'
              },
              {
                title: 'Flexible Configuration',
                description: 'Choose any plan combination. Configure commission rates, qualification rules, payout settings independently for each component.',
                icon: '🔧'
              },
              {
                title: 'Consolidated Reporting',
                description: 'Comprehensive reports across all plans. Track performance metrics, income sources, team growth for each plan component.',
                icon: '📈'
              },
              {
                title: 'Rank Advancement System',
                description: 'Unified rank structure based on combined performance. Ranks unlock benefits across all plan components simultaneously.',
                icon: '🏆'
              },
              {
                title: 'Bonus Pool Management',
                description: 'Leadership pools, rank achievement bonuses, global pools. Distribute additional rewards based on overall performance.',
                icon: '💰'
              },
              {
                title: 'E-Wallet Integration',
                description: 'Unified wallet for all commission types. Multi-currency support, withdrawal management, payout automation.',
                icon: '👛'
              },
              {
                title: 'Mobile Apps (iOS/Android)',
                description: 'Native mobile apps for distributors. View all trees, check commissions, manage team, enroll members on the go.',
                icon: '📱'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Hybrid Plan MLM?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Maximum Earning Potential',
                  description: 'Earn from multiple income streams simultaneously. Binary bonuses + Unilevel commissions + Leadership rewards = Higher total income than single-plan structures.',
                  icon: '💎'
                },
                {
                  title: 'Balanced Compensation',
                  description: 'Rewards different activities fairly. Team builders earn from Binary, recruiters from Unilevel, leaders from Generation bonuses - everyone benefits.',
                  icon: '⚖️'
                },
                {
                  title: 'Competitive Advantage',
                  description: 'Stand out in recruitment with superior compensation. Hybrid plans attract top performers who want multiple ways to earn and maximum income potential.',
                  icon: '🎯'
                },
                {
                  title: 'Flexible Growth Strategy',
                  description: 'Adapt compensation as business evolves. Start with Binary+Unilevel, add Generation component later for top ranks. Scale smoothly.',
                  icon: '📈'
                },
                {
                  title: 'Reduced Plan Weaknesses',
                  description: 'Each plan compensates for others\' limitations. Binary spillover helps new members, Unilevel rewards personal effort, Generation rewards leadership.',
                  icon: '🛡️'
                },
                {
                  title: 'Appeals to Diverse Distributors',
                  description: 'Different people prefer different styles. Some love team building (Binary), others prefer sponsoring (Unilevel). Hybrid satisfies all.',
                  icon: '🤝'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-purple-700">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Hybrid Plan Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Hybrid (2-Plan)',
                price: '₹3,00,000',
                features: [
                  'Up to 2,000 members',
                  '2-plan combination',
                  'Binary + Unilevel OR Matrix + Unilevel',
                  'Dual commission engines',
                  'Member dashboard',
                  'Admin panel',
                  'Basic reports',
                  'E-wallet system',
                  'Email notifications',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Hybrid (3-Plan)',
                price: '₹6,00,000',
                features: [
                  'Unlimited members',
                  '3-plan combination',
                  'Binary + Unilevel + Generation',
                  'Triple commission engines',
                  'Mobile apps (iOS/Android)',
                  'Advanced genealogy',
                  'Replicated websites',
                  'Advanced analytics',
                  'Multi-currency wallet',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Hybrid',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Custom plan combinations',
                  'Unlimited commission plans',
                  'White-label solution',
                  'API integrations',
                  'Custom features',
                  'Dedicated server',
                  'E-Commerce integration',
                  'Priority support',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-purple-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Stair Step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Party Plan MLM', href: '/party-plan-mlm-software', desc: 'Event-based direct selling' },
              { title: 'Single Leg Plan', href: '/single-leg-plan-mlm-software', desc: 'Monoline spillover structure' },
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Find the right compensation structure</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactForm />
    </main>
  );
}

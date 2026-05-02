import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Donation Plan MLM Software | Helping Plan MLM Software Development | EifaSoft',
    description: 'Donation Plan MLM software with peer-to-peer donation tracking, automated matching, and fund distribution. Custom development starts ₹4,00,000. Legal consultation mandatory.',
    canonical: '/donation-plan-mlm-software',
    keywords: [
      'donation plan mlm software',
      'donation mlm software',
      'helping plan mlm',
      'peer to peer donation mlm',
      'crowdfunding mlm software',
      'donation based mlm',
      'helping mlm software',
      'gift donation mlm',
      'donation plan mlm india',
      'charity mlm software',
      'p2p donation network marketing',
      'donation mlm development',
      'mlm donation platform',
      'donation plan mlm app',
      'donation mlm moradabad',
      'crowdfunding mlm india',
      'donation mlm compensation plan',
      'peer help mlm software',
      'donation plan development company',
      'custom donation mlm',
      'donation mlm software price',
      'mlm help plan software india'
    ],
  });
}

export default function DonationPlanMLMSoftware() {
  const serviceSchema = generateServiceSchema(
    'Donation Plan MLM Software Development',
    'Professional Donation Plan MLM software with peer-to-peer donation tracking, automated matching, fund distribution, and compliance management for network marketing businesses.',
    '/donation-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Donation Plan MLM Software',
    'Complete Donation Plan MLM platform with P2P donation tracking and automated matching',
    '400000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Donation Plan MLM Software',
    description: 'Specialized Donation Plan MLM software with peer-to-peer donation tracking, automated matching, fund distribution, and compliance management for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '400000',
    rating: 4.6,
    reviewCount: 45,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Donation Plan MLM?',
      answer: 'Donation Plan MLM (also called Helping Plan or Gift Plan) is a peer-to-peer donation structure where members make donations to other members and receive donations in return based on their position in the network. Members donate to upline members and receive donations from new joiners. It operates on the principle of mutual help rather than traditional product sales or investment returns.'
    },
    {
      question: 'How does Donation MLM plan work?',
      answer: 'New member joins by making a donation (e.g., ₹5,000 to ₹1,00,000) to existing members as per plan structure. Common structures: Binary (donate to 2 uplines), Matrix (donate to multiple uplines in matrix positions), Board (donate to board head before advancing). As new members join below you, you receive donations. The cycle continues with members advancing through levels/boards receiving larger donations. No products involved - pure peer-to-peer fund transfer.'
    },
    {
      question: 'Is Donation Plan MLM legal in India?',
      answer: 'EXTREMELY HIGH LEGAL RISK: Donation MLM plans are HIGHLY LIKELY to be illegal in India under Prize Chits and Money Circulation Schemes (Banning) Act, 1978. Critical issues: No product/service exchange (pure money circulation), Relies entirely on recruitment for sustainability, Classified as "money chain" or pyramid scheme, Many such schemes have been shut down with promoters arrested, RBI and police actively target such schemes. Legal requirements if attempting: Must have genuine charitable purpose registered under 80G/12A, Transparent operations with full disclosure, Cannot promise guaranteed returns, Must comply with Foreign Contribution Regulation Act (FCRA) if applicable. STRONG LEGAL ADVICE: DO NOT launch without comprehensive legal opinion.'
    },
    {
      question: 'What are the severe risks of Donation MLM?',
      answer: 'CRITICAL RISKS - HIGHEST CATEGORY: Near-certain classification as illegal money circulation scheme, Criminal prosecution under Prize Chits Act, Company shutdown and fund seizure by authorities, Loss of all member funds, Severe reputation damage and social consequences, Bank account freezing, GST/Income Tax notices, Civil and criminal liability for promoters and even participants, Media exposure as "scam", Difficulty in legal defense due to lack of products/services. Most donation MLMs collapse within 6-18 months. Early members may profit but later joiners lose everything.'
    },
    {
      question: 'Why do Donation MLM plans inevitably fail?',
      answer: 'Mathematical impossibility of sustainability: Exponential growth requirement (each level needs 2x more people than previous), Market saturation (limited pool of willing participants), No value creation (just money redistribution), Early member advantage (late joiners subsidize early ones), Negative publicity killing recruitment, Regulatory action shutting operation. Example: Binary donation plan needs 1,024 members at level 10, 1,048,576 at level 20 - impossible to sustain. When recruitment slows, system collapses and majority lose money.'
    },
    {
      question: 'Can Donation MLM be made legal by calling it "help" or "gift"?',
      answer: 'NO. Changing terminology does NOT make it legal. Courts and authorities look at substance, not labels: If money circulates purely based on recruitment = illegal, Calling donations "gifts" or "help" = still illegal money circulation, Using terms like "crowdfunding" or "peer help" = not legal protection, Having member agreements saying "voluntary" = does not exempt from law. Indian courts have repeatedly ruled that money circulation schemes are illegal regardless of what they call themselves. Only genuine charitable organizations registered under appropriate acts can accept donations.'
    },
    {
      question: 'What happens to Donation MLM software after company shutdown?',
      answer: 'When authorities shut down donation MLM (which is common): All funds in system may be seized, Software becomes evidence in criminal case, Database can be used to trace participants, Members may be called for investigation, No refunds typically possible, Promoters face criminal charges, Hosting providers may suspend services, Bank accounts frozen. We provide software, but CANNOT guarantee: Legal safety of business model, Continuation of operations, Protection from legal action, Recovery of development costs. Consider this a HIGH-RISK investment.'
    },
    {
      question: 'Are there any legal alternatives to Donation MLM?',
      answer: 'If you want to help people financially, consider LEGAL alternatives: Genuine product-based MLM (health, beauty, utilities), Microfinance or NBFC model (with RBI license), Registered cooperative society, Crowdfunding platform (with SEBI compliance), Affiliate marketing program, Profit-sharing business with real operations, Registered charity (80G certified) for actual social work. These require real business operations but are sustainable and legal.'
    },
    {
      question: 'Why does EifaSoft develop Donation MLM software if it is risky?',
      answer: 'We provide software development services - clients are responsible for legal compliance. However, we: Provide strong legal warnings about risks, Recommend legal consultation before launch, Include compliance features (audit trail, documentation), Advise against launching without legal clearance, Share information about legal alternatives. Final decision is client&apos;s responsibility. We do NOT guarantee: Legal safety of business model, Success or sustainability, Protection from regulatory action. By proceeding, client accepts full legal responsibility.'
    },
    {
      question: 'How much does Donation Plan MLM software cost?',
      answer: 'Donation Plan MLM software development starts from ₹4,00,000 for basic features including donation tracking, member matching, fund distribution, and compliance features. Advanced features like payment gateway integration, mobile apps, and automation can cost ₹6,00,000 to ₹15,00,000. Legal consultation (MANDATORY) costs additional ₹3-10 lakhs. Note: Given high shutdown risk, consider this a HIGH-RISK investment that may not provide ROI if authorities shut down operations.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Donation Plan MLM Software', url: '/donation-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Donation Plan MLM Software"
        subtitle="Peer-to-Peer Donation Platform"
        description="Donation MLM software with automated matching and fund tracking. Custom development starting ₹4,00,000. CRITICAL: Legal consultation mandatory due to extremely high legal risks."
        gradient="orange"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-3">What is Donation Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Donation Plan MLM Software</strong> is a specialized platform for peer-to-peer donation-based network marketing where members make donations to other members and receive donations in return based on their position in the network. Also known as Helping Plan or Gift Plan, this model operates on member-to-member transactions without company involvement in fund distribution. The software automates donation matching, tracks all transactions, manages verification workflows, and ensures transparent fund flow tracking.
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
                  <p className="font-semibold text-gray-900">P2P Donation Tracking</p>
                  <p className="text-sm text-gray-600">Automated matching & fund distribution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">High Legal Risk</p>
                  <p className="text-sm text-gray-600">Mandatory legal consultation required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Compliance Features</p>
                  <p className="text-sm text-gray-600">Audit trail & verification system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹4,00,000</p>
                  <p className="text-sm text-gray-600">Custom development with mobile apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTREME Legal Warning */}
      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-yellow-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4 text-white">
              <h3 className="text-3xl font-bold mb-4">🚨 CRITICAL LEGAL WARNING - EXTREMELY HIGH RISK 🚨</h3>
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border-2 border-yellow-400">
                <p className="text-xl font-bold mb-4 text-yellow-300">
                  DONATION MLM PLANS ARE HIGHLY LIKELY TO BE ILLEGAL IN INDIA AND FACE NEAR-CERTAIN REGULATORY SHUTDOWN
                </p>
                <div className="space-y-3 text-base">
                  <p><strong className="text-red-300">⚠️ Legal Status:</strong> Classified as &quot;money circulation scheme&quot; under Prize Chits and Money Circulation Schemes (Banning) Act, 1978</p>
                  <p><strong className="text-red-300">⚠️ Criminal Risk:</strong> Promoters and participants face arrest, prosecution, and imprisonment</p>
                  <p><strong className="text-red-300">⚠️ Fund Risk:</strong> All member funds subject to seizure by authorities</p>
                  <p><strong className="text-red-300">⚠️ Historical Reality:</strong> Hundreds of donation MLMs shut down in India with promoters jailed</p>
                  <p><strong className="text-red-300">⚠️ Sustainability:</strong> Mathematically impossible to sustain - inevitable collapse</p>
                </div>
                <div className="mt-6 bg-red-900 p-4 rounded border-2 border-yellow-400">
                  <p className="font-bold text-lg mb-2">MANDATORY REQUIREMENTS (May still not prevent legal action):</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Independent legal opinion from criminal law attorney specializing in MLM/money circulation schemes</li>
                    <li>Registered charitable trust (80G/12A) for actual social work (NOT just member donations)</li>
                    <li>FCRA compliance if receiving any foreign contributions</li>
                    <li>Full transparency and disclosure to all participants about legal risks</li>
                    <li>NO promises or expectations of receiving donations back</li>
                    <li>Understanding that software investment may be lost if shutdown occurs</li>
                  </ul>
                  <p className="mt-4 text-yellow-200 font-bold">EifaSoft STRONGLY ADVISES AGAINST launching Donation MLM. Consider legal product-based MLM alternatives instead.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Donation MLM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Donation Plan MLM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peer-to-peer donation structure (HIGH LEGAL RISK - understand the model before considering)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Donation MLM Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Join with Donation</h4>
                    <p className="text-gray-600">New member makes donation to upline members (₹5K-1L)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Receive Donations</h4>
                    <p className="text-gray-600">As new members join below you, receive donations from them</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Level Advancement</h4>
                    <p className="text-gray-600">Advance through levels/boards to receive larger donations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cycle Continues</h4>
                    <p className="text-gray-600">System relies on continuous recruitment of new donors</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4">
                <p className="text-sm font-bold text-red-900 mb-2">⚠️ WHY THIS MODEL FAILS:</p>
                <p className="text-sm text-red-800">
                  Requires exponential growth. When recruitment slows (inevitable), system collapses. Late joiners lose money. Early members profit at expense of later ones. This is the definition of an unsustainable pyramid scheme.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Example: Binary Donation Structure</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="font-semibold text-gray-900">You Join</div>
                  <div className="text-sm text-gray-600">Donate ₹10,000 to 2 upline members (₹5K each)</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-900">2 People Join Under You</div>
                  <div className="text-sm text-green-600">You receive ₹10,000 (₹5K × 2) - Break even</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-900">4 More Join (Your 2nd Level)</div>
                  <div className="text-sm text-blue-600">You receive ₹20,000 (₹5K × 4) - Profit ₹10K</div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600">
                  <div className="font-semibold text-red-900">Recruitment Slows/Stops</div>
                  <div className="text-sm text-red-800">Your downline receives no donations. System collapses. They lose ₹10K each.</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-300">
                <strong>Math Reality:</strong> For 100 people to profit, 200+ new people must join. For those 200 to profit, 400+ must join. Eventually runs out of people = COLLAPSE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donation MLM Fails */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Donation MLM Plans Always Fail
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the inevitable collapse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">📉</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Exponential Growth Required</h3>
              <p className="text-gray-600 text-sm">Each level needs 2x more people than previous. Level 20 needs 1 million people. Mathematically impossible.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">🚫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Saturation</h3>
              <p className="text-gray-600 text-sm">Limited pool of willing participants. After initial growth, recruitment slows dramatically. No new money = collapse.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Value Creation</h3>
              <p className="text-gray-600 text-sm">Just money redistribution. No products, no business value. Early members extract wealth from later ones.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Legal Crackdown</h3>
              <p className="text-gray-600 text-sm">Authorities actively hunt such schemes. Company shutdown, fund seizure, criminal prosecution of promoters.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">📰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Negative Publicity</h3>
              <p className="text-gray-600 text-sm">Media exposes as scam. Public awareness kills recruitment. Social media warnings spread rapidly.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Time Bomb</h3>
              <p className="text-gray-600 text-sm">Most collapse in 6-18 months. The longer it runs, the harder the fall. More people lose money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Donation MLM Software Features
            </h2>
            <p className="text-xl text-gray-600">
              If you proceed despite warnings (software features only)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Member matching system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Donation tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Automated fund distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Level/board progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700">Transaction history</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Complete audit trail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Legal risk disclosures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Member agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">KYC verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Transaction reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">SMS/Email notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Member portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
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
              Donation MLM Software Pricing
            </h2>
            <p className="text-xl text-red-600 font-semibold">
              HIGH-RISK INVESTMENT - Consider regulatory shutdown risk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹4,00,000</div>
              <p className="text-gray-600 mb-6">Core features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Donation matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Fund distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Member portal</span>
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

            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl shadow-xl p-8 text-white transform scale-105 border-2 border-red-800">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">₹7,50,000</div>
              <p className="text-orange-100 mb-6">Full features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Payment gateway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Mobile app (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>Advanced compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-200 mr-2">✓</span>
                  <span>6 months support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">₹12,00,000+</div>
              <p className="text-gray-600 mb-6">Custom solution</p>
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
          <div className="mt-8 text-center">
            <p className="text-red-600 font-bold">+ MANDATORY Legal Consultation: ₹3-10 lakhs</p>
            <p className="text-sm text-gray-600 mt-2">Software cost may be lost if regulatory shutdown occurs</p>
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
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Rank-based generational bonuses' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with position advancement' },
              { title: 'Helping Plan MLM', href: '/helping-plan-mlm-software', desc: 'Community-based mutual aid system' },
              { title: 'Gift Plan MLM', href: '/gift-plan-mlm-software', desc: 'Member-to-member gift exchange' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple compensation types combined' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-orange-100">
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
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-6 rounded-lg text-center hover:from-red-700 hover:to-rose-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-6 rounded-lg text-center hover:from-rose-700 hover:to-orange-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Software</h3>
              <p className="text-sm opacity-90">Find the right MLM platform</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <ContactForm serviceName="Donation Plan MLM" />
    </>
  );
}

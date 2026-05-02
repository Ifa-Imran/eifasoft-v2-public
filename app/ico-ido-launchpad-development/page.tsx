import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateSoftwareApplicationSchema,
  generateSpeakableSchema,
} from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'ICO/IDO Launchpad Development | Token Launch Platform | EifaSoft',
    description:
      'Professional ICO, IDO & IEO launchpad development services. Build secure token sale platforms with KYC/AML, vesting schedules, and multi-chain support. Starting at Rs.4,00,000. Contact us today!',
    keywords: [
      'ico development',
      'ido development',
      'ieo development',
      'crypto launchpad',
      'launchpad development',
      'token launchpad development',
      'crypto launchpad development',
      'white label launchpad',
      'token sale platform',
      'ico launch services',
      'ido launch services',
      'token presale platform',
      'fair launch platform',
      'sto development',
      'security token offering platform',
      'how to launch an ico',
      'ico development cost',
      'ico ido launchpad',
      'token launch platform',
      'initial coin offering development',
      'initial dex offering development',
      'initial exchange offering development',
      'crypto fundraising platform',
      'blockchain launchpad',
      'defi launchpad development',
      'multi-chain launchpad',
      'token vesting platform',
    ],
    canonical: '/ico-ido-launchpad-development',
  });
}

const faqs = [
  {
    question: 'What is the difference between ICO, IDO, and IEO?',
    answer:
      'An ICO (Initial Coin Offering) is a fundraising method where tokens are sold directly by the project team via their own platform. An IDO (Initial DEX Offering) launches tokens through a decentralized exchange launchpad like PancakeSwap or Uniswap, providing immediate liquidity. An IEO (Initial Exchange Offering) is conducted through a centralized exchange like Binance or KuCoin, which vets the project and handles the token sale. Each model offers different levels of decentralization, regulatory compliance, and investor reach.',
  },
  {
    question: 'What features does a crypto launchpad platform include?',
    answer:
      'A full-featured crypto launchpad includes token sale smart contracts with configurable pricing rounds, KYC/AML verification integration, vesting and cliff schedule management, staking-based tier systems for allocation, multi-chain support (Ethereum, BSC, Polygon, Solana), admin dashboard for project management, investor whitelisting, refund mechanisms, and real-time analytics dashboards for tracking sale progress.',
  },
  {
    question: 'How much does ICO/IDO launchpad development cost?',
    answer:
      'Launchpad development costs vary based on features and complexity. A basic single-chain launchpad starts at Rs.4,00,000, a multi-chain launchpad with KYC/AML and staking tiers costs around Rs.10,00,000, and a fully custom white-label enterprise launchpad with advanced features ranges from Rs.20,00,000 and above. Factors affecting cost include number of supported chains, security audit scope, compliance requirements, and custom UI/UX design.',
  },
  {
    question: 'How long does it take to develop a crypto launchpad?',
    answer:
      'A basic launchpad with single-chain support takes 8-12 weeks. A multi-chain launchpad with KYC/AML integration, staking tiers, and vesting schedules typically requires 16-24 weeks. Enterprise-grade white-label solutions with full customization can take 24-36 weeks including security audits, compliance integration, and thorough testing across all supported networks.',
  },
  {
    question: 'How does KYC/AML integration work in a launchpad?',
    answer:
      'KYC/AML integration in a launchpad involves connecting third-party identity verification providers such as Sumsub, Synaps, or Onfido. Investors submit government-issued IDs, proof of address, and sometimes source-of-funds documentation. The system verifies identities in real-time, assigns compliance tiers, and restricts participation from sanctioned jurisdictions. All data is encrypted and stored in compliance with GDPR and relevant data protection regulations.',
  },
  {
    question: 'How do vesting schedules work in token launches?',
    answer:
      'Vesting schedules are implemented through smart contracts that lock purchased tokens and release them over time according to predefined rules. Common configurations include cliff periods (e.g., 3-month lock before any tokens release), linear vesting (gradual daily or monthly unlock), and milestone-based vesting. This prevents immediate sell-offs, stabilizes token price, and aligns investor incentives with long-term project success.',
  },
  {
    question: 'How is token pricing determined during an ICO/IDO?',
    answer:
      'Token pricing can be configured in multiple ways: fixed-price sales where all tokens sell at a set price, Dutch auction where the price decreases over time until all tokens are sold, tiered pricing with different rates per round (seed, private, public), and bonding curve models where price increases as more tokens are purchased. The launchpad smart contracts handle all pricing logic automatically and transparently.',
  },
  {
    question: 'What regulatory compliance is needed for an ICO/IDO launch?',
    answer:
      'Regulatory requirements vary by jurisdiction but commonly include KYC/AML verification for all participants, geo-blocking for restricted countries (e.g., USA, China), legal opinion letters classifying the token (utility vs. security), terms and conditions for token sale agreements, data privacy compliance (GDPR), and in some cases registration with financial authorities. We work with legal partners to help ensure your launch meets applicable regulatory standards.',
  },
];

export default function IcoIdoLaunchpadDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft ICO/IDO Launchpad Platform',
    description: 'Enterprise-grade crypto launchpad development platform with token sale smart contracts, KYC/AML integration, vesting schedules, staking tiers, and multi-chain deployment for ICO, IDO, IEO, and STO launches.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, Ethereum, BSC, Polygon, Solana, Arbitrum',
    price: '400000',
    rating: 4.9,
    reviewCount: 62,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blockchain Development', url: '/blockchain-development-company' },
      { name: 'ICO/IDO Launchpad Development', url: '/ico-ido-launchpad-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'ICO/IDO Launchpad Development Services',
      'Professional crypto launchpad development including ICO, IDO, IEO, and STO token sale platforms with KYC/AML, vesting, and multi-chain support'
    ),
    generateProductSchema(
      'ICO/IDO Launchpad Development Package',
      'Complete crypto launchpad development from smart contracts to deployment with compliance integration',
      '400000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="LAUNCH YOUR TOKEN"
        title="ICO/IDO Launchpad Development Services"
        description="Build secure, compliant token launch platforms with multi-chain support, KYC/AML verification, vesting schedules, and staking-based tier systems. Launch your ICO, IDO, IEO, or STO with confidence."
        ctaPrimary={{ text: 'Get Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Launchpad Features', href: '#features' }}
        gradient="orange"
      />

      {/* What is ICO/IDO Launchpad Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-amber-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is ICO/IDO Launchpad Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>ICO/IDO Launchpad Development</strong> is the process of building decentralized platforms that enable blockchain projects to raise funds by selling tokens to early investors. A launchpad handles the entire token sale lifecycle including smart contract deployment, investor whitelisting, KYC/AML verification, token pricing mechanisms, vesting and cliff schedules, and multi-chain distribution. Whether it is an <strong>ICO</strong> (Initial Coin Offering), <strong>IDO</strong> (Initial DEX Offering), <strong>IEO</strong> (Initial Exchange Offering), or <strong>STO</strong> (Security Token Offering), the launchpad provides the infrastructure for secure, transparent, and compliant fundraising in the Web3 ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">&#10003;</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Launchpad development starting at Rs.4,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Multi-chain support: Ethereum, BSC, Polygon, Solana, Arbitrum
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Built-in KYC/AML compliance and geo-blocking
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Configurable vesting and cliff schedules
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Staking-based tier allocation system
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  8-36 weeks development timeline with security audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Types Comparison - ICO vs IDO vs IEO vs STO */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ICO vs IDO vs IEO vs STO Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the key differences between token launch models to choose the right fundraising strategy
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">ICO</th>
                  <th className="px-6 py-4 text-left">IDO</th>
                  <th className="px-6 py-4 text-left">IEO</th>
                  <th className="px-6 py-4 text-left">STO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Platform</td>
                  <td className="px-6 py-4">Project&apos;s own website</td>
                  <td className="px-6 py-4">Decentralized exchange</td>
                  <td className="px-6 py-4">Centralized exchange</td>
                  <td className="px-6 py-4">Regulated platform</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Decentralization</td>
                  <td className="px-6 py-4">Moderate</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Low</td>
                  <td className="px-6 py-4">Low</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Liquidity</td>
                  <td className="px-6 py-4">Post-listing</td>
                  <td className="px-6 py-4">Immediate</td>
                  <td className="px-6 py-4">Exchange-provided</td>
                  <td className="px-6 py-4">Secondary markets</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">KYC Required</td>
                  <td className="px-6 py-4">Optional</td>
                  <td className="px-6 py-4">Varies</td>
                  <td className="px-6 py-4">Mandatory</td>
                  <td className="px-6 py-4">Mandatory</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Regulation</td>
                  <td className="px-6 py-4">Minimal</td>
                  <td className="px-6 py-4">Minimal</td>
                  <td className="px-6 py-4">Exchange-vetted</td>
                  <td className="px-6 py-4">Fully regulated</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Best For</td>
                  <td className="px-6 py-4">Utility tokens</td>
                  <td className="px-6 py-4">DeFi projects</td>
                  <td className="px-6 py-4">Established projects</td>
                  <td className="px-6 py-4">Asset-backed tokens</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-semibold">Typical Cost</td>
                  <td className="px-6 py-4">Rs.4-10L</td>
                  <td className="px-6 py-4">Rs.5-12L</td>
                  <td className="px-6 py-4">Rs.8-15L + listing fee</td>
                  <td className="px-6 py-4">Rs.15-30L + legal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Launchpad Features We Build
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📜',
                title: 'Token Sale Smart Contracts',
                description: 'Audited Solidity contracts supporting fixed-price, Dutch auction, bonding curve, and tiered pricing models with automatic token distribution and refund mechanisms.',
              },
              {
                icon: '🛡️',
                title: 'KYC/AML Integration',
                description: 'Seamless integration with Sumsub, Synaps, or Onfido for real-time identity verification, sanctions screening, geo-blocking, and regulatory compliance across jurisdictions.',
              },
              {
                icon: '🔒',
                title: 'Vesting & Cliff Schedules',
                description: 'On-chain vesting contracts with configurable cliff periods, linear or milestone-based unlocking, and investor dashboards for tracking token release timelines.',
              },
              {
                icon: '🌐',
                title: 'Multi-chain Launchpad',
                description: 'Deploy token sales across Ethereum, BSC, Polygon, Solana, Arbitrum, and Avalanche with cross-chain bridging and unified investor experience.',
              },
              {
                icon: '⭐',
                title: 'Staking Tiers',
                description: 'Tier-based allocation system where investors stake native tokens to qualify for guaranteed allocations, lottery spots, and exclusive early access to token sales.',
              },
              {
                icon: '⚖️',
                title: 'Fair Launch Mechanism',
                description: 'Anti-bot protection, anti-whale limits, random allocation selection, and overflow models to ensure equitable distribution and prevent front-running attacks.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Launchpad Development Process
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Solidity', 'Hardhat', 'Web3.js', 'React', 'Node.js', 'The Graph', 'IPFS', 'OpenZeppelin'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Development Phases</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Discovery & Tokenomics Planning', time: '1-2 weeks', desc: 'Define token sale structure, pricing model, vesting schedules, compliance requirements, and target chains.' },
                  { step: 2, title: 'Smart Contract Development', time: '4-6 weeks', desc: 'Build and test token sale contracts, vesting contracts, staking tier contracts, and governance modules.' },
                  { step: 3, title: 'Frontend & Dashboard Development', time: '4-6 weeks', desc: 'Create investor-facing launchpad UI, admin dashboard, KYC integration, and wallet connectivity.' },
                  { step: 4, title: 'KYC/AML & Compliance Integration', time: '2-3 weeks', desc: 'Integrate identity verification providers, implement geo-blocking, and configure compliance rules.' },
                  { step: 5, title: 'Security Audit & Testnet Deployment', time: '3-4 weeks', desc: 'Comprehensive smart contract audits, penetration testing, and full testnet deployment with simulated sales.' },
                  { step: 6, title: 'Mainnet Launch & Support', time: '1-2 weeks', desc: 'Deploy to mainnet, monitor first token sale, provide 90-day hypercare support and performance optimization.' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{phase.title}</h4>
                      <p className="text-sm text-gray-600">{phase.time}</p>
                      <p className="text-sm text-gray-500 mt-1">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Launchpad Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of ICO/IDO launchpad platforms across the blockchain ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                DeFi Protocol Launch
              </h3>
              <p className="text-gray-700 mb-4">
                Built a multi-tier IDO launchpad for a DeFi protocol that raised $5M+ through staking-based allocation tiers with automated liquidity provisioning on PancakeSwap.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 15,000+ whitelisted participants</li>
                  <li>&bull; 4-tier staking allocation system</li>
                  <li>&bull; Automated DEX liquidity lock</li>
                  <li>&bull; Linear vesting over 12 months</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Solidity, BSC, React, The Graph</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎮</span>
                GameFi Token Sale
              </h3>
              <p className="text-gray-700 mb-4">
                Developed a fair launch platform for a play-to-earn gaming project with anti-bot protection, random allocation, and NFT-based access passes for early investors.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 50,000+ registered users</li>
                  <li>&bull; NFT access pass integration</li>
                  <li>&bull; Anti-bot CAPTCHA and rate limiting</li>
                  <li>&bull; Multi-round sale (seed, private, public)</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Solidity, Polygon, Next.js, Chainlink VRF</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Security Token Offering (STO)
              </h3>
              <p className="text-gray-700 mb-4">
                Created a regulated STO platform for real estate tokenization with full KYC/AML compliance, accredited investor verification, and secondary market trading capabilities.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; SEC-compliant token issuance</li>
                  <li>&bull; Accredited investor verification</li>
                  <li>&bull; Dividend distribution smart contracts</li>
                  <li>&bull; Transfer restriction enforcement</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>ERC-1400, Ethereum, Node.js, PostgreSQL</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌍</span>
                White-Label Launchpad
              </h3>
              <p className="text-gray-700 mb-4">
                Delivered a white-label launchpad solution enabling a crypto incubator to host multiple token sales for their portfolio projects with shared staking and reputation systems.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 20+ projects launched successfully</li>
                  <li>&bull; Custom branding per project</li>
                  <li>&bull; Shared governance token staking</li>
                  <li>&bull; Multi-chain deployment (ETH, BSC, Polygon)</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Solidity, Multi-chain, React, GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Launchpad',
                price: 'Rs.4,00,000',
                features: [
                  'Single-chain deployment',
                  'Fixed-price token sale',
                  'Basic KYC integration',
                  'Simple vesting schedule',
                  'Investor dashboard',
                  'Testnet + mainnet deployment',
                  '30-day support',
                ],
              },
              {
                name: 'Professional Launchpad',
                price: 'Rs.10,00,000',
                popular: true,
                features: [
                  'Multi-chain support (3 chains)',
                  'Multiple pricing models',
                  'Full KYC/AML integration',
                  'Staking-based tier system',
                  'Advanced vesting & cliff',
                  'Admin dashboard',
                  'Security audit included',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise White-Label',
                price: 'Rs.20,00,000+',
                features: [
                  'Unlimited chain support',
                  'White-label customization',
                  'STO compliance module',
                  'Custom governance system',
                  'Cross-chain bridging',
                  'Third-party security audit',
                  'Dedicated account manager',
                  '1-year maintenance',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-4 ring-orange-600 shadow-2xl scale-105' : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-4 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-orange-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block w-full text-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links to Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Blockchain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your launchpad with our end-to-end blockchain development ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🪙',
                title: 'Token Development',
                desc: 'ERC-20, BEP-20, SPL token creation with tokenomics design and smart contract deployment.',
                href: '/token-development-services',
              },
              {
                icon: '📜',
                title: 'Smart Contract Development',
                desc: 'Audited smart contracts for DeFi, NFT, governance, and custom blockchain logic.',
                href: '/smart-contract-development',
              },
              {
                icon: '💰',
                title: 'DeFi Solutions',
                desc: 'DEX, lending protocols, yield farming, and liquidity pool development for your ecosystem.',
                href: '/defi-solutions',
              },
              {
                icon: '⛓️',
                title: 'Blockchain Development',
                desc: 'Full-stack blockchain development including DApps, Web3 integration, and enterprise solutions.',
                href: '/blockchain-development-company',
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.href} className="block bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Launchpad Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🔐', title: 'Security-First Approach', desc: 'Comprehensive smart contract audits and penetration testing' },
              { icon: '⚖️', title: 'Compliance Expertise', desc: 'KYC/AML, geo-blocking, and regulatory guidance included' },
              { icon: '🌐', title: 'Multi-Chain Mastery', desc: 'Deploy across Ethereum, BSC, Polygon, Solana, and more' },
              { icon: '🚀', title: 'Proven Track Record', desc: '50+ token launches facilitated with $100M+ raised' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about ICO, IDO, IEO, and launchpad development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-orange-600">&#10067;</span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-orange-600 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Token?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Build a secure, compliant ICO/IDO launchpad with multi-chain support. Get expert consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/blockchain-development-company"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Blockchain Services
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="ICO/IDO Launchpad Development" />
        </div>
      </section>
    </>
  );
}

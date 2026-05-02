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
    title: 'Staking Platform Development | Liquid Staking & Restaking | EifaSoft',
    description:
      'Expert staking platform development services. Build liquid staking, restaking, validator nodes, and DeFi staking pools. Starting at ₹4,00,000. Proof of Stake solutions with multi-chain support. Contact us today!',
    keywords: [
      'staking platform development',
      'defi staking',
      'defi staking platform development',
      'liquid staking',
      'restaking',
      'validator nodes',
      'proof of stake',
      'staking rewards',
      'staking pool',
      'delegation',
      'validator management',
      'LST',
      'LRT',
      'liquid staking tokens',
      'liquid restaking tokens',
      'staking as a service',
      'multi-chain staking',
      'ethereum staking',
      'staking smart contracts',
      'staking platform development company',
      'staking platform development india',
      'nft staking platform',
      'eigenlayer restaking',
      'staking rewards calculator',
      'staking pool development',
      'validator node setup',
      'proof of stake development',
      'crypto staking platform',
      'staking infrastructure',
    ],
    canonical: '/staking-platform-development',
  });
}

const faqs = [
  {
    question: 'What is staking in blockchain and how does it work?',
    answer:
      'Staking is the process of locking cryptocurrency tokens in a blockchain network to support its operations, such as validating transactions and securing the network. In Proof of Stake (PoS) blockchains, validators are selected to create new blocks based on the amount of tokens they have staked. In return, stakers earn rewards proportional to their contribution, typically ranging from 4% to 20% APY depending on the network and conditions.',
  },
  {
    question: 'What is the difference between liquid staking and traditional staking?',
    answer:
      'Traditional staking locks your tokens for a fixed period, making them illiquid and inaccessible during the staking duration. Liquid staking solves this by issuing derivative tokens (LSTs like stETH or rETH) that represent your staked position. These liquid staking tokens can be freely traded, used as collateral in DeFi protocols, or composed with other financial products while your original tokens continue earning staking rewards.',
  },
  {
    question: 'What is restaking and how does EigenLayer work?',
    answer:
      'Restaking allows staked assets (or their liquid staking derivatives) to be used to secure additional services beyond the base blockchain. EigenLayer pioneered this concept by enabling Ethereum validators to opt-in to secure Actively Validated Services (AVS) using their existing staked ETH. This creates shared security, allowing new protocols to bootstrap security without building their own validator set, while stakers earn additional rewards from multiple services.',
  },
  {
    question: 'How much does staking platform development cost?',
    answer:
      'Staking platform development starts at ₹4,00,000 for a basic single-asset staking solution. A comprehensive liquid staking platform with LST minting and DeFi integration typically costs ₹12,00,000. Enterprise-grade multi-chain staking platforms with restaking, validator management, and advanced features range from ₹25,00,000 and above depending on complexity, security requirements, and supported chains.',
  },
  {
    question: 'How long does it take to develop a staking platform?',
    answer:
      'A basic staking platform with single-asset support can be developed in 8-12 weeks. A liquid staking platform with derivative token minting and DeFi integrations typically takes 16-24 weeks. Enterprise-grade multi-chain staking platforms with restaking capabilities, validator dashboards, and comprehensive security audits can take 24-36 weeks from architecture to mainnet deployment.',
  },
  {
    question: 'How do you set up and manage validator nodes?',
    answer:
      'We provide end-to-end validator node setup including hardware provisioning, software configuration, key management, and monitoring infrastructure. Our setup includes redundant nodes for high availability, automated failover systems, slashing protection mechanisms, and 24/7 monitoring dashboards. We support validator setup for Ethereum, Solana, Cosmos, Polkadot, and other PoS networks with ongoing maintenance and upgrade support.',
  },
  {
    question: 'How are staking rewards calculated and distributed?',
    answer:
      'Staking rewards are typically calculated based on the amount staked, the staking duration, the network inflation rate, and the total network stake. Our platforms implement automated reward distribution through smart contracts, supporting various models including pro-rata distribution, compound staking, tiered rewards, and performance-based bonuses. We build transparent reward calculators and real-time dashboards for complete visibility.',
  },
  {
    question: 'Do you support multi-chain staking platforms?',
    answer:
      'Yes! We specialize in building multi-chain staking platforms that support staking across Ethereum, Solana, Cosmos ecosystem, Polkadot, Avalanche, and other PoS networks from a single unified interface. Our multi-chain solutions include cross-chain asset bridging, unified reward tracking, portfolio analytics, and chain-agnostic validator management with support for adding new chains as they launch.',
  },
];

export default function StakingPlatformDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Staking Platform Development Suite',
    description: 'Enterprise-grade staking platform development with liquid staking, restaking, validator node management, DeFi staking pools, and multi-chain support for Ethereum, Solana, Cosmos, and Polkadot ecosystems.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, Ethereum, Solana, Cosmos, Polkadot',
    price: '400000',
    rating: 4.9,
    reviewCount: 72,
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
      { name: 'Staking Platform Development', url: '/staking-platform-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Staking Platform Development Services',
      'Professional staking platform development including liquid staking, restaking, validator nodes, and DeFi staking pool solutions'
    ),
    generateProductSchema(
      'Staking Platform Development Package',
      'Complete staking platform development from architecture to mainnet deployment',
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
        subtitle="STAKING SOLUTIONS"
        title="Build Powerful Staking Platforms with Liquid Staking & Restaking"
        description="Enterprise-grade staking platform development with liquid staking tokens (LST), restaking protocols, validator management, and multi-chain DeFi staking pools. Maximize yield for your users."
        ctaPrimary={{ text: 'Get Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Staking Solutions', href: '#staking-types' }}
        gradient="green"
      />

      {/* What is Staking Platform Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Staking Platform Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Staking Platform Development</strong> is the process of building decentralized applications that enable users to lock their cryptocurrency tokens to support blockchain network operations and earn rewards. It encompasses developing smart contracts for token delegation, reward distribution, and slashing conditions; building liquid staking protocols that issue derivative tokens (LSTs) representing staked positions; implementing restaking mechanisms that allow staked assets to secure multiple services simultaneously; and creating validator node infrastructure with monitoring, failover, and management dashboards. Modern staking platforms support multi-chain deployment across Ethereum, Solana, Cosmos, Polkadot, and other Proof of Stake networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Staking platform development starting at ₹4,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Liquid staking with LST minting and DeFi composability
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Restaking protocols for enhanced yield and shared security
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain support (Ethereum, Solana, Cosmos, Polkadot)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Validator node setup with 99.9% uptime guarantee
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  8-36 weeks development timeline with security audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Types Grid */}
      <section id="staking-types" className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Staking Solutions We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive staking platform development for every use case
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🪙',
                title: 'Single Asset Staking',
                description: 'Classic staking platforms where users lock tokens for a fixed period to earn rewards. Supports flexible and fixed-term staking with tiered APY structures.',
              },
              {
                icon: '💧',
                title: 'Liquid Staking',
                description: 'Issue liquid staking tokens (LSTs like stETH, rETH) representing staked positions. Users earn staking rewards while maintaining liquidity for DeFi participation.',
              },
              {
                icon: '🔄',
                title: 'Restaking',
                description: 'EigenLayer-style restaking protocols allowing staked assets to secure additional Actively Validated Services (AVS) for enhanced yield and shared security.',
              },
              {
                icon: '🖥️',
                title: 'Validator Node Setup',
                description: 'End-to-end validator infrastructure with node deployment, key management, monitoring dashboards, slashing protection, and automated failover systems.',
              },
              {
                icon: '🏊',
                title: 'DeFi Staking Pools',
                description: 'Pooled staking solutions enabling users with smaller holdings to participate. Automated reward distribution, compound staking, and governance integration.',
              },
              {
                icon: '🎨',
                title: 'NFT Staking',
                description: 'NFT staking platforms where users stake NFTs to earn token rewards, access exclusive benefits, or participate in governance with time-weighted voting power.',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Staking Works - PoS Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Staking Works: Proof of Stake Explained</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the mechanics of staking, delegation, and reward distribution
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  Proof of Stake (PoS)
                </h3>
                <p className="text-gray-700 mb-4">
                  Proof of Stake is a consensus mechanism where validators are selected to create new blocks based on the amount of cryptocurrency they have staked as collateral. Unlike Proof of Work, PoS is energy-efficient and enables token holders to participate in network security.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Validators stake tokens as collateral</li>
                  <li>• Block proposers selected based on stake weight</li>
                  <li>• Malicious behavior punished via slashing</li>
                  <li>• 99.9% more energy-efficient than PoW</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">🤝</span>
                  Delegation & Rewards
                </h3>
                <p className="text-gray-700 mb-4">
                  Delegation allows token holders to assign their staking power to validators without transferring ownership. Validators operate infrastructure while delegators share in the rewards, making staking accessible to everyone regardless of technical expertise.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Delegate tokens to trusted validators</li>
                  <li>• Earn proportional rewards (4-20% APY)</li>
                  <li>• No technical knowledge required</li>
                  <li>• Maintain custody of your assets</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Staking Reward Distribution Flow</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'User Deposits Tokens', desc: 'Tokens are locked in staking smart contract with chosen lock period' },
                  { step: 2, title: 'Delegation to Validator', desc: 'Staked tokens are delegated to active validators on the network' },
                  { step: 3, title: 'Block Validation', desc: 'Validators propose and attest blocks, earning protocol rewards' },
                  { step: 4, title: 'Reward Accumulation', desc: 'Rewards accumulate based on stake weight, uptime, and performance' },
                  { step: 5, title: 'Reward Distribution', desc: 'Smart contracts auto-distribute rewards to stakers after validator commission' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{phase.title}</h4>
                      <p className="text-sm text-gray-600">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liquid Staking Deep-Dive */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liquid Staking: LST Minting & DeFi Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of staked assets with liquid staking derivatives
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3">LST Minting</h3>
                <p className="text-gray-600 mb-4">
                  When users stake tokens, the platform mints liquid staking tokens (LSTs) at a 1:1 ratio. These derivative tokens represent the staked position plus accrued rewards.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Rebase or reward-bearing token models</li>
                  <li>• ERC-20 compatible LSTs</li>
                  <li>• Real-time exchange rate oracle</li>
                  <li>• Instant minting and redemption</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-3">DeFi Composability</h3>
                <p className="text-gray-600 mb-4">
                  LSTs can be used across the DeFi ecosystem, enabling stakers to earn additional yield on top of staking rewards through lending, liquidity provision, and more.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Use LSTs as collateral on Aave, Compound</li>
                  <li>• Provide liquidity in DEX pools</li>
                  <li>• Leverage yield farming strategies</li>
                  <li>• Cross-chain LST bridging</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Derivatives & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced liquid staking platforms include yield derivatives, interest rate swaps, and comprehensive analytics for portfolio management.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Yield tokenization (PT/YT)</li>
                  <li>• Fixed-rate staking products</li>
                  <li>• Portfolio performance tracking</li>
                  <li>• Risk analytics dashboard</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Liquid Staking Platform Architecture</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Component</th>
                      <th className="px-6 py-4 text-left">Function</th>
                      <th className="px-6 py-4 text-left">Technology</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold">Staking Contract</td>
                      <td className="px-6 py-4">Accepts deposits, manages delegation</td>
                      <td className="px-6 py-4">Solidity, Vyper</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold">LST Token Contract</td>
                      <td className="px-6 py-4">Mints/burns liquid staking derivatives</td>
                      <td className="px-6 py-4">ERC-20, Rebasing</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold">Oracle Module</td>
                      <td className="px-6 py-4">Reports exchange rates and validator data</td>
                      <td className="px-6 py-4">Chainlink, Custom</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold">Validator Registry</td>
                      <td className="px-6 py-4">Manages validator set and performance</td>
                      <td className="px-6 py-4">Smart Contract + Off-chain</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold">Withdrawal Queue</td>
                      <td className="px-6 py-4">Handles unstaking with buffer pools</td>
                      <td className="px-6 py-4">FIFO Queue Contract</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Restaking: Shared Security & Enhanced Yield</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build EigenLayer-style restaking protocols for the next generation of blockchain security
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔄</span>
                  EigenLayer Model
                </h3>
                <p className="text-gray-700 mb-4">
                  Restaking extends Ethereum&apos;s economic security to new services. Validators opt-in to secure Actively Validated Services (AVS) using their existing staked ETH or LSTs, earning additional rewards while strengthening the broader ecosystem.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">How Restaking Works:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stake ETH or deposit LSTs into restaking contracts</li>
                    <li>• Opt-in to validate additional services (AVS)</li>
                    <li>• Earn base staking rewards + AVS rewards</li>
                    <li>• Receive Liquid Restaking Tokens (LRTs)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  Actively Validated Services (AVS)
                </h3>
                <p className="text-gray-700 mb-4">
                  AVS are services that leverage restaked assets for security. Instead of bootstrapping their own validator set, new protocols can tap into Ethereum&apos;s massive economic security through restaking.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">AVS Use Cases:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Oracle networks and data availability layers</li>
                    <li>• Cross-chain bridges and messaging protocols</li>
                    <li>• Sidechains and rollup sequencers</li>
                    <li>• Keeper networks and MEV protection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Restaking Platform Features We Build</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">For Restakers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>One-click native and LST restaking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>LRT minting for restaked positions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>AVS selection and risk scoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Compound reward tracking dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Slashing risk analytics</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">For Operators</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Operator registration and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Multi-AVS validation infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Performance monitoring and SLA tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Commission management and delegation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Automated slashing protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains Comparison */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Chain Staking Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build staking platforms across leading Proof of Stake networks
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Network</th>
                  <th className="px-6 py-4 text-left">Staking APY</th>
                  <th className="px-6 py-4 text-left">Min. Stake</th>
                  <th className="px-6 py-4 text-left">Unbonding Period</th>
                  <th className="px-6 py-4 text-left">Liquid Staking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-semibold">Ethereum</td>
                  <td className="px-6 py-4">3.5-5% APY</td>
                  <td className="px-6 py-4">32 ETH (Validator)</td>
                  <td className="px-6 py-4">Variable (Queue)</td>
                  <td className="px-6 py-4">stETH, rETH, cbETH</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-semibold">Solana</td>
                  <td className="px-6 py-4">6-8% APY</td>
                  <td className="px-6 py-4">No minimum</td>
                  <td className="px-6 py-4">2-3 days</td>
                  <td className="px-6 py-4">mSOL, jitoSOL, bSOL</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-semibold">Cosmos (ATOM)</td>
                  <td className="px-6 py-4">15-20% APY</td>
                  <td className="px-6 py-4">No minimum</td>
                  <td className="px-6 py-4">21 days</td>
                  <td className="px-6 py-4">stATOM, qATOM</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-semibold">Polkadot</td>
                  <td className="px-6 py-4">12-15% APY</td>
                  <td className="px-6 py-4">120 DOT</td>
                  <td className="px-6 py-4">28 days</td>
                  <td className="px-6 py-4">sDOT, vDOT</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-semibold">Avalanche</td>
                  <td className="px-6 py-4">8-10% APY</td>
                  <td className="px-6 py-4">25 AVAX</td>
                  <td className="px-6 py-4">14 days</td>
                  <td className="px-6 py-4">sAVAX, ankrAVAX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Staking',
                price: '₹4,00,000',
                features: [
                  'Single asset staking platform',
                  'Staking smart contracts',
                  'Reward distribution system',
                  'User dashboard',
                  'Testnet deployment',
                  '30-day support',
                ],
              },
              {
                name: 'Liquid Staking',
                price: '₹12,00,000',
                popular: true,
                features: [
                  'LST minting & redemption',
                  'DeFi protocol integration',
                  'Validator management',
                  'Oracle integration',
                  'Withdrawal queue system',
                  'Security audit included',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise Restaking',
                price: '₹25,00,000+',
                features: [
                  'Full restaking protocol',
                  'AVS integration framework',
                  'Multi-chain deployment',
                  'LRT token system',
                  'Operator management',
                  'Third-party security audit',
                  'Dedicated support team',
                  '1-year maintenance',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-4 ring-green-600 shadow-2xl scale-105' : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-4 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{plan.price}</div>
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
                  className="block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Staking Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Solidity', 'Rust', 'CosmWasm', 'Substrate', 'Hardhat', 'Foundry', 'The Graph', 'Chainlink'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Staking Platform Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Requirements & Architecture', time: '1-2 weeks' },
                  { step: 2, title: 'Smart Contract Development', time: '4-8 weeks' },
                  { step: 3, title: 'Validator Infrastructure Setup', time: '2-4 weeks' },
                  { step: 4, title: 'Frontend & Dashboard Development', time: '4-6 weeks' },
                  { step: 5, title: 'Security Audit & Testnet', time: '3-6 weeks' },
                  { step: 6, title: 'Mainnet Deployment & Launch', time: '1-2 weeks' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{phase.title}</h4>
                      <p className="text-sm text-gray-600">{phase.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Staking Platform Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏆', title: '12+ Years Experience', desc: 'Deep expertise in blockchain and DeFi development' },
              { icon: '🔒', title: 'Security First', desc: 'Comprehensive audits with slashing protection' },
              { icon: '💰', title: 'Cost Effective', desc: 'India pricing with global-standard quality' },
              { icon: '🌐', title: 'Multi-Chain', desc: 'Deploy across Ethereum, Solana, Cosmos, and more' },
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

      {/* Cross-Links */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/defi-solutions" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🏦</div>
              <h3 className="font-bold text-gray-900">DeFi Solutions</h3>
              <p className="text-sm text-gray-600 mt-1">DEX, Lending & Yield Farming</p>
            </Link>
            <Link href="/smart-contract-development" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📜</div>
              <h3 className="font-bold text-gray-900">Smart Contract Development</h3>
              <p className="text-sm text-gray-600 mt-1">Audited & Secure Smart Contracts</p>
            </Link>
            <Link href="/token-development-services" className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🪙</div>
              <h3 className="font-bold text-gray-900">Token Development</h3>
              <p className="text-sm text-gray-600 mt-1">ERC-20, LST & Governance Tokens</p>
            </Link>
            <Link href="/blockchain-development-company" className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">⛓️</div>
              <h3 className="font-bold text-gray-900">Blockchain Development</h3>
              <p className="text-sm text-gray-600 mt-1">Custom Blockchain Solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about staking platform development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-green-600">❓</span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-green-600 transform group-open:rotate-180 transition-transform"
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
      <section className="bg-gradient-to-br from-green-600 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Staking Platform?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Launch a secure, high-performance staking platform with liquid staking, restaking, and multi-chain support. Get expert consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Staking Platform Development" />
        </div>
      </section>
    </>
  );
}

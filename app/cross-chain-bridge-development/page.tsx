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
    title: 'Cross-Chain Bridge Development | Blockchain Interoperability | EifaSoft',
    description:
      'Expert cross-chain bridge development services. Build secure token bridges, NFT bridges, and blockchain interoperability solutions. Atomic swaps, relay chains, and multi-chain dApps. Starting at ₹6,00,000. Contact us today!',
    keywords: [
      'cross-chain bridge development',
      'blockchain interoperability',
      'cross-chain dapp development',
      'polkadot development',
      'near protocol development',
      'cosmos IBC',
      'atomic swaps',
      'bridge protocol',
      'cross-chain messaging',
      'relay chain',
      'light client verification',
      'token bridge development',
      'NFT bridge development',
      'multi-chain development',
      'bridge aggregator',
      'cross-chain liquidity',
      'blockchain bridge security',
      'cross-chain smart contracts',
      'interoperability protocol',
      'cross-chain bridge India',
      'layer 2 bridge development',
      'wormhole bridge',
      'chainlink CCIP',
      'layerzero integration',
      'cross-chain bridge company India',
      'MPC bridge development',
      'trustless bridge',
    ],
    canonical: '/cross-chain-bridge-development',
  });
}

const faqs = [
  {
    question: 'What is a cross-chain bridge in blockchain?',
    answer:
      'A cross-chain bridge is a protocol that enables the transfer of digital assets, data, and messages between two or more independent blockchain networks. Bridges solve the interoperability problem by allowing tokens minted on Ethereum to be used on Polygon, BSC, or Solana. They use mechanisms like lock-and-mint, burn-and-mint, or atomic swaps to ensure assets are securely moved without duplication or loss across chains.',
  },
  {
    question: 'What are the different types of blockchain bridges?',
    answer:
      'There are four main types of blockchain bridges: (1) Lock & Mint bridges that lock assets on the source chain and mint wrapped tokens on the destination chain, (2) Burn & Mint bridges that burn tokens on the source and mint native tokens on the destination, (3) Atomic Swap bridges that enable trustless peer-to-peer exchanges using hash time-locked contracts (HTLCs), and (4) Message Passing bridges like LayerZero and Chainlink CCIP that relay arbitrary data and instructions between chains.',
  },
  {
    question: 'What are the security risks of cross-chain bridges?',
    answer:
      'Cross-chain bridges face several security risks including smart contract vulnerabilities, validator collusion in multi-sig schemes, oracle manipulation, replay attacks, and front-running. Bridges have historically been targets for major exploits (Ronin Bridge - $625M, Wormhole - $320M, Nomad - $190M). We mitigate these risks through formal verification, multi-party computation (MPC), multiple independent validator sets, time-locked withdrawals, rate limiting, and comprehensive security audits.',
  },
  {
    question: 'How much does cross-chain bridge development cost?',
    answer:
      'Cross-chain bridge development starts at ₹6,00,000 for a basic two-chain token bridge. A full-featured multi-chain bridge with NFT support, messaging protocols, and liquidity aggregation ranges from ₹15,00,000 to ₹30,00,000+. Enterprise-grade bridges with custom consensus mechanisms, MPC validation, and regulatory compliance can exceed ₹50,00,000 depending on the number of chains, security requirements, and feature complexity.',
  },
  {
    question: 'How long does it take to build a cross-chain bridge?',
    answer:
      'A basic two-chain token bridge takes 8-12 weeks to develop. A multi-chain bridge with advanced features like NFT bridging, messaging protocols, and liquidity management takes 16-24 weeks. Enterprise solutions with custom relayer networks, MPC-based validation, and comprehensive security audits can take 24-36 weeks. Timeline depends on the number of supported chains, security audit requirements, and protocol complexity.',
  },
  {
    question: 'What is the difference between multi-chain and cross-chain?',
    answer:
      'Multi-chain refers to deploying the same application natively on multiple blockchains independently (e.g., Uniswap on Ethereum, Polygon, and Arbitrum), while cross-chain refers to enabling communication and asset transfers between different blockchains. A multi-chain approach means separate deployments with no direct interaction, while cross-chain enables seamless interoperability where assets and data flow freely between networks through bridge protocols.',
  },
  {
    question: 'What are bridge aggregators and how do they work?',
    answer:
      'Bridge aggregators are platforms that connect to multiple cross-chain bridges and routing protocols to find the optimal path for transferring assets between blockchains. They compare fees, speed, and security across different bridges (Wormhole, Stargate, Across, Hop Protocol) and automatically route transactions through the most efficient path. Examples include LI.FI, Socket, and Bungee, which save users from manually comparing bridge options.',
  },
  {
    question: 'Which interoperability protocols do you integrate with?',
    answer:
      'We integrate with all major interoperability protocols including Chainlink CCIP for secure cross-chain messaging, LayerZero for omnichain applications, Wormhole for multi-chain asset transfers, Cosmos IBC for inter-blockchain communication, Polkadot XCM for parachain messaging, Axelar for general message passing, and Hyperlane for permissionless interoperability. We also build custom relay networks and light client-based verification systems for specialized requirements.',
  },
];

export default function CrossChainBridgeDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Cross-Chain Bridge Development Platform',
    description: 'Enterprise-grade cross-chain bridge development platform enabling secure token transfers, NFT bridging, cross-chain messaging, and multi-chain interoperability across Ethereum, Polygon, BSC, Solana, Cosmos, and 20+ blockchain networks.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, Polygon, BSC, Solana, Cosmos, Polkadot, Arbitrum, Optimism, Avalanche',
    price: '600000',
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
      { name: 'Cross-Chain Bridge Development', url: '/cross-chain-bridge-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Cross-Chain Bridge Development Services',
      'Professional cross-chain bridge development including token bridges, NFT bridges, messaging protocols, and blockchain interoperability solutions'
    ),
    generateProductSchema(
      'Cross-Chain Bridge Development Package',
      'Complete cross-chain bridge development from architecture design to multi-chain deployment with security audits',
      '600000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="BLOCKCHAIN INTEROPERABILITY"
        title="Cross-Chain Bridge Development for Seamless Blockchain Connectivity"
        description="Build secure, high-performance cross-chain bridges that enable trustless asset transfers and messaging across Ethereum, Polygon, BSC, Solana, Cosmos, and 20+ blockchain networks. Enterprise-grade interoperability solutions."
        ctaPrimary={{ text: 'Get Bridge Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Bridge Solutions', href: '/portfolio' }}
        gradient="purple"
      />

      {/* What is Cross-Chain Bridge Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Cross-Chain Bridge Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Cross-Chain Bridge Development</strong> is the process of building decentralized protocols that enable the secure transfer of digital assets, tokens, NFTs, and arbitrary data between independent blockchain networks. It involves designing smart contracts on multiple chains, implementing validation mechanisms (multi-sig, MPC, light clients, or optimistic verification), building relayer infrastructure, and creating user-facing interfaces for seamless cross-chain transactions. Cross-chain bridges are critical infrastructure for blockchain interoperability, enabling DeFi protocols, NFT marketplaces, and dApps to operate across Ethereum, Polygon, BSC, Solana, Cosmos, Polkadot, and other networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">&#10003;</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Cross-chain bridge development starting at &#8377;6,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Support for 20+ blockchain networks including L1 and L2
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  4 bridge types: Lock &amp; Mint, Burn &amp; Mint, Atomic Swap, Message Passing
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Multi-layer security: MPC, multi-sig, rate limiting, formal verification
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  8-36 weeks development timeline based on complexity
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  90-day post-launch support with 24/7 bridge monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Types Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cross-Chain Bridge Types Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different bridge architectures to choose the right solution for your use case
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Bridge Type</th>
                  <th className="px-6 py-4 text-left">Mechanism</th>
                  <th className="px-6 py-4 text-left">Security Model</th>
                  <th className="px-6 py-4 text-left">Speed</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Lock &amp; Mint</td>
                  <td className="px-6 py-4">Lock tokens on source, mint wrapped tokens on destination</td>
                  <td className="px-6 py-4">Multi-sig / MPC validators</td>
                  <td className="px-6 py-4">5-30 min</td>
                  <td className="px-6 py-4">ERC-20 token transfers, DeFi liquidity</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Burn &amp; Mint</td>
                  <td className="px-6 py-4">Burn tokens on source, mint native tokens on destination</td>
                  <td className="px-6 py-4">Consensus-level verification</td>
                  <td className="px-6 py-4">10-60 min</td>
                  <td className="px-6 py-4">Native multi-chain tokens, stablecoins</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Atomic Swap</td>
                  <td className="px-6 py-4">Hash time-locked contracts (HTLCs) for trustless exchange</td>
                  <td className="px-6 py-4">Cryptographic (trustless)</td>
                  <td className="px-6 py-4">1-15 min</td>
                  <td className="px-6 py-4">P2P token swaps, DEX cross-chain</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Message Passing</td>
                  <td className="px-6 py-4">Relay arbitrary data and instructions between chains</td>
                  <td className="px-6 py-4">Oracle networks / Light clients</td>
                  <td className="px-6 py-4">2-20 min</td>
                  <td className="px-6 py-4">Cross-chain dApps, governance, NFTs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Cross-Chain Bridge Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🪙',
                title: 'Token Bridge Development',
                description: 'Build secure token bridges for ERC-20, BEP-20, and SPL tokens with lock-and-mint or burn-and-mint mechanisms. Support for multi-chain liquidity pools and wrapped asset management across 20+ networks.',
              },
              {
                icon: '🎨',
                title: 'NFT Bridge Development',
                description: 'Cross-chain NFT transfer protocols supporting ERC-721 and ERC-1155 standards. Enable NFT collections to move seamlessly between Ethereum, Polygon, Solana, and other networks while preserving metadata and provenance.',
              },
              {
                icon: '📡',
                title: 'Messaging Protocol Development',
                description: 'Build custom cross-chain messaging layers for arbitrary data transfer. Integrate with LayerZero, Chainlink CCIP, Wormhole, and Axelar for omnichain dApp communication and cross-chain governance.',
              },
              {
                icon: '💧',
                title: 'Liquidity Bridge Development',
                description: 'Develop unified liquidity bridges that aggregate liquidity across multiple chains. AMM-based cross-chain swaps, liquidity pool management, and incentivized bridging with minimal slippage.',
              },
              {
                icon: '🔄',
                title: 'Bridge Aggregator Development',
                description: 'Build bridge aggregation platforms that compare routes across multiple bridges (Stargate, Hop, Across, Wormhole) to find optimal paths for speed, cost, and security. Smart routing and split-path transfers.',
              },
              {
                icon: '🔗',
                title: 'Custom Interoperability Solutions',
                description: 'Design bespoke interoperability frameworks with custom relay networks, light client verification, zero-knowledge proofs, and MPC-based validation for enterprise-grade cross-chain communication.',
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

      {/* Bridge Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridge Security Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security approach to protect against bridge exploits and ensure safe asset transfers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🛡️</span>
                Bridge Vulnerability Prevention
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Reentrancy guard on all bridge contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Replay attack protection with nonce tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Rate limiting and maximum transfer caps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Time-locked withdrawals for large transfers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔐</span>
                Multi-Sig Validation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>M-of-N multi-signature validator sets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Geographically distributed validator nodes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Validator rotation and slashing mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Emergency pause and recovery procedures</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔑</span>
                MPC (Multi-Party Computation)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Threshold signature schemes (TSS)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>No single point of failure in key management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Key resharing without changing public keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Hardware security module (HSM) integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🌐</span>
                Relay Network Security
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Light client verification on destination chain</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Fraud proof and optimistic verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Zero-knowledge proof integration (zkBridges)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>24/7 monitoring with anomaly detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Blockchain Networks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build bridges connecting all major Layer 1 and Layer 2 blockchain networks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Ethereum',
                type: 'Layer 1',
                desc: 'The largest smart contract platform. Bridge to and from the Ethereum mainnet with full ERC-20, ERC-721, and ERC-1155 support.',
                color: 'from-blue-50 to-indigo-50',
                border: 'border-blue-500',
              },
              {
                name: 'Binance Smart Chain',
                type: 'Layer 1',
                desc: 'High-throughput EVM-compatible chain. Enable BEP-20 token bridging with low fees and fast confirmations.',
                color: 'from-yellow-50 to-orange-50',
                border: 'border-yellow-500',
              },
              {
                name: 'Polygon',
                type: 'Layer 2',
                desc: 'Ethereum scaling solution. Bridge assets between Ethereum and Polygon with native PoS bridge integration.',
                color: 'from-purple-50 to-violet-50',
                border: 'border-purple-500',
              },
              {
                name: 'Arbitrum',
                type: 'Layer 2 (Optimistic)',
                desc: 'Leading optimistic rollup. Build bridges with fraud-proof verification and 7-day withdrawal windows or fast exit solutions.',
                color: 'from-blue-50 to-cyan-50',
                border: 'border-cyan-500',
              },
              {
                name: 'Optimism',
                type: 'Layer 2 (Optimistic)',
                desc: 'OP Stack-based rollup. Cross-chain messaging and asset transfers with optimistic verification and Superchain interop.',
                color: 'from-red-50 to-pink-50',
                border: 'border-red-500',
              },
              {
                name: 'Solana',
                type: 'Layer 1',
                desc: 'High-performance non-EVM chain. SPL token bridging via Wormhole, custom relayers, and message-passing protocols.',
                color: 'from-green-50 to-teal-50',
                border: 'border-green-500',
              },
              {
                name: 'Avalanche',
                type: 'Layer 1 (Subnet)',
                desc: 'Multi-chain architecture with subnets. Build bridges across C-Chain, X-Chain, and custom Avalanche subnets.',
                color: 'from-red-50 to-orange-50',
                border: 'border-red-600',
              },
              {
                name: 'Cosmos (IBC)',
                type: 'Layer 0',
                desc: 'Inter-Blockchain Communication protocol. Enable seamless interoperability across the Cosmos ecosystem and IBC-enabled chains.',
                color: 'from-indigo-50 to-purple-50',
                border: 'border-indigo-500',
              },
            ].map((chain, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${chain.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 ${chain.border}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{chain.name}</h3>
                  <span className="text-xs bg-white px-2 py-1 rounded-full font-medium text-gray-600">{chain.type}</span>
                </div>
                <p className="text-gray-600 text-sm">{chain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interoperability Protocols We Integrate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Interoperability Protocols We Integrate
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Chainlink CCIP', 'LayerZero', 'Wormhole', 'Cosmos IBC', 'Polkadot XCM', 'Axelar', 'Hyperlane', 'Stargate'].map((protocol) => (
                <div
                  key={protocol}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 text-center font-semibold"
                >
                  {protocol}
                </div>
              ))}
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Bridge Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Architecture & Protocol Design', time: '2-3 weeks' },
                  { step: 2, title: 'Smart Contract Development (Multi-Chain)', time: '4-8 weeks' },
                  { step: 3, title: 'Relayer & Validator Infrastructure', time: '3-5 weeks' },
                  { step: 4, title: 'Frontend & SDK Integration', time: '2-4 weeks' },
                  { step: 5, title: 'Security Audit & Penetration Testing', time: '3-6 weeks' },
                  { step: 6, title: 'Testnet Deployment & Monitoring Setup', time: '2-3 weeks' },
                  { step: 7, title: 'Mainnet Launch & 24/7 Monitoring', time: '1-2 weeks' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Bridge Development Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Bridge',
                price: '₹6,00,000',
                features: [
                  'Two-chain token bridge',
                  'Lock & Mint mechanism',
                  'Basic multi-sig validation (3-of-5)',
                  'ERC-20 token support',
                  'Bridge UI dashboard',
                  'Basic security audit',
                  'Testnet + mainnet deployment',
                  '90-day support',
                ],
              },
              {
                name: 'Multi-Chain Bridge',
                price: '₹15,00,000',
                popular: true,
                features: [
                  'Up to 5 blockchain networks',
                  'Token + NFT bridging',
                  'MPC-based validation',
                  'Cross-chain messaging',
                  'Liquidity pool management',
                  'Bridge aggregation routing',
                  'Comprehensive security audit',
                  'Rate limiting & monitoring',
                  '6-month support',
                ],
              },
              {
                name: 'Enterprise Bridge',
                price: '₹30,00,000+',
                features: [
                  'Unlimited chain support',
                  'Custom consensus mechanism',
                  'Light client verification',
                  'ZK-proof integration',
                  'Custom relayer network',
                  'SDK & API for developers',
                  'Third-party audit (CertiK/Trail of Bits)',
                  '24/7 monitoring & alerting',
                  '1-year maintenance & support',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-4 ring-purple-600 shadow-2xl scale-105' : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">{plan.price}</div>
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
                  className="block w-full text-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
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
              Explore our full suite of blockchain development services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link href="/blockchain-development-company" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Blockchain Development</h3>
              <p className="text-gray-600 text-sm">Custom blockchain solutions, EVM-compatible chains, smart contracts, and Web3 integration for enterprises.</p>
            </Link>
            <Link href="/defi-solutions" className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">DeFi Solutions</h3>
              <p className="text-gray-600 text-sm">Decentralized finance protocols, DEX development, lending platforms, yield farming, and liquidity solutions.</p>
            </Link>
            <Link href="/smart-contract-development" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Smart Contract Development</h3>
              <p className="text-gray-600 text-sm">Secure smart contract development in Solidity and Rust with comprehensive audits and formal verification.</p>
            </Link>
            <Link href="/token-development-services" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Token Development</h3>
              <p className="text-gray-600 text-sm">ERC-20, BEP-20, SPL token creation with tokenomics design, vesting contracts, and governance mechanisms.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose EifaSoft */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Cross-Chain Bridge Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🛡️', title: 'Security-First Approach', desc: 'Multi-layer security with MPC, formal verification, and third-party audits' },
              { icon: '🌐', title: '20+ Chains Supported', desc: 'Bridges across all major L1 and L2 networks' },
              { icon: '💰', title: 'Cost Effective', desc: 'India-based pricing with enterprise-grade quality' },
              { icon: '⚡', title: 'Rapid Deployment', desc: 'Battle-tested bridge modules for faster time-to-market' },
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
              Common questions about cross-chain bridge development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-purple-600">&#10067;</span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-purple-600 transform group-open:rotate-180 transition-transform"
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
      <section className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Cross-Chain Bridge?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect multiple blockchains with secure, high-performance bridge infrastructure. Get expert consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Free Bridge Consultation
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
          <ContactForm serviceName="Cross-Chain Bridge Development" />
        </div>
      </section>
    </>
  );
}

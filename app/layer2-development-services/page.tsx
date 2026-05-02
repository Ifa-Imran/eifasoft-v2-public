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
    title: 'Layer 2 Development Services | Arbitrum, Optimism, zkSync | EifaSoft',
    description:
      'Expert Layer 2 development services for Arbitrum, Optimism, zkSync, Base & Polygon zkEVM. Build scalable L2 DApps, custom rollups, bridges & sequencer infrastructure. Starting at ₹3,00,000. Contact us!',
    keywords: [
      'layer 2 development',
      'optimism development',
      'arbitrum development',
      'zk rollup development',
      'optimistic rollup',
      'polygon zkEVM development',
      'ethereum development',
      'polygon development',
      'avalanche development',
      'rollup development',
      'sequencer development',
      'fraud proofs',
      'validity proofs',
      'data availability',
      'zkSync development',
      'base chain development',
      'L2 DApp development',
      'custom rollup development',
      'bridge development',
      'smart contract migration L2',
      'L2 infrastructure',
      'layer 2 scaling solutions',
      'ethereum scaling',
      'L2 blockchain development india',
      'scroll development',
      'layer 2 development company',
      'L2 smart contracts',
    ],
    canonical: '/layer2-development-services',
  });
}

const faqs = [
  {
    question: 'What are Layer 2 (L2) blockchain solutions?',
    answer:
      'Layer 2 solutions are secondary protocols built on top of Layer 1 blockchains like Ethereum to improve scalability and reduce transaction costs. They process transactions off the main chain while inheriting the security of the underlying L1. Popular L2 types include Optimistic Rollups (Arbitrum, Optimism, Base) and ZK Rollups (zkSync, Polygon zkEVM, Scroll) that bundle hundreds of transactions into a single L1 transaction.',
  },
  {
    question: 'What is the difference between Optimistic Rollups and ZK Rollups?',
    answer:
      'Optimistic Rollups (Arbitrum, Optimism) assume transactions are valid by default and use fraud proofs with a 7-day challenge period for disputes. They offer high EVM compatibility and lower development complexity. ZK Rollups (zkSync, Polygon zkEVM, Scroll) use validity proofs (zero-knowledge proofs) to mathematically verify every transaction batch, providing instant finality on L1. ZK Rollups offer stronger security guarantees but are more complex to develop.',
  },
  {
    question: 'How much does Layer 2 development cost?',
    answer:
      'L2 DApp development starts at ₹3,00,000 for deploying and optimizing smart contracts on existing L2 networks like Arbitrum or Optimism. Custom rollup development ranges from ₹10,00,000 to ₹25,00,000+ depending on the rollup type (Optimistic vs ZK), sequencer setup, bridge infrastructure, and data availability requirements. Enterprise L2 chain deployments with custom sequencers start at ₹25,00,000+.',
  },
  {
    question: 'How long does it take to develop an L2 solution?',
    answer:
      'Deploying DApps on existing L2 networks takes 4-8 weeks including contract migration, testing, and optimization. Custom Optimistic Rollup development takes 12-20 weeks. ZK Rollup development requires 16-30 weeks due to the complexity of zero-knowledge circuits. Full enterprise L2 chain deployment with bridge and sequencer infrastructure takes 20-36 weeks.',
  },
  {
    question: 'Which Layer 2 network should I choose for my project?',
    answer:
      'The best L2 depends on your use case. Arbitrum is ideal for DeFi with the largest ecosystem and TVL. Optimism suits governance-heavy projects with its OP Stack. Base is great for consumer apps with Coinbase integration. zkSync Era offers future-proof ZK security with EVM compatibility. Polygon zkEVM provides seamless Ethereum compatibility. Scroll excels in EVM equivalence. We help you evaluate trade-offs in cost, finality, and developer tooling.',
  },
  {
    question: 'Can you build a custom Layer 2 chain for our business?',
    answer:
      'Yes! We build custom L2 chains using the OP Stack (Optimism framework), Arbitrum Orbit, zkSync Hyperchains, and Polygon CDK. Custom L2 chains give you full control over gas fees, sequencer revenue, governance, and transaction ordering. This is ideal for enterprises, gaming studios, and DeFi protocols that need dedicated blockspace and custom execution environments.',
  },
  {
    question: 'How does cross-chain bridging work on Layer 2?',
    answer:
      'L2 bridges enable asset transfers between Layer 1 (Ethereum) and Layer 2 networks. Native bridges use the rollup\'s built-in messaging system with security guarantees from the L1. Third-party bridges (Across, Stargate, Hop) offer faster transfers across multiple L2s. We develop custom bridge contracts, liquidity pools, and relayer infrastructure for seamless cross-chain asset movement.',
  },
  {
    question: 'Can you migrate our existing Ethereum DApp to Layer 2?',
    answer:
      'Absolutely! Most Ethereum DApps can be migrated to L2 with minimal code changes since leading L2s are EVM-compatible. Our migration process includes smart contract audit and optimization for L2 gas mechanics, deployment to testnet, frontend Web3 provider updates, subgraph migration, bridge integration for asset movement, and thorough testing. Typical migrations take 4-8 weeks.',
  },
];

export default function Layer2DevelopmentServicesPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Layer 2 Development Platform',
    description: 'Enterprise-grade Layer 2 blockchain development platform with rollup deployment, bridge development, sequencer infrastructure, smart contract migration, and multi-L2 DApp development for DeFi, gaming, and enterprise solutions.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Arbitrum, Optimism, zkSync, Base, Polygon zkEVM, Scroll',
    price: '300000',
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
      { name: 'Layer 2 Development Services', url: '/layer2-development-services' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Layer 2 Development Services',
      'Professional Layer 2 blockchain development including L2 DApps, custom rollups, bridges, sequencer setup, and smart contract migration for Arbitrum, Optimism, zkSync, Base, and Polygon zkEVM'
    ),
    generateProductSchema(
      'Layer 2 Development Package',
      'Complete L2 development from architecture and rollup selection to deployment and bridge integration',
      '300000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="LAYER 2 SCALING"
        title="Build Lightning-Fast L2 Solutions on Arbitrum, Optimism & zkSync"
        description="Enterprise-grade Layer 2 development with custom rollups, bridge infrastructure, and sequencer setup. Reduce gas costs by 100x while inheriting Ethereum's security."
        ctaPrimary={{ text: 'Get Free L2 Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'Compare L2 Networks', href: '#l2-comparison' }}
        gradient="blue"
      />

      {/* What is Layer 2 Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Layer 2 (L2) Blockchain Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Layer 2 (L2) Blockchain Development</strong> is the process of building scalable applications and infrastructure on secondary protocols that operate on top of Layer 1 blockchains like Ethereum. L2 solutions use rollup technology — either <strong>Optimistic Rollups</strong> (Arbitrum, Optimism, Base) or <strong>ZK Rollups</strong> (zkSync Era, Polygon zkEVM, Scroll) — to batch hundreds of transactions off-chain and post compressed proofs to the main chain. This reduces gas costs by 10-100x while inheriting the security and decentralization of Ethereum. L2 developers work with Solidity smart contracts, bridge protocols, sequencer infrastructure, data availability layers, and cross-chain messaging to create fast, affordable, and secure decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  L2 DApp development starting at ₹3,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Deploy on Arbitrum, Optimism, zkSync, Base & more
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Reduce gas costs by 10-100x vs Ethereum mainnet
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Custom rollup & sequencer development available
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cross-chain bridge & messaging infrastructure
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  90-day post-launch support included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* L2 Comparison Table */}
      <section id="l2-comparison" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layer 2 Network Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right L2 network for your project based on performance, cost, and compatibility
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">L2 Network</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">TPS</th>
                  <th className="px-6 py-4 text-left">Avg Tx Cost</th>
                  <th className="px-6 py-4 text-left">L1 Finality</th>
                  <th className="px-6 py-4 text-left">EVM Compatibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Arbitrum One</td>
                  <td className="px-6 py-4">Optimistic Rollup</td>
                  <td className="px-6 py-4">~40,000</td>
                  <td className="px-6 py-4">$0.01-0.10</td>
                  <td className="px-6 py-4">~7 days</td>
                  <td className="px-6 py-4">Full EVM (Nitro)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Optimism</td>
                  <td className="px-6 py-4">Optimistic Rollup</td>
                  <td className="px-6 py-4">~2,000</td>
                  <td className="px-6 py-4">$0.01-0.15</td>
                  <td className="px-6 py-4">~7 days</td>
                  <td className="px-6 py-4">EVM Equivalent</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">zkSync Era</td>
                  <td className="px-6 py-4">ZK Rollup</td>
                  <td className="px-6 py-4">~2,000</td>
                  <td className="px-6 py-4">$0.02-0.20</td>
                  <td className="px-6 py-4">~1 hour</td>
                  <td className="px-6 py-4">EVM Compatible (zkEVM)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Base</td>
                  <td className="px-6 py-4">Optimistic Rollup</td>
                  <td className="px-6 py-4">~2,000</td>
                  <td className="px-6 py-4">$0.005-0.05</td>
                  <td className="px-6 py-4">~7 days</td>
                  <td className="px-6 py-4">EVM Equivalent (OP Stack)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Polygon zkEVM</td>
                  <td className="px-6 py-4">ZK Rollup</td>
                  <td className="px-6 py-4">~2,000</td>
                  <td className="px-6 py-4">$0.02-0.15</td>
                  <td className="px-6 py-4">~30 min</td>
                  <td className="px-6 py-4">EVM Equivalent (Type 2)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Scroll</td>
                  <td className="px-6 py-4">ZK Rollup</td>
                  <td className="px-6 py-4">~2,000</td>
                  <td className="px-6 py-4">$0.02-0.20</td>
                  <td className="px-6 py-4">~30 min</td>
                  <td className="px-6 py-4">EVM Equivalent (bytecode)</td>
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
            Our Layer 2 Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔷',
                title: 'L2 DApp Development',
                description: 'Build high-performance decentralized applications on Arbitrum, Optimism, zkSync, and Base with optimized gas usage and sub-second confirmations.',
              },
              {
                icon: '🔄',
                title: 'Custom Rollup Development',
                description: 'Deploy your own L2 chain using OP Stack, Arbitrum Orbit, zkSync Hyperchains, or Polygon CDK with custom gas tokens and execution rules.',
              },
              {
                icon: '🌉',
                title: 'Bridge Development',
                description: 'Build secure cross-chain bridges for asset transfers between L1 and L2 networks with liquidity pools, relayers, and message passing protocols.',
              },
              {
                icon: '📋',
                title: 'Smart Contract Migration',
                description: 'Migrate and optimize existing Ethereum smart contracts to L2 networks with gas optimization, testing, subgraph migration, and frontend updates.',
              },
              {
                icon: '🏗️',
                title: 'L2 Infrastructure',
                description: 'Set up RPC nodes, indexers, block explorers, oracles, and monitoring dashboards for your Layer 2 deployment with 99.9% uptime.',
              },
              {
                icon: '⚙️',
                title: 'Sequencer Setup',
                description: 'Deploy and configure custom sequencers for your L2 chain with transaction ordering policies, MEV protection, and decentralized sequencer networks.',
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

      {/* L2 Types Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Layer 2 Scaling Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different L2 architectures and their trade-offs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🟢</span>
                <h3 className="text-xl font-bold">Optimistic Rollups</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Execute transactions off-chain and post transaction data to L1. Assume transactions are valid by default and use <strong>fraud proofs</strong> during a 7-day challenge window to dispute invalid state transitions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• <strong>Platforms:</strong> Arbitrum, Optimism, Base</li>
                <li>• <strong>Pros:</strong> High EVM compatibility, mature tooling, large ecosystem</li>
                <li>• <strong>Cons:</strong> 7-day withdrawal delay, relies on at least one honest validator</li>
                <li>• <strong>Best for:</strong> DeFi, DAOs, general-purpose DApps</li>
              </ul>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Finality:</strong> Instant soft finality on L2; ~7 days for L1 settlement
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔵</span>
                <h3 className="text-xl font-bold">ZK Rollups</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generate cryptographic <strong>validity proofs</strong> (SNARKs/STARKs) for every batch of transactions. The L1 smart contract verifies the proof, ensuring all transactions are mathematically correct without re-executing them.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• <strong>Platforms:</strong> zkSync Era, Polygon zkEVM, Scroll, StarkNet</li>
                <li>• <strong>Pros:</strong> Fast L1 finality, stronger security, smaller proof size</li>
                <li>• <strong>Cons:</strong> Higher computation cost, EVM compatibility challenges</li>
                <li>• <strong>Best for:</strong> Payments, exchanges, high-frequency trading</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Finality:</strong> Instant soft finality on L2; ~30 min to 1 hour for L1 settlement
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🟡</span>
                <h3 className="text-xl font-bold">Validium</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Similar to ZK Rollups but stores transaction data <strong>off-chain</strong> using a Data Availability Committee (DAC) instead of posting it to L1. This dramatically reduces costs but trades off some data availability guarantees.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• <strong>Platforms:</strong> StarkEx (Validium mode), Polygon Miden</li>
                <li>• <strong>Pros:</strong> Ultra-low fees, high throughput, ZK security for execution</li>
                <li>• <strong>Cons:</strong> Weaker data availability, requires trust in DAC</li>
                <li>• <strong>Best for:</strong> Gaming, NFT minting, high-volume low-value transactions</li>
              </ul>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                <strong>Finality:</strong> Near-instant; data availability depends on off-chain committee
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🟣</span>
                <h3 className="text-xl font-bold">Plasma</h3>
              </div>
              <p className="text-gray-600 mb-4">
                An earlier L2 design that creates child chains anchored to Ethereum. Transactions are processed on child chains with periodic state commitments to L1. Users can exit to L1 using <strong>exit proofs</strong> if the operator misbehaves.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• <strong>Platforms:</strong> OMG Network, Polygon (original PoS)</li>
                <li>• <strong>Pros:</strong> Very high throughput, low cost, proven technology</li>
                <li>• <strong>Cons:</strong> Complex exit game, limited smart contract support</li>
                <li>• <strong>Best for:</strong> Simple token transfers, payment channels</li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Finality:</strong> Varies; exit period typically 7-14 days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layer 2 Use Cases We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications leveraging L2 scaling for performance and cost savings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                DeFi on Layer 2
              </h3>
              <p className="text-gray-700 mb-4">
                Deploy AMMs, lending protocols, perpetual exchanges, and yield aggregators on L2 networks with gas costs under $0.10 per transaction and near-instant confirmation times.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Concentrated liquidity AMMs (Uniswap V3 style)</li>
                  <li>• Cross-L2 liquidity aggregation</li>
                  <li>• L2-native lending with Chainlink oracles</li>
                  <li>• MEV-protected transaction ordering</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Networks:</span>
                <span>Arbitrum, Optimism, zkSync Era, Base</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎮</span>
                Gaming on Layer 2
              </h3>
              <p className="text-gray-700 mb-4">
                Build blockchain games with thousands of on-chain actions per second at near-zero cost. L2 enables true ownership of in-game assets without the gas burden of Ethereum mainnet.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gasless meta-transactions for players</li>
                  <li>• On-chain game state with Validium data</li>
                  <li>• NFT marketplace with instant trades</li>
                  <li>• Play-to-earn tokenomics on L2</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Networks:</span>
                <span>Arbitrum Nova, Immutable zkEVM, Base</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                NFTs on Layer 2
              </h3>
              <p className="text-gray-700 mb-4">
                Mint and trade NFTs at a fraction of Ethereum mainnet cost. L2 NFT platforms enable mass minting, instant listings, and gasless transfers while maintaining Ethereum security.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Batch minting of 10,000+ NFTs under $10</li>
                  <li>• Creator royalty enforcement on-chain</li>
                  <li>• Cross-L2 NFT bridging</li>
                  <li>• Dynamic metadata with IPFS + Arweave</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Networks:</span>
                <span>Optimism, zkSync, Polygon zkEVM, Scroll</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Enterprise Layer 2
              </h3>
              <p className="text-gray-700 mb-4">
                Deploy private or semi-private L2 chains for enterprise use cases like supply chain, identity, and settlement with custom gas tokens and permissioned validators.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom Arbitrum Orbit or OP Stack chain</li>
                  <li>• Permissioned sequencer with KYC</li>
                  <li>• Private transaction execution</li>
                  <li>• Fiat on-ramp and custom gas token</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Frameworks:</span>
                <span>Arbitrum Orbit, OP Stack, Polygon CDK, zkSync Hyperchains</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'L2 DApp Starter',
                price: '₹3,00,000',
                features: [
                  'Smart contract deployment on L2',
                  'Contract optimization for L2 gas',
                  'Frontend Web3 integration',
                  'Testnet + mainnet deployment',
                  'Bridge integration (native)',
                  '30-day support',
                ],
              },
              {
                name: 'Custom Rollup',
                price: '₹10,00,000',
                popular: true,
                features: [
                  'Custom L2 chain (OP Stack / Orbit)',
                  'Sequencer setup & configuration',
                  'Native bridge deployment',
                  'Block explorer setup',
                  'RPC node infrastructure',
                  'Security audit included',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise L2',
                price: '₹25,00,000+',
                features: [
                  'Full custom L2 chain deployment',
                  'ZK or Optimistic rollup choice',
                  'Decentralized sequencer network',
                  'Custom data availability layer',
                  'Multi-chain bridge infrastructure',
                  'Third-party security audit',
                  'Dedicated support team',
                  '1-year maintenance',
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

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Layer 2 Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Arbitrum', 'Optimism', 'zkSync', 'Base', 'Polygon zkEVM', 'Scroll', 'Solidity', 'Hardhat'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">L2 Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'L2 Assessment & Network Selection', time: '1-2 weeks' },
                  { step: 2, title: 'Smart Contract Development & Migration', time: '4-8 weeks' },
                  { step: 3, title: 'Bridge & Infrastructure Setup', time: '3-6 weeks' },
                  { step: 4, title: 'Security Audit & L2 Testing', time: '2-4 weeks' },
                  { step: 5, title: 'Mainnet Deployment & Monitoring', time: '1-2 weeks' },
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

      {/* Cross-Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Related Blockchain Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link
              href="/blockchain-development-company"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">⛓️</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Blockchain Development</h3>
              <p className="text-sm text-gray-600">Custom blockchain solutions, DApps & Web3 integration</p>
            </Link>
            <Link
              href="/smart-contract-development"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Smart Contract Development</h3>
              <p className="text-sm text-gray-600">Secure Solidity contracts with auditing & formal verification</p>
            </Link>
            <Link
              href="/defi-solutions"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">DeFi Solutions</h3>
              <p className="text-sm text-gray-600">AMMs, lending protocols, yield farming & DEX development</p>
            </Link>
            <Link
              href="/cross-chain-bridge-development"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">🌉</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Cross-Chain Bridge</h3>
              <p className="text-sm text-gray-600">Secure asset bridging across L1, L2 & multi-chain networks</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Layer 2 Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏆', title: '12+ Years Experience', desc: 'Deep expertise in blockchain and L2 scaling solutions' },
              { icon: '🔒', title: 'Security First', desc: 'Comprehensive audits with fraud/validity proof verification' },
              { icon: '💰', title: 'Cost Effective', desc: 'India pricing with global quality L2 development' },
              { icon: '🚀', title: 'Fast Delivery', desc: 'Agile L2 development with weekly demos and milestones' },
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about Layer 2 development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-blue-600">❓</span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-blue-600 transform group-open:rotate-180 transition-transform"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale with Layer 2?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Reduce gas costs by 100x and unlock thousands of TPS. Get expert L2 consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Free L2 Consultation
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
          <ContactForm serviceName="Layer 2 Development" />
        </div>
      </section>
    </>
  );
}

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
    title: 'Blockchain Development Company - Build Secure & Scalable Solutions',
    description:
      'Expert blockchain development services. Build EVM-compatible chains, smart contracts, DApps, and Web3 solutions. Starting at ₹1,50,000. 12+ years experience. Contact us today!',
    keywords: [
      'blockchain development',
      'smart contracts',
      'ethereum development',
      'web3 development',
      'blockchain company',
      'cryptocurrency development',
      'solidity development',
      'dapp development',
      'nft development',
      'defi development',
      'blockchain consulting india',
      'smart contract audit',
      'evm blockchain development',
      'binance smart chain development',
      'polygon blockchain development',
      'web3 integration',
      'blockchain security audit',
      'token development',
      'blockchain development company india',
      'crypto exchange development',
      'enterprise blockchain solutions',
      'blockchain moradabad',
      // Layer 2 Development Keywords
      'layer 2 development',
      'optimism development',
      'arbitrum development',
      'zk rollup development',
      'polygon zkEVM development',
      'zksync development',
      'starknet development',
      // zkEVM Keywords
      'polygon zkEVM',
      'zk rollup',
      'optimistic rollup',
      'zero knowledge proof',
      'layer 2 scaling',
      // Cross-chain & Interoperability
      'cross-chain dapp development',
      'blockchain interoperability',
      'cross-chain bridge development',
      'multi-chain development',
      'atomic swaps',
      // High Volume Core Keywords
      'blockchain technology',
      'blockchain definition',
      'blockchain wallet',
      // Industry-Specific Blockchain
      'blockchain in healthcare',
      'blockchain in supply chain',
      'blockchain in finance',
      'blockchain in real estate',
      'blockchain in government',
      'blockchain for identity',
      // Location-Based Keywords
      'blockchain development company bangalore',
      'blockchain development company mumbai',
      'blockchain development company delhi',
      'blockchain development company hyderabad',
      'blockchain development company pune',
    ],
    canonical: '/blockchain-development-company',
  });
}

const faqs = [
  {
    question: 'What blockchain platforms do you develop on?',
    answer:
      'We specialize in Ethereum, Binance Smart Chain, Polygon, Solana, and can develop on any EVM-compatible blockchain. We also build custom blockchain solutions tailored to your requirements.',
  },
  {
    question: 'How much does blockchain development cost?',
    answer:
      'Blockchain development starts at ₹1,50,000 for basic smart contracts. Complex DApps and enterprise solutions range from ₹5,00,000 to ₹50,00,000+ depending on features, security audits, and integrations required.',
  },
  {
    question: 'How long does it take to develop a blockchain solution?',
    answer:
      'Simple smart contracts can be developed in 2-4 weeks. Complex DApps and blockchain platforms typically take 12-24 weeks including development, testing, security audits, and deployment.',
  },
  {
    question: 'Do you provide security audits for smart contracts?',
    answer:
      'Yes! We include comprehensive security audits in our blockchain development process. Our team performs thorough code reviews and can arrange third-party audits from reputable firms for high-value projects.',
  },
  {
    question: 'What post-launch support do you provide?',
    answer:
      'We provide 90-day hypercare support including bug fixes, performance monitoring, security updates, and user support. Extended maintenance packages are available for ongoing blockchain operations.',
  },
  {
    question: 'Can you integrate blockchain with our existing systems?',
    answer:
      'Absolutely! We specialize in integrating blockchain solutions with existing web applications, mobile apps, databases, and enterprise systems through REST APIs and Web3 interfaces.',
  },
];

export default function BlockchainDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Blockchain Development Platform',
    description: 'Enterprise-grade blockchain development platform with smart contract creation, DApp development, Web3 integration, and multi-chain deployment for DeFi, NFT, and enterprise solutions.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, BSC, Polygon, Solana',
    price: '150000',
    rating: 4.9,
    reviewCount: 85,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const localBusinessSchema = generateLocalBusinessSchema('Moradabad');

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blockchain Development', url: '/blockchain-development-company' },
    ]),
    localBusinessSchema,
    generateServiceSchema(
      'Blockchain Development Services',
      'Professional blockchain development including smart contracts, DApps, Layer 2 solutions, cross-chain dApps, and Web3 integration'
    ),
    generateProductSchema(
      'Blockchain Development Package',
      'Complete blockchain development from architecture to deployment',
      '150000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="🚀 NEW SERVICE"
        title="Build Secure, Scalable Blockchain Solutions"
        description="Enterprise-grade blockchain development with EVM-compatible chains, smart contracts, and Web3 integration. Transform your business with decentralized technology."
        ctaPrimary={{ text: 'Get Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Case Studies', href: '/portfolio' }}
        gradient="blue"
      />

      {/* What is Blockchain Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Blockchain Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Blockchain Development</strong> is the process of creating decentralized applications and systems using distributed ledger technology. It involves designing smart contracts, building DApps (decentralized applications), developing consensus mechanisms, and integrating Web3 protocols. Blockchain developers use languages like Solidity for Ethereum, Rust for Solana, and Go for Hyperledger Fabric to create secure, transparent, and immutable solutions for finance, supply chain, healthcare, and beyond. Modern blockchain development includes Layer 2 scaling solutions like Polygon zkEVM, Arbitrum, and Optimism, as well as cross-chain interoperability for seamless multi-chain experiences.
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
                  Smart contract development starting at ₹1,50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain deployment (Ethereum, BSC, Polygon, Solana)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Comprehensive security audits included
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  2-24 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  DeFi, NFT, DAO, and enterprise solutions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  90-day post-launch support included
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Layer 2 development (Arbitrum, Optimism, zkSync)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cross-chain dApp & bridge development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Transform with Blockchain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering blockchain solutions across diverse sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3">Finance & Banking</h3>
              <p className="text-gray-600 mb-4">
                Cross-border payments, trade finance, securities settlement, and digital asset management with enhanced security and reduced costs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Payment Processing Systems</li>
                <li>• Digital Asset Custody</li>
                <li>• Regulatory Compliance Tools</li>
                <li>• Automated Clearing Houses</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Secure patient data management, drug traceability, clinical trials, and interoperable health records with HIPAA compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Electronic Health Records (EHR)</li>
                <li>• Drug Supply Chain Tracking</li>
                <li>• Clinical Trial Management</li>
                <li>• Medical Credential Verification</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3">Supply Chain & Logistics</h3>
              <p className="text-gray-600 mb-4">
                End-to-end traceability, provenance tracking, inventory management, and automated settlements for global supply chains.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product Provenance Tracking</li>
                <li>• Automated Inventory Systems</li>
                <li>• Smart Contract Settlements</li>
                <li>• Quality Assurance Verification</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Property tokenization, transparent title management, automated rental agreements, and fractional ownership platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Property Tokenization Platforms</li>
                <li>• Digital Title Management</li>
                <li>• Smart Rental Contracts</li>
                <li>• Fractional Ownership Systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Gaming & Entertainment</h3>
              <p className="text-gray-600 mb-4">
                NFT marketplaces, play-to-earn economies, digital collectibles, and transparent royalty distribution systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• NFT Gaming Platforms</li>
                <li>• In-Game Asset Marketplaces</li>
                <li>• Royalty Distribution Systems</li>
                <li>• Play-to-Earn Economies</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Energy & Utilities</h3>
              <p className="text-gray-600 mb-4">
                Peer-to-peer energy trading, renewable energy certificates, grid management, and carbon credit tracking systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• P2P Energy Trading Platforms</li>
                <li>• Renewable Energy Certificates</li>
                <li>• Smart Grid Management</li>
                <li>• Carbon Credit Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Blockchain Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⛓️',
                title: 'Smart Contract Development',
                description: 'Secure, audited smart contracts in Solidity for Ethereum and EVM chains',
              },
              {
                icon: '🔷',
                title: 'DApp Development',
                description: 'Full-stack decentralized applications with React and Web3 integration',
              },
              {
                icon: '🪙',
                title: 'Token Development',
                description: 'ERC-20, ERC-721, ERC-1155 token creation and deployment',
              },
              {
                icon: '🏦',
                title: 'DeFi Solutions',
                description: 'Decentralized finance protocols, DEX, lending platforms, and yield farming',
              },
              {
                icon: '🎨',
                title: 'NFT Marketplace',
                description: 'Custom NFT minting, trading platforms with IPFS storage',
              },
              {
                icon: '🔐',
                title: 'Blockchain Consulting',
                description: 'Architecture design, technology selection, and implementation strategy',
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

      {/* Blockchain Platforms Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Platforms We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choosing the right blockchain platform for your specific use case
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Platform</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                  <th className="px-6 py-4 text-left">Consensus</th>
                  <th className="px-6 py-4 text-left">Language</th>
                  <th className="px-6 py-4 text-left">TPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Ethereum</td>
                  <td className="px-6 py-4">DApps, DeFi, NFTs</td>
                  <td className="px-6 py-4">PoS</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~30-100</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Hyperledger Fabric</td>
                  <td className="px-6 py-4">Enterprise, Private Networks</td>
                  <td className="px-6 py-4">PBFT</td>
                  <td className="px-6 py-4">Go, Java, Node.js</td>
                  <td className="px-6 py-4">~3,500</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Binance Smart Chain</td>
                  <td className="px-6 py-4">Fast DeFi, Gaming</td>
                  <td className="px-6 py-4">PoSA</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~160</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Polygon</td>
                  <td className="px-6 py-4">Scalable Ethereum Apps</td>
                  <td className="px-6 py-4">PoS</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~7,000</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Solana</td>
                  <td className="px-6 py-4">High-Speed DApps</td>
                  <td className="px-6 py-4">PoH + PoS</td>
                  <td className="px-6 py-4">Rust, C, C++</td>
                  <td className="px-6 py-4">~65,000</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Cardano</td>
                  <td className="px-6 py-4">Sustainable Finance</td>
                  <td className="px-6 py-4">Ouroboros PoS</td>
                  <td className="px-6 py-4">Plutus, Haskell</td>
                  <td className="px-6 py-4">~250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Blockchain Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Ethereum', 'Polygon', 'BSC', 'Solana', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Discovery & Planning', time: '1-2 weeks' },
                  { step: 2, title: 'Smart Contract Development', time: '4-8 weeks' },
                  { step: 3, title: 'Frontend Integration', time: '3-6 weeks' },
                  { step: 4, title: 'Security Audit & Testing', time: '2-4 weeks' },
                  { step: 5, title: 'Deployment & Launch', time: '1-2 weeks' },
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

      {/* Use Cases & Real-World Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Blockchain Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming industries with practical blockchain implementations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Decentralized Finance (DeFi)
              </h3>
              <p className="text-gray-700 mb-4">
                Built a multi-chain DeFi platform enabling users to lend, borrow, and stake assets across Ethereum, BSC, and Polygon networks with automated yield optimization.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $50M+ Total Value Locked (TVL)</li>
                  <li>• Cross-chain asset bridging</li>
                  <li>• Automated market maker (AMM)</li>
                  <li>• Liquidity mining & governance tokens</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Solidity, Hardhat, The Graph, Web3.js</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Supply Chain Transparency
              </h3>
              <p className="text-gray-700 mb-4">
                Developed an enterprise blockchain solution for tracking pharmaceutical products from manufacturer to end consumer, ensuring authenticity and compliance.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5,000+ products tracked daily</li>
                  <li>• Real-time temperature monitoring</li>
                  <li>• Counterfeit prevention system</li>
                  <li>• Regulatory compliance automation</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Hyperledger Fabric, Node.js, MongoDB</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                NFT Marketplace
              </h3>
              <p className="text-gray-700 mb-4">
                Created a feature-rich NFT marketplace supporting ERC-721 and ERC-1155 standards with lazy minting, royalty management, and auction mechanisms.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 10,000+ NFTs minted</li>
                  <li>• Gas-optimized smart contracts</li>
                  <li>• IPFS & Arweave storage</li>
                  <li>• Creator royalties & secondary sales</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Solidity, IPFS, Moralis, React</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏛️</span>
                Decentralized Governance (DAO)
              </h3>
              <p className="text-gray-700 mb-4">
                Implemented a DAO governance system enabling token holders to propose, vote, and execute protocol upgrades with time-locked treasury management.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 25,000+ active governance participants</li>
                  <li>• On-chain voting with delegation</li>
                  <li>• Multi-sig treasury ($10M+)</li>
                  <li>• Snapshot integration for gas-free voting</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>OpenZeppelin Governor, Snapshot, Gnosis Safe</span>
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
                name: 'Smart Contract',
                price: '₹1,50,000',
                features: [
                  'Single smart contract',
                  'Solidity development',
                  'Basic security audit',
                  'Testnet deployment',
                  '30-day support',
                ],
              },
              {
                name: 'DApp Starter',
                price: '₹5,00,000',
                popular: true,
                features: [
                  'Complete DApp',
                  'Frontend + Backend',
                  'Smart contracts',
                  'Web3 integration',
                  'Security audit',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Custom blockchain',
                  'Multiple smart contracts',
                  'Advanced DApp features',
                  'Third-party audit',
                  'Dedicated support',
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

      {/* Security & Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security-First Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementing industry-leading security practices for your blockchain applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🛡️</span>
                Smart Contract Audits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Manual code review by security experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated vulnerability scanning (Mythril, Slither)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Formal verification for critical functions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Third-party audit reports (CertiK, OpenZeppelin)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔐</span>
                Best Practices
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reentrancy guards on all state-changing functions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access control with role-based permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Upgrade patterns (Proxy, Diamond Standard)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gas optimization techniques</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Testing Coverage
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>100% unit test coverage requirement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integration testing on testnet environments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fuzz testing for edge case discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Load testing for high-traffic scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Blockchain Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏆', title: '12+ Years Experience', desc: 'Proven track record in software development' },
              { icon: '🔒', title: 'Security First', desc: 'Comprehensive audits and best practices' },
              { icon: '💰', title: 'Cost Effective', desc: 'India pricing with global quality' },
              { icon: '🚀', title: 'Fast Delivery', desc: 'Agile sprints with weekly demos' },
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
              Common questions about blockchain development services
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build on Blockchain?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your business with decentralized technology. Get expert consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/blog/blockchain-development-guide-2025"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Read Our Guide
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Blockchain Development" />
        </div>
      </section>
    </>
  );
}

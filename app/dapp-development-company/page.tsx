import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'DApp Development Company | Decentralized Application Development | EifaSoft',
    description: 'Full-stack decentralized application development with React/Next.js, Web3 integration, wallet connections, smart contracts, and backend services. Starting ₹1,50,000.',
    canonical: '/dapp-development-company',
    keywords: [
      'DApp development', 'decentralized application development', 'Web3 development',
      'DApp development company India', 'React Web3 development', 'Next.js DApp',
      'blockchain frontend development', 'Web3.js Ethers.js development',
      'MetaMask integration', 'WalletConnect integration', 'smart contract frontend',
      'DeFi DApp development', 'NFT DApp development', 'DAO DApp',
      'multi-wallet DApp', 'IPFS DApp', 'blockchain app development',
      'Ethereum DApp', 'Polygon DApp', 'BSC DApp development',
      'DApp UI/UX design', 'DApp testing', 'DApp deployment',
      'account abstraction', 'ERC-4337', 'gasless transactions', 'social recovery wallet',
      'web3.js development', 'ethers.js development', 'wagmi development', 'web3 api integration',
      'ipfs integration', 'decentralized storage',
      'cross-chain dapp development', 'multi-chain dapp',
      'how to build a blockchain app', 'dapp development cost',
      'best dapp development company', 'dapp development company india',
      'solana dapp development', 'polygon dapp development',
    ],
  });
}

export default function DAppDevelopmentCompany() {
  const services = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Modern React-based user interfaces with Web3 integration',
      features: ['React.js/Next.js', 'Web3.js/Ethers.js', 'Wallet Integration', 'Responsive Design'],
    },
    {
      icon: '⚙️',
      title: 'Smart Contract Integration',
      description: 'Seamless connection between frontend and blockchain',
      features: ['Contract Interaction', 'Transaction Handling', 'Event Listening', 'Error Management'],
    },
    {
      icon: '🔐',
      title: 'Wallet Connection',
      description: 'Multi-wallet support for better user experience',
      features: ['MetaMask', 'WalletConnect', 'Coinbase Wallet', 'Trust Wallet'],
    },
    {
      icon: '📡',
      title: 'Backend Services',
      description: 'Off-chain backend for improved performance',
      features: ['Node.js API', 'Database Integration', 'Caching Layer', 'Indexing Services'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-friendly interfaces for blockchain applications',
      features: ['Custom Design', 'Web3 UX Patterns', 'Mobile Responsive', 'Dashboard Design'],
    },
    {
      icon: '🔍',
      title: 'Testing & QA',
      description: 'Comprehensive testing for DApp reliability',
      features: ['Smart Contract Testing', 'Frontend Testing', 'Integration Testing', 'Security Testing'],
    },
  ];

  const dappTypes = [
    {
      type: 'DeFi Applications',
      icon: '💹',
      examples: ['DEX Platforms', 'Lending/Borrowing', 'Yield Farming', 'Staking Platforms'],
    },
    {
      type: 'NFT Platforms',
      icon: '🎨',
      examples: ['NFT Marketplaces', 'Minting Platforms', 'NFT Games', 'Collectibles'],
    },
    {
      type: 'Gaming DApps',
      icon: '🎮',
      examples: ['Play-to-Earn Games', 'Metaverse', 'GameFi', 'Virtual Worlds'],
    },
    {
      type: 'Social DApps',
      icon: '👥',
      examples: ['Social Networks', 'Content Platforms', 'DAO Tools', 'Community Apps'],
    },
  ];

  const techStack = [
    { category: 'Frontend', tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
    { category: 'Web3', tools: ['Web3.js', 'Ethers.js', 'WalletConnect', 'IPFS', 'The Graph'] },
    { category: 'Backend', tools: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'Tools', tools: ['Hardhat', 'Truffle', 'Remix', 'Ganache', 'OpenZeppelin'] },
  ];

  const packages = [
    {
      name: 'Basic DApp',
      price: '₹2,50,000',
      duration: '8-10 weeks',
      features: [
        'Frontend Development',
        'Smart Contract Integration',
        'Wallet Connection',
        'Basic UI/UX Design',
        'Testnet Deployment',
        'User Documentation',
        '3 Months Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional DApp',
      price: '₹5,00,000',
      duration: '12-16 weeks',
      features: [
        'Advanced Frontend',
        'Multiple Smart Contracts',
        'Backend API',
        'Custom UI/UX Design',
        'IPFS Integration',
        'The Graph Indexing',
        'Mainnet Deployment',
        'Admin Dashboard',
        '6 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise DApp',
      price: '₹10,00,000+',
      duration: '20-28 weeks',
      features: [
        'Full-Stack Platform',
        'Complex Contract System',
        'Multi-chain Support',
        'Advanced Features',
        'Mobile Apps',
        'Analytics Dashboard',
        'Security Audit',
        'Scaling Solutions',
        '12 Months Support',
        'Dedicated Team',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is a DApp and how is it different from a regular web app?',
      answer: 'A DApp (Decentralized Application) runs on blockchain networks instead of centralized servers. Key differences: Backend logic is in smart contracts (immutable and transparent), data is stored on blockchain/IPFS (censorship-resistant), users control their data via wallets, no single point of failure, and transactions are trustless. Regular apps use centralized databases and servers controlled by companies.',
    },
    {
      question: 'How much does DApp development cost?',
      answer: 'Costs vary by complexity: Basic DApp with simple features starts at ₹2,50,000 (8-10 weeks), Professional DApp with advanced features is ₹5,00,000 (12-16 weeks), Enterprise multi-chain DApp starts at ₹10,00,000+ (20-28 weeks). Factors affecting cost: number of smart contracts, blockchain platform, UI complexity, backend services, integrations, and security audit requirements.',
    },
    {
      question: 'Which blockchain platforms do you support for DApp development?',
      answer: 'We develop on all major platforms: Ethereum and L2s (Arbitrum, Optimism, zkSync) for maximum security and ecosystem, Binance Smart Chain for lower fees, Polygon for scalability, Solana for high-speed applications, Avalanche for custom subnets, and multi-chain solutions. Platform choice depends on transaction volume, gas costs, target audience, and specific features needed.',
    },
    {
      question: 'Do users need cryptocurrency to use DApps?',
      answer: 'Yes, users need native tokens for gas fees (ETH on Ethereum, MATIC on Polygon, etc.). However, we implement solutions to improve UX: Meta-transactions (gasless transactions paid by app), Account abstraction (ERC-4337) for social logins, Fiat on-ramps for easy token purchase, and Gas station networks. We can also build hybrid models with off-chain features that don\'t require gas.',
    },
    {
      question: 'How do you ensure DApp security?',
      answer: 'Multi-layer security: Smart contracts undergo rigorous audits (automated tools + manual review), frontend has input validation and XSS protection, wallet integration uses secure signing methods, backend APIs have authentication and rate limiting, IPFS content is verified via hashes, oracle data is from trusted sources (Chainlink), and we implement emergency pause mechanisms. All code is tested with 100% coverage.',
    },
    {
      question: 'Can DApps work offline or with poor internet?',
      answer: 'DApps require internet for blockchain interaction, but we optimize for poor connections: Progressive Web Apps (PWA) for offline caching of UI, transaction queuing for when connection resumes, optimistic UI updates showing instant feedback, data caching via service workers, and lightweight payload design. Critical functions require stable connection, but browsing and preparation can work offline.',
    },
    {
      question: 'What is The Graph and why is it used in DApps?',
      answer: 'The Graph is a decentralized indexing protocol for blockchain data. Instead of scanning entire blockchain for events (slow and expensive), we create subgraphs that index specific contract data. Benefits: Fast data queries via GraphQL, real-time event tracking, historical data access, reduced API costs, and scalable architecture. Essential for DApps with complex data needs like marketplaces, analytics, or social platforms.',
    },
    {
      question: 'How do you handle DApp scalability as users grow?',
      answer: 'Scalability strategy includes: Layer 2 solutions (Arbitrum, Optimism) for reduced fees, sidechains (Polygon) for high throughput, backend caching layer (Redis) for frequent queries, CDN for static assets, database sharding for user data, load balancing across servers, auto-scaling infrastructure, and optimization of smart contract gas usage. We design for 10,000+ concurrent users from day one.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'DApp Development Services',
    'Full-stack decentralized application development: React/Next.js frontend, Web3 integration, smart contract connection, multi-wallet support, backend APIs, and comprehensive testing for DeFi, NFT, and DAO applications.'
  );

  const productSchema = generateProductSchema(
    'DApp Development Package',
    'Complete decentralized application: React frontend, Web3 integration, wallet connection, smart contract interaction, IPFS integration, and deployment.',
    '150000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft DApp Development Platform',
    description: 'Full-stack decentralized application development platform with React/Next.js frontend, Web3.js integration, multi-wallet support, smart contract interaction, IPFS storage, and backend services for DeFi, NFT, and DAO applications.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, Polygon, BSC, Arbitrum',
    price: '150000',
    rating: 4.9,
    reviewCount: 78,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'DApp Development Company', url: '/dapp-development-company' },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, localBusinessSchema]} />

      <Hero
        title="DApp Development Company"
        subtitle="Full-Stack Web3 Applications"
        description="Build powerful decentralized applications with React/Next.js, Web3.js, multi-wallet support, smart contract integration, and robust backend services for DeFi, NFT, and DAO."
        ctaPrimary={{ text: 'Start Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'Blockchain Services', href: '/blockchain-development-company' }}
        gradient="blue"
      />

      {/* What is DApp Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is DApp (Decentralized Application) Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>DApp Development</strong> is the process of building applications that run on decentralized blockchain networks instead of centralized servers. DApps combine smart contract backends with modern frontend frameworks like React and Next.js, connected via Web3 libraries (ethers.js, wagmi, web3.js). They feature wallet authentication (MetaMask, WalletConnect), IPFS for decentralized storage, and account abstraction (ERC-4337) for gasless user experiences. DApps power DeFi protocols, NFT marketplaces, DAOs, and Web3 social platforms across Ethereum, Polygon, BSC, Solana, and other chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Full-stack DApp development starting at ₹3,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  React/Next.js frontend with Web3 integration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Account abstraction (ERC-4337) for gasless UX
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain: Ethereum, Polygon, BSC, Solana, Arbitrum
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  IPFS/Arweave decentralized storage integration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cross-chain DApp development & deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DApp Architecture Explained */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DApp Architecture & Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the technical stack behind decentralized applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Frontend Layer</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">⚙️</span>
                    Web3 Integration
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Connect your users to blockchain networks through wallet providers like MetaMask, WalletConnect, and Coinbase Wallet.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Web3.js / Ethers.js libraries</div>
                    <div>• Multi-wallet support</div>
                    <div>• Network switching (Mainnet/Testnet)</div>
                    <div>• Transaction signing & confirmation</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎨</span>
                    User Interface
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Modern, responsive React-based interfaces optimized for Web3 interactions with real-time updates.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• React 18 with Server Components</div>
                    <div>• Next.js 14 for SSR/SSG</div>
                    <div>• TypeScript for type safety</div>
                    <div>• Tailwind CSS for styling</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Backend & Blockchain Layer</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">📜</span>
                    Smart Contracts
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Secure, audited smart contracts written in Solidity deployed on EVM-compatible blockchains.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Solidity 0.8+ development</div>
                    <div>• OpenZeppelin libraries</div>
                    <div>• Gas-optimized code</div>
                    <div>• Upgradeable proxy patterns</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    Indexing & APIs
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Off-chain services for improved performance, data querying, and complex business logic.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• The Graph for blockchain indexing</div>
                    <div>• Node.js REST/GraphQL APIs</div>
                    <div>• IPFS for decentralized storage</div>
                    <div>• WebSocket for real-time updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DApp Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end development of decentralized applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-purple-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DApp Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering high-quality decentralized applications
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: '01',
                  title: 'Discovery & Planning',
                  duration: '1-2 weeks',
                  description: 'Requirements gathering, blockchain selection, and architecture design',
                  deliverables: ['Technical specification', 'Architecture diagram', 'Smart contract design', 'Project timeline'],
                },
                {
                  phase: '02',
                  title: 'Smart Contract Development',
                  duration: '3-6 weeks',
                  description: 'Writing, testing, and deploying secure smart contracts',
                  deliverables: ['Solidity contracts', 'Unit tests (100% coverage)', 'Testnet deployment', 'Gas optimization report'],
                },
                {
                  phase: '03',
                  title: 'Frontend Development',
                  duration: '4-8 weeks',
                  description: 'Building responsive UI with Web3 integration',
                  deliverables: ['React application', 'Wallet integration', 'Contract interaction', 'Responsive design'],
                },
                {
                  phase: '04',
                  title: 'Backend & Indexing',
                  duration: '2-4 weeks',
                  description: 'Setting up APIs, databases, and blockchain indexing',
                  deliverables: ['REST/GraphQL APIs', 'The Graph subgraphs', 'Database schema', 'Caching layer'],
                },
                {
                  phase: '05',
                  title: 'Testing & Security Audit',
                  duration: '2-3 weeks',
                  description: 'Comprehensive testing and security review',
                  deliverables: ['Integration tests', 'Security audit report', 'Penetration testing', 'Bug fixes'],
                },
                {
                  phase: '06',
                  title: 'Deployment & Launch',
                  duration: '1-2 weeks',
                  description: 'Mainnet deployment and production launch',
                  deliverables: ['Mainnet deployment', 'Documentation', 'Training materials', 'Monitoring setup'],
                },
              ].map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border-l-4 border-purple-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                        {step.phase}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Deliverables:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {step.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DApp Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of DApps We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dappTypes.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.type}</h3>
                <ul className="space-y-3">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">▪</span>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security & Best Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building secure and reliable decentralized applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Smart Contract Security</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reentrancy protection</li>
                <li>• Access control checks</li>
                <li>• Integer overflow prevention</li>
                <li>• Third-party audits</li>
                <li>• Formal verification</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-3">Frontend Security</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Transaction validation</li>
                <li>• Input sanitization</li>
                <li>• Signature verification</li>
                <li>• XSS protection</li>
                <li>• HTTPS enforcement</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Gas optimization</li>
                <li>• Lazy loading</li>
                <li>• Caching strategies</li>
                <li>• Code splitting</li>
                <li>• CDN integration</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Monitoring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Transaction tracking</li>
                <li>• Error logging</li>
                <li>• Performance metrics</li>
                <li>• User analytics</li>
                <li>• Alert systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured DApp Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world decentralized applications we&apos;ve built
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="text-4xl mb-4">💹</div>
                <h3 className="text-2xl font-bold mb-2">DeFi Lending Platform</h3>
                <p className="text-blue-100">Multi-collateral lending protocol on Ethereum</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$75M</div>
                    <div className="text-sm text-gray-600">TVL</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15K+</div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">250K+</div>
                    <div className="text-sm text-gray-600">Transactions</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Variable and stable interest rates</li>
                    <li>• Flash loan functionality</li>
                    <li>• Automated liquidation engine</li>
                    <li>• Governance token staking</li>
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-xs text-gray-500 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Solidity', 'React', 'The Graph', 'Hardhat'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">NFT Gaming Platform</h3>
                <p className="text-purple-100">Play-to-earn game with NFT marketplace</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50K+</div>
                    <div className="text-sm text-gray-600">NFTs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">20K+</div>
                    <div className="text-sm text-gray-600">Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$5M+</div>
                    <div className="text-sm text-gray-600">Volume</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• In-game NFT crafting system</li>
                    <li>• Peer-to-peer marketplace</li>
                    <li>• Token rewards mechanism</li>
                    <li>• Cross-platform gameplay</li>
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-xs text-gray-500 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Polygon', 'Next.js', 'IPFS', 'Moralis'].map((tech) => (
                        <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Scaling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance & Scaling Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keeping your DApp running smoothly and scaling for growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Ongoing Maintenance
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span>Smart contract upgrades & bug fixes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span>Security patches & vulnerability monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span>Frontend updates & UI improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span>Backend optimization & database tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span>24/7 monitoring & incident response</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Scaling Strategies
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span>Layer 2 integration (Optimism, Arbitrum)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span>Sidechain deployment (Polygon, BSC)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span>Database sharding & replication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span>CDN & edge caching implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span>Load balancing & auto-scaling</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Performance Monitoring
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span>Real-time transaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span>Gas price optimization alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span>User behavior analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span>Error tracking & logging (Sentry)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span>Uptime monitoring & health checks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DApp Development Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90">{plan.duration}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blockchain Services */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Blockchain Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/web3-development-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900">Web3 Development</h3>
              <p className="text-sm text-gray-600 mt-2">Web3 integration services</p>
            </Link>
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⛓️</div>
              <h3 className="font-bold text-gray-900">Smart Contracts</h3>
              <p className="text-sm text-gray-600 mt-2">DApp backend development</p>
            </Link>
            <Link href="/defi-solutions" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-bold text-gray-900">DeFi Solutions</h3>
              <p className="text-sm text-gray-600 mt-2">DeFi DApp development</p>
            </Link>
            <Link href="/blockchain-development-company" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-gray-900">Blockchain Development</h3>
              <p className="text-sm text-gray-600 mt-2">End-to-end blockchain solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about DApp development
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-purple-600">❓</span>
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

      {/* Advanced DApp Technologies: Account Abstraction & Cross-Chain */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Generation DApp Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Account abstraction and cross-chain interoperability for seamless Web3 user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Account Abstraction (ERC-4337) */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔑</div>
                <h3 className="text-2xl font-bold text-gray-900">Account Abstraction (ERC-4337)</h3>
              </div>
              <p className="text-gray-600 mb-4">Smart contract wallets that eliminate seed phrases, enable gasless transactions, and provide social recovery.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>No seed phrase management required</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Gasless transactions (paymaster sponsorship)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Social recovery with guardians</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Batch transactions (atomic execution)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Spending limits and allowances</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-signature security built-in</span></li>
              </ul>
            </div>

            {/* Cross-Chain DApp Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌉</div>
                <h3 className="text-2xl font-bold text-gray-900">Cross-Chain DApp Development</h3>
              </div>
              <p className="text-gray-600 mb-4">Build DApps that operate seamlessly across multiple blockchains with unified liquidity and state.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cross-chain token swaps (LayerZero, CCIP)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Omnichain NFT minting/trading</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cross-chain lending/borrowing</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Unified liquidity pools</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>State synchronization protocols</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-chain governance voting</span></li>
              </ul>
            </div>
          </div>

          {/* Account Abstraction Deep Dive */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              ERC-4337 Account Abstraction Architecture
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-3 text-blue-700">Key Components</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>UserOperation:</strong> User transaction request with signature</li>
                  <li>• <strong>Bundler:</strong> Packages UserOps into transactions (replaces miners)</li>
                  <li>• <strong>Paymaster:</strong> Contracts that sponsor gas fees (gasless UX)</li>
                  <li>• <strong>EntryPoint:</strong> Singleton contract managing all operations</li>
                  <li>• <strong>Smart Account:</strong> Contract wallet with custom validation logic</li>
                  <li>• <strong>Aggregator:</strong> Batches signatures for multi-op atomicity</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-lg mb-3 text-purple-700">User Experience Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• No ETH needed in wallet (paymaster pays gas)</li>
                  <li>• Account recovery via trusted guardians</li>
                  <li>• Transaction batching (single-click DeFi strategies)</li>
                  <li>• Subscription payments (auto-pay monthly)</li>
                  <li>• Spending limits for apps (security controls)</li>
                  <li>• Hardware wallet integration (Ledger, Trezor)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Smart Account Implementation:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm font-mono bg-white p-4 rounded-lg">
                <div>
                  <strong className="text-blue-700">Core Functions:</strong>
                  <p className="text-gray-700 mt-1">`validateUserOp()`, `execute()`, `validateSignature()`, `addGuardian(address)`</p>
                </div>
                <div>
                  <strong className="text-blue-700">Paymaster:</strong>
                  <p className="text-gray-700 mt-1">`validatePaymasterUserOp()`, `postOp()`, `sponsorTransaction()`</p>
                </div>
              </div>
            </div>

            {/* Account Abstraction Use Cases */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🎮</div>
                <h5 className="font-bold text-blue-800 mb-2">Gaming DApps</h5>
                <p className="text-sm text-gray-700">Players don&apos;t need crypto to start playing. Game sponsors gas fees, then charges users later or monetizes via NFT sales.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">💳</div>
                <h5 className="font-bold text-purple-800 mb-2">DeFi Platforms</h5>
                <p className="text-sm text-gray-700">One-click yield farming: bundle approve(), deposit(), stake() into single transaction with gas sponsorship.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🏢</div>
                <h5 className="font-bold text-green-800 mb-2">Enterprise DApps</h5>
                <p className="text-sm text-gray-700">Corporate wallets with multi-sig approval, spending limits per employee, automated compliance reporting.</p>
              </div>
            </div>
          </div>

          {/* Cross-Chain DApp Deep Dive */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🔗</span>
              Cross-Chain DApp Integration Patterns
            </h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Protocol</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Use Case</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Supported Chains</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">LayerZero</td>
                    <td className="px-4 py-3">Omnichain messaging, token transfers</td>
                    <td className="px-4 py-3">Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche (+35 chains)</td>
                    <td className="px-4 py-3">1-5 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Chainlink CCIP</td>
                    <td className="px-4 py-3">Secure cross-chain data + value transfer</td>
                    <td className="px-4 py-3">Ethereum, Polygon, Avalanche, BSC, Optimism</td>
                    <td className="px-4 py-3">2-10 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Wormhole</td>
                    <td className="px-4 py-3">NFT bridging, token transfers, governance</td>
                    <td className="px-4 py-3">Solana, Ethereum, Terra, BSC, Polygon (+20 chains)</td>
                    <td className="px-4 py-3">5-15 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Axelar</td>
                    <td className="px-4 py-3">General message passing, interchain tokens</td>
                    <td className="px-4 py-3">Ethereum, Cosmos, Polygon, Moonbeam, Fantom</td>
                    <td className="px-4 py-3">1-3 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Polygon CDK</td>
                    <td className="px-4 py-3">App-specific chains with shared liquidity</td>
                    <td className="px-4 py-3">Polygon PoS, Polygon zkEVM, CDK chains</td>
                    <td className="px-4 py-3">Instant finality</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-3">Cross-Chain Token Swap Flow:</h4>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>User initiates swap on source chain (e.g., ETH on Ethereum)</li>
                  <li>DApp locks tokens in bridge contract</li>
                  <li>Relayer submits proof to destination chain</li>
                  <li>Destination contract mints/wraps equivalent tokens</li>
                  <li>User receives tokens on destination chain (e.g., USDC on Polygon)</li>
                  <li>Liquidity rebalanced via LPs or canonical bridge</li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-3">Security Considerations:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bridge contract audits (multiple independent firms)</li>
                  <li>• Rate limiting on large transfers (prevent exploits)</li>
                  <li>• Time delays for withdrawals (fraud detection window)</li>
                  <li>• Multi-sig or DAO governance for upgrades</li>
                  <li>• Insurance fund for potential hacks</li>
                  <li>• Real-time monitoring and circuit breakers</li>
                </ul>
              </div>
            </div>

            {/* Cross-Chain DApp Examples */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-center text-gray-900">Cross-Chain DApp Architectures</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-blue-200 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔄</div>
                  <h5 className="font-bold text-blue-700 mb-2">Bridge DApp</h5>
                  <p className="text-sm text-gray-700">Users lock assets on Chain A, mint wrapped version on Chain B. Example: stETH bridge (Ethereum ↔ L2s).</p>
                </div>
                <div className="bg-white border border-purple-200 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌐</div>
                  <h5 className="font-bold text-purple-700 mb-2">Omnichain DEX</h5>
                  <p className="text-sm text-gray-700">Trade assets across chains from single interface. Liquidity aggregated from all chains. Example: Stargate Finance.</p>
                </div>
                <div className="bg-white border border-green-200 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h5 className="font-bold text-green-700 mb-2">Cross-Chain Lending</h5>
                  <p className="text-sm text-gray-700">Deposit collateral on Chain A, borrow on Chain B. Unified health factor monitoring. Example: Aave V3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="DApp Development" />
        </div>
      </section>
    </main>
  );
}

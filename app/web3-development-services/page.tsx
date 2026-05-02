import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Web3 Development Services | Decentralized App Development | EifaSoft',
    description: 'Full-stack Web3 development services: DApps, smart contracts, DeFi protocols, NFT platforms, DAO tools, wallet integration. Expert Solidity, Rust, React developers. Starting ₹2,00,000.',
    canonical: '/web3-development-services',
    keywords: [
      'web3 development services',
      'decentralized app development',
      'web3 dapp development',
      'ethereum development services',
      'solidity developer services',
      'smart contract development',
      'defi protocol development',
      'nft platform development',
      'dao development services',
      'web3 frontend development',
      'web3 backend development',
      'blockchain api integration',
      'wallet connect integration',
      'metamask integration services',
      'web3 js development',
      'ethers js development',
      'wagmi development',
      'rainbowkit integration',
      'ipfs integration services',
      'decentralized storage',
      'arweave integration',
      'the graph indexing',
      'web3 ui ux design',
      'crypto wallet integration',
      'multi-chain development',
      'cross-chain development',
      'layer 2 development',
      'polygon zkEVM development',
      'arbitrum development',
      'optimism development',
      'base network development',
      'solana development services',
      'rust blockchain development',
      'anchor framework development',
      'web3 mobile app development',
      'react native web3',
      'flutter web3 integration',
      'web3 gaming development',
      'gamefi development',
      'metaverse development',
      'socialfi development',
      'rwa tokenization',
      'account abstraction erc4337',
      'gasless transactions',
      'web3 security audit',
      'smart contract testing',
      'foundry development',
      'hardhat development',
      'web3 development company india',
      'web3 development cost',
      'hire web3 developers',
      'web3 consulting services',
    ],
  });
}

export default function Web3DevelopmentServices() {
  const services = [
    {
      icon: '🎨',
      title: 'Web3 Frontend Development',
      description: 'Modern React-based DApp interfaces with seamless wallet integration',
      features: ['React.js/Next.js', 'TypeScript', 'wagmi/viem', 'RainbowKit', 'Tailwind CSS'],
    },
    {
      icon: '⚙️',
      title: 'Smart Contract Development',
      description: 'Secure, gas-optimized smart contracts on EVM and non-EVM chains',
      features: ['Solidity', 'Rust', 'Foundry/Hardhat', 'OpenZeppelin', 'Gas Optimization'],
    },
    {
      icon: '💰',
      title: 'DeFi Protocol Development',
      description: 'Decentralized exchanges, lending platforms, yield farming, derivatives',
      features: ['AMM/DEX', 'Lending/Borrowing', 'Yield Aggregators', 'Perpetuals', 'Liquid Staking'],
    },
    {
      icon: '🖼️',
      title: 'NFT Platform Development',
      description: 'NFT marketplaces, minting platforms, dynamic NFTs, ERC-6551',
      features: ['ERC-721/1155', 'Marketplace', 'Lazy Minting', 'Royalties', 'IPFS/Arweave'],
    },
    {
      icon: '🏛️',
      title: 'DAO Development',
      description: 'Governance systems, voting mechanisms, treasury management',
      features: ['Governance Tokens', 'Proposal Systems', 'Quadratic Voting', 'Timelocks', 'Multi-sig'],
    },
    {
      icon: '🔗',
      title: 'Cross-Chain Development',
      description: 'Omnichain applications with LayerZero, CCIP, Wormhole',
      features: ['LayerZero', 'Chainlink CCIP', 'Wormhole', 'Axelar', 'Bridge Development'],
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React/Next.js', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'wagmi/viem', level: 'Expert' },
        { name: 'RainbowKit', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
      ],
    },
    {
      category: 'Smart Contracts',
      technologies: [
        { name: 'Solidity', level: 'Expert' },
        { name: 'Rust (Solana)', level: 'Advanced' },
        { name: 'Foundry', level: 'Expert' },
        { name: 'Hardhat', level: 'Expert' },
        { name: 'OpenZeppelin', level: 'Expert' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'The Graph', level: 'Advanced' },
        { name: 'IPFS/Arweave', level: 'Advanced' },
        { name: 'PostgreSQL/MongoDB', level: 'Expert' },
        { name: 'Redis', level: 'Advanced' },
      ],
    },
    {
      category: 'Infrastructure',
      technologies: [
        { name: 'Alchemy/Infura', level: 'Expert' },
        { name: 'QuickNode', level: 'Advanced' },
        { name: 'Moralis', level: 'Advanced' },
        { name: 'Thirdweb', level: 'Advanced' },
        { name: 'AWS/GCP', level: 'Expert' },
      ],
    },
  ];

  const packages = [
    {
      name: 'Basic Web3 DApp',
      price: '₹2,00,000',
      duration: '6-8 weeks',
      features: [
        'Single-chain deployment',
        'Basic smart contracts',
        'Wallet connection (MetaMask)',
        'Standard UI/UX',
        'IPFS integration',
        'Testnet deployment',
        'Documentation',
        '3 months support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional Web3 Platform',
      price: '₹5,00,000',
      duration: '10-14 weeks',
      features: [
        'Multi-chain deployment (2-3 chains)',
        'Advanced smart contracts',
        'Multi-wallet support',
        'Custom UI/UX design',
        'The Graph indexing',
        'Smart contract audit',
        'Mainnet deployment',
        'Admin dashboard',
        '6 months support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Web3 Solution',
      price: '₹10,00,000+',
      duration: '16-24 weeks',
      features: [
        'Full-stack Web3 platform',
        'Complex DeFi/NFT/DAO system',
        'Cross-chain functionality',
        'Account abstraction (ERC-4337)',
        'Mobile apps (iOS/Android)',
        'Advanced analytics',
        'Security audit by top firms',
        'Scaling solutions (L2)',
        '12 months support',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is Web3 development and what services do you offer?',
      answer: 'Web3 development involves building decentralized applications (DApps) that run on blockchain networks using smart contracts. We offer comprehensive Web3 services including: DApp frontend/backend development, smart contract development (Solidity/Rust), DeFi protocol development (DEX, lending, yield farming), NFT platforms (marketplaces, minting), DAO governance systems, cross-chain applications, wallet integration, IPFS/decentralized storage, The Graph indexing, account abstraction (ERC-4337), and Web3 mobile apps. Our team handles everything from architecture design to deployment and maintenance.',
    },
    {
      question: 'Which blockchains do you develop on?',
      answer: 'We develop on multiple blockchain networks: Ethereum (mainnet and testnets), EVM-compatible chains (BSC, Polygon, Avalanche, Arbitrum, Optimism, Base, Linea), Layer 2 solutions (Arbitrum One, Optimism, Polygon zkEVM, zkSync, Starknet), Solana ecosystem (using Rust/Anchor), Cosmos SDK chains, Polkadot parachains. Our multi-chain approach ensures your DApp reaches the widest audience while optimizing for gas fees, speed, and security based on your use case.',
    },
    {
      question: 'What is the cost of Web3 development services?',
      answer: 'Web3 development costs vary by complexity: Basic DApp (single-chain, simple smart contracts): ₹2,00,000 - ₹4,00,000, Professional Platform (multi-chain, advanced features): ₹5,00,000 - ₹10,00,000, Enterprise Solution (complex DeFi/NFT/DAO, cross-chain): ₹10,00,000 - ₹50,00,000+. Additional costs include smart contract audits (₹2,00,000-₹10,00,000), gas fees for deployment (₹50,000-₹5,00,000), and ongoing infrastructure (node providers, hosting: ₹10,000-₹50,000/month). We provide detailed quotes after understanding your requirements.',
    },
    {
      question: 'How long does it take to build a Web3 application?',
      answer: 'Development timelines depend on scope: Simple DApp (basic smart contracts + frontend): 6-8 weeks, Medium Platform (multi-chain, advanced features): 10-14 weeks, Complex Protocol (DeFi/NFT marketplace/DAO): 16-24 weeks, Enterprise Solution (cross-chain, custom features): 6-12 months. Timeline includes discovery/planning (1-2 weeks), smart contract development (4-8 weeks), frontend/backend development (6-10 weeks), testing/auditing (3-6 weeks), deployment/mainnet launch (1-2 weeks). We follow agile methodology with regular demos and feedback loops.',
    },
    {
      question: 'Do you provide smart contract auditing?',
      answer: 'Yes! Security is critical in Web3. We provide: Internal code review and automated testing (Slither, Mythril), Integration with professional audit firms (CertiK, Hacken, Quantstamp, OpenZeppelin), Formal verification for critical functions, Bug bounty program setup ($10K-$100K rewards), Post-audit remediation of findings, Continuous monitoring post-launch. All enterprise packages include professional smart contract audits. We never deploy unaudited contracts to mainnet.',
    },
    {
      question: 'What wallets can you integrate?',
      answer: 'We integrate all major Web3 wallets: MetaMask (browser extension + mobile), WalletConnect (mobile wallet connectivity), Coinbase Wallet, Trust Wallet, Rainbow, Ledger/Trezor (hardware wallets), Phantom (Solana), RainbowKit (multi-wallet UI), Web3Modal. We also implement account abstraction (ERC-4337) for gasless transactions and social recovery wallets for better UX.',
    },
    {
      question: 'Can you build cross-chain applications?',
      answer: 'Absolutely! We specialize in omnichain DApps using: LayerZero (omnichain messaging), Chainlink CCIP (secure cross-chain data/value), Wormhole (NFT/token bridging), Axelar (interchain communication), Synapse Protocol (liquidity bridges), Hop Protocol (rollup-to-rollup transfers). Use cases include cross-chain token swaps, omnichain NFT marketplaces, cross-chain lending/borrowing, unified liquidity pools, and multi-chain governance.',
    },
    {
      question: 'What is account abstraction and do you implement it?',
      answer: 'Account abstraction (ERC-4337) enables smart contract wallets with features like: No seed phrases (social recovery via guardians), Gasless transactions (paymasters sponsor gas fees), Transaction batching (multiple actions in one tx), Spending limits (set allowances for apps), Subscription payments (auto-pay monthly). We implement ERC-4337 using Stackup, Pimlico, or custom paymaster contracts for superior user onboarding experiences.',
    },
    {
      question: 'Do you provide Web3 mobile app development?',
      answer: 'Yes! We build native Web3 mobile apps using: React Native (cross-platform iOS/Android with wagmi), Flutter (high-performance cross-platform), Swift/Kotlin (native iOS/Android), Expo (rapid React Native development). Features include: Mobile wallet integration, Biometric authentication, Push notifications for transactions, Deep linking, Offline-first architecture, Mobile-optimized gas estimation. Apps integrate seamlessly with your Web3 backend.',
    },
    {
      question: 'What ongoing support and maintenance do you offer?',
      answer: 'Comprehensive post-launch support: 24/7 monitoring and incident response, Regular smart contract upgrades (via proxy patterns), Security patches and bug fixes, Performance optimization, Infrastructure management (nodes, APIs, databases), User support and training, Analytics reporting, Compliance updates. Support tiers: Basic (business hours, email/ticket), Professional (24/7 chat + phone), Enterprise (dedicated team, SLA guarantees).',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Web3 Development Services',
    'Full-stack decentralized application development with smart contracts, DApps, DeFi protocols, NFT platforms, DAO tools, wallet integration, and cross-chain solutions.',
    'https://www.eifasoft.com/web3-development-services'
  );

  const productSchema = generateProductSchema(
    'Web3 Development Platform',
    'Complete Web3 development solution including DApp frontend, smart contracts, wallet integration, and multi-chain deployment',
    '200000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Web3 Development Platform',
    description: 'Enterprise-grade Web3 development services with expertise in DApps, smart contracts, DeFi, NFTs, DAOs, and cross-chain solutions. Full-stack blockchain development from architecture to deployment.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Ethereum, BSC, Polygon, Solana, Arbitrum, Optimism, Base',
    price: '200000',
    rating: 4.9,
    reviewCount: 156,
  });

  const localBusinessSchema = generateLocalBusinessSchema('Moradabad');

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'Web3 Development Services', url: 'https://www.eifasoft.com/web3-development-services' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema, localBusinessSchema]} />
      
      <Hero
        title="Web3 Development Services"
        subtitle="Build Next-Generation Decentralized Applications"
        description="Full-stack Web3 development from concept to deployment. Expert teams in Solidity, Rust, React, and blockchain architecture. Launch secure, scalable DApps on Ethereum, Solana, Polygon, and Layer 2 networks."
        gradient="purple"
      />

      {/* Definition Box - AEO Optimization */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Web3 Development?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Web3 Development</strong> is the process of building decentralized applications (DApps) that run on blockchain networks using smart contracts. Unlike traditional web apps, Web3 applications are trustless, permissionless, and censorship-resistant. Development includes smart contract programming (Solidity/Rust), DApp frontend (React/Next.js with wagmi), wallet integration, decentralized storage (IPFS/Arweave), and blockchain indexing (The Graph). Modern Web3 also includes DeFi protocols, NFT platforms, DAO governance, cross-chain applications, and account abstraction for better UX.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">🚀</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Full-Stack Web3 Expertise</p>
                  <p className="text-sm text-gray-600">Smart contracts, DApps, DeFi, NFTs, DAOs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Chain Deployment</p>
                  <p className="text-sm text-gray-600">Ethereum, Solana, Polygon, Arbitrum, Optimism</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹2,00,000</p>
                  <p className="text-sm text-gray-600">Basic DApp to enterprise solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Security First Approach</p>
                  <p className="text-sm text-gray-600">Professional audits, formal verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Web3 Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end blockchain development from smart contracts to user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-purple-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web3 Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert developers using cutting-edge tools and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-purple-900 mb-4">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700">{tech.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tech.level === 'Expert' ? 'bg-purple-100 text-purple-700' :
                        tech.level === 'Advanced' ? 'bg-pink-100 text-pink-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {tech.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Web3 Development Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for projects of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 shadow-xl bg-gradient-to-b ${pkg.color} text-white ${pkg.popular ? 'scale-105 ring-4 ring-purple-300' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">{pkg.price}</div>
                  <div className="text-purple-100">{pkg.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2 mt-1">✓</span>
                      <span className="text-purple-50">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  pkg.popular ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Web3 Services</h2>
            <p className="text-xl text-gray-600">Explore our complete blockchain development ecosystem</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900">Smart Contract Dev</h3>
              <p className="text-sm text-gray-600 mt-2">Solidity/Rust experts</p>
            </Link>
            <Link href="/dapp-development-company" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-900">DApp Development</h3>
              <p className="text-sm text-gray-600 mt-2">Full-stack DApps</p>
            </Link>
            <Link href="/defi-solutions" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900">DeFi Protocols</h3>
              <p className="text-sm text-gray-600 mt-2">DEX, lending, yield</p>
            </Link>
            <Link href="/nft-marketplace-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="font-bold text-gray-900">NFT Platforms</h3>
              <p className="text-sm text-gray-600 mt-2">Marketplaces & minting</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Web3 Project</h2>
              <p className="text-lg text-gray-600">
                Let&apos;s discuss your vision and build the future of decentralized applications
              </p>
            </div>
            <ContactForm serviceName="Web3 Development Services" />
          </div>
        </div>
      </section>
    </main>
  );
}

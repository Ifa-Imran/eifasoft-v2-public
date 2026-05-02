import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema, generateLocalBusinessSchema, generateHowToSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Smart Contract Development Company | Solidity Expert & Security Audit | EifaSoft',
    description: 'Expert smart contract development in Solidity for Ethereum and EVM chains. Custom logic, gas optimization, formal verification, security audits. Starting ₹75,000.',
    canonical: '/smart-contract-development',
    keywords: [
      // Primary Keywords
      'smart contract development',
      'Solidity development',
      'Ethereum smart contract',
      'smart contract audit',
      
      // High Volume Keywords
      'smart contracts',
      'solidity developer',
      'smart contract security',
      'smart contract deployment',
      
      // Technical Keywords
      'gas optimization',
      'formal verification',
      'storage optimization',
      'struct packing',
      'batch operations',
      'assembly code',
      'yul optimization',
      
      // Security & Testing
      'smart contract testing',
      'property-based testing',
      'invariant checking',
      'mathematical proof of correctness',
      'security audit services',
      'vulnerability assessment',
      
      // Contract Types
      'upgradeable smart contracts',
      'proxy smart contracts',
      'multi-sig smart contracts',
      'smart contract templates',
      'rust smart contracts',
      'vyper smart contracts',
      
      // Platform-Specific
      'ethereum smart contract development',
      'solana smart contract development',
      'polygon smart contract development',
      'bsc smart contract development',
      'avalanche smart contract development',
      'cardano smart contract development',
      'near smart contract development',
      'arbitrum smart contract',
      'optimism smart contract',
      
      // Use Case Keywords
      'DeFi smart contract',
      'NFT smart contract',
      'DAO smart contract',
      'token smart contract',
      'ERC-20 development',
      'ERC-721 development',
      'ERC-1155 development',
      
      // Development Tools
      'OpenZeppelin contracts',
      'Hardhat development',
      'Foundry smart contract',
      'Remix IDE',
      'Truffle suite',
      
      // Location-Based
      'smart contract company India',
      'Solidity developer India',
      'smart contract developers bangalore',
      'smart contract developers mumbai',
      'smart contract consultants delhi',
      
      // Commercial Intent
      'smart contract development cost',
      'smart contract development services',
      'smart contract consulting',
      'hire solidity developer',
    ],
  });
}

export default function SmartContractDevelopment() {
  const services = [
    {
      icon: '📝',
      title: 'Custom Smart Contract Development',
      description: 'Develop tailored smart contracts for your unique business requirements',
      features: ['Business Logic Implementation', 'Gas Optimization', 'Upgradeable Contracts', 'Multi-signature Support'],
    },
    {
      icon: '🔒',
      title: 'Security Audits',
      description: 'Comprehensive security audits to identify and fix vulnerabilities',
      features: ['Code Review', 'Vulnerability Assessment', 'Gas Analysis', 'Audit Reports'],
    },
    {
      icon: '⚡',
      title: 'Smart Contract Optimization',
      description: 'Optimize contracts for minimal gas fees and maximum performance',
      features: ['Gas Cost Reduction', 'Storage Optimization', 'Function Optimization', 'Batch Operations'],
    },
    {
      icon: '🔄',
      title: 'Contract Migration & Upgrades',
      description: 'Migrate existing contracts or implement upgrade mechanisms',
      features: ['Proxy Patterns', 'Data Migration', 'Version Control', 'Backward Compatibility'],
    },
    {
      icon: '🧪',
      title: 'Testing & Deployment',
      description: 'Thorough testing and deployment on multiple networks',
      features: ['Unit Testing', 'Integration Testing', 'Testnet Deployment', 'Mainnet Launch'],
    },
    {
      icon: '📊',
      title: 'Contract Analytics',
      description: 'Monitor and analyze smart contract performance',
      features: ['Transaction Monitoring', 'Event Tracking', 'Performance Metrics', 'Usage Analytics'],
    },
  ];

  const blockchains = [
    { name: 'Ethereum', icon: '♦️', language: 'Solidity', features: ['ERC Standards', 'Layer 2 Support', 'DeFi Ready'] },
    { name: 'Binance Smart Chain', icon: '🟡', language: 'Solidity', features: ['Low Gas Fees', 'Fast Transactions', 'EVM Compatible'] },
    { name: 'Polygon', icon: '🟣', language: 'Solidity', features: ['Scalable', 'Ethereum Compatible', 'Low Cost'] },
    { name: 'Avalanche', icon: '🔺', language: 'Solidity', features: ['High Speed', 'Low Latency', 'Subnets'] },
    { name: 'Arbitrum', icon: '🔵', language: 'Solidity', features: ['Layer 2', 'Optimistic Rollup', 'Ethereum Security'] },
    { name: 'Optimism', icon: '🔴', language: 'Solidity', features: ['Layer 2', 'EVM Equivalent', 'Fast Finality'] },
  ];

  const contractTypes = [
    { type: 'Token Contracts', examples: ['ERC-20 Tokens', 'ERC-721 NFTs', 'ERC-1155 Multi-tokens', 'Governance Tokens'] },
    { type: 'DeFi Contracts', examples: ['DEX', 'Lending Protocols', 'Staking', 'Yield Farming'] },
    { type: 'NFT Contracts', examples: ['NFT Minting', 'Marketplace', 'Royalties', 'Metadata'] },
    { type: 'DAO Contracts', examples: ['Governance', 'Voting', 'Treasury', 'Proposals'] },
  ];

  const packages = [
    {
      name: 'Basic Contract',
      price: '₹75,000',
      duration: '3-4 weeks',
      features: [
        'Single Smart Contract',
        'Solidity Development',
        'Basic Testing',
        'Testnet Deployment',
        'Code Documentation',
        '1 Month Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional Suite',
      price: '₹2,00,000',
      duration: '6-8 weeks',
      features: [
        'Multiple Smart Contracts',
        'Security Audit',
        'Gas Optimization',
        'Comprehensive Testing',
        'Mainnet Deployment',
        'Technical Documentation',
        'Upgrade Mechanism',
        '3 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Solution',
      price: '₹5,00,000+',
      duration: '10-16 weeks',
      features: [
        'Complex Contract System',
        'Full Security Audit',
        'Multi-chain Deployment',
        'Advanced Features',
        'Monitoring Dashboard',
        'On-chain Governance',
        'Custom Integration',
        '12 Months Support',
        'Dedicated Team',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const process = [
    { step: 1, title: 'Requirements Analysis', desc: 'Understand business logic and technical requirements' },
    { step: 2, title: 'Architecture Design', desc: 'Design contract architecture and data structures' },
    { step: 3, title: 'Development', desc: 'Write smart contracts in Solidity with best practices' },
    { step: 4, title: 'Testing', desc: 'Comprehensive unit and integration testing' },
    { step: 5, title: 'Security Audit', desc: 'Internal and external security audits' },
    { step: 6, title: 'Deployment', desc: 'Deploy to testnet and mainnet with monitoring' },
  ];

  const faqs = [
    {
      question: 'What is the typical timeline for smart contract development?',
      answer: 'Timeline depends on complexity: Simple ERC-20 token (2-3 weeks), Standard DeFi contract (4-6 weeks), Complex multi-contract system (8-12 weeks). This includes development, testing, security audits, and deployment. We recommend starting with testnet deployment for thorough testing before mainnet launch.',
    },
    {
      question: 'How much does smart contract development cost?',
      answer: 'Pricing varies by scope: Basic token contract starts at ₹75,000, Professional suite with multiple contracts and security audit is ₹2,00,000, Enterprise solutions with complex systems start at ₹5,00,000+. Cost includes development, testing, audit, deployment, and support. Custom quotes provided after requirements analysis.',
    },
    {
      question: 'Which blockchain platforms do you support for smart contract development?',
      answer: 'We develop on all major EVM-compatible chains: Ethereum (mainnet and L2s like Arbitrum, Optimism), Binance Smart Chain, Polygon, Avalanche, Fantom, and more. We also support non-EVM chains like Solana (Rust), Cardano (Plutus), and can build custom blockchain solutions. Platform choice depends on your use case, budget, and target audience.',
    },
    {
      question: 'Do you provide security audits for smart contracts?',
      answer: 'Yes! Security is our top priority. We provide comprehensive internal audits using automated tools (Slither, Mythril, MythX) and manual code review. For high-value projects, we arrange third-party audits from reputable firms like CertiK, OpenZeppelin, or Trail of Bits. All contracts include 100% test coverage and formal verification where applicable.',
    },
    {
      question: 'Can smart contracts be upgraded after deployment?',
      answer: 'Yes, using upgradeable contract patterns. We implement Transparent Proxy, UUPS, or Diamond Standard (EIP-2535) patterns that separate logic from data storage. This allows bug fixes and feature additions without losing contract state or changing the contract address. We also implement timelock mechanisms and multi-sig controls for secure upgrades.',
    },
    {
      question: 'What happens if a bug is found after deployment?',
      answer: 'For upgradeable contracts, we can deploy a fix through the proxy pattern. For non-upgradeable contracts, we implement emergency pause functionality and migration strategies. Our contracts include circuit breakers and emergency controls. We provide 90-day hypercare support post-launch with 24/7 monitoring and rapid response for critical issues.',
    },
    {
      question: 'How do you optimize gas costs for smart contracts?',
      answer: 'We employ multiple optimization techniques: Storage optimization with struct packing, using uint256 over smaller types, batch operations to reduce transaction count, event emission instead of storage for logs, efficient algorithms with O(1) complexity where possible, and assembly code for critical sections. We provide gas cost analysis and recommendations before deployment.',
    },
    {
      question: 'What programming languages do you use for smart contracts?',
      answer: 'Primary language is Solidity (0.8+) for EVM chains with OpenZeppelin libraries for security. We also develop in Vyper for projects requiring additional security through simplicity, Rust for Solana and Near Protocol, Plutus/Haskell for Cardano, and Cairo for StarkNet. Choice depends on blockchain platform and project requirements.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Smart Contract Development Services',
    'Custom Solidity smart contract development for Ethereum and EVM-compatible chains: DeFi, NFT, DAO, token contracts with security audits and gas optimization.',
    'Moradabad'
  );

  const productSchema = generateProductSchema(
    'Smart Contract Development Package',
    'Professional smart contract development with security audit, gas optimization, testing, and deployment on Ethereum, BSC, Polygon, and other EVM chains.',
    '75000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Smart Contract Development', url: '/smart-contract-development' },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema('Moradabad');

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const howToSchema = generateHowToSchema([
    {
      name: 'Requirements Analysis & Technical Specification',
      text: 'We analyze your business logic, identify all functions needed, define access controls, and create detailed technical specifications including gas optimization requirements.',
      position: 1,
    },
    {
      name: 'Smart Contract Architecture Design',
      text: 'Design contract architecture using industry-standard patterns (Proxy, Diamond Standard), plan data structures with storage optimization, and implement security controls.',
      position: 2,
    },
    {
      name: 'Solidity Development & Implementation',
      text: 'Write secure Solidity code following best practices, use OpenZeppelin libraries, implement comprehensive error handling, and optimize for minimal gas consumption.',
      position: 3,
    },
    {
      name: 'Comprehensive Testing & Quality Assurance',
      text: 'Execute unit tests, integration tests, property-based testing, invariant checking, and achieve 100% code coverage before proceeding to security audit.',
      position: 4,
    },
    {
      name: 'Security Audit & Formal Verification',
      text: 'Perform internal security audit using automated tools (Slither, Mythril), manual code review, formal verification for critical functions, and arrange third-party audit if needed.',
      position: 5,
    },
    {
      name: 'Deployment & Mainnet Launch',
      text: 'Deploy to testnet for final testing, verify source code on block explorer, deploy to mainnet with monitoring setup, and provide post-launch support.',
      position: 6,
    },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Smart Contract Development Platform',
    description: 'Enterprise-grade smart contract development services with Solidity expertise, security auditing, gas optimization, and multi-chain deployment for DeFi, NFT, DAO, and token projects.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Ethereum, BSC, Polygon, Solana, Avalanche, Arbitrum, Optimism',
    price: '75000',
    rating: 4.9,
    reviewCount: 143,
  });

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[
        serviceSchema,
        productSchema,
        faqSchema,
        breadcrumbSchema,
        localBusinessSchema,
        speakableSchema,
        howToSchema,
        softwareSchema,
      ]} />

      <Hero
        title="Smart Contract Development"
        subtitle="Secure, Audited & Gas Optimized"
        description="Custom Solidity smart contracts for DeFi, NFT, DAO, and token platforms. Security audits, gas optimization, and multi-chain deployment on Ethereum, Polygon, BSC."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'Blockchain Services', href: '/blockchain-development-company' }}
        gradient="blue"
      />

      {/* What is Smart Contract Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Smart Contract Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Smart Contract Development</strong> is the process of creating self-executing programs stored on blockchain networks. Written primarily in Solidity for Ethereum and EVM-compatible chains, smart contracts automatically enforce agreement terms when predefined conditions are met. They enable trustless transactions, decentralized finance (DeFi) protocols, NFT minting, DAO governance, and automated business logic without intermediaries.
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
                  Smart contract development starting at ₹75,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Solidity for Ethereum, Polygon, BSC, Arbitrum
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Comprehensive security audits included
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  2-16 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Gas optimization for minimal transaction costs
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Upgradeable proxy patterns available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contract Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Contract Use Cases & Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications transforming industries with smart contracts
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💼</span>
                Financial Services
              </h3>
              <p className="text-gray-700 mb-4">
                Automated financial instruments with transparent, trustless execution for lending, borrowing, and asset management.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Automated Escrow</h4>
                  <p className="text-sm text-gray-600">Multi-party payment release based on predefined conditions without intermediaries</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Collateralized Lending</h4>
                  <p className="text-sm text-gray-600">Over-collateralized loans with automatic liquidation mechanisms</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Payment Streaming</h4>
                  <p className="text-sm text-gray-600">Real-time salary payments and continuous fund distribution</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏛️</span>
                Decentralized Governance
              </h3>
              <p className="text-gray-700 mb-4">
                Democratic decision-making systems with transparent voting mechanisms and automated proposal execution.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">DAO Voting Systems</h4>
                  <p className="text-sm text-gray-600">Token-based voting with delegation and time-locked execution</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Treasury Management</h4>
                  <p className="text-sm text-gray-600">Multi-signature wallets with proposal-based fund allocation</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Protocol Upgrades</h4>
                  <p className="text-sm text-gray-600">Community-driven smart contract upgrades with timelock controls</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Supply Chain & Logistics
              </h3>
              <p className="text-gray-700 mb-4">
                End-to-end tracking and verification systems ensuring product authenticity and compliance.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Product Authentication</h4>
                  <p className="text-sm text-gray-600">Immutable proof of origin and ownership transfer tracking</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Automated Settlements</h4>
                  <p className="text-sm text-gray-600">Instant payment release upon delivery confirmation</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">IoT sensor integration for temperature and condition monitoring</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎮</span>
                Gaming & NFTs
              </h3>
              <p className="text-gray-700 mb-4">
                Blockchain-based gaming assets with true ownership, provable scarcity, and interoperability.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">In-Game Assets</h4>
                  <p className="text-sm text-gray-600">Tradeable items with dynamic attributes and upgrade mechanisms</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Royalty Distribution</h4>
                  <p className="text-sm text-gray-600">Automated creator royalties on secondary market sales</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Play-to-Earn Mechanics</h4>
                  <p className="text-sm text-gray-600">Token reward systems based on gameplay achievements</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Smart Contract Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end smart contract development from design to deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-500"
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

      {/* Security Deep Dive */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security-First Development Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layer security strategy protecting your smart contracts from vulnerabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold mb-3">Code Analysis</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Static analysis tools (Slither, Mythril)</li>
                <li>• Manual code review by experts</li>
                <li>• Gas profiling & optimization</li>
                <li>• Complexity analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-lg font-bold mb-3">Vulnerability Testing</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Reentrancy attack prevention</li>
                <li>• Integer overflow/underflow checks</li>
                <li>• Front-running mitigation</li>
                <li>• Access control validation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold mb-3">Formal Verification</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Mathematical proof of correctness</li>
                <li>• Property-based testing</li>
                <li>• Invariant checking</li>
                <li>• State machine verification</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-3">Continuous Monitoring</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time transaction monitoring</li>
                <li>• Anomaly detection systems</li>
                <li>• Emergency pause mechanisms</li>
                <li>• Automated alert systems</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📝</span>
              Our Security Audit Process
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-red-700">1. Pre-Audit Phase</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Scope definition & documentation review</li>
                  <li>• Automated scanning with multiple tools</li>
                  <li>• Architecture analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-700">2. Manual Review</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Line-by-line code inspection</li>
                  <li>• Business logic verification</li>
                  <li>• Attack vector simulation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-700">3. Reporting & Remediation</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Detailed audit report with severity ratings</li>
                  <li>• Fix recommendations & implementation</li>
                  <li>• Re-audit of changes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Blockchains */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Blockchains</h2>
            <p className="text-xl text-gray-600">
              Deploy on multiple EVM-compatible chains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchains.map((chain, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 text-center">{chain.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{chain.name}</h3>
                <p className="text-center text-sm text-gray-600 mb-4">Language: {chain.language}</p>
                <ul className="space-y-2">
                  {chain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▪</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Optimization Deep-Dive */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gas Optimization Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced strategies to minimize transaction costs and maximize efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                Storage Optimization
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Struct Packing:</strong> Pack multiple variables into single 32-byte slots (uint128 + uint128, address + uint96)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Storage vs Memory:</strong> Use memory for temporary data, storage only when necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Mapping over Arrays:</strong> Mappings are cheaper for lookups than iterating arrays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Delete Unused Variables:</strong> Remove unnecessary state variables to save storage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🔥</span>
                Code Optimization
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Batch Operations:</strong> Process multiple items in single transaction to reduce overhead</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Events over Storage:</strong> Use events for logs instead of storage (10x cheaper)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Assembly Code:</strong> Use Yul/inline assembly for critical gas-intensive operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Function Inlining:</strong> Mark small internal functions as pure/view when possible</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💾</span>
                Data Structure Optimization
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Fixed-Size over Dynamic:</strong> Use fixed-size arrays when size is known (cheaper than dynamic)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Bytes32 over String:</strong> Use bytes32 for fixed-length strings (much cheaper)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Boolean Packing:</strong> Pack multiple booleans into single uint256 using bit manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Calldata over Memory:</strong> Use calldata for function parameters (no copying cost)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Algorithm Optimization
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>O(1) Complexity:</strong> Design functions with constant time complexity when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Lazy Evaluation:</strong> Defer expensive computations to off-chain or later transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Caching Results:</strong> Cache frequently accessed values in local variables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Unchecked Blocks:</strong> Use unchecked arithmetic for safe operations (Solidity 0.8+)</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Gas Savings Example */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Real-World Gas Savings: Before vs After Optimization</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left">Operation</th>
                    <th className="px-6 py-3 text-left">Before</th>
                    <th className="px-6 py-3 text-left">After</th>
                    <th className="px-6 py-3 text-left">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Token Transfer</td>
                    <td className="px-6 py-4 text-red-600">65,000 gas</td>
                    <td className="px-6 py-4 text-green-600">42,000 gas</td>
                    <td className="px-6 py-4 text-green-600 font-bold">35% ↓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">NFT Minting</td>
                    <td className="px-6 py-4 text-red-600">180,000 gas</td>
                    <td className="px-6 py-4 text-green-600">95,000 gas</td>
                    <td className="px-6 py-4 text-green-600 font-bold">47% ↓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Swap Operation</td>
                    <td className="px-6 py-4 text-red-600">250,000 gas</td>
                    <td className="px-6 py-4 text-green-600">145,000 gas</td>
                    <td className="px-6 py-4 text-green-600 font-bold">42% ↓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Staking Claim</td>
                    <td className="px-6 py-4 text-red-600">120,000 gas</td>
                    <td className="px-6 py-4 text-green-600">68,000 gas</td>
                    <td className="px-6 py-4 text-green-600 font-bold">43% ↓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Actual savings vary based on contract complexity and network conditions. Average client savings: 35-50% reduction in gas costs.
            </p>
          </div>
        </div>
      </section>

      {/* Formal Verification & Security */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formal Verification & Mathematical Proof</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensuring correctness through mathematical proofs and property-based testing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🔬</span>
                Formal Verification Methods
              </h3>
              <p className="text-gray-700 mb-4">
                Formal verification uses mathematical proofs to verify that smart contracts behave correctly under all possible conditions:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Mathematical Proofs:</strong> Prove correctness of critical functions using formal logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Invariant Checking:</strong> Verify properties that must always hold true (e.g., total supply constant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Model Checking:</strong> Exhaustively test all possible states and transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Theorem Proving:</strong> Use automated theorem provers to verify specifications</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🧪</span>
                Property-Based Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Property-based testing automatically generates thousands of test cases to find edge cases:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Fuzz Testing:</strong> Random inputs to discover unexpected behaviors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Symbolic Execution:</strong> Analyze all possible execution paths symbolically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Constraint Solving:</strong> Find inputs that violate specified properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>State Machine Testing:</strong> Verify correct state transitions under all scenarios</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Security Tools */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Security Audit Tools & Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔍</span>
                  Automated Analysis
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Slither (Static Analysis)</li>
                  <li>• Mythril (Symbolic Execution)</li>
                  <li>• MythX (Cloud-based)</li>
                  <li>• Securify (Automated)</li>
                  <li>• SmartCheck (Pattern Matching)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">👁️</span>
                  Manual Review
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Code Logic Review</li>
                  <li>• Business Logic Validation</li>
                  <li>• Access Control Audit</li>
                  <li>• Economic Model Analysis</li>
                  <li>• Gas Optimization Review</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Third-Party Audits
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• CertiK Partnership</li>
                  <li>• OpenZeppelin Audits</li>
                  <li>• Trail of Bits</li>
                  <li>• Quantstamp</li>
                  <li>• ConsenSys Diligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Blockchain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete blockchain development ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/blockchain-development-company" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent group-hover:border-blue-500">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">Blockchain Development</h3>
                <p className="text-gray-600 mb-4">Full-stack blockchain development from architecture to deployment and maintenance.</p>
                <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
            <Link href="/blockchain-consulting" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent group-hover:border-purple-500">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600">Blockchain Consulting</h3>
                <p className="text-gray-600 mb-4">Expert advisory on architecture, technology selection, and tokenomics design.</p>
                <span className="text-purple-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
            <Link href="/token-development-services" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent group-hover:border-green-500">
                <div className="text-4xl mb-4">🪙</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600">Token Development</h3>
                <p className="text-gray-600 mb-4">ERC-20, ERC-721, and custom token development with comprehensive tokenomics.</p>
                <span className="text-green-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Features & Patterns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Smart Contract Patterns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementing industry-standard design patterns for robust and upgradeable contracts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔄</span>
                Upgradeable Patterns
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Transparent Proxy</h4>
                  <p className="text-xs text-gray-600">Separate logic and data storage for seamless upgrades</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">UUPS Proxy</h4>
                  <p className="text-xs text-gray-600">Gas-efficient upgrades with upgrade logic in implementation</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Diamond Standard (EIP-2535)</h4>
                  <p className="text-xs text-gray-600">Multi-facet proxy for unlimited contract size</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                Access Control
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Role-Based Access (RBAC)</h4>
                  <p className="text-xs text-gray-600">Granular permissions with OpenZeppelin AccessControl</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Multi-Signature</h4>
                  <p className="text-xs text-gray-600">Require multiple approvals for critical operations</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Timelock Controllers</h4>
                  <p className="text-xs text-gray-600">Delayed execution for transparency and security</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Gas Optimization
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Storage Optimization</h4>
                  <p className="text-xs text-gray-600">Struct packing and storage layout optimization</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Batch Operations</h4>
                  <p className="text-xs text-gray-600">Process multiple items in single transaction</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Efficient Algorithms</h4>
                  <p className="text-xs text-gray-600">Minimize computational complexity</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚨</span>
                Safety Mechanisms
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Circuit Breakers</h4>
                  <p className="text-xs text-gray-600">Emergency pause functionality (Pausable)</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Rate Limiting</h4>
                  <p className="text-xs text-gray-600">Prevent abuse with transaction throttling</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Reentrancy Guards</h4>
                  <p className="text-xs text-gray-600">Protect against recursive calls (ReentrancyGuard)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Economic Patterns
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Pull Payment</h4>
                  <p className="text-xs text-gray-600">Let users withdraw instead of sending directly</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Commit-Reveal</h4>
                  <p className="text-xs text-gray-600">Prevent front-running in competitive scenarios</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Dutch Auction</h4>
                  <p className="text-xs text-gray-600">Descending price discovery mechanism</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Data Patterns
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Merkle Trees</h4>
                  <p className="text-xs text-gray-600">Efficient proof of membership and whitelisting</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Bitmap Indexing</h4>
                  <p className="text-xs text-gray-600">Gas-efficient status tracking</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold mb-1">Oracle Integration</h4>
                  <p className="text-xs text-gray-600">Chainlink VRF and Price Feeds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contract Types We Develop</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractTypes.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.type}</h3>
                <ul className="space-y-3">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">▪</span>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">Security-first approach to smart contract development</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 last:border-l-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Contract Development Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for quality smart contracts</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about smart contract development
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

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Smart Contract Development" />
        </div>
      </section>
    </main>
  );
}

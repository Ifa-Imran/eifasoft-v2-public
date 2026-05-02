import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Token Development Services | ERC-20, ERC-721, NFT & Governance Tokens | EifaSoft',
    description: 'Custom token development: ERC-20 utility tokens, ERC-721 NFTs, ERC-1155 multi-tokens, governance tokens, reward tokens on Ethereum, Polygon, BSC. Audit included.',
    canonical: '/token-development-services',
    keywords: [
      'token development services', 'ERC-20 token development', 'ERC-721 NFT development',
      'ERC-1155 token', 'crypto token creation', 'governance token development',
      'utility token creation', 'reward token development', 'token smart contract',
      'token development company India', 'custom cryptocurrency development',
      'token launch service', 'ICO token development', 'IDO token',
      'staking token development', 'vesting contract', 'token migration',
      'multi-chain token', 'BEP-20 token', 'Polygon token development',
      'token audit', 'deflationary token', 'tokenomics implementation',
      'tokenomics', 'crypto token', 'utility token', 'security token',
      'token development company', 'token development services',
      'socialfi token development', 'social token', 'gamefi token', 'gaming token development',
      'rwa tokenization', 'real estate tokenization', 'art tokenization', 'asset tokenization', 'fractional ownership',
      'spl token development', 'trc-20 token development',
      'security token offering', 'sto development',
      'token development cost', 'how to create a cryptocurrency',
      'best token development company', 'token development company india',
    ],
  });
}

export default function TokenDevelopmentServices() {
  const tokenTypes = [
    {
      icon: '🪙',
      title: 'ERC-20 Tokens',
      description: 'Fungible tokens for utility, governance, or currency purposes',
      features: ['Transfer & Approval', 'Minting & Burning', 'Pausable', 'Capped Supply'],
    },
    {
      icon: '🎨',
      title: 'ERC-721 NFTs',
      description: 'Non-fungible tokens for unique digital assets',
      features: ['Unique Ownership', 'Metadata URI', 'Enumerable', 'Royalties'],
    },
    {
      icon: '💎',
      title: 'ERC-1155 Multi-Tokens',
      description: 'Hybrid standard supporting both fungible and non-fungible tokens',
      features: ['Batch Operations', 'Multiple Token Types', 'Gas Efficient', 'Flexible'],
    },
    {
      icon: '🏛️',
      title: 'Governance Tokens',
      description: 'Tokens with voting rights for decentralized governance',
      features: ['Voting Power', 'Delegation', 'Timelock', 'Proposals'],
    },
    {
      icon: '🎁',
      title: 'Reward Tokens',
      description: 'Incentive tokens for staking, liquidity, or platform rewards',
      features: ['Staking Rewards', 'Vesting Schedule', 'Distribution Logic', 'Burning Mechanism'],
    },
    {
      icon: '🔄',
      title: 'Utility Tokens',
      description: 'Platform-specific tokens for accessing services or features',
      features: ['Platform Access', 'Fee Payment', 'Discount Mechanism', 'Ecosystem Integration'],
    },
  ];

  const features = [
    { icon: '⚡', title: 'Gas Optimized', desc: 'Minimal transaction costs' },
    { icon: '🔐', title: 'Secure', desc: 'Audited smart contracts' },
    { icon: '📊', title: 'Tokenomics', desc: 'Custom distribution models' },
    { icon: '🔄', title: 'Upgradeable', desc: 'Proxy pattern support' },
    { icon: '💰', title: 'Vesting', desc: 'Time-based unlocking' },
    { icon: '🔥', title: 'Burn Mechanism', desc: 'Supply reduction' },
  ];

  const packages = [
    {
      name: 'Basic Token',
      price: '₹50,000',
      duration: '2-3 weeks',
      features: [
        'ERC-20 or ERC-721',
        'Standard Features',
        'Basic Tokenomics',
        'Testnet Deployment',
        'Smart Contract Code',
        '1 Month Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional Token',
      price: '₹1,50,000',
      duration: '4-6 weeks',
      features: [
        'Any Token Standard',
        'Custom Features',
        'Advanced Tokenomics',
        'Vesting & Staking',
        'Security Audit',
        'Mainnet Deployment',
        'Documentation',
        '3 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Token',
      price: '₹3,50,000+',
      duration: '8-12 weeks',
      features: [
        'Multi-Token Ecosystem',
        'Complex Tokenomics',
        'Governance System',
        'DeFi Integration',
        'Full Security Audit',
        'Multi-chain Deployment',
        'Whitepaper Support',
        'Marketing Materials',
        '12 Months Support',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between ERC-20, ERC-721, and ERC-1155 tokens?',
      answer: 'ERC-20 is for fungible tokens (cryptocurrencies, utility tokens) where each token is identical and divisible. ERC-721 is for non-fungible tokens (NFTs) where each token is unique with individual metadata. ERC-1155 is a multi-token standard supporting both fungible and non-fungible tokens in a single contract, ideal for gaming items or collections with multiple token types. Choice depends on your use case.',
    },
    {
      question: 'How much does token development cost?',
      answer: 'Pricing depends on complexity: Basic ERC-20 token starts at ₹50,000 (2-3 weeks), Professional token with custom features and audit is ₹1,50,000 (4-6 weeks), Enterprise multi-token ecosystem with governance starts at ₹3,50,000+ (8-12 weeks). Costs include smart contract development, testing, deployment, and support. Multi-chain deployment and advanced tokenomics increase costs.',
    },
    {
      question: 'Can I create a token without coding knowledge?',
      answer: 'Yes! We handle all technical aspects for you. You provide business requirements (token name, supply, distribution, use case) and we develop the complete solution. We explain technical decisions in simple terms, provide documentation, and train your team on token management. No coding knowledge required on your part.',
    },
    {
      question: 'What is token vesting and why is it important?',
      answer: 'Vesting locks tokens for a period and releases them gradually over time. Essential for: preventing team dumps (12-48 month vesting for team tokens), investor protection (6-24 month cliff + vesting), building trust with community, maintaining price stability, and regulatory compliance. We implement customizable vesting schedules with linear or cliff-based unlocking mechanisms.',
    },
    {
      question: 'How do token burns work and when should I use them?',
      answer: 'Token burns permanently remove tokens from circulation by sending to a dead address (0x000...000) or using a burn function. Use cases: deflationary tokenomics (reduce supply over time), transaction fees (burn % of each transfer), buyback and burn (use revenue to reduce supply), event-based burns (milestone achievements). We implement automatic or manual burn mechanisms based on your strategy.',
    },
    {
      question: 'Can tokens be deployed on multiple blockchains?',
      answer: 'Yes, multi-chain deployment is common. We deploy on Ethereum, BSC, Polygon, Avalanche, and other EVM chains. Benefits: wider audience reach, lower transaction fees, chain-specific features, and redundancy. We implement bridge contracts for cross-chain transfers or deploy separately with synchronized supplies. Multi-chain increases development cost by 30-50% per additional chain.',
    },
    {
      question: 'What is the best tokenomics model for my project?',
      answer: 'Depends on your goals: Fixed supply (21M like Bitcoin) for scarcity and store of value, Inflationary model for staking rewards and ecosystem growth, Elastic supply (rebase) for stablecoins, Burn mechanisms for deflationary pressure. We recommend: 20-40% public sale, 15-25% team (vested), 20-30% ecosystem/treasury, 15-25% liquidity/marketing. We provide custom tokenomics modeling and whitepaper support.',
    },
    {
      question: 'Do you provide liquidity and exchange listings for tokens?',
      answer: 'We assist with technical aspects: creating liquidity pools on Uniswap/PancakeSwap, setting up initial liquidity, implementing anti-bot mechanisms, and preparing for exchange submissions. For CEX listings (Binance, Coinbase), we provide required documentation and smart contract audits. Actual listing fees and marketing are separate. We have partnerships with DEX aggregators and can advise on listing strategies.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Token Development Services',
    'Custom cryptocurrency token development: ERC-20, ERC-721, ERC-1155, governance, reward, and utility tokens on Ethereum, Polygon, BSC and other EVM chains with security audits.'
  );

  const productSchema = generateProductSchema(
    'Token Development Package',
    'Complete token development: smart contract coding, tokenomics implementation, security audit, and multi-chain deployment for your cryptocurrency or NFT project.',
    '50000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Token Development Services', url: '/token-development-services' },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Token Development Platform',
    description: 'Professional token development platform for ERC-20, ERC-721, ERC-1155, BEP-20, SPL, and TRC-20 tokens with tokenomics design, security audit, and multi-chain deployment.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Ethereum, BSC, Polygon, Solana, TRON, Avalanche',
    price: '50000',
    rating: 4.9,
    reviewCount: 110,
  });
  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, localBusinessSchema, softwareSchema, speakableSchema]} />

      <Hero
        title="Token Development Services"
        subtitle="ERC-20, NFT & Governance Tokens"
        description="Create custom ERC-20 tokens, ERC-721 NFTs, ERC-1155 multi-tokens, and governance tokens on Ethereum, Polygon, BSC. Custom tokenomics, security audit, and multi-chain deployment."
        ctaPrimary={{ text: 'Launch Your Token', href: '/contact' }}
        ctaSecondary={{ text: 'Smart Contracts', href: '/smart-contract-development' }}
        gradient="blue"
      />

      {/* What is Token Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Token Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Token Development</strong> is the process of creating digital assets (tokens) on blockchain networks using smart contracts. Tokens can represent utility access (ERC-20), unique digital assets (ERC-721 NFTs), semi-fungible assets (ERC-1155), governance rights, or real-world assets (RWA tokenization). Token development encompasses tokenomics design, smart contract coding in Solidity or Rust, security auditing, and deployment on chains like Ethereum, BSC, Polygon, Solana, and TRON. Modern token development also includes SocialFi tokens, GameFi tokens, and security token offerings (STOs).
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
                  Token development starting at ₹50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  ERC-20, ERC-721, ERC-1155, BEP-20, SPL, TRC-20 standards
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Custom tokenomics design & implementation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  RWA tokenization & security token offerings
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  SocialFi, GameFi & governance tokens
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Security audit & multi-chain deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tokenomics Design & Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom token economics designed for sustainable growth and long-term value
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">📈</span>
                Supply Mechanisms
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-700">Fixed Supply</h4>
                  <p className="text-sm text-gray-600 mb-2">Capped total supply for scarcity and deflationary economics</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Best For:</span> Store of value tokens, collector editions
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-700">Elastic Supply</h4>
                  <p className="text-sm text-gray-600 mb-2">Dynamic supply adjustment based on demand (rebase tokens)</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Best For:</span> Stablecoins, algorithmic tokens
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-700">Inflationary Model</h4>
                  <p className="text-sm text-gray-600 mb-2">Continuous minting with decreasing emission rates</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Best For:</span> Staking rewards, ecosystem growth
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">🛠️</span>
                Distribution Strategy
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-purple-700">Vesting Schedules</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Team allocation: 12-48 month linear vesting</li>
                    <li>• Investor tokens: 6-24 month cliff + vesting</li>
                    <li>• Advisor shares: 6-18 month release schedule</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-purple-700">Allocation Breakdown</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Public Sale: 20-40%</li>
                    <li>• Team & Advisors: 15-25%</li>
                    <li>• Ecosystem/Treasury: 20-30%</li>
                    <li>• Liquidity & Marketing: 15-25%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🔥</span>
              Burn & Buyback Mechanisms
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-orange-700">Transaction Burns</h4>
                <p className="text-sm text-gray-700">Automatic 0.5-2% burn on every transaction to reduce circulating supply progressively</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-700">Fee-Based Buybacks</h4>
                <p className="text-sm text-gray-700">Use platform revenue to buy back and burn tokens, creating upward price pressure</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-700">Event Burns</h4>
                <p className="text-sm text-gray-700">Periodic scheduled burns or milestone-triggered token destruction events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Token Standards We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create any type of token on Ethereum and EVM-compatible chains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokenTypes.map((token, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-orange-500"
              >
                <div className="text-5xl mb-4">{token.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{token.title}</h3>
                <p className="text-gray-600 mb-4">{token.description}</p>
                <ul className="space-y-2">
                  {token.features.map((feature, idx) => (
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

      {/* Technical Implementation */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Implementation Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-standard implementation with OpenZeppelin libraries and best practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-700">ERC-20 Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span><strong>Transfer:</strong> Standard token transfers between addresses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span><strong>Approve/TransferFrom:</strong> Delegated spending allowance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span><strong>Mint/Burn:</strong> Supply management functions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span><strong>Pausable:</strong> Emergency circuit breaker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✔</span>
                  <span><strong>Snapshot:</strong> Historical balance queries</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-700">ERC-721 (NFT) Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span><strong>SafeMint:</strong> Secure NFT creation with receiver checks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span><strong>Enumerable:</strong> Iterate through token IDs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span><strong>URI Storage:</strong> IPFS metadata management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span><strong>Royalty (EIP-2981):</strong> Creator royalties on sales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✔</span>
                  <span><strong>Burnable:</strong> Token destruction capability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-700">ERC-1155 Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span><strong>Multi-Token:</strong> Fungible + non-fungible in one contract</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span><strong>Batch Operations:</strong> Transfer multiple tokens at once</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span><strong>Supply Tracking:</strong> Monitor total supply per token ID</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span><strong>URI Per Token:</strong> Individual metadata for each type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✔</span>
                  <span><strong>Gas Efficient:</strong> Lower costs for multiple tokens</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Development & Deployment Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold mb-2">Requirements</h4>
                <p className="text-sm text-blue-100">Define token specs, supply, and features</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-blue-100">Write & optimize smart contract</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold mb-2">Testing</h4>
                <p className="text-sm text-blue-100">Comprehensive unit tests (100% coverage)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h4 className="font-semibold mb-2">Audit</h4>
                <p className="text-sm text-blue-100">Security review & vulnerability scan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
                <h4 className="font-semibold mb-2">Deployment</h4>
                <p className="text-sm text-blue-100">Mainnet launch & verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Token Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Token Development Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for token creation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 font-semibold">
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
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg'
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about token development
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-orange-600">❓</span>
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

      {/* Related Blockchain Services */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Blockchain Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⛓️</div>
              <h3 className="font-bold text-gray-900">Smart Contract Development</h3>
              <p className="text-sm text-gray-600 mt-2">Secure token smart contracts</p>
            </Link>
            <Link href="/ico-ido-launchpad-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900">ICO/IDO Launchpad</h3>
              <p className="text-sm text-gray-600 mt-2">Token launch & fundraising</p>
            </Link>
            <Link href="/defi-solutions" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-bold text-gray-900">DeFi Solutions</h3>
              <p className="text-sm text-gray-600 mt-2">DeFi protocol development</p>
            </Link>
            <Link href="/blockchain-development-company" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-gray-900">Blockchain Development</h3>
              <p className="text-sm text-gray-600 mt-2">Full-stack blockchain solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Token Innovations: SocialFi, GameFi & RWA */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Generation Token Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge token solutions for SocialFi, GameFi, and Real-World Asset (RWA) tokenization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* SocialFi Tokens */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">💬</div>
                <h3 className="text-2xl font-bold text-gray-900">SocialFi Token Development</h3>
              </div>
              <p className="text-gray-600 mb-4">Monetize social media engagement with creator tokens, community governance, and social trading rewards.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Creator coins for influencers</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Social trading copy-trading rewards</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Content monetization tokens</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Community governance & voting</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Tipping & microtransactions</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>NFT badges for achievements</span></li>
              </ul>
            </div>

            {/* GameFi Tokens */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🎮</div>
                <h3 className="text-2xl font-bold text-gray-900">GameFi Token Development</h3>
              </div>
              <p className="text-gray-600 mb-4">Play-to-earn gaming ecosystems with dual-token mechanics, NFT integration, and yield generation.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Dual-token system (governance + utility)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Play-to-earn reward distribution</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>In-game currency minting/burning</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>NFT character/item integration</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Staking for passive income</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cross-game asset portability</span></li>
              </ul>
            </div>

            {/* RWA Tokenization */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900">RWA Tokenization Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">Tokenize real-world assets like real estate, art, commodities, and securities for fractional ownership.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Real estate fractional ownership</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Art & collectibles tokenization</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Commodity-backed tokens (gold, silver)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Security token offerings (STO)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Revenue distribution automation</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>KYC/AML compliance integration</span></li>
              </ul>
            </div>
          </div>

          {/* SocialFi Deep Dive */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">📱</span>
              SocialFi Token Architecture
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-lg mb-3 text-purple-700">Creator Coin Features</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bonding curve pricing (automatic price discovery)</li>
                  <li>• Mint on buy, burn on sell mechanism</li>
                  <li>• Creator royalty percentage (5-20%)</li>
                  <li>• Holder-only content access</li>
                  <li>• Governance voting on creator decisions</li>
                  <li>• Revenue sharing from platform earnings</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-bold text-lg mb-3 text-pink-700">Social Engagement Rewards</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Token rewards for content creation</li>
                  <li>• Curation rewards for upvoting quality posts</li>
                  <li>• Comment engagement incentives</li>
                  <li>• Referral bonus tokens</li>
                  <li>• Staking for boosted visibility</li>
                  <li>• Anti-spam mechanisms (reputation scoring)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Smart Contract Functions:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm font-mono bg-white p-4 rounded-lg">
                <div>
                  <strong className="text-purple-700">Trading:</strong>
                  <p className="text-gray-700 mt-1">`buyCreatorCoin(address creator, uint256 amount)`, `sellCreatorCoin(uint256 amount)`, `getPrice(address creator)`</p>
                </div>
                <div>
                  <strong className="text-purple-700">Rewards:</strong>
                  <p className="text-gray-700 mt-1">`claimEngagementRewards()`, `stakeForBoost(uint256 amount)`, `distributeCreatorRevenue()`</p>
                </div>
              </div>
            </div>
          </div>

          {/* GameFi Deep Dive */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              GameFi Dual-Token Economy Design
            </h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-green-50 to-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Governance Token ($GOV)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Utility Token ($GAME)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Supply</td>
                    <td className="px-4 py-3">Fixed (100M total)</td>
                    <td className="px-4 py-3">Infinite (mint/burn)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Use Case</td>
                    <td className="px-4 py-3">Voting, staking, premium access</td>
                    <td className="px-4 py-3">In-game purchases, upgrades, entry fees</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Earning</td>
                    <td className="px-4 py-3">Tournament wins, leaderboard rewards</td>
                    <td className="px-4 py-3">P2E gameplay, quest completion, daily login</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Burn Mechanism</td>
                    <td className="px-4 py-3">Transaction fees (2%)</td>
                    <td className="px-4 py-3">Item crafting, upgrade failures</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Staking APY</td>
                    <td className="px-4 py-3">15-50% (long-term locks)</td>
                    <td className="px-4 py-3">5-15% (flexible terms)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Play-to-Earn Distribution Model:</h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="font-bold text-green-700">40%</div>
                  <div className="text-xs text-gray-600">Gameplay Rewards</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-bold text-green-700">20%</div>
                  <div className="text-xs text-gray-600">Tournaments & Events</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-bold text-green-700">25%</div>
                  <div className="text-xs text-gray-600">Staking Rewards</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="font-bold text-green-700">15%</div>
                  <div className="text-xs text-gray-600">Referral & Social</div>
                </div>
              </div>
            </div>
          </div>

          {/* RWA Tokenization Deep Dive */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🏛️</span>
              Real-World Asset (RWA) Tokenization Framework
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">Asset Classes We Tokenize</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏠</div>
                    <div>
                      <div className="font-semibold text-gray-900">Real Estate</div>
                      <div className="text-sm text-gray-600">Commercial/residential properties, REITs, fractional ownership (₹10,000 minimum)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🖼️</div>
                    <div>
                      <div className="font-semibold text-gray-900">Art & Collectibles</div>
                      <div className="text-sm text-gray-600">Fine art, vintage cars, rare watches, trading cards with provenance tracking</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🥇</div>
                    <div>
                      <div className="font-semibold text-gray-900">Commodities</div>
                      <div className="text-sm text-gray-600">Gold, silver, platinum backed by physical vault storage with audits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <div className="font-semibold text-gray-900">Securities</div>
                      <div className="text-sm text-gray-600">Equity tokens, debt instruments, revenue-sharing agreements (STO compliant)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">Legal & Compliance Structure</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold text-gray-900">SPV Formation</div>
                    <div className="text-sm text-gray-600">Special Purpose Vehicle holds legal title to underlying asset</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold text-gray-900">Token Rights</div>
                    <div className="text-sm text-gray-600">Tokens represent beneficial ownership + revenue share rights</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold text-gray-900">KYC/AML</div>
                    <div className="text-sm text-gray-600">Identity verification, accredited investor checks, sanctions screening</div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="font-semibold text-gray-900">Transfer Restrictions</div>
                    <div className="text-sm text-gray-600">Lock-up periods (1-3 years), right of first refusal, whitelist enforcement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">RWA Tokenization Smart Contract Modules:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-blue-700 mb-2">Asset Registry</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Property deed hashing</li>
                    <li>• Legal document IPFS storage</li>
                    <li>• Valuation oracle integration</li>
                    <li>• Insurance policy tracking</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-blue-700 mb-2">Distribution Engine</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Rental income distribution</li>
                    <li>• Dividend payments (quarterly)</li>
                    <li>• Proceeds from sale distribution</li>
                    <li>• Tax withholding automation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-blue-700 mb-2">Compliance Layer</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Investor whitelist management</li>
                    <li>• Transfer restriction enforcement</li>
                    <li>• Accreditation verification</li>
                    <li>• Regulatory reporting API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Token Development" />
        </div>
      </section>
    </main>
  );
}

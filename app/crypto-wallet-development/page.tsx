import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Crypto Wallet Development | Blockchain Wallet App Development | EifaSoft',
    description: 'Professional crypto wallet development services. Build secure multi-currency wallets, DeFi wallets, NFT wallets, custodial & non-custodial solutions. Starting ₹3,00,000. MetaMask-like, Trust Wallet clone.',
    canonical: '/crypto-wallet-development',
    keywords: [
      'crypto wallet development',
      'blockchain wallet development',
      'cryptocurrency wallet app',
      'bitcoin wallet development',
      'ethereum wallet development',
      'multi-currency wallet',
      'defi wallet development',
      'nft wallet development',
      'custodial wallet development',
      'non-custodial wallet',
      'hd wallet development',
      'hierarchical deterministic wallet',
      'mnemonic phrase',
      'private key management',
      'wallet security',
      'multi-sig wallet',
      'multisignature wallet',
      'social recovery wallet',
      'smart contract wallet',
      'erc-4337 wallet',
      'account abstraction',
      'metamask clone',
      'trust wallet clone',
      'coinbase wallet clone',
      'phantom wallet clone',
      'crypto wallet mobile app',
      'ios crypto wallet',
      'android crypto wallet',
      'react native wallet',
      'flutter wallet app',
      'web3 wallet integration',
      'wallet connect integration',
      'hardware wallet integration',
      'ledger integration',
      'trezor integration',
      'fiat on-ramp',
      'crypto exchange integration',
      'staking wallet',
      'yield farming wallet',
      'cross-chain wallet',
      'omnichain wallet',
      'layer 2 wallet',
      'polygon wallet',
      'arbitrum wallet',
      'optimism wallet',
      'solana wallet',
      'cardano wallet',
      'polkadot wallet',
      'cosmos wallet',
      'wallet api development',
      'blockchain wallet sdk',
      'crypto payment gateway',
      'wallet development company india',
      'crypto wallet development cost',
      'white label crypto wallet',
    ],
  });
}

export default function CryptoWalletDevelopment() {
  const walletTypes = [
    {
      icon: '🔐',
      title: 'Non-Custodial Wallets',
      description: 'Users control private keys with complete self-custody',
      features: ['Private key encryption', 'Mnemonic phrases (BIP-39)', 'HD wallet (BIP-32/44)', 'Local key storage'],
    },
    {
      icon: '🏛️',
      title: 'Custodial Wallets',
      description: 'Institutional-grade wallets with managed custody',
      features: ['Multi-sig approval', 'Cold storage (95% funds)', 'Insurance coverage', 'KYC/AML compliance'],
    },
    {
      icon: '💎',
      title: 'Smart Contract Wallets',
      description: 'ERC-4337 account abstraction with advanced features',
      features: ['Social recovery', 'Gasless transactions', 'Spending limits', 'Transaction batching'],
    },
    {
      icon: '🎨',
      title: 'NFT Wallets',
      description: 'Specialized wallets for NFT storage and trading',
      features: ['NFT gallery view', 'ERC-721/1155 support', 'IPFS integration', 'Marketplace integration'],
    },
    {
      icon: '📱',
      title: 'Mobile Wallet Apps',
      description: 'Native iOS and Android cryptocurrency wallets',
      features: ['React Native/Flutter', 'Biometric auth', 'Push notifications', 'Deep linking'],
    },
    {
      icon: '🌉',
      title: 'Cross-Chain Wallets',
      description: 'Multi-chain wallets with bridge functionality',
      features: ['50+ blockchains', 'Built-in swaps', 'Bridge integration', 'Unified interface'],
    },
  ];

  const features = [
    { icon: '🔒', title: 'Bank-Grade Security', desc: 'AES-256 encryption, HSM, MPC' },
    { icon: '⚡', title: 'Fast Transactions', desc: 'Optimized gas estimation' },
    { icon: '🔄', title: 'Multi-Chain Support', desc: 'Ethereum, Solana, Polygon' },
    { icon: '💳', title: 'Fiat On-Ramp', desc: 'Credit card, bank transfer' },
    { icon: '📊', title: 'Portfolio Tracker', desc: 'Real-time balance & PnL' },
    { icon: '🔔', title: 'Price Alerts', desc: 'Push notifications' },
  ];

  const packages = [
    {
      name: 'Basic Crypto Wallet',
      price: '₹3,00,000',
      duration: '8-10 weeks',
      features: [
        'Single blockchain (Ethereum/BSC)',
        'Send/Receive cryptocurrencies',
        'Private key management',
        'Basic transaction history',
        'Mobile app (iOS or Android)',
        'Testnet deployment',
        'Documentation',
        '3 months support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional Multi-Currency Wallet',
      price: '₹6,00,000',
      duration: '12-16 weeks',
      features: [
        'Multi-chain support (5+ chains)',
        'Token swap integration',
        'NFT gallery',
        'Fiat on-ramp (MoonPay/Ramp)',
        'Staking integration',
        'Both iOS + Android apps',
        'Admin dashboard',
        'Security audit',
        '6 months support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise DeFi Wallet',
      price: '₹12,00,000+',
      duration: '18-24 weeks',
      features: [
        '50+ blockchain support',
        'Account abstraction (ERC-4337)',
        'Multi-sig vault',
        'DeFi yield aggregator',
        'Cross-chain bridge',
        'Institutional custody',
        'White-label solution',
        'Compliance tools (KYC/AML)',
        'Dedicated support team',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is crypto wallet development and what types can you build?',
      answer: 'Crypto wallet development involves creating applications that store private keys, interact with blockchains, and enable users to send/receive cryptocurrencies. We build: 1) Non-custodial wallets (users control keys - MetaMask style), 2) Custodial wallets (managed custody - Coinbase style), 3) Smart contract wallets (ERC-4337 with social recovery), 4) Multi-signature wallets (Gnosis Safe style), 5) NFT wallets with gallery views, 6) DeFi wallets with integrated staking/swaps, 7) Cross-chain omnichain wallets supporting 50+ blockchains. Each type has different security models, user experiences, and use cases.',
    },
    {
      question: 'How secure are cryptocurrency wallets?',
      answer: 'We implement military-grade security: Private key encryption (AES-256-GCM), Hierarchical Deterministic (HD) wallets (BIP-32/39/44 standards), Secure enclave/keystore utilization, Biometric authentication (Face ID, fingerprint), Two-factor authentication (2FA), Multi-signature approval (2-of-3, 3-of-5), Cold storage for majority of funds (95%+), Hardware Security Modules (HSM) for key generation, Multi-Party Computation (MPC) for key management, Regular security audits by CertiK/Hacken, Bug bounty programs ($10K-$100K), Insurance coverage for custodial wallets. Security is our #1 priority.',
    },
    {
      question: 'Which blockchains can you integrate?',
      answer: 'We support extensive blockchain networks: EVM Chains: Ethereum, BSC, Polygon, Avalanche, Arbitrum, Optimism, Base, Linea, zkSync, ETC, Fantom, Moonbeam, Celo. Non-EVM: Solana (SPL tokens), Cardano (ADA), Polkadot (DOT), Cosmos (ATOM), Near Protocol, Algorand, Tezos, Flow. Layer 2 Networks: All major L2s including Polygon zkEVM, Starknet, Immutable X. Total support for 50+ blockchains with unified API and seamless multi-chain experience.',
    },
    {
      question: 'What is account abstraction (ERC-4337) and do you implement it?',
      answer: 'Account abstraction (ERC-4337) revolutionizes wallet UX by enabling smart contract wallets with: No seed phrases (social recovery via trusted guardians), Gasless transactions (paymasters sponsor gas fees), Transaction batching (approve + swap in one click), Spending limits (set allowances for dApps), Subscription payments (auto-pay monthly), Recurring transactions, Time-locked transfers, Multi-sig built-in. We implement ERC-4337 using Stackup, Pimlico, or custom paymaster contracts for superior onboarding.',
    },
    {
      question: 'Can you integrate fiat on-ramp services?',
      answer: 'Yes! We integrate leading fiat-to-crypto gateways: MoonPay (credit/debit cards, bank transfers), Ramp Network (SEPA, Faster Payments), Transak (150+ countries, local payment methods), Wyre (US-focused, ACH transfers), Simplex (crypto purchases with cards), Mercuryo (global coverage). Features include: KYC verification, Real-time FX rates, Multiple payment methods (cards, bank transfer, Apple Pay), Instant settlement, Competitive fees (1-4%), Global coverage (180+ countries).',
    },
    {
      question: 'Do you provide white-label wallet solutions?',
      answer: 'Yes! Our white-label crypto wallet includes: Fully customizable branding (logo, colors, UI themes), Your company logo and branding throughout, Custom domain integration, Admin panel for user management, Analytics dashboard, Marketing materials provided, Technical documentation, Training for your team, Optional hosting and maintenance. Benefits: Launch in weeks (not months), Proven codebase (audited & tested), Cost-effective (vs building from scratch), Ongoing updates and support. Perfect for exchanges, fintech companies, and startups.',
    },
    {
      question: 'What is the cost of crypto wallet development?',
      answer: 'Crypto wallet development costs: Basic single-chain wallet: ₹3,00,000 - ₹5,00,000 (8-10 weeks), Multi-currency wallet (5+ chains): ₹6,00,000 - ₹10,00,000 (12-16 weeks), Advanced DeFi wallet with swaps/staking: ₹10,00,000 - ₹20,00,000 (16-20 weeks), Enterprise omnichain wallet (50+ chains): ₹12,00,000 - ₹30,00,000+ (18-24 weeks). Additional costs: Security audit (₹3,00,000-₹8,00,000), Fiat on-ramp integration (₹1,00,000-₹3,00,000), Compliance/KYC tools (₹50,000-₹2,00,000/month), Infrastructure (nodes, APIs: ₹20,000-₹1,00,000/month).',
    },
    {
      question: 'Do you develop both iOS and Android wallet apps?',
      answer: 'Yes! We build native and cross-platform mobile wallets: React Native (recommended - single codebase, native performance), Flutter (Google\'s UI toolkit - beautiful designs), Swift (native iOS - maximum performance), Kotlin (native Android - full platform integration). Features include: Biometric authentication (Face ID, Touch ID, fingerprint), Push notifications (transactions, price alerts), Camera integration (QR code scanning), Deep linking (open from dApps), Background sync (latest balances), Offline mode (view balances without internet), Widget support (iOS home screen).',
    },
    {
      question: 'Can you integrate DApps and DeFi protocols?',
      answer: 'Absolutely! Our wallets integrate seamlessly with: DApp Browser (built-in Web3 browser), WalletConnect v2 (connect to any dApp), DeFi Protocols (Uniswap, Aave, Compound, Curve), NFT Marketplaces (OpenSea, Rarible, Magic Eden), Staking Platforms (Lido, Rocket Pool, stakefish), Yield Aggregators (Yearn, Beefy Finance), Cross-chain Bridges (Stargate, Hop, Synapse). Users can swap tokens, provide liquidity, stake assets, mint NFTs, and interact with any smart contract directly from the wallet.',
    },
    {
      question: 'What ongoing support and maintenance do you offer?',
      answer: 'Comprehensive post-launch support: 24/7 monitoring and incident response, Regular security updates and patches, New blockchain integrations, Performance optimization, User support (ticket/email/chat), Infrastructure management (nodes, APIs), Compliance updates (regulatory changes), Feature enhancements, Backup and disaster recovery. Support tiers: Basic (business hours, email/ticket), Professional (24/7 chat + phone priority), Enterprise (dedicated team, SLA guarantees, quarterly reviews). We\'re committed to your long-term success.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Crypto Wallet Development Services',
    'Professional cryptocurrency wallet development including non-custodial, custodial, multi-signature, smart contract wallets, and mobile wallet apps with DeFi integration.',
    'https://www.eifasoft.com/crypto-wallet-development'
  );

  const productSchema = generateProductSchema(
    'Cryptocurrency Wallet Platform',
    'Complete crypto wallet solution with multi-chain support, DeFi integration, NFT gallery, staking, and fiat on-ramp',
    '300000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Crypto Wallet Platform',
    description: 'Enterprise-grade cryptocurrency wallet development with support for 50+ blockchains, DeFi integration, NFT gallery, account abstraction, and institutional security.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android, Web',
    price: '300000',
    rating: 4.9,
    reviewCount: 178,
  });

  const localBusinessSchema = generateLocalBusinessSchema('Moradabad');

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'Crypto Wallet Development', url: 'https://www.eifasoft.com/crypto-wallet-development' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema, localBusinessSchema]} />
      
      <Hero
        title="Crypto Wallet Development Services"
        subtitle="Build Secure Multi-Chain Cryptocurrency Wallets"
        description="Professional blockchain wallet development from concept to deployment. Expert teams in cryptography, mobile development, and blockchain integration. Launch secure, user-friendly wallets for Ethereum, Solana, Polygon, and 50+ chains."
        gradient="green"
      />

      {/* Definition Box - AEO Optimization */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">What is Crypto Wallet Development?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Crypto Wallet Development</strong> is the process of building applications that securely store private keys, interact with blockchain networks, and enable users to manage cryptocurrencies. Modern crypto wallets go beyond simple storage - they include features like multi-chain support, DeFi protocol integration (swaps, staking, yield farming), NFT galleries, fiat on-ramps, cross-chain bridges, and account abstraction (ERC-4337) for gasless transactions and social recovery. Development requires expertise in cryptography, mobile development (iOS/Android), blockchain APIs, and security best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">🔐</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">All Wallet Types Supported</p>
                  <p className="text-sm text-gray-600">Non-custodial, custodial, smart contract, multi-sig</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50+ Blockchains</p>
                  <p className="text-sm text-gray-600">Ethereum, Solana, Polygon, Arbitrum, Optimism</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,00,000</p>
                  <p className="text-sm text-gray-600">Basic to enterprise solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Military-Grade Security</p>
                  <p className="text-sm text-gray-600">AES-256, HSM, MPC, multi-sig, audits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Types Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cryptocurrency Wallet Types We Develop</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect wallet solution for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {walletTypes.map((wallet, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{wallet.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{wallet.title}</h3>
                <p className="text-gray-600 mb-4">{wallet.description}</p>
                <ul className="space-y-2">
                  {wallet.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bank-Grade Security Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Institutional-level protection for your digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Crypto Wallet Development Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for every stage of growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 shadow-xl bg-gradient-to-b ${pkg.color} text-white ${pkg.popular ? 'scale-105 ring-4 ring-green-300' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">{pkg.price}</div>
                  <div className="text-green-100">{pkg.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2 mt-1">✓</span>
                      <span className="text-green-50">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  pkg.popular ? 'bg-white text-green-600 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Blockchain Networks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive multi-chain support for maximum flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-800 mb-4">EVM Chains</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ethereum Mainnet</li>
                <li>• Binance Smart Chain</li>
                <li>• Polygon PoS</li>
                <li>• Avalanche C-Chain</li>
                <li>• Arbitrum One</li>
                <li>• Optimism</li>
                <li>• Base, Linea</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-800 mb-4">Layer 2 Networks</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Polygon zkEVM</li>
                <li>• zkSync Era</li>
                <li>• Starknet</li>
                <li>• Immutable X</li>
                <li>• Loopring</li>
                <li>• Metis</li>
                <li>• Boba Network</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-800 mb-4">Non-EVM Chains</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Solana (SPL)</li>
                <li>• Cardano (ADA)</li>
                <li>• Polkadot (DOT)</li>
                <li>• Cosmos (ATOM)</li>
                <li>• Near Protocol</li>
                <li>• Algorand</li>
                <li>• Tezos</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-800 mb-4">Integration Ready</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• WalletConnect v2</li>
                <li>• MoonPay/Ramp</li>
                <li>• Uniswap/1inch</li>
                <li>• OpenSea/MagicEden</li>
                <li>• Lido/RocketPool</li>
                <li>• The Graph</li>
                <li>• Chainlink Oracles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Web3 Services</h2>
            <p className="text-xl text-gray-600">Complete blockchain development ecosystem</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/web3-development-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900">Web3 Development</h3>
              <p className="text-sm text-gray-600 mt-2">Full-stack DApps</p>
            </Link>
            <Link href="/defi-solutions" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900">DeFi Integration</h3>
              <p className="text-sm text-gray-600 mt-2">Swaps, staking, yield</p>
            </Link>
            <Link href="/token-development-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🪙</div>
              <h3 className="font-bold text-gray-900">Token Development</h3>
              <p className="text-sm text-gray-600 mt-2">ERC-20, ERC-721</p>
            </Link>
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900">Smart Contracts</h3>
              <p className="text-sm text-gray-600 mt-2">Solidity/Rust experts</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Your Crypto Wallet</h2>
              <p className="text-lg text-gray-600">
                Let&apos;s build a secure, user-friendly wallet that your customers will love
              </p>
            </div>
            <ContactForm serviceName="Crypto Wallet Development" />
          </div>
        </div>
      </section>
    </main>
  );
}

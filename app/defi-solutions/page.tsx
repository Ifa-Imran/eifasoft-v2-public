import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'DeFi Development Company | DEX, Lending & Yield Farming | EifaSoft',
    description: 'Expert DeFi protocol development: DEX platforms, lending protocols, yield farming, staking, and asset management. Secure smart contracts with full audit. Starting ₹5,00,000.',
    canonical: '/defi-solutions',
    keywords: [
      'DeFi development', 'DeFi protocol development', 'DEX development', 'decentralized exchange',
      'lending protocol development', 'yield farming development', 'staking platform development',
      'AMM development', 'liquidity pool development', 'DeFi smart contracts',
      'DeFi development company India', 'tokenomics development', 'governance protocol',
      'flash loan development', 'DeFi audit', 'DeFi MVP', 'multi-chain DeFi',
      'Ethereum DeFi', 'Polygon DeFi', 'BSC DeFi development', 'DeFi consulting',
      'Web3 DeFi platform',
      'liquid staking development', 'restaking protocol', 'liquid staking derivatives',
      'perpetual DEX development', 'perpetual futures platform', 'leveraged trading platform',
      'uniswap clone development', 'pancakeswap clone', 'aave clone development', 'compound clone', 'curve finance clone', '1inch clone',
      'defi aggregator development', 'flash loan development',
      'how to build a defi platform', 'defi development cost',
      'defi development company india', 'best defi development company',
      'defi staking platform', 'yield aggregator development',
    ],
  });
}

export default function DeFiSolutions() {
  const solutions = [
    { icon: '🔄', title: 'DEX Platforms', desc: 'Decentralized exchange with AMM', features: ['Swap Functionality', 'Liquidity Pools', 'Yield Farming', 'Governance'] },
    { icon: '🏦', title: 'Lending Protocols', desc: 'Peer-to-peer lending platforms', features: ['Collateralized Loans', 'Interest Rates', 'Liquidation', 'Flash Loans'] },
    { icon: '🌾', title: 'Yield Farming', desc: 'Automated yield optimization', features: ['Auto-compounding', 'Strategy Vaults', 'APY Tracking', 'Multi-protocol'] },
    { icon: '💰', title: 'Staking Platforms', desc: 'Proof-of-Stake staking solutions', features: ['Single/Multi Staking', 'Rewards Distribution', 'Lock Periods', 'Unstaking'] },
    { icon: '📊', title: 'Asset Management', desc: 'DeFi portfolio management', features: ['Index Funds', 'Rebalancing', 'Risk Management', 'Performance Tracking'] },
    { icon: '🔐', title: 'Insurance Protocols', desc: 'Decentralized insurance coverage', features: ['Coverage Pools', 'Claims Process', 'Risk Assessment', 'Premium Calculation'] },
  ];

  const packages = [
    { name: 'DeFi MVP', price: '₹5,00,000', duration: '12-16 weeks', features: ['Single Protocol', 'Basic Features', 'Smart Contracts', 'Frontend', 'Security Audit', '3 Months Support'], color: 'from-blue-500 to-blue-600' },
    { name: 'Professional DeFi', price: '₹12,00,000', duration: '20-24 weeks', features: ['Multi-Protocol', 'Advanced Features', 'Governance', 'Analytics', 'Full Audit', 'Mobile App', '6 Months Support'], color: 'from-purple-500 to-purple-600', popular: true },
    { name: 'Enterprise DeFi', price: '₹25,00,000+', duration: '28-36 weeks', features: ['Complete Ecosystem', 'Multi-chain', 'Advanced Security', 'Scalability', 'Compliance', 'White-label', '12 Months Support'], color: 'from-green-500 to-green-600' },
  ];

  const faqs = [
    {
      question: 'What is DeFi and how does it work?',
      answer: 'DeFi (Decentralized Finance) recreates traditional financial services without intermediaries using smart contracts. Users interact directly with protocols for lending, borrowing, trading, and earning yield. Benefits: 24/7 access, no permission needed, transparent rules, higher yields, and global accessibility. Examples include DEXs (Uniswap), lending (Aave), and yield farming (Yearn Finance).',
    },
    {
      question: 'How much does DeFi protocol development cost?',
      answer: 'Costs vary significantly: DeFi MVP (simple swap or staking) starts at ₹5,00,000 (12-16 weeks), Professional DeFi platform (lending, governance, multi-features) is ₹12,00,000 (20-24 weeks), Enterprise DeFi ecosystem (multi-chain, derivatives, complex features) starts at ₹25,00,000+ (28-36 weeks). Security audits alone cost ₹2-5 lakhs. Budget depends on protocol complexity, chains supported, and regulatory requirements.',
    },
    {
      question: 'What are the risks in DeFi and how do you mitigate them?',
      answer: 'Main risks: Smart contract bugs (mitigated via rigorous audits and formal verification), Oracle failures (use Chainlink with multiple data sources), Flash loan attacks (implement TWAP and rate limiting), Rug pulls (timelock on admin functions and multi-sig controls), Impermanent loss (educate users and implement protection mechanisms). We follow battle-tested patterns from protocols managing billions in TVL.',
    },
    {
      question: 'What is Total Value Locked (TVL) and why does it matter?',
      answer: 'TVL measures total assets deposited in a DeFi protocol. It\'s the primary metric for protocol success and security. High TVL indicates: user trust, liquidity for trades, revenue potential (fees on TVL), and protocol maturity. We design tokenomics to attract TVL through competitive yields, security audits, insurance integrations, and liquidity mining incentives. Aiming for $1M+ TVL in first 6 months is realistic for new protocols.',
    },
    {
      question: 'How do DeFi protocols generate revenue?',
      answer: 'Revenue models: Trading fees (0.1-0.3% per swap on DEXs), Lending spread (difference between borrow and supply rates), Performance fees (10-20% on yield farming gains), Protocol fees on liquidations, Flash loan fees (0.09% per loan), Governance token value accrual. We design sustainable tokenomics where protocol revenue is shared with token holders and liquidity providers.',
    },
    {
      question: 'What is impermanent loss and how can it be minimized?',
      answer: 'Impermanent loss occurs when providing liquidity to AMM pools and token prices diverge. Loss is "impermanent" as it disappears if prices return to original ratio. Mitigation strategies: Concentrated liquidity (Uniswap V3 style), Single-sided staking options, Stablecoin pairs (reduced volatility), Impermanent loss protection (Bancor-style), High trading fees to offset loss, and Dynamic fee tiers. We implement IL calculators and warnings for users.',
    },
    {
      question: 'Do you provide regulatory compliance for DeFi protocols?',
      answer: 'We implement technical compliance features: KYC/AML integration for regulated markets, Geographic restrictions via IP blocking, Transaction monitoring for suspicious activity, Whitelisting mechanisms, Compliance dashboards, and Audit trails. However, legal compliance requires lawyers. We partner with crypto-friendly law firms and can advise on structures (DAO, foundation, company) and jurisdictions (Switzerland, Cayman, Singapore).',
    },
    {
      question: 'How long does it take to build and launch a DeFi protocol?',
      answer: 'Timeline breakdown: Simple staking protocol (8-12 weeks), DEX with AMM (12-16 weeks), Lending protocol (16-20 weeks), Complex DeFi platform (24-36 weeks). Phases: Design & Architecture (2-3 weeks), Smart contract development (4-8 weeks), Frontend development (4-6 weeks), Security audit (3-4 weeks), Testnet launch (2 weeks), Mainnet deployment (1 week), Post-launch monitoring (ongoing). Parallel development reduces timeline by 20-30%.',
    },
    {
      question: 'What is liquid staking and how does it work in DeFi?',
      answer: 'Liquid staking allows users to stake their tokens (like ETH) while receiving liquid staking derivatives (LSDs) such as stETH or rETH in return. These derivative tokens can be used across DeFi protocols for additional yield while the original tokens earn staking rewards. We build liquid staking platforms with validator management, derivative token minting, instant unstaking mechanisms, and integration with lending protocols. Liquid staking TVL has grown to over $50B, making it the largest DeFi category.',
    },
    {
      question: 'What is restaking and how can you build a restaking protocol?',
      answer: 'Restaking (popularized by EigenLayer) allows staked assets to secure additional protocols beyond the base blockchain. We develop restaking solutions with operator management, AVS (Actively Validated Services) integration, slashing conditions, reward distribution, and liquid restaking tokens (LRTs). This enables shared security across multiple protocols while maximizing yield for stakers. Development typically takes 20-28 weeks with costs starting at ₹15,00,000.',
    },
    {
      question: 'Can you build a Uniswap or Aave clone for our DeFi project?',
      answer: 'Yes, we develop production-ready clones and forks of major DeFi protocols. Uniswap V2/V3 clone with custom AMM curves (₹8,00,000+), Aave-style lending protocol (₹12,00,000+), Curve-style stableswap (₹7,00,000+), and 1inch-style aggregator (₹6,00,000+). Each clone includes customized tokenomics, governance, security audits, and multi-chain deployment. We can also combine multiple protocols into a unified DeFi ecosystem.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'DeFi Protocol Development Services',
    'Expert DeFi development including DEX platforms with AMM, peer-to-peer lending protocols, yield farming vaults, staking platforms, governance tokens, and insurance protocols on Ethereum and multi-chain.'
  );

  const productSchema = generateProductSchema(
    'DeFi MVP Development Package',
    'Complete DeFi protocol development: smart contracts, frontend UI, security audit, and mainnet deployment for DEX, lending, or staking platforms.',
    '500000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'DeFi Solutions', url: '/defi-solutions' },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft DeFi Development Platform',
    description: 'Enterprise-grade DeFi protocol development platform for DEX, lending, yield farming, staking, and liquid staking solutions on Ethereum and multi-chain.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, BSC, Polygon, Arbitrum, Optimism',
    price: '500000',
    rating: 4.9,
    reviewCount: 78,
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
        title="DeFi Protocol Development"
        subtitle="DEX, Lending & Yield Farming"
        description="Build the next generation of decentralized finance. DEX platforms, lending protocols, yield farming, staking, and governance — fully audited, production-ready."
        ctaPrimary={{ text: 'Build Your DeFi Protocol', href: '/contact' }}
        ctaSecondary={{ text: 'Smart Contracts', href: '/smart-contract-development' }}
        gradient="blue"
      />

      {/* What is DeFi - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is DeFi (Decentralized Finance) Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>DeFi Development</strong> is the process of building decentralized financial protocols and applications that operate without traditional intermediaries like banks. Using smart contracts on blockchain networks like Ethereum, Polygon, and Arbitrum, DeFi platforms enable peer-to-peer lending, decentralized exchanges (DEX), yield farming, liquid staking, and automated market making (AMM). DeFi development encompasses protocol design, tokenomics engineering, security auditing, and multi-chain deployment for creating transparent, permissionless financial services accessible globally.
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
                  DeFi MVP development starting at ₹5,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  DEX, lending, yield farming & liquid staking protocols
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain: Ethereum, Polygon, BSC, Arbitrum, Optimism
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  12-36 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Comprehensive security audits & formal verification
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Clone solutions: Uniswap, Aave, Compound, Curve
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Protocols Deep Dive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DeFi Protocol Architecture & Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build sophisticated DeFi platforms with advanced financial primitives
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🔄</span>
                Automated Market Maker (AMM)
              </h3>
              <p className="text-gray-700 mb-4">Decentralized exchange using liquidity pools and algorithmic pricing</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Constant Product Formula (x * y = k)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Uniswap V2 style liquidity pools</li>
                    <li>• 0.3% swap fee distribution to LPs</li>
                    <li>• Impermanent loss protection mechanisms</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Concentrated Liquidity (Uniswap V3)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Capital efficient liquidity positions</li>
                    <li>• Custom price range selection</li>
                    <li>• Non-fungible LP tokens (NFTs)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">StableSwap (Curve-style)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Optimized for stablecoin swaps</li>
                    <li>• Low slippage on similar assets</li>
                    <li>• Amplification coefficient tuning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏦</span>
                Lending & Borrowing Protocol
              </h3>
              <p className="text-gray-700 mb-4">Peer-to-pool lending with dynamic interest rates</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Aave/Compound-style Pools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Collateralized lending (over-collateralization)</li>
                    <li>• Variable & stable interest rates</li>
                    <li>• Liquidation engine with bonus incentives</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Flash Loans</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Uncollateralized instant loans</li>
                    <li>• Single-transaction execution</li>
                    <li>• Arbitrage & liquidation strategies</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Credit Delegation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delegate borrowing power</li>
                    <li>• Under-collateralized loans</li>
                    <li>• Credit line management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌾</span>
                Yield Farming & Staking
              </h3>
              <p className="text-gray-700 mb-4">Incentivized liquidity provision and token staking</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Liquidity Mining</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reward distribution based on LP token staking</li>
                    <li>• Multiple reward tokens support</li>
                    <li>• Boosted rewards with veToken mechanics</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Auto-Compounding Vaults</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated reward harvesting & reinvestment</li>
                    <li>• Gas-efficient batched operations</li>
                    <li>• Strategy optimization algorithms</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Single-Asset Staking</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lock periods with tiered APY</li>
                    <li>• Flexible vs. fixed-term staking</li>
                    <li>• Early withdrawal penalties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Derivatives & Synthetics
              </h3>
              <p className="text-gray-700 mb-4">On-chain derivatives and synthetic asset protocols</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Perpetual Futures</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Leveraged trading up to 50x</li>
                    <li>• Funding rate mechanisms</li>
                    <li>• Oracle-based price feeds (Chainlink)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Synthetic Assets</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mint synthetic stocks, commodities, forex</li>
                    <li>• Collateralized debt positions</li>
                    <li>• Inverse and leveraged synths</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Options Protocols</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Call & put options with AMM pricing</li>
                    <li>• Automated market making for options</li>
                    <li>• European & American style settlement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Solutions We Build */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DeFi Solutions We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-green-500">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Risk Management */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DeFi Security & Risk Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security infrastructure protecting billions in assets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Smart Contract Security</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Re-entrancy guards on all state changes</li>
                <li>• Integer overflow protection (Solidity 0.8+)</li>
                <li>• Flash loan attack prevention</li>
                <li>• Oracle manipulation safeguards</li>
                <li>• Time-weighted average price (TWAP)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-4">Emergency Controls</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pausable contracts for crisis management</li>
                <li>• Multi-sig admin controls (Gnosis Safe)</li>
                <li>• Timelock on parameter changes (24-48h)</li>
                <li>• Emergency withdrawal mechanisms</li>
                <li>• Circuit breaker activation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Risk Monitoring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Real-time TVL tracking & alerts</li>
                <li>• Abnormal transaction pattern detection</li>
                <li>• Liquidation health monitoring</li>
                <li>• Oracle price deviation alerts</li>
                <li>• Automated security incident response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Development Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DeFi Development Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-4 ring-green-500 transform scale-105' : ''}`}>
                {plan.popular && <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90">{plan.duration}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:shadow-lg' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Get Started</Link>
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
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⛓️</div>
              <h3 className="font-bold text-gray-900">Smart Contract Development</h3>
              <p className="text-sm text-gray-600 mt-2">Secure Solidity contracts for DeFi</p>
            </Link>
            <Link href="/token-development-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🪙</div>
              <h3 className="font-bold text-gray-900">Token Development</h3>
              <p className="text-sm text-gray-600 mt-2">ERC-20, governance & utility tokens</p>
            </Link>
            <Link href="/staking-platform-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="font-bold text-gray-900">Staking Platforms</h3>
              <p className="text-sm text-gray-600 mt-2">Liquid staking & restaking solutions</p>
            </Link>
            <Link href="/blockchain-development-company" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-gray-900">Blockchain Development</h3>
              <p className="text-sm text-gray-600 mt-2">Full-stack blockchain solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Liquid Staking & Restaking Deep Dive */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liquid Staking & Restaking Protocol Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Next-generation staking solutions with enhanced liquidity and yield optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💧</span>
                Liquid Staking Derivatives (LSDs)
              </h3>
              <p className="text-gray-700 mb-4">
                Liquid staking allows users to stake their tokens while receiving liquid derivative tokens representing their staked position. These derivatives can be used across DeFi for additional yield.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Lido-style Staking:</strong> Mint stETH when staking ETH, earn staking rewards + DeFi yield</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Rocket Pool Model:</strong> Decentralized validator network with rETH token</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Validator Management:</strong> Operator registration, performance tracking, slashing protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Instant Unstaking:</strong> Liquidity pools for immediate exits without unbonding period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>DeFi Integration:</strong> Use stETH/rETH as collateral on Aave, Curve, MakerDAO</span>
                </li>
              </ul>
              <div className="mt-6 bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Market Size:</strong> $50B+ TVL in liquid staking protocols (Lido dominates with 30%+ Ethereum staking share)</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🔁</span>
                Restaking Protocol (EigenLayer-style)
              </h3>
              <p className="text-gray-700 mb-4">
                Restaking enables staked assets to secure multiple protocols simultaneously, earning additional rewards while maintaining base layer security.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>EigenLayer Clone:</strong> Opt-in slashing for AVS (Actively Validated Services)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Liquid Restaking Tokens (LRTs):</strong> mint ezETH, rsETH, weETH from restaked positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Operator Management:</strong> Node operators manage restaked capital across AVSs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Slashing Conditions:</strong> Define custom slashing logic per AVS with risk parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Reward Distribution:</strong> Automatically split rewards between stakers, operators, protocol</span>
                </li>
              </ul>
              <div className="mt-6 bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Development Cost:</strong> ₹15,00,000+ | Timeline: 20-28 weeks</p>
              </div>
            </div>
          </div>
          
          {/* Liquid Staking Architecture */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Liquid Staking Protocol Architecture</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Component</th>
                    <th className="px-6 py-4 text-left">Function</th>
                    <th className="px-6 py-4 text-left">Key Features</th>
                    <th className="px-6 py-4 text-left">Gas Optimization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Staking Contract</td>
                    <td className="px-6 py-4">Accept deposits, mint LSDs</td>
                    <td className="px-6 py-4">Deposit caps, fee management, pause mechanism</td>
                    <td className="px-6 py-4">Batch deposits, minimal storage writes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Validator Registry</td>
                    <td className="px-6 py-4">Track validators & performance</td>
                    <td className="px-6 py-4">Operator onboarding, slashing history, rewards accounting</td>
                    <td className="px-6 py-4">Efficient data structures, event logging</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Rewards Distributor</td>
                    <td className="px-6 py-4">Calculate & distribute yield</td>
                    <td className="px-6 py-4">Pro-rata distribution, fee splitting, compounding</td>
                    <td className="px-6 py-4">Lazy evaluation, claim-based model</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Withdrawal Queue</td>
                    <td className="px-6 py-4">Manage unstaking requests</td>
                    <td className="px-6 py-4">Unbonding period, NFT representation, instant exit option</td>
                    <td className="px-6 py-4">Merkle proofs, batch processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Perpetual DEX & Leveraged Trading */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perpetual DEX & Derivatives Trading Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced perpetual futures and leveraged trading protocols
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📈</span>
                Perpetual Futures Protocol
              </h3>
              <p className="text-gray-700 mb-4">
                Perpetual contracts (perps) are derivative instruments without expiry dates, using funding rates to maintain price pegs to underlying assets.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>GMX-style Perps:</strong> Multi-asset pool, zero slippage trades, up to 50x leverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Gains Network Model:</strong> Synthetic trading with DAI vault backing positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Funding Rate Mechanism:</strong> Longs pay shorts (or vice versa) to maintain oracle peg</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Oracle Integration:</strong> Chainlink price feeds with TWAP manipulation protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Liquidation Engine:</strong> Automated position closure with insurance fund coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Multi-Collateral:</strong> Support USDC, ETH, WBTC, stablecoins as margin</span>
                </li>
              </ul>
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Revenue Model:</strong> Trading fees (0.1%), borrowing fees, liquidation penalties, spread on进出</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                Leveraged Token Protocol
              </h3>
              <p className="text-gray-700 mb-4">
                ERC-20 tokens providing leveraged exposure to crypto assets without maintaining individual positions.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>3x Long/Short Tokens:</strong> BULL3X, BEAR3X, ETH3L, BTC3S with automatic rebalancing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Target Leverage Maintenance:</strong> Daily rebalancing to maintain constant leverage ratio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Creation/Redemption:</strong> Mint/burn mechanism with underlying collateral basket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Fee Structure:</strong> Management fees (2-5% APY), trading fees on rebalance, creation/redeem fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">●</span>
                  <span><strong>Risk Management:</strong> Maximum leverage caps, circuit breakers, depegging protection</span>
                </li>
              </ul>
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Use Case:</strong> Simplified leveraged trading without liquidation risk, portfolio hedging tools</p>
              </div>
            </div>
          </div>
          
          {/* Perpetual DEX Features Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Perpetual DEX: Key Features & Implementation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Core Trading Features
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Market & Limit Orders</li>
                  <li>• Stop Loss & Take Profit</li>
                  <li>• Up to 50x Leverage</li>
                  <li>• Zero Slippage Execution</li>
                  <li>• Instant Order Matching</li>
                  <li>• Position Sizing Calculator</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🛡️</span>
                  Risk Management
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Insurance Fund Protection</li>
                  <li>• Auto-Deleveraging System</li>
                  <li>• Price Impact Warnings</li>
                  <li>• Max Open Interest Limits</li>
                  <li>• Emergency Pause Mechanism</li>
                  <li>• Oracle Manipulation Guards</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Liquidity Provider Benefits
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Share Trading Fees (70-80%)</li>
                  <li>• Earn Borrowing Fees</li>
                  <li>• Get Liquidation Penalties</li>
                  <li>• GLP/GM-style LP Tokens</li>
                  <li>• Real-time Fee Tracking</li>
                  <li>• Auto-compounding Rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Clone Platforms */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production-Ready DeFi Clone Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch proven DeFi protocols faster with battle-tested clone architectures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🦄</div>
                <h3 className="text-2xl font-bold">Uniswap V2/V3 Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Automated Market Maker (AMM) DEX with concentrated liquidity</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Constant Product Formula (x*y=k)</li>
                <li>✓ V3: Concentrated Liquidity Positions</li>
                <li>✓ Multiple Fee Tiers (0.05%, 0.3%, 1%)</li>
                <li>✓ Flash Swaps</li>
                <li>✓ Custom AMM Curves Support</li>
                <li>✓ Yield Farming Integration</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹8,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 12-16 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🏦</div>
                <h3 className="text-2xl font-bold">Aave Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Decentralized lending & borrowing protocol</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Overcollateralized Loans</li>
                <li>✓ Flash Loans (No Collateral)</li>
                <li>✓ Variable & Stable Interest Rates</li>
                <li>✓ aToken Interest-Bearing Tokens</li>
                <li>✓ Health Factor Monitoring</li>
                <li>✓ Isolation Mode for New Assets</li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹12,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 16-20 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔀</div>
                <h3 className="text-2xl font-bold">Compound Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Algorithmic money market protocol</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ cToken Interest Accrual</li>
                <li>✓ Algorithmic Interest Rate Model</li>
                <li>✓ Governance Token (COMP-style)</li>
                <li>✓ Collateral Factor per Asset</li>
                <li>✓ Liquidation Incentives</li>
                <li>✓ Treasury & Reserves</li>
              </ul>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹10,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 14-18 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">📊</div>
                <h3 className="text-2xl font-bold">Curve Finance Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Stableswap AMM for low-slippage trades</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ StableSwap Invariant (χ³ + χ² = χ³ + χ²)</li>
                <li>✓ Low Slippage for Pegged Assets</li>
                <li>✓ Gauge Voting & veCRV Model</li>
                <li>✓ Metapools for Efficiency</li>
                <li>✓ Cross-Asset Swaps</li>
                <li>✓ DAO Governance</li>
              </ul>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹7,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 10-14 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🎯</div>
                <h3 className="text-2xl font-bold">1inch Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">DEX aggregator for best swap rates</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Pathfinder Algorithm</li>
                <li>✓ Multi-Path Splitting</li>
                <li>✓ Gas-Efficient Aggregation</li>
                <li>✓ Chi Gastoken Integration</li>
                <li>✓ Limit Order Protocol</li>
                <li>✓ Fusion Mode (MEV Protection)</li>
              </ul>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹6,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 10-14 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌾</div>
                <h3 className="text-2xl font-bold">Yearn Finance Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Yield aggregator & optimizer</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Vault Strategies Auto-Compounding</li>
                <li>✓ Strategy Optimization AI</li>
                <li>✓ yvToken Yield-Bearing Vaults</li>
                <li>✓ Multi-Protocol Yield Farming</li>
                <li>✓ Performance Fees (20%)</li>
                <li>✓ Keepers for Automation</li>
              </ul>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹9,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 12-16 weeks</p>
              </div>
            </div>
          </div>
          
          {/* Clone Benefits */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Why Choose DeFi Clone Solutions?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-green-600">✓ Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Proven Security:</strong> Battle-tested code managing billions in TVL</li>
                  <li>• <strong>Faster Launch:</strong> 40-50% development time reduction</li>
                  <li>• <strong>Lower Cost:</strong> Save 30-40% vs custom development</li>
                  <li>• <strong>Community Trust:</strong> Familiar UX reduces user learning curve</li>
                  <li>• <strong>Documentation:</strong> Comprehensive specs and audits available</li>
                  <li>• <strong>Customizable:</strong> Add unique features on top of proven base</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-blue-600">✓ Our Clone Enhancements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced gas optimization (20-30% savings)</li>
                  <li>• Additional security layers & audit support</li>
                  <li>• Custom tokenomics & governance design</li>
                  <li>• Multi-chain deployment ready</li>
                  <li>• Branded UI/UX with unique features</li>
                  <li>• Integration with latest DeFi primitives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="DeFi Development" />
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Cryptocurrency Exchange Development Company | Crypto Exchange Software | EifaSoft',
    description: 'Leading cryptocurrency exchange development company in India. Build secure, scalable crypto exchanges with advanced trading features, multi-currency support, and regulatory compliance.',
    canonical: '/crypto-currency-exchange-development-company',
    keywords: ['cryptocurrency exchange development', 'crypto exchange software', 'bitcoin exchange development', 'crypto trading platform', 'blockchain exchange', 'cryptocurrency exchange company', 'white label crypto exchange', 'centralized exchange development', 'decentralized exchange DEX', 'P2P exchange development', 'crypto exchange script', 'orderbook exchange development', 'KYC AML crypto exchange', 'NFT exchange development', 'DeFi exchange development', 'crypto exchange india', 'binance clone development', 'uniswap clone development', 'multi-currency exchange platform', 'crypto liquidity management', 'spot trading platform', 'crypto exchange moradabad', 'AMM exchange development', 'perpetual trading platform', 'margin trading development', 'futures exchange development', 'crypto derivatives platform'],
  });
}

export default function CryptoExchangeDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'Cryptocurrency Exchange Development',
    'Professional cryptocurrency exchange development services including centralized exchanges (CEX), decentralized exchanges (DEX), and hybrid platforms with advanced security, trading features, and compliance.',
    'https://www.eifasoft.com/crypto-currency-exchange-development-company'
  );

  const productSchema = generateProductSchema(
    'Cryptocurrency Exchange Platform',
    'Complete crypto exchange solution with trading engine, wallet integration, KYC/AML compliance, and admin dashboard',
    '25,00,000'
  );

  const faqs = [
    {
      question: 'What is cryptocurrency exchange development and what types can you build?',
      answer: 'Cryptocurrency exchange development involves creating platforms where users can buy, sell, and trade digital currencies. We build three types: 1) Centralized Exchanges (CEX) - traditional platforms with order books and high liquidity like Binance, 2) Decentralized Exchanges (DEX) - peer-to-peer trading without intermediaries using smart contracts like Uniswap, and 3) Hybrid Exchanges - combining CEX speed with DEX security. Each type has different architecture, security requirements, and regulatory considerations.',
    },
    {
      question: 'How long does it take to develop a cryptocurrency exchange?',
      answer: 'Development timeline varies by complexity: Basic white-label exchange (4-6 weeks), Custom centralized exchange with standard features (3-4 months), Advanced exchange with derivatives, margin trading, and staking (6-8 months), Decentralized exchange (DEX) with smart contracts (4-6 months). Timeline includes planning, development, security audits, testing, and deployment. We recommend starting with an MVP to launch faster and iterate based on user feedback.',
    },
    {
      question: 'What security features do you implement in crypto exchanges?',
      answer: 'We implement multi-layered security: 1) Cold wallet storage for 95% of funds, 2) Two-factor authentication (2FA) and multi-signature wallets, 3) DDoS protection and firewall configuration, 4) SSL encryption for all data transmission, 5) Anti-phishing measures and email verification, 6) Real-time monitoring and intrusion detection, 7) Regular security audits and penetration testing, 8) KYC/AML compliance tools, 9) Withdrawal whitelist and manual approval for large transactions, 10) Rate limiting and bot protection.',
    },
    {
      question: 'What is the cost of developing a cryptocurrency exchange?',
      answer: 'Costs range based on requirements: White-label solution (₹10,00,000 - ₹25,00,000), Custom centralized exchange (₹25,00,000 - ₹75,00,000), Advanced exchange with derivatives and DeFi features (₹75,00,000 - ₹2,00,00,000+), Decentralized exchange (DEX) (₹30,00,000 - ₹1,00,00,000). Costs include development, security audits, infrastructure setup, and 6-12 months support. Ongoing costs include server hosting (₹2-10 lakhs/month), security monitoring, updates, and regulatory compliance.',
    },
    {
      question: 'Do you provide regulatory compliance and licensing support?',
      answer: 'Yes, we provide comprehensive compliance support including: 1) KYC (Know Your Customer) and AML (Anti-Money Laundering) integration with verification providers like Onfido, Jumio, 2) Transaction monitoring and suspicious activity reporting, 3) Data protection compliance (GDPR, local regulations), 4) Legal framework consultation and documentation, 5) Licensing guidance for different jurisdictions (though we recommend consulting local legal experts for specific licensing requirements), 6) Audit trail and reporting features for regulatory authorities. Compliance requirements vary significantly by country.',
    },
    {
      question: 'What features and trading options can you implement?',
      answer: 'We implement comprehensive trading features: 1) Spot trading with advanced order types (market, limit, stop-loss, OCO), 2) Margin trading and leverage options, 3) Futures and derivatives trading, 4) P2P trading marketplace, 5) Staking and yield farming, 6) Liquidity pools and automated market makers (AMM), 7) Trading bots and API access, 8) Advanced charting with TradingView integration, 9) Multiple fiat payment gateways, 10) Multi-currency support (100+ cryptocurrencies), 11) IEO/ICO launchpad, 12) Referral and affiliate programs.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.eifasoft.com' },
    { name: 'Crypto Exchange Development', url: 'https://www.eifasoft.com/crypto-currency-exchange-development-company' },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Cryptocurrency Exchange Platform',
    description: 'Professional cryptocurrency exchange development platform with centralized, decentralized, and hybrid exchange solutions. Features include trading engine, wallet integration, KYC/AML compliance, and multi-currency support.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '2500000',
    rating: 4.9,
    reviewCount: 124,
  });

  const localBusinessSchema = generateLocalBusinessSchema('Moradabad');

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema, localBusinessSchema]} />
      
      <Hero
        title="Cryptocurrency Exchange Development"
        subtitle="Build Your Own Crypto Trading Platform"
        description="Launch a secure, scalable cryptocurrency exchange with advanced trading features, multi-currency support, and enterprise-grade security. Centralized, decentralized, or hybrid solutions tailored to your vision."
        gradient="orange"
      />

      {/* Definition Box - AEO Optimization */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-3">What is Cryptocurrency Exchange Development?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Cryptocurrency Exchange Development</strong> is the process of building digital platforms where users can buy, sell, and trade cryptocurrencies. These platforms can be centralized (CEX) like Binance with order books and custodial wallets, decentralized (DEX) like Uniswap using smart contracts and AMM, or hybrid exchanges combining both architectures. Development includes trading engine, wallet integration, KYC/AML compliance, security features, and payment gateway integration.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">CEX, DEX & Hybrid</p>
                  <p className="text-sm text-gray-600">All exchange types supported</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100K+ TPS Trading Engine</p>
                  <p className="text-sm text-gray-600">High-frequency trading support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bank-Grade Security</p>
                  <p className="text-sm text-gray-600">Cold storage, 2FA, DDoS protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹25,00,000</p>
                  <p className="text-sm text-gray-600">White-label to enterprise solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of Crypto Exchanges We Build</h2>
            <p className="text-lg text-gray-600">
              Choose the exchange model that fits your business vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Centralized Exchange (CEX)',
                icon: '🏢',
                description: 'Traditional order book-based exchanges with high liquidity, fast execution, and custodial wallets. Like Binance, Coinbase, Kraken.',
                features: ['High trading volume', 'Fiat currency support', 'Advanced order types', 'Customer support', 'Regulatory compliant'],
                bestFor: 'Businesses seeking maximum control, liquidity, and regulatory compliance',
              },
              {
                type: 'Decentralized Exchange (DEX)',
                icon: '🔗',
                description: 'Peer-to-peer trading using smart contracts without intermediaries. Users control their private keys. Like Uniswap, PancakeSwap, SushiSwap.',
                features: ['No custodial risk', 'Full user control', 'Smart contract trading', 'Liquidity pools (AMM)', 'Lower fees'],
                bestFor: 'DeFi projects, privacy-focused platforms, and blockchain-native solutions',
              },
              {
                type: 'Hybrid Exchange',
                icon: '⚡',
                description: 'Combines CEX speed and liquidity with DEX security and transparency. Best of both worlds approach.',
                features: ['Fast order matching', 'Non-custodial security', 'Better user experience', 'Cross-chain support', 'Regulatory friendly'],
                bestFor: 'Innovative platforms seeking optimal balance between security and performance',
              },
            ].map((exchange) => (
              <div key={exchange.type} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg border-2 border-orange-100 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{exchange.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{exchange.type}</h3>
                <p className="text-gray-700 mb-4">{exchange.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {exchange.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-700 flex items-center">
                        <span className="text-orange-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-600">Best For:</p>
                  <p className="text-sm text-gray-700">{exchange.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Exchange Features</h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade features for professional crypto trading platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Trading Engine',
                features: ['High-frequency trading support (100k+ TPS)', 'Advanced order matching algorithm', 'Real-time price updates', 'Multiple order types', 'Trading API for bots'],
              },
              {
                category: 'Wallet Integration',
                features: ['Multi-currency wallet support', 'Hot & cold wallet segregation', 'Multi-signature security', 'Automatic wallet generation', 'QR code deposits/withdrawals'],
              },
              {
                category: 'Security Features',
                features: ['Two-factor authentication (2FA)', 'DDoS protection', 'SSL encryption', 'Anti-phishing code', 'Withdrawal whitelist'],
              },
              {
                category: 'User Management',
                features: ['KYC/AML verification', 'Multi-level user roles', 'Account tier system', 'Activity history & logs', 'Session management'],
              },
              {
                category: 'Payment Gateway',
                features: ['Multiple fiat payment methods', 'Bank transfer integration', 'Credit/debit card processing', 'P2P payment options', 'Instant settlement'],
              },
              {
                category: 'Admin Panel',
                features: ['User management dashboard', 'Transaction monitoring', 'Revenue analytics', 'Fee configuration', 'System health monitoring'],
              },
              {
                category: 'Trading Features',
                features: ['Spot trading', 'Margin trading & leverage', 'Futures & derivatives', 'Stop-loss & take-profit', 'OCO (One-Cancels-Other)'],
              },
              {
                category: 'Liquidity Solutions',
                features: ['Liquidity aggregation', 'Market maker integration', 'Automated market maker (AMM)', 'Liquidity pool management', 'Cross-exchange arbitrage'],
              },
              {
                category: 'Analytics & Reporting',
                features: ['TradingView chart integration', 'Market depth visualization', 'Order book display', 'Trading history export', 'Tax reporting tools'],
              },
            ].map((item) => (
              <div key={item.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-orange-600">{item.category}</h3>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-gray-700 flex items-start text-sm">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technologies for robust and scalable exchanges
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Blockchain</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>Bitcoin Core</li>
                <li>Ethereum (Web3)</li>
                <li>Binance Smart Chain</li>
                <li>Polygon</li>
                <li>Solana</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>Node.js</li>
                <li>Python (Django)</li>
                <li>Go (Golang)</li>
                <li>Java Spring</li>
                <li>PostgreSQL/MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>React.js</li>
                <li>Next.js</li>
                <li>TradingView Charts</li>
                <li>WebSocket (Real-time)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Infrastructure</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>AWS/Azure/GCP</li>
                <li>Docker & Kubernetes</li>
                <li>Redis (Caching)</li>
                <li>Nginx (Load Balancer)</li>
                <li>Cloudflare (CDN)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-gray-600">
                Multi-layered security architecture to protect user funds and data
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  measure: 'Cold Wallet Storage',
                  description: '95% of user funds stored offline in cold wallets with multi-signature protection',
                  icon: '🔒',
                },
                {
                  measure: 'DDoS Protection',
                  description: 'Advanced DDoS mitigation with Cloudflare and rate limiting to prevent service disruption',
                  icon: '🛡️',
                },
                {
                  measure: 'Two-Factor Authentication',
                  description: 'Mandatory 2FA using Google Authenticator, SMS, or hardware keys for all critical operations',
                  icon: '📱',
                },
                {
                  measure: 'SSL/TLS Encryption',
                  description: 'End-to-end encryption for all data transmission using 256-bit SSL certificates',
                  icon: '🔐',
                },
                {
                  measure: 'Security Audits',
                  description: 'Regular penetration testing and third-party security audits by certified firms',
                  icon: '🔍',
                },
                {
                  measure: 'Real-time Monitoring',
                  description: '24/7 automated monitoring with instant alerts for suspicious activities and anomalies',
                  icon: '👁️',
                },
              ].map((item) => (
                <div key={item.measure} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.measure}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              Structured approach from concept to launch
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                phase: 'Phase 1: Discovery & Planning',
                duration: '2-3 weeks',
                tasks: ['Requirements gathering', 'Market research & competitor analysis', 'Exchange type selection (CEX/DEX/Hybrid)', 'Regulatory consultation', 'Technology stack finalization', 'Project roadmap creation'],
              },
              {
                phase: 'Phase 2: Design & Architecture',
                duration: '3-4 weeks',
                tasks: ['UI/UX design for web & mobile', 'System architecture design', 'Database schema design', 'API specifications', 'Security architecture', 'Smart contract design (for DEX)'],
              },
              {
                phase: 'Phase 3: Development',
                duration: '12-20 weeks',
                tasks: ['Trading engine development', 'Wallet integration', 'User authentication & KYC', 'Payment gateway integration', 'Admin panel development', 'Mobile app development'],
              },
              {
                phase: 'Phase 4: Security & Testing',
                duration: '4-6 weeks',
                tasks: ['Security audit & penetration testing', 'Smart contract audit (for DEX)', 'Load testing & performance optimization', 'QA testing (functional, integration, UAT)', 'Bug fixes & refinements'],
              },
              {
                phase: 'Phase 5: Deployment & Launch',
                duration: '2-3 weeks',
                tasks: ['Server setup & configuration', 'Cloud infrastructure deployment', 'Beta launch & user testing', 'Final adjustments', 'Production launch', 'Post-launch monitoring'],
              },
              {
                phase: 'Phase 6: Support & Maintenance',
                duration: 'Ongoing',
                tasks: ['24/7 technical support', 'Regular security updates', 'Feature enhancements', 'Performance monitoring', 'Regulatory compliance updates', 'User feedback implementation'],
              },
            ].map((step, index) => (
              <div key={step.phase} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{step.phase}</h3>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{step.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.tasks.map((task) => (
                      <span key={task} className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crypto Exchange Development Pricing</h2>
            <p className="text-lg text-gray-600">
              Flexible solutions for startups to enterprise-level exchanges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'White Label Exchange',
                price: '₹25,00,000',
                duration: 'Starting from',
                features: [
                  'Ready-made exchange platform',
                  'Basic spot trading',
                  'Up to 20 cryptocurrencies',
                  'Standard security features',
                  'Web platform',
                  'Basic admin panel',
                  '6 months support',
                  '4-6 weeks deployment',
                ],
                popular: false,
              },
              {
                name: 'Custom Exchange',
                price: '₹50,00,000',
                duration: 'Starting from',
                features: [
                  'Fully custom platform',
                  'Advanced trading features',
                  'Unlimited cryptocurrencies',
                  'Enhanced security suite',
                  'Web + Mobile apps',
                  'Advanced analytics',
                  'KYC/AML integration',
                  '12 months support',
                  'API access',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Exchange',
                price: 'Custom',
                duration: 'Contact us',
                features: [
                  'Complete custom solution',
                  'All trading types (Spot, Margin, Futures)',
                  'Cross-chain support',
                  'Bank-grade security',
                  'Multi-platform (Web, iOS, Android)',
                  'Liquidity integration',
                  'White-glove support',
                  '24 months support',
                  'Dedicated team',
                  'Regulatory compliance',
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-orange-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.duration && <p className="text-gray-600 mt-1">{plan.duration}</p>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Crypto Exchange Clones & Derivatives Deep Dive */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exchange Clone Solutions & Derivatives Trading</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch proven exchange platforms with ready-made solutions and advanced derivatives products
            </p>
          </div>
                
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Binance Clone */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🟡</div>
                <h3 className="text-2xl font-bold text-gray-900">Binance Clone Exchange</h3>
              </div>
              <p className="text-gray-600 mb-4">Launch a centralized exchange with all Binance features - spot trading, futures, staking, savings, NFT marketplace, and launchpad.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>High-performance matching engine (100K+ TPS)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Spot, margin, futures, and options trading</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Binance Earn (staking, savings, liquidity farming)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>NFT marketplace and IEO launchpad</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>P2P trading marketplace with escrow</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-language support (40+ languages)</span></li>
              </ul>
            </div>
      
            {/* Coinbase Clone */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔵</div>
                <h3 className="text-2xl font-bold text-gray-900">Coinbase Clone Exchange</h3>
              </div>
              <p className="text-gray-600 mb-4">Build a user-friendly exchange focused on retail investors with simple UI, fiat on-ramp, and regulatory compliance.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Simplified retail-focused interface</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Fiat gateway (USD, EUR, GBP, INR)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Coinbase Earn-style educational rewards</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Custody services with insurance</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>US compliance (FinCEN, SEC)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Advanced Pro trading interface</span></li>
              </ul>
            </div>
      
            {/* Uniswap Clone */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🦄</div>
                <h3 className="text-2xl font-bold text-gray-900">Uniswap Clone (DEX)</h3>
              </div>
              <p className="text-gray-600 mb-4">Deploy a decentralized exchange with automated market maker (AMM), liquidity pools, and yield farming on EVM chains.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Automated Market Maker (AMM) protocol</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Liquidity pools with LP tokens</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Token swap with slippage control</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Yield farming and staking rewards</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Flash swaps and limit orders (V3)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-chain deployment (Ethereum, Polygon, Arbitrum)</span></li>
              </ul>
            </div>
      
            {/* Kraken Clone */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🟢</div>
                <h3 className="text-2xl font-bold text-gray-900">Kraken Clone Exchange</h3>
              </div>
              <p className="text-gray-600 mb-4">Create a security-focused exchange with advanced trading features, futures, and institutional-grade infrastructure.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Institutional-grade security (95% cold storage)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Futures and perpetual swaps (up to 50x leverage)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Staking across 15+ cryptocurrencies</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>OTC desk for high-volume traders</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Kraken Bank integration (Wyoming)</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Proof of reserves audits</span></li>
              </ul>
            </div>
          </div>
      
          {/* Derivatives Trading Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">📊</span>
              Crypto Derivatives Trading Platform Development
            </h3>
                  
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-orange-700">Perpetual Futures Contracts</h4>
                <p className="text-gray-700 text-sm mb-3">Offer perpetual swap contracts with no expiry date, funding rate mechanism, and up to 100x leverage:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>USDT-margined and coin-margined perpetuals</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Funding rate mechanism (every 8 hours)</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Mark price indexing and liquidation engine</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Cross and isolated margin modes</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Up to 100x leverage on major pairs</span></li>
                </ul>
              </div>
      
              <div>
                <h4 className="font-bold text-lg mb-3 text-orange-700">Options Trading</h4>
                <p className="text-gray-700 text-sm mb-3">Implement European-style crypto options with strike prices, expiry dates, and settlement mechanisms:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Call and put options on BTC, ETH</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Daily, weekly, quarterly expiries</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Black-Scholes pricing model</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Greeks calculation (Delta, Gamma, Theta, Vega)</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Cash-settled or physical delivery</span></li>
                </ul>
              </div>
            </div>
      
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Derivatives Architecture Components:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-orange-700">Risk Engine:</strong>
                  <p className="text-gray-700 mt-1">Real-time PnL calculation, margin monitoring, auto-deleveraging, insurance fund management</p>
                </div>
                <div>
                  <strong className="text-orange-700">Liquidation System:</strong>
                  <p className="text-gray-700 mt-1">Bankruptcy price calculation, partial liquidation, liquidation queue, insurance backstop</p>
                </div>
                <div>
                  <strong className="text-orange-700">Price Oracle:</strong>
                  <p className="text-gray-700 mt-1">Index price aggregation (Binance, Coinbase, Kraken), mark price calculation, TWAP protection</p>
                </div>
              </div>
            </div>
          </div>
      
          {/* Key Metrics Table */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Exchange Clone Development Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Clone Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Development Time</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Starting Cost</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Binance Clone</td>
                    <td className="px-4 py-3">4-6 months</td>
                    <td className="px-4 py-3">₹75,00,000+</td>
                    <td className="px-4 py-3">Full-featured CEX with global reach</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Coinbase Clone</td>
                    <td className="px-4 py-3">3-5 months</td>
                    <td className="px-4 py-3">₹50,00,000+</td>
                    <td className="px-4 py-3">Retail-focused fiat-onramp exchange</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Uniswap Clone</td>
                    <td className="px-4 py-3">2-4 months</td>
                    <td className="px-4 py-3">₹30,00,000+</td>
                    <td className="px-4 py-3">DEX with AMM on EVM chains</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Kraken Clone</td>
                    <td className="px-4 py-3">4-6 months</td>
                    <td className="px-4 py-3">₹60,00,000+</td>
                    <td className="px-4 py-3">Security-focused exchange with futures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQSection */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Crypto Exchange?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the digital currency revolution with a secure, scalable cryptocurrency exchange platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/blockchain-development-company"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Blockchain Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Exchange Project</h2>
              <p className="text-lg text-gray-600">
                Let&apos;s discuss your cryptocurrency exchange vision and requirements
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

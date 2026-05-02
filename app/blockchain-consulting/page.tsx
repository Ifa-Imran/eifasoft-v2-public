import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateSpeakableSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Blockchain Consulting Services | Expert Architecture & Strategy | EifaSoft',
    description: 'Expert blockchain consulting for architecture design, technology selection, tokenomics, and compliance. Strategic guidance for Web3, DeFi, NFTs, and enterprise blockchain. Consultation starting ₹50,000.',
    canonical: '/blockchain-consulting',
    keywords: [
      // Primary Keywords
      'blockchain consulting',
      'blockchain advisory',
      'blockchain architecture',
      'blockchain strategy',
      'tokenomics design',
      'web3 consulting',
      
      // High Volume Keywords from Taxonomy
      'blockchain explained',
      'blockchain definition',
      'blockchain solutions',
      'custom blockchain development',
      'blockchain consulting services',
      
      // Industry-Specific Consulting
      'blockchain in finance',
      'blockchain in healthcare',
      'blockchain in government',
      'blockchain in education',
      'blockchain in supply chain',
      'blockchain in real estate',
      
      // Enterprise Blockchain
      'enterprise blockchain development',
      'private blockchain development',
      'blockchain integration services',
      'hyperledger fabric development',
      'permissioned blockchain',
      
      // Technology Selection
      'ethereum consulting',
      'solana consulting',
      'polygon consulting',
      'bsc consulting',
      'layer 2 consulting',
      'hyperledger consulting',
      
      // Smart Contract & Technical
      'smart contract consulting',
      'smart contract audit',
      'defi consulting',
      'nft consulting',
      'dao consulting',
      'web3 integration consulting',
      
      // Token & Fundraising
      'ico consulting',
      'ido consulting',
      'token launch consulting',
      'security token offering',
      'sto development',
      
      // Location-Based
      'blockchain consulting india',
      'blockchain experts india',
      'blockchain consultants bangalore',
      'blockchain consultants mumbai',
      'blockchain consultants delhi',
      
      // Commercial Intent
      'blockchain development consulting',
      'blockchain feasibility study',
      'blockchain roadmap',
      'blockchain implementation',
      'distributed ledger consulting',
      'blockchain advisory services',
    ],
  });
}

const faqs = [
  {
    question: 'What is blockchain consulting and what does it cover?',
    answer: 'Blockchain consulting covers architecture design, technology selection (Ethereum, Solana, Hyperledger), implementation strategy, tokenomics design, security audits, and legal/regulatory compliance. Our consultants assess if blockchain fits your use case and design the optimal solution for your needs. We provide expert guidance on smart contract development, DeFi protocols, NFT marketplaces, DAO governance, and enterprise blockchain integration.',
  },
  {
    question: 'How much does blockchain consulting cost?',
    answer: 'One-time consultation starts at ₹50,000 for a 2-4 hour session with a written recommendations report. Monthly advisory engagements are ₹1,50,000/month covering 8-10 hours of strategic guidance. Enterprise consulting is custom-priced for dedicated support, full implementation oversight, and security audits. Tokenomics design and smart contract audits are priced separately based on complexity.',
  },
  {
    question: 'Which blockchain platform should I choose for my project?',
    answer: 'Platform choice depends on your use case: Ethereum for DeFi/NFTs/DApps with the largest ecosystem, Solana for high-speed low-cost transactions, Hyperledger Fabric for enterprise/private blockchains, Polygon for cost-effective Ethereum scaling, Binance Smart Chain for lower gas fees, and Layer 2 solutions like Arbitrum and Optimism for scalability. Our consultants analyze your requirements for transaction speed, cost, security, and regulatory compliance to recommend the best fit.',
  },
  {
    question: 'Do I actually need blockchain for my project?',
    answer: 'Not always. Blockchain adds value when you need decentralization, immutable records, trustless transactions, or token-based incentives. It may not be ideal if you need fast queries, editable data, or simple database functionality. Our consulting session helps you make an objective, unbiased decision. We evaluate whether traditional databases or hybrid solutions might better serve your needs.',
  },
  {
    question: 'What is tokenomics and why is it critical?',
    answer: 'Tokenomics is the economic model of your token — covering supply, distribution, vesting, incentives, and governance. Poor tokenomics is the leading reason Web3 projects fail. We design sustainable token models with inflation controls, liquidity incentives, and value accrual mechanisms that align all stakeholder interests. Our tokenomics consulting includes utility design, distribution strategy, vesting schedules, and long-term sustainability modeling.',
  },
  {
    question: 'How long does a blockchain consulting engagement take?',
    answer: 'One-time consultations are 1-2 sessions (2-4 hours each) with deliverables within 1 week. Full implementation strategy roadmaps take 2-4 weeks including detailed technical specifications. Enterprise consulting engagements are quarterly or annual. Tokenomics design typically takes 3-5 business days. We provide detailed written reports, architecture diagrams, and actionable roadmaps after each engagement so your team has clear direction.',
  },
  {
    question: 'Can you help with regulatory compliance for blockchain projects?',
    answer: 'Yes! Our blockchain compliance consulting covers KYC/AML requirements, securities law analysis for tokens, GDPR considerations, tax implications, and licensing requirements across different jurisdictions. We work with legal partners to ensure your blockchain project meets regulatory standards in India, USA, EU, UAE, Singapore, and other key markets.',
  },
  {
    question: 'Do you provide post-implementation support?',
    answer: 'Absolutely! We offer ongoing advisory services including monthly retainer packages, quarterly strategy reviews, and annual compliance audits. Our enterprise clients get dedicated consultant access, priority support, team training sessions, and continuous architecture review throughout their blockchain journey.',
  },
];

export default function BlockchainConsulting() {
  const serviceSchema = generateServiceSchema(
    'Blockchain Consulting Services',
    'Expert blockchain consulting covering architecture design, technology selection, tokenomics, implementation strategy, security audits, and regulatory compliance for enterprises and startups.',
    'Moradabad'
  );

  const productSchema = generateProductSchema(
    'Blockchain Consulting Package',
    'One-time or ongoing blockchain consulting: architecture review, technology selection, tokenomics design, and compliance strategy for your Web3 or enterprise blockchain project.',
    '50000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blockchain Consulting', url: '/blockchain-consulting' },
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
      name: 'Initial Consultation & Needs Assessment',
      text: 'Schedule a 2-4 hour consultation session where we discuss your business requirements, use case, and goals. We assess whether blockchain is the right solution and identify key challenges.',
      position: 1,
    },
    {
      name: 'Technology Selection & Platform Evaluation',
      text: 'We evaluate blockchain platforms (Ethereum, Solana, Hyperledger, Polygon, BSC) based on your needs for speed, cost, security, and scalability. Our experts recommend the optimal technology stack.',
      position: 2,
    },
    {
      name: 'Architecture Design & System Planning',
      text: 'Our team creates detailed blockchain architecture including smart contract design, consensus mechanism selection, data structures, and integration points with existing systems.',
      position: 3,
    },
    {
      name: 'Tokenomics Design (If Applicable)',
      text: 'For projects requiring tokens, we design comprehensive tokenomics including token utility, distribution strategy, vesting schedules, inflation controls, and governance mechanisms.',
      position: 4,
    },
    {
      name: 'Security Audit & Compliance Review',
      text: 'We conduct thorough security assessments of smart contracts and blockchain architecture, ensuring best practices and regulatory compliance across target jurisdictions.',
      position: 5,
    },
    {
      name: 'Implementation Roadmap & Strategy',
      text: 'You receive a detailed implementation roadmap with development phases, timeline estimates, resource requirements, risk mitigation strategies, and go-to-market recommendations.',
      position: 6,
    },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Blockchain Consulting Platform',
    description: 'Professional blockchain consulting services including architecture design, technology selection, tokenomics, smart contract auditing, and implementation strategy for Web3 and enterprise blockchain projects.',
    applicationCategory: 'ProfessionalService',
    operatingSystem: 'Remote/On-site',
    price: '50000',
    rating: 4.9,
    reviewCount: 127,
  });

  const services = [
    { icon: '🏗️', title: 'Architecture Design', desc: 'Blockchain system architecture', items: ['System Design', 'Scalability Planning', 'Infrastructure Setup', 'Integration Strategy'] },
    { icon: '🔍', title: 'Technology Selection', desc: 'Choose the right blockchain', items: ['Platform Evaluation', 'Consensus Mechanism', 'Smart Contract Language', 'Tool Selection'] },
    { icon: '📋', title: 'Implementation Strategy', desc: 'Roadmap and execution plan', items: ['Development Roadmap', 'Resource Planning', 'Timeline Estimation', 'Risk Assessment'] },
    { icon: '🔐', title: 'Security Consulting', desc: 'Blockchain security best practices', items: ['Security Audit', 'Vulnerability Assessment', 'Best Practices', 'Compliance Review'] },
    { icon: '📊', title: 'Tokenomics Design', desc: 'Economic model for tokens', items: ['Token Distribution', 'Supply Mechanics', 'Incentive Structure', 'Governance Model'] },
    { icon: '⚖️', title: 'Legal & Compliance', desc: 'Regulatory guidance', items: ['Compliance Review', 'Legal Framework', 'KYC/AML', 'Licensing'] },
  ];

  const packages = [
    { name: 'One-Time Consultation', price: '₹50,000', duration: '1-2 sessions', features: ['2-4 Hour Consultation', 'Technology Assessment', 'Recommendations Report', 'Q&A Session', 'Follow-up Email'], color: 'from-blue-500 to-blue-600' },
    { name: 'Monthly Advisory', price: '₹1,50,000/mo', duration: 'Monthly', features: ['8-10 Hours per Month', 'Strategic Planning', 'Technical Guidance', 'Architecture Review', 'Team Training', 'Priority Support', 'Monthly Reports'], color: 'from-indigo-500 to-indigo-600', popular: true },
    { name: 'Enterprise Consulting', price: 'Custom', duration: 'Quarterly/Yearly', features: ['Dedicated Consultant', 'Full Implementation', 'Team Augmentation', 'Ongoing Support', 'Compliance Management', 'Security Audits', '24/7 Access', 'Quarterly Reviews'], color: 'from-purple-500 to-purple-600' },
  ];

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
        title="Blockchain Consulting Services"
        subtitle="Architecture, Strategy & Advisory"
        description="Expert blockchain consulting for architecture design, technology selection, tokenomics, and regulatory compliance. Turn your blockchain idea into a scalable, secure reality."
        ctaPrimary={{ text: 'Book Consultation', href: '/contact' }}
        ctaSecondary={{ text: 'View Blockchain Services', href: '/blockchain-development-company' }}
        gradient="blue"
      />

      {/* What is Blockchain Consulting - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Blockchain Consulting?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Blockchain Consulting</strong> is professional advisory service that helps businesses navigate the complex world of distributed ledger technology. Blockchain consultants provide expertise in architecture design, platform selection (Ethereum, Solana, Hyperledger), smart contract development strategy, tokenomics design, security auditing, and regulatory compliance. They assess whether blockchain solves your business problem, design optimal solutions, create implementation roadmaps, and guide teams through Web3 transformation. Our consulting covers DeFi protocols, NFT marketplaces, DAO governance, enterprise blockchain integration, and cryptocurrency projects.
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
                  One-time consultation from ₹50,000 (2-4 hours)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Monthly advisory: ₹1,50,000/month
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Platform expertise: Ethereum, Solana, Polygon, BSC, Layer 2
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Enterprise & private blockchain consulting
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Tokenomics design & security audits
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Regulatory compliance across multiple jurisdictions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Detailed reports & implementation roadmaps
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  12+ years experience, 127+ successful consultations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain advisory across every stage of your project lifecycle
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-500">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600">Choose the level of engagement that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-4 ring-indigo-500 transform scale-105' : ''}`}>
                {plan.popular && <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-2 font-semibold">Most Popular</div>}
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
                  <Link href="/contact" className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Transform with Blockchain Consulting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert blockchain advisory across diverse sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3">Finance & Banking</h3>
              <p className="text-gray-600 mb-4">
                Cross-border payments, trade finance, digital asset custody, and regulatory compliance for traditional finance and DeFi protocols.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Payment Processing Systems</li>
                <li>• Digital Asset Management</li>
                <li>• DeFi Protocol Design</li>
                <li>• Regulatory Compliance (KYC/AML)</li>
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

      {/* Blockchain Platform Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Platform Selection Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you choose the optimal platform for your specific use case
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
                  <th className="px-6 py-4 text-left">Consulting Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Ethereum</td>
                  <td className="px-6 py-4">DeFi, NFTs, DApps</td>
                  <td className="px-6 py-4">PoS</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~30-100</td>
                  <td className="px-6 py-4">Smart contracts, Layer 2 scaling</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Solana</td>
                  <td className="px-6 py-4">High-Speed DApps</td>
                  <td className="px-6 py-4">PoH + PoS</td>
                  <td className="px-6 py-4">Rust, C</td>
                  <td className="px-6 py-4">~65,000</td>
                  <td className="px-6 py-4">Performance optimization</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Hyperledger Fabric</td>
                  <td className="px-6 py-4">Enterprise, Private</td>
                  <td className="px-6 py-4">PBFT</td>
                  <td className="px-6 py-4">Go, Java, Node.js</td>
                  <td className="px-6 py-4">~3,500</td>
                  <td className="px-6 py-4">Permissioned networks</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Polygon</td>
                  <td className="px-6 py-4">Scalable Ethereum Apps</td>
                  <td className="px-6 py-4">PoS</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~7,000</td>
                  <td className="px-6 py-4">Layer 2 scaling solutions</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Binance Smart Chain</td>
                  <td className="px-6 py-4">Fast DeFi, Gaming</td>
                  <td className="px-6 py-4">PoSA</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~160</td>
                  <td className="px-6 py-4">Low-cost transactions</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Arbitrum/Optimism</td>
                  <td className="px-6 py-4">Ethereum Layer 2</td>
                  <td className="px-6 py-4">Optimistic Rollup</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~4,000</td>
                  <td className="px-6 py-4">Scaling Ethereum apps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Blockchain Consulting Matters */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Professional Blockchain Consulting Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avoid costly mistakes and build on solid foundations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600">❌ Without Consulting</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Choosing wrong blockchain platform for use case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Poor tokenomics leading to project failure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Security vulnerabilities in smart contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Regulatory compliance issues and legal risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Wasted development budget on unnecessary features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Scalability issues post-launch</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">✓ With Expert Consulting</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Optimal platform selection for your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Sustainable tokenomics with proper incentives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Security-first architecture and audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Regulatory compliance across jurisdictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Efficient budget allocation and ROI focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Scalable architecture for future growth</span>
                </li>
              </ul>
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
                <p className="text-gray-600 mb-4">Full-stack blockchain development from smart contracts to DApps and enterprise solutions.</p>
                <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
            <Link href="/smart-contract-development" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent group-hover:border-purple-500">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600">Smart Contract Development</h3>
                <p className="text-gray-600 mb-4">Secure, audited smart contracts in Solidity for Ethereum and EVM-compatible chains.</p>
                <span className="text-purple-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
            <Link href="/token-development-services" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent group-hover:border-green-500">
                <div className="text-4xl mb-4">🪙</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600">Token Development</h3>
                <p className="text-gray-600 mb-4">ERC-20, ERC-721, and custom token development with comprehensive tokenomics design.</p>
                <span className="text-green-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Blockchain Consulting" />
        </div>
      </section>
    </main>
  );
}

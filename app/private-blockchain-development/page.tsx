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
    title: 'Private Blockchain Development | Enterprise & Hyperledger | EifaSoft',
    description:
      'Expert private blockchain development services. Build permissioned enterprise blockchains with Hyperledger Fabric, R3 Corda & Quorum. PBFT consensus, compliance-ready. Starting at ₹5,00,000. Contact us!',
    keywords: [
      'private blockchain development',
      'enterprise blockchain development',
      'blockchain integration services',
      'hyperledger fabric development',
      'hyperledger development',
      'R3 Corda development',
      'blockchain in healthcare',
      'blockchain in supply chain',
      'blockchain in government',
      'blockchain for voting',
      'blockchain for identity',
      'permissioned blockchain',
      'consortium blockchain',
      'PBFT consensus',
      'private blockchain solutions',
      'enterprise distributed ledger',
      'hyperledger blockchain company india',
      'private blockchain consulting',
      'quorum blockchain development',
      'polygon edge development',
      'blockchain compliance solutions',
      'blockchain identity management',
      'supply chain blockchain development',
      'government blockchain solutions',
      'healthcare blockchain development',
      'private blockchain india',
      'enterprise blockchain moradabad',
    ],
    canonical: '/private-blockchain-development',
  });
}

const faqs = [
  {
    question: 'What is private blockchain development?',
    answer:
      'Private blockchain development involves building permissioned distributed ledger networks where access is restricted to authorized participants. Unlike public blockchains (Ethereum, Bitcoin), private blockchains use identity-verified nodes, controlled access policies, and enterprise-grade consensus mechanisms like PBFT. They are ideal for organizations needing data privacy, regulatory compliance, and high transaction throughput without exposing data to the public.',
  },
  {
    question: 'What is the difference between private and public blockchain?',
    answer:
      'Public blockchains (Ethereum, Bitcoin) are open, permissionless networks where anyone can join, validate transactions, and read data. Private blockchains are permissioned networks where only authorized participants can join and transact. Private blockchains offer higher throughput (3,500+ TPS vs 30 TPS), lower latency, data privacy, regulatory compliance, and controlled governance -- making them ideal for enterprises, healthcare, government, and supply chain applications.',
  },
  {
    question: 'What is the difference between Hyperledger Fabric and Ethereum for enterprise use?',
    answer:
      'Hyperledger Fabric is purpose-built for enterprise private blockchains with permissioned access, modular architecture, private channels for data isolation, and pluggable consensus (PBFT, Raft). Ethereum is a public blockchain optimized for decentralized applications, DeFi, and tokenization. For enterprise use cases requiring data privacy, compliance, and high throughput, Hyperledger Fabric is typically the better choice. Ethereum (or private Ethereum networks like Quorum) is better when interoperability with public DeFi ecosystems is needed.',
  },
  {
    question: 'How much does private blockchain development cost?',
    answer:
      'Private blockchain development starts at ₹5,00,000 for a basic permissioned network with essential features. Mid-range consortium blockchain solutions with multiple organizations, smart contracts, and integrations range from ₹15,00,000 to ₹25,00,000. Enterprise-grade implementations with high availability, compliance frameworks, and multi-channel architecture typically cost ₹35,00,000 or more depending on complexity, number of nodes, and integration requirements.',
  },
  {
    question: 'How long does it take to develop a private blockchain solution?',
    answer:
      'A basic private blockchain network with core functionality takes 8-12 weeks. Mid-complexity solutions with smart contracts, API integrations, and multi-organization setup require 16-24 weeks. Enterprise-grade implementations with compliance frameworks, high availability, disaster recovery, and complex business logic can take 24-40 weeks including thorough testing, security audits, and phased deployment.',
  },
  {
    question: 'What consensus mechanisms are used in private blockchains?',
    answer:
      'Private blockchains use consensus mechanisms optimized for permissioned environments. PBFT (Practical Byzantine Fault Tolerance) is the most common, offering finality without forks and tolerating up to 1/3 malicious nodes. Raft provides crash fault tolerance with simpler implementation. Istanbul BFT (IBFT) is used in Quorum and Hyperledger Besu. Tendermint BFT offers fast finality for consortium networks. The choice depends on your network size, fault tolerance requirements, and performance needs.',
  },
  {
    question: 'How does private blockchain ensure regulatory compliance?',
    answer:
      'Private blockchains are designed for compliance with features like identity verification (KYC/AML) for all network participants, data privacy through private channels and zero-knowledge proofs, access control policies enforced at the network level, immutable audit trails for regulatory reporting, GDPR compliance through off-chain data storage patterns, and HIPAA-compliant architectures for healthcare data. We build compliance into the blockchain architecture from day one.',
  },
  {
    question: 'What are the most common enterprise use cases for private blockchain?',
    answer:
      'The most impactful enterprise use cases include: supply chain traceability and provenance tracking, healthcare data management and interoperability, cross-border payments and trade finance, digital identity and credential verification, government record management and voting systems, insurance claims processing, pharmaceutical drug tracking, and real estate title management. Private blockchains excel where multiple organizations need to share data securely with auditability and trust.',
  },
];

export default function PrivateBlockchainDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Private Blockchain Platform',
    description: 'Enterprise-grade private blockchain development platform with Hyperledger Fabric, R3 Corda, and Quorum support. Permissioned networks, PBFT consensus, compliance-ready solutions for healthcare, supply chain, government, and finance.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Hyperledger Fabric, R3 Corda, Quorum, Polygon Edge',
    price: '500000',
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
      { name: 'Blockchain Development', url: '/blockchain-development-company' },
      { name: 'Private Blockchain Development', url: '/private-blockchain-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Private Blockchain Development Services',
      'Enterprise-grade private blockchain development with Hyperledger Fabric, R3 Corda, and consortium blockchain solutions for healthcare, supply chain, government, and finance'
    ),
    generateProductSchema(
      'Private Blockchain Development Package',
      'Complete private blockchain development from architecture design to deployment with permissioned networks, compliance frameworks, and enterprise integrations',
      '500000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="ENTERPRISE BLOCKCHAIN"
        title="Private Blockchain Development for Enterprise"
        description="Build secure, permissioned blockchain networks with Hyperledger Fabric, R3 Corda & Quorum. Enterprise-grade solutions for healthcare, supply chain, government, and finance with full regulatory compliance."
        ctaPrimary={{ text: 'Get Enterprise Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Enterprise Solutions', href: '/portfolio' }}
        gradient="blue"
      />

      {/* What is Private Blockchain Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Private Blockchain Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Private Blockchain Development</strong> is the process of building permissioned distributed ledger networks where only authorized participants can join, validate transactions, and access data. Unlike public blockchains such as Ethereum or Bitcoin, private blockchains use identity-verified nodes and enterprise-grade consensus mechanisms like PBFT (Practical Byzantine Fault Tolerance) to deliver high throughput, data privacy, and regulatory compliance. Leading platforms include <strong>Hyperledger Fabric</strong>, <strong>R3 Corda</strong>, <strong>Quorum</strong>, and <strong>Polygon Edge</strong> -- each designed for enterprise use cases in healthcare, supply chain, government, and financial services.
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
                  Private blockchain development starting at ₹5,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Hyperledger Fabric, R3 Corda, Quorum & Polygon Edge
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  PBFT consensus with 3,500+ TPS throughput
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  HIPAA, GDPR & regulatory compliance built-in
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Healthcare, supply chain, government & finance solutions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  90-day enterprise support included with all packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private vs Public Blockchain Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Private vs Public Blockchain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the key differences to choose the right approach for your enterprise
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Private Blockchain</th>
                  <th className="px-6 py-4 text-left">Public Blockchain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Access</td>
                  <td className="px-6 py-4">Permissioned -- only authorized participants</td>
                  <td className="px-6 py-4">Open -- anyone can join and participate</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Throughput</td>
                  <td className="px-6 py-4">3,500+ TPS (Hyperledger Fabric)</td>
                  <td className="px-6 py-4">15-100 TPS (Ethereum)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Data Privacy</td>
                  <td className="px-6 py-4">Private channels & confidential transactions</td>
                  <td className="px-6 py-4">All data visible on-chain publicly</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Consensus</td>
                  <td className="px-6 py-4">PBFT, Raft, IBFT (instant finality)</td>
                  <td className="px-6 py-4">PoS, PoW (probabilistic finality)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Governance</td>
                  <td className="px-6 py-4">Controlled by consortium members</td>
                  <td className="px-6 py-4">Decentralized community governance</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Compliance</td>
                  <td className="px-6 py-4">HIPAA, GDPR, SOC2 compatible</td>
                  <td className="px-6 py-4">Limited compliance capabilities</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Cost per Transaction</td>
                  <td className="px-6 py-4">Near zero (no gas fees)</td>
                  <td className="px-6 py-4">Variable gas fees ($1-$50+)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Best For</td>
                  <td className="px-6 py-4">Enterprise, healthcare, government</td>
                  <td className="px-6 py-4">DeFi, NFTs, open finance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Platform Comparison - Hyperledger Fabric vs R3 Corda vs Quorum vs Polygon Edge */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Blockchain Platforms We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choosing the right private blockchain platform for your enterprise requirements
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
                  <td className="px-6 py-4 font-semibold">Hyperledger Fabric</td>
                  <td className="px-6 py-4">Supply chain, healthcare, multi-org consortiums</td>
                  <td className="px-6 py-4">PBFT, Raft</td>
                  <td className="px-6 py-4">Go, Java, Node.js</td>
                  <td className="px-6 py-4">~3,500</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">R3 Corda</td>
                  <td className="px-6 py-4">Financial services, trade finance, insurance</td>
                  <td className="px-6 py-4">Notary-based</td>
                  <td className="px-6 py-4">Kotlin, Java</td>
                  <td className="px-6 py-4">~1,500</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Quorum (ConsenSys)</td>
                  <td className="px-6 py-4">EVM-compatible enterprise, DeFi bridges</td>
                  <td className="px-6 py-4">IBFT, Raft</td>
                  <td className="px-6 py-4">Solidity</td>
                  <td className="px-6 py-4">~800</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">Polygon Edge</td>
                  <td className="px-6 py-4">Custom EVM chains, hybrid public-private</td>
                  <td className="px-6 py-4">IBFT 2.0</td>
                  <td className="px-6 py-4">Solidity, Go</td>
                  <td className="px-6 py-4">~1,000</td>
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
            Our Private Blockchain Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔗',
                title: 'Hyperledger Fabric Development',
                description: 'End-to-end Hyperledger Fabric network setup, chaincode development, channel configuration, and multi-organization consortium deployment with PBFT consensus.',
              },
              {
                icon: '🏛️',
                title: 'Consortium Blockchain Solutions',
                description: 'Design and deploy multi-party consortium blockchains with shared governance, permissioned access control, and cross-organization data sharing for enterprise collaboration.',
              },
              {
                icon: '📦',
                title: 'Supply Chain Blockchain',
                description: 'End-to-end supply chain traceability solutions with provenance tracking, IoT integration, real-time monitoring, and automated compliance verification on permissioned networks.',
              },
              {
                icon: '🆔',
                title: 'Identity Management Blockchain',
                description: 'Decentralized identity (DID) solutions, verifiable credentials, KYC/AML automation, and self-sovereign identity platforms for secure digital identity management.',
              },
              {
                icon: '🏥',
                title: 'Healthcare Blockchain',
                description: 'HIPAA-compliant blockchain solutions for electronic health records, drug traceability, clinical trial data, and interoperable health information exchange across providers.',
              },
              {
                icon: '🏦',
                title: 'Government Blockchain Solutions',
                description: 'Secure blockchain platforms for government record management, transparent voting systems, land registry, tax compliance, and citizen identity verification.',
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

      {/* Industry Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Use Cases for Private Blockchain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world enterprise implementations delivering measurable business value
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Blockchain in Supply Chain
              </h3>
              <p className="text-gray-700 mb-4">
                Built a multi-tier supply chain traceability platform on Hyperledger Fabric enabling manufacturers, distributors, and retailers to track product provenance in real-time with tamper-proof records.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 50,000+ products tracked across 200+ supply chain nodes</li>
                  <li>• IoT sensor integration for temperature & location</li>
                  <li>• Automated compliance and quality verification</li>
                  <li>• Smart contract-based payment settlements</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Hyperledger Fabric, Node.js, CouchDB, IoT Gateways</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏥</span>
                Blockchain in Healthcare
              </h3>
              <p className="text-gray-700 mb-4">
                Developed a HIPAA-compliant blockchain platform for secure health data exchange between hospitals, clinics, and insurance providers with patient-controlled access and complete audit trails.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 100,000+ patient records securely managed</li>
                  <li>• Zero-knowledge proofs for data privacy</li>
                  <li>• Cross-provider health data interoperability</li>
                  <li>• Drug supply chain authentication</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Hyperledger Fabric, Private Channels, FHIR APIs</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Blockchain in Finance
              </h3>
              <p className="text-gray-700 mb-4">
                Created a consortium blockchain platform on R3 Corda for cross-border trade finance, enabling banks and financial institutions to process letters of credit and trade settlements with instant verification.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $200M+ in trade finance processed</li>
                  <li>• 80% reduction in settlement time</li>
                  <li>• KYC/AML compliance automation</li>
                  <li>• Multi-bank consortium with shared ledger</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>R3 Corda, Kotlin, PostgreSQL, SWIFT Integration</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏛️</span>
                Blockchain in Government
              </h3>
              <p className="text-gray-700 mb-4">
                Implemented a permissioned blockchain solution for government record management, including land registry, voting systems, and citizen identity verification with tamper-proof transparency.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Transparent, auditable voting with verifiable results</li>
                  <li>• Digital land registry with ownership history</li>
                  <li>• Citizen digital identity with verifiable credentials</li>
                  <li>• Tax and licensing compliance automation</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Hyperledger Fabric, DID/VC, Raft Consensus, REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enterprise Blockchain Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Network',
                price: '₹5,00,000',
                features: [
                  'Single-org private blockchain',
                  'Hyperledger Fabric or Quorum',
                  'Basic chaincode / smart contracts',
                  'REST API integration',
                  'Testnet & mainnet deployment',
                  '90-day support',
                ],
              },
              {
                name: 'Consortium',
                price: '₹15,00,000',
                popular: true,
                features: [
                  'Multi-org consortium network',
                  'Private channels & data isolation',
                  'Complex smart contract logic',
                  'Identity management (MSP/CA)',
                  'Dashboard & monitoring tools',
                  'Compliance framework setup',
                  '6-month support',
                ],
              },
              {
                name: 'Enterprise',
                price: '₹35,00,000+',
                features: [
                  'Full enterprise blockchain platform',
                  'High availability & disaster recovery',
                  'Multi-channel architecture',
                  'Advanced compliance (HIPAA/GDPR)',
                  'IoT & ERP integrations',
                  'Custom consensus configuration',
                  'Dedicated team & 1-year support',
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

      {/* Technology Stack & Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Private Blockchain Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Hyperledger Fabric', 'R3 Corda', 'Quorum', 'Polygon Edge', 'CouchDB', 'Docker/K8s', 'gRPC/REST', 'Kafka'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Enterprise Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Discovery & Architecture Design', time: '2-3 weeks' },
                  { step: 2, title: 'Network Setup & Configuration', time: '3-4 weeks' },
                  { step: 3, title: 'Smart Contract / Chaincode Development', time: '6-10 weeks' },
                  { step: 4, title: 'API & System Integration', time: '4-6 weeks' },
                  { step: 5, title: 'Security Audit & Compliance Review', time: '2-4 weeks' },
                  { step: 6, title: 'Deployment, Testing & Go-Live', time: '2-3 weeks' },
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Private Blockchain?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏆', title: '12+ Years Experience', desc: 'Enterprise software development with blockchain expertise since 2018' },
              { icon: '🔒', title: 'Compliance-First', desc: 'HIPAA, GDPR, SOC2 compliant architectures from day one' },
              { icon: '💰', title: 'Cost Effective', desc: 'India-based pricing with global enterprise quality standards' },
              { icon: '🚀', title: 'Rapid Deployment', desc: 'Production-ready private blockchain networks in 8-12 weeks' },
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

      {/* Cross-Links */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Related Blockchain Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href="/blockchain-development-company"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-3">⛓️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Blockchain Development</h3>
              <p className="text-sm text-gray-600 mt-2">Public blockchain, DApps & Web3 solutions</p>
            </Link>
            <Link
              href="/smart-contract-development"
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-3">📜</div>
              <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Smart Contract Development</h3>
              <p className="text-sm text-gray-600 mt-2">Solidity, audits & deployment services</p>
            </Link>
            <Link
              href="/blockchain-consulting"
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Blockchain Consulting</h3>
              <p className="text-sm text-gray-600 mt-2">Strategy, architecture & feasibility analysis</p>
            </Link>
            <Link
              href="/layer2-development-services"
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-3">🔺</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Layer 2 Development</h3>
              <p className="text-sm text-gray-600 mt-2">Rollups, sidechains & scaling solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about private blockchain development services
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Enterprise Blockchain?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your enterprise with a secure, permissioned blockchain network. Get expert consultation from our Hyperledger and R3 Corda specialists today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Enterprise Consultation
            </Link>
            <Link
              href="/blockchain-consulting"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Consulting Services
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Private Blockchain Development" />
        </div>
      </section>
    </>
  );
}

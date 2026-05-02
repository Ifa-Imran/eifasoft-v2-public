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
    title: 'DAO Development Company | Governance, Voting & Treasury | EifaSoft',
    description:
      'Expert DAO development services. Build decentralized autonomous organizations with on-chain governance, treasury management, and voting systems. Custom DAO development starting at Rs.3,00,000. 12+ years experience.',
    keywords: [
      'dao',
      'decentralized autonomous organization',
      'dao crypto',
      'what is a dao',
      'dao development company',
      'dao development services',
      'dao platform development',
      'dao smart contract development',
      'dao governance development',
      'custom dao development',
      'dao treasury management',
      'dao voting system',
      'investment dao',
      'social dao',
      'protocol dao',
      'collector dao',
      'media dao',
      'grant dao',
      'dao governance platform',
      'dao token voting',
      'on-chain governance',
      'dao framework development',
      'dao development company india',
      'dao consulting services',
      'dao smart contract audit',
      'decentralized governance solutions',
    ],
    canonical: '/dao-development-services',
  });
}

const faqs = [
  {
    question: 'What is a DAO (Decentralized Autonomous Organization)?',
    answer:
      'A DAO (Decentralized Autonomous Organization) is an internet-native organization governed by smart contracts on a blockchain. Members collectively make decisions through on-chain voting using governance tokens, without centralized leadership. DAOs manage shared treasuries, propose and vote on protocol changes, and execute decisions automatically through smart contracts. They enable transparent, trustless, and democratic governance for communities, investment funds, protocols, and more.',
  },
  {
    question: 'What are the different types of DAOs?',
    answer:
      'There are six main types of DAOs: (1) Investment DAOs pool capital from members to invest in assets like tokens, NFTs, or real-world projects. (2) Protocol DAOs govern decentralized protocols like Uniswap or Aave. (3) Social DAOs create exclusive communities with shared values. (4) Collector DAOs collectively acquire and manage high-value digital or physical assets. (5) Media DAOs decentralize content creation and curation. (6) Grant DAOs fund public goods and open-source projects through community-driven allocation.',
  },
  {
    question: 'How much does DAO development cost?',
    answer:
      'DAO development costs vary by complexity. A basic DAO with standard governance and token voting starts at Rs.3,00,000. A professional DAO with multi-sig treasury, delegation, and advanced voting mechanisms costs Rs.8,00,000 to Rs.15,00,000. Enterprise-grade DAOs with custom governance frameworks, sub-DAOs, streaming payments, and cross-chain functionality start at Rs.20,00,000+. Costs depend on governance complexity, treasury features, integrations, and security audit requirements.',
  },
  {
    question: 'How long does it take to develop a DAO?',
    answer:
      'A basic DAO with token-weighted voting and simple treasury can be developed in 6-8 weeks. A professional DAO with advanced governance, multi-sig treasury, and delegation features typically takes 12-16 weeks. Enterprise-grade DAOs with custom governance frameworks, sub-DAOs, cross-chain voting, and comprehensive security audits require 20-30 weeks. The timeline includes smart contract development, frontend dashboard, testing, and security audits.',
  },
  {
    question: 'What governance mechanisms do you implement?',
    answer:
      'We implement multiple governance mechanisms tailored to your DAO needs: Token-weighted voting (1 token = 1 vote), Quadratic voting (reduces whale dominance), Conviction voting (continuous preference signaling), Optimistic governance (proposals pass unless vetoed), Rage-quit mechanisms (members can exit with their share), Vote delegation (delegate voting power to experts), Timelock controllers (delay execution for security), and Multi-sig approval (require multiple signatures for critical actions).',
  },
  {
    question: 'How does DAO treasury management work?',
    answer:
      'DAO treasury management involves securely holding and deploying community funds through smart contracts. We implement multi-sig wallets (like Gnosis Safe) requiring multiple signers for transactions, fund allocation systems governed by proposals, budget streaming via protocols like Sablier for continuous payments, yield strategies for idle treasury funds, and comprehensive reporting dashboards. All treasury actions are transparent and executed only after governance approval.',
  },
  {
    question: 'What is the legal structure for a DAO?',
    answer:
      'DAOs can adopt various legal wrappers depending on jurisdiction: Wyoming DAO LLC (recognized in the US), Marshall Islands DAO LLC, Swiss Association, Cayman Islands Foundation Company, or Unincorporated Nonprofit Association. The choice depends on member liability protection, tax implications, regulatory requirements, and operational needs. We help you choose the right legal structure and integrate it with your on-chain governance framework.',
  },
  {
    question: 'What voting systems do you support?',
    answer:
      'We support a wide range of voting systems: On-chain voting (fully transparent, gas costs per vote), Off-chain voting via Snapshot (gasless, signature-based), Hybrid voting (off-chain signaling + on-chain execution), Shielded voting (private votes revealed after voting ends), Weighted voting with time-locks (longer staking = more weight), and Multi-choice voting for complex proposals. We also integrate with popular platforms like Snapshot, Tally, and Aragon.',
  },
];

export default function DAODevelopmentServicesPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft DAO Development Platform',
    description: 'Enterprise-grade DAO development platform with on-chain governance, treasury management, voting systems, delegation, and multi-chain deployment for decentralized autonomous organizations.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, BSC, Polygon, Arbitrum',
    price: '300000',
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
      { name: 'DAO Development Services', url: '/dao-development-services' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'DAO Development Services',
      'Professional DAO development including governance systems, treasury management, voting mechanisms, and token-based decision making'
    ),
    generateProductSchema(
      'DAO Development Package',
      'Complete DAO development from governance design to deployment with treasury and voting systems',
      '300000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="DAO DEVELOPMENT"
        title="Build Decentralized Autonomous Organizations"
        description="Enterprise-grade DAO development with on-chain governance, treasury management, and token-based voting systems. Empower your community with transparent, trustless decision-making."
        ctaPrimary={{ text: 'Get Free DAO Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View DAO Portfolio', href: '/portfolio' }}
        gradient="purple"
      />

      {/* What is a DAO - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is a DAO (Decentralized Autonomous Organization)?</h2>
              <p className="text-gray-700 leading-relaxed">
                A <strong>DAO (Decentralized Autonomous Organization)</strong> is an internet-native entity governed entirely by smart contracts and community consensus on a blockchain. Unlike traditional organizations with hierarchical management, DAOs enable members to propose, vote on, and execute decisions collectively using governance tokens. Treasury funds, protocol upgrades, and operational changes are all managed transparently on-chain. DAOs power everything from DeFi protocol governance (Uniswap, Aave) to investment collectives (The LAO), social communities (Friends With Benefits), and grant programs (Gitcoin). As a leading <strong>DAO development company</strong>, EifaSoft builds custom governance frameworks, voting systems, and treasury management solutions for organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">&#10003;</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Custom DAO development starting at Rs.3,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  On-chain governance with token-weighted &amp; quadratic voting
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Multi-sig treasury management (Gnosis Safe integration)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  Delegation, timelock, and rage-quit mechanisms
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  6-30 weeks development timeline based on complexity
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">&bull;</span>
                  90-day post-launch support and governance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Types Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of DAOs We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized DAO development for every use case and community structure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Investment DAO</h3>
              <p className="text-gray-600 mb-4">
                Pool capital from members to collectively invest in tokens, NFTs, startups, or real-world assets with democratic fund allocation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Pooled capital management</li>
                <li>&bull; Proposal-based investment voting</li>
                <li>&bull; Profit distribution mechanisms</li>
                <li>&bull; Rage-quit for member exit</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#9881;&#65039;</div>
              <h3 className="text-xl font-bold mb-3">Protocol DAO</h3>
              <p className="text-gray-600 mb-4">
                Govern decentralized protocols with community-driven parameter changes, upgrades, and treasury allocation decisions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Protocol parameter governance</li>
                <li>&bull; Upgrade proposal systems</li>
                <li>&bull; Fee structure management</li>
                <li>&bull; Timelock execution</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#129309;</div>
              <h3 className="text-xl font-bold mb-3">Social DAO</h3>
              <p className="text-gray-600 mb-4">
                Create exclusive token-gated communities with shared values, coordinated activities, and member-driven governance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Token-gated membership</li>
                <li>&bull; Community event governance</li>
                <li>&bull; Reputation systems</li>
                <li>&bull; Social token economics</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#127912;</div>
              <h3 className="text-xl font-bold mb-3">Collector DAO</h3>
              <p className="text-gray-600 mb-4">
                Collectively acquire, manage, and curate high-value NFTs, digital art, or physical collectibles with fractional ownership.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Fractional NFT ownership</li>
                <li>&bull; Acquisition proposal voting</li>
                <li>&bull; Collection curation tools</li>
                <li>&bull; Revenue sharing from assets</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#128240;</div>
              <h3 className="text-xl font-bold mb-3">Media DAO</h3>
              <p className="text-gray-600 mb-4">
                Decentralize content creation, curation, and distribution with community-owned media platforms and creator economies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Decentralized content curation</li>
                <li>&bull; Creator reward mechanisms</li>
                <li>&bull; Editorial governance</li>
                <li>&bull; Ad revenue distribution</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#127873;</div>
              <h3 className="text-xl font-bold mb-3">Grant DAO</h3>
              <p className="text-gray-600 mb-4">
                Fund public goods, open-source projects, and community initiatives through transparent, community-driven grant allocation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Quadratic funding rounds</li>
                <li>&bull; Milestone-based disbursement</li>
                <li>&bull; Grant proposal review system</li>
                <li>&bull; Impact measurement tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DAO Governance Features We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive governance mechanisms for transparent, fair, and efficient decision-making
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">&#9745;&#65039;</span>
                Voting Mechanisms
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span><strong>Token-weighted:</strong> 1 token = 1 vote for straightforward governance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span><strong>Quadratic voting:</strong> Cost increases quadratically to reduce whale dominance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span><strong>Conviction voting:</strong> Continuous preference signaling over time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span><strong>Optimistic governance:</strong> Proposals pass unless vetoed within timeframe</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">&#128220;</span>
                Proposal System
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>On-chain proposal creation with threshold requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Off-chain signaling via Snapshot integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Multi-stage proposal lifecycle (draft, review, vote, execute)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Quorum requirements and voting period configuration</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">&#128101;</span>
                Delegation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Vote delegation to trusted representatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Partial delegation (split voting power across delegates)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Delegate profiles with voting history transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Instant revocation and re-delegation capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">&#128274;</span>
                Timelock &amp; Security
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Timelock controllers for delayed execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Guardian roles for emergency proposal cancellation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Rage-quit mechanism for dissenting members</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">&bull;</span>
                  <span>Governance attack prevention (flash loan protection)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treasury Management Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DAO Treasury Management Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure, transparent, and efficient treasury operations for your decentralized organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#128737;&#65039;</div>
              <h3 className="text-xl font-bold mb-3">Multi-Sig Wallets</h3>
              <p className="text-gray-600 mb-4">
                Gnosis Safe integration with configurable signer thresholds (e.g., 3-of-5) for secure treasury control.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Gnosis Safe deployment &amp; configuration</li>
                <li>&bull; Custom signer threshold policies</li>
                <li>&bull; Transaction queue management</li>
                <li>&bull; Hardware wallet support</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#128200;</div>
              <h3 className="text-xl font-bold mb-3">Fund Allocation</h3>
              <p className="text-gray-600 mb-4">
                Governance-controlled fund distribution with proposal-based spending and automated disbursement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Proposal-based fund requests</li>
                <li>&bull; Milestone-gated disbursement</li>
                <li>&bull; Budget category management</li>
                <li>&bull; Spending limit enforcement</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#128176;</div>
              <h3 className="text-xl font-bold mb-3">Budgeting &amp; Reporting</h3>
              <p className="text-gray-600 mb-4">
                Real-time treasury dashboards with income tracking, expense categorization, and financial reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Real-time balance tracking</li>
                <li>&bull; Expense categorization</li>
                <li>&bull; Historical transaction reports</li>
                <li>&bull; Treasury health metrics</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">&#127754;</div>
              <h3 className="text-xl font-bold mb-3">Streaming Payments</h3>
              <p className="text-gray-600 mb-4">
                Sablier and Superfluid integration for continuous token streaming to contributors and service providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>&bull; Sablier payment streams</li>
                <li>&bull; Superfluid real-time finance</li>
                <li>&bull; Contributor payroll automation</li>
                <li>&bull; Vesting schedule management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Tools Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DAO Tools &amp; Frameworks We Integrate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choosing the right DAO infrastructure for your governance needs
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Platform</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                  <th className="px-6 py-4 text-left">Voting Type</th>
                  <th className="px-6 py-4 text-left">Treasury</th>
                  <th className="px-6 py-4 text-left">Gas Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Snapshot</td>
                  <td className="px-6 py-4">Off-chain voting, signaling</td>
                  <td className="px-6 py-4">Off-chain (signatures)</td>
                  <td className="px-6 py-4">No built-in</td>
                  <td className="px-6 py-4">Gasless</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Tally</td>
                  <td className="px-6 py-4">On-chain governance dashboards</td>
                  <td className="px-6 py-4">On-chain (Governor)</td>
                  <td className="px-6 py-4">Timelock integration</td>
                  <td className="px-6 py-4">Per-vote gas</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Aragon</td>
                  <td className="px-6 py-4">Full-stack DAO creation</td>
                  <td className="px-6 py-4">On-chain &amp; off-chain</td>
                  <td className="px-6 py-4">Built-in treasury</td>
                  <td className="px-6 py-4">Moderate</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Colony</td>
                  <td className="px-6 py-4">Work-based reputation DAOs</td>
                  <td className="px-6 py-4">Reputation-weighted</td>
                  <td className="px-6 py-4">Built-in payments</td>
                  <td className="px-6 py-4">Low (xDai)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases with Metrics */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World DAO Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming organizations with decentralized governance solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">&#128176;</span>
                DeFi Protocol Governance
              </h3>
              <p className="text-gray-700 mb-4">
                Built a comprehensive governance system for a DeFi lending protocol enabling token holders to propose and vote on interest rate models, collateral factors, and protocol upgrades.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 45,000+ governance token holders</li>
                  <li>&bull; 200+ proposals executed on-chain</li>
                  <li>&bull; $25M treasury under governance control</li>
                  <li>&bull; 72% average voter participation rate</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>OpenZeppelin Governor, Tally, Gnosis Safe</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">&#127912;</span>
                NFT Collector DAO
              </h3>
              <p className="text-gray-700 mb-4">
                Developed a collector DAO enabling members to pool funds, vote on acquisitions, and fractionally own high-value NFTs and digital art pieces.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 2,500+ DAO members</li>
                  <li>&bull; $5M+ in collectively owned NFTs</li>
                  <li>&bull; 150+ acquisition proposals voted on</li>
                  <li>&bull; Rage-quit enabled with 7-day cooldown</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Moloch v3, Snapshot, IPFS, The Graph</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">&#127873;</span>
                Grant Funding DAO
              </h3>
              <p className="text-gray-700 mb-4">
                Created a grant DAO for funding open-source developers and public goods projects using quadratic funding rounds and milestone-based disbursements.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; $8M+ distributed across 3 funding rounds</li>
                  <li>&bull; 500+ projects funded</li>
                  <li>&bull; Quadratic funding for fair allocation</li>
                  <li>&bull; 95% milestone completion rate</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Allo Protocol, Sablier, Aragon, Snapshot</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">&#129309;</span>
                Social Community DAO
              </h3>
              <p className="text-gray-700 mb-4">
                Implemented a social DAO with token-gated access, reputation scoring, event governance, and contributor reward mechanisms for a Web3 community.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>&bull; 10,000+ token-gated members</li>
                  <li>&bull; On-chain reputation scoring system</li>
                  <li>&bull; 50+ community events governed by DAO</li>
                  <li>&bull; Contributor rewards via streaming payments</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Colony, Superfluid, Snapshot, Guild.xyz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">DAO Development Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter DAO',
                price: '\u20B93,00,000',
                features: [
                  'Token-weighted voting',
                  'Basic proposal system',
                  'Single-sig treasury',
                  'Snapshot integration',
                  'Governance dashboard',
                  '30-day support',
                ],
              },
              {
                name: 'Professional DAO',
                price: '\u20B98,00,000',
                popular: true,
                features: [
                  'Multiple voting mechanisms',
                  'Advanced proposal lifecycle',
                  'Multi-sig treasury (Gnosis Safe)',
                  'Vote delegation system',
                  'Timelock controllers',
                  'Tally + Snapshot integration',
                  'Treasury reporting dashboard',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise DAO',
                price: '\u20B920,00,000+',
                features: [
                  'Custom governance framework',
                  'Sub-DAOs &amp; committees',
                  'Cross-chain governance',
                  'Streaming payments (Sablier)',
                  'Quadratic &amp; conviction voting',
                  'Legal wrapper integration',
                  'Comprehensive security audit',
                  'Dedicated support &amp; maintenance',
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
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
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

      {/* Cross-Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Blockchain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our full range of Web3 and blockchain development solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link href="/smart-contract-development" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4">&#9939;&#65039;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Smart Contract Development</h3>
              <p className="text-gray-600 text-sm">
                Secure, audited smart contracts in Solidity for governance, tokens, and DeFi protocols.
              </p>
            </Link>
            <Link href="/token-development-services" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4">&#129689;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Token Development</h3>
              <p className="text-gray-600 text-sm">
                ERC-20 governance tokens, utility tokens, and custom tokenomics design for your DAO.
              </p>
            </Link>
            <Link href="/blockchain-development-company" className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4">&#9939;&#65039;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Blockchain Development</h3>
              <p className="text-gray-600 text-sm">
                Full-stack blockchain solutions including DApps, DeFi, NFTs, and enterprise deployments.
              </p>
            </Link>
            <Link href="/dapp-development-company" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4">&#128187;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">DApp Development</h3>
              <p className="text-gray-600 text-sm">
                Decentralized applications with Web3 integration, wallet connectivity, and on-chain interactions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with details/summary */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about DAO development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-purple-600">&#10067;</span>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your DAO?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Build transparent, community-driven governance with our expert DAO development team. Get a free consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Free DAO Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our DAO Projects
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="DAO Development Services" />
        </div>
      </section>
    </>
  );
}

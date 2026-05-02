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
    title: 'Metaverse Development Company | Virtual Worlds & Web3 Gaming | EifaSoft',
    description:
      'Leading metaverse development company building immersive virtual worlds, Web3 games, NFT marketplaces, and enterprise metaverse solutions. Unity, Unreal Engine & blockchain integration. Starting at Rs 10,00,000. Contact us today!',
    keywords: [
      'metaverse',
      'metaverse development',
      'metaverse games',
      'metaverse development company',
      'metaverse development services',
      'metaverse platform development',
      'metaverse real estate development',
      'metaverse nft marketplace',
      'virtual world development',
      'blockchain game development',
      'play to earn',
      'p2e',
      'web3 game development',
      'gamefi development',
      'sandbox clone',
      'decentraland clone',
      'metaverse app development',
      'metaverse virtual reality',
      'metaverse consulting',
      'enterprise metaverse solutions',
      'avatar development',
      'virtual real estate platform',
      'metaverse development company india',
      'nft gaming platform',
      'immersive 3d world development',
      'metaverse ecommerce',
      'web3 metaverse',
    ],
    canonical: '/metaverse-development',
  });
}

const faqs = [
  {
    question: 'What is metaverse development?',
    answer:
      'Metaverse development is the process of creating immersive, interconnected virtual worlds where users can interact, socialize, trade, and experience digital environments in real time. It combines 3D world-building, blockchain integration for digital ownership (NFTs), avatar systems, spatial computing, and multiplayer networking to build persistent virtual universes accessible via browsers, VR headsets, or mobile devices.',
  },
  {
    question: 'How much does metaverse development cost?',
    answer:
      'Metaverse development typically starts at Rs 10,00,000 for a basic virtual world with core features. Mid-range projects with NFT marketplaces and avatar systems cost Rs 25,00,000 to Rs 40,00,000. Enterprise-grade metaverse platforms with full blockchain integration, custom game mechanics, and VR support can range from Rs 50,00,000 to Rs 2,00,00,000+ depending on complexity and scale.',
  },
  {
    question: 'How long does it take to develop a metaverse platform?',
    answer:
      'A basic metaverse MVP with core virtual world features takes 16-24 weeks. A fully featured metaverse platform with NFT marketplace, avatar customization, virtual real estate, and blockchain integration typically requires 6-12 months. Enterprise metaverse solutions with VR/AR support and advanced social features may take 12-18 months for complete development.',
  },
  {
    question: 'What platforms and engines do you use for metaverse development?',
    answer:
      'We use Unity and Unreal Engine for 3D world rendering, Three.js and Babylon.js for browser-based experiences, WebXR for VR/AR integration, and blockchain platforms like Ethereum, Polygon, and Solana for digital asset ownership. Our tech stack also includes WebRTC for real-time communication, IPFS for decentralized storage, and custom backend solutions for multiplayer networking.',
  },
  {
    question: 'Can you build virtual real estate platforms in the metaverse?',
    answer:
      'Yes, we specialize in building virtual real estate platforms where users can buy, sell, and develop virtual land parcels as NFTs. Our solutions include land subdivision systems, 3D building tools, property marketplaces with auction mechanisms, rental systems, and integration with DeFi protocols for virtual mortgage and staking features.',
  },
  {
    question: 'How do NFTs work in the metaverse?',
    answer:
      'NFTs in the metaverse represent ownership of digital assets such as virtual land, avatars, wearables, buildings, and in-game items. These are minted as ERC-721 or ERC-1155 tokens on blockchain networks, enabling true digital ownership, cross-platform interoperability, and secondary marketplace trading with creator royalties built into smart contracts.',
  },
  {
    question: 'Do you develop play-to-earn (P2E) metaverse games?',
    answer:
      'Yes, we build complete play-to-earn and GameFi ecosystems within metaverse environments. This includes tokenomics design, NFT-based in-game assets, reward distribution smart contracts, guild systems, tournament infrastructure, and marketplace integration. We focus on sustainable economic models that balance player rewards with long-term platform viability.',
  },
  {
    question: 'Can you build enterprise metaverse solutions for businesses?',
    answer:
      'Absolutely! We develop enterprise metaverse solutions for virtual training environments, remote collaboration spaces, virtual showrooms, digital twin simulations, and corporate events. Our enterprise solutions include SSO integration, analytics dashboards, custom branding, and can be deployed on private or hybrid cloud infrastructure for data security compliance.',
  },
];

export default function MetaverseDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Metaverse Development Platform',
    description: 'Enterprise-grade metaverse development platform with virtual world creation, NFT marketplace integration, avatar systems, play-to-earn gaming, and immersive 3D environments for consumer and enterprise use cases.',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web, VR, AR, Mobile, Desktop',
    price: '1000000',
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
      { name: 'Metaverse Development', url: '/metaverse-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Metaverse Development Services',
      'Professional metaverse development including virtual worlds, NFT marketplaces, play-to-earn gaming, and enterprise metaverse solutions'
    ),
    generateProductSchema(
      'Metaverse Development Package',
      'Complete metaverse development from concept design to immersive virtual world deployment',
      '1000000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="METAVERSE & WEB3 GAMING"
        title="Build Immersive Virtual Worlds & Metaverse Experiences"
        description="Enterprise-grade metaverse development with Unity, Unreal Engine, and blockchain integration. Create virtual worlds, NFT marketplaces, play-to-earn games, and enterprise metaverse solutions."
        ctaPrimary={{ text: 'Get Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Our Portfolio', href: '/portfolio' }}
        gradient="purple"
      />

      {/* What is Metaverse Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Metaverse Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Metaverse Development</strong> is the creation of immersive, persistent virtual worlds where users interact through customizable avatars in shared 3D environments. It combines cutting-edge technologies including real-time 3D rendering (Unity, Unreal Engine), blockchain for digital asset ownership (NFTs, virtual land), spatial audio, multiplayer networking, and XR (VR/AR) integration. Metaverse platforms enable virtual real estate trading, play-to-earn gaming, social experiences, enterprise collaboration, and digital commerce within interconnected virtual universes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Metaverse development starting at Rs 10,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Immersive 3D virtual worlds with multiplayer support
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Customizable avatar systems with NFT wearables
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  NFT-based virtual land and real estate trading
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Play-to-earn gaming and GameFi integration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Enterprise metaverse for training and collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Metaverse Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Virtual World Development',
                description: 'Immersive 3D virtual environments with real-time multiplayer, spatial audio, physics simulation, and cross-platform accessibility via web, mobile, and VR headsets.',
              },
              {
                icon: '🎨',
                title: 'Metaverse NFT Marketplace',
                description: 'Custom NFT marketplaces for trading virtual land, avatars, wearables, and in-game assets with auction mechanisms, royalty systems, and multi-chain support.',
              },
              {
                icon: '🧑',
                title: 'Avatar System Development',
                description: 'Fully customizable 3D avatar creation with NFT wearables, expression systems, motion capture integration, and cross-platform avatar interoperability.',
              },
              {
                icon: '🏗️',
                title: 'Virtual Real Estate Platform',
                description: 'NFT-based virtual land ownership, subdivision tools, 3D building systems, property marketplaces, rental mechanisms, and DeFi mortgage integration.',
              },
              {
                icon: '🎮',
                title: 'Metaverse Gaming (P2E)',
                description: 'Play-to-earn game development with tokenomics design, NFT rewards, guild systems, tournament infrastructure, and sustainable GameFi economic models.',
              },
              {
                icon: '🏢',
                title: 'Enterprise Metaverse',
                description: 'Virtual offices, training simulations, product showrooms, digital twins, and corporate event spaces with SSO, analytics, and private cloud deployment.',
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

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Metaverse Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Unity', 'Unreal Engine', 'Three.js', 'WebXR', 'Babylon.js', 'Solidity', 'Polygon', 'IPFS'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Discovery & Concept Design', time: '2-3 weeks' },
                  { step: 2, title: '3D World Design & Prototyping', time: '4-8 weeks' },
                  { step: 3, title: 'Blockchain & Smart Contract Integration', time: '4-6 weeks' },
                  { step: 4, title: 'Multiplayer & Backend Development', time: '6-10 weeks' },
                  { step: 5, title: 'Testing, Optimization & Launch', time: '3-5 weeks' },
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metaverse Use Cases & Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming industries with immersive virtual world experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏠</span>
                Virtual Real Estate
              </h3>
              <p className="text-gray-700 mb-4">
                Built a virtual real estate platform enabling users to purchase, develop, and trade NFT-based land parcels in an expansive 3D virtual city with integrated DeFi mortgage features.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 50,000+ virtual land parcels tokenized</li>
                  <li>• 3D building tools for land development</li>
                  <li>• Marketplace with auction & instant buy</li>
                  <li>• Virtual mortgage and staking system</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unity, Solidity, Polygon, Three.js</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎮</span>
                Metaverse Gaming (P2E)
              </h3>
              <p className="text-gray-700 mb-4">
                Developed a play-to-earn metaverse game with open-world exploration, NFT-based characters and weapons, guild warfare, and a sustainable dual-token economic model.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 15,000+ daily active players</li>
                  <li>• NFT characters with upgradeable traits</li>
                  <li>• Guild system with territory control</li>
                  <li>• Dual-token economy (governance + utility)</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unreal Engine, Solidity, Polygon, WebSocket</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">👥</span>
                Social Metaverse
              </h3>
              <p className="text-gray-700 mb-4">
                Created a social metaverse platform with customizable virtual spaces, live events hosting, avatar-based interactions, and integrated NFT marketplace for digital fashion and collectibles.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 100,000+ registered users</li>
                  <li>• Virtual event hosting for 10K+ attendees</li>
                  <li>• NFT avatar wearables marketplace</li>
                  <li>• Spatial audio and video chat</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Three.js, WebRTC, Ethereum, IPFS</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Enterprise Training Metaverse
              </h3>
              <p className="text-gray-700 mb-4">
                Implemented an enterprise metaverse training platform with VR-ready 3D simulations, interactive scenarios, progress tracking, and collaborative virtual classrooms for workforce training.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5,000+ employees trained virtually</li>
                  <li>• Interactive 3D simulation scenarios</li>
                  <li>• Real-time collaboration and co-presence</li>
                  <li>• Analytics dashboard with skill tracking</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unity, WebXR, Azure Cloud, Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metaverse Platform Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metaverse Platform Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choosing the right approach for your metaverse project: existing platforms vs custom development
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">The Sandbox Clone</th>
                  <th className="px-6 py-4 text-left">Decentraland Clone</th>
                  <th className="px-6 py-4 text-left">Custom Metaverse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Development Time</td>
                  <td className="px-6 py-4">12-16 weeks</td>
                  <td className="px-6 py-4">14-18 weeks</td>
                  <td className="px-6 py-4">24-48 weeks</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Starting Cost</td>
                  <td className="px-6 py-4">Rs 15,00,000</td>
                  <td className="px-6 py-4">Rs 18,00,000</td>
                  <td className="px-6 py-4">Rs 50,00,000+</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Rendering Engine</td>
                  <td className="px-6 py-4">Voxel-based (Unity)</td>
                  <td className="px-6 py-4">Three.js / Babylon.js</td>
                  <td className="px-6 py-4">Unity / Unreal Engine</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Blockchain</td>
                  <td className="px-6 py-4">Polygon / Ethereum</td>
                  <td className="px-6 py-4">Ethereum / Polygon</td>
                  <td className="px-6 py-4">Any (Multi-chain)</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Virtual Land</td>
                  <td className="px-6 py-4">Grid-based parcels</td>
                  <td className="px-6 py-4">Coordinate-based parcels</td>
                  <td className="px-6 py-4">Fully customizable</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Game Mechanics</td>
                  <td className="px-6 py-4">Voxel builder, P2E</td>
                  <td className="px-6 py-4">Scene builder, Events</td>
                  <td className="px-6 py-4">Unlimited flexibility</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">VR Support</td>
                  <td className="px-6 py-4">Basic</td>
                  <td className="px-6 py-4">Limited</td>
                  <td className="px-6 py-4">Full VR/AR/XR</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Best For</td>
                  <td className="px-6 py-4">Gaming, UGC platforms</td>
                  <td className="px-6 py-4">Social, Events, Art</td>
                  <td className="px-6 py-4">Enterprise, Unique IP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Metaverse MVP',
                price: 'Rs 10,00,000',
                features: [
                  'Basic 3D virtual world',
                  'Avatar creation system',
                  'NFT asset integration',
                  'Multiplayer support (100 users)',
                  'Web-based access',
                  '60-day support',
                ],
              },
              {
                name: 'Metaverse Pro',
                price: 'Rs 25,00,000',
                popular: true,
                features: [
                  'Advanced 3D virtual world',
                  'NFT marketplace integration',
                  'Virtual land ownership',
                  'Play-to-earn mechanics',
                  'Mobile + Web + VR support',
                  'Custom tokenomics',
                  '90-day support',
                ],
              },
              {
                name: 'Enterprise Metaverse',
                price: 'Rs 50,00,000+',
                features: [
                  'Fully custom virtual universe',
                  'Multi-chain blockchain',
                  'Advanced avatar with motion capture',
                  'Enterprise SSO & analytics',
                  'VR/AR/XR integration',
                  'Dedicated infrastructure',
                  '1-year maintenance',
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

      {/* Cross-Links to Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complementary blockchain and Web3 development services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link
              href="/nft-marketplace-development"
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">NFT Marketplace Development</h3>
              <p className="text-sm text-gray-600">Custom NFT marketplaces with minting, trading, and royalty management.</p>
            </Link>
            <Link
              href="/blockchain-game-development"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Blockchain Game Development</h3>
              <p className="text-sm text-gray-600">Play-to-earn games with NFT assets, tokenomics, and GameFi mechanics.</p>
            </Link>
            <Link
              href="/web3-development-services"
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">Web3 Development Services</h3>
              <p className="text-sm text-gray-600">Decentralized applications, DeFi protocols, and Web3 integration.</p>
            </Link>
            <Link
              href="/blockchain-development-company"
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-3">⛓️</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors">Blockchain Development Company</h3>
              <p className="text-sm text-gray-600">Smart contracts, DApps, and enterprise blockchain solutions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about metaverse development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Metaverse?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your vision into an immersive virtual world. Get expert metaverse development consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Metaverse Projects
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Metaverse Development" />
        </div>
      </section>
    </>
  );
}

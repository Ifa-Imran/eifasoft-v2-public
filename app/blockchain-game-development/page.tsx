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
    title: 'Blockchain Game Development | P2E & GameFi | EifaSoft',
    description:
      'Expert blockchain game development services. Build Play-to-Earn (P2E), GameFi, NFT games, and metaverse experiences. Unity & Unreal Engine. Starting at ₹8,00,000. 12+ years experience.',
    keywords: [
      'blockchain game development',
      'play to earn game development',
      'p2e game development',
      'nft game development',
      'web3 game development',
      'gamefi development',
      'crypto game development',
      'move to earn development',
      'axie infinity clone',
      'stepn clone',
      'nft gaming marketplace',
      'in-game nft',
      'gaming token',
      'play to earn economy',
      'blockchain game developer india',
      'unity blockchain game',
      'unreal engine blockchain',
      'metaverse game development',
      'nft card game development',
      'play to earn platform',
      'blockchain gaming company',
      'web3 gaming studio',
      'crypto gaming platform',
      'gamefi token development',
      'p2e tokenomics',
      'blockchain mobile game',
      'decentralized gaming',
    ],
    canonical: '/blockchain-game-development',
  });
}

const faqs = [
  {
    question: 'What is blockchain gaming and how does it work?',
    answer:
      'Blockchain gaming integrates distributed ledger technology into video games, enabling true digital ownership of in-game assets as NFTs. Players can earn cryptocurrency tokens through gameplay (Play-to-Earn), trade assets on decentralized marketplaces, and participate in player-driven economies. Smart contracts govern game rules, rewards distribution, and asset transfers transparently on-chain.',
  },
  {
    question: 'How do Play-to-Earn (P2E) mechanics work in blockchain games?',
    answer:
      'P2E mechanics reward players with cryptocurrency tokens or NFTs for completing in-game activities such as battles, quests, staking, and breeding. Players earn governance or utility tokens that can be traded on exchanges. The economy is sustained through new player onboarding fees, marketplace transaction fees, and token burning mechanisms to maintain value.',
  },
  {
    question: 'How much does blockchain game development cost?',
    answer:
      'Blockchain game development starts at ₹8,00,000 for casual P2E games with basic tokenomics. Mid-range titles with NFT marketplaces and multiplayer features cost ₹15,00,000-₹25,00,000. AAA-quality metaverse games with advanced graphics, complex economies, and cross-chain support range from ₹40,00,000 to ₹1,00,00,000+ depending on scope and platform.',
  },
  {
    question: 'What is the typical timeline for developing a blockchain game?',
    answer:
      'A basic P2E casual game takes 12-16 weeks. Mid-complexity games with NFT integration and marketplace features require 20-30 weeks. Full-scale metaverse or RPG games with complex tokenomics and multiplayer features take 36-52 weeks. Timeline includes game design, smart contract development, game engine integration, testing, and security audits.',
  },
  {
    question: 'Which game engines do you use for blockchain game development?',
    answer:
      'We primarily use Unity and Unreal Engine for blockchain game development. Unity excels at 2D/mobile games and offers excellent Web3 SDK support. Unreal Engine is ideal for AAA 3D games with high-fidelity graphics. We also work with Godot for open-source projects and Cocos for lightweight browser-based games. All engines are integrated with blockchain SDKs like Moralis, thirdweb, and Alchemy.',
  },
  {
    question: 'How do you integrate NFTs into games?',
    answer:
      'We integrate NFTs as in-game assets such as characters, weapons, skins, land, and collectibles using ERC-721 and ERC-1155 standards. Assets are minted on-chain with metadata stored on IPFS/Arweave. Players can trade NFTs on in-game marketplaces or external platforms like OpenSea. Smart contracts handle minting, trading, royalties, and interoperability across games.',
  },
  {
    question: 'How do you design tokenomics for blockchain games?',
    answer:
      'We design sustainable game economies using dual-token models: a governance token for staking and voting, and a utility token for in-game transactions. Our tokenomics include token emission schedules, burning mechanisms, staking rewards, play-to-earn allocation, treasury management, and anti-inflation measures. We model economies using simulations to ensure long-term sustainability.',
  },
  {
    question: 'Can you develop blockchain games for mobile platforms?',
    answer:
      'Yes! We specialize in mobile blockchain gaming for both iOS and Android using Unity and React Native. Mobile games feature wallet integration (MetaMask, WalletConnect), gasless transactions via meta-transactions, and optimized blockchain interactions. We handle app store compliance, ensuring smooth approval for games with crypto and NFT features.',
  },
];

export default function BlockchainGameDevelopmentPage() {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Blockchain Game Development Platform',
    description: 'Full-stack blockchain game development platform with Play-to-Earn mechanics, NFT integration, tokenomics design, Unity/Unreal Engine support, and multi-chain deployment for GameFi solutions.',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web, iOS, Android, Windows, Ethereum, BSC, Polygon, Solana',
    price: '800000',
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
      { name: 'Blockchain Game Development', url: '/blockchain-game-development' },
    ]),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Blockchain Game Development Services',
      'Professional blockchain game development including P2E, GameFi, NFT games, and metaverse experiences with Unity and Unreal Engine'
    ),
    generateProductSchema(
      'Blockchain Game Development Package',
      'Complete blockchain game development from concept to launch with tokenomics and NFT integration',
      '800000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle="🎮 BLOCKCHAIN GAMING"
        title="Build Next-Gen Play-to-Earn & GameFi Experiences"
        description="Enterprise-grade blockchain game development with NFT integration, tokenomics design, and immersive gameplay. Launch your P2E game on Unity or Unreal Engine."
        ctaPrimary={{ text: 'Start Your Game Project', href: '#contact' }}
        ctaSecondary={{ text: 'View Game Portfolio', href: '/portfolio' }}
        gradient="green"
      />

      {/* What is Blockchain Game Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Blockchain Game Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Blockchain Game Development</strong> is the process of building video games that leverage distributed ledger technology to enable true digital asset ownership, play-to-earn economies, and decentralized gameplay mechanics. It combines traditional game development using engines like Unity and Unreal with smart contracts, NFTs (non-fungible tokens), and cryptocurrency tokens. Players earn real value through gameplay, own their in-game assets as NFTs, and participate in transparent, player-governed economies. Blockchain games span genres from casual P2E titles and NFT card games to full-scale metaverse experiences and move-to-earn fitness apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  P2E game development starting at ₹8,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Unity & Unreal Engine with Web3 SDK integration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  NFT minting, marketplace, and in-game asset trading
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Dual-token economy design with anti-inflation mechanics
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain deployment (Ethereum, BSC, Polygon, Solana)
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  12-52 weeks development timeline with 90-day post-launch support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Game Types We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From casual P2E titles to immersive metaverse worlds
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Play-to-Earn (P2E)</h3>
              <p className="text-gray-600 mb-4">
                Reward players with tokens and NFTs for completing quests, battles, and in-game achievements. Build sustainable P2E economies like Axie Infinity.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Token reward distribution</li>
                <li>• Staking & yield mechanics</li>
                <li>• Scholarship programs</li>
                <li>• Anti-bot protection systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Move-to-Earn (M2E)</h3>
              <p className="text-gray-600 mb-4">
                Fitness-based blockchain games like STEPN that reward physical activity with crypto. GPS tracking, step counting, and NFT sneaker mechanics.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• GPS & step tracking integration</li>
                <li>• NFT sneaker/gear systems</li>
                <li>• Energy & durability mechanics</li>
                <li>• Leaderboard & social features</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-xl font-bold mb-3">NFT Card Games</h3>
              <p className="text-gray-600 mb-4">
                Collectible card games with NFT-based cards, deck building, PvP battles, and trading mechanics. Each card is a unique on-chain asset.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Card minting & rarity tiers</li>
                <li>• PvP matchmaking & tournaments</li>
                <li>• Deck building strategies</li>
                <li>• Card trading marketplace</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Metaverse Games</h3>
              <p className="text-gray-600 mb-4">
                Immersive virtual worlds with NFT land, avatar customization, social interactions, and player-built economies in 3D environments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• NFT land & real estate</li>
                <li>• Avatar customization NFTs</li>
                <li>• Virtual economy simulation</li>
                <li>• Social & governance features</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-3">Strategy & RPG</h3>
              <p className="text-gray-600 mb-4">
                Deep strategy and role-playing games with NFT characters, equipment, and evolving gameplay. Build, battle, and conquer with true asset ownership.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• NFT character progression</li>
                <li>• Crafting & equipment systems</li>
                <li>• Guild & alliance mechanics</li>
                <li>• On-chain battle resolution</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Casual & Social</h3>
              <p className="text-gray-600 mb-4">
                Lightweight, accessible blockchain games for mass adoption. Simple mechanics, quick sessions, and low-barrier entry for crypto newcomers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gasless onboarding</li>
                <li>• Social wallet integration</li>
                <li>• Mini-game collections</li>
                <li>• Referral & viral mechanics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Game Development Technology Stack
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {['Unity', 'Unreal Engine', 'Godot', 'Cocos Creator'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Moralis SDK', 'thirdweb', 'Alchemy', 'Chainlink VRF', 'Solidity', 'Web3.js', 'IPFS', 'The Graph'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 text-center font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Game Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Game Design & Tokenomics Planning', time: '2-3 weeks' },
                  { step: 2, title: 'Smart Contract & Token Development', time: '4-6 weeks' },
                  { step: 3, title: 'Game Engine Development (Unity/Unreal)', time: '8-16 weeks' },
                  { step: 4, title: 'NFT Integration & Marketplace', time: '4-6 weeks' },
                  { step: 5, title: 'Security Audit & Playtesting', time: '3-5 weeks' },
                  { step: 6, title: 'Launch, Marketing & Live Ops', time: '2-4 weeks' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

      {/* Game Economy Design Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Economy & Tokenomics Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable blockchain game economies that retain players and maintain token value
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="text-xl font-bold mb-3">Tokenomics Architecture</h3>
              <p className="text-gray-600 mb-4">
                Design token emission schedules, vesting periods, and distribution models for long-term economic stability.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Token supply & emission curves</li>
                <li>• Vesting & lock-up schedules</li>
                <li>• Inflation control mechanisms</li>
                <li>• Economic modeling & simulation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Dual-Token Systems</h3>
              <p className="text-gray-600 mb-4">
                Implement governance + utility token models separating investment value from in-game spending.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Governance token for staking & voting</li>
                <li>• Utility token for in-game economy</li>
                <li>• Token swap & conversion mechanics</li>
                <li>• Treasury management protocols</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🗡️</div>
              <h3 className="text-xl font-bold mb-3">NFT Game Items</h3>
              <p className="text-gray-600 mb-4">
                Create NFT-based weapons, characters, skins, and land with rarity tiers, attributes, and upgrade paths.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• ERC-721 & ERC-1155 assets</li>
                <li>• Dynamic metadata & evolving NFTs</li>
                <li>• Crafting & fusion systems</li>
                <li>• Cross-game interoperability</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-3">In-Game Marketplace</h3>
              <p className="text-gray-600 mb-4">
                Build peer-to-peer trading platforms with auctions, fixed-price listings, and creator royalties.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• P2P asset trading</li>
                <li>• Auction & bidding systems</li>
                <li>• Royalty enforcement on resales</li>
                <li>• Multi-chain marketplace support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Game Examples with Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Games We Have Built</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world blockchain gaming projects delivering measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">⚔️</span>
                P2E Battle Arena RPG
              </h3>
              <p className="text-gray-700 mb-4">
                Built a multiplayer battle arena RPG with NFT heroes, weapon crafting, guild wars, and a dual-token economy. Players earn tokens through PvP battles and seasonal tournaments.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 50,000+ active players within 3 months</li>
                  <li>• 200,000+ NFTs minted across 5 rarity tiers</li>
                  <li>• $2M+ marketplace trading volume</li>
                  <li>• 85% player retention rate (30-day)</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unity, Solidity, Polygon, Moralis, IPFS</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🏃</span>
                Move-to-Earn Fitness App
              </h3>
              <p className="text-gray-700 mb-4">
                Developed a STEPN-inspired move-to-earn app with NFT sneakers, GPS tracking, energy mechanics, and social fitness challenges with crypto rewards.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 120,000+ app downloads in 6 months</li>
                  <li>• 30,000+ daily active wallets</li>
                  <li>• $500K+ NFT sneaker sales</li>
                  <li>• 4.6 star rating on App Store</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>React Native, Solana, Metaplex, GPS APIs</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🃏</span>
                NFT Trading Card Game
              </h3>
              <p className="text-gray-700 mb-4">
                Created a strategic NFT card game with 500+ unique cards, PvP tournaments, seasonal battle passes, and a vibrant card trading marketplace with creator royalties.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 500+ unique card NFTs with 8 rarity tiers</li>
                  <li>• 25,000+ competitive PvP matches daily</li>
                  <li>• $1.2M+ card trading volume</li>
                  <li>• 12 seasonal tournaments completed</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unity, Ethereum, ERC-1155, The Graph</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌐</span>
                Metaverse Virtual World
              </h3>
              <p className="text-gray-700 mb-4">
                Built an open-world metaverse with NFT land parcels, avatar customization, virtual events, mini-games, and a player-driven marketplace economy.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Key Metrics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 10,000 NFT land parcels sold out in 48 hours</li>
                  <li>• 15,000+ concurrent users during events</li>
                  <li>• $3M+ virtual real estate transactions</li>
                  <li>• 50+ brands hosted virtual events</li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tech Stack:</span>
                <span>Unreal Engine, Polygon, IPFS, WebRTC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Blockchain Game Development Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Casual P2E Game',
                price: '₹8,00,000',
                features: [
                  'Single P2E game mode',
                  'Basic tokenomics design',
                  'NFT character minting',
                  'In-game marketplace',
                  'Mobile or web deployment',
                  'Smart contract audit',
                  '90-day support',
                ],
              },
              {
                name: 'Advanced GameFi',
                price: '₹20,00,000',
                popular: true,
                features: [
                  'Multi-mode P2E gameplay',
                  'Dual-token economy',
                  'NFT marketplace + trading',
                  'PvP & tournament systems',
                  'Unity/Unreal development',
                  'Multi-chain deployment',
                  'Security audit + playtesting',
                  '6-month support',
                ],
              },
              {
                name: 'AAA Metaverse Game',
                price: '₹40,00,000+',
                features: [
                  'Full metaverse experience',
                  'NFT land + avatar systems',
                  'Complex tokenomics + DAO',
                  'Cross-chain interoperability',
                  'Unreal Engine AAA graphics',
                  'Social & multiplayer features',
                  'Third-party security audit',
                  '1-year support & live ops',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-4 ring-green-600 shadow-2xl scale-105' : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-4 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{plan.price}</div>
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
                  className="block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Blockchain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your blockchain game with our full suite of Web3 services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link href="/nft-marketplace-development" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group-hover:scale-105">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">NFT Marketplace Development</h3>
                <p className="text-gray-600 text-sm">
                  Build custom NFT marketplaces for in-game assets, collectibles, and digital art trading.
                </p>
              </div>
            </Link>
            <Link href="/token-development-services" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group-hover:scale-105">
                <div className="text-4xl mb-4">🪙</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Token Development Services</h3>
                <p className="text-gray-600 text-sm">
                  Create governance and utility tokens for your game economy with custom tokenomics.
                </p>
              </div>
            </Link>
            <Link href="/smart-contract-development" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group-hover:scale-105">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">Smart Contract Development</h3>
                <p className="text-gray-600 text-sm">
                  Secure, audited smart contracts for game logic, rewards, and asset management.
                </p>
              </div>
            </Link>
            <Link href="/nft-marketplace-development" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all group-hover:scale-105">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">Metaverse Development</h3>
                <p className="text-gray-600 text-sm">
                  Build immersive 3D virtual worlds with NFT land, avatars, and social experiences.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EifaSoft for Blockchain Game Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🎮', title: 'Gaming Expertise', desc: 'Dedicated game designers and developers with 12+ years experience' },
              { icon: '🔒', title: 'Security First', desc: 'Smart contract audits and anti-cheat systems built-in' },
              { icon: '💰', title: 'Cost Effective', desc: 'India pricing starting ₹8,00,000 with global quality standards' },
              { icon: '🚀', title: 'Fast Launch', desc: 'Agile sprints with playable demos every 2 weeks' },
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about blockchain game development services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-3 text-green-600">❓</span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-green-600 transform group-open:rotate-180 transition-transform"
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
      <section className="bg-gradient-to-br from-green-600 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Blockchain Game?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Launch your Play-to-Earn, GameFi, or metaverse game with our expert blockchain game development team!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Start Your Game Project
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Game Portfolio
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Blockchain Game Development" />
        </div>
      </section>
    </>
  );
}

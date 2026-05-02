import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateOrganizationSchema, generateHowToSchema, generateReviewSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'NFT Marketplace Development Company India | Custom Minting & Trading Platform | EifaSoft',
    description: 'Leading NFT marketplace development company in India. Build custom NFT platform with minting, auctions, IPFS storage, royalties, multi-chain support. OpenSea clone, Rarible alternative. Starting ₹4,00,000. 50+ NFT projects delivered.',
    canonical: '/nft-marketplace-development',
    keywords: [
      'NFT marketplace development', 'NFT marketplace development company', 'NFT marketplace development company India',
      'NFT minting platform', 'NFT trading platform', 'custom NFT marketplace',
      'OpenSea clone development', 'Rarible clone', 'NFT platform development India',
      'ERC-721 development', 'ERC-1155 development', 'IPFS NFT storage',
      'NFT auction system', 'NFT royalties implementation', 'lazy minting NFT',
      'multi-chain NFT marketplace', 'NFT collection platform', 'NFT launchpad development',
      'NFT marketplace cost India', 'NFT smart contract development', 'Web3 marketplace',
      'build NFT marketplace', 'create NFT platform', 'white label NFT marketplace',
      'NFT development company India', 'Ethereum NFT marketplace', 'Polygon NFT marketplace',
      'Solana NFT marketplace', 'BSC NFT platform', 'NFT mobile app development',
      'NFT marketplace features', 'how to build NFT marketplace', 'NFT marketplace architecture',
      'dynamic NFTs', 'soulbound tokens', 'phygital NFT development',
      'nft meaning', 'what is an nft', 'non fungible tokens',
      'opensea clone', 'rarible clone', 'foundation clone', 'superrare clone', 'blur clone',
      'nft art marketplace', 'nft music marketplace', 'nft gaming marketplace', 'nft collectibles', 'nft ticketing',
      'nft marketplace development cost', 'best nft marketplace development company',
      'nft development company india',
    ],
  });
}

export default function NFTMarketplaceDevelopment() {
  const features = [
    { icon: '🎨', title: 'NFT Minting', desc: 'Custom minting platform', items: ['ERC-721/1155', 'Lazy Minting', 'Batch Minting', 'Metadata Storage'] },
    { icon: '🛒', title: 'Marketplace', desc: 'Full-featured trading platform', items: ['Buy/Sell/Auction', 'Bidding System', 'Royalties', 'Multi-currency'] },
    { icon: '📦', title: 'IPFS Storage', desc: 'Decentralized file storage', items: ['Image Upload', 'Metadata Storage', 'Pinning Service', 'Gateway Access'] },
    { icon: '💎', title: 'Collections', desc: 'Organize NFT collections', items: ['Collection Creation', 'Traits & Rarity', 'Verified Collections', 'Featured Items'] },
    { icon: '👤', title: 'User Profiles', desc: 'Personalized user experience', items: ['Profile Pages', 'Owned NFTs', 'Created Items', 'Activity History'] },
    { icon: '🔍', title: 'Discovery', desc: 'Advanced search & filters', items: ['Category Filters', 'Price Range', 'Trending Items', 'Recommendations'] },
  ];

  const packages = [
    { name: 'Basic Marketplace', price: '₹4,00,000', duration: '10-12 weeks', features: ['NFT Minting', 'Buy/Sell Functionality', 'IPFS Integration', 'Wallet Connection', 'Basic UI', '3 Months Support'], color: 'from-blue-500 to-blue-600' },
    { name: 'Professional Marketplace', price: '₹8,00,000', duration: '16-20 weeks', features: ['Advanced Minting', 'Auction System', 'Royalties', 'Collections', 'Mobile Responsive', 'Admin Panel', 'Analytics', '6 Months Support'], color: 'from-purple-500 to-purple-600', popular: true },
    { name: 'Enterprise Marketplace', price: '₹15,00,000+', duration: '24-32 weeks', features: ['Full Platform', 'Multi-chain', 'Launchpad', 'Governance', 'Mobile Apps', 'White-label', 'Advanced Features', '12 Months Support'], color: 'from-pink-500 to-pink-600' },
  ];

  // Blockchain networks supported
  const supportedChains = [
    { name: 'Ethereum', icon: '⬡', color: 'bg-blue-100 text-blue-800', desc: 'Most popular for high-value NFTs' },
    { name: 'Polygon', icon: '⬣', color: 'bg-purple-100 text-purple-800', desc: 'Low fees, fast transactions' },
    { name: 'BSC', icon: '◆', color: 'bg-yellow-100 text-yellow-800', desc: 'Binance ecosystem compatibility' },
    { name: 'Solana', icon: '◎', color: 'bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800', desc: 'Ultra-fast, low cost' },
    { name: 'Avalanche', icon: '▲', color: 'bg-red-100 text-red-800', desc: 'High throughput EVM chain' },
    { name: 'Arbitrum', icon: '⚡', color: 'bg-blue-100 text-blue-800', desc: 'Ethereum L2 scaling' },
  ];

  // Development process steps
  const developmentProcess = [
    { step: 1, title: 'Discovery & Planning', duration: '1-2 weeks', tasks: ['Requirements analysis', 'Feature prioritization', 'Architecture design', 'Tech stack selection'] },
    { step: 2, title: 'Smart Contract Development', duration: '3-4 weeks', tasks: ['NFT contract (ERC-721/1155)', 'Marketplace contract', 'Royalty implementation', 'Security patterns'] },
    { step: 3, title: 'Backend Development', duration: '3-4 weeks', tasks: ['API development', 'IPFS integration', 'Indexing service', 'Database setup'] },
    { step: 4, title: 'Frontend Development', duration: '4-5 weeks', tasks: ['UI/UX implementation', 'Wallet integration', 'Responsive design', 'Performance optimization'] },
    { step: 5, title: 'Testing & Audit', duration: '2-3 weeks', tasks: ['Smart contract audit', 'Security testing', 'Load testing', 'Bug fixes'] },
    { step: 6, title: 'Deployment & Launch', duration: '1-2 weeks', tasks: ['Mainnet deployment', 'DNS & SSL setup', 'Marketing launch', 'Monitoring setup'] },
  ];

  // NFT marketplace comparison
  const marketplaceComparison = [
    { feature: 'Platform Fee', openSea: '2.5%', rarible: '1%', our: 'Customizable (0-5%)' },
    { feature: 'Lazy Minting', openSea: '✓', rarible: '✓', our: '✓' },
    { feature: 'Creator Royalties', openSea: 'Up to 10%', rarible: 'Up to 50%', our: 'Unlimited' },
    { feature: 'Multi-chain', openSea: '5 chains', rarible: '7 chains', our: 'Any EVM chain' },
    { feature: 'White Label', openSea: '✗', rarible: '✗', our: '✓' },
    { feature: 'Custom Features', openSea: '✗', rarible: '✗', our: '✓' },
    { feature: 'Source Code', openSea: '✗', rarible: '✗', our: '✓ (Full ownership)' },
  ];

  const faqs = [
    {
      question: 'What is an NFT marketplace and how does it work?',
      answer: 'An NFT marketplace is a platform where users can create (mint), buy, sell, and trade non-fungible tokens. It works like eBay for digital assets: creators upload artwork/content to IPFS, mint NFTs via smart contracts, list them for sale (fixed price or auction), buyers connect wallets and purchase with cryptocurrency, smart contracts handle transfers and royalties automatically. Popular examples: OpenSea, Rarible, Foundation.',
    },
    {
      question: 'How much does NFT marketplace development cost in India?',
      answer: 'NFT marketplace development cost in India ranges from ₹4,00,000 to ₹15,00,000+: Basic marketplace (minting, buy/sell, IPFS) costs ₹4,00,000 (10-12 weeks), Professional marketplace (auctions, royalties, collections, admin panel) costs ₹8,00,000 (16-20 weeks), Enterprise platform (multi-chain, launchpad, mobile apps, white-label) starts at ₹15,00,000+ (24-32 weeks). Additional costs: IPFS storage (₹5-10K/month), security audit (₹2-3 lakhs), ongoing maintenance.',
    },
    {
      question: 'What is lazy minting and why is it important?',
      answer: 'Lazy minting delays NFT creation until purchase, saving creators gas fees. Traditional minting costs $50-500 per NFT in gas fees upfront. With lazy minting: creator uploads to IPFS and signs metadata (free), NFT is only minted when buyer purchases, buyer pays gas fees instead of creator, enables mass collection launches without upfront costs. Essential for platforms attracting new creators. We implement lazy minting using EIP-712 signatures.',
    },
    {
      question: 'How do NFT royalties work?',
      answer: 'Royalties are automatic creator payments on secondary sales. Implementation: EIP-2981 standard defines royalty info in smart contract, marketplace reads royalty percentage (typically 5-10%) and recipient address, on each sale, marketplace deducts royalty before paying seller, royalty goes to original creator automatically. We support multiple beneficiaries, customizable percentages, and time-based royalty decay. Royalties ensure creators earn from ongoing value appreciation.',
    },
    {
      question: 'What storage options do you support for NFT metadata and images?',
      answer: 'We support three storage tiers: IPFS (most popular) - decentralized, content-addressed, requires pinning service like Pinata/Infura, costs $5-50/month, 99.9% uptime. Arweave - permanent storage, one-time payment, $5-20 per GB, guaranteed forever access, best for high-value collections. On-Chain - store everything in smart contract, most expensive but fully decentralized, perfect for generative art. We recommend IPFS for most projects with Arweave for premium collections.',
    },
    {
      question: 'Can the marketplace support multiple blockchains?',
      answer: 'Yes, we build multi-chain marketplaces supporting Ethereum, Polygon, BSC, Solana, Avalanche, Arbitrum, and more. Implementation options: Separate contracts per chain with unified frontend, Bridge contracts for cross-chain transfers, or Chain-agnostic architecture. Benefits: reach wider audience, lower gas fees on alternative chains, chain-specific communities. Multi-chain adds 40-60% to development cost. We recommend starting single-chain and expanding based on demand.',
    },
    {
      question: 'How do you prevent fake NFTs and protect against scams?',
      answer: 'Multi-layer protection: Contract verification (ensure deployed contracts match source code), Collection verification badges (manual review of legitimate projects), DMCA takedown process for copyrighted content, Duplicate detection using perceptual hashing, Creator verification (KYC for verified artists), Scam warnings for suspicious patterns, Reported item system with community moderation. We implement OpenSea-style verification with automated and manual checks.',
    },
    {
      question: 'What features make an NFT marketplace successful?',
      answer: "Key success factors: Low fees (2-2.5% vs OpenSea's 2.5%), Fast UX (lazy loading, optimistic updates), Advanced search (filters by traits, price, rarity), Creator tools (batch upload, customization), Community features (following, social sharing), Analytics (floor price, volume charts), Mobile app (60% of traffic), Marketing (launchpad for new collections), Liquidity (incentivize early traders). We design for 10,000+ concurrent users and sub-2 second page loads.",
    },
    {
      question: 'How long does it take to build an NFT marketplace?',
      answer: 'Timeline depends on complexity: Basic marketplace (buy/sell, minting, IPFS) takes 10-12 weeks, Professional marketplace (auctions, royalties, collections, admin) takes 16-20 weeks, Enterprise platform (multi-chain, launchpad, mobile apps) takes 24-32 weeks. Factors affecting timeline: number of blockchain integrations, custom features, security audit requirements, mobile app development. We follow agile methodology with bi-weekly demos.',
    },
    {
      question: 'Do you provide white-label NFT marketplace solutions?',
      answer: 'Yes, we offer complete white-label NFT marketplace solutions. You get: Full source code ownership, Custom branding (logo, colors, domain), Your own smart contracts (verified under your name), Admin panel for platform management, Analytics dashboard, Documentation and training. White-label solution can be deployed in 6-8 weeks for ₹8-12 lakhs depending on customization level. Perfect for brands wanting to launch quickly.',
    },
    {
      question: 'What tech stack do you use for NFT marketplace development?',
      answer: 'Our tech stack: Smart Contracts - Solidity, Hardhat/Foundry, OpenZeppelin; Frontend - Next.js, React, ethers.js/wagmi, TailwindCSS; Backend - Node.js, Express/NestJS, PostgreSQL, Redis; Indexing - The Graph, custom indexers; Storage - IPFS (Pinata/Infura), Arweave; Infrastructure - AWS/GCP, Docker, Kubernetes. This stack ensures security, scalability, and maintainability.',
    },
    {
      question: 'Can you integrate with existing NFT collections and other marketplaces?',
      answer: 'Yes, we support full ecosystem integration: Import existing NFT collections (read from any ERC-721/1155 contract), Aggregate listings from OpenSea, Rarible, LooksRare via APIs, Cross-marketplace royalty enforcement, Universal collection verification across platforms. This allows your marketplace to have instant liquidity and content from day one.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'NFT Marketplace Development Services',
    'Custom NFT marketplace development with minting, buy/sell/auction functionality, IPFS storage, royalties, collection management, and multi-chain support for artists and collectors.'
  );

  const productSchema = generateProductSchema(
    'NFT Marketplace Development Package',
    'Complete NFT marketplace with minting, trading, IPFS integration, wallet connection, and admin panel for launching your NFT platform.',
    '400000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blockchain Services', url: '/blockchain-development-company' },
    { name: 'NFT Marketplace Development', url: '/nft-marketplace-development' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Discovery & Planning', text: 'Analyze requirements, prioritize features, design architecture, and select tech stack', position: 1 },
    { name: 'Smart Contract Development', text: 'Develop NFT contracts (ERC-721/1155), marketplace contracts, and implement royalty system', position: 2 },
    { name: 'Backend Development', text: 'Build APIs, integrate IPFS storage, set up indexing service and database', position: 3 },
    { name: 'Frontend Development', text: 'Implement UI/UX, wallet integration, responsive design, and optimize performance', position: 4 },
    { name: 'Testing & Security Audit', text: 'Conduct smart contract audit, security testing, load testing, and fix bugs', position: 5 },
    { name: 'Deployment & Launch', text: 'Deploy to mainnet, configure DNS/SSL, launch marketing, and set up monitoring', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Arjun Mehta', rating: 5, reviewBody: 'EifaSoft built our NFT marketplace from scratch. The lazy minting feature saved us thousands in gas fees. Highly recommend for Web3 projects!' },
    { author: 'Priya Sharma', rating: 5, reviewBody: 'Professional team, delivered on time. Our multi-chain NFT platform handles 5000+ daily transactions smoothly.' },
    { author: 'Vikram Singh', rating: 5, reviewBody: 'Excellent smart contract development. Security audit passed with flying colors. Great communication throughout.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  const localBusinessSchema = generateLocalBusinessSchema();
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft NFT Marketplace Platform',
    description: 'Full-featured NFT marketplace development with minting, trading, auctions, royalties, lazy minting, and multi-chain support for art, music, gaming, and collectibles.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Ethereum, Polygon, BSC, Solana',
    price: '300000',
    rating: 4.8,
    reviewCount: 95,
  });
  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema, localBusinessSchema, softwareSchema, speakableSchema]} />

      <Hero
        title="NFT Marketplace Development"
        subtitle="Build. Mint. Trade. Earn."
        description="Leading NFT marketplace development company in India. Launch your custom NFT platform with minting, auctions, IPFS storage, royalties, and multi-chain support. 50+ NFT projects delivered."
        ctaPrimary={{ text: 'Get Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
        gradient="blue"
      />

      {/* What is NFT Marketplace Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is NFT Marketplace Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>NFT Marketplace Development</strong> is the process of building decentralized platforms where users can create (mint), buy, sell, and trade Non-Fungible Tokens (NFTs). NFT marketplaces support ERC-721 and ERC-1155 token standards and include features like lazy minting, auction systems, royalty enforcement, IPFS/Arweave storage, and multi-chain deployment. Modern NFT platforms also support dynamic NFTs with evolving metadata, soulbound tokens (SBTs) for non-transferable credentials, and phygital NFTs linking physical goods to digital tokens.
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
                  NFT marketplace development starting at ₹3,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  OpenSea, Rarible & Blur clone solutions available
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-chain: Ethereum, Polygon, BSC, Solana
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Dynamic NFTs, soulbound tokens & phygital NFTs
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Art, music, gaming, collectibles & ticketing
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Lazy minting, auctions & royalty enforcement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is NFT Marketplace - AEO Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is an NFT Marketplace?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                An <strong>NFT marketplace</strong> is a decentralized platform where users can create (mint), buy, sell, and trade
                <strong>non-fungible tokens (NFTs)</strong> - unique digital assets stored on blockchain networks like Ethereum, Polygon, or Solana.
              </p>
              <p className="mb-6">
                Unlike traditional e-commerce platforms, NFT marketplaces operate on <strong>smart contracts</strong> that automatically handle
                ownership transfers, royalty payments to creators, and secure escrow-free transactions using cryptocurrency.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Key Components of an NFT Marketplace:</h3>
                <ul className="space-y-2">
                  <li><strong>Smart Contracts:</strong> ERC-721/ERC-1155 contracts for NFT creation and marketplace logic</li>
                  <li><strong>IPFS Storage:</strong> Decentralized storage for NFT images and metadata</li>
                  <li><strong>Wallet Integration:</strong> MetaMask, WalletConnect for user authentication</li>
                  <li><strong>Trading Engine:</strong> Fixed price, auctions, offers, and bidding systems</li>
                  <li><strong>Royalty System:</strong> Automatic creator payments on secondary sales (EIP-2981)</li>
                </ul>
              </div>
              <p>
                Popular NFT marketplaces like <strong>OpenSea</strong>, <strong>Rarible</strong>, and <strong>Foundation</strong> have
                facilitated billions of dollars in NFT trades. EifaSoft builds custom NFT marketplaces with all these features and more,
                tailored to your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EifaSoft - Trust Signals */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose EifaSoft for NFT Marketplace Development?</h2>
            <p className="text-xl text-gray-300">Trusted by 50+ clients worldwide for Web3 development</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
              <p className="text-gray-300">NFT Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">8+</div>
              <p className="text-gray-300">Years in Blockchain</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">$50M+</div>
              <p className="text-gray-300">Trading Volume Enabled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">4.9/5</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-gray-300">All smart contracts audited by reputable firms. Reentrancy protection, access controls, and upgrade patterns implemented.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Gas Optimized</h3>
              <p className="text-gray-300">Efficient smart contracts reduce gas costs by up to 40%. Lazy minting saves creators thousands in fees.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Full Source Code</h3>
              <p className="text-gray-300">Complete ownership of all code, smart contracts, and infrastructure. No vendor lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Marketplace Architecture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NFT Marketplace Architecture & Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-featured NFT platform with minting, trading, and discovery
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                NFT Minting Platform
              </h3>
              <p className="text-gray-700 mb-4">Comprehensive creation tools for artists and collectors</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Lazy Minting</h4>
                  <p className="text-sm text-gray-600">NFTs created only when purchased, saving gas fees for creators</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Batch Minting</h4>
                  <p className="text-sm text-gray-600">Create entire collections in single transaction with ERC-1155</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Generative Art</h4>
                  <p className="text-sm text-gray-600">On-chain or off-chain trait randomization with rarity system</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Dynamic NFTs</h4>
                  <p className="text-sm text-gray-600">Evolving metadata based on time, conditions, or oracle data</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Trading Mechanisms
              </h3>
              <p className="text-gray-700 mb-4">Multiple sale formats for maximum flexibility</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Fixed Price Sales</h4>
                  <p className="text-sm text-gray-600">Instant buy functionality with ETH, WETH, or custom tokens</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">English Auctions</h4>
                  <p className="text-sm text-gray-600">Ascending bid auctions with reserve price and time extensions</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Dutch Auctions</h4>
                  <p className="text-sm text-gray-600">Descending price discovery mechanism for optimal pricing</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Offers & Bidding</h4>
                  <p className="text-sm text-gray-600">Collection-wide and item-specific offer system with expiry</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💾</span>
                Decentralized Storage
              </h3>
              <p className="text-gray-700 mb-4">Permanent, censorship-resistant NFT storage</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">IPFS Integration</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Content-addressed storage for images & metadata</li>
                    <li>• Pinata/Infura pinning services</li>
                    <li>• Public IPFS gateway access</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Arweave Permanent Storage</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• One-time payment for perpetual storage</li>
                    <li>• Perfect for high-value NFT collections</li>
                    <li>• Bundlr integration for instant uploads</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">On-Chain Metadata</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Store metadata directly in smart contract</li>
                    <li>• SVG art fully on-chain</li>
                    <li>• Maximum decentralization & permanence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💸</span>
                Royalty System
              </h3>
              <p className="text-gray-700 mb-4">Automated creator earnings on secondary sales</p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">EIP-2981 Standard</h4>
                  <p className="text-sm text-gray-600">On-chain royalty info readable by all marketplaces</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Custom Royalty Logic</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Configurable royalty percentages (0-10%)</li>
                    <li>• Multiple beneficiary splits</li>
                    <li>• Time-decaying royalties</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Payment Distribution</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automatic royalty deduction on trades</li>
                    <li>• Pull payment pattern for safety</li>
                    <li>• Multi-currency royalty support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Marketplace Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NFT Marketplace Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Marketplace Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade functionality for competitive NFT marketplaces
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Rarity & Analytics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Automated rarity scoring algorithms</li>
                <li>• Trait distribution analysis</li>
                <li>• Floor price tracking & history</li>
                <li>• Volume & sales statistics</li>
                <li>• Price prediction models</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4">Discovery & Search</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Advanced filtering by traits</li>
                <li>• Price range & rarity filters</li>
                <li>• Trending collections algorithm</li>
                <li>• Personalized recommendations</li>
                <li>• Collection verification badges</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Security & Verification</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Smart contract verification</li>
                <li>• Creator identity verification (KYC)</li>
                <li>• Duplicate detection algorithms</li>
                <li>• Scam/phishing protection</li>
                <li>• DMCA takedown process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Blockchain Networks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-Chain NFT Marketplace Development</h2>
            <p className="text-xl text-gray-600">Deploy your NFT marketplace on any blockchain network</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportedChains.map((chain, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{chain.icon}</div>
                <h3 className="text-lg font-bold mb-2">{chain.name}</h3>
                <p className="text-sm text-gray-600">{chain.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Multi-Chain Benefits</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-bold">Wider Reach</h4>
                <p className="text-sm text-gray-600">Access users across all blockchain ecosystems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💸</div>
                <h4 className="font-bold">Lower Fees</h4>
                <p className="text-sm text-gray-600">Offer L2 chains for cost-conscious users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold">Faster Transactions</h4>
                <p className="text-sm text-gray-600">Sub-second finality on modern chains</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔗</div>
                <h4 className="font-bold">Cross-Chain NFTs</h4>
                <p className="text-sm text-gray-600">Bridge NFTs between networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom vs Existing Marketplaces</h2>
            <p className="text-xl text-gray-600">Why build your own NFT marketplace instead of using OpenSea or Rarible?</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">OpenSea</th>
                  <th className="py-4 px-6 text-center">Rarible</th>
                  <th className="py-4 px-6 text-center bg-white/20">EifaSoft Custom</th>
                </tr>
              </thead>
              <tbody>
                {marketplaceComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.openSea}</td>
                    <td className="py-4 px-6 text-center">{row.rarible}</td>
                    <td className="py-4 px-6 text-center bg-purple-50 font-semibold text-purple-700">{row.our}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NFT Marketplace Development Process</h2>
            <p className="text-xl text-gray-600">Our proven 6-step approach to building successful NFT platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((phase) => (
              <div key={phase.step} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{phase.title}</h3>
                    <p className="text-sm text-gray-500">{phase.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Marketplace Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NFT Marketplace Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-4 ring-pink-500 transform scale-105' : ''}`}>
                {plan.popular && <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 font-semibold">Most Popular</div>}
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
                  <Link href="/contact" className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Get Started</Link>
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
            <Link href="/token-development-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🪙</div>
              <h3 className="font-bold text-gray-900">Token Development</h3>
              <p className="text-sm text-gray-600 mt-2">ERC-721 & ERC-1155 tokens</p>
            </Link>
            <Link href="/smart-contract-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">⛓️</div>
              <h3 className="font-bold text-gray-900">Smart Contracts</h3>
              <p className="text-sm text-gray-600 mt-2">NFT smart contract development</p>
            </Link>
            <Link href="/blockchain-game-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-bold text-gray-900">Blockchain Gaming</h3>
              <p className="text-sm text-gray-600 mt-2">P2E & in-game NFTs</p>
            </Link>
            <Link href="/metaverse-development" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900">Metaverse Development</h3>
              <p className="text-sm text-gray-600 mt-2">Virtual worlds & NFT land</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced NFT Technologies */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Generation NFT Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge NFT innovations beyond standard ERC-721 tokens
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔄</div>
                <h3 className="text-2xl font-bold">Dynamic NFTs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                NFTs that change their metadata based on external conditions or triggers.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ <strong>Oracle Integration:</strong> Chainlink VRF for randomness, weather data, sports scores</li>
                <li>✓ <strong>Evolution Mechanics:</strong> NFT evolves based on time, usage, or achievements</li>
                <li>✓ <strong>Interactive Art:</strong> Changes based on viewer interactions or market conditions</li>
                <li>✓ <strong>Gaming Assets:</strong> Stats update based on game performance</li>
                <li>✓ <strong>Real-world Events:</strong> Responds to stock prices, crypto prices, news events</li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm"><strong>Use Cases:</strong> Gaming items, generative art, achievement badges, prediction markets</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Development Cost:</strong> ₹6,00,000+</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">⚡</div>
                <h3 className="text-2xl font-bold">Soulbound Tokens (SBTs)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Non-transferable NFTs representing identity, reputation, or credentials.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ <strong>EIP-5192 Standard:</strong> Bound account detection, non-transferable</li>
                <li>✓ <strong>Digital Identity:</strong> KYC verification, professional certifications, memberships</li>
                <li>✓ <strong>Reputation Systems:</strong> Credit scores, work history, social proof</li>
                <li>✓ <strong>Achievement Badges:</strong> Course completions, event attendance, contributions</li>
                <li>✓ <strong>Revocable SBTs:</strong> Issuer can revoke under specific conditions</li>
                <li>✓ <strong>Privacy Controls:</strong> Selective disclosure, zero-knowledge proofs</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm"><strong>Use Cases:</strong> DAO governance, DeFi credit scoring, resume/CV, loyalty programs</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Development Cost:</strong> ₹4,00,000+</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌐</div>
                <h3 className="text-2xl font-bold">Phygital NFTs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bridging physical and digital assets through NFT authentication.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ <strong>NFC/RFID Tags:</strong> Physical items with embedded chips linked to NFTs</li>
                <li>✓ <strong>QR Code Authentication:</strong> Scan to verify ownership and authenticity</li>
                <li>✓ <strong>Luxury Goods:</strong> Designer bags, watches, sneakers with digital certificates</li>
                <li>✓ <strong>Art & Collectibles:</strong> Physical artwork paired with digital provenance</li>
                <li>✓ <strong>Event Tickets:</strong> Physical ticket + NFT souvenir + exclusive content</li>
                <li>✓ <strong>Redemption Mechanism:</strong> Burn NFT to claim physical item (or vice versa)</li>
              </ul>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm"><strong>Use Cases:</strong> Luxury authentication, art provenance, event memorabilia, supply chain</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Development Cost:</strong> ₹8,00,000+ (includes hardware integration)</p>
              </div>
            </div>
          </div>
          
          {/* Dynamic NFT Architecture */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Dynamic NFT Implementation Architecture</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Component</th>
                    <th className="px-6 py-4 text-left">Function</th>
                    <th className="px-6 py-4 text-left">Technology</th>
                    <th className="px-6 py-4 text-left">Gas Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Base NFT Contract</td>
                    <td className="px-6 py-4">ERC-721/1155 with mutable metadata</td>
                    <td className="px-6 py-4">Solidity, OpenZeppelin</td>
                    <td className="px-6 py-4">~2,500 gas/mint</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Oracle Integration</td>
                    <td className="px-6 py-4">Fetch external data triggers</td>
                    <td className="px-6 py-4">Chainlink Functions, API3</td>
                    <td className="px-6 py-4">~50,000 gas/update</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Metadata Generator</td>
                    <td className="px-6 py-4">Generate new attributes dynamically</td>
                    <td className="px-6 py-4">IPFS + Pinata, Arweave</td>
                    <td className="px-6 py-4">Off-chain (free)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Update Logic</td>
                    <td className="px-6 py-4">Conditional metadata changes</td>
                    <td className="px-6 py-4">Smart contract functions</td>
                    <td className="px-6 py-4">~20,000 gas/call</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Marketplace Clone Solutions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production-Ready NFT Marketplace Clones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch proven NFT platforms faster with battle-tested architectures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌊</div>
                <h3 className="text-2xl font-bold">OpenSea Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete NFT marketplace with all features</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Minting (ERC-721/1155)</li>
                <li>✓ Fixed Price & Auctions</li>
                <li>✓ Lazy Minting Support</li>
                <li>✓ Creator Royalties (EIP-2981)</li>
                <li>✓ Collections & Bundles</li>
                <li>✓ Activity Feed & Analytics</li>
                <li>✓ Multi-chain Support</li>
                <li>✓ Wallet Connect Integration</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹10,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 16-20 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🎨</div>
                <h3 className="text-2xl font-bold">Rarible Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Community-owned NFT marketplace</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Create & Discover NFTs</li>
                <li>✓ RARI-style Governance Token</li>
                <li>✓ Dual-sided Marketplace</li>
                <li>✓ Customizable Royalties</li>
                <li>✓ Social Features (Follow, Like)</li>
                <li>✓ Multi-chain (7+ chains)</li>
                <li>✓ DAO Governance Module</li>
                <li>✓ Trading Rewards System</li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹12,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 18-22 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">💎</div>
                <h3 className="text-2xl font-bold">Foundation Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Invite-only curated NFT platform</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Invitation System</li>
                <li>✓ Reserve Auction Format</li>
                <li>✓ 15% Platform Fee</li>
                <li>✓ Minimalist UI/UX</li>
                <li>✓ Artist Verification</li>
                <li>✓ Curated Collections</li>
                <li>✓ Ethereum Only (Premium)</li>
                <li>✓ Social Graph Integration</li>
              </ul>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹8,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 14-18 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔍</div>
                <h3 className="text-2xl font-bold">Blur Clone</h3>
              </div>
              <p className="text-gray-600 mb-4">Pro NFT trading aggregator</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ NFT Aggregation (Multi-marketplace)</li>
                <li>✓ Real-time Price Scanning</li>
                <li>✓ Bulk Listing & Bidding</li>
                <li>✓ Advanced Charting Tools</li>
                <li>✓ Rarity Ranking Integration</li>
                <li>✓ Airdrop Points System</li>
                <li>✓ Zero Royalty Option</li>
                <li>✓ Pro Trading Interface</li>
              </ul>
              <div className="bg-cyan-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹9,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 14-18 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🎮</div>
                <h3 className="text-2xl font-bold">NFT Gaming Marketplace</h3>
              </div>
              <p className="text-gray-600 mb-4">Specialized for P2E games</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ In-Game Asset Trading</li>
                <li>✓ Character NFTs with Stats</li>
                <li>✓ Land/Property NFTs</li>
                <li>✓ Item Crafting System</li>
                <li>✓ Rental Mechanism</li>
                <li>✓ Tournament Entry NFTs</li>
                <li>✓ Play-to-Earn Rewards</li>
                <li>✓ Game Launcher Integration</li>
              </ul>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹11,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 18-24 weeks</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🎵</div>
                <h3 className="text-2xl font-bold">Music NFT Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">Audio-focused NFT marketplace</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Audio Streaming Integration</li>
                <li>✓ Limited Edition Releases</li>
                <li>✓ Royalty Splitting (Multiple Artists)</li>
                <li>✓ Concert Ticket NFTs</li>
                <li>✓ Exclusive Content Unlock</li>
                <li>✓ Fan Membership Tokens</li>
                <li>✓ Sync Licensing Rights</li>
                <li>✓ Vinyl/Merch Redemption</li>
              </ul>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm"><strong>Starting at:</strong> ₹9,00,000</p>
                <p className="text-xs text-gray-600 mt-1">Timeline: 16-20 weeks</p>
              </div>
            </div>
          </div>
          
          {/* Clone Benefits */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Why Choose NFT Marketplace Clone Solutions?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-green-600">✓ Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Proven Business Model:</strong> Replicate success of billion-dollar platforms</li>
                  <li>• <strong>Faster Time-to-Market:</strong> Launch 50% faster than custom build</li>
                  <li>• <strong>Lower Development Cost:</strong> Save 30-40% vs building from scratch</li>
                  <li>• <strong>Battle-Tested Code:</strong> Security vulnerabilities already fixed</li>
                  <li>• <strong>User-Friendly UX:</strong> Familiar interface reduces learning curve</li>
                  <li>• <strong>Comprehensive Features:</strong> All essential features included</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-blue-600">✓ Our Clone Enhancements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced security with additional audit layers</li>
                  <li>• Gas optimization (20-30% savings on transactions)</li>
                  <li>• Custom branding and unique feature additions</li>
                  <li>• Multi-chain deployment ready (Ethereum, Polygon, Solana)</li>
                  <li>• Mobile app integration (iOS/Android)</li>
                  <li>• Advanced analytics and admin dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="NFT Marketplace Development" />
        </div>
      </section>
    </main>
  );
}

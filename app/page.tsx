import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';
import { TrustBadges } from '@/components/TrustBadges';
import { StatsCounter } from '@/components/StatsCounter';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebSiteSchema,
  generateProfessionalServiceSchema,
} from '@/lib/seo';
import servicesData from '@/data/services.json';
import citiesData from '@/data/cities.json';
import { FAQ } from '@/types';

const homeFAQs: FAQ[] = [
  {
    question: 'What services does EifaSoft Technologies offer?',
    answer:
      'We offer comprehensive software development services including website design & development, mobile app development (Flutter & Native), blockchain development, DApp development, MLM software, e-commerce solutions, and digital marketing services.',
  },
  {
    question: 'How much does it cost to develop a website or mobile app?',
    answer:
      'Pricing varies based on project complexity. Website development starts at ₹14,999, mobile apps from ₹39,999, and blockchain/DApp solutions from ₹99,999. Contact us for a detailed quote tailored to your requirements.',
  },
  {
    question: 'Do you provide services across India?',
    answer:
      'Yes! We serve clients across all major Indian cities including Moradabad, Delhi NCR, Agra, Lucknow, Kanpur, Varanasi, and many more. We also work with international clients.',
  },
  {
    question: 'What is your typical project delivery timeline?',
    answer:
      'Timelines vary by project scope. Simple websites take 2-4 weeks, mobile apps 6-12 weeks, and complex blockchain/enterprise solutions 12-24 weeks. We follow Agile methodology with weekly demos.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Absolutely! We provide 90-day hypercare support post-launch and offer ongoing maintenance packages. Our support includes bug fixes, updates, security patches, and feature enhancements.',
  },
  {
    question: 'What makes EifaSoft different from other software companies?',
    answer:
      '12+ years of experience, India-based pricing with global standards, end-to-end solutions from wireframe to deployment, expertise in emerging technologies (Blockchain, AI, Flutter), and dedicated 360° support.',
  },
];

export default function Home() {
  const newServices = servicesData.services.filter((s) => s.isNew);
  const popularServices = servicesData.services.slice(0, 6);

  return (
    <>
      <SchemaMarkup
        data={[
          generateWebSiteSchema(),
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateProfessionalServiceSchema(),
          generateBreadcrumbSchema([{ name: 'Home', url: '/' }]),
          generateFAQSchema(homeFAQs),
        ]}
      />

      <Hero
        subtitle="12+ Years of Excellence | 500+ Projects Delivered"
        title="India's #1 MLM & Software Development Company"
        description="Transform your business with custom MLM software, blockchain solutions, web & mobile apps. Trusted by 500+ clients across India. Free demo available!"
        ctaPrimary={{ text: '🎯 Book Free Demo', href: '#contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
        gradient="blue"
      />

      {/* Free Demo Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <span className="text-lg font-semibold">🎁 Limited Time: Get FREE MLM Software Demo + Consultation Worth ₹10,000</span>
            <Link
              href="#contact"
              className="px-6 py-2 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition-colors animate-pulse"
            >
              Claim Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Horizontal */}
      <TrustBadges variant="horizontal" />

      {/* New Services Highlight */}
      {newServices.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                🚀 NEW SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cutting-Edge Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay ahead with our latest offerings in blockchain and cross-platform development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Starting {service.startingPrice}</span>
                    <span className="text-sm text-gray-500">{service.deliveryTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              📍 PAN INDIA PRESENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cities We Serve Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing world-class software development services to businesses across major Indian cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {citiesData.cities.slice(0, 15).map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-website-designing-and-development-company`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100 group"
              >
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">{city.state}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {parseInt(city.population).toLocaleString('en-IN')} people
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your city? <Link href="/cities" className="text-blue-600 font-semibold hover:underline">View all {citiesData.cities.length} cities</Link> or <Link href="/contact" className="text-blue-600 font-semibold hover:underline">contact us</Link> - we serve clients nationwide!
            </p>
            <Link
              href="/cities"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Cities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter variant="gradient" />

      {/* Enterprise Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Solutions & Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/api-development-services"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-200 group"
            >
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                API Development
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                RESTful, GraphQL, and microservices architecture
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                From ₹59,999 →
              </div>
            </Link>

            <Link
              href="/devops-cloud-services"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-200 group"
            >
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                DevOps & Cloud
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                AWS, Azure, GCP with CI/CD automation
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                From ₹39,999 →
              </div>
            </Link>

            <Link
              href="/it-consulting"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-green-200 group"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                IT Consulting
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Digital transformation and technology advisory
              </p>
              <div className="text-sm text-green-600 font-semibold">
                From ₹14,999 →
              </div>
            </Link>

            <Link
              href="/software-maintenance-support"
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-orange-200 group"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                Maintenance & Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                24/7 support with 99.9% uptime guarantee
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                From ₹9,999/mo →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blockchain Services */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              🔗 BLOCKCHAIN SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blockchain Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart contracts, DApps, DeFi, NFTs, and blockchain consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/smart-contract-development"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-indigo-200 group"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                Smart Contracts
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Secure, audited Solidity contracts for Ethereum & EVM chains
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                From ₹59,999 →
              </div>
            </Link>

            <Link
              href="/dapp-development-company"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-200 group"
            >
              <div className="text-4xl mb-4">🔷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                DApp Development
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Full-stack decentralized apps with React & Web3
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                From ₹1,49,999 →
              </div>
            </Link>

            <Link
              href="/token-development-services"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-orange-200 group"
            >
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                Token Development
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                ERC-20, ERC-721, ERC-1155 token creation
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                From ₹39,999 →
              </div>
            </Link>

            <Link
              href="/defi-solutions"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-green-200 group"
            >
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                DeFi Solutions
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                DEX, lending platforms, yield farming protocols
              </p>
              <div className="text-sm text-green-600 font-semibold">
                From ₹2,99,999 →
              </div>
            </Link>

            <Link
              href="/nft-marketplace-development"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-pink-200 group"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                NFT Marketplace
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Custom minting & trading platforms with IPFS
              </p>
              <div className="text-sm text-pink-600 font-semibold">
                From ₹2,49,999 →
              </div>
            </Link>

            <Link
              href="/blockchain-consulting"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-200 group"
            >
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Blockchain Consulting
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Architecture, technology selection & strategy
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                From ₹39,999 →
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blockchain-development-company"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All Blockchain Services
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
              🤖 AI & MACHINE LEARNING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artificial Intelligence Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with intelligent automation and AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/ai-services"
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-cyan-200 group"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                AI Services
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Computer Vision, NLP, Predictive Analytics, Chatbots & Voice AI solutions
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  9 AI Capabilities
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  TensorFlow & PyTorch
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud AI Integration
                </li>
              </ul>
              <div className="text-cyan-600 font-semibold">
                From ₹1,50,000 →
              </div>
            </Link>

            <Link
              href="/custom-ai-models"
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-200 group"
            >
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Custom AI Models
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Build, train, and deploy custom machine learning models tailored to your needs
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Model Training & Fine-tuning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Data Preprocessing
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  MLOps & Deployment
                </li>
              </ul>
              <div className="text-blue-600 font-semibold">
                From ₹3,00,000 →
              </div>
            </Link>

            <Link
              href="/ai-agent-ecosystems"
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-200 group"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Agent Ecosystems
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Multi-agent systems with autonomous decision-making and orchestration
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  6 Agent Types
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  LangChain & AutoGPT
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Agent Orchestration
                </li>
              </ul>
              <div className="text-purple-600 font-semibold">
                From ₹2,99,999 →
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ai-services"
              className="inline-block px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFAQs} />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}

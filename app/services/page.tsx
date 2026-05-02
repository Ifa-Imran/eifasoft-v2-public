import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Our Services | Web, Mobile, MLM, AI Development | EifaSoft Technologies',
    description: 'Comprehensive software development services: Website Development, Mobile Apps, MLM Software, AI Solutions, Blockchain, E-Commerce, Digital Marketing. 15+ years expertise. 500+ projects delivered.',
    canonical: '/services',
    keywords: ['software development services', 'web development', 'mobile app development', 'mlm software', 'ai development', 'blockchain development', 'ecommerce development'],
  });
}

const services = [
  {
    category: 'Web Development',
    icon: '🌐',
    description: 'Professional website design and development services',
    services: [
      {
        name: 'Website Designing & Development',
        url: '/website-designing-and-development-company',
        description: 'Custom websites with responsive design, SEO optimization, and modern technologies.',
        features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Fast Performance'],
      },
      {
        name: 'E-Commerce Development',
        url: '/e-commerce-development-company',
        description: 'Complete online store solutions with payment gateway and inventory management.',
        features: ['Shopping Cart', 'Payment Gateway', 'Product Management', 'Analytics'],
      },
    ],
  },
  {
    category: 'Mobile Development',
    icon: '📱',
    description: 'Native and cross-platform mobile app development',
    services: [
      {
        name: 'Mobile App Development',
        url: '/mobile-app-development-company',
        description: 'iOS, Android, Flutter, and React Native app development services.',
        features: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'App Store Submission'],
      },
      {
        name: 'Flutter App Development',
        url: '/flutter-app-development-company',
        description: 'Beautiful cross-platform apps with Flutter framework.',
        features: ['Single Codebase', 'Fast Development', 'Beautiful UI', 'Native Performance'],
      },
    ],
  },
  {
    category: 'MLM Software',
    icon: '🔗',
    description: 'Complete MLM and network marketing software solutions',
    services: [
      {
        name: 'MLM Software Development',
        url: '/mlm-software-development-company',
        description: 'Custom MLM software with 20+ compensation plans and full features.',
        features: ['20+ Plans', 'E-Wallet', 'Commission Engine', 'Genealogy Tree'],
      },
      {
        name: 'Binary Plan MLM',
        url: '/binary-plan-mlm-software',
        description: 'Binary MLM plan with spillover and balanced commission structure.',
        features: ['Left-Right Balance', 'Spillover', 'Matching Bonus', 'Real-time Reports'],
      },
      {
        name: 'Matrix Plan MLM',
        url: '/matrix-plan-mlm-software',
        description: 'Matrix MLM plan with forced matrix structure and level bonuses.',
        features: ['Forced Matrix', 'Level Bonus', 'Pool Distribution', 'Auto-Placement'],
      },
      {
        name: 'Unilevel Plan MLM',
        url: '/unilevel-plan-mlm-software',
        description: 'Unilevel MLM plan with unlimited width and depth levels.',
        features: ['Unlimited Width', 'Level Commission', 'Easy Recruitment', 'Fast Growth'],
      },
    ],
  },
  {
    category: 'AI & Blockchain',
    icon: '🤖',
    description: 'Advanced AI and blockchain development services',
    services: [
      {
        name: 'AI Services',
        url: '/ai-services',
        description: 'AI-powered solutions including machine learning and automation.',
        features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      },
      {
        name: 'Custom AI Models',
        url: '/custom-ai-models',
        description: 'Tailored AI models for specific business needs and use cases.',
        features: ['Model Training', 'Fine-tuning', 'Deployment', 'Optimization'],
      },
      {
        name: 'AI Agent Ecosystems',
        url: '/ai-agent-ecosystems',
        description: 'Intelligent multi-agent systems for complex automation.',
        features: ['Multi-Agent', 'Autonomous', 'Collaborative', 'Scalable'],
      },
      {
        name: 'Blockchain Development',
        url: '/blockchain-development-company',
        description: 'Smart contracts, DApps, and blockchain solutions.',
        features: ['Smart Contracts', 'DApps', 'Token Development', 'Web3'],
      },
      {
        name: 'Crypto Exchange Development',
        url: '/crypto-currency-exchange-development-company',
        description: 'Centralized and decentralized cryptocurrency exchange platforms.',
        features: ['CEX/DEX', 'Trading Engine', 'Multi-Currency', 'KYC/AML'],
      },
    ],
  },
  {
    category: 'Digital Marketing',
    icon: '📊',
    description: 'Complete digital marketing and SEO services',
    services: [
      {
        name: 'Digital Marketing Services',
        url: '/digital-marketing-services',
        description: 'SEO, SMM, PPC, content marketing, and brand promotion.',
        features: ['SEO', 'Social Media', 'PPC Ads', 'Content Marketing'],
      },
    ],
  },
];

const industries = [
  { name: 'E-Commerce & Retail', icon: '🛒', count: '50+' },
  { name: 'Healthcare', icon: '🏥', count: '30+' },
  { name: 'Education', icon: '🎓', count: '40+' },
  { name: 'Finance & Banking', icon: '💰', count: '25+' },
  { name: 'Real Estate', icon: '🏢', count: '35+' },
  { name: 'Travel & Tourism', icon: '✈️', count: '20+' },
  { name: 'MLM & Direct Selling', icon: '🔗', count: '100+' },
  { name: 'Startups', icon: '🚀', count: '80+' },
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '300+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
];

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema(
    'EifaSoft Technologies Services',
    'Complete software development services including web development, mobile apps, MLM software, AI solutions, blockchain, and digital marketing.',
    'India'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, breadcrumbSchema]} />
      
      <Hero
        title="Our Services"
        subtitle="Complete Software Development Solutions for Your Business"
        description="From web and mobile development to AI and blockchain solutions, we deliver cutting-edge technology that drives business growth. 15+ years of expertise, 500+ successful projects."
        ctaPrimary={{ text: 'Get Free Consultation', href: '/contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
        gradient="purple"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end software development services tailored to your business needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, svcIndex) => (
                    <Link
                      key={svcIndex}
                      href={service.url}
                      className="block bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-indigo-600 font-semibold text-sm">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering tailored solutions across diverse industries with proven expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <div className="text-indigo-600 font-semibold">{industry.count} Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💡',
                title: 'Innovation First',
                description: 'Latest technologies and innovative solutions for competitive advantage',
              },
              {
                icon: '🎯',
                title: 'Client-Focused',
                description: 'Your success is our priority with dedicated project management',
              },
              {
                icon: '⚡',
                title: 'Agile Development',
                description: 'Fast delivery with iterative development and regular updates',
              },
              {
                icon: '🔒',
                title: 'Quality Assured',
                description: 'Rigorous testing and quality control for bug-free delivery',
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'No hidden costs, clear quotes, and flexible payment terms',
              },
              {
                icon: '🛠️',
                title: 'Post-Launch Support',
                description: '24/7 maintenance and support to keep your software running',
              },
              {
                icon: '👥',
                title: 'Expert Team',
                description: '50+ developers with 15+ years of combined expertise',
              },
              {
                icon: '📈',
                title: 'Proven Track Record',
                description: '500+ successful projects and 300+ satisfied clients',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements, goals, and create a detailed roadmap with timelines and milestones.',
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Our designers create wireframes, mockups, and interactive prototypes for your approval.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development with regular sprints, demos, and incorporating your feedback.',
              },
              {
                step: '04',
                title: 'Testing & QA',
                description: 'Comprehensive testing including functional, performance, security, and user acceptance.',
              },
              {
                step: '05',
                title: 'Deployment',
                description: 'Smooth deployment to production with documentation and training for your team.',
              },
              {
                step: '06',
                title: 'Support & Maintenance',
                description: 'Ongoing support, updates, and enhancements to keep your software optimized.',
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a solution that drives real results.
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+919897359359"
              className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-400 transition-colors inline-block"
            >
              Call: +91-9897-359-359
            </a>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Frontend',
                tech: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
                color: 'blue',
              },
              {
                category: 'Backend',
                tech: ['Node.js', 'Python', 'PHP', 'Java', 'Go', '.NET'],
                color: 'green',
              },
              {
                category: 'Mobile',
                tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
                color: 'purple',
              },
              {
                category: 'Database',
                tech: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
                color: 'orange',
              },
              {
                category: 'Cloud & DevOps',
                tech: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
                color: 'indigo',
              },
              {
                category: 'AI & ML',
                tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
                color: 'pink',
              },
              {
                category: 'Blockchain',
                tech: ['Ethereum', 'Solidity', 'Web3.js', 'Hyperledger', 'Smart Contracts'],
                color: 'yellow',
              },
              {
                category: 'CMS & E-Commerce',
                tech: ['WordPress', 'Shopify', 'WooCommerce', 'Magento', 'Drupal'],
                color: 'red',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`bg-${item.color}-100 text-${item.color}-800 px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

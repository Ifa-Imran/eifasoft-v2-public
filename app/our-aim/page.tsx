import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Our Aim & Goals | EifaSoft Technologies Vision',
    description: 'Learn about EifaSoft Technologies aims, goals, and vision for the future. Our commitment to innovation, quality, and client success.',
    canonical: '/our-aim',
    keywords: ['eifasoft vision', 'company goals', 'business objectives', 'our mission'],
  });
}

export default function OurAimPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Aim', url: '/our-aim' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Aim</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Building a future where technology empowers every business
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <div className="text-5xl mb-4">🔭</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To be the global leader in innovative software solutions, recognized for transforming businesses through cutting-edge technology, exceptional quality, and unwavering commitment to client success.
                </p>
                <p className="text-gray-600">
                  We envision a future where every business, regardless of size or industry, has access to world-class technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To empower businesses worldwide with innovative, scalable, and reliable software solutions that solve real-world challenges and create measurable value.
                </p>
                <p className="text-gray-600">
                  We are committed to delivering excellence through continuous innovation, collaborative partnerships, and a relentless focus on quality and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Core Aims */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Aims</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic objectives that guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: '🎯', title: 'Client Success', desc: 'Every project delivers measurable business value and exceeds client expectations' },
                { icon: '💡', title: 'Innovation', desc: 'Pioneering solutions using latest technologies and industry best practices' },
                { icon: '🌍', title: 'Global Impact', desc: 'Transforming businesses across the world with scalable solutions' },
                { icon: '⚡', title: 'Excellence', desc: 'Maintaining highest standards in code quality, security, and performance' },
                { icon: '🤝', title: 'Partnership', desc: 'Building long-term relationships based on trust and mutual success' },
                { icon: '🔒', title: 'Security', desc: 'Ensuring data protection and compliance with international standards' },
              ].map((aim, i) => (
                <div key={i} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="text-5xl mb-4">{aim.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{aim.title}</h3>
                  <p className="text-gray-600">{aim.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Goals for 2025-2030</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our roadmap to becoming a leading global technology partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  year: '2025',
                  title: 'Expand Technology Portfolio',
                  goals: [
                    'Launch AI-powered business solutions',
                    'Develop blockchain and Web3 products',
                    'Expand mobile app development capabilities',
                    'Achieve 1000+ satisfied clients milestone',
                  ],
                },
                {
                  year: '2026',
                  title: 'Global Market Presence',
                  goals: [
                    'Establish presence in 3 new international markets',
                    'Partner with Fortune 500 companies',
                    'Launch SaaS product suite',
                    'Build team of 100+ tech specialists',
                  ],
                },
                {
                  year: '2027',
                  title: 'Innovation & Research',
                  goals: [
                    'Establish dedicated R&D center',
                    'File 10+ technology patents',
                    'Launch AI research lab',
                    'Achieve ISO 27001 & SOC 2 certifications',
                  ],
                },
                {
                  year: '2028-2030',
                  title: 'Industry Leadership',
                  goals: [
                    'Become top 3 MLM software provider globally',
                    'Serve 50+ enterprise clients',
                    'Launch proprietary AI platform',
                    'Achieve ₹100 Cr+ annual revenue',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that define who we are and how we work every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🏆',
                  value: 'Excellence',
                  description: 'We strive for perfection in every line of code, every design decision, and every client interaction.',
                },
                {
                  icon: '🔍',
                  value: 'Transparency',
                  description: 'Honest communication, clear processes, and open collaboration with clients and team members.',
                },
                {
                  icon: '🚀',
                  value: 'Innovation',
                  description: 'Constantly exploring new technologies and creative solutions to solve complex challenges.',
                },
                {
                  icon: '💪',
                  value: 'Integrity',
                  description: 'Ethical business practices, data security, and commitment to doing what\'s right.',
                },
                {
                  icon: '🤝',
                  value: 'Collaboration',
                  description: 'Working together with clients as partners to achieve shared goals and success.',
                },
                {
                  icon: '📈',
                  value: 'Growth',
                  description: 'Continuous learning, skill development, and adapting to evolving market needs.',
                },
                {
                  icon: '⚡',
                  value: 'Agility',
                  description: 'Fast execution, flexible processes, and quick adaptation to changing requirements.',
                },
                {
                  icon: '❤️',
                  value: 'Customer First',
                  description: 'Client success is our success. Every decision is made with customer value in mind.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:border-purple-500 transition-all hover:shadow-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.value}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitments</h2>
              <p className="text-lg text-purple-100 max-w-3xl mx-auto">
                Promises we make and keep to every client, partner, and team member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality Assurance',
                  points: [
                    'Rigorous testing protocols',
                    'Code review by senior developers',
                    '99.9% uptime guarantee',
                    'Industry best practices',
                  ],
                },
                {
                  title: 'On-Time Delivery',
                  points: [
                    'Clear project timelines',
                    'Milestone-based delivery',
                    'Regular progress updates',
                    'Agile development process',
                  ],
                },
                {
                  title: 'Post-Launch Support',
                  points: [
                    '24/7 technical support',
                    'Free bug fixes warranty',
                    'Regular security updates',
                    'Feature enhancement options',
                  ],
                },
                {
                  title: 'Data Security',
                  points: [
                    'End-to-end encryption',
                    'GDPR & compliance ready',
                    'Regular security audits',
                    'Secure development lifecycle',
                  ],
                },
                {
                  title: 'Transparent Pricing',
                  points: [
                    'No hidden costs',
                    'Clear quotations',
                    'Flexible payment terms',
                    'Value for money guarantee',
                  ],
                },
                {
                  title: 'Continuous Innovation',
                  points: [
                    'Latest technology stack',
                    'Regular feature updates',
                    'Performance optimization',
                    'Scalability planning',
                  ],
                },
              ].map((commitment, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                  <ul className="space-y-2">
                    {commitment.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-purple-100">
                        <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Focus Areas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized domains where we aim to excel and lead the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🤖',
                  area: 'Artificial Intelligence',
                  focus: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots & Assistants', 'Predictive Analytics'],
                },
                {
                  icon: '🔗',
                  area: 'Blockchain & Web3',
                  focus: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'Crypto Exchanges', 'Decentralized Applications'],
                },
                {
                  icon: '📱',
                  area: 'Mobile Innovation',
                  focus: ['Cross-platform Apps', 'Native iOS/Android', 'Progressive Web Apps', 'IoT Integration', 'AR/VR Experiences'],
                },
                {
                  icon: '🌐',
                  area: 'MLM & Network Marketing',
                  focus: ['20+ Compensation Plans', 'Genealogy Systems', 'E-wallet Solutions', 'Mobile MLM Apps', 'Compliance Tools'],
                },
                {
                  icon: '🛒',
                  area: 'E-Commerce Excellence',
                  focus: ['Multi-vendor Platforms', 'B2B/B2C Solutions', 'Payment Integration', 'Inventory Management', 'Analytics Dashboards'],
                },
                {
                  icon: '☁️',
                  area: 'Cloud & DevOps',
                  focus: ['AWS/Azure/GCP', 'Microservices Architecture', 'CI/CD Pipelines', 'Container Orchestration', 'Serverless Computing'],
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.area}</h3>
                  <ul className="space-y-2">
                    {item.focus.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="text-purple-600 mr-2">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re a startup with a bold vision or an enterprise seeking digital transformation, 
              we&apos;re ready to be your technology partner. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors inline-block"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

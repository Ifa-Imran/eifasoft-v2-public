import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateHowToSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'How We Work | Our Process | EifaSoft Technologies',
    description: 'Discover how EifaSoft Technologies delivers successful projects. Our development process, methodology, and client collaboration approach.',
    canonical: '/how-we-work',
    keywords: ['development process', 'agile methodology', 'project workflow', 'how we work'],
  });
}

export default function HowWeWorkPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How We Work', url: '/how-we-work' },
  ]);

  const howToSteps = [
    { position: 1, name: 'Discovery & Analysis', text: 'Understanding your vision and business requirements through initial consultation, business analysis, feasibility study, competitive research, technology stack recommendation, and project scope definition.' },
    { position: 2, name: 'Planning & Strategy', text: 'Creating detailed roadmap including project timeline, milestone planning, resource allocation, technical architecture design, database and API planning, and risk assessment.' },
    { position: 3, name: 'UI/UX Design', text: 'Crafting beautiful, intuitive user experiences with wireframing, interactive prototypes, visual design, responsive layouts, and client approval process.' },
    { position: 4, name: 'Agile Development', text: 'Building with iterative 2-week sprints, daily stand-ups, code reviews, pair programming, version control with Git, and weekly demo sessions.' },
    { position: 5, name: 'Quality Assurance', text: 'Rigorous testing including unit testing, integration testing, manual and automated QA, security audits, penetration testing, and performance testing.' },
    { position: 6, name: 'Deployment & Launch', text: 'Smooth go-live with production environment setup, database migration, DNS configuration, SSL setup, beta testing, and final deployment with monitoring.' },
    { position: 7, name: 'Support & Maintenance', text: 'Ongoing support including 24/7 technical support, bug fixes, security patches, performance optimization, feature enhancements, and training.' },
  ];

  const howToSchema = generateHowToSchema(howToSteps);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema, howToSchema]} />
      
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            A proven process that delivers results every time
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic, client-centric approach that ensures quality, transparency, and timely delivery.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                desc: 'Understanding your vision and business requirements',
                details: [
                  'Initial consultation and requirement gathering',
                  'Business analysis and feasibility study',
                  'Competitive research and market analysis',
                  'Technology stack recommendation',
                  'Project scope definition and documentation',
                ],
                icon: '🔍',
                duration: '1-2 weeks',
              },
              {
                step: '02',
                title: 'Planning & Strategy',
                desc: 'Creating detailed roadmap and project architecture',
                details: [
                  'Project timeline and milestone planning',
                  'Resource allocation and team assignment',
                  'Technical architecture design',
                  'Database schema and API planning',
                  'Risk assessment and mitigation strategy',
                ],
                icon: '📋',
                duration: '1-2 weeks',
              },
              {
                step: '03',
                title: 'UI/UX Design',
                desc: 'Crafting beautiful, intuitive user experiences',
                details: [
                  'Wireframing and user flow mapping',
                  'Interactive prototype development',
                  'Visual design and branding',
                  'Responsive layout design',
                  'Client review and design approval',
                ],
                icon: '🎨',
                duration: '2-3 weeks',
              },
              {
                step: '04',
                title: 'Agile Development',
                desc: 'Building with iterative sprints and continuous feedback',
                details: [
                  'Sprint-based development (2-week cycles)',
                  'Daily stand-ups and progress tracking',
                  'Code reviews and pair programming',
                  'Version control with Git',
                  'Weekly demo sessions with client',
                ],
                icon: '💻',
                duration: '6-12 weeks',
              },
              {
                step: '05',
                title: 'Quality Assurance',
                desc: 'Rigorous testing for bug-free, secure software',
                details: [
                  'Unit testing and integration testing',
                  'Manual QA and automated testing',
                  'Security audit and penetration testing',
                  'Performance and load testing',
                  'Cross-browser and device testing',
                ],
                icon: '✅',
                duration: '2-3 weeks',
              },
              {
                step: '06',
                title: 'Deployment & Launch',
                desc: 'Smooth go-live with minimal downtime',
                details: [
                  'Production environment setup',
                  'Database migration and optimization',
                  'DNS configuration and SSL setup',
                  'Soft launch and beta testing',
                  'Final deployment and monitoring',
                ],
                icon: '🚀',
                duration: '1 week',
              },
              {
                step: '07',
                title: 'Support & Maintenance',
                desc: 'Ongoing support for continuous improvement',
                details: [
                  '24/7 technical support and monitoring',
                  'Bug fixes and security patches',
                  'Performance optimization',
                  'Feature enhancements and updates',
                  'Training and documentation',
                ],
                icon: '🛠️',
                duration: 'Ongoing',
              },
            ].map((phase, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <div className="flex gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{phase.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                      </div>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{phase.desc}</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < 6 && (
                  <div className="ml-10 mt-6 mb-6 border-l-2 border-dashed border-orange-300 h-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agile Development Methodology</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow agile principles for flexibility, collaboration, and rapid delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: '🔄',
                  title: 'Iterative Development',
                  desc: '2-week sprints with continuous integration and delivery',
                },
                {
                  icon: '🤝',
                  title: 'Client Collaboration',
                  desc: 'Regular demos, feedback sessions, and transparent communication',
                },
                {
                  icon: '⚡',
                  title: 'Rapid Adaptation',
                  desc: 'Quick response to changing requirements and priorities',
                },
                {
                  icon: '📊',
                  title: 'Progress Tracking',
                  desc: 'Real-time dashboards and burndown charts for visibility',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sprint Workflow</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { day: 'Day 1', activity: 'Sprint Planning', desc: 'Define goals and tasks' },
                  { day: 'Day 2-9', activity: 'Development', desc: 'Daily stand-ups, coding' },
                  { day: 'Day 10', activity: 'Sprint Review', desc: 'Demo to stakeholders' },
                  { day: 'Day 11', activity: 'Retrospective', desc: 'Team improvement' },
                  { day: 'Day 12-14', activity: 'Testing & Polish', desc: 'QA and refinement' },
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg font-semibold text-sm mb-2">
                      {step.day}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{step.activity}</h4>
                    <p className="text-gray-600 text-xs">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Communication & Collaboration</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent, frequent communication ensures alignment and trust throughout the project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Daily Updates',
                  items: [
                    'Daily stand-up meetings (15 min)',
                    'Progress reports via email/Slack',
                    'Task tracking in Jira/Trello',
                    'Code commits and pull requests',
                  ],
                  icon: '📅',
                  color: 'blue',
                },
                {
                  title: 'Weekly Demos',
                  items: [
                    'Live demo of completed features',
                    'Feedback and priority discussion',
                    'Sprint planning for next cycle',
                    'Video recordings for reference',
                  ],
                  icon: '🎥',
                  color: 'green',
                },
                {
                  title: 'Milestone Reviews',
                  items: [
                    'Major feature completion review',
                    'Performance and security audit',
                    'Client acceptance testing',
                    'Documentation and handover',
                  ],
                  icon: '🎯',
                  color: 'purple',
                },
              ].map((col, i) => (
                <div key={i} className={`bg-${col.color}-50 rounded-xl p-6 border-2 border-${col.color}-200`}>
                  <div className="text-5xl mb-4">{col.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tools & Technologies We Use</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry-leading tools for efficient collaboration and high-quality delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  category: 'Project Management',
                  tools: ['Jira', 'Trello', 'Asana', 'Monday.com'],
                  icon: '📊',
                },
                {
                  category: 'Communication',
                  tools: ['Slack', 'Microsoft Teams', 'Zoom', 'Google Meet'],
                  icon: '💬',
                },
                {
                  category: 'Version Control',
                  tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
                  icon: '🔀',
                },
                {
                  category: 'Design',
                  tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
                  icon: '🎨',
                },
                {
                  category: 'CI/CD',
                  tools: ['Jenkins', 'GitHub Actions', 'CircleCI', 'GitLab CI'],
                  icon: '🔄',
                },
                {
                  category: 'Testing',
                  tools: ['Jest', 'Selenium', 'Cypress', 'Postman'],
                  icon: '🧪',
                },
                {
                  category: 'Monitoring',
                  tools: ['New Relic', 'Datadog', 'Sentry', 'LogRocket'],
                  icon: '📈',
                },
                {
                  category: 'Documentation',
                  tools: ['Confluence', 'Notion', 'GitBook', 'Swagger'],
                  icon: '📚',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Assurance Standards</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multi-layered QA process ensuring bug-free, secure, and performant software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Code Quality',
                  checks: [
                    'Code review by senior developers',
                    'Static code analysis (SonarQube)',
                    'Coding standards compliance',
                    'Performance profiling',
                    'Technical debt tracking',
                  ],
                  icon: '💻',
                },
                {
                  title: 'Functional Testing',
                  checks: [
                    'Unit testing (80%+ coverage)',
                    'Integration testing',
                    'End-to-end testing',
                    'Regression testing',
                    'User acceptance testing',
                  ],
                  icon: '✅',
                },
                {
                  title: 'Security Testing',
                  checks: [
                    'OWASP Top 10 vulnerability scan',
                    'Penetration testing',
                    'SQL injection prevention',
                    'XSS and CSRF protection',
                    'Data encryption validation',
                  ],
                  icon: '🔒',
                },
                {
                  title: 'Performance Testing',
                  checks: [
                    'Load testing (1000+ concurrent users)',
                    'Stress testing and peak load',
                    'Page load speed optimization',
                    'Database query optimization',
                    'API response time monitoring',
                  ],
                  icon: '⚡',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.checks.map((check, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Process Works</h2>
              <p className="text-lg text-orange-100 max-w-3xl mx-auto">
                Proven results backed by 10+ years of experience and 500+ successful projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '95%', label: 'Client Satisfaction', icon: '😊' },
                { metric: '98%', label: 'On-Time Delivery', icon: '⏰' },
                { metric: '99.9%', label: 'Uptime Guarantee', icon: '🚀' },
                { metric: '500+', label: 'Projects Delivered', icon: '✨' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your requirements and create a customized development plan that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors inline-block"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

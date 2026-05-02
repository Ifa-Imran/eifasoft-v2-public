import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Maintenance & Support Services | Bug Fixes & Updates | EifaSoft',
    description: 'Reliable software maintenance and support services: bug fixes, security patches, performance optimization, 24/7 monitoring, and technical support. Monthly plans from ₹15,000.',
    canonical: '/software-maintenance-support',
    keywords: [
      'software maintenance services', 'software support services', 'bug fixing service',
      'software update service', 'application maintenance', 'software AMC India',
      'software annual maintenance contract', 'performance optimization service',
      'security patch management', 'software monitoring', '24/7 software support',
      'legacy software maintenance', 'website maintenance', 'app maintenance service',
      'software support company India', 'software maintenance company Moradabad',
      'technical support service', 'software upgrade service', 'database maintenance',
      'uptime monitoring service', 'software error fixing', 'outsourced software maintenance',
    ],
  });
}

const faqs = [
  {
    question: 'What is included in software maintenance and support?',
    answer: 'Our maintenance covers: bug fixes and error resolution, security patches and vulnerability updates, framework and dependency upgrades, performance optimization (speed, database tuning), uptime monitoring with alerts, monthly performance reports, and technical support via email, phone, and WhatsApp. Enterprise plans include feature development and SLA guarantees.',
  },
  {
    question: 'How much does software maintenance cost?',
    answer: 'Basic plan starts at ₹15,000/month (8 hours, email support, uptime monitoring). Pro plan is ₹35,000/month (20 hours, phone support, priority response). Enterprise plan is ₹75,000/month (50 hours, 24/7 support, dedicated engineer, SLA guarantee, feature development). All plans are monthly with no lock-in contract.',
  },
  {
    question: 'What is the response time for critical issues?',
    answer: 'Response times by plan: Basic — 24 hours for non-critical, same day for critical issues. Pro — 8 hours response with priority handling. Enterprise — 1 hour response with dedicated engineer. All plans include emergency escalation for site-down scenarios. We aim to resolve critical issues within 4 hours regardless of plan.',
  },
  {
    question: 'Do you maintain software built by other companies?',
    answer: 'Yes. We maintain software regardless of who built it. We first conduct a code audit (typically 1-2 days) to understand the codebase, document it, and identify risks. After the audit, we provide a maintenance plan recommendation. We have experience with Laravel, Django, Node.js, React, .NET, PHP, and most modern technology stacks.',
  },
  {
    question: 'What technology stacks do you support?',
    answer: 'We support: Frontend — React, Next.js, Vue.js, Angular, HTML/CSS/JS. Backend — Node.js, Laravel/PHP, Django/Python, .NET, Java Spring. Mobile — Flutter, React Native, iOS (Swift), Android (Kotlin). Databases — MySQL, PostgreSQL, MongoDB, Redis. Cloud — AWS, Azure, DigitalOcean. We stay current with latest framework versions.',
  },
  {
    question: 'Can you help migrate our software to newer technology?',
    answer: 'Yes. Technology migration is part of our maintenance offering. We handle: PHP 7 to PHP 8, AngularJS to Angular/React, deprecated library updates, database version upgrades, server migrations, and cloud migrations. We create detailed migration plans with rollback strategies to ensure zero downtime.',
  },
];

export default function SoftwareMaintenanceSupport() {
  const services = [
    {
      icon: '🔧',
      title: 'Bug Fixes & Troubleshooting',
      description: 'Quick resolution of bugs and technical issues to keep your software running smoothly',
      features: ['Critical Bug Fixes', 'Performance Issues', 'Error Resolution', '24/7 Emergency Support'],
    },
    {
      icon: '🔄',
      title: 'Software Updates & Patches',
      description: 'Regular updates to keep your software secure, stable, and feature-rich',
      features: ['Security Patches', 'Framework Updates', 'Dependency Management', 'Version Upgrades'],
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization for peak performance',
      features: ['Speed Optimization', 'Database Tuning', 'Code Refactoring', 'Resource Optimization'],
    },
    {
      icon: '🔐',
      title: 'Security Maintenance',
      description: 'Proactive security measures to protect your application',
      features: ['Vulnerability Scanning', 'Security Audits', 'SSL Management', 'Backup Monitoring'],
    },
    {
      icon: '📊',
      title: 'Monitoring & Reporting',
      description: 'Real-time monitoring with detailed analytics and reports',
      features: ['Uptime Monitoring', 'Performance Metrics', 'Error Tracking', 'Monthly Reports'],
    },
    {
      icon: '💬',
      title: 'Technical Support',
      description: 'Expert assistance for your team and end-users',
      features: ['Email Support', 'Phone Support', 'Live Chat', 'Remote Assistance'],
    },
  ];

  const maintenanceTypes = [
    {
      type: 'Corrective Maintenance',
      icon: '🔨',
      description: 'Fixing bugs and errors discovered after deployment',
      examples: ['Bug fixes', 'Error corrections', 'Issue resolution', 'Crash fixes'],
    },
    {
      type: 'Adaptive Maintenance',
      icon: '🔄',
      description: 'Adapting software to changing environments',
      examples: ['OS updates', 'Browser compatibility', 'Third-party integrations', 'Platform migrations'],
    },
    {
      type: 'Perfective Maintenance',
      icon: '✨',
      description: 'Improving performance and adding new features',
      examples: ['Performance tuning', 'Feature enhancements', 'UI improvements', 'Code optimization'],
    },
    {
      type: 'Preventive Maintenance',
      icon: '🛡️',
      description: 'Preventing future issues through proactive measures',
      examples: ['Security updates', 'Code refactoring', 'Documentation', 'Testing automation'],
    },
  ];

  const supportPlans = [
    {
      name: 'Basic Support',
      price: '₹15,000/mo',
      hours: '10 hours/month',
      features: [
        '10 Support Hours per Month',
        'Email Support (24h response)',
        'Bug Fixes & Minor Updates',
        'Monthly Performance Report',
        'Backup Monitoring',
        'Business Hours Support',
      ],
      color: 'from-blue-500 to-blue-600',
      responseTime: '24 hours',
    },
    {
      name: 'Professional Support',
      price: '₹35,000/mo',
      hours: '25 hours/month',
      features: [
        '25 Support Hours per Month',
        'Email & Phone Support (8h response)',
        'Priority Bug Fixes',
        'Security Updates',
        'Performance Optimization',
        'Bi-weekly Reports',
        'Extended Hours Support',
        'Rollover Hours (max 10)',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
      responseTime: '8 hours',
    },
    {
      name: 'Enterprise Support',
      price: '₹75,000+/mo',
      hours: 'Unlimited',
      features: [
        'Unlimited Support Hours',
        '24/7 Phone & Chat Support',
        'Dedicated Support Engineer',
        'Immediate Critical Fixes',
        'Proactive Monitoring',
        'Weekly Reports & Reviews',
        'Feature Development',
        'SLA Guarantee (99.9%)',
        'On-site Support Available',
      ],
      color: 'from-green-500 to-green-600',
      responseTime: '1 hour',
    },
  ];

  const supportChannels = [
    { icon: '📧', name: 'Email Support', desc: 'support@eifasoft.com', availability: 'All plans' },
    { icon: '📞', name: 'Phone Support', desc: '+91 98975 55569', availability: 'Pro & Enterprise' },
    { icon: '💬', name: 'Live Chat', desc: 'Real-time assistance', availability: 'Enterprise' },
    { icon: '🖥️', name: 'Remote Desktop', desc: 'Screen sharing support', availability: 'All plans' },
    { icon: '📱', name: 'WhatsApp', desc: 'Quick updates & queries', availability: 'All plans' },
    { icon: '🎫', name: 'Ticketing System', desc: 'Track all requests', availability: 'All plans' },
  ];

  const whyChooseUs = [
    {
      icon: '⏱️',
      title: 'Fast Response Time',
      stat: '< 8 hours',
      description: 'Quick response to your support requests with priority handling for critical issues',
    },
    {
      icon: '👨‍💻',
      title: 'Expert Team',
      stat: '50+ Engineers',
      description: 'Experienced developers and support engineers across all technologies',
    },
    {
      icon: '📈',
      title: 'High Availability',
      stat: '99.9% Uptime',
      description: 'Proactive monitoring ensures your software is always available',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      stat: 'Save 60%',
      description: 'More affordable than hiring full-time developers with flexible plans',
    },
    {
      icon: '🔄',
      title: 'Flexible Plans',
      stat: 'No Lock-in',
      description: 'Monthly contracts with the freedom to upgrade, downgrade, or cancel',
    },
    {
      icon: '✅',
      title: 'Proven Track Record',
      stat: '200+ Clients',
      description: 'Successfully maintaining software for businesses worldwide',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Software Maintenance & Support Services',
    'Comprehensive software maintenance including bug fixes, security patches, performance optimization, 24/7 monitoring, technical support, and regular updates for web and mobile applications.'
  );

  const productSchema = generateProductSchema(
    'Software Maintenance Package',
    'Monthly software maintenance plan covering bug fixes, security updates, performance optimization, uptime monitoring, and technical support for your applications.',
    '15000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Maintenance & Support', url: '/software-maintenance-support' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Code Audit', text: 'Review codebase, identify bugs, security vulnerabilities, and performance issues', position: 1 },
    { name: 'Issue Prioritization', text: 'Categorize issues by severity and business impact for systematic resolution', position: 2 },
    { name: 'Bug Fixing', text: 'Resolve critical bugs and errors with thorough testing and validation', position: 3 },
    { name: 'Security Updates', text: 'Apply security patches, update dependencies, and harden application security', position: 4 },
    { name: 'Performance Optimization', text: 'Optimize code, database queries, and infrastructure for better performance', position: 5 },
    { name: 'Documentation & Reporting', text: 'Update documentation and provide detailed reports on all maintenance activities', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Deepak Sharma', rating: 5, reviewBody: 'Their 24/7 support has been invaluable. Critical issues are resolved within hours, not days. The Pro plan gives us peace of mind.' },
    { author: 'Anjali Verma', rating: 5, reviewBody: 'They took over maintenance of our legacy PHP application. Security updates, performance improvements - everything is handled professionally.' },
    { author: 'Rajat Singh', rating: 5, reviewBody: '40% cost savings compared to our in-house team. The dedicated support engineer understands our system inside out. Highly recommended!' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="Software Maintenance & Support"
        subtitle="Keep Your Software Running Perfectly"
        description="Expert software maintenance with bug fixes, security patches, performance optimization, and 24/7 monitoring. Keep your applications secure, stable, and up-to-date."
        ctaPrimary={{ text: 'Get Support Now', href: '/contact' }}
        ctaSecondary={{ text: 'View Plans', href: '/contact' }}
        gradient="blue"
      />

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Maintenance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to keep your software secure, stable, and up-to-date
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-green-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Software Maintenance</h2>
            <p className="text-xl text-gray-600">
              Comprehensive maintenance coverage for all aspects of your software
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{type.type}</h3>
                <p className="text-gray-600 mb-4 text-sm text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-600">▪</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Support Channels</h2>
            <p className="text-xl text-gray-600">
              Reach us through your preferred communication channel
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-4xl mb-3 text-center">{channel.icon}</div>
                <h3 className="font-bold text-gray-900 text-center mb-2">{channel.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-2">{channel.desc}</p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {channel.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Support Services?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                  <span className="text-2xl font-bold text-green-600">{reason.stat}</span>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Plans & Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that matches your support needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90 mb-2">{plan.hours}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Response: {plan.responseTime}</span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p>All plans include rollover of unused hours (up to 50% of monthly quota)</p>
            <p className="mt-2">Custom enterprise plans available for large-scale applications</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Software Maintenance & Support" />
        </div>
      </section>
    </main>
  );
}

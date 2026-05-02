import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'DevOps & Cloud Services | CI/CD, AWS, Azure, Kubernetes | EifaSoft',
    description: 'Professional DevOps and cloud infrastructure services: CI/CD pipelines, Docker, Kubernetes, AWS/Azure/GCP, monitoring, and disaster recovery. Starting at ₹50,000.',
    canonical: '/devops-cloud-services',
    keywords: [
      'DevOps services', 'cloud infrastructure', 'CI/CD pipeline', 'Docker Kubernetes',
      'AWS cloud services', 'Azure cloud', 'GCP Google Cloud', 'cloud migration',
      'DevOps consulting India', 'infrastructure automation', 'cloud infrastructure setup',
      'container orchestration', 'microservices infrastructure', 'cloud monitoring',
      'site reliability engineering', 'DevOps company India', 'cloud deployment',
      'Terraform infrastructure', 'Helm charts', 'cloud security', 'cloud cost optimization',
      'DevOps automation',
    ],
  });
}

const faqs = [
  {
    question: 'What DevOps services does EifaSoft provide?',
    answer: 'We provide end-to-end DevOps services including CI/CD pipeline setup (GitHub Actions, Jenkins, GitLab CI), cloud infrastructure on AWS/Azure/GCP, Docker containerization, Kubernetes orchestration, monitoring with Prometheus/Grafana, ELK Stack logging, SSL/security hardening, automated backups, and disaster recovery planning.',
  },
  {
    question: 'Which cloud platforms do you support?',
    answer: 'We support all major cloud platforms: AWS (EC2, RDS, S3, Lambda, ECS, EKS), Microsoft Azure (AKS, Azure DevOps, App Service), and Google Cloud Platform (GKE, Cloud Run, Firebase). We also work with DigitalOcean, Linode, and on-premise Kubernetes clusters.',
  },
  {
    question: 'How much do DevOps and cloud services cost?',
    answer: 'Startup cloud setup starts at ₹50,000 one-time + ₹10,000/month. Business cloud with multi-region, Kubernetes, and advanced monitoring is ₹1,25,000 setup + ₹25,000/month. Enterprise plans are custom-priced. Monthly retainer includes infrastructure management, security updates, scaling, and 24/7 monitoring.',
  },
  {
    question: 'How long does CI/CD pipeline setup take?',
    answer: 'Basic CI/CD pipeline (build, test, deploy to single environment) takes 3-5 days. Full multi-environment pipeline with staging, production, rollback, and notifications takes 1-2 weeks. Container-based pipelines with Docker and Kubernetes typically take 2-3 weeks including cluster setup.',
  },
  {
    question: 'Can you migrate our existing infrastructure to the cloud?',
    answer: 'Yes. We perform cloud migrations using the 6Rs strategy: Rehost (lift-and-shift), Replatform, Refactor, Repurchase, Retire, or Retain. We start with a thorough audit of your current infrastructure, create a migration roadmap, execute with zero-downtime strategies, and optimize for cost and performance post-migration.',
  },
  {
    question: 'What monitoring tools do you set up?',
    answer: 'We implement comprehensive monitoring stacks: Prometheus + Grafana for metrics and dashboards, ELK Stack (Elasticsearch, Logstash, Kibana) for log management, CloudWatch/Azure Monitor for cloud-native alerts, Sentry for application error tracking, and Uptime Robot for public availability monitoring with PagerDuty alerts.',
  },
];

export default function DevOpsCloudServices() {
  const services = [
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure on AWS, Azure, or GCP',
      features: ['Auto-scaling Setup', 'Load Balancing', 'CDN Configuration', 'Multi-region Deployment'],
    },
    {
      icon: '🔄',
      title: 'CI/CD Pipeline',
      description: 'Automated build, test, and deployment pipelines for faster releases',
      features: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Automated Testing'],
    },
    {
      icon: '🐳',
      title: 'Containerization',
      description: 'Docker and Kubernetes orchestration for microservices',
      features: ['Docker Setup', 'Kubernetes Cluster', 'Helm Charts', 'Service Mesh'],
    },
    {
      icon: '📊',
      title: 'Monitoring & Logging',
      description: 'Real-time monitoring, alerting, and log management',
      features: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
    },
    {
      icon: '🔐',
      title: 'Security & Compliance',
      description: 'Implement security best practices and compliance standards',
      features: ['SSL/TLS Setup', 'Firewall Configuration', 'Vulnerability Scanning', 'Compliance Audits'],
    },
    {
      icon: '💾',
      title: 'Backup & Disaster Recovery',
      description: 'Automated backup solutions and disaster recovery planning',
      features: ['Automated Backups', 'Point-in-time Recovery', 'Cross-region Replication', 'DR Testing'],
    },
  ];

  const cloudPlatforms = [
    { name: 'AWS', icon: '☁️', services: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront', 'Route 53'] },
    { name: 'Azure', icon: '☁️', services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions', 'CDN', 'DNS'] },
    { name: 'Google Cloud', icon: '☁️', services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'Cloud CDN', 'Cloud DNS'] },
    { name: 'DigitalOcean', icon: '🌊', services: ['Droplets', 'Spaces', 'Managed Databases', 'App Platform', 'Load Balancers', 'DNS'] },
  ];

  const devopsTools = [
    { name: 'Docker', icon: '🐳', category: 'Container' },
    { name: 'Kubernetes', icon: '☸️', category: 'Orchestration' },
    { name: 'Jenkins', icon: '🔧', category: 'CI/CD' },
    { name: 'GitHub Actions', icon: '⚙️', category: 'CI/CD' },
    { name: 'Terraform', icon: '🏗️', category: 'IaC' },
    { name: 'Ansible', icon: '📜', category: 'Configuration' },
    { name: 'Prometheus', icon: '📊', category: 'Monitoring' },
    { name: 'Grafana', icon: '📈', category: 'Visualization' },
    { name: 'Nginx', icon: '🟢', category: 'Web Server' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'ELK Stack', icon: '🔍', category: 'Logging' },
    { name: 'Git', icon: '📦', category: 'Version Control' },
  ];

  const packages = [
    {
      name: 'Startup Cloud',
      price: '₹50,000',
      duration: 'One-time + Monthly',
      monthly: '₹10,000/mo',
      features: [
        'Cloud Infrastructure Setup',
        'Single Region Deployment',
        'Basic CI/CD Pipeline',
        'SSL Certificate Setup',
        'Basic Monitoring',
        'Email Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Business Cloud',
      price: '₹1,25,000',
      duration: 'One-time + Monthly',
      monthly: '₹25,000/mo',
      features: [
        'Multi-region Deployment',
        'Advanced CI/CD Pipeline',
        'Container Orchestration',
        'Comprehensive Monitoring',
        'Auto-scaling Setup',
        'Backup & Recovery',
        'Security Hardening',
        'Priority Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Cloud',
      price: '₹2,50,000+',
      duration: 'One-time + Monthly',
      monthly: '₹50,000+/mo',
      features: [
        'Global Infrastructure',
        'Zero-downtime Deployment',
        'Advanced Security',
        'Disaster Recovery',
        'Performance Optimization',
        'Custom Monitoring Dashboards',
        'Compliance Management',
        '24/7 Dedicated Support',
        'DevOps Consulting',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Faster Deployment',
      description: 'Reduce deployment time from days to minutes with automated CI/CD pipelines',
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Save up to 40% on infrastructure costs with right-sizing and auto-scaling',
    },
    {
      icon: '📈',
      title: 'Improved Reliability',
      description: '99.9% uptime with load balancing, auto-healing, and disaster recovery',
    },
    {
      icon: '🔒',
      title: 'Enhanced Security',
      description: 'Bank-level security with encryption, firewalls, and regular security audits',
    },
    {
      icon: '📊',
      title: 'Better Visibility',
      description: 'Real-time insights into application performance and infrastructure health',
    },
    {
      icon: '🚀',
      title: 'Scalability',
      description: 'Handle traffic spikes effortlessly with automatic scaling capabilities',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'DevOps & Cloud Services',
    'End-to-end DevOps and cloud infrastructure services: CI/CD pipelines, Docker and Kubernetes orchestration, AWS/Azure/GCP deployment, security hardening, monitoring, and disaster recovery.'
  );

  const productSchema = generateProductSchema(
    'DevOps Cloud Infrastructure Package',
    'Complete DevOps setup with CI/CD pipeline, containerization, cloud deployment, monitoring, and ongoing management for your business applications.',
    '50000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'DevOps & Cloud Services', url: '/devops-cloud-services' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Infrastructure Assessment', text: 'Analyze current infrastructure, identify gaps, and create a cloud migration strategy', position: 1 },
    { name: 'Architecture Design', text: 'Design scalable, secure cloud architecture with high availability and disaster recovery', position: 2 },
    { name: 'CI/CD Pipeline Setup', text: 'Implement automated build, test, and deployment pipelines for faster releases', position: 3 },
    { name: 'Containerization', text: 'Deploy Docker containers and Kubernetes orchestration for microservices', position: 4 },
    { name: 'Monitoring & Alerting', text: 'Set up Prometheus, Grafana, and logging for real-time visibility', position: 5 },
    { name: 'Security & Compliance', text: 'Implement security hardening, SSL, and compliance frameworks', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Amit Kumar', rating: 5, reviewBody: 'EifaSoft set up our entire Kubernetes cluster with CI/CD pipelines. Deployment time reduced from hours to minutes. Exceptional DevOps expertise!' },
    { author: 'Neha Singh', rating: 5, reviewBody: 'Migrated our on-premise infrastructure to AWS with zero downtime. The team handled everything from architecture to monitoring. Highly professional!' },
    { author: 'Rohit Gupta', rating: 5, reviewBody: 'Their DevOps consulting helped us achieve 99.9% uptime and 40% cost reduction. The automated scaling and monitoring are game-changers.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="DevOps & Cloud Services"
        subtitle="Infrastructure That Scales"
        description="Accelerate your software delivery with modern DevOps practices. CI/CD automation, container orchestration, AWS/Azure/GCP infrastructure, and 24/7 monitoring."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="blue"
      />

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DevOps & Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end DevOps solutions to streamline your development and operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-500"
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

      {/* Cloud Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Platforms We Support</h2>
            <p className="text-xl text-gray-600">
              Expertise across all major cloud providers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                  <ul className="space-y-2 text-left">
                    {platform.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-blue-600">▪</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Tools & Technologies</h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools for automation and orchestration
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {devopsTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our DevOps Services?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps & Cloud Pricing</h2>
            <p className="text-xl text-gray-600">Flexible plans to match your infrastructure needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
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
                  <p className="text-sm opacity-90 mb-1">{plan.duration}</p>
                  <p className="text-lg font-semibold">{plan.monthly}</p>
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
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="DevOps & Cloud Services" />
        </div>
      </section>
    </main>
  );
}

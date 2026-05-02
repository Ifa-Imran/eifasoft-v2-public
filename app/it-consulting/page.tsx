import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'IT Consulting Services | Digital Transformation & Strategy | EifaSoft',
    description: 'Strategic IT consulting for digital transformation, cloud migration, cybersecurity, ERP/CRM implementation, and technology roadmaps. Expert IT advisors. Free initial consultation.',
    canonical: '/it-consulting',
    keywords: [
      'IT consulting services', 'digital transformation consulting', 'IT strategy planning',
      'cloud migration consulting', 'cybersecurity consulting', 'ERP consulting',
      'CRM consulting', 'solution architecture', 'technology advisory',
      'IT consulting company India', 'business process optimization', 'IT roadmap',
      'legacy system modernization', 'IT audit', 'enterprise IT consulting',
      'IT consulting Moradabad', 'IT consulting UP', 'software architecture consulting',
      'vendor selection consulting', 'IT cost optimization', 'digital strategy',
      'technology feasibility study',
    ],
  });
}

const faqs = [
  {
    question: 'What does IT consulting cover?',
    answer: 'IT consulting covers digital transformation strategy, cloud migration planning, cybersecurity audits, ERP/CRM selection and implementation, solution architecture design, technology stack evaluation, vendor selection, IT budget planning, and business process optimization. We align technology decisions with your specific business goals.',
  },
  {
    question: 'How much do IT consulting services cost?',
    answer: 'Project-based consulting starts at ₹60,000 for a focused engagement (assessment + recommendations). Monthly advisory retainers range from ₹75,000 to ₹1,50,000/month. Enterprise consulting with dedicated resources is custom-priced. We offer a free 1-hour initial consultation to understand your needs.',
  },
  {
    question: 'What is digital transformation and how long does it take?',
    answer: 'Digital transformation is systematically adopting digital technologies to improve operations, customer experience, and business models. Scope varies widely: a single department transformation takes 3-6 months, company-wide transformation takes 1-3 years. We build phased roadmaps so you see value at each stage rather than waiting years for results.',
  },
  {
    question: 'Do you help with cloud migration strategy?',
    answer: 'Yes. We assess your current infrastructure, classify workloads using the 6Rs (Rehost, Replatform, Refactor, Repurchase, Retire, Retain), create a migration roadmap, estimate costs, and manage risk. We provide platform-neutral advice across AWS, Azure, and GCP to ensure the best fit for your budget and technical requirements.',
  },
  {
    question: 'Can you help select the right ERP or CRM system?',
    answer: 'Absolutely. We conduct requirements workshops, evaluate vendors (SAP, Oracle, Microsoft Dynamics, Zoho, Salesforce, custom solutions), analyze TCO, and provide a vendor-neutral recommendation. We also manage implementation projects to ensure on-time, on-budget delivery with proper change management.',
  },
  {
    question: 'What industries do you serve for IT consulting?',
    answer: 'We serve manufacturing, retail, healthcare, education, financial services, logistics, real estate, and government sectors. Our consultants bring deep domain expertise in UP and North Indian industries including textile, handicrafts, pharmaceuticals, and agricultural processing.',
  },
];

export default function ITConsulting() {
  const consultingServices = [
    {
      icon: '🎯',
      title: 'Digital Transformation',
      description: 'Guide your business through digital transformation with strategic technology adoption',
      features: ['Technology Roadmap', 'Process Automation', 'Cloud Migration Strategy', 'Legacy System Modernization'],
    },
    {
      icon: '📊',
      title: 'IT Strategy & Planning',
      description: 'Develop comprehensive IT strategies aligned with your business goals',
      features: ['Technology Assessment', 'Budget Planning', 'Risk Management', 'Vendor Selection'],
    },
    {
      icon: '🏗️',
      title: 'Solution Architecture',
      description: 'Design scalable and robust architecture for your software systems',
      features: ['System Design', 'Microservices Architecture', 'Database Design', 'Integration Planning'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Consulting',
      description: 'Protect your business with comprehensive security strategies',
      features: ['Security Audit', 'Vulnerability Assessment', 'Compliance Consulting', 'Incident Response'],
    },
    {
      icon: '📈',
      title: 'Business Process Optimization',
      description: 'Streamline operations with technology-driven process improvements',
      features: ['Workflow Analysis', 'Automation Strategy', 'ERP Consulting', 'CRM Implementation'],
    },
    {
      icon: '💡',
      title: 'Technology Advisory',
      description: 'Expert guidance on technology selection and implementation',
      features: ['Tech Stack Selection', 'Build vs Buy Analysis', 'Proof of Concept', 'Feasibility Studies'],
    },
  ];

  const industries = [
    { name: 'E-Commerce', icon: '🛒', expertise: 'Payment gateways, inventory management, customer analytics' },
    { name: 'Healthcare', icon: '🏥', expertise: 'HIPAA compliance, patient management, telemedicine' },
    { name: 'Finance', icon: '💰', expertise: 'Banking systems, fraud detection, compliance' },
    { name: 'Education', icon: '🎓', expertise: 'Learning management, student portals, online courses' },
    { name: 'MLM & Network Marketing', icon: '🔗', expertise: 'Compensation plans, member management, genealogy' },
    { name: 'Manufacturing', icon: '🏭', expertise: 'Supply chain, inventory, quality control' },
  ];

  const consultingAreas = [
    {
      title: 'Technology Assessment',
      items: ['Current Infrastructure Audit', 'Technology Gap Analysis', 'Performance Evaluation', 'Security Review'],
    },
    {
      title: 'Strategic Planning',
      items: ['3-5 Year IT Roadmap', 'Budget Optimization', 'Resource Allocation', 'Risk Mitigation'],
    },
    {
      title: 'Implementation Support',
      items: ['Project Management', 'Team Training', 'Change Management', 'Quality Assurance'],
    },
    {
      title: 'Ongoing Advisory',
      items: ['Technology Trends', 'Best Practices', 'Performance Monitoring', 'Continuous Improvement'],
    },
  ];

  const packages = [
    {
      name: 'One-Time Consultation',
      price: '₹25,000',
      duration: '1-2 Sessions',
      features: [
        '2-4 Hour Consultation',
        'Technology Assessment',
        'Recommendations Report',
        'Action Plan',
        'Email Follow-up',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Monthly Retainer',
      price: '₹75,000/mo',
      duration: 'Monthly',
      features: [
        '8-10 Hours per Month',
        'Strategic Planning',
        'Technology Guidance',
        'Architecture Review',
        'Team Training',
        'Priority Support',
        'Monthly Reports',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise Advisory',
      price: 'Custom',
      duration: 'Quarterly/Yearly',
      features: [
        'Dedicated Consultant',
        'Comprehensive IT Strategy',
        'Digital Transformation',
        'Vendor Management',
        'Budget Optimization',
        'Compliance Support',
        '24/7 Advisory Access',
        'Quarterly Reviews',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery',
      desc: 'Understand your business, challenges, and objectives through detailed discussions',
    },
    {
      step: 2,
      title: 'Assessment',
      desc: 'Analyze current infrastructure, processes, and technology landscape',
    },
    {
      step: 3,
      title: 'Strategy',
      desc: 'Develop comprehensive recommendations and strategic roadmap',
    },
    {
      step: 4,
      title: 'Planning',
      desc: 'Create detailed implementation plan with timelines and milestones',
    },
    {
      step: 5,
      title: 'Execution Support',
      desc: 'Guide implementation with ongoing advisory and problem-solving',
    },
    {
      step: 6,
      title: 'Review & Optimize',
      desc: 'Continuous monitoring and optimization for sustained success',
    },
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: '15+ Years Experience',
      description: 'Extensive experience across diverse industries and technologies',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Certified consultants with deep technical and business expertise',
    },
    {
      icon: '📊',
      title: 'Data-Driven Approach',
      description: 'Recommendations backed by thorough analysis and industry research',
    },
    {
      icon: '💼',
      title: 'Business Focus',
      description: 'Technology solutions aligned with your business objectives',
    },
    {
      icon: '🔄',
      title: 'Vendor Neutral',
      description: 'Unbiased recommendations focused on your best interests',
    },
    {
      icon: '✅',
      title: 'Proven Results',
      description: '100+ successful consulting engagements across industries',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'IT Consulting Services',
    'Strategic IT consulting for digital transformation, cloud migration, cybersecurity, ERP/CRM implementation, solution architecture, and technology roadmap planning.'
  );

  const productSchema = generateProductSchema(
    'IT Consulting Package',
    'Comprehensive IT consulting: technology assessment, digital transformation strategy, cloud migration plan, vendor selection, and implementation roadmap for your business.',
    '60000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'IT Consulting', url: '/it-consulting' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Discovery', text: 'Understand your business, challenges, and objectives through detailed discussions', position: 1 },
    { name: 'Assessment', text: 'Analyze current infrastructure, processes, and technology landscape', position: 2 },
    { name: 'Strategy', text: 'Develop comprehensive recommendations and strategic roadmap', position: 3 },
    { name: 'Planning', text: 'Create detailed implementation plan with timelines and milestones', position: 4 },
    { name: 'Execution Support', text: 'Guide implementation with ongoing advisory and problem-solving', position: 5 },
    { name: 'Review & Optimize', text: 'Continuous monitoring and optimization for sustained success', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Dr. Ramesh Kumar', rating: 5, reviewBody: 'EifaSoft helped us digitize our hospital operations. Their IT consulting was invaluable - from ERP selection to implementation, they guided us every step.' },
    { author: 'Kavita Sharma', rating: 5, reviewBody: 'Their digital transformation strategy helped us reduce operational costs by 35%. The team understands both technology and business deeply.' },
    { author: 'Sanjay Agarwal', rating: 5, reviewBody: 'Vendor-neutral advice made all the difference. They helped us choose the right ERP and negotiated better deals. Excellent ROI on their consulting fees.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="IT Consulting Services"
        subtitle="Digital Transformation & Strategy"
        description="Strategic technology guidance to accelerate your business growth. Digital transformation, cloud migration, cybersecurity, ERP/CRM advisory — vendor-neutral, results-driven."
        ctaPrimary={{ text: 'Book Consultation', href: '/contact' }}
        ctaSecondary={{ text: 'View Case Studies', href: '/portfolio' }}
        gradient="blue"
      />

      {/* Consulting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to solve your technology challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-indigo-500"
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

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Deep domain expertise across multiple sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{industry.name}</h3>
                <p className="text-gray-600 text-center text-sm">{industry.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Approach</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-indigo-600">▪</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
            <p className="text-xl text-gray-600">Structured approach to deliver maximum value</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 last:border-l-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600">Flexible engagement models to suit your needs</p>
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
                  <p className="text-sm opacity-90">{plan.duration}</p>
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
                    Book Consultation
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
          <ContactForm serviceName="IT Consulting" />
        </div>
      </section>
    </main>
  );
}

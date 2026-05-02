import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'AI Consulting Services India | AI Strategy & Implementation | EifaSoft',
    description: 'Expert AI consulting services in India. AI strategy development, maturity assessment, roadmap planning, vendor selection, and implementation guidance. Transform your business with AI. Starting ₹1,49,999.',
    canonical: '/ai-consulting',
    keywords: [
      'AI consulting services', 'AI consulting India', 'AI strategy consulting',
      'AI implementation consulting', 'AI transformation', 'AI readiness assessment',
      'AI roadmap development', 'enterprise AI consulting', 'AI advisory services',
      'machine learning consulting', 'AI vendor selection', 'AI governance',
      'AI ethics consulting', 'AI maturity assessment', 'digital transformation AI',
      'AI business strategy', 'AI use case identification', 'AI ROI assessment',
    ],
  });
}

export default function AIConsulting() {
  const services = [
    {
      icon: '🎯',
      title: 'AI Strategy Development',
      desc: 'Create a comprehensive AI roadmap aligned with business objectives',
      deliverables: ['AI vision & mission statement', 'Strategic priorities identification', '3-year AI roadmap', 'Investment requirements', 'Success metrics & KPIs'],
    },
    {
      icon: '📊',
      title: 'AI Maturity Assessment',
      desc: 'Evaluate your organization\'s readiness for AI adoption',
      deliverables: ['Current state analysis', 'Data infrastructure audit', 'Skills gap assessment', 'Technology stack review', 'Maturity score & benchmarking'],
    },
    {
      icon: '💡',
      title: 'Use Case Identification',
      desc: 'Discover high-impact AI opportunities across your business',
      deliverables: ['Process mapping & analysis', 'AI opportunity matrix', 'ROI projections per use case', 'Prioritization framework', 'Quick win recommendations'],
    },
    {
      icon: '🔧',
      title: 'Vendor & Technology Selection',
      desc: 'Choose the right AI tools and partners for your needs',
      deliverables: ['Requirements specification', 'Vendor landscape analysis', 'RFP development', 'Evaluation scorecard', 'Negotiation support'],
    },
    {
      icon: '📋',
      title: 'AI Governance Framework',
      desc: 'Establish policies for responsible AI deployment',
      deliverables: ['AI ethics guidelines', 'Data governance policies', 'Model monitoring standards', 'Risk management framework', 'Compliance documentation'],
    },
    {
      icon: '🚀',
      title: 'Implementation Support',
      desc: 'Hands-on guidance throughout your AI journey',
      deliverables: ['Project planning', 'Team augmentation', 'Technical oversight', 'Change management', 'Performance optimization'],
    },
  ];

  const frameworks = [
    { name: 'AI Maturity Model', desc: '5-level framework to assess and improve AI capabilities', levels: ['Ad-hoc', 'Experimenting', 'Scaling', 'Optimizing', 'Transforming'] },
    { name: 'AI Value Framework', desc: 'Identify and prioritize AI use cases by business impact', axes: ['Business Value', 'Technical Feasibility', 'Data Availability', 'Risk Level'] },
    { name: 'AI Operating Model', desc: 'Design the organizational structure for AI success', components: ['Center of Excellence', 'Federated Teams', 'Governance Board', 'Data Platform'] },
  ];

  const packages = [
    { name: 'AI Discovery', price: '₹1,49,999', duration: '2-3 weeks', features: ['AI maturity assessment', 'Top 5 use case identification', 'Quick win recommendations', 'Executive presentation', '2 strategy workshops'], color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Strategy', price: '₹3,99,999', duration: '6-8 weeks', features: ['Full maturity assessment', 'Comprehensive use case analysis', '3-year AI roadmap', 'Investment business case', 'Governance framework', 'Vendor recommendations', '4 workshops'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'AI Transformation', price: '₹9,99,999+', duration: '12-16 weeks', features: ['All Strategy deliverables', 'Implementation planning', 'Team training program', 'Vendor selection support', 'Pilot project guidance', 'Change management', 'Quarterly reviews (1 year)'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    {
      question: 'What is AI consulting and why do we need it?',
      answer: 'AI consulting helps organizations navigate the complex AI landscape strategically. You need it to: avoid costly mistakes (70% of AI projects fail without proper planning), identify highest-ROI opportunities, build the right team and infrastructure, ensure ethical and compliant AI deployment, and accelerate time-to-value. Our consultants have delivered 100+ AI projects and bring battle-tested frameworks to your transformation journey.',
    },
    {
      question: 'How do you assess our AI readiness?',
      answer: 'Our AI Maturity Assessment evaluates 6 dimensions: Data (quality, accessibility, governance), Technology (infrastructure, tools, integration), People (skills, culture, leadership), Process (workflows, automation potential), Strategy (vision, investment, priorities), and Governance (ethics, risk, compliance). We conduct interviews, review systems, and benchmark against industry peers. You receive a detailed report with maturity scores and actionable recommendations.',
    },
    {
      question: 'How long does an AI strategy engagement take?',
      answer: 'Timeline depends on scope: AI Discovery (quick assessment): 2-3 weeks, AI Strategy (comprehensive roadmap): 6-8 weeks, AI Transformation (strategy + implementation): 12-16 weeks. Most organizations start with Discovery to identify quick wins, then proceed to full Strategy development. We can fast-track urgent initiatives while maintaining thoroughness.',
    },
    {
      question: 'What ROI can we expect from AI investments?',
      answer: 'AI ROI varies by use case, but typical returns include: Customer service automation - 30-50% cost reduction, Document processing - 60-80% time savings, Predictive maintenance - 25-40% downtime reduction, Demand forecasting - 20-30% inventory optimization, Sales intelligence - 15-25% revenue increase. Our strategy identifies your specific ROI opportunities with detailed projections and payback calculations.',
    },
    {
      question: 'Do you help with vendor selection and RFP process?',
      answer: 'Yes, vendor selection is a core service. We help with: Requirements definition based on your needs, Vendor landscape mapping (we track 500+ AI vendors), RFP/RFI document creation, Evaluation criteria and scorecard, Demo facilitation and technical assessment, Contract negotiation support, Implementation oversight. Our vendor-agnostic approach ensures you get the best fit, not just popular names.',
    },
    {
      question: 'How do you ensure AI ethics and responsible deployment?',
      answer: 'We embed ethics throughout our consulting: Bias assessment for AI models, Explainability requirements definition, Privacy-by-design principles, Human oversight mechanisms, Fairness metrics and monitoring, Documentation and audit trails. We help create AI governance frameworks that satisfy regulators, build customer trust, and align with your values. Our approach follows IEEE and EU AI Act guidelines.',
    },
  ];

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft AI Consulting Platform',
    description: 'Strategic AI consulting services including AI maturity assessment, use case identification, roadmap development, vendor selection, governance framework, and implementation support for enterprise AI transformation.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Consulting Services',
    price: '149999',
    rating: 4.9,
    reviewCount: 45,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const serviceSchema = generateServiceSchema(
    'AI Consulting & Strategy Services',
    'Expert AI consulting including strategy development, maturity assessment, use case identification, vendor selection, and implementation guidance.'
  );

  const productSchema = generateProductSchema('AI Consulting Package', 'Comprehensive AI consulting with strategy development, roadmap planning, and implementation support.', '149999');
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Consulting', url: '/ai-consulting' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Initial Assessment', text: 'Evaluate current AI maturity and identify improvement areas', position: 1 },
    { name: 'Opportunity Discovery', text: 'Map business processes and identify AI use cases', position: 2 },
    { name: 'Strategy Development', text: 'Create prioritized AI roadmap with investment plan', position: 3 },
    { name: 'Architecture Design', text: 'Design data and technology architecture for AI', position: 4 },
    { name: 'Implementation Planning', text: 'Develop detailed execution plan for priority initiatives', position: 5 },
    { name: 'Ongoing Advisory', text: 'Provide continued guidance and optimization support', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Suresh Menon', rating: 5, reviewBody: 'EifaSoft\'s AI strategy helped us prioritize the right initiatives. We achieved 3x ROI on our first AI project following their roadmap.' },
    { author: 'Priya Iyer', rating: 5, reviewBody: 'Their maturity assessment revealed gaps we didn\'t know existed. The governance framework they built gave our board confidence to invest in AI.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero
        title="AI Consulting & Strategy"
        subtitle="Navigate Your AI Journey"
        description="Expert guidance to transform your business with AI. From strategy to implementation, we help you identify opportunities, avoid pitfalls, and maximize ROI on AI investments."
        ctaPrimary={{ text: 'Book Free Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Services', href: '#services' }}
        gradient="blue"
      />

      {/* What is AI Consulting - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is AI Consulting?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>AI Consulting</strong> is a strategic advisory service that helps organizations plan, implement, and optimize artificial intelligence initiatives. It includes AI readiness assessment, use case identification, technology selection, governance framework development, and implementation roadmap creation. AI consultants bridge the gap between business objectives and technical AI capabilities, ensuring successful AI adoption with measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  AI consulting starting at ₹1,49,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Maturity assessment & roadmap development
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  2-16 weeks engagement timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Vendor selection & governance support
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  100+ AI projects delivered
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  3-5x higher ROI with strategic AI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Consulting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why AI Consulting Matters</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-red-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-red-600 mb-2">70%</div>
                <p className="text-gray-700">of AI projects fail without proper strategy</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">3-5x</div>
                <p className="text-gray-700">higher ROI with strategic AI adoption</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                <p className="text-gray-700">faster time-to-value with expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Consulting Services</h2>
            <p className="text-xl text-gray-600">Comprehensive advisory for your AI transformation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-blue-500">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Proven Frameworks</h2>
            <p className="text-xl text-blue-200">Battle-tested methodologies from 100+ AI projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((fw, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{fw.name}</h3>
                <p className="text-blue-200 text-sm mb-4">{fw.desc}</p>
                <div className="space-y-2">
                  {(fw.levels || fw.axes || fw.components)?.map((item, idx) => (
                    <div key={idx} className="bg-white/10 rounded px-3 py-1 text-sm">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consulting Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-blue-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-blue-600 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="text-3xl font-bold my-2">{pkg.price}</div>
                  <p className="text-sm opacity-90">{pkg.duration}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="block text-center mt-6 px-6 py-3 rounded-lg font-bold bg-gray-900 text-white">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="AI Consulting & Strategy" />
        </div>
      </section>
    </main>
  );
}

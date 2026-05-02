import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Intelligent Automation Services India | RPA + AI Solutions | EifaSoft',
    description: 'Leading intelligent automation company in India. Combine RPA with AI for end-to-end process automation. Document processing, workflow automation, cognitive bots. 60-80% efficiency gains. Starting ₹2,49,999.',
    canonical: '/intelligent-automation',
    keywords: [
      'intelligent automation', 'intelligent automation services', 'RPA AI integration',
      'cognitive automation', 'intelligent process automation', 'IPA solutions',
      'AI automation India', 'document processing automation', 'workflow automation AI',
      'UiPath AI', 'Automation Anywhere AI', 'Blue Prism AI',
      'hyperautomation', 'intelligent document processing', 'IDP solutions',
      'RPA consulting', 'process automation AI', 'enterprise automation',
    ],
  });
}

export default function IntelligentAutomation() {
  const capabilities = [
    { icon: '📄', title: 'Intelligent Document Processing', desc: 'Extract data from invoices, forms, contracts using AI', metrics: '90% accuracy, 80% time savings', features: ['Invoice processing', 'Contract extraction', 'Form digitization', 'Email parsing'] },
    { icon: '🤖', title: 'Cognitive RPA Bots', desc: 'RPA bots enhanced with AI decision-making', metrics: '70% more processes automated', features: ['Exception handling', 'Unstructured data', 'Dynamic workflows', 'Self-healing bots'] },
    { icon: '💬', title: 'Conversational Automation', desc: 'AI chatbots integrated with backend processes', metrics: '50% support cost reduction', features: ['Customer service', 'IT helpdesk', 'HR queries', 'Order tracking'] },
    { icon: '📊', title: 'Process Mining & Discovery', desc: 'AI-powered process analysis and optimization', metrics: '30% process improvement', features: ['Process mapping', 'Bottleneck detection', 'Automation candidates', 'ROI prediction'] },
    { icon: '🔍', title: 'Predictive Operations', desc: 'Anticipate issues before they occur', metrics: '40% fewer escalations', features: ['Workload prediction', 'Resource planning', 'Risk detection', 'SLA monitoring'] },
    { icon: '⚡', title: 'End-to-End Orchestration', desc: 'Unified automation across systems', metrics: '60% faster processes', features: ['Cross-system workflows', 'Human-in-loop', 'API integration', 'Real-time dashboards'] },
  ];

  const useCases = [
    { dept: 'Finance & Accounting', processes: ['Invoice processing', 'Expense management', 'Bank reconciliation', 'Financial reporting'], savings: '60-70% cost reduction' },
    { dept: 'Human Resources', processes: ['Resume screening', 'Onboarding', 'Payroll processing', 'Leave management'], savings: '50-60% time savings' },
    { dept: 'Customer Service', processes: ['Ticket classification', 'Response generation', 'Case routing', 'Knowledge lookup'], savings: '40-50% faster resolution' },
    { dept: 'Supply Chain', processes: ['Order processing', 'Inventory updates', 'Vendor management', 'Shipment tracking'], savings: '55-65% efficiency gain' },
    { dept: 'IT Operations', processes: ['Incident management', 'Password resets', 'System monitoring', 'Report generation'], savings: '70-80% automation rate' },
    { dept: 'Legal & Compliance', processes: ['Contract review', 'Compliance checking', 'Audit preparation', 'Policy updates'], savings: '60-70% time savings' },
  ];

  const packages = [
    { name: 'Starter', price: '₹2,49,999', duration: '6-8 weeks', bots: '3-5 bots', features: ['Process assessment', 'RPA bot development', 'Basic AI integration', 'Testing & deployment', 'User training', '3 months support'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Professional', price: '₹5,99,999', duration: '10-14 weeks', bots: '8-12 bots', features: ['Comprehensive assessment', 'Advanced cognitive bots', 'IDP implementation', 'Process orchestration', 'Analytics dashboard', 'Change management', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹12,00,000+', duration: '16-24 weeks', bots: '20+ bots', features: ['Enterprise-wide automation', 'CoE setup', 'Custom AI models', 'Full orchestration', 'Governance framework', 'Hyperautomation roadmap', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    { question: 'What is Intelligent Automation and how is it different from RPA?', answer: 'Intelligent Automation (IA) combines RPA with AI technologies like ML, NLP, and computer vision. While RPA automates rule-based, repetitive tasks, IA can handle: Unstructured data (emails, documents, images), Decision-making with exceptions, Learning and improving over time, End-to-end process automation. Think of RPA as the hands and IA as adding a brain. IA typically achieves 30-50% more automation coverage than RPA alone.' },
    { question: 'Which RPA platform do you work with?', answer: 'We are platform-agnostic and work with all major RPA tools: UiPath (our primary expertise), Automation Anywhere, Blue Prism, Microsoft Power Automate, and open-source options like Robot Framework. We help you choose based on: existing investments, technical requirements, budget, and scale. Our AI components integrate with any RPA platform.' },
    { question: 'How much can we save with Intelligent Automation?', answer: 'Typical savings vary by process: Invoice processing: 60-80% cost reduction, Employee onboarding: 50-70% time savings, Customer service: 40-60% cost reduction, IT operations: 70-90% automation rate. Average ROI is 3-6 months for well-selected processes. We provide detailed ROI projections before starting any engagement.' },
    { question: 'How do you handle exceptions and edge cases?', answer: 'Our cognitive bots handle exceptions through: AI-powered decision making for known exception types, Confidence scoring to route uncertain cases to humans, Self-learning from human decisions, Graceful fallback to manual processing, Exception analytics to identify patterns. We design for 85-95% straight-through processing with intelligent escalation for the rest.' },
    { question: 'What is Intelligent Document Processing (IDP)?', answer: 'IDP uses AI to extract data from unstructured documents: Invoices, receipts, purchase orders, Contracts and agreements, Forms and applications, Emails and attachments. Unlike templates, IDP learns document layouts and handles variations. Our IDP achieves 90%+ accuracy across document types, reducing manual data entry by 80%.' },
    { question: 'How long does implementation take?', answer: 'Timeline depends on scope: Single bot (simple process): 2-4 weeks, Department automation (5-10 processes): 8-12 weeks, Enterprise program (20+ processes): 16-24 weeks. We follow agile delivery with bots deployed incrementally. First bot typically live within 4-6 weeks of kickoff.' },
  ];

  const serviceSchema = generateServiceSchema('Intelligent Automation Services', 'End-to-end intelligent automation combining RPA with AI for document processing, cognitive bots, and workflow automation.');
  const productSchema = generateProductSchema('Intelligent Automation Package', 'Complete intelligent automation solution with RPA bots, AI integration, and process orchestration.', '249999');

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Intelligent Automation Platform',
    description: 'Enterprise intelligent automation platform combining RPA with AI for cognitive document processing, workflow automation, and hyperautomation solutions.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, On-Premise',
    price: '249999',
    rating: 4.9,
    reviewCount: 67,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AI Services', url: '/ai-services' }, { name: 'Intelligent Automation', url: '/intelligent-automation' }]);
  const reviewSchema = generateReviewSchema([
    { author: 'Ramesh Kumar', rating: 5, reviewBody: 'EifaSoft automated our entire invoice processing. 500+ invoices daily now processed without manual intervention. ROI achieved in 4 months!' },
    { author: 'Anjali Sharma', rating: 5, reviewBody: 'The cognitive bots handle 80% of our customer queries automatically. Support team now focuses on complex issues only.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero
        title="Intelligent Automation"
        subtitle="RPA + AI = Hyperautomation"
        description="Go beyond basic RPA with AI-powered intelligent automation. Automate complex processes, handle unstructured data, and achieve 60-80% efficiency gains across your organization."
        ctaPrimary={{ text: 'Get Automation Assessment', href: '#contact' }}
        ctaSecondary={{ text: 'View Capabilities', href: '#capabilities' }}
        gradient="orange"
      />

      {/* What is Intelligent Automation - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-red-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Intelligent Automation?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Intelligent Automation (IA)</strong> combines Robotic Process Automation (RPA) with artificial intelligence technologies like machine learning, NLP, and computer vision. Unlike traditional RPA that only handles rule-based tasks, IA can process unstructured data, make decisions, and learn from exceptions. It enables end-to-end process automation with 60-80% efficiency gains across finance, HR, customer service, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Intelligent automation starting at ₹2,49,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  UiPath, Automation Anywhere, Power Automate
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  60-80% efficiency gains
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-24 weeks implementation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Document processing, cognitive bots
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  3-6 months average ROI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Traditional RPA vs Intelligent Automation</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-600 mb-4">Traditional RPA</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="text-gray-400">●</span> Rule-based only</li>
                <li className="flex items-center gap-2"><span className="text-gray-400">●</span> Structured data only</li>
                <li className="flex items-center gap-2"><span className="text-gray-400">●</span> Breaks on changes</li>
                <li className="flex items-center gap-2"><span className="text-gray-400">●</span> 30-40% process coverage</li>
                <li className="flex items-center gap-2"><span className="text-gray-400">●</span> No decision-making</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 ring-2 ring-orange-500">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Intelligent Automation</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> AI-powered decisions</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Handles unstructured data</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Self-healing & adaptive</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 70-90% process coverage</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Cognitive capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Automation Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{cap.icon}</div>
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{cap.desc}</p>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">{cap.metrics}</div>
                <ul className="grid grid-cols-2 gap-2">
                  {cap.features.map((f, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                      <span className="text-orange-500">•</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Department */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automation by Department</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, index) => (
              <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-3">{uc.dept}</h3>
                <ul className="space-y-2 mb-4">
                  {uc.processes.map((p, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">{uc.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automation Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-orange-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-orange-500 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="text-3xl font-bold my-2">{pkg.price}</div>
                  <p className="text-sm opacity-90">{pkg.duration} • {pkg.bots}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="block text-center mt-6 px-6 py-3 rounded-lg font-bold bg-gray-900 text-white">Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Intelligent Automation" />
        </div>
      </section>
    </main>
  );
}

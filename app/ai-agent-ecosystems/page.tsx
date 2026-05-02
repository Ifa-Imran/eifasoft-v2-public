import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'AI Agent Ecosystems Development | Multi-Agent Systems | EifaSoft Technologies',
    description: 'Build intelligent AI agent ecosystems and multi-agent systems for business automation. Advanced autonomous agents, workflow automation, and intelligent decision-making systems.',
    canonical: '/ai-agent-ecosystems',
    keywords: ['AI agent ecosystems', 'multi-agent systems', 'autonomous agents', 'AI automation', 'intelligent agents', 'agent-based systems', 'AI workflow automation', 'cooperative AI agents', 'agent orchestration', 'AI agent development', 'LLM agent development', 'agentic AI solutions', 'AI process automation', 'multi-agent AI india', 'AI orchestration platform', 'autonomous AI systems', 'AI agent frameworks', 'business process automation AI', 'CrewAI development', 'LangChain development', 'enterprise AI agents', 'AI agent consulting'],
  });
}

export default function AIAgentEcosystemsPage() {
  const serviceSchema = generateServiceSchema(
    'AI Agent Ecosystems Development',
    'Design and develop intelligent multi-agent systems and AI agent ecosystems for business process automation, decision-making, and complex problem-solving.'
  );

  const productSchema = generateProductSchema(
    'AI Agent Ecosystem Solutions',
    'Complete AI agent ecosystem development including autonomous agents, multi-agent coordination, and intelligent automation',
    '10,00,000'
  );

  const faqs = [
    {
      question: 'What are AI agent ecosystems and how do they work?',
      answer: 'AI agent ecosystems are networks of autonomous AI agents that work together to achieve complex goals. Each agent has specific capabilities and can communicate, collaborate, and coordinate with other agents. They work by distributing tasks, sharing information, making independent decisions, and adapting to changing conditions. Think of it as a team of specialized AI workers, each expert in their domain, working together seamlessly.',
    },
    {
      question: 'What are the benefits of multi-agent systems over single AI models?',
      answer: 'Multi-agent systems offer several advantages: 1) Specialization - each agent excels at specific tasks, 2) Scalability - easily add or remove agents as needed, 3) Resilience - system continues functioning if one agent fails, 4) Parallel processing - agents work simultaneously on different tasks, 5) Modularity - easier to update individual agents without affecting the entire system, 6) Complex problem-solving - agents collaborate to solve problems too complex for single models.',
    },
    {
      question: 'What use cases can AI agent ecosystems solve?',
      answer: 'AI agent ecosystems excel at: Customer service automation (multiple specialized chatbots), supply chain optimization (agents for inventory, logistics, forecasting), financial trading (agents for market analysis, risk assessment, execution), healthcare coordination (agents for diagnosis, treatment planning, scheduling), smart manufacturing (agents for quality control, maintenance, production), content creation pipelines, and automated business workflows.',
    },
    {
      question: 'How are AI agents different from traditional automation?',
      answer: 'Traditional automation follows fixed rules and workflows, while AI agents are autonomous, adaptive, and intelligent. AI agents can: 1) Make decisions based on context and learning, 2) Adapt to unexpected situations, 3) Learn from experience and improve over time, 4) Collaborate and negotiate with other agents, 5) Handle ambiguous or incomplete information, 6) Pursue goals rather than just executing steps. They combine automation with intelligence.',
    },
    {
      question: 'What technologies do you use to build AI agent ecosystems?',
      answer: 'We use cutting-edge frameworks including LangChain, AutoGPT, BabyAGI, CrewAI, Microsoft Autogen, OpenAI Assistants API, and custom agent frameworks. We integrate with GPT-4, Claude, Llama, and other LLMs. For orchestration, we use tools like Apache Airflow, Prefect, and Temporal. Infrastructure includes Docker, Kubernetes, and cloud platforms (AWS, Azure, GCP) for scalable deployment.',
    },
    {
      question: 'What is the cost and timeline for developing an AI agent ecosystem?',
      answer: 'Costs typically range from ₹10,00,000 for basic multi-agent systems (3-5 agents) to ₹50,00,000+ for complex enterprise ecosystems (20+ agents). Development timeline is usually 3-8 months depending on: number of agents, complexity of interactions, integration requirements, training data volume, and deployment infrastructure. We start with a proof-of-concept (1-2 months) before full development.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Agent Ecosystems', url: '/ai-agent-ecosystems' },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft AI Agent Ecosystem Platform',
    description: 'Enterprise multi-agent AI platform for building autonomous agent ecosystems. Intelligent agents collaborate to automate complex workflows and business processes.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, On-Premise',
    price: '1000000',
    rating: 4.9,
    reviewCount: 54,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="AI Agent Ecosystems"
        subtitle="Next-Generation Business Automation"
        description="Build intelligent multi-agent systems where autonomous AI agents collaborate to automate complex workflows, make decisions, and solve problems beyond the capability of single AI models."
        gradient="blue"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What are AI Agent Ecosystems?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>AI Agent Ecosystems</strong> are networks of autonomous AI agents that work together to achieve complex business goals. Each agent has specific capabilities and can communicate, collaborate, and coordinate with other agents—similar to a team of specialized workers. Unlike single AI models, agent ecosystems distribute tasks, share information, make independent decisions, and adapt to changing conditions, enabling automation of workflows too complex for traditional AI.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">🤖</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Autonomous Collaboration</p>
                  <p className="text-sm text-gray-600">Multiple AI agents work together without human intervention</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Specialized Agents</p>
                  <p className="text-sm text-gray-600">Research, decision, execution, communication agents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Built with LangChain & CrewAI</p>
                  <p className="text-sm text-gray-600">Industry-leading agent frameworks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Complex Workflow Automation</p>
                  <p className="text-sm text-gray-600">Handle multi-step processes across systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Agents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are AI Agent Ecosystems?</h2>
              <p className="text-lg text-gray-600">
                Intelligent, autonomous systems that collaborate to achieve complex business goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Autonomous Agents</h3>
                <p className="text-gray-600">Each agent operates independently, making decisions based on goals and context</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">Agents communicate, share information, and coordinate to solve complex problems</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptive Learning</h3>
                <p className="text-gray-600">Agents learn from experience and improve performance over time</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">How AI Agents Work Together</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <div>
                    <strong>Task Distribution:</strong> A coordinator agent breaks down complex tasks and assigns them to specialized agents
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">2.</span>
                  <div>
                    <strong>Parallel Execution:</strong> Multiple agents work simultaneously on different aspects of the problem
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">3.</span>
                  <div>
                    <strong>Information Sharing:</strong> Agents exchange insights, data, and intermediate results
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">4.</span>
                  <div>
                    <strong>Decision Making:</strong> Agents collaborate to make informed decisions based on collective intelligence
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">5.</span>
                  <div>
                    <strong>Result Synthesis:</strong> A synthesizer agent combines outputs into final solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of AI Agents We Build</h2>
            <p className="text-lg text-gray-600">
              Specialized agents for different business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Research Agents',
                icon: '🔍',
                description: 'Autonomous agents that search, gather, analyze, and synthesize information from multiple sources.',
                capabilities: ['Web scraping', 'Data aggregation', 'Report generation', 'Insight extraction'],
              },
              {
                type: 'Decision Agents',
                icon: '🎯',
                description: 'Agents that evaluate options, assess risks, and make optimal decisions based on defined criteria.',
                capabilities: ['Risk assessment', 'Option evaluation', 'Strategy selection', 'Predictive analysis'],
              },
              {
                type: 'Execution Agents',
                icon: '⚙️',
                description: 'Action-oriented agents that perform tasks, trigger workflows, and interact with external systems.',
                capabilities: ['API integration', 'Workflow automation', 'Task execution', 'System control'],
              },
              {
                type: 'Communication Agents',
                icon: '💬',
                description: 'Agents specialized in natural language understanding and generation for human-AI interaction.',
                capabilities: ['Chatbot interfaces', 'Email automation', 'Content generation', 'Customer support'],
              },
              {
                type: 'Monitoring Agents',
                icon: '📊',
                description: 'Agents that continuously observe systems, detect anomalies, and alert on important events.',
                capabilities: ['System monitoring', 'Anomaly detection', 'Alert generation', 'Performance tracking'],
              },
              {
                type: 'Learning Agents',
                icon: '🧠',
                description: 'Agents that continuously learn from data and interactions to improve system performance.',
                capabilities: ['Pattern recognition', 'Model training', 'Feedback loops', 'Performance optimization'],
              },
            ].map((agent) => (
              <div key={agent.type} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{agent.icon}</div>
                <h3 className="text-xl font-bold mb-3">{agent.type}</h3>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <ul className="space-y-1">
                  {agent.capabilities.map((cap) => (
                    <li key={cap} className="text-sm text-gray-700 flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Agent Ecosystem Use Cases</h2>
            <p className="text-lg text-gray-600">
              Real-world applications across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                useCase: 'Automated Customer Support',
                description: 'Multiple specialized agents handle inquiries, troubleshoot issues, escalate complex problems, and learn from interactions.',
                agents: ['Inquiry Router', 'Technical Support', 'Billing Agent', 'Escalation Manager', 'Learning Agent'],
              },
              {
                useCase: 'Content Creation Pipeline',
                description: 'Agents collaborate to research topics, generate drafts, fact-check, optimize for SEO, and publish content.',
                agents: ['Research Agent', 'Writer Agent', 'Fact-Checker', 'SEO Optimizer', 'Publisher'],
              },
              {
                useCase: 'Supply Chain Optimization',
                description: 'Agents monitor inventory, predict demand, optimize routes, manage suppliers, and handle disruptions.',
                agents: ['Inventory Monitor', 'Demand Forecaster', 'Route Optimizer', 'Supplier Manager', 'Risk Assessor'],
              },
              {
                useCase: 'Financial Trading System',
                description: 'Agents analyze markets, assess risks, execute trades, manage portfolios, and adapt to market conditions.',
                agents: ['Market Analyzer', 'Risk Manager', 'Trade Executor', 'Portfolio Optimizer', 'News Analyzer'],
              },
              {
                useCase: 'Healthcare Coordination',
                description: 'Agents manage patient scheduling, assist diagnosis, recommend treatments, monitor patient data, and coordinate care.',
                agents: ['Scheduling Agent', 'Diagnostic Assistant', 'Treatment Recommender', 'Monitoring Agent', 'Care Coordinator'],
              },
              {
                useCase: 'Smart Manufacturing',
                description: 'Agents control production, monitor quality, predict maintenance, optimize resources, and adapt to changes.',
                agents: ['Production Controller', 'Quality Inspector', 'Maintenance Predictor', 'Resource Optimizer', 'Adaptation Agent'],
              },
            ].map((item) => (
              <div key={item.useCase} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{item.useCase}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-gray-600">Agent Team:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.agents.map((agent) => (
                      <span key={agent} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Agent Development Stack</h2>
            <p className="text-lg text-gray-600">
              Cutting-edge frameworks and tools for building AI agent ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Agent Frameworks</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>LangChain</li>
                <li>AutoGPT</li>
                <li>CrewAI</li>
                <li>Microsoft Autogen</li>
                <li>LlamaIndex</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">LLM Integration</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>OpenAI GPT-4</li>
                <li>Claude 3</li>
                <li>Llama 2/3</li>
                <li>Gemini Pro</li>
                <li>Mixtral</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Orchestration</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>Apache Airflow</li>
                <li>Prefect</li>
                <li>Temporal</li>
                <li>Celery</li>
                <li>Redis Queue</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Infrastructure</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS/Azure/GCP</li>
                <li>Vector Databases</li>
                <li>Message Queues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              Systematic approach to building AI agent ecosystems
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Use Case Analysis',
                description: 'Identify processes that benefit from multi-agent automation, define agent roles, and map interactions.',
              },
              {
                step: '02',
                title: 'Agent Architecture Design',
                description: 'Design agent hierarchy, communication protocols, decision-making logic, and coordination mechanisms.',
              },
              {
                step: '03',
                title: 'Proof of Concept',
                description: 'Build and test a simplified version with 2-3 core agents to validate the approach.',
              },
              {
                step: '04',
                title: 'Agent Development',
                description: 'Develop individual agents with specialized capabilities, knowledge bases, and decision logic.',
              },
              {
                step: '05',
                title: 'Integration & Testing',
                description: 'Integrate agents, implement communication layer, test collaboration scenarios, and optimize performance.',
              },
              {
                step: '06',
                title: 'Deployment & Monitoring',
                description: 'Deploy to production, set up monitoring dashboards, implement feedback loops, and continuous improvement.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-6 bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Agent Ecosystem Pricing</h2>
            <p className="text-lg text-gray-600">
              Investment based on ecosystem complexity and business value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Ecosystem',
                price: '₹10,00,000',
                duration: 'Starting from',
                features: [
                  '3-5 specialized agents',
                  'Single workflow automation',
                  'Basic coordination',
                  'Standard LLM integration',
                  'Cloud deployment',
                  '3 months support',
                  'Performance monitoring',
                  'Documentation',
                ],
                popular: false,
              },
              {
                name: 'Advanced Ecosystem',
                price: '₹25,00,000',
                duration: 'Starting from',
                features: [
                  '10-15 specialized agents',
                  'Multiple workflow types',
                  'Advanced orchestration',
                  'Custom agent training',
                  'Multi-LLM integration',
                  '6 months support',
                  'Learning capabilities',
                  'API integrations',
                  'Analytics dashboard',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Ecosystem',
                price: 'Custom',
                duration: 'Contact us',
                features: [
                  '20+ specialized agents',
                  'Complex multi-workflow',
                  'Intelligent coordination',
                  'Custom frameworks',
                  'Dedicated infrastructure',
                  '12 months support',
                  'Continuous learning',
                  'Enterprise integration',
                  'SLA guarantees',
                  'Priority support',
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-purple-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.duration && <p className="text-gray-600 mt-1">{plan.duration}</p>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your AI Agent Ecosystem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent, collaborative AI agents working together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/ai-services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your AI Agent Project</h2>
              <p className="text-lg text-gray-600">
                Let&apos;s discuss how AI agents can transform your business processes
              </p>
            </div>
            <ContactForm serviceName="AI Agent Ecosystems" />
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Generative AI Solutions & Development Company India | GPT Integration | EifaSoft',
    description: 'Leading generative AI development company in India. Custom GPT integration, LLM fine-tuning, AI chatbots, content generation, image synthesis. Enterprise-grade GenAI solutions. Starting ₹2,99,999.',
    canonical: '/generative-ai-solutions',
    keywords: [
      'generative AI solutions', 'generative AI development company', 'GPT integration services',
      'LLM development', 'ChatGPT integration', 'custom AI chatbot development',
      'AI content generation', 'generative AI India', 'enterprise GPT solutions',
      'LLM fine-tuning', 'AI text generation', 'generative AI for business',
      'OpenAI integration', 'Claude integration', 'Gemini integration',
      'AI image generation', 'Stable Diffusion integration', 'DALL-E integration',
      'RAG implementation', 'vector database', 'AI knowledge base',
      'conversational AI', 'AI assistant development', 'GenAI consulting',
    ],
  });
}

export default function GenerativeAISolutions() {
  const solutions = [
    {
      icon: '💬',
      title: 'AI Chatbots & Assistants',
      desc: 'Intelligent conversational AI powered by GPT-4, Claude, or custom LLMs',
      features: ['Customer support automation', 'Internal knowledge assistants', 'Multi-language support', 'Voice-enabled bots', 'CRM integration'],
    },
    {
      icon: '📝',
      title: 'Content Generation',
      desc: 'AI-powered content creation for marketing, documentation, and more',
      features: ['Blog & article generation', 'Product descriptions', 'Email copywriting', 'SEO content optimization', 'Brand voice training'],
    },
    {
      icon: '🖼️',
      title: 'Image & Visual AI',
      desc: 'Generate, edit, and enhance images using cutting-edge AI models',
      features: ['Product image generation', 'Marketing visuals', 'Image editing & enhancement', 'Background removal', 'Style transfer'],
    },
    {
      icon: '🔍',
      title: 'RAG & Knowledge Systems',
      desc: 'Build AI systems that understand your business documents',
      features: ['Document Q&A systems', 'Knowledge base search', 'Vector database setup', 'Semantic search', 'Citation & source tracking'],
    },
    {
      icon: '🎯',
      title: 'LLM Fine-Tuning',
      desc: 'Custom-train language models on your domain-specific data',
      features: ['Domain adaptation', 'Instruction tuning', 'RLHF implementation', 'Model evaluation', 'Continuous improvement'],
    },
    {
      icon: '⚡',
      title: 'AI Workflow Automation',
      desc: 'Automate complex business processes with generative AI',
      features: ['Document processing', 'Data extraction', 'Report generation', 'Code generation', 'Email automation'],
    },
  ];

  const useCases = [
    { industry: 'E-commerce', use: 'Product descriptions, chatbot support, personalized recommendations', metric: '60% faster content creation' },
    { industry: 'Healthcare', use: 'Medical documentation, patient Q&A, research summarization', metric: '40% reduced admin time' },
    { industry: 'Finance', use: 'Report generation, compliance Q&A, customer support', metric: '50% cost reduction' },
    { industry: 'Legal', use: 'Contract analysis, document summarization, research assistance', metric: '70% faster document review' },
    { industry: 'Education', use: 'Content creation, tutoring bots, assessment generation', metric: '3x content output' },
    { industry: 'Marketing', use: 'Ad copy, social media, email campaigns, SEO content', metric: '80% faster campaigns' },
  ];

  const techStack = [
    { category: 'LLM Providers', items: ['OpenAI GPT-4', 'Anthropic Claude', 'Google Gemini', 'Meta Llama', 'Mistral AI'] },
    { category: 'Image Models', items: ['DALL-E 3', 'Stable Diffusion', 'Midjourney API', 'Adobe Firefly'] },
    { category: 'Vector DBs', items: ['Pinecone', 'Weaviate', 'Qdrant', 'ChromaDB', 'Milvus'] },
    { category: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'Haystack', 'Semantic Kernel'] },
    { category: 'Infrastructure', items: ['AWS Bedrock', 'Azure OpenAI', 'Google Vertex AI', 'Hugging Face'] },
  ];

  const packages = [
    { name: 'Starter', price: '₹2,99,999', duration: '6-8 weeks', features: ['Single AI chatbot', 'GPT-4 integration', 'Basic RAG setup', 'Web interface', 'API endpoints', '3 months support'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Professional', price: '₹5,99,999', duration: '10-14 weeks', features: ['Multiple AI agents', 'Custom LLM fine-tuning', 'Advanced RAG with citations', 'Multi-platform deployment', 'Analytics dashboard', 'Voice integration', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹12,00,000+', duration: '16-24 weeks', features: ['Full AI platform', 'Multiple LLM providers', 'On-premise deployment', 'Custom model training', 'Enterprise security', 'SLA guarantee', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    {
      question: 'What is Generative AI and how can it benefit my business?',
      answer: 'Generative AI refers to AI systems that can create new content - text, images, code, audio, and more. For businesses, it means: automating content creation (60-80% time savings), building intelligent chatbots that handle customer queries 24/7, generating personalized marketing materials at scale, extracting insights from documents instantly, and creating AI assistants that understand your business. Companies using GenAI report 40-70% productivity gains in content and customer service operations.',
    },
    {
      question: 'Which LLM (GPT-4, Claude, Gemini) is best for my use case?',
      answer: 'Each LLM has strengths: GPT-4 excels at creative writing, coding, and general tasks - best all-rounder. Claude is superior for long documents (100K+ tokens), safety-critical applications, and nuanced analysis. Gemini offers best Google ecosystem integration and multimodal capabilities. Llama 2/3 is ideal for on-premise deployment and cost-sensitive applications. We typically recommend starting with GPT-4 for most use cases, then optimizing based on specific needs. We can also implement multi-LLM routing for optimal cost/performance.',
    },
    {
      question: 'How much does custom GPT/AI chatbot development cost?',
      answer: 'Custom AI chatbot development costs vary by complexity: Basic chatbot (FAQ, single domain): ₹2-4 lakhs, Advanced assistant (RAG, multiple data sources): ₹5-8 lakhs, Enterprise platform (custom training, multi-agent): ₹10-20+ lakhs. Ongoing costs include: LLM API usage (₹10K-50K/month depending on volume), vector database hosting (₹5-15K/month), and maintenance (15-20% of development cost annually). We provide detailed cost projections including API usage estimates before starting.',
    },
    {
      question: 'What is RAG (Retrieval-Augmented Generation) and why do I need it?',
      answer: 'RAG combines LLMs with your private data to give accurate, contextual answers. Without RAG, ChatGPT only knows public information up to its training date. With RAG: AI can answer questions about YOUR documents, products, and policies. It provides citations and sources for answers. Reduces hallucinations by grounding responses in real data. Keeps sensitive data private (not sent to OpenAI for training). Essential for any business AI that needs to reference internal knowledge bases, documentation, or databases.',
    },
    {
      question: 'Can you fine-tune LLMs on our proprietary data?',
      answer: 'Yes, we offer multiple fine-tuning approaches: Prompt engineering (fastest, no training): Customize behavior through system prompts. RAG (recommended for most): Connect LLM to your documents without retraining. Fine-tuning (GPT-3.5, Llama): Train on your examples for consistent style/format. Full custom training: Build domain-specific models from scratch. Fine-tuning costs ₹3-10 lakhs depending on data size and model. We recommend starting with RAG (covers 80% of use cases) before investing in fine-tuning.',
    },
    {
      question: 'How do you ensure AI responses are accurate and safe?',
      answer: 'We implement multiple safety layers: RAG with source citations - every answer linked to source documents. Confidence scoring - flag uncertain responses for human review. Content filters - block inappropriate or off-topic responses. Guardrails - prevent prompt injection and jailbreaking. Human-in-the-loop - escalation workflows for complex queries. Monitoring - track accuracy metrics and user feedback. Regular testing - adversarial testing to identify edge cases. We target 95%+ accuracy for factual queries with proper RAG implementation.',
    },
    {
      question: 'Can GenAI integrate with our existing systems (CRM, ERP, etc.)?',
      answer: 'Absolutely. We specialize in enterprise integrations: CRM (Salesforce, HubSpot) - AI assistants with full customer context. ERP (SAP, Oracle) - intelligent document processing and queries. Communication (Slack, Teams, WhatsApp) - deploy AI where users already work. Databases - connect to SQL/NoSQL for real-time data access. APIs - integrate any system with REST/GraphQL endpoints. We use secure OAuth, API keys, and can work with on-premise systems. Typical integration adds 2-4 weeks to timeline.',
    },
    {
      question: 'What about data privacy and security with GenAI?',
      answer: 'We implement enterprise-grade security: Data encryption (AES-256) at rest and in transit. Private deployments - Azure OpenAI, AWS Bedrock keep data in your cloud. No training on your data - we use API configurations that prevent model training. Access controls - role-based permissions, audit logs. Compliance - GDPR, HIPAA-ready architectures. On-premise options - deploy Llama or other open models internally. SOC 2 compliant infrastructure and development practices.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'Generative AI Solutions & Development',
    'Custom generative AI development including GPT integration, LLM fine-tuning, AI chatbots, RAG systems, and enterprise AI solutions.'
  );

  const productSchema = generateProductSchema(
    'Generative AI Development Package',
    'Complete generative AI solution with custom chatbots, RAG implementation, LLM integration, and enterprise deployment.',
    '299999'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Generative AI Platform',
    description: 'Enterprise generative AI platform with GPT-4/Claude integration, custom LLM fine-tuning, RAG systems, AI chatbots, content generation, and multi-modal AI capabilities.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, On-Premise, API',
    price: '299999',
    rating: 4.9,
    reviewCount: 52,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'Generative AI Solutions', url: '/generative-ai-solutions' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Discovery & Use Case Definition', text: 'Identify high-impact GenAI opportunities and define success metrics', position: 1 },
    { name: 'Data Preparation', text: 'Collect, clean, and structure your knowledge base for RAG', position: 2 },
    { name: 'Model Selection & Architecture', text: 'Choose optimal LLMs and design system architecture', position: 3 },
    { name: 'Development & Integration', text: 'Build AI solution and integrate with existing systems', position: 4 },
    { name: 'Testing & Optimization', text: 'Rigorous testing, prompt engineering, and performance tuning', position: 5 },
    { name: 'Deployment & Training', text: 'Production deployment, user training, and ongoing support', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Vikram Patel', rating: 5, reviewBody: 'EifaSoft built an AI assistant for our legal firm that reviews contracts in minutes instead of hours. ROI was visible within the first month!' },
    { author: 'Anita Desai', rating: 5, reviewBody: 'Their RAG implementation for our e-commerce support reduced ticket volume by 60%. The AI actually understands our products.' },
    { author: 'Rajesh Gupta', rating: 5, reviewBody: 'Custom GPT fine-tuning for our healthcare documentation was exactly what we needed. Accurate, compliant, and fast.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero
        title="Generative AI Solutions"
        subtitle="GPT • LLMs • AI Chatbots • RAG"
        description="Transform your business with custom generative AI. We build intelligent chatbots, content generators, and AI assistants powered by GPT-4, Claude, and custom LLMs. 50+ GenAI projects delivered."
        ctaPrimary={{ text: 'Get AI Consultation', href: '#contact' }}
        ctaSecondary={{ text: 'View Solutions', href: '#solutions' }}
        gradient="purple"
      />

      {/* What is GenAI - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Generative AI?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Generative AI</strong> is a class of artificial intelligence that creates new content - text, images, code, audio, and video - by learning patterns from training data. Unlike traditional AI that classifies or predicts, generative models like GPT-4, Claude, and DALL-E produce original outputs. Key technologies include Large Language Models (LLMs) for text, diffusion models for images, and Retrieval-Augmented Generation (RAG) for accurate, domain-specific responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Generative AI solutions starting at ₹2,99,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  GPT-4, Claude, Gemini, Llama integration
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  70% faster content creation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-24 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  RAG, chatbots, content generation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  50+ GenAI projects delivered
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Generative AI Solutions</h2>
            <p className="text-xl text-gray-600">Custom-built AI systems for your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our GenAI Technology Stack</h2>
            <p className="text-xl text-purple-200">Enterprise-grade tools and frameworks</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-purple-300 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GenAI Across Industries</h2>
            <p className="text-xl text-gray-600">Proven results in every sector</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.industry}</h3>
                <p className="text-gray-600 text-sm mb-3">{useCase.use}</p>
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {useCase.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GenAI Development Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for every scale</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">Most Popular</div>}
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
                  <Link href="#contact" className={`block text-center mt-6 px-6 py-3 rounded-lg font-bold ${pkg.popular ? 'bg-purple-600 text-white' : 'bg-gray-900 text-white'}`}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Related AI Services</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/ai-services" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <span className="text-3xl">🤖</span>
              <h3 className="font-bold mt-2">AI Services</h3>
            </Link>
            <Link href="/custom-ai-models" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <span className="text-3xl">🧠</span>
              <h3 className="font-bold mt-2">Custom AI Models</h3>
            </Link>
            <Link href="/ai-agent-ecosystems" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <span className="text-3xl">🤖</span>
              <h3 className="font-bold mt-2">AI Agents</h3>
            </Link>
            <Link href="/ai-consulting" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <span className="text-3xl">💡</span>
              <h3 className="font-bold mt-2">AI Consulting</h3>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Generative AI Solutions" />
        </div>
      </section>
    </main>
  );
}

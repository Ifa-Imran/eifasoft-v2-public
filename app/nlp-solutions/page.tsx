import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'NLP Solutions India | Natural Language Processing Services | EifaSoft',
    description: 'Expert NLP development services in India. Chatbots, sentiment analysis, text mining, document processing, language translation. GPT-4, BERT, custom NLP models. Starting ₹1,99,999.',
    canonical: '/nlp-solutions',
    keywords: [
      'NLP solutions', 'natural language processing India', 'NLP development services',
      'chatbot development', 'sentiment analysis', 'text mining services',
      'document understanding AI', 'language translation AI', 'NER services',
      'text classification', 'conversational AI', 'NLP consulting',
      'BERT implementation', 'GPT integration', 'custom NLP models',
      'text analytics', 'speech to text', 'NLP India', 'NLP company',
    ],
  });
}

export default function NLPSolutions() {
  const solutions = [
    { icon: '💬', title: 'Conversational AI & Chatbots', desc: 'Intelligent chatbots that understand natural language', features: ['Customer service bots', 'Sales assistants', 'Internal helpdesk', 'Voice assistants', 'Multi-language support'], metrics: '50% support cost reduction' },
    { icon: '📊', title: 'Sentiment Analysis', desc: 'Understand opinions, emotions, and brand perception', features: ['Social media monitoring', 'Review analysis', 'Customer feedback', 'Brand sentiment', 'Competitive analysis'], metrics: '90%+ accuracy' },
    { icon: '📄', title: 'Document Understanding', desc: 'Extract insights from unstructured documents', features: ['Contract analysis', 'Resume parsing', 'Invoice processing', 'Report summarization', 'Legal document review'], metrics: '80% time savings' },
    { icon: '🏷️', title: 'Named Entity Recognition', desc: 'Identify and extract key entities from text', features: ['Person/Organization extraction', 'Location detection', 'Product identification', 'Custom entity types', 'Relationship mapping'], metrics: '95% entity accuracy' },
    { icon: '📝', title: 'Text Classification', desc: 'Automatically categorize and route text content', features: ['Email routing', 'Ticket classification', 'Content moderation', 'Topic detection', 'Intent classification'], metrics: '85%+ classification accuracy' },
    { icon: '🌐', title: 'Language Translation', desc: 'Multi-language support with context preservation', features: ['Real-time translation', 'Document translation', 'Localization support', 'Domain-specific translation', 'Quality assurance'], metrics: '20+ languages supported' },
  ];

  const industries = [
    { name: 'E-commerce', useCases: ['Product search', 'Review summarization', 'Chatbot support', 'Personalization'] },
    { name: 'Healthcare', useCases: ['Clinical notes analysis', 'Patient Q&A', 'Research mining', 'Symptom checker'] },
    { name: 'Finance', useCases: ['Document processing', 'Compliance monitoring', 'Fraud detection', 'Customer service'] },
    { name: 'Legal', useCases: ['Contract review', 'Case research', 'Document analysis', 'Due diligence'] },
    { name: 'HR', useCases: ['Resume screening', 'Employee feedback', 'Policy Q&A', 'Onboarding assistant'] },
    { name: 'Media', useCases: ['Content tagging', 'Trend analysis', 'Summarization', 'Recommendation'] },
  ];

  const techStack = [
    { category: 'LLMs', items: ['GPT-4', 'Claude', 'Llama 2', 'BERT', 'RoBERTa'] },
    { category: 'Frameworks', items: ['spaCy', 'Hugging Face', 'NLTK', 'Stanford NLP'] },
    { category: 'Cloud NLP', items: ['AWS Comprehend', 'Azure Text', 'Google NLP', 'IBM Watson'] },
  ];

  const packages = [
    { name: 'Starter', price: '₹1,99,999', duration: '4-6 weeks', features: ['Single NLP application', 'Pre-trained models', 'API integration', 'Basic customization', '3 months support'], color: 'from-green-500 to-teal-500' },
    { name: 'Professional', price: '₹4,49,999', duration: '8-12 weeks', features: ['Multiple NLP features', 'Custom model training', 'Advanced fine-tuning', 'Analytics dashboard', 'Multi-language', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹9,99,999+', duration: '12-16 weeks', features: ['Enterprise NLP platform', 'Custom LLM training', 'On-premise deployment', 'Full integration', 'Dedicated support', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    { question: 'What is NLP and how can it benefit my business?', answer: 'Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. Business benefits include: Automating customer support (40-60% cost reduction), Extracting insights from documents (80% faster processing), Understanding customer sentiment at scale, Enabling voice and chat interfaces, Automating content creation and analysis. Companies using NLP see 3-5x productivity gains in text-heavy processes.' },
    { question: 'Which NLP model is best for my use case?', answer: 'Model selection depends on requirements: GPT-4/Claude - best for generation, conversation, complex understanding. BERT/RoBERTa - optimal for classification, NER, sentiment. spaCy - fast, efficient for standard NLP tasks. Domain-specific models - better accuracy for specialized fields. We typically recommend: Starting with pre-trained models, Fine-tuning on your data for 10-20% accuracy boost, Custom training only when absolutely necessary.' },
    { question: 'How accurate are your NLP solutions?', answer: 'Accuracy varies by task and domain: Sentiment analysis: 85-92% accuracy. Text classification: 85-95% accuracy. Named entity recognition: 90-98% accuracy. Document extraction: 85-95% accuracy. Chatbot intent: 80-90% accuracy. We improve accuracy through: Domain-specific fine-tuning, Active learning from corrections, Ensemble models for critical applications, Human-in-the-loop for edge cases.' },
    { question: 'Can NLP work with non-English languages?', answer: 'Yes, we support 20+ languages including Hindi, Tamil, Telugu, Bengali, and other Indian languages. Options include: Multilingual models (mBERT, XLM-R) - 100+ languages. Language-specific models - higher accuracy for specific languages. Translation-based approaches - leverage English models with translation. Indian language support - specialized models for regional languages. Hindi NLP accuracy is typically 5-10% lower than English but improving rapidly.' },
    { question: 'How do you handle domain-specific terminology?', answer: 'We customize NLP for your domain through: Custom vocabulary and entity types, Fine-tuning on domain documents, Industry-specific pre-trained models (BioBERT for medical, FinBERT for finance), Feedback loops to learn from corrections, Regular model updates with new terminology. Domain adaptation typically improves accuracy by 15-25% compared to general models.' },
    { question: 'What data do you need for NLP development?', answer: 'Requirements depend on the solution: Chatbots - 200-500 sample conversations, Classification - 500-2000 labeled examples per category, NER - 1000+ annotated documents, Sentiment - 1000+ labeled examples. We can start with less data using: Transfer learning from pre-trained models, Data augmentation techniques, Active learning to optimize labeling, Zero-shot/few-shot approaches with LLMs. We help with data collection and annotation if needed.' },
  ];

  const serviceSchema = generateServiceSchema('Natural Language Processing (NLP) Solutions', 'Comprehensive NLP services including chatbots, sentiment analysis, document processing, and custom language models.');
  const productSchema = generateProductSchema('NLP Development Package', 'Custom NLP solution with chatbots, text analytics, and document processing capabilities.', '199999');

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft NLP Platform',
    description: 'Enterprise NLP platform with chatbots, sentiment analysis, document understanding, text classification, and multi-language support including Hindi and regional languages.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, API',
    price: '199999',
    rating: 4.9,
    reviewCount: 56,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AI Services', url: '/ai-services' }, { name: 'NLP Solutions', url: '/nlp-solutions' }]);
  const reviewSchema = generateReviewSchema([
    { author: 'Kavitha Reddy', rating: 5, reviewBody: 'The chatbot EifaSoft built handles 70% of our customer queries automatically. Hindi support works beautifully for our tier-2 city customers.' },
    { author: 'Amit Joshi', rating: 5, reviewBody: 'Their sentiment analysis tool monitors 50K+ reviews daily. We catch issues before they go viral. Incredible accuracy in Hindi and English.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero title="NLP Solutions" subtitle="Make Machines Understand Language" description="Unlock the power of Natural Language Processing. Build intelligent chatbots, analyze sentiment, extract insights from documents. 50+ NLP projects delivered across industries." ctaPrimary={{ text: 'Discuss Your NLP Project', href: '#contact' }} ctaSecondary={{ text: 'View Solutions', href: '#solutions' }} gradient="green" />

      {/* What is NLP - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-teal-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Natural Language Processing (NLP)?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Natural Language Processing (NLP)</strong> is a branch of AI that enables computers to understand, interpret, and generate human language. It combines computational linguistics with machine learning to process text and speech. Key applications include chatbots, sentiment analysis, document understanding, machine translation, and text extraction. Modern NLP uses transformer models like BERT, GPT, and custom LLMs to achieve 85-95% accuracy across languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  NLP solutions starting at ₹1,99,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  GPT-4, BERT, spaCy, custom models
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  50-60% support cost reduction
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  4-16 weeks development
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Hindi + 20 languages supported
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  85-95% NLP accuracy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is NLP */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">What is Natural Language Processing?</h2>
          <p className="text-xl text-gray-700 text-center mb-8">NLP enables machines to read, understand, and derive meaning from human language. From chatbots to document analysis, NLP transforms how businesses interact with text data.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-green-600">80%</div><p className="text-gray-600">of business data is unstructured text</p></div>
            <div className="bg-blue-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-blue-600">60%</div><p className="text-gray-600">cost reduction with NLP automation</p></div>
            <div className="bg-purple-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-purple-600">3x</div><p className="text-gray-600">faster document processing</p></div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">NLP Solutions We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{sol.desc}</p>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">{sol.metrics}</div>
                <ul className="space-y-1">
                  {sol.features.map((f, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">•</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">NLP Across Industries</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-green-600 mb-2">{ind.name}</h3>
                <ul className="space-y-1">
                  {ind.useCases.map((uc, idx) => (
                    <li key={idx} className="text-xs text-gray-600">{uc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our NLP Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-green-300 mb-3">{stack.category}</h3>
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

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">NLP Development Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-green-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-green-600 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="text-3xl font-bold my-2">{pkg.price}</div>
                  <p className="text-sm opacity-90">{pkg.duration}</p>
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
          <ContactForm serviceName="NLP Solutions" />
        </div>
      </section>
    </main>
  );
}

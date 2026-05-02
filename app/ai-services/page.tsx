import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'AI Services & Solutions | Custom AI Development | EifaSoft Technologies',
    description: 'Transform your business with cutting-edge AI services. Custom AI solutions, machine learning, NLP, computer vision, predictive analytics. Expert AI development company in India.',
    canonical: '/ai-services',
    keywords: ['AI services', 'artificial intelligence development', 'machine learning solutions', 'AI consulting', 'custom AI development', 'AI integration', 'NLP services', 'computer vision', 'predictive analytics', 'AI automation', 'deep learning development', 'AI model training', 'AI chatbot development', 'AI powered applications', 'generative AI development', 'LLM integration', 'AI solutions india', 'business AI automation', 'AI development company india', 'data science services', 'AI for enterprises', 'machine learning india'],
  });
}

export default function AIServicesPage() {
  const serviceSchema = generateServiceSchema(
    'AI Services & Solutions',
    'Comprehensive artificial intelligence services including custom AI development, machine learning solutions, natural language processing, computer vision, and predictive analytics for businesses.'
  );

  const productSchema = generateProductSchema(
    'AI Development Services',
    'End-to-end AI development services from consultation to deployment',
    '2,50,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft AI Services Platform',
    description: 'Comprehensive artificial intelligence platform offering custom AI development, machine learning models, NLP solutions, computer vision systems, predictive analytics, and AI-powered automation for enterprises.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, On-Premise, Hybrid',
    price: '250000',
    rating: 4.9,
    reviewCount: 124,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqs = [
    {
      question: 'What AI services does EifaSoft Technologies offer?',
      answer: 'We offer comprehensive AI services including custom AI model development, machine learning solutions, natural language processing (NLP), computer vision, predictive analytics, AI chatbots, recommendation systems, and AI-powered automation. Our services cover the entire AI development lifecycle from consultation and strategy to development, deployment, and maintenance.',
    },
    {
      question: 'How long does it take to develop a custom AI solution?',
      answer: 'The timeline for AI development varies based on project complexity. A simple AI chatbot might take 4-6 weeks, while complex machine learning models or computer vision systems can take 3-6 months. We provide detailed project timelines during the consultation phase after understanding your specific requirements.',
    },
    {
      question: 'What industries do you provide AI solutions for?',
      answer: 'We serve diverse industries including healthcare (diagnosis, patient care), finance (fraud detection, risk assessment), e-commerce (recommendations, personalization), manufacturing (predictive maintenance), retail (inventory optimization), education (personalized learning), and logistics (route optimization). Our AI solutions are customizable for any industry.',
    },
    {
      question: 'Do you provide AI model training and fine-tuning services?',
      answer: 'Yes, we offer comprehensive AI model training services including data preparation, model selection, training optimization, fine-tuning pre-trained models (like GPT, BERT, YOLO), hyperparameter tuning, and continuous model improvement. We work with your data to create highly accurate, domain-specific AI models.',
    },
    {
      question: 'What is the cost of AI development services?',
      answer: 'AI development costs range from ₹2,50,000 for basic AI solutions to ₹25,00,000+ for enterprise-grade systems. Pricing depends on project complexity, data volume, model sophistication, integration requirements, and deployment infrastructure. We offer flexible pricing models including fixed-price, time & material, and dedicated team options.',
    },
    {
      question: 'How do you ensure AI model accuracy and performance?',
      answer: 'We follow rigorous development practices including comprehensive data validation, cross-validation techniques, A/B testing, performance monitoring, continuous evaluation metrics (accuracy, precision, recall, F1-score), regular model retraining with new data, and extensive testing across different scenarios to ensure high accuracy and reliability.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
  ]);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="AI Services & Solutions"
        subtitle="Transform Your Business with Cutting-Edge Artificial Intelligence"
        description="Leverage the power of AI to automate processes, gain insights, and drive innovation. Custom AI development, machine learning, NLP, computer vision, and predictive analytics tailored to your business needs."
        gradient="blue"
      />

      {/* What is AI - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What are AI Services?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>AI Services</strong> encompass the design, development, and deployment of artificial intelligence solutions for businesses. This includes machine learning model development, natural language processing (NLP), computer vision systems, predictive analytics, and AI-powered automation. AI services help organizations automate processes, gain actionable insights from data, enhance customer experiences, and drive innovation through intelligent systems that learn and adapt.
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
                  AI development starting at ₹2,50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  ML, NLP, Computer Vision, Analytics
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Custom AI model training & fine-tuning
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  4 weeks - 6 months development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Healthcare, Finance, E-commerce, Manufacturing
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  End-to-end AI lifecycle support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Capabilities</h2>
            <p className="text-lg text-gray-600">
              Comprehensive artificial intelligence solutions powered by latest AI technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Machine Learning',
                description: 'Build predictive models, classification systems, and regression algorithms using supervised, unsupervised, and reinforcement learning techniques.',
                icon: '🤖',
              },
              {
                title: 'Natural Language Processing',
                description: 'Develop chatbots, sentiment analysis, text classification, language translation, and document understanding systems.',
                icon: '💬',
              },
              {
                title: 'Computer Vision',
                description: 'Create image recognition, object detection, facial recognition, OCR, and visual inspection systems for various applications.',
                icon: '👁️',
              },
              {
                title: 'Predictive Analytics',
                description: 'Build forecasting models for sales, demand, customer churn, risk assessment, and business intelligence applications.',
                icon: '📊',
              },
              {
                title: 'AI Automation',
                description: 'Automate repetitive tasks, document processing, data entry, quality control, and business workflows using AI.',
                icon: '⚙️',
              },
              {
                title: 'Recommendation Systems',
                description: 'Develop personalized recommendation engines for products, content, services using collaborative and content-based filtering.',
                icon: '🎯',
              },
              {
                title: 'Generative AI',
                description: 'Implement GPT-based solutions, content generation, code generation, image generation, and creative AI applications.',
                icon: '✨',
              },
              {
                title: 'Speech Recognition',
                description: 'Build voice assistants, speech-to-text systems, voice commands, and audio analysis applications.',
                icon: '🎙️',
              },
              {
                title: 'Anomaly Detection',
                description: 'Develop fraud detection, quality control, network security, and outlier detection systems using AI.',
                icon: '🔍',
              },
            ].map((capability) => (
              <div key={capability.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases by Industry */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Use Cases by Industry</h2>
            <p className="text-lg text-gray-600">
              Discover how AI transforms businesses across different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: 'Healthcare',
                useCases: ['Medical diagnosis & imaging', 'Patient risk prediction', 'Drug discovery', 'Treatment recommendations', 'Healthcare chatbots'],
              },
              {
                industry: 'Finance & Banking',
                useCases: ['Fraud detection', 'Credit risk assessment', 'Algorithmic trading', 'Customer service automation', 'Anti-money laundering'],
              },
              {
                industry: 'E-Commerce & Retail',
                useCases: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer segmentation', 'Visual search'],
              },
              {
                industry: 'Manufacturing',
                useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production forecasting', 'Defect detection'],
              },
              {
                industry: 'Logistics & Transportation',
                useCases: ['Route optimization', 'Demand forecasting', 'Fleet management', 'Delivery time prediction', 'Warehouse automation'],
              },
              {
                industry: 'Marketing & Sales',
                useCases: ['Lead scoring', 'Customer churn prediction', 'Content personalization', 'Campaign optimization', 'Sentiment analysis'],
              },
            ].map((item) => (
              <div key={item.industry} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{item.industry}</h3>
                <ul className="space-y-2">
                  {item.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Technology Stack</h2>
            <p className="text-lg text-gray-600">
              We work with cutting-edge AI frameworks, libraries, and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">ML Frameworks</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>Keras</li>
                <li>XGBoost</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">NLP Tools</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>OpenAI GPT</li>
                <li>Hugging Face</li>
                <li>spaCy</li>
                <li>NLTK</li>
                <li>BERT</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Computer Vision</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>OpenCV</li>
                <li>YOLO</li>
                <li>Detectron2</li>
                <li>MediaPipe</li>
                <li>TensorFlow Lite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Cloud & Deploy</h3>
              <ul className="space-y-2 text-center text-gray-700">
                <li>AWS SageMaker</li>
                <li>Google Cloud AI</li>
                <li>Azure ML</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Development Process</h2>
            <p className="text-lg text-gray-600">
              Systematic approach to building robust AI solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Consultation',
                  description: 'Understand business goals, identify AI opportunities, assess data readiness, and define success metrics.',
                },
                {
                  step: '02',
                  title: 'Data Collection & Preparation',
                  description: 'Gather relevant data, clean and preprocess, handle missing values, perform feature engineering, and split datasets.',
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Select appropriate algorithms, train models, optimize hyperparameters, and validate performance.',
                },
                {
                  step: '04',
                  title: 'Testing & Validation',
                  description: 'Rigorous testing with real-world scenarios, cross-validation, A/B testing, and performance benchmarking.',
                },
                {
                  step: '05',
                  title: 'Deployment & Integration',
                  description: 'Deploy to production environment, integrate with existing systems, set up monitoring, and ensure scalability.',
                },
                {
                  step: '06',
                  title: 'Monitoring & Maintenance',
                  description: 'Continuous monitoring, model retraining, performance optimization, and regular updates with new data.',
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Services Pricing</h2>
            <p className="text-lg text-gray-600">
              Flexible pricing options to suit projects of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter AI',
                price: '₹2,50,000',
                duration: 'Starting from',
                features: [
                  'Basic ML model development',
                  'Simple chatbot or NLP',
                  'Pre-trained model integration',
                  'Up to 10,000 data points',
                  '3 months support',
                  'Basic analytics dashboard',
                  'API integration',
                  'Documentation',
                ],
                popular: false,
              },
              {
                name: 'Professional AI',
                price: '₹8,50,000',
                duration: 'Starting from',
                features: [
                  'Custom ML model training',
                  'Advanced NLP or computer vision',
                  'Custom dataset preparation',
                  'Up to 100,000 data points',
                  '6 months support',
                  'Advanced analytics',
                  'Cloud deployment',
                  'Model optimization',
                  'Performance monitoring',
                ],
                popular: true,
              },
              {
                name: 'Enterprise AI',
                price: 'Custom',
                duration: 'Contact us',
                features: [
                  'Multiple AI models',
                  'Complex deep learning',
                  'Big data processing',
                  'Unlimited data points',
                  '12 months support',
                  'Dedicated AI team',
                  'Scalable infrastructure',
                  'Continuous training',
                  'SLA guarantees',
                  'Priority support',
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View AI Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started with AI</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our AI experts will contact you within 24 hours
              </p>
            </div>
            <ContactForm serviceName="AI Services" />
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Custom AI Models Development | AI Model Training | EifaSoft Technologies',
    description: 'Build custom AI models tailored to your business needs. Expert AI model training, fine-tuning, deployment, and optimization services. Transform your data into intelligent solutions.',
    canonical: '/custom-ai-models',
    keywords: ['custom AI models', 'AI model training', 'machine learning models', 'AI model development', 'model fine-tuning', 'AI model deployment', 'deep learning models', 'AI model optimization', 'custom ML solutions', 'AI consulting', 'LLM fine-tuning', 'GPT fine-tuning', 'BERT fine-tuning', 'custom NLP models', 'computer vision models', 'AI model india', 'machine learning development india', 'transfer learning services', 'AI training data preparation', 'AI inference optimization', 'domain-specific AI models', 'AI model as a service'],
  });
}

export default function CustomAIModelsPage() {
  const serviceSchema = generateServiceSchema(
    'Custom AI Models Development',
    'Professional custom AI model development services including training, fine-tuning, deployment, and optimization. Build AI models specifically designed for your business requirements and data.'
  );

  const productSchema = generateProductSchema(
    'Custom AI Model Development Services',
    'End-to-end custom AI model development from data preparation to production deployment',
    '5,00,000'
  );

  const faqs = [
    {
      question: 'What is a custom AI model and why do I need one?',
      answer: 'A custom AI model is specifically trained on your business data to solve your unique challenges. Unlike generic pre-trained models, custom models understand your domain-specific terminology, patterns, and requirements, providing superior accuracy and relevance. You need a custom model when off-the-shelf solutions don&apos;t meet your specific business needs or when dealing with proprietary data and processes.',
    },
    {
      question: 'How much data do I need to train a custom AI model?',
      answer: 'Data requirements vary by task complexity. For simple classification, 1,000-5,000 labeled examples might suffice. Complex tasks like NLP or computer vision typically need 10,000-100,000+ examples. We can also use transfer learning and data augmentation techniques to achieve good results with smaller datasets. During consultation, we&apos;ll assess your data and recommend the best approach.',
    },
    {
      question: 'What is the process for developing a custom AI model?',
      answer: 'Our process includes: 1) Requirements analysis and data assessment, 2) Data collection, cleaning, and labeling, 3) Feature engineering and preprocessing, 4) Model architecture selection, 5) Training and hyperparameter tuning, 6) Validation and testing, 7) Deployment to production, 8) Monitoring and continuous improvement. Typical timeline is 2-6 months depending on complexity.',
    },
    {
      question: 'Can you fine-tune existing models like GPT or BERT for my use case?',
      answer: 'Yes! We specialize in fine-tuning pre-trained models (GPT-3/4, BERT, Llama, YOLO, ResNet, etc.) for domain-specific applications. This approach leverages the knowledge of large models while adapting them to your specific needs, often requiring less data and time than training from scratch. We&apos;ve successfully fine-tuned models for legal, medical, financial, and industrial applications.',
    },
    {
      question: 'How do you ensure my custom AI model remains accurate over time?',
      answer: 'We implement continuous monitoring, automatic performance tracking, data drift detection, and regular model retraining pipelines. We set up MLOps infrastructure to monitor key metrics, alert on performance degradation, and automatically retrain models with fresh data. We also provide ongoing maintenance packages to ensure your model stays accurate as your business evolves.',
    },
    {
      question: 'What is the cost of developing a custom AI model?',
      answer: 'Costs range from ₹5,00,000 for simple models to ₹50,00,000+ for complex deep learning systems. Factors affecting cost include: data volume and quality, model complexity, training infrastructure requirements, deployment needs, and ongoing maintenance. We offer flexible pricing including fixed-price projects, time & material, and dedicated team models. Contact us for a detailed quote.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'Custom AI Models', url: '/custom-ai-models' },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Custom AI Model Development Platform',
    description: 'Enterprise platform for building, training, and deploying custom AI models tailored to specific business requirements. Supports NLP, computer vision, predictive models, and more.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cloud, On-Premise',
    price: '500000',
    rating: 4.9,
    reviewCount: 76,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Custom AI Models Development"
        subtitle="Build AI Models Tailored to Your Business"
        description="Transform your data into intelligent, production-ready AI models. Expert training, fine-tuning, and deployment of custom machine learning and deep learning models designed specifically for your unique business challenges."
        gradient="blue"
      />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is Custom AI Model Development?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Custom AI Model Development</strong> is the process of building machine learning and deep learning models specifically designed for your unique business requirements and data. Unlike off-the-shelf AI solutions, custom models are trained on your proprietary data, understand your domain-specific context, and are optimized for your particular use cases—delivering superior accuracy and relevance compared to generic AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🎯</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Domain-Specific Accuracy</p>
                  <p className="text-sm text-gray-600">Models trained on your data outperform generic solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Transfer Learning</p>
                  <p className="text-sm text-gray-600">Fine-tune GPT, BERT, Llama, YOLO for your use case</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Full Ownership</p>
                  <p className="text-sm text-gray-600">Complete control over your AI models and data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Production-Ready Deployment</p>
                  <p className="text-sm text-gray-600">API, containerization, and cloud infrastructure included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom AI Models We Build</h2>
            <p className="text-lg text-gray-600">
              Specialized AI models for diverse business applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom NLP Models',
                description: 'Domain-specific language models for text classification, named entity recognition, sentiment analysis, summarization, and question answering.',
                examples: ['Legal document analysis', 'Medical text processing', 'Financial report extraction'],
              },
              {
                title: 'Computer Vision Models',
                description: 'Custom image and video analysis models for object detection, classification, segmentation, OCR, and visual inspection.',
                examples: ['Quality control inspection', 'Medical image diagnosis', 'Inventory counting'],
              },
              {
                title: 'Predictive Models',
                description: 'Time series forecasting, demand prediction, risk assessment, and business analytics models trained on your historical data.',
                examples: ['Sales forecasting', 'Customer churn prediction', 'Stock price prediction'],
              },
              {
                title: 'Recommendation Models',
                description: 'Personalized recommendation systems using collaborative filtering, content-based, and hybrid approaches.',
                examples: ['Product recommendations', 'Content suggestions', 'Service matching'],
              },
              {
                title: 'Anomaly Detection Models',
                description: 'Fraud detection, quality control, network security, and outlier identification models.',
                examples: ['Transaction fraud detection', 'Manufacturing defects', 'Cybersecurity threats'],
              },
              {
                title: 'Speech & Audio Models',
                description: 'Custom speech recognition, speaker identification, emotion detection, and audio classification models.',
                examples: ['Voice assistants', 'Call center analytics', 'Audio quality control'],
              },
            ].map((model) => (
              <div key={model.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="space-y-1">
                  {model.examples.map((example) => (
                    <div key={example} className="flex items-center text-sm text-blue-600">
                      <span className="mr-2">→</span>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Training Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Model Training Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive AI model development from data to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                service: 'Data Preparation & Labeling',
                description: 'Professional data collection, cleaning, annotation, and augmentation services to ensure high-quality training datasets.',
                features: ['Data quality assessment', 'Automated data cleaning', 'Expert data labeling', 'Data augmentation', 'Dataset balancing'],
              },
              {
                service: 'Model Architecture Design',
                description: 'Custom neural network architecture design optimized for your specific use case and performance requirements.',
                features: ['Architecture selection', 'Custom layer design', 'Transfer learning setup', 'Model optimization', 'Performance tuning'],
              },
              {
                service: 'Training & Fine-Tuning',
                description: 'Expert model training with hyperparameter optimization, regularization, and validation to achieve maximum accuracy.',
                features: ['Distributed training', 'Hyperparameter tuning', 'Cross-validation', 'Regularization techniques', 'Early stopping'],
              },
              {
                service: 'Model Evaluation & Testing',
                description: 'Comprehensive testing with multiple metrics, A/B testing, and real-world scenario validation.',
                features: ['Performance metrics', 'Confusion matrix analysis', 'ROC/AUC evaluation', 'A/B testing', 'Edge case testing'],
              },
              {
                service: 'Model Deployment',
                description: 'Production-ready deployment with API integration, containerization, and cloud infrastructure setup.',
                features: ['REST API development', 'Docker containerization', 'Cloud deployment', 'Load balancing', 'CI/CD pipelines'],
              },
              {
                service: 'MLOps & Monitoring',
                description: 'Continuous monitoring, automated retraining, and performance optimization for production models.',
                features: ['Performance monitoring', 'Data drift detection', 'Auto-retraining', 'Version control', 'A/B experimentation'],
              },
            ].map((item) => (
              <div key={item.service} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-3">{item.service}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine-Tuning Pre-trained Models */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pre-trained Model Fine-Tuning</h2>
            <p className="text-lg text-gray-600">
              Leverage state-of-the-art models and adapt them to your specific needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Language Models</h3>
                <p className="text-gray-600">GPT-3/4, BERT, Llama, Claude, Falcon</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Vision Models</h3>
                <p className="text-gray-600">YOLO, ResNet, EfficientNet, ViT</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎙️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Audio Models</h3>
                <p className="text-gray-600">Whisper, Wav2Vec2, SpeechT5</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Fine-Tune Instead of Training from Scratch?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">✓ Faster Development</h4>
                  <p className="text-gray-700">Fine-tuning takes weeks instead of months, leveraging pre-learned features.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">✓ Less Data Required</h4>
                  <p className="text-gray-700">Achieve great results with 10-100x less training data than from-scratch training.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">✓ Lower Costs</h4>
                  <p className="text-gray-700">Reduced computational resources and development time translate to lower costs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">✓ Better Performance</h4>
                  <p className="text-gray-700">Benefit from knowledge learned on billions of parameters and massive datasets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Model Development Process</h2>
            <p className="text-lg text-gray-600">
              Proven methodology for building production-ready AI models
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1: Discovery & Planning',
                  duration: '1-2 weeks',
                  tasks: ['Requirements gathering', 'Data assessment', 'Feasibility analysis', 'Success metrics definition', 'Project roadmap'],
                },
                {
                  phase: 'Phase 2: Data Preparation',
                  duration: '2-4 weeks',
                  tasks: ['Data collection', 'Data cleaning & preprocessing', 'Data labeling & annotation', 'Feature engineering', 'Dataset splitting'],
                },
                {
                  phase: 'Phase 3: Model Development',
                  duration: '4-8 weeks',
                  tasks: ['Architecture selection', 'Model training', 'Hyperparameter optimization', 'Cross-validation', 'Performance evaluation'],
                },
                {
                  phase: 'Phase 4: Testing & Validation',
                  duration: '2-3 weeks',
                  tasks: ['Unit testing', 'Integration testing', 'A/B testing', 'Edge case validation', 'Performance benchmarking'],
                },
                {
                  phase: 'Phase 5: Deployment',
                  duration: '1-2 weeks',
                  tasks: ['API development', 'Containerization', 'Cloud deployment', 'Load testing', 'Production launch'],
                },
                {
                  phase: 'Phase 6: Monitoring & Optimization',
                  duration: 'Ongoing',
                  tasks: ['Performance monitoring', 'Data drift tracking', 'Model retraining', 'Continuous optimization', 'Support & maintenance'],
                },
              ].map((step, index) => (
                <div key={step.phase} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{step.phase}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.tasks.map((task) => (
                        <span key={task} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded">
                          {task}
                        </span>
                      ))}
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom AI Model Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing based on project complexity and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Model',
                price: '₹5,00,000',
                duration: 'Starting from',
                features: [
                  'Simple classification model',
                  'Up to 10,000 training samples',
                  'Standard algorithms',
                  'Basic data preprocessing',
                  'Model deployment',
                  '3 months support',
                  'Documentation',
                  'API integration',
                ],
                popular: false,
              },
              {
                name: 'Advanced Model',
                price: '₹15,00,000',
                duration: 'Starting from',
                features: [
                  'Complex deep learning model',
                  'Up to 100,000 training samples',
                  'Custom architecture',
                  'Advanced feature engineering',
                  'Cloud deployment',
                  '6 months support',
                  'MLOps setup',
                  'Performance monitoring',
                  'Monthly retraining',
                ],
                popular: true,
              },
              {
                name: 'Enterprise Model',
                price: 'Custom',
                duration: 'Contact us',
                features: [
                  'Multiple AI models',
                  'Unlimited training data',
                  'State-of-the-art architecture',
                  'Extensive data engineering',
                  'Scalable infrastructure',
                  '12 months support',
                  'Dedicated AI team',
                  'Continuous optimization',
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
                  Get Quote
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Custom AI Model?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our AI experts help you design, train, and deploy the perfect model for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/ai-services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discuss Your AI Model Requirements</h2>
              <p className="text-lg text-gray-600">
                Share your project details and we&apos;ll provide a customized solution proposal
              </p>
            </div>
            <ContactForm serviceName="Custom AI Models" />
          </div>
        </div>
      </section>
    </main>
  );
}

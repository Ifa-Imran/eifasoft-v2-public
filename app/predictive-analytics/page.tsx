import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Predictive Analytics Services India | AI Forecasting Solutions | EifaSoft',
    description: 'Expert predictive analytics services in India. Demand forecasting, churn prediction, risk modeling, sales forecasting. Custom ML models for accurate business predictions. Starting ₹2,49,999.',
    canonical: '/predictive-analytics',
    keywords: [
      'predictive analytics services', 'predictive analytics India', 'AI forecasting',
      'demand forecasting', 'churn prediction', 'sales forecasting AI',
      'risk modeling', 'predictive maintenance', 'customer analytics',
      'machine learning forecasting', 'business intelligence AI', 'data science services',
      'trend analysis', 'predictive modeling', 'forecasting solutions India',
      'time series forecasting', 'regression modeling', 'classification models',
    ],
  });
}

export default function PredictiveAnalytics() {
  const solutions = [
    { icon: '📈', title: 'Demand Forecasting', desc: 'Predict future demand with AI-powered accuracy', features: ['Sales forecasting', 'Inventory optimization', 'Supply chain planning', 'Seasonal adjustments', 'External factor modeling'], metrics: '20-30% accuracy improvement' },
    { icon: '👥', title: 'Customer Churn Prediction', desc: 'Identify at-risk customers before they leave', features: ['Churn scoring', 'Risk factors identification', 'Retention triggers', 'Intervention recommendations', 'LTV prediction'], metrics: '40% churn reduction' },
    { icon: '💰', title: 'Revenue & Sales Forecasting', desc: 'Accurate financial projections for better planning', features: ['Pipeline forecasting', 'Deal scoring', 'Territory planning', 'Quota optimization', 'What-if scenarios'], metrics: '95% forecast accuracy' },
    { icon: '⚠️', title: 'Risk & Fraud Detection', desc: 'Identify potential risks before they materialize', features: ['Credit risk scoring', 'Fraud detection', 'Anomaly detection', 'Compliance monitoring', 'Real-time alerts'], metrics: '60% fraud reduction' },
    { icon: '🔧', title: 'Predictive Maintenance', desc: 'Prevent equipment failures before they occur', features: ['Failure prediction', 'Maintenance scheduling', 'Part replacement timing', 'Downtime reduction', 'Cost optimization'], metrics: '35% maintenance cost reduction' },
    { icon: '🎯', title: 'Customer Analytics', desc: 'Understand and predict customer behavior', features: ['Segmentation', 'Next-best-action', 'Cross-sell/upsell', 'Campaign optimization', 'Customer journey prediction'], metrics: '25% conversion increase' },
  ];

  const industries = [
    { name: 'Retail', useCases: ['Demand forecasting', 'Price optimization', 'Inventory management', 'Customer lifetime value'], impact: '15-25% revenue increase' },
    { name: 'Finance', useCases: ['Credit scoring', 'Fraud detection', 'Market prediction', 'Risk assessment'], impact: '30% risk reduction' },
    { name: 'Manufacturing', useCases: ['Predictive maintenance', 'Quality prediction', 'Supply optimization', 'Production planning'], impact: '35% downtime reduction' },
    { name: 'Healthcare', useCases: ['Patient risk scoring', 'Resource planning', 'Treatment outcomes', 'Readmission prediction'], impact: '20% cost reduction' },
    { name: 'Telecom', useCases: ['Churn prediction', 'Network optimization', 'Customer value', 'Capacity planning'], impact: '40% churn reduction' },
    { name: 'Logistics', useCases: ['Route optimization', 'Delivery prediction', 'Fleet maintenance', 'Demand planning'], impact: '20% efficiency gain' },
  ];

  const techStack = [
    { category: 'ML Frameworks', items: ['scikit-learn', 'XGBoost', 'LightGBM', 'Prophet', 'TensorFlow'] },
    { category: 'Time Series', items: ['ARIMA', 'LSTM', 'Transformer', 'NeuralProphet'] },
    { category: 'Cloud ML', items: ['AWS SageMaker', 'Azure ML', 'Google AutoML', 'Databricks'] },
    { category: 'Visualization', items: ['Tableau', 'Power BI', 'Plotly', 'Custom Dashboards'] },
  ];

  const packages = [
    { name: 'Starter', price: '₹2,49,999', duration: '6-8 weeks', features: ['Single prediction model', 'Data preparation', 'Model training', 'API deployment', 'Basic dashboard', '3 months support'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Professional', price: '₹5,49,999', duration: '10-14 weeks', features: ['Multiple models', 'Advanced feature engineering', 'Ensemble methods', 'Real-time predictions', 'Interactive dashboards', 'Automated retraining', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹10,00,000+', duration: '16-24 weeks', features: ['Enterprise platform', 'Custom AI models', 'Full integration', 'Self-service analytics', 'MLOps pipeline', 'Dedicated support', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    { question: 'What is Predictive Analytics and how does it work?', answer: 'Predictive Analytics uses historical data, statistical algorithms, and machine learning to forecast future outcomes. The process involves: Data collection and preparation, Feature engineering and selection, Model training and validation, Deployment and monitoring, Continuous improvement. Unlike traditional BI that tells you what happened, predictive analytics tells you what will happen, enabling proactive decision-making.' },
    { question: 'How accurate are your predictive models?', answer: 'Accuracy varies by use case and data quality: Demand forecasting: 85-95% accuracy (MAPE 5-15%), Churn prediction: 80-90% AUC, Classification tasks: 85-95% accuracy, Anomaly detection: 95%+ detection rate. We provide confidence intervals with predictions and implement ensemble methods for critical applications. Model accuracy typically improves 10-20% over time with feedback loops.' },
    { question: 'What data do you need for predictive analytics?', answer: 'Requirements depend on the use case: Historical data: 2-3 years for seasonal patterns, 6-12 months minimum. Volume: 10,000+ records for robust models, less with transfer learning. Features: Relevant variables affecting the outcome. Quality: Clean, consistent data improves accuracy significantly. We help with data preparation, missing value handling, and feature engineering. Even with limited data, we can leverage transfer learning and external data sources.' },
    { question: 'How long does it take to build a predictive model?', answer: 'Timeline varies by complexity: Simple models (single variable): 4-6 weeks, Standard projects (multi-factor): 8-12 weeks, Complex platforms (multiple models): 16-24 weeks. Key phases: Data understanding (1-2 weeks), Feature engineering (2-4 weeks), Model development (2-4 weeks), Validation and testing (1-2 weeks), Deployment (1-2 weeks). We follow agile delivery with regular demonstrations.' },
    { question: 'Can predictive models integrate with our existing systems?', answer: 'Yes, we support multiple integration patterns: REST APIs for real-time predictions, Batch scoring for large datasets, Database integration (SQL/NoSQL), BI tool integration (Tableau, Power BI), ERP/CRM integration (SAP, Salesforce), Custom dashboards and alerts. We work with your existing data infrastructure and can deploy on-premise or cloud based on your requirements.' },
    { question: 'How do you handle model degradation over time?', answer: 'We implement comprehensive model management: Performance monitoring with automated alerts, Data drift detection for feature distributions, Model retraining triggers based on accuracy thresholds, A/B testing for model updates, Version control and rollback capabilities, Regular model reviews and improvements. Typical models need retraining quarterly, but we set up automated pipelines for continuous improvement.' },
  ];

  const serviceSchema = generateServiceSchema('Predictive Analytics Services', 'Custom predictive analytics including demand forecasting, churn prediction, risk modeling, and business intelligence solutions.');
  const productSchema = generateProductSchema('Predictive Analytics Package', 'Complete predictive analytics solution with custom models, dashboards, and automated forecasting.', '249999');
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AI Services', url: '/ai-services' }, { name: 'Predictive Analytics', url: '/predictive-analytics' }]);
  const reviewSchema = generateReviewSchema([
    { author: 'Arun Nair', rating: 5, reviewBody: 'EifaSoft\'s demand forecasting reduced our inventory costs by 25%. Predictions are remarkably accurate even with seasonal variations.' },
    { author: 'Priyanka Shah', rating: 5, reviewBody: 'Their churn prediction model helped us retain 40% more customers. The early warning system gives us time to intervene before it\'s too late.' },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Predictive Analytics Platform',
    description: 'Enterprise predictive analytics platform for demand forecasting, churn prediction, risk modeling, and business intelligence with AI-powered forecasting accuracy.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, On-Premise',
    price: '249999',
    rating: 4.8,
    reviewCount: 89,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero title="Predictive Analytics" subtitle="See Tomorrow, Act Today" description="Transform historical data into future insights. Custom predictive models for demand forecasting, churn prediction, and risk assessment. Make data-driven decisions with confidence." ctaPrimary={{ text: 'Get Prediction Strategy', href: '#contact' }} ctaSecondary={{ text: 'View Solutions', href: '#solutions' }} gradient="purple" />

      {/* Definition Box - AEO Optimized */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-3">What is Predictive Analytics?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Predictive Analytics</strong> is a branch of advanced analytics that uses historical data, statistical algorithms, and machine learning techniques to forecast future outcomes. It analyzes patterns in past data to predict future trends, behaviors, and events with measurable accuracy. Organizations use predictive analytics for demand forecasting, customer churn prediction, risk assessment, fraud detection, and operational optimization—enabling proactive decision-making rather than reactive responses.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimized */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">85-95% Forecast Accuracy</p>
                  <p className="text-sm text-gray-600">AI-powered predictions for demand, sales, and market trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">40% Churn Reduction</p>
                  <p className="text-sm text-gray-600">Early identification of at-risk customers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Real-time Predictions</p>
                  <p className="text-sm text-gray-600">Instant insights via API integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Industry-Specific Models</p>
                  <p className="text-sm text-gray-600">Tailored solutions for retail, finance, healthcare, manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-bold text-purple-300">95%</div><p className="text-purple-200">forecast accuracy</p></div>
            <div><div className="text-5xl font-bold text-purple-300">40%</div><p className="text-purple-200">churn reduction</p></div>
            <div><div className="text-5xl font-bold text-purple-300">25%</div><p className="text-purple-200">revenue increase</p></div>
            <div><div className="text-5xl font-bold text-purple-300">35%</div><p className="text-purple-200">cost savings</p></div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Predictive Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{sol.desc}</p>
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">{sol.metrics}</div>
                <ul className="space-y-1">
                  {sol.features.map((f, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-purple-500">•</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Predictive Analytics Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">How Predictive Analytics Works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {['Data Collection', 'Feature Engineering', 'Model Training', 'Validation', 'Deployment'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">{index + 1}</div>
                <p className="mt-3 font-semibold text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => (
              <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-3">{ind.name}</h3>
                <ul className="space-y-2 mb-4">
                  {ind.useCases.map((uc, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {uc}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">{ind.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-purple-600 mb-3">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{item}</li>
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
          <h2 className="text-4xl font-bold text-center mb-12">Predictive Analytics Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-purple-600 text-white text-center py-2 font-semibold">Most Popular</div>}
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
          <ContactForm serviceName="Predictive Analytics" />
        </div>
      </section>
    </main>
  );
}

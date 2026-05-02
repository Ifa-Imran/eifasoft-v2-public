import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLOps Services India | AI Infrastructure & Model Deployment | EifaSoft',
    description: 'Enterprise MLOps services in India. ML pipeline automation, model deployment, monitoring, and AI infrastructure. AWS, Azure, GCP certified. Reduce model deployment time by 80%. Starting ₹3,99,999.',
    canonical: '/mlops-services',
    keywords: [
      'MLOps services', 'MLOps India', 'ML pipeline automation', 'model deployment services',
      'AI infrastructure', 'machine learning operations', 'ML model monitoring',
      'Kubernetes ML', 'ML platform development', 'feature store implementation',
      'model registry', 'ML CI/CD', 'AI DevOps', 'model serving',
      'AWS SageMaker', 'Azure ML', 'Google Vertex AI', 'Kubeflow',
      'MLflow implementation', 'data pipeline automation', 'ML engineering services',
    ],
  });
}

export default function MLOpsServices() {
  const services = [
    { icon: '🔄', title: 'ML Pipeline Automation', desc: 'End-to-end automated pipelines from data to deployment', features: ['Data ingestion automation', 'Feature engineering pipelines', 'Training orchestration', 'Model validation', 'Automated retraining'] },
    { icon: '🚀', title: 'Model Deployment', desc: 'Scalable, reliable model serving infrastructure', features: ['Real-time inference APIs', 'Batch prediction systems', 'A/B testing framework', 'Canary deployments', 'Auto-scaling'] },
    { icon: '📊', title: 'Model Monitoring', desc: 'Continuous performance and drift detection', features: ['Performance dashboards', 'Data drift detection', 'Model drift alerts', 'SLA monitoring', 'Automated alerts'] },
    { icon: '🏗️', title: 'AI Infrastructure', desc: 'Cloud-native ML platform architecture', features: ['GPU cluster setup', 'Kubernetes for ML', 'Cost optimization', 'Multi-cloud support', 'Edge deployment'] },
    { icon: '📦', title: 'Feature Store', desc: 'Centralized feature management and serving', features: ['Feature versioning', 'Online/offline serving', 'Feature discovery', 'Data lineage', 'Feature reuse'] },
    { icon: '🔐', title: 'ML Governance', desc: 'Compliance, security, and model management', features: ['Model registry', 'Experiment tracking', 'Audit trails', 'Access controls', 'Compliance reporting'] },
  ];

  const techStack = [
    { category: 'ML Platforms', items: ['AWS SageMaker', 'Azure ML', 'Google Vertex AI', 'Databricks'] },
    { category: 'Orchestration', items: ['Kubeflow', 'Apache Airflow', 'Prefect', 'Dagster'] },
    { category: 'Experiment Tracking', items: ['MLflow', 'Weights & Biases', 'Neptune', 'Comet'] },
    { category: 'Model Serving', items: ['TensorFlow Serving', 'Triton', 'Seldon', 'BentoML'] },
    { category: 'Feature Stores', items: ['Feast', 'Tecton', 'Hopsworks', 'AWS Feature Store'] },
    { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Terraform', 'Helm'] },
  ];

  const packages = [
    { name: 'Foundation', price: '₹3,99,999', duration: '6-8 weeks', features: ['ML pipeline setup', 'Model deployment API', 'Basic monitoring', 'MLflow integration', 'Single cloud', '3 months support'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Professional', price: '₹7,99,999', duration: '10-14 weeks', features: ['Advanced pipelines', 'Auto-scaling deployment', 'Full monitoring suite', 'Feature store setup', 'CI/CD integration', 'Multi-environment', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹15,00,000+', duration: '16-24 weeks', features: ['Enterprise ML platform', 'Multi-cloud/hybrid', 'Custom feature store', 'Full governance', 'Team training', 'SLA guarantee', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    { question: 'What is MLOps and why is it important?', answer: 'MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It\'s critical because: 87% of ML projects never reach production without proper MLOps, Manual deployments take weeks vs hours with automation, Models degrade over time without monitoring, Team productivity increases 3-5x with proper tooling. MLOps bridges the gap between data science experiments and production systems.' },
    { question: 'Which cloud platform is best for ML workloads?', answer: 'Each platform has strengths: AWS SageMaker - broadest ecosystem, mature tooling, best for AWS-centric orgs. Azure ML - excellent enterprise integration, Microsoft stack compatibility. Google Vertex AI - best for TensorFlow, cutting-edge AI capabilities. Databricks - superior for data engineering + ML unified workflows. We help choose based on your existing infrastructure, team skills, and specific requirements.' },
    { question: 'How do you handle model monitoring and drift detection?', answer: 'Our monitoring covers: Performance metrics (latency, throughput, errors), Prediction quality (accuracy, precision, recall), Data drift (feature distribution changes), Model drift (prediction distribution changes), Business metrics (downstream impact). We set up automated alerts, dashboards, and retraining triggers. Typical setup detects drift within hours, not weeks.' },
    { question: 'What is a Feature Store and do we need one?', answer: 'A Feature Store is a centralized repository for ML features providing: Consistent features between training and serving, Feature reuse across teams and models, Point-in-time correctness for training, Low-latency serving for real-time inference. You need one if: multiple teams build ML models, you have real-time inference needs, feature engineering is duplicated, or you need audit trails for compliance.' },
    { question: 'How long does MLOps implementation take?', answer: 'Timeline varies by scope: Basic pipeline + deployment: 6-8 weeks, Full MLOps platform: 12-16 weeks, Enterprise-wide transformation: 20-24+ weeks. We recommend starting with a pilot use case (6-8 weeks) before scaling. Most teams see 80% reduction in deployment time within 3 months.' },
    { question: 'Can you work with our existing ML infrastructure?', answer: 'Absolutely. We integrate with: Existing cloud infrastructure (AWS, Azure, GCP), Current ML frameworks (TensorFlow, PyTorch, scikit-learn), Data platforms (Snowflake, Databricks, BigQuery), CI/CD tools (Jenkins, GitHub Actions, GitLab), Monitoring systems (Datadog, Grafana, Prometheus). We enhance rather than replace your existing investments.' },
  ];

  const serviceSchema = generateServiceSchema('MLOps & AI Infrastructure Services', 'Enterprise MLOps services including ML pipeline automation, model deployment, monitoring, and AI infrastructure setup.');
  const productSchema = generateProductSchema('MLOps Implementation Package', 'Complete MLOps platform with automated pipelines, model deployment, monitoring, and governance.', '399999');

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft MLOps Platform',
    description: 'Enterprise MLOps platform for ML pipeline automation, model deployment, monitoring, feature store, and AI infrastructure management on AWS, Azure, and GCP.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'AWS SageMaker, Azure ML, GCP Vertex AI',
    price: '399999',
    rating: 4.9,
    reviewCount: 34,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AI Services', url: '/ai-services' }, { name: 'MLOps Services', url: '/mlops-services' }]);
  const reviewSchema = generateReviewSchema([
    { author: 'Sanjay Mehta', rating: 5, reviewBody: 'EifaSoft set up our entire MLOps platform on AWS. Model deployment went from 2 weeks to 2 hours. Game changer for our data science team.' },
    { author: 'Deepa Krishnan', rating: 5, reviewBody: 'Their monitoring setup caught model drift before it impacted customers. Saved us from a major production incident.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero title="MLOps & AI Infrastructure" subtitle="From Experiment to Production" description="Operationalize your ML models with enterprise-grade MLOps. Automated pipelines, scalable deployment, continuous monitoring. Reduce deployment time from weeks to hours." ctaPrimary={{ text: 'Get MLOps Assessment', href: '#contact' }} ctaSecondary={{ text: 'View Services', href: '#services' }} gradient="blue" />

      {/* What is MLOps - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-cyan-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is MLOps?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>MLOps (Machine Learning Operations)</strong> is a set of practices that combines machine learning, DevOps, and data engineering to deploy and maintain ML models in production reliably. It includes ML pipeline automation, model versioning, continuous training, deployment orchestration, performance monitoring, and model governance. MLOps reduces model deployment time from weeks to hours and ensures 87% of ML projects reach production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  MLOps implementation starting at ₹3,99,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  AWS SageMaker, Azure ML, Vertex AI
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  80% faster model deployment
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-24 weeks implementation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Pipeline automation & monitoring
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  3-5x team productivity increase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-bold text-cyan-400">87%</div><p className="text-blue-200">of ML projects fail to deploy</p></div>
            <div><div className="text-5xl font-bold text-cyan-400">80%</div><p className="text-blue-200">faster deployment with MLOps</p></div>
            <div><div className="text-5xl font-bold text-cyan-400">3-5x</div><p className="text-blue-200">team productivity increase</p></div>
            <div><div className="text-5xl font-bold text-cyan-400">60%</div><p className="text-blue-200">infrastructure cost savings</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MLOps Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our MLOps Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-blue-600 mb-3 text-sm">{stack.category}</h3>
                <ul className="space-y-1">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-600">{item}</li>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MLOps Packages</h2>
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
          <ContactForm serviceName="MLOps Services" />
        </div>
      </section>
    </main>
  );
}

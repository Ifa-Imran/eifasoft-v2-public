import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Python Development Services India | Web Apps, AI/ML, Data Science | EifaSoft',
    description: 'Expert Python development company in India. Web applications (Django, Flask), AI/ML solutions, data science, automation scripts. Starting ₹1,20,000.',
    canonical: '/python-development-services',
    keywords: [
      // Core Python Keywords
      'Python development services',
      'Python development company India',
      'hire Python developers',
      'custom Python development',
      'Python web development',
      'Python application development',
      
      // Web Frameworks
      'Django development',
      'Flask development',
      'FastAPI development',
      'Python REST API',
      'Django REST framework',
      'Python full stack',
      
      // AI/ML & Data Science
      'Python AI ML development',
      'machine learning Python',
      'deep learning Python',
      'data science Python',
      'TensorFlow development',
      'PyTorch development',
      'scikit-learn',
      'NLP Python',
      'computer vision Python',
      
      // Automation & Scripting
      'Python automation',
      'Python scripting',
      'process automation Python',
      'RPA Python',
      'web scraping Python',
      'data extraction Python',
      
      // Databases
      'Python Django ORM',
      'Python SQLAlchemy',
      'Python PostgreSQL',
      'Python MySQL',
      'Python MongoDB',
      'Python Redis',
      
      // Cloud & DevOps
      'Python AWS',
      'Python Azure',
      'Python GCP',
      'Python Docker',
      'Python Kubernetes',
      'Python serverless',
      'Python Lambda',
      
      // Testing & Quality
      'Python unit testing',
      'Python pytest',
      'Python test automation',
      'Python code review',
      
      // Industry Solutions
      'Python FinTech solutions',
      'Python healthcare apps',
      'Python e-commerce',
      'Python data analytics',
      'Python IoT solutions',
      'Python blockchain',
      
      // Migration & Support
      'Python migration',
      'Python legacy modernization',
      'Python application maintenance',
      'Python support services',
      
      // Cost & Hiring
      'Python development cost',
      'Python developer rate India',
      'dedicated Python developer',
      'affordable Python development',
      
      // Location-Based
      'Python developer Noida',
      'Python company Delhi',
      'Python services Bangalore',
      'Python developer Mumbai',
      'Python Hyderabad',
      'Python Pune',
    ],
  });
}

const faqs = [
  {
    question: 'What is Python used for in web development?',
    answer: 'Python is a versatile language used for various web development tasks:\n\n**Web Applications:**\n- Django: Full-featured framework for complex apps (Instagram, Pinterest)\n- Flask: Lightweight framework for small to medium apps\n- FastAPI: Modern framework for high-performance APIs\n\n**Backend Development:**\n- RESTful API development\n- Database management (ORM built-in)\n- User authentication & authorization\n- File handling & storage\n- Third-party integrations\n\n**Data Processing:**\n- Data analysis & visualization\n- Machine learning integration\n- Automation scripts\n- Web scraping\n\n**Why Choose Python?**\n✓ Easy to learn and read\n✓ Extensive library ecosystem (PyPI has 400K+ packages)\n✓ Rapid development\n✓ Strong community support\n✓ Cross-platform compatibility',
  },
  {
    question: 'Which Python framework is best for my project?',
    answer: 'Framework choice depends on your project requirements:\n\n**Django** (Batteries-included)\n✓ Best for: Complex web applications, e-commerce, SaaS platforms\n✓ Features: Admin panel, ORM, authentication, routing, templating\n✓ Examples: Instagram, Pinterest, Mozilla\n✓ Timeline: 8-16 weeks\n✓ Cost: ₹2,00,000-₹8,00,000\n\n**Flask** (Microframework)\n✓ Best for: Small to medium apps, APIs, prototypes\n✓ Features: Lightweight, flexible, extensible\n✓ Examples: LinkedIn, Netflix (microservices)\n✓ Timeline: 4-10 weeks\n✓ Cost: ₹1,00,000-₹4,00,000\n\n**FastAPI** (Modern & Fast)\n✓ Best for: High-performance APIs, microservices\n✓ Features: Async support, auto-documentation, type hints\n✓ Examples: Uber, Microsoft\n✓ Timeline: 3-8 weeks\n✓ Cost: ₹1,20,000-₹5,00,000\n\n**Our Recommendation:**\n- Startup MVP → Flask or FastAPI\n- Enterprise app → Django\n- API-first product → FastAPI\n- E-commerce → Django',
  },
  {
    question: 'How much does Python development cost in India?',
    answer: 'Python development costs vary by complexity and features:\n\n**Basic Web App** (₹1,20,000-₹2,00,000, 5-7 weeks)\n- Flask/FastAPI framework\n- 5-7 basic features\n- Simple database (PostgreSQL/MySQL)\n- User authentication\n- Basic UI/UX\n- Example: Simple CRM, blog platform\n\n**Professional Web Application** (₹2,50,000-₹5,00,000, 8-12 weeks)\n- Django framework\n- 10-15 advanced features\n- Django REST Framework\n- Payment gateway integration\n- Admin dashboard\n- Third-party API integrations\n- Testing & documentation\n- Example: E-commerce store, SaaS platform\n\n**Enterprise/AI Solution** (₹5,00,000-₹15,00,000+, 12-20 weeks)\n- Microservices architecture\n- Machine learning models\n- Data analytics dashboard\n- Cloud deployment (AWS/Azure/GCP)\n- CI/CD pipeline\n- Scalability & security\n- Dedicated team\n- Example: AI-powered platform, enterprise system\n\n**By Engagement Model:**\n- Fixed Price: ₹1,20,000-₹10,00,000 (well-defined scope)\n- Hourly: ₹1,200-₹3,000/hour (flexible requirements)\n- Monthly Retainer: ₹1,20,000-₹3,00,000/month (dedicated developer)',
  },
  {
    question: 'Do you provide AI/ML integration with Python apps?',
    answer: `Yes! We specialize in AI/ML integration using Python's powerful ecosystem:\\n\\n**Machine Learning:**\\n- scikit-learn: Classification, regression, clustering\\n- TensorFlow: Deep learning, neural networks\\n- PyTorch: Research-focused deep learning\\n- XGBoost: Gradient boosting\\n\\n**Natural Language Processing (NLP):**\\n- spaCy: Text processing, named entity recognition\\n- NLTK: Linguistic analysis\\n- Transformers (Hugging Face): BERT, GPT models\\n- Sentiment analysis\\n- Chatbots & virtual assistants\\n\\n**Computer Vision:**\\n- OpenCV: Image/video processing\\n- YOLO: Object detection\\n- Face recognition\\n- Image classification\\n\\n**Deployment:**\\n- Model training & optimization\\n- REST API for model serving\\n- Real-time inference\\n- Batch processing\\n- Model monitoring & retraining\\n\\n**AI Integration Cost:**\\n- Basic ML model: ₹1,00,000-₹3,00,000\\n- Advanced deep learning: ₹3,00,000-₹10,00,000\\n- Custom NLP/CV solution: ₹2,00,000-₹8,00,000\\n\\n**Examples:**\\n- Recommendation systems\\n- Predictive analytics\\n- Fraud detection\\n- Customer segmentation\\n- Automated document processing`,
  },
  {
    question: 'Can you migrate our existing application to Python?',
    answer: 'Yes! We specialize in legacy application migration to Python:\n\n**Migration Sources:**\n✓ PHP (Laravel, CodeIgniter) → Django/Flask\n✓ Ruby on Rails → Django\n✓ Java/Spring → Django/FastAPI\n✓ .NET → Django\n✓ Node.js → FastAPI/Django\n✓ ASP → Django\n\n**Our Migration Process:**\n\n**Phase 1: Analysis (1-2 weeks)**\n- Code audit & documentation review\n- Database schema analysis\n- Feature mapping\n- Performance benchmarking\n\n**Phase 2: Planning (1 week)**\n- Technology selection (Django vs Flask vs FastAPI)\n- Architecture design\n- Migration strategy (big bang vs incremental)\n- Risk assessment\n\n**Phase 3: Development (4-12 weeks)**\n- Set up Python environment\n- Rewrite business logic\n- Database migration\n- API compatibility layer\n- Third-party integrations\n\n**Phase 4: Testing (2-3 weeks)**\n- Unit testing\n- Integration testing\n- Performance testing\n- Security testing\n- User acceptance testing\n\n**Phase 5: Deployment (1 week)**\n- Staging setup\n- Production deployment\n- Monitoring configuration\n- Rollback plan ready\n\n**Benefits of Migrating to Python:**\n- Better readability & maintainability\n- Access to AI/ML libraries\n- Faster development\n- Larger talent pool\n- Reduced server costs\n\n**Cost:** ₹2,00,000-₹10,00,000 depending on complexity',
  },
  {
    question: 'What databases work with Python?',
    answer: 'Python works with all major databases through excellent ORM support:\n\n**Relational Databases (SQL):**\n\n**PostgreSQL** (Recommended)\n✓ Django ORM, SQLAlchemy, Psycopg2\n✓ ACID compliance\n✓ JSONB support for semi-structured data\n✓ Perfect for: Complex queries, financial apps\n\n**MySQL/MariaDB**\n✓ Django ORM, MySQL-connector-python\n✓ Widely adopted\n✓ Great for: E-commerce, content management\n\n**SQLite**\n✓ Built into Python\n✓ Perfect for: Prototyping, small apps\n\n**NoSQL Databases:**\n\n**MongoDB**\n✓ PyMongo, MongoEngine\n✓ Document-based (JSON-like)\n✓ Perfect for: Content management, catalogs\n\n**Redis**\n✓ redis-py\n✓ In-memory caching\n✓ Perfect for: Caching, session management, pub/sub\n\n**Elasticsearch**\n✓ elasticsearch-py\n✓ Full-text search\n✓ Perfect for: Search functionality, analytics\n\n**Our Recommendations:**\n- Startup/MVP: PostgreSQL + Django ORM\n- High-performance: PostgreSQL + Redis cache\n- Content-heavy: MongoDB\n- Search-intensive: PostgreSQL + Elasticsearch',
  },
  {
    question: 'Do you provide Python automation services?',
    answer: 'Yes! Python is perfect for automation due to its simplicity and powerful libraries:\n\n**Automation Services:**\n\n**Web Scraping & Data Extraction:**\n- BeautifulSoup, Scrapy, Selenium\n- Extract data from websites\n- Price monitoring\n- Lead generation\n- Market research\n- Cost: ₹50,000-₹3,00,000\n\n**Process Automation:**\n- Automate repetitive tasks\n- Data entry automation\n- Report generation\n- File processing\n- Email automation\n- Cost: ₹75,000-₹4,00,000\n\n**RPA (Robotic Process Automation):**\n- UiPath integration\n- Automation Anywhere\n- Business process automation\n- Workflow automation\n- Cost: ₹1,50,000-₹6,00,000\n\n**Data Pipeline Automation:**\n- ETL processes\n- Data transformation\n- Scheduled jobs (Celery, APScheduler)\n- Airflow workflows\n- Cost: ₹1,00,000-₹5,00,000\n\n**API Automation:**\n- Automated API testing\n- Data synchronization\n- Webhook handlers\n- Scheduled API calls\n- Cost: ₹50,000-₹2,50,000\n\n**Benefits:**\n✓ Save 60-80% manual effort\n✓ Reduce errors\n✓ 24/7 operation\n✓ Faster processing\n✓ Scalable\n\n**ROI:** Most automation projects pay for themselves in 3-6 months',
  },
  {
    question: 'What industries do you build Python solutions for?',
    answer: 'We have domain expertise across 20+ industries:\n\n**FinTech & Banking** (Starting ₹5,00,000)\n- Payment processing systems\n- Fraud detection (ML)\n- Algorithmic trading\n- Risk assessment\n- Blockchain integration\n\n**Healthcare** (Starting ₹4,00,000)\n- Telemedicine platforms\n- Medical image analysis (AI)\n- Patient management systems\n- Predictive diagnostics\n- HIPAA compliance\n\n**E-Commerce & Retail** (Starting ₹2,50,000)\n- Online stores (Django Oscar)\n- Recommendation engines\n- Inventory management\n- Price optimization\n- Customer analytics\n\n**Education & E-Learning** (Starting ₹2,00,000)\n- Learning management systems\n- Automated grading\n- Personalized learning (AI)\n- Video streaming platforms\n\n**Manufacturing** (Starting ₹5,00,000)\n- Predictive maintenance (IoT + ML)\n- Quality control (computer vision)\n- Supply chain optimization\n- Production analytics\n\n**Logistics & Supply Chain** (Starting ₹4,00,000)\n- Route optimization\n- Fleet tracking\n- Demand forecasting\n- Warehouse automation\n\n**SaaS & Startups** (Starting ₹3,00,000)\n- Multi-tenant platforms\n- Subscription billing\n- Analytics dashboards\n- API-first products\n\nAnd many more: Travel, Hospitality, Real Estate, AgriTech, Legal Tech, HR Tech, Insurance',
  },
];

export default function PythonDevelopmentServices() {
  const services = [
    {
      icon: '🐍',
      title: 'Custom Python Development',
      description: 'Tailored Python solutions built from ground up for your specific business requirements',
      features: ['Web Applications', 'Desktop Apps', 'Automation Scripts', 'API Development'],
    },
    {
      icon: '🌐',
      title: 'Django Web Development',
      description: 'Full-featured web applications using Django - the high-level Python web framework',
      features: ['Django REST Framework', 'Admin Panel', 'ORM & Database', 'Authentication System'],
    },
    {
      icon: '⚡',
      title: 'Flask & FastAPI Development',
      description: 'Lightweight, fast APIs and microservices with Flask and modern FastAPI frameworks',
      features: ['RESTful APIs', 'Microservices', 'Async Support', 'Auto Documentation'],
    },
    {
      icon: '🤖',
      title: 'AI/ML Solutions',
      description: 'Intelligent applications powered by machine learning and artificial intelligence',
      features: ['Machine Learning Models', 'Deep Learning', 'NLP Solutions', 'Computer Vision'],
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization',
      features: ['Data Analysis', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence'],
    },
    {
      icon: '🔄',
      title: 'Python Automation',
      description: 'Automate repetitive tasks and workflows to save time and reduce errors',
      features: ['Process Automation', 'Web Scraping', 'Data Extraction', 'RPA Solutions'],
    },
  ];;;

  const technologies = [
    { name: 'Python 3.x', icon: '🐍', category: 'Language' },
    { name: 'Django', icon: '🌐', category: 'Web Framework' },
    { name: 'Flask', icon: '⚡', category: 'Micro Framework' },
    { name: 'FastAPI', icon: '🚀', category: 'API Framework' },
    { name: 'TensorFlow', icon: '🧠', category: 'ML Library' },
    { name: 'PyTorch', icon: '🔥', category: 'ML Library' },
    { name: 'scikit-learn', icon: '📈', category: 'ML Library' },
    { name: 'Pandas', icon: '📊', category: 'Data Analysis' },
    { name: 'NumPy', icon: '🔢', category: 'Scientific Computing' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS/GCP/Azure', icon: '☁️', category: 'Cloud' },
  ];;

  const apiFeatures = [
    {
      title: 'Documentation',
      items: ['Swagger/OpenAPI', 'Interactive API Explorer', 'Code Examples', 'Postman Collections'],
    },
    {
      title: 'Performance',
      items: ['Caching Layer', 'Database Optimization', 'Load Balancing', 'CDN Integration'],
    },
    {
      title: 'Monitoring',
      items: ['Real-time Analytics', 'Error Tracking', 'Performance Metrics', 'Uptime Monitoring'],
    },
    {
      title: 'Testing',
      items: ['Unit Testing', 'Integration Testing', 'Load Testing', 'Security Testing'],
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic Python App',
      price: '₹1,20,000',
      duration: '5-7 weeks',
      features: [
        'Simple Web Application',
        'Django/Flask Framework',
        'Basic Features (5-7)',
        'Database Integration',
        'User Authentication',
        '1 Month Support',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Professional Python Solution',
      price: '₹2,50,000',
      duration: '8-12 weeks',
      features: [
        'Full-Featured Web App',
        'Django REST Framework',
        'Advanced Features (10-15)',
        'Third-party API Integration',
        'Admin Dashboard',
        'Payment Gateway',
        'Testing & Documentation',
        '3 Months Support',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true,
    },
    {
      name: 'Enterprise Python/AI Solution',
      price: '₹5,00,000+',
      duration: '12-20 weeks',
      features: [
        'Complex Web Platform or AI/ML Solution',
        'Microservices Architecture',
        'Machine Learning Models',
        'Data Analytics Dashboard',
        'Cloud Deployment (AWS/Azure/GCP)',
        'CI/CD Pipeline',
        'Performance Optimization',
        'Scalability & Security',
        '6 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const process = [
    { step: 1, title: 'Discovery & Planning', desc: 'Understand your requirements and design API architecture' },
    { step: 2, title: 'API Design', desc: 'Create resource models, endpoints, and documentation specifications' },
    { step: 3, title: 'Development', desc: 'Build APIs with best practices and security standards' },
    { step: 4, title: 'Testing', desc: 'Comprehensive testing for functionality, performance, and security' },
    { step: 5, title: 'Documentation', desc: 'Complete API documentation with examples and integration guides' },
    { step: 6, title: 'Deployment', desc: 'Deploy to production with monitoring and scaling setup' },
  ];

  const serviceSchema = generateServiceSchema(
    'Python Development Services',
    'Professional Python development company in India offering web applications (Django, Flask, FastAPI), AI/ML solutions, data science, automation scripts, and enterprise software.'
  );

  const productSchema = generateProductSchema(
    'Python Development Package',
    'Complete Python development solution with Django/Flask/FastAPI frameworks, web applications, AI/ML integration, data analytics, automation, and cloud deployment.',
    '120000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Python Development Platform',
    description: 'Professional Python development platform with Django, Flask, FastAPI frameworks, AI/ML capabilities (TensorFlow, PyTorch), data science tools (Pandas, NumPy), and cloud-native deployment.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform, Cloud',
    price: '120000',
    rating: 4.9,
    reviewCount: 105,
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
    { name: 'Python Development Services', url: '/python-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="Python Development Services"
        subtitle="Web Apps, AI/ML & Data Science"
        description="Expert Python development company in India. Build powerful web applications with Django/Flask, AI/ML solutions, data analytics, and automation. Starting ₹1,20,000."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="green"
      />

      {/* What is Python Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Python Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Python Development</strong> involves building applications using Python, a versatile, high-level programming language known for its simplicity and readability. Python is used for web development (Django, Flask), artificial intelligence/machine learning (TensorFlow, PyTorch), data science (Pandas, NumPy), automation scripting, and more. Its extensive library ecosystem and clean syntax make it ideal for rapid development across multiple domains.
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
                  Python development starting at ₹1,20,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Django, Flask, FastAPI frameworks
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  AI/ML & Data Science expertise
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  5-12 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Web apps, automation & AI solutions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cloud deployment & scalability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Python Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Python solutions for web apps, AI/ML, data science, and automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-500"
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

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Python Technologies We Use</h2>
            <p className="text-xl text-gray-600">
              Industry-leading Python frameworks, libraries, and tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Python Application Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">Streamlined workflow for quality Python application delivery</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Python Development Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
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
                    Get Started
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
          <ContactForm serviceName="Python Development" />
        </div>
      </section>
    </main>
  );
}

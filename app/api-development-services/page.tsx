import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'API Development Services India | REST, GraphQL, Microservices | EifaSoft',
    description: 'Professional API development company in India. RESTful APIs, GraphQL, microservices, OAuth 2.0, third-party integrations (Stripe, Twilio, Salesforce). Starting ₹75,000.',
    canonical: '/api-development-services',
    keywords: [
      // Core API Keywords (High Volume)
      'API development services',
      'REST API development',
      'GraphQL API development',
      'microservices development',
      'API integration services',
      'backend API development',
      'custom API development',
      'API development company India',
      
      // Technology-Specific
      'Node.js API development',
      'Python API development',
      'Laravel API development',
      'Java API development',
      '.NET API development',
      'Express.js API',
      'NestJS development',
      'FastAPI development',
      'Django REST framework',
      'Spring Boot API',
      
      // Architecture & Design
      'microservices architecture',
      'API gateway setup',
      'service mesh implementation',
      'event-driven architecture',
      'serverless API',
      'cloud-native API',
      'API-first design',
      'headless API',
      
      // Security & Authentication
      'API security OAuth JWT',
      'OAuth 2.0 implementation',
      'JWT authentication',
      'API key management',
      'API rate limiting',
      'CORS configuration',
      'API encryption SSL TLS',
      'OWASP API security',
      
      // Integration Services
      'third-party API integration',
      'payment gateway API',
      'Stripe integration',
      'Razorpay integration',
      'PayPal integration',
      'Twilio integration',
      'SendGrid integration',
      'Salesforce API integration',
      'HubSpot integration',
      'Zoho API integration',
      'SAP integration',
      'shipping API integration',
      'webhook integration',
      
      // Mobile Backend
      'mobile backend development',
      'iOS backend API',
      'Android backend API',
      'mobile app backend',
      'push notification API',
      'offline sync API',
      'real-time API WebSocket',
      
      // Documentation & Testing
      'API documentation Swagger',
      'OpenAPI specification',
      'Postman collections',
      'API testing services',
      'API performance testing',
      'load testing API',
      'security testing API',
      
      // Performance & Monitoring
      'API performance optimization',
      'API caching Redis',
      'API monitoring',
      'API analytics',
      'API logging',
      'API error tracking',
      'API uptime monitoring',
      
      // Database & Storage
      'MongoDB API',
      'PostgreSQL API',
      'MySQL API',
      'Redis caching',
      'Elasticsearch integration',
      'multi-database API',
      
      // Cloud & DevOps
      'AWS API Gateway',
      'Azure API Management',
      'Google Cloud Endpoints',
      'Docker containerization',
      'Kubernetes orchestration',
      'CI/CD for APIs',
      'cloud API deployment',
      
      // Industry-Specific
      'e-commerce API development',
      'FinTech API solutions',
      'healthcare API integration',
      'banking API development',
      'travel API integration',
      'social media API',
      
      // Cost & Pricing
      'API development cost',
      'API development price India',
      'affordable API development',
      'hire API developer',
      'dedicated API developer',
      
      // Location-Based
      'API developer Noida',
      'API development company Delhi',
      'API services Bangalore',
      'API developer Mumbai',
      'API company Hyderabad',
      'API development Pune',
      
      // Long-tail Commercial
      'enterprise API solutions',
      'legacy API modernization',
      'API migration services',
      'API maintenance support',
      'scalable API architecture',
      'high-performance API',
    ],
  });
}

const faqs = [
  {
    question: 'What types of APIs do you develop?',
    answer: 'We develop comprehensive API solutions for all use cases:\n\n**RESTful APIs** (Most Common):\n- JSON/XML response formats\n- CRUD operations (Create, Read, Update, Delete)\n- Resource-based URLs (/users, /products)\n- HTTP methods (GET, POST, PUT, DELETE)\n- Status codes (200, 201, 400, 404, 500)\n- Versioning strategy (/api/v1/, /api/v2/)\n- Pagination, filtering, sorting\n\n**GraphQL APIs** (Flexible Querying):\n- Schema-first design approach\n- Client requests exactly what they need\n- Real-time subscriptions (WebSocket)\n- Apollo Server/Client integration\n- Type system with queries/mutations\n- Resolvers for data fetching\n\n**Microservices APIs** (Scalable Architecture):\n- Event-driven architecture (Kafka/RabbitMQ)\n- Service mesh implementation\n- API Gateway pattern\n- Database per service\n- Inter-service communication\n- Circuit breaker pattern\n\n**WebSocket APIs** (Real-time):\n- Bidirectional communication\n- Live chat applications\n- Real-time notifications\n- Collaborative editing\n- Stock trading platforms\n- Gaming backends\n\n**Mobile Backend APIs**:\n- Optimized for iOS/Android\n- Offline support with sync\n- Push notification integration\n- Binary data handling (images/videos)\n- Token-based authentication\n- Data compression',
  },
  {
    question: 'How much does API development cost in India?',
    answer: 'API development costs in India vary by complexity, endpoints count, and integrations:\n\n**Basic API** (₹75,000-₹1,50,000, 4-6 weeks)\n- 5-10 API endpoints\n- RESTful architecture\n- Basic authentication (API key/JWT)\n- Single database (PostgreSQL/MongoDB)\n- Swagger documentation\n- Postman collections\n- 1 month support\n- Example: Simple CRUD app, basic mobile backend\n\n**Professional API** (₹1,50,000-₹3,00,000, 6-10 weeks)\n- 15-25 API endpoints\n- GraphQL or REST options\n- OAuth 2.0 / JWT authentication\n- Multiple databases\n- Rate limiting & caching (Redis)\n- Third-party integrations (2-3 services)\n- Comprehensive testing\n- Performance optimization\n- 3 months support\n- Example: E-commerce platform, SaaS application\n\n**Enterprise API** (₹3,00,000-₹10,00,000+, 10-20 weeks)\n- Unlimited endpoints\n- Microservices architecture\n- Advanced security (OWASP compliance)\n- Multi-region deployment\n- Real-time subscriptions\n- API Gateway setup\n- Load balancing & auto-scaling\n- Comprehensive monitoring (Prometheus/Grafana)\n- CI/CD pipeline\n- 6-12 months support\n- Dedicated team\n- Example: Enterprise platform, high-traffic marketplace\n\n**By Technology:**\n- Node.js/Express: ₹75,000-₹5,00,000\n- Python/FastAPI: ₹1,00,000-₹6,00,000\n- Laravel: ₹80,000-₹4,00,000\n- Java/Spring Boot: ₹1,50,000-₹8,00,000\n- .NET Core: ₹1,50,000-₹7,00,000\n\n**Additional Costs:**\n- Third-party API integrations: ₹15,000-₹50,000 per integration\n- Cloud hosting: ₹3,000-₹50,000/month (AWS/Azure/GCP)\n- Domain & SSL: ₹1,000-₹5,000/year\n- Maintenance (AMC): ₹25,000-₹1,00,000/year (optional)',
  },
  {
    question: 'What security measures do you implement in APIs?',
    answer: 'We implement enterprise-grade API security following OWASP API Security Top 10:\n\n**Authentication & Authorization:**\n- OAuth 2.0 with JWT tokens (industry standard)\n- API key management for third-party access\n- Role-based access control (RBAC)\n- Permission-based authorization\n- Session management with refresh tokens\n- Multi-factor authentication (MFA) optional\n\n**Data Protection:**\n- SSL/TLS encryption (HTTPS only)\n- End-to-end encryption for sensitive data\n- Password hashing with bcrypt/Argon2\n- Data masking for PII (Personal Identifiable Information)\n- GDPR/CCPA compliance\n\n**Attack Prevention:**\n- Rate limiting (requests per minute/hour)\n- DDoS protection\n- CORS configuration for cross-origin requests\n- Input validation and sanitization\n- SQL injection prevention (prepared statements)\n- XSS (Cross-Site Scripting) protection\n- CSRF (Cross-Site Request Forgery) tokens\n- Brute force protection with account lockout\n\n**Monitoring & Logging:**\n- Comprehensive audit trails\n- Failed login attempt tracking\n- Suspicious activity detection\n- IP whitelisting/blacklisting\n- Real-time alerting\n- Log rotation and secure storage\n\n**Infrastructure Security:**\n- VPC (Virtual Private Cloud) isolation\n- Firewall rules\n- Security groups\n- Regular security audits\n- Penetration testing\n- Vulnerability scanning\n\n**Compliance:**\n- PCI-DSS for payment processing\n- HIPAA for healthcare data\n- SOC 2 Type II certified infrastructure',
  },
  {
    question: 'Do you provide API documentation?',
    answer: 'Yes! Comprehensive documentation is included with every API project:\n\n**Swagger/OpenAPI 3.0 Documentation:**\n- Interactive API explorer\n- Try-it-out functionality\n- Auto-generated from code annotations\n- Always up-to-date\n- Hosted online (your domain)\n\n**Documentation Includes:**\n- Authentication guide (how to get tokens/keys)\n- Endpoint reference (URLs, methods, parameters)\n- Request/response examples (JSON/XML)\n- Error codes reference (all possible errors)\n- Rate limiting information\n- Versioning details\n- Changelog/update history\n\n**Code Examples:**\n- JavaScript/Node.js (axios, fetch)\n- Python (requests library)\n- PHP (cURL, Guzzle)\n- Java (OkHttp, HttpClient)\n- cURL commands\n- Postman collections\n\n**Integration Guides:**\n- Quick start tutorial\n- Step-by-step integration walkthrough\n- Best practices\n- Common use cases\n- Troubleshooting guide\n- FAQ section\n\n**Developer Portal:**\n- Self-service developer dashboard\n- API key generation\n- Usage analytics\n- Sandbox/test environment\n- Support ticket system\n- Community forum (optional)\n\n**Formats Available:**\n- Online hosted documentation\n- PDF download\n- Markdown files (for GitHub)\n- Postman workspace\n\nAll documentation is written in clear English with practical examples that developers can copy-paste and use immediately.',
  },
  {
    question: 'Can you integrate our system with third-party APIs?',
    answer: 'Yes! We specialize in third-party API integrations across all major platforms:\n\n**Payment Gateways:**\n- Razorpay (Cards, UPI, Netbanking, Wallets)\n- Stripe (Global payments, Apple Pay, Google Pay)\n- PayPal (International transactions)\n- PayU, Paytm, CCAvenue (Indian gateways)\n- Cashfree, Instamojo\n- Cryptocurrency payments (Coinbase, BitPay)\n\n**Communication Services:**\n- Twilio (SMS, Voice, WhatsApp Business API)\n- SendGrid (Email delivery)\n- Mailgun (Transactional emails)\n- Amazon SES (Cost-effective email)\n- Firebase Cloud Messaging (Push notifications)\n- OneSignal (Push notifications)\n\n**CRM & Business Tools:**\n- Salesforce (CRM, Sales Cloud, Service Cloud)\n- HubSpot (Marketing, Sales, Service Hubs)\n- Zoho (CRM, Books, Inventory)\n- Microsoft Dynamics 365\n- Slack (Notifications, bots)\n\n**ERP Systems:**\n- SAP (Enterprise Resource Planning)\n- Oracle NetSuite\n- Microsoft Dynamics ERP\n- Odoo\n\n**Shipping & Logistics:**\n- Shiprocket (Multi-carrier shipping)\n- Delhivery, Blue Dart, FedEx\n- DHL, UPS\n- EasyPost (Shipping API aggregator)\n\n**Social Media:**\n- Facebook Graph API (Login, sharing, insights)\n- Google APIs (OAuth, Maps, Analytics, Drive)\n- Twitter API (Posting, analytics)\n- LinkedIn API (Auth, company data)\n- Instagram Basic Display\n\n**Cloud Storage:**\n- AWS S3 (File storage)\n- Google Cloud Storage\n- Azure Blob Storage\n- Dropbox API\n\n**Analytics & Monitoring:**\n- Google Analytics\n- Mixpanel\n- Amplitude\n- Hotjar\n- Sentry (Error tracking)\n\n**Any REST or SOAP API:**\nIf it has proper documentation, we can integrate it. We handle authentication (OAuth, API keys), rate limiting, error handling, retries, and data transformation.',
  },
  {
    question: 'What is microservices architecture and do you offer it?',
    answer: 'Yes! We specialize in microservices architecture for scalable enterprise applications.\n\n**What is Microservices?**\nMonolithic Architecture: Single codebase, all features tightly coupled\nMicroservices Architecture: Application as collection of small, independent services\n\n**Key Characteristics:**\n✓ Each service handles one business capability\n✓ Services communicate via APIs (REST/gRPC)\n✓ Independent deployment and scaling\n✓ Separate databases per service\n✓ Fault isolation (one service failure doesn\'t crash entire app)\n✓ Technology diversity (different stacks per service)\n\n**Benefits:**\n- **Scalability**: Scale only services that need it\n- **Faster Development**: Small teams own individual services\n- **Flexibility**: Use best technology for each service\n- **Resilience**: Better fault tolerance\n- **Continuous Deployment**: Deploy services independently\n- **Easier Testing**: Smaller codebases\n\n**When to Choose Microservices:**\n- High-traffic applications (100K+ users)\n- Complex business logic\n- Multiple teams working on same product\n- Need for different tech stacks\n- Frequent deployments required\n- Geographic distribution needed\n\n**Our Microservices Stack:**\n- **Container Orchestration**: Kubernetes, Docker Swarm\n- **Service Mesh**: Istio, Linkerd\n- **API Gateway**: Kong, AWS API Gateway, Traefik\n- **Message Brokers**: Kafka, RabbitMQ, Redis Streams\n- **Service Discovery**: Consul, etcd\n- **Monitoring**: Prometheus, Grafana, ELK Stack\n- **CI/CD**: Jenkins, GitLab CI, GitHub Actions\n\n**Challenges:**\n✗ Higher initial complexity\n✗ Requires DevOps expertise\n✗ Network latency\n✗ Distributed tracing needed\n✗ Data consistency across services\n\n**Cost:** Microservices start at ₹5,00,000+ (higher upfront cost, better long-term scalability)',
  },
  {
    question: 'How do you ensure API performance and reliability?',
    answer: 'We implement comprehensive performance optimization and monitoring strategies:\n\n**Performance Optimization:**\n\n**Caching Strategies:**\n- Redis/Memcached for frequently accessed data\n- CDN integration for static responses\n- Database query caching\n- HTTP caching headers (ETag, Last-Modified)\n- Response compression (Gzip/Brotli)\n\n**Database Optimization:**\n- Indexing on frequently queried columns\n- Query optimization (avoid N+1 queries)\n- Connection pooling\n- Read replicas for heavy read workloads\n- Database sharding for massive scale\n- Async processing for heavy operations\n\n**Load Balancing:**\n- Horizontal scaling with multiple instances\n- Load balancers (NGINX, HAProxy, AWS ALB)\n- Auto-scaling based on traffic\n- Geographic load distribution\n\n**Code-Level Optimization:**\n- Async/await for I/O operations\n- Lazy loading\n- Pagination for large datasets\n- Efficient algorithms and data structures\n- Profiling and bottleneck identification\n\n**Reliability & Uptime:**\n\n**Monitoring Stack:**\n- Prometheus + Grafana (metrics visualization)\n- ELK Stack (logs aggregation)\n- New Relic/Datadog (APM)\n- Sentry (error tracking)\n- Uptime monitoring (Pingdom, UptimeRobot)\n\n**Alerting:**\n- Real-time alerts for downtime\n- Performance threshold alerts\n- Error rate monitoring\n- Custom Slack/Email/SMS notifications\n- On-call rotation setup\n\n**High Availability:**\n- Multi-region deployment\n- Database replication\n- Failover mechanisms\n- Backup and disaster recovery\n- Health check endpoints\n\n**Testing:**\n- Load testing (Apache JMeter, k6)\n- Stress testing (beyond capacity)\n- Soak testing (sustained load)\n- Spike testing (sudden traffic bursts)\n\n**SLA Guarantees:**\n- 99.9% uptime (8.76 hours downtime/year)\n- 99.99% for enterprise (52.6 minutes/year)\n- Response time <200ms for 95th percentile\n- Auto-scaling within 2 minutes',
  },
  {
    question: 'Do you provide webhook implementation?',
    answer: 'Yes! We implement webhooks for real-time event notifications:\n\n**What are Webhooks?**\nWebhooks are user-defined HTTP callbacks triggered by specific events in your application. Unlike API polling (checking every few minutes), webhooks push data instantly when events occur.\n\n**Webhook Implementation:**\n\n**Outgoing Webhooks** (Your app → External services):\n- Event triggers (user signup, order placed, payment received)\n- Payload customization (JSON format)\n- Signature verification (HMAC)\n- Retry logic with exponential backoff\n- Failure handling and logging\n- Webhook management dashboard\n- Test webhook functionality\n\n**Incoming Webhooks** (External services → Your app):\n- Endpoint creation for receiving webhooks\n- Payload parsing and validation\n- Event routing to appropriate handlers\n- Idempotency checks (prevent duplicates)\n- Async processing for heavy tasks\n- Acknowledgment responses\n\n**Common Use Cases:**\n- Payment notifications (Razorpay/Stripe success/failure)\n- Order status updates (shipping carriers)\n- SMS/Email delivery reports (Twilio/SendGrid)\n- CRM updates (Salesforce/HubSpot)\n- Social media notifications (Facebook/Twitter)\n- GitHub/GitLab repository events\n- Slack notifications\n\n**Security:**\n- HMAC signature verification\n- IP whitelisting\n- Timestamp validation (prevent replay attacks)\n- Rate limiting\n- HTTPS only\n\n**Reliability:**\n- Queue-based processing (RabbitMQ/Kafka)\n- Dead letter queues for failed webhooks\n- Manual retry functionality\n- Delivery logs and analytics\n- Webhook health monitoring\n\n**Examples:**\n```javascript\n// Outgoing webhook payload\n{\n  "event": "order.completed",\n  "timestamp": "2024-01-15T10:30:00Z",\n  "data": {\n    "order_id": "ORD-12345",\n    "amount": 2999,\n    "customer_email": "user@example.com"\n  }\n}\n```\n\nIntegration cost: ₹20,000-₹75,000 depending on complexity',
  },
  {
    question: 'Which industries do you build APIs for?',
    answer: 'We have domain expertise across 20+ industries:\n\n**E-Commerce & Retail** (Starting ₹1,50,000)\n- Product catalog APIs\n- Shopping cart management\n- Order processing\n- Inventory sync\n- Payment gateway integration\n- Shipping carrier APIs\n- Customer accounts\n\n**FinTech & Banking** (Starting ₹5,00,000)\n- Payment processing APIs\n- Account aggregation\n- Transaction history\n- KYC verification\n- Credit score APIs\n- Stock trading APIs\n- Cryptocurrency exchanges\n- RBI/PCI-DSS compliance\n\n**Healthcare** (Starting ₹3,00,000)\n- Patient record management\n- Appointment scheduling\n- Telemedicine platforms\n- Prescription management\n- Lab report integration\n- Insurance claim processing\n- HIPAA compliance\n\n**Travel & Hospitality** (Starting ₹2,50,000)\n- Flight booking APIs (Amadeus, Sabre)\n- Hotel reservation systems\n- Car rental integration\n- Payment processing\n- Booking confirmations\n- Itinerary management\n\n**Education & E-Learning** (Starting ₹1,50,000)\n- Course management\n- Student enrollment\n- Video streaming APIs\n- Quiz/assessment APIs\n- Certificate generation\n- Payment integration\n\n**Real Estate** (Starting ₹2,00,000)\n- Property listing APIs\n- Search and filtering\n- Agent management\n- Lead capture\n- Virtual tour integration\n- Mortgage calculator\n\n**Food & Restaurant** (Starting ₹1,50,000)\n- Online ordering\n- Menu management\n- Delivery tracking\n- Payment processing\n- Table reservation\n- Review/rating system\n\n**Logistics & Supply Chain** (Starting ₹3,00,000)\n- Shipment tracking\n- Route optimization\n- Warehouse management\n- Fleet tracking\n- Proof of delivery\n- Customs documentation\n\n**Social Media & Content** (Starting ₹2,00,000)\n- User profiles\n- Content feeds\n- Messaging/chat\n- Media upload/streaming\n- Notifications\n- Analytics\n\n**Manufacturing** (Starting ₹4,00,000)\n- Production tracking\n- Quality control\n- Supply chain integration\n- IoT device APIs\n- Predictive maintenance\n\nAnd many more: Insurance, Legal, HR Tech, AgriTech, PropTech, etc.',
  },
];

export default function APIDevelopmentServices() {
  const apiServices = [
    {
      icon: '🔌',
      title: 'RESTful API Development',
      description: 'Build scalable REST APIs with proper resource modeling, HTTP methods, and status codes',
      features: ['JSON/XML Support', 'Versioning Strategy', 'Rate Limiting', 'Authentication & Authorization'],
    },
    {
      icon: '⚡',
      title: 'GraphQL API Development',
      description: 'Flexible data querying with GraphQL for efficient client-server communication',
      features: ['Schema Design', 'Query Optimization', 'Real-time Subscriptions', 'Apollo Server'],
    },
    {
      icon: '🔄',
      title: 'Microservices Architecture',
      description: 'Design and implement microservices-based systems for better scalability',
      features: ['Service Mesh', 'API Gateway', 'Event-driven Architecture', 'Container Orchestration'],
    },
    {
      icon: '🔐',
      title: 'API Security',
      description: 'Comprehensive security implementation for your APIs',
      features: ['OAuth 2.0 / JWT', 'API Key Management', 'Encryption (SSL/TLS)', 'CORS Configuration'],
    },
    {
      icon: '📱',
      title: 'Mobile Backend API',
      description: 'Optimized APIs for mobile applications with offline support',
      features: ['Push Notifications', 'Data Synchronization', 'Caching Strategy', 'Binary Data Handling'],
    },
    {
      icon: '🔗',
      title: 'Third-Party Integrations',
      description: 'Seamless integration with external services and platforms',
      features: ['Payment Gateways', 'Social Media APIs', 'CRM Integration', 'Analytics Services'],
    },
  ];

  const technologies = [
    { name: 'Node.js', icon: '🟢', category: 'Runtime' },
    { name: 'Express.js', icon: '⚡', category: 'Framework' },
    { name: 'NestJS', icon: '🐱', category: 'Framework' },
    { name: 'FastAPI', icon: '🚀', category: 'Python' },
    { name: 'Django REST', icon: '🎯', category: 'Python' },
    { name: 'Spring Boot', icon: '🍃', category: 'Java' },
    { name: 'GraphQL', icon: '💎', category: 'Query Language' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', icon: '☸️', category: 'Orchestration' },
  ];

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
      name: 'Basic API',
      price: '₹75,000',
      duration: '4-6 weeks',
      features: [
        '5-10 API Endpoints',
        'RESTful Architecture',
        'Basic Authentication',
        'PostgreSQL/MongoDB',
        'API Documentation',
        '1 Month Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional API',
      price: '₹1,50,000',
      duration: '6-8 weeks',
      features: [
        '15-25 API Endpoints',
        'GraphQL/REST Options',
        'OAuth 2.0 / JWT',
        'Multiple Database Support',
        'Rate Limiting & Caching',
        'Swagger Documentation',
        '3 Months Support',
        'Performance Optimization',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise API',
      price: '₹3,00,000+',
      duration: '10-16 weeks',
      features: [
        'Unlimited Endpoints',
        'Microservices Architecture',
        'Advanced Security',
        'Multi-region Deployment',
        'Real-time Subscriptions',
        'API Gateway',
        'Comprehensive Monitoring',
        '6 Months Support',
        'Dedicated Team',
      ],
      color: 'from-green-500 to-green-600',
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
    'API Development Services',
    'Professional REST API, GraphQL, and microservices development with OAuth 2.0 security, comprehensive documentation, performance optimization, and third-party integrations.'
  );

  const productSchema = generateProductSchema(
    'API Development Package',
    'Complete API development solution with RESTful or GraphQL architecture, authentication, documentation, testing, and deployment for web and mobile applications.',
    '75000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft API Development Platform',
    description: 'Professional API development platform with RESTful and GraphQL architectures, OAuth 2.0 security, Swagger documentation, microservices support, and third-party integrations for web and mobile applications.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Node.js, Python, Java, PHP',
    price: '75000',
    rating: 4.9,
    reviewCount: 87,
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
    { name: 'API Development Services', url: '/api-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="API Development Services"
        subtitle="REST, GraphQL & Microservices"
        description="Build robust, scalable, and secure APIs that power your web and mobile applications. RESTful APIs, GraphQL, OAuth 2.0 security, complete documentation."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="blue"
      />

      {/* What is API Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is API Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>API Development</strong> is the process of creating Application Programming Interfaces that enable software applications to communicate with each other. It involves designing RESTful or GraphQL endpoints, implementing authentication (OAuth 2.0, JWT), building microservices architectures, creating documentation (Swagger/OpenAPI), and ensuring security, scalability, and performance. APIs power web apps, mobile apps, and third-party integrations.
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
                  API development starting at ₹75,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  REST, GraphQL, WebSocket APIs
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  OAuth 2.0 / JWT authentication
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  4-16 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Swagger/OpenAPI documentation
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Third-party API integration support
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our API Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive API solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools and frameworks for API development
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive API Features</h2>
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
            <p className="text-xl text-gray-600">Streamlined workflow for quality API delivery</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Development Pricing</h2>
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
          <ContactForm serviceName="API Development" />
        </div>
      </section>
    </main>
  );
}

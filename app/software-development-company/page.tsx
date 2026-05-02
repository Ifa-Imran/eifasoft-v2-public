import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Software Development Company | Custom Software Solutions | EifaSoft',
    description: 'Leading software development company offering custom enterprise software solutions, cloud applications, API integration, and scalable architecture. Starting at ₹75,000.',
    canonical: '/software-development-company',
    keywords: ['software development company', 'custom software development', 'enterprise software solutions', 'cloud software development', 'software development services', 'custom application development', 'SaaS development company', 'ERP software development', 'CRM software development', 'software development company india', 'web application development company', 'agile software development', 'software outsourcing india', 'full stack development company', 'python development company', 'nodejs development company', 'react development company', 'microservices development', 'software product development india', 'software architecture consulting', 'MVP development company', 'software development moradabad'],
  });
}

const faqs = [
  {
    question: 'What types of software do you develop?',
    answer: 'We develop comprehensive custom software solutions including: Enterprise Software (large-scale business applications, workflow management systems, employee portals, collaboration platforms); SaaS Platforms (multi-tenant cloud applications, subscription-based services, B2B/B2C platforms); CRM Systems (customer relationship management, sales pipeline tracking, lead management, customer support ticketing); ERP Solutions (enterprise resource planning, inventory management, supply chain management, procurement systems); Business Automation Tools (workflow automation, document management, approval systems, notification engines); Cloud Applications (cloud-native apps, serverless architecture, microservices-based systems); Web Applications (progressive web apps, single-page applications, responsive web portals); Mobile Backend Systems (API development, database design, push notification services, authentication systems); Data Analytics Platforms (business intelligence dashboards, reporting tools, data visualization, predictive analytics); Integration Solutions (API integrations, legacy system modernization, third-party service connections, data synchronization); Industry-Specific Software (healthcare EMR/EHR, school/college ERP, hospital management, retail POS systems, restaurant management, real estate CRM, logistics tracking, manufacturing execution systems, legal case management, accounting software, HRMS/payroll systems).',
  },
  {
    question: 'How long does custom software development take?',
    answer: 'Custom software development timelines vary by complexity and scope:\n\n**Simple Applications** (8-12 weeks, ₹75K-₹2L):\n- Basic CRUD operations\n- 3-5 modules/features\n- Simple database design\n- Standard UI/UX\n- Single platform deployment\nExamples: Internal tools, basic inventory systems, simple calculators, contact management\n\n**Medium Complexity** (12-20 weeks, ₹2L-₹6L):\n- Multiple integrated modules (6-10)\n- Third-party API integrations (2-4 APIs)\n- Role-based access control\n- Custom workflows\n- Analytics dashboard\n- Cloud deployment\nExamples: CRM systems, project management tools, e-commerce platforms, booking systems\n\n**Large-Scale Enterprise** (20-40 weeks, ₹6L-₹20L+):\n- Complex microservices architecture\n- 10+ modules with advanced features\n- Multiple API integrations (5+)\n- Advanced security & compliance\n- High availability & scalability\n- Multi-platform support\n- Legacy system migration\nExamples: Enterprise ERP, multi-tenant SaaS platforms, marketplace platforms, banking systems\n\n**Development Phases Timeline**:\n1. Discovery & Requirements (1-2 weeks)\n2. UI/UX Design & Prototyping (2-3 weeks)\n3. Architecture Design (1-2 weeks)\n4. Development Sprints (varies: 6-30 weeks)\n5. Testing & QA (2-4 weeks)\n6. Deployment & Go-Live (1-2 weeks)\n7. Post-Launch Support (ongoing)\n\nWe follow Agile methodology with 2-week sprints, regular demos every sprint, and flexible scope adjustments based on your feedback.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes! We offer comprehensive post-launch support and maintenance packages tailored to your needs:\n\n**Support Services Include**:\n✓ Bug Fixes & Troubleshooting (critical issues resolved within 24 hours, priority support available)\n✓ Security Updates & Patches (vulnerability scanning, dependency updates, SSL renewal)\n✓ Performance Optimization (database query optimization, caching implementation, CDN configuration)\n✓ Feature Enhancements (adding new functionality based on user feedback and business needs)\n✓ Server Monitoring & Maintenance (uptime monitoring 99.9%+, error tracking, log analysis)\n✓ Backup Management (automated daily backups, disaster recovery planning, data restoration testing)\n✓ Database Administration (backup optimization, index tuning, data archiving strategies)\n✓ Technical Support (email, phone, Slack/Teams channels, screen sharing sessions)\n✓ User Training & Documentation (video tutorials, user manuals, admin guides, knowledge base)\n✓ Compliance Updates (GDPR, HIPAA, PCI-DSS regulation changes, accessibility WCAG 2.1)\n\n**Maintenance Packages**:\nStarter (₹10K/month): 15 hours support, bug fixes only, email support, monthly reports\nBusiness (₹25K/month): 40 hours support, minor enhancements, priority support, bi-weekly calls\nEnterprise (₹50K+/month): Unlimited support, dedicated team, 24/7 emergency support, weekly reviews\n\n**SLA Guarantees**:\n- Critical Issues: Response within 2 hours, Resolution within 24 hours\n- High Priority: Response within 4 hours, Resolution within 48 hours\n- Medium Priority: Response within 8 hours, Resolution within 5 business days\n- Low Priority: Response within 24 hours, Resolution in next release cycle\n\nAll packages include version control (Git), staging environment for testing, rollback capabilities, and quarterly business reviews.',
  },
  {
    question: 'Can you integrate with existing systems?',
    answer: 'Absolutely! We specialize in API integration and legacy system modernization:\n\n**Third-Party API Integrations**:\nPayment Gateways: Razorpay, Stripe, PayPal, Paytm, PhonePe, CCAvenue, PayU, Cashfree\nCRM Systems: Salesforce, HubSpot, Zoho CRM, Microsoft Dynamics 365, Freshsales\nEmail Marketing: Mailchimp, SendGrid, Constant Contact, ConvertKit, ActiveCampaign\nSMS/WhatsApp: Twilio, MSG91, TextLocal, KAPSYSTEM, WhatsApp Business API\nAccounting: Tally, QuickBooks, Xero, Zoho Books, SAP, Oracle Financials\nERP Systems: SAP, Oracle ERP, Microsoft Dynamics, Odoo, NetSuite\nHR/Payroll: Darwinbox, KekaHR, GreytHR, Zoho People, BambooHR\nE-commerce: Shopify, WooCommerce, Magento, BigCommerce, Amazon, Flipkart\nLogistics: Shiprocket, Delhivery, BlueDart, FedEx, DTDC, Ecom Express\nCloud Storage: AWS S3, Google Cloud Storage, Dropbox, OneDrive, Box\nVideo Conferencing: Zoom, Google Meet, Microsoft Teams, Jitsi, WebRTC\nMaps & Location: Google Maps API, MapmyIndia, Here Maps, Mapbox\nSocial Media: Facebook Graph API, Instagram API, Twitter API, LinkedIn API\nAnalytics: Google Analytics 4, Mixpanel, Amplitude, Hotjar, Clevertap\nCustomer Support: Zendesk, Freshdesk, Intercom, Zoho Desk, Help Scout\nProject Management: Jira, Asana, Trello, Monday.com, ClickUp\nCommunication: Slack API, Microsoft Teams, Telegram Bot, Discord Bot\nGovernment APIs: GST API, PAN verification, Aadhaar e-KYC (via official channels), DigiLocker\n\n**Legacy System Integration**:\nDatabase Migration: MySQL → PostgreSQL, SQL Server → MySQL, Oracle → PostgreSQL\nOn-Premise to Cloud: Physical servers → AWS/Azure/GCP, VM migration, containerization\nMonolith to Microservices: Breaking down monolithic apps into scalable microservices\nAPI Modernization: SOAP → REST/GraphQL, XML → JSON, RPC → gRPC\nData Synchronization: Real-time sync, batch processing, event-driven architecture\nScreen Scraping: Extracting data from legacy terminals for modern interfaces\n\n**Integration Approaches**:\nRESTful APIs (most common, HTTP-based, stateless, JSON format)\nGraphQL (flexible queries, reduced over-fetching, strongly typed)\ngRPC (high-performance, protobuf serialization, bidirectional streaming)\nWebhooks (event-driven, real-time notifications, callback URLs)\nMessage Queues (RabbitMQ, Apache Kafka, AWS SQS for async processing)\n\nAll integrations include thorough testing, error handling, retry mechanisms, rate limiting, OAuth/authentication setup, webhook validation, and comprehensive documentation.',
  },
  {
    question: 'What is the cost of custom software development?',
    answer: 'Transparent custom software development pricing in India:\n\n**By Project Type**:\nBasic Custom Software: ₹75,000 - ₹2,00,000\n- Simple business logic\n- 3-5 core features\n- Standard UI templates\n- Single user role\n- Basic reporting\nTimeline: 8-12 weeks\n\nBusiness Applications: ₹2,00,000 - ₹6,00,000\n- Multiple modules (6-10)\n- Role-based access (3-5 roles)\n- API integrations (2-4)\n- Custom workflows\n- Analytics dashboard\n- Cloud deployment\nTimeline: 12-20 weeks\n\nEnterprise Software: ₹6,00,000 - ₹20,00,000+\n- Complex architecture\n- Unlimited modules\n- Microservices approach\n- Advanced security (encryption, audit trails)\n- High availability setup\n- Scalability (1000+ concurrent users)\n- SLA guarantees\nTimeline: 20-40 weeks\n\n**By Technology Stack**:\nPHP/Laravel Projects: ₹75K - ₹4L (cost-effective, rapid development)\nPython/Django: ₹1.5L - ₹6L (data-heavy, AI/ML integration)\nNode.js/Express: ₹2L - ₹7L (real-time apps, high concurrency)\nJava/Spring Boot: ₹3L - ₹10L (enterprise-grade, banking/finance)\n.NET Core: ₹2.5L - ₹8L (Microsoft ecosystem, corporate environments)\nMERN/MEAN Stack: ₹2L - ₹7L (modern SPAs, startups)\n\n**Pricing Models**:\nFixed Price: Best for well-defined requirements, fixed timeline, fixed budget\nTime & Material: Flexible scope, pay-as-you-go (₹800-₹2,500/hour)\nDedicated Team: Monthly retainer for ongoing work (₹1L-₹5L/month per developer)\n\n**Additional Costs**:\nUI/UX Design (Premium): +₹50K - ₹2L\nDevOps & CI/CD Setup: +₹50K - ₹1.5L\nMobile App (iOS/Android): +₹1.5L - ₹5L per platform\nAdvanced Security Audit: +₹75K - ₹2L\nPerformance Testing: +₹50K - ₹1.5L\nMulti-language Support: +₹25K per language\nAnnual Maintenance: 15-20% of project cost\n\n**Payment Terms**:\n30% advance, 40% after beta release, 30% before go-live\nOr milestone-based payments aligned with sprint completions',
  },
  {
    question: 'What technologies do you use for software development?',
    answer: 'We use modern, proven technology stacks selected based on your specific requirements:\n\n**Backend Technologies**:\nNode.js (Express, NestJS) - Real-time apps, APIs, microservices, chat applications\nPython (Django, Flask, FastAPI) - Data science, AI/ML, automation, rapid prototyping\nPHP (Laravel, Symfony, CodeIgniter) - Web applications, CMS, e-commerce, cost-effective solutions\nJava (Spring Boot, Hibernate) - Enterprise software, banking systems, Android backend\nC# (.NET Core, ASP.NET) - Corporate applications, Microsoft ecosystem, Windows services\nGo (Golang) - High-performance APIs, concurrent systems, cloud-native apps\nRuby (Ruby on Rails) - Startups, MVPs, rapid development\nRust - System programming, performance-critical applications\n\n**Frontend Frameworks**:\nReact.js - Most popular, component-based, large ecosystem, SPAs\nNext.js - SSR/SSG, SEO-friendly, production-ready React framework\nAngular - Enterprise-grade, full-featured framework by Google\nVue.js - Lightweight, easy to learn, progressive framework\nTypeScript - Type-safe JavaScript, better IDE support, large projects\nTailwind CSS - Utility-first CSS, rapid UI development\nMaterial-UI / Ant Design - Pre-built component libraries\n\n**Databases**:\nRelational: MySQL, PostgreSQL, MariaDB, SQL Server (structured data, ACID compliance)\nNoSQL: MongoDB, CouchDB (flexible schemas, document storage)\nIn-Memory: Redis, Memcached (caching, session management, real-time)\nSearch Engines: Elasticsearch, Algolia (full-text search, analytics)\nGraph Databases: Neo4j (relationship-heavy data, social networks)\nTime-Series: InfluxDB (IoT, monitoring, financial data)\n\n**Cloud Platforms**:\nAWS (Amazon Web Services) - EC2, S3, RDS, Lambda, CloudFront (most comprehensive)\nAzure - Microsoft cloud, enterprise integration, hybrid cloud\nGoogle Cloud Platform (GCP) - AI/ML tools, Kubernetes, data analytics\nDigitalOcean - Simple VPS, cost-effective for startups\nHeroku - Platform-as-a-Service, easy deployment\nVercel / Netlify - Frontend hosting, serverless functions\n\n**DevOps & Tools**:\nDocker - Containerization, consistent environments\nKubernetes - Container orchestration, auto-scaling\nJenkins / GitHub Actions - CI/CD pipelines\nTerraform - Infrastructure as Code (IaC)\nAnsible - Configuration management\nGitLab / Bitbucket - Version control, code review\nPrometheus + Grafana - Monitoring, alerting, dashboards\nELK Stack (Elasticsearch, Logstash, Kibana) - Log management\n\n**Architecture Patterns**:\nMonolithic Architecture (simple apps, quick deployment)\nMicroservices (scalable, independent deployment, fault isolation)\nServerless (AWS Lambda, pay-per-execution, auto-scaling)\nEvent-Driven (message queues, async processing)\nDomain-Driven Design (complex business logic, bounded contexts)',
  },
  {
    question: 'Do you offer staff augmentation or dedicated developer hiring?',
    answer: 'Yes! We provide flexible staff augmentation and dedicated team models:\n\n**Staff Augmentation Models**:\n\n1. **Dedicated Developers** (Full-Time)\n   - Junior Developer: ₹40K-₹60K/month (1-3 years experience)\n   - Mid-Level Developer: ₹60K-₹1L/month (3-5 years experience)\n   - Senior Developer: ₹1L-₹2L/month (5-8 years experience)\n   - Tech Lead/Architect: ₹2L-₹3.5L/month (8-12 years experience)\n   Minimum commitment: 3 months\n   Includes: Developer salary, infrastructure, management overhead\n   You manage: Daily tasks, project direction, code reviews\n\n2. **Dedicated Teams** (Complete Unit)\n   Typical Team Composition:\n   - 1 Project Manager (part-time)\n   - 1 Tech Lead (shared across projects)\n   - 2-4 Developers (full-time)\n   - 1 QA Engineer (shared)\n   Cost: ₹3L-₹8L/month depending on team size and seniority\n   Ideal for: Long-term projects (6+ months), evolving requirements\n\n3. **Build-Operate-Transfer **(BOT)\n   Phase 1 (Build): We hire and train team for your project (2-3 months)\n   Phase 2 (Operate): Team works under our management (6-12 months)\n   Phase 3 (Transfer): Optional transfer to your payroll (one-time fee)\n   Benefits: Zero hiring risk, faster ramp-up, knowledge retention\n\n**Available Roles**:\nFull Stack Developers (MERN, MEAN, Laravel, Django)\nFrontend Specialists (React, Angular, Vue.js)\nBackend Experts (Node.js, Python, Java, .NET, PHP)\nMobile Developers (React Native, Flutter, Swift, Kotlin)\nDevOps Engineers (AWS, Azure, Docker, Kubernetes)\nQA/Test Engineers (Manual, Automation, Selenium, Cypress)\nUI/UX Designers (Figma, Adobe XD, Sketch)\nDatabase Administrators (MySQL, PostgreSQL, MongoDB)\nBusiness Analysts (requirements gathering, documentation)\nProject Managers (PMP, Agile, Scrum certified)\n\n**Engagement Terms**:\n- Working hours: 8 hours/day, 5 days/week (40 hours/week)\n- Overlap with your timezone: Available for EST/PST/CET timezones\n- Communication: Daily standups via Zoom/Slack/Teams\n- Tools: Your choice (Jira, Asana, Trello, Monday.com)\n- Notice period: 2 weeks for replacement if not satisfied\n- Annual revision: 10-15% salary increase after 1 year\n- Benefits: Paid leaves (15 days/year), sick leave, bonuses\n\n**Why Choose Staff Augmentation**:\n✓ Faster hiring (deploy within 1-2 weeks vs 2-3 months locally)\n✓ Cost savings (no recruitment fees, infrastructure, benefits)\n✓ Flexibility (scale up/down based on project needs)\n✓ Access to top talent (rigorous screening, top 3% developers)\n✓ Focus on core business (we handle HR, payroll, compliance)\n✓ Knowledge continuity (team stays even if individuals leave)\n\nCurrently managing 25+ dedicated developers for clients in USA, UK, Australia, UAE, and Singapore.',
  },
  {
    question: 'Which industries do you develop software for?',
    answer: 'We have deep domain expertise across 25+ industries:\n\n**Healthcare & Life Sciences**:\nEMR/EHR Systems, Telemedicine Platforms, Hospital Management (HIS), Clinic Management, Pharmacy Inventory, Lab Information Systems (LIS), Medical Billing, Appointment Scheduling, Patient Portals, Health Analytics, Clinical Trial Management, DICOM Imaging, HIPAA-compliant solutions - Starting ₹3,00,000\n\n**FinTech & Banking**:\nCore Banking Systems, Digital Wallets, Payment Processing, Lending Platforms, Loan Origination, Credit Scoring, Investment Management, Robo-Advisors, Insurance Policy Management, Claims Processing, Fraud Detection, KYC/AML Compliance, Blockchain/Crypto Exchanges, Trading Platforms, Personal Finance Apps - Starting ₹5,00,000 (RBI/SEBI compliant)\n\n**E-Commerce & Retail**:\nMulti-Vendor Marketplaces (Amazon clones), B2B/B2C Stores, Inventory Management, Order Management, POS Systems, Customer Loyalty Programs, Subscription Boxes, Dropshipping Platforms, Flash Sale Sites, Auction Platforms, Price Comparison Engines, Product Recommendation Systems - Starting ₹2,00,000\n\n**Education Technology **(EdTech)\nLearning Management Systems (LMS), Student Information Systems (SIS), Virtual Classrooms, Online Course Platforms, Exam/Test Preparation, Adaptive Learning, School/College ERP, Library Management, Attendance Tracking, Video Streaming Education, Tutor Matching, Certification Platforms - Starting ₹1,50,000\n\n**Real Estate & PropTech**:\nProperty Listing Portals (MagicBricks clones), CRM for Brokers, Project Management for Builders, Tenant/Rental Management, HOA Management, Virtual Tour Integration, Mortgage Calculators, Document Management, Legal Compliance Tracking, Construction Management - Starting ₹1,20,000\n\n**Manufacturing & Industry 4.0**:\nManufacturing Execution Systems (MES), Enterprise Asset Management, Quality Control Systems, Production Planning, Supply Chain Management, Warehouse Management (WMS), IoT Integration, Predictive Maintenance, Barcode/RFID Tracking, Vendor Management - Starting ₹4,00,000\n\n**Logistics & Supply Chain**:\nTransportation Management Systems (TMS), Fleet Management, Route Optimization, Last-Mile Delivery, Courier Aggregation, Warehouse Automation, Cold Chain Monitoring, Freight Marketplaces, Driver Apps, GPS Tracking, Proof of Delivery - Starting ₹3,00,000\n\n**Hospitality & Tourism**:\nHotel Property Management (PMS), Restaurant POS & KOT, Online Reservation Systems, Travel Booking Engines, Tour Operator Software, OTA Integration, Guest Feedback Management, Housekeeping Scheduling, Revenue Management - Starting ₹2,00,000\n\n**Media & Entertainment**:\nOTT Streaming Platforms (Netflix clones), Content Management Systems, Digital Asset Management, Ad Servers, Subscription Management, Fan Engagement Apps, Ticket Booking, Live Streaming, Video-on-Demand, Podcast Platforms - Starting ₹4,00,000\n\n**Legal Tech**:\nCase Management Systems, Document Automation, Legal Research Tools, E-Discovery, Time Tracking & Billing, Contract Management, Client Portals, Court Filing Integration, Compliance Management - Starting ₹2,50,000\n\n**Human Resources **(HR Tech)\nHRMS Suites, Applicant Tracking Systems (ATS), Payroll Processing, Performance Management, Learning & Development, Employee Engagement, Background Verification, Timesheet Management, Benefits Administration - Starting ₹1,50,000\n\n**Government & Public Sector**:\nE-Governance Platforms, Citizen Service Portals, Tax Filing Systems, License/Permit Management, Grievance Redressal, Public Distribution Systems (PDS), Land Records, Birth/Death Registration, Vehicle Registration (RTO) - Starting ₹10,00,000\n\n**Other Industries**: Agriculture/Farming, Energy/Utilities, Telecom, Insurance, Automotive, Sports/Fitness, Non-Profit/NGO, Religious Organizations, Beauty/Wellness, Events/Weddings, Photography/Videography, Recruitment/Staffing, Market Research, Translation Services, Security Services, Waste Management',
  },
  {
    question: 'Do you provide legacy software modernization services?',
    answer: 'Yes! We specialize in legacy system modernization to transform outdated software into modern, scalable applications:\n\n**Modernization Services**:\n\n1. **Code Migration**\n   - VB6 → .NET Core / C#\n   - Classic ASP → Node.js / PHP Laravel\n   - PHP 5.x → PHP 8.x / Laravel\n   - Python 2.x → Python 3.x / FastAPI\n   - AngularJS → Angular / React / Vue.js\n   - jQuery → React / Vue.js\n   Cost: ₹3L - ₹12L depending on codebase size\n\n2. **Database Migration**\n   - MS Access → MySQL / PostgreSQL\n   - FoxPro → SQL Server / PostgreSQL\n   - Oracle → PostgreSQL (cost optimization)\n   - SQL Server → MySQL / Aurora\n   - On-premise DB → Cloud (RDS, Cloud SQL)\n   Includes: Schema conversion, data migration, stored procedure rewriting, performance tuning\n   Cost: ₹2L - ₹8L + database licensing\n\n3. **Architecture Transformation**\n   - Monolith → Microservices\n   - Server-based → Serverless (Lambda, Cloud Functions)\n   - Synchronous → Event-Driven Architecture\n   - Single-tier → Multi-Tier Architecture\n   Benefits: Better scalability, independent deployment, fault isolation\n   Cost: ₹5L - ₹20L based on complexity\n\n4. **UI/UX Rebuild**\n   - Desktop app → Web application\n   - Web Forms → Responsive SPA\n   - WinForms/WPF → React / Angular\n   - Thick client → Thin client / PWA\n   Improvements: Mobile responsiveness, modern design, better UX, accessibility compliance\n   Cost: ₹2L - ₹10L\n\n5. **Cloud Migration**\n   - Physical servers → AWS/Azure/GCP\n   - VMware → Containerization (Docker/Kubernetes)\n   - Manual deployment → CI/CD pipelines\n   - Self-hosted → SaaS model\n   Includes: Lift-and-shift, replatforming, refactoring\n   Cost: ₹3L - ₹15L + cloud infrastructure costs\n\n6. **API Enablement**\n   - Add REST/GraphQL APIs to legacy systems\n   - SOAP → REST API modernization\n   - Create API gateways (Kong, AWS API Gateway)\n   - Implement OAuth 2.0 / JWT authentication\n   Benefits: Mobile app integration, third-party partnerships, ecosystem expansion\n   Cost: ₹1.5L - ₹6L\n\n**Our Modernization Process**:\nPhase 1: Assessment & Audit (2-3 weeks)\n- Code quality analysis (SonarQube, CAST)\n- Dependency mapping\n- Technical debt quantification\n- Risk assessment\n- ROI calculation\n\nPhase 2: Strategy & Roadmap (1-2 weeks)\n- Choose modernization approach (rebuild vs refactor vs replace)\n- Technology stack selection\n- Prioritization matrix\n- Migration plan with milestones\n\nPhase 3: Incremental Migration (8-24 weeks)\n- Strangler Fig Pattern (gradual replacement)\n- Parallel running (old + new systems)\n- Data synchronization\n- User training\n\nPhase 4: Cutover & Decommission (2-4 weeks)\n- Final data migration\n- DNS switchover\n- Legacy system shutdown\n- Archive historical data\n\n**Client Success Stories**:\n- Manufacturing ERP: Migrated from VB6 + FoxPro to .NET Core + PostgreSQL (₹8.5L, 18 weeks)\n- Banking Application: AngularJS → React + Node.js microservices (₹15L, 28 weeks)\n- Hospital System: On-premise → AWS cloud with 99.99% uptime (₹12L, 22 weeks)\n\n**ROI Benefits**:\n- 60-80% reduction in maintenance costs\n- 50-70% faster feature development\n- 90%+ reduction in downtime\n- 3-5x improvement in performance\n- Access to modern integrations (mobile apps, APIs, AI/ML)\n- Eliminate security vulnerabilities in outdated frameworks',
  },
];

export default function SoftwareDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'Custom Software Development Services',
    'Enterprise-grade custom software development services for businesses. Scalable, secure, and feature-rich software solutions with cloud deployment and API integration.'
  );

  const productSchema = generateProductSchema(
    'Custom Software Development Package',
    'Complete custom software development solution with cloud architecture, API integration, security, and ongoing support',
    '₹75,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Custom Software Development Platform',
    description: 'Enterprise-grade custom software development platform for building scalable cloud applications, SaaS platforms, CRM/ERP systems, and business automation solutions with modern technology stacks.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Cloud (AWS, Azure, GCP), On-Premise',
    price: '75000',
    rating: 4.9,
    reviewCount: 187,
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
    { name: 'Software Development', url: '/software-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Custom Software Development Company"
        subtitle="Enterprise-Grade Solutions for Your Business"
        description="Scalable, secure custom software built with modern technologies. From concept to deployment and beyond."
        ctaPrimary={{ text: 'Get Free Quote', href: '/contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      {/* What is Software Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Software Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Software Development</strong> is the process of designing, creating, testing, and maintaining applications, frameworks, or other software components. It involves the full software development lifecycle (SDLC) including requirements analysis, system design, coding, testing, deployment, and maintenance. Modern software development uses agile methodologies, DevOps practices, cloud-native architectures, and technologies like Python, Node.js, React, and cloud platforms to build scalable, secure business solutions.
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
                  Custom software development starting at ₹75,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Enterprise, SaaS, CRM, ERP solutions
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Node.js, Python, React, AWS, Azure
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  8-40 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cloud-native architecture
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Post-launch support & maintenance included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Software Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From enterprise applications to SaaS platforms, we build software solutions that drive business growth and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Enterprise Software',
                description: 'Large-scale business applications with complex workflows, multi-user support, and advanced features.',
                features: ['Scalable Architecture', 'Role-Based Access', 'Advanced Analytics', 'Integration Ready'],
              },
              {
                icon: '☁️',
                title: 'Cloud Applications',
                description: 'Cloud-native software with high availability, automatic scaling, and global accessibility.',
                features: ['AWS/Azure/GCP', 'Auto-Scaling', 'High Availability', 'Global CDN'],
              },
              {
                icon: '🔄',
                title: 'SaaS Platforms',
                description: 'Multi-tenant SaaS applications with subscription management and user analytics.',
                features: ['Multi-Tenancy', 'Subscription Billing', 'User Analytics', 'API Access'],
              },
              {
                icon: '📊',
                title: 'CRM & ERP Systems',
                description: 'Custom CRM and ERP solutions tailored to your business processes and workflows.',
                features: ['Custom Workflows', 'Reporting & Analytics', 'Automation', 'Mobile Access'],
              },
              {
                icon: '🔌',
                title: 'API Development',
                description: 'RESTful and GraphQL APIs with comprehensive documentation and developer tools.',
                features: ['REST & GraphQL', 'API Documentation', 'Rate Limiting', 'Webhook Support'],
              },
              {
                icon: '🤖',
                title: 'Business Automation',
                description: 'Automate repetitive tasks and workflows to improve efficiency and reduce costs.',
                features: ['Workflow Automation', 'Task Scheduling', 'Email Automation', 'Data Synchronization'],
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EifaSoft for Software Development?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver software that solves real problems and drives growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Business-Focused', description: 'Solutions aligned with your business goals and ROI' },
              { icon: '⚡', title: 'Agile Development', description: 'Iterative approach with regular feedback and updates' },
              { icon: '🔒', title: 'Security First', description: 'Enterprise-grade security and compliance standards' },
              { icon: '📈', title: 'Scalable', description: 'Architecture designed to grow with your business' },
              { icon: '🧪', title: 'Quality Assured', description: 'Comprehensive testing for bug-free deployment' },
              { icon: '📱', title: 'Cloud Native', description: 'Modern cloud infrastructure for reliability' },
              { icon: '💡', title: 'Innovation', description: 'Latest technologies and best practices' },
              { icon: '🤝', title: 'Partnership', description: 'Long-term support and continuous improvement' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage modern, proven technologies to build robust and scalable software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PHP', 'Java', 'C#', '.NET', 'Ruby', 'Go'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Databases & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure', 'GCP', 'Docker'].map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver high-quality software on time and within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'We analyze your business requirements, workflows, and objectives to create a detailed project roadmap.' },
              { step: '02', title: 'Architecture Design', description: 'Our architects design scalable, secure system architecture and database schemas.' },
              { step: '03', title: 'Agile Development', description: 'We build your software in sprints with regular demos and feedback cycles.' },
              { step: '04', title: 'Quality Assurance', description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.' },
              { step: '05', title: 'Deployment & CI/CD', description: 'We deploy to production with continuous integration and automated deployment pipelines.' },
              { step: '06', title: 'Support & Enhancement', description: 'Ongoing maintenance, monitoring, and feature enhancements based on user feedback.' },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a package that aligns with your project scope and budget. All packages include full documentation and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹75,000',
                description: 'Perfect for small business applications',
                features: [
                  'Basic custom software',
                  'Up to 3 modules',
                  'Database design',
                  'Admin panel',
                  'User authentication',
                  '3 months support',
                  'Documentation',
                ],
                highlighted: false,
              },
              {
                name: 'Business',
                price: '₹2,50,000',
                description: 'Ideal for medium-sized enterprises',
                features: [
                  'Advanced features',
                  'Up to 10 modules',
                  'API integration',
                  'Role-based access',
                  'Analytics dashboard',
                  '6 months support',
                  'Cloud deployment',
                  'Mobile responsive',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale applications',
                features: [
                  'Unlimited modules',
                  'Custom architecture',
                  'Microservices',
                  'Advanced security',
                  '12 months support',
                  'Dedicated team',
                  'SLA guarantee',
                  'Performance optimization',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Your Custom Software?
              </h2>
              <p className="text-lg text-gray-600">
                Get a free consultation and detailed proposal for your software project.
              </p>
            </div>
            <ContactForm serviceName="Software Development Company" />
          </div>
        </div>
      </section>
    </main>
  );
}

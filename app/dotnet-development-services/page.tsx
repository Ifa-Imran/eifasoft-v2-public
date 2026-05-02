import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: '.NET Development Services India | ASP.NET Core, Blazor, Web Apps | EifaSoft',
    description: 'Expert .NET development company in India. Enterprise web applications using ASP.NET Core, Blazor, C#, Azure cloud. Starting ₹1,50,000.',
    canonical: '/dotnet-development-services',
    keywords: [
      // Core .NET Keywords
      '.NET development services',
      '.NET development company India',
      'hire .NET developers',
      'custom .NET development',
      '.NET web development',
      '.NET application development',
      
      // Framework & Technologies
      'ASP.NET Core development',
      '.NET Framework',
      '.NET 8/.NET 9',
      'C# development',
      'Blazor development',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'Razor Pages',
      
      // Cloud & Azure
      'Azure cloud services',
      'Azure App Service',
      'Azure Functions',
      'Azure SQL Database',
      'Azure DevOps',
      'cloud-native .NET',
      'serverless .NET',
      
      // Architecture
      '.NET microservices',
      'microservices architecture',
      'clean architecture .NET',
      'DDD .NET',
      'CQRS pattern',
      
      // Databases
      'SQL Server development',
      'Entity Framework Core',
      'Dapper ORM',
      'LINQ',
      'NoSQL databases',
      'Cosmos DB',
      
      // Frontend
      'Blazor WebAssembly',
      'Blazor Server',
      '.NET MAUI',
      'progressive web apps',
      
      // DevOps & Containers
      '.NET Docker',
      '.NET Kubernetes',
      'CI/CD pipeline',
      'Azure Pipelines',
      'GitHub Actions',
      
      // Testing & Quality
      '.NET unit testing',
      'xUnit',
      'NUnit',
      'Moq',
      'test-driven development',
      
      // Migration & Modernization
      '.NET migration',
      '.NET modernization',
      'legacy .NET upgrade',
      '.NET Core migration',
      
      // Industry Solutions
      '.NET FinTech solutions',
      '.NET healthcare apps',
      '.NET e-commerce',
      '.NET enterprise apps',
      '.NET SaaS platforms',
      
      // Cost & Hiring
      '.NET development cost',
      '.NET developer rate India',
      'dedicated .NET developer',
      'affordable .NET development',
      
      // Location-Based
      '.NET developer Noida',
      '.NET company Delhi',
      '.NET services Bangalore',
      '.NET developer Mumbai',
      '.NET Hyderabad',
      '.NET Pune',
    ],
  });
}

const faqs = [
  {
    question: 'What is .NET used for in web development?',
    answer: '.NET is a powerful, cross-platform framework used for building enterprise-grade applications:\\n\\n**Web Applications:**\\n- ASP.NET Core: High-performance web apps and APIs\\n- Blazor: Interactive client-side apps with C#\\n- Razor Pages: Page-focused web UI\\n\\n**Enterprise Solutions:**\\n- Microservices architecture\\n- Cloud-native applications (Azure)\\n- RESTful APIs and gRPC services\\n- Real-time apps with SignalR\\n\\n**Business Applications:**\\n- E-commerce platforms\\n- SaaS multi-tenant systems\\n- FinTech solutions\\n- Healthcare management systems\\n\\n**Why Choose .NET?**\\n✓ Cross-platform (Windows, Linux, macOS)\\n✓ High performance (.NET 8 is fastest yet)\\n✓ Enterprise-grade security\\n✓ Azure cloud integration\\n✓ Strong typing with C#\\n✓ Excellent tooling (Visual Studio)',
  },
  {
    question: 'Which .NET framework is best for my project?',
    answer: 'Framework choice depends on your requirements:\\n\\n**.NET 8/.NET 9** (Latest & Recommended)\\n✓ Best for: All new projects, cross-platform needs\\n✓ Features: Unified platform, highest performance\\n✓ Support: Long-term support (LTS)\\n✓ Timeline: 6-14 weeks\\n✓ Cost: ₹1,50,000-₹6,00,000\\n\\n**ASP.NET Core** (Web Development)\\n✓ Best for: Web apps, APIs, microservices\\n✓ Features: MVC, Razor Pages, Web API\\n✓ Examples: Enterprise portals, e-commerce\\n✓ Timeline: 8-16 weeks\\n✓ Cost: ₹2,00,000-₹8,00,000\\n\\n**Blazor** (Interactive UI)\\n✓ Best for: Rich client-side web apps\\n✓ Features: C# instead of JavaScript, WebAssembly\\n✓ Examples: Dashboards, LOB apps\\n✓ Timeline: 6-12 weeks\\n✓ Cost: ₹1,80,000-₹5,00,000\\n\\n**Our Recommendation:**\\n- New projects → .NET 8\\n- Web APIs → ASP.NET Core\\n- Rich UI → Blazor WebAssembly\\n- Enterprise apps → ASP.NET Core + Blazor',
  },
  {
    question: 'How much does .NET development cost in India?',
    answer: '.NET development costs vary by complexity:\\n\\n**Basic .NET App** (₹1,50,000-₹2,50,000, 6-8 weeks)\\n- ASP.NET Core or Blazor\\n- 5-7 basic features\\n- SQL Server database\\n- User authentication\\n- Basic UI/UX\\n- Example: Simple CRM, internal tool\\n\\n**Professional .NET Solution** (₹3,00,000-₹6,00,000, 9-14 weeks)\\n- Full-featured web application\\n- ASP.NET Core Web API\\n- Entity Framework Core\\n- Azure integration\\n- Payment gateway\\n- Testing & documentation\\n- Example: E-commerce, SaaS platform\\n\\n**Enterprise .NET Platform** (₹6,00,000-₹15,00,000+, 14-24 weeks)\\n- Complex enterprise system\\n- Microservices architecture\\n- Azure cloud-native\\n- CI/CD pipelines\\n- Container orchestration\\n- Scalability & security\\n- Dedicated team\\n- Example: Enterprise portal, marketplace\\n\\n**By Engagement Model:**\\n- Fixed Price: ₹1,50,000-₹10,00,000 (defined scope)\\n- Hourly: ₹1,500-₹3,500/hour (flexible)\\n- Monthly Retainer: ₹1,50,000-₹3,50,000/month',
  },
  {
    question: 'Can you migrate our legacy .NET Framework app to .NET Core?',
    answer: 'Yes! We specialize in .NET modernization:\\n\\n**Migration Sources:**\\n✓ .NET Framework 4.x → .NET 8\\n✓ ASP.NET MVC 5 → ASP.NET Core\\n✓ .NET Core 3.1 → .NET 8\\n✓ .NET 5/6 → .NET 8\\n\\n**Our Migration Process:**\\n\\n**Phase 1: Assessment (1-2 weeks)**\\n- Code analysis & compatibility check\\n- Dependency mapping\\n- Effort estimation\\n- Risk assessment\\n\\n**Phase 2: Planning (1 week)**\\n- Migration strategy (incremental vs big bang)\\n- Architecture improvements\\n- Technology stack selection\\n- Timeline & resource planning\\n\\n**Phase 3: Migration (4-12 weeks)**\\n- Update project files to SDK-style\\n- Replace deprecated APIs\\n- Update NuGet packages\\n- Database migration (if needed)\\n\\n**Phase 4: Testing (2-3 weeks)**\\n- Unit tests & integration tests\\n- Performance benchmarking\\n- Security testing\\n- User acceptance testing\\n\\n**Phase 5: Deployment (1 week)**\\n- Azure deployment setup\\n- CI/CD pipeline configuration\\n- Monitoring & logging\\n\\n**Benefits:**\\n- Cross-platform support\\n- 2-3x performance improvement\\n- Better security\\n- Lower hosting costs\\n- Modern tooling\\n\\n**Cost:** ₹2,00,000-₹8,00,000 depending on complexity',
  },
  {
    question: 'What databases work with .NET?',
    answer: '.NET supports all major databases through excellent ORM options:\\n\\n**Relational Databases (SQL):**\\n\\n**SQL Server** (Recommended for Enterprise)\\n✓ Entity Framework Core, Dapper\\n✓ Full ACID compliance\\n✓ Azure SQL Database available\\n✓ Perfect for: Enterprise apps, transactional systems\\n\\n**PostgreSQL** (Open Source Choice)\\n✓ EF Core, Npgsql\\n✓ Advanced JSON support\\n✓ Great for: Startups, cost-conscious projects\\n\\n**MySQL/MariaDB**\\n✓ EF Core, Pomelo provider\\n✓ Widely adopted\\n✓ Great for: Web apps, content management\\n\\n**NoSQL Databases:**\\n\\n**Cosmos DB** (Azure Native)\\n✓ Microsoft.Azure.Cosmos SDK\\n✓ Globally distributed\\n✓ Perfect for: Global scale, multi-model\\n\\n**MongoDB**\\n✓ MongoDB.Driver, MongoEF\\n✓ Document-based\\n✓ Perfect for: Content management, catalogs\\n\\n**Redis**\\n✓ StackExchange.Redis\\n✓ In-memory caching\\n✓ Perfect for: Caching, session management\\n\\n**Our Recommendations:**\\n- Enterprise: SQL Server + EF Core\\n- Startup: PostgreSQL + EF Core\\n- High-performance: SQL Server + Redis cache\\n- Global scale: Cosmos DB',
  },
  {
    question: 'Do you provide Blazor development services?',
    answer: 'Yes! We specialize in Blazor for interactive web UIs:\\n\\n**Blazor Hosting Models:**\\n\\n**Blazor WebAssembly** (Client-Side)\\n✓ Runs in browser via WebAssembly\\n✓ Offline capability\\n✓ Progressive web app (PWA) support\\n✓ Cost: ₹1,80,000-₹5,00,000\\n✓ Best for: Public-facing apps, offline needs\\n\\n**Blazor Server** (Server-Side)\\n✓ Runs on server, real-time UI updates\\n✓ Smaller download size\\n✓ Requires SignalR connection\\n✓ Cost: ₹1,50,000-₹4,50,000\\n✓ Best for: Internal apps, real-time dashboards\\n\\n**Blazor Hybrid** (.NET MAUI)\\n✓ Desktop & mobile apps\\n✓ Share code with web Blazor\\n✓ Native performance\\n✓ Cost: ₹2,00,000-₹6,00,000\\n\\n**What We Build:**\\n- Business dashboards\\n- Line-of-business (LOB) apps\\n- Admin panels\\n- Real-time collaboration tools\\n- Data visualization apps\\n\\n**Advantages:**\\n✓ Write C# instead of JavaScript\\n✓ Reuse existing .NET skills\\n✓ Full-stack .NET development\\n✓ Component-based architecture\\n✓ Rich ecosystem of components\\n\\n**Popular Component Libraries:**\\n- Telerik UI for Blazor\\n- DevExpress Blazor\\n- MudBlazor (free)\\n- Radzen (free)',
  },
  {
    question: 'What industries do you build .NET solutions for?',
    answer: 'We have domain expertise across 20+ industries:\\n\\n**FinTech & Banking** (Starting ₹5,00,000)\\n- Payment processing systems\\n- Trading platforms\\n- Fraud detection\\n- Compliance reporting\\n- PCI-DSS compliance\\n\\n**Healthcare** (Starting ₹4,50,000)\\n- Electronic health records (EHR)\\n- Telemedicine platforms\\n- Practice management\\n- HIPAA compliance\\n- Medical billing\\n\\n**E-Commerce & Retail** (Starting ₹3,00,000)\\n- Online stores\\n- Inventory management\\n- Order processing\\n- Customer analytics\\n- Multi-vendor marketplaces\\n\\n**Manufacturing** (Starting ₹5,00,000)\\n- ERP systems\\n- Supply chain management\\n- Quality control\\n- IoT integration\\n- Predictive maintenance\\n\\n**Logistics & Supply Chain** (Starting ₹4,50,000)\\n- Fleet tracking\\n- Route optimization\\n- Warehouse management\\n- Shipment tracking\\n- Proof of delivery\\n\\n**SaaS & Startups** (Starting ₹3,50,000)\\n- Multi-tenant platforms\\n- Subscription billing\\n- Analytics dashboards\\n- API-first products\\n\\nAnd many more: Education, Legal Tech, HR Tech, Insurance, Real Estate, Hospitality',
  },
];

export default function DotNetDevelopmentServices() {
  const services = [
    {
      icon: '🔷',
      title: 'Custom .NET Development',
      description: 'Tailored enterprise-grade solutions built on Microsoft .NET framework',
      features: ['Web Applications', 'Desktop Apps', 'Mobile Apps', 'API Development'],
    },
    {
      icon: '🌐',
      title: 'ASP.NET Core Web Development',
      description: 'High-performance, cross-platform web applications using ASP.NET Core',
      features: ['ASP.NET MVC', 'Razor Pages', 'Web API', 'SignalR'],
    },
    {
      icon: '⚡',
      title: 'Blazor Development',
      description: 'Interactive client-side web apps with C# instead of JavaScript',
      features: ['Blazor WebAssembly', 'Blazor Server', 'Hybrid Apps', 'Components'],
    },
    {
      icon: '☁️',
      title: 'Azure Cloud Services',
      description: 'Cloud-native applications and migration to Microsoft Azure',
      features: ['Azure App Service', 'Azure Functions', 'Azure SQL', 'DevOps'],
    },
    {
      icon: '🏗️',
      title: '.NET Microservices',
      description: 'Scalable microservices architecture with containerization',
      features: ['Docker Containers', 'Kubernetes', 'API Gateway', 'Service Mesh'],
    },
    {
      icon: '🔄',
      title: '.NET Migration & Modernization',
      description: 'Upgrade legacy .NET Framework apps to modern .NET Core/.NET 8+',
      features: ['Framework Migration', 'Cloud Migration', 'Performance Optimization', 'Security Updates'],
    },
  ];;

  const technologies = [
    { name: '.NET 8/.NET 9', icon: '🔷', category: 'Framework' },
    { name: 'ASP.NET Core', icon: '🌐', category: 'Web Framework' },
    { name: 'C#', icon: '💻', category: 'Language' },
    { name: 'Blazor', icon: '⚡', category: 'Frontend' },
    { name: 'Entity Framework Core', icon: '🗄️', category: 'ORM' },
    { name: 'SQL Server', icon: '📊', category: 'Database' },
    { name: 'Azure', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'Containers' },
    { name: 'Kubernetes', icon: '⎈', category: 'Orchestration' },
    { name: 'Azure DevOps', icon: '🔄', category: 'CI/CD' },
    { name: 'SignalR', icon: '📡', category: 'Real-time' },
    { name: 'gRPC', icon: '🔌', category: 'Communication' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Cosmos DB', icon: '🌍', category: 'NoSQL' },
  ];;

  const dotNetFeatures = [
    {
      title: 'Enterprise-Ready',
      items: ['Built-in Security', 'Scalability', 'High Performance', 'Cross-platform'],
    },
    {
      title: 'Development Tools',
      items: ['Visual Studio 2022', '.NET CLI', 'IntelliSense', 'Debugging Tools'],
    },
    {
      title: 'Cloud Integration',
      items: ['Azure Native', 'App Service', 'Functions', 'DevOps Pipeline'],
    },
    {
      title: 'Modern Architecture',
      items: ['Microservices', 'Containers', 'API Gateway', 'Event-driven'],
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic .NET App',
      price: '₹1,50,000',
      duration: '6-8 weeks',
      features: [
        'Simple Web Application',
        'ASP.NET Core Framework',
        'Basic Features (5-7)',
        'SQL Server Database',
        'User Authentication',
        '1 Month Support',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional .NET Solution',
      price: '₹3,00,000',
      duration: '9-14 weeks',
      features: [
        'Full-Featured Web App',
        'ASP.NET Core Web API',
        'Advanced Features (10-15)',
        'Entity Framework Core',
        'Azure Cloud Integration',
        'Payment Gateway',
        'Testing & Documentation',
        '3 Months Support',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise .NET Platform',
      price: '₹6,00,000+',
      duration: '14-24 weeks',
      features: [
        'Complex Enterprise Platform',
        'Microservices Architecture',
        'Blazor Components',
        'Azure Cloud-Native',
        'CI/CD Pipeline',
        'Container Orchestration',
        'Performance Optimization',
        'Scalability & Security',
        '6 Months Support',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const process = [
    { step: 1, title: 'Discovery & Architecture', desc: 'Understand requirements and design .NET solution architecture' },
    { step: 2, title: '.NET Development', desc: 'Build using ASP.NET Core, Blazor, C# with best practices' },
    { step: 3, title: 'Quality Assurance', desc: 'Comprehensive testing with xUnit, integration & performance tests' },
    { step: 4, title: 'Azure Deployment', desc: 'Deploy to Azure cloud with CI/CD pipelines' },
    { step: 5, title: 'Monitoring & Support', desc: 'Application Insights monitoring and ongoing support' },
  ];

  const serviceSchema = generateServiceSchema(
    '.NET Development Services',
    'Professional .NET development company in India offering enterprise web applications (ASP.NET Core, Blazor), cloud-native solutions (Azure), microservices architecture, and legacy modernization.'
  );

  const productSchema = generateProductSchema(
    '.NET Development Package',
    'Complete .NET development solution with ASP.NET Core, Blazor, C#, Entity Framework, Azure cloud integration, and enterprise-grade security.',
    '150000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft .NET Development Platform',
    description: 'Professional .NET development platform with ASP.NET Core, Blazor WebAssembly, C#, Entity Framework Core, SQL Server, and Azure cloud-native deployment.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform, Cloud',
    price: '150000',
    rating: 4.9,
    reviewCount: 98,
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
    { name: '.NET Development Services', url: '/dotnet-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title=".NET Development Services"
        subtitle="ASP.NET Core, Blazor & Enterprise Apps"
        description="Expert .NET development company in India. Build enterprise-grade web applications with ASP.NET Core, Blazor, C#, Azure cloud. Starting ₹1,50,000."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="blue"
      />

      {/* What is .NET Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is .NET Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>.NET Development</strong> involves building enterprise-grade applications using Microsoft&apos;s .NET framework, a powerful, cross-platform platform for web, mobile, and desktop apps. .NET (including .NET 8/.NET 9) is used for web development (ASP.NET Core, Blazor), cloud-native applications (Azure), microservices architecture, and enterprise systems. Its robust ecosystem with C#, Entity Framework, and Azure integration makes it ideal for scalable, secure business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  .NET development starting at ₹1,50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  ASP.NET Core, Blazor frameworks
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Azure cloud integration expertise
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-14 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Enterprise web apps & microservices
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cloud-native & containerization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* .NET Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our .NET Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive .NET solutions for web apps, enterprise systems, cloud platforms, and more
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

      {/* .NET Application Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">.NET Application Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dotNetFeatures.map((feature, index) => (
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
            <p className="text-xl text-gray-600">Streamlined workflow for quality .NET application delivery</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">.NET Development Pricing</h2>
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

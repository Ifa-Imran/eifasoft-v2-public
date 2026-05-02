import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'PHP/Laravel Development Services India | Web Apps, APIs, SaaS | EifaSoft',
    description: 'Expert PHP & Laravel development company in India. Custom web applications, SaaS platforms, REST APIs using Laravel, Symfony, Vue.js. Starting ₹1,00,000.',
    canonical: '/php-laravel-development-services',
    keywords: [
      // Core PHP & Laravel Keywords
      'PHP development services',
      'Laravel development company India',
      'hire PHP developers',
      'custom PHP development',
      'Laravel web development',
      'PHP application development',
      
      // Frameworks & Technologies
      'Laravel framework',
      'Symfony development',
      'CodeIgniter',
      'PHP 8.x',
      'Vue.js integration',
      'React with Laravel',
      'Inertia.js',
      'Livewire',
      
      // Web Development
      'Laravel web apps',
      'PHP web applications',
      'SaaS platform development',
      'E-commerce PHP',
      'REST API development',
      'GraphQL PHP',
      
      // Database
      'MySQL development',
      'PostgreSQL PHP',
      'MongoDB Laravel',
      'Redis caching',
      'Eloquent ORM',
      'Database design',
      
      // Cloud & DevOps
      'PHP cloud hosting',
      'AWS Laravel deployment',
      'DigitalOcean PHP',
      'Docker containers',
      'CI/CD pipeline',
      'Git version control',
      
      // Architecture
      'MVC architecture',
      'Microservices PHP',
      'API-first development',
      'Serverless PHP',
      'Event-driven architecture',
      
      // Testing & Quality
      'PHPUnit testing',
      'Laravel Dusk',
      'TDD PHP',
      'Code review services',
      'Performance optimization',
      
      // Migration & Support
      'PHP migration',
      'Laravel upgrade',
      'Legacy PHP modernization',
      'PHP version upgrade',
      'Application maintenance',
      
      // Industry Solutions
      'PHP FinTech solutions',
      'Laravel e-commerce',
      'PHP healthcare apps',
      'Laravel SaaS platforms',
      'PHP CRM systems',
      
      // Cost & Hiring
      'PHP development cost',
      'Laravel developer rate India',
      'dedicated PHP developer',
      'affordable Laravel development',
      
      // Location-Based
      'PHP developer Noida',
      'Laravel company Delhi',
      'PHP services Bangalore',
      'PHP developer Mumbai',
      'PHP Hyderabad',
      'PHP Pune',
    ],
  });
}

const faqs = [
  {
    question: 'What is PHP used for in web development?',
    answer: "PHP is the world's most popular server-side scripting language, powering 77% of all websites:\n\n**Web Applications:**\n- Laravel: Modern framework with elegant syntax\n- Symfony: Enterprise-grade framework\n- CodeIgniter: Lightweight framework\n\n**E-Commerce:**\n- WooCommerce (WordPress)\n- Magento/Adobe Commerce\n- PrestaShop\n- Custom shopping carts\n\n**Content Management:**\n- WordPress (40% of all websites)\n- Drupal\n- Joomla\n\n**SaaS Platforms:**\n- Multi-tenant applications\n- Subscription billing\n- CRM systems\n- Project management tools\n\n**APIs & Backends:**\n- RESTful APIs\n- GraphQL APIs\n- Mobile app backends\n\n**Why Choose PHP?**\n✓ Easy deployment (shared hosting available)\n✓ Massive community & resources\n✓ Rapid development cycles\n✓ Cost-effective solutions\n✓ Backward compatibility",
  },
  {
    question: 'Why choose Laravel over other PHP frameworks?',
    answer: 'Laravel is the most popular modern PHP framework for good reasons:\\n\\n**Laravel Advantages:**\\n✓ Elegant, expressive syntax\\n✓ MVC architecture support\\n✓ Eloquent ORM (database abstraction)\\n✓ Blade templating engine\\n✓ Built-in authentication\\n✓ Artisan CLI (code generation)\\n✓ Queue management\\n✓ Task scheduling\\n✓ Database migrations\\n✓ Testing support (PHPUnit)\\n✓ Rich ecosystem (packages, tools)\\n\\n**Comparison:**\\n\\n**Laravel** (Most Popular)\\n✓ Best for: Modern web apps, SaaS, startups\\n✓ Learning curve: Moderate\\n✓ Timeline: 6-12 weeks\\n✓ Cost: ₹1,50,000-₹5,00,000\\n\\n**Symfony** (Enterprise Choice)\\n✓ Best for: Large enterprise apps\\n✓ More flexible, steeper learning\\n✓ Timeline: 8-16 weeks\\n✓ Cost: ₹2,00,000-₹8,00,000\\n\\n**CodeIgniter** (Lightweight)\\n✓ Best for: Small projects, simple apps\\n✓ Minimal configuration\\n✓ Timeline: 4-8 weeks\\n✓ Cost: ₹80,000-₹2,50,000\\n\\n**Our Recommendation:**\\n- Startups/SaaS → Laravel\\n- Enterprise → Symfony\\n- Simple sites → CodeIgniter or Laravel',
  },
  {
    question: 'How much does PHP/Laravel development cost in India?',
    answer: 'PHP/Laravel development costs vary by complexity:\\n\\n**Basic PHP Website** (₹1,00,000-₹1,80,000, 5-7 weeks)\\n- Laravel/Symfony framework\\n- 5-7 basic features\\n- MySQL database\\n- User authentication\\n- Basic UI/UX\\n- Example: Business website, simple CRM\\n\\n**Professional Laravel App** (₹2,00,000-₹4,50,000, 8-12 weeks)\\n- Full-featured web application\\n- Laravel 11\\n- Vue.js or React frontend\\n- Payment gateway integration\\n- Admin dashboard\\n- REST API\\n- Testing & documentation\\n- Example: E-commerce store, SaaS MVP\\n\\n**Enterprise SaaS Platform** (₹4,00,000-₹12,00,000+, 12-20 weeks)\\n- Multi-tenant SaaS platform\\n- Microservices architecture\\n- Subscription billing system\\n- Cloud deployment (AWS/DigitalOcean)\\n- CI/CD pipeline\\n- Docker containers\\n- Scalability & security\\n- Dedicated team\\n- Example: Full SaaS product, marketplace\\n\\n**By Engagement Model:**\\n- Fixed Price: ₹1,00,000-₹10,00,000 (defined scope)\\n- Hourly: ₹1,000-₹2,500/hour (flexible)\\n- Monthly Retainer: ₹1,00,000-₹2,50,000/month',
  },
  {
    question: 'Can you upgrade our old PHP application to Laravel?',
    answer: 'Yes! We specialize in legacy PHP modernization:\\n\\n**Migration Sources:**\\n✓ Plain/vanilla PHP → Laravel\\n✓ CodeIgniter → Laravel\\n✓ CakePHP → Laravel\\n✓ Zend Framework → Laravel\\n✓ Old Laravel versions → Laravel 11\\n✓ Core PHP → Laravel\\n\\n**Our Migration Process:**\\n\\n**Phase 1: Analysis (1-2 weeks)**\\n- Code audit & documentation review\\n- Database schema analysis\\n- Feature mapping\\n- Performance benchmarking\\n\\n**Phase 2: Planning (1 week)**\\n- Migration strategy\\n- Architecture improvements\\n- Technology stack selection\\n- Risk assessment\\n\\n**Phase 3: Development (4-10 weeks)**\\n- Set up Laravel environment\\n- Rewrite business logic\\n- Database migration\\n- Implement modern patterns\\n- Third-party integrations\\n\\n**Phase 4: Testing (2-3 weeks)**\\n- Unit testing (PHPUnit)\\n- Integration testing\\n- Performance testing\\n- Security testing\\n- User acceptance testing\\n\\n**Phase 5: Deployment (1 week)**\\n- Staging setup\\n- Production deployment\\n- Monitoring configuration\\n\\n**Benefits:**\\n- Modern MVC architecture\\n- Better security\\n- Improved performance\\n- Easier maintenance\\n- Access to Laravel ecosystem\\n\\n**Cost:** ₹1,50,000-₹6,00,000 depending on complexity',
  },
  {
    question: 'What databases work with Laravel?',
    answer: 'Laravel supports all major databases through excellent ORM (Eloquent):\\n\\n**Relational Databases (SQL):**\\n\\n**MySQL** (Most Common)\\n✓ Eloquent ORM, Query Builder\\n✓ ACID compliance\\n✓ Perfect for: Web apps, e-commerce\\n✓ Laravel default\\n\\n**PostgreSQL** (Advanced Features)\\n✓ Eloquent ORM\\n✓ JSON support, full-text search\\n✓ Perfect for: Complex queries, data-intensive apps\\n\\n**MariaDB** (MySQL Alternative)\\n✓ Fully compatible with MySQL\\n✓ Great for: High-performance needs\\n\\n**SQLite** (Development/Testing)\\n✓ Built-in support\\n✓ Perfect for: Prototyping, small apps\\n\\n**NoSQL Databases:**\\n\\n**MongoDB**\\n✓ MongoDB Laravel package\\n✓ Document-based\\n✓ Perfect for: Content management, catalogs\\n\\n**Redis**\\n✓ Redis Laravel integration\\n✓ In-memory caching\\n✓ Perfect for: Caching, sessions, queues\\n\\n**Our Recommendations:**\\n- Standard web app: MySQL + Laravel\\n- Complex queries: PostgreSQL\\n- High traffic: MySQL + Redis cache\\n- Content-heavy: MongoDB',
  },
  {
    question: 'Do you provide Vue.js/React integration with Laravel?',
    answer: 'Yes! We specialize in modern frontend integration with Laravel:\\n\\n**Vue.js + Laravel** (Recommended)\\n✓ Official Laravel Stack: Inertia.js + Vue\\n✓ Single-page application (SPA) feel\\n✓ Server-side rendering support\\n✓ Hot module replacement\\n✓ Cost: ₹1,80,000-₹5,00,000\\n✓ Best for: Interactive dashboards, real-time apps\\n\\n**React + Laravel**\\n✓ Popular alternative\\n✓ Component-based architecture\\n✓ Large ecosystem\\n✓ Inertia.js support available\\n✓ Cost: ₹2,00,000-₹5,50,000\\n✓ Best for: Complex UIs, mobile-first apps\\n\\n**Laravel Livewire** (Full-Stack Laravel)\\n✓ Write dynamic interfaces without JavaScript\\n✓ Server-side rendering\\n✓ Real-time updates\\n✓ Cost: ₹1,50,000-₹4,00,000\\n✓ Best for: Rapid development, admin panels\\n\\n**What We Build:**\\n- SPA applications\\n- Progressive web apps (PWA)\\n- Real-time dashboards\\n- Interactive forms\\n- Dynamic data visualization\\n\\n**Integration Tools:**\\n- Inertia.js (bridges Laravel + Vue/React)\\n- Laravel Mix (asset compilation)\\n- Vite (modern build tool)\\n- Axios (HTTP client)',
  },
  {
    question: 'What industries do you build PHP/Laravel solutions for?',
    answer: 'We have domain expertise across 20+ industries:\\n\\n**E-Commerce & Retail** (Starting ₹2,00,000)\\n- Online stores (WooCommerce, Magento)\\n- Multi-vendor marketplaces\\n- Inventory management\\n- Payment gateway integration\\n- Order tracking\\n\\n**SaaS & Startups** (Starting ₹2,50,000)\\n- Multi-tenant platforms\\n- Subscription billing\\n- Customer portals\\n- Analytics dashboards\\n- API-first products\\n\\n**FinTech** (Starting ₹4,00,000)\\n- Payment processing\\n- Lending platforms\\n- Invoice management\\n- Financial reporting\\n- PCI-DSS compliance\\n\\n**Healthcare** (Starting ₹3,50,000)\\n- Patient management systems\\n- Telemedicine platforms\\n- Appointment scheduling\\n- Electronic health records\\n- HIPAA compliance\\n\\n**Education** (Starting ₹2,00,000)\\n- Learning management systems (LMS)\\n- Student information systems\\n- Online courses\\n- Quiz/exam platforms\\n\\n**Real Estate** (Starting ₹2,50,000)\\n- Property listing portals\\n- CRM systems\\n- Lead management\\n- Virtual tours\\n\\n**Hospitality & Travel** (Starting ₹2,50,000)\\n- Hotel booking systems\\n- Restaurant reservation\\n- Travel booking platforms\\n\\nAnd many more: Legal Tech, HR Tech, Logistics, Manufacturing, Non-profit',
  },
];

export default function PhpLaravelDevelopmentServices() {
  const services = [
    {
      icon: '🐘',
      title: 'Custom PHP Development',
      description: 'Tailored PHP solutions built from ground up for your business needs',
      features: ['Web Applications', 'Custom Frameworks', 'API Development', 'Scripting'],
    },
    {
      icon: '🎯',
      title: 'Laravel Web Development',
      description: 'Modern, elegant web applications using Laravel framework',
      features: ['Laravel 10/11', 'Blade Templates', 'Eloquent ORM', 'Artisan CLI'],
    },
    {
      icon: '⚡',
      title: 'Symfony Development',
      description: 'Enterprise-grade applications with Symfony framework',
      features: ['Symfony Components', 'Doctrine ORM', 'Twig Templates', 'Console Tools'],
    },
    {
      icon: '🛒',
      title: 'PHP E-Commerce Solutions',
      description: 'Full-featured online stores and shopping platforms',
      features: ['WooCommerce', 'Magento', 'Custom Cart', 'Payment Integration'],
    },
    {
      icon: '☁️',
      title: 'SaaS Platform Development',
      description: 'Multi-tenant SaaS applications with subscription billing',
      features: ['Multi-tenancy', 'Subscription Management', 'User Roles', 'Analytics'],
    },
    {
      icon: '🔌',
      title: 'PHP API Development',
      description: 'RESTful and GraphQL APIs for web and mobile apps',
      features: ['REST APIs', 'GraphQL', 'API Documentation', 'OAuth Security'],
    },
  ];;

  const technologies = [
    { name: 'PHP 8.x', icon: '🐘', category: 'Language' },
    { name: 'Laravel 11', icon: '❤️', category: 'Framework' },
    { name: 'Symfony', icon: '🎯', category: 'Framework' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'NoSQL' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS/DigitalOcean', icon: '☁️', category: 'Cloud' },
    { name: 'Git', icon: '📦', category: 'Version Control' },
    { name: 'Composer', icon: '🎼', category: 'Package Manager' },
    { name: 'NPM/Yarn', icon: '📦', category: 'Frontend Packages' },
  ];;

  const phpFeatures = [
    {
      title: 'Rapid Development',
      items: ['Laravel Artisan', 'Code Generation', 'MVC Pattern', 'Rich Ecosystem'],
    },
    {
      title: 'Modern Stack',
      items: ['PHP 8.x', 'Laravel 11', 'Vue.js/React', 'Composer'],
    },
    {
      title: 'Database Tools',
      items: ['Eloquent ORM', 'Query Builder', 'Migrations', 'Seeders'],
    },
    {
      title: 'Testing & Quality',
      items: ['PHPUnit', 'Laravel Dusk', 'TDD Support', 'CI/CD Ready'],
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic PHP Website',
      price: '₹1,00,000',
      duration: '5-7 weeks',
      features: [
        'Simple Web Application',
        'PHP/Laravel Framework',
        'Basic Features (5-7)',
        'MySQL Database',
        'User Authentication',
        '1 Month Support',
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Professional Laravel Solution',
      price: '₹2,00,000',
      duration: '8-12 weeks',
      features: [
        'Full-Featured Web App',
        'Laravel 11',
        'Advanced Features (10-15)',
        'Vue.js/React Frontend',
        'Payment Gateway Integration',
        'Admin Dashboard',
        'Testing & Documentation',
        '3 Months Support',
      ],
      color: 'from-blue-500 to-indigo-500',
      popular: true,
    },
    {
      name: 'Enterprise SaaS Platform',
      price: '₹4,00,000+',
      duration: '12-20 weeks',
      features: [
        'Multi-Tenant SaaS Platform',
        'Microservices Architecture',
        'Subscription Billing',
        'Cloud Deployment (AWS/DigitalOcean)',
        'CI/CD Pipeline',
        'Docker Containers',
        'Performance Optimization',
        'Scalability & Security',
        '6 Months Support',
      ],
      color: 'from-purple-500 to-pink-500',
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
    'PHP/Laravel Development Services',
    'Professional PHP & Laravel development company in India offering custom web applications, SaaS platforms, e-commerce solutions, REST APIs using Laravel, Symfony, Vue.js.'
  );

  const productSchema = generateProductSchema(
    'PHP/Laravel Development Package',
    'Complete PHP/Laravel development solution with Laravel 11, Symfony, Vue.js, MySQL, SaaS platforms, and e-commerce integration.',
    '100000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft PHP/Laravel Development Platform',
    description: 'Professional PHP development platform with Laravel 11, Symfony, Vue.js, React, MySQL/PostgreSQL, and modern DevOps tools.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform, Cloud',
    price: '100000',
    rating: 4.8,
    reviewCount: 142,
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
    { name: 'PHP/Laravel Development Services', url: '/php-laravel-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="PHP/Laravel Development Services"
        subtitle="Web Apps, SaaS Platforms & APIs"
        description="Expert PHP & Laravel development company in India. Build modern web applications with Laravel 11, Vue.js, SaaS platforms. Starting ₹1,00,000."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="orange"
      />

      {/* What is PHP/Laravel Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-red-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is PHP/Laravel Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>PHP/Laravel Development</strong> involves building web applications using PHP, the world&apos;s most popular server-side scripting language, and Laravel, a modern PHP framework known for elegant syntax and powerful features. Laravel simplifies web development with MVC architecture, Eloquent ORM, Blade templating, and built-in authentication. It&apos;s ideal for SaaS platforms, e-commerce sites, REST APIs, and enterprise web applications with rapid development cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  PHP/Laravel development starting at ₹1,00,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Laravel 11, Symfony, Vue.js/React
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  SaaS platforms & e-commerce expertise
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  5-12 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Rapid development with MVC pattern
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  MySQL, PostgreSQL, MongoDB support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHP/Laravel Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our PHP/Laravel Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PHP/Laravel solutions for web apps, e-commerce, CMS, and SaaS platforms
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
            {phpFeatures.map((feature, index) => (
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
            <p className="text-xl text-gray-600">Streamlined workflow for quality PHP/Laravel application delivery</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PHP/Laravel Development Pricing</h2>
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

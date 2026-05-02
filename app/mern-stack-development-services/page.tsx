import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MERN Stack Development Services India | React, Node.js, MongoDB | EifaSoft',
    description: 'Expert MERN stack development company in India. Full-stack web apps using MongoDB, Express.js, React, Node.js. Custom solutions starting ₹1,50,000.',
    canonical: '/mern-stack-development-services',
    keywords: [
      // Core MERN Stack Keywords
      'MERN stack development',
      'MERN stack development company India',
      'hire MERN stack developers',
      'full-stack JavaScript development',
      'MERN web application',
      'MERN app development',
      
      // MongoDB
      'MongoDB development',
      'NoSQL database',
      'MongoDB Atlas',
      'Mongoose ODM',
      'database design',
      'data modeling',
      
      // Express.js
      'Express.js development',
      'Node.js backend',
      'REST API Node.js',
      'GraphQL Node.js',
      'middleware development',
      'server-side JavaScript',
      
      // React
      'React.js development',
      'React frontend',
      'SPA development',
      'React hooks',
      'Redux state management',
      'React Router',
      'JSX',
      'component-based architecture',
      
      // Node.js
      'Node.js development',
      'JavaScript runtime',
      'npm packages',
      'async programming',
      'event-driven architecture',
      
      // Frontend Technologies
      'HTML5/CSS3',
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap',
      'responsive design',
      'progressive web apps',
      
      // Cloud & DevOps
      'AWS deployment',
      'Heroku hosting',
      'Vercel deployment',
      'MongoDB Atlas cloud',
      'Docker containers',
      'CI/CD pipeline',
      'Git version control',
      
      // Architecture
      'single-page application',
      'microservices MERN',
      'API-first development',
      'agile development',
      'scalable architecture',
      
      // Testing & Quality
      'Jest testing',
      'React Testing Library',
      'Mocha Chai',
      'TDD MERN',
      'end-to-end testing',
      'performance optimization',
      
      // Industry Solutions
      'MERN FinTech apps',
      'React e-commerce',
      'MERN SaaS platforms',
      'social media apps',
      'real-time applications',
      
      // Cost & Hiring
      'MERN stack development cost',
      'MERN developer rate India',
      'dedicated MERN developer',
      'affordable MERN development',
      
      // Location-Based
      'MERN developer Noida',
      'MERN company Delhi',
      'MERN services Bangalore',
      'MERN developer Mumbai',
      'MERN Hyderabad',
      'MERN Pune',
    ],
  });
}

const faqs = [
  {
    question: 'What is MERN stack used for in web development?',
    answer: "MERN stack builds full-stack web applications using JavaScript across all layers:\n\n**Web Applications:**\n- Single-page applications (SPAs)\n- Progressive web apps (PWAs)\n- Real-time dashboards\n- Social media platforms\n\n**E-Commerce:**\n- Online stores with React frontends\n- Shopping cart functionality\n- Payment integration\n- Order management systems\n\n**SaaS Platforms:**\n- Multi-tenant applications\n- Subscription-based services\n- Customer portals\n- Analytics dashboards\n\n**Real-Time Apps:**\n- Chat applications (Socket.io)\n- Collaboration tools\n- Live streaming platforms\n- Gaming applications\n\n**APIs & Backends:**\n- RESTful APIs\n- GraphQL APIs\n- Mobile app backends\n- Microservices architecture\n\n**Why Choose MERN?**\n✓ Single language (JavaScript/TypeScript)\n✓ Code reusability across stack\n✓ Rapid development\n✓ Scalable architecture\n✓ Large developer community\n✓ Rich ecosystem of packages",
  },
  {
    question: 'Why choose MERN stack over other technology stacks?',
    answer: "MERN stack offers unique advantages for modern web development:\n\n**MERN Advantages:**\n✓ Full-stack JavaScript (one language)\n✓ React: Component-based UI\n✓ Node.js: Fast, event-driven backend\n✓ MongoDB: Flexible NoSQL database\n✓ Express: Lightweight, minimal framework\n✓ Excellent for SPAs and real-time apps\n✓ Strong community support\n✓ Cost-effective development\n\n**Comparison:**\n\n**MERN Stack** (Most Versatile)\n✓ Best for: SPAs, real-time apps, startups\n✓ Learning curve: Moderate\n✓ Timeline: 6-14 weeks\n✓ Cost: ₹1,50,000-₹6,00,000\n\n**MEAN Stack** (Angular Alternative)\n✓ Replaces React with Angular\n✓ Better for: Enterprise apps\n✓ Timeline: 8-16 weeks\n✓ Cost: ₹2,00,000-₹7,00,000\n\n**LAMP/LEMP** (Traditional)\n✓ PHP + MySQL stack\n✓ Better for: Content sites, WordPress\n✓ Timeline: 5-12 weeks\n✓ Cost: ₹1,00,000-₹5,00,000\n\n**.NET/Java** (Enterprise)\n✓ Better for: Large enterprises\n✓ Timeline: 10-20 weeks\n✓ Cost: ₹2,50,000-₹8,00,000\n\n**Our Recommendation:**\n- Startups/SaaS → MERN\n- Real-time apps → MERN\n- Enterprise → .NET or MEAN",
  },
  {
    question: 'How much does MERN stack development cost in India?',
    answer: "MERN stack development costs vary by complexity:\n\n**Basic MERN App** (₹1,50,000-₹2,50,000, 6-8 weeks)\n- Simple SPA application\n- React frontend\n- Node.js/Express backend\n- MongoDB database\n- 5-7 basic features\n- User authentication\n- Basic UI/UX\n- Example: Portfolio site, simple CRM\n\n**Professional MERN Solution** (₹3,00,000-₹5,50,000, 9-14 weeks)\n- Full-featured SPA\n- React + Redux state management\n- REST/GraphQL API\n- Advanced MongoDB schemas\n- Third-party integrations\n- Responsive design\n- Testing & documentation\n- Example: E-commerce store, SaaS MVP\n\n**Enterprise MERN Platform** (₹6,00,000-₹15,00,000+, 14-22 weeks)\n- Complex full-stack platform\n- Microservices architecture\n- Real-time features (Socket.io)\n- Cloud deployment (AWS/Vercel)\n- CI/CD pipeline\n- Performance optimization\n- Scalability & security\n- Dedicated team\n- Example: Marketplace, social platform\n\n**By Engagement Model:**\n- Fixed Price: ₹1,50,000-₹15,00,000 (defined scope)\n- Hourly: ₹1,200-₹3,000/hour (flexible)\n- Monthly Retainer: ₹1,20,000-₹3,00,000/month",
  },
  {
    question: 'Can you migrate our existing app to MERN stack?',
    answer: "Yes! We specialize in legacy application modernization to MERN:\n\n**Migration Sources:**\n✓ Plain/vanilla JavaScript → MERN\n✓ jQuery/Bootstrap → React\n✓ Angular/AngularJS → React\n✓ PHP/MySQL → MERN\n✓ Python/Django → MERN\n✓ Ruby on Rails → MERN\n\n**Our Migration Process:**\n\n**Phase 1: Analysis (1-2 weeks)**\n- Current architecture review\n- Feature mapping\n- Database schema analysis\n- Performance benchmarking\n\n**Phase 2: Planning (1 week)**\n- Migration strategy\n- Technology stack selection\n- Architecture improvements\n- Risk assessment\n\n**Phase 3: Development (4-12 weeks)**\n- Set up MERN environment\n- Build React components\n- Create Node.js/Express APIs\n- MongoDB migration\n- Implement modern patterns\n\n**Phase 4: Testing (2-3 weeks)**\n- Unit testing (Jest)\n- Integration testing\n- Performance testing\n- Cross-browser testing\n- User acceptance testing\n\n**Phase 5: Deployment (1 week)**\n- Cloud setup (AWS/Vercel)\n- Production deployment\n- Monitoring configuration\n\n**Benefits:**\n- Modern component architecture\n- Better performance\n- Improved scalability\n- Enhanced user experience\n- Easier maintenance\n\n**Cost:** ₹2,00,000-₹8,00,000 depending on complexity",
  },
  {
    question: 'What databases work with MERN stack?',
    answer: "MERN primarily uses MongoDB, but supports multiple databases:\n\n**Primary Database:**\n\n**MongoDB** (Default Choice)\n✓ NoSQL document database\n✓ JSON-like BSON format\n✓ Flexible schema design\n✓ Horizontal scaling (sharding)\n✓ Perfect for: Content, catalogs, real-time\n✓ Mongoose ODM for easy interaction\n\n**Alternative Databases:**\n\n**PostgreSQL** (Relational Option)\n✓ SQL database with Node.js\n✓ pg package for integration\n✓ ACID compliance\n✓ Perfect for: Complex queries, transactions\n\n**MySQL** (Traditional RDBMS)\n✓ Sequelize ORM support\n✓ Widely used, reliable\n✓ Perfect for: Legacy migrations\n\n**Redis** (Caching Layer)\n✓ In-memory data store\n✓ Session management\n✓ Caching frequently accessed data\n✓ Perfect for: Performance optimization\n\n**GraphQL Databases:**\n\n**Neo4j** (Graph Database)\n✓ For relationship-heavy data\n✓ GraphQL integration\n✓ Perfect for: Social networks\n\n**Our Recommendations:**\n- Standard web app: MongoDB + MERN\n- Complex queries: PostgreSQL\n- High traffic: MongoDB + Redis cache\n- Relationships: Neo4j + GraphQL",
  },
  {
    question: 'Do you provide TypeScript integration with MERN?',
    answer: "Yes! TypeScript is highly recommended for MERN projects:\n\n**TypeScript + MERN Benefits:**\n✓ Type safety across entire stack\n✓ Better IDE autocomplete\n✓ Fewer runtime errors\n✓ Easier refactoring\n✓ Self-documenting code\n✓ Improved maintainability\n✓ Better team collaboration\n\n**What We Build:**\n- TypeScript React components\n- Typed Node.js/Express APIs\n- MongoDB schemas with types\n- Shared type definitions\n- GraphQL with TypeScript\n\n**TypeScript Coverage:**\n\n**Frontend (React)**\n✓ Component props typing\n✓ State management (Redux Toolkit)\n✓ Custom hooks\n✓ Event handlers\n✓ Cost: ₹2,00,000-₹6,00,000\n\n**Backend (Node.js/Express)**\n✓ Request/response types\n✓ Middleware typing\n✓ Database models\n✓ API validation\n✓ Cost: ₹1,80,000-₹5,50,000\n\n**Full-Stack TypeScript**\n✓ End-to-end type safety\n✓ Shared interfaces\n✓ Monorepo setup (Turborepo/Nx)\n✓ Cost: ₹3,00,000-₹8,00,000\n\n**Best For:**\n- Enterprise applications\n- Large codebases\n- Long-term projects\n- Team collaborations",
  },
  {
    question: 'What industries do you build MERN stack solutions for?',
    answer: "We have domain expertise across 20+ industries:\n\n**E-Commerce & Retail** (Starting ₹2,50,000)\n- Online stores with React\n- Multi-vendor marketplaces\n- Shopping cart functionality\n- Payment integration\n- Inventory management\n\n**SaaS & Startups** (Starting ₹3,00,000)\n- Multi-tenant platforms\n- Subscription billing\n- Customer dashboards\n- Analytics platforms\n- API-first products\n\n**FinTech** (Starting ₹5,00,000)\n- Payment processing systems\n- Lending platforms\n- Investment dashboards\n- Financial reporting\n- Security & compliance\n\n**Healthcare** (Starting ₹4,00,000)\n- Patient management systems\n- Telemedicine platforms\n- Appointment booking\n- Health records (EHR)\n- HIPAA compliance\n\n**Education** (Starting ₹2,50,000)\n- Learning management systems (LMS)\n- Online course platforms\n- Student portals\n- Quiz/exam systems\n\n**Real Estate** (Starting ₹3,00,000)\n- Property listing portals\n- CRM systems\n- Lead management\n- Virtual property tours\n\n**Social Media** (Starting ₹4,00,000)\n- Social networking platforms\n- Community forums\n- Content sharing\n- Real-time chat\n\nAnd many more: Logistics, HR Tech, Legal Tech, Travel, Food Delivery, Entertainment",
  },
];

export default function MernStackDevelopmentServices() {
  const services = [
    {
      icon: '⚛️',
      title: 'Custom MERN Stack Development',
      description: 'Full-stack JavaScript solutions from ground up',
      features: ['MongoDB Database', 'Express Backend', 'React Frontend', 'Node.js Server'],
    },
    {
      icon: '🌐',
      title: 'React Frontend Development',
      description: 'Interactive, responsive user interfaces',
      features: ['SPA Applications', 'React Hooks', 'Redux State', 'Responsive Design'],
    },
    {
      icon: '🔌',
      title: 'Node.js & Express API Development',
      description: 'Robust RESTful and GraphQL APIs',
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Middleware'],
    },
    {
      icon: '🍃',
      title: 'MongoDB Database Solutions',
      description: 'NoSQL database design and optimization',
      features: ['Schema Design', 'Data Modeling', 'Performance Tuning', 'MongoDB Atlas'],
    },
    {
      icon: '☁️',
      title: 'MERN Cloud Deployment',
      description: 'Cloud hosting and DevOps services',
      features: ['AWS/Vercel/Heroku', 'CI/CD Pipeline', 'Docker Containers', 'Monitoring'],
    },
    {
      icon: '📱',
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like experiences with offline support',
      features: ['Offline First', 'Push Notifications', 'App Shell', 'Service Workers'],
    },
  ];;

  const technologies = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express.js', icon: '⚡', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Redux', icon: '🔴', category: 'State Management' },
    { name: 'TypeScript', icon: '💙', category: 'Language' },
    { name: 'Next.js', icon: '▲', category: 'Framework' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
    { name: 'Material-UI', icon: '📘', category: 'UI Library' },
    { name: 'GraphQL', icon: '◈', category: 'API' },
    { name: 'Socket.io', icon: '🔌', category: 'Real-time' },
    { name: 'Jest', icon: '🃏', category: 'Testing' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS/Vercel', icon: '☁️', category: 'Cloud' },
  ];;

  const mernFeatures = [
    {
      title: 'Full-Stack JavaScript',
      items: ['Single Language (JS/TS)', 'Code Reusability', 'Faster Development', 'Unified Stack'],
    },
    {
      title: 'Modern Technologies',
      items: ['React Hooks', 'Node.js Async', 'MongoDB NoSQL', 'Express Middleware'],
    },
    {
      title: 'Scalable Architecture',
      items: ['Microservices Ready', 'REST/GraphQL APIs', 'Real-time Socket.io', 'Cloud Native'],
    },
    {
      title: 'Developer Experience',
      items: ['Hot Reload', 'DevTools', 'Testing (Jest)', 'TypeScript Support'],
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic MERN App',
      price: '₹1,50,000',
      duration: '6-8 weeks',
      features: [
        'Simple Web Application',
        'React Frontend',
        'Node.js/Express Backend',
        'MongoDB Database',
        'Basic Features (5-7)',
        'User Authentication',
        '1 Month Support',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Professional MERN Solution',
      price: '₹3,00,000',
      duration: '9-14 weeks',
      features: [
        'Full-Featured SPA',
        'React + Redux',
        'REST/GraphQL API',
        'Advanced MongoDB',
        'Third-party Integrations',
        'Responsive Design',
        'Testing & Documentation',
        '3 Months Support',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise MERN Platform',
      price: '₹6,00,000+',
      duration: '14-22 weeks',
      features: [
        'Complex Full-Stack Platform',
        'Microservices Architecture',
        'Real-time Features (Socket.io)',
        'Cloud Deployment (AWS/Vercel)',
        'CI/CD Pipeline',
        'Performance Optimization',
        'Scalability & Security',
        '6 Months Support',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const process = [
    { step: 1, title: 'Discovery & Architecture', desc: 'Understand requirements and design MERN stack architecture' },
    { step: 2, title: 'MERN Development', desc: 'Build with React, Node.js, Express, MongoDB using best practices' },
    { step: 3, title: 'Quality Assurance', desc: 'Testing with Jest, React Testing Library, integration & performance tests' },
    { step: 4, title: 'Cloud Deployment', desc: 'Deploy to Vercel, AWS, or Heroku with CI/CD pipelines' },
    { step: 5, title: 'Support & Evolution', desc: 'Continuous improvement, updates, and feature enhancements' },
  ];

  const serviceSchema = generateServiceSchema(
    'MERN Stack Development Services',
    'Professional MERN stack development company in India offering full-stack web applications using MongoDB, Express.js, React, Node.js, real-time features, and cloud deployment.'
  );

  const productSchema = generateProductSchema(
    'MERN Stack Development Package',
    'Complete MERN stack development solution with React, Node.js, Express, MongoDB, Redux, TypeScript, and modern DevOps tools.',
    '150000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft MERN Stack Development Platform',
    description: 'Professional MERN stack development platform with React.js, Node.js, Express.js, MongoDB, Redux, TypeScript, and cloud-native deployment.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform, Cloud',
    price: '150000',
    rating: 4.9,
    reviewCount: 156,
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
    { name: 'MERN Stack Development Services', url: '/mern-stack-development-services' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      <Hero
        title="MERN Stack Development Services"
        subtitle="Full-Stack JavaScript Solutions"
        description="Expert MERN stack development company in India. Build scalable web apps with MongoDB, Express, React, Node.js. Starting ₹1,50,000."
        ctaPrimary={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Pricing', href: '/contact' }}
        gradient="blue"
      />

      {/* What is MERN Stack Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is MERN Stack Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>MERN Stack Development</strong> builds full-stack web applications using four JavaScript technologies: MongoDB (NoSQL database), Express.js (Node.js backend framework), React (frontend library), and Node.js (JavaScript runtime). This unified stack enables rapid development, code reusability, and scalable architecture. It&#39;s ideal for SPAs, real-time applications, SaaS platforms, and modern web apps requiring seamless frontend-backend integration.
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
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  MERN stack development starting at ₹1,50,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  React, Node.js, Express, MongoDB, Redux
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Full-stack JavaScript expertise
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-14 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Real-time Socket.io integration ready
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Cloud-native deployment (Vercel/AWS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MERN Stack Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our MERN Stack Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MERN stack solutions for web apps, SPAs, real-time applications, and cloud platforms
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MERN Stack Technologies We Use</h2>
            <p className="text-xl text-gray-600">
              Industry-leading JavaScript frameworks, databases, and tools
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MERN Stack Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mernFeatures.map((feature, index) => (
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
            <p className="text-xl text-gray-600">Streamlined workflow for quality MERN stack application delivery</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MERN Stack Development Pricing</h2>
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

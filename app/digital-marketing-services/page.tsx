import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Digital Marketing Services | SEO, SMM, PPC & Content Marketing | EifaSoft',
    description: 'Complete digital marketing solutions to grow your online presence. SEO, Social Media Marketing, PPC, Content Marketing, Email Marketing. Packages starting at ₹15,000/month.',
    canonical: '/digital-marketing-services',
    keywords: ['digital marketing services', 'SEO services India', 'social media marketing', 'PPC advertising', 'content marketing', 'email marketing', 'digital marketing agency', 'search engine optimization india', 'Google Ads management', 'Facebook Ads agency', 'online marketing company india', 'local SEO services', 'e-commerce SEO', 'digital marketing moradabad', 'brand building online', 'influencer marketing', 'YouTube marketing', 'website traffic growth', 'lead generation services', 'conversion rate optimization', 'online reputation management', 'digital marketing consultant india'],
  });
}

const faqs = [
  {
    question: 'What digital marketing services do you provide?',
    answer: 'We offer comprehensive digital marketing including SEO (Search Engine Optimization), SMM (Social Media Marketing), PPC (Pay-Per-Click advertising), Content Marketing, Email Marketing, Influencer Marketing, Online Reputation Management, and Analytics & Reporting.',
  },
  {
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 3-4 months, with significant results in 6-12 months. Local SEO can show faster results (2-3 months), while competitive industries may take longer.',
  },
  {
    question: 'What is the cost of digital marketing services?',
    answer: 'Our packages start at ₹15,000/month for basic SEO and social media. Complete digital marketing packages range from ₹30,000-₹1,00,000/month depending on services, competition, and business goals. We offer customized plans to fit your budget.',
  },
  {
    question: 'Do you guarantee first page ranking on Google?',
    answer: 'No ethical SEO company can guarantee specific rankings as search algorithms constantly change. However, we use proven white-hat techniques and provide transparent monthly reports showing keyword rankings, traffic growth, and conversions.',
  },
  {
    question: 'Which social media platforms should my business be on?',
    answer: 'It depends on your target audience and business type. B2B companies benefit from LinkedIn and Twitter. B2C businesses thrive on Facebook, Instagram, and YouTube. We analyze your audience and recommend the best platforms for your goals.',
  },
  {
    question: 'What makes your digital marketing different from others?',
    answer: 'We focus on data-driven strategies, transparent reporting, and ROI. Our team combines technical SEO expertise with creative content marketing. We provide dedicated account managers, monthly strategy reviews, and guaranteed response times.',
  },
];

export default function DigitalMarketingServicesPage() {
  const serviceSchema = generateServiceSchema(
    'Digital Marketing Services',
    'Complete digital marketing solutions including SEO, social media marketing, PPC advertising, content marketing, and email marketing to grow your online business.'
  );

  const productSchema = generateProductSchema(
    'Digital Marketing Package',
    'Comprehensive digital marketing package with SEO optimization, social media management, and content creation',
    '₹15,000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Digital Marketing Services', url: '/digital-marketing-services' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Discovery & Audit', text: 'Analyze your current digital presence, competitors, and identify opportunities for growth', position: 1 },
    { name: 'Strategy Development', text: 'Create a customized digital marketing strategy aligned with your business goals and budget', position: 2 },
    { name: 'Implementation', text: 'Execute campaigns across chosen channels with optimized content, ads, and landing pages', position: 3 },
    { name: 'Monitor & Analyze', text: 'Track performance metrics, user behavior, and campaign effectiveness in real-time', position: 4 },
    { name: 'Optimize & Scale', text: 'Continuously test, refine, and scale successful campaigns for maximum ROI', position: 5 },
    { name: 'Report & Review', text: 'Monthly performance reports and strategy reviews to ensure alignment with goals', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Priya Sharma', rating: 5, reviewBody: 'EifaSoft transformed our online presence. Our organic traffic increased by 300% in 6 months. Their SEO and content marketing strategies are top-notch!' },
    { author: 'Rajesh Verma', rating: 5, reviewBody: 'Excellent ROI on our PPC campaigns. The team is responsive, data-driven, and always available for strategy discussions. Highly recommended for B2B companies.' },
    { author: 'Anita Gupta', rating: 5, reviewBody: 'Their social media marketing helped us build a community of 50K+ followers. The content quality and engagement strategies are exceptional.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />
      
      <Hero
        title="Digital Marketing That Drives Real Results"
        subtitle="Grow Your Online Presence"
        description="Data-driven strategies to increase traffic, generate leads, and boost sales. SEO, Social Media, PPC, and more."
        ctaPrimary={{ text: 'Get Free Audit', href: '/contact' }}
        ctaSecondary={{ text: 'View Packages', href: '#pricing' }}
        gradient="orange"
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle all aspects of your digital marketing to help you achieve your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'SEO (Search Engine Optimization)',
                description: 'Rank higher on Google with technical SEO, on-page optimization, link building, and local SEO strategies.',
                features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Local SEO'],
              },
              {
                icon: '📱',
                title: 'Social Media Marketing',
                description: 'Build engaged communities on Facebook, Instagram, LinkedIn, Twitter, and YouTube with creative content.',
                features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Influencer Marketing'],
              },
              {
                icon: '💰',
                title: 'PPC Advertising',
                description: 'Generate instant leads with Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads campaigns.',
                features: ['Google Ads', 'Facebook Ads', 'Display Ads', 'Remarketing'],
              },
              {
                icon: '✍️',
                title: 'Content Marketing',
                description: 'Attract and engage your audience with high-quality blog posts, infographics, videos, and ebooks.',
                features: ['Blog Writing', 'Video Content', 'Infographics', 'Case Studies'],
              },
              {
                icon: '📧',
                title: 'Email Marketing',
                description: 'Nurture leads and drive conversions with automated email campaigns and newsletters.',
                features: ['Email Campaigns', 'Automation', 'Lead Nurturing', 'A/B Testing'],
              },
              {
                icon: '📊',
                title: 'Analytics & Reporting',
                description: 'Make data-driven decisions with comprehensive analytics dashboards and monthly reports.',
                features: ['Google Analytics', 'Custom Dashboards', 'ROI Tracking', 'Monthly Reports'],
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
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EifaSoft for Digital Marketing?
            </h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Results-driven strategies backed by experience, data, and proven success across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Data-Driven', description: 'Every decision backed by analytics and performance data' },
              { icon: '📈', title: 'Proven Results', description: '200%+ average ROI for our clients' },
              { icon: '🏆', title: 'Expert Team', description: 'Google & Facebook certified digital marketers' },
              { icon: '💡', title: 'Creative Content', description: 'Engaging content that resonates with your audience' },
              { icon: '📱', title: 'Multi-Channel', description: 'Integrated campaigns across all platforms' },
              { icon: '🔄', title: 'Continuous Optimization', description: 'Regular testing and improvement' },
              { icon: '📊', title: 'Transparent Reporting', description: 'Clear monthly reports and real-time dashboards' },
              { icon: '☎️', title: 'Dedicated Support', description: 'Personal account manager and quick response' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-orange-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver measurable results and continuous growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Audit', description: 'Analyze your current digital presence, competitors, and identify opportunities for growth.' },
              { step: '02', title: 'Strategy Development', description: 'Create a customized digital marketing strategy aligned with your business goals and budget.' },
              { step: '03', title: 'Implementation', description: 'Execute campaigns across chosen channels with optimized content, ads, and landing pages.' },
              { step: '04', title: 'Monitor & Analyze', description: 'Track performance metrics, user behavior, and campaign effectiveness in real-time.' },
              { step: '05', title: 'Optimize & Scale', description: 'Continuously test, refine, and scale successful campaigns for maximum ROI.' },
              { step: '06', title: 'Report & Review', description: 'Monthly performance reports and strategy reviews to ensure alignment with goals.' },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Digital Marketing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a package that fits your business size and goals. All packages include monthly reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹15,000/mo',
                description: 'Perfect for small businesses',
                features: [
                  'Basic SEO (10 keywords)',
                  'Social media (2 platforms)',
                  '8 posts per month',
                  'Monthly reporting',
                  'Email support',
                ],
                highlighted: false,
              },
              {
                name: 'Growth',
                price: '₹40,000/mo',
                description: 'Ideal for growing businesses',
                features: [
                  'Advanced SEO (30 keywords)',
                  'Social media (4 platforms)',
                  '20 posts per month',
                  'Google Ads management',
                  'Content creation',
                  'Bi-weekly reporting',
                  'Phone & email support',
                  'Quarterly strategy review',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large businesses',
                features: [
                  'Unlimited keywords',
                  'All social platforms',
                  'Unlimited content',
                  'Multi-channel PPC',
                  'Video marketing',
                  'Influencer campaigns',
                  'Weekly reporting',
                  'Dedicated account manager',
                  'Monthly strategy calls',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-orange-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? 'text-orange-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.highlighted ? 'text-orange-200' : 'text-green-500'}`}
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
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
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
                Ready to Grow Your Online Presence?
              </h2>
              <p className="text-lg text-gray-600">
                Get a free digital marketing audit and custom strategy for your business.
              </p>
            </div>
            <ContactForm serviceName="Digital Marketing" />
          </div>
        </div>
      </section>
    </main>
  );
}

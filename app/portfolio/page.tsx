import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Portfolio | Our Work | EifaSoft Technologies Projects',
    description: 'Explore our portfolio of successful projects including web development, mobile apps, MLM software, blockchain solutions, and e-commerce platforms delivered to clients worldwide.',
    canonical: '/portfolio',
    keywords: ['eifasoft portfolio', 'web development projects', 'mobile app portfolio', 'MLM software examples', 'our work'],
  });
}

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
  ]);

  const projects = [
    {
      title: 'Enterprise MLM Platform',
      category: 'MLM Software',
      description: 'Complete binary MLM system with e-wallet, genealogy tree, and mobile apps for 50,000+ active members.',
      technologies: ['Laravel', 'React', 'MySQL', 'React Native'],
      features: ['Binary Plan', 'E-Wallet', 'Mobile Apps', 'Payment Gateway'],
      image: '🏢',
    },
    {
      title: 'E-Commerce Marketplace',
      category: 'E-Commerce',
      description: 'Multi-vendor marketplace with 10,000+ products, advanced search, and real-time inventory management.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Multi-vendor', 'Real-time Chat', 'Payment Integration', 'Admin Dashboard'],
      image: '🛒',
    },
    {
      title: 'Blockchain DApp Platform',
      category: 'Blockchain',
      description: 'Decentralized application for NFT marketplace with smart contracts on Ethereum blockchain.',
      technologies: ['Solidity', 'React', 'Web3.js', 'IPFS'],
      features: ['Smart Contracts', 'NFT Minting', 'Wallet Integration', 'Ethereum'],
      image: '⛓️',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile App',
      description: 'Telemedicine app connecting patients with doctors, including video consultations and e-prescriptions.',
      technologies: ['Flutter', 'Firebase', 'Agora', 'Razorpay'],
      features: ['Video Calls', 'Appointment Booking', 'E-Prescriptions', 'Payment'],
      image: '🏥',
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing portal with advanced filters, virtual tours, and lead management system.',
      technologies: ['PHP', 'MySQL', 'jQuery', 'Google Maps API'],
      features: ['Property Listings', 'Virtual Tours', 'Lead Management', 'SEO Optimized'],
      image: '🏘️',
    },
    {
      title: 'EdTech Learning Platform',
      category: 'Web App',
      description: 'Online learning management system with course creation, quizzes, certificates, and live classes.',
      technologies: ['Next.js', 'PostgreSQL', 'Zoom SDK', 'AWS'],
      features: ['Course Management', 'Live Classes', 'Quiz System', 'Certificates'],
      image: '📚',
    },
  ];

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore some of the innovative solutions we&apos;ve delivered to clients across industries
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 text-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <div className="text-sm uppercase tracking-wide text-blue-100">{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Contact us to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

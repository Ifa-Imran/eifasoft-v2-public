import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { COMPANY_INFO } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Who We Are | About EifaSoft Technologies | Leading IT Company',
    description: 'Learn about EifaSoft Technologies - a leading software development company in India since 2014. Expertise in web development, mobile apps, MLM software, blockchain, and digital marketing.',
    canonical: '/who-we-are',
    keywords: ['about eifasoft', 'software company moradabad', 'IT company India', 'web development company', 'mobile app development', 'MLM software company'],
  });
}

export default function WhoWeArePage() {
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Who We Are', url: '/who-we-are' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[organizationSchema, breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Digital Solutions Since {COMPANY_INFO.establishedYear}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              We are a team of passionate technologists, designers, and strategists committed to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>EifaSoft Technologies</strong> is a leading software development company based in Moradabad, India. Since {COMPANY_INFO.establishedYear}, we&apos;ve been helping businesses of all sizes achieve their digital transformation goals through cutting-edge technology solutions.
                </p>
                <p>
                  We specialize in custom software development, mobile applications, MLM software, blockchain solutions, e-commerce platforms, and digital marketing services. Our team of {COMPANY_INFO.employees} dedicated professionals brings together expertise in technology, design, and business strategy.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your business challenges and delivering solutions that not only meet but exceed your expectations. We don&apos;t just write code – we build relationships and create technology that drives real business results.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 font-bold text-2xl mr-4">📅</div>
                  <div>
                    <div className="font-semibold text-gray-900">Established</div>
                    <div className="text-gray-600">{COMPANY_INFO.establishedYear}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 font-bold text-2xl mr-4">👥</div>
                  <div>
                    <div className="font-semibold text-gray-900">Team Size</div>
                    <div className="text-gray-600">{COMPANY_INFO.employees} Professionals</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 font-bold text-2xl mr-4">🏆</div>
                  <div>
                    <div className="font-semibold text-gray-900">Projects Delivered</div>
                    <div className="text-gray-600">500+ Successful Projects</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 font-bold text-2xl mr-4">🌍</div>
                  <div>
                    <div className="font-semibold text-gray-900">Global Reach</div>
                    <div className="text-gray-600">India, USA, UAE, Australia</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 font-bold text-2xl mr-4">📍</div>
                  <div>
                    <div className="font-semibold text-gray-900">Headquarters</div>
                    <div className="text-gray-600">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses worldwide with innovative, scalable, and cost-effective technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the trusted technology partner that transforms ideas into successful digital products.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a globally recognized leader in software innovation, known for delivering exceptional quality, fostering long-term client relationships, and creating technology solutions that make a positive impact on businesses and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌟',
                title: 'Excellence',
                description: 'We pursue excellence in every project, delivering quality that exceeds expectations.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We embrace change and continuously explore new technologies and methodologies.',
              },
              {
                icon: '👥',
                title: 'Collaboration',
                description: 'We believe in teamwork, open communication, and partnership with our clients.',
              },
              {
                icon: '🎯',
                title: 'Customer Focus',
                description: 'We put our clients first, understanding their needs and delivering value.',
              },
              {
                icon: '📈',
                title: 'Continuous Growth',
                description: 'We invest in learning, improvement, and staying ahead of technology trends.',
              },
              {
                icon: '⚡',
                title: 'Agility',
                description: 'We adapt quickly to changes and deliver solutions with speed and flexibility.',
              },
              {
                icon: '🌍',
                title: 'Social Responsibility',
                description: 'We contribute positively to our community and environment.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive technology services across multiple domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌐', title: 'Web Development', desc: 'Custom websites and web applications' },
              { icon: '📱', title: 'Mobile Apps', desc: 'iOS, Android, and cross-platform solutions' },
              { icon: '💼', title: 'Enterprise Software', desc: 'Scalable business management systems' },
              { icon: '📊', title: 'MLM Software', desc: 'Multi-level marketing platforms' },
              { icon: '⛓️', title: 'Blockchain', desc: 'Smart contracts and DApp development' },
              { icon: '🛒', title: 'E-Commerce', desc: 'Online stores and marketplace solutions' },
              { icon: '📈', title: 'Digital Marketing', desc: 'SEO, SMM, and PPC campaigns' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design solutions' },
              { icon: '☁️', title: 'Cloud Solutions', desc: 'AWS, Azure, and Google Cloud services' },
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EifaSoft?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what makes us the preferred technology partner for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: '500+ successful projects delivered across 15+ industries with 95% client satisfaction rate.',
              },
              {
                title: 'Expert Team',
                description: 'Skilled developers, designers, and strategists with extensive industry experience.',
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'We use the latest frameworks, tools, and best practices to build future-proof solutions.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates, clear timelines, and open dialogue throughout the project lifecycle.',
              },
              {
                title: 'Cost-Effective Solutions',
                description: 'Competitive pricing without compromising on quality or service.',
              },
              {
                title: 'Post-Launch Support',
                description: 'Comprehensive maintenance, updates, and technical support to ensure your success.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with the right technology solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

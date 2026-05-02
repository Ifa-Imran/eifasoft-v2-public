import Link from 'next/link';
import { Metadata } from 'next/types';
import citiesData from '@/data/cities.json';
import servicesData from '@/data/services.json';
import { Hero } from '@/components/Hero';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema, generateMetadata as genMeta, generateOrganizationSchema } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Cities We Serve | Software Development Services Across India | EifaSoft',
    description: 'EifaSoft provides expert software development services across 20+ Indian cities including Surat, Patna, Chandigarh, Moradabad, Lucknow, Delhi NCR, and more. Website development, mobile apps, blockchain, MLM software.',
    canonical: '/cities',
    keywords: [
      'software company India',
      'IT services India',
      'web development India',
      'mobile app development India',
      'cities we serve',
      'software development services India',
      'MLM software India cities',
      'website development India',
      'mobile app company India',
      'blockchain company India',
      'software company Moradabad',
      'IT company Uttar Pradesh',
      'best software company India',
      'top IT services India',
      'EifaSoft service cities'
    ],
  });
}

export default function CitiesPage() {
  // Group cities by state
  const citiesByState = citiesData.cities.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = [];
    }
    acc[city.state].push(city);
    return acc;
  }, {} as Record<string, typeof citiesData.cities>);

  // Get all services for city-service pages
  const topServices = servicesData.services;

  return (
    <>
      <SchemaMarkup
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Cities We Serve', url: '/cities' },
          ]),
          generateOrganizationSchema(),
        ]}
      />

      <Hero
        subtitle="Pan India Presence"
        title="Cities We Serve Across India"
        description={`Delivering world-class software development services to ${citiesData.cities.length}+ cities across India. From startups to enterprises, we're your trusted technology partner.`}
        ctaPrimary={{ text: 'Contact Us', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        gradient="blue"
      />

      {/* Cities Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have successfully delivered projects across {citiesData.cities.length} major cities in India. 
              Click on any city to view our services available in that location.
            </p>
          </div>

          {/* Cities by State */}
          {Object.entries(citiesByState).map(([state, cities]) => (
            <div key={state} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-200 pb-2">
                {state} ({cities.length} {cities.length === 1 ? 'city' : 'cities'})
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cities.map((city) => (
                  <div 
                    key={city.slug} 
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">📍</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{city.name}</h4>
                        <p className="text-sm text-gray-600">{city.state}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{city.description}</p>
                    
                    <div className="text-xs text-gray-500 mb-4">
                      Population: {parseInt(city.population).toLocaleString('en-IN')}
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Our Services:</p>
                      <div className="space-y-1">
                        {topServices.map((service) => (
                          <Link
                            key={service.id}
                            href={`/${city.slug}-${service.slug}`}
                            className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            → {service.shortName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We serve clients across India! Contact us to discuss your project, 
            regardless of your location. Remote collaboration is our strength.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us by Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Businesses Choose Us Nationwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pan India Presence</h3>
              <p className="text-gray-600">
                Successfully delivered {citiesData.cities.length}00+ projects across {citiesData.cities.length}+ cities 
                with local understanding and global standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Support</h3>
              <p className="text-gray-600">
                On-site visits, local language support, and understanding of 
                regional business dynamics
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
              <p className="text-gray-600">
                Dedicated account managers in your timezone with 24-hour response 
                guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

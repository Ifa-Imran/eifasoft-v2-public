import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import {
  generateMetadata as genMeta,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateProductSchema,
  generateSoftwareApplicationSchema,
  generateSpeakableSchema,
} from '@/lib/seo';
import { getCityProfile, getServiceProfile } from '@/lib/cityData';
import citiesData from '@/data/cities.json';
import servicesData from '@/data/services.json';
import { City, Service, FAQ } from '@/types';

interface PageProps {
  params: Promise<{ 'city-service': string }>;
}

function parseSlug(slug: string) {
  const city = citiesData.cities.find((c) => slug.startsWith(c.slug + '-'));
  if (!city) return null;
  const serviceSlug = slug.substring(city.slug.length + 1);
  const service = servicesData.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { citySlug: city.slug, serviceSlug: service.slug };
}

export async function generateStaticParams() {
  const params: Array<{ 'city-service': string }> = [];
  citiesData.cities.forEach((city) => {
    servicesData.services.forEach((service) => {
      if (service.category !== 'marketing') {
        params.push({ 'city-service': `${city.slug}-${service.slug}` });
      }
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const parsed = parseSlug(resolvedParams['city-service']);
  if (!parsed) return { title: 'Page Not Found' };

  const city = citiesData.cities.find((c) => c.slug === parsed.citySlug);
  const service = servicesData.services.find((s) => s.slug === parsed.serviceSlug);
  if (!city || !service) return { title: 'Page Not Found' };

  const cityProfile = getCityProfile(city.slug);
  const title = `${city.name}'s #1 ${service.name} Company | EifaSoft Technologies`;
  const description = `Top-rated ${service.shortName.toLowerCase()} company in ${city.name}, ${city.state}. ${service.description}. Starting at ${service.startingPrice}. 12+ years experience. 500+ projects delivered across ${city.state}. Free consultation!`;

  return genMeta({
    title,
    description,
    keywords: [
      `${service.shortName.toLowerCase()} ${city.name}`,
      `${service.shortName.toLowerCase()} company ${city.name}`,
      `best ${service.shortName.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} in ${city.name}`,
      `${service.shortName.toLowerCase()} agency ${city.name}`,
      `${service.id} ${city.slug}`,
      `it company ${city.name}`,
      `software company ${city.name}`,
      `${city.name} ${city.state} ${service.shortName.toLowerCase()}`,
      city.name,
      city.state,
      ...cityProfile.nearbyCities.map((nc) => `${service.shortName.toLowerCase()} ${nc}`),
    ],
    canonical: `/${resolvedParams['city-service']}`,
  });
}

export default async function CityServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const parsed = parseSlug(resolvedParams['city-service']);
  if (!parsed) notFound();

  const city = citiesData.cities.find((c) => c.slug === parsed!.citySlug) as City;
  const service = servicesData.services.find((s) => s.slug === parsed!.serviceSlug) as Service;
  if (!city || !service) notFound();

  const cityProfile = getCityProfile(city.slug);
  const serviceProfile = getServiceProfile(service.id);

  const faqs: FAQ[] = [
    {
      question: `How much does ${service.shortName.toLowerCase()} cost in ${city.name}?`,
      answer: `${service.shortName} services in ${city.name} start at ${service.startingPrice}. The exact cost depends on project scope, features, and complexity. We offer transparent, milestone-based pricing with no hidden charges. Contact us for a free, detailed quote tailored to your ${city.name} business.`,
    },
    {
      question: `How long does ${service.shortName.toLowerCase()} development take in ${city.name}?`,
      answer: `Typical delivery is ${service.deliveryTime}. We follow Agile methodology with weekly sprints and demos, so you always see progress. Timelines are defined in the SoW before we start. Rush delivery is available for urgent ${city.name} projects.`,
    },
    {
      question: `Do you visit clients on-site in ${city.name}?`,
      answer: `Yes! We provide both on-site and remote services across ${city.name} and ${city.state}. Our team can visit ${cityProfile.areas.slice(0, 4).join(', ')}, and all other areas of ${city.name} for requirement gathering, demos, and training sessions.`,
    },
    {
      question: `What makes EifaSoft different from other ${service.shortName.toLowerCase()} companies in ${city.name}?`,
      answer: `12+ years of experience, 500+ delivered projects, and a dedicated team of 50+ experts. We specialise in ${city.name}'s local industries — ${cityProfile.industries.slice(0, 3).join(', ')} — providing solutions that understand the regional market. Our clients rate us 4.8/5 for quality, communication, and post-launch support.`,
    },
    {
      question: `Do you provide post-launch support in ${city.name}?`,
      answer: `Yes. All projects include free 90-day hypercare after go-live. Beyond that, we offer Annual Maintenance Contracts (AMC) starting from ₹25,000/year with SLA-backed response times, security updates, and feature enhancements for ${city.name} clients.`,
    },
    {
      question: `Can you integrate payment gateways and third-party APIs for ${city.name} businesses?`,
      answer: `Absolutely! We integrate Razorpay, PayU, Paytm, PhonePe, UPI, and international gateways (Stripe, PayPal). We also connect GST billing software, WhatsApp Business API, SMS gateways, Google Maps, and any custom API your ${city.name} business requires.`,
    },
    {
      question: `Which industries in ${city.name} do you primarily serve?`,
      answer: `We serve all major industries in ${city.name} including ${cityProfile.industries.join(', ')}. Our solutions are customised to match local business workflows, regional compliance requirements, and ${city.state} market dynamics.`,
    },
    {
      question: `Do you also serve nearby cities around ${city.name}?`,
      answer: `Yes! Beyond ${city.name}, we actively serve ${cityProfile.nearbyCities.slice(0, 5).join(', ')} and all surrounding districts in ${city.state}. Remote collaboration is seamless — clients across India work with us via video calls, Slack, and our project management portal.`,
    },
  ];

  const softwareSchema = service.category === 'software' || service.category === 'mobile' || service.category === 'blockchain'
    ? generateSoftwareApplicationSchema({
        name: `EifaSoft ${service.shortName} - ${city.name}`,
        description: `${service.description} — professional ${service.shortName.toLowerCase()} services in ${city.name}, ${city.state}`,
        applicationCategory: service.category === 'mobile' ? 'MobileApplication' : 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        price: service.startingPrice.replace(/[^0-9]/g, '') || '25000',
        rating: 4.9,
        reviewCount: 100,
      })
    : null;

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    '.city-unique-content',
    'article h1',
    'article h2',
  ]);

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: city.state, url: `/cities` },
      { name: city.name, url: `/${city.slug}-${service.slug}` },
      { name: service.shortName, url: `/${resolvedParams['city-service']}` },
    ]),
    {
      ...generateLocalBusinessSchema(city.name),
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.latitude,
        longitude: city.coordinates.longitude,
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude,
        },
        geoRadius: '100',
      },
    },
    generateServiceSchema(service.name, service.description, city.name),
    generateProductSchema(
      `${service.shortName} Services in ${city.name}`,
      `${service.description} — serving ${city.name}, ${city.state}`,
      service.startingPrice.replace(/[^0-9]/g, '') || '25000'
    ),
    softwareSchema,
    speakableSchema,
    generateFAQSchema(faqs),
  ].filter((s): s is NonNullable<typeof s> => s !== null && s !== undefined);

  const gradientColor = service.isNew ? 'purple' : service.category === 'blockchain' ? 'purple' : 'blue';

  return (
    <>
      <SchemaMarkup data={schemas} />

      <Hero
        subtitle={`${service.shortName} in ${city.name}, ${city.state}`}
        title={`${city.name}'s #1 ${service.name} Company`}
        description={`${service.description} — delivering world-class results across ${city.name} since 2010. Starting at ${service.startingPrice}. 500+ projects. 98% satisfaction.`}
        ctaPrimary={{ text: 'Get Free Quote', href: '#contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
        gradient={gradientColor}
      />

      {/* What is Definition - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                What is {service.shortName} in {city.name}?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>{service.shortName}</strong> {service.description.toLowerCase()} {city.name && `In ${city.name}, a growing ${cityProfile.techEcosystem.toLowerCase()}, professional ${service.shortName.toLowerCase()} services help local businesses in ${cityProfile.industries.slice(0, 2).join(' and ')} sectors compete in the digital marketplace.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  {service.shortName} services starting at {service.startingPrice}
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  {service.deliveryTime} typical delivery timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  12+ years serving {city.name} businesses
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  500+ projects across {city.state}
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  On-site visits available in {cityProfile.areas[0]}
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  90-day free post-launch support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City-Unique Content - Doorway Page Prevention */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto city-unique-content">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.shortName} Landscape in {city.name}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  {city.name}, with a population of <strong>{parseInt(city.population).toLocaleString()}</strong>, is {city.description} As {cityProfile.techEcosystem.toLowerCase()}, the city presents unique opportunities for businesses seeking {service.shortName.toLowerCase()} services.
                </p>
                <p className="text-gray-700 mb-4">
                  Key industries in {city.name} include <strong>{cityProfile.industries.join(', ')}</strong>. Our {service.shortName.toLowerCase()} solutions are tailored to address the specific challenges faced by businesses in these sectors, from local market dynamics to regional compliance requirements in {city.state}.
                </p>
                <p className="text-gray-700">
                  We serve clients across all areas of {city.name}, including {cityProfile.areas.slice(0, 4).join(', ')}, and extend our services to nearby cities like {cityProfile.nearbyCities.slice(0, 3).join(', ')}. Whether you&apos;re a startup in the city center or an established enterprise in the suburbs, our team delivers solutions that drive measurable results.
                </p>
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{parseInt(city.population).toLocaleString()}</div>
                  <div className="text-sm text-gray-600">City Population</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{cityProfile.industries.length}</div>
                  <div className="text-sm text-gray-600">Key Industries</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{cityProfile.areas.length}+</div>
                  <div className="text-sm text-gray-600">Areas Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Expert Developers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Benefits ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose EifaSoft for {service.shortName} in {city.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {city.name}&apos;s leading {service.shortName.toLowerCase()} partner — {cityProfile.techEcosystem}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProfile.keyBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Features ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {service.shortName} Services in {city.name}
            </h2>
            <p className="text-xl text-gray-600">Everything included in your project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Process ─────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Proven Process</h2>
            <p className="text-blue-100 text-xl">Transparent, milestone-driven delivery for {city.name} clients</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceProfile.processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {step.icon}
                </div>
                <div className="text-xs text-blue-200 mb-1">Step {step.step}</div>
                <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Technology Stack</h2>
            <p className="text-xl text-gray-600">Best-in-class tools for your {city.name} {service.shortName.toLowerCase()} project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(serviceProfile.techStack).map(([category, techs]) => (
              <div key={category} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">{category}</h3>
                <ul className="space-y-2">
                  {techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Transparent Pricing for {city.name} Businesses
            </h2>
            <p className="text-xl text-gray-600">No hidden fees. Fixed-price contracts with milestone payments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceProfile.pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${tier.popular
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-colors'
                }`}
              >
                {tier.popular && (
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                <div className={`text-3xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-blue-600'}`}>{tier.price}</div>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-blue-100' : 'text-gray-500'}`}>{tier.description}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${tier.popular ? 'text-white' : 'text-gray-600'}`}>
                      <span className={tier.popular ? 'text-yellow-300' : 'text-green-500'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${tier.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Industries We Serve in {city.name}
            </h2>
            <p className="text-xl text-gray-600">
              Deep domain expertise in {city.name}&apos;s key economic sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityProfile.industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-2xl">🏭</span>
                <span className="font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <p className="text-gray-700 text-center">
              <span className="font-semibold">{city.name} Tech Ecosystem: </span>
              {cityProfile.techEcosystem}. Known as the <em>{cityProfile.landmark}</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ── GEO Coverage ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              We Serve All Areas of {city.name} & Nearby Cities
            </h2>
            <p className="text-xl text-gray-600">
              Local presence — on-site visits, remote support, pan-India delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📍</span> Areas in {city.name}
              </h3>
              <ul className="space-y-1.5">
                {cityProfile.areas.map((area) => (
                  <li key={area} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" /> {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🗺️</span> Nearby Cities We Serve
              </h3>
              <ul className="space-y-1.5">
                {cityProfile.nearbyCities.map((nc) => (
                  <li key={nc} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" /> {nc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🤝</span> Service Delivery Options
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['On-site consultation visits', 'Remote collaboration (Zoom / Teams)', 'Dedicated project manager', '24/7 WhatsApp support', 'Hindi & English communication', 'Local language requirement docs', 'Weekly progress demos', 'Post-launch training in ' + city.name].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* GEO chip tags */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {[city.name, ...cityProfile.nearbyCities].map((loc) => (
              <span key={loc} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {service.shortName} {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why EifaSoft ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              The EifaSoft Advantage
            </h2>
            <p className="text-xl text-gray-600">What separates us from every other {service.shortName.toLowerCase()} company in {city.name}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: '12+ Years in Business', description: 'Established in 2010, we have outlasted hundreds of IT startups and bring battle-tested expertise to every project.' },
              { icon: '🔒', title: 'NDA & IP Protection', description: 'Your code, designs, and data belong entirely to you. We sign NDAs before any discussion begins.' },
              { icon: '📅', title: 'On-Time Delivery', description: '95% of our projects are delivered on schedule. Delays are the exception, not the rule — and always communicated upfront.' },
              { icon: '💬', title: 'Clear Communication', description: 'Dedicated project manager, weekly demos, and transparent project trackers — no ghosting, no surprises.' },
              { icon: '🔄', title: 'Agile & Flexible', description: 'Requirements change — our Agile process embraces that. Pivot your feature set mid-sprint at no extra cost.' },
              { icon: '🌐', title: 'End-to-End Ownership', description: 'From strategy to design, development, QA, deployment, and SEO — one team owns your entire digital product.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} />

      {/* ── Related Services CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need More Than {service.shortName} in {city.name}?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Explore our full range of IT services — from blockchain and AI to MLM software and digital marketing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {servicesData.services.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                href={`/${city.slug}-${s.slug}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                {s.icon} {s.shortName} in {city.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm font-medium transition-colors"
            >
              All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Get Your Free {service.shortName} Quote in {city.name}
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your project — we respond within 2 business hours.
              </p>
            </div>
            <ContactForm serviceName={service.shortName} cityName={city.name} />
          </div>
        </div>
      </section>
    </>
  );
}

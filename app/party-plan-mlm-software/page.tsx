import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Party Plan MLM Software | Best Home Party MLM Software | Direct Sales Software | EifaSoft',
    description: 'Best Party Plan MLM Software for home party businesses with event management, host rewards, party hosting, event calendar, booking system, and direct sales commission. Social selling software with consultant management. Party MLM software starting ₹3,00,000.',
    canonical: '/party-plan-mlm-software',
    keywords: [
      'party plan MLM software',
      'party plan direct sales software',
      'home party MLM software',
      'home party MLM',
      'party plan software',
      'direct selling party software',
      'host rewards system',
      'home party management',
      'event MLM software',
      'social selling software',
      'tupperware MLM software',
      'home party business software',
      'social selling software india',
      'party MLM app',
      'host commission software',
      'hostess reward MLM',
      'party plan MLM india',
      'direct party sales software',
      'consultant MLM software',
      'party plan development company',
      'social gathering MLM',
      'in-home demonstration MLM',
      'party plan compensation plan',
      'party hosting software',
      'event calendar MLM',
      'direct sales commission',
      'host rewards MLM',
      'party plan e-wallet',
      'party plan software price',
      'best party plan MLM software',
      'party plan mobile app'
    ],
  });
}

export default function PartyPlanMLMPage() {
  const serviceSchema = generateServiceSchema(
    'Party Plan MLM Software Development',
    'Comprehensive party plan MLM software with event management, host rewards, booking system, catalog management, and social selling features.',
    '/party-plan-mlm-software'
  );

  const productSchema = generateProductSchema(
    'Party Plan MLM Software',
    'Complete party plan MLM software solution with home party management, host incentives, event booking, product catalog, and commission tracking.',
    '3,00,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Party Plan MLM Software',
    description: 'Specialized Party Plan MLM software with event management, host rewards, booking system, catalog management, and social selling features for network marketing businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    price: '300000',
    rating: 4.8,
    reviewCount: 75,
  });

  const speakableSchema = generateSpeakableSchema(['.definition-box', '.key-takeaways', 'article h1', 'article h2']);

  const faqs = [
    {
      question: 'What is Party Plan MLM?',
      answer: 'Party Plan MLM (also called Home Party Plan or Social Selling) is a direct selling model where independent consultants host product demonstration parties at homes or online. Hosts invite friends/family, the consultant demonstrates products, attendees place orders, and both host and consultant earn rewards. Famous examples include Tupperware, Pampered Chef, Mary Kay, and Avon. It combines social gathering with product sales, making shopping fun and personal.'
    },
    {
      question: 'How does Party Plan compensation work?',
      answer: 'Party Plan compensation includes multiple income streams: 1) Personal Sales Commission (20-40% on products sold at parties), 2) Host Rewards (free products or discounts for party hosts based on party sales), 3) Booking Bonuses (rewards when party attendees book their own parties), 4) Team Override Commissions (earnings from downline consultant sales), 5) Leadership Bonuses (rewards for team building and performance), 6) Rank Achievement Bonuses (car bonuses, trips, cash awards).'
    },
    {
      question: 'What are the key components of Party Plan software?',
      answer: 'Essential components include: Party Booking System (schedule, manage, track parties), Host Management (host profiles, wish lists, rewards calculation), Product Catalog (inventory, pricing, promotions), Order Management (party orders, individual orders, processing), Commission Engine (personal sales, host rewards, team commissions), Event Calendar (consultant and company-wide events), Booking Chain Tracking (track parties booked from other parties), Replicated Party Sites (personalized booking pages for consultants).'
    },
    {
      question: 'How do host rewards work?',
      answer: 'Host rewards incentivize people to host parties. Typical structure: Party sales ₹10,000-₹20,000 = ₹1,000 free product credit, ₹20,000-₹40,000 = ₹2,500 credit + 10% discount, ₹40,000+ = ₹5,000 credit + 15% discount + free item. Additional rewards for: number of attendees (10+ attendees = bonus gift), booking chain (3+ parties booked = extra credit), outside orders (orders from non-attendees count toward party total). Our software automatically calculates host rewards based on party performance.'
    },
    {
      question: 'Can Party Plan work online/virtually?',
      answer: 'Yes! Virtual party plans have grown tremendously. Our software supports: Facebook Live Parties (stream demonstrations, chat interaction), Zoom Party Events (video conferences, screen sharing), Instagram Shopping Parties (stories, posts, direct shopping), WhatsApp Group Parties (product shares, ordering via chat), Hybrid Parties (both in-person and virtual attendees). Features include: online catalogs, virtual party rooms, live chat, digital ordering, social media integration, video conferencing links, online payment processing.'
    },
    {
      question: 'What is a booking chain and why is it important?',
      answer: 'A booking chain occurs when party attendees book their own parties. Example: Consultant hosts Party A with Host 1. At Party A, Guest 2 books Party B, Guest 3 books Party C. Party B and C are in the booking chain from Party A. Benefits: Continuous party pipeline, increased sales opportunities, host rewards multiply, consultant expands customer base. Our software tracks booking chains, rewards original hosts for chain bookings, shows chain genealogy, calculates chain bonuses automatically.'
    },
    {
      question: 'How does the party booking system work?',
      answer: 'The booking system allows: Consultants create party events (date, time, location/virtual, host info), Hosts customize their party page (wish list, guest list, theme), Send invitations (email/SMS to guests with RSVP tracking), Guest management (track RSVPs, attendance, pre-orders), Party dashboard (real-time sales, orders, host rewards), Post-party orders (outside orders for 48-72 hours after party), Automatic commission calculation (personal sales, host rewards, booking bonuses), Party analytics (attendance rate, conversion rate, average order value).'
    },
    {
      question: 'What features does your Party Plan MLM software include?',
      answer: 'Comprehensive features: Party booking and scheduling system, Host management and rewards engine, Digital product catalog with images/videos, Online and offline order processing, Commission calculation (sales, host, team), Booking chain tracking and bonuses, Event calendar and reminders, Replicated consultant websites, Social media integration (Facebook, Instagram), Email/SMS marketing automation, Customer database management, Inventory tracking, Payment gateway integration, Mobile apps for consultants and hosts, Advanced reporting and analytics.'
    },
    {
      question: 'Is Party Plan different from traditional MLM?',
      answer: 'Yes, key differences: Sales Method: Party Plan uses social events/parties for sales vs traditional MLM direct one-on-one sales. Focus: Party Plan emphasizes product demonstration and experience vs MLM focus on recruitment. Income Sources: Party Plan prioritizes personal party sales vs MLM emphasizes team building commissions. Customer Base: Party Plan builds through host networks vs MLM through distributor networks. However, Party Plan still includes MLM elements (team building, override commissions, ranks) making it a hybrid model.'
    },
    {
      question: 'What is the pricing for Party Plan MLM software?',
      answer: 'Party Plan MLM software starts at ₹3,00,000 for basic features (up to 500 consultants, party booking system, host rewards, product catalog, order management, basic commissions). Advanced package at ₹6,00,000 includes unlimited consultants, virtual party features, social media integration, mobile apps, advanced commissions, booking chain tracking. Enterprise solutions with custom features, API integrations, white-label options, dedicated support available on request.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'MLM Software', url: '/mlm-software-development' },
    { name: 'Party Plan MLM Software', url: '/party-plan-mlm-software' }
  ]);

  return (
    <>
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, softwareSchema, speakableSchema]} />
      
      <Hero
        title="Party Plan MLM Software Development"
        subtitle="Powerful home party MLM software with event management, host rewards, booking system, and social selling features"
        description="Build your party-based direct selling business with comprehensive party plan software"
        gradient="orange"
      />

      {/* Definition Box */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="definition-box bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-3">What is Party Plan MLM Software?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Party Plan MLM Software</strong> is a specialized platform for home party-based direct selling businesses where independent consultants host product demonstration events at homes, offices, or online. The software manages party bookings, host rewards, product catalogs, order processing, commission calculations, and booking chain tracking. Famous examples include Tupperware, Pampered Chef, and Mary Kay business models.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="key-takeaways bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">📊</span> Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Party Booking System</p>
                  <p className="text-sm text-gray-600">Event scheduling & management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Host Rewards Engine</p>
                  <p className="text-sm text-gray-600">Automated reward calculation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Virtual Party Support</p>
                  <p className="text-sm text-gray-600">Zoom, Facebook Live, WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Starting ₹3,00,000</p>
                  <p className="text-sm text-gray-600">Complete party plan solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Party Plan MLM Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Party Plan MLM Software is a specialized platform for <strong>home party-based direct selling businesses</strong> where independent consultants host product demonstration events at homes, offices, or online. This model combines social gatherings with product sales, making the shopping experience fun, personal, and pressure-free.
              </p>
              <p>
                Famous companies like <strong>Tupperware, Pampered Chef, Mary Kay, Avon, and Thirty-One</strong> use party plan models. Consultants earn through personal sales commissions, host rewards, booking bonuses, and team override commissions. The party host receives free products or discounts based on party sales, creating a win-win situation.
              </p>
              <p>
                Our Party Plan MLM Software provides comprehensive tools for managing parties, tracking bookings, calculating host rewards, processing orders, managing product catalogs, automating commissions, and supporting both in-person and virtual parties with social media integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Party Plan Works */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How Party Plan Works</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-orange-700 text-center">Complete Party Plan Cycle</h3>
              
              <div className="space-y-6">
                {/* Step 1: Party Booking */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">Party Booking & Setup</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded shadow-sm">
                          <p className="font-semibold text-orange-700 mb-2">Consultant Creates Party</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Schedule date & time</li>
                            <li>• Choose location or virtual</li>
                            <li>• Assign host</li>
                            <li>• Select product theme</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                          <p className="font-semibold text-blue-700 mb-2">Host Prepares</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Creates wish list</li>
                            <li>• Invites friends/family</li>
                            <li>• Tracks RSVPs</li>
                            <li>• Prepares space/virtual link</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Party Event */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">Party Event & Sales</h4>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-blue-700 mb-2">🎉 Social Fun</p>
                            <p className="text-gray-600">Games, refreshments, socializing, product demos</p>
                          </div>
                          <div>
                            <p className="font-semibold text-green-700 mb-2">🛍️ Shopping</p>
                            <p className="text-gray-600">Guests browse catalog, try products, place orders</p>
                          </div>
                          <div>
                            <p className="font-semibold text-purple-700 mb-2">📅 Bookings</p>
                            <p className="text-gray-600">Guests book their own parties, referrals collected</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded text-center border border-green-400">
                          <p className="font-bold text-green-700">Example Party Results: ₹35,000 in sales • 12 attendees • 3 bookings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Rewards & Commissions */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">Rewards & Earnings</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded shadow-sm">
                          <p className="font-semibold text-green-700 mb-2">Host Rewards</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Free Product Credit:</span>
                              <span className="font-bold text-green-600">₹2,500</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Discount (10%):</span>
                              <span className="font-bold text-blue-600">On all orders</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Booking Bonus:</span>
                              <span className="font-bold text-purple-600">3 parties = ₹500 extra</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                          <p className="font-semibold text-blue-700 mb-2">Consultant Earnings</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Sales Commission (30%):</span>
                              <span className="font-bold text-green-600">₹10,500</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Booking Bonus:</span>
                              <span className="font-bold text-blue-600">₹1,500</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span className="font-bold">Total Earnings:</span>
                              <span className="font-bold text-green-700 text-lg">₹12,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Booking Chain */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">Booking Chain & Growth</h4>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <div className="flex items-center justify-center space-x-3 text-sm">
                          <div className="bg-orange-100 px-4 py-2 rounded font-semibold">Party A<br/>(Host 1)</div>
                          <span className="text-2xl">→</span>
                          <div className="bg-blue-100 px-4 py-2 rounded font-semibold">Party B<br/>(Guest 2)</div>
                          <span className="text-2xl">→</span>
                          <div className="bg-green-100 px-4 py-2 rounded font-semibold">Party C<br/>(Guest 3)</div>
                          <span className="text-2xl">→</span>
                          <div className="bg-purple-100 px-4 py-2 rounded font-semibold">Party D<br/>(Guest 5)</div>
                        </div>
                        <div className="mt-4 bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded text-center">
                          <p className="text-sm text-gray-700">Booking chain from Party A generates continuous parties, sales, and income!</p>
                          <p className="font-bold text-purple-700 mt-1">4 parties × ₹12,000 = ₹48,000 potential earnings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Party Plan Software Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Party Booking System',
                description: 'Complete party scheduling, host management, guest RSVPs, event calendar, automated reminders, virtual party support with video integration.',
                icon: '📅'
              },
              {
                title: 'Host Rewards Engine',
                description: 'Automated calculation of host rewards based on party sales, attendees, bookings. Free product credits, discounts, bonus gifts, loyalty points.',
                icon: '🎁'
              },
              {
                title: 'Digital Product Catalog',
                description: 'Beautiful product showcases with images, videos, descriptions, pricing. Category filtering, search, wish lists, new arrivals, promotions.',
                icon: '📚'
              },
              {
                title: 'Order Management',
                description: 'Real-time party orders, post-party orders (48-72 hours), individual customer orders, bulk order processing, order tracking, shipping integration.',
                icon: '🛒'
              },
              {
                title: 'Booking Chain Tracking',
                description: 'Visual booking genealogy showing party chains. Track bookings from parties, calculate chain bonuses, reward original hosts, pipeline management.',
                icon: '🔗'
              },
              {
                title: 'Virtual Party Features',
                description: 'Facebook Live integration, Zoom party hosting, Instagram shopping parties, WhatsApp groups, virtual party rooms, live chat, screen sharing.',
                icon: '💻'
              },
              {
                title: 'Commission Engine',
                description: 'Multi-tier commissions: personal sales (20-40%), host rewards, booking bonuses, team overrides, leadership bonuses, rank achievement rewards.',
                icon: '💰'
              },
              {
                title: 'Replicated Websites',
                description: 'Personalized consultant websites with party booking pages, product catalogs, online ordering, social sharing, custom branding.',
                icon: '🌐'
              },
              {
                title: 'Marketing Automation',
                description: 'Email/SMS campaigns, party invitations, RSVP tracking, thank you messages, booking follow-ups, product launches, promotions.',
                icon: '📧'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual vs In-Person */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Virtual & In-Person Party Support</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🏠 In-Person Parties</h3>
                <ul className="space-y-3">
                  {[
                    'Physical product demonstrations',
                    'Location management (address, directions)',
                    'Attendance tracking (check-in system)',
                    'Paper catalog backup with digital orders',
                    'On-site payment processing',
                    'Inventory management for demos',
                    'Party setup checklists',
                    'Host preparation guides'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">💻 Virtual Parties</h3>
                <ul className="space-y-3">
                  {[
                    'Facebook Live streaming integration',
                    'Zoom/Google Meet party hosting',
                    'Instagram Stories shopping',
                    'WhatsApp group parties',
                    'Virtual party room (chat + catalog)',
                    'Screen sharing for demos',
                    'Digital invitations & RSVPs',
                    'Online payment processing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Party Plan Software Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Party Plan',
                price: '₹3,00,000',
                features: [
                  'Up to 500 consultants',
                  'Party booking system',
                  'Host rewards calculation',
                  'Product catalog (500 products)',
                  'Order management',
                  'Basic commissions',
                  'Member dashboard',
                  'Admin panel',
                  'Email notifications',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Party Plan',
                price: '₹6,00,000',
                features: [
                  'Unlimited consultants',
                  'Virtual party features',
                  'Social media integration',
                  'Unlimited product catalog',
                  'Booking chain tracking',
                  'Advanced commissions',
                  'Mobile apps (iOS/Android)',
                  'Replicated websites',
                  'Marketing automation',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Party Plan',
                price: 'Custom',
                features: [
                  'Everything in Advanced',
                  'Custom integrations',
                  'White-label solution',
                  'Multi-currency support',
                  'Advanced analytics',
                  'API access',
                  'Dedicated server',
                  'Priority support',
                  'Custom features',
                  'Lifetime updates'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Compare different MLM structures to find the best fit for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Unlimited width simple structure' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based generational commissions' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Revolving matrix cycler system' },
              { title: 'Stair Step Plan MLM', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Multiple plans combined' },
              { title: 'Smart Contract MLM', href: '/smart-contract-mlm-software', desc: 'Blockchain-powered MLM' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-orange-100">
                <h3 className="text-orange-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-lg text-center hover:from-orange-700 hover:to-amber-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-software-price" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Pricing</h3>
              <p className="text-sm opacity-90">Transparent pricing for all plans</p>
            </Link>
            <Link href="/mlm-software-comparison" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <ContactForm />
    </>
  );
}

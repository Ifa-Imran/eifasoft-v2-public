import { Metadata } from 'next';
import { generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';
import { COMPANY_INFO } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Contact Us | EifaSoft Technologies | Get in Touch',
    description: 'Contact EifaSoft Technologies for web development, mobile apps, MLM software, and digital marketing services. Call +91 8077626981 or email info@eifasoft.com',
    canonical: '/contact',
    keywords: ['contact eifasoft', 'software company contact', 'get quote', 'moradabad IT company', 'web development inquiry'],
  });
}

export default function ContactPage() {
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[businessSchema, breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-blue-100">
              Have a project in mind? Get in touch with our team and let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;d love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                      📍
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}<br />
                      {COMPANY_INFO.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                      📞
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:text-blue-700">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                      ✉️
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:text-blue-700">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                      🕒
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {COMPANY_INFO.socialMedia.facebook && (
                    <a
                      href={COMPANY_INFO.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                  )}
                  {COMPANY_INFO.socialMedia.twitter && (
                    <a
                      href={COMPANY_INFO.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                  )}
                  {COMPANY_INFO.socialMedia.linkedin && (
                    <a
                      href={COMPANY_INFO.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                  )}
                  {COMPANY_INFO.socialMedia.instagram && (
                    <a
                      href={COMPANY_INFO.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      aria-label="Instagram"
                    >
                      📷
                    </a>
                  )}
                  {COMPANY_INFO.socialMedia.whatsapp && (
                    <a
                      href={COMPANY_INFO.socialMedia.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                      aria-label="WhatsApp"
                    >
                      💬
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re located in the heart of Moradabad, easily accessible from all parts of the city.
            </p>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.6567744583579!2d78.82793969292447!3d28.839897913171917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbb98692f12b%3A0x7b66d62c3de26156!2sEifaSoft%20Technologies%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1761042133662!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EifaSoft Technologies Office Location"
            />
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with a team that&apos;s committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Quick Response',
                description: 'We respond to all inquiries within 24 hours',
              },
              {
                icon: '💡',
                title: 'Free Consultation',
                description: 'Get expert advice on your project requirements',
              },
              {
                icon: '📊',
                title: 'Detailed Proposal',
                description: 'Receive comprehensive project estimates',
              },
              {
                icon: '🤝',
                title: 'No Obligation',
                description: 'Discuss your project with no commitment',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How quickly can you start my project?',
                  a: 'We can typically begin work within 1-2 weeks after project approval and initial payment. For urgent projects, we offer expedited start times.',
                },
                {
                  q: 'Do you provide ongoing support after project completion?',
                  a: 'Yes, we offer comprehensive support and maintenance packages. All projects include a warranty period, and we provide ongoing support options to keep your solution running smoothly.',
                },
                {
                  q: 'Can you work with our existing development team?',
                  a: 'Absolutely! We regularly collaborate with in-house teams as an extension of your development capacity. We adapt to your workflow and communication preferences.',
                },
                {
                  q: 'What is your payment structure?',
                  a: 'We typically work with milestone-based payments: 40% upfront, 30% at mid-project, and 30% upon completion. For larger projects, we can customize the payment schedule.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Feedback | Share Your Experience | EifaSoft Technologies',
    description: 'Share your feedback about EifaSoft Technologies services. We value your opinion and continuously improve based on client feedback.',
    canonical: '/feedback',
    keywords: ['eifasoft feedback', 'client feedback', 'customer review', 'share experience'],
  });
}

export default function FeedbackPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Feedback', url: '/feedback' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Feedback Matters</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Help us serve you better by sharing your experience
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
              <p className="text-gray-600">
                We value your feedback and use it to continuously improve our services.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

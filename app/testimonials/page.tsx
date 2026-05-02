import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateOrganizationWithReviewsSchema, generateReviewSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Client Testimonials | Reviews | EifaSoft Technologies',
    description: 'Read what our clients say about EifaSoft Technologies. Real reviews from businesses we\'ve helped with web development, mobile apps, and digital marketing services.',
    canonical: '/testimonials',
    keywords: ['eifasoft reviews', 'client testimonials', 'customer feedback', 'software company reviews', 'client satisfaction'],
  });
}

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ]);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Network Marketing Pro',
      role: 'CEO',
      rating: 5,
      text: 'EifaSoft delivered an exceptional MLM platform that exceeded our expectations. The binary plan implementation is flawless, and the mobile apps are incredibly user-friendly. Our business has grown 300% since launch!',
      service: 'MLM Software',
      location: 'Delhi, India',
    },
    {
      name: 'Priya Sharma',
      company: 'StyleHub Fashion',
      role: 'Founder',
      rating: 5,
      text: 'Our e-commerce store built by EifaSoft has been a game-changer. The UI is beautiful, and the backend is robust. Sales increased by 250% in the first 3 months. Highly recommend their services!',
      service: 'E-Commerce Development',
      location: 'Mumbai, India',
    },
    {
      name: 'Michael Chen',
      company: 'HealthCare Plus',
      role: 'CTO',
      rating: 5,
      text: 'The telemedicine app developed by EifaSoft is outstanding. Video consultation quality is excellent, and the e-prescription system works seamlessly. Their team was professional throughout the project.',
      service: 'Mobile App Development',
      location: 'Singapore',
    },
    {
      name: 'Sarah Johnson',
      company: 'CryptoVault',
      role: 'Product Manager',
      rating: 5,
      text: 'EifaSoft blockchain expertise is top-notch. They built our DApp platform with smart contracts that are secure and efficient. The team understood our requirements perfectly.',
      service: 'Blockchain Development',
      location: 'Dubai, UAE',
    },
    {
      name: 'Amit Patel',
      company: 'TechStartup India',
      role: 'Founder',
      rating: 5,
      text: 'Working with EifaSoft was a pleasure. They delivered our SaaS platform on time and within budget. The code quality is excellent, and they provided comprehensive documentation.',
      service: 'Web Development',
      location: 'Ahmedabad, India',
    },
    {
      name: 'Lisa Wang',
      company: 'Global Enterprises',
      role: 'Marketing Director',
      rating: 5,
      text: 'Their digital marketing services transformed our online presence. SEO rankings improved dramatically, and lead generation increased by 400%. Best ROI we have ever had!',
      service: 'Digital Marketing',
      location: 'Hong Kong',
    },
    {
      name: 'Vikram Singh',
      company: 'Matrix Direct Selling',
      role: 'Director',
      rating: 5,
      text: 'We compared 5 MLM software providers before choosing EifaSoft. Best decision ever! The matrix plan works flawlessly, and their support team is available 24/7. Our distributors love the mobile app.',
      service: 'MLM Software',
      location: 'Lucknow, India',
    },
    {
      name: 'Meena Agarwal',
      company: 'Wellness Network India',
      role: 'Managing Director',
      rating: 5,
      text: 'EifaSoft built our entire MLM ecosystem - website, apps, and CRM. The GST integration saved us countless hours. Commission calculations are always accurate. Truly professional team!',
      service: 'MLM Software',
      location: 'Jaipur, India',
    },
    {
      name: 'Robert Miller',
      company: 'CryptoTrade Pro',
      role: 'CEO',
      rating: 5,
      text: 'The cryptocurrency exchange platform EifaSoft developed for us handles millions in daily transactions. Security is top-notch, and the admin panel is incredibly powerful. Worth every penny!',
      service: 'Blockchain Development',
      location: 'London, UK',
    },
    {
      name: 'Sunita Verma',
      company: 'FashionKart',
      role: 'Co-Founder',
      rating: 5,
      text: 'Our Flutter app by EifaSoft looks amazing on both iOS and Android. The checkout process is smooth, and customers love the fast performance. App store rating is 4.8 stars!',
      service: 'Flutter App Development',
      location: 'Bangalore, India',
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Gulf Direct Network',
      role: 'Chairman',
      rating: 5,
      text: 'EifaSoft developed our multi-country MLM platform with Arabic language support. The team handled complex currency conversions and international payment gateways perfectly. Exceptional service!',
      service: 'MLM Software',
      location: 'Riyadh, Saudi Arabia',
    },
    {
      name: 'Deepak Malhotra',
      company: 'FinServe Solutions',
      role: 'Founder',
      rating: 5,
      text: 'The AI-powered analytics dashboard EifaSoft integrated into our platform is incredible. We can now predict growth trends and optimize our strategies. Game-changing technology!',
      service: 'AI Services',
      location: 'Pune, India',
    },
  ];

  // Generate review schemas for structured data
  const reviewSchemas = generateReviewSchema(
    testimonials.map((t) => ({
      author: t.name,
      rating: t.rating,
      reviewBody: t.text,
    }))
  );

  const organizationWithReviews = generateOrganizationWithReviewsSchema(4.9, 150);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema, organizationWithReviews, ...reviewSchemas]} />
      
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear what our clients have to say
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">4.9 out of 5</h2>
            <p className="text-gray-600">Based on 200+ client reviews worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-1">📍 {testimonial.location}</div>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s create success stories together
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

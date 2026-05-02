import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Careers | Join Our Team | EifaSoft Technologies Jobs',
    description: 'Join EifaSoft Technologies team. We\'re hiring talented developers, designers, and digital marketers. Explore career opportunities in Moradabad, India.',
    canonical: '/careers',
    keywords: ['eifasoft careers', 'software developer jobs', 'IT jobs moradabad', 'web developer jobs', 'join eifasoft'],
  });
}

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  const openings = [
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      experience: '1-3 years',
      skills: ['React Native', 'Flutter', 'iOS/Android'],
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      experience: '2-3 years',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      experience: '1-2 years',
      skills: ['SEO', 'Google Ads', 'Social Media'],
    },
  ];

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Build your career with innovative projects and amazing people
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join EifaSoft?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🚀', title: 'Growth Opportunities', desc: 'Learn and grow with challenging projects' },
              { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation packages' },
              { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible hours and remote options' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.type} • {job.experience}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Apply Now
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, j) => (
                    <span key={j} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Submit Your Resume</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

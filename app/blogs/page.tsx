import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Blog - Latest Tech Insights & Tutorials | EifaSoft',
    description:
      'Stay updated with latest articles on blockchain, Flutter, mobile apps, web development, MLM software, and digital marketing from EifaSoft Technologies experts.',
    keywords: [
      'tech blog',
      'blockchain tutorials',
      'Flutter guide',
      'web development',
      'software development blog',
      'MLM software blog',
      'mobile app development guide',
      'blockchain development blog',
      'IT insights India',
      'software company blog',
      'EifaSoft blog',
      'network marketing blog',
      'digital marketing blog India',
      'web design tutorials',
      'programming tips India'
    ],
    canonical: '/blogs',
  });
}

export default function BlogsPage() {
  const posts = getSortedPostsData();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
  ]);

  // Group posts by category
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <SchemaMarkup data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Insights & Tutorials</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert articles on blockchain, mobile development, web technologies, and digital transformation
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blogs"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blogs?category=${category.toLowerCase()}`}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 border border-gray-300 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-6">No blog posts available yet.</p>
              <p className="text-gray-500">Check back soon for expert insights and tutorials!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.featuredImage && (
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime} min read</span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.author}</span>
                      <time className="text-gray-400" dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Development Services?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From blockchain to mobile apps, we&apos;ve got you covered
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

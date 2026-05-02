import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostData, getAllPostSlugs, getRelatedPosts } from '@/lib/blog';
import {
  generateMetadata as genMeta,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableSchema,
} from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ContactForm } from '@/components/ContactForm';
import { SITE_CONFIG, COMPANY_INFO } from '@/config/site';
import { SchemaOrgData } from '@/types';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // revalidate cached pages once per day

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  // Pre-build only the 30 most recent posts at build time;
  // remaining posts are rendered on first request and cached via ISR
  return slugs.slice(0, 30);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return genMeta({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, ...post.tags],
    canonical: `/blog/${post.slug}`,
    ogImage: post.featuredImage,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  // Build base schemas
  const schemas: SchemaOrgData[] = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    generateArticleSchema({
      title: post.title,
      description: post.excerpt,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      author: post.author,
      image: post.featuredImage,
      slug: post.slug,
    }),
  ];

  // Enhanced schemas for pillar blogs (4,000+ words with FAQs)
  const isPillar = post.pillar || (post.content && post.content.length > 8000);
  
  if (isPillar) {
    // Add ProfessionalService schema for service category pillars
    if (post.service_category) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `${post.service_category} - EifaSoft`,
        description: post.excerpt,
        image: post.featuredImage ? `${SITE_CONFIG.url}${post.featuredImage}` : undefined,
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        priceRange: '₹₹-₹₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.address.street,
          addressLocality: COMPANY_INFO.address.city,
          addressRegion: COMPANY_INFO.address.state,
          postalCode: COMPANY_INFO.address.postalCode,
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.9,
          reviewCount: 150,
          bestRating: 5,
          worstRating: 1,
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: post.service_category,
          itemListElement: [],
        },
      });
    }

    // Extract FAQs from content if present (look for FAQ section)
    const faqSection = post.content.match(/## FAQ Section[\s\S]*?(?=\n## |$)/i);
    if (faqSection) {
      // Parse FAQ items from markdown (simplified - in production use proper parser)
      const faqMatches = faqSection[0].matchAll(/### \d+\. ([^?]+\?)\s*\n([\s\S]*?)(?=### |$)/g);
      const faqs = Array.from(faqMatches).map((match) => ({
        question: match[1].trim(),
        answer: match[2].trim().replace(/\n/g, '<br>'),
      }));

      if (faqs.length > 0) {
        schemas.push(generateFAQSchema(faqs));
      }
    }

    // Add speakable schema for voice search optimization
    schemas.push(generateSpeakableSchema([
      'article h1',
      'article h2',
      'article p:first-of-type',
      '.definition-box',
      '.key-takeaways',
      'article blockquote',
    ]));
  }

  return (
    <>
      <SchemaMarkup data={schemas} />

      {/* Article Hero */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                href={`/blogs?category=${post.category.toLowerCase()}`}
                className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full hover:bg-blue-200 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-gray-500">{post.readTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{post.author}</span>
              </div>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <span className="text-sm">
                  Updated:{' '}
                  {new Date(post.updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:mb-2">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b">
                <span className="font-semibold text-gray-700">Tags:</span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blogs?tag=${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="mb-12 pb-12 border-b">
              <h3 className="font-semibold mb-4">Share this article:</h3>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.eifasoft.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.eifasoft.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.eifasoft.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors h-full">
                        <span className="text-xs text-blue-600 font-semibold mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your next blockchain, mobile app, or web development project
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* Newsletter/Contact Form */}
      <ContactForm />
    </>
  );
}

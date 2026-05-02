import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.eifasoft.com';

  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      // Google Search
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Bing Search
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI Search Engines - OpenAI GPTBot (ChatGPT/Bing Chat)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Anthropic Claude
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Google AI / Bard / Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Meta AI
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Meta-ExternalFetcher',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Amazon AI / Alexa
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Apple AI
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

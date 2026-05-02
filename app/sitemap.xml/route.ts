import { getSortedPostsData } from '@/lib/blog';
import citiesData from '@/data/cities.json';
import servicesData from '@/data/services.json';

// Force dynamic to ensure fresh XML declaration
export const dynamic = 'force-dynamic';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.eifasoft.com';
  const now = new Date().toISOString();

  // Build URL entries
  const urls: string[] = [];

  // Static pages - ALL pages
  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'daily' },
    { path: '/blogs', priority: 0.9, changeFreq: 'daily' },
    { path: '/website-designing-and-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/mobile-app-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/software-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/mlm-software-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/mlm-software-comparison', priority: 1.0, changeFreq: 'weekly' },
    { path: '/digital-marketing-services', priority: 1.0, changeFreq: 'weekly' },
    { path: '/e-commerce-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/accounting-software', priority: 1.0, changeFreq: 'weekly' },
    { path: '/coaching-institute-management-software', priority: 1.0, changeFreq: 'weekly' },
    { path: '/hospital-management-software', priority: 1.0, changeFreq: 'weekly' },
    { path: '/blockchain-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/dapp-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/flutter-app-development-company', priority: 1.0, changeFreq: 'weekly' },
    { path: '/who-we-are', priority: 0.8, changeFreq: 'monthly' },
    { path: '/our-aim', priority: 0.7, changeFreq: 'monthly' },
    { path: '/how-we-work', priority: 0.7, changeFreq: 'monthly' },
    { path: '/careers', priority: 0.8, changeFreq: 'weekly' },
    { path: '/testimonials', priority: 0.8, changeFreq: 'monthly' },
    { path: '/portfolio', priority: 0.9, changeFreq: 'monthly' },
    { path: '/feedback', priority: 0.6, changeFreq: 'yearly' },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' },
    { path: '/privacy-policy', priority: 0.7, changeFreq: 'monthly' },
    { path: '/terms-of-service', priority: 0.7, changeFreq: 'monthly' },
    { path: '/cookie-policy', priority: 0.6, changeFreq: 'monthly' },
    { path: '/refund-policy', priority: 0.6, changeFreq: 'monthly' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/cities', priority: 0.7, changeFreq: 'monthly' },
    // AI Services
    { path: '/ai-services', priority: 1.0, changeFreq: 'weekly' },
    { path: '/custom-ai-models', priority: 0.9, changeFreq: 'weekly' },
    { path: '/ai-agent-ecosystems', priority: 0.9, changeFreq: 'weekly' },
    // MLM Tools
    { path: '/mlm-plan-comparison', priority: 0.9, changeFreq: 'weekly' },
    { path: '/mlm-pricing-calculator', priority: 0.9, changeFreq: 'weekly' },
    { path: '/mlm-roi-estimator', priority: 0.9, changeFreq: 'weekly' },
    // API & DevOps
    { path: '/api-development-services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/devops-cloud-services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/it-consulting', priority: 0.9, changeFreq: 'weekly' },
    { path: '/software-maintenance-support', priority: 0.9, changeFreq: 'weekly' },
    // Blockchain Services
    { path: '/smart-contract-development', priority: 0.9, changeFreq: 'weekly' },
    { path: '/token-development-services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/defi-solutions', priority: 0.9, changeFreq: 'weekly' },
    { path: '/nft-marketplace-development', priority: 0.9, changeFreq: 'weekly' },
    { path: '/blockchain-consulting', priority: 0.9, changeFreq: 'weekly' },
    { path: '/crypto-currency-exchange-development-company', priority: 1.0, changeFreq: 'weekly' },
    // MLM Software Types
    { path: '/mlm-software-price', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mlm-software-provider', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mlm-software-developer', priority: 0.9, changeFreq: 'monthly' },
    { path: '/cheap-affordable-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/multi-level-marketing-platform', priority: 0.9, changeFreq: 'monthly' },
    { path: '/multi-level-marketing-app', priority: 0.9, changeFreq: 'monthly' },
    // MLM Plans
    { path: '/binary-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/matrix-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/unilevel-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/e-commerce-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/board-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/generation-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/hybrid-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/gift-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/helping-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/party-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/single-leg-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/single-leg-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/stair-step-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/stair-step-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/spillover-binary-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/spillover-binary-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/repurchase-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobile-recharge-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/investment-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/roi-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/donation-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/autopool-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/smart-contract-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/cryptocurrency-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/tron-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/real-estate-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/bucket-help-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/australian-x-up-plan-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/bitcoin-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/50-50-crowdfunding-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobious-loop-mlm-software', priority: 0.9, changeFreq: 'monthly' },
    // City-specific pages (static ones)
    { path: '/software-development-company-moradabad', priority: 0.9, changeFreq: 'monthly' },
    { path: '/software-development-company-bhopal', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mlm-software-development-company-moradabad', priority: 0.9, changeFreq: 'monthly' },
    { path: '/website-designing-company-moradabad', priority: 0.9, changeFreq: 'monthly' },
    { path: '/website-designing-company-rampur', priority: 0.9, changeFreq: 'monthly' },
    { path: '/agra-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/agra-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/agra-mobile-app-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/aligarh-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/aligarh-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/allahabad-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/ayodhya-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/ayodhya-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/bareilly-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/chandigarh-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/chandigarh-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/dehradun-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/ghaziabad-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/ghaziabad-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/gorakhpur-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/jhansi-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/kanpur-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/kanpur-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/lucknow-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/meerut-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/noida-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/noida-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/patna-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/patna-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/surat-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/surat-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/surat-mobile-app-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/varanasi-software-development-company', priority: 0.9, changeFreq: 'monthly' },
    { path: '/varanasi-website-designing-and-development-company', priority: 0.9, changeFreq: 'monthly' },
    // Mobile App Development Cities
    { path: '/mobile-app-development-company-aligarh', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobile-app-development-company-allahabad', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobile-app-development-company-bareilly', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobile-app-development-company-lucknow', priority: 0.9, changeFreq: 'monthly' },
    { path: '/mobile-app-development-company-meerut', priority: 0.9, changeFreq: 'monthly' },
  ];

  // Add static pages
  for (const page of staticPages) {
    urls.push(`<url><loc>${baseUrl}${page.path}</loc><lastmod>${now}</lastmod><changefreq>${page.changeFreq}</changefreq><priority>${page.priority}</priority></url>`);
  }

  // Add blog posts
  try {
    const blogPosts = getSortedPostsData();
    for (const post of blogPosts) {
      let lastMod = now;
      const dateStr = post.updatedAt || post.publishedAt;
      if (dateStr) {
        try {
          const d = new Date(dateStr);
          if (!isNaN(d.getTime())) lastMod = d.toISOString();
        } catch { /* use default */ }
      }
      urls.push(`<url><loc>${baseUrl}/blog/${post.slug}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
    }
  } catch { /* skip blogs on error */ }

  // Add city-service pages
  for (const city of citiesData.cities) {
    for (const service of servicesData.services) {
      if (service.category !== 'marketing') {
        urls.push(`<url><loc>${baseUrl}/${city.slug}-${service.slug}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`);
      }
    }
  }

  // Build the complete XML string - NO whitespace between declaration and root element
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  // Return as raw text/xml response
  return new Response(xmlContent, {
    status: 200,
    headers: new Headers({
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    }),
  });
}

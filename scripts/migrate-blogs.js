/**
 * Blog Migration Script
 * Converts SQL blog data to MDX files for Next.js
 * 
 * Usage: node scripts/migrate-blogs.js
 */

const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

// Blog data from SQL
const blogs = [
  {
    blog_id: 3,
    blog_title: 'Revolutionizing the Digital Landscape: A Deep Dive into EifaSoft Technologies Solutions',
    blog_date: '29',
    blog_month: 'November',
    blog_img: 'blg1.png',
    blog_desc: `<p>In the rapidly evolving digital landscape, EifaSoft Technologies stands as a beacon of innovation, revolutionizing the way businesses navigate and thrive in the online realm. With a profound commitment to delivering cutting-edge solutions, EifaSoft Technologies has emerged as a trailblazer in the technology sphere.</p>
<h3>Unleashing Innovation</h3>
<p>At the core of EifaSoft Technologies' success lies a relentless pursuit of innovation. The company's solutions go beyond conventional approaches, integrating the latest technologies to address the dynamic needs of modern businesses. Whether it's mobile app development, website design, or digital marketing, EifaSoft Technologies employs a forward-thinking approach to drive success.</p>
<h3>A Holistic Approach to Development</h3>
<p>EifaSoft Technologies takes a holistic approach to digital solutions, understanding that success is multifaceted. The company's services span a spectrum of offerings, including mobile application development, website design, and digital marketing. This comprehensive suite of services ensures that clients receive end-to-end solutions for their digital needs.</p>
<h3>Tailored Solutions for Every Business</h3>
<p>Recognizing that each business is unique, EifaSoft Technologies specializes in providing tailored solutions. The company collaborates closely with clients to understand their specific requirements and objectives, crafting bespoke strategies that align with their vision. This personalized approach sets EifaSoft Technologies apart in the competitive digital landscape.</p>
<h3>Expertise in MLM and Cryptocurrency</h3>
<p>EifaSoft Technologies boasts expertise in MLM (Multi-Level Marketing) software development and cryptocurrency solutions. With a deep understanding of these intricate domains, the company empowers businesses to navigate the complexities of network marketing and blockchain technologies seamlessly.</p>
<h3>Client-Centric Philosophy</h3>
<p>EifaSoft Technologies places clients at the center of its philosophy. The company's success is intricately tied to the success of its clients, fostering enduring partnerships built on trust and mutual growth. The client-centric approach ensures that every project undertaken is geared towards achieving tangible, impactful results.</p>
<p>In conclusion, EifaSoft Technologies transcends conventional boundaries, ushering in a new era of digital excellence. By combining innovation, a holistic approach, tailored solutions, expertise in specialized domains, and a client-centric philosophy, EifaSoft Technologies is reshaping the digital landscape and propelling businesses towards unparalleled success.</p>`,
    meta_keywords: 'EifaSoft technologies, digital landscape revolution, cutting-edge software solutions, innovative technology trends, business process automation, cloud-based services, emerging tech innovations',
    meta_title: 'Revolutionizing the Digital Landscape: A Deep Dive into EifaSoft Technologies Solutions',
    meta_url: 'revolutionizing-the-digital-landscape-a-deep-dive-into-eifasoft-technologies-solutions',
    meta_desc: 'Discover how EifaSoft Technologies is revolutionizing the digital landscape with cutting-edge solutions, driving innovation and business growth in the tech sphe',
    category: 'news-and-events'
  },
  // Add more blog entries here - this is just a template
  // You can add all 37 blogs from the SQL file
];

// Category mapping
const categoryMap = {
  'news-and-events': 'News & Events',
  'multi-level-marketing': 'MLM Software',
  'ecommerce': 'E-commerce',
  '': 'Technology'
};

// Month mapping for date conversion
const monthMap = {
  'January': '01', 'February': '02', 'March': '03', 'April': '04',
  'May': '05', 'June': '06', 'July': '07', 'August': '08',
  'September': '09', 'October': '10', 'November': '11', 'December': '12'
};

/**
 * Convert HTML to clean MDX content
 */
function htmlToMdx(html) {
  if (!html) return '';
  
  let content = html
    // Remove escaped quotes
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    // Convert headings
    .replace(/<h2>/g, '\n## ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<h3>/g, '\n### ')
    .replace(/<\/h3>/g, '\n')
    .replace(/<h4>/g, '\n#### ')
    .replace(/<\/h4>/g, '\n')
    // Convert paragraphs
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    // Convert lists
    .replace(/<ul>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol>/g, '\n')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li>/g, '- ')
    .replace(/<\/li>/g, '\n')
    // Convert emphasis
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<em>/g, '*')
    .replace(/<\/em>/g, '*')
    // Convert links
    .replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  return content;
}

/**
 * Extract tags from keywords
 */
function extractTags(keywords) {
  if (!keywords) return [];
  
  return keywords
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
    .slice(0, 5); // Limit to 5 tags
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content, maxLength = 160) {
  const clean = content
    .replace(/<[^>]+>/g, '') // Remove HTML
    .replace(/\n/g, ' ') // Remove newlines
    .trim();
  
  if (clean.length <= maxLength) return clean;
  
  return clean.substring(0, maxLength).trim() + '...';
}

/**
 * Create date string from blog_date and blog_month
 */
function createDate(day, month) {
  const currentYear = new Date().getFullYear();
  const monthNum = monthMap[month] || '01';
  const dayNum = day.padStart(2, '0');
  
  return `${currentYear}-${monthNum}-${dayNum}`;
}

/**
 * Create MDX frontmatter
 */
function createFrontmatter(blog) {
  const publishedAt = createDate(blog.blog_date, blog.blog_month);
  const category = categoryMap[blog.category] || 'Technology';
  const tags = extractTags(blog.meta_keywords);
  const excerpt = blog.meta_desc || generateExcerpt(blog.blog_desc);
  
  return `---
title: "${blog.meta_title || blog.blog_title}"
excerpt: "${excerpt}"
publishedAt: "${publishedAt}"
updatedAt: "${publishedAt}"
author: "EifaSoft Team"
category: "${category}"
tags: ${JSON.stringify(tags, null, 2)}
featuredImage: "/images/blog/${blog.blog_img}"
seo:
  metaTitle: "${blog.meta_title}"
  metaDescription: "${blog.meta_desc}"
  keywords: "${blog.meta_keywords}"
---`;
}

/**
 * Create MDX file for a blog post
 */
function createMdxFile(blog) {
  const frontmatter = createFrontmatter(blog);
  const content = htmlToMdx(blog.blog_desc);
  
  const mdxContent = `${frontmatter}

${content}
`;
  
  return mdxContent;
}

/**
 * Sanitize filename
 */
function sanitizeFilename(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Main migration function
 */
function migrateBlogs() {
  const contentDir = path.join(__dirname, '..', 'content', 'blog');
  
  // Create content/blog directory if it doesn't exist
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
    console.log('✓ Created content/blog directory');
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  blogs.forEach((blog) => {
    try {
      const filename = sanitizeFilename(blog.meta_url || `blog-${blog.blog_id}`);
      const filepath = path.join(contentDir, `${filename}.mdx`);
      const mdxContent = createMdxFile(blog);
      
      fs.writeFileSync(filepath, mdxContent, 'utf8');
      console.log(`✓ Created: ${filename}.mdx`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error creating blog ${blog.blog_id}:`, error.message);
      errorCount++;
    }
  });
  
  console.log('\n=== Migration Summary ===');
  console.log(`Total blogs: ${blogs.length}`);
  console.log(`Successfully migrated: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log('\nNext steps:');
  console.log('1. Copy blog images from old site to public/images/blog/');
  console.log('2. Review and edit generated MDX files as needed');
  console.log('3. Test blog pages at /blogs and /blog/[slug]');
}

// Run migration
console.log('Starting blog migration...\n');
migrateBlogs();

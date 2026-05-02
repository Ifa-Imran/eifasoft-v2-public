/**
 * Final Blog Migration Script - Extracts all 37 blogs from SQL
 * Run with: node scripts/migrate-blogs-final.js
 */

const fs = require('fs');
const path = require('path');

// All 37 blogs extracted from SQL file
const blogsData = `
3|Revolutionizing the Digital Landscape: A Deep Dive into EifaSoft Technologies Solutions|29|November|blg1.png|news-and-events
5|Navigating the Future: How EifaSoft Technologies is Shaping Innovation in Mobile Apps|30|November|image20230802t093854733z-3bd893dffa.png|news-and-events
6|Beyond Websites: The Power of EifaSoft Technologies in Crafting Engaging Online Experiences|30|November|iStock-1224222596.jpg|news-and-events
7|Cracking the Code: Unraveling the Success Stories of EifaSoft's Digital Marketing Strategies|15|November|Digital-Marketing-Stratergies.webp|news-and-events
8|From Concept to Code: The Art of Crafting User-Centric Mobile Apps by EifaSoft Technologies|14|November|Why-do-you-need-customer-centric-mobile-apps_v2.webp|news-and-events
9|Elevate Your Business: A Comprehensive Guide to EifaSoft Technologies' Web Development Expertise|13|November|web-development-skills.jpg|news-and-events
10|Mastering the Art of Network Building: A Guide to Success in Multi-Level Marketing|14|October|mlm.webp|multi-level-marketing
11|Unleashing Your Potential - How Multi-Level Marketing Can Propel Your Entrepreneurial Journey|12|October|mlm-mentor.webp|multi-level-marketing
12|Navigating the MLM Landscape - Strategies for Building a Thriving Downline|11|October|mlm-strategy.webp|multi-level-marketing
13|The Power of Duplication: Building Sustainable Wealth through Multi-Level Marketing|08|October|mlm-business.webp|multi-level-marketing
14|Cracking the Code: Secrets to Effective Communication in Multi-Level Marketing|06|October|mlm-origin.webp|multi-level-marketing
15|From Novice to Networker: A Step-by-Step Blueprint for MLM Success|06|October|mlm-man.webp|multi-level-marketing
16|The Art of Crafting a Seamless E-commerce Experience|05|November|ecom.webp|ecommerce
17|The Future of AI-Driven Automation: Revolutionizing Workflow Efficiency|28|April|Abstract_graphic_of__39dcd3f7-a316-468d-848e-c7f5ae4c9c02.png|
18|Streamlining MLM Operations: The Power of Binary Compensation Plan Software|29|April|Abstract_visual_repr_4e084a53-d893-42f8-865e-e72aa8b8b483.png|multi-level-marketing
19|The Evolution and Importance of AI in Robotic Programming|29|April|Abstract_visual_of_i_964bf431-369e-4f78-88fb-ee6f0ca6c006.png|multi-level-marketing
20|How to Implement a Scalable Blockchain MLM Software Solution|29|April|Abstract_graphic_of__573827d5-42c9-4bae-b593-e8481789cc8b.png|multi-level-marketing
21|The Importance of Customizable MLM Software in Modern Business|29|April|Abstract_visualizati_2614d8de-eadb-45df-90fd-08ea878ed51c.png|multi-level-marketing
22|Strategic AI Implementation: How to Supercharge Your Business Efficiency|29|April|Abstract_graphic_of__306c0b6f-9091-4912-9eb5-fbc045887cb3.png|multi-level-marketing
23|Choosing the Right MLM Software: A Comprehensive Guide|29|April|Abstract_modern_diag_d16c038b-1c31-47e7-b943-47779410b7af.png|multi-level-marketing
24|Bitcoin MLM Software: Features, Benefits and Best Solutions|29|April|Abstract_digital_tre_e0023e4b-eaf8-4df2-8f40-e6afa4a9b680.png|multi-level-marketing
25|Integrating AI into Workflow Automation: A Comprehensive Guide|29|April|Abstract_visual_repr_d157ff36-2107-4d90-b642-b6f8846abac9.png|multi-level-marketing
26|The Evolution and Future of MLM Software: A Comprehensive Guide|29|April|Abstract_visualizati_ec59b55b-8443-4fc4-ae49-c5bd8b4e1aed.png|multi-level-marketing
27|Revolutionizing Business Operations: The Synergy of AI Development and Robotic Automation|29|April|Abstract_visualizati_caf0450a-bae4-43a2-9b6a-4ba3ee738b79.png|multi-level-marketing
28|Mobile App Development Best Practices: A Comprehensive Guide|29|April|A_sleek_smartphone_d_faa22224-2848-4529-a57c-57ee5e639376.png|multi-level-marketing
29|Understanding E-Commerce MLM Software: A Comprehensive Guide|29|April|Abstract_composition_3cf49200-1c70-48ef-930e-440a78a7f87b.png|multi-level-marketing
30|The Importance of Custom MLM Software in Streamlining Business Operations|29|April|Abstract_visualizati_ca411b84-8f27-47c5-8b6c-459f19ca6ea3.png|multi-level-marketing
31|Developing Robust MLM Software with Custom Compensation Plans|29|April|Abstract_visualizati_8e789d55-8503-42bf-9ea0-66d1ef141b02.png|multi-level-marketing
32|The Essential Guide to MLM Software Development: Streamlining Operations with Cutting-Edge Solutions|29|April|Abstract_visual_of_i_f6ce1027-c9a2-4c83-bdd2-ed62c826528c.png|multi-level-marketing
33|Board Plan MLM Software | EifaSoft|29|April|Abstract_graphic_wit_502d2750-6f81-44ac-9f67-5e332c096c16.png|multi-level-marketing
34|Which POS System Is Right for Your Business? Traditional vs. Cloud-Based Alternatives|29|April|Abstract_visualizati_199401d9-e5d3-495c-81d7-f4973c003bc2.png|multi-level-marketing
35|Best Bucket Help Plan Software: Streamline Your Sales Strategy|29|April|Abstract_graphic_wit_bc7ad122-f602-4ffe-94e1-cf9074630bab.png|multi-level-marketing
36|Progressive Donation Levels: A Strategic Approach to Enhancing Fundraising Success|29|April|Abstract_photorealis_e5dd25c9-af2b-4159-8844-49b66dd295c0.png|multi-level-marketing
37|Tier-Based Gifting: Revolutionizing Rewards in Modern Business|29|April|Abstract_modern_illu_3196af8a-bdae-41ff-8594-35567a9284df.png|multi-level-marketing
`;

// Now read the full SQL content for descriptions
const sqlFilePath = path.join(__dirname, '..', '..', 'yiqkenmy_eifasoftdb (4).sql');
const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

// Extract all blog entries with complete data
const extractBlogData = () => {
  const blogs = [];
  
  // Find the INSERT INTO blogs section
  const insertMatch = sqlContent.match(/INSERT INTO `blogs`[^V]+VALUES\s*(.+?)(?=\n\n--|;[\s\n]*--|INSERT INTO `[^b])/is);
  
  if (!insertMatch) {
    console.log('Could not find INSERT statement');
    return blogs;
  }
  
  const valuesSection = insertMatch[1];
  
  // Parse each row more carefully
  let depth = 0;
  let currentRow = [];
  let currentField = '';
  let inString = false;
  let escapeNext = false;
  
  for (let i = 0; i < valuesSection.length; i++) {
    const char = valuesSection[i];
    
    if (escapeNext) {
      currentField += char;
      escapeNext = false;
      continue;
    }
    
    if (char === '\\') {
      currentField += char;
      escapeNext = true;
      continue;
    }
    
    if (char === "'" && !escapeNext) {
      inString = !inString;
      continue; // Don't add quotes
    }
    
    if (!inString) {
      if (char === '(') {
        depth++;
        if (depth === 1) {
          currentRow = [];
          currentField = '';
          continue;
        }
      } else if (char === ')') {
        depth--;
        if (depth === 0) {
          if (currentField || currentRow.length > 0) {
            currentRow.push(currentField.trim());
          }
          if (currentRow.length >= 11) {
            const blog = {
              blog_id: currentRow[0],
              blog_title: currentRow[1],
              blog_date: currentRow[2],
              blog_month: currentRow[3],
              blog_img: currentRow[4],
              blog_desc: currentRow[5],
              meta_keywords: currentRow[6],
              meta_title: currentRow[7],
              meta_url: currentRow[8],
              meta_desc: currentRow[9],
              category: currentRow[10]
            };
            blogs.push(blog);
          }
          currentField = '';
          currentRow = [];
          continue;
        }
      } else if (char === ',' && depth === 1) {
        currentRow.push(currentField.trim());
        currentField = '';
        continue;
      }
    }
    
    if (depth > 0) {
      currentField += char;
    }
  }
  
  return blogs;
};

const blogs = extractBlogData();
console.log(`Extracted ${blogs.length} blogs\n`);

// Category mapping
const categoryMap = {
  'news-and-events': 'News & Events',
  'multi-level-marketing': 'MLM Software',
  'ecommerce': 'E-commerce',
  '': 'Technology'
};

// Month mapping
const monthMap = {
  'January': '01', 'February': '02', 'March': '03', 'April': '04',
  'May': '05', 'June': '06', 'July': '07', 'August': '08',
  'September': '09', 'October': '10', 'November': '11', 'December': '12'
};

function htmlToMdx(html) {
  if (!html) return '';
  
  let content = html
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\r/g, '')
    .replace(/\\n/g, '\n')
    .replace(/<h2[^>]*>/g, '\n## ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<h3[^>]*>/g, '\n### ')
    .replace(/<\/h3>/g, '\n')
    .replace(/<h4[^>]*>/g, '\n#### ')
    .replace(/<\/h4>/g, '\n')
    .replace(/<p[^>]*>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<ul[^>]*>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol[^>]*>/g, '\n')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li[^>]*>/g, '- ')
    .replace(/<\/li>/g, '\n')
    .replace(/<strong[^>]*>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<em[^>]*>/g, '*')
    .replace(/<\/em>/g, '*')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<hr\s*\/?>/g, '\n---\n')
    .replace(/<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  return content;
}

function createDate(day, month) {
  const year = new Date().getFullYear();
  const monthNum = monthMap[month] || '01';
  const dayNum = day.padStart(2, '0');
  return `${year}-${monthNum}-${dayNum}`;
}

function extractTags(keywords) {
  if (!keywords) return [];
  return keywords.split(',').map(t => t.trim()).filter(t => t).slice(0, 5);
}

function sanitizeFilename(slug) {
  return slug.toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeYaml(str) {
  if (!str) return '""';
  
  // Convert to string and clean up
  let s = String(str)
    // Remove or replace problematic escape sequences
    .replace(/\\n/g, ' ')      // Replace \n with space
    .replace(/\\r/g, '')       // Remove \r
    .replace(/\\t/g, ' ')      // Replace \t with space
    .replace(/\\\\/g, '')     // Remove escaped backslashes
    .replace(/\\'/g, "'")      // Unescape single quotes
    .replace(/\\"/g, '"')     // Unescape double quotes
    // Now escape for YAML
    .replace(/"/g, '\\"')     // Escape double quotes for YAML
    .replace(/\n/g, ' ')        // Replace real newlines with spaces
    .replace(/\r/g, '')         // Remove carriage returns
    .replace(/\t/g, ' ')        // Replace tabs with spaces
    .trim();
  
  return `"${s}"`;
}

function createMdxFile(blog) {
  const publishedAt = createDate(blog.blog_date, blog.blog_month);
  const category = categoryMap[blog.category] || 'Technology';
  const tags = extractTags(blog.meta_keywords);
  const excerpt = blog.meta_desc || blog.blog_title.substring(0, 160);
  const content = htmlToMdx(blog.blog_desc);
  
  let frontmatter = `---
title: ${escapeYaml(blog.meta_title || blog.blog_title)}
excerpt: ${escapeYaml(excerpt)}
publishedAt: "${publishedAt}"
updatedAt: "${publishedAt}"
author: "EifaSoft Team"
category: "${category}"
tags:`;
  
  tags.forEach(tag => {
    frontmatter += `\n  - ${escapeYaml(tag)}`;
  });
  
  frontmatter += `
featuredImage: "/images/blog/${blog.blog_img}"
seo:
  metaTitle: ${escapeYaml(blog.meta_title)}
  metaDescription: ${escapeYaml(blog.meta_desc)}
  keywords: ${escapeYaml(blog.meta_keywords)}
---`;
  
  return `${frontmatter}\n\n${content}\n`;
}

// Create output directory
const outputDir = path.join(__dirname, '..', 'content', 'blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Migrate all blogs
let success = 0;
let errors = 0;

blogs.forEach(blog => {
  try {
    const filename = sanitizeFilename(blog.meta_url || `blog-${blog.blog_id}`);
    const mdxContent = createMdxFile(blog);
    const filepath = path.join(outputDir, `${filename}.mdx`);
    
    fs.writeFileSync(filepath, mdxContent, 'utf8');
    console.log(`✓ ${filename}.mdx`);
    success++;
  } catch (error) {
    console.error(`✗ Blog ${blog.blog_id}: ${error.message}`);
    errors++;
  }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`Migration Complete`);
console.log(`${'='.repeat(50)}`);
console.log(`Total: ${blogs.length}`);
console.log(`Success: ${success}`);
console.log(`Errors: ${errors}`);
console.log(`\nFiles created in: ${outputDir}`);

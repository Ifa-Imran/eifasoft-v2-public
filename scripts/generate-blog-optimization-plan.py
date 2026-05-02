#!/usr/bin/env python3
"""
EifaSoft Complete Blog Optimization Plan Generator
Scans all 466 blogs and generates a comprehensive action plan for each
"""

import frontmatter
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import re
import json

# Configuration
BLOG_DIR = Path("content/blog")
OUTPUT_FILE = Path("COMPLETE-BLOG-OPTIMIZATION-PLAN.md")

# Pillar Keywords for classification
PILLAR_KEYWORDS = {
    "MLM_SOFTWARE": [
        "mlm software", "multi-level marketing", "network marketing software",
        "direct selling platform", "compensation plan software", "genealogy tracking",
        "binary plan", "matrix plan", "unilevel plan", "board plan", "bucket plan",
        "spillover system", "repurchase plan", "donation plan", "crypto mlm",
        "smart contract mlm", "mlm payment gateway", "mlm mobile app"
    ],
    "BLOCKCHAIN_WEB3": [
        "blockchain development", "smart contract development", "defi development",
        "crypto exchange development", "nft marketplace", "token development",
        "web3 development", "dapp development", "dao development", "layer 2",
        "cross-chain bridge", "staking platform", "ico launchpad", "cryptocurrency wallet"
    ],
    "AI_INTELLIGENCE": [
        "ai development", "artificial intelligence solutions", "machine learning development",
        "ai agents", "generative ai", "nlp solutions", "computer vision", "mlops",
        "robotic process automation", "rpa", "ai automation", "predictive analytics",
        "intelligent automation", "ai consulting", "custom ai models"
    ],
    "WEB_MOBILE": [
        "mobile app development", "flutter development", "react native development",
        "web development", "laravel development", "mern stack", "nodejs development",
        "php development", "python development", ".net development", "api development",
        "e-commerce development", "website design", "progressive web app"
    ],
    "ENTERPRISE_SOLUTIONS": [
        "erp software", "enterprise resource planning", "digital marketing services",
        "devops services", "cloud migration", "software maintenance", "it consulting",
        "business intelligence", "crm development", "hospital management software",
        "school erp", "coaching institute management"
    ]
}

# Pillar blog slugs (the authority content hubs)
PILLAR_BLOGS = {
    "MLM_SOFTWARE": [
        "complete-guide-mlm-software-development",
        "optimized-mlm-pillar-complete",
        "how-to-develop-robust-mlm-software-a-comprehensive-guide"
    ],
    "BLOCKCHAIN_WEB3": [
        "complete-guide-blockchain-mlm-software",
        "optimized-blockchain-pillar-complete",
        "cryptocurrency-exchange-development-a-comprehensive-guide"
    ],
    "AI_INTELLIGENCE": [
        "complete-guide-ai-services-solutions",
        "optimized-ai-pillar-part1",
        "optimized-ai-pillar-part2",
        "the-comprehensive-guide-to-effective-ai-implementation-in-modern-businesses"
    ],
    "WEB_MOBILE": [
        "complete-guide-mobile-app-development",
        "optimized-mobile-pillar-complete",
        "choosing-the-right-mobile-app-development-services-for-your-business-needs"
    ],
    "ENTERPRISE_SOLUTIONS": [
        "complete-guide-custom-software-development",
        "optimized-software-dev-pillar-complete",
        "custom-software-development-services-in-moradabad-tailored-solutions-for-modern-businesses"
    ]
}

# Service pages for CTA links
SERVICE_PAGES = {
    "MLM_SOFTWARE": "/mlm-software",
    "BLOCKCHAIN_WEB3": "/blockchain-development-company",
    "AI_INTELLIGENCE": "/ai-services",
    "WEB_MOBILE": "/mobile-app-development-company",
    "ENTERPRISE_SOLUTIONS": "/software-development-company"
}

class BlogAnalyzer:
    def __init__(self):
        self.blogs = []
        self.stats = defaultdict(int)
        self.pillar_blogs_found = []
        self.cluster_blogs = defaultdict(list)
        
    def count_words(self, content: str) -> int:
        """Count words in markdown content"""
        clean_content = re.sub(r'!\[.*?\]\(.*?\)', '', content)
        clean_content = re.sub(r'\[.*?\]\(.*?\)', '', clean_content)
        clean_content = re.sub(r'[#*`]', '', clean_content)
        clean_content = re.sub(r'```[\s\S]*?```', '', clean_content)
        return len(clean_content.split())
    
    def detect_pillar_category(self, content: str, title: str) -> tuple:
        """Detect which pillar category this blog belongs to"""
        content_lower = content.lower()
        title_lower = title.lower()
        
        scores = {}
        for pillar, keywords in PILLAR_KEYWORDS.items():
            score = 0
            for keyword in keywords:
                title_matches = title_lower.count(keyword) * 5
                content_matches = content_lower.count(keyword)
                score += title_matches + content_matches
            scores[pillar] = score
        
        best_pillar = max(scores, key=scores.get)
        confidence = scores[best_pillar]
        return best_pillar, confidence
    
    def is_pillar_blog(self, filename: str) -> bool:
        """Check if this blog is a designated pillar"""
        for pillar, slugs in PILLAR_BLOGS.items():
            if filename in slugs:
                return True
        return False
    
    def check_has_pillar_link(self, content: str, pillar_category: str) -> bool:
        """Check if blog has link to its pillar"""
        pillar_slugs = PILLAR_BLOGS.get(pillar_category, [])
        for slug in pillar_slugs:
            if slug in content:
                return True
        return False
    
    def check_has_service_cta(self, content: str, pillar_category: str) -> bool:
        """Check if blog has CTA to service page"""
        service_page = SERVICE_PAGES.get(pillar_category, "")
        return service_page in content
    
    def check_has_faq(self, content: str) -> bool:
        """Check if blog has FAQ section"""
        return 'faq' in content.lower() and '###' in content
    
    def check_has_schema(self, content: str) -> bool:
        """Check if blog has schema markup"""
        return 'schema' in content.lower() or '@type' in content
    
    def check_has_code_examples(self, content: str) -> bool:
        """Check if blog has code examples"""
        return '```' in content
    
    def check_has_comparison_table(self, content: str) -> bool:
        """Check if blog has comparison table"""
        return '|' in content and '---' in content
    
    def analyze_blog(self, filepath: Path) -> dict:
        """Analyze a single blog file"""
        try:
            post = frontmatter.load(filepath)
            content = post.content
            metadata = dict(post.metadata)
            
            filename = filepath.stem
            title = metadata.get('title', filename.replace('-', ' ').title())
            word_count = self.count_words(content)
            
            # Detect category
            pillar_category, confidence = self.detect_pillar_category(content, title)
            
            # Determine if pillar or cluster
            is_pillar = self.is_pillar_blog(filename)
            
            # Check existing optimizations
            has_pillar_link = self.check_has_pillar_link(content, pillar_category) if not is_pillar else True
            has_service_cta = self.check_has_service_cta(content, pillar_category)
            has_faq = self.check_has_faq(content)
            has_schema = self.check_has_schema(content)
            has_code = self.check_has_code_examples(content)
            has_table = self.check_has_comparison_table(content)
            
            # Calculate optimization score (0-100)
            score = 0
            if word_count >= 1500: score += 20
            elif word_count >= 1000: score += 10
            if has_pillar_link: score += 15
            if has_service_cta: score += 15
            if has_faq: score += 15
            if has_schema: score += 10
            if has_code: score += 10
            if has_table: score += 15
            
            # Generate action items
            actions = []
            if not is_pillar and not has_pillar_link:
                actions.append("ADD_PILLAR_LINK")
            if not has_service_cta:
                actions.append("ADD_SERVICE_CTA")
            if not has_faq:
                actions.append("ADD_FAQ_SECTION")
            if word_count < 1500:
                actions.append(f"EXPAND_CONTENT (current: {word_count} words, need: 1500+)")
            if not has_code and pillar_category in ["MLM_SOFTWARE", "BLOCKCHAIN_WEB3", "AI_INTELLIGENCE"]:
                actions.append("ADD_CODE_EXAMPLES")
            if not has_table:
                actions.append("ADD_COMPARISON_TABLE")
            if not has_schema:
                actions.append("ADD_SCHEMA_MARKUP")
            
            return {
                'filename': filename,
                'title': title,
                'word_count': word_count,
                'pillar_category': pillar_category,
                'confidence': confidence,
                'is_pillar': is_pillar,
                'optimization_score': score,
                'has_pillar_link': has_pillar_link,
                'has_service_cta': has_service_cta,
                'has_faq': has_faq,
                'has_schema': has_schema,
                'has_code': has_code,
                'has_table': has_table,
                'actions_required': actions
            }
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            return None
    
    def run_analysis(self):
        """Analyze all blogs"""
        print("🔍 Scanning all blog files...")
        
        blog_files = list(BLOG_DIR.glob("*.mdx"))
        print(f"Found {len(blog_files)} blog files")
        
        for idx, filepath in enumerate(blog_files, 1):
            if idx % 50 == 0:
                print(f"Processing {idx}/{len(blog_files)}...")
            
            analysis = self.analyze_blog(filepath)
            if analysis:
                self.blogs.append(analysis)
                
                if analysis['is_pillar']:
                    self.pillar_blogs_found.append(analysis)
                else:
                    self.cluster_blogs[analysis['pillar_category']].append(analysis)
        
        print(f"✅ Analyzed {len(self.blogs)} blogs")
    
    def generate_report(self):
        """Generate comprehensive markdown report"""
        print("📝 Generating optimization report...")
        
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write("# COMPLETE BLOG OPTIMIZATION PLAN\n\n")
            f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
            f.write(f"**Total Blogs Analyzed:** {len(self.blogs)}\n\n")
            
            # Executive Summary
            f.write("---\n\n")
            f.write("## 📊 EXECUTIVE SUMMARY\n\n")
            
            pillars = len(self.pillar_blogs_found)
            clusters = len(self.blogs) - pillars
            needs_pillar_link = sum(1 for b in self.blogs if not b['has_pillar_link'] and not b['is_pillar'])
            needs_service_cta = sum(1 for b in self.blogs if not b['has_service_cta'])
            needs_faq = sum(1 for b in self.blogs if not b['has_faq'])
            needs_expansion = sum(1 for b in self.blogs if b['word_count'] < 1500)
            avg_score = sum(b['optimization_score'] for b in self.blogs) / len(self.blogs)
            
            f.write(f"| Metric | Count |\n")
            f.write(f"|--------|-------|\n")
            f.write(f"| **Pillar Blogs** | {pillars} |\n")
            f.write(f"| **Cluster Blogs** | {clusters} |\n")
            f.write(f"| **Need Pillar Link** | {needs_pillar_link} |\n")
            f.write(f"| **Need Service CTA** | {needs_service_cta} |\n")
            f.write(f"| **Need FAQ Section** | {needs_faq} |\n")
            f.write(f"| **Need Content Expansion** | {needs_expansion} |\n")
            f.write(f"| **Average Optimization Score** | {avg_score:.1f}/100 |\n\n")
            
            # Pillar Blogs Section
            f.write("---\n\n")
            f.write("## 🏛️ PILLAR BLOGS (Authority Content Hubs)\n\n")
            f.write("These are your **main content hubs**. All cluster blogs should link TO these.\n\n")
            
            for pillar in self.pillar_blogs_found:
                f.write(f"### ✅ {pillar['title']}\n\n")
                f.write(f"- **File:** `{pillar['filename']}.mdx`\n")
                f.write(f"- **Category:** {pillar['pillar_category']}\n")
                f.write(f"- **Word Count:** {pillar['word_count']:,}\n")
                f.write(f"- **Optimization Score:** {pillar['optimization_score']}/100\n")
                f.write(f"- **Service Page CTA:** {'✅' if pillar['has_service_cta'] else '❌ NEEDED'}\n")
                f.write(f"- **FAQ Section:** {'✅' if pillar['has_faq'] else '❌ NEEDED'}\n")
                f.write(f"- **Schema Markup:** {'✅' if pillar['has_schema'] else '❌ NEEDED'}\n\n")
                
                if pillar['actions_required']:
                    f.write("**Actions Required:**\n")
                    for action in pillar['actions_required']:
                        f.write(f"- [ ] {action}\n")
                    f.write("\n")
            
            # Cluster Blogs by Category
            f.write("---\n\n")
            f.write("## 📚 CLUSTER BLOGS BY CATEGORY\n\n")
            f.write("Each cluster blog must link back to its parent pillar blog.\n\n")
            
            for category, blogs in self.cluster_blogs.items():
                f.write(f"### 📁 {category.replace('_', ' ').title()} ({len(blogs)} blogs)\n\n")
                
                # Get pillar slugs for this category
                pillar_slugs = PILLAR_BLOGS.get(category, [])
                service_page = SERVICE_PAGES.get(category, "")
                
                f.write(f"**Parent Pillar(s):** {', '.join([f'`{s}`' for s in pillar_slugs])}\n")
                f.write(f"**Service Page CTA:** `{service_page}`\n\n")
                
                # Sort by optimization score (lowest first = most work needed)
                sorted_blogs = sorted(blogs, key=lambda x: x['optimization_score'])
                
                f.write("| Blog | Words | Score | Pillar Link | Service CTA | FAQ | Actions |\n")
                f.write("|------|-------|-------|-------------|-------------|-----|--------|\n")
                
                for blog in sorted_blogs:
                    pillar_link = '✅' if blog['has_pillar_link'] else '❌'
                    service_cta = '✅' if blog['has_service_cta'] else '❌'
                    faq = '✅' if blog['has_faq'] else '❌'
                    actions = len(blog['actions_required'])
                    f.write(f"| `{blog['filename'][:50]}{'...' if len(blog['filename']) > 50 else ''}` | {blog['word_count']:,} | {blog['optimization_score']}/100 | {pillar_link} | {service_cta} | {faq} | {actions} |\n")
                
                f.write("\n")
            
            # Detailed Action Plan for Each Blog
            f.write("---\n\n")
            f.write("## 📋 DETAILED ACTION PLAN FOR EACH BLOG\n\n")
            
            # Sort all blogs by optimization score (lowest first)
            all_sorted = sorted(self.blogs, key=lambda x: x['optimization_score'])
            
            for idx, blog in enumerate(all_sorted, 1):
                if blog['is_pillar']:
                    blog_type = "🏛️ PILLAR"
                else:
                    blog_type = "📄 CLUSTER"
                
                f.write(f"### {idx}. {blog_type} - `{blog['filename']}.mdx`\n\n")
                f.write(f"**Title:** {blog['title']}\n\n")
                f.write(f"| Property | Value |\n")
                f.write(f"|----------|-------|\n")
                f.write(f"| Category | {blog['pillar_category']} |\n")
                f.write(f"| Word Count | {blog['word_count']:,} |\n")
                f.write(f"| Optimization Score | {blog['optimization_score']}/100 |\n")
                f.write(f"| Has Pillar Link | {'✅ Yes' if blog['has_pillar_link'] else '❌ No'} |\n")
                f.write(f"| Has Service CTA | {'✅ Yes' if blog['has_service_cta'] else '❌ No'} |\n")
                f.write(f"| Has FAQ Section | {'✅ Yes' if blog['has_faq'] else '❌ No'} |\n")
                f.write(f"| Has Schema | {'✅ Yes' if blog['has_schema'] else '❌ No'} |\n")
                f.write(f"| Has Code Examples | {'✅ Yes' if blog['has_code'] else '❌ No'} |\n")
                f.write(f"| Has Comparison Table | {'✅ Yes' if blog['has_table'] else '❌ No'} |\n\n")
                
                if blog['actions_required']:
                    f.write("**📝 ACTIONS REQUIRED:**\n\n")
                    
                    for action in blog['actions_required']:
                        if "ADD_PILLAR_LINK" in action:
                            pillar_slugs = PILLAR_BLOGS.get(blog['pillar_category'], [])
                            f.write(f"- [ ] **Add Pillar Link** (within first 100 words):\n")
                            f.write(f"  ```markdown\n")
                            f.write(f"  > 📘 **Part of Series**: This article is part of our comprehensive guide on\n")
                            f.write(f"  [{blog['pillar_category'].replace('_', ' ').title()}](/blog/{pillar_slugs[0] if pillar_slugs else 'pillar-slug'}).\n")
                            f.write(f"  ```\n\n")
                        elif "ADD_SERVICE_CTA" in action:
                            service_page = SERVICE_PAGES.get(blog['pillar_category'], "/services")
                            f.write(f"- [ ] **Add Service Page CTA** (in conclusion):\n")
                            f.write(f"  ```markdown\n")
                            f.write(f"  ## Ready to Get Started?\n")
                            f.write(f"  \n")
                            f.write(f"  EifaSoft specializes in {blog['pillar_category'].replace('_', ' ').lower()} solutions.\n")
                            f.write(f"  \n")
                            f.write(f"  **[Explore Our Services →]({service_page})**\n")
                            f.write(f"  ```\n\n")
                        elif "ADD_FAQ_SECTION" in action:
                            f.write(f"- [ ] **Add FAQ Section** (minimum 5 questions):\n")
                            f.write(f"  ```markdown\n")
                            f.write(f"  ## FAQ Section\n")
                            f.write(f"  \n")
                            f.write(f"  ### 1. What is [topic]?\n")
                            f.write(f"  [40-60 word answer optimized for featured snippets]\n")
                            f.write(f"  \n")
                            f.write(f"  ### 2. How much does [topic] cost?\n")
                            f.write(f"  [Provide specific cost ranges with currency]\n")
                            f.write(f"  ```\n\n")
                        elif "EXPAND_CONTENT" in action:
                            f.write(f"- [ ] **{action}**\n")
                            f.write(f"  - Add real-world example (150-200 words)\n")
                            f.write(f"  - Add step-by-step process (200-300 words)\n")
                            f.write(f"  - Add comparison table (100-150 words)\n")
                            f.write(f"  - Add common mistakes section (100-150 words)\n\n")
                        elif "ADD_CODE_EXAMPLES" in action:
                            f.write(f"- [ ] **Add Code Examples**:\n")
                            f.write(f"  - Add at least 2 relevant code snippets\n")
                            f.write(f"  - Include language syntax highlighting\n")
                            f.write(f"  - Add comments explaining the code\n\n")
                        elif "ADD_COMPARISON_TABLE" in action:
                            f.write(f"- [ ] **Add Comparison Table**:\n")
                            f.write(f"  ```markdown\n")
                            f.write(f"  | Feature | Option A | Option B | Option C |\n")
                            f.write(f"  |---------|----------|----------|----------|\n")
                            f.write(f"  | Price | ... | ... | ... |\n")
                            f.write(f"  | Performance | ... | ... | ... |\n")
                            f.write(f"  ```\n\n")
                        elif "ADD_SCHEMA_MARKUP" in action:
                            f.write(f"- [ ] **Add Schema Markup** (in frontmatter or component)\n\n")
                        else:
                            f.write(f"- [ ] {action}\n\n")
                else:
                    f.write("**✅ FULLY OPTIMIZED** - No actions required!\n\n")
                
                f.write("---\n\n")
            
            # Priority Matrix
            f.write("## 🎯 PRIORITY MATRIX\n\n")
            
            critical = [b for b in self.blogs if b['optimization_score'] < 30]
            high = [b for b in self.blogs if 30 <= b['optimization_score'] < 50]
            medium = [b for b in self.blogs if 50 <= b['optimization_score'] < 70]
            low = [b for b in self.blogs if b['optimization_score'] >= 70]
            
            f.write(f"### 🔴 CRITICAL PRIORITY ({len(critical)} blogs) - Score < 30\n")
            for b in critical[:20]:
                f.write(f"- `{b['filename']}` (Score: {b['optimization_score']})\n")
            if len(critical) > 20:
                f.write(f"- ... and {len(critical) - 20} more\n")
            f.write("\n")
            
            f.write(f"### 🟠 HIGH PRIORITY ({len(high)} blogs) - Score 30-49\n")
            for b in high[:20]:
                f.write(f"- `{b['filename']}` (Score: {b['optimization_score']})\n")
            if len(high) > 20:
                f.write(f"- ... and {len(high) - 20} more\n")
            f.write("\n")
            
            f.write(f"### 🟡 MEDIUM PRIORITY ({len(medium)} blogs) - Score 50-69\n")
            for b in medium[:20]:
                f.write(f"- `{b['filename']}` (Score: {b['optimization_score']})\n")
            if len(medium) > 20:
                f.write(f"- ... and {len(medium) - 20} more\n")
            f.write("\n")
            
            f.write(f"### 🟢 LOW PRIORITY ({len(low)} blogs) - Score 70+\n")
            for b in low[:20]:
                f.write(f"- `{b['filename']}` (Score: {b['optimization_score']})\n")
            if len(low) > 20:
                f.write(f"- ... and {len(low) - 20} more\n")
            f.write("\n")
        
        print(f"✅ Report saved to: {OUTPUT_FILE}")
        
        # Also save as JSON for programmatic access
        json_output = {
            'generated': datetime.now().isoformat(),
            'total_blogs': len(self.blogs),
            'pillars': self.pillar_blogs_found,
            'clusters_by_category': {k: v for k, v in self.cluster_blogs.items()},
            'all_blogs': self.blogs
        }
        
        with open('scripts/blog-optimization-data.json', 'w', encoding='utf-8') as f:
            json.dump(json_output, f, indent=2, ensure_ascii=False)
        
        print("✅ JSON data saved to: scripts/blog-optimization-data.json")

if __name__ == "__main__":
    analyzer = BlogAnalyzer()
    analyzer.run_analysis()
    analyzer.generate_report()

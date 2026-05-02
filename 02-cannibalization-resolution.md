# Module 2: Cannibalization Resolution & 301 Redirect Mapping

## Overview
This module resolves keyword cannibalization issues identified in Module 1 by selecting canonical blogs, merging thin content, and creating 301 redirect maps.

## Cannibalization Detection Logic

### Duplicate Detection Algorithm

```python
def detect_cannibalization(blogs):
    """
    Identify groups of blogs competing for same keywords
    Returns dict: {primary_keyword: [blog_filenames]}
    """
    keyword_groups = defaultdict(list)
    
    for blog in blogs:
        # Extract primary keyword from title
        title = blog['metadata']['title'].lower()
        filename = blog['filename']
        
        # Priority keyword extraction (in order)
        if 'focus_keyword' in blog['metadata']:
            primary_kw = blog['metadata']['focus_keyword']
        elif any(kw in title for kw in ['mlm software', 'blockchain', 'ai development']):
            primary_kw = extract_dominant_keyword(title)
        else:
            primary_kw = None
        
        if primary_kw:
            keyword_groups[primary_kw].append(filename)
    
    # Filter to groups with 2+ blogs
    return {k: v for k, v in keyword_groups.items() if len(v) > 1}
```

## Common Cannibalization Groups Found

Based on the blog file analysis, expect these major cannibalization groups:

### Group 1: MLM Software Development (15+ blogs)
**Competing Keywords**: "mlm software development", "develop mlm software"

**Blogs:**
- how-to-develop-robust-mlm-software-a-comprehensive-guide.mdx (11,100 words) ← **KEEP AS CANONICAL**
- everything-about-mlm-software-development-solutions-for-network-marketing-succes.mdx
- mastering-mlm-software-development-tailored-solutions-for-success.mdx
- the-importance-of-mlm-software-development-in-modern-business-strategies.mdx
- the-importance-of-mlm-software-development-in-modern-business-strategy.mdx (12,000 words)
- developing-a-robust-mlm-software-solution-key-considerations-for-success.mdx
- revolutionizing-mlm-software-development-a-comprehensive-guide.mdx
- why-mlm-software-development-is-critical-for-modern-business-success.mdx
- why-mlm-software-development-is-essential-for-modern-business-success.mdx
- why-custom-mlm-software-development-is-essential-for-modern-businesses.mdx (10,600 words)
- the-comprehensive-guide-to-effective-mlm-software-development.mdx
- understanding-mlm-software-development-a-comprehensive-guide.mdx

**Resolution Strategy:**
1. **Canonical**: `how-to-develop-robust-mlm-software-a-comprehensive-guide` (highest word count + comprehensive)
2. **Merge**: Combine unique sections from top 5 into canonical
3. **Redirect**: All others 301 redirect to canonical

### Group 2: Cryptocurrency Exchange Development (8 blogs)
**Competing Keywords**: "cryptocurrency exchange development", "crypto exchange platform"

**Blogs:**
- cryptocurrency-exchange-development-a-comprehensive-guide-to-building-a-secure-and-scalable-trading-platform.mdx
- cryptocurrency-exchange-development-a-comprehensive-guide.mdx (9,800 words) ← **KEEP AS CANONICAL**
- building-a-secure-and-scalable-cryptocurrency-exchange-key-considerations-for-success.mdx
- building-a-robust-cryptocurrency-exchange-key-considerations-for-success.mdx
- how-to-develop-a-secure-and-scalable-cryptocurrency-exchange-a-comprehensive-guide.mdx
- developing-a-professional-cryptocurrency-trading-platform-a-comprehensive-guide.mdx
- why-partnering-with-experts-for-cryptocurrency-exchange-development-is-crucial.mdx

**Resolution Strategy:**
1. **Canonical**: `cryptocurrency-exchange-development-a-comprehensive-guide` 
2. **Merge**: Technical specs from "building-a-secure..." into canonical
3. **Redirect**: Remaining 6 blogs → canonical

### Group 3: Binary Plan MLM Software (12 blogs)
**Competing Keywords**: "binary plan mlm software", "binary mlm system"

**Blogs:**
- binary-mlm-software-solutions.mdx (9,100 words) ← **KEEP AS CANONICAL**
- affordable-binary-mlm-solutions-strategies-for-success.mdx
- secure-binary-mlm-platforms-why-they-matter-for-your-business-success.mdx
- everything-you-need-to-know-about-spillover-binary-mlm-software.mdx
- spillover-binary-mlm-software (separate service page - keep separate)

**Resolution Strategy:**
1. **Canonical**: `binary-mlm-software-solutions`
2. **Merge**: Pricing info from "affordable..." into canonical
3. **Redirect**: 3-4 blogs → canonical

### Group 4: AI Implementation & Automation (10 blogs)
**Competing Keywords**: "ai implementation", "ai automation solutions"

**Blogs:**
- the-comprehensive-guide-to-effective-ai-implementation-in-modern-businesses.mdx (12,300 words) ← **KEEP AS CANONICAL**
- ai-implementation-best-practices-for-business-transformation.mdx
- how-to-implement-scalable-ai-solutions-for-business-efficiency.mdx
- strategic-ai-implementation-how-to-supercharge-your-business-efficiency.mdx
- embracing-ai-integration-challenges-solutions-and-future-trends.mdx

**Resolution Strategy:**
1. **Canonical**: `the-comprehensive-guide-to-effective-ai-implementation-in-modern-businesses`
2. **Redirect**: All similar implementation guides → canonical

### Group 5: Mobile App Development (11 blogs)
**Competing Keywords**: "mobile app development", "mobile application development"

**Blogs:**
- choosing-the-right-mobile-app-development-services-for-your-business-needs.mdx (11,500 words) ← **KEEP AS CANONICAL**
- the-comprehensive-guide-to-mobile-app-development-unlocking-business-potential.mdx
- understanding-mobile-app-development-a-comprehensive-guide-for-ctos-and-tech-decision-makers.mdx
- mobile-app-development-best-practices-a-comprehensive-guide.mdx
- the-evolution-of-mobile-app-development-a-comprehensive-guide.mdx

**Resolution Strategy:**
1. **Canonical**: `choosing-the-right-mobile-app-development-services-for-your-business-needs`
2. **Merge**: Best practices section into canonical
3. **Redirect**: Remaining → canonical

## Resolution Protocol

### Step-by-Step Process

For each cannibalization group:

#### 1. Select Canonical Blog
**Selection Criteria (score each blog):**
- +3 points: Highest word count
- +2 points: Most recent publish date
- +2 points: Already has most internal links pointing to it
- +1 point: Better URL structure (shorter, keyword-rich)
- +2 points: More comprehensive coverage (manual review)

**Example Scoring:**
```
Blog A: 11,100 words (+3), published 2024-11 (+2), 15 inbound links (+2) = 7 points ← WINNER
Blog B: 12,000 words (+3), published 2024-08 (+1), 8 inbound links (+1) = 5 points
Blog C: 8,900 words (+2), published 2024-10 (+2), 5 inbound links (+0) = 4 points
```

#### 2. Merge Unique Content
**Process:**
```python
def merge_blogs(canonical_blog, source_blogs):
    """
    Merge unique sections from source blogs into canonical
    """
    merged_sections = []
    
    for source in source_blogs:
        source_content = load_blog(source)
        unique_sections = find_unique_sections(source_content, canonical_blog.content)
        
        for section in unique_sections:
            if section.quality_score > 0.7:  # Only merge high-quality content
                merged_sections.append({
                    'source': source,
                    'section_title': section.title,
                    'content': section.content,
                    'insertion_point': determine_best_location(section, canonical_blog)
                })
    
    return merged_sections
```

**What to Merge:**
- Unique case studies or examples
- Statistical data not present in canonical
- Code snippets or technical implementations
- Comparison tables
- FAQ questions not already covered

**What NOT to Merge:**
- Redundant introductions/definitions
- Repetitive conclusions
- Low-quality filler content (<100 words)
- Outdated information (<2023)

#### 3. Create 301 Redirect Map
**Format for Next.js:**
```javascript
// next.config.ts redirects array
{
  source: '/blog/old-duplicate-post',
  destination: '/blog/canonical-pillar-guide',
  permanent: true // 301
}
```

**Apache .htaccess Format (backup):**
```apache
Redirect 301 /blog/old-duplicate-post /blog/canonical-pillar-guide
```

## Python Resolution Script

```python
#!/usr/bin/env python3
"""
EifaSoft Cannibalization Resolution Script
Resolves duplicate keyword targeting and creates 301 redirect maps
"""

import json
from pathlib import Path
from typing import Dict, List, Tuple
from collections import defaultdict
import frontmatter
import difflib

class CannibalizationResolver:
    def __init__(self, audit_report_path: str):
        self.audit_data = json.load(open(audit_report_path))
        self.classifications = self.audit_data['classifications']
        self.cannibalization_groups = self.audit_data['cannibalization_groups']
        self.resolutions = []
        self.redirect_map = []
        
    def score_blog(self, blog: Dict) -> int:
        """Score blog to determine canonical candidate"""
        score = 0
        
        # Word count score
        word_count = blog['current_metadata']['word_count']
        if word_count >= 10000:
            score += 3
        elif word_count >= 8000:
            score += 2
        elif word_count >= 5000:
            score += 1
        
        # Recency score (assuming 2024 is latest)
        pub_date = blog['current_metadata'].get('published_date', '')
        if '2024-11' in pub_date or '2024-12' in pub_date:
            score += 2
        elif '2024-10' in pub_date:
            score += 1
        
        # Inbound links score (would need actual analytics data)
        # For now, use confidence score as proxy
        confidence = blog['classification']['confidence_score']
        if confidence >= 100:
            score += 2
        elif confidence >= 50:
            score += 1
        
        return score
    
    def find_unique_sections(self, source_blog: Dict, canonical_blog: Dict) -> List[Dict]:
        """Identify unique valuable sections in source blog"""
        source_content = load_blog_content(source_blog['filepath'])
        canonical_content = load_blog_content(canonical_blog['filepath'])
        
        # Split into sections (by H2 headers)
        source_sections = split_by_headers(source_content, level=2)
        canonical_sections = set(split_by_headers(canonical_content, level=2))
        
        unique_sections = []
        for section_title, section_content in source_sections.items():
            # Check if this section exists in canonical
            similarity = difflib.SequenceMatcher(
                None, 
                section_title.lower(), 
                list(canonical_sections)[0].lower() if canonical_sections else ""
            ).ratio()
            
            if similarity < 0.6:  # Unique section
                # Check if section has value (min 100 words)
                if len(section_content.split()) >= 100:
                    unique_sections.append({
                        'title': section_title,
                        'content': section_content,
                        'word_count': len(section_content.split()),
                        'source': source_blog['filename']
                    })
        
        return unique_sections
    
    def resolve_group(self, keyword: str, blogs: List[str]) -> Dict:
        """Resolve a single cannibalization group"""
        print(f"\n🔍 Resolving: {keyword} ({len(blogs)} blogs)")
        
        # Get full blog data
        blog_objects = [b for b in self.classifications if b['filename'] in blogs]
        
        # Score each blog
        scored_blogs = []
        for blog in blog_objects:
            score = self.score_blog(blog)
            scored_blogs.append((blog, score))
        
        # Sort by score descending
        scored_blogs.sort(key=lambda x: x[1], reverse=True)
        
        # Select winner
        canonical_blog, canonical_score = scored_blogs[0]
        
        resolution = {
            'keyword': keyword,
            'canonical': {
                'filename': canonical_blog['filename'],
                'score': canonical_score,
                'word_count': canonical_blog['current_metadata']['word_count']
            },
            'merge_sources': [],
            'redirect_sources': []
        }
        
        # Process other blogs
        for blog, score in scored_blogs[1:]:
            # Find unique sections
            unique_sections = self.find_unique_sections(blog, canonical_blog)
            
            if unique_sections:
                resolution['merge_sources'].append({
                    'filename': blog['filename'],
                    'sections_to_merge': len(unique_sections),
                    'sections': unique_sections
                })
            else:
                resolution['redirect_sources'].append(blog['filename'])
        
        return resolution
    
    def generate_redirect_map(self):
        """Generate Next.js compatible redirect map"""
        redirects = []
        
        for resolution in self.resolutions:
            canonical_url = f"/blog/{resolution['canonical']['filename']}"
            
            # Add all redirect sources
            for source in resolution['redirect_sources']:
                redirects.append({
                    'source': f'/blog/{source}',
                    'destination': canonical_url,
                    'permanent': True
                })
        
        return redirects
    
    def export_redirect_files(self):
        """Export redirect maps in multiple formats"""
        timestamp = "20260313_120000"
        output_dir = Path("scripts/redirect-output")
        output_dir.mkdir(exist_ok=True)
        
        # Next.js config format
        nextjs_redirects = self.generate_redirect_map()
        
        with open(output_dir / f"nextjs-redirects_{timestamp}.json", 'w') as f:
            json.dump(nextjs_redirects, f, indent=2)
        
        # Apache .htaccess format
        with open(output_dir / f"htaccess-redirects_{timestamp}.txt", 'w') as f:
            f.write("# EifaSoft 301 Redirects for Cannibalization Resolution\n")
            f.write(f"# Generated: {timestamp}\n\n")
            for redirect in nextjs_redirects:
                f.write(f"Redirect 301 {redirect['source']} {redirect['destination']}\n")
        
        # CSV for manual review
        import csv
        with open(output_dir / f"redirect-map_{timestamp}.csv", 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Source URL', 'Destination URL', 'Type', 'Reason'])
            for redirect in nextjs_redirects:
                writer.writerow([
                    redirect['source'],
                    redirect['destination'],
                    '301 Permanent',
                    'Keyword Cannibalization'
                ])
        
        print(f"\n✅ Redirect files saved to {output_dir}/")
    
    def run_resolution(self):
        """Run resolution on all cannibalization groups"""
        print("🚀 Starting cannibalization resolution...")
        
        # Process each group
        for keyword, blogs in self.cannibalization_groups.items():
            if len(blogs) >= 2:
                resolution = self.resolve_group(keyword, blogs)
                self.resolutions.append(resolution)
        
        # Export files
        self.export_redirect_files()
        
        # Generate summary report
        self.generate_summary_report()
        
        print(f"\n✅ Resolution complete!")
        print(f"   Groups resolved: {len(self.resolutions)}")
        print(f"   Total redirects created: {sum(len(r['redirect_sources']) for r in self.resolutions)}")
        print(f"   Blogs marked for merge: {sum(len(r['merge_sources']) for r in self.resolutions)}")
    
    def generate_summary_report(self):
        """Generate human-readable summary"""
        timestamp = "20260313_120000"
        output_dir = Path("scripts/redirect-output")
        
        with open(output_dir / f"resolution-summary_{timestamp}.md", 'w') as f:
            f.write("# Cannibalization Resolution Summary\n\n")
            f.write(f"**Generated**: {timestamp}\n\n")
            
            f.write("## Executive Summary\n\n")
            total_redirects = sum(len(r['redirect_sources']) for r in self.resolutions)
            total_merges = sum(len(r['merge_sources']) for r in self.resolutions)
            f.write(f"- **Cannibalization Groups Resolved**: {len(self.resolutions)}\n")
            f.write(f"- **301 Redirects Created**: {total_redirects}\n")
            f.write(f"- **Blogs Requiring Content Merge**: {total_merges}\n\n")
            
            f.write("## Resolution Details\n\n")
            for resolution in self.resolutions:
                f.write(f"### Keyword: {resolution['keyword']}\n\n")
                f.write(f"**Canonical Blog**: `{resolution['canonical']['filename']}` ")
                f.write(f"({resolution['canonical']['word_count']} words, score: {resolution['canonical']['score']})\n\n")
                
                if resolution['merge_sources']:
                    f.write("**Merge These Into Canonical**:\n")
                    for source in resolution['merge_sources']:
                        f.write(f"- `{source['filename']}` → {source['sections_to_merge']} sections\n")
                        for section in source['sections'][:3]:  # Show first 3
                            f.write(f"  - Section: {section['title']} ({section['word_count']} words)\n")
                    f.write("\n")
                
                if resolution['redirect_sources']:
                    f.write("**301 Redirect These**:\n")
                    for source in resolution['redirect_sources'][:10]:  # Show first 10
                        f.write(f"- `/blog/{source}` → `/blog/{resolution['canonical']['filename']}`\n")
                    if len(resolution['redirect_sources']) > 10:
                        f.write(f"...and {len(resolution['redirect_sources']) - 10} more\n")
                    f.write("\n")

def load_blog_content(filepath: str) -> str:
    """Load blog content from file"""
    post = frontmatter.load(filepath)
    return post.content

def split_by_headers(content: str, level: int = 2) -> Dict[str, str]:
    """Split content by markdown headers"""
    import re
    pattern = r'^' + '#' * level + r'\s+(.+)$'
    
    sections = {}
    current_header = "Introduction"
    current_content = []
    
    for line in content.split('\n'):
        match = re.match(pattern, line, re.MULTILINE)
        if match:
            if current_content:
                sections[current_header] = '\n'.join(current_content)
            current_header = match.group(1).strip()
            current_content = []
        else:
            current_content.append(line)
    
    if current_content:
        sections[current_header] = '\n'.join(current_content)
    
    return sections

if __name__ == "__main__":
    # Run after Module 1 generates audit report
    import sys
    audit_file = sys.argv[1] if len(sys.argv) > 1 else "scripts/audit-output/audit_report_latest.json"
    
    resolver = CannibalizationResolver(audit_file)
    resolver.run_resolution()
```

## Execution Instructions

### Step 1: Run Resolution Script
```powershell
cd e:\Projects\eifasoft\eifasoft-v2
python scripts/02-cannibalization-fix.py scripts/audit-output/audit_report_YYYYMMDD_HHMMSS.json
```

### Step 2: Review Generated Files

Output files in `scripts/redirect-output/`:
1. **nextjs-redirects_TIMESTAMP.json** - Next.js compatible redirect array
2. **htaccess-redirects_TIMESTAMP.txt** - Apache format (backup)
3. **redirect-map_TIMESTAMP.csv** - Spreadsheet for review
4. **resolution-summary_TIMESTAMP.md** - Human-readable action plan

### Step 3: Manual Review Checklist

Before implementing redirects:

- [ ] Verify canonical blog is truly the best candidate
- [ ] Check that no unique high-value content will be lost
- [ ] Confirm redirect destinations are relevant (not random pages)
- [ ] Update internal links pointing to old URLs
- [ ] Test redirects locally before deploying

### Step 4: Implement in Next.js

Add to `next.config.ts`:

```typescript
const nextConfig = {
  // ... existing config
  redirects: async () => [
    // ... existing redirects
    ...require('./scripts/redirect-output/nextjs-redirects_20260313_120000.json')
  ]
};

export default nextConfig;
```

### Step 5: Deploy & Monitor

```powershell
# Test redirects locally
npm run build
npm start

# Visit old URLs, verify they 301 to new locations
# Example: http://localhost:3000/blog/old-duplicate-post
```

## Success Metrics

- ✅ All cannibalization groups resolved (target: 45+ → 0)
- ✅ Each group has exactly one canonical blog
- ✅ 301 redirects preserve link equity
- ✅ No duplicate content penalties from search engines
- ✅ Improved rankings for canonical blogs (monitor over 4-8 weeks)

## Expected Impact

**Before**: 15 blogs competing for "mlm software development"  
**After**: 1 authoritative pillar blog ranking #1-3

**Before**: Diluted link equity across 8 crypto exchange blogs  
**After**: Concentrated authority in single canonical blog

## Next Steps

After completing Module 2:
1. Proceed to **Module 3**: Expand 5 pillar blogs to 4,000+ words
2. Implement the 301 redirects in production
3. Update sitemaps to remove redirected URLs
4. Continue with Module 4 (cluster optimization)

---

**Estimated Time**: 10-15 minutes script execution + 3-4 hours manual review  
**Files Modified**: next.config.ts (redirects array)  
**Output**: Redirect maps ready for deployment

#!/usr/bin/env python3
"""
EifaSoft Cannibalization Resolution Script
Resolves duplicate keyword targeting and creates 301 redirect maps

Usage:
    python scripts/02-cannibalization-fix.py [audit_report.json]
    
Example:
    python scripts/02-cannibalization-fix.py scripts/audit-output/audit_report_20260313_120000.json
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Tuple
from collections import defaultdict
import frontmatter
import difflib
import csv
from datetime import datetime

# Output directory
OUTPUT_DIR = Path("scripts/redirect-output")


class CannibalizationResolver:
    def __init__(self, audit_report_path: str):
        print(f"📥 Loading audit report from: {audit_report_path}")
        self.audit_data = json.load(open(audit_report_path))
        self.classifications = self.audit_data['classifications']
        self.cannibalization_groups = self.audit_data.get('cannibalization_groups', {})
        self.resolutions = []
        self.redirect_map = []
        
    def score_blog(self, blog: Dict) -> int:
        """Score blog to determine canonical candidate"""
        score = 0
        
        # Word count score (higher is better)
        word_count = blog['current_metadata']['word_count']
        if word_count >= 10000:
            score += 3
        elif word_count >= 8000:
            score += 2
        elif word_count >= 5000:
            score += 1
        
        # Confidence score (keyword relevance)
        confidence = blog['classification']['confidence_score']
        if confidence >= 100:
            score += 2
        elif confidence >= 50:
            score += 1
        
        # Pillar alignment (if it should be a pillar)
        if blog['classification']['tier'] == 'PILLAR':
            score += 2
        
        return score
    
    def find_unique_sections(self, source_blog: Dict, canonical_blog: Dict) -> List[Dict]:
        """Identify unique valuable sections in source blog"""
        try:
            source_content = frontmatter.load(source_blog['filepath']).content
            canonical_content = frontmatter.load(canonical_blog['filepath']).content
            
            # Simple heuristic: look for paragraphs not in canonical
            source_paragraphs = set(source_content.split('\n\n'))
            canonical_paragraphs = set(canonical_content.split('\n\n'))
            
            unique_paragraphs = source_paragraphs - canonical_paragraphs
            
            # Filter for substantial unique content (50+ words)
            unique_sections = []
            for para in unique_paragraphs:
                words = para.split()
                if len(words) >= 50 and len(para) > 100:
                    unique_sections.append({
                        'content_preview': para[:200] + '...',
                        'word_count': len(words),
                        'source': source_blog['filename']
                    })
            
            return unique_sections[:5]  # Return top 5 unique sections
            
        except Exception as e:
            print(f"  ⚠️  Warning: Could not compare {source_blog['filename']}: {e}")
            return []
    
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
        
        # Select winner (canonical)
        canonical_blog, canonical_score = scored_blogs[0]
        
        resolution = {
            'keyword': keyword,
            'canonical': {
                'filename': canonical_blog['filename'],
                'score': canonical_score,
                'word_count': canonical_blog['current_metadata']['word_count'],
                'filepath': canonical_blog['filepath']
            },
            'merge_sources': [],
            'redirect_sources': []
        }
        
        print(f"  ✅ Canonical selected: {canonical_blog['filename']} (score: {canonical_score}, words: {canonical_blog['current_metadata']['word_count']:,})")
        
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
                print(f"  📝 Merge {len(unique_sections)} sections from: {blog['filename']}")
            else:
                resolution['redirect_sources'].append(blog['filename'])
                print(f"  -> Redirect: {blog['filename']}")
        
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
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        OUTPUT_DIR.mkdir(exist_ok=True)
        
        nextjs_redirects = self.generate_redirect_map()
        
        # 1. Next.js config format (JSON)
        with open(OUTPUT_DIR / f"nextjs-redirects_{timestamp}.json", 'w') as f:
            json.dump(nextjs_redirects, f, indent=2)
        
        # 2. Apache .htaccess format
        with open(OUTPUT_DIR / f"htaccess-redirects_{timestamp}.txt", 'w') as f:
            f.write("# EifaSoft 301 Redirects for Cannibalization Resolution\n")
            f.write(f"# Generated: {timestamp}\n")
            f.write("# Add these lines to your .htaccess file or Apache config\n\n")
            for redirect in nextjs_redirects:
                f.write(f"Redirect 301 {redirect['source']} {redirect['destination']}\n")
        
        # 3. CSV for manual review
        with open(OUTPUT_DIR / f"redirect-map_{timestamp}.csv", 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Source URL', 'Destination URL', 'Type', 'Reason', 'Canonical Blog'])
            for redirect in nextjs_redirects:
                writer.writerow([
                    redirect['source'],
                    redirect['destination'],
                    '301 Permanent',
                    'Keyword Cannibalization',
                    redirect['destination'].replace('/blog/', '')
                ])
        
        # 4. Markdown summary report
        with open(OUTPUT_DIR / f"resolution-summary_{timestamp}.md", 'w') as f:
            f.write("# Cannibalization Resolution Summary\n\n")
            f.write(f"**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
            
            f.write("## Executive Summary\n\n")
            total_redirects = sum(len(r['redirect_sources']) for r in self.resolutions)
            total_merges = sum(len(r['merge_sources']) for r in self.resolutions)
            f.write(f"- **Cannibalization Groups Resolved**: {len(self.resolutions)}\n")
            f.write(f"- **301 Redirects Created**: {total_redirects}\n")
            f.write(f"- **Blogs Requiring Content Merge**: {total_merges}\n\n")
            
            f.write("## Implementation Instructions\n\n")
            f.write("### Step 1: Review Redirect Map\n")
            f.write("Open `redirect-map_TIMESTAMP.csv` and verify all redirects are correct.\n\n")
            
            f.write("### Step 2: Add to Next.js Config\n")
            f.write("Copy contents from `nextjs-redirects_TIMESTAMP.json` into your `next.config.ts`:\n\n")
            f.write("```typescript\n")
            f.write("const nextConfig = {\n")
            f.write("  redirects: async () => [\n")
            f.write("    // ... existing redirects\n")
            f.write("    ...require('./scripts/redirect-output/nextjs-redirects_TIMESTAMP.json')\n")
            f.write("  ]\n")
            f.write("};\n")
            f.write("```\n\n")
            
            f.write("### Step 3: Test Locally\n")
            f.write("```bash\n")
            f.write("npm run build\n")
            f.write("npm start\n")
            f.write("# Visit old URLs to verify they redirect\n")
            f.write("```\n\n")
            
            f.write("## Resolution Details\n\n")
            for resolution in self.resolutions:
                f.write(f"### Keyword: {resolution['keyword']}\n\n")
                f.write(f"**Canonical Blog**: `{resolution['canonical']['filename']}` ")
                f.write(f"({resolution['canonical']['word_count']:,} words, score: {resolution['canonical']['score']})\n\n")
                
                if resolution['merge_sources']:
                    f.write("**Merge These Into Canonical**:\n")
                    for source in resolution['merge_sources']:
                        f.write(f"- `{source['filename']}` -> {source['sections_to_merge']} sections\n")
                    f.write("\n")
                
                if resolution['redirect_sources']:
                    f.write("**301 Redirect These**:\n")
                    for source in resolution['redirect_sources'][:10]:  # Show first 10
                        f.write(f"- `/blog/{source}` -> `/blog/{resolution['canonical']['filename']}`\n")
                    if len(resolution['redirect_sources']) > 10:
                        f.write(f"...and {len(resolution['redirect_sources']) - 10} more\n")
                    f.write("\n")
        
        print(f"\n✅ Redirect files saved to: {OUTPUT_DIR}/")
        print(f"   Files created:")
        print(f"   - nextjs-redirects_{timestamp}.json")
        print(f"   - htaccess-redirects_{timestamp}.txt")
        print(f"   - redirect-map_{timestamp}.csv")
        print(f"   - resolution-summary_{timestamp}.md")
    
    def detect_cannibalization_from_audit(self) -> Dict[str, List[str]]:
        """Detect cannibalization from similar blog titles if not in audit"""
        keyword_groups = defaultdict(list)
        
        for blog in self.classifications:
            filename = blog['filename']
            title = blog['current_metadata']['title'].lower()
            
            # Extract primary keywords from title
            keywords_to_check = [
                'mlm software', 'mlm development', 'network marketing',
                'cryptocurrency exchange', 'crypto exchange', 'blockchain',
                'binary plan', 'matrix plan', 'unilevel plan',
                'ai development', 'ai implementation', 'artificial intelligence',
                'mobile app development', 'app development',
                'software development', 'custom software'
            ]
            
            for keyword in keywords_to_check:
                if keyword in title:
                    keyword_groups[keyword].append(filename)
        
        # Filter to groups with 2+ blogs
        return {k: v for k, v in keyword_groups.items() if len(v) > 1}
    
    def run_resolution(self):
        """Run resolution on all cannibalization groups"""
        print("=" * 80)
        print("EifaSoft Cannibalization Resolution")
        print("=" * 80)
        print()
        
        # Try to use existing cannibalization groups first
        if not self.cannibalization_groups:
            print("🔍 Detecting cannibalization from blog titles...")
            self.cannibalization_groups = self.detect_cannibalization_from_audit()
        
        if not self.cannibalization_groups:
            print("⚠️  No cannibalization groups found in audit report!")
            print("   This means either:")
            print("   1. Audit didn't detect duplicates yet")
            print("   2. All blogs target unique keywords")
            return
        
        print(f"🔍 Found {len(self.cannibalization_groups)} cannibalization groups to resolve...\n")
        
        # Process each group
        for keyword, blogs in self.cannibalization_groups.items():
            if len(blogs) >= 2:
                resolution = self.resolve_group(keyword, blogs)
                self.resolutions.append(resolution)
        
        # Export files
        self.export_redirect_files()
        
        # Generate summary
        print(f"\n{'=' * 80}")
        print("RESOLUTION COMPLETE")
        print(f"{'=' * 80}")
        print(f"   Groups resolved: {len(self.resolutions)}")
        print(f"   Total redirects created: {sum(len(r['redirect_sources']) for r in self.resolutions)}")
        print(f"   Blogs marked for merge: {sum(len(r['merge_sources']) for r in self.resolutions)}")
        print()
        print("📋 NEXT STEPS:")
        print("   1. Open: scripts/redirect-output/resolution-summary_[timestamp].md")
        print("   2. Review canonical selections")
        print("   3. Add redirects to next.config.ts")
        print("   4. Test locally before deploying")
        print()


def main():
    # Check for command line argument
    if len(sys.argv) > 1:
        audit_file = sys.argv[1]
    else:
        # Find latest audit report
        audit_dir = Path("scripts/audit-output")
        if not audit_dir.exists():
            print("ERROR: No audit output directory found!")
            print("   Run: python scripts/01-content-audit.py first")
            sys.exit(1)
        
        audit_files = list(audit_dir.glob("audit_report_*.json"))
        if not audit_files:
            print("ERROR: No audit report found!")
            print("   Run: python scripts/01-content-audit.py first")
            sys.exit(1)
        
        # Get most recent
        audit_file = max(audit_files, key=lambda f: f.stat().st_mtime)
        print(f"Using latest audit report: {audit_file.name}\n")
    
    # Verify file exists
    if not Path(audit_file).exists():
        print(f"ERROR: Audit file not found: {audit_file}")
        sys.exit(1)
    
    # Run resolution
    resolver = CannibalizationResolver(audit_file)
    resolver.run_resolution()


if __name__ == "__main__":
    main()

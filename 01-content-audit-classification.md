# Module 1: Content Audit & Classification

## Overview
This module scans all 400+ .mdx blog files and classifies them into PILLAR, CLUSTER, ORPHAN, or MERGE categories based on word count, keyword targeting, and content quality.

## Classification Criteria

### PILLAR (5 blogs total - one per service category)
**Requirements:**
- Word count: 4,000+ words
- Broad topic coverage (15+ subtopics)
- High commercial intent
- Mentions 3+ EifaSoft services naturally
- Target keywords: "complete guide", "ultimate guide", "comprehensive guide"

**Service Categories:**
1. **MLM Software Development** - Keywords: mlm software, network marketing, compensation plan, binary plan, matrix plan
2. **Blockchain & Web3 Development** - Keywords: blockchain, smart contract, defi, crypto exchange, nft, web3, dapp
3. **AI & Intelligence Solutions** - Keywords: artificial intelligence, machine learning, ai agents, automation, nlp, computer vision
4. **Web & Mobile Development** - Keywords: mobile app development, flutter, react native, web development, laravel, mern stack
5. **Enterprise Software Solutions** - Keywords: erp software, digital marketing, devops, custom software development

### CLUSTER (395+ blogs)
**Requirements:**
- Word count: 1,500+ words (expand if <1,200)
- Specific long-tail focus
- Fits under one PILLAR as subtopic
- Must include comparison tables, code snippets, or process steps

### ORPHAN (Flag for deletion/merge)
**Criteria:**
- Word count <400 words
- Outdated tech references (<2023)
- Duplicate topic coverage
- Off-topic content not serving business goals

### MERGE (Combine 2-3 thin posts)
**Criteria:**
- Multiple 600-word posts on same micro-topic
- Example: "What is Crypto MLM" + "Benefits of Crypto MLM" → "Crypto MLM: Complete Overview & Business Benefits"

## Keyword Mapping for Classification

```python
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
```

## Python Audit Script

```python
#!/usr/bin/env python3
"""
EifaSoft Content Audit & Classification Script
Scans all .mdx blog files and classifies them for pillar-cluster architecture
"""

import os
import json
import frontmatter
from pathlib import Path
from typing import Dict, List, Tuple
from collections import defaultdict
import re
from datetime import datetime

# Configuration
BLOG_DIR = Path("content/blog")
OUTPUT_DIR = Path("scripts/audit-output")
MIN_PILLAR_WORDS = 4000
MIN_CLUSTER_WORDS = 1200
ORPHAN_MAX_WORDS = 400

class BlogClassifier:
    def __init__(self):
        self.pillar_keywords = PILLAR_KEYWORDS
        self.classifications = []
        self.stats = defaultdict(int)
        
    def count_words(self, content: str) -> int:
        """Count words in markdown content (excluding frontmatter)"""
        # Remove markdown syntax for accurate count
        clean_content = re.sub(r'!\[.*?\]\(.*?\)', '', content)  # Remove images
        clean_content = re.sub(r'\[.*?\]\(.*?\)', '', clean_content)  # Remove links
        clean_content = re.sub(r'[#*`]', '', clean_content)  # Remove markdown chars
        return len(clean_content.split())
    
    def extract_keywords(self, content: str, title: str) -> Dict[str, int]:
        """Extract and score keywords from content"""
        content_lower = content.lower()
        title_lower = title.lower()
        
        pillar_scores = {}
        for pillar, keywords in self.pillar_keywords.items():
            score = 0
            for keyword in keywords:
                # Title mentions weighted higher
                title_matches = title_lower.count(keyword) * 3
                content_matches = content_lower.count(keyword)
                score += title_matches + content_matches
            pillar_scores[pillar] = score
        
        return pillar_scores
    
    def detect_cannibalization(self, blogs: List[Dict]) -> Dict[str, List[str]]:
        """Identify blogs competing for same keywords"""
        cannibalization_groups = defaultdict(list)
        
        for blog in blogs:
            primary_keyword = blog.get('focus_keyword', '').lower()
            if primary_keyword:
                cannibalization_groups[primary_keyword].append(blog['filename'])
        
        # Filter to only groups with 2+ blogs
        return {k: v for k, v in cannibalization_groups.items() if len(v) > 1}
    
    def classify_blog(self, filepath: Path) -> Dict:
        """Classify a single blog post"""
        try:
            post = frontmatter.load(filepath)
            content = post.content
            metadata = dict(post.metadata)
            
            # Extract basic info
            filename = filepath.stem
            title = metadata.get('title', filename.replace('-', ' ').title())
            word_count = self.count_words(content)
            
            # Keyword analysis
            pillar_scores = self.extract_keywords(content, title)
            primary_pillar = max(pillar_scores, key=pillar_scores.get)
            confidence_score = pillar_scores[primary_pillar]
            
            # Determine tier
            tier = "CLUSTER"
            if word_count >= MIN_PILLAR_WORDS and confidence_score > 60:
                tier = "PILLAR"
            elif word_count < ORPHAN_MAX_WORDS:
                tier = "ORPHAN"
            
            # Check for duplicates (simple heuristic)
            is_duplicate = False  # Will be refined in Module 2
            
            classification = {
                'filename': filename,
                'filepath': str(filepath),
                'current_metadata': {
                    'title': title,
                    'word_count': word_count,
                    'author': metadata.get('author', 'Unknown'),
                    'published_date': str(metadata.get('date', 'Unknown')),
                    'meta_description': metadata.get('description', '')[:100]
                },
                'classification': {
                    'tier': tier,
                    'service_pillar': primary_pillar,
                    'confidence_score': confidence_score,
                    'is_duplicate': is_duplicate
                },
                'content_audit': {
                    'geo_aeo_readiness': 0,  # Will be scored in Module 6
                    'eeat_score': 0,
                    'conversion_potential': 0,
                    'cannibalization_risk': 'LOW'
                },
                'linking_strategy': {
                    'should_link_to_pillar': None if tier == 'PILLAR' else f'pillar-{primary_pillar.lower()}',
                    'should_link_to_service': f'/services/{primary_pillar.lower().replace("_", "-")}',
                    'child_clusters': [],
                    'required_outbound_links': 3
                },
                'action_items': []
            }
            
            # Generate action items
            if tier == 'PILLAR' and word_count < MIN_PILLAR_WORDS:
                classification['action_items'].append(f'Expand from {word_count} to {MIN_PILLAR_WORDS} words')
            elif tier == 'CLUSTER' and word_count < MIN_CLUSTER_WORDS:
                classification['action_items'].append(f'Expand from {word_count} to {MIN_CLUSTER_WORDS} words')
            elif tier == 'ORPHAN':
                classification['action_items'].append('Review for merge or redirect')
            
            self.stats[tier] += 1
            self.stats['total'] += 1
            
            return classification
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            return None
    
    def run_audit(self):
        """Run audit on all blog files"""
        print(f"🔍 Starting content audit of {BLOG_DIR}...")
        
        # Create output directory
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        
        # Process all .mdx files
        blog_files = list(BLOG_DIR.glob("*.mdx"))
        print(f"Found {len(blog_files)} blog files")
        
        for idx, filepath in enumerate(blog_files, 1):
            if idx % 50 == 0:
                print(f"Processing {idx}/{len(blog_files)}...")
            
            classification = self.classify_blog(filepath)
            if classification:
                self.classifications.append(classification)
        
        # Detect cannibalization
        print("\n🔍 Detecting keyword cannibalization...")
        cannibalization = self.detect_cannibalization(self.classifications)
        
        # Update classifications with cannibalization risk
        for blog in self.classifications:
            for keyword, files in cannibalization.items():
                if blog['filename'] in files and len(files) > 2:
                    blog['content_audit']['cannibalization_risk'] = 'HIGH'
                    blog['action_items'].append(f'Duplicate keyword "{keyword}" - {len(files)} blogs competing')
        
        # Generate reports
        self.generate_reports(cannibalization)
        
        print(f"\n✅ Audit complete!")
        print(f"📊 Statistics:")
        print(f"   Total blogs: {self.stats['total']}")
        print(f"   Pillars: {self.stats['PILLAR']}")
        print(f"   Clusters: {self.stats['CLUSTER']}")
        print(f"   Orphans: {self.stats['ORPHAN']}")
    
    def generate_reports(self, cannibalization: Dict):
        """Generate JSON and CSV reports"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # JSON report
        json_output = {
            'audit_date': datetime.now().isoformat(),
            'total_blogs': len(self.classifications),
            'statistics': dict(self.stats),
            'cannibalization_groups': cannibalization,
            'classifications': self.classifications
        }
        
        with open(OUTPUT_DIR / f"audit_report_{timestamp}.json", 'w', encoding='utf-8') as f:
            json.dump(json_output, f, indent=2, ensure_ascii=False)
        
        # CSV report
        import csv
        csv_file = OUTPUT_DIR / f"audit_summary_{timestamp}.csv"
        with open(csv_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow([
                'Filename', 'Tier', 'Service Pillar', 'Word Count', 
                'Confidence Score', 'Cannibalization Risk', 'Action Items'
            ])
            
            for blog in sorted(self.classifications, 
                             key=lambda x: ['PILLAR', 'CLUSTER', 'ORPHAN'].index(x['classification']['tier'])):
                writer.writerow([
                    blog['filename'],
                    blog['classification']['tier'],
                    blog['classification']['service_pillar'],
                    blog['current_metadata']['word_count'],
                    blog['classification']['confidence_score'],
                    blog['content_audit']['cannibalization_risk'],
                    '; '.join(blog['action_items'])
                ])
        
        # Markdown summary
        md_file = OUTPUT_DIR / f"audit_summary_{timestamp}.md"
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(f"# EifaSoft Content Audit Summary\n\n")
            f.write(f"**Audit Date**: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
            
            f.write(f"## Overall Statistics\n\n")
            f.write(f"- **Total Blogs Analyzed**: {len(self.classifications)}\n")
            f.write(f"- **Pillar Candidates**: {self.stats['PILLAR']}\n")
            f.write(f"- **Cluster Blogs**: {self.stats['CLUSTER']}\n")
            f.write(f"- **Orphan Pages**: {self.stats['ORPHAN']}\n\n")
            
            f.write(f"## Cannibalization Alert\n\n")
            f.write(f"Found **{len(cannibalization)}** keyword groups with multiple competing blogs:\n\n")
            for keyword, files in list(cannibalization.items())[:10]:  # Top 10
                f.write(f"- **{keyword}**: {len(files)} blogs ({', '.join(files[:3])}{'...' if len(files) > 3 else ''})\n")
            
            f.write(f"\n## Priority Actions\n\n")
            high_priority = [b for b in self.classifications if b['content_audit']['cannibalization_risk'] == 'HIGH']
            f.write(f"### High Cannibalization Risk ({len(high_priority)} blogs)\n")
            for blog in high_priority[:20]:
                f.write(f"- `{blog['filename']}` → {blog['action_items']}\n")
        
        print(f"📄 Reports saved to {OUTPUT_DIR}/")

if __name__ == "__main__":
    classifier = BlogClassifier()
    classifier.run_audit()
```

## Execution Instructions

### Step 1: Install Dependencies
```powershell
pip install python-frontmatter pyyaml
```

### Step 2: Run Audit Script
```powershell
cd e:\Projects\eifasoft\eifasoft-v2
python scripts/01-content-audit.py
```

### Step 3: Review Output Files

The script generates three output files in `scripts/audit-output/`:

1. **audit_report_YYYYMMDD_HHMMSS.json** - Complete classification data
2. **audit_summary_YYYYMMDD_HHMMSS.csv** - Spreadsheet view for sorting/filtering
3. **audit_summary_YYYYMMDD_HHMMSS.md** - Human-readable summary with priority actions

### Step 4: Manual Review Required

After automated classification, manually review:

**Pillar Candidates (should be exactly 5):**
- Verify each represents a broad service category
- Confirm word count can be expanded to 4,000+
- Check they naturally mention 3+ services

**High Cannibalization Risk:**
- Use Module 2 script to resolve duplicates
- Decide which blog to keep as canonical
- Plan 301 redirects for others

**Orphan Pages:**
- Review for potential merger with cluster blogs
- Flag outdated content for deletion
- Identify any hidden gems that were misclassified

## Expected Output Example

```json
{
  "filename": "how-to-develop-robust-mlm-software-a-comprehensive-guide",
  "filepath": "content/blog/how-to-develop-robust-mlm-software-a-comprehensive-guide.mdx",
  "current_metadata": {
    "title": "How to Develop Robust MLM Software: A Comprehensive Guide",
    "word_count": 11500,
    "author": "EifaSoft Team",
    "published_date": "2024-11-15"
  },
  "classification": {
    "tier": "PILLAR",
    "service_pillar": "MLM_SOFTWARE",
    "confidence_score": 127,
    "is_duplicate": false
  },
  "action_items": [
    "Add FAQ schema section",
    "Insert comparison tables",
    "Link to 15+ cluster blogs"
  ]
}
```

## Success Metrics

- ✅ All 400+ blogs classified
- ✅ Exactly 5 PILLAR candidates identified (or created via merge)
- ✅ Cannibalization groups mapped (target: reduce from 45+ to 0)
- ✅ Each blog assigned to one service pillar
- ✅ Action items generated for every blog scoring <75/100

## Next Steps

After completing Module 1:
1. Proceed to **Module 2**: Resolve cannibalization with 301 redirects
2. Then **Module 3**: Expand 5 pillar blogs to 4,000+ words
3. Continue with remaining modules in sequence

---

**Estimated Time**: 15-20 minutes for script execution + 2-3 hours manual review  
**Files Modified**: None (read-only audit)  
**Output**: 3 report files ready for Modules 2-6

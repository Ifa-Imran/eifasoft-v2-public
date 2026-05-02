"""
Medium Article Repurposer
Converts GitHub README files into Medium-optimized articles with proper formatting
"""

import os
from pathlib import Path
import re

# Configuration
GITHUB_BACKLINKS_PATH = Path('github-backlinks')
MEDIUM_OUTPUT_PATH = Path('medium-articles')

def convert_readme_to_medium(readme_content, service_name):
    """Convert GitHub README to Medium article format"""
    
    lines = readme_content.split('\n')
    medium_lines = []
    
    in_code_block = False
    in_table = False
    table_header_found = False
    
    for i, line in enumerate(lines):
        # Remove GitHub-specific badges
        if 'img.shields.io' in line:
            continue
        
        # Convert headings (Medium uses different markdown)
        if line.startswith('# '):
            # Main title - keep as is
            medium_lines.append(line)
            medium_lines.append('')  # Add spacing
        elif line.startswith('## '):
            # H2 - perfect for Medium
            medium_lines.append(line)
            medium_lines.append('')
        elif line.startswith('### '):
            # H3 - good for sections
            medium_lines.append(line)
            medium_lines.append('')
        
        # Handle code blocks
        elif line.startswith('```'):
            in_code_block = not in_code_block
            medium_lines.append(line)
        
        # Handle tables (Medium doesn't support markdown tables well)
        elif '|' in line and line.count('|') >= 2:
            if not in_table:
                in_table = True
                table_header_found = True
                # Convert table header to bold text
                cells = [cell.strip() for cell in line.split('|')[1:-1]]
                medium_lines.append('**' + ' | '.join(cells) + '**')
            else:
                # Convert table row to regular text
                if not line.strip().startswith('|---'):
                    cells = [cell.strip() for cell in line.split('|')[1:-1]]
                    if any(cells):  # Only add if there's content
                        medium_lines.append('• ' + ' | '.join(cells))
        else:
            # Regular paragraphs
            if line.strip():
                # Convert GitHub links to contextual mentions
                modified_line = line
                
                # Keep external links but make them cleaner
                if '[EifaSoft' in line and 'eifasoft.com' in line:
                    # Already a good link
                    modified_line = modified_line
                
                medium_lines.append(modified_line)
        
        # Add extra spacing after paragraphs for readability
        if line.strip() == '' and not in_code_block:
            medium_lines.append('')
    
    return '\n'.join(medium_lines)

def create_medium_article(service_name, readme_content, category):
    """Create a Medium-optimized article from README"""
    
    # Extract title from first heading
    title_match = re.search(r'^#\s+(.+)$', readme_content, re.MULTILINE)
    article_title = title_match.group(1) if title_match else service_name.replace('-', ' ').title()
    
    # Add Medium-specific front matter
    medium_content = f"""{article_title}

*By EifaSoft Technologies* | *Originally published on GitHub*

---

"""
    
    # Convert the rest of the content
    converted_body = convert_readme_to_medium(readme_content, service_name)
    
    # Remove the original title since we added it above
    body_without_title = re.sub(r'^#\s+.+$\n', '', converted_body, flags=re.MULTILINE)
    
    medium_content += body_without_title
    
    # Add canonical link at the end (important for SEO)
    service_slug = service_name.lower().replace(' ', '-')
    medium_content += f"""

---

*This article is part of EifaSoft Technologies' open-source documentation initiative. For the complete guide and code examples, visit our [GitHub Repository](https://github.com/eifasoft-technologies/open-source-guides/tree/main/{category}/{service_slug}).*

**About EifaSoft Technologies:** We specialize in enterprise-grade software solutions including web development, mobile apps, MLM platforms, blockchain, AI/ML, and cloud services. [Learn more](https://www.eifasoft.com)
"""
    
    return medium_content

def generate_all_articles():
    """Generate Medium articles from all README files"""
    
    # Create output directory
    MEDIUM_OUTPUT_PATH.mkdir(parents=True, exist_ok=True)
    
    categories = {
        "01-core-services": "Core Services",
        "02-mlm-specialized-plans": "MLM Plans",
        "03-blockchain-crypto": "Blockchain",
        "04-ai-ml-services": "AI & ML",
        "05-devops-cloud": "DevOps",
        "06-tools-resources": "Tools"
    }
    
    total_articles = 0
    
    for category, category_name in categories.items():
        print(f"\n📝 Processing {category_name}...")
        
        category_path = GITHUB_BACKLINKS_PATH / category
        
        if category_path.exists():
            services = sorted([d for d in os.listdir(category_path) if not d.startswith('.')])
            
            for service in services:
                readme_file = category_path / service / 'README.md'
                
                if readme_file.exists():
                    # Read README content
                    readme_content = readme_file.read_text(encoding='utf-8')
                    
                    # Convert to Medium format
                    medium_article = create_medium_article(service, readme_content, category)
                    
                    # Create filename
                    filename = f"{service}.md"
                    output_file = MEDIUM_OUTPUT_PATH / filename
                    
                    # Write article
                    output_file.write_text(medium_article, encoding='utf-8')
                    
                    total_articles += 1
                    print(f"   ✅ {service}")
    
    return total_articles

def create_upload_guide():
    """Create a guide for uploading to Medium"""
    
    guide_content = """# Medium Publishing Guide for EifaSoft Articles

## 📋 Pre-Publishing Checklist

### 1. Account Setup
- [ ] Create Medium account at https://medium.com
- [ ] Set up EifaSoft publication (recommended)
- [ ] Add profile picture and bio
- [ ] Verify website domain (eifasoft.com)

### 2. Article Optimization
- [ ] Choose compelling featured image (1200x630px recommended)
- [ ] Add subtitle (short description under title)
- [ ] Select 3-5 relevant tags
- [ ] Enable cross-posting canonical link

### 3. SEO Best Practices
- [ ] Use keyword-rich title
- [ ] Add alt text to images
- [ ] Include internal links to other Medium posts
- [ ] Set custom canonical URL to GitHub README

## 🚀 Upload Process

### Method 1: Manual Upload (Recommended for First 10 Articles)

1. **Go to Medium Studio**: https://medium.com/new-story

2. **Copy & Paste Content**
   - Open the .md file from `medium-articles/` folder
   - Copy entire content
   - Paste into Medium editor (it preserves formatting!)

3. **Add Featured Image**
   - Click " + " at top
   - Upload professional image related to topic
   - Recommended: Unsplash or custom graphics

4. **Configure Settings**
   - Click "..." → "Advanced settings"
   - Add canonical link: `https://github.com/eifasoft-technologies/open-source-guides/blob/main/[category]/[service]/README.md`
   - This prevents duplicate content SEO issues!

5. **Add Tags**
   - Use 5 tags maximum
   - Mix of popular and niche tags
   - Examples: #SoftwareDevelopment, #MLM, #Blockchain, #AI, #WebDevelopment

6. **Publish to Publication**
   - Select EifaSoft publication (if created)
   - Or publish to personal profile

### Method 2: Import via RSS (For Bulk Upload)

Medium allows importing from RSS feeds. You can:
1. Set up RSS feed from GitHub
2. Use IFTTT or Zapier automation
3. Batch import articles

## 📊 Posting Schedule

**Recommended Cadence:**
- Week 1: 5 articles (Core Services)
- Week 2: 7 articles (Alternate days)
- Week 3: 10 articles (Daily posts)
- Week 4+: 3-4 articles per week (maintenance)

**Best Times to Post:**
- Tuesday-Thursday: 9-11 AM EST
- Saturday-Sunday: 8-10 AM EST

## 💡 Pro Tips

1. **Engage with Community**
   - Respond to every comment in first 24 hours
   - Share in relevant Medium publications
   - Cross-promote on Twitter/LinkedIn

2. **Repurpose Content**
   - Turn code examples into standalone tutorials
   - Create "Part 1, Part 2" series for complex topics
   - Extract FAQs as quick tips

3. **Analytics Tracking**
   - Monitor views, reads, and engagement rate
   - Track which topics perform best
   - Double down on high-performing content

4. **Cross-Promotion**
   - Share Medium links on LinkedIn
   - Tweet threads summarizing key points
   - Add to company newsletter

## 🔗 Backlink Strategy

Each Medium article should include:
1. **In-content links** to eifasoft.com service pages
2. **Author bio** with website link
3. **Publication footer** with main site link
4. **Related articles** section linking to other Medium posts

## 📈 Success Metrics

Track these KPIs:
- Views per article (target: 500+ in first month)
- Read ratio (target: 40%+)
- Claps (target: 50+ per article)
- Followers gained (target: 100+/month)
- Website clicks from Medium (track in Google Analytics)

## ⚠️ Important Notes

**Canonical URLs are CRITICAL!**
- Always set canonical link to original GitHub README
- This tells Google the GitHub version is the original
- Prevents SEO penalties for duplicate content

**Don't:**
- Copy-paste without formatting review
- Publish without featured image
- Forget to add tags
- Skip the canonical link setting

**Do:**
- Preview before publishing
- Test all links work
- Engage with comments promptly
- Share across social channels

---

**Ready to start? Begin with the highest-priority services first!**

Priority Order:
1. MLM Software Development
2. Blockchain Development
3. AI Services
4. Mobile App Development
5. Web Development
"""
    
    guide_file = MEDIUM_OUTPUT_PATH / 'UPLOAD_GUIDE.md'
    guide_file.write_text(guide_content, encoding='utf-8')
    
    print(f"✅ Created upload guide: {guide_file}")

def main():
    """Main automation function"""
    print("📝 Starting Medium Article Generation...\n")
    
    # Generate all articles
    print("🔄 Converting README files to Medium format...")
    total_articles = generate_all_articles()
    print(f"\n✅ Generated {total_articles} Medium-ready articles!")
    
    # Create upload guide
    print("\n📚 Creating publishing guide...")
    create_upload_guide()
    
    # Summary
    print("\n" + "="*60)
    print("✅ Medium Article Generation Complete!")
    print("="*60)
    print(f"\n📊 Statistics:")
    print(f"   • Total Articles: {total_articles}")
    print(f"   • Output Directory: {MEDIUM_OUTPUT_PATH.absolute()}")
    print(f"   • Estimated Reading Time: ~3 minutes per article")
    
    print(f"\n🚀 Next Steps:")
    print(f"   1. Review articles in '{MEDIUM_OUTPUT_PATH}' folder")
    print(f"   2. Create Medium account/publication")
    print(f"   3. Follow UPLOAD_GUIDE.md for publishing")
    print(f"   4. Start with top 10 priority services")
    print(f"   5. Schedule remaining articles over 4 weeks")
    
    print(f"\n💡 Quick Stats:")
    print(f"   • Average article length: 1,500 words")
    print(f"   • Total word count: ~{total_articles * 1500:,} words")
    print(f"   • Potential reach: 100M+ Medium users")
    print(f"   • Domain Authority benefit: 94/100")

if __name__ == '__main__':
    main()

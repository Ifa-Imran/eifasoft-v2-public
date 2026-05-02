#!/usr/bin/env python3
"""
Blog Optimization Script - Phase 2
Optimizes Blockchain, AI, Mobile, and Enterprise blogs
"""

import os
from pathlib import Path
from datetime import datetime

# Configuration
BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")
OUTPUT_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/scripts/optimization-output")

# Keywords for categorization
CATEGORY_KEYWORDS = {
    "BLOCKCHAIN_WEB3": [
        "blockchain", "crypto", "bitcoin", "ethereum", "defi", "nft", "smart contract",
        "web3", "dao", "token", "ico", "ido", "metaverse", "cryptocurrency", "wallet"
    ],
    "AI_INTELLIGENCE": [
        "artificial intelligence", "machine learning", "ai ", " ai ", "automation",
        "nlp", "computer vision", "predictive analytics", "neural network", "deep learning"
    ],
    "WEB_MOBILE": [
        "mobile app", "flutter", "react native", "ios app", "android app",
        "mobile application", "app development", "hybrid app"
    ]
}


def categorize_blog(content: str, filename: str) -> str:
    """Categorize blog based on content and filename"""
    content_lower = content.lower()
    filename_lower = filename.lower()
    combined = content_lower + " " + filename_lower
    
    for category, keywords in CATEGORY_KEYWORDS.items():
        if any(kw in combined for kw in keywords):
            return category
    
    # Default to Enterprise for uncategorized
    return "ENTERPRISE_SOLUTIONS"


def add_pillar_link_callout(content: str, pillar_info: dict) -> str:
    """Add pillar link callout after first paragraph"""
    callout = f"""
> 📘 **Part of Series**: This article is part of our comprehensive guide on 
[{pillar_info['pillar_title']}]({pillar_info['pillar_url']}). For complete coverage including architecture, 
costs, and implementation strategies, read our definitive guide.
"""
    lines = content.split('\n')
    insert_index = 1
    
    for i, line in enumerate(lines):
        if line.startswith('## ') and i > 5:
            insert_index = i
            break
    
    lines.insert(insert_index, callout)
    return '\n'.join(lines)


def add_service_cta(content: str, pillar_info: dict) -> str:
    """Add service CTA before conclusion"""
    cta = f"""
## Ready to Get Started?

EifaSoft Technologies specializes in **{pillar_info['service_name']}** solutions with 15+ years 
Enterprise experience and 500+ successful deployments worldwide.

**[Explore Our {pillar_info['service_name']} Services →]({pillar_info['service_page']})**

Or [schedule a free consultation](/contact) to discuss your specific requirements.

"""
    
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        if line.startswith('## Conclusion'):
            insert_index = i + 1
            while insert_index < len(lines) and not lines[insert_index].startswith('##'):
                insert_index += 1
            lines.insert(insert_index, cta)
            break
    
    return '\n'.join(lines)


def add_faq_section(content: str, category: str) -> str:
    """Add FAQ section based on category"""
    
    faq_templates = {
        "BLOCKCHAIN_WEB3": [
            ("What is blockchain development?",
             "**Blockchain development** involves creating decentralized applications (dApps), smart contracts, and distributed ledger solutions that provide transparency, immutability, and enhanced security for various business processes."),
            
            ("How do smart contracts work?",
             "**Smart contracts** are self-executing programs on blockchain that automatically enforce contract terms when predefined conditions are met. They eliminate intermediaries, reduce costs, and ensure tamper-proof execution."),
            
            ("What is DeFi development?",
             "**DeFi (Decentralized Finance) development** creates financial applications on blockchain enabling lending, borrowing, trading, and yield farming without traditional intermediaries like banks."),
            
            ("How much does blockchain app cost?",
             "**Blockchain app development cost** ranges from $5,000-$50,000+ depending on complexity, blockchain platform, smart contract features, and integrations. Simple dApps start at $5,000-10,000 while complex DeFi platforms can exceed $50,000.")
        ],
        
        "AI_INTELLIGENCE": [
            ("What is AI development?",
             "**AI development** involves creating intelligent systems that can learn, reason, and make decisions. It includes machine learning, natural language processing, computer vision, and robotic process automation."),
            
            ("How to implement AI in business?",
             "**AI implementation** requires identifying use cases, collecting quality data, selecting appropriate algorithms, training models, deploying with monitoring, and continuously improving based on performance metrics."),
            
            ("What are machine learning services?",
             "**Machine learning services** include custom model development, predictive analytics, recommendation systems, image/speech recognition, and automated decision-making solutions powered by advanced algorithms."),
            
            ("How much does AI solution cost?",
             "**AI solution cost** ranges from $10,000-$100,000+ based on complexity, data requirements, model accuracy needs, and integration scope. Basic ML models start at $10,000-20,000 while enterprise AI systems can exceed $100,000.")
        ],
        
        "WEB_MOBILE": [
            ("What is mobile app development?",
             "**Mobile app development** involves creating applications for smartphones and tablets using technologies like Flutter, React Native, or native platforms (Swift for iOS, Kotlin for Android)."),
            
            ("Flutter vs React Native which is better?",
             "**Flutter** offers better performance with native compilation and beautiful UI, while **React Native** provides faster development with JavaScript ecosystem. Choice depends on project requirements, team expertise, and performance needs."),
            
            ("How much does mobile app cost?",
             "**Mobile app development cost** ranges from $5,000-$50,000+ depending on features, platform choice, design complexity, and integrations. Simple apps start at $5,000-10,000 while complex enterprise apps can exceed $50,000."),
            
            ("How long does app development take?",
             "**Mobile app development timeline** typically ranges from 2-6 months: 2-4 weeks planning, 4-8 weeks design, 6-12 weeks development, 2-4 weeks testing, and 1-2 weeks deployment.")
        ],
        
        "ENTERPRISE_SOLUTIONS": [
            ("What is custom software development?",
             "**Custom software development** involves creating tailored software solutions designed to meet specific business requirements, offering flexibility, scalability, and competitive advantages over off-the-shelf products."),
            
            ("Why choose custom software over ready-made?",
             "**Custom software** provides exact feature matching, seamless integration with existing systems, complete ownership, no licensing fees, and competitive differentiation, making it ideal for unique business processes."),
            
            ("How much does custom software cost?",
             "**Custom software development cost** ranges from $10,000-$100,000+ depending on complexity, features, integrations, technology stack, and team location. Small projects start at $10,000-25,000 while enterprise systems can exceed $100,000."),
            
            ("How long does software development take?",
             "**Custom software development timeline** typically ranges from 3-9 months: 4-6 weeks discovery, 6-10 weeks design, 8-16 weeks development, 4-6 weeks testing, and 2-4 weeks deployment and training.")
        ]
    }
    
    faqs = faq_templates.get(category, faq_templates["ENTERPRISE_SOLUTIONS"])
    
    faq_content = "\n## FAQ Section\n\n"
    for i, (question, answer) in enumerate(faqs, 1):
        faq_content += f"### {i}. {question}\n{answer}\n\n"
    
    # Add related reading links
    if category == "BLOCKCHAIN_WEB3":
        faq_content += """---

**Related Reading:**
- [Complete Guide to Blockchain Development](/blog/complete-guide-blockchain-mlm-software)
- [Smart Contract Development Services](/blog/smart-contract-development)
- [DeFi Solutions Guide](/blog/defi-solutions)
"""
    elif category == "AI_INTELLIGENCE":
        faq_content += """---

**Related Reading:**
- [Complete Guide to AI Services Solutions](/blog/complete-guide-ai-services-solutions)
- [Machine Learning Implementation Guide](/blog/machine-learning-implementation-production-guide)
- [Generative AI Solutions](/blog/generative-ai-solutions)
"""
    elif category == "WEB_MOBILE":
        faq_content += """---

**Related Reading:**
- [Complete Guide to Mobile App Development](/blog/complete-guide-mobile-app-development)
- [Flutter vs React Native 2025](/blog/flutter-vs-react-native-2025-complete-comparison)
- [Cross-Platform App Development](/blog/cross-platform-app-development)
"""
    else:
        faq_content += """---

**Related Reading:**
- [Complete Guide to Custom Software Development](/blog/complete-guide-custom-software-development)
- [Enterprise Software Solutions](/blog/enterprise-software-solutions)
"""
    
    lines = content.split('\n')
    insert_index = len(lines)
    
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].startswith('**Related Reading:**') or lines[i].startswith('---'):
            insert_index = i
            break
    
    lines.insert(insert_index, faq_content)
    return '\n'.join(lines)


def optimize_blog(filepath: Path, category: str, pillar_info: dict) -> tuple[bool, str]:
    """Optimize a single blog file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already has pillar link
        if '/blog/complete-guide' in content:
            return True, f"⏭️  Already optimized: {filepath.name}"
        
        # Apply optimizations
        content = add_pillar_link_callout(content, pillar_info)
        content = add_service_cta(content, pillar_info)
        content = add_faq_section(content, category)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True, f"✅ Optimized: {filepath.name} ({category})"
    
    except Exception as e:
        return False, f"❌ Error optimizing {filepath.name}: {str(e)}"


def main():
    """Main optimization function"""
    print("🚀 Starting Blog Optimization - Phase 2...")
    print("=" * 60)
    
    # Get all MDX files
    blog_files = list(BLOG_DIR.glob("*.mdx"))
    print(f"📁 Found {len(blog_files)} blog files")
    
    # Skip already processed MLM blogs
    mlm_keywords = ['mlm', 'binary', 'matrix', 'unilevel', 'recharge', 'donation',
                   'generation', 'autopool', 'helping', 'bucket', 'board', 'party']
    
    remaining_blogs = [f for f in blog_files 
                      if not any(kw in f.name.lower() for kw in mlm_keywords)]
    
    print(f"🎯 Processing {len(remaining_blogs)} non-MLM blogs")
    print("=" * 60)
    
    success_count = 0
    error_count = 0
    skipped_count = 0
    
    category_stats = {
        "BLOCKCHAIN_WEB3": 0,
        "AI_INTELLIGENCE": 0,
        "WEB_MOBILE": 0,
        "ENTERPRISE_SOLUTIONS": 0
    }
    
    PILLAR_LINKS = {
        "BLOCKCHAIN_WEB3": {
            "pillar_url": "/blog/complete-guide-blockchain-mlm-software",
            "pillar_title": "Blockchain Web3 Development",
            "service_page": "/blockchain-development-company",
            "service_name": "Blockchain Development"
        },
        "AI_INTELLIGENCE": {
            "pillar_url": "/blog/complete-guide-ai-services-solutions",
            "pillar_title": "AI Services Solutions",
            "service_page": "/ai-services",
            "service_name": "AI Services"
        },
        "WEB_MOBILE": {
            "pillar_url": "/blog/complete-guide-mobile-app-development",
            "pillar_title": "Mobile App Development",
            "service_page": "/mobile-app-development-company",
            "service_name": "Mobile App Development"
        },
        "ENTERPRISE_SOLUTIONS": {
            "pillar_url": "/blog/complete-guide-custom-software-development",
            "pillar_title": "Custom Software Development",
            "service_page": "/software-development-company",
            "service_name": "Custom Software"
        }
    }
    
    for i, blog_file in enumerate(remaining_blogs, 1):
        category = categorize_blog(blog_file.read_text(encoding='utf-8'), blog_file.name)
        pillar_info = PILLAR_LINKS[category]
        
        print(f"\n[{i}/{len(remaining_blogs)}] {blog_file.name}")
        
        success, message = optimize_blog(blog_file, category, pillar_info)
        print(message)
        
        if success:
            success_count += 1
            if "Already optimized" not in message:
                category_stats[category] += 1
        else:
            error_count += 1
        
        if "Already optimized" in message:
            skipped_count += 1
        
        # Progress indicator every 10 files
        if i % 10 == 0:
            print(f"\n⏳ Progress: {i}/{len(remaining_blogs)} completed")
    
    print("\n" + "=" * 60)
    print("📊 Optimization Summary:")
    print(f"✅ Successful: {success_count}")
    print(f"⏭️  Skipped (already optimized): {skipped_count}")
    print(f"❌ Errors: {error_count}")
    print(f"📁 Total Processed: {success_count + error_count}/{len(remaining_blogs)}")
    print("\n📈 Category Breakdown:")
    for cat, count in category_stats.items():
        print(f"   {cat}: {count} blogs")
    print("=" * 60)
    
    # Save log
    log_file = OUTPUT_DIR / f"optimization-log-phase2-{datetime.now().strftime('%Y%m%d-%H%M%S')}.txt"
    with open(log_file, 'w', encoding='utf-8') as f:
        f.write(f"Phase 2 Optimization Log - {datetime.now()}\n")
        f.write(f"Successful: {success_count}\n")
        f.write(f"Skipped: {skipped_count}\n")
        f.write(f"Errors: {error_count}\n")
        f.write(f"Total: {len(remaining_blogs)}\n")
        f.write(f"\nCategory Breakdown:\n")
        for cat, count in category_stats.items():
            f.write(f"{cat}: {count}\n")
    
    print(f"\n💾 Log saved to: {log_file}")
    print("\n✨ Phase 2 blog optimization complete!")


if __name__ == "__main__":
    main()

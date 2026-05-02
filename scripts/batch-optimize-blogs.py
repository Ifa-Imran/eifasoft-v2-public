#!/usr/bin/env python3
"""
Blog Optimization Script - Batch Processor
Optimizes MLM Software cluster blogs with pillar links, FAQs, CTAs, and code examples
"""

import os
from pathlib import Path
from datetime import datetime

# Configuration
BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")
OUTPUT_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/scripts/optimization-output")
OUTPUT_DIR.mkdir(exist_ok=True)

# Pillar blog mapping
PILLAR_LINKS = {
    "MLM_SOFTWARE": {
        "pillar_url": "/blog/complete-guide-mlm-software-development",
        "pillar_title": "MLM Software Development",
        "service_page": "/mlm-software",
        "service_name": "MLM Software"
    },
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

# FAQ templates by category
FAQ_TEMPLATES = {
    "MLM_SOFTWARE": [
        ("What is MLM software?", 
         "**MLM software** is a specialized platform designed for multi-level marketing businesses to manage compensation plans, track downlines, process payments, and automate operations. It supports various plan types including binary, matrix, unilevel, and generation plans with real-time reporting and mobile accessibility."),
        
        ("How does binary plan work in MLM?",
         "A **binary plan** uses a two-leg structure where commissions are calculated on the weaker leg volume (typically 5-15%). The system automatically balances legs, calculates pair matching bonuses, applies daily capping limits, and carries forward excess volume to subsequent cycles."),
        
        ("What features should MLM software have?",
         "Essential **MLM software features** include: multiple compensation plans, automated payout processing, genealogy tree visualization, ePIN management, payment gateway integration, mobile apps, real-time reporting, SMS/email notifications, role-based access control, and robust security measures."),
        
        ("Can MLM software integrate payment gateways?",
         "Yes, professional **MLM software** supports multiple payment gateway integrations including Stripe, PayPal, Razorpay, Paytm, and bank APIs. These enable secure deposit/withdrawal processing, automated transaction recording, PCI DSS compliance, and multi-currency support."),
        
        ("Is mobile app available for MLM system?",
         "Modern **MLM software** includes native Android and iOS mobile apps with features like instant purchases, commission tracking, team management, fund transfers, push notifications, and biometric authentication for enhanced security and convenience."),
        
        ("How much does MLM software cost?",
         "**MLM software development cost** ranges from $3,000-$15,000+ depending on complexity, features, compensation plans, integrations, and customization. Basic packages start at $3,000-5,000 while enterprise solutions with blockchain/AI can exceed $15,000."),
        
        ("Is MLM software secure for transactions?",
         "Professional **MLM software** implements bank-grade security: SSL/TLS encryption, PCI DSS compliance, two-factor authentication, fraud detection algorithms, encrypted databases, and regular security audits to protect sensitive financial and personal data."),
        
        ("Can I customize compensation plans?",
         "Yes, leading **MLM software providers** offer fully customizable compensation plans allowing you to configure commission percentages, bonus structures, rank qualifications, capping limits, and payout frequencies to match your business model.")
    ],
    
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
    ]
}


def categorize_blog(content: str, filename: str) -> str:
    """Categorize blog based on content and filename"""
    content_lower = content.lower()
    filename_lower = filename.lower()
    combined = content_lower + " " + filename_lower
    
    if any(kw in combined for kw in ["mlm", "multi-level marketing", "network marketing", "binary", "matrix", "unilevel", "compensation plan"]):
        return "MLM_SOFTWARE"
    elif any(kw in combined for kw in ["blockchain", "crypto", "defi", "nft", "smart contract", "web3", "bitcoin", "ethereum"]):
        return "BLOCKCHAIN_WEB3"
    elif any(kw in combined for kw in ["artificial intelligence", "machine learning", "ai ", " ai ", "automation", "nlp", "computer vision"]):
        return "AI_INTELLIGENCE"
    elif any(kw in combined for kw in ["mobile app", "flutter", "react native", "ios app", "android app", "mobile application"]):
        return "WEB_MOBILE"
    else:
        return "ENTERPRISE_SOLUTIONS"


def add_pillar_link_callout(content: str, pillar_info: dict) -> str:
    """Add pillar link callout after first paragraph"""
    callout = f"""
> 📘 **Part of Series**: This article is part of our comprehensive guide on 
[{pillar_info['pillar_title']}]({pillar_info['pillar_url']}). For complete coverage including architecture, 
costs, and implementation strategies, read our definitive guide.
"""
    # Find first paragraph end (after introduction section)
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
    
    # Find conclusion section
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        if line.startswith('## Conclusion'):
            # Insert CTA after conclusion header and first paragraph
            insert_index = i + 1
            while insert_index < len(lines) and not lines[insert_index].startswith('##'):
                insert_index += 1
            lines.insert(insert_index, cta)
            break
    
    return '\n'.join(lines)


def add_faq_section(content: str, category: str) -> str:
    """Add FAQ section before related reading"""
    faqs = FAQ_TEMPLATES.get(category, FAQ_TEMPLATES["MLM_SOFTWARE"])
    
    faq_content = "\n## FAQ Section\n\n"
    for i, (question, answer) in enumerate(faqs, 1):
        faq_content += f"### {i}. {question}\n{answer}\n\n"
    
    # Add related reading links
    if category == "MLM_SOFTWARE":
        faq_content += """---

**Related Reading:**
- [Complete Guide to MLM Software Development](/blog/complete-guide-mlm-software-development)
- [Binary Plan MLM Software Features](/blog/binary-plan-mlm-software-complete-feature-guide)
- [Matrix Plan MLM Software Guide](/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained)
"""
    elif category == "BLOCKCHAIN_WEB3":
        faq_content += """---

**Related Reading:**
- [Complete Guide to Blockchain MLM Software](/blog/complete-guide-blockchain-mlm-software)
- [Smart Contract Development Services](/blog/smart-contract-development)
"""
    elif category == "AI_INTELLIGENCE":
        faq_content += """---

**Related Reading:**
- [Complete Guide to AI Services Solutions](/blog/complete-guide-ai-services-solutions)
- [Machine Learning Implementation Guide](/blog/machine-learning-implementation-production-guide)
"""
    elif category == "WEB_MOBILE":
        faq_content += """---

**Related Reading:**
- [Complete Guide to Mobile App Development](/blog/complete-guide-mobile-app-development)
- [Flutter vs React Native 2025](/blog/flutter-vs-react-native-2025-complete-comparison)
"""
    
    # Insert before last section or at end
    lines = content.split('\n')
    
    # Find position to insert (before related reading or at end)
    insert_index = len(lines)
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].startswith('**Related Reading:**') or lines[i].startswith('---'):
            insert_index = i
            break
    
    lines.insert(insert_index, faq_content)
    return '\n'.join(lines)


def update_frontmatter(content: str, category: str) -> str:
    """Update frontmatter with SEO metadata"""
    lines = content.split('\n')
    
    # Find and update tags
    in_tags = False
    new_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Update category
        if line.startswith('category:'):
            new_lines.append('category: "MLM Software"')
        # Add service_category after category
        elif line.startswith('category:') and 'service_category' not in content:
            new_lines.append(line)
            new_lines.append('service_category: "MLM Software"')
        # Add pillar flag
        elif line.startswith('tags:') and 'pillar:' not in content:
            new_lines.append(line)
            # Skip existing tags
            i += 1
            while i < len(lines) and (lines[i].startswith('  -') or lines[i].strip() == ''):
                new_lines.append(lines[i])
                i += 1
            # Add pillar flag
            new_lines.append('pillar: false')
            continue
        # Add schema markup
        elif line.startswith('seo:'):
            # Insert schema before seo
            new_lines.append('schema:')
            new_lines.append('  type: "Article"')
            new_lines.append('  articleSection: "Technology"')
            new_lines.append('  wordCount: 2000')
            new_lines.append(line)
        else:
            new_lines.append(line)
        
        i += 1
    
    return '\n'.join(new_lines)


def optimize_blog(filepath: Path) -> tuple[bool, str]:
    """Optimize a single blog file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Categorize blog
        category = categorize_blog(content, filepath.name)
        pillar_info = PILLAR_LINKS[category]
        
        # Apply optimizations
        content = update_frontmatter(content, category)
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
    print("🚀 Starting Blog Optimization Process...")
    print("=" * 60)
    
    # Get all MDX files
    blog_files = list(BLOG_DIR.glob("*.mdx"))
    print(f"📁 Found {len(blog_files)} blog files")
    
    # Filter for MLM software blogs (highest priority)
    mlm_blogs = [f for f in blog_files if any(kw in f.name.lower() for kw in [
        'mlm', 'binary', 'matrix', 'unilevel', 'recharge', 'donation',
        'generation', 'autopool', 'helping', 'bucket', 'board', 'party'
    ])]
    
    print(f"🎯 Processing {len(mlm_blogs)} MLM Software blogs first")
    print("=" * 60)
    
    success_count = 0
    error_count = 0
    
    for i, blog_file in enumerate(mlm_blogs, 1):
        print(f"\n[{i}/{len(mlm_blogs)}] Processing: {blog_file.name}")
        
        success, message = optimize_blog(blog_file)
        print(message)
        
        if success:
            success_count += 1
        else:
            error_count += 1
        
        # Progress indicator every 10 files
        if i % 10 == 0:
            print(f"\n⏳ Progress: {i}/{len(mlm_blogs)} completed")
    
    print("\n" + "=" * 60)
    print("📊 Optimization Summary:")
    print(f"✅ Successful: {success_count}")
    print(f"❌ Errors: {error_count}")
    print(f"📁 Total Processed: {success_count + error_count}/{len(mlm_blogs)}")
    print("=" * 60)
    
    # Save log
    log_file = OUTPUT_DIR / f"optimization-log-{datetime.now().strftime('%Y%m%d-%H%M%S')}.txt"
    with open(log_file, 'w', encoding='utf-8') as f:
        f.write(f"Optimization Log - {datetime.now()}\n")
        f.write(f"Successful: {success_count}\n")
        f.write(f"Errors: {error_count}\n")
        f.write(f"Total: {len(mlm_blogs)}\n")
    
    print(f"\n💾 Log saved to: {log_file}")
    print("\n✨ Blog optimization complete!")


if __name__ == "__main__":
    main()

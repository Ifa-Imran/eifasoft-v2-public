"""
GitBook Documentation Generator
Converts all 64 GitHub README files into GitBook documentation structure
"""

import os
import json
from pathlib import Path
import shutil

# Configuration
GITHUB_BACKLINKS_PATH = Path('github-backlinks')
GITBOOK_OUTPUT_PATH = Path('gitbook-documentation')

# Service categories
SERVICES = {
    "01-core-services": "Core Services",
    "02-mlm-specialized-plans": "MLM Specialized Plans",
    "03-blockchain-crypto": "Blockchain & Crypto",
    "04-ai-ml-services": "AI & Machine Learning",
    "05-devops-cloud": "DevOps & Cloud",
    "06-tools-resources": "Tools & Resources"
}

def create_gitbook_structure():
    """Create GitBook directory structure"""
    
    # Clean up existing output
    if GITBOOK_OUTPUT_PATH.exists():
        shutil.rmtree(GITBOOK_OUTPUT_PATH)
    
    GITBOOK_OUTPUT_PATH.mkdir(parents=True, exist_ok=True)
    
    # Create main directories
    (GITBOOK_OUTPUT_PATH / 'docs').mkdir(exist_ok=True)
    
    for category in SERVICES.keys():
        category_dir = GITBOOK_OUTPUT_PATH / 'docs' / category
        category_dir.mkdir(parents=True, exist_ok=True)
        
        # Create subdirectories for each service
        category_path = GITHUB_BACKLINKS_PATH / category
        if category_path.exists():
            for service in os.listdir(category_path):
                service_dir = category_dir / service
                service_dir.mkdir(exist_ok=True)

def convert_readme_to_gitbook(readme_content, service_name):
    """Convert GitHub README to GitBook format"""
    
    # Remove GitHub-specific badges that won't work in GitBook
    lines = readme_content.split('\n')
    converted_lines = []
    
    skip_next = False
    for line in lines:
        # Skip GitHub Actions badges
        if 'img.shields.io' in line and 'github' not in line.lower():
            continue
        
        # Convert GitHub links to relative links where appropriate
        if 'eifasoft.com' in line:
            # Keep external links as-is
            converted_lines.append(line)
        else:
            converted_lines.append(line)
    
    return '\n'.join(converted_lines)

def create_summary_file():
    """Create GitBook SUMMARY.md file"""
    
    summary_content = """# EifaSoft Technologies - Complete Documentation

## Introduction

* [Home](README.md)
* [About EifaSoft](docs/introduction/about.md)
* [Getting Started](docs/introduction/getting-started.md)

"""
    
    # Add all categories and services
    for category_key, category_name in SERVICES.items():
        category_slug = category_key.replace('0', '').replace('-', '_')
        
        summary_content += f"\n## {category_name}\n\n"
        
        category_path = GITHUB_BACKLINKS_PATH / category_key
        if category_path.exists():
            services = sorted([d for d in os.listdir(category_path) if d != '.DS_Store'])
            
            for i, service in enumerate(services, 1):
                service_name = service.replace('-', ' ').title()
                doc_path = f"docs/{category_key}/{service}/README.md"
                
                summary_content += f"{i}. [{service_name}]({doc_path})\n"
    
    return summary_content

def create_gitbook_config():
    """Create book.json configuration for GitBook"""
    
    config = {
        "title": "EifaSoft Technologies Documentation",
        "description": "Comprehensive guides for software development, MLM solutions, blockchain, AI services, and more",
        "author": "EifaSoft Technologies",
        "language": "en",
        "root": "./",
        "structure": {
            "readme": "README.md"
        },
        "plugins": [
            "search",
            "lunr",
            "-search-pro",
            "codeblock-disable-glossary",
            "expandable-chapters",
            "editlink",
            "ga",
            "richquotes",
            "anchors",
            "page-toc-button",
            "favicon",
            "custom-favicon"
        ],
        "pluginsConfig": {
            "editlink": {
                "base": "https://github.com/eifasoft-technologies/open-source-guides/tree/main/",
                "label": "Edit This Page",
                "multilingual": False
            },
            "ga": {
                "token": "UA-XXXXX-X"  # Replace with actual GA tracking ID
            }
        }
    }
    
    return config

def copy_and_convert_files():
    """Copy and convert all README files to GitBook structure"""
    
    total_converted = 0
    
    # Copy main README
    main_readme = GITHUB_BACKLINKS_PATH / 'README.md'
    if main_readme.exists():
        content = main_readme.read_text(encoding='utf-8')
        converted = convert_readme_to_gitbook(content, 'Main Index')
        (GITBOOK_OUTPUT_PATH / 'README.md').write_text(converted, encoding='utf-8')
        total_converted += 1
    
    # Process each category
    for category_key in SERVICES.keys():
        category_path = GITHUB_BACKLINKS_PATH / category_key
        
        if category_path.exists():
            services = [d for d in os.listdir(category_path) if not d.startswith('.')]
            
            for service in services:
                readme_file = category_path / service / 'README.md'
                
                if readme_file.exists():
                    # Read original content
                    content = readme_file.read_text(encoding='utf-8')
                    
                    # Convert to GitBook format
                    converted = convert_readme_to_gitbook(content, service)
                    
                    # Write to GitBook structure
                    output_file = GITBOOK_OUTPUT_PATH / 'docs' / category_key / service / 'README.md'
                    output_file.write_text(converted, encoding='utf-8')
                    
                    total_converted += 1
    
    return total_converted

def create_introduction_docs():
    """Create introduction documentation pages"""
    
    intro_dir = GITBOOK_OUTPUT_PATH / 'docs' / 'introduction'
    intro_dir.mkdir(parents=True, exist_ok=True)
    
    # About page
    about_content = """# About EifaSoft Technologies

EifaSoft Technologies is a leading software development company specializing in:

- **Custom Software Development** - Tailored solutions for businesses of all sizes
- **MLM Software Solutions** - Comprehensive multi-level marketing platforms
- **Blockchain & Crypto** - Decentralized applications and smart contracts
- **AI & Machine Learning** - Intelligent automation and predictive analytics
- **Mobile App Development** - iOS and Android native/cross-platform apps
- **Web Development** - Modern, responsive web applications

## Our Mission

To provide enterprise-grade software solutions that empower businesses to achieve digital transformation and operational excellence.

## Contact

- **Website:** https://www.eifasoft.com
- **Email:** info@eifasoft.com
- **GitHub:** https://github.com/eifasoft-technologies

---

*This documentation is part of our open-source initiative to share knowledge and best practices with the developer community.*
"""
    
    (intro_dir / 'about.md').write_text(about_content, encoding='utf-8')
    
    # Getting Started page
    getting_started = """# Getting Started

Welcome to EifaSoft Technologies' comprehensive documentation!

## How to Use This Documentation

This documentation is organized into 6 main categories:

### 1. Core Services
Fundamental software development and IT services including web development, mobile apps, and digital marketing.

### 2. MLM Specialized Plans
Detailed guides for 27+ different multi-level marketing compensation plans and structures.

### 3. Blockchain & Crypto
Resources for blockchain development, smart contracts, DeFi, NFTs, and Web3 applications.

### 4. AI & Machine Learning
Guides for implementing artificial intelligence, from custom models to computer vision.

### 5. DevOps & Cloud
Best practices for cloud deployment, CI/CD, API development, and infrastructure management.

### 6. Tools & Resources
Calculators, comparison tools, and resources for planning your MLM software investment.

## Quick Links

- [View All Services](../README.md)
- [GitHub Repository](https://github.com/eifasoft-technologies/open-source-guides)
- [Main Website](https://www.eifasoft.com)

## Need Help?

Our team is here to help you succeed. Reach out through our website for personalized assistance.
"""
    
    (intro_dir / 'getting-started.md').write_text(getting_started, encoding='utf-8')

def main():
    """Main automation function"""
    print("📚 Starting GitBook Documentation Generation...\n")
    
    # Step 1: Create directory structure
    print("📁 Creating GitBook directory structure...")
    create_gitbook_structure()
    print("✅ Directory structure created\n")
    
    # Step 2: Copy and convert files
    print("🔄 Converting README files to GitBook format...")
    total_converted = copy_and_convert_files()
    print(f"✅ Converted {total_converted} files\n")
    
    # Step 3: Create introduction docs
    print("📝 Creating introduction pages...")
    create_introduction_docs()
    print("✅ Introduction pages created\n")
    
    # Step 4: Create SUMMARY.md
    print("📋 Generating SUMMARY.md...")
    summary = create_summary_file()
    (GITBOOK_OUTPUT_PATH / 'SUMMARY.md').write_text(summary, encoding='utf-8')
    print("✅ SUMMARY.md created\n")
    
    # Step 5: Create book.json config
    print("⚙️  Creating book.json configuration...")
    config = create_gitbook_config()
    config_file = GITBOOK_OUTPUT_PATH / 'book.json'
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2)
    print("✅ book.json created\n")
    
    # Summary
    print("="*60)
    print("✅ GitBook Documentation Generation Complete!")
    print("="*60)
    print(f"\n📊 Statistics:")
    print(f"   • Total Files Converted: {total_converted}")
    print(f"   • Categories: {len(SERVICES)}")
    print(f"   • Output Directory: {GITBOOK_OUTPUT_PATH.absolute()}")
    
    print(f"\n🚀 Next Steps:")
    print(f"   1. Navigate to https://gitbook.com")
    print(f"   2. Create new workspace for EifaSoft")
    print(f"   3. Import the '{GITBOOK_OUTPUT_PATH}' folder")
    print(f"   4. Configure custom domain (optional)")
    print(f"   5. Publish and share!")
    
    print(f"\n💡 Pro Tips:")
    print(f"   • Enable GitBook's built-in search for better UX")
    print(f"   • Add Google Analytics tracking in book.json")
    print(f"   • Set up automatic sync with GitHub repository")
    print(f"   • Use GitBook's collaboration features for team editing")

if __name__ == '__main__':
    main()

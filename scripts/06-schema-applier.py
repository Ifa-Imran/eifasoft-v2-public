#!/usr/bin/env python3
"""
EifaSoft Schema Markup Automation Script
Generates and injects JSON-LD schema into all blog posts

Usage:
    python scripts/06-schema-applier.py
"""

import frontmatter
import json
from pathlib import Path
from typing import Dict, List
import re


class SchemaApplier:
    def __init__(self, blog_dir: str):
        self.blog_dir = Path(blog_dir)
        
    def apply_all_schema(self):
        """Apply schema to all blogs"""
        print("🏷️  Applying schema markup to all blogs...")
        
        blog_files = list(self.blog_dir.glob("*.mdx"))
        print(f"Found {len(blog_files)} blogs to process")
        
        for filepath in blog_files:
            self.apply_schema_to_blog(filepath)
        
        print(f"\n✅ Schema applied to {len(blog_files)} blogs")
        print(f"📄 Output saved to: {self.blog_dir}/schema_*.mdx")
    
    def apply_schema_to_blog(self, filepath: Path):
        """Apply appropriate schema to single blog"""
        post = frontmatter.load(filepath)
        
        # Determine schema type based on content
        schema_types = self.determine_schema_type(post)
        
        # Generate schema
        schema = self.generate_schema(post, schema_types)
        
        # Inject into content
        self.inject_schema(post, schema)
        
        # Save
        output_path = filepath.parent / f"schema_{filepath.name}"
        frontmatter.dump(post, output_path)
        print(f"✅ Applied {', '.join(schema_types)} to: {filepath.name}")
    
    def determine_schema_type(self, post) -> List[str]:
        """Determine which schema types to apply"""
        content = post.content.lower()
        metadata = post.metadata
        
        schemas = ['Article']  # All blogs get Article schema
        
        # Check for FAQ section
        if 'faq' in content and ('question' in content or '###' in content):
            schemas.append('FAQPage')
        
        # Check for how-to/process content
        if any(kw in content for kw in ['how to', 'step-by-step', 'guide to']):
            schemas.append('HowTo')
        
        # Check for tech article
        if any(kw in content for kw in ['implementation', 'technical', 'architecture']):
            schemas.append('TechArticle')
        
        # Pillar blogs always get FAQ
        if metadata.get('pillar'):
            schemas.append('FAQPage')
        
        return schemas
    
    def generate_schema(self, post, schema_types: List[str]) -> Dict:
        """Generate JSON-LD schema"""
        metadata = post.metadata
        base_url = "https://eifasoft.com/blog"
        slug = Path(post.metadata.get('canonical_url', '')).name or post.path.stem
        
        schemas = []
        
        # Article schema (always included)
        article_schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": metadata.get('title', ''),
            "description": metadata.get('description', ''),
            "author": {
                "@type": "Organization",
                "name": "EifaSoft Technologies"
            },
            "publisher": {
                "@type": "Organization",
                "name": "EifaSoft Technologies",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://eifasoft.com/logo.png",
                    "width": 600,
                    "height": 60
                }
            },
            "datePublished": metadata.get('date', ''),
            "dateModified": metadata.get('updated', metadata.get('date', '')),
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": f"{base_url}/{slug}"
            }
        }
        schemas.append(article_schema)
        
        # FAQPage schema (if applicable)
        if 'FAQPage' in schema_types:
            faq_schema = self.generate_faq_schema(post.content)
            if faq_schema:
                schemas.append(faq_schema)
        
        return schemas if len(schemas) > 1 else schemas[0]
    
    def generate_faq_schema(self, content: str) -> Dict:
        """Extract FAQ from content and generate schema"""
        # Look for FAQ section pattern
        faq_pattern = r'## FAQ.*?(?=## |\Z)'
        match = re.search(faq_pattern, content, re.DOTALL | re.IGNORECASE)
        
        if not match:
            return None
        
        faq_section = match.group(0)
        
        # Extract questions and answers
        questions = re.findall(r'### (.*?)\n([\s\S]*?)(?=### |\Z)', faq_section)
        
        main_entity = []
        for question_text, answer_text in questions[:10]:  # Max 10 for performance
            main_entity.append({
                "@type": "Question",
                "name": question_text.strip(),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer_text.strip()
                }
            })
        
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": main_entity
        }
    
    def inject_schema(self, post, schema):
        """Inject JSON-LD into blog content"""
        schema_json = json.dumps(schema, indent=2)
        
        schema_component = f"""
<script type="application/ld+json">
{schema_json}
</script>
"""
        # Append at end of content
        post.content += f"\n\n{schema_component}"


def main():
    print("=" * 60)
    print("EifaSoft Schema Markup Automation")
    print("=" * 60)
    print()
    
    applier = SchemaApplier("content/blog")
    applier.apply_all_schema()
    
    print()
    print("=" * 60)
    print("Next Steps:")
    print("1. Review generated schema files")
    print("2. Validate with Google Rich Results Test:")
    print("   https://search.google.com/test/rich-results")
    print("3. Deploy to production")
    print("=" * 60)


if __name__ == "__main__":
    main()

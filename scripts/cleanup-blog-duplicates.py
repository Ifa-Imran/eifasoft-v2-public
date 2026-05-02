#!/usr/bin/env python3
"""
Blog Optimization Cleanup Script
Fixes duplicate entries and formatting issues
"""

import os
from pathlib import Path
import re

BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")


def clean_frontmatter(content: str) -> str:
    """Remove duplicate frontmatter entries"""
    lines = content.split('\n')
    
    # Track if we're in frontmatter
    in_frontmatter = False
    seen_schema = False
    cleaned_lines = []
    skip_until_seo = False
    
    for i, line in enumerate(lines):
        # Detect frontmatter start
        if i == 0 and line.strip() == '---':
            in_frontmatter = True
            cleaned_lines.append(line)
            continue
        
        # Detect frontmatter end
        if in_frontmatter and line.strip() == '---' and i > 5:
            in_frontmatter = False
            cleaned_lines.append(line)
            continue
        
        # Skip duplicate schema blocks
        if in_frontmatter and line.startswith('schema:'):
            if seen_schema:
                # Skip this schema and next 3 lines
                skip_until_seo = True
                continue
            else:
                seen_schema = True
        
        # Skip lines to remove during schema cleanup
        if skip_until_seo:
            if line.startswith('seo:'):
                skip_until_seo = False
            else:
                continue
        
        # Remove duplicate pillar callouts (keep only first one after introduction)
        if '> 📘 **Part of Series**:' in line:
            # Check if we already have one
            if any('> 📘 **Part of Series**:' in l for l in cleaned_lines[-10:]):
                # Skip duplicate, also skip next 2 lines
                continue
        
        cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)


def clean_blog(filepath: Path) -> tuple[bool, str]:
    """Clean a single blog file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for duplicates
        has_duplicate_schema = content.count('schema:') > 1
        has_duplicate_callout = content.count('> 📘 **Part of Series**:') > 1
        
        if not has_duplicate_schema and not has_duplicate_callout:
            return True, f"⏭️  Already clean: {filepath.name}"
        
        # Clean content
        content = clean_frontmatter(content)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True, f"✅ Cleaned: {filepath.name}"
    
    except Exception as e:
        return False, f"❌ Error cleaning {filepath.name}: {str(e)}"


def main():
    """Main cleanup function"""
    print("🧹 Starting Blog Cleanup Process...")
    print("=" * 60)
    
    # Get all MDX files
    blog_files = list(BLOG_DIR.glob("*.mdx"))
    print(f"📁 Found {len(blog_files)} blog files")
    
    success_count = 0
    error_count = 0
    
    for i, blog_file in enumerate(blog_files, 1):
        if i % 50 == 0:
            print(f"\n⏳ Progress: {i}/{len(blog_files)}")
        
        success, message = clean_blog(blog_file)
        print(message)
        
        if success:
            success_count += 1
        else:
            error_count += 1
    
    print("\n" + "=" * 60)
    print("📊 Cleanup Summary:")
    print(f"✅ Successful: {success_count}")
    print(f"❌ Errors: {error_count}")
    print(f"📁 Total Processed: {success_count + error_count}/{len(blog_files)}")
    print("=" * 60)
    
    print("\n✨ Blog cleanup complete!")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Fix frontmatter structure - ensure --- comes right after seo section
"""

import os
from pathlib import Path
import re

BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")


def fix_frontmatter(filepath: Path) -> tuple[bool, str]:
    """Fix frontmatter structure in a blog file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        
        # Check if starts with ---
        if not lines[0].strip() == '---':
            return True, f"⏭️  No frontmatter: {filepath.name}"
        
        # Find where seo keywords line is
        seo_keywords_line = None
        first_markdown_heading = None
        first_closing_dash = None
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Find line containing keywords (last line of seo section)
            if stripped.startswith('keywords:'):
                seo_keywords_line = i
            
            # Find first markdown heading after frontmatter start
            if i > 0 and (stripped.startswith('## ') or stripped.startswith('# ')) and first_markdown_heading is None:
                first_markdown_heading = i
            
            # Find first --- after line 0
            if i > 0 and stripped == '---' and first_closing_dash is None:
                first_closing_dash = i
        
        # If seo keywords line exists and markdown heading comes before the closing ---
        # That means frontmatter isn't properly closed
        if seo_keywords_line and first_markdown_heading and first_closing_dash:
            if first_markdown_heading < first_closing_dash:
                # Need to fix: remove the wrong --- and add correct one
                
                # Build new content
                new_lines = []
                inserted_dash = False
                
                for i, line in enumerate(lines):
                    stripped = line.strip()
                    
                    # Skip the incorrectly placed ---
                    if i == first_closing_dash:
                        continue
                    
                    # Insert --- after seo keywords line (before any blank lines that follow)
                    if i == seo_keywords_line + 1 and not inserted_dash:
                        # If next line is blank, add --- before the blank line
                        if stripped == '':
                            new_lines.append('---')
                            inserted_dash = True
                        new_lines.append(line)
                    elif i == seo_keywords_line and not inserted_dash:
                        new_lines.append(line)
                        new_lines.append('---')
                        inserted_dash = True
                    else:
                        new_lines.append(line)
                
                # Write back
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(new_lines))
                
                return True, f"✅ Fixed: {filepath.name}"
        
        # Check if there's no closing --- at all after seo
        if seo_keywords_line and first_markdown_heading and first_closing_dash is None:
            # Add --- after seo keywords
            new_lines = []
            for i, line in enumerate(lines):
                new_lines.append(line)
                if i == seo_keywords_line:
                    new_lines.append('---')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            
            return True, f"✅ Fixed (no closing): {filepath.name}"
        
        return True, f"⏭️  OK: {filepath.name}"
    
    except Exception as e:
        return False, f"❌ Error: {filepath.name}: {str(e)}"


def main():
    """Main fix function"""
    print("🔧 Fixing Frontmatter Structure...")
    print("=" * 60)
    
    blog_files = list(BLOG_DIR.glob("*.mdx"))
    print(f"📁 Found {len(blog_files)} blog files")
    
    success_count = 0
    error_count = 0
    fixed_count = 0
    
    for i, blog_file in enumerate(blog_files, 1):
        if i % 50 == 0:
            print(f"\n⏳ Progress: {i}/{len(blog_files)}")
        
        success, message = fix_frontmatter(blog_file)
        
        if "Fixed" in message:
            fixed_count += 1
            print(message)
        elif "Error" in message:
            print(message)
        
        if success:
            success_count += 1
        else:
            error_count += 1
    
    print("\n" + "=" * 60)
    print("📊 Fix Summary:")
    print(f"✅ Successful: {success_count}")
    print(f"🔧 Files Fixed: {fixed_count}")
    print(f"❌ Errors: {error_count}")
    print("=" * 60)
    
    print("\n✨ Frontmatter structure fix complete!")


if __name__ == "__main__":
    main()

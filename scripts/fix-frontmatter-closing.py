#!/usr/bin/env python3
"""
Fix missing frontmatter closing delimiter
"""

import os
from pathlib import Path
import re

BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")


def fix_frontmatter_closing(filepath: Path) -> tuple[bool, str]:
    """Fix a single blog file with missing frontmatter closing"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if frontmatter is properly closed
        # Should have exactly 2 occurrences of `---` at line start
        dash_matches = re.findall(r'^---\s*$', content, re.MULTILINE)
        
        if len(dash_matches) >= 2:
            return True, f"⏭️  OK: {filepath.name}"
        
        # File has issue - find where seo section ends and add ---
        lines = content.split('\n')
        
        # Find frontmatter start
        if lines[0].strip() != '---':
            return False, f"❌ No frontmatter start: {filepath.name}"
        
        # Find where frontmatter should end (after seo section or before first ## heading)
        insert_index = None
        in_frontmatter = True
        
        for i, line in enumerate(lines[1:], 1):  # Start from line 1 (after first ---)
            stripped = line.strip()
            
            # If we hit a markdown heading, frontmatter should have ended before this
            if stripped.startswith('##') or stripped.startswith('# '):
                insert_index = i
                break
            
            # If we hit a second ---, frontmatter is properly closed
            if stripped == '---':
                in_frontmatter = False
                break
        
        if not in_frontmatter:
            return True, f"⏭️  OK: {filepath.name}"
        
        if insert_index is None:
            return False, f"❌ Could not find insert point: {filepath.name}"
        
        # Insert the closing ---
        lines.insert(insert_index, '---')
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        
        return True, f"✅ Fixed: {filepath.name}"
    
    except Exception as e:
        return False, f"❌ Error fixing {filepath.name}: {str(e)}"


def main():
    """Main fix function"""
    print("🔧 Fixing Missing Frontmatter Closers...")
    print("=" * 60)
    
    # Get all MDX files
    blog_files = list(BLOG_DIR.glob("*.mdx"))
    print(f"📁 Found {len(blog_files)} blog files")
    
    success_count = 0
    error_count = 0
    fixed_count = 0
    
    for i, blog_file in enumerate(blog_files, 1):
        if i % 50 == 0:
            print(f"\n⏳ Progress: {i}/{len(blog_files)}")
        
        success, message = fix_frontmatter_closing(blog_file)
        
        if "Fixed" in message:
            fixed_count += 1
            print(message)
        elif "Error" in message or "Could not" in message:
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
    print(f"📁 Total Processed: {success_count + error_count}/{len(blog_files)}")
    print("=" * 60)
    
    print("\n✨ Frontmatter fix complete!")


if __name__ == "__main__":
    main()

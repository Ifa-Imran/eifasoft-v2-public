#!/usr/bin/env python3
"""
Fix YAML parsing issue with bold text at start of lines
"""

import os
from pathlib import Path

BLOG_DIR = Path("e:/Projects/eifasoft/eifasoft-v2/content/blog")


def fix_yaml_bold_issue(content: str) -> str:
    """Add zero-width space before bold text at start of lines to prevent YAML alias issues"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Check if line starts with ** (bold markdown) and contains MLM or other keywords
        if line.startswith('**') and any(kw in line for kw in ['MLM', 'Binary', 'Matrix', 'AI', 'Blockchain']):
            # Add zero-width space (\u200B) before the ** to break YAML parsing
            fixed_lines.append('\u200B' + line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)


def fix_blog_file(filepath: Path) -> tuple[bool, str]:
    """Fix a single blog file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has the issue
        has_issue = False
        lines = content.split('\n')
        for line in lines:
            if line.startswith('**') and any(kw in line for kw in ['MLM', 'Binary', 'Matrix', 'AI', 'Blockchain']):
                has_issue = True
                break
        
        if not has_issue:
            return True, f"⏭️  OK: {filepath.name}"
        
        # Fix content
        content = fix_yaml_bold_issue(content)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True, f"✅ Fixed: {filepath.name}"
    
    except Exception as e:
        return False, f"❌ Error fixing {filepath.name}: {str(e)}"


def main():
    """Main fix function"""
    print("🔧 Fixing YAML Bold Text Issues...")
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
        
        success, message = fix_blog_file(blog_file)
        
        if "Fixed" in message:
            fixed_count += 1
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
    print(f"📁 Total Processed: {success_count}/{len(blog_files)}")
    print("=" * 60)
    
    print("\n✨ YAML bold text fix complete!")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Find and fix ALL blog files with malformed frontmatter.
More aggressive detection - finds any file where content appears before closing ---
"""

import os
import re
from pathlib import Path

BLOG_DIR = Path(r"e:\Projects\eifasoft\eifasoft-v2\content\blog")

def analyze_file(filepath: Path) -> dict:
    """Analyze a file for frontmatter issues"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return {"error": str(e), "needs_fix": False}
    
    lines = content.split('\n')
    
    # Find all --- positions
    dash_positions = []
    for i, line in enumerate(lines):
        if line.strip() == '---':
            dash_positions.append(i)
    
    if len(dash_positions) < 2:
        return {"error": "Less than 2 --- found", "needs_fix": True, "dash_count": len(dash_positions)}
    
    # Check if there's any markdown heading between first --- and second ---
    first_dash = dash_positions[0]
    second_dash = dash_positions[1]
    
    for i in range(first_dash + 1, second_dash):
        line = lines[i].strip()
        # Check for markdown headings
        if line.startswith('## ') or line.startswith('### ') or line.startswith('# '):
            return {
                "needs_fix": True,
                "reason": f"Markdown heading at line {i+1}: {line[:50]}...",
                "first_dash": first_dash + 1,
                "second_dash": second_dash + 1,
                "problem_line": i + 1
            }
        # Check for FAQ patterns
        if re.match(r'^\*\*Q\d+:', line) or re.match(r'^Q\d+:', line):
            return {
                "needs_fix": True,
                "reason": f"FAQ content at line {i+1}: {line[:50]}...",
                "first_dash": first_dash + 1,
                "second_dash": second_dash + 1,
                "problem_line": i + 1
            }
    
    return {"needs_fix": False, "first_dash": first_dash + 1, "second_dash": second_dash + 1}


def fix_file(filepath: Path) -> tuple[bool, str]:
    """Fix a file by properly closing frontmatter after seo section"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Read error: {e}"
    
    lines = content.split('\n')
    
    # Find the end of the seo section (keywords: line)
    seo_end_line = None
    in_seo = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('seo:'):
            in_seo = True
        elif in_seo and stripped.startswith('keywords:'):
            seo_end_line = i
            break
        elif in_seo and not stripped.startswith(' ') and not stripped.startswith('\t') and stripped and not stripped.startswith('-'):
            # Left seo section without finding keywords
            break
    
    if seo_end_line is None:
        # Try alternate approach - find last YAML-like line before markdown
        for i, line in enumerate(lines[1:], 1):  # Skip first ---
            stripped = line.strip()
            if stripped.startswith('## ') or stripped.startswith('### ') or stripped.startswith('# '):
                # Found first markdown heading, frontmatter should end before this
                seo_end_line = i - 1
                # Back up to find last non-empty yaml line
                while seo_end_line > 0 and not lines[seo_end_line].strip():
                    seo_end_line -= 1
                break
    
    if seo_end_line is None:
        return False, "Could not find seo section end"
    
    # Build new content
    # 1. Keep lines 0 to seo_end_line (inclusive)
    # 2. Add ---
    # 3. Add remaining content (skip any existing --- until we find actual content)
    
    new_lines = lines[:seo_end_line + 1]
    new_lines.append('---')
    new_lines.append('')
    
    # Find where content actually starts (skip empty lines and stray ---)
    content_start = seo_end_line + 1
    for i in range(seo_end_line + 1, len(lines)):
        stripped = lines[i].strip()
        if stripped == '---':
            continue  # Skip existing ---
        if stripped:  # Found actual content
            content_start = i
            break
    
    # Add remaining content
    new_lines.extend(lines[content_start:])
    
    new_content = '\n'.join(new_lines)
    
    # Verify the fix worked
    test_lines = new_content.split('\n')
    dash_count = 0
    first_heading_line = None
    second_dash_line = None
    
    for i, line in enumerate(test_lines):
        if line.strip() == '---':
            dash_count += 1
            if dash_count == 2:
                second_dash_line = i
        if (line.strip().startswith('## ') or line.strip().startswith('### ')) and first_heading_line is None:
            first_heading_line = i
    
    if second_dash_line and first_heading_line and second_dash_line > first_heading_line:
        return False, f"Fix failed: heading at {first_heading_line}, --- at {second_dash_line}"
    
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f"Fixed: seo ends at line {seo_end_line + 1}"
    except Exception as e:
        return False, f"Write error: {e}"


def main():
    print("Scanning all blog files for frontmatter issues...")
    print("=" * 80)
    
    problematic_files = []
    
    for mdx_file in BLOG_DIR.glob("*.mdx"):
        result = analyze_file(mdx_file)
        if result.get("needs_fix"):
            problematic_files.append((mdx_file, result))
    
    print(f"\nFound {len(problematic_files)} files with frontmatter issues:\n")
    
    for filepath, info in problematic_files[:20]:  # Show first 20
        print(f"  {filepath.name}")
        print(f"    Reason: {info.get('reason', info.get('error', 'Unknown'))}")
    
    if len(problematic_files) > 20:
        print(f"\n  ... and {len(problematic_files) - 20} more files")
    
    if not problematic_files:
        print("No problematic files found!")
        return
    
    print(f"\n{'=' * 80}")
    print(f"Fixing {len(problematic_files)} files...")
    print("=" * 80)
    
    fixed = 0
    failed = []
    
    for filepath, _ in problematic_files:
        success, message = fix_file(filepath)
        if success:
            fixed += 1
            print(f"  [FIXED] {filepath.name}")
        else:
            failed.append((filepath, message))
            print(f"  [FAILED] {filepath.name}: {message}")
    
    print(f"\n{'=' * 80}")
    print(f"Results: {fixed} fixed, {len(failed)} failed")
    
    if failed:
        print("\nFailed files need manual inspection:")
        for filepath, reason in failed:
            print(f"  {filepath.name}: {reason}")


if __name__ == "__main__":
    main()

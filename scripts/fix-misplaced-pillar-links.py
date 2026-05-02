#!/usr/bin/env python3
"""
Fix files where pillar link content was inserted inside frontmatter.
Moves any non-YAML content from between first --- and title: to after closing ---.
"""

import re
from pathlib import Path

BLOG_DIR = Path(r"e:\Projects\eifasoft\eifasoft-v2\content\blog")

def fix_file(filepath: Path) -> tuple[bool, str]:
    """Fix frontmatter by moving non-YAML content to after closing ---"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Read error: {e}"
    
    lines = content.split('\n')
    
    if len(lines) < 3 or lines[0].strip() != '---':
        return False, "No frontmatter start"
    
    # Find misplaced content (non-YAML between first --- and title:)
    misplaced_content = []
    yaml_start_line = None
    
    for i in range(1, len(lines)):
        line = lines[i]
        stripped = line.strip()
        
        # Check for title: field
        if stripped.startswith('title:'):
            yaml_start_line = i
            break
        
        # Check for non-YAML content (blockquotes, empty lines before title)
        if stripped.startswith('>') or stripped.startswith('#') or stripped.startswith('['):
            misplaced_content.append(line)
        elif stripped and not stripped.startswith('title:'):
            # Might be continuation of blockquote or other content
            if misplaced_content:
                misplaced_content.append(line)
    
    if not misplaced_content:
        return False, "No misplaced content found"
    
    if yaml_start_line is None:
        return False, "Could not find title: field"
    
    # Find the closing ---
    closing_dash_line = None
    for i in range(yaml_start_line + 1, len(lines)):
        if lines[i].strip() == '---':
            closing_dash_line = i
            break
    
    if closing_dash_line is None:
        return False, "Could not find closing ---"
    
    # Rebuild the file:
    # 1. Opening ---
    # 2. Frontmatter (from title: to closing ---)
    # 3. Misplaced content (the pillar link)
    # 4. Rest of content
    
    new_lines = ['---']
    
    # Add frontmatter (title: through closing ---)
    for i in range(yaml_start_line, closing_dash_line + 1):
        new_lines.append(lines[i])
    
    # Add empty line
    new_lines.append('')
    
    # Add the misplaced content
    new_lines.extend(misplaced_content)
    new_lines.append('')
    
    # Add rest of content (after closing ---)
    for i in range(closing_dash_line + 1, len(lines)):
        new_lines.append(lines[i])
    
    new_content = '\n'.join(new_lines)
    
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f"Moved {len(misplaced_content)} lines of content"
    except Exception as e:
        return False, f"Write error: {e}"


def main():
    print("Finding and fixing files with content inside frontmatter...")
    print("=" * 80)
    
    fixed = 0
    skipped = 0
    failed = []
    
    for mdx_file in BLOG_DIR.glob("*.mdx"):
        with open(mdx_file, 'r', encoding='utf-8') as f:
            lines = f.read().split('\n')
        
        # Quick check - does line 2 or 3 start with > (blockquote)?
        has_issue = False
        for i in range(1, min(5, len(lines))):
            if lines[i].strip().startswith('>'):
                has_issue = True
                break
        
        if not has_issue:
            skipped += 1
            continue
        
        success, message = fix_file(mdx_file)
        if success:
            fixed += 1
            print(f"  [FIXED] {mdx_file.name}: {message}")
        else:
            failed.append((mdx_file, message))
            print(f"  [SKIP] {mdx_file.name}: {message}")
    
    print(f"\n{'=' * 80}")
    print(f"Results: {fixed} fixed, {skipped} already OK, {len(failed)} failed/skipped")
    
    if failed:
        print("\nFiles that couldn't be auto-fixed:")
        for filepath, reason in failed[:10]:
            print(f"  {filepath.name}: {reason}")


if __name__ == "__main__":
    main()

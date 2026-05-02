#!/usr/bin/env python3
"""
Reorder blog content so original article comes FIRST, then FAQ and related links at the end.

Current structure:
1. Frontmatter
2. Pillar link
3. FAQ Section
4. Related Reading
5. ---
6. Original content

New structure:
1. Frontmatter
2. Pillar link (context for readers)
3. Original content
4. ---
5. FAQ Section
6. Related Reading
"""

import re
from pathlib import Path

BLOG_DIR = Path(r"e:\Projects\eifasoft\eifasoft-v2\content\blog")

def reorder_content(filepath: Path) -> tuple[bool, str]:
    """Reorder blog content to put original article first"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Read error: {e}"
    
    lines = content.split('\n')
    
    # Find frontmatter boundaries
    if lines[0].strip() != '---':
        return False, "No frontmatter start"
    
    frontmatter_end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            frontmatter_end = i
            break
    
    if frontmatter_end is None:
        return False, "No frontmatter end"
    
    # Extract content after frontmatter
    body_lines = lines[frontmatter_end + 1:]
    body = '\n'.join(body_lines)
    
    # Identify sections
    pillar_link = []
    faq_section = []
    related_reading = []
    original_content = []
    service_cta = []
    
    # Parse the body to identify sections
    current_section = 'unknown'
    temp_lines = []
    
    for i, line in enumerate(body_lines):
        stripped = line.strip()
        
        # Detect pillar link (blockquote with Part of Series)
        if stripped.startswith('>') and 'Part of Series' in line:
            current_section = 'pillar'
            pillar_link.append(line)
            continue
        
        # Continue pillar link (multi-line blockquote or link continuation)
        if current_section == 'pillar':
            if stripped.startswith('>') or stripped.startswith('[') or (stripped and not stripped.startswith('#') and not stripped.startswith('**Related')):
                if stripped.startswith('#') or stripped.startswith('**Related') or stripped == '---':
                    current_section = 'unknown'
                else:
                    pillar_link.append(line)
                    continue
            elif not stripped:  # Empty line ends pillar section
                pillar_link.append(line)
                current_section = 'unknown'
                continue
        
        # Detect FAQ Section
        if stripped == '## FAQ Section' or stripped.startswith('## FAQ'):
            current_section = 'faq'
            faq_section.append(line)
            continue
        
        # Continue FAQ section
        if current_section == 'faq':
            if stripped.startswith('**Related Reading') or stripped == '---' or (stripped.startswith('## ') and 'FAQ' not in stripped):
                current_section = 'unknown'
            else:
                faq_section.append(line)
                continue
        
        # Detect Related Reading
        if stripped.startswith('**Related Reading'):
            current_section = 'related'
            related_reading.append(line)
            continue
        
        # Continue Related Reading
        if current_section == 'related':
            if stripped == '---' or (stripped.startswith('## ') or stripped.startswith('# ')):
                current_section = 'unknown'
            else:
                related_reading.append(line)
                continue
        
        # Detect Service CTA
        if '## Ready to' in line or '### Ready to' in line or 'Transform Your' in line:
            current_section = 'cta'
            service_cta.append(line)
            continue
        
        if current_section == 'cta':
            service_cta.append(line)
            continue
        
        # Skip standalone --- separators
        if stripped == '---':
            continue
        
        # Everything else is original content
        original_content.append(line)
    
    # Check if we have something to reorder
    if not faq_section and not related_reading:
        return False, "No FAQ or related reading found"
    
    if not original_content or all(not line.strip() for line in original_content):
        return False, "No original content found"
    
    # Clean up sections (remove leading/trailing empty lines)
    def clean_section(section):
        while section and not section[0].strip():
            section.pop(0)
        while section and not section[-1].strip():
            section.pop()
        return section
    
    pillar_link = clean_section(pillar_link)
    faq_section = clean_section(faq_section)
    related_reading = clean_section(related_reading)
    original_content = clean_section(original_content)
    service_cta = clean_section(service_cta)
    
    # Build new content
    new_lines = lines[:frontmatter_end + 1]  # Frontmatter including closing ---
    new_lines.append('')
    
    # Add pillar link first (provides context)
    if pillar_link:
        new_lines.extend(pillar_link)
        new_lines.append('')
    
    # Add original content
    if original_content:
        new_lines.extend(original_content)
        new_lines.append('')
    
    # Add separator before supplementary content
    new_lines.append('---')
    new_lines.append('')
    
    # Add FAQ section
    if faq_section:
        new_lines.extend(faq_section)
        new_lines.append('')
    
    # Add related reading
    if related_reading:
        new_lines.extend(related_reading)
        new_lines.append('')
    
    # Add service CTA
    if service_cta:
        new_lines.extend(service_cta)
        new_lines.append('')
    
    new_content = '\n'.join(new_lines)
    
    # Only write if content changed significantly
    if abs(len(new_content) - len(content)) < 10 and new_content.strip() == content.strip():
        return False, "Content unchanged"
    
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f"Reordered: {len(original_content)} lines of original content moved to top"
    except Exception as e:
        return False, f"Write error: {e}"


def main():
    print("Reordering blog content (original article first, FAQ/links at end)...")
    print("=" * 80)
    
    fixed = 0
    skipped = 0
    failed = []
    
    mdx_files = list(BLOG_DIR.glob("*.mdx"))
    total = len(mdx_files)
    
    for idx, mdx_file in enumerate(mdx_files):
        success, message = reorder_content(mdx_file)
        if success:
            fixed += 1
            if fixed <= 20:  # Show first 20 fixes
                print(f"  [{fixed}] {mdx_file.name[:60]}...")
        else:
            if "No FAQ" in message or "unchanged" in message or "No original" in message:
                skipped += 1
            else:
                failed.append((mdx_file, message))
        
        # Progress indicator
        if (idx + 1) % 100 == 0:
            print(f"  Progress: {idx + 1}/{total} processed...")
    
    print(f"\n{'=' * 80}")
    print(f"Results: {fixed} reordered, {skipped} skipped (no changes needed), {len(failed)} failed")
    
    if failed:
        print("\nFailed files:")
        for filepath, reason in failed[:10]:
            print(f"  {filepath.name}: {reason}")


if __name__ == "__main__":
    main()

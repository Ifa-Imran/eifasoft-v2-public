#!/usr/bin/env python3
"""
Blog Migration Script - SQL to MDX
Reads SQL dump file and converts blog entries to MDX files for Next.js

Usage: python scripts/migrate-blogs-from-sql.py
"""

import re
import os
import json
from pathlib import Path
from html.parser import HTMLParser
from datetime import datetime

# Category mapping
CATEGORY_MAP = {
    'news-and-events': 'News & Events',
    'multi-level-marketing': 'MLM Software',
    'ecommerce': 'E-commerce',
    '': 'Technology'
}

# Month mapping
MONTH_MAP = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
}


class HTMLToMDX:
    """Convert HTML to MDX format"""
    
    @staticmethod
    def convert(html):
        if not html:
            return ''
        
        content = html
        
        # Unescape quotes
        content = content.replace("\\'", "'").replace('\\"', '"')
        
        # Convert headings
        content = re.sub(r'<h2[^>]*>', '\n## ', content)
        content = re.sub(r'</h2>', '\n', content)
        content = re.sub(r'<h3[^>]*>', '\n### ', content)
        content = re.sub(r'</h3>', '\n', content)
        content = re.sub(r'<h4[^>]*>', '\n#### ', content)
        content = re.sub(r'</h4>', '\n', content)
        
        # Convert paragraphs
        content = re.sub(r'<p[^>]*>', '\n', content)
        content = re.sub(r'</p>', '\n', content)
        
        # Convert lists
        content = re.sub(r'<ul[^>]*>', '\n', content)
        content = re.sub(r'</ul>', '\n', content)
        content = re.sub(r'<ol[^>]*>', '\n', content)
        content = re.sub(r'</ol>', '\n', content)
        content = re.sub(r'<li[^>]*>', '- ', content)
        content = re.sub(r'</li>', '\n', content)
        
        # Convert emphasis
        content = re.sub(r'<strong[^>]*>', '**', content)
        content = re.sub(r'</strong>', '**', content)
        content = re.sub(r'<em[^>]*>', '*', content)
        content = re.sub(r'</em>', '*', content)
        content = re.sub(r'<br\s*/?>', '\n', content)
        content = re.sub(r'<hr\s*/?>', '\n---\n', content)
        
        # Convert links
        content = re.sub(
            r'<a\s+(?:[^>]*?\s+)?href=["\']([^"\']*)["\'][^>]*>(.*?)</a>',
            r'[\2](\1)',
            content,
            flags=re.IGNORECASE
        )
        
        # Remove remaining HTML tags
        content = re.sub(r'<[^>]+>', '', content)
        
        # Clean up whitespace
        content = re.sub(r'\n{3,}', '\n\n', content)
        content = content.strip()
        
        return content


def parse_sql_file(sql_file_path):
    """Parse SQL file and extract blog entries"""
    blogs = []
    
    with open(sql_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all INSERT statements for blogs table
    insert_pattern = r"INSERT INTO `blogs`.*?VALUES\s*\((.*?)\)(?:,\s*\(|;)"
    
    # Extract column names
    columns_match = re.search(
        r"INSERT INTO `blogs` \(`([^)]+)`\)",
        content
    )
    
    if not columns_match:
        print("Could not find blog table structure")
        return blogs
    
    columns = [col.strip() for col in columns_match.group(1).split(',')]
    print(f"Found columns: {columns}")
    
    # Find all value sets
    values_pattern = r"INSERT INTO `blogs`[^V]+VALUES\s*((?:\([^)]*\),?\s*)*)"
    matches = re.finditer(values_pattern, content, re.DOTALL)
    
    for match in matches:
        values_text = match.group(1)
        # Split individual rows
        rows = re.findall(r'\(([^)]+)\)', values_text)
        
        for row in rows:
            # Parse individual values (handling escaped quotes and commas)
            values = []
            current_value = ''
            in_quotes = False
            escape_next = False
            
            for char in row:
                if escape_next:
                    current_value += char
                    escape_next = False
                elif char == '\\':
                    escape_next = True
                    current_value += char
                elif char == "'" and not in_quotes:
                    in_quotes = True
                elif char == "'" and in_quotes:
                    in_quotes = False
                elif char == ',' and not in_quotes:
                    values.append(current_value.strip().strip("'"))
                    current_value = ''
                else:
                    current_value += char
            
            # Add last value
            if current_value:
                values.append(current_value.strip().strip("'"))
            
            # Create blog dict
            if len(values) >= len(columns):
                blog = dict(zip(columns, values))
                blogs.append(blog)
    
    print(f"Extracted {len(blogs)} blog entries")
    return blogs


def create_date(day, month):
    """Create ISO date string"""
    current_year = datetime.now().year
    month_num = MONTH_MAP.get(month, '01')
    day_num = day.zfill(2)
    
    return f"{current_year}-{month_num}-{day_num}"


def extract_tags(keywords):
    """Extract tags from keywords"""
    if not keywords:
        return []
    
    tags = [tag.strip() for tag in keywords.split(',') if tag.strip()]
    return tags[:5]  # Limit to 5 tags


def generate_excerpt(content, max_length=160):
    """Generate excerpt from content"""
    # Remove HTML tags
    clean = re.sub(r'<[^>]+>', '', content)
    clean = clean.replace('\n', ' ').strip()
    
    if len(clean) <= max_length:
        return clean
    
    return clean[:max_length].strip() + '...'


def sanitize_filename(slug):
    """Sanitize filename for filesystem"""
    slug = slug.lower()
    slug = re.sub(r'[^a-z0-9-]', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    slug = slug.strip('-')
    return slug


def escape_yaml_string(s):
    """Escape string for YAML"""
    if not s:
        return '""'
    
    # If contains special chars, wrap in quotes and escape internal quotes
    if any(c in s for c in ['"', "'", ':', '#', '\n', '\r']):
        s = s.replace('"', '\\"')
        return f'"{s}"'
    
    return f'"{s}"'


def create_mdx_file(blog):
    """Create MDX file content"""
    # Extract fields
    blog_id = blog.get('blog_id', '')
    title = blog.get('blog_title', '')
    meta_title = blog.get('meta_title', title)
    meta_desc = blog.get('meta_desc', '')
    meta_keywords = blog.get('meta_keywords', '')
    meta_url = blog.get('meta_url', '')
    blog_desc = blog.get('blog_desc', '')
    blog_date = blog.get('blog_date', '01')
    blog_month = blog.get('blog_month', 'January')
    blog_img = blog.get('blog_img', 'default.jpg')
    category = blog.get('category', '')
    
    # Process data
    published_at = create_date(blog_date, blog_month)
    category_name = CATEGORY_MAP.get(category, 'Technology')
    tags = extract_tags(meta_keywords)
    excerpt = meta_desc or generate_excerpt(blog_desc)
    content = HTMLToMDX.convert(blog_desc)
    
    # Create frontmatter
    frontmatter = f"""---
title: {escape_yaml_string(meta_title)}
excerpt: {escape_yaml_string(excerpt)}
publishedAt: "{published_at}"
updatedAt: "{published_at}"
author: "EifaSoft Team"
category: "{category_name}"
tags:
{chr(10).join(f'  - {escape_yaml_string(tag)}' for tag in tags)}
featuredImage: "/images/blog/{blog_img}"
seo:
  metaTitle: {escape_yaml_string(meta_title)}
  metaDescription: {escape_yaml_string(meta_desc)}
  keywords: {escape_yaml_string(meta_keywords)}
---"""
    
    mdx_content = f"{frontmatter}\n\n{content}\n"
    
    return mdx_content


def migrate_blogs(sql_file_path, output_dir):
    """Main migration function"""
    # Parse SQL file
    blogs = parse_sql_file(sql_file_path)
    
    if not blogs:
        print("No blogs found in SQL file")
        return
    
    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    print(f"✓ Created output directory: {output_dir}")
    
    success_count = 0
    error_count = 0
    
    for blog in blogs:
        try:
            # Generate filename
            meta_url = blog.get('meta_url', '')
            blog_id = blog.get('blog_id', '')
            filename = sanitize_filename(meta_url or f"blog-{blog_id}")
            
            # Create MDX content
            mdx_content = create_mdx_file(blog)
            
            # Write file
            file_path = output_path / f"{filename}.mdx"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            
            print(f"✓ Created: {filename}.mdx")
            success_count += 1
            
        except Exception as e:
            print(f"✗ Error creating blog {blog.get('blog_id', 'unknown')}: {e}")
            error_count += 1
    
    # Summary
    print('\n=== Migration Summary ===')
    print(f"Total blogs found: {len(blogs)}")
    print(f"Successfully migrated: {success_count}")
    print(f"Errors: {error_count}")
    print('\nNext steps:')
    print('1. Copy blog images from old site to public/images/blog/')
    print('2. Review and edit generated MDX files as needed')
    print('3. Test blog pages at /blogs and /blog/[slug]')


if __name__ == '__main__':
    # Configuration
    script_dir = Path(__file__).parent
    project_root = script_dir.parent.parent
    sql_file = project_root / 'yiqkenmy_eifasoftdb (4).sql'
    output_dir = script_dir.parent / 'content' / 'blog'
    
    print(f"SQL file: {sql_file}")
    print(f"Output directory: {output_dir}")
    print('\nStarting blog migration...\n')
    
    if not sql_file.exists():
        print(f"Error: SQL file not found at {sql_file}")
        print("Please update the sql_file path in the script")
    else:
        migrate_blogs(sql_file, output_dir)

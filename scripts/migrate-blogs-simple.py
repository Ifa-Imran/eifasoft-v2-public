#!/usr/bin/env python3
"""
Simple Blog Migration Script - SQL to MDX
Extracts blog data from SQL INSERT statements and creates MDX files

Usage: python scripts/migrate-blogs-simple.py
"""

import re
import os
from pathlib import Path
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


def html_to_mdx(html):
    """Convert HTML to MDX format"""
    if not html:
        return ''
    
    content = html
    
    # Unescape quotes
    content = content.replace("\\'", "'").replace('\\"', '"')
    content = content.replace('\\r', '').replace('\\n', '\n')
    
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
    content = re.sub(r'<dl[^>]*>', '\n', content)
    content = re.sub(r'</dl>', '\n', content)
    content = re.sub(r'<dt[^>]*>', '**', content)
    content = re.sub(r'</dt>', '**\n', content)
    content = re.sub(r'<dd[^>]*>', '  ', content)
    content = re.sub(r'</dd>', '\n', content)
    
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


def extract_blogs_from_sql(sql_file):
    """Extract blog data from SQL file using regex"""
    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Find the INSERT INTO blogs statement
    # Match the entire INSERT statement including all rows
    insert_match = re.search(
        r"INSERT INTO `blogs`[^V]+VALUES\s*(.+?)(?=\n\n--|;[\s\n]*--|\Z)",
        content,
        re.DOTALL | re.IGNORECASE
    )
    
    if not insert_match:
        print("Could not find INSERT INTO blogs statement")
        return []
    
    values_section = insert_match.group(1)
    
    # Split into individual rows
    # Each row is enclosed in parentheses
    blogs = []
    
    # Use a stack-based parser to handle nested parentheses correctly
    rows = []
    current_row = ''
    paren_count = 0
    in_string = False
    escape_next = False
    
    for char in values_section:
        if escape_next:
            current_row += char
            escape_next = False
            continue
            
        if char == '\\':
            current_row += char
            escape_next = True
            continue
        
        if char == "'" and not escape_next:
            in_string = not in_string
            current_row += char
            continue
        
        if not in_string:
            if char == '(':
                paren_count += 1
                if paren_count == 1:
                    current_row = ''
                    continue
            elif char == ')':
                paren_count -= 1
                if paren_count == 0:
                    if current_row.strip():
                        rows.append(current_row)
                    current_row = ''
                    continue
        
        if paren_count > 0:
            current_row += char
    
    print(f"Found {len(rows)} rows in INSERT statement")
    
    # Parse each row
    for row_data in rows:
        blog = parse_row(row_data)
        if blog:
            blogs.append(blog)
    
    return blogs


def parse_row(row_data):
    """Parse a single row of data"""
    # Split by commas, but respect quoted strings
    fields = []
    current_field = ''
    in_string = False
    escape_next = False
    
    for char in row_data:
        if escape_next:
            current_field += char
            escape_next = False
            continue
        
        if char == '\\':
            escape_next = True
            continue
        
        if char == "'":
            in_string = not in_string
            continue  # Don't include quotes in field
        
        if char == ',' and not in_string:
            fields.append(current_field.strip())
            current_field = ''
            continue
        
        current_field += char
    
    # Add last field
    if current_field.strip():
        fields.append(current_field.strip())
    
    # Expected fields (11 total)
    if len(fields) < 11:
        print(f"Warning: Row has only {len(fields)} fields, expected 11")
        return None
    
    try:
        blog = {
            'blog_id': fields[0],
            'blog_title': fields[1],
            'blog_date': fields[2],
            'blog_month': fields[3],
            'blog_img': fields[4],
            'blog_desc': fields[5],
            'meta_keywords': fields[6],
            'meta_title': fields[7],
            'meta_url': fields[8],
            'meta_desc': fields[9],
            'category': fields[10]
        }
        return blog
    except Exception as e:
        print(f"Error parsing row: {e}")
        return None


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
    return tags[:5]


def generate_excerpt(content, max_length=160):
    """Generate excerpt from content"""
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
    return slug.strip('-')


def escape_yaml(s):
    """Escape string for YAML"""
    if not s:
        return '""'
    # Escape quotes and wrap in quotes
    s = str(s).replace('"', '\\"').replace('\n', ' ')
    return f'"{s}"'


def create_mdx_file(blog):
    """Create MDX file content"""
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
    
    published_at = create_date(blog_date, blog_month)
    category_name = CATEGORY_MAP.get(category, 'Technology')
    tags = extract_tags(meta_keywords)
    excerpt = meta_desc or generate_excerpt(blog_desc)
    content = html_to_mdx(blog_desc)
    
    # Create frontmatter
    frontmatter = f"""---
title: {escape_yaml(meta_title)}
excerpt: {escape_yaml(excerpt)}
publishedAt: "{published_at}"
updatedAt: "{published_at}"
author: "EifaSoft Team"
category: "{category_name}"
tags:"""
    
    for tag in tags:
        frontmatter += f'\n  - {escape_yaml(tag)}'
    
    frontmatter += f"""
featuredImage: "/images/blog/{blog_img}"
seo:
  metaTitle: {escape_yaml(meta_title)}
  metaDescription: {escape_yaml(meta_desc)}
  keywords: {escape_yaml(meta_keywords)}
---"""
    
    mdx_content = f"{frontmatter}\n\n{content}\n"
    return mdx_content


def migrate_blogs(sql_file, output_dir):
    """Main migration function"""
    # Extract blogs
    print(f"Reading SQL file: {sql_file}")
    blogs = extract_blogs_from_sql(sql_file)
    
    if not blogs:
        print("No blogs found!")
        return
    
    print(f"Extracted {len(blogs)} blog entries\n")
    
    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    error_count = 0
    
    for blog in blogs:
        try:
            meta_url = blog.get('meta_url', '')
            blog_id = blog.get('blog_id', '')
            filename = sanitize_filename(meta_url or f"blog-{blog_id}")
            
            mdx_content = create_mdx_file(blog)
            
            file_path = output_path / f"{filename}.mdx"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            
            title = blog.get('blog_title', 'Untitled')[:60]
            print(f"✓ {filename}.mdx - {title}")
            success_count += 1
            
        except Exception as e:
            print(f"✗ Error creating blog {blog.get('blog_id', 'unknown')}: {e}")
            error_count += 1
    
    print(f"\n{'='*50}")
    print(f"Migration Summary")
    print(f"{'='*50}")
    print(f"Total blogs: {len(blogs)}")
    print(f"Success: {success_count}")
    print(f"Errors: {error_count}")
    print(f"\nFiles created in: {output_dir}")
    print(f"\nNext steps:")
    print(f"1. Copy images to public/images/blog/")
    print(f"2. Review MDX files")
    print(f"3. Test at http://localhost:3000/blogs")


if __name__ == '__main__':
    script_dir = Path(__file__).parent
    project_root = script_dir.parent.parent
    sql_file = project_root / 'yiqkenmy_eifasoftdb (4).sql'
    output_dir = script_dir.parent / 'content' / 'blog'
    
    print("="*50)
    print("Blog Migration Script - SQL to MDX")
    print("="*50)
    print(f"SQL File: {sql_file}")
    print(f"Output: {output_dir}\n")
    
    if not sql_file.exists():
        print(f"ERROR: SQL file not found at {sql_file}")
    else:
        migrate_blogs(sql_file, output_dir)

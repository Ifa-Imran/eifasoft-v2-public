# Blog Migration Guide

This guide explains how to migrate blog posts from the SQL database to MDX files for the Next.js blog system.

## Overview

The migration scripts convert blog entries from the `yiqkenmy_eifasoftdb (4).sql` file into individual MDX files with proper frontmatter, ready to be used by the Next.js blog system.

## Files Included

- **`migrate-blogs-from-sql.py`** - Python script that reads the SQL dump file directly
- **`migrate-blogs.js`** - Node.js script (requires manual blog data array)

## Prerequisites

### For Python Script (Recommended)
- Python 3.6 or higher
- No additional dependencies required (uses standard library only)

### For Node.js Script
- Node.js 16+ installed
- Dependencies already in package.json

## Migration Steps

### Option 1: Using Python Script (Recommended)

This script automatically reads the SQL file and extracts all blog entries.

```bash
# Navigate to project root
cd e:\Projects\eifasoft\eifasoft-v2

# Run the migration script
python scripts/migrate-blogs-from-sql.py
```

### Option 2: Using Node.js Script

```bash
# Navigate to project root
cd e:\Projects\eifasoft\eifasoft-v2

# Run the migration script
node scripts/migrate-blogs.js
```

## What the Migration Does

1. **Reads blog data** from the SQL file
2. **Converts HTML to MDX** format:
   - Headings: `<h2>` → `## `
   - Lists: `<ul>/<li>` → `-` 
   - Links: `<a href>` → `[text](url)`
   - Bold/Italic: `<strong>` → `**text**`
   - Removes all other HTML tags

3. **Creates frontmatter** with:
   - Title and meta information
   - Publication date (extracted from blog_date + blog_month)
   - Author (defaults to "EifaSoft Team")
   - Category (mapped from SQL categories)
   - Tags (extracted from meta_keywords)
   - Featured image path
   - SEO metadata

4. **Generates MDX files** in `content/blog/` directory:
   - Filename based on `meta_url` slug
   - Each file contains frontmatter + content
   - Files are ready for Next.js to consume

## Example Output

### Input (SQL)
```sql
INSERT INTO `blogs` VALUES (
  3,
  'Revolutionizing the Digital Landscape',
  '29',
  'November',
  'blg1.png',
  '<h3>Innovation</h3><p>Content here...</p>',
  'technology, innovation',
  'Digital Landscape',
  'revolutionizing-digital-landscape',
  'Description here',
  'news-and-events'
);
```

### Output (MDX)
```mdx
---
title: "Digital Landscape"
excerpt: "Description here"
publishedAt: "2025-11-29"
updatedAt: "2025-11-29"
author: "EifaSoft Team"
category: "News & Events"
tags:
  - "technology"
  - "innovation"
featuredImage: "/images/blog/blg1.png"
seo:
  metaTitle: "Digital Landscape"
  metaDescription: "Description here"
  keywords: "technology, innovation"
---

### Innovation

Content here...
```

## Category Mapping

The script maps SQL categories to friendly names:

| SQL Category | MDX Category |
|-------------|--------------|
| `news-and-events` | News & Events |
| `multi-level-marketing` | MLM Software |
| `ecommerce` | E-commerce |
| `` (empty) | Technology |

## Post-Migration Tasks

### 1. Copy Blog Images

```bash
# Create images directory
mkdir -p public/images/blog

# Copy images from old site
# You'll need to manually copy image files from the old site
# to: public/images/blog/
```

### 2. Review Generated Files

Check the generated MDX files in `content/blog/`:

```bash
# View a sample file
cat content/blog/revolutionizing-the-digital-landscape-a-deep-dive-into-eifasoft-technologies-solutions.mdx
```

### 3. Fix Any Issues

Common issues to check:

- **Broken HTML conversion**: Some complex HTML might not convert perfectly
- **Missing images**: Ensure all referenced images exist in `public/images/blog/`
- **Date formatting**: Verify dates are correct
- **Category assignment**: Check if categories make sense

### 4. Test the Blog System

```bash
# Start development server
npm run dev

# Visit:
# - Blog list: http://localhost:3000/blogs
# - Individual posts: http://localhost:3000/blog/[slug]
```

## Customization

### Modify Category Mapping

Edit the `CATEGORY_MAP` in the script:

```python
CATEGORY_MAP = {
    'news-and-events': 'News & Events',
    'multi-level-marketing': 'MLM Software',
    'ecommerce': 'E-commerce',
    'custom-category': 'Your Custom Name',
    '': 'Technology'
}
```

### Adjust Date Format

Modify the `create_date()` function to change the year or format:

```python
def create_date(day, month):
    # Use 2024 instead of current year
    year = 2024
    month_num = MONTH_MAP.get(month, '01')
    day_num = day.zfill(2)
    return f"{year}-{month_num}-{day_num}"
```

### Change Default Author

Update the `create_mdx_file()` function:

```python
author: "Your Name"
```

## Troubleshooting

### Script Can't Find SQL File

Update the path in the script:

```python
sql_file = project_root / 'path/to/your/sql/file.sql'
```

### Permission Errors

Ensure you have write permissions to the `content/blog/` directory:

```bash
# Windows
icacls content\blog /grant Everyone:F

# Linux/Mac
chmod -R 755 content/blog
```

### HTML Not Converting Properly

Some complex HTML structures might need manual cleanup. Check the generated MDX files and edit as needed.

### Missing Dependencies (Node.js script)

```bash
npm install
```

## Migration Statistics

The migration will output a summary:

```
=== Migration Summary ===
Total blogs found: 37
Successfully migrated: 37
Errors: 0

Next steps:
1. Copy blog images from old site to public/images/blog/
2. Review and edit generated MDX files as needed
3. Test blog pages at /blogs and /blog/[slug]
```

## File Structure After Migration

```
eifasoft-v2/
├── content/
│   └── blog/
│       ├── revolutionizing-the-digital-landscape-a-deep-dive-into-eifasoft-technologies-solutions.mdx
│       ├── navigating-the-future-how-eifasoft-technologies-is-shaping-innovation-in-mobile-apps.mdx
│       ├── beyond-websites-the-power-of-eifasoft-technologies-in-crafting-engaging-online-experiences.mdx
│       └── ... (34 more files)
├── public/
│   └── images/
│       └── blog/
│           ├── blg1.png
│           ├── image20230802t093854733z-3bd893dffa.png
│           └── ... (more images)
└── scripts/
    ├── migrate-blogs-from-sql.py
    ├── migrate-blogs.js
    └── README-MIGRATION.md
```

## Support

If you encounter any issues during migration:

1. Check the error messages in the console
2. Verify the SQL file path is correct
3. Ensure you have proper file permissions
4. Review the generated MDX files for formatting issues
5. Manually edit any problematic files

## Next Steps

After successful migration:

1. ✅ All blog posts are in `content/blog/`
2. ✅ Images are in `public/images/blog/`
3. ✅ Test the blog system
4. ✅ Deploy to production

Happy migrating! 🚀

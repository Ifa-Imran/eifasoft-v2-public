import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Helper function to safely parse and validate dates
function safeParseDate(dateValue: unknown): string {
  const now = new Date();
  const fallback = now.toISOString();
  
  if (!dateValue) return fallback;
  
  try {
    const parsed = new Date(dateValue as string);
    // Check if date is valid and not in the distant future
    if (isNaN(parsed.getTime()) || parsed > new Date(now.getTime() + 86400000)) {
      return fallback;
    }
    return parsed.toISOString();
  } catch {
    return fallback;
  }
}

// Helper to safely compare dates for sorting
function safeCompareDate(dateStr: string): number {
  try {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? 0 : date.getTime();
  } catch {
    return 0;
  }
}

export function getSortedPostsData(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || '',
        content,
        author: typeof data.author === 'object' ? data.author.name : (data.author || 'EifaSoft Team'),
        publishedAt: safeParseDate(data.publishedAt),
        updatedAt: data.updatedAt ? safeParseDate(data.updatedAt) : undefined,
        category: data.category || 'Technology',
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        readTime: Math.ceil(stats.minutes),
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    return safeCompareDate(b.publishedAt) - safeCompareDate(a.publishedAt);
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx?$/, ''),
    }));
}

export function getPostData(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents: string;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      content,
      author: typeof data.author === 'object' ? data.author.name : (data.author || 'EifaSoft Team'),
      publishedAt: safeParseDate(data.publishedAt),
      updatedAt: data.updatedAt ? safeParseDate(data.updatedAt) : undefined,
      category: data.category || 'Technology',
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      readTime: Math.ceil(stats.minutes),
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostData(currentSlug);
  if (!currentPost) return [];

  const allPosts = getSortedPostsData().filter((post) => post.slug !== currentSlug);

  // Score posts by relevance
  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Same category
    if (post.category === currentPost.category) score += 3;

    // Shared tags
    const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
    score += sharedTags.length * 2;

    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

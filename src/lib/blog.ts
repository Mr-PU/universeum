import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_POSTS_DIR = path.join(process.cwd(), 'blog-posts');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category?: string;
  content: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category?: string;
}

/**
 * Get all blog posts metadata sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogMetadata[] {
  const files = fs.readdirSync(BLOG_POSTS_DIR);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_POSTS_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Universeum Team',
        image: data.image,
        category: data.category || 'Travel',
      };
    });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_POSTS_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Universeum Team',
      image: data.image,
      category: data.category || 'Travel',
      content,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogMetadata[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

/**
 * Get all unique categories from blog posts
 */
export function getAllBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category).filter((cat): cat is string => Boolean(cat)));
  return Array.from(categories);
}

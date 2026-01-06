import { getAllBlogPosts, getAllBlogCategories } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = getAllBlogPosts();
    const categories = getAllBlogCategories();

    return NextResponse.json({
      posts,
      categories,
      success: true,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', success: false },
      { status: 500 }
    );
  }
}

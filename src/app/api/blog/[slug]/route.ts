import { getBlogPost } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const post = getBlogPost(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      post,
      success: true,
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post', success: false },
      { status: 500 }
    );
  }
}

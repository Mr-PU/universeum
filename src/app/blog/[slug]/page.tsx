import React from 'react';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-900">
        <Header />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      <article className="pt-24 pb-16">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Image */}
        {post.image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl shadow-red-900/30">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>
          </div>
        )}

        {/* Title and Metadata */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {post.category && (
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-900/30 text-orange-400 border border-orange-500/30">
                {post.category}
              </span>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Post Metadata */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 pb-8 border-b border-gray-700">
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <User className="w-5 h-5 text-orange-400" />
              <span>{post.author}</span>
            </div>
            {post.description && (
              <p className="text-lg text-gray-300 italic mt-4 md:mt-0 w-full">
                "{post.description}"
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ ...props }: any) => (
                  <h1 className="text-4xl font-bold text-white mt-8 mb-4" {...props} />
                ),
                h2: ({ ...props }: any) => (
                  <h2 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />
                ),
                h3: ({ ...props }: any) => (
                  <h3 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />
                ),
                p: ({ ...props }: any) => (
                  <p className="text-gray-300 text-lg leading-7 mb-4" {...props} />
                ),
                a: ({ ...props }: any) => (
                  <a className="text-orange-400 hover:text-orange-300 underline" {...props} />
                ),
                ul: ({ ...props }: any) => (
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
                ),
                ol: ({ ...props }: any) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
                ),
                blockquote: ({ ...props }: any) => (
                  <blockquote
                    className="border-l-4 border-orange-500 pl-6 py-2 italic text-gray-400 my-6"
                    {...props}
                  />
                ),
                code: ({ ...props }: any) => (
                  <code
                    className="bg-gray-800 px-2 py-1 rounded text-orange-400 font-mono text-sm"
                    {...props}
                  />
                ),
                pre: ({ ...props }: any) => (
                  <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
                ),
                img: ({ ...props }: any) => (
                  <img className="max-w-full h-auto rounded-lg my-6" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Related Posts - Optional Feature for Future */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-700">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/50"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View More Posts
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}

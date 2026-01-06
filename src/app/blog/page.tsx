'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Newspaper } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category?: string;
}

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        const data = await response.json();
        if (data.success) {
          setAllPosts(data.posts);
          setAllCategories(data.categories);
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Newspaper className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Travel <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover travel tips, destination guides, and inspiring stories from our adventures around the world
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          {allCategories.length > 0 && !loading && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === null
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-900/50'
                      : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-orange-500/50'
                  }`}
                >
                  All Posts
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-900/50'
                        : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-orange-500/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Loading blog posts...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  author={post.author}
                  image={post.image}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

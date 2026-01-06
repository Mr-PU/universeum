'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, Bookmark } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category?: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  author,
  image,
  category,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group h-full bg-gray-800 border border-red-900/30 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/30 cursor-pointer">
        {/* Image Section */}
        {image && (
          <div className="relative h-48 w-full overflow-hidden bg-gray-900">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 flex flex-col h-full">
          {/* Category Badge */}
          {category && (
            <div className="flex items-center mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-900/30 text-orange-400 border border-orange-500/30">
                <Bookmark className="w-3 h-3 mr-1" />
                {category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
            {description}
          </p>

          {/* Metadata Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
            </div>
            <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

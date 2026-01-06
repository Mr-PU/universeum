'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, Calendar } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  to?: string;
}

interface PackageCardProps {
  pkg: Package;
}

// Color gradients for different destinations/categories
const getBackgroundGradient = (id: number): string => {
  const gradients = [
    'from-blue-600 to-cyan-500',
    'from-purple-600 to-pink-500',
    'from-orange-600 to-red-500',
    'from-green-600 to-emerald-500',
    'from-indigo-600 to-blue-500',
    'from-rose-600 to-pink-500',
    'from-amber-600 to-orange-500',
    'from-teal-600 to-green-500',
    'from-violet-600 to-purple-500',
    'from-cyan-600 to-blue-500',
    'from-lime-600 to-green-500',
    'from-fuchsia-600 to-pink-500',
  ];
  return gradients[id % gradients.length];
};

export default function PackageCard({ pkg }: PackageCardProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    // If it's a destination card (has 'to' property), redirect to destinations page
    if (pkg.to) {
      router.push(`/destinations?destination=${encodeURIComponent(pkg.to)}`);
    } else {
      // If it's a regular destination from Popular Destinations section, use the name
      router.push(`/destinations?destination=${encodeURIComponent(pkg.name)}`);
    }
  };

  const gradientBg = getBackgroundGradient(pkg.id);

  return (
    <div 
      onClick={handleClick}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 group border border-red-900/30 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        {!imageError && (
          <img 
            src={pkg.image} 
            alt={pkg.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        {imageError && (
          <div className={`w-full h-64 bg-gradient-to-br ${gradientBg} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
            <div className="text-white text-center">
              <div className="text-4xl mb-2">🌍</div>
              <p className="text-sm opacity-80">{pkg.name}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {pkg.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition">{pkg.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span className="font-semibold text-white">{pkg.rating}</span>
            <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>{pkg.duration}</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/30 hover:shadow-red-900/50 font-semibold">
          {pkg.to ? 'View Packages' : 'View Details'}
        </button>
      </div>
    </div>
  );
}
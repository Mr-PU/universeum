import React from 'react';
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
}

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 group border border-red-900/30">
      <div className="relative overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
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
          View Details
        </button>
      </div>
    </div>
  );
}
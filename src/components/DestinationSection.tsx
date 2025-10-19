import React from 'react';
import PackageCard from './PackageCard';
import destinationsData from '@/data/data.json';

export default function DestinationSection() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-orange-950 via-gray-900 to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Popular Destinations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our handpicked destinations that promise unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.destinations.map(dest => (
            <PackageCard key={dest.id} pkg={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
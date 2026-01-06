'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import destinationsData from '@/data/data.json';

// Color gradients for fallback images
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
  ];
  return gradients[id % gradients.length];
};

function DestinationsContent() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const packagesRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Check if destination is passed as query parameter
  useEffect(() => {
    const destination = searchParams.get('destination');
    if (destination) {
      setSelectedDestination(destination);
      // Scroll to packages section after setting state
      setTimeout(() => {
        packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [searchParams]);

  const handleImageError = (id: number) => {
    setFailedImages(prev => new Set(prev).add(id));
  };

  // Get packages for the selected destination
  const getPackagesForDestination = (destinationName: string) => {
    return destinationsData.packages.filter(pkg => pkg.to === destinationName);
  };

  const selectedPackages = selectedDestination 
    ? getPackagesForDestination(selectedDestination) 
    : [];

  // Handle destination selection with smooth scroll
  const handleDestinationSelect = (destinationName: string) => {
    const isSelected = selectedDestination === destinationName;
    setSelectedDestination(isSelected ? null : destinationName);
    
    // Scroll to packages section if not already selected
    if (!isSelected) {
      setTimeout(() => {
        packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Explore <span className="text-gradient">Destinations</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the world's most beautiful and exotic destinations. Choose your next adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsData.destinations.map((destination) => {
              const isSelected = selectedDestination === destination.name;
              const packageCount = destinationsData.packages.filter(pkg => pkg.to === destination.name).length;
              
              return (
                <div
                  key={destination.id}
                  onClick={() => handleDestinationSelect(destination.name)}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 group border cursor-pointer ${
                    isSelected 
                      ? 'border-orange-500 shadow-2xl shadow-orange-500/50' 
                      : 'border-red-900/30 hover:border-orange-500/50'
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    {!failedImages.has(destination.id) && (
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          isSelected ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                        onError={() => handleImageError(destination.id)}
                        loading="lazy"
                      />
                    )}
                    {failedImages.has(destination.id) && (
                      <div className={`w-full h-full bg-gradient-to-br ${getBackgroundGradient(destination.id)} transition-transform duration-300 flex items-center justify-center ${
                        isSelected ? 'scale-110' : 'group-hover:scale-110'
                      }`}>
                        <div className="text-white text-center">
                          <div className="text-5xl mb-2">🌏</div>
                          <p className="text-sm opacity-90">{destination.name}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {destination.price}
                    </div>
                    {isSelected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="text-center">
                          <div className="text-orange-400 text-lg font-bold mb-2">✓ Selected</div>
                          {packageCount > 0 && (
                            <div className="text-white text-sm">{packageCount} package{packageCount > 1 ? 's' : ''} available</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 transition ${
                      isSelected ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
                    }`}>
                      {destination.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{destination.description}</p>

                    {/* Rating & Duration */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                        <span className="font-semibold text-white">{destination.rating}</span>
                        <span className="text-gray-500">({destination.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-400">
                        <Clock className="w-4 h-4" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>

                    {/* View Packages Button */}
                    <button className={`w-full py-3 rounded-lg transition shadow-lg font-semibold flex items-center justify-center space-x-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-orange-900/50 hover:from-orange-700 hover:to-red-700'
                        : 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-red-900/30 hover:from-red-700 hover:to-orange-700 hover:shadow-red-900/50'
                    }`}>
                      <span>{isSelected ? 'View Packages' : 'View Packages'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      {selectedDestination && selectedPackages.length > 0 && (
        <div ref={packagesRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-red-950/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Packages to <span className="text-orange-400">{selectedDestination}</span>
                  </h2>
                  <p className="text-gray-400">
                    Found {selectedPackages.length} package{selectedPackages.length > 1 ? 's' : ''} for your selected destination
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="text-gray-400 hover:text-orange-400 transition text-sm font-semibold"
                >
                  Clear Selection
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {selectedPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 group border border-orange-900/30 hover:border-orange-500/50"
                  >
                    {/* Package Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Package Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-orange-400 text-sm mb-3 font-semibold">
                        <MapPin className="w-4 h-4" />
                        <span>{pkg.from} <ArrowRight className="w-3 h-3 inline" /> {pkg.to}</span>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                      {/* Rating & Duration */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                          <span className="font-semibold text-white">{pkg.rating}</span>
                          <span className="text-gray-500">({pkg.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-orange-400">
                          <Clock className="w-4 h-4" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-orange-400 mb-2">Highlights:</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                            <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {highlight}
                            </span>
                          ))}
                          {pkg.highlights.length > 2 && (
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              +{pkg.highlights.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="w-full block text-center bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 font-semibold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedDestination && selectedPackages.length === 0 && (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gray-800 rounded-xl p-8 border border-red-900/30">
              <h3 className="text-xl font-bold text-white mb-2">No Packages Available</h3>
              <p className="text-gray-400 mb-6">
                We don't have any packages to {selectedDestination} at the moment. Please select another destination.
              </p>
              <button
                onClick={() => setSelectedDestination(null)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition"
              >
                Browse All Destinations
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-orange-400 transition">
          ← Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <DestinationsContent />
    </Suspense>
  );
}

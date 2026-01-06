'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Star, ArrowRight, Search } from 'lucide-react';
import destinationsData from '@/data/data.json';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination');
  const guests = searchParams.get('guests');

  // Get packages matching the search destination
  const searchResults = destination
    ? destinationsData.packages.filter(pkg =>
        pkg.to.toLowerCase().includes(destination.toLowerCase())
      )
    : [];

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Search className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Search <span className="text-gradient">Results</span>
            </h1>
            {destination && (
              <p className="text-xl text-gray-300 mb-4">
                Destination: <span className="font-bold text-orange-400">{destination}</span>
                {guests && <span className="text-gray-400"> • Guests: {guests}</span>}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {searchResults.length > 0 ? (
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Found {searchResults.length} Package{searchResults.length > 1 ? 's' : ''}
                </h2>
                <p className="text-gray-400">
                  Showing all available packages to {destination}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {searchResults.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 group border border-orange-900/30 hover:border-orange-500/50"
                  >
                    {/* Package Image */}
                    <div className="relative overflow-hidden h-64">
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
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-800 rounded-xl p-12 border border-red-900/30">
                <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                {destination ? (
                  <>
                    <p className="text-gray-400 mb-6">
                      We couldn't find any packages to <span className="font-bold text-orange-400">{destination}</span>
                    </p>
                    <p className="text-gray-400 mb-8">Available destinations: Kashmir, Andaman, Goa</p>
                  </>
                ) : (
                  <p className="text-gray-400 mb-8">Please select a destination to search</p>
                )}
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-orange-400 transition">
          ← Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <SearchResultsContent />
    </Suspense>
  );
}

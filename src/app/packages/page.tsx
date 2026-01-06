'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plane, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import packagesData from '@/data/data.json';

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Plane className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Travel <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Curated travel packages from your city to exciting destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Packages List */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {packagesData.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 border border-red-900/30 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent md:bg-none"></div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition">
                          {pkg.name}
                        </h3>
                        <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                          {pkg.price}
                        </span>
                      </div>

                      {/* Route */}
                      <div className="flex items-center space-x-4 mb-4 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-orange-400" />
                          <span className="font-semibold">{pkg.from}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-orange-400" />
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-orange-400" />
                          <span className="font-semibold">{pkg.to}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{pkg.description}</p>

                      {/* Stats */}
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-orange-400" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                          <span className="text-white font-semibold">{pkg.rating}</span>
                          <span>({pkg.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/30 hover:shadow-red-900/50 font-semibold w-full md:w-auto space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Star, Check, ArrowLeft, Users, Utensils, Hotel } from 'lucide-react';
import packagesData from '@/data/data.json';

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = parseInt(params.id as string);
  const pkg = packagesData.packages.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <main className="min-h-screen bg-gray-900">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Package Not Found</h1>
            <p className="text-gray-400 mb-8">Sorry, the package you're looking for doesn't exist.</p>
            <Link href="/packages" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Packages
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Back Button */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-8">
          <Link href="/packages" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Packages
          </Link>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-red-900/30 h-96">
            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pkg.name}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Route Info */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-red-900/30">
              <h2 className="text-2xl font-bold text-white mb-4">Journey Details</h2>
              <div className="grid grid-cols-3 gap-4 items-center">
                <div>
                  <p className="text-gray-400 text-sm mb-1">From</p>
                  <p className="text-xl font-bold text-white flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span>{pkg.from}</span>
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Duration</p>
                    <p className="text-lg font-bold text-orange-400 flex items-center space-x-1">
                      <Clock className="w-5 h-5" />
                      <span>{pkg.duration}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-1">To</p>
                  <p className="text-xl font-bold text-white flex items-center space-x-2 justify-end">
                    <span>{pkg.to}</span>
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-red-900/30">
              <h2 className="text-2xl font-bold text-white mb-4">About This Package</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{pkg.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-red-900/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Utensils className="w-6 h-6 text-orange-400" />
                <span>Highlights</span>
              </h2>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-red-900/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Hotel className="w-6 h-6 text-orange-400" />
                <span>Package Includes</span>
              </h2>
              <ul className="space-y-3">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-red-900/30 sticky top-24 space-y-6">
              {/* Price */}
              <div>
                <p className="text-gray-400 text-sm mb-2">Package Price</p>
                <p className="text-4xl font-bold text-orange-400">{pkg.price}</p>
                <p className="text-gray-400 text-sm mt-2">Per person</p>
              </div>

              {/* Rating */}
              <div className="border-t border-red-900/30 pt-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                  <span className="text-2xl font-bold text-white">{pkg.rating}</span>
                </div>
                <p className="text-gray-400">Based on {pkg.reviews} reviews</p>
              </div>

              {/* Booking Button */}
              <div className="border-t border-red-900/30 pt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/50 font-bold text-lg">
                  Book This Package
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition font-semibold">
                  Request More Info
                </button>
              </div>

              {/* Info */}
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 text-sm">
                <p className="text-orange-300">
                  <strong>Limited Availability:</strong> This package has limited slots. Book now to secure your spot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Packages */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Other Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packagesData.packages
              .filter(p => p.id !== pkg.id)
              .slice(0, 2)
              .map((similar) => (
                <Link
                  key={similar.id}
                  href={`/packages/${similar.id}`}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 border border-red-900/30 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={similar.image}
                      alt={similar.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition mb-2">
                      {similar.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-400 font-bold">{similar.price}</span>
                      <span className="text-gray-400">{similar.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Back to Packages */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/packages" className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-orange-400 transition">
          ← Back to All Packages
        </Link>
      </div>

      <Footer />
    </main>
  );
}

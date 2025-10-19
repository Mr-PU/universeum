'use client';

import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Your Next
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent"> Adventure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Curated travel experiences to the world's most stunning destinations. 
            Start your journey with us today.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto border border-red-900/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 border border-red-900/30 rounded-lg px-4 py-3 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition">
                <MapPin className="w-5 h-5 text-orange-400" />
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="flex-1 outline-none bg-transparent text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 border border-red-900/30 rounded-lg px-4 py-3 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition">
                <Calendar className="w-5 h-5 text-orange-400" />
                <input 
                  type="text" 
                  placeholder="Date" 
                  className="flex-1 outline-none bg-transparent text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 border border-red-900/30 rounded-lg px-4 py-3 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition">
                <Users className="w-5 h-5 text-orange-400" />
                <input 
                  type="text" 
                  placeholder="Guests" 
                  className="flex-1 outline-none bg-transparent text-white placeholder-gray-400"
                />
              </div>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg px-6 py-3 hover:from-red-700 hover:to-orange-700 transition flex items-center justify-center space-x-2 shadow-lg shadow-red-900/50 hover:shadow-red-900/70">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import { Search, MapPin, Users, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import destinationsData from '@/data/data.json';

export default function Hero() {
  const [searchDestination, setSearchDestination] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errors, setErrors] = useState<{ destination?: string; guests?: string }>({});
  const router = useRouter();

  // Get unique destinations from packages
  const availableDestinations = Array.from(
    new Set(destinationsData.packages.map(pkg => pkg.to))
  ).sort();

  // Get filtered suggestions based on input
  const filteredSuggestions = searchDestination.trim()
    ? availableDestinations.filter(dest =>
        dest.toLowerCase().includes(searchDestination.toLowerCase())
      )
    : availableDestinations;

  const validateForm = (): boolean => {
    const newErrors: { destination?: string; guests?: string } = {};

    // Validate destination
    if (!searchDestination.trim()) {
      newErrors.destination = 'Please select a destination';
    }

    // Validate guest count
    if (!guestCount.trim()) {
      newErrors.guests = 'Please enter number of travelers';
    } else {
      const guests = parseInt(guestCount, 10);
      if (isNaN(guests) || guests < 1 || guests > 100) {
        newErrors.guests = 'Number of travelers must be between 1 and 100';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (!validateForm()) {
      return;
    }

    // Redirect to search results page with destination and guest count
    const params = new URLSearchParams();
    params.append('destination', searchDestination);
    params.append('guests', guestCount);
    router.push(`/search-results?${params.toString()}`);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchDestination(suggestion);
    setShowSuggestions(false);
    setErrors({ ...errors, destination: undefined });
  };

  const handleDestinationChange = (value: string) => {
    setSearchDestination(value);
    setShowSuggestions(true);
    // Clear destination error when user starts typing
    if (errors.destination) {
      setErrors({ ...errors, destination: undefined });
    }
  };

  const handleGuestChange = (value: string) => {
    setGuestCount(value);
    // Clear guest error when user starts typing
    if (errors.guests) {
      setErrors({ ...errors, guests: undefined });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Destination Search with Dropdown */}
              <div className="relative">
                <div className={`flex items-center space-x-2 bg-gray-800/50 border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-500/20 transition ${
                  errors.destination 
                    ? 'border-red-500 focus-within:border-red-500' 
                    : 'border-red-900/30 focus-within:border-orange-500'
                }`}>
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search destination..." 
                    value={searchDestination}
                    onChange={(e) => handleDestinationChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setShowSuggestions(true)}
                    className="flex-1 outline-none bg-transparent text-white placeholder-gray-400"
                  />
                </div>
                
                {/* Error Message */}
                {errors.destination && (
                  <div className="flex items-center space-x-1 mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.destination}</span>
                  </div>
                )}
                
                {/* Dropdown Suggestions */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-orange-500/50 rounded-lg shadow-xl z-50">
                    {filteredSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-orange-600/20 transition border-b border-gray-700/50 last:border-b-0 text-white hover:text-orange-400"
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span>{suggestion}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className={`flex items-center space-x-2 bg-gray-800/50 border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-500/20 transition ${
                  errors.guests 
                    ? 'border-red-500 focus-within:border-red-500' 
                    : 'border-red-900/30 focus-within:border-orange-500'
                }`}>
                  <Users className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <input 
                    type="number" 
                    placeholder="Number of travelers (1-100)" 
                    value={guestCount}
                    onChange={(e) => handleGuestChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    min="1"
                    max="100"
                    className="flex-1 outline-none bg-transparent text-white placeholder-gray-400"
                  />
                </div>
                
                {/* Error Message */}
                {errors.guests && (
                  <div className="flex items-center space-x-1 mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.guests}</span>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleSearch()}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg px-6 py-3 hover:from-red-700 hover:to-orange-700 transition flex items-center justify-center space-x-2 shadow-lg shadow-red-900/50 hover:shadow-red-900/70"
              >
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
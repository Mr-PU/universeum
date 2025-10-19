'use client';

import React, { useState } from 'react';
import { Menu, MapPin } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-gradient-to-r from-gray-900 via-red-950 to-gray-900 backdrop-blur-sm shadow-lg z-50 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Universeum Expedition</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-orange-400 transition">Home</a>
              <a href="#destinations" className="text-gray-300 hover:text-orange-400 transition">Destinations</a>
              <a href="#packages" className="text-gray-300 hover:text-orange-400 transition">Packages</a>
              <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition">Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition">Contact</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-orange-400 transition">Login</button>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition shadow-lg shadow-red-900/50">
                Book Now
              </button>
            </div>
            
            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
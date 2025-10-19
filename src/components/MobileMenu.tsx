'use client';

import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 shadow-xl border-l border-red-900/20">
        <div className="p-4">
          <button onClick={onClose} className="mb-8 text-gray-300 hover:text-orange-400 transition">
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-300 hover:text-orange-400 transition" onClick={onClose}>Home</a>
            <a href="#destinations" className="text-gray-300 hover:text-orange-400 transition" onClick={onClose}>Destinations</a>
            <a href="#packages" className="text-gray-300 hover:text-orange-400 transition" onClick={onClose}>Packages</a>
            <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition" onClick={onClose}>Reviews</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition" onClick={onClose}>Contact</a>
            <button className="text-left text-gray-300 hover:text-orange-400 transition">Login</button>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition text-left shadow-lg shadow-red-900/50">
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
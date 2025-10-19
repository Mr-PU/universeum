import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">WanderLux</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for unforgettable travel experiences around the globe.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Destinations</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Travel Packages</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Cancellation Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@wanderlux.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WanderLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
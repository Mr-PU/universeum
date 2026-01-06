'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PhonePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number (basic validation)
    if (phone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    // Here you can send the phone number to your backend
    console.log('Phone number submitted:', phone);
    
    // Optional: Send to backend
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phone })
    // });

    setSubmitted(true);
    
    // Close popup after 2 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/70 via-red-950/50 to-orange-950/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fadeIn relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-orange-400/60 hover:text-orange-400 transition duration-200 p-2 rounded-full hover:bg-orange-500/10"
          aria-label="Close popup"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-3">
              Plan Your Dream Trip!
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Get personalized travel recommendations and exclusive offers. Share your phone number and we'll be in touch soon with amazing deals tailored just for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-3 bg-gray-700 border border-orange-500/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Get Exclusive Deals
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, just great travel deals!
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Thank You!
            </h3>
            <p className="text-gray-300 text-lg">
              We'll reach out shortly with amazing travel offers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

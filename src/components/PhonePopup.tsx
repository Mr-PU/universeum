'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { config } from '@/config/config';

export default function PhonePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfPeople: '1',
    travelDate: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Only show popup if enabled in config
    if (!config.popup.enabled) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, config.popup.delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email is optional, but if provided, must be valid
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.numberOfPeople || parseInt(formData.numberOfPeople) < 1) {
      newErrors.numberOfPeople = 'Number of people is required';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    }

    // Description is optional, no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          travelers: formData.numberOfPeople,
          travelDate: formData.travelDate,
          description: formData.description,
          source: 'Homepage Popup',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          numberOfPeople: '1',
          travelDate: '',
          description: '',
        });

        setTimeout(() => {
          setIsVisible(false);
          setSubmitted(false);
        }, 2000);
      } else {
        setSubmitError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/70 via-red-950/50 to-orange-950/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className={`bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-2xl shadow-2xl ${config.popup.maxWidth} w-full p-8 animate-fadeIn relative my-8`}>
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
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
              Plan Your Dream Trip!
            </h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Share your travel details and get personalized recommendations with exclusive offers.
            </p>

            {submitError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.name ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-200 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.phone ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-200 mb-2">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.email ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Number of People */}
              <div>
                <label htmlFor="numberOfPeople" className="block text-xs font-semibold text-gray-200 mb-2">
                  Number of Travelers *
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  min="1"
                  max="20"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.numberOfPeople ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.numberOfPeople && <p className="text-red-400 text-xs mt-1">{errors.numberOfPeople}</p>}
              </div>

              {/* Travel Date */}
              <div>
                <label htmlFor="travelDate" className="block text-xs font-semibold text-gray-200 mb-2">
                  Preferred Travel Date *
                </label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.travelDate ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.travelDate && <p className="text-red-400 text-xs mt-1">{errors.travelDate}</p>}
              </div>
              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-semibold text-gray-200 mb-2">
                  Trip Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about your ideal trip..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none ${
                    errors.description ? 'border-red-500' : 'border-orange-500/50'
                  }`}
                />
                {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl text-sm ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Submitting...' : 'Get Exclusive Deals'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, just great travel deals!
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-orange-400"
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
            <h3 className="text-xl font-bold text-white mb-2">
              Thank You!
            </h3>
            <p className="text-gray-300 text-sm">
              We'll reach out shortly with amazing travel offers tailored to your preferences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

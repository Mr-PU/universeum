'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Users, Calendar, MapPinIcon } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    travelers: '1',
    accommodationType: 'standard',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const destinations = [
    'Kashmir',
    'Andaman',
    'Goa',
    'Jaipur',
    'Rajasthan',
    'Kerala',
    'Manali',
    'Agra',
    'Shimla',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    }

    if (!formData.returnDate) {
      newErrors.returnDate = 'Return date is required';
    }

    if (!formData.travelers || parseInt(formData.travelers) < 1) {
      newErrors.travelers = 'Number of travelers must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you can send the booking data to your backend
      console.log('Booking submitted:', formData);

      // Optional: Send to backend
      // fetch('/api/booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          destination: '',
          travelDate: '',
          returnDate: '',
          travelers: '1',
          accommodationType: 'standard',
          specialRequests: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Book Your Adventure</h1>
          <p className="text-gray-300 text-lg">Fill in your details below and our team will help you plan the perfect trip</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-2xl p-12 text-center">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 mx-auto text-orange-400"
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
              <h2 className="text-3xl font-bold text-white mb-4">Booking Request Received!</h2>
              <p className="text-gray-300 text-lg mb-4">
                Thank you for your booking request. Our team will contact you shortly with more details and confirmation.
              </p>
              <p className="text-gray-400">
                We'll reach out to the phone number and email you provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-2xl p-8 shadow-2xl">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-400" />
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.fullName ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.email ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.phone ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Number of Travelers */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Number of Travelers *
                    </label>
                    <input
                      type="number"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.travelers ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.travelers && <p className="text-red-400 text-sm mt-1">{errors.travelers}</p>}
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  Trip Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      <MapPinIcon className="w-4 h-4 inline mr-2" />
                      Destination *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.destination ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    >
                      <option value="">Select a destination</option>
                      {destinations.map(dest => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                    {errors.destination && <p className="text-red-400 text-sm mt-1">{errors.destination}</p>}
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.travelDate ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.travelDate && <p className="text-red-400 text-sm mt-1">{errors.travelDate}</p>}
                  </div>

                  {/* Return Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Return Date *
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                        errors.returnDate ? 'border-red-500' : 'border-orange-500/50'
                      }`}
                    />
                    {errors.returnDate && <p className="text-red-400 text-sm mt-1">{errors.returnDate}</p>}
                  </div>

                  {/* Accommodation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Accommodation Type
                    </label>
                    <select
                      name="accommodationType"
                      value={formData.accommodationType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-orange-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    >
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="premium">Premium</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Special Requests or Requirements
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special dietary requirements, accessibility needs, or preferences?"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-orange-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Complete Booking Request
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                We respect your privacy. Your information will be used only for booking purposes.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

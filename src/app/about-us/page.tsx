'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Target, Heart, Zap } from 'lucide-react';

export default function AboutUsPage() {
  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Expertise",
      description: "With experience across 50+ destinations worldwide, we know travel inside and out."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction and safety are our top priorities in every booking and journey."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Itineraries",
      description: "Every trip is customized to match your unique preferences and travel style."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Support",
      description: "24/7 customer support to help you throughout your travel experience."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in travel service and customer satisfaction."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Dedicated travel consultants with years of experience in the industry."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Universeum Expedition</h1>
          <p className="text-gray-300 text-lg">Your trusted partner for unforgettable travel experiences</p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Universeum Expedition is a premium travel company dedicated to creating extraordinary travel experiences across India and beyond. Since our inception, we've been committed to transforming the way people travel by offering personalized, immersive, and unforgettable journeys.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We believe that travel is more than just visiting new places—it's about creating memories, experiencing different cultures, and discovering new perspectives. Our mission is to make every journey a transformative experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a team of passionate travel experts and local guides, we curate each itinerary to ensure you experience the best of every destination, whether it's the serene backwaters of Kerala, the majestic peaks of Kashmir, or the vibrant beaches of Andaman.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-400 mb-4">5000+</div>
                <p className="text-xl text-white mb-6">Happy Travelers</p>
                <div className="space-y-4 text-gray-400">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    50+ Destinations Covered
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    10+ Years Experience
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    100% Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To inspire and enable people to explore the world by providing exceptional travel experiences that combine adventure, culture, and relaxation. We aim to create journeys that not only fulfill wanderlust but also foster meaningful connections with destinations and local communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be India's most trusted and innovative travel company, recognized for delivering world-class experiences that exceed expectations. We envision a world where travel brings people closer to nature, culture, and each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12">
            These principles guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/60 transition group">
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Universeum Expedition?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalized Planning</h3>
                <p className="text-gray-400">Every itinerary is tailored to your preferences, budget, and travel style.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Local Expertise</h3>
                <p className="text-gray-400">Our local guides provide insider knowledge and authentic experiences.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>
                <p className="text-gray-400">No hidden charges. What you see is what you pay, with detailed breakdowns.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">Our team is always available to help before, during, and after your trip.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
                <p className="text-gray-400">Your safety is our priority with carefully vetted partners and guides.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Bookings</h3>
                <p className="text-gray-400">Easy modifications and cancellations with our customer-friendly policies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of satisfied travelers who have experienced unforgettable journeys with us.
          </p>
          <a
            href="/booking"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg transition text-lg shadow-lg hover:shadow-xl"
          >
            Book Your Trip Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

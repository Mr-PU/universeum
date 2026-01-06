import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DestinationSection from '@/components/DestinationSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import PhonePopup from '@/components/PhonePopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <DestinationSection />
      <TestimonialSection />
      <Footer />
      <PhonePopup />
    </main>
  );
}
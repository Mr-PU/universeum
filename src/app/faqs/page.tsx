'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a trip?",
    answer: "Simply click on the 'Book Now' button in the header, fill in your travel details, and our team will contact you within 24 hours to confirm your booking and discuss customization options."
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer: "Please refer to our Cancellation Policy page for detailed information about refunds and cancellation terms. Generally, cancellations made 30 days before travel receive full refunds."
  },
  {
    id: 3,
    question: "Are group discounts available?",
    answer: "Yes! We offer special discounts for group bookings of 10 or more people. Please contact our sales team at info@UniverseumExpedition.com for group booking inquiries."
  },
  {
    id: 4,
    question: "What should I pack for my trip?",
    answer: "Packing depends on your destination and season. We recommend checking our Blog section which has detailed packing guides for each destination to help you prepare."
  },
  {
    id: 5,
    question: "Do you offer travel insurance?",
    answer: "Yes, travel insurance is available for most of our packages. It covers medical emergencies, trip cancellations, and lost luggage. You can select this option during booking."
  },
  {
    id: 6,
    question: "What are your payment methods?",
    answer: "We accept credit cards, debit cards, bank transfers, and digital payment methods. A 30% advance payment is required to confirm your booking."
  },
  {
    id: 7,
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! All our packages are customizable. You can discuss your preferences with our travel consultants after submitting your booking request."
  },
  {
    id: 8,
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 30-45 days in advance to ensure availability and better rates. Last-minute bookings are possible but may have limited options."
  },
  {
    id: 9,
    question: "Is visa assistance provided?",
    answer: "Yes, we provide visa guidance and documentation support for international destinations. Our team will assist you with all necessary requirements."
  },
  {
    id: 10,
    question: "What if I need to change my travel dates?",
    answer: "Date changes are possible based on availability. Please contact us as soon as possible. Changes made more than 30 days before travel may incur minimal charges."
  }
];

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-orange-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          </div>
          <p className="text-gray-300 text-lg">Find answers to common questions about our travel packages and services</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl overflow-hidden hover:border-orange-500/50 transition">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition"
                >
                  <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedId === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedId === faq.id && (
                  <div className="px-6 py-4 bg-gray-800/30 border-t border-orange-500/20">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              Our travel experts are here to help. Contact us directly for personalized assistance.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

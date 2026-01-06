'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-orange-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Terms & Conditions</h1>
          </div>
          <p className="text-gray-300 text-lg">Please read these terms carefully before booking your travel package</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8">
          <div className="space-y-8 text-gray-300">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Universeum Expedition's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on Universeum Expedition's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or 'mirror' the materials on any other server</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Booking and Payment</h2>
              <p className="leading-relaxed mb-3">
                All bookings made through our website are subject to acceptance and confirmation by Universeum Expedition. We reserve the right to reject any booking for any reason. A non-refundable deposit of 30% is required to secure your booking. The remaining balance must be paid 60 days before your travel date.
              </p>
              <p className="leading-relaxed">
                Payment can be made via credit card, debit card, or bank transfer. All prices are in Indian Rupees (₹) unless otherwise specified and include applicable taxes.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p className="leading-relaxed">
                The materials on Universeum Expedition's website are provided on an 'as is' basis. Universeum Expedition makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p className="leading-relaxed">
                The materials appearing on Universeum Expedition's website could include technical, typographical, or photographic errors. Universeum Expedition does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Modifications</h2>
              <p className="leading-relaxed">
                Universeum Expedition may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in India.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Universeum Expedition</strong><br/>
                Email: info@UniverseumExpedition.com<br/>
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

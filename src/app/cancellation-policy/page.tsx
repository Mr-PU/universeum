'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XCircle } from 'lucide-react';

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-10 h-10 text-orange-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Cancellation Policy</h1>
          </div>
          <p className="text-gray-300 text-lg">Understanding our cancellation and refund policies</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Policy */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8 mb-8">
            <div className="space-y-8 text-gray-300">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Cancellation by Customer</h2>
                <p className="leading-relaxed mb-4">
                  Customers may cancel their bookings by submitting a written request to our office. The refund amount will depend on when the cancellation is made relative to the travel date:
                </p>
              </div>

              {/* Cancellation Schedule Table */}
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Cancellation Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-orange-500/20 border-b border-orange-500/30">
                        <th className="px-4 py-3 text-left font-semibold text-white">Days Before Travel</th>
                        <th className="px-4 py-3 text-left font-semibold text-white">Refund Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                        <td className="px-4 py-3">60 days or more</td>
                        <td className="px-4 py-3">100% refund (minus processing fees)</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                        <td className="px-4 py-3">45-59 days</td>
                        <td className="px-4 py-3">90% refund</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                        <td className="px-4 py-3">30-44 days</td>
                        <td className="px-4 py-3">75% refund</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                        <td className="px-4 py-3">15-29 days</td>
                        <td className="px-4 py-3">50% refund</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                        <td className="px-4 py-3">7-14 days</td>
                        <td className="px-4 py-3">25% refund</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50">
                        <td className="px-4 py-3">Less than 7 days</td>
                        <td className="px-4 py-3">No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Modification of Bookings</h2>
                <p className="leading-relaxed mb-3">
                  Changes to your travel dates or destination are subject to availability and may incur additional charges:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Changes made 45+ days before travel: No additional charges</li>
                  <li>Changes made 30-44 days before travel: 5% modification fee</li>
                  <li>Changes made 15-29 days before travel: 10% modification fee</li>
                  <li>Changes made less than 15 days before travel: 15% modification fee</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation by Universeum Expedition</h2>
                <p className="leading-relaxed">
                  Universeum Expedition reserves the right to cancel bookings in case of force majeure events (natural disasters, pandemics, political instability, etc.). In such cases, customers will be offered alternative dates or a full refund of all payments made.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Non-Refundable Components</h2>
                <p className="leading-relaxed mb-3">
                  The following components are typically non-refundable:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Travel insurance premiums</li>
                  <li>Visa processing fees</li>
                  <li>Service charges and administrative fees</li>
                  <li>Bookings made less than 7 days before travel</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Refund Processing</h2>
                <p className="leading-relaxed">
                  Approved refunds will be processed within 14 business days of cancellation. Refunds will be credited to the original payment method used for booking. In case of payment through bank transfer, the refund will be transferred to the provided bank account.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Travel Insurance Claims</h2>
                <p className="leading-relaxed">
                  If you have purchased travel insurance through us, you may be eligible for additional coverage. Please check your insurance policy documents for claim procedures and coverage details.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact for Cancellations</h2>
                <p className="leading-relaxed mb-3">
                  To cancel your booking, please send a written request to:
                </p>
                <p className="bg-gray-800/50 border border-orange-500/20 rounded p-4">
                  <strong>Universeum Expedition</strong><br/>
                  Email: info@UniverseumExpedition.com<br/>
                  Phone: +91 98765 43210<br/>
                  <span className="text-sm text-gray-400">Please provide your booking reference number</span>
                </p>
              </div>

              {/* Important Note */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-400 font-semibold mb-2">⚠️ Important Note</p>
                <p className="text-gray-300">
                  This policy is subject to change without notice. Please review the cancellation policy at the time of booking. In case of any discrepancies, the policy stated in your booking confirmation will be applicable.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Have more questions?</p>
            <a
              href="/faqs"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Visit FAQs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

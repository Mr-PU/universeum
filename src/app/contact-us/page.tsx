'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, Smartphone, Globe, AlertCircle } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError('');

    const submitToApi = async () => {
      try {
        const response = await fetch('/api/submit-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            description: formData.message,
            source: 'Contact Us Page',
          }),
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });

          // Reset after 3 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        } else {
          setSubmitError(result.error || 'Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    submitToApi();
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      description: 'Call us during business hours',
      info: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Send us an email anytime',
      info: 'info@UniverseumExpedition.com',
      link: 'mailto:info@UniverseumExpedition.com'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Office',
      description: 'Visit us in person',
      info: 'New Delhi, India',
      link: '#'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hours',
      description: 'We\'re available around the clock',
      info: '24/7 Support Available',
      link: '#'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-6 text-center hover:border-orange-500/60 transition hover:transform hover:scale-105"
              >
                <div className="text-orange-400 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="text-orange-400 font-semibold">{method.info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
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
                    <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-300">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                    {submitError && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-300 text-sm">{submitError}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-200 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                            errors.name ? 'border-red-500' : 'border-orange-500/50'
                          }`}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
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
                    </div>

                    {/* Phone */}
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

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                          errors.subject ? 'border-red-500' : 'border-orange-500/50'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="modification">Modify Existing Booking</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                          errors.message ? 'border-red-500' : 'border-orange-500/50'
                        }`}
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div>
              <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-orange-500/30 rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Get More Information</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="w-5 h-5 text-orange-400" />
                      <h4 className="font-semibold text-white">Quick Call</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Call us directly for immediate assistance</p>
                    <a href="tel:+919876543210" className="text-orange-400 font-semibold mt-2 inline-block hover:text-orange-300">
                      +91 98765 43210
                    </a>
                  </div>

                  <div className="border-t border-orange-500/20 pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <h4 className="font-semibold text-white">Email Support</h4>
                    </div>
                    <p className="text-gray-400 text-sm">For detailed inquiries, email us</p>
                    <a href="mailto:info@UniverseumExpedition.com" className="text-orange-400 font-semibold mt-2 inline-block hover:text-orange-300">
                      info@UniverseumExpedition.com
                    </a>
                  </div>

                  <div className="border-t border-orange-500/20 pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-orange-400" />
                      <h4 className="font-semibold text-white">Office Location</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Visit our office in the heart of New Delhi</p>
                    <p className="text-orange-400 font-semibold mt-2">
                      New Delhi, India
                    </p>
                  </div>

                  <div className="border-t border-orange-500/20 pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <h4 className="font-semibold text-white">Support Hours</h4>
                    </div>
                    <p className="text-gray-400 text-sm">We're available 24/7 for your convenience</p>
                    <p className="text-orange-400 font-semibold mt-2">
                      Round the clock support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common Questions?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Check out our FAQs for quick answers
          </p>
          <a
            href="/faqs"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            View FAQs
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

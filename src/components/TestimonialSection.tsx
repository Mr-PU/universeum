import React from 'react';
import { Star, Quote } from 'lucide-react';
import testimonialsData from '@/data/data.json';

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-red-950 via-gray-900 to-orange-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real experiences from real travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-900/30 transition-all border border-orange-900/30 relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition">
                <Quote className="w-16 h-16 text-orange-400" />
              </div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-orange-500"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-300 relative z-10">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
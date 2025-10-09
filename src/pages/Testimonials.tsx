import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-brand to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto">
            Real stories from NRIs who trust us with their most important needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl border-2 border-gray-100 p-8 hover:border-brand hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-100" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-1">{testimonial.location}</div>
                  <div className="inline-block px-3 py-1 bg-brand-50 text-brand text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-brand mb-2">98%</div>
                <div className="text-gray-700 font-medium">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">4.9/5</div>
                <div className="text-gray-700 font-medium">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">10,000+</div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Want to Share Your Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We'd love to hear from you. Your feedback helps us improve and serves other NRIs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-brand to-brand-700 text-white text-lg font-semibold rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Testimonials by Service
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Property Management',
              'Tax Consulting',
              'Banking & Financial',
              'Parental Health Care',
              'Medical Tourism',
              'Student Assist'
            ].map((service) => {
              const count = testimonials.filter(t =>
                t.service.toLowerCase().includes(service.toLowerCase().split(' ')[0])
              ).length;
              return (
                <div
                  key={service}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-brand hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-bold text-brand mb-1">{count}</div>
                  <div className="text-sm text-gray-700">{service}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

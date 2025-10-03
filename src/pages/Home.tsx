import { useState } from 'react';
import { Search, Mic, Home, Calculator, Landmark, Heart, Stethoscope, GraduationCap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, any> = {
  home: Home,
  calculator: Calculator,
  landmark: Landmark,
  heart: Heart,
  stethoscope: Stethoscope,
  'graduation-cap': GraduationCap,
};

export default function HomePage({ onNavigate }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Trust, Care, Excellence
            </h1>

            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-2xl p-2 flex items-center">
                <Search className="w-6 h-6 text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search for "Property Management" or any service...'
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                />
                <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mic className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <button
                    key={service.id}
                    onClick={() => onNavigate(`service-${service.slug}`)}
                    className="group bg-white hover:bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-bold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="w-8 h-8 text-white" />
                <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-bold">
                  LIMITED TIME OFFER
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Free First Consultation for NRIs
              </h2>
              <p className="text-xl text-yellow-50">
                Get expert guidance at no cost. Book your session today!
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-yellow-600 text-lg font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Claim Your Free Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why 10,000+ NRIs Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of managing affairs from abroad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Verified Professionals', desc: '100% background-checked team members', icon: CheckCircle },
              { title: 'Transparent Pricing', desc: 'No hidden fees, clear costs upfront', icon: CheckCircle },
              { title: 'Regular Updates', desc: 'Detailed reports and photo/video documentation', icon: CheckCircle },
              { title: '24/7 Support', desc: 'Round-the-clock assistance across time zones', icon: CheckCircle }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from NRIs around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-600"
              >
                <div className="flex items-center mb-4">
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
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-lg text-lg"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-xl text-blue-100 font-semibold">Happy Clients Worldwide</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-xl text-blue-100 font-semibold">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xl text-blue-100 font-semibold">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Book a free consultation with our experts today
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}

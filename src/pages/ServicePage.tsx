import { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Home, Calculator, Landmark, Heart, Stethoscope, GraduationCap } from 'lucide-react';
import { serviceDetails } from '../data/serviceDetails';
import { testimonials } from '../data/testimonials';

interface ServicePageProps {
  slug: string;
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

export default function ServicePage({ slug, onNavigate }: ServicePageProps) {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [expandedTerm, setExpandedTerm] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const service = serviceDetails.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];
  const serviceTestimonials = testimonials.filter(t =>
    t.service.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % serviceTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? serviceTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-center text-blue-100 max-w-3xl mx-auto">
            {service.promise}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {service.description}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  currency === 'INR'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                India (INR)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  currency === 'USD'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                International (USD)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 ${
                  index === 1
                    ? 'border-2 border-orange-600 shadow-xl scale-105'
                    : 'border border-gray-200 shadow-md'
                }`}
              >
                {index === 1 && (
                  <div className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-6">
                  {currency === 'INR' ? plan.inr : plan.usd}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h2>
          <div className="space-y-4">
            {service.terms.map((term, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedTerm(expandedTerm === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{term.title}</span>
                  {expandedTerm === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedTerm === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-700">{term.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceTestimonials.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Client Testimonials
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(serviceTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  "{serviceTestimonials[currentTestimonial].text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {serviceTestimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {serviceTestimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>

              {serviceTestimonials.length > 1 && (
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronUp className="w-5 h-5 text-gray-700 transform -rotate-90" />
                  </button>
                  <div className="flex space-x-2">
                    {serviceTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-orange-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-700 transform -rotate-90" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book a free consultation to discuss your needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 text-lg font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

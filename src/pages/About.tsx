import { Users, Target, Award, Heart, Globe, Shield } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-brand to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto">
            Bridging distances, building trust, and bringing India closer to NRIs worldwide
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in 2015, NRI Services was born from a simple observation: millions of
              Non-Resident Indians struggle to manage their affairs back home while building
              lives abroad. From property maintenance to caring for aging parents, the
              challenges were real, and reliable solutions were scarce.
            </p>
            <p>
              What started as a small team helping a handful of families has grown into a
              trusted partner for thousands of NRIs across 50+ countries. Our founders, themselves
              children of NRI parents, understood the anxiety of being far from home during
              critical moments.
            </p>
            <p>
              Today, we're proud to be India's most trusted NRI service provider, combining
              local expertise with global standards. Every service we offer is designed with
              one goal: to give you peace of mind, no matter where in the world you are.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To be the most reliable bridge between NRIs and India, providing seamless
                services that ensure peace of mind and strengthen connections with home.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Integrity</h3>
              <p className="text-gray-700">
                We treat your assets and loved ones as our own. Every team member is verified,
                trained, and committed to maintaining the highest ethical standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-700">
                We understand the emotional weight of being away from family. Our services
                are delivered with empathy, care, and genuine concern.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Standards</h3>
              <p className="text-gray-700">
                We bring international service standards to India, ensuring transparency,
                professionalism, and excellence in every interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-700">
                Your needs drive our innovation. We continuously evolve our services based
                on feedback from the NRI community we serve.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700">
                We don't just meet expectations, we exceed them. Quality isn't a goal,
                it's our standard in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why NRIs Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">10,000+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">50+</div>
              <div className="text-gray-700 font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">9+ Years</div>
              <div className="text-gray-700 font-medium">Industry Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand to-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to You</h2>
          <div className="space-y-4 text-lg text-brand-50">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p>
                <strong className="text-white">Verified Professionals:</strong> Every team member
                undergoes thorough background verification and regular training.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p>
                <strong className="text-white">Transparent Communication:</strong> Regular updates,
                detailed reports, and honest feedback about every service we provide.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p>
                <strong className="text-white">Data Security:</strong> Your personal and financial
                information is protected with bank-grade security measures.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p>
                <strong className="text-white">Guaranteed Satisfaction:</strong> If you're not
                satisfied, we'll make it right. Your peace of mind is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of NRIs who trust us with their most important needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-brand to-brand-700 text-white text-lg font-semibold rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

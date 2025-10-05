import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { services } from '../data/services';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              NR
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">NRI Services</div>
              <div className="text-xs text-gray-600">From India, With Care</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onNavigate(`service-${service.slug}`);
                        setIsServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('testimonials')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'testimonials'
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 98765 43210</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>

              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-orange-600 font-medium"
              >
                Home
              </button>

              <div>
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onNavigate(`service-${service.slug}`);
                        setIsMenuOpen(false);
                      }}
                      className="block text-left text-sm text-gray-600 hover:text-orange-600"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-orange-600 font-medium"
              >
                About Us
              </button>

              <button
                onClick={() => {
                  onNavigate('testimonials');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-orange-600 font-medium"
              >
                Testimonials
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-orange-600 font-medium"
              >
                Contact
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-md text-center"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

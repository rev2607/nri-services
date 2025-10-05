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
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (servicesTimeout) {
        clearTimeout(servicesTimeout);
      }
    };
  }, [servicesTimeout]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small delay to allow moving to dropdown
    setServicesTimeout(timeout);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-coral-700 to-warm-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              NR
            </div>
            <div className="hidden sm:block">
                <div className="text-lg font-bold text-navy-950">NRI Services</div>
                <div className="text-xs text-navy-600">From India, With Care</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-coral-700'
                  : 'text-navy-700 hover:text-coral-700'
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="flex items-center space-x-1 text-sm font-medium text-navy-700 hover:text-coral-700 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-200"
                >
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onNavigate(`service-${service.slug}`);
                        setIsServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-navy-700 hover:bg-coral-50 hover:text-coral-700 transition-colors"
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
                  ? 'text-coral-700'
                  : 'text-navy-700 hover:text-coral-700'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('testimonials')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'testimonials'
                  ? 'text-coral-700'
                  : 'text-navy-700 hover:text-coral-700'
              }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-coral-700'
                  : 'text-navy-700 hover:text-coral-700'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center space-x-2 text-coral-700 hover:text-coral-800 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 98765 43210</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-coral-700 to-warm-500 text-white text-sm font-semibold rounded-lg hover:from-coral-800 hover:to-warm-600 transition-all shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-navy-700 hover:text-coral-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-coral-700 hover:text-coral-800 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>

              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="text-left text-navy-700 hover:text-coral-700 font-medium"
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
                      className="block text-left text-sm text-navy-600 hover:text-coral-700"
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
                className="text-left text-navy-700 hover:text-coral-700 font-medium"
              >
                About Us
              </button>

              <button
                onClick={() => {
                  onNavigate('testimonials');
                  setIsMenuOpen(false);
                }}
                className="text-left text-navy-700 hover:text-coral-700 font-medium"
              >
                Testimonials
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-navy-700 hover:text-coral-700 font-medium"
              >
                Contact
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-coral-700 to-warm-500 text-white text-sm font-semibold rounded-lg hover:from-coral-800 hover:to-warm-600 transition-all shadow-md text-center"
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

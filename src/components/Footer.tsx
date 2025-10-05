import { Mail, Phone, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-700 to-warm-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                NR
              </div>
              <div>
                <div className="text-white font-bold">NRI Services</div>
                <div className="text-xs text-warm-300">From India, With Care</div>
              </div>
            </div>
            <p className="text-sm text-warm-300">
              Your trusted partner for seamless services across borders. We bring India closer to you.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-coral-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-coral-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="text-sm hover:text-coral-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-coral-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm hover:text-coral-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-coral-400 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-coral-400 transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-coral-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@nriservices.com"
                  className="flex items-center space-x-2 text-sm hover:text-coral-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@nriservices.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-sm hover:text-coral-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-coral-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-warm-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-sm text-warm-300">
          <p>&copy; {new Date().getFullYear()} NRI Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

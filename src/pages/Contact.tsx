import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          country: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We're here to help. Reach out and let's discuss how we can serve you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border-2 border-gray-100 p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+1 234 567 8900"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors"
                          placeholder="United States"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="property-management">Property Management</option>
                        <option value="tax-consulting">Tax Consulting</option>
                        <option value="banking-financial">Banking & Financial Needs</option>
                        <option value="parental-healthcare">Parental Health Care</option>
                        <option value="medical-tourism">Medical Tourism</option>
                        <option value="student-assist">Student Assist</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-start space-x-3 hover:text-orange-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-orange-100">+91 98765 43210</div>
                    </div>
                  </a>

                  <a
                    href="mailto:support@nriservices.com"
                    className="flex items-start space-x-3 hover:text-orange-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-orange-100">support@nriservices.com</div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-orange-100">
                        123 Business Park, Sector 18<br />
                        Gurugram, Haryana 122015<br />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-100 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prefer WhatsApp?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant responses to your queries on WhatsApp
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-100 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.42798118976!2d76.84384715!3d28.5270925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

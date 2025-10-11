import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Home, Calculator, Landmark, Heart, Stethoscope, GraduationCap, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon?: any;
}

interface FAQProps {
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

export default function FAQ({ onNavigate }: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    // Homepage General FAQs
    {
      id: 'general-1',
      category: 'general',
      question: 'What is YourBrand?',
      answer: 'YourBrand is a one-stop platform offering essential services for Non-Resident Indians (NRIs), including property management, tax consulting, financial assistance, healthcare for parents, medical tourism, and student support.',
      icon: iconMap.home
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Who can use YourBrand\'s services?',
      answer: 'Our services are designed for NRIs, OCIs, and PIOs who have ongoing personal, financial, or family connections in India.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'How do I get started?',
      answer: 'You can contact us directly via our website form or WhatsApp. Our team will schedule a free consultation to understand your needs and suggest the right plan.'
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'Is YourBrand available across India?',
      answer: 'Yes, our network covers major metros and tier-1 cities, with service expansion to tier-2 cities under progress.'
    },
    {
      id: 'general-5',
      category: 'general',
      question: 'Are payments accepted in international currencies?',
      answer: 'Absolutely. We support both INR and USD payments via secure international payment gateways.'
    },
    {
      id: 'general-6',
      category: 'general',
      question: 'Are the services customizable?',
      answer: 'Yes. You can choose between annual subscription plans or one-time services tailored to your requirements.'
    },
    {
      id: 'general-7',
      category: 'general',
      question: 'Is my personal and financial data safe?',
      answer: 'We ensure complete confidentiality through secure data storage and NDA-backed service agreements.'
    },

    // Property Management FAQs
    {
      id: 'property-1',
      category: 'property',
      question: 'What does the property management service include?',
      answer: 'It covers tenant management, rent collection, repairs, compliance, and maintenance — all managed locally by our team.',
      icon: iconMap.home
    },
    {
      id: 'property-2',
      category: 'property',
      question: 'Do you handle commercial properties?',
      answer: 'Yes, but commercial or large properties receive customized pricing and service terms.'
    },
    {
      id: 'property-3',
      category: 'property',
      question: 'Can you help sell or buy property in India?',
      answer: 'Yes, we assist with valuation, legal due diligence, capital gains tax computation, and repatriation of sale proceeds.'
    },
    {
      id: 'property-4',
      category: 'property',
      question: 'How do I monitor my property remotely?',
      answer: 'We share regular inspection reports with photos/videos via email or a secure dashboard.'
    },
    {
      id: 'property-5',
      category: 'property',
      question: 'What if my tenant defaults or damages property?',
      answer: 'We handle the mediation process, but legal action must be initiated by the owner.'
    },

    // Tax Consulting FAQs
    {
      id: 'tax-1',
      category: 'tax',
      question: 'Do I need to file taxes in India as an NRI?',
      answer: 'Yes, if you earn income in India such as rent, dividends, or capital gains.',
      icon: iconMap.calculator
    },
    {
      id: 'tax-2',
      category: 'tax',
      question: 'What documents are needed for NRI ITR filing?',
      answer: 'PAN card, Form 16/26AS, rent or investment proofs, and passport or visa details for residency verification.'
    },
    {
      id: 'tax-3',
      category: 'tax',
      question: 'Can you help with double taxation (DTAA)?',
      answer: 'Yes, our experts assess your resident country\'s DTAA treaty with India to minimize tax liabilities.'
    },
    {
      id: 'tax-4',
      category: 'tax',
      question: 'Do you provide 15CA/15CB certificates for repatriation?',
      answer: 'Yes, this is included in our Standard and Premium plans.'
    },
    {
      id: 'tax-5',
      category: 'tax',
      question: 'Can you handle tax notices or scrutiny cases?',
      answer: 'Yes. We represent NRIs before the Indian Income Tax Department through authorized Chartered Accountants.'
    },

    // Banking & Financial FAQs
    {
      id: 'banking-1',
      category: 'banking',
      question: 'Can you help open an NRE/NRO account remotely?',
      answer: 'Yes, we facilitate documentation, coordination with partner banks, and video KYC (where supported).',
      icon: iconMap.landmark
    },
    {
      id: 'banking-2',
      category: 'banking',
      question: 'What\'s the difference between NRE and NRO accounts?',
      answer: 'NRE is for foreign income (fully repatriable), while NRO is for Indian income (subject to tax and limits).'
    },
    {
      id: 'banking-3',
      category: 'banking',
      question: 'Do you provide investment advice?',
      answer: 'Yes, we advise on FEMA-compliant investments like mutual funds, equities, and real estate.'
    },
    {
      id: 'banking-4',
      category: 'banking',
      question: 'Can you assist with repatriating funds abroad?',
      answer: 'Yes, including documentation and CA certification (15CA/15CB).'
    },
    {
      id: 'banking-5',
      category: 'banking',
      question: 'Do you manage client funds directly?',
      answer: 'No, we only facilitate and advise — all transactions occur through your own accounts.'
    },

    // Parental Healthcare FAQs
    {
      id: 'healthcare-1',
      category: 'healthcare',
      question: 'What kind of health services do you provide for parents in India?',
      answer: 'We arrange doctor visits, routine health check-ups, medicine delivery, and on-call consultations.',
      icon: iconMap.heart
    },
    {
      id: 'healthcare-2',
      category: 'healthcare',
      question: 'Can I get real-time updates on my parents\' health?',
      answer: 'Yes, we share digital reports and updates through WhatsApp or email.'
    },
    {
      id: 'healthcare-3',
      category: 'healthcare',
      question: 'What if there\'s a medical emergency?',
      answer: 'We do not handle emergency care but can coordinate ambulance or hospital admission upon request.'
    },
    {
      id: 'healthcare-4',
      category: 'healthcare',
      question: 'Are services available in smaller towns?',
      answer: 'Currently, we cover tier-1 and select tier-2 cities, expanding gradually.'
    },
    {
      id: 'healthcare-5',
      category: 'healthcare',
      question: 'Can both parents be covered in one plan?',
      answer: 'Each parent requires a separate plan, but we offer discounts for dual subscriptions.'
    },

    // Medical Tourism FAQs
    {
      id: 'medical-1',
      category: 'medical',
      question: 'What treatments do you arrange in India?',
      answer: 'Everything from elective surgeries (orthopedic, cardiac, cosmetic) to preventive check-ups and wellness therapies.',
      icon: iconMap.stethoscope
    },
    {
      id: 'medical-2',
      category: 'medical',
      question: 'Do you book hospital appointments?',
      answer: 'Yes, we coordinate with top hospitals, schedule appointments, and assist with admission documentation.'
    },
    {
      id: 'medical-3',
      category: 'medical',
      question: 'Do your packages include surgery or treatment costs?',
      answer: 'No, our fees cover coordination and logistics. Hospital charges are paid directly by the patient.'
    },
    {
      id: 'medical-4',
      category: 'medical',
      question: 'Can you help with medical visas?',
      answer: 'Yes, visa assistance is part of our Standard and Premium packages.'
    },
    {
      id: 'medical-5',
      category: 'medical',
      question: 'Is post-treatment follow-up possible once I return abroad?',
      answer: 'Yes, through teleconsultation and digital medical record sharing.'
    },

    // Student Assist FAQs
    {
      id: 'student-1',
      category: 'student',
      question: 'What kind of help do you offer to students abroad?',
      answer: 'We provide guidance for assignments, dissertations, tutoring, and time management coaching.',
      icon: iconMap['graduation-cap']
    },
    {
      id: 'student-2',
      category: 'student',
      question: 'Do you write assignments for students?',
      answer: 'No — we mentor and guide you to prepare your own work with academic integrity.'
    },
    {
      id: 'student-3',
      category: 'student',
      question: 'Are sessions one-on-one?',
      answer: 'Yes, all tutoring and mentoring are personalized to each student\'s needs.'
    },
    {
      id: 'student-4',
      category: 'student',
      question: 'Can I book single sessions instead of a plan?',
      answer: 'Yes, we have one-time services for assignment or tutoring support.'
    },
    {
      id: 'student-5',
      category: 'student',
      question: 'Do you guarantee grades?',
      answer: 'We do not guarantee grades — outcomes depend on your own effort and submission quality.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All FAQs', icon: HelpCircle },
    { id: 'general', label: 'General', icon: Home },
    { id: 'property', label: 'Property Management', icon: Home },
    { id: 'tax', label: 'Tax Consulting', icon: Calculator },
    { id: 'banking', label: 'Banking & Financial', icon: Landmark },
    { id: 'healthcare', label: 'Parental Healthcare', icon: Heart },
    { id: 'medical', label: 'Medical Tourism', icon: Stethoscope },
    { id: 'student', label: 'Student Assist', icon: GraduationCap }
  ];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Find answers to common questions about our NRI services
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredFAQs.length} of {faqData.length} FAQs
              {selectedCategory !== 'all' && ` in ${getCategoryLabel(selectedCategory)}`}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => {
                const isExpanded = expandedItems.has(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-4">
                        {faq.icon && (
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <faq.icon className="w-5 h-5 text-orange-600" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {faq.question}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                            {getCategoryLabel(faq.category)}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="p-6 bg-white border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Our expert team is here to help you with any specific queries
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-lg font-semibold rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>Contact Us</span>
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

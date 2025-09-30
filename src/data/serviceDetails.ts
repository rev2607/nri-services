import { PricingPlan } from '../types';

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  promise: string;
  description: string;
  features: string[];
  pricing: PricingPlan[];
  terms: { title: string; content: string }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'property-management',
    title: 'Property Management',
    icon: 'home',
    promise: 'Keep Your Property Secure and Well-Maintained',
    description: 'Living abroad shouldn\'t mean worrying about your property back home. Our comprehensive property management service ensures your home remains secure, maintained, and ready for your return.',
    features: [
      'Regular property inspections with photo/video reports',
      'Maintenance and repair coordination',
      'Rent collection and tenant management',
      'Utility bill payments and management',
      'Emergency response 24/7',
      'Property tax filing assistance',
      'Renovation and improvement oversight',
      'Legal documentation support'
    ],
    pricing: [
      {
        title: 'Basic Plan',
        inr: '₹5,000/month',
        usd: '$60/month',
        features: [
          'Monthly property inspection',
          'Basic maintenance coordination',
          'Monthly photo report',
          'Emergency response'
        ]
      },
      {
        title: 'Premium Plan',
        inr: '₹10,000/month',
        usd: '$120/month',
        features: [
          'Bi-weekly property inspections',
          'Full maintenance management',
          'Video reports',
          'Tenant management',
          'Utility bill payments',
          '24/7 emergency support'
        ]
      },
      {
        title: 'Comprehensive Plan',
        inr: '₹18,000/month',
        usd: '$215/month',
        features: [
          'Weekly property checks',
          'Complete property management',
          'Tenant screening & management',
          'Financial management',
          'Legal support',
          'Renovation oversight',
          'Priority emergency response'
        ]
      }
    ],
    terms: [
      {
        title: 'Service Agreement',
        content: 'Minimum 6-month contract required. Services can be upgraded or downgraded with 30 days notice.'
      },
      {
        title: 'Payment Terms',
        content: 'Payment due at the beginning of each month. Accepts international wire transfer, PayPal, and Indian bank transfers.'
      },
      {
        title: 'Emergency Services',
        content: 'Emergency repairs above ₹10,000 require pre-approval unless deemed critical for property safety.'
      },
      {
        title: 'Cancellation Policy',
        content: '60 days written notice required for cancellation. No refunds for partial months.'
      }
    ]
  },
  {
    slug: 'tax-consulting',
    title: 'Tax Consulting',
    icon: 'calculator',
    promise: 'Expert Guidance on Indian Tax Compliance',
    description: 'Navigate complex Indian tax laws with confidence. Our certified tax consultants specialize in NRI taxation, ensuring full compliance while maximizing your tax benefits.',
    features: [
      'NRI tax status assessment',
      'Income tax return filing (ITR)',
      'TDS refund claims',
      'Capital gains tax planning',
      'Form 15CA/15CB assistance',
      'Double taxation avoidance guidance',
      'Tax optimization strategies',
      'Notice handling and representation'
    ],
    pricing: [
      {
        title: 'Basic Filing',
        inr: '₹5,000',
        usd: '$60',
        features: [
          'Single ITR filing',
          'Tax computation',
          'Basic documentation',
          'Email support'
        ]
      },
      {
        title: 'Standard Package',
        inr: '₹12,000',
        usd: '$145',
        features: [
          'Complete ITR filing',
          'TDS refund claims',
          'Capital gains computation',
          'Tax planning consultation',
          'Priority support'
        ]
      },
      {
        title: 'Premium Package',
        inr: '₹25,000',
        usd: '$300',
        features: [
          'Comprehensive tax planning',
          'Multiple property filings',
          'Investment tax advisory',
          'Notice handling',
          'Year-round support',
          'Dedicated tax consultant'
        ]
      }
    ],
    terms: [
      {
        title: 'Engagement Terms',
        content: 'Engagement valid for one financial year. Additional years can be purchased at discounted rates.'
      },
      {
        title: 'Documentation',
        content: 'Client must provide all relevant financial documents within 15 days of engagement for timely filing.'
      },
      {
        title: 'Representation',
        content: 'Tax notice handling requires separate POA (Power of Attorney). Additional charges may apply for complex cases.'
      },
      {
        title: 'Refund Processing',
        content: 'TDS refunds processed directly by Income Tax Department. Timeline depends on department processing times.'
      }
    ]
  },
  {
    slug: 'banking-financial',
    title: 'Banking & Financial Needs',
    icon: 'landmark',
    promise: 'Hassle-Free Banking Services from Abroad',
    description: 'Managing your finances in India should be simple. We help you navigate NRI banking, investments, and financial transactions with ease.',
    features: [
      'NRE/NRO account opening assistance',
      'Investment portfolio management',
      'Mutual fund transactions',
      'Fixed deposit management',
      'Loan application support',
      'Insurance policy management',
      'Fund transfer assistance',
      'Financial planning consultation'
    ],
    pricing: [
      {
        title: 'Account Setup',
        inr: '₹8,000',
        usd: '$95',
        features: [
          'NRE/NRO account opening',
          'Documentation assistance',
          'Bank liaison',
          '3 months support'
        ]
      },
      {
        title: 'Investment Management',
        inr: '₹15,000/year',
        usd: '$180/year',
        features: [
          'Portfolio review',
          'Investment transactions',
          'Performance reports',
          'Rebalancing advice',
          'Quarterly consultation'
        ]
      },
      {
        title: 'Comprehensive Financial',
        inr: '₹30,000/year',
        usd: '$360/year',
        features: [
          'Full financial management',
          'Investment advisory',
          'Banking liaison',
          'Insurance management',
          'Loan coordination',
          'Monthly reports',
          'Dedicated advisor'
        ]
      }
    ],
    terms: [
      {
        title: 'Service Scope',
        content: 'We provide liaison and coordination services. Final approvals rest with respective banks and financial institutions.'
      },
      {
        title: 'Investment Advisory',
        content: 'Investment advice provided for informational purposes. We do not guarantee returns. Client makes final investment decisions.'
      },
      {
        title: 'KYC Compliance',
        content: 'Client responsible for maintaining valid KYC documents. We assist with process but cannot override regulatory requirements.'
      },
      {
        title: 'Payment Terms',
        content: 'Annual packages payable upfront. Setup services billed upon completion.'
      }
    ]
  },
  {
    slug: 'parental-healthcare',
    title: 'Parental Health Care',
    icon: 'heart',
    promise: 'Compassionate Care for Your Loved Ones',
    description: 'Your parents deserve the best care. Our dedicated team provides comprehensive health support, ensuring their well-being and your peace of mind.',
    features: [
      'Regular health check-ins',
      'Medical appointment coordination',
      'Medicine delivery and refills',
      'Emergency response 24/7',
      'Hospital visit accompaniment',
      'Health reports to family',
      'Home nursing coordination',
      'Medical records management'
    ],
    pricing: [
      {
        title: 'Basic Care',
        inr: '₹8,000/month',
        usd: '$95/month',
        features: [
          'Weekly check-in calls',
          'Monthly health updates',
          'Emergency coordination',
          'Medicine reminders'
        ]
      },
      {
        title: 'Premium Care',
        inr: '₹15,000/month',
        usd: '$180/month',
        features: [
          'Bi-weekly home visits',
          'Doctor appointment management',
          'Medicine delivery',
          '24/7 emergency support',
          'Detailed health reports',
          'Family video updates'
        ]
      },
      {
        title: 'Comprehensive Care',
        inr: '₹30,000/month',
        usd: '$360/month',
        features: [
          'Daily check-ins',
          'Full medical management',
          'Hospital accompaniment',
          'Home nursing coordination',
          'Dietary planning',
          'Physical therapy support',
          'Dedicated care coordinator'
        ]
      }
    ],
    terms: [
      {
        title: 'Care Coordination',
        content: 'We coordinate care services but do not provide direct medical care. All medical decisions require family approval.'
      },
      {
        title: 'Emergency Response',
        content: 'In life-threatening emergencies, we will take necessary immediate action and inform family simultaneously.'
      },
      {
        title: 'Medical Expenses',
        content: 'Service fee covers coordination only. Actual medical expenses, medicines, and treatments billed separately.'
      },
      {
        title: 'Privacy & Consent',
        content: 'Requires signed consent from parents for health information sharing and care coordination.'
      }
    ]
  },
  {
    slug: 'medical-tourism',
    title: 'Medical Tourism',
    icon: 'stethoscope',
    promise: 'World-Class Healthcare at Affordable Costs',
    description: 'Access India\'s best hospitals and specialists at a fraction of international costs. We handle everything from consultation to recovery.',
    features: [
      'Hospital and doctor selection',
      'Appointment scheduling',
      'Medical visa assistance',
      'Airport pickup and transfer',
      'Accommodation arrangement',
      'Treatment coordination',
      'Post-operative care',
      'Medical records management'
    ],
    pricing: [
      {
        title: 'Consultation Package',
        inr: '₹20,000',
        usd: '$240',
        features: [
          'Doctor consultation',
          'Hospital tour',
          'Treatment plan',
          'Cost estimate',
          'Local support'
        ]
      },
      {
        title: 'Standard Treatment',
        inr: '₹50,000',
        usd: '$600',
        features: [
          'Complete coordination',
          'Visa assistance',
          'Airport transfers',
          'Hospital liaison',
          'Accommodation booking',
          '2 weeks support'
        ]
      },
      {
        title: 'Comprehensive Care',
        inr: '₹1,00,000',
        usd: '$1,200',
        features: [
          'Full medical tourism support',
          'Premium hospital access',
          'Family accommodation',
          'Personal care coordinator',
          '30 days support',
          'Post-treatment follow-up',
          'Medical records courier'
        ]
      }
    ],
    terms: [
      {
        title: 'Medical Costs',
        content: 'Package fee covers coordination services only. Actual medical treatment costs billed separately by hospitals.'
      },
      {
        title: 'Hospital Selection',
        content: 'We recommend accredited hospitals only. Final hospital selection approved by client.'
      },
      {
        title: 'Travel & Accommodation',
        content: 'Travel and hotel bookings coordinated by us but paid directly by client unless specified otherwise.'
      },
      {
        title: 'Medical Outcomes',
        content: 'We coordinate care but do not guarantee medical outcomes. All treatment decisions made by qualified medical professionals.'
      }
    ]
  },
  {
    slug: 'student-assist',
    title: 'Student Assist',
    icon: 'graduation-cap',
    promise: 'Academic Support and Assignment Help',
    description: 'Excel in your studies with professional academic support. Our qualified tutors and subject experts help you achieve outstanding results.',
    features: [
      'Assignment help and review',
      'Research paper assistance',
      'Project guidance',
      'Exam preparation',
      'Subject tutoring',
      'Plagiarism checking',
      'Citation and formatting',
      'Time management coaching'
    ],
    pricing: [
      {
        title: 'Per Assignment',
        inr: '₹2,000',
        usd: '$25',
        features: [
          'Single assignment help',
          'Review and feedback',
          'Quality check',
          '48-hour delivery'
        ]
      },
      {
        title: 'Monthly Package',
        inr: '₹12,000/month',
        usd: '$145/month',
        features: [
          '6 assignments per month',
          'Priority delivery',
          'Subject expert support',
          'Unlimited revisions',
          'Plagiarism reports'
        ]
      },
      {
        title: 'Semester Package',
        inr: '₹40,000/semester',
        usd: '$480/semester',
        features: [
          'Unlimited assignments',
          'Research project support',
          'Exam preparation',
          'Regular tutoring sessions',
          'Academic planning',
          'Dedicated tutor',
          '24-hour support'
        ]
      }
    ],
    terms: [
      {
        title: 'Academic Integrity',
        content: 'We provide guidance and support for learning. Students must submit work as their own and follow university policies.'
      },
      {
        title: 'Delivery Timeline',
        content: 'Standard turnaround is 48-72 hours. Rush delivery available at additional cost. Requires clear requirements from student.'
      },
      {
        title: 'Revisions',
        content: 'Included revisions must be within original scope. Major changes may incur additional charges.'
      },
      {
        title: 'Refund Policy',
        content: 'Refunds considered if work does not meet agreed specifications. Must be requested within 48 hours of delivery.'
      }
    ]
  }
];

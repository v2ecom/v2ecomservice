// Central, editable configuration for the V2 Ecom Academy page.
// Change dates, fees and flags here — nothing below is hardcoded in components.

export const ACADEMY = {
  name: 'V2 Ecom Academy',
  parent: 'V2 Ecom Services',
  tagline: 'Learn. Launch. Grow.',
  location: 'Tiruppur, Tamil Nadu',
  phoneDisplay: '+91 96292 12489',
  whatsappNumber: '919629212489',
  siteUrl: 'https://www.v2ecomservices.com',
  path: '/academy',

  // Where the admission form posts (Vercel serverless function in /client/api).
  applyEndpoint: '/api/academy-apply',

  // Launch offer is confirmed by the business. Add launchOfferEndsLabel (e.g. '30 November 2026') to show an end date.
  launchOfferConfirmed: true,
  launchOfferEndsLabel: '', // e.g. '30 November 2026' (shown only when launchOfferConfirmed is true)

  // Enable only after official payment details are supplied by the business.
  paymentInstructions: {
    enabled: false,
    text: '',
  },

  courses: [
    {
      id: 'marketplace-professional',
      name: 'Marketplace Professional',
      duration: '6 Weeks',
      launchFee: 5999,
      regularFee: 9999,
      summary: 'A practical foundation in running marketplace accounts end to end.',
      modules: [
        'Week 1 – Marketplace Fundamentals',
        'Week 2 – Product Research and Sourcing',
        'Week 3 – Seller Onboarding and Compliance Basics',
        'Week 4 – Product Listing, Cataloguing and SEO',
        'Week 5 – Marketplace Operations and Account Health',
        'Week 6 – Marketplace Advertising, Reporting and Practical Project',
      ],
      outcomes: [
        'Understand marketplace business models.',
        'Research products and competitors.',
        'Understand seller onboarding.',
        'Create optimized listings.',
        'Manage daily marketplace operations.',
        'Understand PPC fundamentals.',
        'Prepare performance reports.',
      ],
    },
    {
      id: 'marketplace-business-mastery',
      name: 'Marketplace Business Mastery',
      duration: '8 Weeks',
      launchFee: 9999,
      regularFee: 18999,
      summary: 'Everything in Marketplace Professional, plus profitability and scaling.',
      includesAllOf: 'Marketplace Professional',
      modules: [
        'Includes all six weeks of Marketplace Professional, plus:',
        'Week 7 – Profitability and Analytics',
        'Week 8 – Business Scaling and Real-World Execution',
      ],
      extraWeeks: [
        {
          title: 'Week 7 – Profitability and Analytics',
          points: [
            'SKU-level profit analysis',
            'Marketplace fees',
            'Returns and refunds',
            'Advertisement costs',
            'Settlement reconciliation',
            'Break-even calculations',
            'Sales and profit dashboards',
          ],
        },
        {
          title: 'Week 8 – Business Scaling and Real-World Execution',
          points: [
            'Marketplace launch strategy',
            'Promotions and discounts',
            'PPC campaign scaling',
            'Inventory planning',
            'Sales forecasting',
            'Client communication',
            'Account management workflows',
            'Final practical project',
          ],
        },
      ],
      outcomes: [
        'Everything in Marketplace Professional.',
        'Analyse SKU-level profitability and marketplace fees.',
        'Reconcile settlements and plan break-even.',
        'Plan promotions, PPC scaling and inventory.',
        'Handle client communication and account workflows.',
      ],
    },
  ],

  // Customised programmes (no fixed fee: quoted per requirement). Enquiries go to WhatsApp.
  customPrograms: {
    feeNote: 'Fees depend on your requirement: group size, topics, duration and mode (online or offline). Tell us what you need and our team will share a quote.',
    topics: [
      'Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'Quick Commerce',
      'Listing and Cataloguing', 'Marketplace Ads', 'Account Health', 'Reporting and Profit Analysis',
    ],
    items: [
      {
        id: 'seller-teams',
        title: 'Seller Team Training',
        audience: 'For sellers, brands and agencies',
        text: 'Practical training for your own listing, operations, ads and reporting team, shaped around the platforms and workflows you actually use.',
      },
      {
        id: 'college-workshops',
        title: 'College Workshops',
        audience: 'For colleges, departments and student clubs',
        text: 'Workshops that introduce students to e-commerce and marketplace selling, with hands-on activities.',
      },
      {
        id: 'student-classes',
        title: 'Student Classes',
        audience: 'For groups of students',
        text: 'Classes for student groups at an introductory or deeper level, planned around your timetable and topics.',
      },
    ],
  },

  // Admission form option lists (kept here so the API validates against the same values).
  options: {
    ageGroups: ['18–24', '25–34', '35–44', '45 and above'],
    genders: ['Male', 'Female', 'Prefer not to say'],
    qualifications: ['Below 10th', '10th / SSLC', '12th / HSC', 'Diploma / ITI', 'Bachelor’s degree', 'Master’s degree', 'Professional qualification', 'Other'],
    statuses: ['Student', 'Job Seeker', 'Working Professional', 'Business Owner', 'Existing Marketplace Seller', 'Freelancer', 'Other'],
    currentPlatforms: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'Quick Commerce', 'Etsy', 'Not Yet Started', 'Other'],
    experience: ['Beginner', 'Less than 6 months', '6 months to 1 year', '1 to 3 years', 'More than 3 years'],
    modes: ['Online', 'Offline – Tiruppur'],
    batches: ['Weekday Evening', 'Weekend'],
    languages: ['Tamil', 'English', 'Both Tamil and English'],
    interests: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'Quick Commerce', 'FirstCry', 'Etsy', 'Other'],
    objectives: [
      'Start my own e-commerce business',
      'Grow my existing marketplace business',
      'Get a job in e-commerce',
      'Become an account manager',
      'Learn marketplace advertising',
      'Start a freelance business',
      'Start an e-commerce agency',
      'Improve my product listing skills',
      'Other',
    ],
    sources: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'Google Search', 'WhatsApp', 'Friend Referral', 'College', 'Other'],
  },
};

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

export const getCourse = (id) => ACADEMY.courses.find((c) => c.id === id);

export const formatINR = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export function buildWhatsAppUrl({ applicationId, name, courseName, mode, batch }) {
  const text = [
    'Hello V2 Ecom Academy,',
    'I have submitted my course application.',
    `Application ID: ${applicationId}`,
    `Name: ${name}`,
    `Course: ${courseName}`,
    `Learning Mode: ${mode}`,
    `Preferred Batch: ${batch}`,
    'Please share the next steps for admission.',
    'Thank you.',
  ].join('\n');
  return `https://wa.me/${ACADEMY.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const customProgramWhatsAppUrl = (title) =>
  `https://wa.me/${ACADEMY.whatsappNumber}?text=${encodeURIComponent(
    [
      'Hello V2 Ecom Academy,',
      `I would like to enquire about a customised programme: ${title}.`,
      'Organisation / College name:',
      'Number of participants:',
      'Topics needed:',
      'Mode (Online / Offline):',
      'Please share the details and fees.',
    ].join('\n')
  )}`;

export const generalWhatsAppUrl = () =>
  `https://wa.me/${ACADEMY.whatsappNumber}?text=${encodeURIComponent(
    'Hello V2 Ecom Academy, I would like to know more about your e-commerce marketplace courses.'
  )}`;

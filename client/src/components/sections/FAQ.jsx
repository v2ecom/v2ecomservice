import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const faqData = {
  Home: [
    {
      q: 'Which marketplaces do you support?',
      a: 'We manage Amazon, Flipkart, Meesho, and other leading e-commerce platforms.',
    },
    {
      q: 'Do you manage advertising campaigns?',
      a: 'Yes. We specialize in campaign setup, optimization, keyword management, and performance improvement.',
    },
    {
      q: 'Can you optimize my existing listings?',
      a: 'Absolutely. We improve titles, keywords, descriptions, images, and overall listing quality to increase visibility and conversions.',
    },
    {
      q: 'Do you provide performance reports?',
      a: 'Yes. We share regular reports with insights and recommendations to help you understand your business performance.',
    },
  ],
  "About Us": [
    {
      q: 'Who are V2 Ecom Services?',
      a: 'We are a dedicated team of e-commerce experts helping brands scale on major marketplaces.',
    },
    {
      q: 'Where are you located?',
      a: 'We operate out of India, providing dedicated support to our clients globally.',
    },
  ],
  Blog: [
    {
      q: 'How often do you publish new content?',
      a: 'We publish new insights, case studies, and strategies every week.',
    },
    {
      q: 'Can I subscribe to your newsletter?',
      a: 'Yes! You can stay updated with the latest e-commerce trends by subscribing to our newsletter.',
    },
  ],
  Services: {
    "Amazon Account Management": [
      { q: 'Do you manage complete Amazon seller accounts?', a: 'Yes. We handle listings, advertising, catalog management, account health, reporting, and growth strategies.' },
      { q: 'Can you improve existing listings?', a: 'Yes. We optimize titles, descriptions, keywords, images, and backend attributes to improve visibility and conversions.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide weekly and monthly performance reports with actionable recommendations.' },
    ],
    "Amazon PPC Management": [
      { q: 'Do you manage PPC for new product launches?', a: 'Yes. We design aggressive launch strategies to build rankings quickly while controlling spend.' },
      { q: 'Will you lower my advertising costs?', a: 'Yes. Our optimization process focuses on improving ad efficiency while maintaining or growing sales volume.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide weekly and monthly reports with clear performance insights and next steps.' },
    ],
    "Product Listing Optimization": [
      { q: 'Which marketplaces do you optimize listings for?', a: "We optimize listings for Amazon, Flipkart, and Meesho, tailored to each platform's algorithm and audience." },
      { q: 'Can you rewrite my existing listings?', a: 'Yes. We audit and rewrite titles, bullet points, descriptions, and backend keywords for better performance.' },
      { q: 'How often do you update listings?', a: 'We recommend periodic refreshes based on performance data, typically every few months or after major algorithm changes.' },
    ],
    "Flipkart Account Management": [
      { q: 'Do you manage complete Flipkart seller accounts?', a: 'Yes. We handle listings, advertising, catalog management, account health, reporting, and growth strategies.' },
      { q: 'Can you help during Flipkart sale events?', a: 'Yes. We plan pricing, inventory, and promotional strategies to maximize performance during major sale events.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide weekly and monthly performance reports with actionable recommendations.' },
    ],
    "Meesho Account Management": [
      { q: 'Do you manage complete Meesho seller accounts?', a: 'Yes. We handle listings, catalog management, pricing, account health, and growth strategies.' },
      { q: 'Can you help reduce return rates?', a: 'Yes. We optimize listings and sizing information to set accurate buyer expectations and reduce returns.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide regular performance reports with actionable recommendations.' },
    ],
    "Marketplace Onboarding": [
      { q: 'Which marketplaces can you help me onboard on?', a: 'We assist with onboarding on Amazon, Flipkart, Meesho, and other major Indian marketplaces.' },
      { q: 'Do you help with restricted category approvals?', a: 'Yes. We guide you through documentation and approval processes for gated categories.' },
      { q: 'How long does onboarding take?', a: 'Timelines vary by marketplace and category, but we work to complete onboarding as efficiently as possible.' },
    ],
    "Product Research": [
      { q: 'Can you help me decide which products to sell?', a: 'Yes. Our research identifies profitable, in-demand products suited to your business and budget.' },
      { q: 'Do you analyze specific competitors?', a: 'Yes. We provide detailed benchmarking against competitors you specify or ones we identify in your category.' },
      { q: 'How is the research delivered?', a: 'We provide detailed reports with clear insights and actionable recommendations.' },
    ],
    "Ecommerce Consulting": [
      { q: 'Do you work with businesses already selling online?', a: 'Yes. We work with both new sellers and established businesses looking to scale or restructure operations.' },
      { q: 'Is consulting a one-time or ongoing service?', a: 'We offer both one-time strategy engagements and ongoing advisory partnerships, based on your needs.' },
      { q: 'Do you help with multi-marketplace strategy?', a: 'Yes. We advise on channel prioritization and strategy across Amazon, Flipkart, Meesho, and D2C platforms.' },
    ],
    "Catalog Management": [
      { q: 'Can you manage large catalogs with thousands of SKUs?', a: 'Yes. We handle bulk catalog uploads and management for catalogs of any size.' },
      { q: 'Do you fix suppressed or flagged listings?', a: 'Yes. We identify and resolve catalog errors that cause listings to be suppressed or restricted.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide regular catalog health reports with clear recommendations.' },
    ],
    "Account Health Management": [
      { q: 'Can you help reinstate a suspended account?', a: 'Yes. We prepare and submit appeals to help resolve suspensions and restrictions.' },
      { q: 'Do you monitor account health proactively?', a: 'Yes. We continuously track performance metrics and policy compliance to prevent issues before they occur.' },
      { q: 'Do you provide regular reports?', a: 'Yes. We provide regular account health reports with clear risk insights and recommendations.' },
    ]
  }
};

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-300 mb-2 overflow-hidden ${isOpen ? 'border-primary bg-background shadow-sm' : 'border-border bg-surface hover:border-primary/30'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
        <span className={`text-[13px] font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-primary text-white' : 'bg-background text-muted'}`}>
          <Plus size={14} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="w-full h-px bg-border mb-3" />
              <p className="text-[13px] text-muted leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryAccordion({ title, items, isNested }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-2xl border mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary bg-background shadow-sm' : 'border-border bg-surface hover:border-primary/30'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className={`text-[15px] font-bold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text'}`}>
          {title}
        </span>
        <div className="flex-shrink-0 text-muted">
          <ChevronDown size={18} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2">
              {Array.isArray(items) ? (
                items.map((item, idx) => (
                  <FaqItem key={idx} question={item.q} answer={item.a} />
                ))
              ) : (
                Object.entries(items).map(([subTitle, subItems]) => (
                  <SubCategoryAccordion key={subTitle} title={subTitle} items={subItems} />
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubCategoryAccordion({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border mb-2 overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary bg-background/50' : 'border-border/50 bg-surface/50'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
        <span className={`text-[14px] font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text'}`}>
          {title}
        </span>
        <div className="flex-shrink-0 text-muted">
          <ChevronDown size={16} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 pl-6 border-l-2 border-primary/20 ml-2">
              {items.map((item, idx) => (
                <FaqItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-padding bg-background relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Find answers to all your questions about our services and process, categorized for your convenience."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {Object.entries(faqData).map(([category, items]) => (
            <CategoryAccordion key={category} title={category} items={items} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[14px] text-muted mb-4">Can't find the answer you're looking for?</p>
          <a
            href="https://wa.me/919629212489?text=Hi!%20I'm%20interested%20in%20V2%20Ecom%20Services.%20I'd%20like%20to%20ask%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-primary border border-border hover:bg-background hover:border-primary transition-all duration-200"
          >
            Ask Us Directly on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

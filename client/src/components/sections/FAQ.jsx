import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const faqs = [
  {
    question: 'How quickly can you get my seller account live on Amazon?',
    answer: "We work diligently to get your Amazon seller account active and listings live as quickly as possible. Timelines vary based on the platform's document verification process (GST, PAN, bank details, brand authorization). We guide you through every step to avoid delays.",
  },
  {
    question: 'Do I need a company or GST registration before you start?',
    answer: 'Not necessarily. Company formation and GST registration are services we offer as part of our onboarding package. If you don\'t have these in place, we\'ll guide you through setting them up. You can begin planning your catalog and sourcing in parallel.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is tailored to your specific needs — there\'s no one-size-fits-all model. We offer project-based packages for initial setup and ongoing monthly retainers for seller management. During our free consultation, we\'ll assess your requirements and provide a transparent, detailed quote with zero hidden fees.',
  },
  {
    question: 'Can you manage accounts across all three marketplaces simultaneously?',
    answer: 'Absolutely. Multi-platform management is our specialty. We have dedicated specialists for Amazon, Flipkart, and Meesho. Your account manager coordinates all three, ensures consistent branding, and optimizes pricing and inventory strategy across platforms to maximize total sales performance.',
  },
  {
    question: 'What happens if my account gets suspended?',
    answer: 'Account reinstatement is one of our services. Our team has experience writing Plan of Action (POA) appeals for Amazon, Flipkart, and Meesho. We identify the root cause, address it systematically, and submit a compelling appeal. We aim to resolve most suspensions efficiently, though timelines depend on platform responses.',
  },
  {
    question: 'Do you handle product photography and A+ content?',
    answer: 'We manage the entire content creation workflow. We provide detailed photography briefs optimized for marketplace requirements and coordinate with professional photographers. Our content team creates keyword-rich titles, bullet points, descriptions, and full A+ Content / Enhanced Brand Content that converts browsers into buyers.',
  },
  {
    question: 'How do you handle returns and customer complaints?',
    answer: 'Return management is included in our ongoing management service. We monitor all return requests, categorize them (customer remorse vs. product issues), file SAFE-T claims where applicable, flag fraudulent returns, and maintain your account health metrics within platform-recommended thresholds.',
  },
  {
    question: 'What kind of reporting do I receive?',
    answer: "Every month, you receive a comprehensive business intelligence report covering: total and platform-wise sales performance, units sold, return rates, advertising spend and ROAS, bestselling SKUs, competitor benchmarking, account health status, and a forward-looking growth strategy for the next 30 days.",
  },
  {
    question: "Is my business information kept confidential?",
    answer: "Absolutely. We sign a Non-Disclosure Agreement (NDA) with every client before accessing any account credentials or business data. Your product information, pricing strategy, supplier relationships, and all business intelligence remain strictly confidential.",
  },
  {
    question: 'Do you work with manufacturers and wholesalers, or only D2C brands?',
    answer: 'We work with the full spectrum: manufacturers wanting to launch direct marketplace channels, wholesalers looking to expand B2C reach, D2C brands building online presence, and even established sellers wanting to optimize and scale. Our approach is customized for each business model.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-primary/30 bg-primary/3 shadow-glow/30'
          : 'border-slate-100 bg-white hover:border-slate-200'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-dark'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <Plus size={14} />
        </motion.div>
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
            <div className="px-5 pb-5">
              <div className="w-full h-px bg-slate-100 mb-4" />
              <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="FAQ"
          title="Questions We Get"
          highlight="All the Time"
          description="Straightforward answers to everything you want to know before partnering with us. Still have questions? Book a free call."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-400 mb-4">Can't find the answer you're looking for?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-200"
          >
            Ask Us Directly
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

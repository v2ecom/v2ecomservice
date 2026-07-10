import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes. We offer a free initial consultation to understand your business and recommend suitable marketplace growth strategies.',
  },
  {
    q: 'Which marketplaces do you support?',
    a: 'We provide services for Amazon, Flipkart, Meesho, and other leading e-commerce marketplaces.',
  },
  {
    q: 'Do you work with new sellers?',
    a: 'Absolutely. We help new sellers with account setup, marketplace onboarding, product listings, and growth planning.',
  },
  {
    q: 'How quickly will you respond?',
    a: 'We aim to respond to all enquiries within one business day.',
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-section relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-base relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">
            Have a quick question? Check our FAQs before reaching out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`bg-surface border rounded-2xl overflow-hidden transition-colors ${
                openIndex === idx ? 'border-accent' : 'border-border hover:border-primary/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold font-poppins pr-8 ${openIndex === idx ? 'text-accent' : 'text-primary'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-accent' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

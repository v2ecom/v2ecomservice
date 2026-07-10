import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const faqs = [
  {
    question: 'Which marketplaces do you support?',
    answer: 'We manage Amazon, Flipkart, Meesho, and other leading e-commerce platforms.',
  },
  {
    question: 'Do you manage advertising campaigns?',
    answer: 'Yes. We specialize in campaign setup, optimization, keyword management, and performance improvement.',
  },
  {
    question: 'Can you optimize my existing listings?',
    answer: 'Absolutely. We improve titles, keywords, descriptions, images, and overall listing quality to increase visibility and conversions.',
  },
  {
    question: 'Do you provide performance reports?',
    answer: 'Yes. We share regular reports with insights and recommendations to help you understand your business performance.',
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
          ? 'border-primary bg-background shadow-sm'
          : 'border-border bg-surface hover:border-primary/30'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-primary text-white' : 'bg-background text-muted'
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
              <div className="w-full h-px bg-border mb-4" />
              <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description=""
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
          <p className="text-sm text-muted mb-4">Can't find the answer you're looking for?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary border border-border hover:bg-background hover:border-primary transition-all duration-200"
          >
            Ask Us Directly
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

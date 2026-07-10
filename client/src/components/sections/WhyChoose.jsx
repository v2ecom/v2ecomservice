import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const benefits = [
  'Increase product visibility',
  'Improve conversion rates',
  'Optimize advertising spend',
  'Reduce operational workload',
  'Grow sales with long-term strategies',
  'Make informed decisions using detailed performance reports'
];

export default function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Why V2 Ecom"
          title="Why Choose"
          highlight="V2 Ecom Services?"
          description="Running an e-commerce business
                  requires more than just listing products.
                  Success comes from the right strategy,
                  continuous optimization and data-driven
                  decisions."
        />

        <div className="mt-14 max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <p className="text-[17px] font-jakarta font-medium text-muted mb-8 leading-relaxed">
            We provide end-to-end marketplace management to help your business:
          </p>
          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5">
                  <CheckCircle2 size={20} className="text-accent" />
                </div>
                <span className="text-[16px] font-jakarta font-semibold text-primary">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

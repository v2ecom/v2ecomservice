import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const commitments = [
  'Experienced marketplace specialists',
  'Data-driven decision making',
  'Dedicated account management',
  'Transparent communication',
  'Weekly performance reviews',
  'Customized growth strategies',
  'Affordable service plans',
  'Long-term business partnership approach'
];

export default function OurCommitment() {
  return (
    <section className="section-padding bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Our Guarantee"
          title="Why Businesses Trust"
          highlight="V2 Ecom Services"
          description=""
        />

        <div className="mt-14 max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <ul className="space-y-5">
            {commitments.map((item, index) => (
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
                <span className="text-[16px] font-jakarta font-semibold text-primary">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

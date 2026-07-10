import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const reasons = [
  'Dedicated marketplace specialists',
  'Amazon, Flipkart, and Meesho expertise',
  'Transparent communication and regular reviews',
  'Data-driven growth strategies',
  'Customized solutions for every business',
  'Long-term partnership focused on sustainable growth',
  'Fast response and dedicated client support',
];

export default function AboutWhyChoose() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Why Choose Us"
          title="Why Businesses Choose"
          highlight="V2 Ecom Services"
          description="We provide the expertise, transparency, and dedication needed to build a profitable marketplace business."
        />

        <div className="mt-14 max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5">
                  <CheckCircle2 size={24} className="text-accent" />
                </div>
                <span className="text-lg text-primary font-medium">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

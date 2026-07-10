import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export default function Mission() {
  return (
    <section className="section-padding bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Our Goal"
          title="Our"
          highlight="Mission"
          description=""
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="relative bg-surface border border-border rounded-3xl p-10 md:p-16 text-center shadow-sm">
            {/* Decorative Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center -rotate-12">
                <Target size={32} className="text-dark" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-poppins font-medium text-primary leading-relaxed mt-4">
              "Our mission is to provide comprehensive, data-driven e-commerce solutions that empower sellers to achieve sustainable growth and maximize their return on investment (ROI)."
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

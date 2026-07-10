import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Shirt, Utensils, Sparkles, Smartphone, HeartPulse, 
  ShoppingCart, Dumbbell, Gift, Briefcase, Smile 
} from 'lucide-react';

const industries = [
  { name: 'Fashion & Apparel', icon: Shirt },
  { name: 'Home & Kitchen', icon: Utensils },
  { name: 'Beauty & Personal Care', icon: Sparkles },
  { name: 'Health & Wellness', icon: HeartPulse },
  { name: 'Toys & Baby Products', icon: Smile },
  { name: 'Electronics Accessories', icon: Smartphone },
  { name: 'Sports & Fitness', icon: Dumbbell },
  { name: 'Handicrafts & Gifts', icon: Gift },
  { name: 'Lifestyle Products', icon: Briefcase },
  { name: 'FMCG', icon: ShoppingCart },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function IndustriesWeServe() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Our Expertise"
          title="Industries We"
          highlight="Serve"
          description="We have proven experience scaling brands across a diverse range of product categories."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-2xl hover:shadow-card hover:border-primary/30 transition-all duration-300 text-center cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-section flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                  <Icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-dark leading-tight">{industry.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

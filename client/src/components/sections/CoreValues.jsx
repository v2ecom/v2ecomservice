import { motion } from 'framer-motion';
import { Heart, Search, BarChart3, RefreshCw } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const values = [
  {
    icon: Heart,
    title: 'Client Success First',
    description: 'We prioritize your goals and work tirelessly to help you achieve them.',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Search,
    title: 'Transparency',
    description: 'We believe in clear communication, honest reporting, and no hidden fees.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Approach',
    description: 'Our strategies are based on analytics and proven methodologies, not guesswork.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    description: 'We constantly adapt to marketplace changes to keep you ahead of the competition.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CoreValues() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="What Drives Us"
          title="Our Core"
          highlight="Values"
          description="The principles that guide everything we do."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-surface rounded-2xl p-8 border border-border shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={item.iconColor} />
                </div>
                <h3 className="text-lg font-bold text-primary font-poppins mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

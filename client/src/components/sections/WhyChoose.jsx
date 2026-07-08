import { motion } from 'framer-motion';
import {
  Award, Eye, FileBarChart, HeadphonesIcon, TrendingUp, Globe
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const features = [
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    description: "Every client gets a dedicated point of contact who knows your business, your goals, and proactively solves problems before they arise.",
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconGradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: FileBarChart,
    title: 'Weekly Performance Reports',
    description: 'Stay updated with regular reports covering sales analytics, performance benchmarks, competitive insights, and clear roadmaps.',
    gradient: 'from-cyan-500/10 to-teal-500/10',
    iconGradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Eye,
    title: 'Transparent Communication',
    description: "No hidden fees. No vague updates. You get clear scope-of-work agreements, regular progress updates, and full visibility into operations.",
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconGradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Award,
    title: 'Marketplace Experts',
    description: "Our focused team understands the specific nuances, algorithms, and policies of Amazon, Flipkart, and Meesho to keep you compliant and growing.",
    gradient: 'from-primary/10 to-secondary/10',
    iconGradient: 'from-primary to-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Structured Growth Strategy',
    description: 'We utilize a systematic growth methodology tailored to your business stage to sustainably improve your marketplace metrics over time.',
    gradient: 'from-green-500/10 to-emerald-500/10',
    iconGradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'End-to-End Management',
    description: 'From GST registration to multi-platform operations, we manage your entire marketplace ecosystem under one roof.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconGradient: 'from-rose-500 to-pink-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Why V2 Ecom"
          title="The Smart Choice for"
          highlight="Marketplace Operations"
          description="We build long-term marketplace businesses. Here's what sets our approach apart."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl p-6 bg-gradient-to-br ${feature.gradient} border border-white hover:border-slate-200 transition-all duration-300 hover:shadow-card cursor-default`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>



                {/* Title */}
                <h3 className="text-base font-semibold text-dark font-poppins mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

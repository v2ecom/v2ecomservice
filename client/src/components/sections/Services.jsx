import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserPlus, Store, BookOpen, Package, Truck, ShieldCheck,
  ArrowRight, ChevronRight
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const services = [
  {
    icon: UserPlus,
    title: 'Seller Registration & Setup',
    description: 'End-to-end seller account creation on Amazon, Flipkart, and Meesho — including GST registration, company formation, and all compliance requirements.',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Store,
    title: 'Marketplace Management',
    description: 'Complete day-to-day management of your seller accounts, performance metrics, policy compliance, and account health monitoring across all platforms.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: BookOpen,
    title: 'Catalog Management',
    description: 'Professional product listing, optimized titles, SEO-rich descriptions, A+ content, keyword research, and high-conversion catalog structures.',
    color: 'from-cyan-500 to-teal-500',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Package,
    title: 'Product Sourcing & Warehousing',
    description: 'Strategic product sourcing, supplier negotiations, quality checks, and fulfillment-ready warehousing to ensure seamless order execution.',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Truck,
    title: 'Order & Return Management',
    description: 'Streamlined order processing, real-time tracking, efficient return handling, and dispute resolution to maintain your seller performance metrics.',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Fraud Protection & Reporting',
    description: 'Advanced fraud detection, counterfeit claim management, monthly business intelligence reports, and marketplace growth strategy consulting.',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="What We Do"
          title="Everything You Need to"
          highlight="Streamline Operations"
          description="We are your dedicated marketplace management team. From day one to ongoing operations, we handle the complexities of selling online."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${service.color} p-[1.5px]`}>
                  <div className="absolute inset-[1.5px] bg-white rounded-2xl" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={service.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-dark font-poppins mb-2 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <div className={`inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>
                    Learn More <ChevronRight size={12} className={`${service.iconColor}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-glow hover:shadow-glow-cyan hover:scale-[1.02] transition-all duration-200"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

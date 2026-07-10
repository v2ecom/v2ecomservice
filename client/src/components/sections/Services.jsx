import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserPlus, BookOpen, TrendingUp,
  Target, FileBarChart, ArrowRight, ChevronRight
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';

const services = [
  {
    logo: amazonLogo,
    logoAlt: 'Amazon',
    title: 'Amazon Account Management',
    description: 'Complete account management, listing optimization, inventory monitoring, promotions, and business growth strategies.',
    bg: 'bg-[#FFF8F0]',
  },
  {
    logo: flipkartLogo,
    logoAlt: 'Flipkart',
    title: 'Flipkart Account Management',
    description: 'End-to-end seller account management to improve product visibility and increase sales.',
    bg: 'bg-[#F0F5FF]',
  },
  {
    logo: meeshoLogo,
    logoAlt: 'Meesho',
    title: 'Meesho Management',
    description: 'Marketplace setup, catalog management, pricing optimization, and sales growth support.',
    bg: 'bg-[#FFF0F4]',
  },
  {
    icon: BookOpen,
    title: 'Product Listing Optimization',
    description: 'SEO-friendly titles, bullet points, descriptions, keyword research, and highconverting product pages.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Amazon PPC Management',
    description: 'Campaign setup, keyword optimization, bid management, performance monitoring, and ROI-focused advertising.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Target,
    title: 'Sales Growth Strategy',
    description: 'Competitor analysis, pricing strategy, promotional planning, and business performance optimization.',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: UserPlus,
    title: 'Marketplace Onboarding',
    description: 'Quick and hassle-free onboarding on multiple marketplaces with complete documentation support.',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: FileBarChart,
    title: 'Business Reporting',
    description: 'Weekly and monthly reports covering sales, advertising, inventory, and actionable recommendations.',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
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
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Our Services"
          title="Everything You Need to"
          highlight="Streamline Operations"
          description=""
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-surface rounded-2xl p-6 border border-border shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Icon or Logo */}
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    {service.logo ? (
                      <img src={service.logo} alt={service.logoAlt} className="w-8 h-8 object-contain" />
                    ) : (
                      <Icon size={22} className={service.iconColor} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary font-poppins mb-2 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <div className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 text-accent">
                    Learn More <ChevronRight size={12} className="text-accent" />
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-text bg-accent shadow-sm hover:bg-accent/90 hover:scale-[1.02] transition-all duration-200"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

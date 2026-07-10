import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';
import myntraLogo from '../../assets/myntralogo.png';

const stats = [
  { prefix: '', to: 100, suffix: '%', label: 'Dedicated Support' },
  { prefix: '', to: 24, suffix: '/7', label: 'Account Monitoring' },
  { prefix: '', to: 2, suffix: '+', label: 'Years of Expertise' },
  { prefix: '', to: 4, suffix: '', label: 'Marketplaces Covered' },
];

const platforms = [
  { logo: amazonLogo, name: 'Amazon India' },
  { logo: flipkartLogo, name: 'Flipkart' },
  { logo: meeshoLogo, name: 'Meesho' },
  { logo: myntraLogo, name: 'Myntra' },
];

export default function TrustedPlatforms() {
  return (
    <section className="py-16 bg-section border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted uppercase tracking-widest mb-10"
        >
          Authorized Partner & Expert Seller Management for
        </motion.p>

        {/* Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-12">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-default flex items-center gap-3"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-9 w-auto object-contain"
              />
              <span className="text-lg font-semibold text-slate-600">{platform.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary font-poppins mb-1">
                {stat.prefix}
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

function AmazonLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#FF9900"/>
        <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="700" fill="white" fontFamily="Arial">az</text>
        <path d="M28 65 Q50 74 72 65" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M67 60 L72 65 L67 70" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold text-slate-700" style={{fontFamily: 'Arial'}}>amazon</span>
    </div>
  );
}

function FlipkartLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#2874F0"/>
        <text x="50" y="68" textAnchor="middle" fontSize="30" fill="#FFE500" fontFamily="Arial">★</text>
      </svg>
      <span className="text-xl font-bold text-slate-700">flipkart</span>
    </div>
  );
}

function MeeshoLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#F43397"/>
        <text x="50" y="62" textAnchor="middle" fontSize="40" fill="white" fontFamily="Arial">M</text>
      </svg>
      <span className="text-xl font-bold text-slate-700">meesho</span>
    </div>
  );
}

const stats = [
  { prefix: '', to: 100, suffix: '%', label: 'Dedicated Support' },
  { prefix: '', to: 24, suffix: '/7', label: 'Account Monitoring' },
  { prefix: '', to: 2, suffix: '+', label: 'Years of Expertise' },
  { prefix: '', to: 3, suffix: '', label: 'Marketplaces Covered' },
];

const platforms = [
  { component: <AmazonLogo />, name: 'Amazon India' },
  { component: <FlipkartLogo />, name: 'Flipkart' },
  { component: <MeeshoLogo />, name: 'Meesho' },
];

export default function TrustedPlatforms() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8"
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
              className="cursor-default"
            >
              {platform.component}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12" />

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
              <p className="text-3xl lg:text-4xl font-bold text-dark font-poppins mb-1">
                {stat.prefix}
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

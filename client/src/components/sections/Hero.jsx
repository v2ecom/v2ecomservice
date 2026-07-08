import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShoppingCart, Package, BarChart2, Star } from 'lucide-react';

const MotionLink = motion.create(Link);

// Amazon SVG Logo
function AmazonLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="#FF9900"/>
      <text x="50" y="58" textAnchor="middle" fontSize="20" fontWeight="700" fill="white" fontFamily="Arial">amazon</text>
      <path d="M30 65 Q50 72 70 65" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M65 60 L70 65 L65 70" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Flipkart SVG Logo
function FlipkartLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="#2874F0"/>
      <text x="50" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="Arial">flipkart</text>
      <text x="50" y="62" textAnchor="middle" fontSize="22" fill="#FFE500" fontFamily="Arial">★</text>
    </svg>
  );
}

// Meesho SVG Logo
function MeeshoLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="#F43397"/>
      <text x="50" y="57" textAnchor="middle" fontSize="15" fontWeight="700" fill="white" fontFamily="Arial">meesho</text>
    </svg>
  );
}

// Dashboard mockup component
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(15,23,42,0.14)] border border-slate-100 p-5 relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Account Health</p>
            <p className="text-2xl font-bold text-dark font-poppins">Excellent</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <TrendingUp size={12} className="text-accent" />
            <span className="text-xs font-semibold text-accent">Optimized</span>
          </div>
        </div>

        {/* Mini chart */}
        <div className="mb-4">
          <svg width="100%" height="80" viewBox="0 0 300 80" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,70 C30,60 50,45 80,38 C110,31 130,50 160,30 C190,10 220,20 250,12 C270,6 285,8 300,5 L300,80 L0,80 Z" fill="url(#chartGrad)"/>
            <path d="M0,70 C30,60 50,45 80,38 C110,31 130,50 160,30 C190,10 220,20 250,12 C270,6 285,8 300,5" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Data points */}
            <circle cx="80" cy="38" r="3" fill="#2563EB"/>
            <circle cx="160" cy="30" r="3" fill="#2563EB"/>
            <circle cx="250" cy="12" r="4" fill="#2563EB" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Platform stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Active Listings', value: 'Healthy', color: 'bg-amazon/10', textColor: 'text-amazon', icon: <AmazonLogo size={20} /> },
            { name: 'Order Fulfillment', value: '100%', color: 'bg-blue-50', textColor: 'text-blue-600', icon: <FlipkartLogo size={20} /> },
            { name: 'Support Issues', value: 'Resolved', color: 'bg-pink-50', textColor: 'text-pink-500', icon: <MeeshoLogo size={20} /> },
          ].map((platform) => (
            <div key={platform.name} className={`${platform.color} rounded-xl p-2.5 text-center`}>
              <div className="flex justify-center mb-1">{platform.icon}</div>
              <p className={`text-xs font-bold ${platform.textColor}`}>{platform.value}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{platform.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating card 1 - Orders */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-card border border-slate-100 p-3 flex items-center gap-2.5 z-20 min-w-[140px]"
      >
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <ShoppingCart size={16} className="text-primary" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Listing Optimization</p>
          <p className="text-sm font-bold text-dark">95% Score</p>
        </div>
      </motion.div>

      {/* Floating card 2 - Growth */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 top-1/4 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-glow p-3 flex items-center gap-2.5 z-20 min-w-[130px]"
      >
        <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
          <BarChart2 size={16} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-white/70 font-medium">Catalog Health</p>
          <p className="text-sm font-bold text-white">Optimized</p>
        </div>
      </motion.div>

      {/* Floating card 3 - Products */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -right-2 bottom-4 bg-white rounded-xl shadow-card border border-slate-100 p-3 flex items-center gap-2.5 z-20 min-w-[145px]"
      >
        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Package size={16} className="text-accent" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Live Listings</p>
          <p className="text-sm font-bold text-dark">Active</p>
        </div>
      </motion.div>

      {/* Floating card 4 - Rating */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-3 bottom-16 bg-white rounded-xl shadow-card border border-slate-100 p-3 flex items-center gap-2 z-20"
      >
        <Star size={14} className="text-yellow-400" fill="#facc15" />
        <span className="text-xs font-bold text-dark">Dedicated Support</span>
      </motion.div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 pb-16 overflow-hidden bg-gradient-hero bg-mesh bg-grid">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/3 to-secondary/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Marketplace Management Experts
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark font-poppins leading-[1.1] tracking-tight mb-6"
            >
              Launch. Manage.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Scale Your
              </span>
              {' '}Marketplace Business.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={itemVariants} className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              From GST registration to multi-platform seller management — we handle every aspect of your Amazon, Flipkart, and Meesho journey so you can focus on building your brand.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8">
              {[
                { value: '3', label: 'Major Marketplaces' },
                { value: '100%', label: 'Dedicated Support' },
                { value: '2+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-dark font-poppins">{stat.value}</p>
                  <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-glow hover:shadow-glow-cyan transition-all duration-200"
              >
                Book Free Consultation
                <ArrowRight size={16} />
              </MotionLink>
              <MotionLink
                to="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-dark bg-white border border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-card transition-all duration-200"
              >
                Explore Services
              </MotionLink>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#2563EB', '#06B6D4', '#22C55E', '#FF9900', '#F43397'].map((color, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: color }} />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <span className="text-sm text-slate-500 font-medium">Trusted by brands across India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:pl-8"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

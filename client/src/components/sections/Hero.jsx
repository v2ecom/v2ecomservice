import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';
import myntraLogo from '../../assets/myntralogo.png';

const MotionLink = motion.create(Link);

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-100 p-6 relative z-10"
      >
        <div className="mb-5">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Trusted Marketplace Partner</p>
          <h3 className="text-lg font-bold text-primary font-poppins leading-snug">
            Helping sellers launch and scale across Amazon, Flipkart & Myntra
          </h3>
        </div>

        <div className="space-y-4">
          {/* Amazon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 p-1.5">
              <img src={amazonLogo} alt="Amazon" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold text-dark mb-0.5">Amazon India</p>
              <p className="text-[11px] text-muted font-medium">Seller onboarding</p>
            </div>
          </div>

          {/* Flipkart */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 p-1.5">
              <img src={flipkartLogo} alt="Flipkart" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold text-dark mb-0.5">Flipkart</p>
              <p className="text-[11px] text-muted font-medium">Catalog management</p>
            </div>
          </div>

          {/* Meesho */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 p-1.5">
              <img src={meeshoLogo} alt="Meesho" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold text-dark mb-0.5">Meesho</p>
              <p className="text-[11px] text-muted font-medium">Listing support</p>
            </div>
          </div>

          {/* Myntra */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 p-1.5">
              <img src={myntraLogo} alt="Myntra" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold text-dark mb-0.5">Myntra</p>
              <p className="text-[11px] text-muted font-medium">Brand growth</p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-bold text-dark">Active Support</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-muted font-medium mb-0.5">Dedicated seller support</p>
              <p className="text-[10px] text-muted font-medium">GST & compliance guidance</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-28 lg:pt-20 pb-16 lg:pb-12 overflow-x-hidden overflow-y-auto bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Top label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5 lg:mb-7">
              <div className="w-10 h-[2px] bg-accent flex-shrink-0" />
              <p className="text-[12px] sm:text-[13px] font-jakarta font-semibold text-muted tracking-[0.1em] uppercase leading-tight">
                Grow Your E-commerce Business with Expert Marketplace Management
                </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[48px] font-jakarta font-bold text-primary leading-[1.15] tracking-[-0.02em] mb-6 max-w-[600px]"
            >
              Scale Your Sales on<br />
              Amazon, Flipkart & more<br />
              Without the Daily Hassle
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={itemVariants} className="text-[17px] font-jakarta font-medium text-muted leading-[1.7] mb-9 max-w-[520px]">
              At V2 Ecom Services, we help brands and
sellers increase visibility, improve
conversions, optimize advertising, and
drive sustainable growth across leading ecommerce marketplaces. From product
listings to PPC campaigns and
performance reporting, we manage
everything so you can focus on growing
your business
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[16px] font-jakarta font-semibold text-white bg-primary shadow-sm hover:bg-primary/90 transition-all duration-200"
              >
                Book a Free Consultation
                <ArrowRight size={15} />
              </MotionLink>

              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openAuditPopup'))}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[16px] font-jakarta font-semibold text-dark bg-accent shadow-sm hover:bg-accent/90 transition-all duration-200 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Account Audit
                  <ArrowRight size={15} />
                </span>
              </motion.button>

              <MotionLink
                to="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[16px] font-jakarta font-semibold text-primary bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all duration-200"
              >
                Explore Our Services
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Right content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:pl-6"
          >
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Floating Icon — Amazon (top-left, behind) */}
            <motion.div
              className="absolute -top-5 -left-3 md:-left-7 z-0 opacity-20"
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center justify-center p-1.5">
                <img src={amazonLogo} alt="Amazon" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating Icon — Flipkart (top-right, front) */}
            <motion.div
              className="absolute top-10 -right-3 md:-right-7 z-20 opacity-95"
              animate={{ y: [-9, 9, -9] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-11 h-11 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center justify-center p-1.5">
                <img src={flipkartLogo} alt="Flipkart" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating Icon — Myntra (bottom-left, front) */}
            <motion.div
              className="absolute -bottom-6 left-6 md:left-3 z-20 opacity-90"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="w-13 h-13 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center justify-center p-1.5" style={{ width: '52px', height: '52px' }}>
                <img src={myntraLogo} alt="Myntra" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating Icon — Meesho (bottom-right, behind) */}
            <motion.div
              className="absolute bottom-12 -right-1 md:-right-5 z-0 opacity-25"
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center justify-center p-1.5">
                <img src={meeshoLogo} alt="Meesho" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

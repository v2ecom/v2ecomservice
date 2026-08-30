import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import amazonLogo  from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo  from '../../assets/meeshologo.png';
import myntraLogo  from '../../assets/myntralogo.png';

const MotionLink = motion.create(Link);

/* ── Right-side Marketplace Card ── */
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-100 p-6 relative z-10"
      >
        {/* Card header */}
        <div className="mb-5">
          <p className="text-[8px] font-semibold text-accent uppercase tracking-widest mb-2">
            Trusted Marketplace Partner
          </p>
          <h3 className="text-[13px] font-semibold text-primary leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
            Helping sellers launch and scale across Amazon, Flipkart &amp; Myntra
          </h3>
        </div>

        {/* Marketplace rows */}
        <div className="space-y-3.5">
          {[
            { src: amazonLogo,   alt: 'Amazon',   title: 'Amazon India',  sub: 'Seller onboarding' },
            { src: flipkartLogo, alt: 'Flipkart',  title: 'Flipkart',      sub: 'Catalog management' },
            { src: meeshoLogo,   alt: 'Meesho',    title: 'Meesho',        sub: 'Listing support' },
            { src: myntraLogo,   alt: 'Myntra',    title: 'Myntra',        sub: 'Brand growth' },
          ].map((item) => (
            <div key={item.alt} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 p-1.5">
                <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-dark leading-none mb-0.5">{item.title}</p>
                <p className="text-[10px] text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card footer */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[11px] font-semibold text-dark">Active Support</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-muted mb-0.5">Dedicated seller support</p>
              <p className="text-[9px] text-muted">GST &amp; compliance guidance</p>
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
  hidden:   { opacity: 0, y: 18 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-28 lg:pt-20 pb-12 sm:pb-16 lg:pb-12 overflow-x-hidden overflow-y-auto bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-8 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-[640px]"
          >
            {/* Top label — 13px desktop / 12px mobile, weight 600 */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 lg:mb-9">
              <div className="w-8 h-[2px] bg-accent flex-shrink-0" />
              <p
                className="text-[10px] sm:text-[11px] font-semibold text-muted tracking-[0.12em] uppercase leading-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Grow Your E-commerce Business with Expert Marketplace Management
              </p>
            </motion.div>

            {/* Hero Heading — 32px mobile / 40px tablet / 48px desktop, weight 700 */}
            {/* Exact 3-line structure: line1 / line2 / line3 */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 lg:mb-7"
              style={{
                fontFamily:    'Inter, sans-serif',
                fontWeight:    700,
                fontSize:      'clamp(30px, 5vw, 46px)',
                lineHeight:    1.15,
                letterSpacing: '-0.025em',
                color:         '#243B6B',
              }}
            >
              {/* Line 1 */}
              Scale Your Sales on
              <br />
              {/* Line 2 */}
              <span style={{ color: '#243B6B' }}>Amazon, Flipkart &amp; Myntra</span>
              <br />
              {/* Line 3 */}
              <span style={{ color: '#243B6B' }}>Without the Daily Hassle</span>
            </motion.h1>

            {/* Subheading — 18px desktop / 17px tablet / 16px mobile, weight 500 */}
            <motion.p
              variants={itemVariants}
              className="mb-9 lg:mb-10 max-w-[560px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize:   'clamp(14px, 1.8vw, 16px)',
                lineHeight: 1.75,
                color:      '#64748B',
              }}
            >
              At V2 Ecom Services, we help brands and sellers increase visibility,
              improve conversions, optimize advertising, and drive sustainable growth
              across leading e-commerce marketplaces — so you can focus on building
              your business.
            </motion.p>

            {/* CTA Buttons — 16px desktop / 15px mobile, weight 600 */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3">
              <motion.a
                href="https://wa.me/919629212489?text=Hi!%20I'm%20interested%20in%20V2%20Ecom%20Services.%20I'd%20like%20to%20discuss%20how%20you%20can%20help%20me%20scale%20my%20marketplace%20business."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-primary text-white shadow-sm hover:bg-primary/90 transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Book a Free Consultation
                <ArrowRight size={15} />
              </motion.a>

              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openAuditPopup'))}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-dark shadow-sm hover:bg-accent/90 transition-all duration-200 relative overflow-hidden"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                <span className="absolute inset-0 bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }} />
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Account Audit
                  <ArrowRight size={15} />
                </span>
              </motion.button>

              <MotionLink
                to="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-primary bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Explore Our Services
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* ── Right: Marketplace Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:pl-6 flex items-center"
          >
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Floating logo — Amazon (top-left, faint) */}
            <motion.div
              className="absolute -top-5 -left-3 md:-left-7 z-0 opacity-20"
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            >
              <div className="w-11 h-11 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-1.5">
                <img src={amazonLogo} alt="Amazon" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating logo — Flipkart (top-right) */}
            <motion.div
              className="absolute top-10 -right-3 md:-right-7 z-20 opacity-90"
              animate={{ y: [-9, 9, -9] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-10 h-10 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-1.5">
                <img src={flipkartLogo} alt="Flipkart" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating logo — Myntra (bottom-left) */}
            <motion.div
              className="absolute -bottom-6 left-6 md:left-3 z-20 opacity-85"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-1.5">
                <img src={myntraLogo} alt="Myntra" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Floating logo — Meesho (bottom-right, faint) */}
            <motion.div
              className="absolute bottom-12 -right-1 md:-right-5 z-0 opacity-20"
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="w-11 h-11 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-1.5">
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

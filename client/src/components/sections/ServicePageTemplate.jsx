import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Users
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.07 }
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};



/* ── Main Template ── */
export default function ServicePageTemplate({
  tag,
  title,
  highlight,
  subtitle,
  description,
  logo,
  logoAlt,
  Icon,
  iconBg = 'bg-primary/10',
  iconColor = 'text-primary',
  whatWeManage = [],
  whyChoose = [],
  steps = [],
  whoBenefits = [],
}) {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── HERO ── */}
      <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        {/* Decorative blob — hidden on very small screens to prevent overflow */}
        <div className="hidden sm:block absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

        <div className="container-base relative z-10">
          <div className="max-w-4xl">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 sm:w-12 h-[2px] bg-accent shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-muted tracking-widest uppercase font-jakarta">{tag}</p>
            </motion.div>

            {/* Logo / Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-5"
            >
              <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-border shadow-sm ${iconBg}`}>
                {logo ? (
                  <img src={logo} alt={logoAlt} className="h-7 sm:h-9 w-auto object-contain" />
                ) : Icon ? (
                  <Icon size={24} className={iconColor} />
                ) : null}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 lg:mb-5"
              style={{
                fontFamily:    'Inter, sans-serif',
                fontWeight:    700,
                fontSize:      'clamp(30px, 4.5vw, 46px)',
                lineHeight:    1.12,
                letterSpacing: '-0.025em',
                color:         '#243B6B',
              }}
            >
              {title}
              {highlight && (
                <> <span className="text-accent">{highlight}</span></>
              )}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mb-4 sm:mb-6 leading-snug"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize:   'clamp(14px, 1.8vw, 16px)',
                lineHeight: 1.5,
                color:      '#64748B',
              }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mb-7 sm:mb-8 max-w-3xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize:   'clamp(13px, 1.6vw, 15px)',
                lineHeight: 1.75,
                color:      '#64748B',
              }}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/919629212489?text=Hi!%20I'm%20interested%20in%20V2%20Ecom%20Services.%20I'd%20like%20to%20discuss%20how%20you%20can%20help%20me%20scale%20my%20marketplace%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-dark bg-accent hover:bg-accent/90 shadow-sm active:scale-[0.98] hover:scale-[1.02] transition-all duration-200 w-full sm:w-auto"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Book Free Consultation <ArrowRight size={15} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-primary border border-border hover:border-primary/40 hover:bg-background transition-all duration-200 w-full sm:w-auto"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE MANAGE ── */}
      {whatWeManage.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-28 bg-section relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="container-base relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-background text-primary border border-border mb-3 sm:mb-4">
                What We Manage
              </div>
              <h2
                className="mb-0"
                style={{
                  fontFamily:    'Inter, sans-serif',
                  fontWeight:    700,
                  fontSize:      'clamp(26px, 3.5vw, 34px)',
                  lineHeight:    1.2,
                  letterSpacing: '-0.02em',
                  color:         '#243B6B',
                }}
              >
                Our <span className="text-accent">Scope of Work</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {whatWeManage.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-surface rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-card hover:border-primary/25 transition-all duration-300 group"
                  >
                    {ItemIcon && (
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.iconBg || 'bg-primary/8'} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <ItemIcon size={19} className={item.iconColor || 'text-primary'} />
                      </div>
                    )}
                    <h3
                      className="mb-1.5 sm:mb-2 group-hover:text-accent transition-colors duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize:   'clamp(16px, 2vw, 20px)',
                        lineHeight: 1.3,
                        color:      '#243B6B',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px, 1.4vw, 14px)', color: '#64748B' }}
                    >{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── WHY CHOOSE US ── */}
      {whyChoose.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-28 bg-background">
          <div className="container-base">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-background text-primary border border-border mb-4">
                  Why Choose Us
                </div>
                <h2
                  className="mb-4 sm:mb-6"
                  style={{
                    fontFamily:    'Inter, sans-serif',
                    fontWeight:    700,
                    fontSize:      'clamp(26px, 3.5vw, 34px)',
                    lineHeight:    1.2,
                    letterSpacing: '-0.02em',
                    color:         '#243B6B',
                  }}
                >
                  Why <span className="text-accent">V2 Ecom Services?</span>
                </h2>
                <p
                  className="mb-6 sm:mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 1.6vw, 15px)', lineHeight: 1.75, color: '#64748B' }}
                >
                  We combine marketplace expertise with data-driven strategies and dedicated support to deliver measurable results for your business.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openAuditPopup'))}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-dark bg-accent hover:bg-accent/90 shadow-sm active:scale-[0.98] hover:scale-[1.02] transition-all duration-200 w-full sm:w-auto"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
                >
                  Get Started Today <ArrowRight size={15} />
                </button>
              </motion.div>

              {/* Right column — checklist grid */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 lg:mt-0"
              >
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-section border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-200"
                  >
                    <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-primary font-jakarta leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── OUR PROCESS ── */}
      {steps.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-28 bg-section relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh pointer-events-none" />
          <div className="container-base relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-background text-primary border border-border mb-3 sm:mb-4">
                Our Process
              </div>
              <h2
                className="mb-0"
                style={{
                  fontFamily:    'Inter, sans-serif',
                  fontWeight:    700,
                  fontSize:      'clamp(26px, 3.5vw, 34px)',
                  lineHeight:    1.2,
                  letterSpacing: '-0.02em',
                  color:         '#243B6B',
                }}
              >
                How We <span className="text-accent">Work</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line — only on large screens */}
              <div className="hidden lg:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
              >
                {steps.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      className="text-center"
                    >
                      <div className="relative inline-flex mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-lg mx-auto">
                          {StepIcon ? (
                            <StepIcon size={24} className="text-white" />
                          ) : (
                            <span className="text-xl sm:text-2xl font-bold text-white font-poppins">{i + 1}</span>
                          )}
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-dark">
                          {i + 1}
                        </div>
                      </div>
                      <h3
                        className="mb-1.5 sm:mb-2 leading-snug"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(12px, 1.5vw, 14px)', color: '#243B6B' }}
                      >{step.title}</h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(11px, 1.3vw, 13px)', color: '#64748B', lineHeight: 1.65 }}>{step.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── WHO CAN BENEFIT ── */}
      {whoBenefits.length > 0 && (
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-base">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-background text-primary border border-border mb-3 sm:mb-4">
                Who Can Benefit
              </div>
              <h2
                className="mb-0"
                style={{
                  fontFamily:    'Inter, sans-serif',
                  fontWeight:    700,
                  fontSize:      'clamp(26px, 3.5vw, 34px)',
                  lineHeight:    1.2,
                  letterSpacing: '-0.02em',
                  color:         '#243B6B',
                }}
              >
                Perfect For <span className="text-accent">Every Seller</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto"
            >
              {whoBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-section border border-border text-xs sm:text-sm font-medium text-primary font-jakarta hover:border-primary/30 hover:bg-primary/3 transition-all duration-200"
                >
                  <Users size={12} className="text-accent" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* ── FINAL CTA ── */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container-base relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white border border-white/20 mb-5 sm:mb-6">
              Get Started Today
            </div>
            <h2
              className="mb-3 sm:mb-4 px-2"
              style={{
                fontFamily:    'Inter, sans-serif',
                fontWeight:    700,
                fontSize:      'clamp(24px, 3.5vw, 38px)',
                lineHeight:    1.2,
                letterSpacing: '-0.02em',
                color:         '#FFFFFF',
              }}
            >
              Ready to Scale Your Business?
            </h2>
            <p
              className="max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 1.6vw, 15px)', lineHeight: 1.75, color: '#CBD5E1' }}
            >
              Partner with V2 Ecom Services and let our experts manage your marketplace business while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="https://wa.me/919629212489?text=Hi!%20I'm%20interested%20in%20V2%20Ecom%20Services.%20I'd%20like%20to%20discuss%20how%20you%20can%20help%20me%20scale%20my%20marketplace%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-dark bg-accent hover:bg-accent/90 shadow-lg active:scale-[0.98] hover:scale-[1.02] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Book a Free Consultation <ArrowRight size={15} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 1.5vw, 14px)' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

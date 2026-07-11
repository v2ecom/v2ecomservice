import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import v2Logo from '../../assets/v2logo.png';
import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';

const services = [
  { label: 'Amazon Account Management', href: '/services/amazon-account-management', logo: amazonLogo, logoAlt: 'Amazon', color: 'bg-[#FFF8F0]' },
  { label: 'Amazon PPC Management', href: '/services/amazon-ppc-management', logo: amazonLogo, logoAlt: 'Amazon', color: 'bg-[#FFF8F0]' },
  { label: 'Flipkart Account Management', href: '/services/flipkart-account-management', logo: flipkartLogo, logoAlt: 'Flipkart', color: 'bg-[#F0F5FF]' },
  { label: 'Meesho Account Management', href: '/services/meesho-account-management', logo: meeshoLogo, logoAlt: 'Meesho', color: 'bg-[#FFF0F4]' },
  { label: 'Product Listing Optimization', href: '/services/product-listing-optimization', emoji: '📝', color: 'bg-emerald-50' },
  { label: 'Marketplace Onboarding', href: '/services/marketplace-onboarding', emoji: '🚀', color: 'bg-teal-50' },
  { label: 'Product Research & Analysis', href: '/services/product-research', emoji: '🔍', color: 'bg-blue-50' },
  { label: 'E-commerce Consulting', href: '/services/ecommerce-consulting', emoji: '💼', color: 'bg-indigo-50' },
  { label: 'Catalog Management', href: '/services/catalog-management', emoji: '🗂️', color: 'bg-purple-50' },
  { label: 'Account Health Management', href: '/services/account-health-management', emoji: '🛡️', color: 'bg-green-50' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Case Study', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-glass border-b border-white/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

            {/* Logo */}
            <MotionLink to="/" className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
              <img src={v2Logo} alt="V2 Ecom Logo" className="h-8 sm:h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-primary text-sm sm:text-base font-poppins tracking-tight">V2 Ecom</span>
                <span className="text-[9px] sm:text-[10px] font-medium text-muted tracking-widest uppercase">Services</span>
              </div>
            </MotionLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = link.hasDropdown ? isServicesActive : location.pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className={`relative flex items-center gap-1.5 px-3 xl:px-4 py-2 text-[13px] lg:text-[14px] font-semibold rounded-lg transition-colors duration-200 ${
                          isActive ? 'text-primary' : 'text-muted hover:text-primary hover:bg-background'
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                        {isActive && (
                          <motion.div layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                        )}
                      </motion.button>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl border border-border shadow-[0_20px_60px_-10px_rgba(15,23,42,0.15)] overflow-hidden z-50"
                            style={{ width: 'min(560px, calc(100vw - 32px))' }}
                          >
                            {/* Header */}
                            <div className="px-4 pt-3.5 pb-2.5 border-b border-border">
                              <p className="text-[8px] font-semibold text-muted tracking-widest uppercase font-jakarta">Our Services</p>
                              <p className="text-[11px] font-medium text-primary font-poppins mt-0.5">10 Expert Marketplace Solutions</p>
                            </div>

                            {/* Grid */}
                            <div className="p-2.5 grid grid-cols-2 gap-0.5">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-section transition-colors duration-150 group"
                                >
                                  <div className={`w-7 h-7 rounded-lg ${service.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                    {service.logo ? (
                                      <img src={service.logo} alt={service.logoAlt} className="w-4 h-4 object-contain" />
                                    ) : (
                                      <span className="text-xs">{service.emoji}</span>
                                    )}
                                    </div>
                                  <span className="text-[10px] font-medium text-primary font-jakarta leading-tight group-hover:text-accent transition-colors duration-150">
                                    {service.label}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-2.5 bg-section border-t border-border flex items-center justify-between gap-2">
                              <span className="text-[9px] text-muted font-jakarta">Need help choosing a service?</span>
                              <button
                                onClick={() => { setServicesOpen(false); window.dispatchEvent(new CustomEvent('openAuditPopup')); }}
                                className="text-[9px] font-semibold text-accent hover:text-accent/80 font-jakarta flex items-center gap-1 transition-colors whitespace-nowrap"
                              >
                                Free Consultation <ArrowRight size={10} />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <MotionLink
                    key={link.label}
                    to={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-[13px] lg:text-[14px] font-semibold rounded-lg transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-muted hover:text-primary hover:bg-background'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </MotionLink>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openAuditPopup'))}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl text-[13px] lg:text-[14px] font-semibold text-dark bg-accent hover:bg-accent/90 shadow-sm transition-all duration-200"
              >
                <span className="absolute inset-0 rounded-xl bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
                <span className="relative z-10 flex items-center gap-2">Book Consultation <ArrowRight size={13} /></span>
              </motion.button>
            </div>

            {/* Mobile/Tablet hamburger */}
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile / Tablet Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[min(320px,90vw)] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <img src={v2Logo} alt="V2 Ecom Logo" className="h-8 w-auto" />
                  <span className="font-bold text-primary text-sm font-poppins">V2 Ecom</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable nav items */}
              <div className="flex-1 overflow-y-auto py-3 px-3">
                {navLinks.map((link, i) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-3 py-3 text-[13px] font-jakarta font-semibold rounded-xl transition-colors mb-0.5 ${
                            isServicesActive ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={15} className={`transition-transform duration-200 text-muted ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pl-2 pb-2 space-y-0.5">
                                {services.map((service) => (
                                  <Link
                                    key={service.href}
                                    to={service.href}
                                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors group ${
                                      location.pathname === service.href ? 'bg-primary/5 text-primary' : ''
                                    }`}
                                  >
                                    <div className={`w-6 h-6 rounded-lg ${service.color} flex items-center justify-center shrink-0`}>
                                      {service.logo ? (
                                        <img src={service.logo} alt={service.logoAlt} className="w-3.5 h-3.5 object-contain" />
                                      ) : (
                                        <span className="text-[11px]">{service.emoji}</span>
                                      )}
                                    </div>
                                    <span className="text-[11px] font-medium text-slate-700 group-hover:text-primary font-jakarta leading-tight">
                                      {service.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-3 py-3 text-[13px] font-jakarta font-semibold rounded-xl transition-colors mb-0.5 ${
                        location.pathname === link.href ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer footer CTA */}
              <div className="px-4 py-4 border-t border-border">
                <button
                  onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent('openAuditPopup')); }}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-jakarta font-semibold text-dark bg-accent hover:bg-accent/90 overflow-hidden active:scale-[0.98] transition-all"
                >
                  <span className="absolute inset-0 bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
                  <span className="relative z-10 flex items-center gap-2">Book Consultation <ArrowRight size={14} /></span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

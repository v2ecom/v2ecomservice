import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import v2Logo from '../../assets/v2logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-white/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <MotionLink
              to="/"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <img src={v2Logo} alt="V2 Ecom Logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-primary text-base font-poppins tracking-tight">V2 Ecom</span>
                <span className="text-[10px] font-medium text-muted tracking-widest uppercase">Services</span>
              </div>
            </MotionLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <MotionLink
                    key={link.label}
                    to={link.href}
                    className={`relative px-4 py-2 text-[17px] font-jakarta font-semibold rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted hover:text-primary hover:bg-background'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </MotionLink>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 relative group">
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('openAuditPopup'))}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[17px] font-jakarta font-semibold text-dark bg-accent hover:bg-accent/90 shadow-sm transition-all duration-200"
              >
                {/* Vibration pulse effect */}
                <span className="absolute inset-0 rounded-xl bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-glass lg:hidden"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <MotionLink
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: i * 0.05 }}
              className={`px-4 py-3 text-[17px] font-jakarta font-semibold rounded-lg transition-colors ${
                location.pathname === link.href ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </MotionLink>
          ))}
          <div className="mt-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileOpen(false);
                window.dispatchEvent(new CustomEvent('openAuditPopup'));
              }}
              className="relative flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[17px] font-jakarta font-semibold text-dark bg-accent hover:bg-accent/90 overflow-hidden"
            >
              <span className="absolute inset-0 bg-accent opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

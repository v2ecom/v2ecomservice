import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, ArrowRight, MapPin, Phone, Mail, ChevronRight
} from 'lucide-react';

// Brand icons — all inline SVGs (lucide-react v0.400+ dropped most social brand icons)
function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function TwitterIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  );
}

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Seller Registration', href: '/services' },
      { label: 'Amazon Management', href: '/services' },
      { label: 'Flipkart Management', href: '/services' },
      { label: 'Meesho Management', href: '/services' },
      { label: 'Catalog Management', href: '/services' },
      { label: 'Fraud Protection', href: '/services' },
    ],
  },
  platforms: {
    title: 'Platforms',
    links: [
      { label: 'Amazon India', href: '#' },
      { label: 'Flipkart', href: '#' },
      { label: 'Meesho', href: '#' },
      { label: 'Product Sourcing', href: '#' },
      { label: 'GST Registration', href: '#' },
    ],
  },
};

const socials = [
  { icon: LinkedinIcon,  href: '#', label: 'LinkedIn',  color: 'hover:text-blue-500 hover:bg-blue-500/10' },
  { icon: InstagramIcon, href: '#', label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-500/10' },
  { icon: FacebookIcon,  href: '#', label: 'Facebook',  color: 'hover:text-blue-600 hover:bg-blue-600/10' },
  { icon: TwitterIcon,   href: '#', label: 'Twitter/X', color: 'hover:text-sky-400 hover:bg-sky-400/10' },
  { icon: YoutubeIcon,   href: '#', label: 'YouTube',   color: 'hover:text-red-500 hover:bg-red-500/10' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base font-poppins">V2 Ecom</span>
                <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">Services</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              India's most trusted marketplace growth partner. We help businesses launch, manage, and scale on Amazon, Flipkart, and Meesho.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: Phone, text: '+91 96292 12489', href: 'tel:+919629212489' },
                { icon: Mail, text: 'v2ecomservices@gmail.com', href: 'mailto:v2ecomservices@gmail.com' },
                { icon: MapPin, text: 'Nallappa nagar,2nd st, Pandian Nagar, Tiruppur, Tamil Nadu 641602, India', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                  <Icon size={14} className="text-primary group-hover:text-primary" />
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  title={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${color}`}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="group flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity -ml-2 group-hover:ml-0" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="group flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity -ml-2 group-hover:ml-0" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Get marketplace insights, growth tips, and platform updates delivered to your inbox. No spam — ever.
            </p>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent/10 border border-accent/30"
              >
                <span className="text-accent text-sm font-medium">✓ You're subscribed! Welcome aboard.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white"
                >
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            )}

            {/* Certifications / badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Amazon Partner', 'GST Registered', 'ISO Certified'].map((badge) => (
                <span key={badge} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} V2 Ecom Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

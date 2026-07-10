import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, MapPin, Phone, Mail, ChevronRight
} from 'lucide-react';
import v2Logo from '../../assets/v2logo.png';
import whatsappLogo from '../../assets/whatsapplogo.png';
import instagramLogo from '../../assets/instagramlogo.png';
import linkedinLogo from '../../assets/linkedinlogo.png';
import emailLogo from '../../assets/emaillogo.png';

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
  { logo: whatsappLogo,  href: 'https://wa.me/919629212489', label: 'WhatsApp',  hoverBg: 'hover:bg-green-500/15' },
  { logo: instagramLogo, href: '#',                         label: 'Instagram', hoverBg: 'hover:bg-pink-500/15' },
  { logo: linkedinLogo,  href: '#',                         label: 'LinkedIn',  hoverBg: 'hover:bg-blue-500/15' },
  { logo: emailLogo,     href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vivek@v2ecomservices.com', label: 'Email', hoverBg: 'hover:bg-accent/15' },
];

export default function Footer() {

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <img src={v2Logo} alt="V2 Ecom Logo" className="h-12 w-auto mb-2" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              India's most trusted marketplace growth partner. We help businesses launch, manage, and scale on Amazon, Flipkart, and Meesho.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: Phone, text: '+91 96292 12489', href: 'tel:+919629212489' },
                { icon: Mail, text: 'v2ecomservices@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=v2ecomservices@gmail.com' },
                { icon: MapPin, text: 'Nallappa nagar,2nd st, Pandian Nagar, Tiruppur, Tamil Nadu 641602, India', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                  <Icon size={14} className="text-accent group-hover:text-accent" />
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ logo, href, label, hoverBg }) => (
                <motion.a
                  key={label}
                  href={href}
                  title={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 ${hoverBg}`}
                >
                  <img src={logo} alt={label} className="w-5 h-5 object-contain" />
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
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-accent transition-opacity -ml-2 group-hover:ml-0" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="group flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-accent transition-opacity -ml-2 group-hover:ml-0" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certifications / badges */}
          <div className="lg:col-span-5 mt-2 flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {['Amazon Partner', 'GST Registered', 'ISO Certified'].map((badge) => (
              <span key={badge} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                ✓ {badge}
              </span>
            ))}
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

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA({ title, description }) {
  const whatsappNumber = '919629212489';
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in V2 Ecom Services. I'd like to discuss how you can help me scale my marketplace business."
  );

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Ready to Grow?
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-poppins leading-tight mb-6"
          >
            {title || (
              <>
                Start Growing Your{' '}
                <span className="text-accent">
                  Marketplace Business Today
                </span>
              </>
            )}
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-muted leading-relaxed mb-10 max-w-xl mx-auto"
          >
            {description || 'Partner with V2 Ecom Services and take the stress out of e-commerce management. Let us handle the details while you focus on scaling your business.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=v2ecomservices@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-dark bg-accent shadow-sm hover:bg-accent/90 transition-all duration-200"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#25D366] hover:bg-[#20BD5C] shadow-sm hover:shadow-card transition-all duration-200"
            >
              <MessageCircle size={18} fill="white" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
          >
            {['No Setup Fee', 'No Long-term Contract', '100% Transparent Pricing', 'Response Within 2 Hours'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: '📞', label: 'Call Us', value: '+91 96292 12489', href: 'tel:+919629212489' },
            { icon: '📧', label: 'Email Us', value: 'v2ecomservices@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=v2ecomservices@gmail.com' },
            { icon: '📍', label: 'Location', value: 'Nallappa nagar,2nd st, Pandian Nagar, Tiruppur, Tamil Nadu 641602 , India', href: '#' },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all duration-200 text-center"
            >
              <span className="text-2xl">{contact.icon}</span>
              <span className="text-xs text-muted font-medium uppercase tracking-wider">{contact.label}</span>
              <span className="text-sm text-primary font-medium transition-colors">{contact.value}</span>
            </a>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <iframe
            title="V2 Ecom Services Location"
            src="https://www.google.com/maps?q=Nallappa+nagar,2nd+st,+Pandian+Nagar,+Tiruppur,+Tamil+Nadu+641602+,+India&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

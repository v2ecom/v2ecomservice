import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2
} from 'lucide-react';
import whatsappLogo from '../../assets/whatsapplogo.png';
import instagramLogo from '../../assets/instagramlogo.png';
import linkedinLogo from '../../assets/linkedinlogo.png';
import emailLogo from '../../assets/emaillogo.png';

const whyContact = [
  'Experienced marketplace specialists',
  'Personalized business consultation',
  'Transparent communication',
  'Fast response time',
  'Practical, data-driven recommendations',
  'Long-term partnership focused on your growth'
];

export default function ContactLayout() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    marketplaces: '',
    category: '',
    sales: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Thank you! Your message has been sent.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div className="container-base relative z-10 space-y-16">
        
        {/* ── Top Section: Info Grid ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary font-poppins mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted"
          >
            Reach out to our experts through any of the channels below or fill out the form to request a free consultation.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-primary mb-2">Office Address</h3>
            <p className="text-muted text-sm leading-relaxed">
              V2 Ecom Services<br />
              Pandian Nagar<br />
              Tiruppur – 641603<br />
              Tamil Nadu, India
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-primary mb-2">Phone</h3>
            <p className="text-muted text-sm">+91 96292 12489</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-primary mb-2">Email</h3>
            <p className="text-muted text-sm">vivek@v2ecomservices.com</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-primary mb-2">Business Hours</h3>
            <p className="text-muted text-sm">Mon – Sat: 9:30 AM – 6:30 PM</p>
            <p className="text-muted text-sm">Sunday: Closed</p>
          </motion.div>
        </div>

        {/* ── Middle Section: The Form ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-poppins mb-3">Send Us a Message</h2>
              <p className="text-muted max-w-xl mx-auto">Fill out the contact form and our team will get back to you within one business day.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="name" required onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" name="company" required onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="Your Brand Ltd." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Business Location</label>
                  <input type="text" name="location" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="City, State" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Monthly Sales (Optional)</label>
                  <select name="sales" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-primary appearance-none">
                    <option value="">Select range...</option>
                    <option value="new">Just Starting Out</option>
                    <option value="1L-5L">₹1L - ₹5L</option>
                    <option value="5L-20L">₹5L - ₹20L</option>
                    <option value="20L+">₹20L+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Marketplace(s) You Sell On</label>
                  <input type="text" name="marketplaces" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="Amazon, Flipkart, etc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Product Category</label>
                  <input type="text" name="category" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="Fashion, Electronics, etc." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Services Required</label>
                <input type="text" name="services" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="PPC, Cataloging, Account Management" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Your Message</label>
                <textarea name="message" rows="5" onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm resize-none" placeholder="Tell us about your business goals..."></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full md:w-auto md:px-12 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Request a Free Consultation <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ── Bottom Section: Why Us & Socials ── */}
        <div className="max-w-6xl mx-auto pt-16 border-t border-border grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary font-poppins mb-6">Why Contact V2 Ecom Services?</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {whyContact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted text-sm">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-bold text-primary font-poppins mb-4">Follow Us</h3>
            <p className="text-muted mb-6 text-sm max-w-sm ml-auto">
              Stay connected for the latest e-commerce insights, marketplace updates, and seller strategies.
            </p>
            <div className="flex gap-3 md:justify-end flex-wrap">
              <a href="https://wa.me/919629212489" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:shadow-sm transition-all p-2.5">
                <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-contain" />
              </a>
              <a href="#"
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:shadow-sm transition-all p-2.5">
                <img src={instagramLogo} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#"
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:shadow-sm transition-all p-2.5">
                <img src={linkedinLogo} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vivek@v2ecomservices.com"
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent hover:shadow-sm transition-all p-2.5">
                <img src={emailLogo} alt="Email" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

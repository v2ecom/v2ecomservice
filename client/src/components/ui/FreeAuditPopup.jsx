import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Search, TrendingUp, Shield, Activity, Lightbulb } from 'lucide-react';

const HIDE_POPUP_KEY = 'v2ecom_audit_popup_hidden_until';

export default function FreeAuditPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [fallbackData, setFallbackData] = useState(null);

  useEffect(() => {
    const forceOpenPopup = () => setIsVisible(true);
    window.addEventListener('openAuditPopup', forceOpenPopup);
    return () => window.removeEventListener('openAuditPopup', forceOpenPopup);
  }, []);

  useEffect(() => {
    // Check if the user has dismissed the popup in the last 7 days
    const hideUntil = localStorage.getItem(HIDE_POPUP_KEY);
    if (hideUntil && new Date().getTime() < parseInt(hideUntil, 10)) {
      setHasDismissed(true);
      return;
    }

    const showPopup = () => {
      if (!hasDismissed) setIsVisible(true);
    };

    // Trigger 1: Time Delay (25 seconds)
    const timer = setTimeout(showPopup, 25000);

    // Trigger 2: Scroll Depth (55%)
    const handleScroll = () => {
      if (hasDismissed || isVisible) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      
      if (scrollPercentage >= 55) {
        showPopup();
      }
    };

    // Trigger 3: Exit Intent (Desktop only)
    const handleMouseLeave = (e) => {
      if (hasDismissed || isVisible) return;
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasDismissed, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
    // Set cookie/localStorage to not show for 7 days
    const sevenDaysFromNow = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem(HIDE_POPUP_KEY, sevenDaysFromNow.toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    setFallbackData(dataObj);

    // VITE_WEB3FORMS_ACCESS_KEY should be added in .env.local
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE');
    formData.append('subject', 'New Free Audit Request from V2 Ecom');
    formData.append('from_name', 'V2 Ecom Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitResult('success');
        setTimeout(() => {
          handleClose();
          setSubmitResult(null);
        }, 3000);
      } else {
        setSubmitResult('error');
      }
    } catch (error) {
      setSubmitResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getGmailLink = () => {
    if (!fallbackData) return '#';
    const { name, company, phone, email, marketplace, monthly_sales } = fallbackData;
    const subject = encodeURIComponent('New Free Audit Request from V2 Ecom');
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nMarketplace: ${marketplace}\nMonthly Sales: ${monthly_sales}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=vivek@v2ecomservices.com&su=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 hover:bg-background flex items-center justify-center text-primary transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Left Column: Info */}
            <div className="md:w-5/12 bg-section p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="inline-flex px-3 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider w-max mb-6">
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold text-primary font-poppins mb-4">
                Get a FREE Account Audit Worth <span className="text-accent">₹1,999</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Discover what's limiting your sales. Our marketplace experts will review your account and provide actionable growth recommendations.
              </p>

              <div className="space-y-4">
                <h3 className="font-bold text-primary text-sm uppercase tracking-wide">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Search size={18} className="text-accent shrink-0" />
                    <span>Listing SEO Audit</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <TrendingUp size={18} className="text-accent shrink-0" />
                    <span>PPC Campaign Review</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Activity size={18} className="text-accent shrink-0" />
                    <span>Competitor Analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Shield size={18} className="text-accent shrink-0" />
                    <span>Account Health Check</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Lightbulb size={18} className="text-accent shrink-0" />
                    <span>Growth Recommendations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="md:w-7/12 p-8 md:p-10 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary uppercase tracking-wide">Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary uppercase tracking-wide">Company Name</label>
                    <input type="text" name="company" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary uppercase tracking-wide">Phone Number</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary uppercase tracking-wide">Email Address</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Marketplace</label>
                  <select name="marketplace" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm text-primary appearance-none">
                    <option value="">Select a marketplace...</option>
                    <option value="amazon">Amazon</option>
                    <option value="flipkart">Flipkart</option>
                    <option value="meesho">Meesho</option>
                    <option value="multiple">Multiple Marketplaces</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Monthly Sales (Optional)</label>
                  <select name="monthly_sales" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm text-primary appearance-none">
                    <option value="">Select a range...</option>
                    <option value="new">Just Starting Out</option>
                    <option value="1-5">₹1L - ₹5L</option>
                    <option value="5-20">₹5L - ₹20L</option>
                    <option value="20+">₹20L+</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-2 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending Request...' : 'Get My Free Audit'}
                </button>
                {submitResult === 'success' && (
                  <p className="text-sm text-center text-green-600 font-medium mt-2">Request sent successfully! We will contact you soon.</p>
                )}
                {submitResult === 'error' && (
                  <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col items-center">
                    <p className="text-sm text-center text-red-600 font-medium mb-3">Our submission limit has been reached. Please send your request directly via email.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a 
                        href={getGmailLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors shadow-sm inline-block"
                      >
                        Open in Gmail
                      </a>
                    </div>
                  </div>
                )}
                <p className="text-xs text-center text-muted mt-4">We respect your privacy. No spam.</p>
              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

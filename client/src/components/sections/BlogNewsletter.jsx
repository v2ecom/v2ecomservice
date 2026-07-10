import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate a network request (2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For now, we just mark it as success (hook up a real API here later)
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-[100%] blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-10 md:p-16 text-center shadow-lg"
        >
          <div className="w-16 h-16 mx-auto bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
            <Send size={28} className="text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-poppins mb-4">
            Stay <span className="text-accent">Updated</span>
          </h2>

          <p className="text-lg text-muted mb-2 max-w-xl mx-auto">
            Never miss the latest marketplace insights, expert strategies, and business growth tips.
          </p>
          <p className="text-muted mb-10 max-w-xl mx-auto text-sm">
            Subscribe to our newsletter and receive valuable e-commerce resources, industry updates, and practical guides delivered directly to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-4 py-6"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-poppins">You're subscribed!</h3>
                <p className="text-muted">Thanks for joining! We'll send the latest insights straight to your inbox.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-muted underline hover:text-primary transition-colors"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary placeholder:text-muted/60 text-sm"
                  required
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {status !== 'success' && (
            <p className="mt-6 text-xs text-muted/70">
              Subscribe Today and Start Growing Smarter with V2 Ecom Services.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

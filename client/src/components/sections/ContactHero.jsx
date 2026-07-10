import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-base relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="w-12 h-[2px] bg-accent" />
          <p className="text-[14px] font-semibold text-muted tracking-widest uppercase">Contact Us</p>
          <div className="w-12 h-[2px] bg-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-primary font-poppins leading-[1.1] tracking-tight mb-8"
        >
          Let's Grow Your Ecommerce Business <span className="text-accent">Together</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-lg text-muted leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Have questions about selling on Amazon, Flipkart, or other marketplaces? Looking for expert support to increase your sales and streamline your marketplace operations?
          </p>
          <p>
            The team at V2 Ecom Services is here to help. Whether you're a new seller, an established brand, or a manufacturer planning to expand online, we'd love to discuss your business goals and recommend the right strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

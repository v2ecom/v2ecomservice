import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <p className="text-[15px] sm:text-[15px] font-semibold text-muted tracking-wide uppercase">
              Learn. Optimize. Grow.
            </p>
            <div className="w-12 h-[2px] bg-accent" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-primary font-poppins leading-[1.1] tracking-tight mb-8"
          >
            E-commerce Insights &<br />
            <span className="text-accent">Resources</span>
          </motion.h1>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              Welcome to the V2 Ecom Services Blog—your trusted resource for practical tips, marketplace updates, and proven strategies to help your e-commerce business succeed. Whether you're selling on Amazon, Flipkart, Meesho, or multiple marketplaces, our expert advice provides actionable insights to improve product visibility, increase sales, optimize advertising, and grow your brand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

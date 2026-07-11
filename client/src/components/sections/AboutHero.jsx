import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <p className="text-[15px] sm:text-[15px] font-semibold text-muted tracking-wide uppercase">
              About V2 Ecom Services
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-primary font-poppins leading-[1.1] tracking-tight mb-6 sm:mb-8"
          >
            Trusted<br />
            Marketplace Partner
          </motion.h1>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-xl text-muted leading-relaxed"
          >
            <p>
              At V2 Ecom Services, we are committed to helping businesses succeed across India's leading e-commerce marketplaces through expert guidance, proven strategies, and dedicated support.
            </p>
            <div className="bg-surface/50 p-6 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-3 text-xl">Our Recognitions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✅ Amazon SPN (Service Provider Network) Registered Partner*</li>
                <li className="flex items-center gap-2">✅ Flipkart Partner*</li>
              </ul>
            </div>
            <p>
              By following marketplace best practices and staying up to date with platform changes, we help sellers build sustainable growth and long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

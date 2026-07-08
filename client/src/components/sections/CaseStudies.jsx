import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const caseStudies = [
  {
    category: 'D2C Brand · Amazon',
    brand: 'Home Textiles',
    problem: 'A mid-sized textile manufacturer was selling exclusively through physical retail, struggling to reach customers beyond their region with zero online presence.',
    solution: 'We built their Amazon seller account from scratch, created optimized listings, launched targeted campaigns, and implemented inventory management via Amazon FBA.',
    result: 'Successfully launched and established a consistent sales channel. Expanded to Flipkart in month 4 with streamlined operations.',
    metrics: [
      { label: 'Marketplaces', value: '2', icon: '🛒' },
      { label: 'Catalog Status', value: 'Live', icon: '📦' },
      { label: 'Seller Rating', value: 'Healthy', icon: '⭐' },
    ],
    gradient: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    tag: '6-Month Journey',
  },
  {
    category: 'Wholesaler · Flipkart',
    brand: 'Kitchen Appliances',
    problem: 'An established kitchen appliance wholesaler had a stagnant Flipkart account with low visibility, poor catalog quality, and a declining seller score.',
    solution: 'Complete catalog revamp with professional photography brief, optimized listings, pricing strategy, and a full account health recovery plan.',
    result: 'Seller score significantly improved. Monthly order volume stabilized, and they successfully achieved Assured seller status.',
    metrics: [
      { label: 'Order Volume', value: 'Stable', icon: '📈' },
      { label: 'Seller Score', value: 'Improved', icon: '🏆' },
      { label: 'Account Status', value: 'Assured', icon: '⚡' },
    ],
    gradient: 'from-violet-600 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    tag: 'Account Recovery',
  },
  {
    category: 'Startup Brand · Meesho',
    brand: 'Fashion Apparel',
    problem: 'A bootstrapped fashion startup wanted to sell on Meesho but had no idea how to structure their catalog or handle high return rates typical in fashion.',
    solution: 'Guided GST registration, complete product onboarding with size-chart optimization, and implemented a return-rate reduction strategy.',
    result: 'Successfully launched and achieved consistent order flow. Return rate brought under control below the category average.',
    metrics: [
      { label: 'Order Flow', value: 'Consistent', icon: '🛍️' },
      { label: 'Return Rate', value: 'Reduced', icon: '↩️' },
      { label: 'Business State', value: 'Growing', icon: '✅' },
    ],
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    tag: 'Launch Story',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-dark relative overflow-hidden">
      {/* Dark background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Case Studies"
          title="Real Operations."
          highlight="Real Improvement."
          description="We focus on long-term operations. Here are a few stories from businesses we've helped onboard and manage on India's top marketplaces."
        />

        {/* Override text colors for dark bg */}
        <style>{`.cs-tag { color: #94a3b8 } .cs-title { color: #f1f5f9 } .cs-body { color: #94a3b8 } .cs-label { color: #64748b } .cs-val { color: #f1f5f9 }`}</style>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.brand}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${cs.gradient}`} />

              <div className="p-6">
                {/* Category + tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{cs.category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${cs.gradient} border border-white/10`}>
                    {cs.tag}
                  </span>
                </div>

                {/* Brand name */}
                <h3 className={`text-xl font-bold font-poppins mb-5 bg-clip-text text-transparent bg-gradient-to-r ${cs.gradient}`}>
                  {cs.brand}
                </h3>

                {/* P/S/R */}
                {[
                  { label: 'The Challenge', text: cs.problem },
                  { label: 'Our Approach', text: cs.solution },
                  { label: 'The Outcome', text: cs.result },
                ].map(({ label, text }) => (
                  <div key={label} className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                  </div>
                ))}

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-white/10">
                  {cs.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-lg font-bold text-white font-poppins">{metric.value}</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${cs.gradient} text-white flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                  Discuss Your Category <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          These examples represent typical operational improvements. Individual outcomes depend on product category and market conditions.
        </motion.p>
      </div>
    </section>
  );
}

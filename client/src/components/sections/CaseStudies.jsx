import { motion } from 'framer-motion';
import { 
  ArrowRight, Target, Globe, TrendingUp, Search, 
  Settings, PenTool, Database, MousePointerClick, 
  BarChart, Map, Box, Tag, Key, CheckCircle, 
  FileSearch, Ban, Repeat, Zap, Calendar, 
  Eye, ShoppingCart, Crosshair, Users, List, 
  Shirt, Home, Sparkles, HeartPulse, Baby, 
  Headphones, Coffee, Gift, Package, Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Data ────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    number: '01',
    title: 'Fashion Brand Growth',
    icon: Target,
    challenge:
      'A growing apparel brand had low product visibility, inconsistent sales, and underperforming product listings. Their advertising campaigns were generating limited returns.',
    solution: [
      { text: 'Optimized product titles, bullet points, and descriptions', icon: PenTool },
      { text: 'Performed comprehensive keyword research', icon: Key },
      { text: 'Improved product catalog quality', icon: Database },
      { text: 'Reorganized Amazon PPC campaigns', icon: Settings },
      { text: 'Optimized bids and advertising budgets', icon: BarChart },
      { text: 'Introduced regular performance reporting', icon: Calendar },
    ],
    results: [
      { text: 'Increased product visibility', icon: Eye },
      { text: 'Improved conversion rate', icon: MousePointerClick },
      { text: 'Higher return on advertising spend', icon: TrendingUp },
      { text: 'More consistent weekly sales', icon: ShoppingCart },
      { text: 'Better account performance', icon: Activity },
    ],
  },
  {
    number: '02',
    title: 'Multi-Marketplace Expansion',
    icon: Globe,
    challenge:
      'A manufacturer wanted to expand from a single marketplace to multiple online sales channels while maintaining consistent product information.',
    solution: [
      { text: 'Marketplace onboarding', icon: Globe },
      { text: 'Product catalog creation', icon: Box },
      { text: 'Listing optimization', icon: PenTool },
      { text: 'Pricing strategy implementation', icon: Tag },
      { text: 'Inventory planning', icon: Database },
      { text: 'Marketplace performance monitoring', icon: Activity },
    ],
    results: [
      { text: 'Successful expansion across multiple marketplaces', icon: Globe },
      { text: 'Consistent product catalog', icon: Box },
      { text: 'Increased customer reach', icon: Users },
      { text: 'Streamlined marketplace operations', icon: Settings },
      { text: 'Improved sales opportunities', icon: TrendingUp },
    ],
  },
  {
    number: '03',
    title: 'Amazon PPC Optimization',
    icon: TrendingUp,
    challenge:
      'A seller was spending heavily on advertising but achieving inconsistent results and a high advertising cost.',
    solution: [
      { text: 'Complete PPC account audit', icon: Search },
      { text: 'Search term analysis', icon: FileSearch },
      { text: 'Negative keyword implementation', icon: Ban },
      { text: 'Campaign restructuring', icon: Repeat },
      { text: 'Bid optimization', icon: Zap },
      { text: 'Weekly performance monitoring', icon: Calendar },
    ],
    results: [
      { text: 'Improved campaign efficiency', icon: Activity },
      { text: 'Better keyword targeting', icon: Crosshair },
      { text: 'Increased qualified traffic', icon: Users },
      { text: 'Improved advertising return', icon: TrendingUp },
      { text: 'Higher sales from optimized campaigns', icon: ShoppingCart },
    ],
  },
  {
    number: '04',
    title: 'Product Listing Optimization',
    icon: Search,
    challenge:
      'Several products were receiving impressions but generating very few orders due to poor listing quality.',
    solution: [
      { text: 'SEO-focused titles', icon: Search },
      { text: 'Enhanced bullet points', icon: List },
      { text: 'Improved product descriptions', icon: PenTool },
      { text: 'Keyword optimization', icon: Key },
      { text: 'Category and attribute corrections', icon: Box },
      { text: 'Listing quality improvements', icon: Sparkles },
    ],
    results: [
      { text: 'Better organic visibility', icon: Eye },
      { text: 'Higher click-through rate', icon: MousePointerClick },
      { text: 'Improved conversion rate', icon: Zap },
      { text: 'Increased customer engagement', icon: Users },
      { text: 'Stronger product discoverability', icon: Search },
    ],
  },
];

const approachSteps = [
  {
    step: '01',
    title: 'Business Analysis',
    description: 'We evaluate your current marketplace performance, identify opportunities, and understand your business goals.',
  },
  {
    step: '02',
    title: 'Marketplace Audit',
    description: 'Our experts analyze listings, keywords, advertising campaigns, pricing, competition, and account health.',
  },
  {
    step: '03',
    title: 'Strategy Development',
    description: 'We prepare a customized action plan focused on improving visibility, conversions, and profitability.',
  },
  {
    step: '04',
    title: 'Execution',
    description: 'Our team implements listing improvements, advertising optimization, catalog management, and operational enhancements.',
  },
  {
    step: '05',
    title: 'Continuous Improvement',
    description: 'We monitor results, provide regular reports, and refine strategies to achieve long-term growth.',
  },
];

const industries = [
  { name: 'Fashion & Apparel', icon: Shirt },
  { name: 'Home & Kitchen', icon: Home },
  { name: 'Beauty & Personal Care', icon: Sparkles },
  { name: 'Health & Wellness', icon: HeartPulse },
  { name: 'Baby & Kids Products', icon: Baby },
  { name: 'Electronics Accessories', icon: Headphones },
  { name: 'Lifestyle Products', icon: Coffee },
  { name: 'Gifts & Handicrafts', icon: Gift },
  { name: 'FMCG', icon: Package },
  { name: 'Consumer Products', icon: Box },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CaseStudies() {
  return (
    <div className="bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container-base relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <p className="text-[14px] font-semibold text-muted tracking-widest uppercase">Case Studies</p>
            <div className="w-12 h-[2px] bg-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-primary font-poppins leading-[1.1] tracking-tight mb-8"
          >
            Real Marketplace Growth.<br />
            <span className="text-accent">Measurable Results.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              At V2 Ecom Services, we focus on delivering measurable improvements for our clients across Amazon, Flipkart, and Meesho. Every business has unique challenges, so we develop customized strategies based on data, market trends, and business goals.
            </p>
            <p>
              Explore how we've helped sellers improve visibility, optimize advertising, and grow their online sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies (2x2 Grid Layout) ─────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="container-base relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {caseStudies.map((cs, i) => {
              const HeaderIcon = cs.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-surface border border-border rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all flex flex-col h-full"
                >
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-8 pb-8 border-b border-border">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <HeaderIcon size={32} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-accent tracking-widest uppercase mb-1 block">Case Study {cs.number}</span>
                      <h3 className="text-2xl font-bold text-primary font-poppins leading-tight">{cs.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 space-y-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Map size={16} className="text-accent" />
                        The Challenge
                      </h4>
                      <p className="text-muted leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-background rounded-2xl p-6 border border-border/50">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Settings size={16} className="text-accent" />
                        Our Solution
                      </h4>
                      <ul className="space-y-3">
                        {cs.solution.map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                              <ItemIcon size={16} className="text-primary/40 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mt-auto">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        The Results
                      </h4>
                      <ul className="space-y-3">
                        {cs.results.map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-primary/80">
                              <ItemIcon size={16} className="text-accent mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Approach (Timeline Layout) ───────────────────────────────── */}
      <section className="section-padding bg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-poppins mb-4">Our Approach</h2>
            <p className="text-muted leading-relaxed text-lg">
              Every project follows a proven process designed to deliver sustainable marketplace growth.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 lg:grid-cols-5 relative z-10"
            >
              {approachSteps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center lg:text-left flex flex-col items-center lg:items-start group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-poppins mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-primary font-poppins mb-3 text-lg">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industries (Elegant Grid with Icons) ─────────────────────────── */}
      <section className="section-padding bg-background relative">
        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-poppins mb-4">
              Industries We Have Worked With
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {industries.map((industry, i) => {
              const IndIcon = industry.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-surface border border-border rounded-xl p-5 text-center hover:border-accent hover:shadow-card transition-all cursor-default flex flex-col items-center justify-center gap-3 min-h-[120px] group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <IndIcon size={20} className="text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-primary">{industry.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-primary rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-8 leading-tight text-white">
                Ready to Become Our Next <span className="text-accent">Success Story?</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
                Whether you're launching a new product, improving an existing marketplace account, or scaling your business across multiple platforms, V2 Ecom Services is here to help.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Book a free consultation today and discover how our marketplace experts can help your business achieve sustainable growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-dark font-bold hover:bg-accent/90 transition-transform hover:scale-105 shadow-md"
              >
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

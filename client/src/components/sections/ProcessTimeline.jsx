import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Settings, Rocket, BarChart2, TrendingUp, PhoneCall
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    id: '01',
    icon: PhoneCall,
    title: 'Discovery & Audit',
    description: 'Book a strategy call with our experts. We analyze your business model, product category, target marketplaces, and set clear operational goals.',
    color: 'from-primary to-secondary',
    bg: 'bg-primary',
    duration: '1–2 Days',
  },
  {
    id: '02',
    icon: Settings,
    title: 'Account Setup & Compliance',
    description: 'We handle GST registration, seller account creation, brand authorization, and all legal compliance — everything done right the first time.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-500',
    duration: '3–7 Days',
  },
  {
    id: '03',
    icon: Rocket,
    title: 'Product Launch',
    description: 'Professional catalog creation, A+ content, optimized listings, pricing strategy, and initial advertising setup to ensure a high-impact launch.',
    color: 'from-cyan-500 to-teal-500',
    bg: 'bg-cyan-500',
    duration: '7–14 Days',
  },
  {
    id: '04',
    icon: BarChart2,
    title: 'Ongoing Management',
    description: 'Daily monitoring, order processing, returns handling, review management, performance optimization, and proactive account health maintenance.',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500',
    duration: 'Ongoing',
  },
  {
    id: '05',
    icon: TrendingUp,
    title: 'Scale & Grow',
    description: 'Data-driven growth strategies, expansion to new categories and marketplaces, advertising scale-up, and monthly reports to keep you ahead of competition.',
    color: 'from-accent to-emerald-500',
    bg: 'bg-accent',
    duration: 'Month 2+',
  },
];

function TimelineStep({ step, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex gap-6 lg:gap-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-100"
          />
        </div>
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow flex-shrink-0`}
      >
        <Icon size={20} className="text-white" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="flex-1 pb-10"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className={`text-xs font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
            Step {step.id}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-500">
            {step.duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-dark font-poppins mb-2">{step.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header + extra info */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              tag="How It Works"
              title="From Zero to"
              highlight="Marketplace Setup"
              description="We take your business from consultation to consistent marketplace operations."
              center={false}
            />

            {/* Extra context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/15"
            >
              <p className="text-sm text-slate-600 leading-relaxed">
                Most clients see <strong className="text-primary">significant operational improvement</strong> after onboarding. Our systematic approach helps new and existing sellers manage their catalog and orders efficiently.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Structured Onboarding', 'Clear Milestones', 'Continuous Optimization', 'Long-Term Partnership'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Settings, Rocket, BarChart2, TrendingUp, PhoneCall
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    id: '1',
    icon: PhoneCall,
    title: 'Business Consultation',
    description: 'We understand your products, business goals, and current marketplace performance.',
    duration: 'Phase 1',
  },
  {
    id: '2',
    icon: Settings,
    title: 'Marketplace Audit',
    description: 'Our team analyzes listings, keywords, advertising, competitors, pricing, and account health.',
    duration: 'Phase 2',
  },
  {
    id: '3',
    icon: Rocket,
    title: 'Growth Strategy',
    description: 'We prepare a customized action plan based on your business objectives.',
    duration: 'Phase 3',
  },
  {
    id: '4',
    icon: BarChart2,
    title: 'Execution',
    description: 'Our experts implement listing improvements, advertising campaigns, and operational optimizations.',
    duration: 'Phase 4',
  },
  {
    id: '5',
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'We monitor performance regularly and refine strategies to maximize growth.',
    duration: 'Ongoing',
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
            className="w-full h-full bg-border"
          />
        </div>
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={`relative z-10 w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center shadow-sm flex-shrink-0`}
      >
        <Icon size={20} className="text-primary" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="flex-1 pb-10"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className={`text-xs font-bold tracking-widest uppercase text-accent`}>
            Step {step.id}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary font-poppins mb-2">{step.title}</h3>
        <p className="text-muted text-sm leading-relaxed max-w-lg">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header + extra info */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              tag="Our Process"
              title="From Zero to"
              highlight="Marketplace Success"
              description="We take your business from initial audit to consistent marketplace growth with a proven 5-step approach."
              center={false}
            />

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

import { motion } from 'framer-motion';

export function SectionHeader({ tag, title, highlight, description, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase
                     bg-background text-primary border border-border mb-5"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4"
        style={{
          fontFamily:    'Inter, sans-serif',
          fontWeight:    700,
          fontSize:      'clamp(26px, 3.5vw, 34px)',
          lineHeight:    1.2,
          letterSpacing: '-0.02em',
          color:         '#243B6B',
        }}
      >
        {title}{' '}
        {highlight && <span className="text-accent">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-muted leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize:   'clamp(13px, 1.6vw, 15px)',
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

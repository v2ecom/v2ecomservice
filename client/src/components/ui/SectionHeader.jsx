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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-background text-primary border border-border mb-4"
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary font-poppins mb-4"
      >
        {title}{' '}
        {highlight && (
          <span className="text-accent">
            {highlight}
          </span>
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-muted text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

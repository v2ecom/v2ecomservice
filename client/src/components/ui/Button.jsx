import { motion } from 'framer-motion';


export function Button({ children, variant = 'primary', size = 'md', icon, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-accent text-dark shadow-sm hover:bg-accent/90 focus:ring-accent/50',
    secondary: 'bg-surface border border-border text-primary shadow-sm hover:border-primary/40 focus:ring-primary/20',
    outline: 'border border-border bg-transparent text-primary hover:bg-background hover:border-primary focus:ring-primary/20',
    ghost: 'text-text hover:bg-background focus:ring-border',
    dark: 'bg-primary text-surface hover:bg-primary/90 focus:ring-primary/30',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BD5C] hover:scale-[1.02] focus:ring-[#25D366]/40',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && icon}
    </motion.button>
  );
}

export function IconButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-lg transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

import { motion } from 'framer-motion';


export function Button({ children, variant = 'primary', size = 'md', icon, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-cyan hover:scale-[1.02] focus:ring-primary/50',
    secondary: 'bg-white border border-slate-200 text-dark shadow-sm hover:border-primary/40 hover:shadow-card hover:scale-[1.02] focus:ring-primary/20',
    outline: 'border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary focus:ring-primary/20',
    ghost: 'text-dark hover:bg-slate-100 focus:ring-slate-200',
    dark: 'bg-dark text-white hover:bg-dark-800 focus:ring-dark/30',
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

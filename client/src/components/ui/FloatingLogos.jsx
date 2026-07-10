import { motion } from 'framer-motion';
import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';

export default function FloatingLogos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Amazon Logo */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-20 md:w-32 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={amazonLogo} alt="" className="w-full h-auto object-contain" />
      </motion.div>

      {/* Flipkart Logo */}
      <motion.div
        className="absolute top-[60%] right-[15%] w-16 md:w-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <img src={flipkartLogo} alt="" className="w-full h-auto object-contain" />
      </motion.div>

      {/* Meesho Logo */}
      <motion.div
        className="absolute top-[30%] right-[25%] w-16 md:w-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <img src={meeshoLogo} alt="" className="w-full h-auto object-contain" />
      </motion.div>
    </div>
  );
}

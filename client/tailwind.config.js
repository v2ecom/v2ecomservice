/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          100: '#CFFAFE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        accent: {
          DEFAULT: '#22C55E',
          500: '#22C55E',
          600: '#16A34A',
        },
        amazon: '#FF9900',
        dark: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #ECFEFF 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0F172A 0%, #1e3a8a 50%, #0F172A 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(37, 99, 235, 0.15)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15)',
        'card': '0 4px 24px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 16px 48px rgba(15, 23, 42, 0.14)',
        'glass': '0 8px 32px rgba(15, 23, 42, 0.12)',
      },
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

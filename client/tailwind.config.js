/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#243B6B',
        accent: '#D8A028',
        background: '#FFFFFF',
        section: '#F8FAFC',
        surface: '#FFFFFF',
        text: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
        dark: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        amazon: '#FF9900', // Keep if used for logos
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}

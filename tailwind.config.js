/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gotam': {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          gold: '#c9a962',
          'gold-light': '#d4b978',
          'gold-dark': '#a88b4a',
          cream: '#f5f3ef',
          'cream-dark': '#e8e4dc',
          silver: '#c0c0c0',
          'silver-dark': '#8a8a8a',
        }
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'body': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'scale-in': 'scaleIn 1.2s ease-out forwards',
        'line-expand': 'lineExpand 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        lineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

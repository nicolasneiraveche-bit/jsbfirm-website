/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102443',
          50: '#F5F8FB',
          100: '#EAF0F6',
          200: '#D7E1EB',
          300: '#B8C7D7',
          400: '#8FA5BD',
          500: '#627D9F',
          600: '#3F638D',
          700: '#284A73',
          800: '#17335B',
          900: '#102443',
          950: '#09172D',
        },
        gold: {
          DEFAULT: '#1769C2',
          light: '#4288D2',
          dark: '#0D4D99',
          50: '#EEF5FD',
          100: '#DCEAFB',
          200: '#B9D2F2',
          300: '#75A9DF',
          400: '#1769C2',
          500: '#0D4D99',
          600: '#0A3D78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

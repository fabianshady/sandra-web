/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lavanda: {
          dark: '#6D5470',
          light: '#A292A9'
        },
        crema: '#EADCCE',
        verde: {
          light: '#AABAA6',
          dark: '#495B4E'
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        slideFade: 'slideFade 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        slideFade: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};
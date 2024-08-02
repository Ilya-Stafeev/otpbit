/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s linear infinite;',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { top: '0' },
          '50%': { top: '10px' },
        },
      },
      height: {
        'minus-136': 'calc(100vh - 136px)',
        'minus-87': 'calc(100vh - 87px)',
        'minus-60': 'calc(100vh - 60px)',
      },
      textAlign: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-align-inherit': {
          textAlign: 'inherit',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}
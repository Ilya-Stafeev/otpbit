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
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.list-item-before': {
          position: 'absolute',
          top: '0',
          left: '0',
          height: '39px',
          width: '39px',
          'background-image': "url('/src/shared/images/about-part/list-icon.png')",
          'background-repeat': 'no-repeat',
          content: "''",
          display: 'inline-block',
        },
        '.custom-pseudo::after': {
          content: "'/'",
          position: 'absolute',
          right: '1px',
          top: '0px',
          bottom: '0px',
          margin: 'auto 0',
          'font-size': '16px',
          color: '#fff',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
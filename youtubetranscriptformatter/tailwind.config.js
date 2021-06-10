const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '4.5': '4.5rem',
        '24': '24rem',
        '45': '45rem',
        '18.5': '18.5rem',
        '20': '20rem',
        '17.5': '17.5rem',
        '39.75': '39.75rem',
        
        
      }
    },

    colors: {
      navy: '#1a2b6d',
      gray: '#f2f2f2',
      red: '#ff0000',
      white: '#ffffff',
    },

    maxHeight: {
      '1/10': '10%',
      '1/2': '50%',
      '2/5': '40%',
      'full': '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
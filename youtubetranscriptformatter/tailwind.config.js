const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '70': '17.5rem',
      },
    },



    colors: {
      navy: '#1a2b6d',
      gray: '#f2f2f2',
      red: '#d41317',
      white: '#ffffff',
    },    
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
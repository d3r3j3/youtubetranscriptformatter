const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      spacing: {
        '62': '15.5rem',
        '50': '12.5rem',
        '88': '22rem',
        '70': '17.5rem',
        
      },
    },



    colors: {
      navy: '#1a2b6d',
      gray: '#f2f2f2',
      red: '#d41317',
      white: '#ffffff',
      lightnavy: '#546192',
      green: '#499557',
    },    
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
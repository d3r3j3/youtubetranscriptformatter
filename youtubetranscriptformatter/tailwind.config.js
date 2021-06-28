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
      darkgray: '#d9d9d9',
      red: '#d41317',
      white: '#ffffff',
<<<<<<< HEAD
      lightnavy: '#546192',
      green: '#499557',
    },    
=======
    },
    
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '-10': -10,
      'auto': 'auto',
    }
>>>>>>> 23f60226b1a409425da186f612fbf0206649300e
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
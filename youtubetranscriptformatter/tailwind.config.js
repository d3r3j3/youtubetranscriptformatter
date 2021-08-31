const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        
        '5': '5px',
        
      },

      spacing: {
        '22': '5.5rem',
        '50': '12.5rem',
        '88': '22rem',
        '70': '17.5rem',
        '12': '5.5rem',
        '0.75': '0.2rem',
      },

      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/10': '30%',
        '8/25': '32%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '6/11': '54.545455%',
      },
    },


    fontsize:{
      '1.5xl': '1.375rem',
    },


    colors: {
      navy: '#1a2b6d',
      gray: '#f2f2f2',
      darkgray: '#e1e1e1',
      black: '#000000',
      red: '#d41317',
      white: '#ffffff',
      green: '#51a661',
      lightnavy: '#566393',
      darkgreen: '#3e804a',
      brightorange: '#ffc824',
      golden: '#FFD700',
      orange: '#ff590d',
      alittledarkgray: '#e5e5e5',
      faintblue: '#ebebff',
      faintgreen: '#ffe5e5',
      darkergray: '#a6a6a6',
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
     '-20': -20,
     '-30': -30,
      'auto': 'auto',
    }
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
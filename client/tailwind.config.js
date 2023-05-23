// @type {import('tailwindcss').Config}
export default {
  content: [
    './**/*.jsx',
  ],
  theme: {
    screens: {
      'sm': { 'max': '576px' },
      'md': {'min': '577px', 'max': '960px'}
    },
    fontFamily: {
    },
    extend: {
      colors: {
        primary: '#14B8A6', //verde claro
        secondary: '#13505B', //verde oscuro
        white: '#F3F3F3' //variante de blanco
      }
    },
  },
  plugins: [],
}
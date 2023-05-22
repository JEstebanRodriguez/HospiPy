// @type {import('tailwindcss').Config}
export default {
  content: [
    './*.{html,jsx,js}',
    './pages/**/*.{html,jsx}',
    './components/**/*.{html.jsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      'sm': {'max': '576px'},
    },
    fontFamily:{
    },
    extend: {
    },
  },
  plugins: [],
}
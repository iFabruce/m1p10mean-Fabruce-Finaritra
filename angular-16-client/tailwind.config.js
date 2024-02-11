/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
    colors:{
      'prim': "#8F71FF",
      'sec': "#FF5D9E"
    },
    screens: {
      'sm': '360px',
      'md': '768px',

    },
    extend: {},
  },
  plugins: [],
}


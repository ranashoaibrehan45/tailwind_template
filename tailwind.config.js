/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : '#f87171',
        secondary : '#e7e5e4',
        my_color: '#4dcb7a',
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}


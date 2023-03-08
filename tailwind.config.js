/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        'red' : '#E50914',
      },
      fontFamily : {
        'body' : ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
}

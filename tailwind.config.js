/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/scripts/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}


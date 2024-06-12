/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       'sunny-spells': ['Sunny Spells', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

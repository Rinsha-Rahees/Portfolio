/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin : {
        '50px' : '50px'
      },
      width: {
        '133px': '133px',
      }
    },
    colors: {
      beige: {
        purple : '#F7EFE5',
        purple2 : '#E9D5CA',
        light : '#FFF2D8',
        med : '#EAD7BB',
        dark : '#BCA37F',
      },
      navyblue : {
        100 : '#113946',
        600 : '#06161c',
        700 : '#051115',
        800 : '#030b0e',

      },
    },
  },
  plugins: [],
}


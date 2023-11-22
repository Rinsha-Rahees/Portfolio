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
      },
    },
    colors: {
      grey: '#A9A9A9',
      lightgrey : '#DEE4ED',
      blue : {
        dark : '#0F1A32',
        greenish : '#132C3B',
        neon : '#53D0D3',
        peacock : '#0B666A',
        teal : '#35A29F',
        light : '#C8D3EC',
        600 : '#06161c',
        700 : '#051115',
        800 : '#030b0e',

      },
    },
  },
  
  plugins: [],
}


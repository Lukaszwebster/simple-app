/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'luckiestguy': ['Luckiest Guy', 'cursive']
      },
      backgroundColor:{
        'lightgreymain': '#ECECEC'
      }
    },
  },
  plugins: [],
}


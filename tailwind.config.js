/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'warm-purple': {
          100: 'rgb(179, 30, 162)',
        },
        'cornflower-blue': '#5495fd', 
        'blue-marguerite': '#8567C3',
        'smokey-grey': '#727272',
        'onyx': {
          100: '#101010',
          200: '#111111',
          300: '#121212',
        },
        'dark-jungle-green': '#1f1f1f',
        'tealish-green': {
          100: '#27c762',
          200: '#1fde64',
        },
        'baltic-sea': '#292929',
        'testing': '#535657',
        'black-transparent': 'rgba(0,0,0,0.5)',
      },
      height: {
        'middleScrollbarHeight': '97%',
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
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
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundColor: {
      'orange': 'rgb(255, 135, 0)',},
      fontSize: {
        'customlarge': '30px',
        '14': '14px',
      },
      textColor: {
        'customgray': 'rgb(146, 146, 146)',
      },
      
  },
},
  plugins: [],
}
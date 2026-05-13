/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'paimary':"#6A4DF4",
         'secondary':"#737373"
      },
    fontFamily: {
        'Inter':["Inter", "sans-serif"],
      },
         fontSize: {
          ul:"20px",
          p:"16px",
          c:"25px",
          d:"35px",
          title:"45px",

         },
      padding: {
        '15px': '15px',
      }
  },
  plugins: [],
}
}
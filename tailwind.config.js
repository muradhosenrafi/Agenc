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
         'secondary':"#737373",
         'box':"#F8F6FE",
         "font":"#151515",
         "sec":"#F3F3F3",
         'star':"#FFAC4A",
         'reviews':'#F9BD2C',
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
          des:'75px',
          r:"50px",

         },
           lineHeight: {
        'line-haight': '26px',
        'desc':'120%'
      },
    maxWidth:{
      'container':'1320px',
    },
          padding: {
        'pad': '85px',
      },
            boxShadow: {
        'box': '6px 6px 35px 0px rgba(0, 0, 0, 0.10)',
        'boxone': '0px 15px 60px 0px rgba(0, 0, 0, 0.10)',

      }
  },
  plugins: [],
}
}
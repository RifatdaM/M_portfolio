/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
      },
      colors:{
        primary: "#0AA1DD",
        secondaryText:"#6D6D6D",
        secondary:"#393939",
        footerText:"#C8C8C8",
        light:"#F2FAFD",
      },
      
    },
  },
  plugins: [],
}

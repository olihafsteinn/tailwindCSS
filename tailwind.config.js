/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors:{
        blue: "#73c8e2",
        green: "#a0eed2",
        gray: "#454545"
      }
  },
  plugins: [],
}
}
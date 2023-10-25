/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
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
      },
      spacing:{
        '350': '21rem',
        '525': '32rem',
        '432': '27rem',
      },
  },
  plugins: [],
}
}
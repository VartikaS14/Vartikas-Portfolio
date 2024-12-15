/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",//background
        secondary: "#aaa6c3",
        tertiary: '#2C2C2C',
        "black-100": "#1E1E1E",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 15px 20px -10px #FF6F00",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.png')",
      },
      education:
      {
        ed:'bg-gradient-to-t from-[#0000] to-[#FF6F00]',
      }
    },
  },
  plugins: [],
};
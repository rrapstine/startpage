// const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        lg: "1.5rem",
      },
      backgroundImage: {
        home: "url('/src/assets/images/bg-image.webp')",
      },
      colors: {
        gray: "#BBBBBB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

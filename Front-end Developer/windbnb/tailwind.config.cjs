/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": "300px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    // screens: {
    //   "2xl": { max: "1536px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1280px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1024px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "768px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "640px" },
    //   // => @media (max-width: 639px) { ... }
    //   xs: { max: "475px" },
    //   // => @media (max-width: 474px) { ... }
    //   "2xs": { max: "300px" },
    //   // => @media (max-width: 299px) { ... }
    // },
    extend: {
      fontFamily: {
        material: ["Material Icons"],
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

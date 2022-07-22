/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "media-hover": { raw: "(hover: hover) and (pointer: fine)" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        material: ["Material Icons"],
      },
    },
  },
  plugins: [],
};

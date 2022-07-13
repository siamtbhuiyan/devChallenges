/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        material: ["Material Icons"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntuMono: ["Ubuntu Mono", "monospace"],
        montserrat: ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    },
  },  
}

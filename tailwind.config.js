/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        mainbackground: "hsl(222, 26%, 31%)",
        keypadbackground: "hsl(223, 31%, 20%)",
        screenbackground: "hsl(224, 36%, 15%)",
        keybackground: "hsl(30, 25%, 89%)",
        // keybackgrounds: "hsl(30, 25%, 91%)",
        Grayishorange: "hsl(28, 16%, 65%)",
        hslcolor: 'hsl(28, 16%, 70%)',
        hslcolor1: 'hsl(224, 28%, 35%)',
        Desaturateddarkblue : 'hsl(225, 21%, 49%)',
        Redcolor : 'hsl(6, 63%, 50%)',
        Darkredcolor: 'hsl(6, 70%, 34%)'
      },
      fontFamily:{
        libre:['"League Spartan"']
      },
      borderColor: {
        shadow:"0 4px 6px -1px hsl(28, 16%, 70%)"
      }
    },
  },
  plugins: [],
  
}


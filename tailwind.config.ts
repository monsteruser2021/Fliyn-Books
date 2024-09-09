/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nerko: [
          "Nerko One", "cursive",
        ],
        lili: [
          "lilita One", "sans-serif", 
        ],
        itim: [
          "Itim", "cursive",
        ],
      },
      colors:{
        primary: '#FF2929',
        secondary: '#EE0000',
      },
      container: {
        center: true,
        padding:{
          default: '1rem',
          sm: '3rem'
        }
      }
    },
  },
  plugins: [],
}
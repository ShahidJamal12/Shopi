/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-girl": "url('https://static.vecteezy.com/system/resources/previews/046/934/608/large_2x/shopping-girl-standing-on-transparent-background-free-png.png')"
      },
      screens:{
        "mini": "841px",
        "minii": "1023px"
      }
    },
  },
  plugins: [],
}


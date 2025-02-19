/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Lato': ['"Lato"',"serif"],
      },
      boxShadow: {
        100: ' 10px 10px 10px #090909,-10px -10px 10px  #252323',
        200: ' 0px 0px 25px -6px #F9D03F',
      },
    },
  },
  plugins: [],
}


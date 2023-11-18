/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 39px rgba(0, 0, 0, 0.14)',
      },
      colors: {
        'spider-red': "#E31C23",
        'spider-red-darker': "#DA0F16",
      },
      
    },
  },
  plugins: [],
}


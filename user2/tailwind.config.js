/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#EABB40",
        dark: {
          100: "#42444C",
          200: "#2C2E34",
          250: "#27282B",
          // 200: "#2F3137",
          300: "#212224",

        },

        text: {
          100: "#BCBCBC",
          200: "#A6A7A7",
          300: "#D2D2D2",
          400: "#929292"
        },

        border: "#929292"
      },
    },
  },
  plugins: [],
}
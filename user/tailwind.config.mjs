/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        dark: "#212F4F",
        primary: "#fb6068",
        secondary: "#3ea380",
        blue: {
          700: "#212f4f",
        },
        green: {
          100: "#eef6f3",
          200: "#cde6d8",
          300: "#65b599",
          400: "#3ea380", // secondary
          500: "#328266",
        },
        red: {
          100: "#fff0f1",
          200: "#fdc3c6",
          300: "#fc969b",
          400: "#fb6068", // primary
          500: "#d3434a",
        },
        yellow: {
          100: "#fdf8f1",
          200: "#faeddb",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

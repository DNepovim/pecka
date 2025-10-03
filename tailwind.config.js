/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      head: "Amatic SC, serif",
      text: "Montserrat",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "20rem",
      md: "40rem",
      lg: "60rem",
      xl: "80rem",
      "2xl": "100rem",
    },
    extend: {
      colors: {
        brand: {
          first: "#a6060e",
          second: "#ffe8ca",
        },
        yellow: {
          first: "#f2dd80",
          second: "#e8dd2f",
        },
        blue: {
          first: "#08c4be",
          second: "#052f32",
          thirdt: "#0074BC",
        },
        beige: { first: "#f6f6e9" },
        red: { first: "#ff0000" },
        clay: { first: "#C8968A" },
        brown: { first: "#7b492e" },
      },
      keyframes: {
        swing: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(-5deg)",
          },
          "20%": {
            transform: "rotate(10deg)",
          },
          "30%": {
            transform: "rotate(-10deg)",
          },
          "40%": {
            transform: "rotate(10deg)",
          },
          "50%": {
            transform: "rotate(-10deg)",
          },
          "60%": {
            transform: "rotate(10deg)",
          },
          "70%": {
            transform: "rotate(-5deg)",
          },
          "80%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        swing: "swing 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

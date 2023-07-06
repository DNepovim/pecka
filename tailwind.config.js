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
    },
    extend: {
      colors: {
        orange: {
          first: "#e87330",
        },
        yellow: {
          first: "#f2dd80",
          second: "#e8dd2f",
        },
        blue: {
          first: "#08c4be",
          second: "#052f32",
        },
        beige: { first: "#f6f6e9" },
        red: { first: "#ff0000" },
      },
    },
  },
  plugins: [],
};

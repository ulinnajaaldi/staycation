/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#152C5B",
        secondary: "#3252DF",
        abu: "#B0B0B0",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
